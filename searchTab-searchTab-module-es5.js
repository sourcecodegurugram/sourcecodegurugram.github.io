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


    __webpack_exports__["default"] = ".background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\n.card-content-font {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n}\n\n.card-one {\n  border: 1px solid #707070;\n}\n\n.tittle-card {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 27px;\n  text-align: center;\n  color: #707070;\n  padding: 1em;\n}\n\nform.form-fields {\n  margin: 2em;\n}\n\ninput {\n  /* height: 6vh; */\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 10px;\n  border: 1px solid;\n  margin-bottom: 15px;\n}\n\ntextarea {\n  border-radius: 7px;\n  margin-top: 15px;\n  border: 1px solid;\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n}\n\nselect {\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 10px;\n  border: 1px solid;\n  margin-bottom: 15px;\n  width: 55%;\n  font-size: 16px;\n  margin-left: 0px;\n  padding-left: 10px;\n}\n\n.form-label {\n  font-size: 15px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.form-label-country {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.button-container {\n  display: flex;\n  margin: 1em;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n  margin-left: 0px;\n}\n\nbutton.button-common {\n  height: 35px;\n  padding: 0px 20px;\n  border: 1px solid #707070;\n  background-color: #449D44;\n  color: white;\n  border-radius: 7px;\n  font-size: 17px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: bold;\n}\n\n.search-country {\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n  padding-left: 10px;\n}\n\n.main-register-card {\n  border: 1px solid #707070;\n}\n\n.mat-background {\n  background-color: #F5F5F5;\n}\n\n.card-one-white {\n  background-color: white;\n  padding: 1px;\n}\n\np.register-with-us {\n  padding: 10px;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.5em;\n  padding: 0 22vw 0 19vw;\n  border: none;\n  text-align: left;\n  line-height: 60px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF;\n}\n\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 2vh;\n  left: 0;\n  width: 32px;\n  height: 100%;\n}\n\n.loginBtn:focus {\n  outline: none;\n}\n\n/* Facebook */\n\n.loginBtn--facebook {\n  background-color: #4C69BA;\n}\n\n.loginBtn--facebook:before {\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png\") 6px 6px no-repeat;\n}\n\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1);\n}\n\n/* Google */\n\n.loginBtn--google {\n  background: #4184F3;\n}\n\n.loginBtn--google:before {\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png\") 6px 6px no-repeat;\n}\n\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37;\n}\n\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n\n.having-trouble {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  margin: 0.5em;\n}\n\n.upload-card-register {\n  margin: 2em;\n  border: 1px solid #F5F5F5;\n}\n\n.profile-heading {\n  background-color: #F5F5F5;\n  padding: 0.3em;\n  border-bottom: 1px solid #F5F5F5;\n}\n\np.profile-card-title {\n  font-size: 14px;\n  margin: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n\n.upload-content {\n  margin: 10px;\n}\n\n.input-choose {\n  border: none !important;\n  height: 30px;\n}\n\n.submit-button {\n  margin: 0px;\n  border: none;\n  padding: 0px 8vw;\n  height: 41px;\n  background-color: #5ADB00;\n  color: white;\n  font-size: 15px;\n}\n\np.terms {\n  padding-bottom: 10px;\n}\n\n.radio {\n  height: auto;\n  margin-right: 5px;\n  margin-top: 2px;\n  margin-left: 5vw;\n}\n\ninput[type=date]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png) no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n}\n\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url('dropdown.png') no-repeat 96% !important;\n}\n\nselect::-ms-expand {\n  display: none;\n}\n\n.label-dropdown {\n  padding-left: 10px;\n}\n\n.condition-text-container {\n  height: 20vh;\n  overflow: auto;\n  border: 1px solid #707070;\n  border-radius: 7px;\n  background-color: #F2F2F2 !important;\n}\n\np.condition-text {\n  font-size: 12px;\n  color: black;\n  text-align: justify;\n  padding: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n\n.terms-checkbox {\n  margin-left: 0px;\n  margin-bottom: 0px;\n  margin-top: 1vh;\n}\n\n.button-prev {\n  background-color: #E81E16 !important;\n}\n\n.search-main-container {\n  align-items: center;\n  justify-content: center;\n  margin: 7vw;\n}\n\np.username-serch-text {\n  text-align: center;\n  font-size: 22px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n\n.or-text {\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n  color: #707070;\n}\n\n.username-search {\n  padding-top: 6em;\n}\n\n.age-text-boxes {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.age-min {\n  width: 41% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9nb2QvTWFpbiBEYXRhL0FuZ3VsYXIgUHJvamVjdC9ub3Q0RGF0aW5nL3NyYy9hcHAvc2VhcmNoVGFiL3NlYXJjaFRhYi5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlYXJjaFRhYi9zZWFyY2hUYWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksMkNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUE7RUFFSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0YsY0FBQTtBQ0FGOztBREdBO0VBQ0kseUJBQUE7QUNBSjs7QURHQTtFQUVJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdBO0VBQ0ksV0FBQTtBQ0FKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURJRTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLHNCQUFBO0VBQ0Esb0NBQUE7QUNISjs7QURNRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE1FO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURNQTtFQUVJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0FDSko7O0FET0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRE1BO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7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ZWFyY2hUYWIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbi5jYXJkLWNvbnRlbnQtZm9udFxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcblxyXG59XHJcbi5jYXJkLW9uZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcblxyXG59XHJcbi50aXR0bGUtY2FyZFxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5mb3JtLmZvcm0tZmllbGRze1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbn1cclxuaW5wdXR7XHJcbiAgICAvKiBoZWlnaHQ6IDZ2aDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGhlaWdodDogNDdweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIHRleHRhcmVhXHJcbiAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gXHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGhlaWdodDogNDdweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbn1cclxuICAuZm9ybS1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLmZvcm0tbGFiZWwtY291bnRyeVxyXG57XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5idXR0b24uYnV0dG9uLWNvbW1vbiB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzQ0OUQ0NDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbn1cclxuLnNlYXJjaC1jb3VudHJ5XHJcbntcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLm1haW4tcmVnaXN0ZXItY2FyZFxyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG59XHJcbi5tYXQtYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcbi5jYXJkLW9uZS13aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDFweDtcclxufVxyXG5wLnJlZ2lzdGVyLXdpdGgtdXMge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5sb2dpbkJ0biB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogd2lkdGg6IDEzZW07ICAtIGFwcGx5IGZvciBmaXhlZCBzaXplICovXHJcbiAgICBtYXJnaW46IDAuNWVtO1xyXG4gICAgcGFkZGluZzogMCAyMnZ3IDAgMTl2dztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICAubG9naW5CdG46YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAydmg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBGYWNlYm9vayAqL1xyXG4gIC5sb2dpbkJ0bi0tZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNjlCQTtcclxuICB9XHJcbiAgLmxvZ2luQnRuLS1mYWNlYm9vazpiZWZvcmUge1xyXG5cclxuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvaWNvbl9mYWNlYm9vay5wbmcnKSA2cHggNnB4IG5vLXJlcGVhdDtcclxuICB9XHJcbiAgLmxvZ2luQnRuLS1mYWNlYm9vazpob3ZlcixcclxuICAubG9naW5CdG4tLWZhY2Vib29rOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QjdCRDU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzVCN0JENSwgIzQ4NjRCMSk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIEdvb2dsZSAqL1xyXG4gIC5sb2dpbkJ0bi0tZ29vZ2xlIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MTg0RjM7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bi0tZ29vZ2xlOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZ29vZ2xlLnBuZycpIDZweCA2cHggbm8tcmVwZWF0O1xyXG4gIH1cclxuICAubG9naW5CdG4tLWdvb2dsZTpob3ZlcixcclxuICAubG9naW5CdG4tLWdvb2dsZTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTc0QjM3O1xyXG4gIH1cclxuXHJcbiAgLnNvY2lhbC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxucC5vci10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxufVxyXG4uaGF2aW5nLXRyb3VibGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbn1cclxuLnVwbG9hZC1jYXJkLXJlZ2lzdGVyIHtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Y1RjVGNTtcclxufVxyXG4ucHJvZmlsZS1oZWFkaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgICBwYWRkaW5nOiAwLjNlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjVGNUY1O1xyXG59XHJcbnAucHJvZmlsZS1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLnVwbG9hZC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4uaW5wdXQtY2hvb3NlXHJcbntcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG5cclxufVxyXG4uc3VibWl0LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweCA4dnc7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbnAudGVybXMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLnJhZGlvXHJcbntcclxuaGVpZ2h0OiBhdXRvO1xyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxubWFyZ2luLXRvcDogMnB4O1xyXG5tYXJnaW4tbGVmdDogNXZ3O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vbXl3aWxkYWxiZXJ0YS5jYS9pbWFnZXMvR0ZYLU1XQS1QYXJrcy1SZXNlcnZhdGlvbnMucG5nKSBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxufVxyXG5zZWxlY3Qge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9JbWFnZXMvZHJvcGRvd24ucG5nXCIpIG5vLXJlcGVhdCA5NiUgIWltcG9ydGFudDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdDo6LW1zLWV4cGFuZCB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHJcbi5sYWJlbC1kcm9wZG93blxyXG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmNvbmRpdGlvbi10ZXh0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbn1cclxucC5jb25kaXRpb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLnRlcm1zLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbn1cclxuLmJ1dHRvbi1wcmV2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFODFFMTYgIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoLW1haW4tY29udGFpbmVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogN3Z3XHJcbn1cclxucC51c2VybmFtZS1zZXJjaC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiBcclxufVxyXG4ub3ItdGV4dFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuLnVzZXJuYW1lLXNlYXJjaFxyXG57XHJcbiAgICBwYWRkaW5nLXRvcDogNmVtO1xyXG59XHJcbi5hZ2UtdGV4dC1ib3hlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYWdlLW1pblxyXG57XHJcbiAgICB3aWR0aDogNDElICFpbXBvcnRhbnQ7XHJcbn0iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9JbWFnZXMvQmFja2dyb3VuZFRpbGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5jYXJkLWNvbnRlbnQtZm9udCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzcwNzA3MDtcbn1cblxuLmNhcmQtb25lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbn1cblxuLnRpdHRsZS1jYXJkIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbmZvcm0uZm9ybS1maWVsZHMge1xuICBtYXJnaW46IDJlbTtcbn1cblxuaW5wdXQge1xuICAvKiBoZWlnaHQ6IDZ2aDsgKi9cbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG50ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjIgIWltcG9ydGFudDtcbn1cblxuc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogNTUlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmZvcm0tbGFiZWwge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvcm0tbGFiZWwtY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMWVtO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbmJ1dHRvbi5idXR0b24tY29tbW9uIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0OUQ0NDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG59XG5cbi5zZWFyY2gtY291bnRyeSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjIgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubWFpbi1yZWdpc3Rlci1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbn1cblxuLm1hdC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmNhcmQtb25lLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxucC5yZWdpc3Rlci13aXRoLXVzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvZ2luQnRuIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiB3aWR0aDogMTNlbTsgIC0gYXBwbHkgZm9yIGZpeGVkIHNpemUgKi9cbiAgbWFyZ2luOiAwLjVlbTtcbiAgcGFkZGluZzogMCAyMnZ3IDAgMTl2dztcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5sb2dpbkJ0bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnZoO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubG9naW5CdG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBGYWNlYm9vayAqL1xuLmxvZ2luQnRuLS1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QzY5QkE7XG59XG5cbi5sb2dpbkJ0bi0tZmFjZWJvb2s6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvaWNvbl9mYWNlYm9vay5wbmdcIikgNnB4IDZweCBuby1yZXBlYXQ7XG59XG5cbi5sb2dpbkJ0bi0tZmFjZWJvb2s6aG92ZXIsXG4ubG9naW5CdG4tLWZhY2Vib29rOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCN0JENTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM1QjdCRDUsICM0ODY0QjEpO1xufVxuXG4vKiBHb29nbGUgKi9cbi5sb2dpbkJ0bi0tZ29vZ2xlIHtcbiAgYmFja2dyb3VuZDogIzQxODRGMztcbn1cblxuLmxvZ2luQnRuLS1nb29nbGU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvaWNvbl9nb29nbGUucG5nXCIpIDZweCA2cHggbm8tcmVwZWF0O1xufVxuXG4ubG9naW5CdG4tLWdvb2dsZTpob3Zlcixcbi5sb2dpbkJ0bi0tZ29vZ2xlOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI0U3NEIzNztcbn1cblxuLnNvY2lhbC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxucC5vci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI3cHg7XG59XG5cbi5oYXZpbmctdHJvdWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbjogMC41ZW07XG59XG5cbi51cGxvYWQtY2FyZC1yZWdpc3RlciB7XG4gIG1hcmdpbjogMmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjVGNUY1O1xufVxuXG4ucHJvZmlsZS1oZWFkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgcGFkZGluZzogMC4zZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjVGNUY1O1xufVxuXG5wLnByb2ZpbGUtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnVwbG9hZC1jb250ZW50IHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uaW5wdXQtY2hvb3NlIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwcHggOHZ3O1xuICBoZWlnaHQ6IDQxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QURCMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5wLnRlcm1zIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5yYWRpbyB7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbn1cblxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9teXdpbGRhbGJlcnRhLmNhL2ltYWdlcy9HRlgtTVdBLVBhcmtzLVJlc2VydmF0aW9ucy5wbmcpIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xufVxuXG5zZWxlY3Qge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL0ltYWdlcy9kcm9wZG93bi5wbmdcIikgbm8tcmVwZWF0IDk2JSAhaW1wb3J0YW50O1xufVxuXG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGFiZWwtZHJvcGRvd24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb25kaXRpb24tdGV4dC1jb250YWluZXIge1xuICBoZWlnaHQ6IDIwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjIgIWltcG9ydGFudDtcbn1cblxucC5jb25kaXRpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnRlcm1zLWNoZWNrYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAxdmg7XG59XG5cbi5idXR0b24tcHJldiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFODFFMTYgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1tYWluLWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDd2dztcbn1cblxucC51c2VybmFtZS1zZXJjaC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ub3ItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi51c2VybmFtZS1zZWFyY2gge1xuICBwYWRkaW5nLXRvcDogNmVtO1xufVxuXG4uYWdlLXRleHQtYm94ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZ2UtbWluIHtcbiAgd2lkdGg6IDQxJSAhaW1wb3J0YW50O1xufSJdfQ== */";
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