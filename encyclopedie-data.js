/* Encyclopédie — contenu de synthèse historique, écrit pour Castellor.
   Trois parties, chacune une liste de chapitres { id, titre, paragraphes }.
   Un chapitre peut porter type: "diagram" (partie III) : il n'a pas de
   paragraphes, son contenu est l'illustration interactive rendue par
   Castellor.dc.html.
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
  },
  {
    id: "anatomie",
    partie: "III. Anatomie d'un château",
    chapitres: [
      {
        id: "anat-diagram",
        titre: "Vue d'ensemble (illustration)",
        type: "diagram"
      },
      {
        id: "anat-donjon",
        titre: "Le donjon",
        paragraphes: [
          "Le donjon est la tour maîtresse du château fort : la plus haute, la plus épaisse, et souvent la dernière ligne de défense en cas de prise de l'enceinte extérieure. Il abrite généralement les appartements du seigneur, une salle d'apparat, une chapelle et des réserves permettant de soutenir un siège prolongé. Son plan varie selon les époques et les régions : carré ou rectangulaire aux XIe et XIIe siècles, il devient majoritairement cylindrique à partir du XIIIe siècle sous l'influence du modèle philippien, qui élimine les angles morts propices à l'escalade et au sapement.",
          "Au-delà de sa fonction défensive, le donjon est avant tout un symbole : sa hauteur, visible de loin, affiche la puissance et le rang de son propriétaire sur l'ensemble du territoire environnant. Le donjon de Coucy, aujourd'hui détruit, comptait parmi les plus hauts d'Europe avec ses 54 mètres."
        ]
      },
      {
        id: "anat-douves",
        titre: "Les douves",
        paragraphes: [
          "Les douves forment un fossé creusé autour d'une fortification, sec ou rempli d'eau selon la configuration du terrain et la présence d'un cours d'eau à proximité. Leur premier rôle est de tenir l'assaillant et ses machines de siège à distance des murs, en l'obligeant à franchir un obstacle à découvert, sous le tir des défenseurs postés sur le chemin de ronde.",
          "Une douve en eau complique en outre le sapement — le creusement de galeries sous les fondations pour les faire s'effondrer — en noyant toute tentative de tunnel. Elle est franchie par un pont-levis ou un pont fixe, seul point de passage volontairement laissé pour l'accès au château."
        ]
      },
      {
        id: "anat-tour",
        titre: "La tour",
        paragraphes: [
          "Placées aux angles ou le long des courtines, les tours flanquent l'enceinte et permettent de battre ses abords d'un tir croisé, supprimant les angles morts qu'un mur rectiligne laisserait aux assaillants. Leur plan évolue avec les progrès de l'architecture militaire : carrées ou rectangulaires jusqu'au XIIe siècle, elles deviennent majoritairement rondes ou semi-circulaires par la suite, une forme qui résiste mieux aux tirs et facilite la défense.",
          "Une tour peut aussi remplir un rôle de guet, de résidence secondaire, ou de dernier réduit défensif indépendant de l'enceinte principale."
        ]
      },
      {
        id: "anat-cour",
        titre: "La cour",
        paragraphes: [
          "La cour est l'espace intérieur découvert, ceint par l'enceinte et les bâtiments du château. Elle organise la vie quotidienne de la garnison et de la maisonnée : puits ou citerne, écuries, communs, ateliers et parfois chapelle s'y répartissent autour du donjon ou du logis seigneurial. En temps de siège, elle sert aussi de dernier espace de regroupement des défenseurs et, dans les châteaux les plus vastes, de refuge pour les populations et le bétail des environs."
        ]
      }
    ]
  },
  {
    id: "defense",
    partie: "IV. Les systèmes défensifs",
    chapitres: [
      {
        id: "def-obstacles",
        titre: "Obstacles",
        paragraphes: [
          "Avant même d'atteindre le pied des murs, l'assaillant doit franchir une série d'obstacles destinés à le retarder, l'exposer aux tirs des défenseurs et rendre inopérantes ses machines de siège. Le fossé, creusé tout autour de la fortification, en est l'élément le plus ancien et le plus universel ; rempli d'eau, il devient douve et complique en outre le sapement, en noyant toute tentative de galerie souterraine. Le talus, plinthe inclinée à la base des murs, renforce leurs fondations tout en gênant l'approche des béliers et des tours de siège.",
          "Aux fortifications les plus anciennes ou les plus modestes, la palissade — une clôture de pieux de bois plantés en terre — tient lieu de première enceinte, rapide à édifier mais vulnérable au feu. Devant les portes, enfin, la barbacane, ouvrage avancé isolé ou relié à l'enceinte, oblige l'assaillant à s'exposer une seconde fois avant même d'atteindre l'entrée véritable."
        ]
      },
      {
        id: "def-murs",
        titre: "Murs",
        paragraphes: [
          "L'enceinte désigne l'ensemble des murailles qui délimitent et protègent un château ; elle se compose de courtines, les pans de mur reliant deux tours ou deux bastions, dont l'épaisseur et la hauteur constituent la première ligne de résistance aux machines de siège. Dans les châteaux les plus anciens, avant la généralisation d'une enceinte complète, un mur-bouclier isolé — une simple façade épaisse dressée face à la direction d'attaque la plus probable — peut suffire à protéger un site naturellement défendu sur ses autres flancs.",
          "Au sommet des courtines, un parapet — muret protecteur, souvent crénelé — permet aux défenseurs de se tenir en sécurité relative, tandis que le chemin de ronde, passage aménagé au sommet ou à l'intérieur du mur, leur permet de circuler tout au long de l'enceinte pour se porter rapidement au point le plus menacé."
        ]
      },
      {
        id: "def-tours",
        titre: "Tours",
        paragraphes: [
          "La forme des tours suit de près l'évolution des techniques de siège. La tour carrée, la plus ancienne, est simple à construire mais laisse des angles morts que l'assaillant peut exploiter pour saper ses fondations à l'abri des tirs. La tour ronde, généralisée à partir du XIIIe siècle avec le modèle philippien, supprime cet angle mort et résiste mieux aux coups de bélier ; la tour polygonale et la tour semi-circulaire en sont des variantes intermédiaires, parfois choisies pour des raisons de terrain ou d'économie de construction.",
          "Avec l'arrivée de l'artillerie à partir du XVe siècle, la tour à éperon — dotée d'un bec massif orienté vers l'ennemi pour faire dévier les boulets — puis la tour bastionnée, ancêtre du bastion proprement dit, marquent la transition vers une architecture pensée pour résister au canon plutôt qu'au seul choc mécanique des machines de siège médiévales."
        ]
      },
      {
        id: "def-ouvertures",
        titre: "Ouvertures défensives",
        paragraphes: [
          "Chaque ouverture percée dans un mur défensif est un compromis entre la nécessité de tirer sur l'assaillant et celle de ne pas s'exposer à ses propres tirs. L'archère, fente verticale étroite, permet de tirer à l'arc ou à l'arbalète ; la meurtrière en est un terme proche, plus général, pouvant désigner toute fente de tir. Avec la diffusion des armes à feu à partir du XIVe siècle apparaît la canonnière, ouverture plus large et souvent évasée vers l'intérieur, adaptée au maniement des premières pièces d'artillerie.",
          "Au sommet des murs, le créneau — ouverture rectangulaire alternée avec les parties pleines, les merlons — permet de tirer tout en s'abritant. Le mâchicoulis, ouverture ménagée dans le plancher d'un encorbellement de pierre, autorise une défense verticale : surveiller le pied du mur et y faire tomber des projectiles. L'assommoir, souvent aménagé au-dessus d'un passage ou d'une porte, remplit une fonction voisine, concentrée sur la défense d'un point de passage précis."
        ]
      },
      {
        id: "def-entrees",
        titre: "Entrées",
        paragraphes: [
          "L'entrée est le point le plus vulnérable de toute fortification, puisqu'elle doit rester praticable en temps de paix tout en étant défendable en cas d'attaque. La porte fortifiée concentre pour cela plusieurs dispositifs successifs : un pont-levis, mobile, qui interrompt l'accès en se relevant ; une herse, grille coulissant verticalement, qui peut se fermer en urgence même si le pont reste baissé ; et souvent un assommoir aménagé juste au-dessus du passage, pour prendre à revers quiconque aurait forcé les deux premiers obstacles.",
          "Les entrées les plus importantes sont en outre protégées par un châtelet, ensemble fortifié flanqué de tours qui encadre et surveille l'accès, précédé le cas échéant d'une barbacane avancée qui oblige l'assaillant à s'exposer une première fois avant même d'atteindre la porte proprement dite."
        ]
      }
    ]
  }
];
