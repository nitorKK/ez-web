/*
 * megamenuPt01.js
 * 下記のjsが必要です。
 * jquery-1.10.2.min.js
 *
 *  version --- 1.0
 *  updated --- 2013.05.15
 *
 */

var flg01 = false;// メガメニュー表示中：true、メガメニュー非表示：false
var idName01;
var idContentsName01; 
var idContentsBGName01; 

// JavaScript Document
jQuery(document).ready(function($){
	
    /* megamenuPt01 */
    /* .megamenuPt01 #megaGlobalNavi 内のaタグをクリックした時のfunction */
    $('.megamenuPt01 #megaGlobalNavi a.megaMenu').on('click', function(){
    	
    	/* クリックしたaタグのidを取得 */
    	idName01 = $(this).attr("id"); 
    	
        /* 他のメニューが開いている場合は閉じる処理を行うため、
        	各a.megaMenuをループでチェックして処理を行う */
		$('a.megaMenu').each(function(i){
			if($(this).hasClass('active')) {/* classに「active」がある場合 */
		    	/* aタグのidを取得し、対応するメニューコンテンツを閉じる */
		    	var idName02 = $(this).attr("id"); 
		    	var idContentsName02 = "#" + idName02 + "Contents"; 
		    	var idContentsBGName02 = "#" + idName02 + "ContentsBg"; 
		    	
		    	// クリックしたaタグかどうかによって、閉じる処理を行う
				if(idName01 != idName02){// クリックしたaタグでない場合
			        $(idContentsName02).hide();
			    	$(this).toggleClass("active");
				}else{// クリックしたaタグの場合
			        $(idContentsName02).slideUp();
			        flg01 = false;
				}
			}
		});
    	
    	
    	/* クリックしたaタグのに対応するメニューコンテンツを開く */
    	idContentsName01 = "#" + idName01 + "Contents"; 
    	idContentsBGName01 = "#" + idName01 + "ContentsBg"; 

		if($(this).hasClass('active')) {/* 閉じる場合 */
			// 前のループで閉じる処理を行っているため、処理なし
		}else{/* 開く場合 */
			if(flg01){// メガメニュー表示中の場合
        		$(idContentsName01).show();
			}else{// メガメニュー非表示の場合
	        	$(idContentsName01).slideDown();
	        	flg01 = true;
	        }
		}
        $(this).toggleClass("active");
    });

    /* メニュー以外（.megamenuPt01）をクリックした時のfunction */
    /* メガメニューを非表示にする */
    $(".megamenuPt01").on("click", function(event){
    	var idName03 = event.target.id;
    	if (idName03.indexOf("g_") == -1) {/* メニュー以外をクリックした場合 */
	        $(idContentsName01).slideUp();
	        flg01 = false;
			$('a.megaMenu.active').toggleClass("active");
		}
    	
    });


});