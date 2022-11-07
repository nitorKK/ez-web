$(document).ready(function() {
    if(location.pathname != "/") {
        $('.nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
        $('.active span').css('border-bottom', ' 1px solid #fff');
    } else $('.nav a:eq(0)').addClass('active');
})