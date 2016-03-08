'use strict';

app.controller('portfolioCtrl', ['$scope', function($scope){

  $scope.apropos= {
    description: "Étudiant en 3ème année de licence Multimédia à l’université Paris Est et diplomé d’un DUT MMI ( Métier du Multimédia et de l’ Internet ).",
    passion: "J'ai décidé de faire de ma passion mon métier, à savoir, développer des sites internet et des web-applications utilisants les technologies montantes en JavaScript.",
    competences: "J’ai acquis de nombreuses compétences lors de mes précédentes formations et en tant qu'autodidacte en développement front-end et en conception UI/UX Design.",
    predilection: "Mes langages de prédilections: "

  };
  $scope.competence= {
    dev: "Je développe essentiellement des applications web en JavaScript, notamment avec les technologies AngularJS, JQuery ou encore en JavaScript natif. ",
    design: "Quand j'en ai l'occasion, je réalise aussi le design des applications que je développe. Idéalement, je conçois des design flat ou minimalist."
  };

  $scope.sophie = {
    nom:"Sophie Chaffaut, Vidéaste-Photographe",
    description:"Site portfolio d'une jeune et talentueuse vidéaste",
    description2:"Réalisation du design, intégration et développement web du site.",
    langage:"AngularJS - Bootstrap - SCSS - Grunt - jQuery",
    github:"",
    link:"voir le site"
  };
  $scope.box = {
    nom:"SuggestionBox",
    description:"SuggestionBox est une application web qui permet à un visiteur de s'exprimer sur un sujet. Une fois envoyé, le message peut être commenté et voté par d'autres utilisateurs",
    description2:"",
    langage:"AngularJS - Bootstrap - CSS - Grunt",
    github:"@github.com/",
    link:""
  };
  $scope.movie = {
    nom:"MovieBoardApp",
    description:"MovieBoard est une web application qui permet de suivre l’avancé de ses series TV préférées ",
    description2:"",
    langage:"AngularJS - Bootstrap - CSS",
    github:"@github.com/marvisdan/movieApp",
    link:""
  };
  $scope.ip = {
    nom:"Interactive Portfolio",
    description:"Réalisation d'un interface gestuel réalisé en Java-Processing. L'interface utilise la caméra Kinect pour capter les mouvements de la main de l'utilisateur.",
    description2:"",
    langage:"Java - Processing - Kinect",
    github:"@github.com/marvisdan/projet-kinect",
    link:""
  };
  $scope.echo = {
    nom:"Echo",
    description:"Echo est un service web permettant de créer des messages éphémères à partager sur les réseaux sociaux à l'aide d'un lien url. L'émetteur attribut au message une durée de vie. Une fois cette durée de vie passée, le message disparait sans laisser de trace sur internet. Ce projet a été réalisé dans le cadre d'un projet étudiant. J'ai été chargé de réaliser les vidéos promotionnelles en motion design, le design web et l'intégration de certaine pages du site.",
    description2:"",
    langage:" PHP - HTML/CSS - SQL",
    github:"@github.com/vnctaing/echo",
    link:"Vidéo echo, le service de messages éphémères"
  };
  $scope.todo = {
    nom:"To-do-list-sortable",
    description:"Création d'un gestionnaire de tâche réorganisable à souhait ",
    description2:"",
    langage:"AngularJS - Bootstrap - CSS - Grunt",
    github:"@github.com",
    link:""
  };
}]);
