---
title: Katas
description: Quelques petits exercices pour se faire la main
image_url: https://github.com/Amanda-Martinez/Friendly-Places/blob/master/fiches/img/kata.jpg?raw=true
---
# Katas

## 1- Jouer avec un dictionnaire
- Objectif : Apprendre à stocker des données en utilisant un *dictionnaire*.
- Niveau : 18kyu

Un *dictionnaire* est structure de données stockée dans un *objet* JavaScript.

Dans la *console* de votre navigateur essayez de jouer en créant un bestiaire.

```javascript
const panda = {
	food: 'bamboo',
	colours: ['white', 'black']
}
```

* 1- créer deux, trois animaux de plus
* 2- afficher ce que mange chaque animal
* 3- modifier la propriété *food* du panda en remplaçant *bamboo* par *vegetables*
* 4- ajouter la propriété *duration* pour préciser l'espérance de vie de chaque animal.

* Notions révisées :
* *console.log*()
* *const*
* {}
* *objet.propriété* - ex. *panda.food*


## 2- Créer un environnement pour coder en JavaScript
- Objectif : Installer un environnement de travail basique. Se sentir à l’aise pour coder ses premières lignes de JavaScript.
- Niveau : 20kyu

Dans un dossier créer trois fichiers :
- *index.html*
- *style.css*
- *script.js*

1- Construire une structure *html* dans *index.html* avec :
- un titre de page
- un encodage : *utf8* pour les accents
- un titre dans la page : "Friendly Places"
- une liste avec des villes dans la page

2- Ajouter quelques styles *css* dans *style.css* :
- *police de caractère* en Arial
- couleur de fond personnalisée

3- Afficher un message dans la *console* du navigateur
- Par exemple : “Ready to Code!”

* Notions révisées :
* Balises *html-head-title-body-ul-li*
* *meta charset="utf-8"*
* *link rel="stylesheet" type="text/css" href="name"*
* *script type="text/javascript" src="name"*
* css : *body* {}
* css : *font-family*:
* css : *background-color:*
* *console.log*()

## 3- Parcourir un dictionnaire
- Objectif : Apprendre à manipuler des données en utilisant un *dictionnaire*.
- Niveau : 18kyu
```javascript
const towns = [
  {city: 'Marseille', number: 13},
  {city: 'Nantes', number: 44},
  {city: 'Bordeaux', number: 33},
  {city: 'Montpellier', number: 34},
  {city: 'Nîmes', number: 30}
]
```
À partir de la *collection* ci-dessus, essayez d'afficher une liste *html* de ce style
```html
  <ul class="towns">
    <li>Marseille (13)</li>
    <li>Nantes (44)</li>
    <li>Bordeaux (33)</li>
    <li>Montpellier (34)</li>
    <li>Nîmes (30)</li>
  </ul>
```
* Notions révisées :
* *.map()*
* *document.write()*
* *ul-li*
* *objet.propriété* - ex: *city.town*

## 4- Utiliser le *templating string*
- Objectif : Apprendre à formater l'affichage des données.
- Niveau : 20kyu

À partir d'un jeu de données, comme par exemple
```javascript
const towns = {
  marseille: {location: 'sud', number: 13},
  cholet: {location: 'mordor', number: 49},
  bordeaux: {location: 'l\'autre south', number: 33}
}
const currentUser = {lastname: 'Vega', firstname: 'alan', town: 'bordeaux'}
```
Afficher une phrase simple qui utilise quelques une des données proposées :
```html
  <h1>Le chanteur Alan Vega ne se produira pas à Bordeaux (33), devinez pourquoi ?</h1> 
```
* Notions révisées :
* *templating* - `Yo, ${user.city} - you loose !`*
* *document.write()*
* *objet.propriété* - ex: *towns.marseille.location*

## 5- Jouer à capturer des objets *Dom*
- Objectif : Apprendre à modifier une page avec *JavaScript*.
- Niveau : 18kyu
Ouvrez la page Web [scopyleft](http:/scopyleft.fr) puis essayez de capturer quelques éléments en utilisant la console.  
Par exemples :
- <h1>
- <p>
- <ul>
- <li>
Stockez les résultats dans une variable, et modifier le contenu texte.  
Essayez maintenant de modifier le lien **Accueil** pour qu'il n'affiche que du texte.
Changez le mot *scopyleft* en *micro$oft®*

* Notions révisées :
* *document.querySelector* - ex. document.querySelector('header h1')
* *innerHTML* - ex. document.querySelector('header h1')
* Assignement - ex. const title = document.querySelector('header h1')
* Console et l'inspecteur d'éléments<


