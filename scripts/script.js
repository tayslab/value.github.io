$(document).ready(function () {
  //Main Menu
  $(".menu-btn").click(function () {
    $(this).toggleClass("is-active");
    $(".main-nav .nav-box .navigation-list").slideToggle();
    $("body").toggleClass("noScroll");
    $(".main-content").toggleClass("open");
  });

  //Search Form
  $(".main-nav .search-button").click(function () {
    $(".nav-search-form").fadeIn();
    $(".search-box").focus();
  });

  $(".main-nav .close-btn").click(function () {
    $(".search-box").focusout();
    $(".nav-search-form").slideUp();
  });

});
