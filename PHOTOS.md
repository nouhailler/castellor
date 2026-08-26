# Licences des photographies

Audit du **26 août 2026**, portant sur les 35 photographies affichées par
Castellor. Les images ne sont pas stockées dans ce dépôt : elles sont résolues à
l'exécution depuis Wikimedia Commons, par le chemin décrit dans le
[README](README.md#photos).

**Méthode** — pour chaque entrée de `window.CASTELLUM_WIKI`, la vignette est
obtenue par l'API REST de Wikipédia fr, exactement comme le fait l'application ;
le nom de fichier en est extrait, puis les métadonnées de licence sont lues par
l'API MediaWiki de Commons (`prop=imageinfo`, `iiprop=extmetadata`). Le script
est reproductible.

## Résultat

**35 fichiers sur 35 résolus, tous sous licence libre. Aucune restriction
d'usage déclarée. Aucun fichier non libre ni sous usage équitable.**

Les 35 photographies sont hébergées sur **Wikimedia Commons** (aucune sur
Wikipédia fr).

| Licence | Fichiers |
| --- | --- |
| CC BY-SA 3.0 | 15 |
| CC BY-SA 4.0 | 13 |
| CC0 | 3 |
| CC BY 2.5 | 2 |
| CC BY 3.0 | 2 |

## Ce que cela impose

**32 photographies sur 35 exigent une attribution** (`AttributionRequired`
= vrai) : seules les 3 images en CC0 en sont dispensées. Une licence
CC BY ou CC BY-SA demande de citer **l'auteur**, la **licence** et de renvoyer
vers la source.

> **L'application ne le fait pas aujourd'hui.** Elle affiche un crédit global —
> « Photos : Wikimedia Commons / Wikipédia » — sans nommer l'auteur ni la
> licence de chaque cliché. C'est le seul point de non-conformité relevé, et il
> se corrige en affichant les données du tableau ci-dessous, disponibles par la
> même API que les photos.

Le partage à l'identique des licences **CC BY-SA ne contamine pas le code** :
il s'applique aux œuvres dérivées de la photographie, pas à un logiciel qui se
contente de l'afficher. La licence [MIT](LICENSE) du projet n'est pas affectée.

## Points à traiter manuellement

Deux fichiers exigent l'attribution mais ne déclarent aucun auteur exploitable
dans leurs métadonnées : **chenonceau, fougeres**. L'auteur doit être relevé
à la main sur leur page Commons avant tout affichage de crédit.

## Détail par fiche

| Château | Fichier | Licence | Auteur |
| --- | --- | --- | --- |
| Château royal d'Amboise | [Château_et_tour_des_Minimes_(Amboise).jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_et_tour_des_Minimes_%28Amboise%29.jpg) | CC BY-SA 4.0 | Gzen92 |
| Château d'Angers | [Château_d'Angers,_South_view_20170611_1.jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_d%27Angers%2C_South_view_20170611_1.jpg) | CC BY-SA 4.0 | DXR |
| Manoir d'Ango | [Manoir_d'Ango_duiventoren_18-08-2013_13-39-57.JPG](https://commons.wikimedia.org/wiki/File:Manoir_d%27Ango_duiventoren_18-08-2013_13-39-57.JPG) | CC BY-SA 3.0 | Paul Hermans |
| Château d'Azay-le-Rideau | [Château_d'Azay-le-Rideau_001.jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_d%27Azay-le-Rideau_001.jpg) | CC BY-SA 3.0 | Juan Carlos Cordovez-Mantilla |
| Château de Beynac | [Castle_of_Beynac_27.jpg](https://commons.wikimedia.org/wiki/File:Castle_of_Beynac_27.jpg) | CC BY-SA 4.0 | Krzysztof Golik |
| Château royal de Blois | [Louis_XII_wing_of_the_castle_of_Blois_01.jpg](https://commons.wikimedia.org/wiki/File:Louis_XII_wing_of_the_castle_of_Blois_01.jpg) | CC BY-SA 4.0 | Krzysztof Golik |
| Château de Bonaguil | [Saint-Front-sur-Lémance_-_Château_de_Bonaguil_-_Vue_d'ensemble.jpg](https://commons.wikimedia.org/wiki/File:Saint-Front-sur-L%C3%A9mance_-_Ch%C3%A2teau_de_Bonaguil_-_Vue_d%27ensemble.jpg) | CC BY-SA 3.0 | MOSSOT |
| Motte castrale de Boves | [Boves_château_(fouilles_-_visite_26_juillet_2008)_14.jpg](https://commons.wikimedia.org/wiki/File:Boves_ch%C3%A2teau_%28fouilles_-_visite_26_juillet_2008%29_14.jpg) | CC BY-SA 3.0 | Markus3 (Marc ROUSSEL) |
| Cité de Carcassonne | [1_carcassonne_aerial_2016.jpg](https://commons.wikimedia.org/wiki/File:1_carcassonne_aerial_2016.jpg) | CC BY-SA 4.0 | Chensiyuan |
| Château de Castelnaud-la-Chapelle | [Vue_d'ensemble_Château_de_Castelnaud.jpg](https://commons.wikimedia.org/wiki/File:Vue_d%27ensemble_Ch%C3%A2teau_de_Castelnaud.jpg) | CC BY-SA 3.0 | Château de Castelnaud |
| Château de Chambord | [Chambord_Castle_Northwest_facade.jpg](https://commons.wikimedia.org/wiki/File:Chambord_Castle_Northwest_facade.jpg) | CC BY-SA 3.0 | Benh LIEU SONG |
| Château de Chantilly | [Château_de_Chantilly_2.jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Chantilly_2.jpg) | CC0 | Jebulon |
| Château de Chenonceau | [Chenonceau-20050320.jpg](https://commons.wikimedia.org/wiki/File:Chenonceau-20050320.jpg) | CC BY-SA 3.0 | **à retrouver** |
| Château de Cheverny | [Le_château_de_Cheverny_(1).jpg](https://commons.wikimedia.org/wiki/File:Le_ch%C3%A2teau_de_Cheverny_%281%29.jpg) | CC BY-SA 4.0 | PIERRE ANDRE LECLERCQ |
| Château de Coucy | [Coucy_comparaison.jpg](https://commons.wikimedia.org/wiki/File:Coucy_comparaison.jpg) | CC BY-SA 4.0 | Stardsen |
| Château de Foix | [Castle_of_Foix_05.jpg](https://commons.wikimedia.org/wiki/File:Castle_of_Foix_05.jpg) | CC BY-SA 4.0 | Krzysztof Golik |
| Château de Fontainebleau | [Château_de_Fontainebleau_(Fontainebleau)_edited_(2).jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Fontainebleau_%28Fontainebleau%29_edited_%282%29.jpg) | CC BY-SA 4.0 | Gzen92

Edited by User:Radomianin |
| Château de Fougères | [Fougeres_chateau.jpg](https://commons.wikimedia.org/wiki/File:Fougeres_chateau.jpg) | CC BY-SA 3.0 | **à retrouver** |
| Château-Gaillard | [Château_Gaillard_(Les_Andelys),_vu_du_ciel.JPG](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_Gaillard_%28Les_Andelys%29%2C_vu_du_ciel.JPG) | CC BY-SA 3.0 | Sylvain Verlaine |
| Château du Haut-Kœnigsbourg | [Vue_du_château_sur_la_plaine_d'Alsace_(au_fond,_la_Forêt-Noire).jpg](https://commons.wikimedia.org/wiki/File:Vue_du_ch%C3%A2teau_sur_la_plaine_d%27Alsace_%28au_fond%2C_la_For%C3%AAt-Noire%29.jpg) | CC BY-SA 4.0 | Le Commissaire |
| Cité royale de Loches | [Castle_of_Loches_05.jpg](https://commons.wikimedia.org/wiki/File:Castle_of_Loches_05.jpg) | CC BY-SA 4.0 | Krzysztof Golik |
| Château de Montségur | [Château_de_Montségur_-_vue_aérienne.jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Monts%C3%A9gur_-_vue_a%C3%A9rienne.jpg) | CC BY-SA 3.0 | MDanis |
| Château de Murol | [Murol_Château7.JPG](https://commons.wikimedia.org/wiki/File:Murol_Ch%C3%A2teau7.JPG) | CC0 | Torsade de Pointes |
| Château de Peyrepertuse | [ChateauPeyrepertuse.JPG](https://commons.wikimedia.org/wiki/File:ChateauPeyrepertuse.JPG) | CC BY 2.5 | Jean-Christophe BENOIST |
| Château de Pierrefonds | [Château_de_Pierrefonds_exterior_Oise.jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Pierrefonds_exterior_Oise.jpg) | CC0 | Jebulon |
| Maison forte de Reignac | [Tursac_Reignac_maison_forte_(8).jpg](https://commons.wikimedia.org/wiki/File:Tursac_Reignac_maison_forte_%288%29.jpg) | CC BY-SA 3.0 | Père Igor |
| Forteresse de Salses | [Forteresse_de_Salses_-_Côté_Ouest.jpg](https://commons.wikimedia.org/wiki/File:Forteresse_de_Salses_-_C%C3%B4t%C3%A9_Ouest.jpg) | CC BY-SA 3.0 | Groumfy69 |
| Château de Suscinio | [Château_Suscinio.jpg](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_Suscinio.jpg) | CC BY-SA 3.0 | NicolasGrandjean |
| Château de Tarascon | [Tarascon_Le_Chateau.jpg](https://commons.wikimedia.org/wiki/File:Tarascon_Le_Chateau.jpg) | CC BY 2.5 | Gérard MARIN |
| Château de Tournoël | [Château_de_Tournoël.JPG](https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Tourno%C3%ABl.JPG) | CC BY 3.0 | Matthieu Perona |
| Château d'Ussé | [Aerial_image_of_Château_d'Ussé_(view_from_the_east).jpg](https://commons.wikimedia.org/wiki/File:Aerial_image_of_Ch%C3%A2teau_d%27Uss%C3%A9_%28view_from_the_east%29.jpg) | CC BY-SA 4.0 | Carsten Steger |
| Château de Versailles | [Vue_aérienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_083.jpg](https://commons.wikimedia.org/wiki/File:Vue_a%C3%A9rienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_083.jpg) | CC BY-SA 3.0 | ToucanWings |
| Château de Villandry | [Chateau-Villandry-VueGenerale-Jardins.jpg](https://commons.wikimedia.org/wiki/File:Chateau-Villandry-VueGenerale-Jardins.jpg) | CC BY 3.0 | Jean-Christophe BENOIST |
| Château de Vincennes | [Vincennes_-_Chateau_02.jpg](https://commons.wikimedia.org/wiki/File:Vincennes_-_Chateau_02.jpg) | CC BY-SA 3.0 | Selbymay |
| Château de Vitré | [Le_Château_de_Vitré_-_L'entrée_principale_et_le_Châtelet_-_Août_2019.jpg](https://commons.wikimedia.org/wiki/File:Le_Ch%C3%A2teau_de_Vitr%C3%A9_-_L%27entr%C3%A9e_principale_et_le_Ch%C3%A2telet_-_Ao%C3%BBt_2019.jpg) | CC BY-SA 4.0 | Erwan Corre |

---

*Les métadonnées de Commons peuvent changer si un fichier est remplacé ou
recatégorisé. Rejouer cet audit avant toute mise en production, et à chaque
ajout de fiche.*
