---
title: Katas
description: Quelques petits exercices pour se faire la main
image_url: https://github.com/Amanda-Martinez/Friendly-Places/blob/master/fiches/img/variables.jpg?raw=true
---
# Katas

## Environnement JavaScript
- Objectif : Installer un environnement de travail basique
- Niveau : 20kyu

Dans un dossier créer trois fichiers :
- index.html
- style.css
- script.js

1- Construire une structure html dans index.html avec :
- un titre de page
- un encodage : utf8 pour les accents
- un titre dans la page : "Friendly Places"
- une liste avec des villes dans la page

2- Ajouter quelques styles css dans style.css :
- police de caractère en Arial
- couleur de fond personnalisée

3- Affichage d'un message dans la console du navigateur
- afficher : "Code Ready!"

## Parcourir un objet
- Objectif : Manipuler les données stockées dans un objet
- Niveau : 20kyu

```javascript
const towns = [
  {city: 'Marseille', number: 13},
  {city: 'Nantes', number: 44},
  {city: 'Bordeaux', number: 33},
  {city: 'Montpellier', number: 34},
  {city: 'Nîmes', number: 30}
]
```
À partir des données ci-dessus essayez d'afficher une liste html de ce style
```html
  <ul class="towns">
    <li>Marseille (13)</li>
    <li>Nantes (44)</li>
    <li>Bordeaux (33)</li>
    <li>Montpellier (34)</li>
    <li>Nîmes (30)</li>
  </ul>
```
