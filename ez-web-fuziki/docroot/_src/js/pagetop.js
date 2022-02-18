// JavaScript Document


$(function(){
 
    // 「ページトップへ」の要素を隠す
    $('#pagetop').hide();
    $('#pagetop').css({'position':'fixed','bottom':'20px','right':'10px'});
 
 
    // スクロールした場合
    $(window).scroll(function(){
        // スクロール位置が100を超えた場合
        if ($(this).scrollTop() > 50) {
            // 「ページトップへ」をフェードイン
            $('#pagetop').fadeIn();
        }
        // スクロール位置が100以下の場合
        else {
            // 「ページトップへ」をフェードアウト
            $('#pagetop').fadeOut();
        }
    });
 
    // 「ページトップへ」をクリックした場合
    $('#pagetop').click(function(){
        // ページトップにスクロール
        $('html,body').animate({
            scrollTop: 0
        }, 300);
		
		
        return false;
    });
 
});



$(function() {
    function toggleNav() {
      var body = document.body;
      var hamburger = document.getElementById("js-hamburger");
      var blackBg = document.getElementById("js-menu-bg");
      // クリックしたときにクラス付与
      hamburger.addEventListener("click", function() {
        body.classList.toggle("nav-open");
        hamburger.classList.toggle("active");
      });
      // クリックしたときにクラス付与
      blackBg.addEventListener("click", function() {
        body.classList.remove("nav-open");
        hamburger.classList.remove("active");
      });
    }
    toggleNav();
  });