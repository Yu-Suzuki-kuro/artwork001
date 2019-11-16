$(function() {
    $('#hamburger-menu-icon').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.hamburger-menu').addClass('active');
            $('#bg-menu').addClass('active');
            $('.header-logo').addClass('active');
            $('.sns-icon').addClass('active');
            $('.scrollbutton').addClass('active');
            $('.scroll-nav').addClass('active');
        } else {
            $('.hamburger-menu').removeClass('active');
            $('#bg-menu').removeClass('active');
            $('.header-logo').removeClass('active');
            $('.sns-icon').removeClass('active');
            $('.scrollbutton').removeClass('active');
            $('.scroll-nav').removeClass('active');
        }
    });
});

$(function(){
$(window).scroll(function (){
    $('#top').each(function(){
      var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $('.scroll-content1').removeClass("scrollin");
        $('.scroll-menu1').removeClass("scrollin");
        $('.scroll-position-nav').removeClass("about");
      }

      if (scroll > elemPos + windowHeight - 400){
        $('.scroll-content1').addClass("scrollin");
        $('.scroll-menu1').addClass("scrollin");
        $('.scroll-content2').addClass('scrollin');
        $('.scroll-menu2').addClass('scrollin');
        $('.scroll-position-nav').addClass('about');
        $('.scroll-position-nav').removeClass('service');
      }　else {
        $('.scroll-content2').removeClass("scrollin");
        $('.scroll-menu2').removeClass("scrollin");
      }

      if (scroll > elemPos + windowHeight + windowHeight - 400){
        $('.scroll-content2').removeClass("scrollin");
        $('.scroll-menu2').removeClass("scrollin");
        $('.scroll-content3').addClass('scrollin');
        $('.scroll-menu3').addClass('scrollin');
        $('.scroll-position-nav').removeClass("about");
        $('.scroll-position-nav').removeClass("work");
        $('.scroll-position-nav').addClass('service');
      }　else {
        $('.scroll-content3').removeClass("scrollin");
        $('.scroll-menu3').removeClass("scrollin");
      }

      if (scroll > elemPos + windowHeight + windowHeight + windowHeight - 400){
        $('.scroll-content3').removeClass("scrollin");
        $('.scroll-menu3').removeClass("scrollin");
        $('.scroll-content4').addClass('scrollin');
        $('.scroll-menu4').addClass('scrollin');
        $('.scroll-position-nav').removeClass('service');
        $('.scroll-position-nav').addClass("work");
      }　else {
        $('.scroll-content4').removeClass("scrollin");
        $('.scroll-menu4').removeClass("scrollin");
      }

      if (scroll > elemPos + windowHeight + windowHeight + windowHeight + windowHeight - 400){
        $('.scroll-content4').removeClass("scrollin");
        $('.scroll-menu4').removeClass("scrollin");
        $('.scroll-content5').addClass('scrollin');
        $('.scroll-menu5').addClass('scrollin');
        $('.scroll-position-nav').removeClass("work");
        $('.scroll-position-nav').addClass("contact");
        $('.scroll-position-nav::before').addClass("contact");
      }　else {
        $('.scroll-content5').removeClass("scrollin");
        $('.scroll-menu5').removeClass("scrollin");
        $('.scroll-position-nav').removeClass("contact");
        $('.scroll-position-nav::before').removeClass("contact");
      }
    });
  });
});

jQuery(function($){
	$('a[href^="#"]').click(function() {
 		var anchor = $(this).attr("href");
 		var position = $(anchor).offset().top-20;
 		$('body,html').animate({ scrollTop : position }, 1000, 'swing');
 		return false;
	});
});

$(function(){
    $(window).scroll(function (){
          var documentHeight = $(document).innerHeight();
          var windowHeight = $(window).innerHeight();
          var bottom = documentHeight - windowHeight;
          if (bottom - 100 <= $(window).scrollTop()){
            $('.scroll').addClass('active');
            $('.tap').addClass('active');
            $('.arrow').addClass('active');
          }　else {
            $('.scroll').removeClass('active');
            $('.tap').removeClass('active');
            $('.arrow').removeClass('active');
          }
    });
});