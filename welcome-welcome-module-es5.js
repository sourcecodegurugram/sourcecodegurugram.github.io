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


    __webpack_exports__["default"] = "<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n\r\n  <div class=\"welcome\">\r\n    <div class=\"welcome-content\">\r\n      <p class=\"welcome-content-Para\">\r\n        Welcome!\r\n      </p>\r\n\r\n      <p class=\"welcome-content-Para\">\r\n        We can help you make <u>platonic</u>\r\n        connections in your local area.\r\n      </p>\r\n\r\n\r\n      <P class=\"welcome-content-Para\">\r\n        First, ONE BIG RULE:<br>\r\n\r\n        Platonic = we will not help you\r\n        find a date or sexual partners. No\r\n        judgment if that is your goal, but\r\n        kindly save your energy and use another app\r\n\r\n      </P>\r\n\r\n\r\n\r\n      <div class=\"blue-button\" (click)=\"popOpen()\">\r\n        Sounds Cool! Who can I meet?\r\n      </div>\r\n\r\n      <div class=\"green-button\" routerLink=\"/signup\">\r\n        Awesome! Sign me up!\r\n\r\n      </div>\r\n\r\n      <div class=\"alreday-member\" routerLink=\"/signin\">\r\n        I am already a member\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n<div class=\"background-oops\" *ngIf=\"popup\">\r\n\r\n  <ion-card class=\"card-one\">\r\n    <div class=\"cross-pop\" (click)=\"closepop()\">\r\n      <img src=\"../../assets/Images/cross.png\" class=\"cross-image\">\r\n    </div><br>\r\n\r\n    <div class=\"search-container\">\r\n      <ion-card-content class=\"card-content-font\">\r\n        Oops! Looks like location targeting is\r\n        turned off on your device. Either turn it on or\r\n        input your postal code and country to see\r\n        members in your area.\r\n      </ion-card-content>\r\n\r\n      <p class=\"tittle-card\">Find Friends</p>\r\n      <form class=\"form-fields\">\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"fname\" class=\"form-label\">ZIP/Postal Code</label><br>\r\n          <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Postcode\" name=\"post\"\r\n            class=\"form-field-zip-code\" [(ngModel)]=\"post\">\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"country\">Country</label>\r\n          <select class=\"form-control\" id=\"country\" name=\"live\">\r\n            <option value=\"au\">Australia</option>\r\n            <option value=\"ca\">Canada</option>\r\n            <option value=\"in\">India</option>\r\n            <option value=\"nz\">New Zealand</option>\r\n            <option value=\"sg\">Singapore</option>\r\n            <option value=\"gb\">United Kingdom</option>\r\n            <option value=\"us\" selected=\"selected\">United States</option>\r\n\r\n          </select>\r\n          <span class=\"under-text\"></span>\r\n        </div>\r\n\r\n\r\n        <br>\r\n        <div class=\"button-container\">\r\n          <button type=\"button\" class=\"button-common\" (click)=\"postcodeManuallyEnter()\">Search</button>\r\n        </div>\r\n      </form>\r\n\r\n\r\n    </div>\r\n\r\n  </ion-card>\r\n</div>\r\n\r\n\r\n\r\n<!--Serach Result-->\r\n<div class=\"serach-result\" *ngIf=\"searchresult\">\r\n  <div class=\"background\">\r\n    <div class=\"tittle-home-page\">\r\n      <ion-card-subtitle class=\"tittle-home\">Members near you</ion-card-subtitle>\r\n      <img src=\"../../assets/Images/crosspop.png\" class=\"cross-pop-button\" (click)=\"closesearchpop()\">\r\n    </div>\r\n\r\n\r\n    <div class=\"member-cards\" *ngFor=\"let posts of  searchResponse\"\r\n      routerLink=\"/detail/{{posts.name}}/{{posts.mail}}/{{posts.uid}}\">\r\n\r\n\r\n      <div class=\"member-card-image\">\r\n\r\n        <img src=\"{{posts.Picture}}\" alt=\"\" srcset=\"\" class=\"user-image\">\r\n\r\n      </div>\r\n      <div class=\"member-card-text\">\r\n        <div class=\"badage-name\">\r\n          <div class=\"name card-item\">{{posts.name}} </div>\r\n          <div class=\"parent-badge\">\r\n\r\n            <ion-badge slot=\"end\" color=\"medium\" *ngIf=\"posts.Pets.length==0\" class=\"badge-font\">Parent\r\n            </ion-badge>\r\n            <ion-badge slot=\"end\" color=\"medium\" *ngIf=\"posts.Pets.length>0\" class=\"badge-font\">Pet Owner</ion-badge>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"activity-container\">\r\n          <div class=\"left-heading \">Activities: {{posts.Activity}}</div>\r\n          <!-- <div class=\"right-heading\"></div> -->\r\n          <div class=\"badage-container\">\r\n            <ion-badge slot=\"end\" color=\"medium\">{{posts.Activity.length}}</ion-badge>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"distance-container\">\r\n          <div class=\"distance card-item\">Distance:</div>\r\n          <div class=\"distance-ouput\">1 miles away</div>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <button *ngIf=\"currPage.length == 25\" class=\"showMore\" (click)=\"getSearchData()\">Show More</button>\r\n    </div>\r\n\r\n  </div>";
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


    __webpack_exports__["default"] = ".welcome-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 2em;\n}\n\np.welcome-content-Para {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 200;\n}\n\n.blue-button {\n  background-color: #4472C4;\n  padding: 0.6em;\n  border-radius: 7px;\n  text-align: center;\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 19px;\n  margin: 1em 0px;\n  font-weight: 200;\n}\n\n.green-button {\n  background-color: green;\n  padding: 0.6em;\n  border-radius: 7px;\n  text-align: center;\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 19px;\n  font-weight: 200;\n  margin: 1em 0px;\n}\n\n.alreday-member {\n  text-align: center;\n  font-size: 20px;\n  color: red;\n  font-family: \"Open Sans\", sans-serif;\n  margin-top: 0.7em;\n  font-weight: 200;\n}\n\n.background-oops {\n  background-color: #0e0d0d29;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n  overflow-x: auto;\n  position: absolute;\n  margin-top: 3em;\n}\n\n.card-content-font {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n  margin-right: 1em;\n  margin-left: 1em;\n}\n\n.card-one {\n  border: 1px solid #707070;\n  margin: 1.5em;\n  margin-top: 7vh;\n  overflow: overlay;\n}\n\n.tittle-card {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n  padding: 1em;\n}\n\nform.form-fields {\n  margin: 2em;\n}\n\ninput#fname {\n  /* height: 6vh; */\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 15px;\n  border: 1px solid;\n  margin-bottom: 20px;\n}\n\nselect#country {\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 15px;\n  border: 1px solid;\n  margin-bottom: 20px;\n  width: 55%;\n  font-size: 1em;\n}\n\n.form-label {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.form-label-country {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 18px;\n}\n\nbutton.button-common {\n  height: 40px;\n  padding: 0px 40px;\n  border: 1px solid #707070;\n  background-color: #449D44;\n  color: white;\n  border-radius: 7px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: bold;\n}\n\n.search-country {\n  width: 100% !important;\n  background-color: #F2F2F2;\n}\n\n.card-one {\n  background-color: white !important;\n}\n\n.loading-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\nimg.cross-image {\n  width: 9%;\n  margin: 5px;\n  float: right;\n  z-index: 1000;\n  position: relative;\n}\n\n.welcome {\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  background: white;\n}\n\n.serach-result {\n  position: absolute;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  background-color: #00000073;\n  margin: 0em 0em;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 80vh;\n  overflow-x: auto;\n  width: 89vw;\n  margin-top: 5em;\n}\n\nion-card.ios.hydrated {\n  margin-top: 0px;\n}\n\n.tittle-home-page {\n  padding: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  padding-top: 2em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.tittle-home {\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: capitalize;\n}\n\n.member-cards {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  background-color: white;\n  margin: 20px;\n  align-items: center;\n  border: 1px solid #717171;\n  margin-top: 0px;\n}\n\np.card-item {\n  margin-bottom: 0px;\n  margin-top: -2px;\n  font-size: 14px;\n  padding-bottom: 0.5em;\n  color: #707070;\n}\n\np.name.card-item {\n  font-size: 16px;\n}\n\n.hobbies {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n  color: #707070;\n}\n\n.activities {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n  display: flex;\n  flex-direction: row;\n}\n\n.distance {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n}\n\nimg.number-mage {\n  width: 9%;\n}\n\n.left-heading {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  display: block;\n  display: -webkit-box;\n  /* max-width: 100%; */\n  height: 43px;\n  margin: 0 auto;\n  font-size: 14px;\n  /* line-height: 1; */\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nimg.user-image {\n  width: 100%;\n  height: 14vh;\n}\n\n.modal-backdrop {\n  height: auto !important;\n}\n\n.modal-backdrop.show {\n  opacity: 1;\n}\n\np.modal-para {\n  text-align: justify;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  word-spacing: -1px;\n}\n\n.checkbox-popup {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n\nimg.check-box {\n  margin-right: 10px;\n  text-align: center;\n}\n\nh5.whos-on-site {\n  font-size: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n\n.button-flex {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.register-button {\n  background-color: #5ADB00;\n  height: 40px;\n}\n\nbutton.btn.btn-primary.login-button {\n  height: 40px;\n}\n\np.check-box-text {\n  margin-bottom: 0px;\n}\n\n.member-card-text {\n  margin-left: 3vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: 3vw;\n}\n\n.showMore {\n  width: 100%;\n  padding: 20px 0px;\n}\n\ninput#usr {\n  height: 5vh;\n  padding: 1em;\n}\n\n.badage-name {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-top: 0.5em;\n}\n\n.badge-font {\n  font-size: 9px;\n}\n\n.right-heading {\n  display: block;\n  display: -webkit-box;\n  max-width: 100%;\n  height: 43px;\n  margin: 0 auto;\n  font-size: 14px;\n  line-height: 1;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.activity-container {\n  display: flex;\n  align-items: center;\n}\n\n.parent-badge {\n  margin-left: 10px;\n}\n\n.distance-container {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFx3ZWxjb21lXFx3ZWxjb21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDSixlQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0lKOztBRERBO0VBRUksMkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREFBO0VBRUksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNGLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDQTtFQUVJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7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QSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNQSjs7QURVRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUEo7O0FEVUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDUEo7O0FEV0U7RUFDRSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNSSjs7QURXRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDUko7O0FEV0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNSSjs7QURXRTtFQUNFLFlBQUE7QUNSSjs7QURXRTtFQUNFLGtCQUFBO0FDUko7O0FEV0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFdFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDUko7O0FEVUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1BKOztBRFNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtBQ1BKOztBRFNBO0VBQ0ksY0FBQTtBQ05KOztBRFFBO0VBQ0csY0FBQTtFQUNELG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0xGOztBRE9BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDSko7O0FETUE7RUFDSSxpQkFBQTtBQ0hKOztBREtBO0VBQ0ksYUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4IDJlbTtcclxuICBcclxufVxyXG5wLndlbGNvbWUtY29udGVudC1QYXJhIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuLmJsdWUtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XHJcbiAgICBwYWRkaW5nOiAwLjZlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbWFyZ2luOiAxZW0gMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG4uZ3JlZW4tYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgcGFkZGluZzogMC42ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbWFyZ2luOiAxZW0gMHB4O1xyXG59XHJcbi5hbHJlZGF5LW1lbWJlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogMC43ZW07XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1vb3BzXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTBkMGQyOTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDNlbTtcclxuXHJcbn1cclxuLmNhcmQtY29udGVudC1mb250XHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG5cclxufVxyXG4uY2FyZC1vbmV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgbWFyZ2luOiAxLjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDd2aDtcclxuICAgIG92ZXJmbG93OiBvdmVybGF5O1xyXG5cclxufVxyXG4udGl0dGxlLWNhcmRcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn1cclxuZm9ybS5mb3JtLWZpZWxkc3tcclxuICAgIG1hcmdpbjogMmVtO1xyXG59XHJcbmlucHV0I2ZuYW1lIHtcclxuICAgIC8qIGhlaWdodDogNnZoOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgfVxyXG4gIHNlbGVjdCNjb3VudHJ5IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGhlaWdodDogNDdweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuICAuZm9ybS1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLmZvcm0tbGFiZWwtY291bnRyeVxyXG57XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMThweDtcclxufVxyXG5idXR0b24uYnV0dG9uLWNvbW1vbiB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggNDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzQ0OUQ0NDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbn1cclxuLnNlYXJjaC1jb3VudHJ5XHJcbntcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xyXG59XHJcbi5jYXJkLW9uZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubG9hZGluZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIGltZy5jcm9zcy1pbWFnZSB7XHJcbiAgICB3aWR0aDogOSU7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4ud2VsY29tZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5zZXJhY2gtcmVzdWx0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNzM7XHJcbiAgICBtYXJnaW46IDBlbSAwZW07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgXHJcbiAgICBjb2xvcjogIzhjOGM4YztcclxuICBcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcclxuICB9XHJcbiAgXHJcbiAgLmJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDo4MHZoO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHdpZHRoOiA4OXZ3O1xyXG4gICAgbWFyZ2luLXRvcDogNWVtO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgaW9uLWNhcmQuaW9zLmh5ZHJhdGVkIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdHRsZS1ob21lLXBhZ2Uge1xyXG4gICAgcGFkZGluZzogMS41ZW07XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXR0bGUtaG9tZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbiAgXHJcbiAgLm1lbWJlci1jYXJkcyB7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcxNzE3MTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgcC5jYXJkLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgfVxyXG4gIFxyXG4gIHAubmFtZS5jYXJkLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuaG9iYmllcyB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgXHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmFjdGl2aXRpZXMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5kaXN0YW5jZSB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGltZy5udW1iZXItbWFnZSB7XHJcbiAgICB3aWR0aDogOSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWZ0LWhlYWRpbmcge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC8qIG1heC13aWR0aDogMTAwJTsgKi9cclxuICAgIGhlaWdodDogNDNweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLyogbGluZS1oZWlnaHQ6IDE7ICovXHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgaW1nLnVzZXItaW1hZ2Uge1xyXG4gIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE0dmg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1iYWNrZHJvcCB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWJhY2tkcm9wLnNob3cge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgcC5tb2RhbC1wYXJhIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgd29yZC1zcGFjaW5nOiAtMXB4O1xyXG4gIH1cclxuICBcclxuICAuY2hlY2tib3gtcG9wdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGltZy5jaGVjay1ib3gge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBoNS53aG9zLW9uLXNpdGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24tZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucmVnaXN0ZXItYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QURCMDA7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkubG9naW4tYnV0dG9uIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcbiAgXHJcbiAgcC5jaGVjay1ib3gtdGV4dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW1iZXItY2FyZC10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzdnc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDN2dztcclxuICB9XHJcbiAgXHJcbiAgLnNob3dNb3JlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgfVxyXG4gIGlucHV0I3VzciB7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG4uYmFkYWdlLW5hbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcclxufVxyXG4uYmFkZ2UtZm9udCB7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxufVxyXG4ucmlnaHQtaGVhZGluZyB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQzcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLmFjdGl2aXR5LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucGFyZW50LWJhZGdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5kaXN0YW5jZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufSIsIi53ZWxjb21lLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHggMmVtO1xufVxuXG5wLndlbGNvbWUtY29udGVudC1QYXJhIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbiAgcGFkZGluZzogMC42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE5cHg7XG4gIG1hcmdpbjogMWVtIDBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLmdyZWVuLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBwYWRkaW5nOiAwLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luOiAxZW0gMHB4O1xufVxuXG4uYWxyZWRheS1tZW1iZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDAuN2VtO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uYmFja2dyb3VuZC1vb3BzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMGQwZDI5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAzZW07XG59XG5cbi5jYXJkLWNvbnRlbnQtZm9udCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG5cbi5jYXJkLW9uZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIG1hcmdpbjogMS41ZW07XG4gIG1hcmdpbi10b3A6IDd2aDtcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XG59XG5cbi50aXR0bGUtY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgcGFkZGluZzogMWVtO1xufVxuXG5mb3JtLmZvcm0tZmllbGRzIHtcbiAgbWFyZ2luOiAyZW07XG59XG5cbmlucHV0I2ZuYW1lIHtcbiAgLyogaGVpZ2h0OiA2dmg7ICovXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuc2VsZWN0I2NvdW50cnkge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDdweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA1NSU7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9ybS1sYWJlbC1jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMThweDtcbn1cblxuYnV0dG9uLmJ1dHRvbi1jb21tb24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDBweCA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ5RDQ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogYm9sZDtcbn1cblxuLnNlYXJjaC1jb3VudHJ5IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbn1cblxuLmNhcmQtb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuaW1nLmNyb3NzLWltYWdlIHtcbiAgd2lkdGg6IDklO1xuICBtYXJnaW46IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6LWluZGV4OiAxMDAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi53ZWxjb21lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uc2VyYWNoLXJlc3VsdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNzM7XG4gIG1hcmdpbjogMGVtIDBlbTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDgwdmg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdpZHRoOiA4OXZ3O1xuICBtYXJnaW4tdG9wOiA1ZW07XG59XG5cbmlvbi1jYXJkLmlvcy5oeWRyYXRlZCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnRpdHRsZS1ob21lLXBhZ2Uge1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmctdG9wOiAyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdHRsZS1ob21lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5tZW1iZXItY2FyZHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MTcxNzE7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxucC5jYXJkLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICBjb2xvcjogIzcwNzA3MDtcbn1cblxucC5uYW1lLmNhcmQtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmhvYmJpZXMge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuXG4uYWN0aXZpdGllcyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmRpc3RhbmNlIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pbWcubnVtYmVyLW1hZ2Uge1xuICB3aWR0aDogOSU7XG59XG5cbi5sZWZ0LWhlYWRpbmcge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIG1heC13aWR0aDogMTAwJTsgKi9cbiAgaGVpZ2h0OiA0M3B4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICAvKiBsaW5lLWhlaWdodDogMTsgKi9cbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuaW1nLnVzZXItaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNHZoO1xufVxuXG4ubW9kYWwtYmFja2Ryb3Age1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJhY2tkcm9wLnNob3cge1xuICBvcGFjaXR5OiAxO1xufVxuXG5wLm1vZGFsLXBhcmEge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd29yZC1zcGFjaW5nOiAtMXB4O1xufVxuXG4uY2hlY2tib3gtcG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW1nLmNoZWNrLWJveCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oNS53aG9zLW9uLXNpdGUge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJ1dHRvbi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZWdpc3Rlci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubG9naW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5wLmNoZWNrLWJveC10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWVtYmVyLWNhcmQtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAzdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXJnaW4tcmlnaHQ6IDN2dztcbn1cblxuLnNob3dNb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuXG5pbnB1dCN1c3Ige1xuICBoZWlnaHQ6IDV2aDtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4uYmFkYWdlLW5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG59XG5cbi5iYWRnZS1mb250IHtcbiAgZm9udC1zaXplOiA5cHg7XG59XG5cbi5yaWdodC1oZWFkaW5nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDNweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5hY3Rpdml0eS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGFyZW50LWJhZGdlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5kaXN0YW5jZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */";
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
            _this2.popup = true;

            _this2.showFormPage();
          });
        }
      }, {
        key: "closepop",
        value: function closepop() {
          this.popup = false;
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