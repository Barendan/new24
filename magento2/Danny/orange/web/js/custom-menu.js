
require([
    "jquery",
    "TweenMax",
  ], function($, TweenMax){
  
    $(document).ready(function() {
      console.log("Menu: Initialized.");

      // document.getElementById("navigation-overlay").style.display = "none";
      // $('.navigation-overlay').css
      
      // ====== STAGGERED REVEAL MENU =======
      var mItems = $(".menuLogo, .site-links li, .store-downloads, .navigation-footer .copyright-container");
      var hb = $("#hamburger");
      var nav = $(".navigation1");

      $(".hamburger").click( function () {
        if (hb.hasClass("is-inactive")){
          hb.removeClass("is-inactive").addClass("is-active");
          nav.addClass("open");

          $('.main-nav-container').animate({ 'top': "+=100%"}, 700);
          TweenMax.staggerFrom(mItems, 1, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut}, 0.1);
          TweenMax.staggerFrom(".social-buttons .button", 2, {scale:0.25, opacity:0, delay:1.0, ease:Elastic.easeOut}, 0.1);
          $('.navigation-overlay').animate({ height: "+=100vh"}, 400);
        }
        else {    
          hb.removeClass("is-active").addClass("is-inactive");
          nav.removeClass("open");
          $('.main-nav-container').animate({ 'top': "-=100%"}, 300);
          $('.navigation-overlay').animate({ height: "-=100vh"}, 400);
        }
      });

    });

});
