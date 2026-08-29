/* Circuits — parcours reliant plusieurs fiches de chateaux-data.js.
   Chaque circuit ne porte que son identité et la liste ordonnée des `id` de
   châteaux à visiter : distance, durée et nombre d'étapes sont calculés à
   l'exécution à partir des coordonnées de ces fiches (voir Castellor.dc.html,
   circuitStats()), pas stockés ici — ils suivent le jeu de données au lieu
   d'en dériver si une fiche change de coordonnées.

   Trois parcours de démarrage, choisis parce que leurs châteaux existent déjà
   tous dans les 75 fiches actuelles. D'autres viendront à mesure que la base
   s'étoffe (voir CONTEXT.md §8) — un circuit ne référençant qu'un `id`
   absent du jeu de données serait silencieusement raccourci par
   circuitChateaux() dans Castellor.dc.html, jamais en erreur. */
window.CASTELLUM_CIRCUITS = [
  {
    id: "loire",
    nom: "Route des châteaux de la Loire",
    description: "Neuf châteaux emblématiques du Val de Loire, de Sully-sur-Loire à Angers.",
    chateauIds: ["sully", "chambord", "blois", "chenonceau", "amboise", "azay", "chinon", "saumur", "angers"]
  },
  {
    id: "cathares",
    nom: "Les forteresses cathares",
    description: "Carcassonne, Peyrepertuse, Montségur et Foix, sur les traces de la croisade albigeoise.",
    chateauIds: ["carcassonne", "peyrepertuse", "montsegur", "foix"]
  },
  {
    id: "paris-medieval",
    nom: "Châteaux médiévaux autour de Paris",
    description: "Une échappée vers Vincennes, Pierrefonds, Coucy et Fère-en-Tardenois, au nord-est de la capitale.",
    chateauIds: ["vincennes", "pierrefonds", "coucy", "fere"]
  }
];
