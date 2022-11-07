$(function() {
  $(".nav-button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".nav-wrap")
        .addClass("close")
        .removeClass("open");
      $("body").removeClass("fixed");
    } else {
      $(this).addClass("active");
      $(".nav-wrap")
        .addClass("open")
        .removeClass("close");
        $("body").addClass("fixed");
      }
  });
});

????????????????

$(function() {
  $('.nav-button').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.nav-wrap').addClass('active');
          $('body').css('position: fixed;');
      } else {
          $('.nav-wrap').removeClass('active');
          $('body').css('position: static;');
      }
  });
});

???????????

/* $(function() {
  $('.nav-button').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.nav-wrap').addClass('active');
          $('body').addClass('fix');
      } else {
          $('.nav-wrap').removeClass('active');
          $('body').removeClass('sta');
      }
  });
}); */


/* 
//スマホ版の高さ維持用
@include mq() {
  .wrapper {
    padding-top: 17.07vw;
  }
}
*/


.nav-wrap.open {
  display: block;
}

.nav-wrap.close {
  display: none;
}

@include mq("pc") {
  .nav-wrap {
    display: block !important;
  }
}
