function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searchTab-searchTab-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/searchTab/searchTab.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/searchTab/searchTab.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchTabSearchTabPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"search-main-container\">\n    <div class=\"username-search\">\n      <p class=\"username-serch-text\">Username Search</p>\n      <input type=\"text\" id=\"gender\" name=\"gender\" class=\"form-field-zip-code search-country\">\n      <p class=\"caution\">Enter atleast 4 characters of the username</p>\n      <div class=\"button-container\">\n        <button type=\"button\" class=\"button-common\" routerLink=\"/search-result\">Search</button>\n      </div>\n    </div>\n    <p class=\"or-text\">OR</p>\n    <p class=\"username-serch-text\">Advanced Search</p>\n\n    <label for=\"name\" class=\"form-label\">Zip/Postalcode</label><br>\n    <input type=\"text\" id=\"Postalcode\" name=\"Postalcode\" class=\"form-field-zip-code search-country\"><br>\n\n    <label class=\"form-label\">Distance</label><br>\n    <select id=\"alcohol\" class=\"country-field search-country\">\n      <option value=\"week\">30 miles</option>\n      <option value=\"daily\">20 miles</option>\n    </select>\n\n    <label class=\"form-label\">Gender</label><br>\n    <select id=\"alcohol\" class=\"country-field search-country\">\n      <option value=\"week\">Male</option>\n      <option value=\"daily\">Female</option>\n    </select><br>\n\n    <label class=\"form-label\">Age</label>\n<div class=\"age-text-boxes\">\n \n  <select id=\"alcohol\" class=\"country-field search-country age-min\">\n    <option value=\"week\">10</option>\n    <option value=\"daily\">15</option>\n  </select>\n\n  <select id=\"alcohol\" class=\"country-field search-country age-min\">\n    <option value=\"week\">20</option>\n    <option value=\"daily\">25</option>\n  </select>\n\n</div>\n\n    <label class=\"form-label\">Activities/Interest</label><br>\n    <mat-form-field>\n      <mat-select multiple>\n        <mat-option *ngFor=\"let activity of activityList\" [value]=\"activity\">{{activity}}</mat-option>\n      </mat-select>\n    </mat-form-field><br>\n\n    <div class=\"radio-tabs\">\n      <p>I'm Looking To Meet</p>\n      <input type=\"radio\" id=\"male\" name=\"gender\" value=\"male\" class=\"radio\">\n      <label for=\"male\">- Any -</label><br>\n      <input type=\"radio\" id=\"female\" name=\"gender\" value=\"female\" class=\"radio\">\n      <label for=\"female\">Does not Matter</label><br>\n      <input type=\"radio\" id=\"other\" name=\"gender\" value=\"other\" class=\"radio\">\n      <label for=\"other\">A few good friends</label><br>\n      <input type=\"radio\" id=\"diverse\" name=\"diverse\" value=\"diverse\" class=\"radio\">\n      <label for=\"diverse\">A lot of acquaintances</label>\n    </div>\n\n    <label class=\"form-label\">Sort By</label><br>\n    <select id=\"alcohol\" class=\"country-field search-country\">\n      <option value=\"week\">Newest Member</option>\n      <option value=\"daily\">Oldes Member</option>\n    </select>\n    <div class=\"button-container\">\n      <button type=\"button\" class=\"button-common button-prev\">Reset</button>\n      <button type=\"button\" class=\"button-common\" routerLink=\"/search-result\">Search</button>\n\n\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/searchTab/searchTab-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/searchTab/searchTab-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SearchTabPageRoutingModule */

  /***/
  function srcAppSearchTabSearchTabRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchTabPageRoutingModule", function () {
      return SearchTabPageRoutingModule;
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


    var _searchTab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./searchTab.page */
    "./src/app/searchTab/searchTab.page.ts");

    var routes = [{
      path: '',
      component: _searchTab_page__WEBPACK_IMPORTED_MODULE_3__["SearchTabPage"]
    }];

    var SearchTabPageRoutingModule = function SearchTabPageRoutingModule() {
      _classCallCheck(this, SearchTabPageRoutingModule);
    };

    SearchTabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SearchTabPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/searchTab/searchTab.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/searchTab/searchTab.module.ts ***!
    \***********************************************/

  /*! exports provided: SearchTabPageModule */

  /***/
  function srcAppSearchTabSearchTabModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchTabPageModule", function () {
      return SearchTabPageModule;
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


    var _searchTab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./searchTab-routing.module */
    "./src/app/searchTab/searchTab-routing.module.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _searchTab_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./searchTab.page */
    "./src/app/searchTab/searchTab.page.ts");

    var SearchTabPageModule = function SearchTabPageModule() {
      _classCallCheck(this, SearchTabPageModule);
    };

    SearchTabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _searchTab_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchTabPageRoutingModule"]],
      declarations: [_searchTab_page__WEBPACK_IMPORTED_MODULE_7__["SearchTabPage"]]
    })], SearchTabPageModule);
    /***/
  },

  /***/
  "./src/app/searchTab/searchTab.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/searchTab/searchTab.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchTabSearchTabPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\n.card-content-font {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n}\n\n.card-one {\n  border: 1px solid #707070;\n}\n\n.tittle-card {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 27px;\n  text-align: center;\n  color: #707070;\n  padding: 1em;\n}\n\nform.form-fields {\n  margin: 2em;\n}\n\ninput {\n  /* height: 6vh; */\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 10px;\n  border: 1px solid;\n  margin-bottom: 15px;\n}\n\ntextarea {\n  border-radius: 7px;\n  margin-top: 15px;\n  border: 1px solid;\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n}\n\nselect {\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 10px;\n  border: 1px solid;\n  margin-bottom: 15px;\n  width: 55%;\n  font-size: 16px;\n  margin-left: 0px;\n  padding-left: 10px;\n}\n\n.form-label {\n  font-size: 15px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.form-label-country {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.button-container {\n  display: flex;\n  margin: 1em;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n  margin-left: 0px;\n}\n\nbutton.button-common {\n  height: 35px;\n  padding: 0px 20px;\n  border: 1px solid #707070;\n  background-color: #449D44;\n  color: white;\n  border-radius: 7px;\n  font-size: 17px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: bold;\n}\n\n.search-country {\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n  padding-left: 10px;\n}\n\n.main-register-card {\n  border: 1px solid #707070;\n}\n\n.mat-background {\n  background-color: #F5F5F5;\n}\n\n.card-one-white {\n  background-color: white;\n  padding: 1px;\n}\n\np.register-with-us {\n  padding: 10px;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.5em;\n  padding: 0 22vw 0 19vw;\n  border: none;\n  text-align: left;\n  line-height: 60px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF;\n}\n\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 2vh;\n  left: 0;\n  width: 32px;\n  height: 100%;\n}\n\n.loginBtn:focus {\n  outline: none;\n}\n\n/* Facebook */\n\n.loginBtn--facebook {\n  background-color: #4C69BA;\n}\n\n.loginBtn--facebook:before {\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png\") 6px 6px no-repeat;\n}\n\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1);\n}\n\n/* Google */\n\n.loginBtn--google {\n  background: #4184F3;\n}\n\n.loginBtn--google:before {\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png\") 6px 6px no-repeat;\n}\n\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37;\n}\n\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n\n.having-trouble {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  margin: 0.5em;\n}\n\n.upload-card-register {\n  margin: 2em;\n  border: 1px solid #F5F5F5;\n}\n\n.profile-heading {\n  background-color: #F5F5F5;\n  padding: 0.3em;\n  border-bottom: 1px solid #F5F5F5;\n}\n\np.profile-card-title {\n  font-size: 14px;\n  margin: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n\n.upload-content {\n  margin: 10px;\n}\n\n.input-choose {\n  border: none !important;\n  height: 30px;\n}\n\n.submit-button {\n  margin: 0px;\n  border: none;\n  padding: 0px 8vw;\n  height: 41px;\n  background-color: #5ADB00;\n  color: white;\n  font-size: 15px;\n}\n\np.terms {\n  padding-bottom: 10px;\n}\n\n.radio {\n  height: auto;\n  margin-right: 5px;\n  margin-top: 2px;\n  margin-left: 5vw;\n}\n\ninput[type=date]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png) no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n}\n\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url('dropdown.png') no-repeat 96% !important;\n}\n\nselect::-ms-expand {\n  display: none;\n}\n\n.label-dropdown {\n  padding-left: 10px;\n}\n\n.condition-text-container {\n  height: 20vh;\n  overflow: auto;\n  border: 1px solid #707070;\n  border-radius: 7px;\n  background-color: #F2F2F2 !important;\n}\n\np.condition-text {\n  font-size: 12px;\n  color: black;\n  text-align: justify;\n  padding: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n\n.terms-checkbox {\n  margin-left: 0px;\n  margin-bottom: 0px;\n  margin-top: 1vh;\n}\n\n.button-prev {\n  background-color: #E81E16 !important;\n}\n\n.search-main-container {\n  align-items: center;\n  justify-content: center;\n  margin: 7vw;\n}\n\np.username-serch-text {\n  text-align: center;\n  font-size: 22px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n\n.or-text {\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n  color: #707070;\n}\n\n.username-search {\n  padding-top: 6em;\n}\n\n.age-text-boxes {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.age-min {\n  width: 41% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9nb2QvTWFpbiBEYXRhL0FuZ3VsYXIgUHJvamVjdC9ub3Q0RGF0aW5nL3NyYy9hcHAvc2VhcmNoVGFiL3NlYXJjaFRhYi5wYWdlLnNjc3MiLCJhcHAvc2VhcmNoVGFiL3NlYXJjaFRhYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFQTtFQUVJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDRixjQUFBO0FDQUY7O0FER0E7RUFDSSx5QkFBQTtBQ0FKOztBREdBO0VBRUksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDREo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRElFO0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsc0JBQUE7RUFDQSxvQ0FBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUU7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRE1BO0VBRUksZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7QUNKSjs7QURPQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSko7O0FETUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNB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LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL0ltYWdlcy9CYWNrZ3JvdW5kVGlsZS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4uY2FyZC1jb250ZW50LWZvbnRcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG5cclxufVxyXG4uY2FyZC1vbmV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG5cclxufVxyXG4udGl0dGxlLWNhcmRcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn1cclxuZm9ybS5mb3JtLWZpZWxkc3tcclxuICAgIG1hcmdpbjogMmVtO1xyXG59XHJcbmlucHV0e1xyXG4gICAgLyogaGVpZ2h0OiA2dmg7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICB0ZXh0YXJlYVxyXG4gIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuIFxyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHNlbGVjdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG59XHJcbiAgLmZvcm0tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcbi5mb3JtLWxhYmVsLWNvdW50cnlcclxue1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuYnV0dG9uLmJ1dHRvbi1jb21tb24ge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM0NDlENDQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBib2xkO1xyXG59XHJcbi5zZWFyY2gtY291bnRyeVxyXG57XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5tYWluLXJlZ2lzdGVyLWNhcmRcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxufVxyXG4ubWF0LWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG4uY2FyZC1vbmUtd2hpdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbn1cclxucC5yZWdpc3Rlci13aXRoLXVzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubG9naW5CdG4ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIHdpZHRoOiAxM2VtOyAgLSBhcHBseSBmb3IgZml4ZWQgc2l6ZSAqL1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICAgIHBhZGRpbmc6IDAgMjJ2dyAwIDE5dnc7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICB9XHJcbiAgLmxvZ2luQnRuOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnZoO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAubG9naW5CdG46Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogRmFjZWJvb2sgKi9cclxuICAubG9naW5CdG4tLWZhY2Vib29rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0QzY5QkE7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bi0tZmFjZWJvb2s6YmVmb3JlIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZmFjZWJvb2sucG5nJykgNnB4IDZweCBuby1yZXBlYXQ7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bi0tZmFjZWJvb2s6aG92ZXIsXHJcbiAgLmxvZ2luQnRuLS1mYWNlYm9vazpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3QkQ1O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM1QjdCRDUsICM0ODY0QjEpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBHb29nbGUgKi9cclxuICAubG9naW5CdG4tLWdvb2dsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDE4NEYzO1xyXG4gIH1cclxuICAubG9naW5CdG4tLWdvb2dsZTpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9pY29uX2dvb2dsZS5wbmcnKSA2cHggNnB4IG5vLXJlcGVhdDtcclxuICB9XHJcbiAgLmxvZ2luQnRuLS1nb29nbGU6aG92ZXIsXHJcbiAgLmxvZ2luQnRuLS1nb29nbGU6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogI0U3NEIzNztcclxuICB9XHJcblxyXG4gIC5zb2NpYWwtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbnAub3ItdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbn1cclxuLmhhdmluZy10cm91YmxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW46IDAuNWVtO1xyXG59XHJcbi51cGxvYWQtY2FyZC1yZWdpc3RlciB7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGNUY1RjU7XHJcbn1cclxuLnByb2ZpbGUtaGVhZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgcGFkZGluZzogMC4zZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y1RjVGNTtcclxufVxyXG5wLnByb2ZpbGUtY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi51cGxvYWQtY29udGVudCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmlucHV0LWNob29zZVxyXG57XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzBweDtcclxuXHJcbn1cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHggOHZ3O1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVBREIwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5wLnRlcm1zIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5yYWRpb1xyXG57XHJcbmhlaWdodDogYXV0bztcclxubWFyZ2luLXJpZ2h0OiA1cHg7XHJcbm1hcmdpbi10b3A6IDJweDtcclxubWFyZ2luLWxlZnQ6IDV2dztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL215d2lsZGFsYmVydGEuY2EvaW1hZ2VzL0dGWC1NV0EtUGFya3MtUmVzZXJ2YXRpb25zLnBuZykgbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbn1cclxuc2VsZWN0IHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvSW1hZ2VzL2Ryb3Bkb3duLnBuZ1wiKSBuby1yZXBlYXQgOTYlICFpbXBvcnRhbnQ7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICBzZWxlY3Q6Oi1tcy1leHBhbmQgeyBkaXNwbGF5OiBub25lOyB9XHJcblxyXG4ubGFiZWwtZHJvcGRvd25cclxue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5jb25kaXRpb24tdGV4dC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xyXG59XHJcbnAuY29uZGl0aW9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi50ZXJtcy1jaGVja2JveCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXZoO1xyXG59XHJcbi5idXR0b24tcHJldiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTgxRTE2ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaC1tYWluLWNvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDd2d1xyXG59XHJcbnAudXNlcm5hbWUtc2VyY2gtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gXHJcbn1cclxuLm9yLXRleHRcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcbi51c2VybmFtZS1zZWFyY2hcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDZlbTtcclxufVxyXG4uYWdlLXRleHQtYm94ZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmFnZS1taW5cclxue1xyXG4gICAgd2lkdGg6IDQxJSAhaW1wb3J0YW50O1xyXG59IiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uY2FyZC1jb250ZW50LWZvbnQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5jYXJkLW9uZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG59XG5cbi50aXR0bGUtY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgcGFkZGluZzogMWVtO1xufVxuXG5mb3JtLmZvcm0tZmllbGRzIHtcbiAgbWFyZ2luOiAyZW07XG59XG5cbmlucHV0IHtcbiAgLyogaGVpZ2h0OiA2dmg7ICovXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxudGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyICFpbXBvcnRhbnQ7XG59XG5cbnNlbGVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDU1JTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3JtLWxhYmVsLWNvdW50cnkge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDFlbTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG5idXR0b24uYnV0dG9uLWNvbW1vbiB7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDlENDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBib2xkO1xufVxuXG4uc2VhcmNoLWNvdW50cnkge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLm1haW4tcmVnaXN0ZXItY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG59XG5cbi5tYXQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jYXJkLW9uZS13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbnAucmVnaXN0ZXItd2l0aC11cyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2dpbkJ0biB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogd2lkdGg6IDEzZW07ICAtIGFwcGx5IGZvciBmaXhlZCBzaXplICovXG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDAgMjJ2dyAwIDE5dnc7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4ubG9naW5CdG46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJ2aDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvZ2luQnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogRmFjZWJvb2sgKi9cbi5sb2dpbkJ0bi0tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM2OUJBO1xufVxuXG4ubG9naW5CdG4tLWZhY2Vib29rOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZmFjZWJvb2sucG5nXCIpIDZweCA2cHggbm8tcmVwZWF0O1xufVxuXG4ubG9naW5CdG4tLWZhY2Vib29rOmhvdmVyLFxuLmxvZ2luQnRuLS1mYWNlYm9vazpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QjdCRDU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNUI3QkQ1LCAjNDg2NEIxKTtcbn1cblxuLyogR29vZ2xlICovXG4ubG9naW5CdG4tLWdvb2dsZSB7XG4gIGJhY2tncm91bmQ6ICM0MTg0RjM7XG59XG5cbi5sb2dpbkJ0bi0tZ29vZ2xlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZ29vZ2xlLnBuZ1wiKSA2cHggNnB4IG5vLXJlcGVhdDtcbn1cblxuLmxvZ2luQnRuLS1nb29nbGU6aG92ZXIsXG4ubG9naW5CdG4tLWdvb2dsZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNFNzRCMzc7XG59XG5cbi5zb2NpYWwtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnAub3ItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyN3B4O1xufVxuXG4uaGF2aW5nLXRyb3VibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW46IDAuNWVtO1xufVxuXG4udXBsb2FkLWNhcmQtcmVnaXN0ZXIge1xuICBtYXJnaW46IDJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Y1RjVGNTtcbn1cblxuLnByb2ZpbGUtaGVhZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gIHBhZGRpbmc6IDAuM2VtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y1RjVGNTtcbn1cblxucC5wcm9maWxlLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi51cGxvYWQtY29udGVudCB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmlucHV0LWNob29zZSB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMHB4IDh2dztcbiAgaGVpZ2h0OiA0MXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxucC50ZXJtcyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucmFkaW8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG59XG5cbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vbXl3aWxkYWxiZXJ0YS5jYS9pbWFnZXMvR0ZYLU1XQS1QYXJrcy1SZXNlcnZhdGlvbnMucG5nKSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbn1cblxuc2VsZWN0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9JbWFnZXMvZHJvcGRvd24ucG5nXCIpIG5vLXJlcGVhdCA5NiUgIWltcG9ydGFudDtcbn1cblxuc2VsZWN0OjotbXMtZXhwYW5kIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxhYmVsLWRyb3Bkb3duIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29uZGl0aW9uLXRleHQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAyMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyICFpbXBvcnRhbnQ7XG59XG5cbnAuY29uZGl0aW9uLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi50ZXJtcy1jaGVja2JveCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMXZoO1xufVxuXG4uYnV0dG9uLXByZXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTgxRTE2ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtbWFpbi1jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA3dnc7XG59XG5cbnAudXNlcm5hbWUtc2VyY2gtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLm9yLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuXG4udXNlcm5hbWUtc2VhcmNoIHtcbiAgcGFkZGluZy10b3A6IDZlbTtcbn1cblxuLmFnZS10ZXh0LWJveGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWdlLW1pbiB7XG4gIHdpZHRoOiA0MSUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/searchTab/searchTab.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/searchTab/searchTab.page.ts ***!
    \*********************************************/

  /*! exports provided: SearchTabPage */

  /***/
  function srcAppSearchTabSearchTabPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchTabPage", function () {
      return SearchTabPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var SearchTabPage = /*#__PURE__*/function () {
      function SearchTabPage() {
        _classCallCheck(this, SearchTabPage);

        this.activity = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.activityList = ['Yoga', 'Cooking', 'Watching Movies'];
      }

      _createClass(SearchTabPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchTabPage;
    }();

    SearchTabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-searchTab',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./searchTab.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/searchTab/searchTab.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./searchTab.page.scss */
      "./src/app/searchTab/searchTab.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SearchTabPage);
    /***/
  }
}]);
//# sourceMappingURL=searchTab-searchTab-module-es5.js.map