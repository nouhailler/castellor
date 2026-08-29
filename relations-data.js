/* Relations entre châteaux — architectes partagés par au moins deux fiches
   de chateaux-data.js.

   Pourquoi ce fichier existe séparément : le champ `arch` de chateaux-data.js
   est du texte libre ("Eugène Viollet-le-Duc (restauration)", "Jean Le Noir,
   puis Eugène Viollet-le-Duc"...). Un rapprochement automatique par motif
   dans du texte libre n'est pas fiable : un essai sur les événements (`ev`)
   a produit un faux positif dès le premier test — Vincennes et Coucy
   partagent tous les deux « 1917 », sans aucun lien réel (exécution de Mata
   Hari à Vincennes vs. destruction du donjon de Coucy par l'armée allemande).
   Les architectes partagés ci-dessous ont donc été relevés à la main dans le
   texte de chateaux-data.js, pas extraits automatiquement — à enrichir de la
   même façon, jamais par correspondance de mot-clé. Les autres dimensions du
   graphe de relations (famille/propriétaire, style, région, époque)
   viennent en revanche de champs structurés (`prop`, `st`, `reg`, `sc`) et se
   calculent sans risque directement dans Castellor.dc.html, relationGroups(). */
window.CASTELLUM_ARCHITECTS = [
  { id: "viollet-le-duc", nom: "Eugène Viollet-le-Duc", chateauIds: ["carcassonne", "pierrefonds", "roquetaillade"] },
  { id: "vauban", nom: "Vauban", chateauIds: ["sisteron", "bazoches", "besancon"] },
  { id: "le-vau", nom: "Louis Le Vau", chateauIds: ["versailles", "vauxlevicomte"] },
  { id: "le-notre", nom: "André Le Nôtre", chateauIds: ["versailles", "vauxlevicomte"] },
  { id: "delorme", nom: "Philibert Delorme", chateauIds: ["chenonceau", "fontainebleau"] }
];
