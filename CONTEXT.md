# CONTEXT.md — Castellor

Contexte de travail pour toute session (humaine ou Claude Code) reprenant ce
projet. Complète [README.md](README.md), qui décrit le produit ;
[CHANGELOG.md](CHANGELOG.md) suit son évolution.

- **Dernière mise à jour** : 2026-08-26
- **Version applicative** : 0.1.0 — *Prototype v1*
- **Version de la documentation** : 1.0.0
- **Dépôt Git** : https://github.com/nouhailler/castellor (public)
- **Licence** : MIT

---

## 1. Intention du produit

Castellor recense les châteaux de France pour un usage **en déplacement, en
voiture**. Trois partis pris structurent tout le reste :

1. **La carte est l'écran d'accueil**, pas une vue secondaire.
2. **La fiche s'ouvre sur sa photo** — l'image porte l'identification du lieu.
3. **Le texte reste lisible sans réseau** — le hors connexion dégrade l'image,
   jamais le contenu.

Le public visé est le voyageur qui repère un édifice depuis la route et veut
savoir en dix secondes ce que c'est, de quand ça date, et si ça se visite.

## 1 bis. Deux artefacts, une source

Le dépôt produit **deux choses à partir d'un seul fichier** :

| Artefact | Fichier | Pour qui |
| --- | --- | --- |
| Le canvas de conception | `Castellor.dc.html` | L'outil Claude Design |
| L'application installable | `index.html` | Les navigateurs, Netlify |

`index.html` est **généré** par `tools/build-pwa.py`. Ne jamais l'éditer :
la prochaine génération écrase tout. On modifie le canvas, puis on régénère.

Le script s'appuie sur quatre marqueurs posés dans le canvas — les déplacer ou
les supprimer casse la génération, qui s'arrête alors avec un message explicite
plutôt que de produire une page fausse :

| Marqueur | Rôle |
| --- | --- |
| `data-canvas-frame` | L'enveloppe de la planche — devient un bloc plein écran |
| `data-app-root` | Le cadre du téléphone — devient l'application, `100dvh` |
| `data-canvas-only` | Ce qui ne part pas en production (barre d'état, annotations) |
| `data-tabbar` | La barre d'onglets — reçoit la zone sûre Android |

## 2. Nature du dépôt

Ce n'est **pas** une application web classique. C'est un **canvas Claude
Design** : `Castellor.dc.html` est à la fois la maquette visuelle et
l'implémentation fonctionnelle.

Conséquences pratiques :

- Le fichier mélange du HTML de mise en page, des balises propres au runtime
  (`<x-dc>`, `<helmet>`, `<sc-if>`, `<sc-for>`, `<x-import>`) et une classe
  `DCLogic` dans un `<script type="text/x-dc">`.
- Les valeurs sont injectées par interpolation `{{ nom }}`, résolue par la
  méthode `renderVals()` de la classe. **Toute nouvelle donnée affichée doit
  être retournée par `renderVals()`** — il n'y a pas d'autre chemin.
- Les `hint-placeholder-*` sur `<sc-if>` / `<sc-for>` servent au rendu de
  l'éditeur visuel, pas à l'exécution.
- L'artboard fait 430 × 900 px et est encadrée d'une colonne d'annotations de
  330 px (« Ce qui marche déjà », « Hypothèses à valider », « Prochaines
  étapes »). **Cette colonne fait partie du canvas** : la tenir à jour en même
  temps que le code, c'est elle que voit le lecteur du prototype.

`support.js` est le runtime Claude Design, **généré** (`dc-runtime`). Ne jamais
l'éditer à la main.

## 3. Architecture

```
Castellor.dc.html
├── <helmet>            Leaflet CDN (SRI), design system, scripts de données
├── artboard 430×900
│   ├── en-tête         recherche · bascule réseau · filtres
│   ├── zone centrale   3 vues superposées, commutées par l'onglet actif
│   │   ├── carte       <castellum-map> + surcouches + carte de sélection
│   │   ├── liste       display: block / none
│   │   └── hors-ligne  display: block / none
│   ├── feuille filtres <sc-if sheetOpen>
│   ├── fiche détail    <sc-if detailOpen>, par-dessus tout, z-index 20
│   └── barre d'onglets
├── colonne d'annotations 330px
└── <script type="text/x-dc">  class Component extends DCLogic
```

**Répartition des responsabilités :**

| Fichier | Rôle | Contrat |
| --- | --- | --- |
| `Castellor.dc.html` | UI + état + logique métier | Seul détenteur de l'état |
| `castellum-map.js` | `<castellum-map>` : rendu Leaflet | API impérative, ne connaît rien du filtrage |
| `chateaux-data.js` | Données, en globales `window.*` | Aucune logique |
| `support.js` | Runtime `.dc.html` | Généré, intouchable |
| `_ds/nocturne-…/` | Design system | Source des tokens CSS |

### Le pont vers la carte

`<castellum-map>` est un Custom Element autonome, piloté **impérativement** —
pas par attributs ni par props :

```js
el.setData(list)            // liste filtrée à afficher
el.setSelected(id)          // marqueur mis en avant
el.setSatellite(bool)       // Esri au lieu d'OSM
el.setOffline(bool)         // désature et atténue les tuiles ; coupe le satellite
el.setUserPos(lat, lng)     // repère utilisateur + cercle de 18 km
el.flyTo(lat, lng, zoom)
el.fitAll()
el.onSelect = (id) => {}    // callback de clic sur marqueur
```

Le raccordement se fait dans `_hook()`, appelé depuis `componentDidMount()` **et
`componentDidUpdate()`** : à chaque rendu, l'état React est repoussé vers la
carte. `_hook()` se réessaie toutes les 150 ms tant que l'élément n'est pas dans
le DOM, et pose un drapeau `el._bound` pour ne brancher `onSelect` qu'une fois.

**Attention** : c'est un pont à sens unique et non idempotent côté rendu —
`render()` de la carte vide et reconstruit tous les marqueurs à chaque appel.
Avec 35 points c'est indolore ; à 500 il faudra une mise à jour différentielle.

## 4. État de l'application

Tout l'état vit dans `Component.state` :

| Clé | Rôle |
| --- | --- |
| `tab` | `carte` \| `liste` \| `reglages` |
| `q`, `filters` | Recherche et filtres (4 groupes de tableaux) |
| `sheetOpen`, `selectedId`, `detailId` | Navigation dans les surcouches |
| `online`, `satellite` | Simulation réseau et fond de carte |
| `editing`, `draft`, `newEvent` | Mode édition en cours |
| `drafts` | Contributions enregistrées, persistées |
| `photos` | URL de photos résolues, persistées |
| `userPos`, `sortByDist`, `copied` | Géolocalisation et retours d'interface |

Deux méthodes portent la logique métier :

- **`visible()`** — applique drafts, recherche et filtres, et renvoie la liste
  affichée. Utilisée à la fois par la carte, la liste et le compteur.
- **`record(c)`** — superpose la contribution locale à la fiche d'origine
  (`Object.assign({}, c, draft)`). Toute lecture d'une fiche doit passer par là,
  sinon les contributions ne s'affichent pas.

## 5. Conventions

- **Langue** : toute l'interface, les données, les commentaires de code et la
  documentation sont en **français**. S'y tenir.
- **Design system** : les couleurs, espacements, rayons et ombres viennent des
  tokens de `_ds/nocturne-…/styles.css` (`var(--color-*)`, `var(--radius-*)`,
  `var(--shadow-*)`). Les classes `.btn`, `.tag`, `.input`, `.field` existent —
  les réutiliser plutôt que d'en inventer. Voir `_ds/nocturne-…/readme.md`.
- **Exception assumée** : les valeurs calculées en JavaScript (`ACC`, `DIV`, les
  couleurs de marqueurs dans `castellum-map.js`) répètent les hexadécimaux en
  dur, parce qu'elles sortent du CSS. Si un token change, **ces valeurs ne
  suivront pas** — c'est le principal point de dérive du thème.
- **Accent** : `#9184d9`. Divider : `rgba(233,233,237,.16)`. Gris ruines :
  `#b2b6ca`.
- Pas de dépendance ajoutée sans raison forte : aujourd'hui, **Leaflet
  seulement**, chargé par CDN avec intégrité SRI.

### Incohérence de nommage à connaître

Le produit s'appelle **Castellor**, mais le code utilise majoritairement
**`castellum`** : `window.CASTELLUM`, `window.CASTELLUM_FILTERS`,
`window.CASTELLUM_WIKI`, `castellum-map.js`, `<castellum-map>`, et la clé de
stockage `castellum-drafts`. Seule la clé `castellor-photos-v2` suit le nom du
produit.

Un renommage casserait les contributions déjà enregistrées sur les appareils.
Si on le fait, prévoir une migration de `castellum-drafts` vers la nouvelle clé.

## 6. Décisions prises, et pourquoi

- **Photos non embarquées, résolues depuis Wikipédia.** Éviter de verser des
  images au dépôt et de trancher les licences trop tôt. Le prix : un premier
  affichage dépendant du réseau, et une dépendance à la stabilité de l'API.
- **Passage par `Special:FilePath`** plutôt que par l'URL de vignette renvoyée
  par l'API : `upload.wikimedia.org` s'est révélé inaccessible depuis
  l'environnement d'exécution. Le nom de fichier est extrait par expression
  régulière de l'URL de vignette, puis re-servi par le wiki d'origine. Le code
  gère Commons et Wikipédia fr ; en pratique, **les 35 fichiers sont sur
  Commons**. **C'est fragile** : si le format d'URL change, toutes les photos
  disparaissent silencieusement.
- **Attribution photo non affichée** — les 35 clichés sont libres, mais 32
  exigent de citer auteur et licence. Les métadonnées viennent de la même API
  que les images (`prop=imageinfo&iiprop=extmetadata`) : le correctif consiste à
  les récupérer avec les URL, dans `_loadPhotos()`. Audit et script :
  [PHOTOS.md](PHOTOS.md), `tools/audit-licences-photos.py`.
- **Bascule réseau manuelle** plutôt que `navigator.onLine` : on veut pouvoir
  démontrer le mode hors connexion à volonté, sans couper le Wi-Fi.
- **Contributions en `localStorage`, jamais envoyées.** Pas de serveur, donc pas
  de compte, pas de modération, pas de RGPD à ce stade. L'interface annonce une
  validation à la reconnexion : **c'est une promesse, pas une fonctionnalité**.
- **Repli géographique silencieux** sur Tours (47.3941, 0.6848) quand la
  géolocalisation échoue : la démonstration ne se bloque jamais. En production,
  c'est à remplacer par un message explicite — l'utilisateur croit aujourd'hui
  être localisé alors qu'il ne l'est pas.
- **`preferCanvas: true`** sur Leaflet, en anticipation des 500 marqueurs.
- **Poids de la base mesuré à l'exécution** (`JSON.stringify(DATA()).length`)
  plutôt qu'écrit en dur : la valeur suit le jeu de données au lieu de dériver.
  Elle affiche « 0 ko » tant que `chateaux-data.js` n'est pas chargé.

## 7. Écarts entre ce qui est annoncé et ce qui est fait

**Corrigés le 2026-08-26** (détail dans le [CHANGELOG](CHANGELOG.md)). Deux
bugs de code — le tri alphabétique et les étiquettes de qualité photo — et cinq
textes d'interface qui promettaient plus que ce qui existe. Le principe retenu :
**l'interface ne décrit que ce que le code fait réellement**, et les
fonctionnalités à venir sont annoncées comme telles.

| Avant | Après |
| --- | --- |
| « Fond de carte en cache — 4 niveaux de zoom » | « Aucun cache de tuiles pour l'instant : le fond de carte n'affiche que ce que le navigateur a déjà chargé. » |
| « Plan masse et extrait cadastral disponibles hors-ligne » | « Plan masse et cadastre référencés dans les sources — visionneuse à venir » |
| « proposées à la validation à la reconnexion » | « aucune remontée vers un serveur n'existe à ce stade » |
| « 1,8 Mo · synchronisé » en dur | Poids mesuré à l'exécution, « livrée avec l'application » |
| « 400 px · ~38 ko/fiche · N vignettes en cache » | « 400 px · servies par Wikimedia · N adresses résolues » |
| Étiquettes « HD 1600 » / « BR 480 » | « HD 1280 » / « BR 400 » |
| Bouton « Trier A→Z » sans effet | Tri réel par `localeCompare` en français |
| `chateaux-data.js` : « 30 châteaux » | « 35 châteaux » |

**À surveiller** : ces textes redeviendront faux le jour où le service worker,
la visionneuse de plans ou la remontée des contributions arriveront. Les mettre
à jour **dans le même changement** que la fonctionnalité, pas après.

### Note sur le tri alphabétique

Le tri porte sur le nom affiché, tel quel. Conséquence : « Château royal
d'Amboise » se classe à *royal* et non à *Amboise*, et les six fiches qui ne
commencent pas par « Château » (Cité de Carcassonne, Forteresse de Salses,
Manoir d'Ango…) se dispersent dans la liste. C'est la lecture littérale de
« A→Z ». Si on veut classer sur la partie distinctive du nom, il faudra ignorer
les qualificatifs de tête — décision non prise à ce jour.

## 8. Feuille de route

**Court terme — rendre vraies les promesses de l'interface**

1. ~~`manifest.webmanifest` + service worker~~ — fait le 2026-08-26. Le projet
   est installable sur Android et déployable sur Netlify.
2. ~~Corriger les écarts du §7~~ — fait le 2026-08-26.
3. Message explicite en cas de refus de géolocalisation.

**Moyen terme — le fond**

4. Import **Wikidata** (identités, coordonnées) et **POP / Mérimée** (statut
   patrimonial) pour passer de 35 à ~500 fiches. La structure de données est
   déjà taillée pour ça.
5. ~~Vérification des licences photo, fiche par fiche~~ — faite le 2026-08-26,
   voir [PHOTOS.md](PHOTOS.md). **Reste à faire** : afficher l'auteur et la
   licence de chaque cliché, exigés par 32 des 35 photographies.
6. Renseigner `liens` — aucune fiche n'en a aujourd'hui.
7. Visionneuse photo plein écran, avec bascule BR / HD explicite.

**Plus loin**

8. Écran d'itinéraire : « les 8 châteaux sur ma route ».
9. Visionneuse de plans et de cadastres.
10. Mécanisme réel de remontée des contributions.

**Chantiers transverses non ouverts** : tests automatisés, mentions légales et
politique de confidentialité (contenus juridiques — **validation humaine
obligatoire**).

Le code est sous **licence MIT** depuis le 2026-08-26. Cette licence ne couvre
que le code écrit pour ce projet : le runtime `support.js`, le design system
`_ds/`, les fonds de carte et les photographies gardent leurs conditions
propres (tableau dans le [README](README.md#licence)). Si le jeu de données
grossit par import Wikidata / POP, sa licence devra être traitée séparément —
une base de données n'est pas du code.

## 9. Règle documentaire

> Documentation : suivre `DOCUMENTATION_SPEC.md`. Une tâche n'est « done » que
> si la doc est à jour.

La spécification de référence est [`DOCUMENTATION_SPEC.md`](DOCUMENTATION_SPEC.md),
à la racine du projet — c'est **elle** qui fait foi, et non la copie du skill
`doc-engine` dont elle est issue (standard PWA v1.2.0, adoptée le 2026-08-26).
Elle est versionnée avec le code : si le standard du skill évolue, reporter les
changements ici sciemment plutôt que d'écraser le fichier.

Toute modification fonctionnelle entraîne la vérification de : la fonctionnalité
concernée dans le README, ses paramètres, ses permissions, son comportement hors
connexion, ses erreurs, les limites connues, et le CHANGELOG.
