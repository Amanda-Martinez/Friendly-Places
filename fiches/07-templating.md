---
title: Le templating 
description: Le templating permet de faire une requête qui permet d'aller chercher des données dynamiquement en générant du html 
image_url: https://github.com/Amanda-Martinez/Friendly-Places/blob/master/fiches/img/templating.jpg?raw=true
published: true
---
# Le templating

## Le fonctionnement 

Vous pouvez utiliser le templating afin d'aller chercher des données externes qui vont générer une chaîne de caractères dynamique.
- Statique : écrit en dur dans le html, nécessite une intervention *à la mano* des intégrateurs pour modifier chaque donnée.
- Dynamique : on va générer le contenu html à partir des données externes (dans notre cas, on utilise le javascript pour utiliser les données externes afin de générer des chaînes de caractères). 

## La syntaxe 

Exemple de syntaxe : 
``` `<a href="?q=${city}">`
```

Définition des syntaxes : 
- la syntaxe commence et termine toujours par ``.
- on met une variable à l'intérieur du ${} qui va permettre d'afficher des chaînes de caractères issue des données externes
- ça simplifie l'écriture de la syntaxe classique qui peut être de la concaténation : ("<a href=\"?q=\"" + city + ">")

