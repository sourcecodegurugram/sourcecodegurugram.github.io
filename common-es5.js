function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticCcbda579Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-729ec402.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-729ec402.js ***!
    \*************************************************************/

  /*! exports provided: s */

  /***/
  function node_modulesIonicCoreDistEsmIndex729ec402Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return sanitizeDOMString;
    });
    /**
     * Does a simple sanitization of all elements
     * in an untrusted string
     */


    var sanitizeDOMString = function sanitizeDOMString(untrustedString) {
      try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
          return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */


        var documentFragment = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */

        blockedTags.forEach(function (blockedTag) {
          var getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

          for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
            var element = getElementsToRemove[elementIndex];

            if (element.parentNode) {
              element.parentNode.removeChild(element);
            } else {
              documentFragment.removeChild(element);
            }
            /**
             * We still need to sanitize
             * the children of this element
             * as they are left behind
             */


            var childElements = getElementChildren(element);
            /* tslint:disable-next-line */

            for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
              sanitizeElement(childElements[childIndex]);
            }
          }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes

        var dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */

        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
          sanitizeElement(dfChildren[childIndex]);
        } // Append document fragment to div


        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

        var getInnerDiv = fragmentDiv.querySelector('div');
        return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
      } catch (err) {
        console.error(err);
        return '';
      }
    };
    /**
     * Clean up current element based on allowed attributes
     * and then recursively dig down into any child elements to
     * clean those up as well
     */


    var sanitizeElement = function sanitizeElement(element) {
      // IE uses childNodes, so ignore nodes that are not elements
      if (element.nodeType && element.nodeType !== 1) {
        return;
      }

      for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name; // remove non-allowed attribs

        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
          element.removeAttribute(attributeName);
          continue;
        } // clean up any allowed attribs
        // that attempt to do any JS funny-business


        var attributeValue = attribute.value;
        /* tslint:disable-next-line */

        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
          element.removeAttribute(attributeName);
        }
      }
      /**
       * Sanitize any nested children
       */


      var childElements = getElementChildren(element);
      /* tslint:disable-next-line */

      for (var _i = 0; _i < childElements.length; _i++) {
        sanitizeElement(childElements[_i]);
      }
    };
    /**
     * IE doesn't always support .children
     * so we revert to .childNodes instead
     */


    var getElementChildren = function getElementChildren(el) {
      return el.children != null ? el.children : el.childNodes;
    };

    var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
    var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeC2dc54d9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/FavoriteUsers/FavoriteUsers.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/FavoriteUsers/FavoriteUsers.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatFavoriteUsersFavoriteUsersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"background\">\r\n    <div class=\"members-grid\" *ngFor=\"let favorite of uniqueFavorite\" routerLink=\"/popup/{{favorite[0].uid}}\">\r\n      <div class=\"photo-member-grid\">\r\n        <img src={{favorite[0].picture}} class=\"image-profile\">\r\n      </div>\r\n      <div class=\"data-member-grid\">\r\n        <p class=\"name card-item\">{{favorite[0].name}}</p>\r\n        <ion-label class=\"hobbies card-item \"><span class=\"left-heading\">Activities:&nbsp;</span><span\r\n            class=\"activities_values\" *ngFor=\"let activity of favorite[0].activities\">\r\n            {{activity.value}}\r\n          </span>.\r\n        </ion-label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/chat/FavoriteUsers/FavoriteUsers-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/chat/FavoriteUsers/FavoriteUsers-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: FavoriteUsersPageRoutingModule */

  /***/
  function srcAppChatFavoriteUsersFavoriteUsersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoriteUsersPageRoutingModule", function () {
      return FavoriteUsersPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _FavoriteUsers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./FavoriteUsers.page */
    "./src/app/chat/FavoriteUsers/FavoriteUsers.page.ts");

    var routes = [{
      path: '',
      component: _FavoriteUsers_page__WEBPACK_IMPORTED_MODULE_3__["FavoriteUsersPage"]
    }];

    var FavoriteUsersPageRoutingModule = function FavoriteUsersPageRoutingModule() {
      _classCallCheck(this, FavoriteUsersPageRoutingModule);
    };

    FavoriteUsersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FavoriteUsersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chat/FavoriteUsers/FavoriteUsers.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/chat/FavoriteUsers/FavoriteUsers.module.ts ***!
    \************************************************************/

  /*! exports provided: FavoriteUsersPageModule */

  /***/
  function srcAppChatFavoriteUsersFavoriteUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoriteUsersPageModule", function () {
      return FavoriteUsersPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _FavoriteUsers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./FavoriteUsers-routing.module */
    "./src/app/chat/FavoriteUsers/FavoriteUsers-routing.module.ts");
    /* harmony import */


    var _Navigati_Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../Navigati../../Navigation/NavigationBar/navigationbar.module */
    "./src/app/Navigation/NavigationBar/navigationbar.module.ts");
    /* harmony import */


    var _FavoriteUsers_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./FavoriteUsers.page */
    "./src/app/chat/FavoriteUsers/FavoriteUsers.page.ts");

    var FavoriteUsersPageModule = function FavoriteUsersPageModule() {
      _classCallCheck(this, FavoriteUsersPageModule);
    };

    FavoriteUsersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _FavoriteUsers_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoriteUsersPageRoutingModule"], _Navigati_Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_6__["NavigationbarModule"]],
      declarations: [_FavoriteUsers_page__WEBPACK_IMPORTED_MODULE_7__["FavoriteUsersPage"]]
    })], FavoriteUsersPageModule);
    /***/
  },

  /***/
  "./src/app/chat/FavoriteUsers/FavoriteUsers.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/chat/FavoriteUsers/FavoriteUsers.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatFavoriteUsersFavoriteUsersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".members-grid {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  justify-content: center;\n  align-content: center;\n  border: 1px solid;\n  margin: 1em;\n}\n\n.data-member-grid {\n  margin-left: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-right: 1em;\n}\n\np {\n  margin-bottom: 1em;\n  font-size: 17px;\n}\n\np {\n  margin-bottom: 0px;\n}\n\nimg.image-profile {\n  height: 16vh;\n  width: 100%;\n}\n\n.hobbies {\n  font-family: \"Open Sans\", sans-serif;\n  /* font-style: normal; */\n  /* display: block; */\n  display: -webkit-box;\n  /* max-width: 100%; */\n  /* height: 43px; */\n  /* margin: 0 auto; */\n  font-size: 14px;\n  /* line-height: 1; */\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG9jdW1lbnRzL1NvdXJjZWNvZGUgV29yay9Bbmd1bGFyIE9mZmljZSBQcm9qZWN0L25vdDREYXRpbmcvc3JjL2FwcC9jaGF0L0Zhdm9yaXRlVXNlcnMvRmF2b3JpdGVVc2Vycy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQvRmF2b3JpdGVVc2Vycy9GYXZvcml0ZVVzZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLG9DQUFBO0VBR0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvRmF2b3JpdGVVc2Vycy9GYXZvcml0ZVVzZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW1iZXJzLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW46IDFlbTtcclxufVxyXG5cclxuLmRhdGEtbWVtYmVyLWdyaWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcblxyXG5wIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuaW1nLmltYWdlLXByb2ZpbGUge1xyXG4gICAgaGVpZ2h0OiAxNnZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ob2JiaWVzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJyxcclxuICAgICAgICBzYW5zLXNlcmlmO1xyXG5cclxuICAgIC8qIGZvbnQtc3R5bGU6IG5vcm1hbDsgKi9cclxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAvKiBtYXgtd2lkdGg6IDEwMCU7ICovXHJcbiAgICAvKiBoZWlnaHQ6IDQzcHg7ICovXHJcbiAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC8qIGxpbmUtaGVpZ2h0OiAxOyAqL1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufSIsIi5tZW1iZXJzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW46IDFlbTtcbn1cblxuLmRhdGEtbWVtYmVyLWdyaWQge1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuaW1nLmltYWdlLXByb2ZpbGUge1xuICBoZWlnaHQ6IDE2dmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaG9iYmllcyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAvKiBmb250LXN0eWxlOiBub3JtYWw7ICovXG4gIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLyogbWF4LXdpZHRoOiAxMDAlOyAqL1xuICAvKiBoZWlnaHQ6IDQzcHg7ICovXG4gIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xuICBmb250LXNpemU6IDE0cHg7XG4gIC8qIGxpbmUtaGVpZ2h0OiAxOyAqL1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/chat/FavoriteUsers/FavoriteUsers.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/chat/FavoriteUsers/FavoriteUsers.page.ts ***!
    \**********************************************************/

  /*! exports provided: FavoriteUsersPage */

  /***/
  function srcAppChatFavoriteUsersFavoriteUsersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoriteUsersPage", function () {
      return FavoriteUsersPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var FavoriteUsersPage = /*#__PURE__*/function () {
      function FavoriteUsersPage(http) {
        _classCallCheck(this, FavoriteUsersPage);

        this.http = http;
      }

      _createClass(FavoriteUsersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.itrs = JSON.parse(localStorage.getItem("currentUser"));
          this.http.get("https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid).subscribe(function (users) {
            _this.allfavorate = users;
            _this.listFavorate = _this.allfavorate.field_favorite_users.und[0].value;
            _this.ParseFavorate = JSON.parse(_this.listFavorate);
            _this.uniqueFavorite = _this.removeDuplicatesBy(function (x) {
              return x[0].name;
            }, _this.ParseFavorate);
            console.log(_this.uniqueFavorite);
            console.log(_this.ParseFavorate);
          });
        }
      }, {
        key: "removeDuplicatesBy",
        value: function removeDuplicatesBy(keyFn, array) {
          var mySet = new Set();
          return array.filter(function (x) {
            var key = keyFn(x),
                isNew = !mySet.has(key);
            if (isNew) mySet.add(key);
            return isNew;
          });
        }
      }]);

      return FavoriteUsersPage;
    }();

    FavoriteUsersPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FavoriteUsersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-FavoriteUsers",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./FavoriteUsers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/FavoriteUsers/FavoriteUsers.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./FavoriteUsers.page.scss */
      "./src/app/chat/FavoriteUsers/FavoriteUsers.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], FavoriteUsersPage);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map