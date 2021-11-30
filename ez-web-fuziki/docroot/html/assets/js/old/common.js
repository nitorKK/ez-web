/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./docroot/_src/js/_modal.js":
/*!***********************************!*\
  !*** ./docroot/_src/js/_modal.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");

/**
 * モーダル
 * @type {SlideMenu}
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = /*#__PURE__*/function () {
  function Modal(modal) {
    _classCallCheck(this, Modal);

    this.trigger = modal.trigger;
    this.target = modal.target;
    this.activeClass = 'is-show';
  }
  /**
   * モーダルを開く
   */


  _createClass(Modal, [{
    key: "modalOpen",
    value: function modalOpen() {
      var $target = $(this.target); // 開閉アニメーション中は何もしない

      if ($target.is(':animated')) {
        return;
      }

      $(this.target).addClass(this.activeClass).animate({
        opacity: '1'
      }, 300);
      $(this.trigger).addClass(this.activeClass);
    }
    /**
     * モーダルを閉じる
     */

  }, {
    key: "modalClose",
    value: function modalClose() {
      var that = this,
          $target = $(this.target); // 開閉アニメーション中は何もしない

      if ($target.is(':animated')) {
        return;
      }

      $target.animate({
        opacity: '0'
      }, 300, 'swing', function () {
        $(this).removeClass(that.activeClass);
      });
      $(this.trigger).removeClass(this.activeClass);
    }
  }]);

  return Modal;
}();

/***/ }),

/***/ "./docroot/_src/js/_overlay-fixed.js":
/*!*******************************************!*\
  !*** ./docroot/_src/js/_overlay-fixed.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");

/**
 * 固定オーバーレイ
 * @type {OverlayFixed}
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = /*#__PURE__*/function () {
  function OverlayFixed(overlay) {
    _classCallCheck(this, OverlayFixed);

    this.overlay = overlay;
    this.activeClass = 'is-fixed';
  }
  /**
   * オーバーレイ表示
   */


  _createClass(OverlayFixed, [{
    key: "overlayOpen",
    value: function overlayOpen() {
      var $overlay = $(this.overlay),
          scrollPosition = $(window).scrollTop();
      $('body').addClass('is-fixed').css({
        'top': -scrollPosition
      });
      $overlay.css('display', 'block').animate({
        opacity: '0.5'
      }, 300);
    }
    /**
     * オーバーレイ非表示
     */

  }, {
    key: "overlayClose",
    value: function overlayClose() {
      var $overlay = $(this.overlay),
          scrollPosition = parseInt($('body').css("top"), 10);

      if ($overlay.is(':animated')) {
        return;
      }

      $('body').removeClass('is-fixed').css({
        'top': 0
      });
      window.scrollTo(0, scrollPosition * -1);
      $overlay.animate({
        opacity: '0'
      }, 300);
      setTimeout(function () {
        $overlay.css('display', 'none');
      }, 300);
    }
  }]);

  return OverlayFixed;
}();

/***/ }),

/***/ "./docroot/_src/js/_slide-menu.js":
/*!****************************************!*\
  !*** ./docroot/_src/js/_slide-menu.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");

/**
 * SP用 スライドメニュー
 * @type {SlideMenu}
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = /*#__PURE__*/function () {
  function SlideMenu(trigger, target) {
    _classCallCheck(this, SlideMenu);

    this.trigger = trigger;
    this.target = target;
    this.activeClass = 'is-show';
  }
  /**
   * メニューを開く
   */


  _createClass(SlideMenu, [{
    key: "menuOpen",
    value: function menuOpen() {
      var $target = $(this.target); // 開閉アニメーション中は何もしない

      if ($target.is(':animated')) {
        return;
      }

      $(this.target).addClass(this.activeClass);
      $(this.trigger).addClass(this.activeClass);
    }
    /**
     * メニューを閉じる
     */

  }, {
    key: "menuClose",
    value: function menuClose() {
      var $target = $(this.target); // 開閉アニメーション中は何もしない

      if ($target.is(':animated')) {
        return;
      }

      $target.removeClass(this.activeClass);
      $(this.trigger).removeClass(this.activeClass);
    }
  }]);

  return SlideMenu;
}();

/***/ }),

/***/ "./docroot/_src/js/lib/jquery.rtResponsiveTables.js":
/*!**********************************************************!*\
  !*** ./docroot/_src/js/lib/jquery.rtResponsiveTables.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
/* jQuery rt Responsive Tables - v1.0.6 - 2020-01-13
* https://github.com/stazna01/jQuery-rt-Responsive-Tables
*
* This plugin is built heavily upon the work by Chris Coyier
* found at http://css-tricks.com/responsive-data-tables/
*
* Copyright (c) 2020 Nathan Stazewski; Licensed MIT */
(function ($) {
  $.fn.rtResponsiveTables = function (options) {
    // This is the easiest way to have default options.
    var settings = $.extend({
      // These are the defaults.
      containerBreakPoint: 0 //allows a user to force the vertical mode at a certain pixel width of its container, in the case when a table may technically fit but you'd prefer the vertical mode

    }, options);
    rtStartingOuterWidth = $(window).width(); //used later to detect orientation change across all mobile browsers (other methods don't always work on Android)

    is_iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent); //needed due to the fact that iOS scrolling causes false resizes

    rt_responsive_table_object = this;

    function isEmpty(el) {
      return !$.trim(el.html());
    }

    function rt_write_css(rt_class_identifier) {
      rt_css_code = '<style type="text/css">';
      $(rt_class_identifier).find('th').each(function (index, element) {
        rt_css_code += rt_class_identifier + '.rt-vertical-table td:nth-of-type(' + (index + 1) + '):before { content: "' + $(this).text().trim() + '"; }';
      });
      rt_css_code += '</style>';
      $(rt_css_code).appendTo('head');
    }

    function determine_table_width(rt_table_object) {
      //outerWidth doesn't work properly in Safari if the table is overflowing its container
      rt_table_width = 0;

      if (rt_table_object.hasClass('rt-vertical-table')) {
        rt_table_width = rt_table_object.outerWidth();
      } else {
        rt_table_object.find('th').each(function (index, element) {
          rt_table_width += $(this).outerWidth();
        });
        rt_table_width = rt_table_width; //this seems to fix a rounding bug in firefox
      }

      return rt_table_width;
    }

    window.fix_responsive_tables = function () {
      if ($("table.rt-responsive-table").length) {
        $("table.rt-responsive-table").each(function (index) {
          rt_containers_width = $(this).parent().width();
          rt_current_width = determine_table_width($(this)) - 1; //this "-1" seems to fix an issue in firefox without harming any other browsers

          rt_max_width = $(this).attr('data-rt-max-width');
          rt_has_class_rt_vertical_table = $(this).hasClass('rt-vertical-table');

          if ($(this).attr("data-rtContainerBreakPoint")) {
            rt_user_defined_container_breakpoint = $(this).attr("data-rtContainerBreakPoint");
          } else {
            rt_user_defined_container_breakpoint = settings.containerBreakPoint;
          }

          if (rt_containers_width < rt_current_width || rt_containers_width <= rt_user_defined_container_breakpoint) {
            //the parent element is less than the current width of the table or the parent element is less than or equal to a user supplied breakpoint
            $(this).addClass('rt-vertical-table'); //switch to vertical orientation (or at least keep it that orientation)

            if (rt_max_width > rt_current_width && rt_max_width > rt_user_defined_container_breakpoint) {
              //the max width was set too high and needs to be adjusted to this lower number
              $(this).attr('data-rt-max-width', rt_current_width);
            } else if (rt_max_width > rt_current_width && rt_max_width <= rt_user_defined_container_breakpoint) {
              //same as above but in this case the breakpoint is larger or equal so it needs to be set as the max width
              $(this).attr('data-rt-max-width', rt_user_defined_container_breakpoint);
            }
          } else if (rt_containers_width > rt_max_width && rt_containers_width > rt_user_defined_container_breakpoint) {
            //the parent element is bigger than the max width and user supplied breakpoint
            $(this).removeClass('rt-vertical-table'); //switch to horizontal orientation (or at least keep it that orientation)

            if (rt_max_width > rt_current_width && !rt_has_class_rt_vertical_table && rt_max_width > rt_user_defined_container_breakpoint && !rt_has_class_rt_vertical_table) {
              //max width is greater than the table's current width and it's in horizontal mode currently...so the max width was set to low and needs to be adjusted to a higher number
              $(this).attr('data-rt-max-width', rt_current_width);
            } else if (rt_max_width > rt_current_width && !rt_has_class_rt_vertical_table && rt_max_width <= rt_user_defined_container_breakpoint && !rt_has_class_rt_vertical_table) {
              //same as above but in this case the user supplied breakpoint is larger or equal so it needs to be set as the max width
              $(this).attr('data-rt-max-width', rt_user_defined_container_breakpoint);
            }
          } else {//equal
          }
        });
      }
    };

    rt_responsive_table_object.each(function (index, element) {
      $(this).addClass('rt-responsive-table-' + index).addClass('rt-responsive-table');
      $(this).find('tbody > tr > td').wrapInner('<div class="responsive-container"></div>');

      if (index == rt_responsive_table_object.length - 1) {
        $(window).resize(function () {
          if (!is_iOS || is_iOS && rtStartingOuterWidth !== $(window).width()) {
            rtStartingOuterWidth = $(window).width(); //MUST update the starting width so future orientation changes will be noticed

            fix_responsive_tables();
          }
        });
        rt_responsive_table_count = $('table.rt-responsive-table').length;
        $('table.rt-responsive-table').each(function (index2, element2) {
          rt_write_css('table.rt-responsive-table-' + index2);
          $('table.rt-responsive-table-' + index2).attr('data-rt-max-width', determine_table_width($(this)));
          $(this).find("td,th").each(function (index3, element3) {
            //empty td tags made them disappear
            if (isEmpty($(this))) {
              $(this).html("&#160;");
            }
          });

          if (rt_responsive_table_count - 1 == index2) {
            fix_responsive_tables();
          }
        });
      }
    });
    return this;
  };
})(jQuery);

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************************!*\
  !*** ./docroot/_src/js/common.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_jquery_rtResponsiveTables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/jquery.rtResponsiveTables */ "./docroot/_src/js/lib/jquery.rtResponsiveTables.js");
/* harmony import */ var _lib_jquery_rtResponsiveTables__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_rtResponsiveTables__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
 ///////////////// ユーザー側 /////////////////


å;
/* ------------ Scroll animation ------------ */

$(function () {
  $('a[href^="#"]').on('click', function (ev) {
    ev.preventDefault(); // 他のJS用クラスが付与されていた場合は動作しない

    if ($(this).is('[class*=js-]')) {
      return;
    }

    var href = $(this).attr('href');
    var target = $(href === '#' || href === '' ? 'html' : href);
    var position = target.offset().top;
    $('html,body').animate({
      scrollTop: position
    }, 500, 'swing');
  });
});
{
  // SPメニュー
  var SlideMenu = __webpack_require__(/*! ./_slide-menu.js */ "./docroot/_src/js/_slide-menu.js");

  var Modal = __webpack_require__(/*! ./_modal.js */ "./docroot/_src/js/_modal.js");

  var Overlay = __webpack_require__(/*! ./_overlay-fixed.js */ "./docroot/_src/js/_overlay-fixed.js");

  var menuElements = {
    trigger: '.js-slide-menu__trigger',
    target: '.js-slide-menu__target'
  },
      slideMenu = new SlideMenu(menuElements.trigger, menuElements.target, menuElements.overlay),
      $menuTrigger = $(menuElements.trigger);
  var modalLogoutElements = {
    trigger: '.js-modal-logout__trigger',
    target: '.js-modal-logout__target',
    closeBtn: '.js-modal-logout__close'
  };
  var modalLogout = new Modal(modalLogoutElements);
  var body = document.body;
  var fixedOverlay = new Overlay('.js-overlay'); // ボタン・オーバーレイ押し下げ時

  $menuTrigger.on('click', function () {
    event.preventDefault();

    if ($(this).hasClass('is-show')) {
      slideMenu.menuClose();
      fixedOverlay.overlayClose();
      observer.disconnect();
    } else {
      slideMenu.menuOpen();
      fixedOverlay.overlayOpen();
      setTimeout(function () {
        observer.observe(body);
      }, 300);
    }
  });
  $(modalLogoutElements.overlay).on('click', function () {
    if ($menuTrigger.hasClass('is-show')) {
      slideMenu.menuClose();
      fixedOverlay.overlayClose();
      observer.disconnect();
    }
  }); // メニューオープン時にPC幅にリサイズしたら閉じる

  var observer = new ResizeObserver(function (entries) {
    if (entries[0].contentRect.width > 979) {
      slideMenu.menuClose();
      fixedOverlay.overlayClose();
      observer.disconnect();
    }
  });
  /* ------------ Logout modal ------------ */
  // ボタン・オーバーレイ押し下げ時

  $(modalLogoutElements.trigger).on('click', function () {
    event.preventDefault(); // メニューが開いていたら閉じる

    if ($menuTrigger.hasClass('is-show')) {
      slideMenu.menuClose();
      observer.disconnect();
    }

    if ($(this).hasClass('is-show')) {
      modalLogout.modalClose();
      fixedOverlay.overlayClose();
    } else {
      modalLogout.modalOpen();
      fixedOverlay.overlayOpen();
    }
  });
  $(modalLogoutElements.closeBtn).on('click', function () {
    event.preventDefault(); // event.stopPropagation();

    modalLogout.modalClose();
    fixedOverlay.overlayClose();
    return false;
  });
}
/* ------------ Growing Textarea ------------ */

$(document).on("change", "textarea", function (evt) {
  var min_height = 20; //テキストエリアの最小の高さをお好みで設定

  $(evt.target).height(min_height); //一旦最小サイズにする

  $(evt.target).height(evt.target.scrollHeight); //スクロールなしでテキストが収まる最小の高さに上書き
});
/* ------------ Table Responsive ------------ */

{
  $('table.js-rt-responsive-table').rtResponsiveTables({
    containerBreakPoint: 600
  });
}
/* ------------ Toggle Password Mask ------------ */

{
  if ($('.js-password').length) {
    var visibleClass = 'is-visible';
    $('.js-password').on('click', '.js-password__toggle', function () {
      var $module = $(this).closest('.js-password');
      var $input = $module.find('input');

      if ($input.attr('type') === 'text') {
        $(this).removeClass(visibleClass);
        $input.attr('type', 'password');
      } else if ($input.attr('type') === 'password') {
        $(this).addClass(visibleClass);
        $input.attr('type', 'text');
      }
    });
  }
}
/* ------------ Accordion ------------ */

{
  var accModule = {
    module: '.js-accordion',
    trigger: '.js-accordion-trigger',
    target: '.js-accordion-target',
    classActive: 'is-open'
  };
  $(accModule.module).on('click', accModule.trigger, function (e) {
    var $target = $(this).closest(accModule.module).find(accModule.target);

    if ($(this).is('.js-accordion__disable')) {
      return;
    } else if ($target.is(':animated')) {
      return;
    }

    $(this).toggleClass(accModule.classActive);
    $target.toggleClass(accModule.classActive).slideToggle('fast');
    e.preventDefault();
  });
}
/* ------------ checkbox all ------------ */

{
  var checkModule = {
    module: '.js-check-group',
    allCheck: '.js-check-group__all'
  };
  $(checkModule.module).on('click', checkModule.allCheck, function (e) {
    e.stopPropagation();
    var $checkboxAll = $(this).find('input[type="checkbox"]');

    if ($checkboxAll.prop("checked") == true) {
      $(this).closest(checkModule.module).find('input[type="checkbox"]').prop('checked', false);
    } else {
      $(this).closest(checkModule.module).find('input[type="checkbox"]').prop('checked', true);
    }

    e.preventDefault();
  });
}
}();
/******/ })()
;
//# sourceMappingURL=common.js.map