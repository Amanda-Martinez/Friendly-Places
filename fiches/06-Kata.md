---
title: Katas
description: Quelques petits exercices pour se faire la main
image_url: https://github.com/Amanda-Martinez/Friendly-Places/blob/master/fiches/img/kata.jpg?raw=true
---
# Katas

## Jouer avec un dictionnaire
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

1- créer deux, trois animaux de plus
2- afficher ce que mange chaque animal
3- modifier la propriété *food* du panda en remplaçant *bamboo* par *vegetables*
4- ajouter la propriété *duration* pour préciser l'espérance de vie de chaque animal.

* Notions révisées :
* *console.log*()
* *const*
* {}
* *objet.propriété* - ex. *panda.food*


## Créer un environnement pour coder en JavaScript
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

## Parcourir un dictionnaire
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
