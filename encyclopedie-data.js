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
        illustrationWiki: "Château fort",
        titre: "Qu'est-ce qu'un château ?",
        paragraphes: [
          "Un château est une résidence fortifiée, propriété d'un seigneur ou d'un souverain, qui combine à des degrés variables une fonction défensive et une fonction d'habitation. Cette définition le distingue de la forteresse, ouvrage avant tout militaire sans vocation résidentielle affirmée, du manoir, demeure seigneuriale non fortifiée ou faiblement défendue, du palais, résidence princière ou royale où l'apparat prime sur la défense, et de la maison forte, habitation rurale simplement renforcée — une tour, un fossé, une enceinte légère — sans les moyens ni l'ambition d'un véritable château.",
          "Au-delà de son architecture, le château remplit plusieurs fonctions qui évoluent selon les époques. Fonction militaire d'abord : défendre un territoire, contrôler une garnison, résister à un siège. Fonction résidentielle : loger le seigneur, sa famille et sa maison. Fonction administrative : centraliser la justice, la perception des droits et redevances, la gestion du domaine seigneurial. Fonction symbolique : afficher, par la hauteur du donjon, l'importance de l'enceinte ou la richesse du décor, le rang et la puissance de son propriétaire. Fonction économique enfin : le château est souvent le centre d'une seigneurie, autour duquel s'organisent les terres, les moulins, les marchés et les revenus qui font vivre son maître."
        ]
      },
      {
        id: "pourquoi",
        illustrationWiki: "Fortification",
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
        illustrationWiki: "Oppidum",
        titre: "Avant les châteaux",
        paragraphes: [
          "Le château tel qu'on l'entend au Moyen Âge n'apparaît qu'au Xe siècle, mais la fortification lui est bien antérieure. Les oppida gaulois, ces enceintes de hauteur protégées par des remparts de terre et de bois, organisaient déjà le pouvoir et le refuge des populations celtiques avant la conquête romaine. Sous l'Empire, les villes se dotent à leur tour d'enceintes antiques, souvent élevées tardivement, aux IIIe et IVe siècles, pour faire face à l'instabilité croissante des frontières. Ces fortifications gallo-romaines, en pierre et solidement bâties, influenceront durablement les techniques défensives médiévales.",
          "Après la chute de l'Empire romain d'Occident, dans un contexte d'affaiblissement du pouvoir central et d'invasions répétées, l'initiative défensive se déplace progressivement vers des pouvoirs locaux — comtes, puis simples seigneurs — qui élèvent leurs propres ouvrages : c'est de cette fragmentation du pouvoir que naîtra, quelques siècles plus tard, le château féodal."
        ]
      },
      {
        id: "10-11",
        illustrationWiki: "Motte castrale",
        titre: "Xe – XIe siècles — La naissance du château féodal",
        paragraphes: [
          "Le château féodal proprement dit apparaît en France aux alentours de l'an mil, dans le contexte d'émiettement du pouvoir carolingien. Ses formes les plus anciennes sont modestes : la motte castrale, butte de terre artificielle surmontée d'une tour de bois et entourée d'une basse-cour protégée par une palissade et un fossé, en constitue l'archétype. Ces enceintes de terre et de bois, rapides à édifier, permettent à d'innombrables seigneurs locaux d'asseoir leur autorité sur un territoire réduit. Les premières tours de pierre apparaissent dès cette période pour les seigneurs les plus puissants, annonçant la monumentalisation à venir.",
          "Ce mouvement de construction est indissociable de l'affirmation du pouvoir seigneurial : dans une société féodale où l'autorité royale s'exerce faiblement au-delà du domaine propre du roi, le château devient l'instrument par lequel chaque seigneur exerce la justice, lève des droits et impose sa protection — ou sa domination — sur les hommes de sa terre."
        ]
      },
      {
        id: "12",
        illustration: "falaise",
        titre: "XIIe siècle — La monumentalisation",
        paragraphes: [
          "Le XIIe siècle est celui de la monumentalisation du château : la pierre remplace progressivement le bois, et les donjons maçonnés, hauts de plusieurs dizaines de mètres, deviennent le symbole architectural de la puissance seigneuriale. Les enceintes se renforcent, flanquées de tours de plan carré ou rectangulaire qui permettent de surveiller et de défendre les courtines.",
          "Les techniques défensives évoluent en conséquence : archères, chemins de ronde couverts et hourds de bois en encorbellement se généralisent, tandis que les grands ordres militaires et les expériences rapportées des croisades diffusent en Occident des savoir-faire nouveaux en matière de fortification."
        ]
      },
      {
        id: "13",
        illustrationWiki: "Château du Louvre",
        titre: "XIIIe siècle — Le château philippien",
        paragraphes: [
          "Le règne de Philippe Auguste (1180-1223) marque une rupture dans l'histoire du château français. Le roi impose, dans les places fortes qu'il fait construire ou qu'il reprend à ses vassaux, un modèle régulier et normalisé : enceinte quadrangulaire cantonnée de tours cylindriques régulièrement espacées, courtines de hauteur uniforme, et donjon isolé — la tour maîtresse ronde, comme au Louvre primitif.",
          "Ce « château philippien » doit son efficacité à l'abandon des angles morts des tours carrées au profit de tours rondes, mieux adaptées à la défense circulaire, et à une organisation défensive pensée pour l'ensemble de l'ouvrage plutôt que pour un donjon isolé. La diffusion de ce modèle royal, imité par les grands seigneurs du royaume, contribue à une remarquable homogénéisation de l'architecture castrale française au cours du siècle."
        ]
      },
      {
        id: "14-15",
        illustrationWiki: "Guerre de Cent Ans",
        titre: "XIVe – XVe siècles",
        paragraphes: [
          "La guerre de Cent Ans (1337-1453) bouleverse la fortification française. Les sièges répétés et l'apparition des premières bombardes, à partir du milieu du XIVe siècle, imposent une adaptation aux armes à feu : les murs s'épaississent, les tours s'abaissent et s'élargissent pour mieux résister aux tirs, des embrasures de canon apparaissent dans les courtines.",
          "Dans le même temps, les grandes fortifications de cette période ne perdent rien de leur vocation résidentielle : les grands seigneurs et les princes continuent à vouloir des châteaux confortables, richement décorés, où la démonstration défensive se double d'un véritable programme d'apparat. Cette tension entre nécessités militaires et exigences résidentielles annonce les transformations plus radicales de la Renaissance."
        ]
      },
      {
        id: "renaissance",
        illustration: "azay",
        titre: "Renaissance",
        paragraphes: [
          "Au tournant du XVIe siècle, les guerres d'Italie mettent les seigneurs et les rois de France au contact direct de l'architecture italienne, et le château fort se transforme en profondeur. Les nécessités défensives, déjà atténuées par la pacification progressive du royaume, s'effacent devant le goût nouveau pour la symétrie des façades, l'ouverture de grandes fenêtres à meneaux là où régnaient autrefois d'étroites archères, et l'introduction d'escaliers d'apparat, à vis ou à volées droites, conçus comme des éléments de mise en scène.",
          "Les jardins, organisés en parterres réguliers, deviennent partie intégrante de la résidence. Les châteaux de la Loire incarnent cette mutation : le château y devient pleinement une résidence aristocratique, où l'ancien vocabulaire défensif — tours, mâchicoulis, douves — n'est plus conservé que comme ornement ou souvenir, sans fonction militaire réelle."
        ]
      },
      {
        id: "17",
        illustration: "versailles",
        titre: "XVIIe siècle — Le château classique",
        paragraphes: [
          "Le XVIIe siècle consacre le château classique, expression architecturale de la centralisation monarchique menée par Louis XIV. Le pouvoir royal se méfiant des places fortes aux mains de la noblesse, la fonction défensive du château disparaît presque totalement au profit d'une architecture régulière, ordonnée par des façades symétriques, des toitures à la française et de vastes jardins à la française, dont Vaux-le-Vicomte puis Versailles offrent les modèles les plus achevés.",
          "La fortification militaire ne disparaît pas pour autant : elle se spécialise dans les places frontières, sous l'impulsion de l'ingénieur Vauban, tandis que le château, lui, devient pleinement un lieu de résidence, de représentation et de vie de cour."
        ]
      },
      {
        id: "18",
        illustration: "tiffauges",
        titre: "XVIIIe siècle",
        paragraphes: [
          "Au XVIIIe siècle, le château achève sa mue en résidence d'agrément. Les grandes familles aristocratiques multiplient les domaines conçus pour le confort et le plaisir — pavillons de chasse, folies, jardins à l'anglaise remplaçant peu à peu les parterres réguliers du siècle précédent.",
          "Dans le même temps, nombre d'anciennes fortifications médiévales, devenues sans emploi militaire ni fonction résidentielle adaptée aux goûts du temps, tombent en ruine faute d'entretien ou sont partiellement démantelées ; d'autres serviront de carrières de pierre. La Révolution française accélère ce mouvement : nombre de châteaux, biens de la noblesse émigrée ou simples symboles de l'Ancien Régime, sont vendus comme biens nationaux, pillés ou détruits."
        ]
      },
      {
        id: "19",
        illustration: "pierrefonds",
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
        illustration: "coucy",
        titre: "Le donjon",
        paragraphes: [
          "Le donjon est la tour maîtresse du château fort : la plus haute, la plus épaisse, et souvent la dernière ligne de défense en cas de prise de l'enceinte extérieure. Il abrite généralement les appartements du seigneur, une salle d'apparat, une chapelle et des réserves permettant de soutenir un siège prolongé. Son plan varie selon les époques et les régions : carré ou rectangulaire aux XIe et XIIe siècles, il devient majoritairement cylindrique à partir du XIIIe siècle sous l'influence du modèle philippien, qui élimine les angles morts propices à l'escalade et au sapement.",
          "Au-delà de sa fonction défensive, le donjon est avant tout un symbole : sa hauteur, visible de loin, affiche la puissance et le rang de son propriétaire sur l'ensemble du territoire environnant. Le donjon de Coucy, aujourd'hui détruit, comptait parmi les plus hauts d'Europe avec ses 54 mètres."
        ]
      },
      {
        id: "anat-douves",
        illustration: "chambord",
        titre: "Les douves",
        paragraphes: [
          "Les douves forment un fossé creusé autour d'une fortification, sec ou rempli d'eau selon la configuration du terrain et la présence d'un cours d'eau à proximité. Leur premier rôle est de tenir l'assaillant et ses machines de siège à distance des murs, en l'obligeant à franchir un obstacle à découvert, sous le tir des défenseurs postés sur le chemin de ronde.",
          "Une douve en eau complique en outre le sapement — le creusement de galeries sous les fondations pour les faire s'effondrer — en noyant toute tentative de tunnel. Elle est franchie par un pont-levis ou un pont fixe, seul point de passage volontairement laissé pour l'accès au château."
        ]
      },
      {
        id: "anat-tour",
        illustrationWiki: "Tour (édifice)",
        titre: "La tour",
        paragraphes: [
          "Placées aux angles ou le long des courtines, les tours flanquent l'enceinte et permettent de battre ses abords d'un tir croisé, supprimant les angles morts qu'un mur rectiligne laisserait aux assaillants. Leur plan évolue avec les progrès de l'architecture militaire : carrées ou rectangulaires jusqu'au XIIe siècle, elles deviennent majoritairement rondes ou semi-circulaires par la suite, une forme qui résiste mieux aux tirs et facilite la défense.",
          "Une tour peut aussi remplir un rôle de guet, de résidence secondaire, ou de dernier réduit défensif indépendant de l'enceinte principale."
        ]
      },
      {
        id: "anat-cour",
        illustration: "pierrefonds",
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
        illustration: "gaillard",
        titre: "Obstacles",
        paragraphes: [
          "Avant même d'atteindre le pied des murs, l'assaillant doit franchir une série d'obstacles destinés à le retarder, l'exposer aux tirs des défenseurs et rendre inopérantes ses machines de siège. Le fossé, creusé tout autour de la fortification, en est l'élément le plus ancien et le plus universel ; rempli d'eau, il devient douve et complique en outre le sapement, en noyant toute tentative de galerie souterraine. Le talus, plinthe inclinée à la base des murs, renforce leurs fondations tout en gênant l'approche des béliers et des tours de siège.",
          "Aux fortifications les plus anciennes ou les plus modestes, la palissade — une clôture de pieux de bois plantés en terre — tient lieu de première enceinte, rapide à édifier mais vulnérable au feu. Devant les portes, enfin, la barbacane, ouvrage avancé isolé ou relié à l'enceinte, oblige l'assaillant à s'exposer une seconde fois avant même d'atteindre l'entrée véritable."
        ]
      },
      {
        id: "def-murs",
        illustrationWiki: "Chemin de ronde",
        titre: "Murs",
        paragraphes: [
          "L'enceinte désigne l'ensemble des murailles qui délimitent et protègent un château ; elle se compose de courtines, les pans de mur reliant deux tours ou deux bastions, dont l'épaisseur et la hauteur constituent la première ligne de résistance aux machines de siège. Dans les châteaux les plus anciens, avant la généralisation d'une enceinte complète, un mur-bouclier isolé — une simple façade épaisse dressée face à la direction d'attaque la plus probable — peut suffire à protéger un site naturellement défendu sur ses autres flancs.",
          "Au sommet des courtines, un parapet — muret protecteur, souvent crénelé — permet aux défenseurs de se tenir en sécurité relative, tandis que le chemin de ronde, passage aménagé au sommet ou à l'intérieur du mur, leur permet de circuler tout au long de l'enceinte pour se porter rapidement au point le plus menacé."
        ]
      },
      {
        id: "def-tours",
        illustrationWiki: "Tour (édifice)",
        titre: "Tours",
        paragraphes: [
          "La forme des tours suit de près l'évolution des techniques de siège. La tour carrée, la plus ancienne, est simple à construire mais laisse des angles morts que l'assaillant peut exploiter pour saper ses fondations à l'abri des tirs. La tour ronde, généralisée à partir du XIIIe siècle avec le modèle philippien, supprime cet angle mort et résiste mieux aux coups de bélier ; la tour polygonale et la tour semi-circulaire en sont des variantes intermédiaires, parfois choisies pour des raisons de terrain ou d'économie de construction.",
          "Avec l'arrivée de l'artillerie à partir du XVe siècle, la tour à éperon — dotée d'un bec massif orienté vers l'ennemi pour faire dévier les boulets — puis la tour bastionnée, ancêtre du bastion proprement dit, marquent la transition vers une architecture pensée pour résister au canon plutôt qu'au seul choc mécanique des machines de siège médiévales."
        ]
      },
      {
        id: "def-ouvertures",
        illustrationWiki: "Meurtrière",
        titre: "Ouvertures défensives",
        paragraphes: [
          "Chaque ouverture percée dans un mur défensif est un compromis entre la nécessité de tirer sur l'assaillant et celle de ne pas s'exposer à ses propres tirs. L'archère, fente verticale étroite, permet de tirer à l'arc ou à l'arbalète ; la meurtrière en est un terme proche, plus général, pouvant désigner toute fente de tir. Avec la diffusion des armes à feu à partir du XIVe siècle apparaît la canonnière, ouverture plus large et souvent évasée vers l'intérieur, adaptée au maniement des premières pièces d'artillerie.",
          "Au sommet des murs, le créneau — ouverture rectangulaire alternée avec les parties pleines, les merlons — permet de tirer tout en s'abritant. Le mâchicoulis, ouverture ménagée dans le plancher d'un encorbellement de pierre, autorise une défense verticale : surveiller le pied du mur et y faire tomber des projectiles. L'assommoir, souvent aménagé au-dessus d'un passage ou d'une porte, remplit une fonction voisine, concentrée sur la défense d'un point de passage précis."
        ]
      },
      {
        id: "def-entrees",
        illustration: "sedan",
        titre: "Entrées",
        paragraphes: [
          "L'entrée est le point le plus vulnérable de toute fortification, puisqu'elle doit rester praticable en temps de paix tout en étant défendable en cas d'attaque. La porte fortifiée concentre pour cela plusieurs dispositifs successifs : un pont-levis, mobile, qui interrompt l'accès en se relevant ; une herse, grille coulissant verticalement, qui peut se fermer en urgence même si le pont reste baissé ; et souvent un assommoir aménagé juste au-dessus du passage, pour prendre à revers quiconque aurait forcé les deux premiers obstacles.",
          "Les entrées les plus importantes sont en outre protégées par un châtelet, ensemble fortifié flanqué de tours qui encadre et surveille l'accès, précédé le cas échéant d'une barbacane avancée qui oblige l'assaillant à s'exposer une première fois avant même d'atteindre la porte proprement dite."
        ]
      }
    ]
  },
  {
    id: "vie",
    partie: "V. La vie dans le château",
    chapitres: [
      {
        id: "vie-habitants",
        illustrationWiki: "Seigneur",
        titre: "Les habitants",
        paragraphes: [
          "Un château médiéval héberge une communauté hiérarchisée bien plus large que la seule famille seigneuriale. Le seigneur, maître des lieux, y exerce son autorité, rend la justice et reçoit l'hommage de ses vassaux ; à ses côtés, la dame gère souvent l'intendance du domaine, en particulier lorsque son époux est absent — en campagne, en croisade ou en pèlerinage — et peut assurer la défense du château en cas de siège.",
          "Autour d'eux gravitent les chevaliers, hommes d'armes montés liés au seigneur par serment de fidélité, et les soldats de la garnison, chargés de la garde permanente des remparts et des tours. Le fonctionnement quotidien du château repose sur une domesticité nombreuse : serviteurs affectés aux tâches du logis, artisans — charpentiers, forgerons, tanneurs — entretenant bâtiments et équipements, cuisiniers nourrissant l'ensemble de la maisonnée, et, dans les châteaux dotés d'une chapelle, un chapelain qui assure les offices et tient souvent aussi le rôle de secrétaire ou de précepteur."
        ]
      },
      {
        id: "vie-espaces",
        illustration: "blois",
        titre: "Les espaces",
        paragraphes: [
          "L'organisation intérieure du château répond aux besoins de toute une communauté. La grande salle en est le cœur : vaste pièce où se tiennent les repas collectifs, les réceptions, la justice seigneuriale et parfois les assemblées de vassaux. La chambre seigneuriale, plus retirée, sert à la fois de lieu de repos et d'espace privé où se règlent les affaires les plus confidentielles ; la chapelle, quand le château en possède une, assure la vie religieuse du seigneur et de sa maisonnée sans avoir à sortir de l'enceinte.",
          "Les espaces de service occupent une part importante du bâti : la cuisine, souvent isolée du corps de logis principal pour limiter les risques d'incendie, le cellier et la cave, où sont conservées les réserves de vivres et de boissons, la forge, indispensable à l'entretien des armes, outils et ferrures, et l'écurie, qui abrite les chevaux de guerre comme les montures de trait. Le grenier met les récoltes de céréales à l'abri de l'humidité et des rongeurs, tandis que les latrines, aménagées en encorbellement au-dessus des douves ou d'une fosse, évacuent les eaux usées loin des espaces de vie."
        ]
      },
      {
        id: "vie-quotidien",
        illustration: "chenonceau",
        titre: "Vie quotidienne",
        paragraphes: [
          "La vie quotidienne au château est rythmée par des contraintes matérielles bien éloignées de l'image d'apparat qu'on lui prête parfois. L'alimentation repose sur les céréales, les légumes du potager, la viande de chasse ou d'élevage et le poisson des viviers ; elle varie considérablement selon le rang, la table seigneuriale se distinguant par les épices, le gibier et le vin. Le chauffage, assuré par de grandes cheminées murales généralisées à partir du XIIe siècle, reste insuffisant dans les pièces les plus vastes et les plus hautes, tandis que l'éclairage dépend des chandelles de suif ou de cire et de rares fenêtres, souvent étroites pour des raisons défensives.",
          "L'hygiène s'organise autour de bassines, de baignoires de bois pour les plus fortunés et des latrines déjà évoquées ; le sommeil se prend le plus souvent à plusieurs dans une même pièce, sur des lits clos ou de simples paillasses selon le rang. Les vêtements, de laine ou de lin, se superposent en couches pour lutter contre le froid des murs de pierre. Les déplacements, enfin, s'effectuent à cheval ou à pied sur des routes souvent médiocres, tandis que la religion rythme l'année entière : offices quotidiens dans la chapelle, fêtes du calendrier liturgique et pèlerinages ponctuent la vie de toute la maisonnée, du seigneur au dernier des serviteurs."
        ]
      }
    ]
  },
  {
    id: "guerre",
    partie: "VI. La guerre et le siège",
    chapitres: [
      {
        id: "guerre-prise",
        illustration: "gaillard",
        titre: "Comment prend-on un château ?",
        paragraphes: [
          "Prendre un château fort n'est jamais une affaire simple : chaque option s'offrant à l'assiégeant comporte ses risques, son coût et son incertitude. Le blocus, le plus prudent, consiste à encercler la place et à couper tous ses accès, en pariant sur l'épuisement progressif des défenseurs plutôt que sur la force ; poussé à son terme, il devient un siège par la famine, capable de faire capituler une garnison sans qu'un seul coup ne soit porté contre les murs, au prix de plusieurs mois — le siège de Château-Gaillard, en 1203-1204, dura ainsi près de six mois avant la prise de la forteresse.",
          "L'assaut direct, à l'inverse, cherche une décision rapide : échelles pour l'escalade, béliers contre les portes, machines de siège pour ouvrir une brèche. Plus risqué, il expose les assaillants aux tirs des défenseurs mais peut emporter la décision en quelques jours. La sape, elle, mise sur la patience et la technique : creuser sous les fondations pour provoquer leur effondrement. Plus rarement, l'incendie s'attaque aux éléments de bois du château, et la trahison — la corruption ou la persuasion d'un défenseur — permet parfois de s'emparer d'une place jugée imprenable sans lever la moindre machine de siège."
        ]
      },
      {
        id: "guerre-machines",
        illustrationWiki: "Trébuchet",
        titre: "Les machines de siège",
        paragraphes: [
          "Les machines de siège médiévales se répartissent en deux grandes familles : celles qui projettent des charges à distance, et celles qui permettent l'assaut direct des murs. Le trébuchet, machine à contrepoids apparue en Occident au XIIe siècle, projette des blocs de plusieurs dizaines de kilos à plus d'une centaine de mètres et représente l'arme de siège la plus redoutable contre la maçonnerie avant l'artillerie à poudre. Le mangonneau, plus ancien et fonctionnant par torsion, offre une portée et une puissance moindres mais se met en œuvre plus rapidement. Le terme de catapulte, plus générique, désigne l'ensemble de ces machines de jet, souvent employées pour lancer des projectiles enflammés ou, en dernier recours, des charognes destinées à propager la maladie dans la place assiégée.",
          "Pour l'assaut direct, le bélier — poutre renforcée, parfois montée sur roues et protégée par un abri — enfonce les portes ou fissure les murs à coups répétés, tandis que le beffroi, tour de siège mobile aussi haute que les remparts visés, permet aux assaillants de rejoindre le chemin de ronde par une passerelle, sans avoir à escalader la muraille à découvert."
        ]
      },
      {
        id: "guerre-defense",
        illustrationWiki: "Mâchicoulis",
        titre: "La défense du siège",
        paragraphes: [
          "Face à ces techniques, les défenseurs disposent eux aussi de tout un arsenal de réponses. Les tirs depuis les tours et le chemin de ronde — archères, meurtrières, mâchicoulis, assommoirs — infligent de lourdes pertes à quiconque s'approche des murs, tandis que des projectiles variés (pierres, poix bouillante, chaux vive) peuvent être jetés sur les assaillants massés au pied de l'enceinte. Une réserve d'eau suffisante, puisée dans un puits ou une citerne intérieure, protège des tentatives d'incendie comme d'un blocus prolongé de la seule source extérieure ; des réserves alimentaires abondantes, constituées avant le début du siège, permettent de tenir des mois entiers sans céder à la famine.",
          "Contre la sape, les défenseurs peuvent creuser une contre-mine pour intercepter les galeries ennemies et combattre les sapeurs sous terre. Enfin, des sorties, menées de nuit ou par surprise, permettent d'attaquer le camp assiégeant, de détruire ses machines de siège ou de se ravitailler discrètement — inversant, l'espace d'une nuit, les rôles de l'assiégeant et de l'assiégé."
        ]
      },
      {
        id: "guerre-simulation",
        illustrationWiki: "Siège (militaire)",
        titre: "Simulation : mener un siège",
        type: "siege",
        /* succes : chance de base (0-1) que la tactique fasse tomber le
           château. duree en jours. Une simulation pédagogique, pas un
           calcul historique : le hasard y tient sa part, comme dans un
           vrai siège. */
        tactiques: [
          { id: "blocus", nom: "Blocus", desc: "Encercler le château et couper tous ses accès pour épuiser ses réserves, sans risquer l'assaut direct.", dureeMin: 30, dureeMax: 180, succes: 0.55, defense: "Des réserves alimentaires bien constituées et une source d'eau propre à l'enceinte peuvent faire tenir une garnison des mois ; des sorties nocturnes permettent parfois de ravitailler discrètement le château ou d'attaquer le camp assiégeant." },
          { id: "assaut", nom: "Assaut direct", desc: "Lancer une attaque frontale contre les murs ou les portes, au prix de lourdes pertes, en cherchant une prise rapide.", dureeMin: 1, dureeMax: 14, succes: 0.35, defense: "Les tirs depuis les tours — archères, meurtrières, mâchicoulis — et les projectiles jetés du chemin de ronde infligent de lourdes pertes aux assaillants massés au pied des murs." },
          { id: "escalade", nom: "Escalade", desc: "Franchir discrètement les murs à l'aide d'échelles, de nuit, pour ouvrir une porte de l'intérieur.", dureeMin: 1, dureeMax: 3, succes: 0.25, defense: "Un chemin de ronde bien gardé et des rondes de nuit régulières rendent l'escalade discrète très risquée ; repérés, les assaillants sont abattus avant d'atteindre le sommet du mur." },
          { id: "sape", nom: "Sape", desc: "Creuser une galerie sous les fondations d'une tour ou d'une courtine, puis y mettre le feu pour provoquer son effondrement.", dureeMin: 14, dureeMax: 60, succes: 0.5, defense: "Une douve en eau noie toute tentative de galerie ; à défaut, les défenseurs peuvent creuser une contre-mine pour intercepter les sapeurs et les combattre sous terre." },
          { id: "incendie", nom: "Incendie", desc: "Mettre le feu aux éléments de bois du château — palissades, hourds, toitures, portes — à l'aide de projectiles enflammés.", dureeMin: 1, dureeMax: 10, succes: 0.3, defense: "Les réserves d'eau conservées en hauteur et des toitures d'ardoise ou de tuile plutôt que de chaume limitent la prise du feu." },
          { id: "famine", nom: "Siège par la famine", desc: "Prolonger l'encerclement jusqu'à l'épuisement complet des vivres, sans tenter le moindre assaut.", dureeMin: 60, dureeMax: 365, succes: 0.7, defense: "Un cellier bien approvisionné avant le début du siège, et un rationnement sévère de la garnison, peuvent repousser l'échéance de plusieurs mois." },
          { id: "trahison", nom: "Trahison", desc: "Corrompre ou convaincre un défenseur d'ouvrir une porte ou une poterne, court-circuitant toute la défense.", dureeMin: 1, dureeMax: 1, succes: 0.15, defense: "Rien ne protège totalement contre la trahison, sinon la loyauté de la garnison — mais une porte solidement gardée et une herse tenue prête limitent les dégâts d'une brève ouverture." }
        ],
        machines: [
          { id: "trebuchet", nom: "Trébuchet", desc: "Machine à contrepoids capable de projeter des blocs de plusieurs dizaines de kilos à plus de 100 mètres, redoutable contre les courtines.", boost: { assaut: 0.15, blocus: 0.05 } },
          { id: "mangonneau", nom: "Mangonneau", desc: "Machine à torsion plus légère et plus rapide à mettre en œuvre que le trébuchet, mais de portée et de puissance moindres.", boost: { assaut: 0.08 } },
          { id: "belier", nom: "Bélier", desc: "Poutre renforcée, souvent montée sur roues et protégée par un abri, destinée à enfoncer une porte ou à fissurer un mur par chocs répétés.", boost: { assaut: 0.12 } },
          { id: "beffroi", nom: "Beffroi", desc: "Tour de siège mobile, aussi haute que les remparts qu'elle affronte, permettant aux assaillants de rejoindre le chemin de ronde par une passerelle.", boost: { assaut: 0.1, escalade: 0.15 } },
          { id: "catapulte", nom: "Catapulte", desc: "Terme générique désignant les machines de jet antiques et médiévales ; utile pour lancer projectiles enflammés ou charognes au-dessus des murs.", boost: { incendie: 0.15, blocus: 0.03 } }
        ]
      }
    ]
  },
  {
    id: "construction",
    partie: "VII. Les techniques de construction",
    chapitres: [
      {
        id: "constr-materiaux",
        illustrationWiki: "Pierre de taille",
        titre: "Matériaux",
        paragraphes: [
          "Le choix des matériaux d'un château dépend d'abord de ce que le terrain environnant fournit à moindre coût. La pierre reste le matériau de prédilection des fortifications durables, sous deux formes complémentaires : le moellon, pierre brute ou grossièrement équarrie, rapide à mettre en œuvre pour le cœur des murs, et la pierre de taille, soigneusement taillée à angles droits, réservée aux parements visibles, aux angles et aux encadrements d'ouvertures pour leur solidité et leur régularité.",
          "La brique, cuite dans des fours locaux, se généralise à partir du XIIIe siècle dans les régions pauvres en pierre de bonne qualité, notamment dans le nord et le sud-ouest de la France ; elle permet des motifs décoratifs par alternance de couleurs. Le bois, omniprésent dans les premiers châteaux (mottes castrales, palissades, hourds), reste indispensable même après la généralisation de la pierre pour les charpentes, les échafaudages et les planchers. La terre, enfin, sert à l'origine des mottes castrales et, sous forme de mortier ou de torchis, entre dans la composition de nombreux ouvrages annexes."
        ]
      },
      {
        id: "constr-construction",
        illustrationWiki: "Tailleur de pierre",
        titre: "Construction",
        paragraphes: [
          "Édifier un château mobilise un savoir-faire technique considérable, souvent développé sur plusieurs années de chantier. L'extraction s'effectue dans une carrière la plus proche possible du site, pour limiter le coût et la difficulté du transport des blocs ; la taille de pierre y donne aux blocs leur forme définitive, ou se poursuit sur le chantier lui-même pour les pièces d'encadrement les plus délicates. La maçonnerie proprement dite consiste à assembler les pierres au mortier, un mélange de chaux, de sable et d'eau qui durcit progressivement et solidarise l'ensemble.",
          "Pour travailler en hauteur, des échafaudages de bois, dont les trous de boulin — ces encoches encore visibles dans certains murs anciens — marquent l'emplacement, accompagnent la progression du chantier ; le levage des blocs les plus lourds fait appel à des grues à roue, actionnées par la force humaine. Les voûtes, en berceau ou d'arêtes selon les périodes, couvrent les salles sans recourir au bois, réduisant les risques d'incendie ; les charpentes, elles, restent indispensables pour porter les toitures et les planchers des étages."
        ]
      },
      {
        id: "constr-chantier",
        illustrationWiki: "Compagnonnage",
        titre: "Organisation du chantier",
        paragraphes: [
          "Un chantier de château mobilise une organisation hiérarchisée de métiers spécialisés, sous l'autorité d'un maître d'œuvre qui conçoit l'ouvrage, dirige son exécution et coordonne l'ensemble des corps de métier — l'équivalent médiéval de l'architecte, bien que le terme lui-même ne s'impose que plus tardivement. Les carriers extraient la pierre à la carrière, que les tailleurs de pierre façonnent ensuite selon les gabarits fournis par le maître d'œuvre, avant que les maçons ne l'assemblent sur le chantier.",
          "Les charpentiers construisent échafaudages, cintres de voûte et charpentes de toiture, tandis que les forgerons fabriquent et entretiennent les outils de tous ces corps de métier, ainsi que les ferrures des portes et les éléments métalliques de la construction. Ce chantier pouvait employer, sur les entreprises royales les plus vastes, plusieurs centaines d'ouvriers simultanément, mobilisés parfois pendant des décennies."
        ]
      }
    ]
  },
  {
    id: "territoire",
    partie: "VIII. Le territoire du château",
    chapitres: [
      {
        id: "terr-seigneurie",
        illustrationWiki: "Fief",
        titre: "La seigneurie",
        paragraphes: [
          "Un château n'existe jamais isolé : il est le siège d'une seigneurie, territoire sur lequel son détenteur exerce autorité et perçoit des droits. Ce territoire englobe typiquement un ou plusieurs villages, dont les habitants doivent au seigneur diverses redevances, ainsi que des terres cultivées, directement exploitées pour son compte (la réserve) ou concédées à des tenanciers moyennant des droits en nature ou en argent.",
          "Le seigneur perçoit ainsi des revenus multiples : cens et rentes sur les terres tenues par ses paysans, banalités pour l'usage obligatoire de son moulin, de son four ou de son pressoir, péages sur les routes et les ponts de son ressort, amendes perçues au titre de la justice qu'il rend. Cette justice, précisément, constitue l'un des attributs majeurs du pouvoir seigneurial : réunie dans la grande salle du château, elle tranche les litiges entre habitants de la seigneurie et sanctionne les infractions à son autorité, avec des degrés de compétence — haute, moyenne et basse justice — qui varient selon le rang et les privilèges du seigneur."
        ]
      },
      {
        id: "terr-relations",
        illustrationWiki: "Village médiéval déserté",
        titre: "Relations spatiales",
        paragraphes: [
          "L'implantation d'un château répond rarement au hasard : sa position dans le paysage traduit les besoins qu'il doit satisfaire. La relation château / village est la plus fréquente : le château domine ou jouxte l'agglomération dont il assure la protection et dont il perçoit les revenus, les deux entités formant un ensemble économique et social indissociable. La proximité château / église, quant à elle, associe pouvoir temporel et autorité spirituelle, le seigneur assistant aux offices et contrôlant parfois la nomination du curé de la paroisse.",
          "Le choix du site répond aussi à des impératifs stratégiques et économiques. La relation château / rivière permet de contrôler un gué ou un pont, tout en assurant l'approvisionnement en eau et, souvent, en alimentant les douves ; la relation château / route place l'édifice au croisement d'axes de circulation majeurs, pour y lever des péages et surveiller les déplacements. À plus grande échelle, la relation château / frontière fait du château un poste avancé de défense d'un royaume ou d'une principauté contre un voisin rival, tandis que la relation château / port, plus rare, protège un mouillage ou une embouchure et permet de contrôler le commerce maritime ou fluvial."
        ]
      }
    ]
  },
  {
    id: "typologie",
    partie: "IX. Typologie des châteaux",
    chapitres: [
      {
        id: "typo-fonction",
        illustration: "hautbarr",
        titre: "Selon la fonction",
        paragraphes: [
          "Un même mot désigne des édifices aux fonctions très différentes. Le château résidence privilégie le confort et l'apparat sur la défense : c'est le cas de la plupart des châteaux de la Renaissance et de l'époque classique, conçus pour être habités et pour recevoir. À l'opposé, la forteresse subordonne tout à l'efficacité militaire, quitte à sacrifier tout confort résidentiel — les places frontières bâties ou remaniées par Vauban en offrent l'exemple le plus abouti.",
          "Entre ces deux pôles, le château administratif sert de siège à l'exercice du pouvoir local : perception des droits, justice, gestion du domaine, sans qu'il soit nécessairement le lieu de résidence principal de son détenteur. Le château royal cumule souvent plusieurs de ces fonctions à l'échelle du royaume : résidence, symbole du pouvoir monarchique, verrou stratégique ou administration d'une province. Le château épiscopal, enfin, appartient à un évêque ou à un archevêque, qui y exerce à la fois son autorité spirituelle et les prérogatives temporelles souvent attachées à sa charge — le château du Haut-Barr, résidence de repli des princes-évêques de Strasbourg, en est un exemple alsacien."
        ]
      },
      {
        id: "typo-forme",
        illustrationWiki: "Château concentrique",
        titre: "Selon la forme",
        paragraphes: [
          "La forme d'un château retrace assez fidèlement son époque de construction. La motte castrale, la plus ancienne, associe une butte de terre artificielle à une tour de bois et une basse-cour palissadée. Le château à enceinte privilégie une ou plusieurs murailles concentriques comme principale ligne de défense, tandis que le château à donjon fait reposer l'essentiel de sa résistance sur une tour maîtresse isolée, capable de tenir seule après la chute des défenses extérieures.",
          "Le château à tours multiplie les ouvrages de flanquement le long de ses courtines pour supprimer les angles morts, une évolution qui culmine avec le château philippien du XIIIe siècle, à l'enceinte régulière cantonnée de tours cylindriques identiques. Le château bastionné, enfin, abandonne tours et courtines verticales au profit de bastions triangulaires bas et épais, conçus pour résister à l'artillerie et pour la contre-battre — une forme qui n'appartient plus vraiment au château médiéval mais à la fortification moderne."
        ]
      },
      {
        id: "typo-epoque",
        illustration: "carcassonne",
        titre: "Selon l'époque",
        paragraphes: [
          "Chaque grande période architecturale imprime sa marque sur le château. Le château féodal, aux Xe-XIIe siècles, reste massif et sommairement défensif, encore proche de ses origines en terre et en bois. Le château gothique, du XIIe au XVe siècle, perfectionne les dispositifs défensifs — tours rondes, mâchicoulis, enceintes concentriques — tout en développant un vocabulaire décoratif propre (arcs brisés, voûtes sur croisée d'ogives) qui gagne aussi les intérieurs seigneuriaux.",
          "Le château Renaissance, au XVIe siècle, subordonne la défense à l'agrément : symétrie, grandes fenêtres, jardins réguliers. Le château classique, au XVIIe siècle, pousse plus loin cette logique dans une architecture d'ordonnance stricte, dont Versailles reste le modèle absolu. Deux styles plus tardifs relisent ensuite l'histoire du château : le néoclassique, aux XVIIIe et XIXe siècles, retrouve la rigueur des ordres antiques, tandis que le néogothique, au XIXe siècle, réinvente un Moyen Âge idéalisé — c'est le cas des grandes restaurations de Viollet-le-Duc à Pierrefonds et à Carcassonne."
        ]
      },
      {
        id: "typo-situation",
        illustration: "gaillard",
        titre: "Selon la situation",
        paragraphes: [
          "L'implantation d'un château répond d'abord à la topographie du terrain disponible. Le château de plaine, dépourvu de défense naturelle, doit compenser par des fossés et des enceintes plus développés ; le château de hauteur, à l'inverse, tire parti du relief pour dominer les environs et compliquer l'accès de tout assaillant. Le château sur éperon occupe un promontoire rocheux protégé sur plusieurs côtés par des pentes abruptes, ne laissant qu'un accès étroit à fortifier — Château-Gaillard en offre un exemple emblématique.",
          "Le château de vallée surveille un axe de circulation ou un cours d'eau depuis une position plus modeste, tandis que le château insulaire, bâti sur une île ou un îlot, comme le château d'If au large de Marseille, se passe presque entièrement de fortifications terrestres au profit de l'obstacle naturel que constitue l'eau. Le château côtier, enfin, surveille un littoral, un mouillage ou l'embouchure d'un fleuve, jouant un rôle de défense avancée contre les incursions venues de la mer."
        ]
      }
    ]
  },
  {
    id: "pouvoir",
    partie: "X. Le château et le pouvoir",
    chapitres: [
      {
        id: "pouv-royal",
        illustration: "versailles",
        titre: "Pouvoir royal",
        paragraphes: [
          "Le château est l'un des instruments privilégiés par lesquels la monarchie française affirme et étend son autorité. Les châteaux royaux, multipliés à mesure que le domaine royal s'agrandit, servent à la fois de résidences itinérantes — la cour se déplaçant fréquemment d'un château à l'autre jusqu'à la fixation à Versailles — et de points d'appui pour l'administration du royaume : perception des impôts, rendu de la justice royale, casernement de troupes.",
          "Le long des frontières, les châteaux royaux prennent une fonction plus directement militaire, verrouillant les points de passage et les axes d'invasion : les places fortes de Vauban, au XVIIe siècle, portent à son terme cette logique de contrôle territorial systématique, avec un réseau continu de fortifications pensé à l'échelle du royaume tout entier plutôt que fief par fief."
        ]
      },
      {
        id: "pouv-seigneurial",
        illustrationWiki: "Féodalité",
        titre: "Pouvoir seigneurial",
        paragraphes: [
          "Le château est indissociable du système féodal qui structure la société médiévale : il est le siège d'où le seigneur exerce son autorité sur ses vassaux, liés à lui par un serment de fidélité — l'hommage — qui les oblige en retour à l'aide militaire et au conseil. Cette vassalité s'organise en pyramide, du simple chevalier tenant un fief modeste jusqu'au roi, théoriquement suzerain de l'ensemble du royaume, chaque échelon devant hommage à celui qui le précède.",
          "Au sein de sa seigneurie, le seigneur exerce la justice, avec des degrés de compétence variables selon son rang, et la fiscalité, en percevant cens, banalités et taxes diverses sur les habitants de son ressort. Ce pouvoir, en théorie délégué par le roi, tend en pratique à devenir héréditaire et quasi autonome durant les périodes de faiblesse du pouvoir central, en particulier aux Xe et XIe siècles."
        ]
      },
      {
        id: "pouv-religieux",
        illustration: "hautbarr",
        titre: "Pouvoir religieux",
        paragraphes: [
          "L'Église médiévale dispose elle aussi de pouvoirs temporels considérables, qui trouvent leur traduction architecturale dans des châteaux épiscopaux : un évêque, seigneur d'un vaste territoire attaché à son siège, peut faire bâtir ou remanier un château pour y exercer son autorité et s'y replier en cas de menace, comme au Haut-Barr, résidence de repli des princes-évêques de Strasbourg.",
          "Les grandes abbayes, propriétaires de domaines étendus et parfois exposées aux raids ou aux pillages, se dotent également de fortifications religieuses : enceintes, tours de guet, parfois de véritables abbayes fortifiées où le monastère se confond presque avec une place forte. Cette fusion du pouvoir spirituel et du pouvoir temporel, caractéristique de la société médiévale, s'estompe progressivement avec l'affirmation de l'autorité royale à partir du XIIIe siècle."
        ]
      },
      {
        id: "pouv-militaire",
        illustrationWiki: "Place forte",
        titre: "Pouvoir militaire",
        paragraphes: [
          "Au-delà de sa dimension résidentielle ou administrative, le château reste avant tout, à ses origines, un outil militaire. Il abrite une garnison permanente, chargée de la défense de l'édifice comme de la surveillance du territoire environnant, et peut être mobilisée pour des opérations plus larges en cas de conflit. Le long des frontières du royaume, les châteaux prennent le statut de places fortes : leur défense, leur ravitaillement et leur commandement font l'objet d'une attention particulière du pouvoir central, qui y maintient des garnisons plus nombreuses et des fortifications régulièrement modernisées.",
          "Cette fonction militaire décline progressivement à partir du XVIe siècle, avec la généralisation de l'artillerie et la spécialisation croissante des places fortes frontalières, qui finissent par se détacher complètement du château résidentiel — donnant naissance, avec les ouvrages de Vauban, à une architecture militaire à part entière."
        ]
      }
    ]
  },
  {
    id: "celebres",
    partie: "XI. Châteaux célèbres",
    chapitres: [
      {
        id: "cel-royaux",
        illustration: "versailles",
        titre: "Les grands châteaux royaux",
        paragraphes: [
          "Plusieurs châteaux résument à eux seuls des siècles de pouvoir royal français. Vincennes, avec son donjon du XIVe siècle et sa Sainte-Chapelle, fut résidence, prison d'État et enfin dépôt d'archives militaires. Fontainebleau, remanié sur près de huit siècles par les rois de France de Saint Louis à Napoléon III, en constitue la synthèse la plus complète. Versailles, enfin, reste l'exemple absolu du château comme instrument de pouvoir : Louis XIV y installe la cour tout entière en 1682, faisant du château le centre politique du royaume pendant plus d'un siècle.",
          "Amboise et Blois, sur les bords de la Loire, furent également résidences royales à part entière sous Charles VIII, Louis XII et François Ier, avant que la cour ne se fixe définitivement en Île-de-France."
        ]
      },
      {
        id: "cel-loire",
        illustration: "chambord",
        titre: "Les châteaux de la Loire",
        paragraphes: [
          "La vallée de la Loire concentre l'une des plus fortes densités de châteaux de France, résultat de plusieurs siècles de résidence royale et aristocratique le long du fleuve. Chambord, chantier démesuré de François Ier, en est l'expression la plus spectaculaire ; Chenonceau, avec sa galerie enjambant le Cher, sans doute la plus photographiée. Azay-le-Rideau et Villandry illustrent le raffinement de la Renaissance ligérienne, tandis qu'Amboise, Blois et Chinon gardent la mémoire des rois qui y résidèrent avant que la cour ne s'installe définitivement en Île-de-France.",
          "Cette concentration exceptionnelle, protégée notamment autour de Chambord, Chenonceau et Amboise, vaut au Val de Loire son inscription au patrimoine mondial de l'UNESCO depuis 2000."
        ]
      },
      {
        id: "cel-cathares",
        illustration: "carcassonne",
        titre: "Les forteresses cathares",
        paragraphes: [
          "Dans les Pyrénées et les Corbières, une série de forteresses perchées sur des sites vertigineux doit sa notoriété à la croisade albigeoise du début du XIIIe siècle, menée contre l'hérésie cathare. Carcassonne, la plus connue, résista au siège de 1209 avant de tomber, puis devint une place forte royale à la frontière du royaume d'Aragon. Peyrepertuse, sur sa crête calcaire, et Montségur, tombé après un siège de dix mois en 1244 qui se conclut par le bûcher de plus de deux cents cathares, comptent parmi les sites les plus emblématiques de cette histoire tragique.",
          "Ces forteresses, souvent qualifiées de « cathares » par raccourci, n'ont pour la plupart été fortifiées ou reconstruites qu'après la croisade, sous l'autorité du roi de France : elles gardent la mémoire du conflit plus qu'elles n'en furent, à l'origine, les places fortes."
        ]
      },
      {
        id: "cel-philippiens",
        illustrationWiki: "Château du Louvre",
        titre: "Les châteaux philippiens",
        paragraphes: [
          "Le règne de Philippe Auguste (1180-1223) impose un modèle de fortification si influent qu'il porte son nom : enceinte quadrangulaire régulière, tours cylindriques identiques également espacées, donjon isolé en tour maîtresse ronde. Le Louvre primitif, aujourd'hui enfoui sous le palais actuel mais dont les fondations sont visibles en sous-sol, en est l'exemple fondateur, imité dans nombre de places fortes royales du domaine capétien comme Dourdan ou Yèvre-le-Château.",
          "Ce modèle, conçu pour supprimer les angles morts qu'offraient les tours carrées aux assaillants, marque une rupture décisive dans l'histoire de la fortification médiévale et influence durablement l'architecture castrale française du XIIIe siècle, bien au-delà des chantiers directement commandités par la couronne."
        ]
      },
      {
        id: "cel-vauban",
        illustration: "besancon",
        titre: "Les forteresses de Vauban",
        paragraphes: [
          "Sébastien Le Prestre de Vauban (1633-1707), ingénieur et maréchal de Louis XIV, réorganise en profondeur la défense des frontières du royaume. Sa méthode, fondée sur des bastions bas et épais capables de résister à l'artillerie et de la contre-battre, ainsi que sur un système de fortifications concentriques complété de places fortes avancées, donne naissance à ce qu'il appelait lui-même son « pré carré » : une double ceinture de places fortes protégeant les frontières du nord et de l'est.",
          "Douze de ces sites, choisis parmi plus d'une centaine de fortifications attribuées à Vauban, sont aujourd'hui inscrits au patrimoine mondial de l'UNESCO — parmi eux, la citadelle de Besançon, verrouillant un méandre du Doubs, illustre l'ampleur et la sophistication de cette architecture militaire, qui marque la fin de l'ère du château fort médiéval au profit d'une science purement défensive."
        ]
      },
      {
        id: "cel-renaissance",
        illustration: "chambord",
        titre: "Les châteaux Renaissance",
        paragraphes: [
          "Au XVIe siècle, le contact avec l'Italie transforme profondément l'architecture castrale française. Chambord, avec son plan centré à donjon cantonné et son escalier à double révolution, synthétise cette rencontre entre tradition française et vocabulaire italien. Azay-le-Rideau et Villandry, plus modestes, illustrent le même mouvement à l'échelle d'une résidence de notable : symétrie des façades, grandes fenêtres à meneaux, jardins ordonnancés.",
          "Ancy-le-Franc, en Bourgogne, œuvre de l'architecte italien Sebastiano Serlio, pousse plus loin encore l'importation directe des modèles transalpins, avec un plan carré à quatre ailes égales considéré comme l'une des premières réalisations pleinement renaissantes de l'architecture française."
        ]
      },
      {
        id: "cel-bourgogne",
        illustration: "bussyrabutin",
        titre: "Les châteaux des ducs de Bourgogne",
        paragraphes: [
          "Au XIVe et XVe siècles, les ducs de Bourgogne de la maison de Valois — Philippe le Hardi, Jean sans Peur, Philippe le Bon, Charles le Téméraire — dirigent l'un des États les plus riches et les plus raffinés d'Europe, dont la puissance rivalise avec celle du royaume de France lui-même. Leur résidence principale, le palais ducal de Dijon, aujourd'hui largement remanié en hôtel de ville, témoigne de cette magnificence, de même que les châteaux ducaux de Flandre, pour la plupart disparus ou profondément transformés depuis.",
          "Le duché s'éteint avec la mort de Charles le Téméraire en 1477 devant Nancy, et ses terres bourguignonnes reviennent à la couronne de France ; le château de Bussy-Rabutin, bâti sur des fondations médiévales de cette même Bourgogne, en garde le souvenir architectural bien après la disparition du duché, quoique sous une forme entièrement remaniée au XVIIe siècle."
        ]
      }
    ]
  },
  {
    id: "patrimoine",
    partie: "XII. Patrimoine et restauration",
    chapitres: [
      {
        id: "patr-protection",
        illustrationWiki: "Monument historique (France)",
        titre: "Classement et inscription",
        paragraphes: [
          "La loi du 31 décembre 1913 sur les monuments historiques organise la protection légale des châteaux en deux niveaux. Le classement, le plus élevé, est prononcé par arrêté du ministre chargé de la Culture après avis de la Commission nationale du patrimoine et de l'architecture : il s'applique aux édifices dont la conservation présente un intérêt public du point de vue de l'histoire ou de l'art. L'inscription, décidée par le préfet de région sur avis de la commission régionale, protège des édifices d'un intérêt suffisant sans justifier un classement.",
          "Ces deux statuts soumettent toute intervention — restauration, modification, voire simple ravalement — à une autorisation préalable et au contrôle d'un architecte des Bâtiments de France, y compris pour les abords de l'édifice. Ils ouvrent aussi, en contrepartie, un accès à des subventions publiques et à des dispositifs fiscaux, dont bénéficient en particulier les propriétaires privés."
        ]
      },
      {
        id: "patr-restauration",
        illustration: "pierrefonds",
        titre: "La restauration",
        paragraphes: [
          "Restaurer un château consiste à consolider et réparer son bâti tout en respectant, autant que possible, son caractère d'origine. La discipline naît véritablement au XIXe siècle avec Prosper Mérimée, premier inspecteur général des monuments historiques, et surtout avec Eugène Viollet-le-Duc, dont les grands chantiers de Pierrefonds, Carcassonne et Vézelay fondent une doctrine — et des controverses — qui marquent encore la restauration française aujourd'hui.",
          "La pratique contemporaine s'appuie sur des principes formalisés par la charte de Venise de 1964 : respect de la matière ancienne, réversibilité des interventions et distinction lisible entre l'authentique et l'ajouté. Sur le terrain, elle affronte des difficultés très concrètes — trouver une pierre de carrière compatible, reproduire un mortier à la chaux, faire appel à des tailleurs de pierre ou des charpentiers formés aux techniques anciennes — sous la conduite d'un architecte en chef des monuments historiques."
        ]
      },
      {
        id: "patr-controverse",
        illustration: "carcassonne",
        titre: "Restaurations controversées",
        paragraphes: [
          "Les chantiers de Viollet-le-Duc restent le cas d'école de la restauration controversée. À Pierrefonds, où il ne subsistait que des murs éventrés, il reconstruit un château presque entier, mêlant vestiges authentiques et inventions inspirées de son idée du Moyen Âge plutôt que de preuves archéologiques précises. À Carcassonne, ses toitures pointues en ardoise, aujourd'hui emblématiques de la cité, doivent davantage à une esthétique septentrionale de son invention qu'aux couvertures méridionales d'origine.",
          "Cette tension entre fidélité archéologique et reconstitution habitable — ou photogénique — n'a rien perdu de son actualité : elle ressurgit à chaque grand chantier patrimonial, la restauration de Notre-Dame de Paris en ayant récemment offert un exemple médiatique. Pour les châteaux, elle oppose le plus souvent la conservation de la ruine telle quelle et la reconstitution d'un état plus complet, plus lisible pour le visiteur mais plus incertain sur le plan historique."
        ]
      },
      {
        id: "patr-reconstruction",
        illustrationWiki: "Guédelon",
        titre: "La reconstruction",
        paragraphes: [
          "La reconstruction se distingue de la restauration en ce qu'elle rebâtit des parties disparues, parfois un édifice entier, à partir de sources indirectes — fouilles archéologiques, gravures anciennes, comparaison avec des bâtiments contemporains — plutôt qu'à partir de la matière d'origine encore en place. Le chantier de Guédelon, dans l'Yonne, en pousse la logique à l'extrême : depuis 1997, un château y est construit ex nihilo avec les techniques et les matériaux du XIIIe siècle, dans une démarche d'archéologie expérimentale plus que de restauration à proprement parler.",
          "Les destructions des deux guerres mondiales ont posé la question en des termes plus douloureux : reconstruire à l'identique, comme mémoire réparée, ou laisser la ruine porter témoignage de la destruction elle-même. Les choix faits château par château, souvent sous contrainte de moyens, restent hétérogènes d'une région à l'autre."
        ]
      },
      {
        id: "patr-conservation",
        illustration: "koenigsbourg",
        titre: "Conservation et entretien",
        paragraphes: [
          "La conservation vise à ralentir la dégradation d'un édifice par des interventions minimales, sans chercher à lui rendre un état antérieur : c'est l'entretien courant — toiture étanche, évacuation des eaux, désherbage des maçonneries — qui en constitue l'outil le plus efficace et le moins coûteux. Un château bien couvert et bien drainé se dégrade lentement ; dès que l'eau s'infiltre, la ruine s'accélère de façon souvent irréversible.",
          "Entretenir un grand édifice ancien représente une charge financière considérable, hors de portée d'un entretien ponctuel. Les propriétaires, publics comme privés, s'appuient sur les subventions de l'État et des collectivités, sur le mécénat et sur des dispositifs comme la Fondation du patrimoine ou le loto du patrimoine, lancé en 2018, qui contribue au financement de sites menacés, châteaux compris."
        ]
      },
      {
        id: "patr-archeologie",
        illustration: "gaillard",
        titre: "L'archéologie castrale",
        paragraphes: [
          "L'archéologie castrale étudie le château par deux approches complémentaires. L'archéologie du bâti lit les maçonneries encore debout — reprises, ruptures d'appareil, traces d'arrachement — pour établir les phases de construction successives d'un édifice, souvent invisibles à l'œil non averti. L'archéologie de terrain, elle, fouille les vestiges enfouis : fondations disparues, structures en bois d'une motte castrale, niveaux d'occupation antérieurs au château de pierre.",
          "Les fouilles de Château-Gaillard ou l'étude de nombreuses mottes castrales ont ainsi révélé des états de construction en bois antérieurs aux tours de pierre visibles aujourd'hui. En amont de travaux importants ou de projets d'aménagement à proximité d'un site protégé, une archéologie préventive peut être prescrite pour documenter ce qui serait autrement détruit sans étude."
        ]
      },
      {
        id: "patr-ruines",
        illustration: "tournoel",
        titre: "Les châteaux en ruine",
        paragraphes: [
          "Une large part des châteaux de France ne subsiste qu'à l'état de ruine. Beaucoup ont été démantelés sur ordre — Richelieu fit raser nombre de places fortes protestantes ou frondeuses au XVIIe siècle — d'autres pillés comme carrières de pierre par les villages voisins une fois abandonnés, d'autres enfin simplement laissés sans entretien jusqu'à l'effondrement des toitures, point de départ d'une dégradation ensuite difficile à arrêter.",
          "Toutes les ruines ne sont pas destinées à être restaurées : certaines sont volontairement conservées en l'état, valorisées pour leur qualité pittoresque plutôt que reconstituées. Cette conservation en ruine pose ses propres exigences — sécurisation des maçonneries instables, limitation ou aménagement de l'accès du public — sans lesquelles la visite doit parfois être interdite."
        ]
      },
      {
        id: "patr-proprietaires",
        illustration: "beynac",
        titre: "Les propriétaires privés",
        paragraphes: [
          "Contrairement à une idée reçue, la majorité des châteaux français appartiennent à des propriétaires privés plutôt qu'à l'État ou aux collectivités : familles installées depuis plusieurs générations, ou acquéreurs plus récents, qui assument seuls ou avec l'aide de subventions l'entretien d'un patrimoine coûteux. Un classement ou une inscription ouvre droit à des aides et à des avantages fiscaux, mais impose en retour des contraintes de travaux et, souvent, une obligation d'ouverture au public un nombre minimal de jours par an.",
          "L'association La Demeure Historique fédère une partie de ces propriétaires privés et les accompagne dans ces démarches. Le principal défi qu'ils partagent reste le financement des travaux sur la durée et la transmission de l'édifice aux générations suivantes, entre habitation, ouverture au public et préservation du caractère du lieu."
        ]
      }
    ]
  },
  {
    id: "archeologie-castrale",
    partie: "XIII. Archéologie castrale",
    chapitres: [
      {
        id: "arch-fouilles",
        illustrationWiki: "Site archéologique",
        titre: "Les fouilles",
        paragraphes: [
          "La fouille reste la méthode la plus ancienne et la plus directe : elle consiste à décaper méthodiquement le sol, couche après couche, en remontant le temps de la plus récente à la plus ancienne. On distingue la fouille programmée, conduite sur plusieurs campagnes pour répondre à une question de recherche, de la fouille préventive, imposée avant un aménagement susceptible de détruire un site — un régime encadré par la loi de 2001 sur l'archéologie préventive et confié le plus souvent à l'Inrap. Sur une motte castrale, une fouille peut ainsi révéler, sous les vestiges de pierre visibles, les trous de poteau d'une tour de bois antérieure que rien en surface ne laissait deviner.",
          "Chaque couche, chaque structure — trou de poteau, foyer, fossé — est décrite, photographiée et dessinée avant d'être retirée, et les objets qu'elle contient sont prélevés et étudiés. Cette opération est par nature destructrice : une fois une couche fouillée, elle a disparu, et seul un enregistrement rigoureux permet d'en conserver l'information pour l'avenir."
        ]
      },
      {
        id: "arch-bati",
        illustrationWiki: "Archéologie de la construction",
        titre: "L'archéologie du bâti",
        paragraphes: [
          "L'archéologie du bâti ne fouille pas le sol mais lit les élévations encore debout, à la manière d'un texte. Elle observe les assises de pierre, les joints de mortier, les marques de tâcheron laissées par les tailleurs de pierre, les changements de matériau ou d'appareillage, et surtout les joints rectilignes qui trahissent une reprise de construction invisible au premier regard — l'endroit précis où un chantier s'est arrêté puis a repris, parfois des décennies plus tard.",
          "Cette méthode complète ou corrige les sources écrites lorsqu'elles manquent ou se contredisent. Une courtine du XIIe siècle rehaussée au XIIIe siècle, par exemple, se signale souvent par un changement net de technique de construction à mi-hauteur d'une tour — une rupture que seul l'œil averti de l'archéologue du bâti sait repérer et dater relativement aux autres parties de l'édifice."
        ]
      },
      {
        id: "arch-stratigraphie",
        illustrationWiki: "Stratigraphie",
        titre: "La stratigraphie",
        paragraphes: [
          "La stratigraphie repose sur un principe simple : sauf perturbation, les couches de terrain se déposent les unes sur les autres au fil du temps, la plus ancienne se trouvant en bas et la plus récente en haut. L'archéologue enregistre chaque « unité stratigraphique » et ses relations avec les autres, souvent formalisées dans un diagramme dit matrice de Harris, pour reconstituer la séquence chronologique complète de l'occupation d'un site.",
          "Sur un site castral, cette séquence peut ainsi superposer une occupation gallo-romaine, une motte du haut Moyen Âge, la tranchée de fondation d'un château de pierre postérieur, puis une couche d'abandon mêlée de gravats et de charbon de bois signalant un incendie. Les perturbations plus tardives — fosses, tranchées de récupération de pierre — compliquent cette lecture et doivent être identifiées comme des intrusions dans la séquence plutôt que comme des couches à part entière."
        ]
      },
      {
        id: "arch-releves",
        illustrationWiki: "Photogrammétrie",
        titre: "Les relevés",
        paragraphes: [
          "Le relevé documente avec précision l'état d'une structure. Le relevé pierre à pierre, traditionnel, dessine à la main la forme et la position de chaque bloc d'une maçonnerie — un travail long mais indispensable avant ou pendant une restauration. Les techniques récentes, photogrammétrie et scanner laser 3D, produisent en quelques heures des nuages de points d'une précision millimétrique là où un relevé manuel aurait demandé des semaines.",
          "Ces relevés servent à plusieurs fins : document de base pour un chantier de restauration, outil de détection des phases de construction par l'analyse des désaffleurements, des bombements ou des reprises d'une maçonnerie, et archive durable en cas de dégradation ou de destruction ultérieure de l'édifice."
        ]
      },
      {
        id: "arch-aerienne",
        illustrationWiki: "Archéologie aérienne",
        titre: "L'archéologie aérienne",
        paragraphes: [
          "La photographie aérienne révèle des traces invisibles au sol. Les marques de végétation trahissent d'anciennes structures enfouies : une culture pousse plus haute et plus verte au-dessus d'un fossé comblé, plus riche en humidité, et plus chétive au-dessus d'un mur arasé, qui limite l'enracinement. Les marques de sol, après labour, et les marques d'ombre, sous une lumière rasante de fin de journée, révèlent quant à elles le relief résiduel de talus ou de fossés d'une basse-cour aujourd'hui nivelée.",
          "Développée en France à partir des années 1960 — les travaux de Roger Agache en Picardie en restent la référence, avec plusieurs centaines de sites jusque-là inconnus repérés depuis les airs — cette méthode se révèle particulièrement efficace pour des sites entièrement arasés par des siècles de labour, sans aucune trace visible depuis le sol mais dont le plan reste lisible, au bon moment de l'année et de la journée, dans un champ de blé."
        ]
      },
      {
        id: "arch-lidar",
        illustrationWiki: "Lidar",
        titre: "Le LIDAR",
        paragraphes: [
          "Le LIDAR (Light Detection And Ranging) mesure, depuis un avion, des millions de points par seconde grâce à un laser, puis filtre numériquement la végétation pour ne conserver que le sol nu. Le modèle numérique de terrain ainsi obtenu révèle un relief que ni la photographie aérienne classique ni l'observation au sol ne peuvent percevoir : fossés, talus, terrasses ou carrières, même sous un couvert forestier dense.",
          "En France, le programme LIDAR HD de l'IGN, lancé dans les années 2020, couvre progressivement l'ensemble du territoire et a déjà permis de repérer de nombreuses mottes castrales ou enceintes jusque-là inconnues, dissimulées sous la forêt — un apport particulièrement précieux dans les régions boisées où la prospection au sol est difficile et où la photographie aérienne classique ne peut rien montrer sous la canopée."
        ]
      },
      {
        id: "arch-prospections",
        illustrationWiki: "Magnétométrie",
        titre: "Les prospections",
        paragraphes: [
          "Prospecter, c'est étudier un site sans le fouiller. La prospection pédestre consiste à parcourir un terrain pour collecter en surface des indices — tessons de céramique, fragments de tuile — qui signalent la présence et permettent d'esquisser la datation d'une occupation enfouie. La prospection géophysique, elle, utilise des instruments pour détecter des anomalies sous la surface : le magnétomètre repère les terres cuites ou remaniées et les objets métalliques, le géoradar restitue une image en coupe du sous-sol, et le prospecteur à résistivité électrique distingue les murs, plus secs et plus résistants, des fossés, plus humides et moins résistants.",
          "Ces méthodes non destructives précèdent souvent la décision de fouiller, pour cibler les zones les plus informatives et éviter de détruire inutilement des vestiges qui pourraient rester en place. Une étude peut aussi s'arrêter à la seule prospection, lorsque la fouille n'est ni justifiée ni autorisée."
        ]
      },
      {
        id: "arch-datation",
        illustrationWiki: "Dendrochronologie",
        titre: "La datation",
        paragraphes: [
          "Dater un vestige combine plusieurs méthodes complémentaires. La typologie compare des formes architecturales — profil d'une archère, moulure, technique de taille — à une chronologie établie à partir d'exemples déjà datés avec certitude. La dendrochronologie, qui étudie les cernes de croissance du bois conservé — charpentes, pieux de fondation enfoncés en milieu humide — peut fournir, quand suffisamment de cernes et une chronologie de référence sont disponibles, l'année d'abattage précise de l'arbre. La datation au carbone 14 s'applique aux matières organiques, charbon de bois ou os, et situe leur mort dans une fourchette de probabilité, utile en particulier pour des phases anciennes ou mal documentées.",
          "D'autres méthodes ciblent le mortier lui-même, en datant au carbone 14 sa carbonatation, ou l'archéomagnétisme, qui date une argile cuite — un foyer, par exemple — d'après l'orientation du champ magnétique terrestre au moment de sa dernière cuisson. Recouper plusieurs méthodes indépendantes sur une même structure renforce la fiabilité de la datation obtenue, chaque méthode ayant sa propre marge d'erreur et ses propres limites."
        ]
      },
      {
        id: "arch-archives",
        illustrationWiki: "Cartulaire",
        titre: "Les archives",
        paragraphes: [
          "Les sources écrites complètent les vestiges matériels. Les cartulaires, recueils de chartes médiévales, et les actes de transaction retracent les changements de possession d'un château ; les comptes de construction, lorsqu'ils sont conservés, détaillent le coût, les matériaux et la main-d'œuvre d'une campagne de travaux précise. Plans anciens, terriers et inventaires de domaine aident, quant à eux, à localiser des dépendances aujourd'hui disparues.",
          "Ces sources ne sont jamais neutres ni complètes : rédigées par et pour les puissants, elles disent peu du quotidien des domestiques, et nombre de textes ont été perdus, si bien que le silence des archives ne prouve jamais l'absence sur le terrain. Confronter les textes aux vestiges — et accepter qu'ils se contredisent parfois — fait partie intégrante du travail de l'historien comme de l'archéologue."
        ]
      },
      {
        id: "arch-synthese",
        illustrationWiki: "Archéologie de la construction",
        titre: "Reconstituer l'évolution d'un château",
        paragraphes: [
          "Aucune de ces méthodes ne suffit seule. Établir les phases successives de construction d'un château suppose de croiser la lecture du bâti pour repérer les reprises dans les maçonneries encore debout, la fouille stratigraphique pour retrouver les phases effacées en surface, les méthodes de datation pour placer chaque phase sur une chronologie absolue, et le recoupement des archives pour attacher un nom, une date ou un commanditaire à une phase d'abord identifiée par la seule pierre.",
          "Le déroulement type d'une étude illustre cette complémentarité : une photographie aérienne ou un relevé LIDAR signale d'abord un fossé ou une enceinte invisibles au sol ; une prospection géophysique cible ensuite l'endroit le plus informatif pour ouvrir un sondage sans surfouiller ; la fouille et la lecture des élévations établissent une séquence relative des phases de construction ; la dendrochronologie ou le carbone 14 ancrent cette séquence dans le temps ; les archives, quand elles existent, y attachent enfin le nom d'un seigneur ou un événement précis. C'est ce travail par couches successives qui explique pourquoi l'histoire d'un même château est souvent réécrite, des décennies durant, à mesure que de nouvelles campagnes apportent de nouvelles preuves."
        ]
      }
    ]
  },
  {
    id: "chateaux-disparus",
    partie: "XIV. Châteaux disparus",
    chapitres: [
      {
        id: "dis-etudier",
        illustrationWiki: "Jacques Ier Androuet du Cerceau",
        titre: "Étudier un château disparu",
        paragraphes: [
          "Un château disparu ne peut plus être visité : il n'en subsiste ni mur ni ruine identifiable, parfois pas même un renflement de terrain. Sa connaissance repose alors entièrement sur des sources indirectes — localisation déduite d'un plan ancien, d'un toponyme ou d'un cadastre, période estimée par recoupement de textes, histoire reconstituée à partir d'actes, de comptes ou de récits contemporains.",
          "Plans et gravures d'Ancien Régime, quand ils existent, restent la source la plus précieuse : les recueils de Jacques Androuet du Cerceau au XVIe siècle ou les minutes du cadastre napoléonien permettent souvent de retrouver l'implantation exacte d'un édifice depuis longtemps rasé. Les archives notariales, les comptes de démolition et, pour les périodes les plus anciennes, la seule archéologie de terrain (voir partie XIII) prennent le relais lorsque aucune image n'a survécu. Une reconstitution graphique ou virtuelle reste néanmoins toujours hypothétique, fondée sur un faisceau d'indices plus que sur une observation directe."
        ]
      },
      {
        id: "dis-causes",
        illustration: "boves",
        titre: "Pourquoi un château disparaît",
        paragraphes: [
          "Un château disparaît rarement d'un coup. Le démantèlement politique, ordonné par le pouvoir pour priver un adversaire de sa forteresse, est l'une des causes les plus anciennes : Richelieu au XVIIe siècle, puis la Convention pendant la Révolution, en rasent ainsi plusieurs centaines, jugés inutiles ou dangereux pour l'ordre nouveau. L'incendie, accidentel ou provoqué par un conflit, en détruit d'autres d'un coup, ne laissant parfois que des murs noircis incapables de résister aux intempéries suivantes.",
          "Plus lente, la récupération des matériaux — la pierre de taille, coûteuse à extraire, se revend ou se réemploie dans des constructions voisines — use un édifice abandonné sur plusieurs générations jusqu'à sa disparition complète. L'urbanisation, enfin, efface directement certains sites en les recouvrant : un château médiéval peut aujourd'hui reposer, invisible, sous une place ou un quartier construits par-dessus ses fondations. Les conflits du XXe siècle ajoutent une cause plus brutale encore, l'artillerie et la destruction délibérée pouvant réduire en quelques heures un édifice qui avait traversé sept siècles."
        ]
      },
      {
        id: "dis-bastille",
        illustrationWiki: "Bastille",
        titre: "La Bastille",
        paragraphes: [
          "Bâtie à partir de 1370 sous Charles V pour protéger l'est de Paris, la Bastille Saint-Antoine devient sous Louis XI et ses successeurs une prison d'État, où sont enfermés à la discrétion du roi, par lettre de cachet, des prisonniers politiques ou de haut rang. Ses huit tours et son enceinte dominent le quartier pendant plus de quatre siècles, jusqu'à sa prise par les insurgés le 14 juillet 1789, épisode fondateur de la Révolution française.",
          "Sa démolition, décidée dans la foulée, est menée avec un sens aigu de la mise en scène par l'entrepreneur Pierre-François Palloy, qui en revend les pierres comme reliques révolutionnaires dans toute la France. De nombreux plans et gravures d'Ancien Régime en ont conservé l'apparence, complétés par les archives de la prison elle-même. Il n'en reste aujourd'hui aucun vestige debout : seul le tracé de ses fondations, marqué au sol place de la Bastille par des pavés de couleur différente, et une tour reconstituée dans le square Henri-Galli en gardent la mémoire."
        ]
      },
      {
        id: "dis-tuileries",
        illustrationWiki: "Palais des Tuileries",
        titre: "Le palais des Tuileries",
        paragraphes: [
          "Commandé par Catherine de Médicis à partir de 1564 en bordure du Louvre, le palais des Tuileries devient, au fil des agrandissements successifs jusqu'à Napoléon III, la résidence principale des souverains français lorsqu'ils séjournent à Paris — Louis XVI y est ramené de force en 1789, Napoléon Ier puis les rois et empereurs suivants en font le siège du pouvoir.",
          "Incendié par les communards en mai 1871 lors des combats qui mettent fin à la Commune de Paris, le palais reste en ruines pendant plus d'une décennie avant d'être définitivement rasé en 1883, jugé irréparable et politiquement encombrant. Existant à l'ère de la photographie, il est abondamment documenté par des clichés, des tableaux et des plans détaillés, si bien qu'un mouvement associatif contemporain milite depuis plusieurs années pour sa reconstruction à l'identique — un projet à ce jour non réalisé."
        ]
      },
      {
        id: "dis-madrid",
        illustrationWiki: "Château de Madrid",
        titre: "Le château de Madrid",
        paragraphes: [
          "Édifié à partir de 1528 dans le bois de Boulogne sur l'ordre de François Ier, qui lui donne le nom de sa captivité espagnole après Pavie, le château de Madrid marie une architecture encore gothique à un décor de terres cuites vernissées inspiré des ateliers italiens de la famille Della Robbia — une résidence de plaisance plus qu'une forteresse, sans vocation défensive.",
          "Vendu comme bien national à la Révolution, il échappe à une destruction immédiate mais décline faute d'entretien, avant d'être démoli par ses propriétaires successifs entre la fin du XVIIIe et le XIXe siècle, ses matériaux réemployés ailleurs. Sa seule trace visuelle fiable provient des gravures de Jacques Androuet du Cerceau, publiées dans son recueil Les Plus Excellents Bâtiments de France dans les années 1570 : sans elles, l'apparence du château serait aujourd'hui presque totalement inconnue. Il n'en subsiste aucun vestige, et aucune reconstitution n'a jamais été entreprise."
        ]
      },
      {
        id: "dis-coucy",
        illustration: "coucy",
        titre: "Le donjon de Coucy",
        paragraphes: [
          "Bâti au XIIIe siècle par Enguerrand III de Coucy, le donjon du château de Coucy, dans l'Aisne, passait pour le plus grand d'Europe : plus de trente mètres de diamètre, un gabarit que ne rapprochait aucune autre tour maîtresse française — la devise que se donnait la famille de Coucy, refusant tout titre de duc, comte ou prince, disait assez l'orgueil attaché à cet édifice hors norme.",
          "Le site, endommagé mais globalement conservé jusqu'au XXe siècle, perd son donjon dans des circonstances brutales : en mars 1917, l'armée allemande en retraite le mine et le fait sauter sans aucune justification militaire, un acte de destruction pure documenté par les archives de l'état-major comme par les relevés qu'en avait faits Viollet-le-Duc au XIXe siècle, avant la catastrophe. Ces relevés restent aujourd'hui la source la plus précise sur une tour disparue en quelques secondes ; le reste du site, consolidé, se visite toujours, mais le donjon, cœur du château, n'a jamais été reconstruit."
        ]
      },
      {
        id: "dis-mottes",
        illustrationWiki: "Motte castrale",
        titre: "Les châteaux de bois et de terre disparus",
        paragraphes: [
          "La plupart des premiers châteaux, bâtis en terre et en bois aux Xe et XIe siècles, ont disparu depuis longtemps sans laisser de trace visible en surface : le bois pourrit, la motte s'aplanit sous les labours successifs, et rien dans le paysage actuel ne signale plus, à l'œil nu, l'emplacement d'une tour qui dominait autrefois tout un territoire.",
          "Aucun plan ni gravure d'époque n'en a conservé l'image — l'écrit lui-même reste souvent muet sur ces édifices modestes, à peine mentionnés dans une charte. Seule l'archéologie, par la fouille de la motte ou sa détection en LIDAR (voir partie XIII), permet aujourd'hui d'en retrouver l'emplacement et d'en restituer l'organisation générale. Leur reconstitution reste nécessairement conjecturale, et aucun de ces châteaux de bois disparus n'a été rebâti sur son emplacement d'origine — le chantier de Guédelon, dans l'Yonne, illustre la technique de construction médiévale sans prétendre reconstituer un site précis."
        ]
      }
    ]
  },
  {
    id: "mythes",
    partie: "XV. Mythes et idées reçues",
    chapitres: [
      {
        id: "mythe-meurtrieres",
        illustrationWiki: "Meurtrière",
        titre: "« Les meurtrières servaient à tirer des flèches »",
        paragraphes: [
          "On imagine la meurtrière comme une simple fente percée pour décocher des flèches sur l'assaillant. C'est vrai à l'origine, mais l'ouverture évolue considérablement au fil des siècles et des progrès de l'armement : la fente droite et étroite du XIIe siècle, adaptée à l'arc, cède la place à des formes plus complexes — croix, trous circulaires à sa base — pour accueillir l'arbalète puis, à partir du XIVe siècle, les premières armes à feu, dont le recul et l'encombrement imposent une ouverture différente.",
          "Beaucoup de ces ouvertures, enfin, n'ont jamais servi qu'à l'aération ou à l'éclairage de la maçonnerie, sans vocation défensive réelle — un mur épais a besoin de percements pour ne pas emprisonner totalement ses occupants dans le noir. La forme d'une meurtrière, plus qu'un détail décoratif, permet ainsi souvent à elle seule de dater une portion de courtine ou de tour (voir partie IV, Ouvertures défensives)."
        ]
      },
      {
        id: "mythe-obscurite",
        illustrationWiki: "Fenêtre à croisée",
        titre: "« Tous les châteaux médiévaux étaient froids et sombres »",
        paragraphes: [
          "L'image d'un intérieur médiéval sombre et glacial doit beaucoup aux châteaux forts en ruine, dépourvus aujourd'hui de toiture, de vitrage et de mobilier, que le visiteur découvre nus. À l'époque de leur usage, la réalité était bien différente pour les espaces de résidence : grande salle éclairée par des fenêtres à meneaux souvent orientées pour capter la lumière, tentures et tapisseries aux couleurs vives isolant du froid autant qu'elles décoraient, cheminées monumentales chauffant les pièces principales.",
          "Cette clarté reste toutefois inégale selon les espaces et les époques : les salles basses, les caves et les parties strictement défensives demeurent sombres et froides par nécessité, tandis que le confort résidentiel s'améliore surtout à partir du XIVe siècle et s'épanouit pleinement avec les grandes demeures Renaissance, largement percées de baies (voir partie V, Les espaces)."
        ]
      },
      {
        id: "mythe-donjon-prison",
        illustration: "coucy",
        titre: "« Un donjon est forcément une prison »",
        paragraphes: [
          "La confusion vient en partie de l'anglais dungeon, qui désigne un cachot, et a fini par déteindre sur le sens perçu du mot français. Le donjon médiéval désigne pourtant tout autre chose : la tour maîtresse d'un château, souvent la plus haute et la mieux défendue, qui sert de résidence au seigneur, de dernier refuge en cas de siège et de symbole de son pouvoir sur le territoire environnant.",
          "Certains donjons comportaient bien un cachot, généralement dans leurs niveaux inférieurs, pour y détenir des prisonniers de guerre ou des criminels — mais cet usage carcéral n'était qu'une fonction parmi d'autres, secondaire par rapport au rôle résidentiel et défensif de la tour. Un édifice entièrement dédié à l'enfermement, comme la Bastille (voir partie XIV), reste l'exception plutôt que la règle."
        ]
      },
      {
        id: "mythe-douves",
        illustration: "chambord",
        titre: "« Les douves étaient toujours remplies d'eau »",
        paragraphes: [
          "Les douves en eau, spectaculaires et bien conservées dans certains châteaux de plaine comme ceux du Val de Loire, ont fini par incarner à elles seules l'image du fossé médiéval. Beaucoup de châteaux, pourtant, en particulier ceux bâtis sur un site élevé ou rocheux, ne disposaient que de fossés secs, creusés dans le rocher ou la terre, sans aucune arrivée d'eau possible.",
          "Le choix dépendait avant tout de la topographie et de la nappe phréatique locale : un fossé sec, bien entretenu et à parois abruptes, freine tout autant la progression d'un assaillant et de ses machines de siège qu'un fossé en eau, sans les contraintes d'entretien — envasement, moustiques, fuites — que ce dernier impose (voir partie III, Les douves)."
        ]
      },
      {
        id: "mythe-uniquement-militaire",
        illustration: "fontainebleau",
        titre: "« Un château fort était uniquement militaire »",
        paragraphes: [
          "Réduire le château à sa seule fonction défensive ignore la plupart des activités qui s'y déroulaient au quotidien. Le château est tout autant un centre administratif, où le seigneur rend la justice et perçoit les droits dus par ses tenanciers, un centre économique, avec ses greniers, ses ateliers et parfois son moulin, et une résidence, avec ses appartements, sa chapelle et ses espaces de réception.",
          "Cette dimension multiple varie certes selon le type d'édifice : une place forte frontalière reste avant tout un outil militaire, tandis qu'un château résidentiel de la Renaissance abandonne presque entièrement la défense au profit de l'agrément (voir partie IX, Selon la fonction). Mais même les châteaux les plus martiaux du Moyen Âge combinent en réalité ces différentes fonctions, la défense n'étant jamais qu'un aspect parmi d'autres de la vie du château."
        ]
      },
      {
        id: "mythe-pont-levis",
        illustration: "sedan",
        titre: "« Le pont-levis se levait chaque soir »",
        paragraphes: [
          "L'image du pont-levis relevé chaque nuit avec fracas, comme un rituel systématique, doit beaucoup au cinéma et à la bande dessinée plus qu'à la réalité historique. Dans bien des châteaux, en particulier lorsque la garnison permanente diminue et que les relations avec le voisinage se pacifient, le pont reste abaissé la plupart du temps, la herse et les portes suffisant à assurer une fermeture nocturne courante.",
          "La manœuvre du pont-levis, lourde et bruyante, restait réservée aux moments de menace réelle — approche d'une troupe hostile, période de guerre ouverte — plutôt qu'à un usage quotidien systématique. Certains châteaux, enfin, ne disposaient même pas de pont mobile, leur entrée se faisant par un pont fixe protégé par d'autres dispositifs défensifs (voir partie IV, Entrées)."
        ]
      },
      {
        id: "mythe-huile-bouillante",
        illustrationWiki: "Mâchicoulis",
        titre: "« L'huile bouillante était l'arme favorite des assiégés »",
        paragraphes: [
          "L'huile bouillante versée depuis les mâchicoulis sur les assaillants reste l'une des images les plus répandues du siège médiéval — alors que l'huile, denrée coûteuse et produite en quantités limitées, n'était en réalité que rarement employée à cette fin. Les défenseurs lui préféraient des matières bien moins onéreuses et tout aussi efficaces.",
          "L'eau bouillante, la chaux vive, qui brûle au contact de l'humidité, le sable brûlant, qui s'infiltre sous les armures, ou simplement des pierres et des projectiles divers constituaient l'essentiel de ce qui était déversé depuis les mâchicoulis et les hourds (voir partie VI, La défense du siège). L'huile bouillante doit sa postérité surtout aux récits et aux représentations postérieures, plus qu'à une pratique réellement généralisée sur les chantiers de siège."
        ]
      },
      {
        id: "mythe-armure",
        illustrationWiki: "Plate (armure)",
        titre: "« Un chevalier en armure ne pouvait plus se relever seul »",
        paragraphes: [
          "L'idée d'un chevalier prisonnier de son armure, incapable de se redresser une fois tombé, appartient largement à la légende. Une armure de plates complète du XVe siècle, bien ajustée à son porteur, pèse en réalité entre vingt et trente kilogrammes — un poids comparable à l'équipement d'un fantassin moderne — et distribué sur l'ensemble du corps plutôt que concentré, contrairement à une idée répandue.",
          "Des reconstitutions modernes ont montré des combattants en armure complète capables de courir, de monter à cheval sans aide et de se relever seuls après une chute. Seules les armures de joute, beaucoup plus lourdes et rigides, conçues pour un usage bref et spécifique en tournoi plutôt que pour le combat réel, justifiaient parfois une assistance pour remonter en selle."
        ]
      },
      {
        id: "mythe-tours-rondes",
        illustrationWiki: "Tour (édifice)",
        titre: "« Toutes les tours de château étaient rondes »",
        paragraphes: [
          "La tour ronde, dont la forme supprime les angles morts qu'offrait la tour carrée aux assaillants, en vient à incarner à elle seule l'image du château fort — au point de faire oublier que la tour carrée ou rectangulaire reste, sur l'ensemble du Moyen Âge, tout aussi répandue.",
          "Plus simple et moins coûteuse à construire, offrant davantage de surface habitable intérieure à diamètre extérieur égal, la tour carrée reste un choix fréquent y compris après la généralisation de la tour ronde à partir du XIIIe siècle — un compromis entre confort et défense que bien des seigneurs, loin des grands chantiers royaux les plus soignés, continuent de préférer (voir partie IV, Tours)."
        ]
      }
    ]
  }
];
