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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>notificationchat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n  \n  <ion-content>\n    <div class=\"header-persona-chat\" routerLink=\"/chat/tabs2\">\n      <div class=\"arrow\">\n  \n        <img src=\"../../assets/Images/asset-1.png\" class=\"arrow-image\">\n      </div>\n      <div class=\"image\">\n        <img src=\"../../assets/Images/logo.png\" class=\"image-chat\">\n      </div>\n      <div class=\"name\">\n     \n      </div>\n    </div>\n<div class=\"chat-time\"></div>\n    <div class=\"left-chat\">\n      <p class=\"chat-content\">How may I help you today?</p>\n    </div>\n    <div class=\"right-chat\">\n      <p class=\"chat-content\">Hi, I am having trouble with my \n        account....</p>\n    </div>\n  </ion-content>\n  \n \n  \n  <ion-content>\n    <div class=\"text-message-writer\">\n\n      <input type=\"text\" id=\"chat\" name=\"chat\" class=\"chat-field\" placeholder=\"Type your message here\">\n      <img src=\"../../assets/Images/send.png\" class=\"img-send\">\n    </div>\n  </ion-content>\n";
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


    __webpack_exports__["default"] = ".header-persona-chat {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 2fr 4fr 16fr;\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  margin-top: 1em;\n}\n\nimg.image-chat {\n  height: 7vh;\n}\n\np.chat-name {\n  margin-bottom: 0px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.text-message-writer {\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  position: absolute;\n  bottom: 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\ninput#chat {\n  width: 80%;\n  border-radius: 13px;\n  border: 1px solid;\n  margin: 11px;\n  padding-left: 15px;\n  font-size: 15px;\n}\n\nimg.img-send {\n  height: 3vh;\n}\n\n.chat-time {\n  display: flex;\n  /* justify-content: center; */\n  justify-content: center;\n  margin: 2em;\n  font-size: 14px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.left-chat {\n  background-color: #0182FF;\n  width: 49%;\n  border-radius: 50px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  text-align: center;\n  margin-left: 6px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 13px;\n}\n\n.right-chat {\n  float: right;\n  background-color: #E7E7EB;\n  width: 49%;\n  border-radius: 50px;\n  text-align: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 1em;\n  font-size: 13px;\n}\n\np.chat-content {\n  margin-bottom: 0px;\n  padding: 5px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9nb2QvTWFpbiBEYXRhL0FuZ3VsYXIgUHJvamVjdC9ub3Q0RGF0aW5nL3NyYy9hcHAvbm90aWZpY2F0aW9uY2hhdC9ub3RpZmljYXRpb25jaGF0LnBhZ2Uuc2NzcyIsImFwcC9ub3RpZmljYXRpb25jaGF0L25vdGlmaWNhdGlvbmNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFFSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNPSjs7QURKQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNRSiIsImZpbGUiOiJhcHAvbm90aWZpY2F0aW9uY2hhdC9ub3RpZmljYXRpb25jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItcGVyc29uYS1jaGF0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNGZyIDE2ZnI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuaW1nLmltYWdlLWNoYXQge1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbn1cclxucC5jaGF0LW5hbWUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4udGV4dC1tZXNzYWdlLXdyaXRlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW5wdXQjY2hhdCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luOiAxMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbmltZy5pbWctc2VuZCB7XHJcbiAgICBoZWlnaHQ6IDN2aDtcclxufVxyXG4uY2hhdC10aW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5sZWZ0LWNoYXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxODJGRjtcclxuICAgIHdpZHRoOiA0OSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ucmlnaHQtY2hhdCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFN0VCO1xyXG4gICAgd2lkdGg6IDQ5JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbnAuY2hhdC1jb250ZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG59IiwiLmhlYWRlci1wZXJzb25hLWNoYXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA0ZnIgMTZmcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgcGFkZGluZzogMC41ZW07XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuaW1nLmltYWdlLWNoYXQge1xuICBoZWlnaHQ6IDd2aDtcbn1cblxucC5jaGF0LW5hbWUge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi50ZXh0LW1lc3NhZ2Utd3JpdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgcGFkZGluZzogMC41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pbnB1dCNjaGF0IHtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbjogMTFweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmltZy5pbWctc2VuZCB7XG4gIGhlaWdodDogM3ZoO1xufVxuXG4uY2hhdC10aW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmxlZnQtY2hhdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgyRkY7XG4gIHdpZHRoOiA0OSU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucmlnaHQtY2hhdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U3RTdFQjtcbiAgd2lkdGg6IDQ5JTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxucC5jaGF0LWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */";
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

    var NotificationchatPage = /*#__PURE__*/function () {
      function NotificationchatPage() {
        _classCallCheck(this, NotificationchatPage);
      }

      _createClass(NotificationchatPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotificationchatPage;
    }();

    NotificationchatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notificationchat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notificationchat.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notificationchat/notificationchat.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notificationchat.page.scss */
      "./src/app/notificationchat/notificationchat.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NotificationchatPage);
    /***/
  }
}]);
//# sourceMappingURL=notificationchat-notificationchat-module-es5.js.map