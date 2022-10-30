/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/es6/blocks/animation.js":
/*!****************************************!*\
  !*** ./assets/es6/blocks/animation.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const animation = () => {
  try {
    //header menu
    const headerMenu = document.querySelectorAll('.header__menu-item');
    let delay = 0.88;
    headerMenu.forEach(item => {
      item.style.cssText = `transition: 0.6s all ${delay}s`;
      item.classList.add('top');
      delay += 0.11;
    });
  } catch (e) {
    console.log(e.stack);
  }

  try {//mouse move
    // const moveTarget = document.querySelectorAll('.circle');
    // moveTarget.forEach(item => {
    //     item.setAttribute('data-top', +window.getComputedStyle(item).top.replace('px', ''));
    //     if (item.classList.contains('circle2')) {
    //         item.setAttribute('data-left', +window.getComputedStyle(item).left.replace('px', ''));
    //     } else {
    //         item.setAttribute('data-right', +window.getComputedStyle(item).right.replace('px', ''));
    //     }
    // });
    // window.addEventListener('mousemove', (e) => {
    //     document.querySelector('.main__page.active').querySelectorAll('.circle').forEach(item => {
    //         item.style.top = `${+item.getAttribute('data-top') + (e.pageY - window.innerHeight / 2) / 6}px`;
    //         if (item.classList.contains('circle2')) {
    //             item.style.left = `${+item.getAttribute('data-left') + (e.pageX - window.innerWidth / 2) / 13}px`;
    //         } else {
    //             item.style.right = `${+item.getAttribute('data-right') - (e.pageX - window.innerWidth / 2) / 13}px`;
    //         }
    //     });
    // });
  } catch (e) {
    console.log(e.stack);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (animation);

/***/ }),

/***/ "./assets/es6/blocks/pages.js":
/*!************************************!*\
  !*** ./assets/es6/blocks/pages.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const pages = () => {
  try {
    const mainPages = document.querySelectorAll('.main__page'),
          dotsField = document.querySelector('.main__dots');

    for (let i = 0; i < mainPages.length; i++) {
      const newDot = document.createElement('div');
      newDot.classList.add('main__dots-item');
      newDot.innerHTML = '<span></span>';
      dotsField.append(newDot);
    }

    const dots = dotsField.querySelectorAll('.main__dots-item');
    let num = 0,
        list = false;

    const setPage = () => {
      dots.forEach(item => item.classList.remove('active'));
      mainPages.forEach(item => item.classList.remove('active'));
      dots[num].classList.add('active');
      mainPages[num].classList.add('active');
    };

    setPage();
    dots.forEach((item, i) => {
      item.addEventListener('click', () => {
        num = i;
        setPage();
      });
    });
    window.addEventListener('wheel', e => {
      let move = true;

      if (!list) {
        if (e.deltaY >= 0) {
          if (num == mainPages.length - 1) {
            move = false;
          } else {
            num++;
          }
        } else {
          if (num == 0) {
            move = false;
          } else {
            num--;
          }
        }

        if (move) {
          setPage();
          list = true;
          setTimeout(() => {
            list = false;
          }, 1500);
        }
      }
    });
  } catch (e) {
    console.log(e.stack);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (pages);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!****************************!*\
  !*** ./assets/es6/main.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/pages */ "./assets/es6/blocks/pages.js");
/* harmony import */ var _blocks_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/animation */ "./assets/es6/blocks/animation.js");


'use strict';

window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_pages__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_animation__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map