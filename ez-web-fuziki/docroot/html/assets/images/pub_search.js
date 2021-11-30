$(function(){

	// クリックしたドロップダウン以外を勝手に閉じないようにする場合
	var sidebar_dropdown_clicktgt = false;
	$('.sidebar .navbar .dropdown-toggle').on('click', function (e) {
		sidebar_dropdown_clicktgt = $(this).attr("id");
	});
	$('.sidebar .navbar > .dropdown').on({
		"shown.bs.dropdown": function() {
			sidebar_dropdown_clicktgt = false;
		},
		"hide.bs.dropdown":  function() {
			return sidebar_dropdown_clicktgt == $(this).find(".dropdown-toggle").attr("id");
		}
	});

	// ドロップダウンの外をクリックしても閉じないようにする
	$('.sidebar .dropdown').on('hide.bs.dropdown', function (e) {
		if (e.clickEvent) {
			e.preventDefault();
		}
	});

	$('.sidebar').click(function(e){
		// サイドバー細くする or 戻す
		if ( typeof $(e.target).hasClass == "function" && ($(e.target).hasClass("dropdown-toggle") || $(e.target).is("dropdown, label, a, input")) ){
			// これがないとメニューフォルダを開くつもりがサイドバーが縮む、かといって.dropdown-toggleまでstopPropagationするとフォルダ開かなくなる
			// return falseしてもいけないらしい
		}
		else {
			sidebar_accordion( $(this).hasClass('sidebar_shrink'), false );
		}
	});
/*
	$('.sidebar').on('mouseenter',function(){
		// サイドバー細ければ（一時的に）戻す
		if ( $(this).hasClass('sidebar_shrink') ){
			sidebar_accordion( true, true );
		}
	});
	$('.sidebar').on('mouseleave',function(){
		// mouseenterのサイドバーまた細くする
		if ( $(this).hasClass('sidebar_shrink_hover') ){
			sidebar_accordion( false, true );
		}
	});
*/

	// 工種選択肢に応じて下位選択肢がON/OFF
	$('.wktypesel select').on('change',function(){

		// 選択値
		var wktypesel_val = $(this).val();
		// 選んだ工種のレベル
		var wktypesel_lvl = parseInt($(this).closest(".wktypesel").attr("data-level"));

		$('.wktypesel').each(function(){
			var thislevel = parseInt($(this).attr("data-level"));

			// 未選択にしたならそれより下位全て隠す
			if ( wktypesel_val == "" && thislevel > wktypesel_lvl ){
				$(this).addClass("d-none");
			}
			// 有効値何か選択したならその直下のみ出す
			else if ( wktypesel_val != "" && thislevel == wktypesel_lvl + 1 ){
				$(this).removeClass("d-none");
			}
		});
	});

	// .listcols下のチェックボックスで.defaultだけ選ばれた状態にする
	$('.resetlistcols').click(function(){
		$(".listcols input[type=checkbox]:not(.default)").prop( "checked", false );
		$(".listcols input[type=checkbox].default").prop( "checked", true );
	});

	// 維持管理NETIS詳細画面の小ウインドウを開く
	// ★実際はurlも違うはずですし、idも特殊文字エンコード（orそれで事足りるなら数値変換）すべきと思われます
	$('.opennetisdtl_m').click(function(e){
		var url = 'pub_dtl_exnetis_m.html?id=' + $(e.target).attr("id");
		window.open( url, "", "width=600, height=600, top=100, left=100, scrollbars=yes, resizable=yes" );
	});
	// 震災復旧NETIS詳細画面の小ウインドウを開く
	// ★実際はurlも違うはずですし、idも特殊文字エンコード（orそれで事足りるなら数値変換）すべきと思われます
	$('.opennetisdtl_e').click(function(e){
		var url = 'pub_dtl_exnetis_e.html?id=' + $(e.target).attr("id");
		window.open( url, "", "width=600, height=600, top=100, left=100, scrollbars=yes, resizable=yes" );
	});

	// 詳細検索条件アコーディオン
	$('.openex').click(function(e){
		$('.searchsimple').css("display","none");
		$('.searchex').slideToggle("fast");
	});


	// 横スクロール（左端へ）
	// .table-responsiveは同画面内に1個しかない前提
	$('.scrollleftmost').click(function(e){
		$('.table-responsive').scrollLeft(0);
		return false;
	});
	// 横スクロール（右端へ）
	// .table-responsiveは同画面内に1個しかない前提
	$('.scrollrightmost').click(function(e){
		$('.table-responsive').scrollLeft( $('.table-responsive').get(0).scrollWidth - $('.table-responsive').get(0).clientWidth );
		return false;
	});
	// 横スクロール（1段階ずつ左へ、長押しで進み続ける。ただしclickイベント無効化する代わりに最低1回は即時実行する）
	// .table-responsiveは同画面内に1個しかない前提
	var scrollleft_timer;
	$('.scrollleft').mouseup(function(e){
		clearInterval(scrollleft_timer);
		return false;
	});
	$('.scrollleft').mousedown(function(e){
		$('.table-responsive').scrollLeft( $('.table-responsive').scrollLeft() - 200 );
	    scrollleft_timer = setInterval(function(){
			$('.table-responsive').scrollLeft( $('.table-responsive').scrollLeft() - 200 );
	    },250);
	    return false;
	});
	$('.scrollleft').click(function(e){
		return false; // リンク無効化（mouseupと競合もするのでclickは全て無効化しmouseup/downに統合）
	});
	// 横スクロール（1段階ずつ右へ、長押しで進み続ける。ただしclickイベント無効化する代わりに最低1回は即時実行する）
	// .table-responsiveは同画面内に1個しかない前提
	var scrollright_timer;
	$('.scrollright').mouseup(function(e){
		clearInterval(scrollright_timer);
		return false;
	});
	$('.scrollright').mousedown(function(e){
		$('.table-responsive').scrollLeft( $('.table-responsive').scrollLeft() + 200 );
	    scrollright_timer = setInterval(function(){
			$('.table-responsive').scrollLeft( $('.table-responsive').scrollLeft() + 200 );
	    },250);
	    return false;
	});
	$('.scrollright').click(function(e){
		return false; // リンク無効化（mouseupと競合もするのでclickは全て無効化しmouseup/downに統合）
	});


});

var sidebar_orgwidth = "";
var sidebar_animatelock = false;
function sidebar_accordion( mode, hover ){
	// サイドバー細くする（mode=false） or 戻す（mode=true）、hoverで戻した場合はマウスアウトしたらまた縮める

	// ただし左サイドバーが見えている（右上ハンバーガーメニューボタンが出ていない）場合かつアニメ中でないのみ
	if ( $('.navbar-toggler').css("display") != "none" || sidebar_animatelock ){
		return;
	}

	// 一時的な拡大モード（マウスオン）の場合それを記録し、マウスアウトでまた細くする
	// マウスアウトせずにクリックしたらアニメせずに即戻す（元々広がっているのを固定化する形）
	if ( hover && mode ){
		$('.sidebar').addClass("sidebar_shrink_hover");
	}
	else if ( !hover && $('.sidebar').hasClass("sidebar_shrink_hover") ){
		$('.sidebar .navbar').css("display","");
		$('.sidebar').removeClass("sidebar_shrink");
		$('.sidebar').removeClass("sidebar_shrink_hover");
		$('.sidebar').css("max-width", "initial");
		return;
	}
	else {
		$('.sidebar').removeClass("sidebar_shrink_hover");
	}

	// アニメ中に拡大縮小を受け付けないようロック
	sidebar_animatelock = true;

	// 案内書き・サイドバー内容の表示切替
	$(".sidebar .foldtext").toggleClass("d-none");
	$(".sidebar .expandtext").toggleClass("d-none");
	$(".sidebar h3").toggleClass("d-none");
	$(".sidebar > p.text-danger").toggleClass("d-none");
	$(".sidebar .navbar").toggleClass("d-none");

	// 細くする
	if ( !mode ){
		sidebar_orgwidth = $('.sidebar').outerWidth();      // animateで戻すなら（一時的に）目標値として幅絶対値が必要
		$('.sidebar').css("max-width", sidebar_orgwidth);   // これをしておかないとアニメ開始と同時に幅がゼロになり、それから目標幅まで伸びる動きになってしまう
		$('.sidebar').addClass("sidebar_shrink");           // 縮小モードを記憶する必要がある
		$('.sidebar .navbar').css("display","none");        // 中のメニューを消す

		$('.sidebar').animate({ "maxWidth" : "4rem" }, "fast", function(){   // width(flex)にbootstrapのクラスが効いているのでmaxWidthで

			$('.sidebar').removeClass("col-md-3").addClass("col-md-1");      // 列幅比を変える（アニメーションと相性が悪いので本来グリッドにしたくないですが・・・）
			$('.rightpane').removeClass("col-md-9").addClass("col-md-11");

			sidebar_animatelock = false;
		});
	}
	// 戻す
	else{
		$('.sidebar').animate({ "maxWidth" : sidebar_orgwidth }, "fast", function(){

			$('.sidebar').removeClass("col-md-1").addClass("col-md-3");
			$('.rightpane').removeClass("col-md-11").addClass("col-md-9");

			$('.sidebar .navbar').css("display","");
			$('.sidebar').removeClass("sidebar_shrink");
			$('.sidebar').css("max-width", "initial");

			sidebar_animatelock = false;
		});
	}
}

