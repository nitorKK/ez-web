jQuery(document).ready(function ($) {
  $('a[data-rel^=lightcase]').lightcase({
    transition: 'fade',
    showSequenceInfo: false,
    showCaption: false
  });
});