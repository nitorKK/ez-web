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
