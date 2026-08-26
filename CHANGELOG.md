# Changelog

Toutes les évolutions notables de **Castellor** sont consignées ici.

Le format suit [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) et le
versionnage suit [SemVer](https://semver.org/lang/fr/).

L'entrée `0.1.0` décrit l'état du prototype au moment de sa mise sous Git,
reconstitué à partir du code. Le dépôt est publié sur
[github.com/nouhailler/castellor](https://github.com/nouhailler/castellor).

---

## [Non publié]

### Ajouté

- **15 nouvelles fiches** (`chateaux-data.js`), portant le jeu de données de
  35 à **50 châteaux** : Forteresse royale de Chinon, Château de Saumur,
  Château de Sully-sur-Loire, Château de Vaux-le-Vicomte, Château de Sedan,
  Château de Falaise, Château de Josselin, Château de Kerjean, Fort la Latte,
  Château de Roquetaillade, Château d'If, Palais des papes d'Avignon, Château
  de Val, Château de Bussy-Rabutin, Château de Beaucaire. Mêmes champs que les
  35 fiches existantes, saisies à la main depuis Wikipédia fr (pas de
  connecteur Wikidata / POP-Mérimée automatisé — voir
  [CONTEXT.md §8](CONTEXT.md#8-feuille-de-route)).
- **25 nouvelles fiches** (`chateaux-data.js`), portant le jeu de données de
  50 à **75 châteaux** : Château des ducs de Bretagne (Nantes), Château de
  Brissac, Château de Tiffauges, Château de Pau, Château de La Rochefoucauld,
  Château d'Oiron, Château de Nérac, Château de Grignan, Château d'Annecy,
  Château des ducs de Savoie (Chambéry), Citadelle de Sisteron, Château des
  Baux-de-Provence, Citadelle de Bonifacio, Château de Lunéville, Château du
  Haut-Barr, Château de Bazoches, Château de Cormatin, Château d'Ancy-le-Franc,
  Citadelle de Besançon, Château de Rambures, Château d'Hardelot, Château de
  Fère-en-Tardenois, Château de Carrouges, Château de Caen, Château de
  Rambouillet. Choisies pour combler les régions historiques peu représentées
  dans les 50 premières fiches (Savoie, Lorraine, Alsace, Franche-Comté,
  Corse, Poitou, Béarn…). Mêmes champs, même méthode : saisie à la main depuis
  Wikipédia fr, aucun connecteur Wikidata / POP-Mérimée automatisé (voir
  [CONTEXT.md §8](CONTEXT.md#8-feuille-de-route)).
- Audit de licences photo ([PHOTOS.md](PHOTOS.md)) rejoué sur les 75 fiches :
  75 fichiers résolus, tous sous licence libre, 69 exigent une attribution
  (contre 47 sur 50 auparavant). Trois nouveaux fichiers sont du domaine
  public ; l'un d'eux (château du Haut-Barr) n'a pas d'auteur déclaré sur
  Commons, sans que ce soit un problème de licence puisque l'attribution n'y
  est pas exigée.

### Corrigé

- La colonne d'annotations du canvas (`Castellor.dc.html`, section « Ce qui
  marche déjà / Hypothèses à valider / Prochaines étapes ») était restée à
  « 35 fiches » lors du premier passage à 50 : trois mentions manquées, mises
  à jour ici avec le reste (75 fiches, 69 attributions requises) et
  régénérées dans `index.html` via `tools/build-pwa.py`.

### Documentation

- README, CONTEXT.md et PHOTOS.md mis à jour pour les compteurs de fiches, de
  photos et de licences (35 → 50 → 75), le nombre de fiches sans « Château »
  en tête de nom (six → neuf → douze), le nombre de fiches `plan: true`
  (27 → 35 → 44) et le nombre de liens officiels renseignés (stable à 13).

---

## [0.2.1] — 2026-08-26

### Corrigé

- **Les photographies ne s'affichaient plus sur le site déployé.** La `CSP`
  ne listait `upload.wikimedia.org` que dans `img-src`. Or les photos passent
  par le service worker, donc par `fetch()`, donc par **`connect-src`** — et
  `Special:FilePath` redirige toujours vers `upload.wikimedia.org`. Les 35
  requêtes échouaient en `net::ERR_FAILED`, **sans aucune violation visible
  dans la console de la page** : une violation levée dans un service worker ne
  remonte pas au document. `connect-src` couvre désormais les cibles de
  redirection et les hôtes de tuiles.
- **Une écriture en cache ratée cassait l'affichage.** `cache.put()` refuse une
  réponse issue d'une redirection ; le rejet remontait dans `respondWith`, et
  le navigateur ne recevait rien. Les écritures se font maintenant à côté de la
  réponse, leurs échecs sont avalés, et une réponse redirigée est recopiée dans
  une réponse propre avant stockage. Une image ne peut plus disparaître parce
  que son cache a échoué.
- Version des caches portée à `v2` : les caches empoisonnés du déploiement
  précédent sont supprimés à l'activation.

### Documentation

- Section **Dépannage** dans le README, et le piège consigné dans `CONTEXT.md`
  et `CLAUDE.md`. Les chantiers restants sont listés dans
[CONTEXT.md §8](CONTEXT.md#8-feuille-de-route) : import Wikidata / POP pour
passer à ~500 fiches, visionneuse photo plein écran, écran d'itinéraire,
visionneuse de plans, remontée des contributions.

---

## [0.2.0] — 2026-08-26 — *PWA installable*

Castellor n'était consultable que dans son outil de conception. Elle s'installe
désormais sur Android depuis un déploiement Netlify, démarre réseau coupé, et
crédite ses photographies comme leurs licences l'exigent.

### Corrigé

- **Tri « A→Z »** — le bouton revenait à l'ordre du fichier de données sans
  trier. La liste est désormais triée sur le nom par `localeCompare` en
  français, insensible à la casse et aux accents. *(Le tri porte sur le nom
  affiché tel quel : « Château royal d'Amboise » se classe à « royal ».)*
- **Étiquettes de qualité photo** — « HD 1600 » / « BR 480 » annonçaient des
  résolutions qui n'ont jamais été demandées ; ce sont « HD 1280 » et
  « BR 400 ».
- **Poids de la base** — « 1,8 Mo · synchronisé » était écrit en dur et faux. La
  valeur est maintenant mesurée à l'exécution (26 ko pour 35 fiches) et la base
  est décrite comme « livrée avec l'application ».
- **En-tête de `chateaux-data.js`** — annonçait 30 châteaux au lieu de 35.

### Changé — l'interface ne promet plus que ce qu'elle fait

- **Bandeau hors connexion** — « Fond de carte en cache — 4 niveaux de zoom »
  laissait croire à un cache de tuiles inexistant. Remplacé par « Aucun cache de
  tuiles pour l'instant : le fond de carte n'affiche que ce que le navigateur a
  déjà chargé. »
- **Plans et cadastres** — « disponibles hors-ligne » devient « référencés dans
  les sources — visionneuse à venir », ce que dit réellement le champ `plan`.
- **Contributions locales** — la promesse d'une validation « à la reconnexion »
  est remplacée par l'état des faits : rien ne remonte vers un serveur, et
  effacer les données du site supprime les contributions. La ligne de provenance
  d'une fiche modifiée le dit aussi.
- **Vignettes** — « ~38 ko/fiche · N vignettes en cache » suggérait des images
  stockées localement ; seules les **adresses** le sont. Devient « servies par
  Wikimedia · N adresses résolues », avec l'étiquette « en ligne ».
- **Colonne d'annotations du canvas** — « fond en cache » devient « fond de
  carte atténué », et « édition complète d'une fiche » précise les trois champs
  réellement modifiables.

### Ajouté — l'application devient une PWA installable

- **`manifest.webmanifest` et `sw.js`** — Castellor s'installe sur Android
  (Chrome → Ajouter à l'écran d'accueil) et démarre réseau coupé. Le service
  worker tient quatre caches : coquille de l'application, tuiles
  OpenStreetMap (900), photographies Wikimedia (250) et métadonnées de licence
  (120). L'imagerie satellite reste volontairement hors cache.
- **`index.html`, généré par `tools/build-pwa.py`** — le canvas reste la source
  unique. Le script retire le décor de maquette, déplie l'artboard 430 × 900
  sur tout l'écran (`100dvh`, zone sûre Android sous la barre d'onglets), et
  branche manifeste, service worker et dépendances locales.
- **`vendor/`** — React 18.3.1, Leaflet 1.9.4, la fonte Inter (latin et
  latin-ext) et la feuille Nocturne sont servis depuis le domaine. Sans cela,
  rien n'est installable : le CDN et Google Fonts sont injoignables hors ligne.
  Les empreintes SHA-384 de React correspondent aux constantes du runtime.
- **`netlify.toml`** — publication à la racine sans compilation, en-têtes de
  cache (service worker jamais mis en cache, `vendor/` et `icons/` immuables)
  et CSP.
- **`icons/`, générées par `tools/make-icons.py`** — un donjon crénelé aux
  couleurs Nocturne, en versions normale et *maskable*.

### Changé

- **L'état réseau réel pilote l'affichage.** L'application démarre sur
  `navigator.onLine` et suit les événements `online` / `offline`. Le bouton de
  l'en-tête reste un forçage manuel pour la démonstration.
- **Le bandeau hors connexion dit la vérité selon le contexte** : il annonce le
  cache quand un service worker contrôle la page, et son absence quand le
  canvas est ouvert directement. L'onglet Hors-ligne affiche l'état du cache.

### Ajouté

- **`PHOTOS.md`** — audit des licences des 35 photographies, avec
  `tools/audit-licences-photos.py` pour le rejouer. Toutes sont libres
  (CC BY-SA, CC BY, CC0), sans restriction d'usage. **32 exigent une
  attribution que l'application n'affiche pas** — corrigé dans la même version,
  voir « l'application devient une PWA installable » ci-dessus.
- **`LICENSE`** — le code passe sous licence MIT. La portée est précisée dans le
  README : elle couvre le code écrit pour ce projet, pas le runtime généré, le
  design system, les fonds de carte ni les photographies.

### Documentation

- `README.md`, `CONTEXT.md` §7 et `CLAUDE.md` mis en cohérence avec les
  corrections.
- Publication du projet sur https://github.com/nouhailler/castellor.

Les chantiers restants sont listés dans
[CONTEXT.md §8](CONTEXT.md#8-feuille-de-route).

---

## [0.1.0] — 2026-08-26 — *Prototype v1*

Première version du prototype interactif, sous forme de canvas Claude Design
(`Castellor.dc.html`). Application mobile 430 × 900 en trois onglets, sur le
design system **Nocturne**.

### Nouveautés

**Carte**

- Carte Leaflet 1.9.4 en écran d'accueil, 35 châteaux français géolocalisés.
- Fond OpenStreetMap assombri par filtre CSS, et fond satellite Esri World
  Imagery en option.
- Marqueurs différenciés : accent violet pour les édifices debout, gris
  translucide pour les ruines et vestiges ; halo sur le marqueur sélectionné.
- Carte de sélection en bas d'écran au clic sur un marqueur : photo, nom,
  commune, département, type, état.
- **France entière** — recadrage sur l'ensemble des châteaux visibles.
- **Autour de moi** — géolocalisation, repère et cercle de 18 km, centrage au
  zoom 8, tri de la liste par distance.
- Composant `<castellum-map>` isolé, piloté par une API impérative.

**Recherche et filtres**

- Recherche sur le nom, les variantes historiques, la commune, le département et
  la région historique.
- Feuille de filtres en quatre groupes : époque, type, état actuel, accès.
  Cumul en OU dans un groupe, en ET entre groupes.
- Pastille du nombre de filtres actifs ; réinitialisation globale.
- Compteur « X / 35 recensés » permanent sur la carte.

**Liste**

- Liste des châteaux filtrés avec vignette, nom, commune, département, type et
  siècles.
- Bascule tri par distance, distance en kilomètres affichée une fois la position
  connue.
- État vide avec lien de réinitialisation des filtres.

**Fiche détaillée**

- Ouverture sur la photo (296 px), avec dégradé et étiquette de qualité.
- Période, siècles, architecte ; commune, département, région historique,
  coordonnées GPS.
- Propriétaires et familles, événements historiques, description architecturale,
  styles, état actuel, statut patrimonial, conditions d'accès, liens officiels.
- **Voir sur la carte** (centrage au zoom 13) et **Copier GPS**.
- Ligne de provenance des sources, signalant les contributions locales.

**Édition**

- Mode édition sur le nom, la description architecturale et l'ajout d'événements
  datés.
- Enregistrement sur l'appareil, superposé à la fiche d'origine à l'affichage.
- Onglet **Hors-ligne** : compte des contributions en attente et effacement
  global.

**Mode hors connexion (simulé)**

- Bascule manuelle En ligne / Hors-ligne dans l'en-tête.
- Hors connexion : photos en vignettes 400 px désaturées, satellite désactivé,
  fond de carte atténué, bandeau d'information.
- Fiches texte intégralement consultables dans les deux états.

**Photos**

- Résolution automatique des photos depuis l'API REST de Wikipédia fr, en 4
  requêtes parallèles, avec mise en cache local des URL.
- Deux résolutions : vignette 400 px et haute résolution 1280 px.

### Données

- Jeu de démonstration de **35 fiches** saisies à la main
  (`chateaux-data.js`), structuré pour l'import Wikidata / POP-Mérimée à venir.
- 10 types d'édifices, 5 états de conservation, 4 régimes d'accès, 4 tranches
  d'époque.

### Stockage

- `castellor-photos-v2` — cache des URL de photos.
- `castellum-drafts` — contributions locales, par identifiant de château.
- Aucune donnée envoyée à un serveur : il n'y en a pas.

### Permissions

- **Géolocalisation** — facultative, avec repli silencieux sur 47.3941, 0.6848.
- **Presse-papiers (écriture)** — pour la copie des coordonnées.

### Documentation

- Création de `README.md`, `CONTEXT.md` et `CHANGELOG.md`.
- Adoption du standard documentaire PWA : `DOCUMENTATION_SPEC.md` v1.2.0
  déposé à la racine et versionné avec le code.
- Création de `CLAUDE.md`, qui rend la règle « done » active à chaque session.

### Limites connues

- **Ni manifeste ni service worker** : l'application n'est pas installable et le
  mode hors connexion est une simulation d'interface.
- Le tri « A→Z » revient à l'ordre du fichier de données au lieu de trier.
- Les étiquettes « HD 1600 » / « BR 480 » ne correspondent pas aux résolutions
  réellement demandées (1280 px / 400 px).
- Plans et cadastres annoncés sur 27 fiches, mais aucune visionneuse ni aucun
  plan fourni.
- Aucun lien officiel renseigné dans les données.
- Licences des photos Wikimedia **non vérifiées** — à valider avant mise en
  production.
- Les contributions locales ne sont jamais remontées, malgré ce qu'annonce
  l'interface.
- Le commentaire d'en-tête de `chateaux-data.js` mentionne 30 châteaux au lieu
  de 35.

> Tout ce qui précède a été traité en **0.2.0** : les écarts entre l'interface
> et le code, les licences photo et leur attribution, et l'absence de service
> worker. Restent ouverts à ce jour les plans et cadastres, les liens officiels,
> et le jeu de 35 fiches à étendre.
