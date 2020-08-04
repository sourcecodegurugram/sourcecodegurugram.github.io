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


    __webpack_exports__["default"] = "<ion-header *ngIf=\"!isLoggedIn\">\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"not-loggeg-in-user\" *ngIf=\"!isLoggedIn\">\r\n  <div class=\"welcome\">\r\n    <div class=\"welcome-content\">\r\n      <p class=\"welcome-content-Para\">\r\n        Welcome!\r\n      </p>\r\n\r\n      <p class=\"welcome-content-Para\">\r\n        We can help you make <u>platonic</u>\r\n        connections in your local area.\r\n      </p>\r\n\r\n\r\n      <P class=\"welcome-content-Para\">\r\n        First, ONE BIG RULE:<br>\r\n\r\n        Platonic = we will not help you\r\n        find a date or sexual partners. No\r\n        judgment if that is your goal, but\r\n        kindly save your energy and use another app.\r\n\r\n      </P>\r\n\r\n\r\n\r\n      <div class=\"blue-button\" (click)=\"popOpen()\">\r\n        Sounds Cool! Who can I meet?\r\n      </div>\r\n\r\n      <div class=\"green-button\" routerLink=\"/signup\">\r\n        Awesome! Sign me up!\r\n\r\n      </div>\r\n\r\n      <div class=\"alreday-member\" routerLink=\"/signin\">\r\n        I am already a member\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</ion-content>\r\n\r\n<div class=\"background-oops\" *ngIf=\"hide\">\r\n\r\n  <ion-card class=\"card-one\">\r\n    <div class=\"cross-pop\" (click)=\"closepop()\">\r\n      <img src=\"../../assets/Images/cross.png\" class=\"cross-image\">\r\n    </div><br>\r\n\r\n    <div class=\"search-container\">\r\n      <ion-card-content class=\"card-content-font\">\r\n        Oops! Looks like location targeting is\r\n        turned off on your device. Either turn it on or\r\n        input your postal code and country to see\r\n        members in your area.\r\n      </ion-card-content>\r\n\r\n      <p class=\"tittle-card\">Find Friends</p>\r\n      <form class=\"form-fields\">\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"fname\" class=\"form-label\">ZIP/Postal Code</label><br>\r\n          <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Postcode\" name=\"post\"\r\n            class=\"form-field-zip-code\" [(ngModel)]=\"post\">\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"country\">Country</label>\r\n          <select class=\"form-control\" id=\"country\" name=\"live\">\r\n            <option value=\"au\">Australia</option>\r\n            <option value=\"ca\">Canada</option>\r\n            <option value=\"in\">India</option>\r\n            <option value=\"nz\">New Zealand</option>\r\n            <option value=\"sg\">Singapore</option>\r\n            <option value=\"gb\">United Kingdom</option>\r\n            <option value=\"us\" selected=\"selected\">United States</option>\r\n\r\n          </select>\r\n          <span class=\"under-text\"></span>\r\n        </div>\r\n\r\n\r\n        <br>\r\n        <div class=\"button-container\">\r\n          <button type=\"button\" class=\"button-common\" (click)=\"postcodeManuallyEnter(post)\">Search</button>\r\n        </div>\r\n      </form>\r\n\r\n\r\n    </div>\r\n\r\n  </ion-card>\r\n</div>\r\n\r\n\r\n\r\n<!--Serach Result-->\r\n<div class=\"serach-result\" *ngIf=\"searchresult\">\r\n  <div class=\"background\">\r\n    <div class=\"tittle-home-page\">\r\n      <ion-card-subtitle class=\"tittle-home\">Members near you</ion-card-subtitle>\r\n      <img src=\"../../assets/Images/crosspop.png\" class=\"cross-pop-button\" (click)=\"closesearchpop()\">\r\n    </div>\r\n\r\n\r\n    <div class=\"member-cards\" *ngFor=\"let posts of  searchResponse\"\r\n      (click)=\"chcekLoggedIn()\">\r\n\r\n\r\n      <div class=\"member-card-image\">\r\n\r\n        <img src=\"{{posts.Picture}}\" alt=\"\" srcset=\"\" class=\"user-image\">\r\n\r\n      </div>\r\n      <div class=\"member-card-text\">\r\n        <div class=\"badage-name\">\r\n          <div class=\"name card-item\">{{posts.name}} </div>\r\n          <div class=\"parent-badge\">\r\n\r\n            <ion-badge slot=\"end\" color=\"medium\" *ngIf=\"posts.Pets.length==0\" class=\"badge-font\">Parent\r\n            </ion-badge>\r\n            <ion-badge slot=\"end\" color=\"medium\" *ngIf=\"posts.Pets.length>0\" class=\"badge-font\">Pet Owner</ion-badge>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"activity-container\">\r\n          <div class=\"left-heading \">Activities: {{posts.Activity}}</div>\r\n          <!-- <div class=\"right-heading\"></div> -->\r\n          <div class=\"badage-container\">\r\n            <ion-badge slot=\"end\" color=\"medium\">{{posts.Activity.length}}</ion-badge>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"distance-container\">\r\n          <div class=\"distance card-item\">Distance:</div>\r\n          <div class=\"distance-ouput\">1 miles away</div>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n      \r\n    </div>\r\n    <button *ngIf=\"currPage.length == 10\" class=\"showMore\" (click)=\"getSearchData()\">Show More</button>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<div class=\"no-result-found\" *ngIf=\"noResult\">\r\n\r\n  <div class= \"popup-no-result\">\r\n    <div class=\"no-result-background\">\r\n      <div class=\"crosss-sign\" (click)=\"closesearchpop()\">\r\n        <img src=\"../../assets/Images/cross.png\" class=\"cross-image\">\r\n      </div>\r\n    <div class=\"no-result-popup-content\">\r\n      Looks like we have not yet expanded to your area. Click here to suggest that we come to you next!<br>\r\n      <span (click)=\"openEmailcomposer()\">Click here </span>to suggest that we come to you next\r\n    </div>\r\n  \r\n  </div>\r\n</div>\r\n  </div>\r\n";
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
    }, {
      path: 'no-result-found',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./no-result-found/no-result-found.module */
        "./src/app/welcome/no-result-found/no-result-found.module.ts")).then(function (m) {
          return m.NoResultFoundPageModule;
        });
      }
    }, {
      path: 'not-logged-popup',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | not-logged-popup-not-logged-popup-module */
        "not-logged-popup-not-logged-popup-module").then(__webpack_require__.bind(null,
        /*! ./not-logged-popup/not-logged-popup.module */
        "./src/app/welcome/not-logged-popup/not-logged-popup.module.ts")).then(function (m) {
          return m.NotLoggedPopupPageModule;
        });
      }
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
    /* harmony import */


    var _Signin_find_friends_find_friends_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../Signin/find-friends/find-friends.module */
    "./src/app/Signin/find-friends/find-friends.module.ts");
    /* harmony import */


    var _Signin_tophobbies_tophobbies_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../Signin/tophobbies/tophobbies.module */
    "./src/app/Signin/tophobbies/tophobbies.module.ts");
    /* harmony import */


    var _no_result_found_no_result_found_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./no-result-found/no-result-found.module */
    "./src/app/welcome/no-result-found/no-result-found.module.ts");

    var WelcomePageModule = function WelcomePageModule() {
      _classCallCheck(this, WelcomePageModule);
    };

    WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_8__["NavigationbarModule"], _Signin_find_friends_find_friends_module__WEBPACK_IMPORTED_MODULE_9__["FindFriendsPageModule"], _Signin_tophobbies_tophobbies_module__WEBPACK_IMPORTED_MODULE_10__["TophobbiesPageModule"], _no_result_found_no_result_found_module__WEBPACK_IMPORTED_MODULE_11__["NoResultFoundPageModule"]],
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


    __webpack_exports__["default"] = ".welcome-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 2em;\n}\n\np.welcome-content-Para {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 200;\n}\n\n.blue-button {\n  background-color: #4472C4;\n  padding: 0.6em;\n  border-radius: 7px;\n  text-align: center;\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 19px;\n  margin: 1em 0px;\n  font-weight: 200;\n}\n\n.green-button {\n  background-color: green;\n  padding: 0.6em;\n  border-radius: 7px;\n  text-align: center;\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 19px;\n  font-weight: 200;\n  margin: 1em 0px;\n}\n\n.alreday-member {\n  text-align: center;\n  font-size: 20px;\n  color: red;\n  font-family: \"Open Sans\", sans-serif;\n  margin-top: 0.7em;\n  font-weight: 200;\n}\n\n.background-oops {\n  background-color: #08080885;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\n.card-content-font {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n  margin-right: 1em;\n  margin-left: 1em;\n}\n\n.card-one {\n  border: 1px solid #707070;\n  margin: 0em 1.5em;\n  overflow: overlay;\n}\n\n.tittle-card {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n  padding: 1em;\n}\n\nform.form-fields {\n  margin: 2em;\n}\n\ninput#fname {\n  /* height: 6vh; */\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 15px;\n  border: 1px solid;\n  margin-bottom: 20px;\n}\n\nselect#country {\n  border-radius: 7px;\n  border: 1px solid;\n  margin-bottom: 20px;\n  font-size: 1em;\n}\n\n.form-label {\n  font-size: 15px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.form-label-country {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 18px;\n}\n\nbutton.button-common {\n  height: 40px;\n  padding: 0px 40px;\n  border: 1px solid #707070;\n  background-color: #449D44;\n  color: white;\n  border-radius: 7px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: bold;\n}\n\n.search-country {\n  width: 100% !important;\n  background-color: #F2F2F2;\n}\n\n.card-one {\n  background-color: white !important;\n}\n\n.loading-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\nimg.cross-image {\n  width: 9%;\n  margin: 5px;\n  float: right;\n  z-index: 1;\n  position: relative;\n}\n\n.welcome {\n  height: 100%;\n  display: flex;\n  background: white;\n}\n\n.serach-result {\n  position: absolute;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  background-color: #00000073;\n  margin: 0em 0em;\n  z-index: 2;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 80vh;\n  overflow-x: auto;\n  width: 89vw;\n  margin-top: 5em;\n}\n\nion-card.ios.hydrated {\n  margin-top: 0px;\n}\n\n.tittle-home-page {\n  padding: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  padding-top: 2em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.tittle-home {\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: capitalize;\n}\n\n.member-cards {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  background-color: white;\n  margin: 20px;\n  align-items: center;\n  border: 1px solid #717171;\n  margin-top: 0px;\n}\n\np.card-item {\n  margin-bottom: 0px;\n  margin-top: -2px;\n  font-size: 14px;\n  padding-bottom: 0.5em;\n  color: #707070;\n}\n\np.name.card-item {\n  font-size: 16px;\n}\n\n.hobbies {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n  color: #707070;\n}\n\n.activities {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n  display: flex;\n  flex-direction: row;\n}\n\n.distance {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n}\n\nimg.number-mage {\n  width: 9%;\n}\n\n.left-heading {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  display: block;\n  display: -webkit-box;\n  /* max-width: 100%; */\n  height: 43px;\n  margin: 0 auto;\n  font-size: 14px;\n  /* line-height: 1; */\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nimg.user-image {\n  width: 100%;\n  height: 14vh;\n}\n\n.modal-backdrop {\n  height: auto !important;\n}\n\n.modal-backdrop.show {\n  opacity: 1;\n}\n\np.modal-para {\n  text-align: justify;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  word-spacing: -1px;\n}\n\n.checkbox-popup {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n\nimg.check-box {\n  margin-right: 10px;\n  text-align: center;\n}\n\nh5.whos-on-site {\n  font-size: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n\n.button-flex {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.register-button {\n  background-color: #5ADB00;\n  height: 40px;\n}\n\nbutton.btn.btn-primary.login-button {\n  height: 40px;\n}\n\np.check-box-text {\n  margin-bottom: 0px;\n}\n\n.member-card-text {\n  margin-left: 3vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: 3vw;\n}\n\n.showMore {\n  width: 100%;\n  padding: 20px 0px;\n}\n\ninput#usr {\n  height: 5vh;\n  padding: 1em;\n  width: 100%;\n}\n\n.badage-name {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-top: 0.5em;\n}\n\n.badge-font {\n  font-size: 9px;\n}\n\n.right-heading {\n  display: block;\n  display: -webkit-box;\n  max-width: 100%;\n  height: 43px;\n  margin: 0 auto;\n  font-size: 14px;\n  line-height: 1;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.activity-container {\n  display: flex;\n  align-items: center;\n}\n\n.parent-badge {\n  margin-left: 10px;\n}\n\n.distance-container {\n  display: flex;\n}\n\n@media screen and (max-width: 320px) {\n  .welcome-content-Para {\n    font-size: 15px !important;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 200;\n  }\n\n  .blue-button {\n    background-color: #4472C4;\n    padding: 0.6em;\n    border-radius: 7px;\n    text-align: center;\n    color: white;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 15px;\n    margin: 1em 0px;\n    font-weight: 200;\n  }\n\n  .green-button {\n    background-color: green;\n    padding: 0.5em;\n    border-radius: 7px;\n    text-align: center;\n    color: white;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 15px;\n    font-weight: 200;\n    margin: 1em 0px;\n  }\n\n  .alreday-member {\n    text-align: center;\n    font-size: 17px;\n    color: red;\n    font-family: \"Open Sans\", sans-serif;\n    margin-top: 0.7em;\n    font-weight: 200;\n  }\n\n  .card-content-font {\n    font-family: \"Open Sans\", sans-serif;\n    font-style: normal;\n    font-size: 15px;\n    text-align: center;\n    color: #707070;\n    margin-right: 1em;\n    margin-left: 1em;\n  }\n\n  .tittle-card {\n    font-family: \"Open Sans\", sans-serif;\n    font-style: normal;\n    font-size: 16px;\n    text-align: center;\n    color: #707070;\n    padding: 1em;\n  }\n\n  button.button-common {\n    height: 40px;\n    padding: 0px 40px;\n    border: 1px solid #707070;\n    background-color: #449D44;\n    color: white;\n    border-radius: 7px;\n    font-size: 15px;\n    font-family: \"Open Sans\", sans-serif;\n    font-style: bold;\n  }\n\n  .card-one {\n    border: 1px solid #707070;\n    margin: 0em 1.5em;\n    overflow: overlay;\n    height: 94%;\n  }\n}\n\n.not-loggeg-in-user {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.no-result-found {\n  background-color: #00000078;\n  /* position: absolute; */\n  height: 100vh;\n  z-index: 1000;\n}\n\n.popup-no-result {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0em 3em;\n  text-align: center;\n}\n\n.no-result-background {\n  background-color: white;\n  border-radius: 12px;\n}\n\n.no-result-popup-content {\n  padding: 1em 2em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 200;\n}\n\n.green-button {\n  background-color: green;\n  padding: 0.5em;\n  border-radius: 7px;\n  text-align: center;\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 15px;\n  font-weight: 200;\n  margin: 1em 0px;\n}\n\nimg.cross-image {\n  height: 3vh;\n}\n\n.crosss-sign {\n  float: right;\n  margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDRixlQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0lGOztBRERBO0VBRUUsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFHQSxnQkFBQTtBQ0NGOztBRENBO0VBRUUsb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNGLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0E7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBRUEsaUJBQUE7QUNBRjs7QURHQTtFQUVFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0RGOztBREdBO0VBQ0UsV0FBQTtBQ0FGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7QUNERjs7QURHQTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFFRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDREY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURFQTtFQUVFLHNCQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURFQTtFQUNFLGtDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEQ0E7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDRUE7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDR0Y7O0FER0E7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0FDSEY7O0FETUE7RUFDRSx5QkFBQTtBQ0hGOztBRE1BO0VBQ0UsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNIRjs7QURPQTtFQUNFLGVBQUE7QUNKRjs7QURPQTtFQUNFLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0FDSkY7O0FET0E7RUFFRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDRSxxQkFBQTtFQUNGLGNBQUE7QUNORjs7QURTQTtFQUNFLGVBQUE7QUNORjs7QURTQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtBQ1BGOztBRFdBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNSRjs7QURZQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDVEY7O0FEWUE7RUFDRSxTQUFBO0FDVEY7O0FEWUE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDVEY7O0FEYUE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQ1hGOztBRGNBO0VBQ0UsdUJBQUE7QUNYRjs7QURjQTtFQUNFLFVBQUE7QUNYRjs7QURjQTtFQUNFLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDWEY7O0FEY0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1hGOztBRGNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ1hGOztBRGVBO0VBQ0UsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDWkY7O0FEZUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ1pGOztBRGVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDWkY7O0FEZUE7RUFDRSxZQUFBO0FDWkY7O0FEZUE7RUFDRSxrQkFBQTtBQ1pGOztBRGVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNaRjs7QURlQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ1pGOztBRGNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDWEY7O0FEYUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FDWEY7O0FEYUE7RUFDRSxjQUFBO0FDVkY7O0FEWUE7RUFDQyxjQUFBO0VBQ0Qsb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDVEE7O0FEV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNSRjs7QURVQTtFQUNFLGlCQUFBO0FDUEY7O0FEU0E7RUFDRSxhQUFBO0FDTkY7O0FEVUE7RUFFQTtJQUNFLDBCQUFBO0lBQ0Esb0NBQUE7SUFDQSxnQkFBQTtFQ1JBOztFRFVGO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxvQ0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNQRTs7RURTRjtJQUNBLHVCQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0Esb0NBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VDTkU7O0VEUUY7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0lBQ0Esb0NBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VDTEU7O0VET0Y7SUFDQSxvQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNKRTs7RURNRjtJQUNBLG9DQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtFQ0hFOztFREtGO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7SUFDQSx5QkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxvQ0FBQTtJQUNBLGdCQUFBO0VDRkU7O0VESUY7SUFDQSx5QkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0VDREU7QUFDRjs7QURHQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0RBOztBREtBO0VBQ0UsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDRkY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4IDJlbTtcclxuXHJcbn1cclxucC53ZWxjb21lLWNvbnRlbnQtUGFyYSB7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcbi5ibHVlLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcclxuICBwYWRkaW5nOiAwLjZlbTtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbmZvbnQtc2l6ZTogMTlweDtcclxuICBtYXJnaW46IDFlbSAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG4uZ3JlZW4tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBwYWRkaW5nOiAwLjZlbTtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgbWFyZ2luOiAxZW0gMHB4O1xyXG59XHJcbi5hbHJlZGF5LW1lbWJlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tdG9wOiAwLjdlbTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1vb3BzXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwODA4ODU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiBcclxuIFxyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuLmNhcmQtY29udGVudC1mb250XHJcbntcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmNvbG9yOiAjNzA3MDcwO1xyXG5tYXJnaW4tcmlnaHQ6IDFlbTtcclxubWFyZ2luLWxlZnQ6IDFlbTtcclxuXHJcbn1cclxuLmNhcmQtb25le1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgbWFyZ2luOiAwZW0gMS41ZW07XHJcblxyXG4gIG92ZXJmbG93OiBvdmVybGF5O1xyXG5cclxufVxyXG4udGl0dGxlLWNhcmRcclxue1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuZm9ybS5mb3JtLWZpZWxkc3tcclxuICBtYXJnaW46IDJlbTtcclxufVxyXG5pbnB1dCNmbmFtZSB7XHJcbiAgLyogaGVpZ2h0OiA2dmg7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGhlaWdodDogNDdweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG59XHJcbnNlbGVjdCNjb3VudHJ5IHtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcblxyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcbi5mb3JtLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG4uZm9ybS1sYWJlbC1jb3VudHJ5XHJcbntcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMThweDtcclxufVxyXG5idXR0b24uYnV0dG9uLWNvbW1vbiB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDBweCA0MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICM0NDlENDQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbn1cclxuLnNlYXJjaC1jb3VudHJ5XHJcbntcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbn1cclxuLmNhcmQtb25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbmltZy5jcm9zcy1pbWFnZSB7XHJcbiAgd2lkdGg6IDklO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi53ZWxjb21lIHtcclxuaGVpZ2h0OiAxMDAlO1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uc2VyYWNoLXJlc3VsdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA3MztcclxuICBtYXJnaW46IDBlbSAwZW07XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9JbWFnZXMvQmFja2dyb3VuZFRpbGUucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgaGVpZ2h0Ojgwdmg7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICB3aWR0aDogODl2dztcclxuICBtYXJnaW4tdG9wOiA1ZW07XHJcblxyXG59XHJcblxyXG5pb24tY2FyZC5pb3MuaHlkcmF0ZWQge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLnRpdHRsZS1ob21lLXBhZ2Uge1xyXG4gIHBhZGRpbmc6IDEuNWVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nLXRvcDogMmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXR0bGUtaG9tZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLm1lbWJlci1jYXJkcyB7XHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MTcxNzE7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG5cclxufVxyXG5cclxucC5jYXJkLWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxuICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxucC5uYW1lLmNhcmQtaXRlbSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaG9iYmllcyB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG5cclxufVxyXG5cclxuLmFjdGl2aXRpZXMge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbn1cclxuXHJcbi5kaXN0YW5jZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmltZy5udW1iZXItbWFnZSB7XHJcbiAgd2lkdGg6IDklO1xyXG59XHJcblxyXG4ubGVmdC1oZWFkaW5nIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC8qIG1heC13aWR0aDogMTAwJTsgKi9cclxuICBoZWlnaHQ6IDQzcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC8qIGxpbmUtaGVpZ2h0OiAxOyAqL1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG59XHJcblxyXG5pbWcudXNlci1pbWFnZSB7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTR2aDtcclxufVxyXG5cclxuLm1vZGFsLWJhY2tkcm9wIHtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vZGFsLWJhY2tkcm9wLnNob3cge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbnAubW9kYWwtcGFyYSB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB3b3JkLXNwYWNpbmc6IC0xcHg7XHJcbn1cclxuXHJcbi5jaGVja2JveC1wb3B1cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaW1nLmNoZWNrLWJveCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbmg1Lndob3Mtb24tc2l0ZSB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmJ1dHRvbi1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1QURCMDA7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5LmxvZ2luLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5wLmNoZWNrLWJveC10ZXh0IHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5tZW1iZXItY2FyZC10ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogM3Z3O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzdnc7XHJcbn1cclxuXHJcbi5zaG93TW9yZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuaW5wdXQjdXNyIHtcclxuICBoZWlnaHQ6IDV2aDtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJhZGFnZS1uYW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xyXG59XHJcbi5iYWRnZS1mb250IHtcclxuICBmb250LXNpemU6IDlweDtcclxufVxyXG4ucmlnaHQtaGVhZGluZyB7XHJcbiBkaXNwbGF5OiBibG9jaztcclxuZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbm1heC13aWR0aDogMTAwJTtcclxuaGVpZ2h0OiA0M3B4O1xyXG5tYXJnaW46IDAgYXV0bztcclxuZm9udC1zaXplOiAxNHB4O1xyXG5saW5lLWhlaWdodDogMTtcclxuLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4td2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG50ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4uYWN0aXZpdHktY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnBhcmVudC1iYWRnZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmRpc3RhbmNlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpXHJcbntcclxuLndlbGNvbWUtY29udGVudC1QYXJhIHtcclxuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcbi5ibHVlLWJ1dHRvbiB7XHJcbmJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XHJcbnBhZGRpbmc6IDAuNmVtO1xyXG5ib3JkZXItcmFkaXVzOiA3cHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuY29sb3I6IHdoaXRlO1xyXG5mb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuZm9udC1zaXplOiAxNXB4O1xyXG5tYXJnaW46IDFlbSAwcHg7XHJcbmZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuLmdyZWVuLWJ1dHRvbntcclxuYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbnBhZGRpbmc6IDAuNWVtO1xyXG5ib3JkZXItcmFkaXVzOiA3cHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuY29sb3I6IHdoaXRlO1xyXG5mb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuZm9udC1zaXplOiAxNXB4O1xyXG5mb250LXdlaWdodDogMjAwO1xyXG5tYXJnaW46IDFlbSAwcHg7XHJcbn1cclxuLmFscmVkYXktbWVtYmVyIHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5mb250LXNpemU6IDE3cHg7XHJcbmNvbG9yOiByZWQ7XHJcbmZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG5tYXJnaW4tdG9wOiAwLjdlbTtcclxuZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG4uY2FyZC1jb250ZW50LWZvbnQge1xyXG5mb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXNpemU6IDE1cHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuY29sb3I6ICM3MDcwNzA7XHJcbm1hcmdpbi1yaWdodDogMWVtO1xyXG5tYXJnaW4tbGVmdDogMWVtO1xyXG59XHJcbi50aXR0bGUtY2FyZCB7XHJcbmZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5jb2xvcjogIzcwNzA3MDtcclxucGFkZGluZzogMWVtO1xyXG59XHJcbmJ1dHRvbi5idXR0b24tY29tbW9uIHtcclxuaGVpZ2h0OiA0MHB4O1xyXG5wYWRkaW5nOiAwcHggNDBweDtcclxuYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuYmFja2dyb3VuZC1jb2xvcjogIzQ0OUQ0NDtcclxuY29sb3I6IHdoaXRlO1xyXG5ib3JkZXItcmFkaXVzOiA3cHg7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxuZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbmZvbnQtc3R5bGU6IGJvbGQ7XHJcbn1cclxuLmNhcmQtb25lIHtcclxuYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxubWFyZ2luOiAwZW0gMS41ZW07XHJcbm92ZXJmbG93OiBvdmVybGF5O1xyXG5oZWlnaHQ6IDk0JTtcclxufVxyXG59XHJcbi5ub3QtbG9nZ2VnLWluLXVzZXIge1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuLm5vLXJlc3VsdC1mb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDc4O1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuLnBvcHVwLW5vLXJlc3VsdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDBlbSAzZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uby1yZXN1bHQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLm5vLXJlc3VsdC1wb3B1cC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxZW0gMmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi5ncmVlbi1idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgcGFkZGluZzogMC41ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgbWFyZ2luOiAxZW0gMHB4O1xyXG4gIH1cclxuICBpbWcuY3Jvc3MtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAzdmg7XHJcbn1cclxuLmNyb3Nzcy1zaWduIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiAxZW07XHJcbn0iLCIud2VsY29tZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IDJlbTtcbn1cblxucC53ZWxjb21lLWNvbnRlbnQtUGFyYSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5ibHVlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gIHBhZGRpbmc6IDAuNmVtO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBtYXJnaW46IDFlbSAwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5ncmVlbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgcGFkZGluZzogMC42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbjogMWVtIDBweDtcbn1cblxuLmFscmVkYXktbWVtYmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAwLjdlbTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLmJhY2tncm91bmQtb29wcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODA4MDg4NTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5jYXJkLWNvbnRlbnQtZm9udCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG5cbi5jYXJkLW9uZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIG1hcmdpbjogMGVtIDEuNWVtO1xuICBvdmVyZmxvdzogb3ZlcmxheTtcbn1cblxuLnRpdHRsZS1jYXJkIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbmZvcm0uZm9ybS1maWVsZHMge1xuICBtYXJnaW46IDJlbTtcbn1cblxuaW5wdXQjZm5hbWUge1xuICAvKiBoZWlnaHQ6IDZ2aDsgKi9cbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5zZWxlY3QjY291bnRyeSB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9ybS1sYWJlbC1jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMThweDtcbn1cblxuYnV0dG9uLmJ1dHRvbi1jb21tb24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDBweCA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ5RDQ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogYm9sZDtcbn1cblxuLnNlYXJjaC1jb3VudHJ5IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbn1cblxuLmNhcmQtb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuaW1nLmNyb3NzLWltYWdlIHtcbiAgd2lkdGg6IDklO1xuICBtYXJnaW46IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi53ZWxjb21lIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnNlcmFjaC1yZXN1bHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDczO1xuICBtYXJnaW46IDBlbSAwZW07XG4gIHotaW5kZXg6IDI7XG59XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL0ltYWdlcy9CYWNrZ3JvdW5kVGlsZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aWR0aDogODl2dztcbiAgbWFyZ2luLXRvcDogNWVtO1xufVxuXG5pb24tY2FyZC5pb3MuaHlkcmF0ZWQge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi50aXR0bGUtaG9tZS1wYWdlIHtcbiAgcGFkZGluZzogMS41ZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nLXRvcDogMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXR0bGUtaG9tZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubWVtYmVyLWNhcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzE3MTcxO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbnAuY2FyZC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbnAubmFtZS5jYXJkLWl0ZW0ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ob2JiaWVzIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzcwNzA3MDtcbn1cblxuLmFjdGl2aXRpZXMge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5kaXN0YW5jZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW1nLm51bWJlci1tYWdlIHtcbiAgd2lkdGg6IDklO1xufVxuXG4ubGVmdC1oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAvKiBtYXgtd2lkdGg6IDEwMCU7ICovXG4gIGhlaWdodDogNDNweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLyogbGluZS1oZWlnaHQ6IDE7ICovXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbmltZy51c2VyLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTR2aDtcbn1cblxuLm1vZGFsLWJhY2tkcm9wIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1iYWNrZHJvcC5zaG93IHtcbiAgb3BhY2l0eTogMTtcbn1cblxucC5tb2RhbC1wYXJhIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdvcmQtc3BhY2luZzogLTFweDtcbn1cblxuLmNoZWNrYm94LXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmltZy5jaGVjay1ib3gge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDUud2hvcy1vbi1zaXRlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idXR0b24tZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmVnaXN0ZXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBREIwMDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5LmxvZ2luLWJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbn1cblxucC5jaGVjay1ib3gtdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1lbWJlci1jYXJkLXRleHQge1xuICBtYXJnaW4tbGVmdDogM3Z3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWFyZ2luLXJpZ2h0OiAzdnc7XG59XG5cbi5zaG93TW9yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cblxuaW5wdXQjdXNyIHtcbiAgaGVpZ2h0OiA1dmg7XG4gIHBhZGRpbmc6IDFlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iYWRhZ2UtbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cblxuLmJhZGdlLWZvbnQge1xuICBmb250LXNpemU6IDlweDtcbn1cblxuLnJpZ2h0LWhlYWRpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0M3B4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmFjdGl2aXR5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wYXJlbnQtYmFkZ2Uge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmRpc3RhbmNlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC53ZWxjb21lLWNvbnRlbnQtUGFyYSB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuXG4gIC5ibHVlLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbiAgICBwYWRkaW5nOiAwLjZlbTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luOiAxZW0gMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cblxuICAuZ3JlZW4tYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBtYXJnaW46IDFlbSAwcHg7XG4gIH1cblxuICAuYWxyZWRheS1tZW1iZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tdG9wOiAwLjdlbTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG5cbiAgLmNhcmQtY29udGVudC1mb250IHtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICB9XG5cbiAgLnRpdHRsZS1jYXJkIHtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBwYWRkaW5nOiAxZW07XG4gIH1cblxuICBidXR0b24uYnV0dG9uLWNvbW1vbiB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDBweCA0MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0OUQ0NDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBib2xkO1xuICB9XG5cbiAgLmNhcmQtb25lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgIG1hcmdpbjogMGVtIDEuNWVtO1xuICAgIG92ZXJmbG93OiBvdmVybGF5O1xuICAgIGhlaWdodDogOTQlO1xuICB9XG59XG4ubm90LWxvZ2dlZy1pbi11c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5vLXJlc3VsdC1mb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA3ODtcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucG9wdXAtbm8tcmVzdWx0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwZW0gM2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uby1yZXN1bHQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4ubm8tcmVzdWx0LXBvcHVwLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxZW0gMmVtO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLmdyZWVuLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luOiAxZW0gMHB4O1xufVxuXG5pbWcuY3Jvc3MtaW1hZ2Uge1xuICBoZWlnaHQ6IDN2aDtcbn1cblxuLmNyb3Nzcy1zaWduIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDFlbTtcbn0iXX0= */";
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
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/ngx/index.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/ngx/index.js");

    var WelcomePage = /*#__PURE__*/function () {
      function WelcomePage(ConfigService, geolocation, platform, nativeGeocoder, zone, _Activatedroute, routes, locate, http, splashScreen, Diagnostic, emailComposer) {
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
        this.splashScreen = splashScreen;
        this.Diagnostic = Diagnostic;
        this.emailComposer = emailComposer;
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
        this.searchresult = false;
        this.isLoggedIn = false;
        this.notEntered = false;
        this.noResult = false;
      }

      _createClass(WelcomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.siginUser = JSON.parse(localStorage.getItem("currentUser"));
          this.splashScreen.show();
          this.isLoading = true;

          if (this.siginUser != null) {
            console.log(this.siginUser.user.field_already_declared.und);

            if (this.siginUser.user.field_already_declared.length == 0) {
              this.notEntered = true;
              this.isLoggedIn = true;
              this.isLoading = false;
              this.routes.navigate(["/topHobbies"]);
            }

            if (this.siginUser.user.field_already_declared.und.length == 1) {
              this.notEntered = false;
              this.isLoggedIn = false;
              this.isLoading = false;
            }
          } else {
            this.isLoggedIn = false;
            this.isLoading = false;
          }

          this.routes.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };
        }
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

            _this.getSearchData();
          });
        }
      }, {
        key: "postcodeManuallyEnter",
        value: function postcodeManuallyEnter(post) {
          this.postcode = post;
          console.log(this.postcode);
          this.getSearchData();
        }
      }, {
        key: "showFormPage",
        value: function showFormPage() {
          var _this2 = this;

          // We will hide this page at starting. If lat long fails, we will unhide it so that people can fill information
          var successCallback = function successCallback(isAvailable) {
            console.log(isAvailable);

            if (isAvailable == 'false') {
              _this2.hide = true;
            }
          };

          var errorCallback = function errorCallback(e) {
            return console.error(e);
          };

          this.Diagnostic.isGpsLocationEnabled().then(successCallback)["catch"](errorCallback);
          this.hide = true;
        }
      }, {
        key: "popOpen",
        value: function popOpen() {
          var _this3 = this;

          var successCallback = function successCallback(isAvailable) {
            console.log(isAvailable);

            if (isAvailable == false) {
              _this3.hide = true;
              _this3.isLoading = false;
            }
          };

          var errorCallback = function errorCallback(e) {
            return console.error(e);
          };

          this.Diagnostic.isGpsLocationEnabled().then(successCallback)["catch"](errorCallback);
          this.isLoading = true;
          this.geolocation.getCurrentPosition().then(function (resp) {
            _this3.lat = resp.coords.latitude;
            _this3.lng = resp.coords.longitude; // If we get lat long then we will pull Address details from reverse geo lookup

            if (_this3.lat && _this3.lng) {
              _this3.reverseGeoLookup();
            } else {
              _this3.showFormPage();
            }
          }) // If we do not get lat long, we will present page with form for address and post code
          ["catch"](function (error) {
            _this3.isLoading = false;

            _this3.showFormPage();
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
          var _this4 = this;

          this.currPage = [];
          this.ConfigService.getPostal(this.postcode, this.pageIndex).subscribe(function (elements) {
            _this4.currPage = Object.keys(elements).map(function (i) {
              return elements[i];
            });

            if (_this4.currPage.length > 0) {
              _this4.searchresult = true;
              _this4.searchResponse = _this4.searchResponse.concat(_this4.currPage);

              if (_this4.currPage.length < 10) {
                _this4.ConfigService.getPostal(_this4.postcode.substring(0, 4), _this4.pageIndex).subscribe(function (elements) {
                  _this4.currPage = Object.keys(elements).map(function (i) {
                    return elements[i];
                  });
                  _this4.searchResponse = _this4.searchResponse.concat(_this4.currPage);
                });
              }
            } else {
              _this4.searchresult = false;
              _this4.hide = false;
              _this4.noResult = true;
            }
          });
          this.pageIndex++;
        }
      }, {
        key: "closesearchpop",
        value: function closesearchpop() {
          this.pageIndex = 0;
          this.currPage = null;
          this.searchResponse = [];
          this.searchresult = false;
          this.hide = false;
          this.noResult = false;
          this.routes.navigate(["/"]);
        }
      }, {
        key: "loggedIncheck",
        value: function loggedIncheck() {
          this.siginUser = JSON.parse(localStorage.getItem("currentUser"));
          this.isLoading = true;

          if (this.siginUser != null) {
            this.isLoggedIn = true;
            this.isLoading = false;
          } else {
            this.isLoggedIn = false;
            this.isLoading = false;
          }
        }
      }, {
        key: "chcekLoggedIn",
        value: function chcekLoggedIn() {
          this.siginUser = JSON.parse(localStorage.getItem("currentUser"));

          if (this.siginUser == null) {
            this.routes.navigate(["/notLoggedIn"]);
          } else {
            this.routes.navigate(["/"]);
          }
        }
      }, {
        key: "openEmailcomposer",
        value: function openEmailcomposer() {
          this.emailComposer.open({
            to: 'ritin.nijhawan@gmail.com'
          });
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
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__["SplashScreen"]
      }, {
        type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_11__["Diagnostic"]
      }, {
        type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_12__["EmailComposer"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__["SplashScreen"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_11__["Diagnostic"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_12__["EmailComposer"]])], WelcomePage);
    /***/
  }
}]);
//# sourceMappingURL=welcome-welcome-module-es5.js.map