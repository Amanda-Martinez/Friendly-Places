---
title: Json et Fetch
description: comment fonctionnent le Json et Fetch
image_url: https://github.com/Amanda-Martinez/Friendly-Places/blob/master/fiches/img/.jpg?raw=true
---

# Json

## Définition

JSON (Javascript Object Notation) est un format de données dérivé du JavaScript qui permet de représenter de l'information structurée, comme le permet XML par exemple. 
Le JSON permet de faire communiquer des applications. Il est principalement utilisé pour récupérer des données d'un site web à l'autre.
Exemple: aller récupérer la météo sur météo France pour les afficher sur son site.

# Fetch

## Définition

Fetch est une fonction qui permet, à partir d'une url donnée, de faire une requête vers une API pour en récupérer les informations .
On fait une requête qui attend une réponse, la promesse qui indique que l'on peut accéder à la page, que tout va bien.
Ensuite, on demande les données au format JSON ou texte.

Exemple:
```js
>> fetch('http://echo.jsontest.com/town/montpellier/temp/23')
.then(response => response.json())
.then(json => console.log(json))

>>Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
>>Object {temp: "23", town: "montpellier"}
	
```

