  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('js-menu-active');
      $('.l-header-area .nav').slideToggle(200);
    });
  }
