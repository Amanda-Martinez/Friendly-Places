---
title: Flexbox
description: comment fonctionnent les flexbox
image_url: https://github.com/Amanda-Martinez/Friendly-Places/blob/master/fiches/img/flexbox.jpg?raw=true
---

# Flexbox

## Définition

Les flexbox permettent de créer des boîtes qui agissent de manière dynamique, sans avoir besoin de mettre beaucoup de code.
Elles peuvent se déplacer suivant la taille de l'écran, apparaître selon leur date de création, se mettre en largeur ou en longueur, se placer au milieu d'une page ou d'un contenu.
Le code s'intègre dans le css.
Il distingue les parents et les enfants. Les parents sont la boîte qui contient la totalité du header, par exemple, et les enfants des boîtes à l'intérieur du header, les éléments d'un menu par exemple.  
Ils interagissent ensemble, les enfants étant contenus dans les parents. Si les enfants ont à leur tour des enfants (les petits-enfants), ils ne seront pas dirigés par les parents mais par les enfants.

## Propriétés

### display: flex

C'est ce qui permet d'afficher les boîtes
On le place dans le css devant l'élément que l'on souhaite voir se comporter en flexbox.

Exemple : 
```css
>> header {
		display: flex;
	}
```
Tous les éléments contenus dans le header sont traités en boîtes.

### flex-wrap

Chaque boîte occupe un espace, elles sont toutes alignées. Quand il n'y a plus assez de place pour une boîte, la suivante passe directement à la ligne en-dessous.
Si la fenêtre rétrécit, les boîtes gardent leur ordre et se rangent les unes sous les autres automatiquement.

```css
>> header {
		display: flex;
		flex-wrap: wrap;
	}
```

Note: par défaut, no-wrap est _actif_

### flex-direction

On peut définir la direction des boîtes
* row: de gauche à droite
* column: de haut en bas

Exemple:
```css
>> header {
		display: flex;
		flex-direction: column
	}
```

Note: par défaut, row est _actif_

### justify-content

Les boîtes peuvent s'aligner à droite, à gauche, au centre, être espacées collées à gauche et à droite ou espacées tout autour.
On pourra définir l'espace qui les distance.

* flex-start: les éléments partent du début, de la gauche de l'espace
* flex-end: les éléments se placent près de la droite
* center:les éléments sont centrés
* space-between: les éléments sont à droite et à gauche avec un espace au milieu
* space-around: les éléments sont chacun entourés d'un espace

Exemple:
```css
>> header {
		display: flex;
		justify-content: space-between;
	}
```

Note: par défaut, flex-start est _actif_





