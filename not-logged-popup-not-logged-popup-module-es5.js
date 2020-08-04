function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["not-logged-popup-not-logged-popup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/not-logged-popup/not-logged-popup.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/not-logged-popup/not-logged-popup.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWelcomeNotLoggedPopupNotLoggedPopupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"main-pop-background\" >\n\n\n  <div class=\"main-pop\">\n \n    <div class=\"pop-grids\">\n      <div class=\"cross-sign\" routerLink=\"/\">\n        <img src=\"../../assets/Images/cross.png\" class=\"cross-image\">\n      </div>\n      <div class=\"pop-content\">\n        Not4Dating wants to help you create communities, build meaningful relationships and feel truly connected to others.\n        <h5 class=\"whos-on-site\">Who’s on the site?</h5>\n\n\n        <div class=\"checkbox-popup\">\n          <img src=\"../../assets/Images/check.png\" class=\"check-box\">\n          <p class=\"check-box-text\">Our youngest member is 18,our oldest member is 85</p>\n        </div>\n        <div class=\"checkbox-popup\">\n          <img src=\"../../assets/Images/check.png\" class=\"check-box\">\n          <p class=\"check-box-text\">64% In a Relationship, 36% Not in a Relationship  </p>\n        </div>\n        <div class=\"button-flex\">\n          <button type=\"button\" class=\"btn btn-primary register-button\" routerLink=\"/signup\">Awesome! Sign me up!</button>\n          <button type=\"button\" class=\"btn btn-primary login-button\" routerLink=\"/signin\">I am already a member</button>\n        </div>\n      </div>\n     \n    </div>\n    \n  \n  </div>\n  </div>\n";
    /***/
  },

  /***/
  "./src/app/welcome/not-logged-popup/not-logged-popup-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/welcome/not-logged-popup/not-logged-popup-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: NotLoggedPopupPageRoutingModule */

  /***/
  function srcAppWelcomeNotLoggedPopupNotLoggedPopupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotLoggedPopupPageRoutingModule", function () {
      return NotLoggedPopupPageRoutingModule;
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


    var _not_logged_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./not-logged-popup.page */
    "./src/app/welcome/not-logged-popup/not-logged-popup.page.ts");

    var routes = [{
      path: '',
      component: _not_logged_popup_page__WEBPACK_IMPORTED_MODULE_3__["NotLoggedPopupPage"]
    }];

    var NotLoggedPopupPageRoutingModule = function NotLoggedPopupPageRoutingModule() {
      _classCallCheck(this, NotLoggedPopupPageRoutingModule);
    };

    NotLoggedPopupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotLoggedPopupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/welcome/not-logged-popup/not-logged-popup.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/welcome/not-logged-popup/not-logged-popup.module.ts ***!
    \*********************************************************************/

  /*! exports provided: NotLoggedPopupPageModule */

  /***/
  function srcAppWelcomeNotLoggedPopupNotLoggedPopupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotLoggedPopupPageModule", function () {
      return NotLoggedPopupPageModule;
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


    var _not_logged_popup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./not-logged-popup-routing.module */
    "./src/app/welcome/not-logged-popup/not-logged-popup-routing.module.ts");
    /* harmony import */


    var _not_logged_popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./not-logged-popup.page */
    "./src/app/welcome/not-logged-popup/not-logged-popup.page.ts");

    var NotLoggedPopupPageModule = function NotLoggedPopupPageModule() {
      _classCallCheck(this, NotLoggedPopupPageModule);
    };

    NotLoggedPopupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _not_logged_popup_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotLoggedPopupPageRoutingModule"]],
      declarations: [_not_logged_popup_page__WEBPACK_IMPORTED_MODULE_6__["NotLoggedPopupPage"]]
    })], NotLoggedPopupPageModule);
    /***/
  },

  /***/
  "./src/app/welcome/not-logged-popup/not-logged-popup.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/welcome/not-logged-popup/not-logged-popup.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWelcomeNotLoggedPopupNotLoggedPopupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-pop-background {\n  background-color: #000000a3;\n  background-position: center;\n  height: 100vh;\n  overflow: auto;\n}\n\n.main-pop {\n  display: block;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n}\n\n.pop-grids {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 0em;\n  background-color: white;\n  margin: 0em 2em;\n  margin-bottom: 0px;\n}\n\nh5.whos-on-site {\n  font-size: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n\n.checkbox-popup {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n\nimg.check-box {\n  margin-right: 10px;\n  text-align: center;\n}\n\n.button-flex {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n}\n\n.register-button {\n  background-color: #5ADB00;\n  height: 40px;\n  margin-bottom: 1em;\n}\n\nbutton.btn.btn-primary.login-button {\n  height: 40px;\n  margin-bottom: 1em;\n}\n\np.check-box-text {\n  margin-bottom: 0px;\n}\n\n.pop-content {\n  margin: 1em;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nbutton.btn.btn-primary.register-button.close-button {\n  width: 60%;\n}\n\nimg.cross-image {\n  height: 3vh;\n}\n\n.cross-sign {\n  display: flex;\n  justify-content: flex-end;\n  margin: 0.8em 1em 0em 0em;\n  /* margin: 1em; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvd2VsY29tZS9ub3QtbG9nZ2VkLXBvcHVwL25vdC1sb2dnZWQtcG9wdXAucGFnZS5zY3NzIiwic3JjL2FwcC93ZWxjb21lL25vdC1sb2dnZWQtcG9wdXAvbm90LWxvZ2dlZC1wb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0gsYUFBQTtFQUNBLGNBQUE7QUNDRDs7QURDQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSUo7O0FERkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDS0o7O0FERkU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDS0o7O0FESEU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ01KOztBREpFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDT0o7O0FETEU7RUFDRSxrQkFBQTtBQ1FKOztBRE5FO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNTSjs7QURQQTtFQUNJLFVBQUE7QUNVSjs7QURSQTtFQUNJLFdBQUE7QUNXSjs7QURUQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNZSiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvbm90LWxvZ2dlZC1wb3B1cC9ub3QtbG9nZ2VkLXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXBvcC1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYTM7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuIGhlaWdodDogMTAwdmg7XG4gb3ZlcmZsb3c6IGF1dG87XG59XG4ubWFpbi1wb3Age1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4ucG9wLWdyaWRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMGVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMGVtIDJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5oNS53aG9zLW9uLXNpdGUge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgLmNoZWNrYm94LXBvcHVwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIGltZy5jaGVjay1ib3gge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICB9XG4gIC5idXR0b24tZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnJlZ2lzdGVyLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVBREIwMDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG4gIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkubG9naW4tYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG4gIHAuY2hlY2stYm94LXRleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAucG9wLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeS5yZWdpc3Rlci1idXR0b24uY2xvc2UtYnV0dG9uIHtcbiAgICB3aWR0aDogNjAlO1xufVxuaW1nLmNyb3NzLWltYWdlIHtcbiAgICBoZWlnaHQ6IDN2aDtcbn1cbi5jcm9zcy1zaWduIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luOiAwLjhlbSAxZW0gMGVtIDBlbTtcbiAgICAvKiBtYXJnaW46IDFlbTsgKi9cbn0iLCIubWFpbi1wb3AtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhMztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1haW4tcG9wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wb3AtZ3JpZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwZW0gMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmg1Lndob3Mtb24tc2l0ZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY2hlY2tib3gtcG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW1nLmNoZWNrLWJveCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9uLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJlZ2lzdGVyLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QURCMDA7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5LmxvZ2luLWJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG5wLmNoZWNrLWJveC10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ucG9wLWNvbnRlbnQge1xuICBtYXJnaW46IDFlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkucmVnaXN0ZXItYnV0dG9uLmNsb3NlLWJ1dHRvbiB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbmltZy5jcm9zcy1pbWFnZSB7XG4gIGhlaWdodDogM3ZoO1xufVxuXG4uY3Jvc3Mtc2lnbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbjogMC44ZW0gMWVtIDBlbSAwZW07XG4gIC8qIG1hcmdpbjogMWVtOyAqL1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/welcome/not-logged-popup/not-logged-popup.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/welcome/not-logged-popup/not-logged-popup.page.ts ***!
    \*******************************************************************/

  /*! exports provided: NotLoggedPopupPage */

  /***/
  function srcAppWelcomeNotLoggedPopupNotLoggedPopupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotLoggedPopupPage", function () {
      return NotLoggedPopupPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotLoggedPopupPage = /*#__PURE__*/function () {
      function NotLoggedPopupPage() {
        _classCallCheck(this, NotLoggedPopupPage);
      }

      _createClass(NotLoggedPopupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotLoggedPopupPage;
    }();

    NotLoggedPopupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-logged-popup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-logged-popup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/not-logged-popup/not-logged-popup.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-logged-popup.page.scss */
      "./src/app/welcome/not-logged-popup/not-logged-popup.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NotLoggedPopupPage);
    /***/
  }
}]);
//# sourceMappingURL=not-logged-popup-not-logged-popup-module-es5.js.map