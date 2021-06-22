# Projet_4_Openclassroom 
***
Projet 4 GameOn-Website-FR (Parcours Developpeur Front-end)
***

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Goals](#goals)
4. [Compatibility](#compatibility)
5. [Screenshots](#screenshots)
***

## General Info
***
#### Liens:
* Lien Maquette Figma : https://www.figma.com/file/prxFGnSUoEhk6PTcMaJQim/UI-Design-GameOn-EN.
* Lien Repository Github Projet de Base : https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/.
* Lien Issues : https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/issues.



***
## Technologies
***
* Le développement doit favoriser le Javascript afin de s'entraîner a le maitriser.
* Utilisation que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.
* Il n'y a aucune dependances.
* Aucun Framework ne devra être utilisé.
* Utilisation de Docker optionnelle.


***
## Goals
***

#### Issue_1 : TODO : fermer la modale #1 :
* Ajouter la fonctionnalité au bouton (x).


#### Issue_2 : Implémenter entrées du formulaire #2 :
(1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
(2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :
             * Le formulaire doit être valide quand l'utilisateur clique sur "Submit".
             * Les données doivent être saisies correctement :
                  (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
                  (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
                  (3) L'adresse électronique est valide.
                  (4) Pour le nombre de concours, une valeur numérique est saisie.
                  (5) Un bouton radio est sélectionné.
                  (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
             * Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
             
#### Issue_3 : Ajouter validation ou messages d'erreur #3 :
Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. 
Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :
* "Veuillez entrer 2 caractères ou plus pour le champ du nom."
* "Vous devez choisir une option."
* "Vous devez vérifier que vous acceptez les termes et conditions."
* "Vous devez entrer votre date de naissance."

#### Issue_4 : Ajouter confirmation quand envoie réussi #4 :
Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur 
(ex. "Merci ! Votre réservation a été reçue.").

#### Issue_5 : Tests manuels #5 :
* Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, ainsi que dans les versions mobile et desktop.
Corriger les erreurs d'affichage existantes.
* Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes).

***
## Compatibility
***
Sur Mobile et desktop, le site devra s’adapter, Tablette n’étant pas prioritaire,
leur mise en page est libre.
* L’ensemble du site devra être responsive sur mobile, tablette et desktop.
* Les pages devront passer la validation W3C en HTML et CSS sans erreur.
* Le site doit être parfaitement compatible avec les dernières versions desktop de
Chrome et Firefox.

***
## Screenshots
***

#### Version Desktop                                                              
![Image text](/img/GameOn_Desktop.png/)                                     
***
#### Version Mobile
![Image text](/img/GameOn_Mobile.png/)
