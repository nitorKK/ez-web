$(document).ready(function() {
    if(location.pathname != "/") {
        $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('js-nav--active');
    } else $('nav a:eq(0)').addClass('js-nav--active');
});