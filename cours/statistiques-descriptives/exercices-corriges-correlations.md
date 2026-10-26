# Travaux dirigés : corrélations — 10 exercices corrigés et expliqués

**Niveau :** Licence ISPITS / biostatistique  
**Auteur pédagogique :** Prof. Tikouk Jamal  
**Version :** 26 octobre 2026  
**Données :** exemples fictifs à visée pédagogique.

## Objectifs d'apprentissage

Calculer et interpréter la covariance et les coefficients de corrélation de Pearson, Spearman et Kendall ; choisir la méthode selon les variables ; examiner les valeurs extrêmes ; tester une corrélation et comprendre les limites de l'interprétation.

### Rappels préalables

- **Pearson** : association *linéaire* entre deux variables quantitatives ; r = Σ[(xᵢ−x̄)(yᵢ−ȳ)] / √{Σ(xᵢ−x̄)² × Σ(yᵢ−ȳ)²}.
- **Spearman** : corrélation de Pearson entre les **rangs moyens** ; adaptée aux variables ordinales et aux relations monotones.
- **Kendall tau-b** : association ordinale fondée sur les paires concordantes et discordantes ; tient compte des ex æquo.
- Un coefficient de corrélation est entre −1 et +1. Le signe donne la direction et la valeur absolue l'intensité de l'association selon la méthode. **Corrélation ≠ causalité.**
- Un coefficient proche de zéro pour Pearson n'exclut pas une association non linéaire.

## Exercice 1 — Lire et interpréter les coefficients

**Énoncé.** Quatre analyses rapportent r = +0,92 ; r = −0,81 ; r = +0,04 et r = −1.

**Corrigé.** +0,92 : association linéaire positive élevée ; −0,81 : association linéaire négative élevée ; +0,04 : presque aucune association **linéaire** détectée ; −1 : relation linéaire négative parfaite. La force ne prouve ni la causalité ni la significativité statistique ; celle-ci dépend notamment de la taille de l'échantillon.

## Exercice 2 — Covariance et corrélation de Pearson

**Énoncé.** Pour cinq patients fictifs, X = [1,2,3,4,5] et Y = [2,3,5,4,6]. Calculer covariance et corrélation.

**Étape 1.** x̄ = 3 et ȳ = 4.

| x | y | x−3 | y−4 | Produit | (x−3)² | (y−4)² |
|---:|---:|---:|---:|---:|---:|---:|
|1|2|−2|−2|4|4|4|
|2|3|−1|−1|1|1|1|
|3|5|0|1|0|0|1|
|4|4|1|0|0|1|0|
|5|6|2|2|4|4|4|
|**Somme**||||**9**|**10**|**10**|

**Étape 2.** Covariance descriptive (division par n) = 9/5 = **1,8**. Covariance d'échantillon corrigée (division par n−1) = 9/4 = **2,25**.

**Étape 3.** r = 9/√(10×10) = **0,90**.

**Interprétation.** Association linéaire positive forte dans ces cinq observations. Avec n=5, aucune généralisation sans examen de l'incertitude.

## Exercice 3 — Relation négative parfaite

**Énoncé.** X = [1,2,3,4,5] et Y = [10,8,6,4,2]. Calculer r.

**Corrigé.** Chaque augmentation d'une unité de X correspond exactement à une diminution de 2 unités de Y : Y = 12−2X. Toutes les observations sont sur une droite décroissante, donc **r = −1**. Cela ne démontre pas une relation causale.

## Exercice 4 — Spearman sans ex æquo

**Énoncé.** Les rangs des six étudiants sur X sont [1,2,3,4,5,6] et sur Y [3,1,4,2,6,5]. Calculer le coefficient de Spearman.

Pour des rangs **sans ex æquo** : ρₛ = 1 − 6Σdᵢ²/[n(n²−1)].

| Rang X | Rang Y | d = X−Y | d² |
|---:|---:|---:|---:|
|1|3|−2|4|
|2|1|1|1|
|3|4|−1|1|
|4|2|2|4|
|5|6|−1|1|
|6|5|1|1|
|**Total**|||**12**|

ρₛ = 1−(6×12)/(6×35) = 1−72/210 = **0,657**.

**Interprétation.** Association ordinale positive de niveau modéré à relativement élevé dans l'exemple. Les seuils d'interprétation ne sont pas universels.

## Exercice 5 — Spearman avec ex æquo

**Énoncé.** X = [1,2,2,4,5] et Y = [2,1,3,3,5].

**Étape 1.** Calculer les rangs **moyens** :

| Individu | X | Rang X | Y | Rang Y |
|---:|---:|---:|---:|---:|
|1|1|1|2|2|
|2|2|2,5|1|1|
|3|2|2,5|3|3,5|
|4|4|4|3|3,5|
|5|5|5|5|5|

**Étape 2.** Moyenne de chaque série de rangs : 3. Somme des produits des écarts à 3 : **7,25** ; somme des carrés des écarts X : **9,5** ; Y : **9,5**.

**Étape 3.** ρₛ = 7,25/√(9,5×9,5) = **0,763**.

**Point de méthode.** La formule simplifiée 1−6Σd²/[n(n²−1)] n'est pas valide telle quelle avec des ex æquo. Il faut calculer Pearson sur les rangs moyens.

## Exercice 6 — Kendall tau : paires concordantes et discordantes

**Énoncé.** X = [1,2,3,4] et Y = [1,3,2,4].

Pour chaque paire de personnes, comparer les évolutions de X et Y.

- Concordance : X et Y évoluent dans le même sens.
- Discordance : X et Y évoluent dans des sens opposés.

Ici, sur 4×3/2 = **6 paires**, 5 sont concordantes et 1 est discordante (les individus 2 et 3).

Sans ex æquo, τ = (C−D)/[n(n−1)/2] = (5−1)/6 = **0,667**.

**Interprétation.** Concordance positive des classements. Malgré ce coefficient, le petit effectif impose de la prudence sur l'inférence (test bilatéral exact : p≈0,333).

## Exercice 7 — Valeur extrême : comparer Pearson et Spearman

**Énoncé.** X = [1,2,3,4,5,6] ; Y = [1,2,3,4,5,1000].

**Corrigé.**

- Pearson : **r ≈ 0,657**.
- Spearman : **ρₛ = 1,000**, car les rangs augmentent dans le même ordre.

**Interprétation.** La dernière valeur modifie fortement la relation linéaire et la valeur de Pearson, tandis que Spearman conserve l'information d'ordre. Il faut examiner les données et les erreurs de saisie éventuelles avant d'écarter une observation. Spearman n'est pas une preuve automatique de qualité des données.

## Exercice 8 — Tester la corrélation de Pearson

**Énoncé.** Une étude fictive observe n=20 et r=0,60. Tester H₀ : ρ=0 contre H₁ : ρ≠0, au seuil de 5 %.

**Hypothèses du test usuel :** observations indépendantes et conditions de normalité bivariée assurant la validité exacte de la statistique sous H₀ (ou justification asymptotique adaptée).

**Étape 1.** t = r √[(n−2)/(1−r²)].

**Étape 2.** t = 0,60 × √[18/(1−0,36)] = **3,182** ; degrés de liberté = 18.

**Étape 3.** Pour un test bilatéral, p ≈ **0,00516** ; la valeur critique t(0,975;18) ≈ **2,101**.

**Décision.** On rejette H₀ au seuil de 5 %. Les données sont compatibles avec une association linéaire positive non nulle dans la population, sous les hypothèses retenues. Une absence de causalité reste possible.

**Complément : intervalle de confiance approximatif (Fisher).** z = atanh(0,60), erreur-type = 1/√(20−3). L'IC à 95 % de ρ obtenu par transformation inverse est environ **[0,214 ; 0,824]**.

## Exercice 9 — Corrélation partielle

**Énoncé.** On connaît r(X,Y)=0,60 ; r(X,Z)=0,50 ; r(Y,Z)=0,70. Calculer r(X,Y·Z), corrélation partielle contrôlant linéairement Z.

**Formule.** r(X,Y·Z) = [r(X,Y)−r(X,Z)r(Y,Z)] / √{[1−r(X,Z)²][1−r(Y,Z)²]}.

**Application.** Numérateur = 0,60−0,50×0,70 = **0,25**. Dénominateur = √(0,75×0,51) ≈ **0,6185**.

**Résultat.** r(X,Y·Z) ≈ **0,404**.

**Interprétation.** L'association linéaire résiduelle entre X et Y après ajustement linéaire sur Z est plus faible que la corrélation brute. L'ajustement ne prouve pas l'absence de facteurs de confusion ou une causalité.

## Exercice 10 — Corrélation agrégée et paradoxe de Simpson

**Énoncé.** Dans deux centres de formation, les couples (heures de préparation, score) sont :

- Centre A : (1,8), (2,9), (3,10).
- Centre B : (8,1), (9,2), (10,3).

**Étape 1.** Dans chaque centre, le score augmente parfaitement avec le temps de préparation : r(A)=+1 et r(B)=+1.

**Étape 2.** Sur l'ensemble des 6 personnes, X = [1,2,3,8,9,10] et Y = [8,9,10,1,2,3]. Avec x̄=ȳ=5,5, Σ(x−x̄)(y−ȳ)=−69,5 et Σ(x−x̄)²=Σ(y−ȳ)²=77,5 ; r global = −69,5/77,5 ≈ **−0,897**.

**Interprétation.** Une association positive au sein de chaque centre devient négative après regroupement, parce que les centres possèdent des niveaux de base différents. Avant toute interprétation, vérifier la stratification, les facteurs de confusion et la composition des groupes. Cet exemple est construit pour illustrer un renversement de signe.

## Choisir le bon outil

| Type de données ou question | Outil pertinent |
|---|---|
| Deux mesures quantitatives ; relation linéaire | Pearson |
| Deux variables ordinales ou relation monotone | Spearman |
| Classements ; intérêt pour les paires et les ex æquo | Kendall tau-b |
| Deux variables qualitatives nominales | Tableau croisé, khi-deux, V de Cramér (pas Pearson directement sur des codes arbitraires) |
| Relation ajustée linéairement sur une troisième variable | Corrélation partielle |
| Relation potentiellement non linéaire | Nuage de points, diagnostic et méthode adaptée |

## Autoévaluation

1. Pourquoi r=0 n'implique-t-il pas nécessairement indépendance ?
2. Quand la formule simplifiée de Spearman est-elle inadaptée ?
3. Pourquoi deux corrélations de signes opposés peuvent-elles apparaître selon le niveau d'agrégation ?
4. Pourquoi le test de significativité doit-il être distingué de l'intensité de la corrélation ?
5. Quelle précaution prendre face à une valeur extrême ?

**Règle finale :** examiner le nuage de points, le type de variables, les valeurs manquantes, les ex æquo, les observations influentes, les hypothèses et la taille d'échantillon avant de conclure.
