$(document).ready(function(){
    //Au démarage on cache le menu et la div taille ecran prend toute la largeur de la page web

    $('nav').hide();
    $('#taille-ecran').addClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
    // Quand on click sur l'hamburger ( le bouton menu) , le menu apparait et la div taille ecran se reduit
  $('.menu-icon').click(function(){
    $('nav').fadeToggle('1000');
    $('#taille-ecran').toggleClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");

    });
    //On peut aussi fermer le menu à gauche  en cliquant sur le lien MENU
    $('.menu-word').click(function(){
      $('nav').fadeOut('1000');
      $('#taille-ecran').toggleClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");

      });
      $('.cross').click(function(){
        $('nav').fadeOut('1000');
        $('#taille-ecran').toggleClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");

        });
    // On cache les balise p contenant les descriptions des projets
    $('.projettext').fadeOut();
      // Quand on clique sur le nom d'un projet
    $('li').click(function(){
      // apparation/disparition de la balise enfant qui suit juste apres
      $(this).find('.projettext').fadeToggle('1000');
      // On va chercher la class projectname et intervertir son icone de + et de -
      $(this).find('.projectname').toggleClass('glyphicon-minus');
      //$('projectname').attr('class', 'projectname glyphicon-minus');
      $('#section4').css('height', '1200px');


    });

});
