# TD — Statistiques descriptives : 10 exercices corrigés

**Public :** Licence, sciences infirmières et techniques de santé (ISPITS)  
**Auteur pédagogique :** Prof. Tikouk Jamal  
**Objectif :** identifier les variables, organiser les données, calculer et interpréter les indicateurs descriptifs.

> Les jeux de données sont fictifs et destinés à l'apprentissage. Les arrondis sont indiqués au besoin.

## Exercice 1 — Identifier les variables
**Énoncé.** Une enquête auprès de 120 étudiants relève : âge en années révolues, sexe, taille, nombre annuel de consultations, groupe sanguin, satisfaction (faible/moyenne/élevée) et poids.

**Corrigé.** Population cible : les étudiants auxquels on souhaite généraliser l'enquête (à préciser dans le protocole). Échantillon : les 120 interrogés. Unité statistique : un étudiant.

| Variable | Type | Explication |
|---|---|---|
| Âge en années révolues | Quantitative discrète (mesure enregistrée) | Nombres entiers |
| Sexe | Qualitative nominale | Catégories non ordonnées |
| Taille | Quantitative continue | Mesure |
| Nombre de consultations | Quantitative discrète | Comptage |
| Groupe sanguin | Qualitative nominale | Catégories sans ordre |
| Satisfaction | Qualitative ordinale | Niveaux ordonnés |
| Poids | Quantitative continue | Mesure |

L'âge exact est conceptuellement continu ; sa saisie en années révolues le discrétise.

## Exercice 2 — Effectifs et fréquences
**Données (20 patients) :** 2, 1, 3, 2, 0, 1, 2, 4, 3, 2, 1, 0, 3, 2, 1, 4, 2, 3, 1, 2.

**Questions.** Construire effectifs, fréquences et fréquences cumulées.

**Corrigé.** Avec N=20, fréquence fᵢ=nᵢ/N ; fréquence cumulée Fᵢ=Σⱼ≤ᵢ fⱼ.

| Consultations | Effectif | Fréquence | Effectif cumulé | Fréquence cumulée |
|---:|---:|---:|---:|---:|
| 0 | 2 | 10 % | 2 | 10 % |
| 1 | 5 | 25 % | 7 | 35 % |
| 2 | 7 | 35 % | 14 | 70 % |
| 3 | 4 | 20 % | 18 | 90 % |
| 4 | 2 | 10 % | 20 | 100 % |
| **Total** | **20** | **100 %** | | |

**Interprétation.** Sept patients (35 %) ont effectué exactement deux consultations ; 70 % en ont effectué **au plus** deux.

## Exercice 3 — Moyenne simple
**Données :** 10, 12, 14, 8, 16, 12, 10, 14.

**Corrigé.** La somme vaut 96 pour n=8 ; moyenne = Σxᵢ/n = 96/8 = **12/20**. La moyenne résume le niveau, mais pas l'hétérogénéité des notes.

## Exercice 4 — Moyenne pondérée
| Module | Note | Coefficient | Produit |
|---|---:|---:|---:|
| Anatomie | 14 | 3 | 42 |
| Physiologie | 12 | 2 | 24 |
| Biostatistique | 16 | 2 | 32 |
| Santé publique | 10 | 1 | 10 |
| **Total** | | **8** | **108** |

**Corrigé.** Moyenne pondérée = Σ(cᵢxᵢ)/Σcᵢ = 108/8 = **13,5/20**. Les coefficients représentent l'importance relative des modules.

## Exercice 5 — Médiane et mode
**Durées d'hospitalisation (jours) :** 3, 5, 2, 7, 4, 5, 6, 3, 5.

**Étape 1.** Trier : 2, 3, 3, 4, 5, 5, 5, 6, 7.  
**Étape 2.** n=9 ; la position centrale est (n+1)/2=5 : médiane **5 jours**.  
**Étape 3.** La valeur 5 apparaît trois fois : mode **5 jours**.

La médiane garantit qu'au moins 50 % des observations sont inférieures ou égales à 5, et au moins 50 % supérieures ou égales à 5.

## Exercice 6 — Quartiles
**Âges triés :** 18, 20, 21, 22, 24, 25, 27, 29, 30, 32, 34, 40.

**Convention utilisée :** Q1 est la valeur de rang plafond(n/4), Q3 celle de rang plafond(3n/4), convention courante dans l'enseignement francophone ; les logiciels peuvent appliquer une interpolation différente.

- n=12 ; rang Q1 = 3 : **Q1=21 ans**.
- Rang Q3 = 9 : **Q3=30 ans**.
- Médiane = moyenne des 6e et 7e valeurs = (25+27)/2 = **26 ans**.
- Écart interquartile = 30−21 = **9 ans**.

**Interprétation.** L'intervalle [21 ; 30] va du premier au troisième quartile et décrit la dispersion centrale des âges.

## Exercice 7 — Étendue, variance et écart-type
**Observations :** 2, 4, 4, 6, 9.

**Étape 1.** Moyenne = (2+4+4+6+9)/5 = **5**.  
**Étape 2.** Écarts à la moyenne : −3, −1, −1, 1, 4. Carrés : 9, 1, 1, 1, 16 ; somme = **28**.  
**Étape 3.** Étendue = 9−2 = **7**.

Si les cinq valeurs constituent la **population étudiée**, variance = 28/5 = **5,6** et écart-type = √5,6 ≈ **2,37**.

Si les cinq valeurs sont un **échantillon** et que l'on estime la variance de la population, variance corrigée = 28/(5−1) = **7** et écart-type corrigé = √7 ≈ **2,65**.

**Attention :** préciser le dénominateur (n ou n−1) avant tout calcul.

## Exercice 8 — Coefficient de variation
**Service A :** moyenne des durées de séjour = 5 jours ; écart-type = 1 jour.  
**Service B :** moyenne = 10 jours ; écart-type = 3 jours.

**Corrigé.** CV = (écart-type/moyenne)×100, lorsque la moyenne non nulle et l'échelle de mesure rendent ce ratio pertinent.

- CV(A) = 1/5×100 = **20 %**.
- CV(B) = 3/10×100 = **30 %**.

**Interprétation.** Le séjour est relativement plus dispersé dans B. Le CV ne doit pas être employé sans précaution pour des variables dont le zéro est arbitraire.

## Exercice 9 — Série groupée en classes
**Durée d'attente de 30 patients :**

| Durée (minutes) | Effectif |
|---|---:|
| [0 ; 10[ | 4 |
| [10 ; 20[ | 8 |
| [20 ; 30[ | 12 |
| [30 ; 40[ | 6 |
| **Total** | **30** |

**Question.** Estimer la moyenne à partir des centres de classes.

**Étape 1.** Centres : 5, 15, 25, 35.  
**Étape 2.** Produits effectif × centre : 20, 120, 300, 210 ; somme = 650.  
**Étape 3.** Moyenne estimée = 650/30 ≈ **21,67 minutes**.

**Interprétation.** Ce résultat est une **approximation**, car on ignore les valeurs individuelles à l'intérieur des classes.

## Exercice 10 — Choisir une représentation graphique
On étudie 80 patients selon leur groupe sanguin, leur âge, leur poids et leur niveau de douleur (faible, modérée, forte).

**Questions.** Quel graphique choisir ? Expliquer.

**Corrigé.**

| Variable | Graphique conseillé | Pourquoi |
|---|---|---|
| Groupe sanguin | Diagramme en barres | Comparer des catégories nominales |
| Âge exact | Histogramme | Montrer la distribution quantitative continue |
| Poids | Histogramme ou boîte à moustaches | Décrire répartition et dispersion |
| Douleur ordinale | Barres dans l'ordre faible → forte | Respecter l'ordre des niveaux |

**Piège fréquent.** L'histogramme représente des intervalles quantitatifs adjacents, pas de simples catégories. En cas de classes d'amplitudes inégales, la hauteur doit refléter la **densité d'effectif** afin que les aires correspondent aux effectifs.

---

## Synthèse des formules

| Indicateur | Formule |
|---|---|
| Fréquence relative | fᵢ = nᵢ / N |
| Moyenne simple | x̄ = Σxᵢ / n |
| Moyenne pondérée | x̄ = Σcᵢxᵢ / Σcᵢ |
| Étendue | max(x) − min(x) |
| Variance descriptive | σ² = Σ(xᵢ−x̄)² / n |
| Variance corrigée | s² = Σ(xᵢ−x̄)² / (n−1) |
| Écart-type | Racine carrée de la variance |
| Écart interquartile | Q3 − Q1 |
| Coefficient de variation | CV = 100 × écart-type / moyenne |

## Auto-évaluation
1. Pourquoi la moyenne n'est-elle pas adaptée à un groupe sanguin ?
2. Quelle différence distingue la médiane du mode ?
3. Pourquoi les valeurs extrêmes modifient-elles davantage la moyenne que la médiane ?
4. Que signifie une fréquence cumulée de 80 % ?
5. Quelle différence existe entre variance descriptive et variance corrigée ?

**Conseil pédagogique :** refaire chaque exercice sans consulter la correction, puis comparer non seulement les résultats numériques, mais aussi les unités et les interprétations.
