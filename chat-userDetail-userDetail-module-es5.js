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


    __webpack_exports__["default"] = "<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n<div class=\"main-pop-background\">\r\n  <div class=\"main-pop\">\r\n    <div class=\"pop-grids\">\r\n      <div class=\"modal-grid\">\r\n        <div class=\"profile-picture-modal\">\r\n          <img src={{picture}} class=\"image-profile\">\r\n        </div>\r\n        <div class=\"profile-name-modal\">\r\n          <span class=\"name\">{{name}}</span>\r\n        </div>\r\n        <div class=\"close-button\">\r\n          <img src=\"../../assets/Images/sign.png\" class=\"close-chat-bubble\" (click)=\"backClicked()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"siderbar-icon-data\">\r\n        <div class=\"side-bar-icon\">\r\n          <div class=\"group-text-image\">\r\n            <ion-icon name=\"chatbubble-ellipses\" routerLink=\"/new-message/{{uid}}/{{name}}\" class=\"favorate_star\">\r\n            </ion-icon>\r\n            <!-- <span class=\"name-icon\">Chat</span> -->\r\n          </div>\r\n          <div *ngIf=\"favorites_status == 1\" class=\"group-text-image\" style=\"opacity: .4;\">\r\n            <ion-icon name=\"star\" class=\"favorate_star disable_fav\"></ion-icon>\r\n\r\n            <!-- <span class=\"name-icon\">Favorite</span> -->\r\n          </div>\r\n          <div *ngIf=\"favorites_status == 2\" class=\"group-text-image\" (click)=\"addFavorate()\">\r\n            <ion-icon name=\"star\" class=\"favorate_star\"></ion-icon>\r\n            <!-- <span class=\"name-icon\">ADD Favorite</span> -->\r\n          </div>\r\n          <div *ngIf=\"favorites_status == 3\" class=\"group-text-image\" (click)=\"removingFavorate()\">\r\n            <ion-icon name=\"star\" class=\"favorate_star remove_fav\"></ion-icon>\r\n          </div>\r\n          <div class=\"group-text-image\" *ngIf=\"Block_status == 1\">\r\n            <ion-icon name=\"close-outline\" (click)=\"blockuserpop()\" class=\"favorate_close\"></ion-icon>\r\n          </div>\r\n\r\n          <div class=\"group-text-image\" *ngIf=\"Block_status == 3\">\r\n            <ion-icon name=\"close-outline\"  class=\"favorate_star remove_fav favorate_close\" (click)=\"unblock()\"></ion-icon>\r\n          </div>\r\n         \r\n          <div class=\"group-text-image\">\r\n            <ion-icon name=\"sad\" class=\"favorate_star \"></ion-icon>\r\n          </div>\r\n          <div class=\"group-text-image\">\r\n            <!-- <span class=\"name-icon\">Report to admin</span> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"sidebar-content\">\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\">FullName</div>\r\n            <div class=\"output-text\">{{name}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\">Gender:</div>\r\n            <div class=\"output-text\" *ngFor=\"let genders of genders\">{{genders.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\">Actvities:</div>\r\n            <div class=\"output-text\" *ngFor=\"let activity of activity\">{{activity.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"contact\">I Want To Be Contacted By:</div>\r\n            <div class=\"output-text\" *ngFor=\"let contact of contact\">{{contact.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"musics\">Favorite Music:</div>\r\n            <div class=\"output-text\" *ngFor=\"let Music of musics\">{{Music.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"book\">Favorate Books:</div>\r\n            <div class=\"output-text\" *ngFor=\"let books of book\">{{books.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"movie\">Favorate Movies:</div>\r\n            <div class=\"output-text\" *ngFor=\"let movies of movie\">{{movies.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"day\">How you spend your days?:</div>\r\n            <div class=\"output-text\" *ngFor=\"let days of day\">{{days.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"cancels\">If plan get cancels?:</div>\r\n            <div class=\"output-text\" *ngFor=\"let cancel of cancels\">{{cancel.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"tends\">Firends tends to be?:</div>\r\n            <div class=\"output-text\" *ngFor=\"let tend of tends\">{{tend.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"edue\">Education Level:</div>\r\n            <div class=\"output-text\" *ngFor=\"let edue of edue\">{{edue.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"smokes\">Do you smokes:</div>\r\n            <div class=\"output-text\" *ngFor=\"let smokes of smokes\">{{smokes.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"statu\">Relationship status:</div>\r\n            <div class=\"output-text\" *ngFor=\"let statu of statu\">{{statu.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"long\">How long you live:</div>\r\n            <div class=\"output-text\" *ngFor=\"let long of long\">{{long.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"alcohol\">Do you drink:</div>\r\n            <div class=\"output-text\" *ngFor=\"let alcohol of alcohol\">{{alcohol.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"language\">Language:</div>\r\n            <div class=\"output-text\" *ngFor=\"let language of language\">{{language.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"talk\">Friends talk About:</div>\r\n            <div class=\"output-text\" *ngFor=\"let talk of talk\">{{talk.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"tv\">TV Shows:</div>\r\n            <div class=\"output-text\" *ngFor=\"let tv of tv\">{{tv.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"good\">Good Friends:</div>\r\n            <div class=\"output-text\" *ngFor=\"let good of good\">{{good.value}}</div>\r\n          </div>\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"pets\">Pets:</div>\r\n            <div class=\"output-text\" *ngFor=\"let pets of pets\">{{pets.value}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Add user to favorites?-->\r\n<div class=\"favorate-popup\" *ngIf=\"favoarte\">\r\n  <div class=\"favorate-popup-content-one\">\r\n    <div class=\"favorate-popup-content-two\">\r\n      <div class=\"add_as_favorate\">\r\n        <div class=\"content-add-as-favorate\">\r\n          Add user to favorites?\r\n        </div>\r\n        <div class=\"button-add-as-favorate\">\r\n          <ion-button color=\"success\" (click)=\"getFavorite()\">Confirm</ion-button>\r\n          <ion-button color=\"danger\" (click)=\"closePopup()\">Cancel</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--Remove user from favorites?-->\r\n<div class=\"favorate-popup\" *ngIf=\"removingFav\">\r\n  <div class=\"favorate-popup-content-one\">\r\n    <div class=\"favorate-popup-content-two\">\r\n      <div class=\"add_as_favorate\">\r\n        <div class=\"content-add-as-favorate\">\r\n          Remove user from favorites?\r\n        </div>\r\n        <div class=\"button-add-as-favorate\">\r\n          <ion-button color=\"success\" (click)=\"removeFavorite()\">Confirm</ion-button>\r\n          <ion-button color=\"danger\" (click)=\"closePopup()\">Cancel</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!--Block user?-->\r\n<div class=\"favorate-popup\" *ngIf=\"blockusers\">\r\n  <div class=\"favorate-popup-content-one\">\r\n    <div class=\"favorate-popup-content-two\">\r\n      <div class=\"add_as_favorate\">\r\n        <div class=\"content-add-as-favorate\">\r\n          Block user?\r\n        </div>\r\n        <div class=\"button-add-as-favorate\">\r\n          <ion-button color=\"success\" (click)=\"Blockuser()\">Confirm</ion-button>\r\n          <ion-button color=\"danger\" (click)=\"closePopup()\">Cancel</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--Block user?-->\r\n<div class=\"favorate-popup\" *ngIf=\"unblockusers\">\r\n  <div class=\"favorate-popup-content-one\">  \r\n    <div class=\"favorate-popup-content-two\">\r\n      <div class=\"add_as_favorate\">\r\n        <div class=\"content-add-as-favorate\">\r\n          Are you sure to unblock user?\r\n        </div>\r\n        <div class=\"button-add-as-favorate\">\r\n          <ion-button color=\"success\" (click)=\"removeBlock()\">Confirm</ion-button>\r\n          <ion-button color=\"danger\" (click)=\"closePopup()\">Cancel</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
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


    __webpack_exports__["default"] = ".modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 2fr 1fr;\n  grid-gap: 1em;\n  margin: 1em;\n  margin-top: 1em;\n  margin-bottom: 0px;\n}\n\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.side-bar-icon {\n  display: flex;\n  flex-direction: column;\n  margin: 0em;\n}\n\nimg.chat-bubble {\n  width: 46%;\n  margin-top: 1em;\n}\n\n.siderbar-icon-data {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 11px;\n  /* margin: 2em; */\n  margin: 2em 1em;\n}\n\np.detail-data {\n  width: 50vw;\n}\n\n.group-text-image {\n  display: flex;\n  flex-direction: column;\n  margin: 0.4em 0em;\n}\n\n.sidebar-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 1em;\n}\n\n.popup-chat-page {\n  margin-top: 7em;\n  margin-left: 1em;\n  text-align: justify;\n  margin-right: 1em;\n}\n\n.modal {\n  background: #000000a1;\n}\n\n.main-pop-background {\n  background-color: #000000a3;\n  background-position: center;\n  height: 100vh;\n  overflow: auto;\n}\n\n.main-pop {\n  display: block;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  /* height: 80vh; */\n  /* padding-top: 13vh; */\n  /* padding-right: 17em; */\n}\n\n.pop-grids {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 0em;\n  background-color: white;\n  margin: 1em 2em;\n  margin-bottom: 0px;\n}\n\nimg.image-profile {\n  height: 17vh;\n  width: 100%;\n}\n\n.fields-data {\n  margin-bottom: 1em;\n}\n\n.output-text {\n  width: 50vw;\n}\n\n.field-name {\n  font-weight: bolder;\n}\n\nimg.close-chat-bubble {\n  width: 22%;\n  float: right;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\n.favorate_star {\n  /* color: gray; */\n  font-size: 2em;\n}\n\n.remove_fav {\n  color: red;\n}\n\n.disable_fav {\n  color: lightgrey;\n}\n\n.favorate_close {\n  margin-left: -3px;\n  font-size: 2.5em;\n}\n\n.favorate-popup {\n  background-color: #00000073;\n  height: 100vh;\n  position: absolute;\n  z-index: 4000;\n  width: 100vw;\n}\n\n.favorate-popup-content-two {\n  background-color: white;\n  height: 25%;\n  width: 82vw;\n  position: absolute;\n  margin: 1;\n  border-radius: 10px;\n}\n\n.favorate-popup-content-one {\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  align-items: center;\n}\n\n.add_as_favorate {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  /* justify-content: space-around; */\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.content-add-as-favorate {\n  font-size: 1.2em;\n  font-weight: 500;\n}\n\n.button-add-as-favorate {\n  width: 100%;\n  display: flex;\n  /* flex-direction: column; */\n  flex-direction: row;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvY2hhdC91c2VyRGV0YWlsL3VzZXJEZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9jaGF0L3VzZXJEZXRhaWwvdXNlckRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFFQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRElBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDREo7O0FER0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxXQUFBO0FDREo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERBO0VBQ0kscUJBQUE7QUNJSjs7QURGQTtFQUNJLDJCQUFBO0VBQ0EsMkJBQUE7RUFDSCxhQUFBO0VBQ0EsY0FBQTtBQ0tEOztBREhBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDTUo7O0FESkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ01KOztBREpBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0FDUUo7O0FETkE7RUFDSSxXQUFBO0FDU0o7O0FEUEE7RUFDSSxtQkFBQTtBQ1VKOztBRFJBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNXSjs7QURUQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsYUFBQTtFQUVBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDWUo7O0FEVkU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNhSjs7QURYQTtFQUVJLFVBQUE7QUNhSjs7QURYQTtFQUVJLGdCQUFBO0FDYUo7O0FEWEE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDY0o7O0FEWkE7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDZUo7O0FEYkE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNnQko7O0FEZEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNpQko7O0FEZkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDa0JKOztBRGhCQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNtQko7O0FEakJBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNvQkoiLCJmaWxlIjoic3JjL2FwcC9jaGF0L3VzZXJEZXRhaWwvdXNlckRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDFmcjtcclxuICAgXHJcbiAgICBncmlkLWdhcDogMWVtO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4ucHJvZmlsZS1uYW1lLW1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnNpZGUtYmFyLWljb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiBcclxuICAgIG1hcmdpbjogMGVtO1xyXG59XHJcbmltZy5jaGF0LWJ1YmJsZSB7XHJcbiAgICB3aWR0aDogNDYlO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbi5zaWRlcmJhci1pY29uLWRhdGEge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcclxuICAgIGdyaWQtZ2FwOiAxMXB4O1xyXG4gICAgLyogbWFyZ2luOiAyZW07ICovXHJcbiAgICBtYXJnaW46IDJlbSAxZW07XHJcbn1cclxuXHJcbnAuZGV0YWlsLWRhdGEge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcblxyXG59XHJcbi5ncm91cC10ZXh0LWltYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAwLjRlbSAwZW07XHJcbn1cclxuLnNpZGViYXItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbi5wb3B1cC1jaGF0LXBhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogN2VtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG4ubW9kYWx7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTE7XHJcbn1cclxuLm1haW4tcG9wLWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGEzO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gaGVpZ2h0OiAxMDB2aDtcclxuIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5tYWluLXBvcCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvKiBoZWlnaHQ6IDgwdmg7ICovXHJcbiAgICAvKiBwYWRkaW5nLXRvcDogMTN2aDsgKi9cclxuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDE3ZW07ICovXHJcbn1cclxuLnBvcC1ncmlkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMWVtIDJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5pbWcuaW1hZ2UtcHJvZmlsZSB7XHJcbiAgICBoZWlnaHQ6IDE3dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZmllbGRzLWRhdGEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcbi5vdXRwdXQtdGV4dCB7XHJcbiAgICB3aWR0aDogNTB2dztcclxufVxyXG4uZmllbGQtbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbmltZy5jbG9zZS1jaGF0LWJ1YmJsZSB7XHJcbiAgICB3aWR0aDogMjIlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAuZmF2b3JhdGVfc3RhciB7XHJcbiAgICAvKiBjb2xvcjogZ3JheTsgKi9cclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcbi5yZW1vdmVfZmF2XHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLmRpc2FibGVfZmF2XHJcbntcclxuICAgIGNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuLmZhdm9yYXRlX2Nsb3NlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxufVxyXG4uZmF2b3JhdGUtcG9wdXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDczO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDQwMDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbn1cclxuLmZhdm9yYXRlLXBvcHVwLWNvbnRlbnQtdHdvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICB3aWR0aDogODJ2dztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmZhdm9yYXRlLXBvcHVwLWNvbnRlbnQtb25lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5hZGRfYXNfZmF2b3JhdGUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG4uY29udGVudC1hZGQtYXMtZmF2b3JhdGUge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmJ1dHRvbi1hZGQtYXMtZmF2b3JhdGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4uYmxvY2tlZF9jbG9zZVxyXG57XHJcblxyXG59IiwiLm1vZGFsLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgMWZyO1xuICBncmlkLWdhcDogMWVtO1xuICBtYXJnaW46IDFlbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5wcm9maWxlLW5hbWUtbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc2lkZS1iYXItaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMGVtO1xufVxuXG5pbWcuY2hhdC1idWJibGUge1xuICB3aWR0aDogNDYlO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5zaWRlcmJhci1pY29uLWRhdGEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gIGdyaWQtZ2FwOiAxMXB4O1xuICAvKiBtYXJnaW46IDJlbTsgKi9cbiAgbWFyZ2luOiAyZW0gMWVtO1xufVxuXG5wLmRldGFpbC1kYXRhIHtcbiAgd2lkdGg6IDUwdnc7XG59XG5cbi5ncm91cC10ZXh0LWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwLjRlbSAwZW07XG59XG5cbi5zaWRlYmFyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4ucG9wdXAtY2hhdC1wYWdlIHtcbiAgbWFyZ2luLXRvcDogN2VtO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLm1vZGFsIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMGExO1xufVxuXG4ubWFpbi1wb3AtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhMztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1haW4tcG9wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvKiBoZWlnaHQ6IDgwdmg7ICovXG4gIC8qIHBhZGRpbmctdG9wOiAxM3ZoOyAqL1xuICAvKiBwYWRkaW5nLXJpZ2h0OiAxN2VtOyAqL1xufVxuXG4ucG9wLWdyaWRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDBlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMWVtIDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5pbWcuaW1hZ2UtcHJvZmlsZSB7XG4gIGhlaWdodDogMTd2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5maWVsZHMtZGF0YSB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLm91dHB1dC10ZXh0IHtcbiAgd2lkdGg6IDUwdnc7XG59XG5cbi5maWVsZC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuaW1nLmNsb3NlLWNoYXQtYnViYmxlIHtcbiAgd2lkdGg6IDIyJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5mYXZvcmF0ZV9zdGFyIHtcbiAgLyogY29sb3I6IGdyYXk7ICovXG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4ucmVtb3ZlX2ZhdiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5kaXNhYmxlX2ZhdiB7XG4gIGNvbG9yOiBsaWdodGdyZXk7XG59XG5cbi5mYXZvcmF0ZV9jbG9zZSB7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICBmb250LXNpemU6IDIuNWVtO1xufVxuXG4uZmF2b3JhdGUtcG9wdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNzM7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNDAwMDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4uZmF2b3JhdGUtcG9wdXAtY29udGVudC10d28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAyNSU7XG4gIHdpZHRoOiA4MnZ3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmZhdm9yYXRlLXBvcHVwLWNvbnRlbnQtb25lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGRfYXNfZmF2b3JhdGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmNvbnRlbnQtYWRkLWFzLWZhdm9yYXRlIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJ1dHRvbi1hZGQtYXMtZmF2b3JhdGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59Il19 */";
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
        this.unblockusers = false;
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
            field_block_users: {
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
        key: "removeBlock",
        value: function removeBlock() {
          var _this12 = this;

          this.parsedBlock = this.parsedBlock.filter(function (obj) {
            return obj[0].uid !== _this12.uid;
          });
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("X-CSRF-Token", this.itrs.token).set("Content-Type", "application/json").set("X-Cookie", this.itrs.session_name + "=" + this.itrs.sessid);
          var requestOptions = {
            headers: headers,
            withCredentials: true
          }; // Add entry into favorites

          this.responseString = JSON.stringify(this.parsedBlock);
          this.isLoading = true;
          this.http.put("https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid, {
            field_favorite_users: {
              und: [{
                value: this.responseString
              }]
            }
          }, requestOptions).subscribe(function (favorate) {
            _this12.isLoading = false;
            _this12.unblockusers = false;

            _this12.getBlockedLoggedInUser();
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
          this.unblockusers = false;
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
      }, {
        key: "unblock",
        value: function unblock() {
          this.unblockusers = true;
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