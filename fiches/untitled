---
title: Les fonctions Map et Filter
description: La fonction Map permet d'appliquer un même traitement à l'ensemble des données d'un tableau et Filter permet de filtrer ces données.
image_url: https://github.com/Amanda-Martinez/Friendly-Places/blob/master/fiches/img/map-filter.jpg?raw=true
published: true
---
# Les fonctions Map et Filter

## Map
Vous pouvez l'utiliser avec cette syntaxe (dans la console ou dans un fichier JS ou HTML) : 
array.map(name => name + "s")

Définition des syntaxes : 
- _array_ : à remplacer par un tableau, généré précédemment (et appelé par son nom) ou créé à cet endroit-là (entre crochets [])
- _.map_ : la fonction, à écrire telle quelle
- _name_ : nom générique qui va désigner chaque élément du tableau (vous pouvez le nommer comme vous le souhaitez, ex : toto :) )
- _name => name_ : remettre le même nom pour déclencher la modification 
- _+ "s"_ : à remplacer par le traitement que l'on souhaite appliquer à chaque élément du tableau (cela peut être n'importe quelle fonction : mathématique, concaténation, affichage, etc.)

*Ainsi la fonction _map_ va parcourir chaque élément du tableau, désigné par le terme _name_, lui appliquer le traitement décrit par l'expression _name + "s"_ et renvoyer un nouveau tableau avec les valeurs ainsi générées.*

Exemple de fonction appliquée : 
```javascript
>> const fruits = ["fraise", "orange", "kiwi"]
```
fruits = le nom du tableau et à l’intérieur des crochets on retrouve les éléments du tableau

```javascript
>> fruits.map(x => x+"s")
["fraises", "oranges", "kiwis"]
```

On a donc ici ajouté un S à chacun des éléments du tableau.

## Filter
Vous pouvez l'utiliser avec cette sytaxe : 
array.filter(name => name === "La Panacée")

Définition des syntaxes : 
- _array_ : toujours à remplacer par un tableau
- _.filter_ : la fonction, à écrire telle quelle
- _name_ : nom générique pour désigner chaque élément du tableau
- _name => name_ : remettre le même nom pour déclencher le test 
- _=== "La Panacée"_ : à remplacer le test qu'on veut appliquer à chaque élément du tableau pour ressortir le ou les éléments qui correspondent (ici ceux nommés "La Panacée"). 
- !== "La Panacée" : permet de tester que ça n'est pas égal à "La Panacée"

*Ainsi la fonction _filter_ va parcourir chaque élément du tableau, désigné par le terme _name_, vérifier si le test décrit par l'expression _name === "La Panacée"_ est vraie et renvoyer un nouveau tableau avec uniquementles valeurs qui correspondaient bien au test.*

Exemple de fonction appliquée : 
```javascript
>> const fruits = ["fraise", "orange", "kiwi"]
```
fruits = le nom du tableau cf. ci-dessus

```javascript
>> fruits.filter(name => name === "fraise")
["fraise"]
```

On a donc ici retourné/ ressorti l'élément du tableau qui correspond au nom "fraise", au test logique.
