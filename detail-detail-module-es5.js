function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n\r\n<div class=\"main-pop-background\"*ngIf=\"!isLoggedIn\">\r\n\r\n\r\n  <div class=\"main-pop\">\r\n  \r\n  \r\n    <div class=\"pop-grids\">\r\n\r\n      <div class=\"pop-content\">\r\n        Not4Dating wants to help you create communities, build meaningful relationships and feel truly connected to others.\r\n        <h5 class=\"whos-on-site\">Who’s on the site?</h5>\r\n\r\n\r\n        <div class=\"checkbox-popup\">\r\n          <img src=\"../../assets/Images/check.png\" class=\"check-box\">\r\n          <p class=\"check-box-text\">Our youngest member is 18,our oldest member is 85</p>\r\n        </div>\r\n        <div class=\"checkbox-popup\">\r\n          <img src=\"../../assets/Images/check.png\" class=\"check-box\">\r\n          <p class=\"check-box-text\">64% In a Relationship, 36% Not in a Relationship  </p>\r\n        </div>\r\n        <div class=\"button-flex\">\r\n          <button type=\"button\" class=\"btn btn-primary register-button\" routerLink=\"/signup\">Register Now</button>\r\n          <button type=\"button\" class=\"btn btn-primary login-button\" routerLink=\"/signin\">Login Now</button>\r\n        </div>\r\n      </div>\r\n     \r\n    </div>\r\n    \r\n  \r\n  </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n<div class=\"background\" *ngIf=\"isLoggedIn\">\r\n  <div class=\"container-card\" >\r\n\r\n\r\n    <div class=\"picture\">\r\n      <div class=\"image-card\">\r\n        <img src=\"{{picture}}\" class=\"picture-img\">\r\n      </div>\r\n      <div class=\"top-card\">\r\n        <div class=\"name-output\">{{mail}}</div>\r\n        <p class=\"name-output\">{{name}}</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <ion-card class=\"subscribe-card\">\r\n      <div class=\"membership\">\r\n        <div *ngIf=\"genders\" class=\"inner-group\">\r\n          <div class=\"name\">Gender</div>\r\n          <div *ngFor=\"let gender of genders\" class=\"name-output\">{{gender.value}}</div>\r\n        </div><br>\r\n        <div *ngIf=\"statu\" class=\"inner-group\">\r\n          <div class=\"name\">Relationship Status:</div>\r\n          <div *ngFor=\"let status of statu\" class=\"name-output\">{{status.value}}</div>\r\n        </div><br>\r\n        <div *ngIf=\"edue\" class=\"inner-group\">\r\n          <div class=\"name\">Education Level</div>\r\n          <div *ngFor=\"let edu of edue\" class=\"name-output\">{{edu.value}}</div>\r\n        </div>\r\n      </div>\r\n    </ion-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <ion-card class=\"subscribe-card\" *ngIf=\"activity\">\r\n      <div class=\"membership inner-group-activity\">\r\n        <div >\r\n          <div class=\"name\">Activities/Interests</div>\r\n        </div>\r\n        <div>\r\n        <div *ngFor=\"let actvities of activity\" class=\"name-output\">{{actvities.value}}</div>\r\n      </div>\r\n      </div>\r\n    </ion-card>\r\n\r\n\r\n    <ion-card class=\"subscribe-card\">\r\n      <div class=\"membership\">\r\n        <div *ngIf=\"smokes\" class=\"inner-group\">\r\n          <div class=\"name\">How Often Do You Smoke?:</div>\r\n          <div *ngFor=\"let smoke of smokes\" class=\"name-output\">{{smoke.value}}</div>\r\n          <br>\r\n        </div>\r\n        <div *ngIf=\"tends\" class=\"inner-group\">\r\n          <div class=\"name\">Most Of My Friends Tend To Be:</div>\r\n          <div *ngFor=\"let tend of tends\" class=\"name-output\">{{tend.value}}</div>\r\n          <br>\r\n        </div>\r\n        <div *ngIf=\"cancels\" class=\"inner-group\">\r\n          <div class=\"name\">How Do you React If Plans Get Cancelled?:</div>\r\n          <div *ngFor=\"let cancel of cancels\" class=\"name-output\">{{cancel.value}}</div>\r\n          <br>\r\n        </div>\r\n\r\n        <div *ngIf=\"day\" class=\"inner-group\">\r\n          <div class=\"name\">How Do You Spend Your Days:</div>\r\n          <div *ngFor=\"let days of day\" class=\"name-output\">{{days.value}}</div>\r\n          <br>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"movie\" class=\"inner-group\">\r\n          <div class=\"name\">Favorite Movies:</div>\r\n          <div *ngFor=\"let movies of movie\" class=\"name-output\">{{movies.value}}</div>\r\n          <br>\r\n        </div>\r\n\r\n        <div *ngIf=\"Musics\" class=\"inner-group\">\r\n          <div class=\"name\"> Favorite Music</div>\r\n          <div *ngFor=\"let Music of musics\" class=\"name-output\">{{Music.value}}</div>\r\n          <br>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"show\" class=\"inner-group\">\r\n          <div class=\"name\">Favorite TV Shows</div>\r\n        <div *ngFor=\"let shows of show\" class=\"name-output\">{{shows.value}}</div>\r\n        <br>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"book\" class=\"inner-group\">\r\n          <div class=\"name\">Favorate Books</div>\r\n          <div *ngFor=\"let books of book\" class=\"name-output\">{{books.value}}</div>\r\n          <br>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"friend\" class=\"inner-group\">\r\n          <div class=\"name\">My Friends And I Usually Talk About:</div>\r\n        <div *ngFor=\"let friends of \" class=\"name-output\">{{friends.value}}</div>\r\n        <br>\r\n        </div>\r\n\r\n\r\n       \r\n      </div>\r\n    </ion-card>\r\n\r\n   \r\n\r\n\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/detail/detail-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/detail/detail-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: DetailPageRoutingModule */

  /***/
  function srcAppDetailDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/detail/detail.page.ts");

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
  "./src/app/detail/detail.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/detail/detail.module.ts ***!
    \*****************************************/

  /*! exports provided: DetailPageModule */

  /***/
  function srcAppDetailDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/detail/detail-routing.module.ts");
    /* harmony import */


    var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail.page */
    "./src/app/detail/detail.page.ts");
    /* harmony import */


    var _navigationbar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../navigationbar/navigationbar.module */
    "./src/app/navigationbar/navigationbar.module.ts");

    var DetailPageModule = function DetailPageModule() {
      _classCallCheck(this, DetailPageModule);
    };

    DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"], _navigationbar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__["NavigationbarModule"]],
      declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })], DetailPageModule);
    /***/
  },

  /***/
  "./src/app/detail/detail.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/detail/detail.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\n.membership {\n  padding: 10px;\n  text-align: left;\n  background-color: white;\n}\n\n.picture {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 0em;\n}\n\n.picture-img {\n  width: 50vw;\n  height: 13vh;\n  border-radius: 50%;\n  position: relative;\n  top: 7vh;\n  box-shadow: 0px 0px 0px 2px white;\n}\n\n.top-card {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  justify-content: center;\n  padding: 2vw;\n  padding-top: 8vh;\n  width: 86vw;\n  background-color: white;\n  margin: -5px;\n  padding-bottom: 2vh;\n  box-shadow: 2px 2px 6px 4px #2125294d;\n}\n\np {\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.image-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 29vw;\n}\n\n.inner-group {\n  display: grid;\n}\n\n.membership.inner-group-activity {\n  display: grid;\n}\n\nion-card.subscribe-card.md.hydrated {\n  margin: 2.5em 2em;\n  box-shadow: 2px 2px 6px 4px #2125294d;\n}\n\n.name {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.name-output {\n  font-size: 17px;\n  font-weight: 400;\n  margin: 3px 0px;\n}\n\n.pop-background {\n  background-color: #00000094;\n  height: 100vh;\n}\n\n.modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  grid-gap: 11px;\n  margin: 1em;\n  margin-top: 1em;\n  margin-bottom: 0px;\n}\n\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.side-bar-icon {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin: 0em;\n}\n\nimg.chat-bubble {\n  width: 46%;\n  margin-top: 1em;\n}\n\n.siderbar-icon-data {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 11px;\n  /* margin: 2em; */\n  margin: 0em 1em;\n}\n\n.group-text-image {\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.popup-chat-page {\n  margin-top: 7em;\n  margin-left: 1em;\n  text-align: justify;\n  margin-right: 1em;\n}\n\n.modal {\n  background: #000000a1;\n}\n\n.main-pop-background {\n  background-color: #000000a3;\n  background-position: center;\n  height: 100vh;\n  overflow: auto;\n}\n\n.main-pop {\n  display: block;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n}\n\n.pop-grids {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 0em;\n  background-color: white;\n  margin: 0em 2em;\n  margin-bottom: 0px;\n}\n\nh5.whos-on-site {\n  font-size: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n\n.checkbox-popup {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n\nimg.check-box {\n  margin-right: 10px;\n  text-align: center;\n}\n\n.button-flex {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.register-button {\n  background-color: #5ADB00;\n  height: 40px;\n}\n\nbutton.btn.btn-primary.login-button {\n  height: 40px;\n}\n\np.check-box-text {\n  margin-bottom: 0px;\n}\n\n.pop-content {\n  margin: 1em;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL0s6XFxBbmd1bGFyIFByb2plY3RcXG5vdDREYXRpbmcvc3JjXFxhcHBcXGRldGFpbFxcZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUVJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDREo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREVBO0VBR0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUdBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlDQUFBO0FDSEo7O0FES0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUNGSjs7QURJQTtFQUVJLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBRElBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDREo7O0FER0E7RUFDSSxhQUFBO0FDQUo7O0FESUE7RUFDSSxhQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLHFDQUFBO0FDREo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLDJCQUFBO0VBQ0EsYUFBQTtBQ0VKOztBRElBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBRUEsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURNQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0hKOztBREtBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDRko7O0FESUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0RKOztBREdBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBRElBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDREo7O0FER0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7QUNFSjs7QURBQTtFQUNJLDJCQUFBO0VBQ0EsMkJBQUE7RUFDSCxhQUFBO0VBQ0EsY0FBQTtBQ0dEOztBRERBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNNSjs7QURKRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURKRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDT0o7O0FETEU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNRSjs7QURORTtFQUNFLFlBQUE7QUNTSjs7QURQRTtFQUNFLGtCQUFBO0FDVUo7O0FEUkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ1dKIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9JbWFnZXMvQmFja2dyb3VuZFRpbGUucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi5tZW1iZXJzaGlwIHtcclxuICAgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5waWN0dXJlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogMGVtO1xyXG59XHJcbi5waWN0dXJlLWltZ1xyXG57XHJcbiAgXHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogMTN2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDd2aDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCB3aGl0ZTtcclxufVxyXG4udG9wLWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJ2dztcclxuICAgIHBhZGRpbmctdG9wOiA4dmg7XHJcbiAgICB3aWR0aDogODZ2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAtNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJ2aDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IDRweCAjMjEyNTI5NGQ7XHJcbn1cclxucFxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmltYWdlLWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyOXZ3O1xyXG59XHJcbi5pbm5lci1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG5cclxuICAgIFxyXG59XHJcbi5tZW1iZXJzaGlwLmlubmVyLWdyb3VwLWFjdGl2aXR5IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG59XHJcbmlvbi1jYXJkLnN1YnNjcmliZS1jYXJkLm1kLmh5ZHJhdGVkIHtcclxuICAgIG1hcmdpbjogMi41ZW0gMmVtO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggNHB4IzIxMjUyOTRkO1xyXG59XHJcbi5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLm5hbWUtb3V0cHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDNweCAwcHg7XHJcbn1cclxuLnBvcC1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5NDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5tb2RhbC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XHJcbiAgIFxyXG4gICAgZ3JpZC1nYXA6IDExcHg7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbi5wcm9maWxlLW5hbWUtbW9kYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uc2lkZS1iYXItaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbjogMGVtO1xyXG59XHJcbmltZy5jaGF0LWJ1YmJsZSB7XHJcbiAgICB3aWR0aDogNDYlO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbi5zaWRlcmJhci1pY29uLWRhdGEge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcclxuICAgIGdyaWQtZ2FwOiAxMXB4O1xyXG4gICAgLyogbWFyZ2luOiAyZW07ICovXHJcbiAgICBtYXJnaW46IDBlbSAxZW07XHJcbn1cclxuXHJcblxyXG4uZ3JvdXAtdGV4dC1pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uc2lkZWJhci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnBvcHVwLWNoYXQtcGFnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA3ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcbi5tb2RhbHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDBhMTtcclxufVxyXG4ubWFpbi1wb3AtYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYTM7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiBoZWlnaHQ6IDEwMHZoO1xyXG4gb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLm1haW4tcG9wIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ucG9wLWdyaWRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwZW0gMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbmg1Lndob3Mtb24tc2l0ZSB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgLmNoZWNrYm94LXBvcHVwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBpbWcuY2hlY2stYm94IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgLmJ1dHRvbi1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVBREIwMDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcbiAgYnV0dG9uLmJ0bi5idG4tcHJpbWFyeS5sb2dpbi1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICBwLmNoZWNrLWJveC10ZXh0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbiAgLnBvcC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9JbWFnZXMvQmFja2dyb3VuZFRpbGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5tZW1iZXJzaGlwIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5waWN0dXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDBlbTtcbn1cblxuLnBpY3R1cmUtaW1nIHtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogMTN2aDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogN3ZoO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggd2hpdGU7XG59XG5cbi50b3AtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJ2dztcbiAgcGFkZGluZy10b3A6IDh2aDtcbiAgd2lkdGg6IDg2dnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IC01cHg7XG4gIHBhZGRpbmctYm90dG9tOiAydmg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNnB4IDRweCAjMjEyNTI5NGQ7XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmltYWdlLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDI5dnc7XG59XG5cbi5pbm5lci1ncm91cCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5tZW1iZXJzaGlwLmlubmVyLWdyb3VwLWFjdGl2aXR5IHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuaW9uLWNhcmQuc3Vic2NyaWJlLWNhcmQubWQuaHlkcmF0ZWQge1xuICBtYXJnaW46IDIuNWVtIDJlbTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggNHB4ICMyMTI1Mjk0ZDtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5uYW1lLW91dHB1dCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAzcHggMHB4O1xufVxuXG4ucG9wLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOTQ7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5tb2RhbC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xuICBncmlkLWdhcDogMTFweDtcbiAgbWFyZ2luOiAxZW07XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ucHJvZmlsZS1uYW1lLW1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNpZGUtYmFyLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1hcmdpbjogMGVtO1xufVxuXG5pbWcuY2hhdC1idWJibGUge1xuICB3aWR0aDogNDYlO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5zaWRlcmJhci1pY29uLWRhdGEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gIGdyaWQtZ2FwOiAxMXB4O1xuICAvKiBtYXJnaW46IDJlbTsgKi9cbiAgbWFyZ2luOiAwZW0gMWVtO1xufVxuXG4uZ3JvdXAtdGV4dC1pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaWRlYmFyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBvcHVwLWNoYXQtcGFnZSB7XG4gIG1hcmdpbi10b3A6IDdlbTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi5tb2RhbCB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBhMTtcbn1cblxuLm1haW4tcG9wLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYTM7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tYWluLXBvcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucG9wLWdyaWRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDBlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMGVtIDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5oNS53aG9zLW9uLXNpdGUge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNoZWNrYm94LXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmltZy5jaGVjay1ib3gge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZWdpc3Rlci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubG9naW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5wLmNoZWNrLWJveC10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ucG9wLWNvbnRlbnQge1xuICBtYXJnaW46IDFlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/detail/detail.page.ts":
  /*!***************************************!*\
    !*** ./src/app/detail/detail.page.ts ***!
    \***************************************/

  /*! exports provided: DetailPage */

  /***/
  function srcAppDetailDetailPageTs(module, __webpack_exports__, __webpack_require__) {
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
    /*! ../config.service */
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
            console.log("Please Login");
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
            console.log(_this.post);
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detail.page.scss */
      "./src/app/detail/detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], DetailPage);
    /***/
  }
}]);
//# sourceMappingURL=detail-detail-module-es5.js.map