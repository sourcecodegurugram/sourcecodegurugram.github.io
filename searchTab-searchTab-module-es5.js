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


    __webpack_exports__["default"] = "<ion-content class=\"background-card\">\n  <div class=\"search-main-container\">\n    <div class=\"username-search\">\n      <input type=\"text\" id=\"gender\" name=\"gender\" class=\"form-field-zip-code search-country\">\n      <p class=\"caution\">Enter atleast 4 characters of the username</p>\n      <div class=\"button-container\">\n        <button type=\"button\" class=\"button-common\" routerLink=\"/search-result\">Search</button>\n      </div>\n    </div>\n    <p class=\"or-text\">OR</p>\n    <p class=\"username-serch-text\">Advanced Search</p>\n\n    <label for=\"name\" class=\"form-label\">Zip/Postalcode</label><br>\n    <input type=\"text\" id=\"Postalcode\" name=\"Postalcode\" class=\"form-field-zip-code search-country\"><br>\n\n    <label class=\"form-label\">Distance</label><br>\n    <select id=\"alcohol\" class=\"country-field search-country\">\n      <option value=\"week\">30 miles</option>\n      <option value=\"daily\">20 miles</option>\n    </select>\n\n    <label class=\"form-label\">Gender</label><br>\n    <select id=\"alcohol\" class=\"country-field search-country\">\n      <option value=\"week\">Male</option>\n      <option value=\"daily\">Female</option>\n    </select><br>\n\n    <label class=\"form-label\">Age</label>\n<div class=\"age-text-boxes\">\n \n  <select id=\"alcohol\" class=\"country-field search-country age-min\">\n    <option value=\"week\">10</option>\n    <option value=\"daily\">15</option>\n  </select>\n\n  <select id=\"alcohol\" class=\"country-field search-country age-min\">\n    <option value=\"week\">20</option>\n    <option value=\"daily\">25</option>\n  </select>\n\n</div>\n\n    <label class=\"form-label\">Activities/Interest</label><br>\n    <mat-form-field>\n      <mat-select multiple>\n        <mat-option *ngFor=\"let activity of activityList\" [value]=\"activity\">{{activity}}</mat-option>\n      </mat-select>\n    </mat-form-field><br>\n\n    <div class=\"radio-tabs\">\n      <p>I'm Looking To Meet</p>\n      <input type=\"radio\" id=\"male\" name=\"gender\" value=\"male\" class=\"radio\">\n      <label for=\"male\">- Any -</label><br>\n      <input type=\"radio\" id=\"female\" name=\"gender\" value=\"female\" class=\"radio\">\n      <label for=\"female\">Does not Matter</label><br>\n      <input type=\"radio\" id=\"other\" name=\"gender\" value=\"other\" class=\"radio\">\n      <label for=\"other\">A few good friends</label><br>\n      <input type=\"radio\" id=\"diverse\" name=\"diverse\" value=\"diverse\" class=\"radio\">\n      <label for=\"diverse\">A lot of acquaintances</label>\n    </div>\n\n    <label class=\"form-label\">Sort By</label><br>\n    <select id=\"alcohol\" class=\"country-field search-country\">\n      <option value=\"week\">Newest Member</option>\n      <option value=\"daily\">Oldes Member</option>\n    </select>\n    <div class=\"button-container\">\n      <button type=\"button\" class=\"button-common button-prev\">Reset</button>\n      <button type=\"button\" class=\"button-common\" routerLink=\"/search-result\">Search</button>\n\n\n    </div>\n  </div>\n</ion-content>";
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


    __webpack_exports__["default"] = ".background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\n.card-content-font {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n}\n\n.card-one {\n  border: 1px solid #707070;\n}\n\n.tittle-card {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 27px;\n  text-align: center;\n  color: #707070;\n  padding: 1em;\n}\n\nform.form-fields {\n  margin: 2em;\n}\n\ninput {\n  /* height: 6vh; */\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 10px;\n  border: 1px solid;\n  margin-bottom: 15px;\n}\n\ntextarea {\n  border-radius: 7px;\n  margin-top: 15px;\n  border: 1px solid;\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n}\n\nselect {\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 10px;\n  border: 1px solid;\n  margin-bottom: 15px;\n  width: 55%;\n  font-size: 16px;\n  margin-left: 0px;\n  padding-left: 10px;\n}\n\n.form-label {\n  font-size: 15px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.form-label-country {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.button-container {\n  display: flex;\n  margin: 1em;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n  margin-left: 0px;\n}\n\nbutton.button-common {\n  height: 35px;\n  padding: 0px 20px;\n  border: 1px solid #707070;\n  background-color: #449D44;\n  color: white;\n  border-radius: 7px;\n  font-size: 17px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: bold;\n}\n\n.search-country {\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n  padding-left: 10px;\n}\n\n.main-register-card {\n  border: 1px solid #707070;\n}\n\n.mat-background {\n  background-color: #F5F5F5;\n}\n\n.card-one-white {\n  background-color: white;\n  padding: 1px;\n}\n\np.register-with-us {\n  padding: 10px;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.5em;\n  padding: 0 22vw 0 19vw;\n  border: none;\n  text-align: left;\n  line-height: 60px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF;\n}\n\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 2vh;\n  left: 0;\n  width: 32px;\n  height: 100%;\n}\n\n.loginBtn:focus {\n  outline: none;\n}\n\n/* Facebook */\n\n.loginBtn--facebook {\n  background-color: #4C69BA;\n}\n\n.loginBtn--facebook:before {\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png\") 6px 6px no-repeat;\n}\n\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1);\n}\n\n/* Google */\n\n.loginBtn--google {\n  background: #4184F3;\n}\n\n.loginBtn--google:before {\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png\") 6px 6px no-repeat;\n}\n\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37;\n}\n\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n\n.having-trouble {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  margin: 0.5em;\n}\n\n.upload-card-register {\n  margin: 2em;\n  border: 1px solid #F5F5F5;\n}\n\n.profile-heading {\n  background-color: #F5F5F5;\n  padding: 0.3em;\n  border-bottom: 1px solid #F5F5F5;\n}\n\np.profile-card-title {\n  font-size: 14px;\n  margin: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n\n.upload-content {\n  margin: 10px;\n}\n\n.input-choose {\n  border: none !important;\n  height: 30px;\n}\n\n.submit-button {\n  margin: 0px;\n  border: none;\n  padding: 0px 8vw;\n  height: 41px;\n  background-color: #5ADB00;\n  color: white;\n  font-size: 15px;\n}\n\np.terms {\n  padding-bottom: 10px;\n}\n\n.radio {\n  height: auto;\n  margin-right: 5px;\n  margin-top: 2px;\n  margin-left: 5vw;\n}\n\ninput[type=date]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png) no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n}\n\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url('dropdown.png') no-repeat 96% !important;\n}\n\nselect::-ms-expand {\n  display: none;\n}\n\n.label-dropdown {\n  padding-left: 10px;\n}\n\n.condition-text-container {\n  height: 20vh;\n  overflow: auto;\n  border: 1px solid #707070;\n  border-radius: 7px;\n  background-color: #F2F2F2 !important;\n}\n\np.condition-text {\n  font-size: 12px;\n  color: black;\n  text-align: justify;\n  padding: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n\n.terms-checkbox {\n  margin-left: 0px;\n  margin-bottom: 0px;\n  margin-top: 1vh;\n}\n\n.button-prev {\n  background-color: #E81E16 !important;\n}\n\n.search-main-container {\n  align-items: center;\n  justify-content: center;\n  margin: 7vw;\n}\n\np.username-serch-text {\n  text-align: center;\n  font-size: 22px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n\n.or-text {\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n  color: #707070;\n}\n\n.username-search {\n  padding-top: 6em;\n}\n\n.age-text-boxes {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.age-min {\n  width: 41% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoVGFiL0s6XFxBbmd1bGFyIFByb2plY3RcXG5vdDREYXRpbmcvc3JjXFxhcHBcXHNlYXJjaFRhYlxcc2VhcmNoVGFiLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VhcmNoVGFiL3NlYXJjaFRhYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFQTtFQUVJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDRixjQUFBO0FDQUY7O0FER0E7RUFDSSx5QkFBQTtBQ0FKOztBREdBO0VBRUksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDREo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRElFO0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsc0JBQUE7RUFDQSxvQ0FBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUU7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRE1BO0VBRUksZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7QUNKSjs7QURPQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSko7O0FETUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Es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VGFiL3NlYXJjaFRhYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9JbWFnZXMvQmFja2dyb3VuZFRpbGUucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuLmNhcmQtY29udGVudC1mb250XHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuXHJcbn1cclxuLmNhcmQtb25le1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuXHJcbn1cclxuLnRpdHRsZS1jYXJkXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcbmZvcm0uZm9ybS1maWVsZHN7XHJcbiAgICBtYXJnaW46IDJlbTtcclxufVxyXG5pbnB1dHtcclxuICAgIC8qIGhlaWdodDogNnZoOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgdGV4dGFyZWFcclxuICB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiBcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBzZWxlY3Qge1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxufVxyXG4gIC5mb3JtLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG4uZm9ybS1sYWJlbC1jb3VudHJ5XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcbmJ1dHRvbi5idXR0b24tY29tbW9uIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjNDQ5RDQ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogYm9sZDtcclxufVxyXG4uc2VhcmNoLWNvdW50cnlcclxue1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjIgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4ubWFpbi1yZWdpc3Rlci1jYXJkXHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbn1cclxuLm1hdC1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuLmNhcmQtb25lLXdoaXRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG59XHJcbnAucmVnaXN0ZXItd2l0aC11cyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmxvZ2luQnRuIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiB3aWR0aDogMTNlbTsgIC0gYXBwbHkgZm9yIGZpeGVkIHNpemUgKi9cclxuICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICBwYWRkaW5nOiAwIDIydncgMCAxOXZ3O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDJ2aDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLmxvZ2luQnRuOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIEZhY2Vib29rICovXHJcbiAgLmxvZ2luQnRuLS1mYWNlYm9vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM2OUJBO1xyXG4gIH1cclxuICAubG9naW5CdG4tLWZhY2Vib29rOmJlZm9yZSB7XHJcblxyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9pY29uX2ZhY2Vib29rLnBuZycpIDZweCA2cHggbm8tcmVwZWF0O1xyXG4gIH1cclxuICAubG9naW5CdG4tLWZhY2Vib29rOmhvdmVyLFxyXG4gIC5sb2dpbkJ0bi0tZmFjZWJvb2s6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVCN0JENTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNUI3QkQ1LCAjNDg2NEIxKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogR29vZ2xlICovXHJcbiAgLmxvZ2luQnRuLS1nb29nbGUge1xyXG4gICAgYmFja2dyb3VuZDogIzQxODRGMztcclxuICB9XHJcbiAgLmxvZ2luQnRuLS1nb29nbGU6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvaWNvbl9nb29nbGUucG5nJykgNnB4IDZweCBuby1yZXBlYXQ7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bi0tZ29vZ2xlOmhvdmVyLFxyXG4gIC5sb2dpbkJ0bi0tZ29vZ2xlOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICNFNzRCMzc7XHJcbiAgfVxyXG5cclxuICAuc29jaWFsLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5wLm9yLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG59XHJcbi5oYXZpbmctdHJvdWJsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxufVxyXG4udXBsb2FkLWNhcmQtcmVnaXN0ZXIge1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjVGNUY1O1xyXG59XHJcbi5wcm9maWxlLWhlYWRpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICAgIHBhZGRpbmc6IDAuM2VtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUY1RjU7XHJcbn1cclxucC5wcm9maWxlLWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4udXBsb2FkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5pbnB1dC1jaG9vc2Vcclxue1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcblxyXG59XHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDh2dztcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QURCMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxucC50ZXJtcyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4ucmFkaW9cclxue1xyXG5oZWlnaHQ6IGF1dG87XHJcbm1hcmdpbi1yaWdodDogNXB4O1xyXG5tYXJnaW4tdG9wOiAycHg7XHJcbm1hcmdpbi1sZWZ0OiA1dnc7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9teXdpbGRhbGJlcnRhLmNhL2ltYWdlcy9HRlgtTVdBLVBhcmtzLVJlc2VydmF0aW9ucy5wbmcpIG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL0ltYWdlcy9kcm9wZG93bi5wbmdcIikgbm8tcmVwZWF0IDk2JSAhaW1wb3J0YW50O1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgc2VsZWN0OjotbXMtZXhwYW5kIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLmxhYmVsLWRyb3Bkb3duXHJcbntcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4uY29uZGl0aW9uLXRleHQtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMjB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjIgIWltcG9ydGFudDtcclxufVxyXG5wLmNvbmRpdGlvbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4udGVybXMtY2hlY2tib3gge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxufVxyXG4uYnV0dG9uLXByZXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUUxNiAhaW1wb3J0YW50O1xyXG59XHJcbi5zZWFyY2gtbWFpbi1jb250YWluZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA3dndcclxufVxyXG5wLnVzZXJuYW1lLXNlcmNoLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuIFxyXG59XHJcbi5vci10ZXh0XHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG4udXNlcm5hbWUtc2VhcmNoXHJcbntcclxuICAgIHBhZGRpbmctdG9wOiA2ZW07XHJcbn1cclxuLmFnZS10ZXh0LWJveGVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5hZ2UtbWluXHJcbntcclxuICAgIHdpZHRoOiA0MSUgIWltcG9ydGFudDtcclxufSIsIi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL0ltYWdlcy9CYWNrZ3JvdW5kVGlsZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLmNhcmQtY29udGVudC1mb250IHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuXG4uY2FyZC1vbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xufVxuXG4udGl0dGxlLWNhcmQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuZm9ybS5mb3JtLWZpZWxkcyB7XG4gIG1hcmdpbjogMmVtO1xufVxuXG5pbnB1dCB7XG4gIC8qIGhlaWdodDogNnZoOyAqL1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDdweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbnRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xufVxuXG5zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDdweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHdpZHRoOiA1NSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9ybS1sYWJlbC1jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxZW07XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuYnV0dG9uLmJ1dHRvbi1jb21tb24ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ5RDQ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogYm9sZDtcbn1cblxuLnNlYXJjaC1jb3VudHJ5IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5tYWluLXJlZ2lzdGVyLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xufVxuXG4ubWF0LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG4uY2FyZC1vbmUtd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMXB4O1xufVxuXG5wLnJlZ2lzdGVyLXdpdGgtdXMge1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9naW5CdG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIHdpZHRoOiAxM2VtOyAgLSBhcHBseSBmb3IgZml4ZWQgc2l6ZSAqL1xuICBtYXJnaW46IDAuNWVtO1xuICBwYWRkaW5nOiAwIDIydncgMCAxOXZ3O1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmxvZ2luQnRuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAydmg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sb2dpbkJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIEZhY2Vib29rICovXG4ubG9naW5CdG4tLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDNjlCQTtcbn1cblxuLmxvZ2luQnRuLS1mYWNlYm9vazpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9pY29uX2ZhY2Vib29rLnBuZ1wiKSA2cHggNnB4IG5vLXJlcGVhdDtcbn1cblxuLmxvZ2luQnRuLS1mYWNlYm9vazpob3Zlcixcbi5sb2dpbkJ0bi0tZmFjZWJvb2s6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3QkQ1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzVCN0JENSwgIzQ4NjRCMSk7XG59XG5cbi8qIEdvb2dsZSAqL1xuLmxvZ2luQnRuLS1nb29nbGUge1xuICBiYWNrZ3JvdW5kOiAjNDE4NEYzO1xufVxuXG4ubG9naW5CdG4tLWdvb2dsZTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9pY29uX2dvb2dsZS5wbmdcIikgNnB4IDZweCBuby1yZXBlYXQ7XG59XG5cbi5sb2dpbkJ0bi0tZ29vZ2xlOmhvdmVyLFxuLmxvZ2luQnRuLS1nb29nbGU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjRTc0QjM3O1xufVxuXG4uc29jaWFsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5wLm9yLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuLmhhdmluZy10cm91YmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luOiAwLjVlbTtcbn1cblxuLnVwbG9hZC1jYXJkLXJlZ2lzdGVyIHtcbiAgbWFyZ2luOiAyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGNUY1RjU7XG59XG5cbi5wcm9maWxlLWhlYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICBwYWRkaW5nOiAwLjNlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUY1RjU7XG59XG5cbnAucHJvZmlsZS1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udXBsb2FkLWNvbnRlbnQge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5pbnB1dC1jaG9vc2Uge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDBweCA4dnc7XG4gIGhlaWdodDogNDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBREIwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbnAudGVybXMge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnJhZGlvIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tbGVmdDogNXZ3O1xufVxuXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL215d2lsZGFsYmVydGEuY2EvaW1hZ2VzL0dGWC1NV0EtUGFya3MtUmVzZXJ2YXRpb25zLnBuZykgbm8tcmVwZWF0O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItd2lkdGg6IHRoaW47XG59XG5cbnNlbGVjdCB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvSW1hZ2VzL2Ryb3Bkb3duLnBuZ1wiKSBuby1yZXBlYXQgOTYlICFpbXBvcnRhbnQ7XG59XG5cbnNlbGVjdDo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sYWJlbC1kcm9wZG93biB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNvbmRpdGlvbi10ZXh0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xufVxuXG5wLmNvbmRpdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udGVybXMtY2hlY2tib3gge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDF2aDtcbn1cblxuLmJ1dHRvbi1wcmV2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUUxNiAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoLW1haW4tY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogN3Z3O1xufVxuXG5wLnVzZXJuYW1lLXNlcmNoLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5vci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzcwNzA3MDtcbn1cblxuLnVzZXJuYW1lLXNlYXJjaCB7XG4gIHBhZGRpbmctdG9wOiA2ZW07XG59XG5cbi5hZ2UtdGV4dC1ib3hlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFnZS1taW4ge1xuICB3aWR0aDogNDElICFpbXBvcnRhbnQ7XG59Il19 */";
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