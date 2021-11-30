$(document).ready(function () {
/*   "use strict"; */

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

    $("form input[type!=image][type!=button][type!=submit][type!=reset],form select").keypress(function (e) {
      if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
        return false;
      } else {
        return true;
      }
    });

  // $(".fullscreen").css("height", window_height)
  // $(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  /* $(".default-header").sticky({
    topSpacing: 0
  }); */


/*   if (document.getElementById("default-select")) {
    $('select').niceSelect();
  };  */

/*   $(function() {
    var height=$("#js-default-header").height();
    $("body").css("margin-top", height +0);//10pxだけ余裕をもたせる
});
   */

  /*----------------------------------------------------*/
  /*  Magnific Pop up js (Home Video)
  /*----------------------------------------------------*/
/*   $('#play-home-video').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.img-pop-up').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  }); */

  // $('.navbar-nav>li>a').on('click', function(){
  //     $('.navbar-collapse').collapse('hide');
  // });
/*   $('.active-testimonial').owlCarousel({
    items: 3,
    margin: 30,
    // autoplay: true,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1,
      },
      991: {
        items: 2,
      },
      1200: {
        items: 3,
      }

    }
  });

  $('.active-brand-carusel').owlCarousel({
    items: 5,
    loop: true,
    margin: 30,
    autoplayHoverPause: true,
    smartSpeed:650,         
    autoplay:true, 
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2,
        },
        768: {
            items: 4,
        },
        768: {
            items: 5,
        }
    }
}); */

  //------- Filter  js --------//
/*   $(window).on("load", function () {
    $(".filters ul li").on("click", function () {
      $(".filters ul li").removeClass("active");
      $(this).addClass("active");

      var data = $(this).attr("data-filter");
      $grid.isotope({
        filter: data
      });
    });

    if (document.getElementById("project")) {
      var $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-sizer"
        }
      });
    }
  });
 */


  AOS.init({
    offset: 300,
    delay: 100,
    duration: 500,
    easing: 'ease',
    once: true,
    disable: 'mobile'
  });
  

  // Select all links with hashes
  $('.navbar-nav a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click', function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 50
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

});

