$(function(){
  $('.nav-toggle').click(function(){
    $('.global-Menu').toggleClass('active');
    $(this).toggleClass('active');
  });
});



// スクロールアクション



$(window).scroll(function (){
  $('.service-second-0').each(function(){
    var elemPos = $(this).offset().top,
    scroll = $(window).scrollTop(),
    windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 1170){
      $(this).addClass("scroll-in");
    } else {
      $(this).removeClass("scroll-in");
    }
    if (scroll > elemPos - windowHeight + 1170){
      if (scroll > elemPos - windowHeight + 2200){
        $(this).removeClass("scroll-in1");
      } else {
        $(this).addClass("scroll-in1");
      }
    } else {
      $(this).removeClass("scroll-in1");
    }
    if (scroll > elemPos - windowHeight + 2200){
      if (scroll > elemPos - windowHeight + 3090){
        $(this).removeClass("scroll-in2");
      } else {
        $(this).addClass("scroll-in2");
      }
    } else {
      $(this).removeClass("scroll-in2");
    }
    if (scroll > elemPos - windowHeight + 3090){
      if (scroll > elemPos - windowHeight + 3900){
        $(this).removeClass("scroll-in3");
      } else {
        $(this).addClass("scroll-in3");
      }
    } else {
      $(this).removeClass("scroll-in3");
    }
    if (scroll > elemPos - windowHeight + 3900){
      $(this).addClass("scroll-in4");
    } else {
      $(this).removeClass("scroll-in4");
    }
  });
});




//
// $('#service-second-1').addClass('scroll-down');
// $('#service-second-2').addClass('scroll-down');
// $('#service-second-3').addClass('scroll-down');
// $('#service-second-4').addClass('scroll-down');

//
// $('#service-second-1').removeClass('scroll-down');
// $('#service-second-2').removeClass('scroll-down');
// $('#service-second-3').removeClass('scroll-down');
// $('#service-second-4').removeClass('scroll-down');
