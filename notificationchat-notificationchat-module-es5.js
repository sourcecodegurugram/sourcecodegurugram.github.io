function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificationchat-notificationchat-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notificationchat/notificationchat.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notificationchat/notificationchat.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationchatNotificationchatPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <ion-content style=\"background-color: white;\">\r\n    <div class=\"background-card new\">\r\n      <div class=\"header-persona-chat\" >\r\n        <div class=\"arrow\" routerLink=\"/chat/tabs2\">\r\n\r\n          <img src=\"../../assets/Images/asset-1.png\" class=\"arrow-image\">\r\n        </div>\r\n        <div class=\"image\">\r\n          <img src=\"https://gowebtutorial.com/sites/default/files/{{image}}\" class=\"image-chat\">\r\n        </div>\r\n        <div class=\"name\">\r\n          {{name}}\r\n        </div>\r\n        <div class=\"refesh-button\" (click)=\"refreshChat()\">\r\n\r\n\r\n    <img src=\"../../assets/Images/refresh.png\" class=\"refesh-button-image\">\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"extra\"></div>\r\n      <div class=\"chat-time\" id=\"test\">\r\n        <div class=\"chat-align\" *ngFor=\"let new of message\">\r\n          <div class=\"left-chat-align\">\r\n            <div class=\"right-chat\">\r\n              <p class=\"chat-content\" *ngIf=\"new.author!=itr.user.uid\">{{new.body}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"right-chat-align\">\r\n            <div class=\"left-chat\">\r\n              <p class=\"chat-content\" *ngIf=\"new.author==itr.user.uid\">{{new.body}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"background-card\">\r\n      <div class=\"text-message-writer\">\r\n        <input type=\"text\" id=\"chat\" name=\"chat\" class=\"chat-field\" placeholder=\"Type your message here\"\r\n          [(ngModel)]=\"chat\">\r\n       <img src=\"../../assets/Images/send.png\" class=\"img-send\" (click)=\"sendMsg(chat)\" *ngIf=\"Send\">\r\n        <img src=\"../../assets/Images/rolling.gif\" class=\"img-send-rolling\"  *ngIf=\"Sending\" >\r\n      </div>\r\n    </div>\r\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/notificationchat/notificationchat-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/notificationchat/notificationchat-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: NotificationchatPageRoutingModule */

  /***/
  function srcAppNotificationchatNotificationchatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationchatPageRoutingModule", function () {
      return NotificationchatPageRoutingModule;
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


    var _notificationchat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notificationchat.page */
    "./src/app/notificationchat/notificationchat.page.ts");

    var routes = [{
      path: '',
      component: _notificationchat_page__WEBPACK_IMPORTED_MODULE_3__["NotificationchatPage"]
    }];

    var NotificationchatPageRoutingModule = function NotificationchatPageRoutingModule() {
      _classCallCheck(this, NotificationchatPageRoutingModule);
    };

    NotificationchatPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationchatPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/notificationchat/notificationchat.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/notificationchat/notificationchat.module.ts ***!
    \*************************************************************/

  /*! exports provided: NotificationchatPageModule */

  /***/
  function srcAppNotificationchatNotificationchatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationchatPageModule", function () {
      return NotificationchatPageModule;
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


    var _notificationchat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notificationchat-routing.module */
    "./src/app/notificationchat/notificationchat-routing.module.ts");
    /* harmony import */


    var _notificationchat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notificationchat.page */
    "./src/app/notificationchat/notificationchat.page.ts");

    var NotificationchatPageModule = function NotificationchatPageModule() {
      _classCallCheck(this, NotificationchatPageModule);
    };

    NotificationchatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notificationchat_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationchatPageRoutingModule"]],
      declarations: [_notificationchat_page__WEBPACK_IMPORTED_MODULE_6__["NotificationchatPage"]]
    })], NotificationchatPageModule);
    /***/
  },

  /***/
  "./src/app/notificationchat/notificationchat.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/notificationchat/notificationchat.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationchatNotificationchatPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-persona-chat {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 2fr 4fr 16fr 2fr;\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  position: fixed;\n  margin-top: 0.7em;\n}\n\nimg.image-chat {\n  height: 7vh;\n}\n\nimg.refesh-button-image {\n  width: 75%;\n}\n\np.chat-name {\n  margin-bottom: 0px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.text-message-writer {\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  position: fixed;\n  bottom: 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\ninput#chat {\n  width: 80%;\n  border-radius: 13px;\n  border: 1px solid;\n  margin: 11px;\n  padding-left: 15px;\n  font-size: 15px;\n}\n\nimg.img-send {\n  height: 3vh;\n}\n\n.chat-time {\n  height: 110vh;\n  overflow: scroll;\n  margin-bottom: 10vh;\n}\n\n.extra {\n  /* padding-bottom: 2em; */\n  padding-top: 6em;\n}\n\n.left-chat {\n  background-color: #0182FF;\n  width: 49%;\n  border-radius: 8px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  text-align: center;\n  margin-left: 6px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 13px;\n  margin: 0.5em 0em;\n}\n\n.right-chat {\n  float: right;\n  background-color: #E7E7EB;\n  border-radius: 8px;\n  margin: 0.5em 0em;\n  text-align: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 1em;\n  font-size: 13px;\n}\n\np.chat-content {\n  margin-bottom: 0px;\n  padding: 7px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.background-card {\n  background-color: white !important;\n}\n\n.new {\n  margin-top: 10vh;\n}\n\n.right-chat-align {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.left-chat-align {\n  display: flex;\n  flex-direction: column;\n  float: right;\n  align-items: center;\n}\n\n.chat-align {\n  margin: 0em 1em;\n}\n\n.image-chat {\n  min-width: 65px !important;\n  height: 65px !important;\n}\n\n.name {\n  margin: 0px 15px;\n}\n\n.image {\n  width: 65px;\n  height: 65px;\n  overflow: hidden !important;\n  border-radius: 50%;\n}\n\nimg.img-send-rolling {\n  width: 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uY2hhdC9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxub3RpZmljYXRpb25jaGF0XFxub3RpZmljYXRpb25jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbm90aWZpY2F0aW9uY2hhdC9ub3RpZmljYXRpb25jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUVBLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FER0E7RUFDSSxVQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksa0NBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLDBCQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbmNoYXQvbm90aWZpY2F0aW9uY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXBlcnNvbmEtY2hhdCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA0ZnIgMTZmciAyZnI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjdlbTtcclxuXHJcbn1cclxuXHJcbmltZy5pbWFnZS1jaGF0IHtcclxuICAgIGhlaWdodDogN3ZoO1xyXG59XHJcbmltZy5yZWZlc2gtYnV0dG9uLWltYWdlIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxucC5jaGF0LW5hbWUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnRleHQtbWVzc2FnZS13cml0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dCNjaGF0IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW46IDExcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbmltZy5pbWctc2VuZCB7XHJcbiAgICBoZWlnaHQ6IDN2aDtcclxufVxyXG5cclxuLmNoYXQtdGltZSB7XHJcbiAgICBoZWlnaHQ6IDExMHZoO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XHJcbn1cclxuXHJcbi5leHRyYSB7XHJcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogMmVtOyAqL1xyXG4gICAgcGFkZGluZy10b3A6IDZlbTtcclxufVxyXG5cclxuLmxlZnQtY2hhdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MkZGO1xyXG4gICAgd2lkdGg6IDQ5JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbjogMC41ZW0gMGVtO1xyXG59XHJcblxyXG4ucmlnaHQtY2hhdCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFN0VCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luOiAwLjVlbSAwZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG5wLmNoYXQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxufVxyXG5cclxuLmJhY2tncm91bmQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmV3IHtcclxuICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbn1cclxuXHJcbi5yaWdodC1jaGF0LWFsaWduIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sZWZ0LWNoYXQtYWxpZ24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhdC1hbGlnbiB7XHJcbiAgICBtYXJnaW46IDBlbSAxZW07XHJcbn1cclxuXHJcbi5pbWFnZS1jaGF0IHtcclxuICAgIG1pbi13aWR0aDogNjVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5pbWcuaW1nLXNlbmQtcm9sbGluZyB7XHJcbiAgICB3aWR0aDogNXZ3O1xyXG59IiwiLmhlYWRlci1wZXJzb25hLWNoYXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA0ZnIgMTZmciAyZnI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbi10b3A6IDAuN2VtO1xufVxuXG5pbWcuaW1hZ2UtY2hhdCB7XG4gIGhlaWdodDogN3ZoO1xufVxuXG5pbWcucmVmZXNoLWJ1dHRvbi1pbWFnZSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbnAuY2hhdC1uYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGV4dC1tZXNzYWdlLXdyaXRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW5wdXQjY2hhdCB7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW46IDExcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5pbWcuaW1nLXNlbmQge1xuICBoZWlnaHQ6IDN2aDtcbn1cblxuLmNoYXQtdGltZSB7XG4gIGhlaWdodDogMTEwdmg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG1hcmdpbi1ib3R0b206IDEwdmg7XG59XG5cbi5leHRyYSB7XG4gIC8qIHBhZGRpbmctYm90dG9tOiAyZW07ICovXG4gIHBhZGRpbmctdG9wOiA2ZW07XG59XG5cbi5sZWZ0LWNoYXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MkZGO1xuICB3aWR0aDogNDklO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDAuNWVtIDBlbTtcbn1cblxuLnJpZ2h0LWNoYXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFN0U3RUI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAwLjVlbSAwZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbnAuY2hhdC1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiA3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYmFja2dyb3VuZC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm5ldyB7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG59XG5cbi5yaWdodC1jaGF0LWFsaWduIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sZWZ0LWNoYXQtYWxpZ24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbG9hdDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jaGF0LWFsaWduIHtcbiAgbWFyZ2luOiAwZW0gMWVtO1xufVxuXG4uaW1hZ2UtY2hhdCB7XG4gIG1pbi13aWR0aDogNjVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbn1cblxuLm5hbWUge1xuICBtYXJnaW46IDBweCAxNXB4O1xufVxuXG4uaW1hZ2Uge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaW1nLmltZy1zZW5kLXJvbGxpbmcge1xuICB3aWR0aDogNXZ3O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/notificationchat/notificationchat.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/notificationchat/notificationchat.page.ts ***!
    \***********************************************************/

  /*! exports provided: NotificationchatPage */

  /***/
  function srcAppNotificationchatNotificationchatPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationchatPage", function () {
      return NotificationchatPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NotificationchatPage = /*#__PURE__*/function () {
      function NotificationchatPage(http, _Activatedroute) {
        _classCallCheck(this, NotificationchatPage);

        this.http = http;
        this._Activatedroute = _Activatedroute;
        this.Send = true;
        this.Sending = false;
      }

      _createClass(NotificationchatPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //Thread
          this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.thread = params.get("thread_id");
          }); // Image

          this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.image = params.get("image_path");
          }); //Name

          this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.name = params.get("name");
          });
          this.itr = JSON.parse(localStorage.getItem("currentUser"));
          console.log(this.itr.user.uid);
          this.getChat();
        }
      }, {
        key: "sendMsg",
        value: function sendMsg(chat) {
          var _this2 = this;

          this.chat = "";
          this.Send = false;
          this.Sending = true;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("X-CSRF-Token", this.itr.token).set("Content-Type", "application/json").set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);
          var requestOptions = {
            headers: headers,
            withCredentials: true
          };
          this.http.post("https://gowebtutorial.com/api/json/privatemsg/", {
            thread_id: this.thread,
            recipients: "44135",
            subject: "hello",
            body: chat
          }, requestOptions).subscribe(function (data) {
            _this2.getChat();

            _this2.Sending = false;
            _this2.Send = true;
            console.log(data);
          });
        }
      }, {
        key: "getChat",
        value: function getChat() {
          var _this3 = this;

          if (this.itr != null) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("X-CSRF-Token", this.itr.token).set("Content-Type", "application/json").set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);
            var requestOptions = {
              headers: headers,
              withCredentials: true
            };
            return this.http.get("https://gowebtutorial.com/api/json/privatemsg/" + this.thread, requestOptions).subscribe(function (getMessages) {
              _this3.messages = getMessages;
              _this3.message = _this3.messages.messages;
              _this3.thread = _this3.messages.pmtid;
              console.log(getMessages);
            });
          }
        }
      }, {
        key: "refreshChat",
        value: function refreshChat() {
          this.getChat();
        }
      }]);

      return NotificationchatPage;
    }();

    NotificationchatPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    NotificationchatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-notificationchat",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notificationchat.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notificationchat/notificationchat.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notificationchat.page.scss */
      "./src/app/notificationchat/notificationchat.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], NotificationchatPage);
    /***/
  }
}]);
//# sourceMappingURL=notificationchat-notificationchat-module-es5.js.map