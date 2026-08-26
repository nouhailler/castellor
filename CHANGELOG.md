# Changelog

Toutes les évolutions notables de **Castellor** sont consignées ici.

Le format suit [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) et le
versionnage suit [SemVer](https://semver.org/lang/fr/).

Le projet n'est pas encore sous Git : cette première entrée décrit l'état du
prototype tel qu'il existe au 26 août 2026, reconstitué à partir du code. Les
entrées suivantes devront être écrites au fil des modifications.

---

## [Non publié]

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

### Ajouté

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

> Les écarts entre l'interface et le code listés ci-dessus ont été corrigés
> après la publication de cette version — voir [Non publié](#non-publié). Les
> limites de fond (pas de service worker, pas de plans, licences non vérifiées)
> restent ouvertes.
