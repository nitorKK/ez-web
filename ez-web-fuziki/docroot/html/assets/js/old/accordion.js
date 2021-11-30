/* 
$('.panel-title').on('click', function() {
	$('.panel').slideUp(500);
    
	var findElm = $(this).next(".panel");
    
	if($(this).hasClass('close')){
		$(this).removeClass('close');   
	}else{
		$('.close').removeClass('close');
		$(this).addClass('close');
		$(findElm).slideDown(500);
	}
}); */

$(function(){
	$('.p-search-title').on('click',function(){
	  $(this).toggleClass('js-search--open');
	  $(this).next('.p-panel').slideToggle();
	});
  });


$(function(){
	$('.c-search--panel').on('click',function(){
	  $(this).toggleClass('js-field--open');
	  $(this).next('.p-panel').slideToggle();
	});
  });


  $(function(){
	$('.p-field-title').on('click',function(){
	  $(this).toggleClass('js-field--open');
	  $(this).next('.p-panel').slideToggle();
	});
  });

  $(function(){
	$('.p-search-area').on('click',function(){
	  $('.p-table-accordion').toggleClass('js-keywordSearch--open');
	  $('.has-keyword_contents').slideToggle();
	});
  });

  $(function(){
	$('.js-primary--panel').on('click',function(){
	  $('.js-primary--panel').toggleClass('js-table--open');
	  $('.table-panel-contents').slideToggle();
	});
  });

  $(function(){
	$('.js-secondary--panel').on('click',function(){
	  $('.js-secondary--panel').toggleClass('js-table--open');
	  $('.table-panel-content-secondary').slideToggle();
	});
  });

/*   $(function(){
	$('.js-registration--panel5').on('click',function(){
	  $('.js-registration--pane5').toggleClass('js-table--open');
	  $('.registration-contents5').slideToggle();
	});
  });

  $(function(){
	$('.js-registration--panel6').on('click',function(){
	  $('.js-registration--pane6').toggleClass('js-table--open');
	  $('.registration-contents6').slideToggle();
	});
  }); */





  //キーワード検索詳細アコーディオン
  $('.title').on('click', function() {
	var findElm = $(this).next(".box");
	$(findElm).slideToggle();
	  
	if($(this).hasClass('close')){
	  $(this).removeClass('close');
	}else{//それ以外は
	  $(this).addClass('close');
	}
  });