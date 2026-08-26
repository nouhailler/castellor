# CLAUDE.md — Castellor

Recensement des châteaux de France pensé pour la voiture. **Prototype v1
(0.1.0)** : un canvas Claude Design, pas encore une PWA installable.

## Documentation

> Documentation : suivre [`DOCUMENTATION_SPEC.md`](DOCUMENTATION_SPEC.md). Une
> tâche n'est « done » que si la doc est à jour.

Concrètement, avant de clore toute modification fonctionnelle, vérifier dans le
[README](README.md) : la fonctionnalité, ses paramètres, ses permissions, son
comportement hors connexion, ses erreurs, les limites connues — puis le
[CHANGELOG](CHANGELOG.md).

**Ne jamais inventer** une fonctionnalité, un paramètre ou un comportement dans
la doc. Source de vérité : le code réel. Si un comportement n'est pas
déterminable, écrire `À vérifier` et le signaler. Les contenus juridiques ne
sont jamais définitifs sans validation humaine.

## Où lire quoi

| Fichier | Pour |
| --- | --- |
| [README.md](README.md) | Ce que fait l'app : écrans, données, stockage, permissions, réseau |
| [CONTEXT.md](CONTEXT.md) | Architecture, décisions et leur pourquoi, écarts, feuille de route |
| [CHANGELOG.md](CHANGELOG.md) | Historique des versions |
| [PHOTOS.md](PHOTOS.md) | Licences des 35 photographies, auteur par auteur |
| `_ds/nocturne-*/readme.md` | Design system Nocturne |

**Lire `CONTEXT.md` avant toute modification non triviale.**

## Ce qu'il faut savoir avant de toucher au code

- **`Castellor.dc.html` est la source ; `index.html` est généré.** Après toute
  modification du canvas, lancer `python3 tools/build-pwa.py`. Éditer
  `index.html` à la main, c'est perdre son travail à la génération suivante.
  Ne pas retirer les marqueurs `data-app-root`, `data-canvas-only`,
  `data-canvas-frame`, `data-tabbar` : le script en dépend.
- **Ce n'est pas une application web classique.** `Castellor.dc.html` est un
  canvas Claude Design : maquette et logique dans le même fichier, avec des
  balises de runtime (`<x-dc>`, `<sc-if>`, `<sc-for>`, `<x-import>`) et une
  classe `DCLogic` dans un `<script type="text/x-dc">`.
- **Toute valeur affichée doit être retournée par `renderVals()`.** Les
  interpolations `{{ nom }}` n'ont pas d'autre source.
- **`support.js` est généré — ne jamais l'éditer.**
- **La carte se pilote impérativement.** `<castellum-map>` ne connaît rien du
  filtrage : `setData()`, `setSelected()`, `setSatellite()`, `setOffline()`,
  `flyTo()`, `fitAll()`, `onSelect`. Le raccordement se fait dans `_hook()`,
  appelé à chaque rendu.
- **Toute lecture d'une fiche passe par `record(c)`**, qui superpose la
  contribution locale — sinon les modifications de l'utilisateur n'apparaissent
  pas.
- **Tout est en français** : interface, données, commentaires, documentation.
- **Couleurs, espacements, rayons et ombres viennent des tokens Nocturne**
  (`var(--color-*)`, `var(--radius-*)`, `var(--shadow-*)`). Exception assumée :
  les valeurs calculées en JS répètent les hexadécimaux en dur (`ACC`, `DIV`,
  `castellum-map.js`) et ne suivront pas un changement de token.
- **Pas de dépendance ajoutée sans raison forte.** Aujourd'hui : Leaflet 1.9.4,
  par CDN avec intégrité SRI.

## Pièges

- **Nommage** : le produit est *Castellor*, le code dit majoritairement
  *castellum* (`window.CASTELLUM`, `castellum-map.js`, clé `castellum-drafts`).
  Seule `castellor-photos-v2` suit le produit. Un renommage de clé de stockage
  casse les contributions déjà enregistrées : prévoir une migration.
- **Photos** : résolues à l'exécution depuis l'API Wikipédia fr, via
  `Special:FilePath` (`upload.wikimedia.org` est inaccessible). Le nom de
  fichier est extrait par expression régulière — si le format d'URL change,
  toutes les photos disparaissent silencieusement.
- **Deux niveaux de hors connexion.** L'état réseau réel pilote l'affichage ;
  le bouton de l'en-tête reste un forçage manuel pour la démonstration. Le vrai
  cache vient de `sw.js`, qui n'existe que sur le site servi — pas dans le
  canvas ouvert directement. Le bandeau s'adapte : ne pas y réintroduire de
  promesse fixe.
- **`vendor/` n'est pas du confort.** React, Leaflet, Inter et la feuille
  Nocturne y sont copiés parce qu'une PWA ne peut pas dépendre d'un CDN hors
  ligne. Le runtime lit `window.__resources` pour y aller. Ne pas revenir à
  unpkg ni à Google Fonts.
- **L'interface ne doit décrire que ce que le code fait réellement.** Une série
  de textes trop optimistes (cache de tuiles, plans hors-ligne, remontée des
  contributions) a été corrigée le 2026-08-26 — voir
  [CONTEXT.md §7](CONTEXT.md#7-écarts-entre-ce-qui-est-annoncé-et-ce-qui-est-fait).
  Ils redeviendront faux quand ces fonctionnalités arriveront : **mettre le
  texte à jour dans le même changement que la fonctionnalité**, et ne pas
  introduire de nouvelle promesse.
- **Tenir à jour la colonne d'annotations** de 330 px du canvas (« Ce qui marche
  déjà », « Hypothèses à valider », « Prochaines étapes ») : c'est elle que lit
  le lecteur du prototype.

## État du dépôt

https://github.com/nouhailler/castellor — public, sous licence **MIT**, branche
`main`. La licence ne couvre que le code écrit pour ce projet : voir le tableau
des éléments tiers dans le [README](README.md#licence).

Déploiement Netlify : **Base directory** vide, **Build command** vide,
**Publish directory** `.` — `netlify.toml` porte le reste (en-têtes, CSP).
La CSP exige `'unsafe-inline'` et `'unsafe-eval'` : le runtime compile la
logique du canvas avec `new Function`. Les retirer casse l'application.

Pas de `package.json`, pas de tests automatisés. Le jeu de données compte **35 fiches** de démonstration saisies à
la main, taillées pour l'import Wikidata / POP-Mérimée à venir.
