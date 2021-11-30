$(function(){

	// 操作ボックスのアコーディオン開閉
    var autoHeight = "";
	$(".navfold").on("click", function(){
		$(this).find(".foldtext").toggleClass("d-none");
		$(this).find(".expandtext").toggleClass("d-none");

        var tgt = $(this).parent().find(".tofold");
		// 閉→開
		if ( tgt.hasClass("folded") ){
			tgt.animate({ height: autoHeight }, 500, function(){
				tgt.toggleClass("folded");
                tgt.css({ height: "auto" }); // アニメが終わればheightはむしろ邪魔
			});
		}
		// 開→閉（paddingの分は残るはず）
		else {
            autoHeight = tgt.outerHeight() + "px";
			tgt.animate({ height: "0" }, 500, function(){
                tgt.toggleClass("folded");
			});
		}
    });

    // ウィンドウ幅が大きくなったときのナビゲーションバーの高さ制御
    $(window).on('resize', function () {
        var foldtext = $('.sticky').find('.foldtext');
        var expandtext = $('.sticky').find('.expandtext');
        if (foldtext && expandtext && window.innerWidth >= 768 && foldtext.hasClass("d-none")) {
            foldtext.removeClass("d-none");
            expandtext.addClass("d-none");
            $("div .tofold").removeClass("folded").css("height", "auto");
        }
     });
});

