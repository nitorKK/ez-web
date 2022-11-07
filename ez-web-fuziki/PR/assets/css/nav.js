$(function() {
  $('.nav-button').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.nav-wrap').addClass('active');
      } else {
          $('.nav-wrap').removeClass('active');
      }
  });
});