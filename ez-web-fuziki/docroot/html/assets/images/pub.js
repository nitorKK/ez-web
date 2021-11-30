$(function(){

	$(".disabled").click(function(){
		// リンク無効化（現在ページのメニューなど）
		return false;
	});


	// ボックスのアコーディオン開閉
	$(".animecollapse-toggler").on("click", function(){
		$(this).find(".foldtext").toggleClass("d-none");
		$(this).find(".expandtext").toggleClass("d-none");

		// 閉じた場合、ボックスがなくなった分だけ画面スクロール位置を上げる
		if ( $( $(this).attr("data-target") ).css("display") != "none" ){
			var curscr = $("html, body").scrollTop();
			var dimscr = $( $(this).attr("data-target") ).outerHeight(true);
			$("html, body").animate({ scrollTop: curscr - dimscr },"fast");
		}
	});

});

function curpage(menuid){
	// 現在メニューONにする
	$("#" + menuid).addClass("active");
/* 2階層で上に戻ることもあるので無効にしないほうがよい？
	$("#" + menuid + " .nav-link").addClass("disabled");
*/
	$("#" + menuid).closest(".dropdown").find(".dropdown-toggle").dropdown("toggle");
}

function back() {
    history.back();
}


