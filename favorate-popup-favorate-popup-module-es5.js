function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorate-popup-favorate-popup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/favorate-popup/favorate-popup.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorate-popup/favorate-popup.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFavoratePopupFavoratePopupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div  *ngIf=\"isLoading\" class=\"loading-container\">\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n</div>\n\n<div class=\"main-pop-background\">\n\n\n  <div class=\"main-pop\">\n\n    \n    <div class=\"pop-grids\">\n\n      <div class=\"modal-grid\">\n        \n        <div class=\"profile-picture-modal\">\n          <img src={{picture}} class=\"image-profile\">\n        </div>\n\n        <div class=\"profile-name-modal\">\n          <span class=\"name\">{{name}}</span>\n          <span class=\"not-verified\">Verified</span>\n\n        </div>\n        <div class=\"close-button\">\n          <img src=\"../../assets/Images/sign.png\" class=\"close-chat-bubble\" (click)=\"backClicked()\">\n\n\n        </div>\n       \n      </div>\n\n      <div class=\"siderbar-icon-data\">\n        <div class=\"side-bar-icon\">\n          <div class=\"group-text-image\">\n            <img src=\"../../assets/Images/popchat.png\" class=\"chat-bubble\" routerLink=\"/new-message/{{uid}}/{{name}}\">\n            <span class=\"name-icon\">Chat</span>\n          </div>\n          <!-- <div class=\"group-text-image\" (click)=\"getFavorite()\">\n            <img src=\"../../assets/Images/star.png\" class=\"chat-bubble\">\n            <span class=\"name-icon\">Favorite</span>\n          </div> -->\n          <div class=\"group-text-image\">\n            <img src=\"../../assets/Images/sign.png\" class=\"chat-bubble\" (click)=\"backClicked()\">\n          </div>\n          <div class=\"group-text-image mt-3\">\n            <span class=\"name-icon\">Never See again</span>\n            <img src=\"../../assets/Images/feeling.png\" class=\"chat-bubble mb-3\">\n          </div>\n\n          <div class=\"group-text-image\">\n            <span class=\"name-icon\">Report to admin</span>\n          </div>\n        </div>\n        <div class=\"sidebar-content\">\n          <div class=\"fields-data\">\n            <div class=\"field-name\">FullName</div>\n            <div class=\"output-text\">{{name}}</div>\n          </div>\n\n          <div class=\"fields-data\">\n            <div class=\"field-name\">Gender:</div>\n            <div class=\"output-text\" *ngFor=\"let genders of genders\">{{genders.value}}</div>\n          </div>\n\n          <div class=\"fields-data\">\n            <div class=\"field-name\">Actvities:</div>\n            <div class=\"output-text\" *ngFor=\"let activity of activity\">{{activity.value}}</div>\n          </div>\n\n\n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"contact\">I Want To Be Contacted By:</div>\n            <div class=\"output-text\" *ngFor=\"let contact of contact\">{{contact.value}}</div>\n          </div>\n\n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"musics\">Favorite Music:</div>\n            <div class=\"output-text\" *ngFor=\"let Music of musics\">{{Music.value}}</div>\n          </div>\n\n\n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"book\">Favorate Books:</div>\n            <div class=\"output-text\" *ngFor=\"let books of book\">{{books.value}}</div>\n          </div>\n\n\n\n\n\n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"movie\">Favorate Movies:</div>\n            <div class=\"output-text\" *ngFor=\"let movies of movie\">{{movies.value}}</div>\n          </div>\n\n\n\n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"day\">How you spend your days?:</div>\n            <div class=\"output-text\"  *ngFor=\"let days of day\">{{days.value}}</div>\n          </div>\n\n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"cancels\">If plan get cancels?:</div>\n            <div class=\"output-text\"  *ngFor=\"let cancel of cancels\">{{cancel.value}}</div>\n          </div>\n\n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"tends\">Firends tends to be?:</div>\n            <div class=\"output-text\"  *ngFor=\"let tend of tends\">{{tend.value}}</div>\n          </div>\n      \n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"edue\">Education Level:</div>\n            <div class=\"output-text\"  *ngFor=\"let edue of edue\">{{edue.value}}</div>\n          </div>\n      \n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"smokes\">Do you smokes:</div>\n            <div class=\"output-text\"  *ngFor=\"let smokes of smokes\">{{smokes.value}}</div>\n          </div>\n\n\n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"statu\">Relationship status:</div>\n            <div class=\"output-text\"  *ngFor=\"let statu of statu\">{{statu.value}}</div>\n          </div>\n\n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"long\">How long you live:</div>\n            <div class=\"output-text\"  *ngFor=\"let long of long\">{{long.value}}</div>\n          </div>\n        \n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"alcohol\">Do you drink:</div>\n            <div class=\"output-text\"  *ngFor=\"let alcohol of alcohol\">{{alcohol.value}}</div>\n          </div>\n\n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"language\">Language:</div>\n            <div class=\"output-text\"  *ngFor=\"let language of language\">{{language.value}}</div>\n          </div>\n\n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"talk\">Friends talk About:</div>\n            <div class=\"output-text\"  *ngFor=\"let talk of talk\">{{talk.value}}</div>\n          </div>\n\n\n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"tv\">TV Shows:</div>\n            <div class=\"output-text\"  *ngFor=\"let tv of tv\">{{tv.value}}</div>\n          </div>\n\n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"good\">Good Friends:</div>\n            <div class=\"output-text\"  *ngFor=\"let good of good\">{{good.value}}</div>\n          </div>\n\n\n          <div class=\"fields-data\">\n            <div class=\"field-name\" *ngIf=\"pets\">Pets:</div>\n            <div class=\"output-text\"  *ngFor=\"let pets of pets\">{{pets.value}}</div>\n          </div>\n         \n\n\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/favorate-popup/favorate-popup-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/favorate-popup/favorate-popup-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: FavoratePopupPageRoutingModule */

  /***/
  function srcAppFavoratePopupFavoratePopupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoratePopupPageRoutingModule", function () {
      return FavoratePopupPageRoutingModule;
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


    var _favorate_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./favorate-popup.page */
    "./src/app/favorate-popup/favorate-popup.page.ts");

    var routes = [{
      path: '',
      component: _favorate_popup_page__WEBPACK_IMPORTED_MODULE_3__["FavoratePopupPage"]
    }];

    var FavoratePopupPageRoutingModule = function FavoratePopupPageRoutingModule() {
      _classCallCheck(this, FavoratePopupPageRoutingModule);
    };

    FavoratePopupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FavoratePopupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/favorate-popup/favorate-popup.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/favorate-popup/favorate-popup.module.ts ***!
    \*********************************************************/

  /*! exports provided: FavoratePopupPageModule */

  /***/
  function srcAppFavoratePopupFavoratePopupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoratePopupPageModule", function () {
      return FavoratePopupPageModule;
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
    /*! ../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _favorate_popup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./favorate-popup-routing.module */
    "./src/app/favorate-popup/favorate-popup-routing.module.ts");
    /* harmony import */


    var _favorate_popup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./favorate-popup.page */
    "./src/app/favorate-popup/favorate-popup.page.ts");

    var FavoratePopupPageModule = function FavoratePopupPageModule() {
      _classCallCheck(this, FavoratePopupPageModule);
    };

    FavoratePopupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _favorate_popup_routing_module__WEBPACK_IMPORTED_MODULE_6__["FavoratePopupPageRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]],
      declarations: [_favorate_popup_page__WEBPACK_IMPORTED_MODULE_7__["FavoratePopupPage"]]
    })], FavoratePopupPageModule);
    /***/
  },

  /***/
  "./src/app/favorate-popup/favorate-popup.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/favorate-popup/favorate-popup.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFavoratePopupFavoratePopupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 2fr 1fr;\n  grid-gap: 11px;\n  margin: 1em;\n  margin-top: 1em;\n  margin-bottom: 0px;\n}\n\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.side-bar-icon {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin: 0em;\n}\n\nimg.chat-bubble {\n  width: 46%;\n  margin-top: 1em;\n}\n\n.siderbar-icon-data {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 11px;\n  /* margin: 2em; */\n  margin: 0em 1em;\n}\n\np.detail-data {\n  width: 50vw;\n}\n\n.group-text-image {\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 1em;\n}\n\n.popup-chat-page {\n  margin-top: 7em;\n  margin-left: 1em;\n  text-align: justify;\n  margin-right: 1em;\n}\n\n.modal {\n  background: #000000a1;\n}\n\n.main-pop-background {\n  background-color: #000000a3;\n  background-position: center;\n  height: 100vh;\n  overflow: auto;\n}\n\n.main-pop {\n  display: block;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  /* height: 80vh; */\n  /* padding-top: 13vh; */\n  /* padding-right: 17em; */\n}\n\n.pop-grids {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 0em;\n  background-color: white;\n  margin: 6em 2em;\n  margin-bottom: 0px;\n}\n\nimg.image-profile {\n  height: 17vh;\n  width: 100%;\n}\n\n.fields-data {\n  margin-bottom: 1em;\n}\n\n.output-text {\n  width: 50vw;\n}\n\n.field-name {\n  font-weight: bolder;\n}\n\nimg.close-chat-bubble {\n  width: 22%;\n  float: right;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JhdGUtcG9wdXAvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxcZmF2b3JhdGUtcG9wdXBcXGZhdm9yYXRlLXBvcHVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmF2b3JhdGUtcG9wdXAvZmF2b3JhdGUtcG9wdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0RKOztBREdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBRENBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QURGQTtFQUNJLHFCQUFBO0FDS0o7O0FESEE7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0gsYUFBQTtFQUNBLGNBQUE7QUNNRDs7QURKQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ09KOztBRExBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtBQ1NKOztBRFBBO0VBQ0ksV0FBQTtBQ1VKOztBRFJBO0VBQ0ksbUJBQUE7QUNXSjs7QURUQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDWUo7O0FEVkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ2FKIiwiZmlsZSI6InNyYy9hcHAvZmF2b3JhdGUtcG9wdXAvZmF2b3JhdGUtcG9wdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAxZnI7XHJcbiAgIFxyXG4gICAgZ3JpZC1nYXA6IDExcHg7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbi5wcm9maWxlLW5hbWUtbW9kYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uc2lkZS1iYXItaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbjogMGVtO1xyXG59XHJcbmltZy5jaGF0LWJ1YmJsZSB7XHJcbiAgICB3aWR0aDogNDYlO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbi5zaWRlcmJhci1pY29uLWRhdGEge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcclxuICAgIGdyaWQtZ2FwOiAxMXB4O1xyXG4gICAgLyogbWFyZ2luOiAyZW07ICovXHJcbiAgICBtYXJnaW46IDBlbSAxZW07XHJcbn1cclxuXHJcbnAuZGV0YWlsLWRhdGEge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcblxyXG59XHJcbi5ncm91cC10ZXh0LWltYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5zaWRlYmFyLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG4ucG9wdXAtY2hhdC1wYWdlIHtcclxuICAgIG1hcmdpbi10b3A6IDdlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuLm1vZGFse1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMGExO1xyXG59XHJcbi5tYWluLXBvcC1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhMztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuIGhlaWdodDogMTAwdmg7XHJcbiBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ubWFpbi1wb3Age1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyogaGVpZ2h0OiA4MHZoOyAqL1xyXG4gICAgLyogcGFkZGluZy10b3A6IDEzdmg7ICovXHJcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAxN2VtOyAqL1xyXG59XHJcbi5wb3AtZ3JpZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMGVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDZlbSAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuaW1nLmltYWdlLXByb2ZpbGUge1xyXG4gICAgaGVpZ2h0OiAxN3ZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZpZWxkcy1kYXRhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG4ub3V0cHV0LXRleHQge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbn1cclxuLmZpZWxkLW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5pbWcuY2xvc2UtY2hhdC1idWJibGUge1xyXG4gICAgd2lkdGg6IDIyJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9IiwiLm1vZGFsLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgMWZyO1xuICBncmlkLWdhcDogMTFweDtcbiAgbWFyZ2luOiAxZW07XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ucHJvZmlsZS1uYW1lLW1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNpZGUtYmFyLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1hcmdpbjogMGVtO1xufVxuXG5pbWcuY2hhdC1idWJibGUge1xuICB3aWR0aDogNDYlO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5zaWRlcmJhci1pY29uLWRhdGEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gIGdyaWQtZ2FwOiAxMXB4O1xuICAvKiBtYXJnaW46IDJlbTsgKi9cbiAgbWFyZ2luOiAwZW0gMWVtO1xufVxuXG5wLmRldGFpbC1kYXRhIHtcbiAgd2lkdGg6IDUwdnc7XG59XG5cbi5ncm91cC10ZXh0LWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNpZGViYXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5wb3B1cC1jaGF0LXBhZ2Uge1xuICBtYXJnaW4tdG9wOiA3ZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG4ubW9kYWwge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTE7XG59XG5cbi5tYWluLXBvcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGEzO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWFpbi1wb3Age1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8qIGhlaWdodDogODB2aDsgKi9cbiAgLyogcGFkZGluZy10b3A6IDEzdmg7ICovXG4gIC8qIHBhZGRpbmctcmlnaHQ6IDE3ZW07ICovXG59XG5cbi5wb3AtZ3JpZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA2ZW0gMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmltZy5pbWFnZS1wcm9maWxlIHtcbiAgaGVpZ2h0OiAxN3ZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZpZWxkcy1kYXRhIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4ub3V0cHV0LXRleHQge1xuICB3aWR0aDogNTB2dztcbn1cblxuLmZpZWxkLW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5pbWcuY2xvc2UtY2hhdC1idWJibGUge1xuICB3aWR0aDogMjIlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/favorate-popup/favorate-popup.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/favorate-popup/favorate-popup.page.ts ***!
    \*******************************************************/

  /*! exports provided: FavoratePopupPage */

  /***/
  function srcAppFavoratePopupFavoratePopupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoratePopupPage", function () {
      return FavoratePopupPage;
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

    var FavoratePopupPage = /*#__PURE__*/function () {
      function FavoratePopupPage(ConfigService, _Activatedroute, _location, http, alertController) {
        _classCallCheck(this, FavoratePopupPage);

        this.ConfigService = ConfigService;
        this._Activatedroute = _Activatedroute;
        this._location = _location;
        this.http = http;
        this.alertController = alertController;
        this.postman = {};
        this.scope = [];
        this.isLoading = false;
      }

      _createClass(FavoratePopupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.itrs = JSON.parse(localStorage.getItem("currentUser"));
          this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.uid = params.get("uid");
          });
          this.http.get("https://gowebtutorial.com/api/json/user/" + this.uid).subscribe(function (data) {
            _this.post = data;
            _this.name = _this.post.name; //

            _this.picture = _this.post.picture.url; //

            _this["long"] = _this.post.field_long_in_city.length;
            _this.genders = _this.post.field_gender.und; //

            _this.statu = _this.post.field_relationship_status.und; //

            _this.smokes = _this.post.field_smoke.und; //

            _this.activity = _this.post.field_activities_interests.und; //

            _this.edue = _this.post.field_education_level.und; //

            _this.tends = _this.post.field_friends_tend_to_be.und; //

            _this.cancels = _this.post.field_plans_get_cancelled.und; //

            _this.day = _this.post.field_spend_your_days.und; //

            _this.movie = _this.post.field_favorite_movies.und; //

            _this.musics = _this.post.field_favorite_music.und; //

            _this.book = _this.post.field_favorite_books.und; //

            _this.friend = _this.post.field_talk_about.und;
            _this.contact = _this.post.field_gender.und; //

            _this.alcohol = _this.post.field_alcohol.und;
            _this.language = _this.post.field_languages.und;
            _this.talk = _this.post.field_talk_about.und;
            _this.tv = _this.post.field_favorite_tv_shows.und;
            _this.good = _this.post.field_good_friend.und;
            _this.pets = _this.post.field_any_pets.und;
            _this.favInfo = [{
              name: _this.post.name,
              picture: _this.post.picture.url,
              activities: _this.post.field_activities_interests.und,
              uid: _this.uid
            }];
            console.log(_this.post);
          });
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          this._location.back();
        }
      }]);

      return FavoratePopupPage;
    }();

    FavoratePopupPage.ctorParameters = function () {
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

    FavoratePopupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorate-popup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorate-popup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/favorate-popup/favorate-popup.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorate-popup.page.scss */
      "./src/app/favorate-popup/favorate-popup.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], FavoratePopupPage);
    /***/
  }
}]);
//# sourceMappingURL=favorate-popup-favorate-popup-module-es5.js.map