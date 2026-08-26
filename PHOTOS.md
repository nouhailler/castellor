# Licences des photographies

Audit initial du **26 août 2026** sur 35 photographies, rejoué le même jour sur
les **50** après l'ajout des 15 fiches Chinon → Beaucaire (import Wikidata /
Wikipédia, voir [CONTEXT.md §8](CONTEXT.md#8-feuille-de-route)). Les images ne
sont pas stockées dans ce dépôt : elles sont résolues à l'exécution depuis
Wikimedia Commons, par le chemin décrit dans le [README](README.md#photos).

**Méthode** — pour chaque entrée de `window.CASTELLUM_WIKI`, la vignette est
obtenue par l'API REST de Wikipédia fr, exactement comme le fait l'application ;
le nom de fichier en est extrait, puis les métadonnées de licence sont lues par
l'API MediaWiki de Commons (`prop=imageinfo`, `iiprop=extmetadata`). Le script
est reproductible.

## Résultat

**50 fichiers sur 50 résolus, tous sous licence libre. Aucune restriction
d'usage déclarée. Aucun fichier non libre ni sous usage équitable.**

Les 50 photographies sont hébergées sur **Wikimedia Commons** (aucune sur
Wikipédia fr).

| Licence | Fichiers |
| --- | --- |
| CC BY-SA 3.0 | 22 |
| CC BY-SA 4.0 | 20 |
| CC0 | 3 |
| CC BY 2.5 | 2 |
| CC BY 3.0 | 2 |
| CC BY 4.0 | 1 |

## Ce que cela impose

**47 photographies sur 50 exigent une attribution** (`AttributionRequired`
= vrai) : seules les 3 images en CC0 en sont dispensées. Une licence
CC BY ou CC BY-SA demande de citer **l'auteur**, la **licence** et de renvoyer
vers la source.

> **Fait depuis le 26 août 2026.** L'application affiche, sous chaque photo de
> fiche, « Auteur · Licence · Wikimedia Commons » en lien vers la page du
> fichier, et l'onglet **Hors-ligne** tient la liste complète des crédits. Les
> métadonnées sont lues par la même API que les images, au moment où l'URL est
> résolue. Vérifié : **50 crédits sur 50**, aucun « Auteur non précisé ».

Le partage à l'identique des licences **CC BY-SA ne contamine pas le code** :
il s'applique aux œuvres dérivées de la photographie, pas à un logiciel qui se
contente de l'afficher. La licence [MIT](LICENSE) du projet n'est pas affectée.

## Les deux exceptions, résolues

Deux fichiers exigent l'attribution sans exposer d'auteur dans le champ `Artist`
de leurs métadonnées. Relevés à la main sur Commons, ils sont désormais couverts
par `window.CASTELLUM_PHOTO_CREDITS` dans `chateaux-data.js` :

| Fiche | Situation sur Commons | Crédit affiché |
| --- | --- | --- |
| Chenonceau | Auteur déclaré dans le wikitexte de la page, absent des métadonnées | `Raph` |
| Fougères | Aucun auteur déclaré ; page sans modèle d'infobox | `Gratyn (téléverseur — aucun auteur déclaré)` |

Ce repli ne s'applique **que si l'API ne renvoie rien**, pour ne pas masquer une
métadonnée corrigée entre-temps sur Commons.

## Détail par fiche

| Château | Fichier | Licence | Auteur |
| --- | --- | --- | --- |
| Château royal d'Amboise | [Château_et_tour_des_Minimes_(Amboise).jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_et_tour_des_Minimes_%28Amboise%29.jpg) | CC BY-SA 4.0 | Gzen92 |
| Château d'Angers | [Château_d'Angers,_South_view_20170611_1.jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_d%27Angers%2C_South_view_20170611_1.jpg) | CC BY-SA 4.0 | DXR |
| Manoir d'Ango | [Manoir_d'Ango_duiventoren_18-08-2013_13-39-57.JPG](https://commons.wikimedia.org/wiki/File:Manoir_d%27Ango_duiventoren_18-08-2013_13-39-57.JPG) | CC BY-SA 3.0 | Paul Hermans |
| Palais des papes d'Avignon | [MK53831-32_Palais_des_Papes_d'Avignon.jpg](https://commons.wikimedia.org/wiki/File:MK53831-32_Palais_des_Papes_d%27Avignon.jpg) | CC BY-SA 3.0 | Martin Kraft |
| Château d'Azay-le-Rideau | [Château_d'Azay-le-Rideau_001.jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_d%27Azay-le-Rideau_001.jpg) | CC BY-SA 3.0 | Juan Carlos Cordovez-Mantilla |
| Château de Beaucaire | [Chateau_de_Beaucaire_donjon_1.JPG](https://commons.wikimedia.org/wiki/File:Chateau_de_Beaucaire_donjon_1.JPG) | CC BY-SA 3.0 | Chatsam |
| Château de Beynac | [Castle_of_Beynac_27.jpg](https://commons.wikimedia.org/wiki/File:Castle_of_Beynac_27.jpg) | CC BY-SA 4.0 | Krzysztof Golik |
| Château royal de Blois | [Louis_XII_wing_of_the_castle_of_Blois_01.jpg](https://commons.wikimedia.org/wiki/File:Louis_XII_wing_of_the_castle_of_Blois_01.jpg) | CC BY-SA 4.0 | Krzysztof Golik |
| Château de Bonaguil | [Saint-Front-sur-Lémance_-_Château_de_Bonaguil_-_Vue_d'ensemble.jpg](https://commons.wikimedia.org/wiki/File:Saint-Front-sur-L%C3%A9mance_-_Ch%C3%A2teau_de_Bonaguil_-_Vue_d%27ensemble.jpg) | CC BY-SA 3.0 | MOSSOT |
| Motte castrale de Boves | [Boves_château_(fouilles_-_visite_26_juillet_2008)_14.jpg](https://commons.wikimedia.org/wiki/File:Boves_ch%C3%A2teau_%28fouilles_-_visite_26_juillet_2008%29_14.jpg) | CC BY-SA 3.0 | Markus3 (Marc ROUSSEL) |
| Château de Bussy-Rabutin | [Château_de_Bussy-Rabutin_113.JPG](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Bussy-Rabutin_113.JPG) | CC BY-SA 3.0 | Arnaud 25 |
| Cité de Carcassonne | [1_carcassonne_aerial_2016.jpg](https://commons.wikimedia.org/wiki/File:1_carcassonne_aerial_2016.jpg) | CC BY-SA 4.0 | Chensiyuan |
| Château de Castelnaud-la-Chapelle | [Vue_d'ensemble_Château_de_Castelnaud.jpg](https://commons.wikimedia.org/wiki/File:Vue_d%27ensemble_Ch%C3%A2teau_de_Castelnaud.jpg) | CC BY-SA 3.0 | Château de Castelnaud |
| Château de Chambord | [Chambord_Castle_Northwest_facade.jpg](https://commons.wikimedia.org/wiki/File:Chambord_Castle_Northwest_facade.jpg) | CC BY-SA 3.0 | Benh LIEU SONG |
| Château de Chantilly | [Château_de_Chantilly_2.jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Chantilly_2.jpg) | CC0 | Jebulon |
| Château de Chenonceau | [Chenonceau-20050320.jpg](https://commons.wikimedia.org/wiki/File:Chenonceau-20050320.jpg) | CC BY-SA 3.0 | **à retrouver** |
| Château de Cheverny | [Le_château_de_Cheverny_(1).jpg](https://commons.wikimedia.org/wiki/File:Le_ch%C3%A2teau_de_Cheverny_%281%29.jpg) | CC BY-SA 4.0 | PIERRE ANDRE LECLERCQ |
| Forteresse royale de Chinon | [Chinon_-_Château_vu_depuis_la_plage.jpg](https://commons.wikimedia.org/wiki/File:Chinon_-_Ch%C3%A2teau_vu_depuis_la_plage.jpg) | CC BY-SA 4.0 | Benjamin Smith |
| Château de Coucy | [Coucy_comparaison.jpg](https://commons.wikimedia.org/wiki/File:Coucy_comparaison.jpg) | CC BY-SA 4.0 | Stardsen |
| Château de Falaise | [Chateau_de_Falaise_2008.jpg](https://commons.wikimedia.org/wiki/File:Chateau_de_Falaise_2008.jpg) | CC BY-SA 4.0 | Viault |
| Château de Foix | [Castle_of_Foix_05.jpg](https://commons.wikimedia.org/wiki/File:Castle_of_Foix_05.jpg) | CC BY-SA 4.0 | Krzysztof Golik |
| Château de Fontainebleau | [Château_de_Fontainebleau_(Fontainebleau)_edited_(2).jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Fontainebleau_%28Fontainebleau%29_edited_%282%29.jpg) | CC BY-SA 4.0 | Gzen92

Edited by User:Radomianin |
| Château de Fougères | [Fougeres_chateau.jpg](https://commons.wikimedia.org/wiki/File:Fougeres_chateau.jpg) | CC BY-SA 3.0 | **à retrouver** |
| Château-Gaillard | [Château_Gaillard_(Les_Andelys),_vu_du_ciel.JPG](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_Gaillard_%28Les_Andelys%29%2C_vu_du_ciel.JPG) | CC BY-SA 3.0 | Sylvain Verlaine |
| Château du Haut-Kœnigsbourg | [Vue_du_château_sur_la_plaine_d'Alsace_(au_fond,_la_Forêt-Noire).jpg](https://commons.wikimedia.org/wiki/File:Vue_du_ch%C3%A2teau_sur_la_plaine_d%27Alsace_%28au_fond%2C_la_For%C3%AAt-Noire%29.jpg) | CC BY-SA 4.0 | Le Commissaire |
| Château d'If | [Chateau_d'If_view.jpg](https://commons.wikimedia.org/wiki/File:Chateau_d%27If_view.jpg) | CC BY-SA 4.0 | Marian78ro |
| Château de Josselin | [W0205-Josselin_Chateau_4713.JPG](https://commons.wikimedia.org/wiki/File:W0205-Josselin_Chateau_4713.JPG) | CC BY-SA 3.0 | Llann Wé² |
| Château de Kerjean | [Le_château_de_Kerjean_-_La_façade_Est.jpg](https://commons.wikimedia.org/wiki/File:Le_ch%C3%A2teau_de_Kerjean_-_La_fa%C3%A7ade_Est.jpg) | CC BY-SA 4.0 | 1mpact production, florian lécuyer |
| Fort la Latte | [Fort-LaLatte-byRundvald.jpg](https://commons.wikimedia.org/wiki/File:Fort-LaLatte-byRundvald.jpg) | CC BY-SA 4.0 | Rundvald |
| Cité royale de Loches | [Castle_of_Loches_05.jpg](https://commons.wikimedia.org/wiki/File:Castle_of_Loches_05.jpg) | CC BY-SA 4.0 | Krzysztof Golik |
| Château de Montségur | [Château_de_Montségur_-_vue_aérienne.jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Monts%C3%A9gur_-_vue_a%C3%A9rienne.jpg) | CC BY-SA 3.0 | MDanis |
| Château de Murol | [Murol_Château7.JPG](https://commons.wikimedia.org/wiki/File:Murol_Ch%C3%A2teau7.JPG) | CC0 | Torsade de Pointes |
| Château de Peyrepertuse | [ChateauPeyrepertuse.JPG](https://commons.wikimedia.org/wiki/File:ChateauPeyrepertuse.JPG) | CC BY 2.5 | Jean-Christophe BENOIST |
| Château de Pierrefonds | [Château_de_Pierrefonds_exterior_Oise.jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Pierrefonds_exterior_Oise.jpg) | CC0 | Jebulon |
| Maison forte de Reignac | [Tursac_Reignac_maison_forte_(8).jpg](https://commons.wikimedia.org/wiki/File:Tursac_Reignac_maison_forte_%288%29.jpg) | CC BY-SA 3.0 | Père Igor |
| Château de Roquetaillade | [Vue_des_deux_châteaux_forts_de_Roquetaillade_-_château_vieux_et_château_neuf.jpg](https://commons.wikimedia.org/wiki/File:Vue_des_deux_ch%C3%A2teaux_forts_de_Roquetaillade_-_ch%C3%A2teau_vieux_et_ch%C3%A2teau_neuf.jpg) | CC BY-SA 3.0 | Roquetaillade |
| Forteresse de Salses | [Forteresse_de_Salses_-_Côté_Ouest.jpg](https://commons.wikimedia.org/wiki/File:Forteresse_de_Salses_-_C%C3%B4t%C3%A9_Ouest.jpg) | CC BY-SA 3.0 | Groumfy69 |
| Château de Saumur | [Saumur_(49)_Château_-_Extérieur_-_01.jpg](https://commons.wikimedia.org/wiki/File:Saumur_%2849%29_Ch%C3%A2teau_-_Ext%C3%A9rieur_-_01.jpg) | CC BY-SA 4.0 | GO69 |
| Château de Sedan | [Château_de_Sedan_-_Vue_aérienne_2_©_Pierre_Holley.jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Sedan_-_Vue_a%C3%A9rienne_2_%C2%A9_Pierre_Holley.jpg) | CC BY-SA 4.0 | Château fort de Sedan |
| Château de Sully-sur-Loire | [Château_de_Sully_sur_Loire.jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Sully_sur_Loire.jpg) | CC BY-SA 3.0 | JCFOTO |
| Château de Suscinio | [Château_Suscinio.jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_Suscinio.jpg) | CC BY-SA 3.0 | NicolasGrandjean |
| Château de Tarascon | [Tarascon_Le_Chateau.jpg](https://commons.wikimedia.org/wiki/File:Tarascon_Le_Chateau.jpg) | CC BY 2.5 | Gérard MARIN |
| Château de Tournoël | [Château_de_Tournoël.JPG](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Tourno%C3%ABl.JPG) | CC BY 3.0 | Matthieu Perona |
| Château d'Ussé | [Aerial_image_of_Château_d'Ussé_(view_from_the_east).jpg](https://commons.wikimedia.org/wiki/File:Aerial_image_of_Ch%C3%A2teau_d%27Uss%C3%A9_%28view_from_the_east%29.jpg) | CC BY-SA 4.0 | Carsten Steger |
| Château de Val | [Val_Castle_(15).jpg](https://commons.wikimedia.org/wiki/File:Val_Castle_%2815%29.jpg) | CC BY 4.0 | Tournasol7 |
| Château de Vaux-le-Vicomte | [0_Maincy_-_Château_de_Vaux-le-Vicomte_(2).JPG](https://commons.wikimedia.org/wiki/File:0_Maincy_-_Ch%C3%A2teau_de_Vaux-le-Vicomte_%282%29.JPG) | CC BY-SA 3.0 | Jean-Pol GRANDMONT |
| Château de Versailles | [Vue_aérienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_083.jpg](https://commons.wikimedia.org/wiki/File:Vue_a%C3%A9rienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_083.jpg) | CC BY-SA 3.0 | ToucanWings |
| Château de Villandry | [Chateau-Villandry-VueGenerale-Jardins.jpg](https://commons.wikimedia.org/wiki/File:Chateau-Villandry-VueGenerale-Jardins.jpg) | CC BY 3.0 | Jean-Christophe BENOIST |
| Château de Vincennes | [Vincennes_-_Chateau_02.jpg](https://commons.wikimedia.org/wiki/File:Vincennes_-_Chateau_02.jpg) | CC BY-SA 3.0 | Selbymay |
| Château de Vitré | [Le_Château_de_Vitré_-_L'entrée_principale_et_le_Châtelet_-_Août_2019.jpg](https://commons.wikimedia.org/wiki/File:Le_Ch%C3%A2teau_de_Vitr%C3%A9_-_L%27entr%C3%A9e_principale_et_le_Ch%C3%A2telet_-_Ao%C3%BBt_2019.jpg) | CC BY-SA 4.0 | Erwan Corre |

---

*Les métadonnées de Commons peuvent changer si un fichier est remplacé ou
recatégorisé. Rejouer cet audit avant toute mise en production, et à chaque
ajout de fiche.*
