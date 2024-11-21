# Rapport

J'ai commencé à faire une application comme sur l'exemple, mais à mi-chemin, ça ne marchait plus. Donc, j'ai tout supprimé et j'ai préféré le faire avec du HTML pour l'esthétique. En gros, je n'arrivais pas à faire des contacts modifiables et je n'arrivais pas non plus à mettre plusieurs infos dans les contacts. Du coup, je l'ai fait en HTML pour me simplifier les choses (et puis c'est plus sympa à voir et utiliser même s'il n'y a pas de CSS).

J'ai d'abord créé le formulaire pour créer le contact et la partie pour afficher les contacts. J'ai ensuite créé la fonction pour prendre les inputs et créer les contacts. Pour la recherche, j'ai utilisé un code que j'avais déjà fait sur un autre projet et je l'ai adapté à une table (à la base, c'était pour une liste).

Pour pouvoir faire les modifications et supprimer, j'ai utilisé une liste déroulante qui appelle des fonctions. J'ai d'abord créé `openModif` qui ouvre un formulaire avec les infos du contact. Sauf que, quand je faisais des changements, ça ne marchait pas. Donc, j'ai créé une nouvelle fonction qui écrase les infos du contact et les remplace par les nouvelles. Et tous ces trucs de modification, c'était bien long et chiant à faire.

J'ai découvert les regex pour la validation des inputs et c'est vraiment pratique. Et puis, j'ai aussi appris à utiliser les tableaux. Je voulais aussi utiliser `localStorage` pour stocker les contacts, mais mon code est mal fait donc j'ai laissé tomber.
Pour le trie du tableau j'ai pris un code de code ne pas y tenir compte c'est pour m’entraîner et comprendre des plus gros algo

Étant donné que je suis mauvais pour faire du pseudo-code et que tout mon code a changé entre temps, j'ai tout supprimé ici aussi. Mais ça ressemblait à un truc comme ça :
```
début
    demander une entrée à l'utilisateur
    vérifier si l'entrée est valide
    si l'entrée est valide alors
        créer un contact
        afficher le contact dans la console
fin
```
## Crédits

Tri de tableau : [https://codepen.io/jmontanye/pen/ZEWqwGm](https://codepen.io/jmontanye/pen/ZEWqwGm)