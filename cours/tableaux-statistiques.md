# Les tableaux statistiques : construction, typologie et interprétation

[Retour au cours d’introduction](introduction-statistiques-descriptives.md)

**Niveau :** initiation universitaire.  
**Objectif :** savoir construire, lire et commenter un tableau adapté à la nature des variables et à la question étudiée.

Tous les exemples présentés sont fictifs.

## 1. Qu’est-ce qu’un tableau statistique ?

Un **tableau statistique** organise des données en lignes et en colonnes afin de faciliter leur lecture, leur comparaison et leur interprétation. Il permet de passer d’une série d’observations individuelles à une présentation structurée.

Un tableau doit répondre à une question identifiable : comment les étudiants se répartissent-ils entre les filières ? Quelle est la distribution des temps d’attente ? La participation à une formation diffère-t-elle selon le secteur d’exercice ?

Il faut distinguer deux formes de présentation :

| Présentation | Contenu | Utilité |
|---|---|---|
| Tableau de données individuelles | Valeurs relevées pour chaque unité | Préparer les analyses |
| Tableau de synthèse statistique | Effectifs, fréquences ou indicateurs calculés | Présenter et interpréter les résultats |

**Exemple :** un fichier contenant l’âge de chacun des 100 étudiants constitue un tableau de données individuelles. Un tableau présentant leur âge moyen, leur âge médian et les valeurs extrêmes constitue une synthèse statistique.

## 2. Les éléments d’un tableau bien construit

Un tableau doit pouvoir être compris indépendamment du paragraphe qui l’accompagne.

| Élément | Fonction | Exemple |
|---|---|---|
| Numéro | Faciliter les renvois dans le texte | Tableau 1 |
| Titre | Préciser le phénomène, la population et, si nécessaire, la période | Répartition des étudiants selon la filière, promotion 2026 |
| En-têtes des colonnes | Identifier les informations présentées | Filière, effectif, pourcentage |
| Libellés des lignes | Identifier les catégories ou les indicateurs | Soins infirmiers, maïeutique |
| Unités | Donner un sens aux valeurs numériques | Âge en années ; durée en minutes |
| Effectif de référence | Indiquer la base du calcul | N = 100 étudiants |
| Notes | Expliquer les conventions et particularités | Pourcentages calculés sur les réponses valides |
| Source | Identifier l’origine des données | Données fictives à visée pédagogique |

**Principe :** une valeur telle que « 25 » est insuffisante si le lecteur ignore s’il s’agit de 25 personnes, de 25 minutes ou de 25 %.

## 3. Vue d’ensemble des principales typologies

Ces catégories ne sont pas toutes exclusives : un tableau croisé peut, par exemple, présenter à la fois des effectifs et des pourcentages.

| Type de tableau | Question principale | Contenu |
|---|---|---|
| Données individuelles | Qu’a-t-on observé pour chaque unité ? | Valeurs individuelles |
| Répartition simple | Comment une variable se distribue-t-elle ? | Effectifs et pourcentages |
| Distribution d’une variable discrète | Combien d’unités présentent chaque valeur ? | Valeurs numériques et fréquences |
| Distribution par classes | Comment les mesures se répartissent-elles par intervalles ? | Classes, effectifs et fréquences |
| Distribution cumulée | Quelle proportion se situe au-dessous d’un seuil ? | Effectifs ou fréquences cumulés |
| Tableau croisé | Comment deux variables qualitatives se répartissent-elles conjointement ? | Effectifs par combinaison de catégories |
| Synthèse descriptive | Quels sont le centre et la dispersion d’une variable ? | Moyenne, médiane, écart-type, quartiles |
| Comparaison descriptive entre groupes | Comment les indicateurs diffèrent-ils entre groupes ? | Résumés séparés par groupe |
| Tableau chronologique | Comment un phénomène évolue-t-il dans le temps ? | Valeurs par période |
| Tableau à réponses multiples | Quelles réponses ont été sélectionnées par les participants ? | Nombre de citations et pourcentages |

## 4. Le tableau de données individuelles

Il présente les observations avant leur regroupement.

**Tableau 1. Données individuelles de six étudiants**

| Identifiant | Âge, en années | Filière | Nombre d’absences |
|---|---:|---|---:|
| E01 | 20 | Soins infirmiers | 0 |
| E02 | 22 | Maïeutique | 2 |
| E03 | 21 | Rééducation | 1 |
| E04 | 23 | Soins infirmiers | 3 |
| E05 | 20 | Maïeutique | 0 |
| E06 | 24 | Soins infirmiers | 2 |

**Comment lire ce tableau ?** Chaque ligne correspond à un étudiant. Chaque colonne, à l’exception de l’identifiant, représente une variable étudiée.

**Commentaire possible :**

> Le fichier comprend six étudiants âgés de 20 à 24 ans. Le nombre d’absences varie de zéro à trois. Trois étudiants appartiennent à la filière des soins infirmiers.

**Précision méthodologique :** l’identifiant sert à distinguer les unités. Calculer sa moyenne n’aurait aucun sens. Si un étudiant est observé plusieurs fois, il faut également identifier la date ou le moment de mesure.

## 5. Le tableau de répartition d’une variable qualitative

Il décrit la répartition des unités entre les catégories d’une variable.

**Tableau 2. Répartition de 100 étudiants selon la filière**

| Filière | Effectif, n | Pourcentage |
|---|---:|---:|
| Soins infirmiers | 50 | 50 % |
| Maïeutique | 30 | 30 % |
| Rééducation | 20 | 20 % |
| **Total** | **100** | **100 %** |

Le pourcentage d’une catégorie se calcule ainsi :

**pᵢ = (nᵢ / N) × 100**

Pour la maïeutique :

**p = (30 / 100) × 100 = 30 %**

**Commentaire possible :**

> La filière des soins infirmiers rassemble la moitié des étudiants. La maïeutique représente 30 % de l’effectif et la rééducation 20 %. Les soins infirmiers constituent ainsi la catégorie la plus représentée.

**Erreur à éviter :** écrire « les soins infirmiers représentent la majorité des étudiants ». Ici, ils représentent **exactement la moitié**, et non une majorité absolue supérieure à 50 %.

## 6. Le tableau d’une variable quantitative discrète

Il convient notamment aux variables issues d’un dénombrement : nombre d’enfants, d’absences, de consultations ou de salariés.

**Tableau 3. Nombre d’absences de 20 étudiants pendant un mois**

| Nombre d’absences | Effectif, n | Pourcentage |
|---:|---:|---:|
| 0 | 5 | 25 % |
| 1 | 8 | 40 % |
| 2 | 4 | 20 % |
| 3 | 2 | 10 % |
| 4 | 1 | 5 % |
| **Total** | **20** | **100 %** |

**Commentaire possible :**

> Une absence constitue la situation la plus fréquente, observée chez 40 % des étudiants. Un quart des étudiants ne présente aucune absence. Trois étudiants, soit 15 %, cumulent au moins trois absences.

### Calculer une moyenne à partir du tableau

Il faut pondérer chaque valeur par son effectif :

**x̄ = Σ(nᵢxᵢ) / N = [(5 × 0) + (8 × 1) + (4 × 2) + (2 × 3) + (1 × 4)] / 20 = 26 / 20 = 1,3**

Les étudiants présentent donc **1,3 absence en moyenne** pendant le mois étudié.

**Erreur à éviter :** calculer simplement la moyenne de 0, 1, 2, 3 et 4. Cette opération donnerait le même poids à des valeurs dont les effectifs diffèrent.

## 7. Le tableau de distribution par classes

Lorsque les valeurs numériques sont nombreuses, leur regroupement en intervalles facilite la lecture.

**Tableau 4. Distribution des temps d’attente de 40 patients**

| Temps d’attente, en minutes | Effectif, n | Pourcentage |
|---|---:|---:|
| [0 ; 10[ | 8 | 20 % |
| [10 ; 20[ | 16 | 40 % |
| [20 ; 30[ | 10 | 25 % |
| [30 ; 40] | 6 | 15 % |
| **Total** | **40** | **100 %** |

**Convention :** la classe [10 ; 20[ inclut 10 minutes et exclut 20 minutes. La dernière classe inclut ici 40 minutes.

**Commentaire possible :**

> La classe de 10 à moins de 20 minutes est la plus représentée, avec 40 % des patients. Au total, 60 % ont attendu moins de 20 minutes, tandis que 15 % ont attendu entre 30 et 40 minutes.

### Règles de construction

Les classes doivent être :

- **sans chevauchement** : chaque observation appartient à une seule classe ;
- **exhaustives** : toutes les valeurs observées sont couvertes ;
- **explicitement délimitées** : les bornes incluses et exclues sont identifiables ;
- **adaptées à l’objectif** : un regroupement trop large masque les différences.

**Précision :** ce tableau ne permet pas de retrouver les durées individuelles. Une moyenne calculée à partir des centres de classe serait une **approximation**, et non la moyenne exacte des données initiales.

## 8. Le tableau des effectifs et fréquences cumulés

Les cumuls servent à répondre à des questions comportant un seuil : « au plus », « moins de », « au moins ».

En reprenant les absences des 20 étudiants :

**Tableau 5. Distribution cumulée du nombre d’absences**

| Nombre d’absences | Effectif | Effectif cumulé croissant | Pourcentage cumulé |
|---:|---:|---:|---:|
| 0 | 5 | 5 | 25 % |
| 1 | 8 | 13 | 65 % |
| 2 | 4 | 17 | 85 % |
| 3 | 2 | 19 | 95 % |
| 4 | 1 | 20 | 100 % |

**Comment lire la ligne « 2 » ?**

L’effectif cumulé de 17 signifie que **17 étudiants ont au plus deux absences** : zéro, une ou deux absences.

**Commentaire possible :**

> Près des deux tiers des étudiants, soit 65 %, ont au plus une absence. Cette proportion atteint 85 % lorsque le seuil est fixé à deux absences.

**Attention au vocabulaire :**

| Expression | Valeurs incluses |
|---|---|
| Moins de deux absences | 0 et 1 |
| Au plus deux absences | 0, 1 et 2 |
| Au moins deux absences | 2, 3 et 4 dans cet exemple |
| Plus de deux absences | 3 et 4 dans cet exemple |

Les cumuls ne conviennent pas à des catégories nominales sans ordre naturel, telles que les filières ou les régions.

## 9. Le tableau croisé ou tableau de contingence

Il présente la distribution conjointe de deux variables qualitatives.

**Question étudiée :** la participation à une formation se répartit-elle différemment selon le secteur d’exercice ?

**Tableau 6. Participation à une formation selon le secteur d’exercice**

| Secteur | A participé | N’a pas participé | Total |
|---|---:|---:|---:|
| Public | 36 | 24 | 60 |
| Privé | 12 | 28 | 40 |
| **Total** | **48** | **52** | **100** |

Chaque cellule intérieure correspond à une combinaison de modalités. Par exemple, **36 participants travaillent dans le secteur public et ont suivi la formation**.

Les totaux en bordure sont appelés **effectifs marginaux**. Le total général est ici de 100 personnes.

### 9.1. Pourcentages en ligne : comparer les secteurs

Chaque effectif est divisé par le total de sa ligne.

**Tableau 7. Participation à la formation, pourcentages calculés dans chaque secteur**

| Secteur | A participé | N’a pas participé | Total |
|---|---:|---:|---:|
| Public, n = 60 | 60 % | 40 % | 100 % |
| Privé, n = 40 | 30 % | 70 % | 100 % |

**Participation dans le public = (36 / 60) × 100 = 60 %**

**Commentaire possible :**

> Dans l’échantillon étudié, 60 % des professionnels du secteur public ont participé à la formation, contre 30 % dans le secteur privé. L’écart descriptif est de 30 points de pourcentage.

Cette présentation répond à la question : **dans chaque secteur, quelle proportion a participé ?**

### 9.2. Pourcentages en colonne : décrire la composition des participants

Chaque effectif est divisé par le total de sa colonne.

**Tableau 8. Composition des groupes selon le secteur, pourcentages en colonne**

| Secteur | Parmi les participants, n = 48 | Parmi les non-participants, n = 52 |
|---|---:|---:|
| Public | 75,0 % | 46,2 % |
| Privé | 25,0 % | 53,8 % |
| **Total** | **100 %** | **100 %** |

**Commentaire possible :**

> Parmi les professionnels ayant participé à la formation, 75 % exercent dans le secteur public et 25 % dans le secteur privé.

Cette présentation répond à une autre question : **parmi les participants, quelle est la répartition par secteur ?**

### 9.3. Comprendre le rôle du dénominateur

Pour la même cellule de 36 personnes :

| Calcul | Résultat | Signification |
|---|---:|---|
| 36 / 60 | 60 % | Part des participants parmi les professionnels du public |
| 36 / 48 | 75 % | Part du public parmi les participants |
| 36 / 100 | 36 % | Part de l’échantillon appartenant au public et ayant participé |

**Précision d’interprétation :** ces tableaux montrent une différence descriptive. Ils ne suffisent ni à conclure à une association statistiquement significative dans la population, ni à attribuer un effet causal au secteur d’exercice.

## 10. Le tableau de synthèse descriptive

Il résume une variable quantitative à l’aide d’indicateurs de position et de dispersion.

Considérons les dix temps d’attente du cours :

**5 ; 7 ; 7 ; 8 ; 10 ; 10 ; 12 ; 13 ; 18 ; 30 minutes.**

**Tableau 9. Indicateurs descriptifs des temps d’attente**

| Indicateur | Valeur |
|---|---:|
| Effectif valide | 10 |
| Moyenne | 12,00 min |
| Écart-type descriptif, diviseur n | 6,97 min |
| Médiane | 10,00 min |
| Premier quartile, Q1 | 7,00 min |
| Troisième quartile, Q3 | 13,00 min |
| Minimum | 5,00 min |
| Maximum | 30,00 min |

*Note : Q1 et Q3 sont déterminés aux rangs ⌈n/4⌉ et ⌈3n/4⌉.*

**Commentaire possible :**

> Le temps d’attente médian est de 10 minutes, avec des quartiles de 7 et 13 minutes. La moyenne, égale à 12 minutes, est supérieure à la médiane. La valeur maximale de 30 minutes contribue à cette différence et invite à examiner la forme de la distribution.

**Erreur à éviter :** affirmer que les temps sont normalement distribués à partir de la seule moyenne et de l’écart-type.

## 11. Le tableau comparatif entre groupes

Il permet de comparer les résumés d’une variable quantitative entre plusieurs catégories.

**Tableau 10. Temps d’attente selon le centre de consultation**

| Centre | Effectif | Moyenne, min | Écart-type, min | Médiane, min | Q1–Q3, min |
|---|---:|---:|---:|---:|---|
| A | 40 | 18,0 | 6,0 | 17,0 | 14,0–22,0 |
| B | 40 | 24,0 | 12,0 | 20,0 | 15,0–28,0 |

*Note : synthèses fictives ; écart-type calculé avec le diviseur n − 1.*

**Commentaire possible :**

> Le centre B présente un temps d’attente moyen supérieur de six minutes à celui du centre A. Les temps y sont également plus dispersés, comme l’indique un écart-type de 12 minutes contre 6 minutes. L’écart entre les médianes est plus faible, puisqu’il atteint trois minutes.

**Ce que l’on ne peut pas conclure :**

La comparaison ne démontre pas que le centre B est moins performant. Les différences peuvent notamment dépendre des horaires, de l’affluence, du type de consultations et des caractéristiques des patients. Une interprétation comparative nécessite de documenter ces éléments.

## 12. Le tableau chronologique

Il présente un indicateur selon des périodes ordonnées.

**Tableau 11. Nombre mensuel de consultations dans un centre**

| Mois | Nombre de consultations | Variation par rapport au mois précédent |
|---|---:|---:|
| Janvier | 200 | — |
| Février | 220 | +10,0 % |
| Mars | 198 | −10,0 % |
| Avril | 231 | +16,7 % |

La variation relative se calcule par :

**Variation = [(Vₜ − Vₜ₋₁) / Vₜ₋₁] × 100**

Pour mars :

**[(198 − 220) / 220] × 100 = −10 %**

**Commentaire possible :**

> Le nombre de consultations augmente en février, diminue en mars puis atteint son niveau le plus élevé en avril. Sur l’ensemble de la période, il passe de 200 à 231 consultations, soit une augmentation de 15,5 %.

**Précisions :** quatre mois ne permettent pas d’établir une saisonnalité. Les comparaisons mensuelles doivent aussi tenir compte du nombre de jours d’ouverture et d’éventuelles modifications d’activité.

## 13. Le tableau à réponses multiples

Il convient lorsque chaque personne peut sélectionner plusieurs réponses.

**Question posée :** « Quels outils utilisez-vous pour analyser vos données ? Plusieurs réponses sont possibles. »

**Tableau 12. Outils déclarés par 50 répondants**

| Outil | Nombre de répondants ayant cité l’outil | Pourcentage des répondants |
|---|---:|---:|
| Excel | 35 | 70 % |
| SPSS | 25 | 50 % |
| R | 15 | 30 % |
| Python | 10 | 20 % |

*Note : plusieurs réponses étaient autorisées. Le dénominateur de chaque pourcentage est 50 répondants.*

**Commentaire possible :**

> Excel est l’outil le plus fréquemment déclaré, cité par 70 % des répondants, suivi de SPSS à 50 %. Les pourcentages ne s’additionnent pas à 100 %, car un même répondant peut utiliser plusieurs outils.

Le total atteint **85 citations**, soit **170 %** lorsqu’on additionne les pourcentages des répondants. Ce résultat n’est pas une erreur.

**Distinction :** « pourcentage des répondants » et « pourcentage des citations » utilisent des dénominateurs différents. Pour Excel, ces valeurs seraient respectivement 35/50 = 70 % et 35/85 ≈ 41,2 %.

## 14. Présenter les données manquantes

Un tableau doit permettre d’identifier la population utilisée dans les calculs.

**Tableau 13. Satisfaction déclarée par 100 personnes sollicitées**

| Réponse | Effectif | Pourcentage sur le total | Pourcentage parmi les réponses valides |
|---|---:|---:|---:|
| Satisfait | 54 | 54 % | 60 % |
| Neutre | 27 | 27 % | 30 % |
| Insatisfait | 9 | 9 % | 10 % |
| Réponse manquante | 10 | 10 % | — |
| **Total** | **100** | **100 %** | — |

*Note : les pourcentages valides reposent sur 90 réponses ; leur somme est égale à 100 %.*

**Commentaire possible :**

> Parmi les 90 personnes ayant répondu à la question, 60 % se déclarent satisfaites. Dix personnes, soit 10 % de l’effectif sollicité, n’ont pas fourni de réponse.

**Erreur à éviter :** écrire simplement « 60 % des personnes sollicitées sont satisfaites ». Les personnes ayant déclaré leur satisfaction représentent ici **54 % des personnes sollicitées**.

## 15. Comment rédiger le commentaire d’un tableau ?

Un commentaire statistique ne doit pas reproduire toutes les cellules. Il doit sélectionner les informations qui répondent à la question étudiée.

Une démarche efficace comprend quatre étapes :

1. **Préciser la base de lecture** : population, effectif et dénominateur.
2. **Identifier le résultat principal** : catégorie dominante, valeur centrale ou évolution.
3. **Quantifier une différence utile** : points de pourcentage, unités ou dispersion.
4. **Délimiter l’interprétation** : données manquantes, sélection des répondants, absence de preuve causale.

**Exemple de commentaire insuffisant :**

> Dans le public, 36 personnes ont participé et 24 n’ont pas participé. Dans le privé, 12 ont participé et 28 n’ont pas participé.

Ce texte répète les cellules sans faciliter leur interprétation.

**Exemple de commentaire informatif :**

> Parmi les 100 professionnels interrogés, la participation à la formation concerne 60 % des répondants du secteur public, contre 30 % dans le secteur privé. L’écart observé atteint 30 points de pourcentage. Cette comparaison décrit l’échantillon et ne permet pas, à elle seule, d’attribuer la différence au secteur d’exercice.

## 16. Exercice d’application corrigé

Une enquête porte sur 80 étudiants. Parmi les 50 étudiants de première année, 35 utilisent un logiciel statistique. Parmi les 30 étudiants de deuxième année, 24 en utilisent un.

**Travail demandé :** construire le tableau croisé, calculer les pourcentages en ligne et commenter les résultats.

### Correction

| Niveau | Utilise un logiciel | N’utilise pas de logiciel | Total |
|---|---:|---:|---:|
| Première année | 35 | 15 | 50 |
| Deuxième année | 24 | 6 | 30 |
| **Total** | **59** | **21** | **80** |

| Niveau | Utilise un logiciel | N’utilise pas de logiciel | Total |
|---|---:|---:|---:|
| Première année | 70 % | 30 % | 100 % |
| Deuxième année | 80 % | 20 % | 100 % |

**Commentaire :**

> L’utilisation d’un logiciel statistique concerne 59 étudiants sur 80, soit 73,75 %. Elle est déclarée par 80 % des étudiants de deuxième année, contre 70 % en première année, soit un écart de 10 points de pourcentage. Cette différence descriptive ne démontre pas un effet causal de l’avancement dans la formation.

**À retenir :** le choix du tableau dépend de la question étudiée ; le sens du pourcentage dépend de son dénominateur ; la portée du commentaire dépend du dispositif de collecte.
