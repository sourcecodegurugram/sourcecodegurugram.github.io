function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-detail-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/detail/detail.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/detail/detail.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWelcomeDetailDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n\r\n<div class=\"main-pop-background\"*ngIf=\"!isLoggedIn\">\r\n\r\n\r\n  <div class=\"main-pop\">\r\n  \r\n  \r\n    <div class=\"pop-grids\">\r\n\r\n      <div class=\"pop-content\">\r\n        Not4Dating wants to help you create communities, build meaningful relationships and feel truly connected to others.\r\n        <h5 class=\"whos-on-site\">Who’s on the site?</h5>\r\n\r\n\r\n        <div class=\"checkbox-popup\">\r\n          <img src=\"../../assets/Images/check.png\" class=\"check-box\">\r\n          <p class=\"check-box-text\">Our youngest member is 18,our oldest member is 85</p>\r\n        </div>\r\n        <div class=\"checkbox-popup\">\r\n          <img src=\"../../assets/Images/check.png\" class=\"check-box\">\r\n          <p class=\"check-box-text\">64% In a Relationship, 36% Not in a Relationship  </p>\r\n        </div>\r\n        <div class=\"button-flex\">\r\n          <button type=\"button\" class=\"btn btn-primary register-button\" routerLink=\"/signup\">Awesome! Sign me up!</button>\r\n          <button type=\"button\" class=\"btn btn-primary login-button\" routerLink=\"/signin\">I am already a member</button>\r\n        </div>\r\n      </div>\r\n     \r\n    </div>\r\n    \r\n  \r\n  </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n<div class=\"background\" *ngIf=\"isLoggedIn\">\r\n  <div class=\"container-card\" >\r\n\r\n\r\n    <div class=\"picture\">\r\n      <div class=\"image-card\">\r\n        <img src=\"{{picture}}\" class=\"picture-img\">\r\n      </div>\r\n      <div class=\"top-card\">\r\n        <div class=\"name-output\">{{mail}}</div>\r\n        <p class=\"name-output\">{{name}}</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <ion-card class=\"subscribe-card\">\r\n      <div class=\"membership\">\r\n        <div *ngIf=\"genders\" class=\"inner-group\">\r\n          <div class=\"name\">Gender</div>\r\n          <div *ngFor=\"let gender of genders\" class=\"name-output\">{{gender.value}}</div>\r\n        </div><br>\r\n        <div *ngIf=\"statu\" class=\"inner-group\">\r\n          <div class=\"name\">Relationship Status:</div>\r\n          <div *ngFor=\"let status of statu\" class=\"name-output\">{{status.value}}</div>\r\n        </div><br>\r\n        <div *ngIf=\"edue\" class=\"inner-group\">\r\n          <div class=\"name\">Education Level</div>\r\n          <div *ngFor=\"let edu of edue\" class=\"name-output\">{{edu.value}}</div>\r\n        </div>\r\n      </div>\r\n    </ion-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <ion-card class=\"subscribe-card\" *ngIf=\"activity\">\r\n      <div class=\"membership inner-group-activity\">\r\n        <div >\r\n          <div class=\"name\">Activities/Interests</div>\r\n        </div>\r\n        <div>\r\n        <div *ngFor=\"let actvities of activity\" class=\"name-output\">{{actvities.value}}</div>\r\n      </div>\r\n      </div>\r\n    </ion-card>\r\n\r\n\r\n    <ion-card class=\"subscribe-card\">\r\n      <div class=\"membership\">\r\n        <div *ngIf=\"smokes\" class=\"inner-group\">\r\n          <div class=\"name\">How Often Do You Smoke?:</div>\r\n          <div *ngFor=\"let smoke of smokes\" class=\"name-output\">{{smoke.value}}</div>\r\n          <br>\r\n        </div>\r\n        <div *ngIf=\"tends\" class=\"inner-group\">\r\n          <div class=\"name\">Most Of My Friends Tend To Be:</div>\r\n          <div *ngFor=\"let tend of tends\" class=\"name-output\">{{tend.value}}</div>\r\n          <br>\r\n        </div>\r\n        <div *ngIf=\"cancels\" class=\"inner-group\">\r\n          <div class=\"name\">How Do you React If Plans Get Cancelled?:</div>\r\n          <div *ngFor=\"let cancel of cancels\" class=\"name-output\">{{cancel.value}}</div>\r\n          <br>\r\n        </div>\r\n\r\n        <div *ngIf=\"day\" class=\"inner-group\">\r\n          <div class=\"name\">How Do You Spend Your Days:</div>\r\n          <div *ngFor=\"let days of day\" class=\"name-output\">{{days.value}}</div>\r\n          <br>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"movie\" class=\"inner-group\">\r\n          <div class=\"name\">Favorite Movies:</div>\r\n          <div *ngFor=\"let movies of movie\" class=\"name-output\">{{movies.value}}</div>\r\n          <br>\r\n        </div>\r\n\r\n        <div *ngIf=\"Musics\" class=\"inner-group\">\r\n          <div class=\"name\"> Favorite Music</div>\r\n          <div *ngFor=\"let Music of musics\" class=\"name-output\">{{Music.value}}</div>\r\n          <br>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"show\" class=\"inner-group\">\r\n          <div class=\"name\">Favorite TV Shows</div>\r\n        <div *ngFor=\"let shows of show\" class=\"name-output\">{{shows.value}}</div>\r\n        <br>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"book\" class=\"inner-group\">\r\n          <div class=\"name\">Favorate Books</div>\r\n          <div *ngFor=\"let books of book\" class=\"name-output\">{{books.value}}</div>\r\n          <br>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"friend\" class=\"inner-group\">\r\n          <div class=\"name\">My Friends And I Usually Talk About:</div>\r\n        <div *ngFor=\"let friends of \" class=\"name-output\">{{friends.value}}</div>\r\n        <br>\r\n        </div>\r\n\r\n\r\n       \r\n      </div>\r\n    </ion-card>\r\n\r\n   \r\n\r\n\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/welcome/detail/detail-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/welcome/detail/detail-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: DetailPageRoutingModule */

  /***/
  function srcAppWelcomeDetailDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function () {
      return DetailPageRoutingModule;
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


    var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detail.page */
    "./src/app/welcome/detail/detail.page.ts");

    var routes = [{
      path: '',
      component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    }];

    var DetailPageRoutingModule = function DetailPageRoutingModule() {
      _classCallCheck(this, DetailPageRoutingModule);
    };

    DetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/welcome/detail/detail.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/welcome/detail/detail.module.ts ***!
    \*************************************************/

  /*! exports provided: DetailPageModule */

  /***/
  function srcAppWelcomeDetailDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPageModule", function () {
      return DetailPageModule;
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


    var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detail-routing.module */
    "./src/app/welcome/detail/detail-routing.module.ts");
    /* harmony import */


    var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail.page */
    "./src/app/welcome/detail/detail.page.ts");
    /* harmony import */


    var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../Navigation/NavigationBar/navigationbar.module */
    "./src/app/Navigation/NavigationBar/navigationbar.module.ts");

    var DetailPageModule = function DetailPageModule() {
      _classCallCheck(this, DetailPageModule);
    };

    DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"], _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__["NavigationbarModule"]],
      declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })], DetailPageModule);
    /***/
  },

  /***/
  "./src/app/welcome/detail/detail.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/welcome/detail/detail.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWelcomeDetailDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\n.membership {\n  padding: 10px;\n  text-align: left;\n  background-color: white;\n}\n\n.picture {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 0em;\n}\n\n.picture-img {\n  width: 50vw;\n  height: 13vh;\n  border-radius: 50%;\n  position: relative;\n  top: 7vh;\n  box-shadow: 0px 0px 0px 2px white;\n}\n\n.top-card {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  justify-content: center;\n  padding: 2vw;\n  padding-top: 8vh;\n  width: 86vw;\n  background-color: white;\n  margin: -5px;\n  padding-bottom: 2vh;\n  box-shadow: 2px 2px 6px 4px #2125294d;\n}\n\np {\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.image-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 29vw;\n}\n\n.inner-group {\n  display: grid;\n}\n\n.membership.inner-group-activity {\n  display: grid;\n}\n\nion-card.subscribe-card.md.hydrated {\n  margin: 2.5em 2em;\n  box-shadow: 2px 2px 6px 4px #2125294d;\n}\n\n.name {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.name-output {\n  font-size: 17px;\n  font-weight: 400;\n  margin: 3px 0px;\n}\n\n.pop-background {\n  background-color: #00000094;\n  height: 100vh;\n}\n\n.modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  grid-gap: 11px;\n  margin: 1em;\n  margin-top: 1em;\n  margin-bottom: 0px;\n}\n\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.side-bar-icon {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin: 0em;\n}\n\nimg.chat-bubble {\n  width: 46%;\n  margin-top: 1em;\n}\n\n.siderbar-icon-data {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 11px;\n  /* margin: 2em; */\n  margin: 0em 1em;\n}\n\n.group-text-image {\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.popup-chat-page {\n  margin-top: 7em;\n  margin-left: 1em;\n  text-align: justify;\n  margin-right: 1em;\n}\n\n.modal {\n  background: #000000a1;\n}\n\n.main-pop-background {\n  background-color: #000000a3;\n  background-position: center;\n  height: 100vh;\n  overflow: auto;\n}\n\n.main-pop {\n  display: block;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n}\n\n.pop-grids {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 0em;\n  background-color: white;\n  margin: 0em 2em;\n  margin-bottom: 0px;\n}\n\nh5.whos-on-site {\n  font-size: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n\n.checkbox-popup {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n\nimg.check-box {\n  margin-right: 10px;\n  text-align: center;\n}\n\n.button-flex {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.register-button {\n  background-color: #5ADB00;\n  height: 40px;\n}\n\nbutton.btn.btn-primary.login-button {\n  height: 40px;\n}\n\np.check-box-text {\n  margin-bottom: 0px;\n}\n\n.pop-content {\n  margin: 1em;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvd2VsY29tZS9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2VsY29tZS9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBRUksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FERUE7RUFHSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBR0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUNBQUE7QUNISjs7QURLQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtBQ0ZKOztBRElBO0VBRUksa0JBQUE7RUFDQSxlQUFBO0FDRko7O0FESUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNESjs7QURHQTtFQUNJLGFBQUE7QUNBSjs7QURJQTtFQUNJLGFBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EscUNBQUE7QUNESjs7QURHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksMkJBQUE7RUFDQSxhQUFBO0FDRUo7O0FESUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFFQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRE1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDSEo7O0FES0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNGSjs7QURJQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDREo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FESUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQUo7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQkFBQTtBQ0VKOztBREFBO0VBQ0ksMkJBQUE7RUFDQSwyQkFBQTtFQUNILGFBQUE7RUFDQSxjQUFBO0FDR0Q7O0FEREE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDSUo7O0FERkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ01KOztBREpFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ09KOztBREpFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNPSjs7QURMRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ1FKOztBRE5FO0VBQ0UsWUFBQTtBQ1NKOztBRFBFO0VBQ0Usa0JBQUE7QUNVSjs7QURSRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDV0oiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4ubWVtYmVyc2hpcCB7XHJcbiAgIFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucGljdHVyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDBlbTtcclxufVxyXG4ucGljdHVyZS1pbWdcclxue1xyXG4gIFxyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IDEzdmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgXHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA3dmg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggd2hpdGU7XHJcbn1cclxuLnRvcC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAydnc7XHJcbiAgICBwYWRkaW5nLXRvcDogOHZoO1xyXG4gICAgd2lkdGg6IDg2dnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogLTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAydmg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCA0cHggIzIxMjUyOTRkO1xyXG59XHJcbnBcclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5pbWFnZS1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjl2dztcclxufVxyXG4uaW5uZXItZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuXHJcbiAgICBcclxufVxyXG4ubWVtYmVyc2hpcC5pbm5lci1ncm91cC1hY3Rpdml0eSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG5cclxufVxyXG5pb24tY2FyZC5zdWJzY3JpYmUtY2FyZC5tZC5oeWRyYXRlZCB7XHJcbiAgICBtYXJnaW46IDIuNWVtIDJlbTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IDRweCMyMTI1Mjk0ZDtcclxufVxyXG4ubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5uYW1lLW91dHB1dCB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luOiAzcHggMHB4O1xyXG59XHJcbi5wb3AtYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOTQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubW9kYWwtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xyXG4gICBcclxuICAgIGdyaWQtZ2FwOiAxMXB4O1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4ucHJvZmlsZS1uYW1lLW1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnNpZGUtYmFyLWljb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW46IDBlbTtcclxufVxyXG5pbWcuY2hhdC1idWJibGUge1xyXG4gICAgd2lkdGg6IDQ2JTtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG4uc2lkZXJiYXItaWNvbi1kYXRhIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcbiAgICBncmlkLWdhcDogMTFweDtcclxuICAgIC8qIG1hcmdpbjogMmVtOyAqL1xyXG4gICAgbWFyZ2luOiAwZW0gMWVtO1xyXG59XHJcblxyXG5cclxuLmdyb3VwLXRleHQtaW1hZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnNpZGViYXItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5wb3B1cC1jaGF0LXBhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogN2VtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG4ubW9kYWx7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTE7XHJcbn1cclxuLm1haW4tcG9wLWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGEzO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gaGVpZ2h0OiAxMDB2aDtcclxuIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5tYWluLXBvcCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnBvcC1ncmlkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMGVtIDJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5oNS53aG9zLW9uLXNpdGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC5jaGVja2JveC1wb3B1cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgaW1nLmNoZWNrLWJveCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgfVxyXG4gIC5idXR0b24tZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAucmVnaXN0ZXItYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QURCMDA7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkubG9naW4tYnV0dG9uIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcbiAgcC5jaGVjay1ib3gtdGV4dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIC5wb3AtY29udGVudCB7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59IiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4ubWVtYmVyc2hpcCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucGljdHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAwZW07XG59XG5cbi5waWN0dXJlLWltZyB7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDEzdmg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDd2aDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHdoaXRlO1xufVxuXG4udG9wLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAydnc7XG4gIHBhZGRpbmctdG9wOiA4dmg7XG4gIHdpZHRoOiA4NnZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAtNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xuICBib3gtc2hhZG93OiAycHggMnB4IDZweCA0cHggIzIxMjUyOTRkO1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5pbWFnZS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyOXZ3O1xufVxuXG4uaW5uZXItZ3JvdXAge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4ubWVtYmVyc2hpcC5pbm5lci1ncm91cC1hY3Rpdml0eSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbmlvbi1jYXJkLnN1YnNjcmliZS1jYXJkLm1kLmh5ZHJhdGVkIHtcbiAgbWFyZ2luOiAyLjVlbSAyZW07XG4gIGJveC1zaGFkb3c6IDJweCAycHggNnB4IDRweCAjMjEyNTI5NGQ7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubmFtZS1vdXRwdXQge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogM3B4IDBweDtcbn1cblxuLnBvcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDk0O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubW9kYWwtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcbiAgZ3JpZC1nYXA6IDExcHg7XG4gIG1hcmdpbjogMWVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnByb2ZpbGUtbmFtZS1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaWRlLWJhci1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtYXJnaW46IDBlbTtcbn1cblxuaW1nLmNoYXQtYnViYmxlIHtcbiAgd2lkdGg6IDQ2JTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4uc2lkZXJiYXItaWNvbi1kYXRhIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICBncmlkLWdhcDogMTFweDtcbiAgLyogbWFyZ2luOiAyZW07ICovXG4gIG1hcmdpbjogMGVtIDFlbTtcbn1cblxuLmdyb3VwLXRleHQtaW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2lkZWJhci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wb3B1cC1jaGF0LXBhZ2Uge1xuICBtYXJnaW4tdG9wOiA3ZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG4ubW9kYWwge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTE7XG59XG5cbi5tYWluLXBvcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGEzO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWFpbi1wb3Age1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBvcC1ncmlkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDBlbSAyZW07XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuaDUud2hvcy1vbi1zaXRlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jaGVja2JveC1wb3B1cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pbWcuY2hlY2stYm94IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b24tZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmVnaXN0ZXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBREIwMDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5LmxvZ2luLWJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbn1cblxucC5jaGVjay1ib3gtdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnBvcC1jb250ZW50IHtcbiAgbWFyZ2luOiAxZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/welcome/detail/detail.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/welcome/detail/detail.page.ts ***!
    \***********************************************/

  /*! exports provided: DetailPage */

  /***/
  function srcAppWelcomeDetailDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPage", function () {
      return DetailPage;
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


    var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../config.service */
    "./src/app/config.service.ts");

    var DetailPage = /*#__PURE__*/function () {
      function DetailPage(_Activatedroute, ConfigService) {
        _classCallCheck(this, DetailPage);

        this._Activatedroute = _Activatedroute;
        this.ConfigService = ConfigService;
        this.postman = {};
        this.isLoggedIn = true;
      }

      _createClass(DetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.userLogged = JSON.parse(localStorage.getItem("currentUser"));

          if (this.userLogged == null) {
            this.isLoggedIn = false;
          } else {
            this.isLoggedIn = true;
          }

          this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.name = params.get("name");
            _this.mail = params.get("mail");
            _this.uid = params.get("uid");
          });
          this.ConfigService.getUser(this.uid).subscribe(function (data) {
            _this.post = data;
            _this.picture = _this.post.picture.url;
            _this["long"] = _this.post.field_long_in_city.length;
            _this.genders = _this.post.field_gender.und;
            _this.statu = _this.post.field_relationship_status.und;
            _this.smokes = _this.post.field_smoke.und;
            _this.activity = _this.post.field_activities_interests.und;
            _this.edue = _this.post.field_education_level.und;
            _this.tends = _this.post.field_friends_tend_to_be.und;
            _this.cancels = _this.post.field_plans_get_cancelled.und;
            _this.day = _this.post.field_spend_your_days.und;
            _this.movie = _this.post.field_favorite_movies.und;
            _this.musics = _this.post.field_favorite_music.und; //this.show = this.post.field_favorite_tv_show.und;

            _this.book = _this.post.field_favorite_books.und;
            _this.friend = _this.post.field_talk_about.und;
          });
        }
      }]);

      return DetailPage;
    }();

    DetailPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }];
    };

    DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-detail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/detail/detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detail.page.scss */
      "./src/app/welcome/detail/detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], DetailPage);
    /***/
  }
}]);
//# sourceMappingURL=welcome-detail-detail-module-es5.js.map