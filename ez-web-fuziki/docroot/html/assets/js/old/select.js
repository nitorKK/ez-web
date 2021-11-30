//オプションに色指定
jQuery(function($){
  const Target = $('.is-empty');
  $(Target).on('change', function(){
    if ($(Target).val() !== ""){
      $(this).removeClass('is-empty');
    } else {
      $(this).addClass('is-empty');
    }
  });
});
