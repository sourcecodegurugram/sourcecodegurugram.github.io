function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Signin-becomeverified-becomeverified-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/becomeverified/becomeverified.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/becomeverified/becomeverified.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSigninBecomeverifiedBecomeverifiedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <app-navigationbar></app-navigationbar>\n</ion-header>\n\n<ion-content>\n\n\n    <div class=\"success-market\">We are happy to see you again\n      and can’t wait to help you find\n      friends! I see this is the first time\n      you have logged in to the app.\n    </div>\n\n    <div class=\"last-tab-button\" routerLink=\"/find-friends\">\n      <div class=\"continue-button-last\">\n        Free 7 day Trial\n      </div>\n\n      <div class=\"button-last\">\n        <span class=\"under-text-button\">(No card required)</span>\n      </div>\n    </div>\n\n\n\n\n    <div class=\"success-market\">Become a verified member\n      now for ad-free app usage,\n      unlimited instant messages,\n      and enhanced search</div>\n\n\n    <div class=\"last-tab-button\">\n      <div class=\"continue-button-last\" routerLink=\"/find-friends\">\n        Become Verified\n      </div>\n\n      <div class=\"button-last\">\n        <a href=\"https://not4dating.com/\"> <span class=\"under-text-button\">No Thanks! I am happy to\n          stay a basic member. Take\n          me to the free web version at\n          www.not4dating.com.</span></a>\n      </div>\n    </div>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Signin/becomeverified/becomeverified-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Signin/becomeverified/becomeverified-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: BecomeverifiedPageRoutingModule */

  /***/
  function srcAppSigninBecomeverifiedBecomeverifiedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BecomeverifiedPageRoutingModule", function () {
      return BecomeverifiedPageRoutingModule;
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


    var _becomeverified_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./becomeverified.page */
    "./src/app/Signin/becomeverified/becomeverified.page.ts");

    var routes = [{
      path: '',
      component: _becomeverified_page__WEBPACK_IMPORTED_MODULE_3__["BecomeverifiedPage"]
    }];

    var BecomeverifiedPageRoutingModule = function BecomeverifiedPageRoutingModule() {
      _classCallCheck(this, BecomeverifiedPageRoutingModule);
    };

    BecomeverifiedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BecomeverifiedPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Signin/becomeverified/becomeverified.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Signin/becomeverified/becomeverified.module.ts ***!
    \****************************************************************/

  /*! exports provided: BecomeverifiedPageModule */

  /***/
  function srcAppSigninBecomeverifiedBecomeverifiedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BecomeverifiedPageModule", function () {
      return BecomeverifiedPageModule;
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


    var _becomeverified_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./becomeverified-routing.module */
    "./src/app/Signin/becomeverified/becomeverified-routing.module.ts");
    /* harmony import */


    var _becomeverified_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./becomeverified.page */
    "./src/app/Signin/becomeverified/becomeverified.page.ts");
    /* harmony import */


    var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../Navigation/NavigationBar/navigationbar.module */
    "./src/app/Navigation/NavigationBar/navigationbar.module.ts");

    var BecomeverifiedPageModule = function BecomeverifiedPageModule() {
      _classCallCheck(this, BecomeverifiedPageModule);
    };

    BecomeverifiedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__["NavigationbarModule"], _becomeverified_routing_module__WEBPACK_IMPORTED_MODULE_5__["BecomeverifiedPageRoutingModule"]],
      declarations: [_becomeverified_page__WEBPACK_IMPORTED_MODULE_6__["BecomeverifiedPage"]]
    })], BecomeverifiedPageModule);
    /***/
  },

  /***/
  "./src/app/Signin/becomeverified/becomeverified.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/Signin/becomeverified/becomeverified.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSigninBecomeverifiedBecomeverifiedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-sign-up {\n  display: flex;\n  flex-direction: column;\n  margin-top: 2em;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.forms-field {\n  margin: 3em 1em;\n}\n\np.register-with-us {\n  padding: 1.5em;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n\nbutton.btn.btn-success {\n  margin-bottom: 10px;\n}\n\n.chechk-box-terms {\n  margin-top: 10px;\n}\n\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #415DAE;\n}\n\n.facebook {\n  height: 2.9em;\n  width: 88%;\n}\n\n.btn-primary-google {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #E62E2D;\n  height: 3em;\n  width: 88%;\n}\n\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n\nspan.button-text {\n  width: 100%;\n}\n\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.signup-form-progress {\n  height: 23px;\n}\n\n.under-text {\n  color: #ada2a2;\n}\n\n.age-limit {\n  color: #ada2a2;\n}\n\n.form-control {\n  border: 1px solid;\n}\n\n.form-group {\n  margin: 1em 0em;\n}\n\n.progress {\n  display: flex;\n  height: 1.5rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n  margin: 0px 1.5em;\n  border: 1px solid;\n}\n\n.blue-button-second-tab {\n  background-color: #4472C4;\n  padding: 0.2em 2em;\n  color: white;\n  text-align: center;\n  font-size: 16px;\n  margin: 0px 0.5em;\n  border-radius: 6px;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 0em;\n  display: flex;\n  align-items: center;\n  color: black !important;\n  justify-content: space-between;\n  background-color: transparent !important;\n  width: 100% !important;\n  height: 2.5em;\n  border: 1px solid;\n}\n\n.dropdown {\n  margin-bottom: 1em;\n}\n\nul.dropdown-menu.show {\n  width: 100%;\n}\n\na {\n  color: black;\n}\n\n.upload-photos {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-direction: column;\n  color: black;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.btn {\n  color: black;\n  padding: 12px 15px;\n  border-radius: 8px;\n  /* font-size: 20px; */\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  align-items: center;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n\n.upload-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0px;\n  background-color: #DFF4F5;\n  margin: 8px 0em;\n  padding-left: 1em;\n  width: 60vw;\n  border-radius: 16px;\n}\n\n.or {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 21px;\n  margin: 1em;\n}\n\n.grid-icon {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  width: 100%;\n  text-align: center;\n}\n\n.icons {\n  height: 50vh;\n  overflow: auto;\n}\n\nimg.image-icon {\n  width: 61%;\n  margin: 1em;\n}\n\n.button-blue-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #4472C4;\n  color: white;\n  padding: 0.7em;\n  border-radius: 10px;\n  margin-left: 1em;\n  margin-right: 1em;\n  font-size: 15px;\n}\n\n.terms-text {\n  height: 10vh;\n  overflow: auto;\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 0.5em;\n  text-align: justify;\n  font-size: 14px;\n}\n\n.terms {\n  margin: 1em 0px;\n}\n\n.continue-button-google {\n  background-color: #F64225;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.continue-button-facebook {\n  background-color: #4472C4;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.success-market {\n  text-align: center;\n  margin: 2em;\n  font-size: 18px;\n  margin-bottom: 0em;\n}\n\n.under-text-button {\n  color: #ada2a2;\n}\n\n.continue-button-last {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  margin-bottom: 0px;\n}\n\n.button-last {\n  text-align: center;\n  margin: 1em 3em;\n}\n\n.previous-button {\n  background-color: #E62E2D;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.progree-container.ng-star-inserted {\n  position: fixed;\n  width: 100%;\n  background-color: white;\n  padding: 1.5em 0em;\n  margin: 0px;\n  margin-top: -5vh;\n}\n\n.align-date {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 15px;\n  justify-items: center;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvU2lnbmluL2JlY29tZXZlcmlmaWVkL2JlY29tZXZlcmlmaWVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvU2lnbmluL2JlY29tZXZlcmlmaWVkL2JlY29tZXZlcmlmaWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUVJLFdBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBREFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNJSjs7QURGQTtFQUNJLGFBQUE7RUFFQSxVQUFBO0FDSUo7O0FERkE7RUFFSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFFQSxVQUFBO0FDR0o7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7QUNJSjs7QURGQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0tKOztBREhBO0VBQ0ksWUFBQTtBQ01KOztBREpBO0VBQ0ksY0FBQTtBQ09KOztBRExBO0VBQ0ksY0FBQTtBQ1FKOztBRE5BO0VBQ0ksaUJBQUE7QUNTSjs7QURQQTtFQUNJLGVBQUE7QUNVSjs7QUROQTtFQUVJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDU0o7O0FETkE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNTSjs7QURQQTtFQUNHLGtCQUFBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNVSjs7QURSQTtFQUNJLGtCQUFBO0FDV0o7O0FEVEE7RUFDSSxXQUFBO0FDWUo7O0FEVEE7RUFFSSxZQUFBO0FDV0o7O0FEVEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNZSjs7QURUQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ1lKOztBRFRFO0VBQ0UsWUFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDV0o7O0FEUEU7RUFFRSxnQkFBQTtFQUNGLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDU0Y7O0FEUEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDVUo7O0FEUkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNXSjs7QURUQTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1lKOztBRFRBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNZSjs7QURWQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDYUo7O0FEWEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDY0o7O0FEWkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDZUo7O0FEYkE7RUFDSSxlQUFBO0FDZ0JKOztBRGRBO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNnQko7O0FEZEE7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2dCSjs7QURkQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2lCSjs7QURmQTtFQUVJLGNBQUE7QUNpQko7O0FEZkE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2tCSjs7QURoQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNtQko7O0FEaEJBO0VBRUkseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDa0JKOztBRGhCQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ21CSjs7QURqQkE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNvQko7O0FEbEJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNxQkoiLCJmaWxlIjoic3JjL2FwcC9TaWduaW4vYmVjb21ldmVyaWZpZWQvYmVjb21ldmVyaWZpZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tc2lnbi11cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbn1cbi5mdWxsLXdpZHRoXG57XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybXMtZmllbGR7XG4gICAgbWFyZ2luOiAzZW0gMWVtO1xufVxucC5yZWdpc3Rlci13aXRoLXVzIHtcbiAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cblxuYnV0dG9uLmJ0bi5idG4tc3VjY2VzcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jaGVjaGstYm94LXRlcm1zIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc29jaWFsLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE1REFFXG59XG4uZmFjZWJvb2sge1xuICAgIGhlaWdodDogMi45ZW07XG4gXG4gICAgd2lkdGg6IDg4JVxufVxuLmJ0bi1wcmltYXJ5LWdvb2dsZVxue1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNjJFMkQ7XG4gICAgaGVpZ2h0OiAzZW07XG5cbiAgICB3aWR0aDogODglXG59XG5cbnAub3ItdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbn1cbnNwYW4uYnV0dG9uLXRleHQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRpbnVlLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xuICAgIGhlaWdodDogM2VtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIG1hcmdpbjogMmVtO1xufVxuLnNpZ251cC1mb3JtLXByb2dyZXNze1xuICAgIGhlaWdodDogMjNweDtcbn1cbi51bmRlci10ZXh0IHtcbiAgICBjb2xvcjogI2FkYTJhMjtcbn1cbi5hZ2UtbGltaXR7XG4gICAgY29sb3I6ICNhZGEyYTI7O1xufVxuLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luOiAxZW0gMGVtO1xufVxuXG5cbi5wcm9ncmVzcyB7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIG1hcmdpbjogMHB4IDEuNWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuXG59XG4uYmx1ZS1idXR0b24tc2Vjb25kLXRhYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbiAgICBwYWRkaW5nOiAwLjJlbSAyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwcHggMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XG4gICBtYXJnaW4tYm90dG9tOiAwZW07IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uZHJvcGRvd24ge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbnVsLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIFxufVxuYVxue1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi51cGxvYWQtcGhvdG9zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgXG4gIC5idG4ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAvKiBmb250LXNpemU6IDIwcHg7ICovXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIH1cbiAgXG4gIC51cGxvYWQtYnRuLXdyYXBwZXIgaW5wdXRbdHlwZT1maWxlXSB7XG5cbiAgICBmb250LXNpemU6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbiAgfVxuICAudXBsb2FkLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRjRGNTtcbiAgICBtYXJnaW46IDhweCAwZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbi5vciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIG1hcmdpbjogMWVtO1xufVxuLmdyaWQtaWNvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbi5pY29ucyB7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuaW1nLmltYWdlLWljb24ge1xuICAgIHdpZHRoOiA2MSU7XG4gICAgbWFyZ2luOiAxZW07XG59XG4uYnV0dG9uLWJsdWUtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4udGVybXMtdGV4dCB7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4udGVybXMge1xuICAgIG1hcmdpbjogMWVtIDBweDtcbn1cbi5jb250aW51ZS1idXR0b24tZ29vZ2xlXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2NDIyNTtcbiAgICBwYWRkaW5nOiAwLjZlbSAyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiAyZW0gMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5jb250aW51ZS1idXR0b24tZmFjZWJvb2tcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICAgIHBhZGRpbmc6IDAuNmVtIDJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDJlbSAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLnN1Y2Nlc3MtbWFya2V0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyZW07XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBlbTtcbn1cbi51bmRlci10ZXh0LWJ1dHRvblxue1xuICAgIGNvbG9yOiAjYWRhMmEyO1xufVxuLmNvbnRpbnVlLWJ1dHRvbi1sYXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgbWFyZ2luOiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmJ1dHRvbi1sYXN0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxZW0gM2VtO1xuXG59XG4ucHJldmlvdXMtYnV0dG9uXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2MkUyRDtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBtYXJnaW46IDJlbTtcbn1cbi5wcm9ncmVlLWNvbnRhaW5lci5uZy1zdGFyLWluc2VydGVkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMS41ZW0gMGVtO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IC01dmg7XG59XG4uYWxpZ24tZGF0ZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdyaWQtZ2FwOiAxNXB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogOTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH0iLCIubWFpbi1zaWduLXVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybXMtZmllbGQge1xuICBtYXJnaW46IDNlbSAxZW07XG59XG5cbnAucmVnaXN0ZXItd2l0aC11cyB7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2hlY2hrLWJveC10ZXJtcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zb2NpYWwtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNURBRTtcbn1cblxuLmZhY2Vib29rIHtcbiAgaGVpZ2h0OiAyLjllbTtcbiAgd2lkdGg6IDg4JTtcbn1cblxuLmJ0bi1wcmltYXJ5LWdvb2dsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTYyRTJEO1xuICBoZWlnaHQ6IDNlbTtcbiAgd2lkdGg6IDg4JTtcbn1cblxucC5vci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI3cHg7XG59XG5cbnNwYW4uYnV0dG9uLXRleHQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xufVxuXG4uc2lnbnVwLWZvcm0tcHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDIzcHg7XG59XG5cbi51bmRlci10ZXh0IHtcbiAgY29sb3I6ICNhZGEyYTI7XG59XG5cbi5hZ2UtbGltaXQge1xuICBjb2xvcjogI2FkYTJhMjtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbjogMWVtIDBlbTtcbn1cblxuLnByb2dyZXNzIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMS41cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIG1hcmdpbjogMHB4IDEuNWVtO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmJsdWUtYnV0dG9uLXNlY29uZC10YWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICBwYWRkaW5nOiAwLjJlbSAyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMHB4IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICBtYXJnaW4tYm90dG9tOiAwZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMi41ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uZHJvcGRvd24ge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbnVsLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udXBsb2FkLXBob3RvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnVwbG9hZC1idG4td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLyogZm9udC1zaXplOiAyMHB4OyAqL1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnVwbG9hZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERkY0RjU7XG4gIG1hcmdpbjogOHB4IDBlbTtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHdpZHRoOiA2MHZ3O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4ub3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW46IDFlbTtcbn1cblxuLmdyaWQtaWNvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbnMge1xuICBoZWlnaHQ6IDUwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5pbWcuaW1hZ2UtaWNvbiB7XG4gIHdpZHRoOiA2MSU7XG4gIG1hcmdpbjogMWVtO1xufVxuXG4uYnV0dG9uLWJsdWUtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuN2VtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGVybXMtdGV4dCB7XG4gIGhlaWdodDogMTB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGVybXMge1xuICBtYXJnaW46IDFlbSAwcHg7XG59XG5cbi5jb250aW51ZS1idXR0b24tZ29vZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2NDIyNTtcbiAgcGFkZGluZzogMC42ZW0gMmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDJlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gIHBhZGRpbmc6IDAuNmVtIDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAyZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5zdWNjZXNzLW1hcmtldCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyZW07XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMGVtO1xufVxuXG4udW5kZXItdGV4dC1idXR0b24ge1xuICBjb2xvcjogI2FkYTJhMjtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1sYXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcbiAgaGVpZ2h0OiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgbWFyZ2luOiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmJ1dHRvbi1sYXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDFlbSAzZW07XG59XG5cbi5wcmV2aW91cy1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTYyRTJEO1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbn1cblxuLnByb2dyZWUtY29udGFpbmVyLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMS41ZW0gMGVtO1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogLTV2aDtcbn1cblxuLmFsaWduLWRhdGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBncmlkLWdhcDogMTVweDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Signin/becomeverified/becomeverified.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Signin/becomeverified/becomeverified.page.ts ***!
    \**************************************************************/

  /*! exports provided: BecomeverifiedPage */

  /***/
  function srcAppSigninBecomeverifiedBecomeverifiedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BecomeverifiedPage", function () {
      return BecomeverifiedPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BecomeverifiedPage = /*#__PURE__*/function () {
      function BecomeverifiedPage() {
        _classCallCheck(this, BecomeverifiedPage);
      }

      _createClass(BecomeverifiedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BecomeverifiedPage;
    }();

    BecomeverifiedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-becomeverified',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./becomeverified.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/becomeverified/becomeverified.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./becomeverified.page.scss */
      "./src/app/Signin/becomeverified/becomeverified.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BecomeverifiedPage);
    /***/
  }
}]);
//# sourceMappingURL=Signin-becomeverified-becomeverified-module-es5.js.map