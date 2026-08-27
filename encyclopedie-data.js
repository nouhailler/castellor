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
  },
  {
    id: "vie",
    partie: "V. La vie dans le château",
    chapitres: [
      {
        id: "vie-habitants",
        titre: "Les habitants",
        paragraphes: [
          "Un château médiéval héberge une communauté hiérarchisée bien plus large que la seule famille seigneuriale. Le seigneur, maître des lieux, y exerce son autorité, rend la justice et reçoit l'hommage de ses vassaux ; à ses côtés, la dame gère souvent l'intendance du domaine, en particulier lorsque son époux est absent — en campagne, en croisade ou en pèlerinage — et peut assurer la défense du château en cas de siège.",
          "Autour d'eux gravitent les chevaliers, hommes d'armes montés liés au seigneur par serment de fidélité, et les soldats de la garnison, chargés de la garde permanente des remparts et des tours. Le fonctionnement quotidien du château repose sur une domesticité nombreuse : serviteurs affectés aux tâches du logis, artisans — charpentiers, forgerons, tanneurs — entretenant bâtiments et équipements, cuisiniers nourrissant l'ensemble de la maisonnée, et, dans les châteaux dotés d'une chapelle, un chapelain qui assure les offices et tient souvent aussi le rôle de secrétaire ou de précepteur."
        ]
      },
      {
        id: "vie-espaces",
        titre: "Les espaces",
        paragraphes: [
          "L'organisation intérieure du château répond aux besoins de toute une communauté. La grande salle en est le cœur : vaste pièce où se tiennent les repas collectifs, les réceptions, la justice seigneuriale et parfois les assemblées de vassaux. La chambre seigneuriale, plus retirée, sert à la fois de lieu de repos et d'espace privé où se règlent les affaires les plus confidentielles ; la chapelle, quand le château en possède une, assure la vie religieuse du seigneur et de sa maisonnée sans avoir à sortir de l'enceinte.",
          "Les espaces de service occupent une part importante du bâti : la cuisine, souvent isolée du corps de logis principal pour limiter les risques d'incendie, le cellier et la cave, où sont conservées les réserves de vivres et de boissons, la forge, indispensable à l'entretien des armes, outils et ferrures, et l'écurie, qui abrite les chevaux de guerre comme les montures de trait. Le grenier met les récoltes de céréales à l'abri de l'humidité et des rongeurs, tandis que les latrines, aménagées en encorbellement au-dessus des douves ou d'une fosse, évacuent les eaux usées loin des espaces de vie."
        ]
      },
      {
        id: "vie-quotidien",
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
        titre: "Comment prend-on un château ?",
        paragraphes: [
          "Prendre un château fort n'est jamais une affaire simple : chaque option s'offrant à l'assiégeant comporte ses risques, son coût et son incertitude. Le blocus, le plus prudent, consiste à encercler la place et à couper tous ses accès, en pariant sur l'épuisement progressif des défenseurs plutôt que sur la force ; poussé à son terme, il devient un siège par la famine, capable de faire capituler une garnison sans qu'un seul coup ne soit porté contre les murs, au prix de plusieurs mois — le siège de Château-Gaillard, en 1203-1204, dura ainsi près de six mois avant la prise de la forteresse.",
          "L'assaut direct, à l'inverse, cherche une décision rapide : échelles pour l'escalade, béliers contre les portes, machines de siège pour ouvrir une brèche. Plus risqué, il expose les assaillants aux tirs des défenseurs mais peut emporter la décision en quelques jours. La sape, elle, mise sur la patience et la technique : creuser sous les fondations pour provoquer leur effondrement. Plus rarement, l'incendie s'attaque aux éléments de bois du château, et la trahison — la corruption ou la persuasion d'un défenseur — permet parfois de s'emparer d'une place jugée imprenable sans lever la moindre machine de siège."
        ]
      },
      {
        id: "guerre-machines",
        titre: "Les machines de siège",
        paragraphes: [
          "Les machines de siège médiévales se répartissent en deux grandes familles : celles qui projettent des charges à distance, et celles qui permettent l'assaut direct des murs. Le trébuchet, machine à contrepoids apparue en Occident au XIIe siècle, projette des blocs de plusieurs dizaines de kilos à plus d'une centaine de mètres et représente l'arme de siège la plus redoutable contre la maçonnerie avant l'artillerie à poudre. Le mangonneau, plus ancien et fonctionnant par torsion, offre une portée et une puissance moindres mais se met en œuvre plus rapidement. Le terme de catapulte, plus générique, désigne l'ensemble de ces machines de jet, souvent employées pour lancer des projectiles enflammés ou, en dernier recours, des charognes destinées à propager la maladie dans la place assiégée.",
          "Pour l'assaut direct, le bélier — poutre renforcée, parfois montée sur roues et protégée par un abri — enfonce les portes ou fissure les murs à coups répétés, tandis que le beffroi, tour de siège mobile aussi haute que les remparts visés, permet aux assaillants de rejoindre le chemin de ronde par une passerelle, sans avoir à escalader la muraille à découvert."
        ]
      },
      {
        id: "guerre-defense",
        titre: "La défense du siège",
        paragraphes: [
          "Face à ces techniques, les défenseurs disposent eux aussi de tout un arsenal de réponses. Les tirs depuis les tours et le chemin de ronde — archères, meurtrières, mâchicoulis, assommoirs — infligent de lourdes pertes à quiconque s'approche des murs, tandis que des projectiles variés (pierres, poix bouillante, chaux vive) peuvent être jetés sur les assaillants massés au pied de l'enceinte. Une réserve d'eau suffisante, puisée dans un puits ou une citerne intérieure, protège des tentatives d'incendie comme d'un blocus prolongé de la seule source extérieure ; des réserves alimentaires abondantes, constituées avant le début du siège, permettent de tenir des mois entiers sans céder à la famine.",
          "Contre la sape, les défenseurs peuvent creuser une contre-mine pour intercepter les galeries ennemies et combattre les sapeurs sous terre. Enfin, des sorties, menées de nuit ou par surprise, permettent d'attaquer le camp assiégeant, de détruire ses machines de siège ou de se ravitailler discrètement — inversant, l'espace d'une nuit, les rôles de l'assiégeant et de l'assiégé."
        ]
      },
      {
        id: "guerre-simulation",
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
        titre: "Matériaux",
        paragraphes: [
          "Le choix des matériaux d'un château dépend d'abord de ce que le terrain environnant fournit à moindre coût. La pierre reste le matériau de prédilection des fortifications durables, sous deux formes complémentaires : le moellon, pierre brute ou grossièrement équarrie, rapide à mettre en œuvre pour le cœur des murs, et la pierre de taille, soigneusement taillée à angles droits, réservée aux parements visibles, aux angles et aux encadrements d'ouvertures pour leur solidité et leur régularité.",
          "La brique, cuite dans des fours locaux, se généralise à partir du XIIIe siècle dans les régions pauvres en pierre de bonne qualité, notamment dans le nord et le sud-ouest de la France ; elle permet des motifs décoratifs par alternance de couleurs. Le bois, omniprésent dans les premiers châteaux (mottes castrales, palissades, hourds), reste indispensable même après la généralisation de la pierre pour les charpentes, les échafaudages et les planchers. La terre, enfin, sert à l'origine des mottes castrales et, sous forme de mortier ou de torchis, entre dans la composition de nombreux ouvrages annexes."
        ]
      },
      {
        id: "constr-construction",
        titre: "Construction",
        paragraphes: [
          "Édifier un château mobilise un savoir-faire technique considérable, souvent développé sur plusieurs années de chantier. L'extraction s'effectue dans une carrière la plus proche possible du site, pour limiter le coût et la difficulté du transport des blocs ; la taille de pierre y donne aux blocs leur forme définitive, ou se poursuit sur le chantier lui-même pour les pièces d'encadrement les plus délicates. La maçonnerie proprement dite consiste à assembler les pierres au mortier, un mélange de chaux, de sable et d'eau qui durcit progressivement et solidarise l'ensemble.",
          "Pour travailler en hauteur, des échafaudages de bois, dont les trous de boulin — ces encoches encore visibles dans certains murs anciens — marquent l'emplacement, accompagnent la progression du chantier ; le levage des blocs les plus lourds fait appel à des grues à roue, actionnées par la force humaine. Les voûtes, en berceau ou d'arêtes selon les périodes, couvrent les salles sans recourir au bois, réduisant les risques d'incendie ; les charpentes, elles, restent indispensables pour porter les toitures et les planchers des étages."
        ]
      },
      {
        id: "constr-chantier",
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
        titre: "La seigneurie",
        paragraphes: [
          "Un château n'existe jamais isolé : il est le siège d'une seigneurie, territoire sur lequel son détenteur exerce autorité et perçoit des droits. Ce territoire englobe typiquement un ou plusieurs villages, dont les habitants doivent au seigneur diverses redevances, ainsi que des terres cultivées, directement exploitées pour son compte (la réserve) ou concédées à des tenanciers moyennant des droits en nature ou en argent.",
          "Le seigneur perçoit ainsi des revenus multiples : cens et rentes sur les terres tenues par ses paysans, banalités pour l'usage obligatoire de son moulin, de son four ou de son pressoir, péages sur les routes et les ponts de son ressort, amendes perçues au titre de la justice qu'il rend. Cette justice, précisément, constitue l'un des attributs majeurs du pouvoir seigneurial : réunie dans la grande salle du château, elle tranche les litiges entre habitants de la seigneurie et sanctionne les infractions à son autorité, avec des degrés de compétence — haute, moyenne et basse justice — qui varient selon le rang et les privilèges du seigneur."
        ]
      },
      {
        id: "terr-relations",
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
        titre: "Selon la fonction",
        paragraphes: [
          "Un même mot désigne des édifices aux fonctions très différentes. Le château résidence privilégie le confort et l'apparat sur la défense : c'est le cas de la plupart des châteaux de la Renaissance et de l'époque classique, conçus pour être habités et pour recevoir. À l'opposé, la forteresse subordonne tout à l'efficacité militaire, quitte à sacrifier tout confort résidentiel — les places frontières bâties ou remaniées par Vauban en offrent l'exemple le plus abouti.",
          "Entre ces deux pôles, le château administratif sert de siège à l'exercice du pouvoir local : perception des droits, justice, gestion du domaine, sans qu'il soit nécessairement le lieu de résidence principal de son détenteur. Le château royal cumule souvent plusieurs de ces fonctions à l'échelle du royaume : résidence, symbole du pouvoir monarchique, verrou stratégique ou administration d'une province. Le château épiscopal, enfin, appartient à un évêque ou à un archevêque, qui y exerce à la fois son autorité spirituelle et les prérogatives temporelles souvent attachées à sa charge — le château du Haut-Barr, résidence de repli des princes-évêques de Strasbourg, en est un exemple alsacien."
        ]
      },
      {
        id: "typo-forme",
        titre: "Selon la forme",
        paragraphes: [
          "La forme d'un château retrace assez fidèlement son époque de construction. La motte castrale, la plus ancienne, associe une butte de terre artificielle à une tour de bois et une basse-cour palissadée. Le château à enceinte privilégie une ou plusieurs murailles concentriques comme principale ligne de défense, tandis que le château à donjon fait reposer l'essentiel de sa résistance sur une tour maîtresse isolée, capable de tenir seule après la chute des défenses extérieures.",
          "Le château à tours multiplie les ouvrages de flanquement le long de ses courtines pour supprimer les angles morts, une évolution qui culmine avec le château philippien du XIIIe siècle, à l'enceinte régulière cantonnée de tours cylindriques identiques. Le château bastionné, enfin, abandonne tours et courtines verticales au profit de bastions triangulaires bas et épais, conçus pour résister à l'artillerie et pour la contre-battre — une forme qui n'appartient plus vraiment au château médiéval mais à la fortification moderne."
        ]
      },
      {
        id: "typo-epoque",
        titre: "Selon l'époque",
        paragraphes: [
          "Chaque grande période architecturale imprime sa marque sur le château. Le château féodal, aux Xe-XIIe siècles, reste massif et sommairement défensif, encore proche de ses origines en terre et en bois. Le château gothique, du XIIe au XVe siècle, perfectionne les dispositifs défensifs — tours rondes, mâchicoulis, enceintes concentriques — tout en développant un vocabulaire décoratif propre (arcs brisés, voûtes sur croisée d'ogives) qui gagne aussi les intérieurs seigneuriaux.",
          "Le château Renaissance, au XVIe siècle, subordonne la défense à l'agrément : symétrie, grandes fenêtres, jardins réguliers. Le château classique, au XVIIe siècle, pousse plus loin cette logique dans une architecture d'ordonnance stricte, dont Versailles reste le modèle absolu. Deux styles plus tardifs relisent ensuite l'histoire du château : le néoclassique, aux XVIIIe et XIXe siècles, retrouve la rigueur des ordres antiques, tandis que le néogothique, au XIXe siècle, réinvente un Moyen Âge idéalisé — c'est le cas des grandes restaurations de Viollet-le-Duc à Pierrefonds et à Carcassonne."
        ]
      },
      {
        id: "typo-situation",
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
        titre: "Pouvoir royal",
        paragraphes: [
          "Le château est l'un des instruments privilégiés par lesquels la monarchie française affirme et étend son autorité. Les châteaux royaux, multipliés à mesure que le domaine royal s'agrandit, servent à la fois de résidences itinérantes — la cour se déplaçant fréquemment d'un château à l'autre jusqu'à la fixation à Versailles — et de points d'appui pour l'administration du royaume : perception des impôts, rendu de la justice royale, casernement de troupes.",
          "Le long des frontières, les châteaux royaux prennent une fonction plus directement militaire, verrouillant les points de passage et les axes d'invasion : les places fortes de Vauban, au XVIIe siècle, portent à son terme cette logique de contrôle territorial systématique, avec un réseau continu de fortifications pensé à l'échelle du royaume tout entier plutôt que fief par fief."
        ]
      },
      {
        id: "pouv-seigneurial",
        titre: "Pouvoir seigneurial",
        paragraphes: [
          "Le château est indissociable du système féodal qui structure la société médiévale : il est le siège d'où le seigneur exerce son autorité sur ses vassaux, liés à lui par un serment de fidélité — l'hommage — qui les oblige en retour à l'aide militaire et au conseil. Cette vassalité s'organise en pyramide, du simple chevalier tenant un fief modeste jusqu'au roi, théoriquement suzerain de l'ensemble du royaume, chaque échelon devant hommage à celui qui le précède.",
          "Au sein de sa seigneurie, le seigneur exerce la justice, avec des degrés de compétence variables selon son rang, et la fiscalité, en percevant cens, banalités et taxes diverses sur les habitants de son ressort. Ce pouvoir, en théorie délégué par le roi, tend en pratique à devenir héréditaire et quasi autonome durant les périodes de faiblesse du pouvoir central, en particulier aux Xe et XIe siècles."
        ]
      },
      {
        id: "pouv-religieux",
        titre: "Pouvoir religieux",
        paragraphes: [
          "L'Église médiévale dispose elle aussi de pouvoirs temporels considérables, qui trouvent leur traduction architecturale dans des châteaux épiscopaux : un évêque, seigneur d'un vaste territoire attaché à son siège, peut faire bâtir ou remanier un château pour y exercer son autorité et s'y replier en cas de menace, comme au Haut-Barr, résidence de repli des princes-évêques de Strasbourg.",
          "Les grandes abbayes, propriétaires de domaines étendus et parfois exposées aux raids ou aux pillages, se dotent également de fortifications religieuses : enceintes, tours de guet, parfois de véritables abbayes fortifiées où le monastère se confond presque avec une place forte. Cette fusion du pouvoir spirituel et du pouvoir temporel, caractéristique de la société médiévale, s'estompe progressivement avec l'affirmation de l'autorité royale à partir du XIIIe siècle."
        ]
      },
      {
        id: "pouv-militaire",
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
        titre: "Les grands châteaux royaux",
        paragraphes: [
          "Plusieurs châteaux résument à eux seuls des siècles de pouvoir royal français. Vincennes, avec son donjon du XIVe siècle et sa Sainte-Chapelle, fut résidence, prison d'État et enfin dépôt d'archives militaires. Fontainebleau, remanié sur près de huit siècles par les rois de France de Saint Louis à Napoléon III, en constitue la synthèse la plus complète. Versailles, enfin, reste l'exemple absolu du château comme instrument de pouvoir : Louis XIV y installe la cour tout entière en 1682, faisant du château le centre politique du royaume pendant plus d'un siècle.",
          "Amboise et Blois, sur les bords de la Loire, furent également résidences royales à part entière sous Charles VIII, Louis XII et François Ier, avant que la cour ne se fixe définitivement en Île-de-France."
        ]
      },
      {
        id: "cel-loire",
        titre: "Les châteaux de la Loire",
        paragraphes: [
          "La vallée de la Loire concentre l'une des plus fortes densités de châteaux de France, résultat de plusieurs siècles de résidence royale et aristocratique le long du fleuve. Chambord, chantier démesuré de François Ier, en est l'expression la plus spectaculaire ; Chenonceau, avec sa galerie enjambant le Cher, sans doute la plus photographiée. Azay-le-Rideau et Villandry illustrent le raffinement de la Renaissance ligérienne, tandis qu'Amboise, Blois et Chinon gardent la mémoire des rois qui y résidèrent avant que la cour ne s'installe définitivement en Île-de-France.",
          "Cette concentration exceptionnelle, protégée notamment autour de Chambord, Chenonceau et Amboise, vaut au Val de Loire son inscription au patrimoine mondial de l'UNESCO depuis 2000."
        ]
      },
      {
        id: "cel-cathares",
        titre: "Les forteresses cathares",
        paragraphes: [
          "Dans les Pyrénées et les Corbières, une série de forteresses perchées sur des sites vertigineux doit sa notoriété à la croisade albigeoise du début du XIIIe siècle, menée contre l'hérésie cathare. Carcassonne, la plus connue, résista au siège de 1209 avant de tomber, puis devint une place forte royale à la frontière du royaume d'Aragon. Peyrepertuse, sur sa crête calcaire, et Montségur, tombé après un siège de dix mois en 1244 qui se conclut par le bûcher de plus de deux cents cathares, comptent parmi les sites les plus emblématiques de cette histoire tragique.",
          "Ces forteresses, souvent qualifiées de « cathares » par raccourci, n'ont pour la plupart été fortifiées ou reconstruites qu'après la croisade, sous l'autorité du roi de France : elles gardent la mémoire du conflit plus qu'elles n'en furent, à l'origine, les places fortes."
        ]
      },
      {
        id: "cel-philippiens",
        titre: "Les châteaux philippiens",
        paragraphes: [
          "Le règne de Philippe Auguste (1180-1223) impose un modèle de fortification si influent qu'il porte son nom : enceinte quadrangulaire régulière, tours cylindriques identiques également espacées, donjon isolé en tour maîtresse ronde. Le Louvre primitif, aujourd'hui enfoui sous le palais actuel mais dont les fondations sont visibles en sous-sol, en est l'exemple fondateur, imité dans nombre de places fortes royales du domaine capétien comme Dourdan ou Yèvre-le-Château.",
          "Ce modèle, conçu pour supprimer les angles morts qu'offraient les tours carrées aux assaillants, marque une rupture décisive dans l'histoire de la fortification médiévale et influence durablement l'architecture castrale française du XIIIe siècle, bien au-delà des chantiers directement commandités par la couronne."
        ]
      },
      {
        id: "cel-vauban",
        titre: "Les forteresses de Vauban",
        paragraphes: [
          "Sébastien Le Prestre de Vauban (1633-1707), ingénieur et maréchal de Louis XIV, réorganise en profondeur la défense des frontières du royaume. Sa méthode, fondée sur des bastions bas et épais capables de résister à l'artillerie et de la contre-battre, ainsi que sur un système de fortifications concentriques complété de places fortes avancées, donne naissance à ce qu'il appelait lui-même son « pré carré » : une double ceinture de places fortes protégeant les frontières du nord et de l'est.",
          "Douze de ces sites, choisis parmi plus d'une centaine de fortifications attribuées à Vauban, sont aujourd'hui inscrits au patrimoine mondial de l'UNESCO — parmi eux, la citadelle de Besançon, verrouillant un méandre du Doubs, illustre l'ampleur et la sophistication de cette architecture militaire, qui marque la fin de l'ère du château fort médiéval au profit d'une science purement défensive."
        ]
      },
      {
        id: "cel-renaissance",
        titre: "Les châteaux Renaissance",
        paragraphes: [
          "Au XVIe siècle, le contact avec l'Italie transforme profondément l'architecture castrale française. Chambord, avec son plan centré à donjon cantonné et son escalier à double révolution, synthétise cette rencontre entre tradition française et vocabulaire italien. Azay-le-Rideau et Villandry, plus modestes, illustrent le même mouvement à l'échelle d'une résidence de notable : symétrie des façades, grandes fenêtres à meneaux, jardins ordonnancés.",
          "Ancy-le-Franc, en Bourgogne, œuvre de l'architecte italien Sebastiano Serlio, pousse plus loin encore l'importation directe des modèles transalpins, avec un plan carré à quatre ailes égales considéré comme l'une des premières réalisations pleinement renaissantes de l'architecture française."
        ]
      },
      {
        id: "cel-bourgogne",
        titre: "Les châteaux des ducs de Bourgogne",
        paragraphes: [
          "Au XIVe et XVe siècles, les ducs de Bourgogne de la maison de Valois — Philippe le Hardi, Jean sans Peur, Philippe le Bon, Charles le Téméraire — dirigent l'un des États les plus riches et les plus raffinés d'Europe, dont la puissance rivalise avec celle du royaume de France lui-même. Leur résidence principale, le palais ducal de Dijon, aujourd'hui largement remanié en hôtel de ville, témoigne de cette magnificence, de même que les châteaux ducaux de Flandre, pour la plupart disparus ou profondément transformés depuis.",
          "Le duché s'éteint avec la mort de Charles le Téméraire en 1477 devant Nancy, et ses terres bourguignonnes reviennent à la couronne de France ; le château de Bussy-Rabutin, bâti sur des fondations médiévales de cette même Bourgogne, en garde le souvenir architectural bien après la disparition du duché, quoique sous une forme entièrement remaniée au XVIIe siècle."
        ]
      }
    ]
  }
];
