function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-userDetail-userDetail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/userDetail/userDetail.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/userDetail/userDetail.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatUserDetailUserDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n<div class=\"main-pop-background\">\r\n  <div class=\"main-pop\">\r\n    <div class=\"pop-grids\">\r\n      <div class=\"modal-grid\">\r\n        <div class=\"profile-picture-modal\">\r\n          <img src={{picture}} class=\"image-profile\">\r\n        </div>\r\n        <div class=\"profile-name-modal\">\r\n          <span class=\"name\">{{name}}</span>\r\n        </div>\r\n        <div class=\"close-button\">\r\n          <img src=\"../../assets/Images/sign.png\" class=\"close-chat-bubble\" (click)=\"backClicked()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"siderbar-icon-data\">\r\n        <div class=\"side-bar-icon\">\r\n          <div class=\"group-text-image\">\r\n            <ion-icon name=\"chatbubble-ellipses\" routerLink=\"/new-message/{{uid}}/{{name}}\" class=\"favorate_star\">\r\n            </ion-icon>\r\n            <!-- <span class=\"name-icon\">Chat</span> -->\r\n          </div>\r\n          <div *ngIf=\"favorites_status == 1\" class=\"group-text-image\" style=\"opacity: .4;\">\r\n            <ion-icon name=\"star\" class=\"favorate_star disable_fav\"></ion-icon>\r\n\r\n            <!-- <span class=\"name-icon\">Favorite</span> -->\r\n          </div>\r\n          <div *ngIf=\"favorites_status == 2\" class=\"group-text-image\" (click)=\"addFavorate()\">\r\n            <ion-icon name=\"star\" class=\"favorate_star\"></ion-icon>\r\n            <!-- <span class=\"name-icon\">ADD Favorite</span> -->\r\n          </div>\r\n          <div *ngIf=\"favorites_status == 3\" class=\"group-text-image\" (click)=\"removingFavorate()\">\r\n            <ion-icon name=\"star\" class=\"favorate_star remove_fav\"></ion-icon>\r\n            <!-- <span class=\"name-icon\">Remove Favorite</span> -->\r\n          </div>\r\n          <div class=\"group-text-image\">\r\n            <ion-icon name=\"close-outline\" (click)=\"blockuserpop()\" class=\"favorate_close\"></ion-icon>\r\n          </div>\r\n          <div class=\"group-text-image\">\r\n            <ion-icon name=\"sad\" class=\"favorate_star \"></ion-icon>\r\n          </div>\r\n          <div class=\"group-text-image\">\r\n            <!-- <span class=\"name-icon\">Report to admin</span> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"sidebar-content\">\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\">FullName</div>\r\n            <div class=\"output-text\">{{name}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\">Gender:</div>\r\n            <div class=\"output-text\" *ngFor=\"let genders of genders\">{{genders.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\">Actvities:</div>\r\n            <div class=\"output-text\" *ngFor=\"let activity of activity\">{{activity.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"contact\">I Want To Be Contacted By:</div>\r\n            <div class=\"output-text\" *ngFor=\"let contact of contact\">{{contact.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"musics\">Favorite Music:</div>\r\n            <div class=\"output-text\" *ngFor=\"let Music of musics\">{{Music.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"book\">Favorate Books:</div>\r\n            <div class=\"output-text\" *ngFor=\"let books of book\">{{books.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"movie\">Favorate Movies:</div>\r\n            <div class=\"output-text\" *ngFor=\"let movies of movie\">{{movies.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"day\">How you spend your days?:</div>\r\n            <div class=\"output-text\" *ngFor=\"let days of day\">{{days.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"cancels\">If plan get cancels?:</div>\r\n            <div class=\"output-text\" *ngFor=\"let cancel of cancels\">{{cancel.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"tends\">Firends tends to be?:</div>\r\n            <div class=\"output-text\" *ngFor=\"let tend of tends\">{{tend.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"edue\">Education Level:</div>\r\n            <div class=\"output-text\" *ngFor=\"let edue of edue\">{{edue.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"smokes\">Do you smokes:</div>\r\n            <div class=\"output-text\" *ngFor=\"let smokes of smokes\">{{smokes.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"statu\">Relationship status:</div>\r\n            <div class=\"output-text\" *ngFor=\"let statu of statu\">{{statu.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"long\">How long you live:</div>\r\n            <div class=\"output-text\" *ngFor=\"let long of long\">{{long.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"alcohol\">Do you drink:</div>\r\n            <div class=\"output-text\" *ngFor=\"let alcohol of alcohol\">{{alcohol.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"language\">Language:</div>\r\n            <div class=\"output-text\" *ngFor=\"let language of language\">{{language.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"talk\">Friends talk About:</div>\r\n            <div class=\"output-text\" *ngFor=\"let talk of talk\">{{talk.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"tv\">TV Shows:</div>\r\n            <div class=\"output-text\" *ngFor=\"let tv of tv\">{{tv.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"good\">Good Friends:</div>\r\n            <div class=\"output-text\" *ngFor=\"let good of good\">{{good.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"pets\">Pets:</div>\r\n            <div class=\"output-text\" *ngFor=\"let pets of pets\">{{pets.value}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Add user to favorites?-->\r\n<div class=\"favorate-popup\" *ngIf=\"favoarte\">\r\n  <div class=\"favorate-popup-content-one\">\r\n    <div class=\"favorate-popup-content-two\">\r\n      <div class=\"add_as_favorate\">\r\n        <div class=\"content-add-as-favorate\">\r\n          Add user to favorites?\r\n        </div>\r\n        <div class=\"button-add-as-favorate\">\r\n          <ion-button color=\"success\" (click)=\"getFavorite()\">Confirm</ion-button>\r\n          <ion-button color=\"danger\" (click)=\"closePopup()\">Cancel</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--Remove user from favorites?-->\r\n<div class=\"favorate-popup\" *ngIf=\"removingFav\">\r\n  <div class=\"favorate-popup-content-one\">\r\n    <div class=\"favorate-popup-content-two\">\r\n      <div class=\"add_as_favorate\">\r\n        <div class=\"content-add-as-favorate\">\r\n          Remove user from favorites?\r\n        </div>\r\n        <div class=\"button-add-as-favorate\">\r\n          <ion-button color=\"success\" (click)=\"removeFavorite()\">Confirm</ion-button>\r\n          <ion-button color=\"danger\" (click)=\"closePopup()\">Cancel</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!--Block user?-->\r\n<div class=\"favorate-popup\" *ngIf=\"blockusers\">\r\n  <div class=\"favorate-popup-content-one\">\r\n    <div class=\"favorate-popup-content-two\">\r\n      <div class=\"add_as_favorate\">\r\n        <div class=\"content-add-as-favorate\">\r\n          Block user?\r\n        </div>\r\n        <div class=\"button-add-as-favorate\">\r\n          <ion-button color=\"success\" (click)=\"Blockuser()\">Confirm</ion-button>\r\n          <ion-button color=\"danger\" (click)=\"closePopup()\">Cancel</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/chat/userDetail/userDetail-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/chat/userDetail/userDetail-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: userDetailPageRoutingModule */

  /***/
  function srcAppChatUserDetailUserDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userDetailPageRoutingModule", function () {
      return userDetailPageRoutingModule;
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


    var _userDetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./userDetail.page */
    "./src/app/chat/userDetail/userDetail.page.ts");

    var routes = [{
      path: '',
      component: _userDetail_page__WEBPACK_IMPORTED_MODULE_3__["userDetailPage"]
    }];

    var userDetailPageRoutingModule = function userDetailPageRoutingModule() {
      _classCallCheck(this, userDetailPageRoutingModule);
    };

    userDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], userDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chat/userDetail/userDetail.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/chat/userDetail/userDetail.module.ts ***!
    \******************************************************/

  /*! exports provided: userDetailPageModule */

  /***/
  function srcAppChatUserDetailUserDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userDetailPageModule", function () {
      return userDetailPageModule;
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


    var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _userDetail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./userDetail-routing.module */
    "./src/app/chat/userDetail/userDetail-routing.module.ts");
    /* harmony import */


    var _userDetail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./userDetail.page */
    "./src/app/chat/userDetail/userDetail.page.ts");
    /* harmony import */


    var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../Navigation/NavigationBar/navigationbar.module */
    "./src/app/Navigation/NavigationBar/navigationbar.module.ts");

    var userDetailPageModule = function userDetailPageModule() {
      _classCallCheck(this, userDetailPageModule);
    };

    userDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _userDetail_routing_module__WEBPACK_IMPORTED_MODULE_6__["userDetailPageRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_8__["NavigationbarModule"]],
      declarations: [_userDetail_page__WEBPACK_IMPORTED_MODULE_7__["userDetailPage"]]
    })], userDetailPageModule);
    /***/
  },

  /***/
  "./src/app/chat/userDetail/userDetail.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/chat/userDetail/userDetail.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatUserDetailUserDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 2fr 1fr;\n  margin: 1em;\n  margin-top: 1em;\n  margin-bottom: 0px;\n}\n\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.side-bar-icon {\n  display: flex;\n  flex-direction: column;\n  margin: 0em;\n}\n\nimg.chat-bubble {\n  width: 46%;\n  margin-top: 1em;\n}\n\n.siderbar-icon-data {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 11px;\n  /* margin: 2em; */\n  margin: 2em 1em;\n}\n\np.detail-data {\n  width: 50vw;\n}\n\n.group-text-image {\n  display: flex;\n  flex-direction: column;\n  margin: 0.4em 0em;\n}\n\n.sidebar-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 1em;\n}\n\n.popup-chat-page {\n  margin-top: 7em;\n  margin-left: 1em;\n  text-align: justify;\n  margin-right: 1em;\n}\n\n.modal {\n  background: #000000a1;\n}\n\n.main-pop-background {\n  background-color: #000000a3;\n  background-position: center;\n  height: 100vh;\n  overflow: auto;\n}\n\n.main-pop {\n  display: block;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  /* height: 80vh; */\n  /* padding-top: 13vh; */\n  /* padding-right: 17em; */\n}\n\n.pop-grids {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 0em;\n  background-color: white;\n  margin: 1em 2em;\n  margin-bottom: 0px;\n}\n\nimg.image-profile {\n  height: 17vh;\n  width: 100%;\n}\n\n.fields-data {\n  margin-bottom: 1em;\n}\n\n.output-text {\n  width: 50vw;\n}\n\n.field-name {\n  font-weight: bolder;\n}\n\nimg.close-chat-bubble {\n  width: 22%;\n  float: right;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\n.favorate_star {\n  /* color: gray; */\n  font-size: 2em;\n}\n\n.remove_fav {\n  color: red;\n}\n\n.disable_fav {\n  color: lightgrey;\n}\n\n.favorate_close {\n  margin-left: -3px;\n  font-size: 2.5em;\n}\n\n.favorate-popup {\n  background-color: #00000073;\n  height: 100vh;\n  position: absolute;\n  z-index: 4000;\n  width: 100vw;\n}\n\n.favorate-popup-content-two {\n  background-color: white;\n  height: 25%;\n  width: 82vw;\n  position: absolute;\n  margin: 1;\n  border-radius: 10px;\n}\n\n.favorate-popup-content-one {\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  align-items: center;\n}\n\n.add_as_favorate {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  /* justify-content: space-around; */\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.content-add-as-favorate {\n  font-size: 1.2em;\n  font-weight: 500;\n}\n\n.button-add-as-favorate {\n  width: 100%;\n  display: flex;\n  /* flex-direction: column; */\n  flex-direction: row;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC91c2VyRGV0YWlsL0s6XFxBbmd1bGFyIFByb2plY3RcXG5vdDREYXRpbmcvc3JjXFxhcHBcXGNoYXRcXHVzZXJEZXRhaWxcXHVzZXJEZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9jaGF0L3VzZXJEZXRhaWwvdXNlckRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFHQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDREo7O0FES0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNGSjs7QURJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFdBQUE7QUNGSjs7QURJQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDREo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxxQkFBQTtBQ0dKOztBRERBO0VBQ0ksMkJBQUE7RUFDQSwyQkFBQTtFQUNILGFBQUE7RUFDQSxjQUFBO0FDSUQ7O0FERkE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7QUNRSjs7QUROQTtFQUNJLG1CQUFBO0FDU0o7O0FEUEE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ1VKOztBRFJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNXSjs7QURURTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ1lKOztBRFZBO0VBRUksVUFBQTtBQ1lKOztBRFZBO0VBRUksZ0JBQUE7QUNZSjs7QURWQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNhSjs7QURYQTtFQUNJLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNjSjs7QURaQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ2VKOztBRGJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDZ0JKOztBRGRBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ2lCSjs7QURmQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNrQko7O0FEaEJBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNtQkoiLCJmaWxlIjoic3JjL2FwcC9jaGF0L3VzZXJEZXRhaWwvdXNlckRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDFmcjtcclxuICAgXHJcbiBcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5cclxuLnByb2ZpbGUtbmFtZS1tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zaWRlLWJhci1pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gXHJcbiAgICBtYXJnaW46IDBlbTtcclxufVxyXG5pbWcuY2hhdC1idWJibGUge1xyXG4gICAgd2lkdGg6IDQ2JTtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG4uc2lkZXJiYXItaWNvbi1kYXRhIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcbiAgICBncmlkLWdhcDogMTFweDtcclxuICAgIC8qIG1hcmdpbjogMmVtOyAqL1xyXG4gICAgbWFyZ2luOiAyZW0gMWVtO1xyXG59XHJcblxyXG5wLmRldGFpbC1kYXRhIHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG5cclxufVxyXG4uZ3JvdXAtdGV4dC1pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMC40ZW0gMGVtO1xyXG59XHJcbi5zaWRlYmFyLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG4ucG9wdXAtY2hhdC1wYWdlIHtcclxuICAgIG1hcmdpbi10b3A6IDdlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuLm1vZGFse1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMGExO1xyXG59XHJcbi5tYWluLXBvcC1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhMztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuIGhlaWdodDogMTAwdmg7XHJcbiBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ubWFpbi1wb3Age1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyogaGVpZ2h0OiA4MHZoOyAqL1xyXG4gICAgLyogcGFkZGluZy10b3A6IDEzdmg7ICovXHJcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAxN2VtOyAqL1xyXG59XHJcbi5wb3AtZ3JpZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMGVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDFlbSAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuaW1nLmltYWdlLXByb2ZpbGUge1xyXG4gICAgaGVpZ2h0OiAxN3ZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZpZWxkcy1kYXRhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG4ub3V0cHV0LXRleHQge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbn1cclxuLmZpZWxkLW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5pbWcuY2xvc2UtY2hhdC1idWJibGUge1xyXG4gICAgd2lkdGg6IDIyJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgLmZhdm9yYXRlX3N0YXIge1xyXG4gICAgLyogY29sb3I6IGdyYXk7ICovXHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG4ucmVtb3ZlX2ZhdlxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5kaXNhYmxlX2ZhdlxyXG57XHJcbiAgICBjb2xvcjogbGlnaHRncmV5O1xyXG59XHJcbi5mYXZvcmF0ZV9jbG9zZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbn1cclxuLmZhdm9yYXRlLXBvcHVwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA3MztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA0MDAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcbi5mYXZvcmF0ZS1wb3B1cC1jb250ZW50LXR3byB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgd2lkdGg6IDgydnc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5mYXZvcmF0ZS1wb3B1cC1jb250ZW50LW9uZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYWRkX2FzX2Zhdm9yYXRlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7ICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuLmNvbnRlbnQtYWRkLWFzLWZhdm9yYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5idXR0b24tYWRkLWFzLWZhdm9yYXRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn0iLCIubW9kYWwtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAxZnI7XG4gIG1hcmdpbjogMWVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnByb2ZpbGUtbmFtZS1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaWRlLWJhci1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwZW07XG59XG5cbmltZy5jaGF0LWJ1YmJsZSB7XG4gIHdpZHRoOiA0NiU7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLnNpZGVyYmFyLWljb24tZGF0YSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgZ3JpZC1nYXA6IDExcHg7XG4gIC8qIG1hcmdpbjogMmVtOyAqL1xuICBtYXJnaW46IDJlbSAxZW07XG59XG5cbnAuZGV0YWlsLWRhdGEge1xuICB3aWR0aDogNTB2dztcbn1cblxuLmdyb3VwLXRleHQtaW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDAuNGVtIDBlbTtcbn1cblxuLnNpZGViYXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5wb3B1cC1jaGF0LXBhZ2Uge1xuICBtYXJnaW4tdG9wOiA3ZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG4ubW9kYWwge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTE7XG59XG5cbi5tYWluLXBvcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGEzO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWFpbi1wb3Age1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8qIGhlaWdodDogODB2aDsgKi9cbiAgLyogcGFkZGluZy10b3A6IDEzdmg7ICovXG4gIC8qIHBhZGRpbmctcmlnaHQ6IDE3ZW07ICovXG59XG5cbi5wb3AtZ3JpZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxZW0gMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmltZy5pbWFnZS1wcm9maWxlIHtcbiAgaGVpZ2h0OiAxN3ZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZpZWxkcy1kYXRhIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4ub3V0cHV0LXRleHQge1xuICB3aWR0aDogNTB2dztcbn1cblxuLmZpZWxkLW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5pbWcuY2xvc2UtY2hhdC1idWJibGUge1xuICB3aWR0aDogMjIlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmZhdm9yYXRlX3N0YXIge1xuICAvKiBjb2xvcjogZ3JheTsgKi9cbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5yZW1vdmVfZmF2IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmRpc2FibGVfZmF2IHtcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxuLmZhdm9yYXRlX2Nsb3NlIHtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG59XG5cbi5mYXZvcmF0ZS1wb3B1cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA3MztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA0MDAwO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5mYXZvcmF0ZS1wb3B1cC1jb250ZW50LXR3byB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDI1JTtcbiAgd2lkdGg6IDgydnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZmF2b3JhdGUtcG9wdXAtY29udGVudC1vbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZF9hc19mYXZvcmF0ZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uY29udGVudC1hZGQtYXMtZmF2b3JhdGUge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYnV0dG9uLWFkZC1hcy1mYXZvcmF0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/chat/userDetail/userDetail.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/chat/userDetail/userDetail.page.ts ***!
    \****************************************************/

  /*! exports provided: userDetailPage */

  /***/
  function srcAppChatUserDetailUserDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userDetailPage", function () {
      return userDetailPage;
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
    /*! ../../config.service */
    "./src/app/config.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var userDetailPage = /*#__PURE__*/function () {
      function userDetailPage(ConfigService, _Activatedroute, _location, http, alertController) {
        _classCallCheck(this, userDetailPage);

        this.ConfigService = ConfigService;
        this._Activatedroute = _Activatedroute;
        this._location = _location;
        this.http = http;
        this.alertController = alertController;
        this.postman = {};
        this.scope = [];
        this.isLoading = false;
        this.favorites_status = 1;
        this.favoarte = false;
        this.removingFav = false;
        this.Block_status = 1;
        this.blockusers = false;
      }

      _createClass(userDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // Get uid for logged in user
          this.itrs = JSON.parse(localStorage.getItem("currentUser")); // Get uid of user

          this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.uid = params.get("uid");
          });
          this.getUser();
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this2 = this;

          // Get fields for user
          this.http.get("https://gowebtutorial.com/api/json/user/" + this.uid).subscribe(function (data) {
            _this2.post = data;
            _this2.name = _this2.post.name; //

            _this2.picture = _this2.post.picture.url; //

            _this2["long"] = _this2.post.field_long_in_city.length;
            _this2.genders = _this2.post.field_gender.und; //

            _this2.statu = _this2.post.field_relationship_status.und; //

            _this2.smokes = _this2.post.field_smoke.und; //

            _this2.activity = _this2.post.field_activities_interests.und; //

            _this2.edue = _this2.post.field_education_level.und; //

            _this2.tends = _this2.post.field_friends_tend_to_be.und; //

            _this2.cancels = _this2.post.field_plans_get_cancelled.und; //

            _this2.day = _this2.post.field_spend_your_days.und; //

            _this2.movie = _this2.post.field_favorite_movies.und; //

            _this2.musics = _this2.post.field_favorite_music.und; //

            _this2.book = _this2.post.field_favorite_books.und; //

            _this2.friend = _this2.post.field_talk_about.und;
            _this2.contact = _this2.post.field_gender.und;
            _this2.alcohol = _this2.post.field_alcohol.und;
            _this2.language = _this2.post.field_languages.und;
            _this2.talk = _this2.post.field_talk_about.und;
            _this2.tv = _this2.post.field_favorite_tv_shows.und;
            _this2.good = _this2.post.field_good_friend.und;
            _this2.pets = _this2.post.field_any_pets.und;
            _this2.favInfo = [{
              name: _this2.post.name,
              picture: _this2.post.picture.url,
              activities: _this2.post.field_activities_interests.und,
              uid: _this2.uid
            }], _this2.blocked = [{
              name: _this2.post.name,
              picture: _this2.post.picture.url,
              activities: _this2.post.field_activities_interests.und,
              uid: _this2.uid
            }], _this2.getLoggedInUser();
          });
        }
      }, {
        key: "getLoggedInUser",
        value: function getLoggedInUser() {
          var _this3 = this;

          // Get favorite fields for logged in user
          this.ConfigService.getUser(this.itrs.user.uid).subscribe(function (data) {
            _this3.loggedUser = data;
            _this3.favorites_status = _this3.checUserFavorites();
          });
        }
      }, {
        key: "checUserFavorites",
        value: function checUserFavorites() {
          var _this4 = this;

          if (this.loggedUser.field_favorite_users.und) {
            this.parsedFavorites = JSON.parse(this.loggedUser.field_favorite_users.und[0].value); // Check if user is already a favorite

            if (this.parsedFavorites.some(function (person) {
              return person[0].uid === _this4.uid;
            })) {
              console.log("This person is already a favorite");
              return 3;
            } else {
              console.log("This person is not yet a favorite");
              return 2;
            }
          }
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          this._location.back();
        }
      }, {
        key: "getFavorite",
        value: function getFavorite() {
          var _this5 = this;

          this.isLoading = true;
          this.scope = [];
          this.http.get("https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid).subscribe(function (users) {
            _this5.respnoseJSON = users;

            if (_this5.respnoseJSON.field_favorite_users.und) {
              console.log("value exists");
              _this5.scope = JSON.parse(_this5.respnoseJSON.field_favorite_users["und"][0]["value"]);

              _this5.scope.push(_this5.favInfo);
            } else {
              console.log("value doesnt exist");

              _this5.scope.push(_this5.favInfo);
            } //Make scope unique


            _this5.uniqueScope = _this5.removeDuplicatesBy(function (x) {
              return x[0].name;
            }, _this5.scope);

            _this5.addFavorite();

            _this5.favoarte = false;
          });
        }
      }, {
        key: "addFavorite",
        value: function addFavorite() {
          var _this6 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("X-CSRF-Token", this.itrs.token).set("Content-Type", "application/json").set("X-Cookie", this.itrs.session_name + "=" + this.itrs.sessid);
          var requestOptions = {
            headers: headers,
            withCredentials: true
          }; // Add entry into favorites

          this.responseString = JSON.stringify(this.uniqueScope);
          console.log(this.uniqueScope);
          this.http.put("https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid, {
            field_favorite_users: {
              und: [{
                value: this.responseString
              }]
            }
          }, requestOptions).subscribe(function (favorate) {
            _this6.isLoading = false;

            _this6.getLoggedInUser();
          });
        }
      }, {
        key: "getBlockedLoggedInUser",
        value: function getBlockedLoggedInUser() {
          var _this7 = this;

          // Get Block fields for logged in user
          this.ConfigService.getUser(this.itrs.user.uid).subscribe(function (data) {
            _this7.loggedUser = data;
            _this7.Block_status = _this7.checBlockUser();
          });
        }
      }, {
        key: "checBlockUser",
        value: function checBlockUser() {
          var _this8 = this;

          if (this.loggedUser.field_block_users.und) {
            this.parsedBlock = JSON.parse(this.loggedUser.field_block_users.und[0].value); // Check if user is already a Block

            if (this.parsedBlock.some(function (persons) {
              return persons[0].uid === _this8.uid;
            })) {
              console.log("This person is already Blocked");
              return 3;
            } else {
              console.log("This person is not yet blocked");
              return 2;
            }
          }
        } //Block User

      }, {
        key: "Blockuser",
        value: function Blockuser() {
          var _this9 = this;

          this.scope = [];
          this.http.get("https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid).subscribe(function (Blockusers) {
            _this9.respnoseJSON = Blockusers;

            if (_this9.respnoseJSON.field_block_users) {
              console.log("value exists");
              _this9.scope = JSON.parse(_this9.respnoseJSON.field_block_users["und"][0]["value"]);

              _this9.scope.push(_this9.blocked);
            } else {
              console.log("value doesnt exist");

              _this9.scope.push(_this9.blocked);
            } //Make scope unique


            _this9.uniqueScope = _this9.removeDuplicatesBy(function (x) {
              return x[0].name;
            }, _this9.scope);

            _this9.block();
          });
        }
      }, {
        key: "block",
        value: function block() {
          var _this10 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("X-CSRF-Token", this.itrs.token).set("Content-Type", "application/json").set("X-Cookie", this.itrs.session_name + "=" + this.itrs.sessid);
          var requestOptions = {
            headers: headers,
            withCredentials: true
          }; // Add entry into favorites

          this.responseBlockString = JSON.stringify(this.uniqueScope);
          console.log(this.uniqueScope);
          this.http.put("https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid, {
            field_block_users: {
              und: [{
                value: this.responseBlockString
              }]
            }
          }, requestOptions).subscribe(function (Block) {
            _this10.isLoading = false;
            _this10.blockusers = false;

            _this10.getBlockedLoggedInUser();
          });
        }
      }, {
        key: "addedFavorate",
        value: function addedFavorate() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var correct;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      message: "Added to favorites",
                      buttons: ["OK"]
                    });

                  case 2:
                    correct = _context.sent;
                    _context.next = 5;
                    return correct.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "removedFavorate",
        value: function removedFavorate() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var correct;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      message: "Removed from favorites",
                      buttons: ["OK"]
                    });

                  case 2:
                    correct = _context2.sent;
                    _context2.next = 5;
                    return correct.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "removeDuplicatesBy",
        value: function removeDuplicatesBy(keyFn, array) {
          var mySet = new Set();
          return array.filter(function (x) {
            var key = keyFn(x),
                isNew = !mySet.has(key);
            if (isNew) mySet.add(key);
            return isNew;
          });
        }
      }, {
        key: "removeFavorite",
        value: function removeFavorite() {
          var _this11 = this;

          this.parsedFavorites = this.parsedFavorites.filter(function (obj) {
            return obj[0].uid !== _this11.uid;
          });
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("X-CSRF-Token", this.itrs.token).set("Content-Type", "application/json").set("X-Cookie", this.itrs.session_name + "=" + this.itrs.sessid);
          var requestOptions = {
            headers: headers,
            withCredentials: true
          }; // Add entry into favorites

          this.responseString = JSON.stringify(this.parsedFavorites);
          this.isLoading = true;
          this.http.put("https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid, {
            field_favorite_users: {
              und: [{
                value: this.responseString
              }]
            }
          }, requestOptions).subscribe(function (favorate) {
            _this11.isLoading = false;
            _this11.removingFav = false;

            _this11.getLoggedInUser();
          });
        }
      }, {
        key: "addFavorate",
        value: function addFavorate() {
          this.favoarte = true;
        }
      }, {
        key: "closePopup",
        value: function closePopup() {
          this.favoarte = false;
          this.removingFav = false;
          this.blockusers = false;
        }
      }, {
        key: "removingFavorate",
        value: function removingFavorate() {
          this.removingFav = true;
        }
      }, {
        key: "blockuserpop",
        value: function blockuserpop() {
          this.blockusers = true;
        }
      }]);

      return userDetailPage;
    }();

    userDetailPage.ctorParameters = function () {
      return [{
        type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    userDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-userDetail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userDetail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/userDetail/userDetail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userDetail.page.scss */
      "./src/app/chat/userDetail/userDetail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], userDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=chat-userDetail-userDetail-module-es5.js.map