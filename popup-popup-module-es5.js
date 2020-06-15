function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["popup-popup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/popup/popup.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/popup/popup.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPopupPopupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-pop-background\">\r\n\r\n\r\n  <div class=\"main-pop\">\r\n\r\n\r\n    <div class=\"pop-grids\">\r\n      <div class=\"modal-grid\">\r\n\r\n        <div class=\"profile-picture-modal\">\r\n          <img src={{picture}} class=\"image-profile\">\r\n\r\n        </div>\r\n\r\n        <div class=\"profile-name-modal\">\r\n          <span class=\"name\">{{name}}</span>\r\n          <span class=\"not-verified\">Verified</span>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"siderbar-icon-data\">\r\n        <div class=\"side-bar-icon\">\r\n          <div class=\"group-text-image\">\r\n            <img src=\"../../assets/Images/popchat.png\" class=\"chat-bubble\" routerLink=\"/new-message/{{uid}}/{{name}}\">\r\n            <span class=\"name-icon\">Chat</span>\r\n          </div>\r\n          <div class=\"group-text-image\" (click)=\"getFavorite()\">\r\n            <img src=\"../../assets/Images/star.png\" class=\"chat-bubble\">\r\n            <span class=\"name-icon\">Favorite</span>\r\n          </div>\r\n          <div class=\"group-text-image\">\r\n            <img src=\"../../assets/Images/sign.png\" class=\"chat-bubble\" (click)=\"backClicked()\">\r\n          </div>\r\n          <div class=\"group-text-image mt-3\">\r\n            <span class=\"name-icon\">Never See again</span>\r\n            <img src=\"../../assets/Images/feeling.png\" class=\"chat-bubble mb-3\">\r\n          </div>\r\n\r\n          <div class=\"group-text-image\">\r\n            <span class=\"name-icon\">Report to admin</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"sidebar-content\">\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\">FullName</div>\r\n            <div class=\"output-text\">{{name}}</div>\r\n          </div>\r\n\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\">Gender:</div>\r\n            <div class=\"output-text\" *ngFor=\"let genders of genders\">{{genders.value}}</div>\r\n          </div>\r\n\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\">Actvities:</div>\r\n            <div class=\"output-text\" *ngFor=\"let activity of activity\">{{activity.value}}</div>\r\n          </div>\r\n\r\n\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"contact\">I Want To Be Contacted By:</div>\r\n            <div class=\"output-text\" *ngFor=\"let contact of contact\">{{contact.value}}</div>\r\n          </div>\r\n\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"musics\">Favorite Music:</div>\r\n            <div class=\"output-text\" *ngFor=\"let Music of musics\">{{Music.value}}</div>\r\n          </div>\r\n\r\n\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"book\">Favorate Books:</div>\r\n            <div class=\"output-text\" *ngFor=\"let books of book\">{{books.value}}</div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"movie\">Favorate Movies:</div>\r\n            <div class=\"output-text\" *ngFor=\"let movies of movie\">{{movies.value}}</div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"day\">How you spend your days?:</div>\r\n            <div class=\"output-text\"  *ngFor=\"let days of day\">{{days.value}}</div>\r\n          </div>\r\n\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"cancels\">If plan get cancels?:</div>\r\n            <div class=\"output-text\"  *ngFor=\"let cancel of cancels\">{{cancel.value}}</div>\r\n          </div>\r\n\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"tends\">Firends tends to be?:</div>\r\n            <div class=\"output-text\"  *ngFor=\"let tend of tends\">{{tend.value}}</div>\r\n          </div>\r\n      \r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"edue\">Education Level:</div>\r\n            <div class=\"output-text\"  *ngFor=\"let edue of edue\">{{edue.value}}</div>\r\n          </div>\r\n      \r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"smokes\">Do you smokes:</div>\r\n            <div class=\"output-text\"  *ngFor=\"let smokes of smokes\">{{smokes.value}}</div>\r\n          </div>\r\n\r\n\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"statu\">Relationship status:</div>\r\n            <div class=\"output-text\"  *ngFor=\"let statu of statu\">{{statu.value}}</div>\r\n          </div>\r\n\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"long\">How long you live:</div>\r\n            <div class=\"output-text\"  *ngFor=\"let long of long\">{{long.value}}</div>\r\n          </div>\r\n        \r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"alcohol\">Do you drink:</div>\r\n            <div class=\"output-text\"  *ngFor=\"let alcohol of alcohol\">{{alcohol.value}}</div>\r\n          </div>\r\n\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"language\">Language:</div>\r\n            <div class=\"output-text\"  *ngFor=\"let language of language\">{{language.value}}</div>\r\n          </div>\r\n\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"talk\">Friends talk About:</div>\r\n            <div class=\"output-text\"  *ngFor=\"let talk of talk\">{{talk.value}}</div>\r\n          </div>\r\n\r\n\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"tv\">TV Shows:</div>\r\n            <div class=\"output-text\"  *ngFor=\"let tv of tv\">{{tv.value}}</div>\r\n          </div>\r\n\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"good\">Good Friends:</div>\r\n            <div class=\"output-text\"  *ngFor=\"let good of good\">{{good.value}}</div>\r\n          </div>\r\n\r\n\r\n          <div class=\"fields-data\">\r\n            <div class=\"field-name\" *ngIf=\"pets\">Pets:</div>\r\n            <div class=\"output-text\"  *ngFor=\"let pets of pets\">{{pets.value}}</div>\r\n          </div>\r\n         \r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/popup/popup-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/popup/popup-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: PopupPageRoutingModule */

  /***/
  function srcAppPopupPopupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupPageRoutingModule", function () {
      return PopupPageRoutingModule;
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


    var _popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./popup.page */
    "./src/app/popup/popup.page.ts");

    var routes = [{
      path: '',
      component: _popup_page__WEBPACK_IMPORTED_MODULE_3__["PopupPage"]
    }];

    var PopupPageRoutingModule = function PopupPageRoutingModule() {
      _classCallCheck(this, PopupPageRoutingModule);
    };

    PopupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PopupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/popup/popup.module.ts":
  /*!***************************************!*\
    !*** ./src/app/popup/popup.module.ts ***!
    \***************************************/

  /*! exports provided: PopupPageModule */

  /***/
  function srcAppPopupPopupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupPageModule", function () {
      return PopupPageModule;
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


    var _popup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./popup-routing.module */
    "./src/app/popup/popup-routing.module.ts");
    /* harmony import */


    var _popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./popup.page */
    "./src/app/popup/popup.page.ts");

    var PopupPageModule = function PopupPageModule() {
      _classCallCheck(this, PopupPageModule);
    };

    PopupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _popup_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupPageRoutingModule"]],
      declarations: [_popup_page__WEBPACK_IMPORTED_MODULE_6__["PopupPage"]]
    })], PopupPageModule);
    /***/
  },

  /***/
  "./src/app/popup/popup.page.scss":
  /*!***************************************!*\
    !*** ./src/app/popup/popup.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppPopupPopupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  grid-gap: 11px;\n  margin: 1em;\n  margin-top: 1em;\n  margin-bottom: 0px;\n}\n\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.side-bar-icon {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin: 0em;\n}\n\nimg.chat-bubble {\n  width: 46%;\n  margin-top: 1em;\n}\n\n.siderbar-icon-data {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 11px;\n  /* margin: 2em; */\n  margin: 0em 1em;\n}\n\np.detail-data {\n  width: 50vw;\n}\n\n.group-text-image {\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 1em;\n}\n\n.popup-chat-page {\n  margin-top: 7em;\n  margin-left: 1em;\n  text-align: justify;\n  margin-right: 1em;\n}\n\n.modal {\n  background: #000000a1;\n}\n\n.main-pop-background {\n  background-color: #000000a3;\n  background-position: center;\n  height: 100vh;\n  overflow: auto;\n}\n\n.main-pop {\n  display: block;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  /* height: 80vh; */\n  /* padding-top: 13vh; */\n  /* padding-right: 17em; */\n}\n\n.pop-grids {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 0em;\n  background-color: white;\n  margin: 6em 2em;\n  margin-bottom: 0px;\n}\n\nimg.image-profile {\n  height: 17vh;\n  width: 100%;\n}\n\n.fields-data {\n  margin-bottom: 1em;\n}\n\n.output-text {\n  width: 50vw;\n}\n\n.field-name {\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wdXAvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxccG9wdXBcXHBvcHVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcG9wdXAvcG9wdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBRUEsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0RKOztBREdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBRENBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QURGQTtFQUNJLHFCQUFBO0FDS0o7O0FESEE7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0gsYUFBQTtFQUNBLGNBQUE7QUNNRDs7QURKQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ09KOztBRExBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtBQ1NKOztBRFBBO0VBQ0ksV0FBQTtBQ1VKOztBRFJBO0VBQ0ksbUJBQUE7QUNXSiIsImZpbGUiOiJzcmMvYXBwL3BvcHVwL3BvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XHJcbiAgIFxyXG4gICAgZ3JpZC1nYXA6IDExcHg7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbi5wcm9maWxlLW5hbWUtbW9kYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uc2lkZS1iYXItaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbjogMGVtO1xyXG59XHJcbmltZy5jaGF0LWJ1YmJsZSB7XHJcbiAgICB3aWR0aDogNDYlO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbi5zaWRlcmJhci1pY29uLWRhdGEge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcclxuICAgIGdyaWQtZ2FwOiAxMXB4O1xyXG4gICAgLyogbWFyZ2luOiAyZW07ICovXHJcbiAgICBtYXJnaW46IDBlbSAxZW07XHJcbn1cclxuXHJcbnAuZGV0YWlsLWRhdGEge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcblxyXG59XHJcbi5ncm91cC10ZXh0LWltYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5zaWRlYmFyLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG4ucG9wdXAtY2hhdC1wYWdlIHtcclxuICAgIG1hcmdpbi10b3A6IDdlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuLm1vZGFse1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMGExO1xyXG59XHJcbi5tYWluLXBvcC1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhMztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuIGhlaWdodDogMTAwdmg7XHJcbiBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ubWFpbi1wb3Age1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyogaGVpZ2h0OiA4MHZoOyAqL1xyXG4gICAgLyogcGFkZGluZy10b3A6IDEzdmg7ICovXHJcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAxN2VtOyAqL1xyXG59XHJcbi5wb3AtZ3JpZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMGVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDZlbSAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuaW1nLmltYWdlLXByb2ZpbGUge1xyXG4gICAgaGVpZ2h0OiAxN3ZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZpZWxkcy1kYXRhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG4ub3V0cHV0LXRleHQge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbn1cclxuLmZpZWxkLW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufSIsIi5tb2RhbC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xuICBncmlkLWdhcDogMTFweDtcbiAgbWFyZ2luOiAxZW07XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ucHJvZmlsZS1uYW1lLW1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNpZGUtYmFyLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1hcmdpbjogMGVtO1xufVxuXG5pbWcuY2hhdC1idWJibGUge1xuICB3aWR0aDogNDYlO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5zaWRlcmJhci1pY29uLWRhdGEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gIGdyaWQtZ2FwOiAxMXB4O1xuICAvKiBtYXJnaW46IDJlbTsgKi9cbiAgbWFyZ2luOiAwZW0gMWVtO1xufVxuXG5wLmRldGFpbC1kYXRhIHtcbiAgd2lkdGg6IDUwdnc7XG59XG5cbi5ncm91cC10ZXh0LWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNpZGViYXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5wb3B1cC1jaGF0LXBhZ2Uge1xuICBtYXJnaW4tdG9wOiA3ZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG4ubW9kYWwge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTE7XG59XG5cbi5tYWluLXBvcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGEzO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWFpbi1wb3Age1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8qIGhlaWdodDogODB2aDsgKi9cbiAgLyogcGFkZGluZy10b3A6IDEzdmg7ICovXG4gIC8qIHBhZGRpbmctcmlnaHQ6IDE3ZW07ICovXG59XG5cbi5wb3AtZ3JpZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA2ZW0gMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmltZy5pbWFnZS1wcm9maWxlIHtcbiAgaGVpZ2h0OiAxN3ZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZpZWxkcy1kYXRhIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4ub3V0cHV0LXRleHQge1xuICB3aWR0aDogNTB2dztcbn1cblxuLmZpZWxkLW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/popup/popup.page.ts":
  /*!*************************************!*\
    !*** ./src/app/popup/popup.page.ts ***!
    \*************************************/

  /*! exports provided: PopupPage */

  /***/
  function srcAppPopupPopupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupPage", function () {
      return PopupPage;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var PopupPage = /*#__PURE__*/function () {
      function PopupPage(ConfigService, _Activatedroute, _location, http) {
        _classCallCheck(this, PopupPage);

        this.ConfigService = ConfigService;
        this._Activatedroute = _Activatedroute;
        this._location = _location;
        this.http = http;
        this.postman = {};
        this.scope = [];
      }

      _createClass(PopupPage, [{
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
              activities: _this.post.field_activities_interests.und
            }];
            console.log(_this.post);
          });
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          this._location.back();
        }
      }, {
        key: "getFavorite",
        value: function getFavorite() {
          var _this2 = this;

          this.scope = [];
          this.http.get("https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid).subscribe(function (users) {
            _this2.respnoseJSON = users;

            if (_this2.respnoseJSON.field_favorite_users.und) {
              console.log("value exists");
              _this2.scope = JSON.parse(_this2.respnoseJSON.field_favorite_users["und"][0]["value"]);

              _this2.scope.push(_this2.favInfo);
            } else {
              console.log("value doesnt exist");

              _this2.scope.push(_this2.favInfo);
            }

            _this2.addFavorite();
          });
        }
      }, {
        key: "addFavorite",
        value: function addFavorite() {
          // Add
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("X-CSRF-Token", this.itrs.token).set("Content-Type", "application/json").set("X-Cookie", this.itrs.session_name + "=" + this.itrs.sessid);
          var requestOptions = {
            headers: headers,
            withCredentials: true
          }; // Add entry into favorites

          this.responseString = JSON.stringify(this.scope);
          console.log(this.scope);
          this.http.put("https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid, {
            field_favorite_users: {
              und: [{
                value: this.responseString
              }]
            }
          }, requestOptions).subscribe(function (favorate) {});
        }
      }]);

      return PopupPage;
    }();

    PopupPage.ctorParameters = function () {
      return [{
        type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    PopupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-popup",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./popup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/popup/popup.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./popup.page.scss */
      "./src/app/popup/popup.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], PopupPage);
    /***/
  }
}]);
//# sourceMappingURL=popup-popup-module-es5.js.map