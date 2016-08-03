---
title: L'API World
description: Description du comportement des méthodes de la classe World.
image_url: https://github.com/Amanda-Martinez/Friendly-Places/blob/master/fiches/img/variables.jpg?raw=true
---

## API World
Cette fiche présente le fonctionnement de la classe World.

### Création d'un objet world
Il suffit juste d'instancier la classe *World*

Tester dans la console :
``` javascript
> const mars = new World()
```

### NEW : Insérer un nouveau lieu
On passe le lieu en paramètre de la méthode *new*.

Exemple de lieu :
``` javascript
{
  name: 'Fairview',
  city: 'Montpellier',
  location: {
    lt: '43.6117398',
    lg: '3.8767571'
  }
}
```

Tester dans la console :
``` javascript
> mars.new({name: 'Fairview', city: 'Montpellier', location: {lt: '43.6117398', lg: '3.8767571'}})
```

### FIND : Trouver des informations sur un lieu existant
On passe le nom d'un lieu (*name*) du lieu en paramètre, et la méthode *find()* renvoit l'objet lieu avec les informations correspondantes.

Dans la console :
``` javascript
> mars.find('Fairview')
```

### FINDBYCITY : Trouver des lieux correspondant à une ville
On passe une ville (*city*) en paramètre, et la méthode *findByCity()* renvoit une collection d'objets lieu qui ce situent dans la ville correspondante.

Dans la console :
``` javascript
> mars.findByCity('Montpellier')
```

### FINDBYCITIES : Trouver les villes des lieux enregistrées
La méthode renvoit un *array* des villes.

Dans la console :
``` javascript
> mars.findByCities()
```

### COLLECTION : Récupérer tous les lieux
En invoquant la méthode *collection()* on récupère une collection de l'ensemble des lieux.

Dans la console :
``` javascript
> mars.collection()
```

### REMOVE : Suprimer un lieu par son id
On passe l'identifiant (*id*) du lieu en paramètre et la méthode *remove()* supprime le lieu correspondant.

Dans la console :
``` javascript
> mars.remove(5)
```
