# TD de biostatistique — Tests d'association : 12 exercices corrigés

**Public cible :** étudiants de Licence ISPITS, sciences infirmières et techniques de santé  
**Responsable pédagogique :** Prof. Tikouk Jamal  
**Mise à jour :** 26 octobre 2026  
**Avertissement :** tous les effectifs sont fictifs ; ils servent uniquement à l'apprentissage des méthodes.

## Objectifs pédagogiques
1. Choisir un test adapté au type de variables et au plan d'étude.
2. Construire et vérifier un tableau de contingence.
3. Calculer les effectifs attendus et la statistique χ².
4. Utiliser Fisher lorsque l'approximation du χ² est inadaptée.
5. Utiliser McNemar pour des mesures appariées binaires.
6. Distinguer *significativité*, *force de l'association* et *mesure d'effet*.
7. Calculer et interpréter OR, RR, φ et V de Cramér.
8. Repérer les facteurs de confusion et les limites causales.

## Fiche méthode : quel test choisir ?

| Données et plan | Question | Méthode |
|---|---|---|
| Deux variables catégorielles, groupes indépendants | Indépendance statistique | χ² d'indépendance si approximation acceptable |
| Deux variables binaires, groupes indépendants, petits effectifs | Indépendance | Test exact de Fisher (test conditionnel 2×2) |
| Réponses oui/non avant/après chez les **mêmes** personnes | Changement dans les marges | McNemar |
| Deux variables catégorielles | Intensité de l'association | φ (2×2) ; V de Cramér (tableau général) |
| Exposition et événement binaire | Intensité et direction de l'association | OR ; RR si risques estimables avec le plan d'étude |
| Une variable catégorielle à plusieurs modalités, comparaison à des proportions annoncées | Ajustement à une distribution | χ² d'adéquation, **pas** χ² d'indépendance |
| Une variable quantitative et deux groupes | Comparaison de paramètres/distributions | t de Student/Welch ou méthode non paramétrique selon l'objectif et les hypothèses |

**Règles de travail :** vérifier l'indépendance des observations, les effectifs attendus (et pas uniquement les observés), les marges, la structure du plan d'étude et le seuil α choisi. Pour les tableaux avec effectifs attendus faibles, considérer une méthode exacte ou adaptée. La règle pratique « toutes les valeurs attendues ≥5 » est prudente mais non universelle.

---

## Exercice 1 — Reconnaître le test adapté

**Énoncé.** Indiquer le test à envisager et justifier.

A. Tabagisme (oui/non) et présence d'une maladie (oui/non), 500 personnes indépendantes, effectifs attendus suffisants.  
B. Groupe de traitement A/B et guérison oui/non, 16 patients indépendants, cellules attendues très petites.  
C. Connaissance correcte oui/non avant et après formation chez les mêmes 80 étudiants.  
D. Région (4 catégories) et type d'établissement (3 catégories), données indépendantes, effectifs attendus suffisants.  
E. Fréquences des quatre groupes sanguins comparées à des proportions théoriques.

**Corrigé.** A : χ² d'indépendance. B : Fisher exact 2×2 (si les conditions d'échantillonnage conviennent). C : McNemar. D : χ² d'indépendance 4×3, puis V de Cramér. E : χ² d'adéquation. L'appariement dans C rend le χ² d'indépendance classique inadapté.

## Exercice 2 — χ² d'indépendance sur un tableau 2×2

**Énoncé.** Une étude fictive recense :

| Vaccination | Infection oui | Infection non | Total |
|---|---:|---:|---:|
| Vaccinés | 6 | 54 | 60 |
| Non vaccinés | 16 | 24 | 40 |
| **Total** | **22** | **78** | **100** |

Tester H₀ : vaccination et infection sont indépendantes, contre H₁ : association, avec α=0,05.

**Étape 1 — Effectifs attendus sous H₀ :** Eᵢⱼ=(total ligne × total colonne)/N.

| Vaccination | Infection oui | Infection non |
|---|---:|---:|
| Vaccinés | (60×22)/100 = **13,2** | (60×78)/100 = **46,8** |
| Non vaccinés | (40×22)/100 = **8,8** | (40×78)/100 = **31,2** |

**Étape 2 — Contributions à χ² :**

| Cellule | (Observé−Attendu)²/Attendu |
|---|---:|
| Vaccinés / infection | 3,9273 |
| Vaccinés / pas d'infection | 1,1077 |
| Non vaccinés / infection | 5,8909 |
| Non vaccinés / pas d'infection | 1,6615 |
| **Total** | **12,5874** |

**Étape 3 — Degrés de liberté :** (2−1)×(2−1)=**1**.

**Étape 4 — Probabilité :** χ²=**12,587**, ddl=1, p≈**0,000388** (χ² de Pearson, sans correction de continuité).

**Décision :** p<0,05 : rejet de H₀. Les données présentent une association statistique entre vaccination et infection. Les proportions d'infection observées sont 6/60=**10 %** et 16/40=**40 %**. Le calcul, seul, ne prouve pas de causalité.

## Exercice 3 — χ² d'indépendance dans un tableau 3×2

**Énoncé.** 90 patients répartis dans trois services :

| Service | Amélioration oui | Amélioration non | Total |
|---|---:|---:|---:|
| A | 20 | 10 | 30 |
| B | 25 | 5 | 30 |
| C | 15 | 15 | 30 |
| **Total** | **60** | **30** | **90** |

**Étape 1.** Les attendus de chaque service sont 30×60/90=**20** « oui » et 30×30/90=**10** « non ».

**Étape 2.** Contributions de A : 0. Contributions de B : (25−20)²/20+(5−10)²/10=**3,75**. Contributions de C : (15−20)²/20+(15−10)²/10=**3,75**.

**Résultat :** χ²=**7,50**, ddl=(3−1)(2−1)=**2**, p≈**0,02352**.

**Interprétation.** L'amélioration est associée au service au seuil de 5 %. Le test **global** ne précise pas automatiquement quels services diffèrent : des comparaisons post-hoc adaptées et corrigées en cas de multiplicité peuvent être nécessaires.

## Exercice 4 — Test exact de Fisher

**Énoncé.** Comparer deux groupes indépendants de 10 personnes :

| Groupe | Succès | Échec |
|---|---:|---:|
| A | 1 | 9 |
| B | 7 | 3 |

**Pourquoi Fisher ?** Les effectifs théoriques des succès sont **4** par groupe, donc l'approximation du χ² est moins fiable.

**Test.** H₀ : absence d'association entre groupe et réponse. On fixe les marges observées et calcule les probabilités des tableaux 2×2 compatibles sous H₀ (distribution hypergéométrique).

**Résultat (bilatéral, convention usuelle de Fisher) :** p≈**0,01977**.

**Décision :** association statistiquement significative au seuil 5 %. Taux de succès : **10 %** pour A contre **70 %** pour B. OR (succès, A vs B) = (1×3)/(9×7) ≈ **0,0476** ; une interprétation de l'OR doit préciser l'événement et le groupe de référence. Dans ce petit échantillon, les estimations sont imprécises.

## Exercice 5 — McNemar : mesures avant/après

**Énoncé.** 80 étudiants passent un test de connaissance avant/après une formation :

| Avant \\ Après | Correct après | Incorrect après | Total |
|---|---:|---:|---:|
| Correct avant | 32 | 8 | 40 |
| Incorrect avant | 24 | 16 | 40 |
| **Total** | **56** | **24** | **80** |

Les **paires discordantes** sont b=8 (régression) et c=24 (amélioration).

**Statistique asymptotique sans correction :** χ²_M=(b−c)²/(b+c)=(8−24)²/32=**8,00** ; p≈**0,00468** (ddl=1).

**Variante exacte :** sous H₀, parmi les 32 discordants, le nombre d'améliorations suit une loi binomiale B(32,0,5). Test bilatéral exact : p≈**0,00700**.

**Conclusion :** les changements sont asymétriques ; 24 étudiants passent d'incorrect à correct, contre 8 dans l'autre sens. Les données appuient une évolution de la proportion de réponses correctes. Sans groupe témoin, on ne peut pas attribuer avec certitude cette évolution à la formation.

## Exercice 6 — Force d'association : φ et V de Cramér

**Énoncé.** Reprendre les exercices 2 et 3 pour mesurer la force des associations.

**Formules :** φ=√(χ²/N) en 2×2 (intensité sans signe) ; V=√[χ²/(N×min(r−1,c−1))].

**Exercice 2 :** φ=√(12,5874/100) ≈ **0,355**.

**Exercice 3 :** V=√[7,5/(90×1)] ≈ **0,289**.

**Lecture :** coefficients sans unité, de 0 à 1. Plus la valeur est élevée, plus la dépendance est marquée selon l'indicateur. Les étiquettes « faible », « moyenne », « forte » dépendent du domaine et des dimensions du tableau ; ne pas appliquer des seuils mécaniques. Le V standard n'indique **pas le sens** de l'association.

## Exercice 7 — Calculer le risque relatif et l'odds ratio

**Énoncé.** Une cohorte fictive suit 200 personnes :

| Exposition | Maladie oui | Maladie non | Total |
|---|---:|---:|---:|
| Exposés | a=30 | b=70 | 100 |
| Non exposés | c=10 | d=90 | 100 |

**Étape 1 — Risques :** 30/100=**0,30** chez les exposés ; 10/100=**0,10** chez les non exposés.

**Étape 2 — Risque relatif :** RR=(30/100)/(10/100)=**3,00**.

**Étape 3 — Odds ratio :** OR=(a×d)/(b×c)=(30×90)/(70×10)=**3,857**.

**Étape 4 — IC approximatifs à 95 % :**
- SE[ln(RR)]=√(1/a−1/(a+b)+1/c−1/(c+d)).
- IC(RR)=exp{ln(RR) ± 1,96×SE[ln(RR)]} ≈ **[1,55 ; 5,80]**.
- SE[ln(OR)]=√(1/a+1/b+1/c+1/d).
- IC(OR)=exp{ln(OR) ± 1,96×SE[ln(OR)]} ≈ **[1,77 ; 8,42]**.

**Interprétation :** dans cette cohorte fictive, le risque de maladie est trois fois plus élevé chez les exposés. L'OR, 3,86, n'est **pas** un risque relatif ; l'assimilation est surtout problématique lorsque l'événement est fréquent. Dans une étude cas-témoins classique, les risques et donc le RR ne sont généralement pas directement estimables à partir du tableau d'échantillonnage.

## Exercice 8 — Résultat non significatif

**Énoncé.**

| Groupe | Événement oui | Événement non |
|---|---:|---:|
| A | 12 | 8 |
| B | 10 | 10 |

**Corrigé.** N=40. Attendus : 11 et 9 pour chaque groupe. χ²=**0,4040**, ddl=1, p≈**0,5250**.

**Conclusion appropriée :** aucune association statistiquement significative **n'a été mise en évidence** au seuil de 5 %. Il serait incorrect d'affirmer que les variables sont nécessairement indépendantes. Il faut aussi considérer taille d'échantillon, précision et puissance.

## Exercice 9 — Ne pas confondre adéquation et indépendance

**Énoncé.** Groupes sanguins fictifs observés sur 100 personnes :

| Groupe | Observé | Fréquence attendue | Attendu |
|---|---:|---:|---:|
| A | 45 | 40 % | 40 |
| B | 35 | 40 % | 40 |
| AB | 15 | 15 % | 15 |
| O | 5 | 5 % | 5 |
| **Total** | **100** | **100 %** | **100** |

**Hypothèse :** les proportions observées suivent la distribution annoncée, supposée **fixée a priori**.

**Calcul :** χ²=(45−40)²/40+(35−40)²/40+0+0=**1,25**. ddl=4−1=**3**, p≈**0,7410**.

**Conclusion :** les observations n'apportent pas d'argument statistique contre la répartition annoncée. Ceci est un **test d'adéquation d'une seule variable**, et non un test d'association entre deux variables.

## Exercice 10 — Paradoxe de Simpson et facteur de confusion

**Énoncé.** Les données fictives suivantes décrivent un succès selon le traitement et la gravité initiale :

| Strate | Traitement | Succès | Échec | Taux de succès |
|---|---|---:|---:|---:|
| Cas légers | A | 81 | 6 | **93,1 %** |
| Cas légers | B | 234 | 36 | **86,7 %** |
| Cas graves | A | 192 | 71 | **73,0 %** |
| Cas graves | B | 55 | 25 | **68,8 %** |

Dans chaque strate, A présente le taux de succès le plus élevé.

**Agrégation :** A totalise 273 succès sur 350, soit **78,0 %** ; B totalise 289 succès sur 350, soit **82,6 %**.

**Explication :** une plus grande proportion de cas graves reçoit A ; une plus grande proportion de cas légers reçoit B. L'association globale inverse le classement des associations stratifiées. Il faut analyser la structure des groupes et contrôler les facteurs pertinents. Ce renversement ne prouve pas, à lui seul, un effet causal des traitements.

## Exercice 11 — Significativité et taille de l'échantillon

**Énoncé.** Reprendre le tableau de l'exercice 8 puis multiplier **tous** les effectifs par 10 sans modifier les proportions.

**Cas initial :** N=40, χ²=0,4040, p≈**0,525** et φ=√(0,4040/40)≈**0,1005**.

**Cas multiplié par dix :** N=400, χ²=4,0404, p≈**0,0444**, mais φ=√(4,0404/400)≈**0,1005**.

**Conclusion pédagogique :** à proportions identiques, la force de l'association (φ) reste la même alors que la valeur p peut diminuer avec un effectif plus important. Ce calcul est une **illustration mathématique hypothétique** ; multiplier les lignes d'un jeu de données réel n'ajoute pas de nouvelles observations indépendantes et n'est pas une analyse valide.

## Exercice 12 — Variable ordinale : association globale et tendance

**Énoncé.** Trois catégories ordonnées d'exposition sont étudiées :

| Niveau d'exposition | Malades | Non malades | Total | Proportion malade |
|---|---:|---:|---:|---:|
| Faible | 2 | 38 | 40 | 5 % |
| Moyen | 8 | 32 | 40 | 20 % |
| Élevé | 18 | 22 | 40 | 45 % |
| **Total** | **28** | **92** | **120** | |

**Question 1 — Test global :** χ² d'indépendance 3×2 : **18,261**, ddl=2, p≈**0,000108**.

**Question 2 — Que peut-on conclure ?** Les proportions de maladie diffèrent selon les catégories d'exposition, et les proportions observées augmentent avec le niveau. Le test global confirme une association, mais **ne teste pas spécifiquement une tendance linéaire**.

**Question 3 — Quelle extension ?** Le test de tendance de Cochran–Armitage avec des scores ordonnés préspécifiés (par exemple 1, 2, 3) peut vérifier une tendance. Il convient de justifier les scores, le plan d'échantillonnage, la forme de tendance étudiée et de distinguer la tendance statistique de l'effet causal.

---

## Tableau récapitulatif des réponses

| Exercice | Indicateur/test | Résultat principal |
|---|---|---|
| 1 | Sélection du test | χ² / Fisher / McNemar / χ² d'adéquation |
| 2 | χ², 2×2 | 12,587 ; p=0,000388 |
| 3 | χ², 3×2 | 7,500 ; p=0,02352 |
| 4 | Fisher exact bilatéral | p=0,01977 |
| 5 | McNemar exact bilatéral | p=0,00700 |
| 6 | φ et V | 0,355 et 0,289 |
| 7 | RR ; OR | 3,00 ; 3,857 |
| 8 | χ², 2×2 | 0,404 ; p=0,525 |
| 9 | χ² d'adéquation | 1,250 ; p=0,741 |
| 10 | Stratification | Inversion des taux agrégés |
| 11 | p et taille N | p baisse ; φ inchangé |
| 12 | χ², 3×2 | 18,261 ; p=0,000108 |

## Questions d'autoévaluation

1. Pourquoi ne pas appliquer le χ² d'indépendance à des données avant/après appariées ?
2. À quel moment faut-il inspecter les effectifs attendus ?
3. Un p>0,05 démontre-t-il l'indépendance ?
4. Le V de Cramér a-t-il un signe ?
5. Pourquoi un OR peut-il être très différent d'un RR ?
6. Pourquoi les taux globaux peuvent-ils inverser le classement de deux traitements ?
7. Dans un tableau 3×2, un χ² significatif identifie-t-il les catégories responsables ?
8. Comment distinguer association statistique et causalité ?

**Méthode recommandée pour la rédaction d'un résultat :** indiquer la population et l'effectif, les deux variables, le test, la statistique (et les ddl), la valeur p, la mesure d'effet avec son IC lorsqu'il est pertinent, puis une interprétation compatible avec le plan d'étude et ses limites.
