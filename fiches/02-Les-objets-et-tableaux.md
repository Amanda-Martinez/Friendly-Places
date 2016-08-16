---
title: Les objets et les tableaux
description: Jouons avec les tableaux et les objets pour manipuler des données.
image_url: https://github.com/Amanda-Martinez/Friendly-Places/blob/master/fiches/img/tableaux-objets.jpg?raw=true
published: true
---
# Les tableaux et les objets

## Les tableaux
Les tableaux (*array* en anglais) permettent de stocker des valeurs.

```javascript
>> const odd = [1, 3, 5, 7, 9]
```

Vous pouvez effectuer des opérations sur les tableaux ce qui les rends pratiques à utiliser.

Par exemple récupérer le nombre d’éléments :
```javascript
>> [1, 3, 5, 7, 9].length
```

Ou bien récupérer la première valeur :
```javascript
>> const oddRevert = [9, 7, 5, 3, 1]
>> odd[0]
```

Pour ajouter un élément à un tableau on utilise la méthode *push* :
```javascript
>> const odd = [1, 3, 5, 7, 9]
>> odd.push(11)
>> odd
```

Pour retirer le dernier élément d’un tableau on utilise la méthode *pop* :
```javascript
>> const fruits = ['mangue', 'cerise', 'artichaut']
>> fruits.pop()
>> fruits
```

## Les objets
Pour stocker des données vous pouvez également utiliser les *objets*. Ils permettent de manipuler des éléments sous la forme de clés-valeurs.

```javascript
>> const erik = {job: 'intégrateur', age: 31}
```

Pour récupérer une des propriétés d’un objet :
```javascript
>> const erik = {job: 'intégrateur', age: 31}
>> erik.age
>> erik['job']
```

Par *crochets* ou par *point*, les deux approches permettent d’accéder à la propriété.

Vous pouvez facilement ajouter une propriété à un objet :
```javascript
>> const erik = {}
>> erik.gender = 'male'
>> erik.status = 'attend'
>> erik
```
