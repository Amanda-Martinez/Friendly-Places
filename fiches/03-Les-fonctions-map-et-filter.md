---
title: Les fonctions Map et Filter
description: >-
  La fonction Map permet d appliquer un traitement à l ensemble des données d un
  tableau et Filter permet de filtrer ces données.
image_url: >-
  https://github.com/Amanda-Martinez/Friendly-Places/blob/master/fiches/img/tableaux-objets.jpg?raw=true
published: true
---
# Les fonctions Map et Filter

## Map
Vous pouvez l'utiliser par exemple avec cette fonction (dans la console ou dans ton fichier JS ou HTML) : 
array.map(name => name +"s")

Définition des syntaxes : 
- array : sigifie un tableau générique, généré précédemment ou déjà affiché à cet endroit-là
- .map : la fonction
- name : nom générique pour décrire chaque élément du tableau (vous pouvez le nommer comme vous le souhaitez, ex : toto :) )
- name => name : remettre le même nom pour déclencher la modification 
- +"s" : exemple de fonction appliquée à l'ensemble du tableau (cela peut être n'importe quelle fonction : mathématique, concaténation, affichage, etc.)

Exemple de fonction appliquée : 
```javascript
>> const fruts = ["fraise", "orange", "kiwi"]
```
fruts = le nom du tableau et à l’intérieur des crochets on retrouve les éléments du tableau

```javascript
fruts.map(x => x+"s")
>>["fraises", "oranges", "kiwis"]

On a donc ici ajouté un S à chacun des éléments du tableau.

## Filter
Vous pouvez l'utiliser par exemple avec cette fonction : 
array.filter(name => name === "La Panacée")

Définition des syntaxes : 
- array : sigifie toujours un tableau générique
- .filter : la fonction
- name : nom générique pour décrire chaque élément du tableau
- name => name : remettre le même nom pour déclencher le test 
- === "La Panacée" : exemple du test appliqué à l'ensemble du tableau pour ressortir le ou les éléments nommés "La Panacée"
- !== "La Panacée" : permet de tester que ça n'est pas égal à la Panacée 

Exemple de fonction appliquée : 
const fruts = ["fraise", "orange", "kiwi"]
fruts = le nom du tableau cf. ci-dessus

fruts.filter(name => name === "fraise")
>>["fraise"]

On a donc ici retourné/ ressorti l'élément du tableau qui correspond au nom "fraise", au test logique.


