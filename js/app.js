
$('.se-pre-con').hide();
setTimeout(function(){ 
  $('.se-pre-con').fadeOut(1000);
}, 4500);



// $('.pop-overlay').hide();
idleTime = 0;
$(document).ready(function(){
  $limit = 5;
  
  // if ($.cookie('test_status') != '1') {
  //   $.get('form.html', function(data) {
  //     $('.subs-popup').html(data);
  //   });
    function timerIncrement() {
      idleTime = idleTime + 1;
      if (idleTime > $limit) { 
        // $('#popup').modal();
        // $('.subs-popup ').show();
        // alert("hello");
        idleTime = 0;
      }
    }
    
    var idleInterval = setInterval(timerIncrement, 1000); // 1 second

    $(this).mousemove(function (e) {
      idleTime = 0;
    });
    $(this).keypress(function (e) {
      idleTime = 0;
    });
    
    // $.cookie('test_status', '1', { expires: 30 });
  // }
});

$('.close').click( function() {
  $('.pop-overlay').fadeOut();
});
$('#submit').click( function() {
  $('.pop-overlay').fadeOut();
});
$('.memberOnly').click( function() {
  $('.pop-overlay').fadeOut();
});





// ====== Staggered Reveal Page =========

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


// ====== Staggered Reveal Menu =======
var menuItems = $(".menuLogo, .site-links li, .store-downloads, .navigation-footer .copyright-container");
var hb = $("#hamburger");
var nav = $(".navigation");

$(".hamburger").click( function () {
  if (hb.hasClass("is-inactive")){
    hb.removeClass("is-inactive").addClass("is-active");
    nav.addClass("open");

    $('.main-nav-container').animate({ 'top': "+=100%"}, 700);
    TweenMax.staggerFrom(menuItems, 1, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut}, 0.1);
    TweenMax.staggerFrom(".social-buttons .button", 2, {scale:0.25, opacity:0, delay:1.0, ease:Elastic.easeOut}, 0.1);

    $('.navigation-overlay').animate({ height: "+=100vh"}, 400);
  }
  else {    
    hb.removeClass("is-active").addClass("is-inactive");
    nav.removeClass("open");
    $('.main-nav-container').animate({ 'top': "-=100%"}, 300);
    $('.overlay').animate({ height: "-=100vh"}, 400);
  }
});


// ======= Fruit Buttons ========

$('.showcase #mini').click(function() {
  var desc = $(this).children("img").attr("val");
  // console.log(pew);

  $('#section-2 .description').text(desc);
});




