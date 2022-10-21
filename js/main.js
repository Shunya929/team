jQuery(function($){
  $(".js-hedder__button").on("click",function() {    
  $(this).toggleClass("is-active");
  $(".js-hedder__line").toggleClass("is-active");
  $(".js-hedder__nav-menu").toggleClass("is-active");
  $(".js-hedder__background--black").toggleClass("is-active");
  });
});