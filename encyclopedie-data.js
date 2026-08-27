/* Encyclopédie — contenu de synthèse historique, écrit pour Castellor.
   Deux parties, chacune une liste de chapitres { id, titre, paragraphes }.
   Ce n'est pas une base de faits vérifiés fiche par fiche comme
   chateaux-data.js : c'est un texte de synthèse généraliste, à corriger si
   une inexactitude est repérée. */
window.CASTELLUM_ENCYCLOPEDIA = [
  {
    id: "comprendre",
    partie: "I. Comprendre le château",
    chapitres: [
      {
        id: "quest-ce",
        titre: "Qu'est-ce qu'un château ?",
        paragraphes: [
          "Un château est une résidence fortifiée, propriété d'un seigneur ou d'un souverain, qui combine à des degrés variables une fonction défensive et une fonction d'habitation. Cette définition le distingue de la forteresse, ouvrage avant tout militaire sans vocation résidentielle affirmée, du manoir, demeure seigneuriale non fortifiée ou faiblement défendue, du palais, résidence princière ou royale où l'apparat prime sur la défense, et de la maison forte, habitation rurale simplement renforcée — une tour, un fossé, une enceinte légère — sans les moyens ni l'ambition d'un véritable château.",
          "Au-delà de son architecture, le château remplit plusieurs fonctions qui évoluent selon les époques. Fonction militaire d'abord : défendre un territoire, contrôler une garnison, résister à un siège. Fonction résidentielle : loger le seigneur, sa famille et sa maison. Fonction administrative : centraliser la justice, la perception des droits et redevances, la gestion du domaine seigneurial. Fonction symbolique : afficher, par la hauteur du donjon, l'importance de l'enceinte ou la richesse du décor, le rang et la puissance de son propriétaire. Fonction économique enfin : le château est souvent le centre d'une seigneurie, autour duquel s'organisent les terres, les moulins, les marchés et les revenus qui font vivre son maître."
        ]
      },
      {
        id: "pourquoi",
        titre: "Pourquoi construit-on un château ?",
        paragraphes: [
          "Un château répond rarement à un seul besoin. Contrôler un territoire, en surveillant les routes, les cours d'eau et les points de passage obligés — gués, ponts, cols — permet d'y lever des péages et d'en interdire l'accès à un adversaire. Protéger une population, en offrant un refuge fortifié aux habitants environnants lors des raids ou des guerres, justifie l'implantation de nombreux châteaux à proximité des bourgs. Affirmer un pouvoir, enfin, est une motivation tout aussi déterminante : bâtir un château, c'est marquer durablement le paysage de la présence d'une autorité, seigneuriale ou royale.",
          "À ces raisons s'ajoutent des besoins plus quotidiens : résider dignement, et administrer une seigneurie en disposant d'un siège où rendre la justice, tenir les comptes et recevoir l'hommage des vassaux."
        ]
      }
    ]
  },
  {
    id: "histoire",
    partie: "II. Histoire des châteaux de France",
    chapitres: [
      {
        id: "avant",
        titre: "Avant les châteaux",
        paragraphes: [
          "Le château tel qu'on l'entend au Moyen Âge n'apparaît qu'au Xe siècle, mais la fortification lui est bien antérieure. Les oppida gaulois, ces enceintes de hauteur protégées par des remparts de terre et de bois, organisaient déjà le pouvoir et le refuge des populations celtiques avant la conquête romaine. Sous l'Empire, les villes se dotent à leur tour d'enceintes antiques, souvent élevées tardivement, aux IIIe et IVe siècles, pour faire face à l'instabilité croissante des frontières. Ces fortifications gallo-romaines, en pierre et solidement bâties, influenceront durablement les techniques défensives médiévales.",
          "Après la chute de l'Empire romain d'Occident, dans un contexte d'affaiblissement du pouvoir central et d'invasions répétées, l'initiative défensive se déplace progressivement vers des pouvoirs locaux — comtes, puis simples seigneurs — qui élèvent leurs propres ouvrages : c'est de cette fragmentation du pouvoir que naîtra, quelques siècles plus tard, le château féodal."
        ]
      },
      {
        id: "10-11",
        titre: "Xe – XIe siècles — La naissance du château féodal",
        paragraphes: [
          "Le château féodal proprement dit apparaît en France aux alentours de l'an mil, dans le contexte d'émiettement du pouvoir carolingien. Ses formes les plus anciennes sont modestes : la motte castrale, butte de terre artificielle surmontée d'une tour de bois et entourée d'une basse-cour protégée par une palissade et un fossé, en constitue l'archétype. Ces enceintes de terre et de bois, rapides à édifier, permettent à d'innombrables seigneurs locaux d'asseoir leur autorité sur un territoire réduit. Les premières tours de pierre apparaissent dès cette période pour les seigneurs les plus puissants, annonçant la monumentalisation à venir.",
          "Ce mouvement de construction est indissociable de l'affirmation du pouvoir seigneurial : dans une société féodale où l'autorité royale s'exerce faiblement au-delà du domaine propre du roi, le château devient l'instrument par lequel chaque seigneur exerce la justice, lève des droits et impose sa protection — ou sa domination — sur les hommes de sa terre."
        ]
      },
      {
        id: "12",
        titre: "XIIe siècle — La monumentalisation",
        paragraphes: [
          "Le XIIe siècle est celui de la monumentalisation du château : la pierre remplace progressivement le bois, et les donjons maçonnés, hauts de plusieurs dizaines de mètres, deviennent le symbole architectural de la puissance seigneuriale. Les enceintes se renforcent, flanquées de tours de plan carré ou rectangulaire qui permettent de surveiller et de défendre les courtines.",
          "Les techniques défensives évoluent en conséquence : archères, chemins de ronde couverts et hourds de bois en encorbellement se généralisent, tandis que les grands ordres militaires et les expériences rapportées des croisades diffusent en Occident des savoir-faire nouveaux en matière de fortification."
        ]
      },
      {
        id: "13",
        titre: "XIIIe siècle — Le château philippien",
        paragraphes: [
          "Le règne de Philippe Auguste (1180-1223) marque une rupture dans l'histoire du château français. Le roi impose, dans les places fortes qu'il fait construire ou qu'il reprend à ses vassaux, un modèle régulier et normalisé : enceinte quadrangulaire cantonnée de tours cylindriques régulièrement espacées, courtines de hauteur uniforme, et donjon isolé — la tour maîtresse ronde, comme au Louvre primitif.",
          "Ce « château philippien » doit son efficacité à l'abandon des angles morts des tours carrées au profit de tours rondes, mieux adaptées à la défense circulaire, et à une organisation défensive pensée pour l'ensemble de l'ouvrage plutôt que pour un donjon isolé. La diffusion de ce modèle royal, imité par les grands seigneurs du royaume, contribue à une remarquable homogénéisation de l'architecture castrale française au cours du siècle."
        ]
      },
      {
        id: "14-15",
        titre: "XIVe – XVe siècles",
        paragraphes: [
          "La guerre de Cent Ans (1337-1453) bouleverse la fortification française. Les sièges répétés et l'apparition des premières bombardes, à partir du milieu du XIVe siècle, imposent une adaptation aux armes à feu : les murs s'épaississent, les tours s'abaissent et s'élargissent pour mieux résister aux tirs, des embrasures de canon apparaissent dans les courtines.",
          "Dans le même temps, les grandes fortifications de cette période ne perdent rien de leur vocation résidentielle : les grands seigneurs et les princes continuent à vouloir des châteaux confortables, richement décorés, où la démonstration défensive se double d'un véritable programme d'apparat. Cette tension entre nécessités militaires et exigences résidentielles annonce les transformations plus radicales de la Renaissance."
        ]
      },
      {
        id: "renaissance",
        titre: "Renaissance",
        paragraphes: [
          "Au tournant du XVIe siècle, les guerres d'Italie mettent les seigneurs et les rois de France au contact direct de l'architecture italienne, et le château fort se transforme en profondeur. Les nécessités défensives, déjà atténuées par la pacification progressive du royaume, s'effacent devant le goût nouveau pour la symétrie des façades, l'ouverture de grandes fenêtres à meneaux là où régnaient autrefois d'étroites archères, et l'introduction d'escaliers d'apparat, à vis ou à volées droites, conçus comme des éléments de mise en scène.",
          "Les jardins, organisés en parterres réguliers, deviennent partie intégrante de la résidence. Les châteaux de la Loire incarnent cette mutation : le château y devient pleinement une résidence aristocratique, où l'ancien vocabulaire défensif — tours, mâchicoulis, douves — n'est plus conservé que comme ornement ou souvenir, sans fonction militaire réelle."
        ]
      },
      {
        id: "17",
        titre: "XVIIe siècle — Le château classique",
        paragraphes: [
          "Le XVIIe siècle consacre le château classique, expression architecturale de la centralisation monarchique menée par Louis XIV. Le pouvoir royal se méfiant des places fortes aux mains de la noblesse, la fonction défensive du château disparaît presque totalement au profit d'une architecture régulière, ordonnée par des façades symétriques, des toitures à la française et de vastes jardins à la française, dont Vaux-le-Vicomte puis Versailles offrent les modèles les plus achevés.",
          "La fortification militaire ne disparaît pas pour autant : elle se spécialise dans les places frontières, sous l'impulsion de l'ingénieur Vauban, tandis que le château, lui, devient pleinement un lieu de résidence, de représentation et de vie de cour."
        ]
      },
      {
        id: "18",
        titre: "XVIIIe siècle",
        paragraphes: [
          "Au XVIIIe siècle, le château achève sa mue en résidence d'agrément. Les grandes familles aristocratiques multiplient les domaines conçus pour le confort et le plaisir — pavillons de chasse, folies, jardins à l'anglaise remplaçant peu à peu les parterres réguliers du siècle précédent.",
          "Dans le même temps, nombre d'anciennes fortifications médiévales, devenues sans emploi militaire ni fonction résidentielle adaptée aux goûts du temps, tombent en ruine faute d'entretien ou sont partiellement démantelées ; d'autres serviront de carrières de pierre. La Révolution française accélère ce mouvement : nombre de châteaux, biens de la noblesse émigrée ou simples symboles de l'Ancien Régime, sont vendus comme biens nationaux, pillés ou détruits."
        ]
      },
      {
        id: "19",
        titre: "XIXe siècle — Le Moyen Âge réinventé",
        paragraphes: [
          "Le XIXe siècle réinvente le Moyen Âge. Le mouvement romantique, en plaçant l'époque médiévale au cœur de son imaginaire, suscite un regain d'intérêt pour les châteaux forts, souvent à l'abandon depuis des décennies. De grandes campagnes de restauration sont lancées : celles conduites par Eugène Viollet-le-Duc à Pierrefonds et à Carcassonne comptent parmi les plus célèbres. Plus que de simples consolidations, elles proposent une restitution, parfois très libre, d'un Moyen Âge idéalisé, dans un style néogothique qui doit autant à l'archéologie qu'à l'imagination de l'architecte.",
          "D'autres chantiers, menés par d'autres architectes dans le même esprit — comme la reconstruction du Haut-Kœnigsbourg pour Guillaume II au début du XXe siècle — prolongent ce mouvement bien au-delà de la seule œuvre de Viollet-le-Duc, contestée par certains dès l'époque pour ses libertés interprétatives. Cette vague de restaurations a néanmoins sauvé de la ruine de nombreux édifices et fait durablement du château un symbole historique, une image de la France médiévale que le tourisme du XXe siècle diffusera à son tour très largement."
        ]
      }
    ]
  }
];
