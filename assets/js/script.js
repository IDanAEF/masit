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

  try {
    //mouse move
    const moveTarget = document.querySelectorAll('.mouse-move');

    if (document.querySelector('main.slider-page')) {
      moveTarget.forEach(item => {
        item.setAttribute('data-top', +window.getComputedStyle(item).top.replace('px', ''));

        if (item.classList.contains('right')) {
          item.setAttribute('data-right', +window.getComputedStyle(item).right.replace('px', ''));
        } else {
          item.setAttribute('data-left', +window.getComputedStyle(item).left.replace('px', ''));
        }
      });
      window.addEventListener('mousemove', e => {
        if (window.innerWidth >= 1024) {
          document.querySelector('.main__page.active').querySelectorAll('.mouse-move').forEach(item => {
            item.style.top = `${+item.getAttribute('data-top') + (e.pageY - window.innerHeight / 2) / 6}px`;

            if (item.classList.contains('right')) {
              item.style.right = `${+item.getAttribute('data-right') - (e.pageX - window.innerWidth / 2) / 12}px`;
            } else {
              item.style.left = `${+item.getAttribute('data-left') + (e.pageX - window.innerWidth / 2) / 12}px`;
            }
          });
        }
      });
    }
  } catch (e) {
    console.log(e.stack);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (animation);

/***/ }),

/***/ "./assets/es6/blocks/forms.js":
/*!************************************!*\
  !*** ./assets/es6/blocks/forms.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const forms = () => {
  async function postData(url, data) {
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  }

  const resetForm = (form, blocks) => {
    form.reset();
    blocks.forEach(item => item.classList.remove('active'));
  };

  try {
    const formBlock = document.querySelectorAll('.form_block');
    formBlock.forEach(block => {
      const blockInp = block.querySelector('input, textarea');

      if (block.classList.contains('label-top')) {
        blockInp.addEventListener('focus', () => {
          block.classList.add('active');
        });
        blockInp.addEventListener('blur', () => {
          if (!blockInp.value) {
            block.classList.remove('active');
          }
        });
      } else if (block.classList.contains('checkbox')) {
        blockInp.addEventListener('change', () => {
          block.classList.toggle('active');
        });
      }
    });
  } catch (e) {
    console.log(e.stack);
  }
  /* ---- mail send ----> */


  try {
    const messBlock = document.querySelector('#message'),
          messForm = messBlock.querySelector('form');
    messForm.addEventListener('submit', e => {
      e.preventDefault();
      let formData = new FormData(messForm);
      postData('mail.php', formData).then(() => {
        messBlock.querySelector('.wrap').classList.remove('active');
        messBlock.querySelector('.wrap.success').classList.add('active');
        resetForm(messForm, messForm.querySelectorAll('.form_block'));
      });
    });
  } catch (e) {
    console.log(e.stack);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./assets/es6/blocks/mask.js":
/*!***********************************!*\
  !*** ./assets/es6/blocks/mask.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function createMask(event) {
    let matrix = event.target.getAttribute('data-format') ? event.target.getAttribute('data-format') : '+_ (___) ___-__-__',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask); //input.addEventListener('focus', createMask);

    input.addEventListener('blur', createMask);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./assets/es6/blocks/other.js":
/*!************************************!*\
  !*** ./assets/es6/blocks/other.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const other = () => {
  try {
    //header lang
    const headLang = document.querySelector('.header__lang');
    headLang.addEventListener('click', () => {
      headLang.classList.toggle('active');
    });
  } catch (e) {
    console.log(e.stack);
  }

  try {
    //async images
    const objects = document.getElementsByClassName('asyncImage');
    Array.from(objects).map(item => {
      const img = new Image();
      img.src = item.dataset.src;

      img.onload = () => {
        item.classList.remove('asyncImage');
        return item.nodeName === 'IMG' ? item.src = item.dataset.src : item.style.backgroundImage = `url(${item.dataset.src})`;
      };
    });
  } catch (e) {
    console.log(e.stack);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (other);

/***/ }),

/***/ "./assets/es6/blocks/pages.js":
/*!************************************!*\
  !*** ./assets/es6/blocks/pages.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const pages = () => {
  try {
    const sliderPagePlace = document.querySelector('.slider-page'),
          mainPages = document.querySelectorAll('.slider-page-item'),
          dotsField = document.querySelector('.main__dots'),
          menuItems = document.querySelectorAll('.header__menu-item'),
          //promoBtn = document.querySelector('.page__promo .button'),
    newsCont = document.querySelectorAll('.new-news-cont');

    if (dotsField) {
      for (let i = 0; i < mainPages.length; i++) {
        const newDot = document.createElement('div');
        newDot.classList.add('main__dots-item');
        newDot.innerHTML = '<span></span>';
        dotsField.append(newDot);
      }
    }

    const dots = dotsField ? dotsField.querySelectorAll('.main__dots-item') : [];
    let num = 0,
        list = false,
        isModal = false;

    const setPage = () => {
      dots.forEach(item => item.classList.remove('active'));
      mainPages.forEach(item => item.classList.remove('active'));
      newsCont.length > 0 ? newsCont.forEach(cont => cont.classList.remove('active')) : '';

      if (sliderPagePlace.classList.contains('menu-activity')) {
        menuItems.forEach(item => item.classList.remove('active'));
        menuItems[num].classList.add('active');
      }

      dots[num].classList.add('active');
      mainPages[num].classList.add('active');
    };

    const moveAnim = cord => {
      let move = true;

      if (!list) {
        if (cord >= 0) {
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
          }, 900);
        }
      }
    };

    if (sliderPagePlace) {
      setPage();
      dots.forEach((item, i) => {
        item.addEventListener('click', () => {
          num = i;
          setPage();
        });
      });
      menuItems.forEach((item, i) => {
        item.addEventListener('click', e => {
          if (sliderPagePlace.classList.contains('menu-activity')) {
            e.preventDefault();
            num = i;
            setPage();
          }
        });
      }); // if (promoBtn) {
      //     promoBtn.addEventListener('click', (e) => {
      //         e.preventDefault();
      //         num = 1;
      //         setPage();
      //     });
      // }        

      window.addEventListener('wheel', e => {
        if (!isModal) {
          moveAnim(e.deltaY);
        }
      });
      let startPos = 0;
      window.addEventListener('touchstart', e => {
        startPos = e.changedTouches[0].screenY;
      });
      window.addEventListener('touchend', e => {
        if (!isModal) {
          if (startPos - e.changedTouches[0].screenY > 50) {
            moveAnim(1);
          } else if (startPos - e.changedTouches[0].screenY < -50) {
            moveAnim(-1);
          }
        }
      });
    }

    const modal = document.querySelector('.modal'),
          targetBtn = document.querySelectorAll('.modal-targ'),
          newTitle = document.querySelectorAll('.new-title'),
          backTitle = document.querySelector('.back-title');

    if (newTitle.length > 0) {
      newTitle.forEach(title => {
        title.addEventListener('click', e => {
          if (window.innerWidth >= 992) {
            e.preventDefault();
            mainPages.forEach(item => item.classList.remove('active'));
            document.querySelector(`.new-news-cont[data-new="${title.getAttribute('data-new')}"]`).classList.add('active');
          }
        });
      });
      backTitle.addEventListener('click', () => {
        setPage();
      });
    }

    targetBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        const modalItem = modal.querySelector(`#${btn.getAttribute('data-modal')}`);

        if (modalItem) {
          isModal = true; //mainPages.forEach(item => item.classList.remove('active'));

          document.querySelector('body').classList.add('fixed');
          modal.classList.add('active');
          modalItem.classList.add('active');
        }
      });
    });
    modal.addEventListener('click', e => {
      if (e.target.classList.contains('modal__close')) {
        isModal = false; //setPage();

        modal.querySelectorAll('.modal__item').forEach(item => {
          item.classList.remove('active');
        });
        document.querySelector('body').classList.remove('fixed');
        modal.querySelector('#message .wrap').classList.add('active');
        modal.querySelector('#message .wrap.success').classList.remove('active');
        modal.classList.remove('active');
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
/* harmony import */ var _blocks_other__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/other */ "./assets/es6/blocks/other.js");
/* harmony import */ var _blocks_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/forms */ "./assets/es6/blocks/forms.js");
/* harmony import */ var _blocks_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/mask */ "./assets/es6/blocks/mask.js");





'use strict';

window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_pages__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_animation__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_blocks_mask__WEBPACK_IMPORTED_MODULE_4__["default"])('input[type="tel"]');
  (0,_blocks_forms__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_other__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map