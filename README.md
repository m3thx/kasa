# Openclassrooms Formation Développeur web
## Projet 7 - Kasa / Créez une application web de location immobilière avec React
![kasa](/src/assets/logo_red.png)

#### Compétences acquises

-   Configurer la navigation entre les pages de l'application avec React Router
-   Développer des éléments de l'interface d'un site web grâce à des composants React
-   Initialiser une application avec Create React App
### Scénario

Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année ! 


#### Objectif : 
Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !) et toutes les infos que je te donne ci-dessous. Et ce avec un code de qualité ! 


 #### Back-end / data : 
 Le recrutement de la personne en charge du back-end n'est pas terminé et va prendre plus de temps que prévu. Du coup, il va falloir que tu fasses sans pour le moment. Je t'ai extrait les 20 dernières annonces de logements dans ce fichier JSON pour que tu puisses construire le Front qui correspond.


 #### Contraintes techniques : 
 Tu trouveras les coding guidelines de Kasa  [ici](https://course.oc-static.com/projects/Front-End+V2/P9+React+1/Coding+guidelines+Kasa+FR.pdf).
 
 #### Design

Voici les maquettes sur [Figma](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=3%3A0) pour le design d’interface. J’ai l’habitude de travailler avec la logique de composants sur Figma ; Sandra m’a dit que ça te faciliterait le travail sur React. Tu trouveras toutes les ressources dont tu as besoin directement dans la maquette (logo, icônes pour les composants, etc.). Pour cela, il suffit de cliquer sur la ressource souhaitée et de faire "Exporter" au format voulu.


#### Contraintes fonctionnelles


Pour le défilement des photos dans la galerie (composant Gallery) :
Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 
Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 
S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.
La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. 
Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.
 
 

 #### Guide d'étapez

Afin de vous aider à réaliser ce projet, vous pouvez consulter ce [guide](https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/IW_P8+React+Kasa/Guide+d%27etapes+cles+-+Creez+une+application+web+de+location+immobiliere+avec+React.pdf) d’étapes à suivre, qui contient des recommandations et des ressources pour organiser votre travail.


### Pour lancer le serveur utilisez la commande `npm start` et ouvrez l'adresse [http://localhost:3000/](http://localhost:3000/) dans votre navigateur
