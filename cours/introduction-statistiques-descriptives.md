# Introduction aux statistiques descriptives

**Niveau :** initiation universitaire — licence et formation en méthodologie de recherche.  
**Durée indicative :** 2 heures de cours et 1 heure de travaux dirigés.  
**Prérequis :** opérations arithmétiques, fractions et pourcentages.  
**Données :** tous les exemples ci-dessous sont fictifs et destinés à l’apprentissage.

## Objectifs pédagogiques

À la fin de ce cours, l’étudiant doit pouvoir :

- distinguer population, échantillon, individu et variable ;
- identifier la nature d’une variable ;
- construire et interpréter un tableau d’effectifs et de fréquences ;
- choisir une représentation graphique adaptée ;
- calculer et interpréter les indicateurs de position et de dispersion ;
- rédiger une synthèse descriptive sans généralisation injustifiée.

## 1. À quoi servent les statistiques descriptives ?

Les statistiques descriptives regroupent les méthodes permettant d’organiser, de résumer et de représenter les données observées. Elles répondent à des questions telles que : combien de personnes ont été interrogées ? Quelle est la durée moyenne d’attente ? Les observations sont-elles proches les unes des autres ?

**Exemple en santé :** un centre relève les temps d’attente de dix patients. Un tableau, une moyenne et une médiane permettent de résumer ces dix observations.

**Exemple en gestion :** une coopérative décrit la répartition mensuelle de ses ventes par produit et la dispersion des montants des commandes.

La statistique descriptive décrit les données disponibles. La statistique inférentielle cherche à estimer des caractéristiques d’une population ou à tester des hypothèses à partir d’un échantillon, sous des conditions explicites. Une moyenne calculée sur dix patients ne représente donc pas automatiquement tous les patients de la région.

## 2. Le vocabulaire fondamental

| Notion | Définition | Exemple |
|---|---|---|
| Population cible | Ensemble des unités auxquelles porte la question de recherche | Tous les étudiants d’un institut pendant une année donnée |
| Échantillon | Sous-ensemble effectivement étudié | 80 étudiants interrogés |
| Individu ou unité statistique | Unité sur laquelle l’observation porte | Un étudiant |
| Variable | Caractéristique relevée pour chaque unité | Âge, filière, nombre d’absences |
| Modalité | Catégorie ou valeur possible d’une variable | Filière infirmière ; trois absences |
| Observation | Valeur effectivement relevée | L’étudiant A a 21 ans |
| Effectif total | Nombre d’unités observées, noté n | n = 80 |

Dans un fichier de données, une ligne correspond habituellement à une unité et une colonne à une variable. Si plusieurs mesures sont recueillies par personne, il faut préciser que les lignes représentent des visites ou des mesures répétées : leur nombre n’est alors pas celui des personnes.

## 3. Les types de variables

| Type | Caractéristique | Exemples | Résumés adaptés |
|---|---|---|---|
| Qualitative nominale | Catégories sans ordre naturel | Région, groupe sanguin, secteur d’activité | Effectifs, pourcentages, mode |
| Qualitative ordinale | Catégories ordonnées ; écarts non nécessairement égaux | Satisfaction faible, moyenne, élevée | Effectifs, pourcentages, catégories médianes si pertinentes |
| Quantitative discrète | Valeurs issues d’un dénombrement | Nombre d’enfants, d’absences ou de consultations | Moyenne, médiane, dispersion |
| Quantitative continue | Valeurs issues d’une mesure | Taille, durée, masse | Moyenne, médiane, dispersion |

**Attention au codage :** coder les régions par 1, 2 et 3 ne transforme pas la région en variable quantitative. La moyenne de ces codes n’a pas de signification substantielle.

Un item de satisfaction allant de 1 à 5 est ordinal. Le traitement d’un score composé de plusieurs items nécessite une justification distincte ; il ne se déduit pas seulement de la présence de chiffres.

## 4. Préparer les données avant de calculer

Vérifier les unités, les doublons, les modalités incohérentes et les valeurs manquantes. Une taille de 170 doit être distinguée d’une taille de 1,70 selon l’unité retenue. Une valeur très élevée peut être réelle ou provenir d’une erreur de saisie : elle doit être examinée avant toute correction.

Une valeur manquante n’est pas un zéro. Si 20 personnes sont interrogées et que seules 18 répondent à une question, les pourcentages calculés sur les réponses valides utilisent 18 comme dénominateur. Il faut également signaler les deux réponses manquantes.

## 5. Effectifs et fréquences

L’effectif nᵢ indique combien d’observations appartiennent à la catégorie i. La fréquence correspond à sa part dans les observations valides :

**fᵢ = nᵢ / n**, puis **pourcentage = 100 × fᵢ**.

Exemple : nombre d’absences de dix étudiants.

| Nombre d’absences | Effectif nᵢ | Fréquence | Pourcentage | Effectif cumulé |
|---:|---:|---:|---:|---:|
| 0 | 2 | 0,20 | 20 % | 2 |
| 1 | 4 | 0,40 | 40 % | 6 |
| 2 | 3 | 0,30 | 30 % | 9 |
| 3 | 1 | 0,10 | 10 % | 10 |
| **Total** | **10** | **1,00** | **100 %** | — |

**Interprétation :** 40 % des étudiants ont une absence et 60 % ont au plus une absence. « Au plus une » inclut zéro et une absence.

Les fréquences cumulées nécessitent un ordre pertinent. Elles conviennent aux valeurs numériques et aux catégories ordinales, mais pas à une liste arbitraire de régions.

## 6. Choisir un graphique

| Question ou variable | Graphique conseillé | Point de vigilance |
|---|---|---|
| Comparer des catégories | Diagramme en barres | Barres séparées ; axe des effectifs généralement depuis zéro |
| Décrire une variable quantitative continue | Histogramme | Barres jointives ; choix des classes explicite |
| Résumer position et dispersion | Boîte à moustaches | Préciser la convention des moustaches |
| Examiner deux variables quantitatives | Nuage de points | Une association ne démontre pas une causalité |
| Décrire une évolution temporelle | Courbe chronologique | Respecter l’ordre et les intervalles temporels |

Dans un histogramme à classes de largeurs inégales, c’est l’aire des rectangles qui doit représenter les effectifs ou les fréquences ; la hauteur correspond alors à une densité.

Dans une boîte à moustaches de Tukey, les moustaches vont jusqu’aux observations extrêmes situées à moins de 1,5 écart interquartile des quartiles. Les points au-delà sont à examiner ; ils ne constituent pas automatiquement des erreurs.

## 7. Exemple conducteur : temps d’attente

Dix patients présentent les temps d’attente suivants, exprimés en minutes et déjà ordonnés :

**5 ; 7 ; 7 ; 8 ; 10 ; 10 ; 12 ; 13 ; 18 ; 30.**

L’effectif est n = 10 et la somme vaut 120 minutes. Nous utiliserons cette série pour les calculs suivants.

### 7.1. Moyenne arithmétique

La moyenne est la somme des valeurs divisée par leur nombre :

**x̄ = (Σ xᵢ) / n = 120 / 10 = 12 minutes.**

Elle correspond au temps d’attente que l’on obtiendrait en répartissant également la somme des durées entre les dix patients. Elle ne signifie pas que chaque patient attend 12 minutes.

Pour un tableau d’effectifs, utiliser la moyenne pondérée :

**x̄ = Σ(nᵢ × xᵢ) / Σ nᵢ.**

### 7.2. Médiane

Après classement des valeurs, la médiane sépare la série en deux moitiés.

- Si n est impair, prendre la valeur de rang (n + 1) / 2.
- Si n est pair, prendre la moyenne des valeurs de rang n / 2 et n / 2 + 1.

Ici, les cinquième et sixième valeurs sont 10 et 10 : **médiane = 10 minutes**. Au moins la moitié des observations sont inférieures ou égales à 10 minutes et au moins la moitié sont supérieures ou égales à 10 minutes.

### 7.3. Mode

Le mode est la valeur la plus fréquente. Dans cette série, **7 et 10 minutes** apparaissent deux fois chacun : la série possède deux modes. Le mode peut également décrire une variable qualitative.

### 7.4. Sensibilité aux valeurs extrêmes

Si l’on remplace 30 par 90 minutes, la somme devient 180 et la moyenne passe à **18 minutes**, tandis que la médiane reste **10 minutes**. La moyenne est sensible aux valeurs extrêmes ; la médiane est plus résistante.

En présence d’une distribution asymétrique, rapporter la médiane et les quartiles est souvent informatif. Le choix final dépend aussi de la question étudiée ; la moyenne peut rester utile pour évaluer une charge totale.

## 8. Mesurer la dispersion

Deux groupes peuvent avoir la même moyenne et des répartitions très différentes. Par exemple, les séries 9, 10, 11 et 0, 10, 20 ont toutes deux une moyenne de 10, mais la seconde est beaucoup plus dispersée.

### 8.1. Étendue

**Étendue = maximum − minimum = 30 − 5 = 25 minutes.**

Elle est simple, mais ne dépend que des deux valeurs extrêmes.

### 8.2. Quartiles et écart interquartile

Les quartiles situent les observations autour des seuils de 25 % et de 75 %.

**Convention retenue ici :** Q1 est la valeur au rang ⌈n / 4⌉ et Q3 la valeur au rang ⌈3n / 4⌉, où ⌈ ⌉ signifie arrondir au nombre entier supérieur. Les logiciels peuvent utiliser des interpolations et donner des résultats différents, surtout sur de petits échantillons.

Avec n = 10 :

- Q1 est la troisième valeur : **7 minutes** ;
- Q3 est la huitième valeur : **13 minutes** ;
- l’écart interquartile vaut **Q3 − Q1 = 6 minutes**.

L’intervalle [7 ; 13] décrit la partie centrale de la distribution. Avec une petite série et des ex æquo, la proportion effectivement contenue dans cet intervalle n’est pas nécessairement exactement 50 %.

### 8.3. Variance et écart-type

La variance repose sur les écarts à la moyenne élevés au carré. Pour décrire la série observée avec le diviseur n :

**v = Σ(xᵢ − x̄)² / n.**

Dans l’exemple, la somme des carrés des écarts à 12 vaut **486** :

**v = 486 / 10 = 48,6 minutes²**,  
**écart-type descriptif = √48,6 ≈ 6,97 minutes**.

L’écart-type s’exprime dans la même unité que la variable, contrairement à la variance.

Pour l’estimation usuelle de la variance d’une population à partir d’un échantillon indépendant et identiquement distribué, on utilise la variance corrigée :

**s² = Σ(xᵢ − x̄)² / (n − 1) = 486 / 9 = 54 minutes²**,  
**s = √54 ≈ 7,35 minutes**.

Les deux résultats répondent à des conventions différentes : toujours préciser celle utilisée. Le diviseur n − 1 rend la variance sans biais sous les hypothèses usuelles ; il ne rend pas l’écart-type lui-même exactement sans biais.

L’intervalle « moyenne ± un écart-type » ne contient pas automatiquement 68 % des observations. Cette proportion est une propriété approximative d’une distribution normale, pas une règle universelle.

## 9. Rédiger une synthèse descriptive

> Parmi les dix patients fictifs étudiés, le temps d’attente médian était de 10 minutes, avec un premier quartile de 7 minutes et un troisième quartile de 13 minutes selon la convention des rangs arrondis au supérieur. La moyenne était de 12 minutes et l’écart-type descriptif, calculé avec le diviseur n, de 6,97 minutes. Les temps variaient de 5 à 30 minutes. La valeur élevée de 30 minutes contribue à tirer la moyenne au-dessus de la médiane. Ces résultats décrivent uniquement les observations de cet exemple.

Pour une variable qualitative, indiquer l’effectif et le pourcentage : « 12 étudiants sur 20, soit 60 %, appartiennent à la filière infirmière ». Préciser le dénominateur et les données manquantes.

## 10. Erreurs fréquentes

- Calculer une moyenne sur des codes de catégories sans signification numérique.
- Oublier de trier la série avant de déterminer la médiane ou les quartiles.
- Confondre fréquence de 0,25 et pourcentage de 0,25 % : 0,25 correspond à 25 %.
- Présenter une moyenne sans indicateur de dispersion.
- Confondre écart-type, qui décrit la dispersion, et erreur standard, qui renseigne sur la précision d’un estimateur.
- Supprimer automatiquement une valeur extrême.
- Arrondir les résultats intermédiaires trop tôt.
- Déduire une causalité d’une simple association ou généraliser sans justification.

## 11. Travaux dirigés corrigés

### Exercice 1 — Identifier les variables

Classer les variables suivantes : région de résidence, niveau de satisfaction faible/moyen/élevé, nombre de consultations, durée d’une consultation.

**Correction :** région : qualitative nominale ; satisfaction : qualitative ordinale ; nombre de consultations : quantitative discrète ; durée : quantitative continue.

### Exercice 2 — Calculer des fréquences

Une promotion compte 20 étudiants : 12 en soins infirmiers, 5 en maïeutique et 3 en rééducation. Calculer les pourcentages et choisir un graphique.

**Correction :** 12 / 20 × 100 = 60 % ; 5 / 20 × 100 = 25 % ; 3 / 20 × 100 = 15 %. La somme vaut 100 %. Un diagramme en barres convient. Des fréquences cumulées ne présentent pas d’intérêt puisque les filières n’ont pas d’ordre naturel.

### Exercice 3 — Résumer une série

Pour la série **2 ; 4 ; 4 ; 6 ; 9**, calculer moyenne, médiane, mode, étendue, quartiles et variance descriptive avec le diviseur n.

**Correction détaillée :**

- n = 5 ; somme = 25 ; moyenne = 25 / 5 = **5**.
- Médiane : troisième valeur = **4**.
- Mode : **4**, observé deux fois.
- Étendue : 9 − 2 = **7**.
- Convention des rangs : Q1 au rang ⌈5 / 4⌉ = 2, donc **4** ; Q3 au rang ⌈15 / 4⌉ = 4, donc **6**.
- Écart interquartile : 6 − 4 = **2**.
- Somme des carrés des écarts : 9 + 1 + 1 + 1 + 16 = **28**.
- Variance descriptive : 28 / 5 = **5,6** ; écart-type descriptif : √5,6 ≈ **2,37**.
- Avec correction : variance = 28 / 4 = **7** ; écart-type ≈ **2,65**.

### Exercice 4 — Interpréter sans surconclure

Une enquête auprès de 15 clients volontaires indique une satisfaction médiane élevée. Peut-on affirmer que tous les clients sont satisfaits ?

**Correction :** non. Le résultat décrit les répondants. Le faible effectif et la sélection volontaire limitent la généralisation. Il faut préciser le recrutement, la période et les non-réponses avant d’envisager une interprétation plus large.

## 12. Fiche de synthèse

| Besoin | Indicateur ou méthode | À préciser |
|---|---|---|
| Décrire des catégories | Effectifs et pourcentages | Dénominateur, valeurs manquantes |
| Décrire une valeur centrale | Moyenne ou médiane | Nature de la variable, forme de la distribution |
| Décrire une valeur fréquente | Mode | Possibilité de plusieurs modes |
| Décrire la dispersion | Écart-type, écart interquartile, étendue | Convention de calcul, unités |
| Visualiser une répartition | Barres, histogramme, boîte à moustaches | Axes, classes, conventions |
| Interpréter les résultats | Texte contextualisé | Population effectivement observée et limites |

**Démarche à retenir :** définir les unités et les variables, vérifier les données, présenter les effectifs, choisir les graphiques, calculer les indicateurs adaptés, puis interpréter dans le contexte étudié.
