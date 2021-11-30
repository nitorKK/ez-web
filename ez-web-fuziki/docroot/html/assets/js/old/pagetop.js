$(function(){
    var top = $('#js-pagetop-default,#js-pagetop');
    top.hide();
    $(window).scroll(function(){
      if( $(window).scrollTop() > 200 ){
        top.fadeIn();
      }else{
        top.fadeOut();
      }
    });
  
    top.click(function(){
      $('body,html').animate({
        scrollTop: 0}, 1000);
        return false;
    });
  });