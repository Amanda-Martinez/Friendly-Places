---
title: Local Storage 
description: envoi et récupération de données en local storage
image_url: https://github.com/Amanda-Martinez/Friendly-Places/blob/master/fiches/img/localStorage.jpg?raw=true
---
# Les bases de localStorage

## Qu'est ce que le localStorage ?
Le local storage permet de stocker des données dans le navigateur. Les données n'ont pas de limite dans le temps. 
Le local storage permet de stocker rapidement des données en cache, sans faire intervenir le serveur.
L'un des avantages est de retrouver des données immédiatement à la reconnexion ou de les mémoriser pour éviter leur perte en fermant le navigateur.

## Comment stocker avec localStorage ?
via un duo clé/valeur.
On crée une clé et on lui attribue une valeur via la méthode setItem.

Par exemple:
```javascript
>> localStorage.setItem('username', 'Marie')
```

On récupère la valeur associée à une clé via la méthode getItem.

Par exemple:
```javascript
>> localStorage.getItem('username')
"Marie"
```
 






