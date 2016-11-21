define([
    'jquery',
    'scrollreveal'
], function ($, scrollreveal) {
    'use strict';


window.sr = ScrollReveal({ reset: false });
sr.reveal('.head',{distance:"500px"});
sr.reveal('p',{ duration: "1000", distance:"500px"});
sr.reveal('.fruit',{ duration: 1000, distance:"500px", delay: 150});
// sr.reveal('.thePour',{ origin: "left", duration: 2000, distance: "500px"});
sr.reveal('.thePour',{ origin: "left", duration: 1000, distance: "500px", beforeReveal: function (domEl) {
    $('.thePour').animate({ width: "+=1000px"}, 2500);
    // TweenMax.staggerFrom('.showcase #mini', 2, {scale:0.25, opacity:0, delay:1.0, ease:Elastic.easeOut}, 0.1);

    sr.reveal('.showcase #mini', { origin: "top", scale: 0.2, delay: "500", duration: "1500", distance:"200px",});
    // $('.showcase').children("#mini").removeAttr('style');
    // var target = document.querySelectorAll('.mini');
    // Array.prototype.forEach.call(target, function(element){
    // element.removeAttribute('style');
    // });
    // $('#mini').each( function() {
    //   $(this).addClass('scaley')
    // });
  }
});

sr.reveal('.claim1', {delay: 100, distance:"500px"});
sr.reveal('.claim2', {delay: 300, distance:"500px"});



// ======= Fruit Buttons ========

$('.showcase #mini').click(function() {
  var desc = $(this).children("img").attr("val");
  // console.log(pew);

  $('#section-2 .description').text(desc);
});
