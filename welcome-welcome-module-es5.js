function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWelcomeWelcomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<ion-content>\r\n  <div class=\"welcome\">\r\n    <div class=\"welcome-content\">\r\n      <p class=\"welcome-content-Para\">\r\n        Welcome!\r\n      </p>\r\n\r\n      <p class=\"welcome-content-Para\">\r\n        We can help you make <u>platonic</u>\r\n        connections in your local area.\r\n      </p>\r\n\r\n\r\n      <P class=\"welcome-content-Para\">\r\n        First, ONE BIG RULE:<br>\r\n\r\n        Platonic = we will not help you\r\n        find a date or sexual partners. No\r\n        judgment if that is your goal, but\r\n        kindly save your energy and use another app\r\n\r\n      </P>\r\n\r\n\r\n\r\n      <div class=\"blue-button\" (click)=\"popOpen()\">\r\n        Sounds Cool! Who can I meet?\r\n      </div>\r\n\r\n      <div class=\"green-button\" routerLink=\"/signup\">\r\n        Awesome! Sign me up!\r\n\r\n      </div>\r\n\r\n      <div class=\"alreday-member\" routerLink=\"/signin\">\r\n        I am already a member\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<div class=\"background-oops\" *ngIf=\"hide\">\r\n\r\n  <ion-card class=\"card-one\">\r\n    <div class=\"cross-pop\" (click)=\"closepop()\">\r\n      <img src=\"../../assets/Images/cross.png\" class=\"cross-image\">\r\n    </div><br>\r\n\r\n    <div class=\"search-container\">\r\n      <ion-card-content class=\"card-content-font\">\r\n        Oops! Looks like location targeting is\r\n        turned off on your device. Either turn it on or\r\n        input your postal code and country to see\r\n        members in your area.\r\n      </ion-card-content>\r\n\r\n      <p class=\"tittle-card\">Find Friends</p>\r\n      <form class=\"form-fields\">\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"fname\" class=\"form-label\">ZIP/Postal Code</label><br>\r\n          <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Postcode\" name=\"post\"\r\n            class=\"form-field-zip-code\" [(ngModel)]=\"post\">\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"country\">Country</label>\r\n          <select class=\"form-control\" id=\"country\" name=\"live\">\r\n            <option value=\"au\">Australia</option>\r\n            <option value=\"ca\">Canada</option>\r\n            <option value=\"in\">India</option>\r\n            <option value=\"nz\">New Zealand</option>\r\n            <option value=\"sg\">Singapore</option>\r\n            <option value=\"gb\">United Kingdom</option>\r\n            <option value=\"us\" selected=\"selected\">United States</option>\r\n\r\n          </select>\r\n          <span class=\"under-text\"></span>\r\n        </div>\r\n\r\n\r\n        <br>\r\n        <div class=\"button-container\">\r\n          <button type=\"button\" class=\"button-common\" (click)=\"postcodeManuallyEnter()\">Search</button>\r\n        </div>\r\n      </form>\r\n\r\n\r\n    </div>\r\n\r\n  </ion-card>\r\n</div>\r\n\r\n\r\n\r\n<!--Serach Result-->\r\n<div class=\"serach-result\" *ngIf=\"searchresult\">\r\n  <div class=\"background\">\r\n    <div class=\"tittle-home-page\">\r\n      <ion-card-subtitle class=\"tittle-home\">Members near you</ion-card-subtitle>\r\n      <img src=\"../../assets/Images/crosspop.png\" class=\"cross-pop-button\" (click)=\"closesearchpop()\">\r\n    </div>\r\n\r\n\r\n    <div class=\"member-cards\" *ngFor=\"let posts of  searchResponse\"\r\n      routerLink=\"/detail/{{posts.name}}/{{posts.mail}}/{{posts.uid}}\">\r\n\r\n\r\n      <div class=\"member-card-image\">\r\n\r\n        <img src=\"{{posts.Picture}}\" alt=\"\" srcset=\"\" class=\"user-image\">\r\n\r\n      </div>\r\n      <div class=\"member-card-text\">\r\n        <div class=\"badage-name\">\r\n          <div class=\"name card-item\">{{posts.name}} </div>\r\n          <div class=\"parent-badge\">\r\n\r\n            <ion-badge slot=\"end\" color=\"medium\" *ngIf=\"posts.Pets.length==0\" class=\"badge-font\">Parent\r\n            </ion-badge>\r\n            <ion-badge slot=\"end\" color=\"medium\" *ngIf=\"posts.Pets.length>0\" class=\"badge-font\">Pet Owner</ion-badge>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"activity-container\">\r\n          <div class=\"left-heading \">Activities: {{posts.Activity}}</div>\r\n          <!-- <div class=\"right-heading\"></div> -->\r\n          <div class=\"badage-container\">\r\n            <ion-badge slot=\"end\" color=\"medium\">{{posts.Activity.length}}</ion-badge>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"distance-container\">\r\n          <div class=\"distance card-item\">Distance:</div>\r\n          <div class=\"distance-ouput\">1 miles away</div>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <button *ngIf=\"currPage.length == 25\" class=\"showMore\" (click)=\"getSearchData()\">Show More</button>\r\n    </div>\r\n\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./src/app/welcome/welcome-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/welcome/welcome-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: WelcomePageRoutingModule */

  /***/
  function srcAppWelcomeWelcomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function () {
      return WelcomePageRoutingModule;
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


    var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./welcome.page */
    "./src/app/welcome/welcome.page.ts");

    var routes = [{
      path: '',
      component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }, {
      path: 'signin',
      redirectTo: '/signin',
      pathMatch: 'full'
    }];

    var WelcomePageRoutingModule = function WelcomePageRoutingModule() {
      _classCallCheck(this, WelcomePageRoutingModule);
    };

    WelcomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WelcomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/welcome/welcome.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/welcome/welcome.module.ts ***!
    \*******************************************/

  /*! exports provided: WelcomePageModule */

  /***/
  function srcAppWelcomeWelcomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function () {
      return WelcomePageModule;
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


    var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./welcome-routing.module */
    "./src/app/welcome/welcome-routing.module.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _welcome_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./welcome.page */
    "./src/app/welcome/welcome.page.ts");
    /* harmony import */


    var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../Navigation/NavigationBar/navigationbar.module */
    "./src/app/Navigation/NavigationBar/navigationbar.module.ts");

    var WelcomePageModule = function WelcomePageModule() {
      _classCallCheck(this, WelcomePageModule);
    };

    WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_8__["NavigationbarModule"]],
      declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_7__["WelcomePage"]]
    })], WelcomePageModule);
    /***/
  },

  /***/
  "./src/app/welcome/welcome.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/welcome/welcome.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppWelcomeWelcomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 2em;\n}\n\np.welcome-content-Para {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 200;\n}\n\n.blue-button {\n  background-color: #4472C4;\n  padding: 0.6em;\n  border-radius: 7px;\n  text-align: center;\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 19px;\n  margin: 1em 0px;\n  font-weight: 200;\n}\n\n.green-button {\n  background-color: green;\n  padding: 0.6em;\n  border-radius: 7px;\n  text-align: center;\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 19px;\n  font-weight: 200;\n  margin: 1em 0px;\n}\n\n.alreday-member {\n  text-align: center;\n  font-size: 20px;\n  color: red;\n  font-family: \"Open Sans\", sans-serif;\n  margin-top: 0.7em;\n  font-weight: 200;\n}\n\n.background-oops {\n  background-color: #08080885;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\n.card-content-font {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n  margin-right: 1em;\n  margin-left: 1em;\n}\n\n.card-one {\n  border: 1px solid #707070;\n  margin: 0em 1.5em;\n  overflow: overlay;\n}\n\n.tittle-card {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n  padding: 1em;\n}\n\nform.form-fields {\n  margin: 2em;\n}\n\ninput#fname {\n  /* height: 6vh; */\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 15px;\n  border: 1px solid;\n  margin-bottom: 20px;\n}\n\nselect#country {\n  border-radius: 7px;\n  border: 1px solid;\n  margin-bottom: 20px;\n  font-size: 1em;\n}\n\n.form-label {\n  font-size: 15px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.form-label-country {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 18px;\n}\n\nbutton.button-common {\n  height: 40px;\n  padding: 0px 40px;\n  border: 1px solid #707070;\n  background-color: #449D44;\n  color: white;\n  border-radius: 7px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: bold;\n}\n\n.search-country {\n  width: 100% !important;\n  background-color: #F2F2F2;\n}\n\n.card-one {\n  background-color: white !important;\n}\n\n.loading-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\nimg.cross-image {\n  width: 9%;\n  margin: 5px;\n  float: right;\n  z-index: 1000;\n  position: relative;\n}\n\n.welcome {\n  height: 100%;\n  display: flex;\n  background: white;\n}\n\n.serach-result {\n  position: absolute;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  background-color: #00000073;\n  margin: 0em 0em;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 80vh;\n  overflow-x: auto;\n  width: 89vw;\n  margin-top: 5em;\n}\n\nion-card.ios.hydrated {\n  margin-top: 0px;\n}\n\n.tittle-home-page {\n  padding: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  padding-top: 2em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.tittle-home {\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: capitalize;\n}\n\n.member-cards {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  background-color: white;\n  margin: 20px;\n  align-items: center;\n  border: 1px solid #717171;\n  margin-top: 0px;\n}\n\np.card-item {\n  margin-bottom: 0px;\n  margin-top: -2px;\n  font-size: 14px;\n  padding-bottom: 0.5em;\n  color: #707070;\n}\n\np.name.card-item {\n  font-size: 16px;\n}\n\n.hobbies {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n  color: #707070;\n}\n\n.activities {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n  display: flex;\n  flex-direction: row;\n}\n\n.distance {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n}\n\nimg.number-mage {\n  width: 9%;\n}\n\n.left-heading {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  display: block;\n  display: -webkit-box;\n  /* max-width: 100%; */\n  height: 43px;\n  margin: 0 auto;\n  font-size: 14px;\n  /* line-height: 1; */\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nimg.user-image {\n  width: 100%;\n  height: 14vh;\n}\n\n.modal-backdrop {\n  height: auto !important;\n}\n\n.modal-backdrop.show {\n  opacity: 1;\n}\n\np.modal-para {\n  text-align: justify;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  word-spacing: -1px;\n}\n\n.checkbox-popup {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n\nimg.check-box {\n  margin-right: 10px;\n  text-align: center;\n}\n\nh5.whos-on-site {\n  font-size: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n\n.button-flex {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.register-button {\n  background-color: #5ADB00;\n  height: 40px;\n}\n\nbutton.btn.btn-primary.login-button {\n  height: 40px;\n}\n\np.check-box-text {\n  margin-bottom: 0px;\n}\n\n.member-card-text {\n  margin-left: 3vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: 3vw;\n}\n\n.showMore {\n  width: 100%;\n  padding: 20px 0px;\n}\n\ninput#usr {\n  height: 5vh;\n  padding: 1em;\n  width: 100%;\n}\n\n.badage-name {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-top: 0.5em;\n}\n\n.badge-font {\n  font-size: 9px;\n}\n\n.right-heading {\n  display: block;\n  display: -webkit-box;\n  max-width: 100%;\n  height: 43px;\n  margin: 0 auto;\n  font-size: 14px;\n  line-height: 1;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.activity-container {\n  display: flex;\n  align-items: center;\n}\n\n.parent-badge {\n  margin-left: 10px;\n}\n\n.distance-container {\n  display: flex;\n}\n\n@media screen and (max-width: 320px) {\n  .welcome-content-Para {\n    font-size: 15px !important;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 200;\n  }\n\n  .blue-button {\n    background-color: #4472C4;\n    padding: 0.6em;\n    border-radius: 7px;\n    text-align: center;\n    color: white;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 15px;\n    margin: 1em 0px;\n    font-weight: 200;\n  }\n\n  .green-button {\n    background-color: green;\n    padding: 0.5em;\n    border-radius: 7px;\n    text-align: center;\n    color: white;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 15px;\n    font-weight: 200;\n    margin: 1em 0px;\n  }\n\n  .alreday-member {\n    text-align: center;\n    font-size: 17px;\n    color: red;\n    font-family: \"Open Sans\", sans-serif;\n    margin-top: 0.7em;\n    font-weight: 200;\n  }\n\n  .card-content-font {\n    font-family: \"Open Sans\", sans-serif;\n    font-style: normal;\n    font-size: 15px;\n    text-align: center;\n    color: #707070;\n    margin-right: 1em;\n    margin-left: 1em;\n  }\n\n  .tittle-card {\n    font-family: \"Open Sans\", sans-serif;\n    font-style: normal;\n    font-size: 16px;\n    text-align: center;\n    color: #707070;\n    padding: 1em;\n  }\n\n  button.button-common {\n    height: 40px;\n    padding: 0px 40px;\n    border: 1px solid #707070;\n    background-color: #449D44;\n    color: white;\n    border-radius: 7px;\n    font-size: 15px;\n    font-family: \"Open Sans\", sans-serif;\n    font-style: bold;\n  }\n\n  .card-one {\n    border: 1px solid #707070;\n    margin: 0em 1.5em;\n    overflow: overlay;\n    height: 94%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG9jdW1lbnRzL1NvdXJjZWNvZGUgV29yay9Bbmd1bGFyIE9mZmljZSBQcm9qZWN0L25vdDREYXRpbmcvc3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNKLGVBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSUo7O0FEREE7RUFFSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUdBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFFSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0YsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxpQkFBQTtBQ0FKOztBREdBO0VBRUksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDREo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFB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QUFBO0lBQ0EsZUFBQTtFQ05BOztFRFFGO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtJQUNBLG9DQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQ0xBOztFRE9GO0lBQ0Usb0NBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VDSkE7O0VETUY7SUFDRSxvQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7RUNIQTs7RURLRjtJQUNFLFlBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0Esb0NBQUE7SUFDQSxnQkFBQTtFQ0ZBOztFRElGO0lBQ0UseUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQ0RBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHggMmVtO1xyXG4gIFxyXG59XHJcbnAud2VsY29tZS1jb250ZW50LVBhcmEge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG4uYmx1ZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcclxuICAgIHBhZGRpbmc6IDAuNmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5mb250LXNpemU6IDE5cHg7XHJcbiAgICBtYXJnaW46IDFlbSAwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcbi5ncmVlbi1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBwYWRkaW5nOiAwLjZlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBtYXJnaW46IDFlbSAwcHg7XHJcbn1cclxuLmFscmVkYXktbWVtYmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjdlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLW9vcHNcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4MDgwODg1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgIFxyXG4gICBcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuLmNhcmQtY29udGVudC1mb250XHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG5cclxufVxyXG4uY2FyZC1vbmV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgbWFyZ2luOiAwZW0gMS41ZW07XHJcblxyXG4gICAgb3ZlcmZsb3c6IG92ZXJsYXk7XHJcblxyXG59XHJcbi50aXR0bGUtY2FyZFxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5mb3JtLmZvcm0tZmllbGRze1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbn1cclxuaW5wdXQjZm5hbWUge1xyXG4gICAgLyogaGVpZ2h0OiA2dmg7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICB9XHJcbiAgc2VsZWN0I2NvdW50cnkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG5cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG4gIC5mb3JtLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG4uZm9ybS1sYWJlbC1jb3VudHJ5XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxOHB4O1xyXG59XHJcbmJ1dHRvbi5idXR0b24tY29tbW9uIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDBweCA0MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjNDQ5RDQ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogYm9sZDtcclxufVxyXG4uc2VhcmNoLWNvdW50cnlcclxue1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbn1cclxuLmNhcmQtb25lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgaW1nLmNyb3NzLWltYWdlIHtcclxuICAgIHdpZHRoOiA5JTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi53ZWxjb21lIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uc2VyYWNoLXJlc3VsdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDczO1xyXG4gICAgbWFyZ2luOiAwZW0gMGVtO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIFxyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL0ltYWdlcy9CYWNrZ3JvdW5kVGlsZS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6ODB2aDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICB3aWR0aDogODl2dztcclxuICAgIG1hcmdpbi10b3A6IDVlbTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jYXJkLmlvcy5oeWRyYXRlZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXR0bGUtaG9tZS1wYWdlIHtcclxuICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAudGl0dGxlLWhvbWUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW1iZXItY2FyZHMge1xyXG4gIFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MTcxNzE7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIHAuY2FyZC1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gIH1cclxuICBcclxuICBwLm5hbWUuY2FyZC1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmhvYmJpZXMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIFxyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5hY3Rpdml0aWVzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuZGlzdGFuY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICBpbWcubnVtYmVyLW1hZ2Uge1xyXG4gICAgd2lkdGg6IDklO1xyXG4gIH1cclxuICBcclxuICAubGVmdC1oZWFkaW5nIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAvKiBtYXgtd2lkdGg6IDEwMCU7ICovXHJcbiAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC8qIGxpbmUtaGVpZ2h0OiAxOyAqL1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHJcbiAgfVxyXG4gIFxyXG4gIGltZy51c2VyLWltYWdlIHtcclxuICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNHZoO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtYmFja2Ryb3Age1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1iYWNrZHJvcC5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIHAubW9kYWwtcGFyYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHdvcmQtc3BhY2luZzogLTFweDtcclxuICB9XHJcbiAgXHJcbiAgLmNoZWNrYm94LXBvcHVwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBpbWcuY2hlY2stYm94IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgaDUud2hvcy1vbi1zaXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uLWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnJlZ2lzdGVyLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICBcclxuICBidXR0b24uYnRuLmJ0bi1wcmltYXJ5LmxvZ2luLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHAuY2hlY2stYm94LXRleHQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuICBcclxuICAubWVtYmVyLWNhcmQtdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogM3Z3O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzdnc7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaG93TW9yZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gIH1cclxuICBpbnB1dCN1c3Ige1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYmFkYWdlLW5hbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcclxufVxyXG4uYmFkZ2UtZm9udCB7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxufVxyXG4ucmlnaHQtaGVhZGluZyB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQzcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLmFjdGl2aXR5LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucGFyZW50LWJhZGdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5kaXN0YW5jZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpXHJcbntcclxuICAud2VsY29tZS1jb250ZW50LVBhcmEge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuLmJsdWUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xyXG4gIHBhZGRpbmc6IDAuNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDFlbSAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG4uZ3JlZW4tYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIG1hcmdpbjogMWVtIDBweDtcclxufVxyXG4uYWxyZWRheS1tZW1iZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tdG9wOiAwLjdlbTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcbi5jYXJkLWNvbnRlbnQtZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG4udGl0dGxlLWNhcmQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxufVxyXG5idXR0b24uYnV0dG9uLWNvbW1vbiB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDBweCA0MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0OUQ0NDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBib2xkO1xyXG59XHJcbi5jYXJkLW9uZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICBtYXJnaW46IDBlbSAxLjVlbTtcclxuICBvdmVyZmxvdzogb3ZlcmxheTtcclxuICBoZWlnaHQ6IDk0JTtcclxufVxyXG59IiwiLndlbGNvbWUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDBweCAyZW07XG59XG5cbnAud2VsY29tZS1jb250ZW50LVBhcmEge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uYmx1ZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICBwYWRkaW5nOiAwLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbWFyZ2luOiAxZW0gMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uZ3JlZW4tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIHBhZGRpbmc6IDAuNmVtO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBtYXJnaW46IDFlbSAwcHg7XG59XG5cbi5hbHJlZGF5LW1lbWJlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMC43ZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5iYWNrZ3JvdW5kLW9vcHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwODA4ODU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uY2FyZC1jb250ZW50LWZvbnQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4uY2FyZC1vbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBtYXJnaW46IDBlbSAxLjVlbTtcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XG59XG5cbi50aXR0bGUtY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgcGFkZGluZzogMWVtO1xufVxuXG5mb3JtLmZvcm0tZmllbGRzIHtcbiAgbWFyZ2luOiAyZW07XG59XG5cbmlucHV0I2ZuYW1lIHtcbiAgLyogaGVpZ2h0OiA2dmg7ICovXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuc2VsZWN0I2NvdW50cnkge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLmZvcm0tbGFiZWwge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvcm0tbGFiZWwtY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE4cHg7XG59XG5cbmJ1dHRvbi5idXR0b24tY29tbW9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwcHggNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0OUQ0NDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG59XG5cbi5zZWFyY2gtY291bnRyeSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG59XG5cbi5jYXJkLW9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbmltZy5jcm9zcy1pbWFnZSB7XG4gIHdpZHRoOiA5JTtcbiAgbWFyZ2luOiA1cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ud2VsY29tZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5zZXJhY2gtcmVzdWx0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA3MztcbiAgbWFyZ2luOiAwZW0gMGVtO1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9JbWFnZXMvQmFja2dyb3VuZFRpbGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogODB2aDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2lkdGg6IDg5dnc7XG4gIG1hcmdpbi10b3A6IDVlbTtcbn1cblxuaW9uLWNhcmQuaW9zLmh5ZHJhdGVkIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4udGl0dGxlLWhvbWUtcGFnZSB7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy10b3A6IDJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0dGxlLWhvbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1lbWJlci1jYXJkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcxNzE3MTtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5wLmNhcmQtaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuXG5wLm5hbWUuY2FyZC1pdGVtIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaG9iYmllcyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5hY3Rpdml0aWVzIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZGlzdGFuY2Uge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmltZy5udW1iZXItbWFnZSB7XG4gIHdpZHRoOiA5JTtcbn1cblxuLmxlZnQtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLyogbWF4LXdpZHRoOiAxMDAlOyAqL1xuICBoZWlnaHQ6IDQzcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC8qIGxpbmUtaGVpZ2h0OiAxOyAqL1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5pbWcudXNlci1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE0dmg7XG59XG5cbi5tb2RhbC1iYWNrZHJvcCB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtYmFja2Ryb3Auc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbnAubW9kYWwtcGFyYSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICB3b3JkLXNwYWNpbmc6IC0xcHg7XG59XG5cbi5jaGVja2JveC1wb3B1cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pbWcuY2hlY2stYm94IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmg1Lndob3Mtb24tc2l0ZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYnV0dG9uLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJlZ2lzdGVyLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QURCMDA7XG4gIGhlaWdodDogNDBweDtcbn1cblxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeS5sb2dpbi1idXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbnAuY2hlY2stYm94LXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5tZW1iZXItY2FyZC10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDN2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbi1yaWdodDogM3Z3O1xufVxuXG4uc2hvd01vcmUge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAwcHg7XG59XG5cbmlucHV0I3VzciB7XG4gIGhlaWdodDogNXZoO1xuICBwYWRkaW5nOiAxZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmFkYWdlLW5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG59XG5cbi5iYWRnZS1mb250IHtcbiAgZm9udC1zaXplOiA5cHg7XG59XG5cbi5yaWdodC1oZWFkaW5nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDNweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5hY3Rpdml0eS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGFyZW50LWJhZGdlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5kaXN0YW5jZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAud2VsY29tZS1jb250ZW50LVBhcmEge1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cblxuICAuYmx1ZS1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gICAgcGFkZGluZzogMC42ZW07XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogMWVtIDBweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG5cbiAgLmdyZWVuLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbWFyZ2luOiAxZW0gMHB4O1xuICB9XG5cbiAgLmFscmVkYXktbWVtYmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLXRvcDogMC43ZW07XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuXG4gIC5jYXJkLWNvbnRlbnQtZm9udCB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgfVxuXG4gIC50aXR0bGUtY2FyZCB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgcGFkZGluZzogMWVtO1xuICB9XG5cbiAgYnV0dG9uLmJ1dHRvbi1jb21tb24ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAwcHggNDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDlENDQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogYm9sZDtcbiAgfVxuXG4gIC5jYXJkLW9uZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICBtYXJnaW46IDBlbSAxLjVlbTtcbiAgICBvdmVyZmxvdzogb3ZlcmxheTtcbiAgICBoZWlnaHQ6IDk0JTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/welcome/welcome.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/welcome/welcome.page.ts ***!
    \*****************************************/

  /*! exports provided: WelcomePage */

  /***/
  function srcAppWelcomeWelcomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePage", function () {
      return WelcomePage;
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


    var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../config.service */
    "./src/app/config.service.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var WelcomePage = /*#__PURE__*/function () {
      function WelcomePage(ConfigService, geolocation, platform, nativeGeocoder, zone, _Activatedroute, routes, locate, http) {
        _classCallCheck(this, WelcomePage);

        this.ConfigService = ConfigService;
        this.geolocation = geolocation;
        this.platform = platform;
        this.nativeGeocoder = nativeGeocoder;
        this.zone = zone;
        this._Activatedroute = _Activatedroute;
        this.routes = routes;
        this.locate = locate;
        this.http = http;
        this.isLoading = false;
        this.hide = false;
        this.popup = false;
        this.signup = false;
        this.maxNumberOfTabs = 2;
        this.selectedIndex = 0;
        this.activit = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.activities = ["yoga", "playdates (parents and children)", "happy hour/cocktails/beers", "sightseeing"];
        this.Result = false;
        this.searchResponse = [];
        this.pageIndex = 0;
        this.currPage = [];
        this.searchresult = false;
      }

      _createClass(WelcomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "reverseGeoLookup",
        value: function reverseGeoLookup() {
          var _this = this;

          // This is where the code for reverse GEO lookup will come
          this.ConfigService.getLocation(this.lat, this.lng).subscribe(function (data) {
            _this.addressData = data;
            _this.address = _this.addressData.results[0].address_components;

            for (var i = 0; i < _this.address.length; i++) {
              if (_this.address[i].types.includes("postal_code")) {
                _this.postcode = _this.address[i].long_name;
              }

              _this.isLoading = false;
            }

            _this.searchresult = true;

            _this.getSearchData(); // this.routes.navigate(["search-result/", this.postcode]);

          });
        }
      }, {
        key: "postcodeManuallyEnter",
        value: function postcodeManuallyEnter() {
          this.postcode = this.post;
          this.searchresult = true;
          this.getSearchData();
        }
      }, {
        key: "showFormPage",
        value: function showFormPage() {
          // We will hide this page at starting. If lat long fails, we will unhide it so that people can fill information
          this.hide = true;
          console.log("getting-true");
        }
      }, {
        key: "popOpen",
        value: function popOpen() {
          var _this2 = this;

          this.isLoading = true;
          this.geolocation.getCurrentPosition().then(function (resp) {
            _this2.lat = resp.coords.latitude;
            _this2.lng = resp.coords.longitude;
            console.log(_this2.lat);
            console.log(_this2.lng); // If we get lat long then we will pull Address details from reverse geo lookup

            if (_this2.lat && _this2.lng) {
              _this2.reverseGeoLookup();
            } else {
              _this2.showFormPage();
            }
          }) // If we do not get lat long, we will present page with form for address and post code
          ["catch"](function (error) {
            _this2.isLoading = false;

            _this2.showFormPage();
          });
        }
      }, {
        key: "closepop",
        value: function closepop() {
          this.hide = false;
        }
      }, {
        key: "signups",
        value: function signups() {
          this.signup = true;
        }
      }, {
        key: "tabChanged",
        value: function tabChanged(tabChangeEvent) {
          this.selectedIndex = tabChangeEvent.index;
        }
      }, {
        key: "nextStep",
        value: function nextStep() {
          this.selectedIndex += 1;
        }
      }, {
        key: "previousStep",
        value: function previousStep() {
          this.selectedIndex -= 1;
        }
      }, {
        key: "getSearchData",
        value: function getSearchData() {
          var _this3 = this;

          this.ConfigService.getPostal(this.postcode, this.pageIndex).subscribe(function (elements) {
            _this3.currPage = Object.keys(elements).map(function (i) {
              return elements[i];
            });
            console.log(_this3.currPage);
            _this3.searchResponse = _this3.searchResponse.concat(_this3.currPage);
            console.log(_this3.searchResponse);
          });
          this.pageIndex++;
        }
      }, {
        key: "closesearchpop",
        value: function closesearchpop() {
          this.searchresult = false;
        }
      }]);

      return WelcomePage;
    }();

    WelcomePage.ctorParameters = function () {
      return [{
        type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
      }];
    };

    WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-welcome",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome.page.scss */
      "./src/app/welcome/welcome.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])], WelcomePage);
    /***/
  }
}]);
//# sourceMappingURL=welcome-welcome-module-es5.js.map