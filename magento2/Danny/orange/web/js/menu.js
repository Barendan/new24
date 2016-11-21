define([
    'jquery',
    'TweenMax'
], function ($, TweenMax) {
    'use strict';

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