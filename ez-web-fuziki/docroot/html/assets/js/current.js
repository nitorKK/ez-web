$(document).ready(function() {
    if(location.pathname != "/") {
        $('.navbar-nav .cur a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    } else $('.navbar-nav .cur a:eq(0)').addClass('active');
});