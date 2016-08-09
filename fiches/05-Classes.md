---
title: Les classes
description: Petite présentation des classes en javascript
image_url: https://github.com/Amanda-Martinez/Friendly-Places/blob/master/fiches/img/class.jpg?raw=true
---
# Les classes en JavaScript

## Qu'est qu'une classe ?

Une classe définit les caractéristique d'un objet.


##  Comment créer une classe ? 


Pour déclarer une classe, on utilise le mot clé 'class' suivi par le nom de la classe que l'on déclare.

Par exemple :
```javascript
>> class World {
	find(name) {
		return this.collection().filter(place => place.name === name)
	}
	findCity(city) {
	if (! city) {
		return this.collection()
	}
	return this.collection().filter(place => place.city === city)
```
Le corps de la classe est la partie contenue entre les accolades. C'est entre les accolades que l'on définit les propriétés d'une classe.
Dans notre cas, la classe World contient deux fonctions : 'find' et 'findCity'.

L'instruction 'return' définit la valeur à renvoyer suite à l'exécution de la fonction. Une fonction s'arrête à l'instant ou l'instruction 'return' est traitée.

Si elle absente, la valeur renvoyée par défaut est undefined.
