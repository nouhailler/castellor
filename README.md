# Castellor

**Recensement des châteaux de France, pensé pour la voiture.** La carte est
l'écran d'accueil, la fiche s'ouvre sur sa photo, et tout le texte reste
lisible sans réseau.

- **Version** : 0.1.0 — *Prototype v1*
- **Statut** : prototype interactif (maquette Claude Design), **pas encore une
  PWA installable** — voir [Limites connues](#limites-connues)
- **Langue** : français
- **Licence** : [MIT](LICENSE)
- **Documentation** : suit `DOCUMENTATION_SPEC.md` (voir [CONTEXT.md](CONTEXT.md))

---

## Sommaire

- [Ce que fait l'application](#ce-que-fait-lapplication)
- [Lancer le prototype](#lancer-le-prototype)
- [Les trois onglets](#les-trois-onglets)
- [Fonctionnalités](#fonctionnalités)
- [Données](#données)
- [Stockage local](#stockage-local)
- [Permissions](#permissions)
- [Réseau et mode hors connexion](#réseau-et-mode-hors-connexion)
- [Structure du projet](#structure-du-projet)
- [Limites connues](#limites-connues)
- [Crédits et licences](#crédits-et-licences)

---

## Ce que fait l'application

Castellor affiche **35 châteaux français géolocalisés** sur une carte sombre.
Chaque château dispose d'une fiche détaillée : période de construction,
architecte, propriétaires successifs, événements historiques, description
architecturale, statut patrimonial et conditions d'accès.

L'application est conçue pour un usage en déplacement : elle bascule en mode
hors connexion, où les fiches texte restent intégralement consultables et les
photos passent en vignettes basse résolution mises en cache.

## Lancer le prototype

Le prototype est un **canvas Claude Design** (`Castellor.dc.html`). Il ne se
lance pas comme un site statique classique : il a besoin du moteur de rendu
`.dc.html` pour interpréter les balises `<x-dc>`, `<sc-if>`, `<sc-for>` et le
bloc `<script type="text/x-dc">`.

Ouvre `Castellor.dc.html` dans l'environnement Claude Design qui a servi à le
créer. Une connexion réseau est nécessaire au premier affichage pour charger
Leaflet et récupérer les photos (voir [Réseau](#réseau-et-mode-hors-connexion)).

> **À vérifier** : aucun script de build, `package.json`, serveur de
> développement ni configuration de déploiement n'est présent dans le dépôt. La
> procédure de mise en ligne reste à définir.

## Les trois onglets

La barre de navigation basse comporte trois onglets. Changer d'onglet ferme la
fiche ouverte et sort du mode édition.

| Onglet | Contenu |
| --- | --- |
| **Carte** | Carte Leaflet plein écran, marqueurs, carte de sélection |
| **Liste** | Les châteaux filtrés, en liste avec vignette |
| **Hors-ligne** | État des données, sources, contributions locales |

## Fonctionnalités

### Recherche

Le champ en haut de l'écran filtre sur : le nom du château, ses **variantes
historiques**, la commune, le département et la région historique. La recherche
est insensible à la casse et fonctionne par correspondance partielle. Elle
s'applique simultanément à la carte et à la liste.

### Filtres

Le bouton **Filtres** ouvre une feuille depuis le bas de l'écran. Quatre
groupes :

| Groupe | Valeurs |
| --- | --- |
| **Époque** | Xe – XIIe s. · XIIIe – XVe s. · XVIe – XVIIe s. · XVIIIe s. et + |
| **Type** | château · château-fort · forteresse · manoir · maison forte · motte castrale · palais · domaine · ruines · enceinte fortifiée |
| **État actuel** | Intact / restauré · Bon état · Partiellement ruiné · Ruines · Vestiges |
| **Accès** | Ouvert au public · Visite partielle · Privé, non visitable · Extérieurs uniquement |

Plusieurs valeurs d'un même groupe se cumulent (**OU**) ; les groupes se
combinent entre eux (**ET**). Un château correspond au filtre Époque si l'un de
ses siècles tombe dans l'intervalle choisi.

Le nombre de filtres actifs s'affiche en pastille sur le bouton. **Tout
réinitialiser** vide les quatre groupes **et** le champ de recherche.

### Carte

- Fond **OpenStreetMap** assombri par filtre CSS (inversion + rotation de
  teinte), ou **satellite Esri World Imagery**.
- Les marqueurs sont des pastilles : accent violet pour les édifices debout,
  gris translucide pour les ruines et vestiges (`type = ruines`, ou état
  `Ruines` / `Vestiges`).
- Le marqueur sélectionné grossit et reçoit un halo.
- Un clic sur un marqueur ouvre la **carte de sélection** en bas de l'écran
  (photo, nom, commune, département, type, état), avec « Ouvrir la fiche ».
- **France entière** recadre la carte sur l'ensemble des châteaux visibles.
- Les contrôles de zoom sont en bas à droite.

### Autour de moi

Demande la position de l'appareil, place un repère et un cercle de 18 km, centre
la carte au zoom 8 et trie la liste par distance croissante.

Si la géolocalisation est refusée ou indisponible, l'application se replie
**silencieusement** sur une position par défaut (47.3941, 0.6848 — région de
Tours) et se comporte comme si la position était connue.

### Liste

Chaque ligne affiche vignette, nom, commune · département, type et siècles. Par
défaut, la liste est triée **alphabétiquement** sur le nom (comparaison
française, insensible à la casse et aux accents). Une fois la position connue,
la distance en kilomètres s'ajoute à droite et le lien en haut bascule entre
« Trier par distance » et « Trier A→Z ».

Si aucun château ne correspond, un lien **Réinitialiser les filtres** est
proposé.

### Fiche détaillée

La fiche s'ouvre par-dessus l'onglet courant, photo en tête (296 px), et
contient :

- les étiquettes type / siècles / état ;
- le nom et les variantes historiques (« Aussi appelé : … ») ;
- **Période**, **Siècles**, **Architecte / constructeur** ;
- **Localisation** : commune, département, région historique, coordonnées GPS à
  4 décimales ;
- **Propriétaires et familles** ;
- **Événements historiques** ;
- **Description architecturale** + styles + état actuel ;
- **Statut patrimonial**, conditions d'accès, liens officiels ;
- une ligne de provenance des sources.

Deux actions : **Voir sur la carte** (ferme la fiche, centre la carte au zoom
13) et **Copier GPS** (copie `latitude, longitude` dans le presse-papiers, le
bouton affiche « Copié » pendant 1,4 s).

### Édition et contributions locales

Le bouton **Modifier** en haut de la fiche ouvre le mode édition. On peut
y modifier le **nom**, la **description architecturale**, et **ajouter un
événement daté**.

**Enregistrer sur l'appareil** stocke la modification en local ; elle est ensuite
superposée à la fiche d'origine à chaque affichage, et la ligne de provenance
indique « Contient une contribution locale non validée ». **Annuler** abandonne
les changements en cours.

L'onglet **Hors-ligne** affiche le nombre de fiches modifiées, rappelle
qu'aucune remontée vers un serveur n'existe, et propose **Effacer les
contributions locales**, qui supprime toutes les contributions d'un coup —
**sans confirmation**.

> Les autres champs de la fiche (propriétaires, statut patrimonial, accès,
> liens, coordonnées…) ne sont pas éditables dans cette version.

## Données

Les 35 fiches sont un **jeu de démonstration saisi à la main**, dans
`chateaux-data.js`. Trois objets globaux y sont exposés :

| Global | Rôle |
| --- | --- |
| `window.CASTELLUM_FILTERS` | Les valeurs des quatre groupes de filtres |
| `window.CASTELLUM_WIKI` | `id` du château → titre de l'article Wikipédia fr, pour la photo |
| `window.CASTELLUM` | Les 35 fiches |

Champs d'une fiche : `id`, `n` (nom), `v` (variantes), `t` (type), `sc`
(siècles), `per` (période), `arch` (architecte), `prop` (propriétaires), `ev`
(événements), `desc`, `st` (styles), `etat`, `stat` (statut patrimonial), `acc`
(accès), `com` (commune), `dep` (département), `reg` (région historique), `lat`,
`lng`, `plan` (booléen), `liens`.

Sources annoncées dans l'application : **Wikidata** (identités, coordonnées),
**POP / Mérimée** (statut patrimonial), import CSV / JSON personnel, saisie dans
l'app. Ces imports **ne sont pas encore implémentés** : la structure des données
anticipe l'import Wikidata / POP.

### Photos

Aucune photo n'est stockée dans le dépôt. Au démarrage, l'application interroge
l'API REST de Wikipédia fr (`/page/summary/<titre>`) pour chaque entrée de
`CASTELLUM_WIKI`, en 4 requêtes parallèles. Elle extrait le nom du fichier image
et reconstruit deux URL via `Special:FilePath` :

- **vignette** — `?width=400`, utilisée en liste et hors connexion ;
- **haute résolution** — `?width=1280`, utilisée en tête de fiche, en ligne.

Les URL obtenues sont mises en cache dans le navigateur, donc les appels ne sont
faits qu'une fois par appareil.

Les 35 fichiers sont hébergés sur Wikimedia Commons et sous licence libre. Le
détail — fichier, licence, auteur — est dans [PHOTOS.md](PHOTOS.md), avec le
script qui permet de rejouer l'audit.

## Stockage local

Tout est en `localStorage`, sur l'appareil, sans serveur :

| Clé | Contenu | Effacement |
| --- | --- | --- |
| `castellor-photos-v2` | URL des photos résolues depuis Wikipédia | Vider les données du site |
| `castellum-drafts` | Contributions locales, par `id` de château | Bouton « Effacer les contributions locales » |

Si `localStorage` est indisponible (navigation privée stricte, stockage bloqué),
l'application continue de fonctionner : les échecs de lecture et d'écriture sont
ignorés, mais les contributions et le cache photo sont perdus au rechargement.

**Aucune donnée n'est envoyée à un serveur Castellor** — il n'y en a pas.

## Permissions

| Permission | Quand | Si refusée |
| --- | --- | --- |
| **Géolocalisation** | Bouton « Autour de moi » et « Trier par distance » | Repli silencieux sur 47.3941, 0.6848 |
| **Presse-papiers (écriture)** | Bouton « Copier GPS » | Le bouton affiche quand même « Copié » ; l'échec est ignoré |

Aucune permission n'est demandée au lancement.

## Réseau et mode hors connexion

Le bouton **En ligne / Hors-ligne** de l'en-tête simule la perte de réseau. Ce
n'est **pas** une détection automatique : l'état du réseau réel n'est pas lu.

| | En ligne | Hors-ligne |
| --- | --- | --- |
| Fiches texte | complètes | complètes |
| Photo de fiche | HD 1280 px | vignette 400 px, désaturée et légèrement floutée |
| Vignettes de liste | 400 px | 400 px, désaturées |
| Satellite | disponible | **désactivé**, bouton grisé |
| Fond de carte | normal | assombri, désaturé, opacité réduite |
| Bandeau | — | « Aucun cache de tuiles pour l'instant… » |

### Domaines contactés

| Domaine | Pour quoi |
| --- | --- |
| `unpkg.com` | Leaflet 1.9.4 (CSS + JS, avec intégrité SRI) |
| `tile.openstreetmap.org` | Tuiles du fond de carte |
| `server.arcgisonline.com` | Tuiles satellite Esri |
| `fr.wikipedia.org` | Résumés d'articles et fichiers image |
| `commons.wikimedia.org` | Fichiers image hébergés sur Commons |

## Structure du projet

```
Castellor.dc.html   Le canvas : maquette + logique de l'application
castellum-map.js    <castellum-map>, la carte Leaflet
chateaux-data.js    Les 35 fiches, les filtres, les titres Wikipédia
support.js          Runtime Claude Design — GÉNÉRÉ, ne pas modifier
_ds/nocturne-…/     Design system Nocturne (tokens, styles, composants)
uploads/            Capture d'écran de travail
.thumbnail          Vignette du canvas
```

## Limites connues

- **Ce n'est pas encore une PWA.** Il n'y a ni `manifest.webmanifest` ni service
  worker : l'application n'est pas installable, et le « mode hors connexion »
  est une simulation d'interface, pas un vrai cache réseau. Les tuiles et les
  photos annoncées « en cache » dépendent en réalité du cache du navigateur.
- **35 fiches** de démonstration, pas les ~500 visées.
- **Aucun lien officiel** n'est renseigné dans les données : toutes les fiches
  affichent « Aucun lien officiel renseigné — contribution bienvenue ».
- **Plans et cadastres** : 27 fiches sont marquées `plan: true` et signalent des
  plans « référencés dans les sources », mais **aucune visionneuse n'existe** et
  aucun plan n'est fourni.
- Le tri **« A→Z »** porte sur le nom affiché tel quel : « Château royal
  d'Amboise » se classe à *royal*, et les six fiches qui ne commencent pas par
  « Château » se dispersent dans la liste.
- **Attribution des photos manquante.** Les 35 photographies sont sous licence
  libre ([audit complet](PHOTOS.md)), mais 32 d'entre elles exigent de citer
  leur auteur et leur licence. L'application n'affiche qu'un crédit global
  « Photos : Wikimedia Commons / Wikipédia » : c'est insuffisant au regard des
  licences CC BY et CC BY-SA. À corriger avant toute mise en production.
- Les contributions locales ne quittent jamais l'appareil : **aucun mécanisme de
  remontée n'existe**, et l'interface le dit désormais explicitement.
- L'heure « 9:41 » de la barre d'état est un décor de maquette.

## Crédits et licences

- Cartographie : **© OpenStreetMap contributors**
- Imagerie satellite : **Esri, Maxar, Earthstar Geographics**
- Photographies : **Wikimedia Commons** — CC BY-SA, CC BY et CC0,
  [détail par fiche](PHOTOS.md)
- Bibliothèque carte : **Leaflet 1.9.4** (BSD-2-Clause)
- Interface : design system **Nocturne** (`_ds/`), typographie Inter
- Contenu patrimonial : **Wikidata**, base **POP / Mérimée**

### Licence

Le code de Castellor est publié sous licence **[MIT](LICENSE)**.

Cette licence couvre le code écrit pour ce projet : `Castellor.dc.html`,
`castellum-map.js` et `chateaux-data.js`. Elle **ne s'étend pas** aux éléments
tiers présents dans le dépôt ou chargés à l'exécution, qui gardent leurs
conditions propres :

| Élément | Statut |
| --- | --- |
| `support.js` | Runtime Claude Design, généré — conditions de l'outil |
| `_ds/nocturne-…/` | Design system Nocturne — conditions de l'outil |
| Leaflet 1.9.4 | BSD-2-Clause |
| Tuiles OpenStreetMap | ODbL, attribution obligatoire |
| Imagerie satellite Esri | Conditions Esri |
| Photographies Wikimedia | CC BY-SA, CC BY ou CC0 — [vérifiées fiche par fiche](PHOTOS.md) |
| Contenu patrimonial (Wikidata, POP / Mérimée) | Licences propres aux bases |

> **À vérifier** : aucune mention légale ni politique de confidentialité n'a été
> rédigée. Ces contenus juridiques doivent être écrits et **validés par une
> personne** avant publication.
