(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-ChatsThreadListing-notificationchat-notificationchat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/ChatsThreadListing/notificationchat/notificationchat.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/ChatsThreadListing/notificationchat/notificationchat.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n\r\n  <ion-content style=\"background-color: white;\">\r\n    <div class=\"background-card new\">\r\n      <div class=\"header-persona-chat\" >\r\n        <div class=\"arrow\" routerLink=\"/chat/ChatsThreadListing\">\r\n       \r\n          <img src=\"../../assets/Images/asset-1.png\" class=\"arrow-image\">\r\n        </div>\r\n        <div class=\"image\">\r\n          <img src=\"https://gowebtutorial.com/sites/default/files/{{image}}\" class=\"image-chat\">\r\n        </div>\r\n        <div class=\"name\">\r\n          {{name}}\r\n        </div>\r\n        <div class=\"refesh-button\" (click)=\"refreshChat()\">\r\n          <i class=\"fa fa-refresh fa-spin\" style=\"font-size:24px\" *ngIf=\"updating\"></i>\r\n          <i style=\"font-size:24px\" class=\"fa\" *ngIf=\"!updating\">&#xf021;</i>\r\n\r\n    <!-- <img src=\"../../assets/Images/refresh.png\" class=\"refesh-button-image\"> -->\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"extra\"></div>\r\n      <div class=\"chat-time\" id=\"test\">\r\n        <div class=\"chat-align\" *ngFor=\"let new of message\">\r\n          <div class=\"left-chat-align\">\r\n            <div class=\"right-chat\">\r\n              <p class=\"chat-content\" *ngIf=\"new.author!=itr.user.uid\">{{new.body}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"right-chat-align\">\r\n            <div class=\"left-chat\">\r\n              <p class=\"chat-content\" *ngIf=\"new.author==itr.user.uid\">{{new.body}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"background-card\">\r\n      <div class=\"text-message-writer\">\r\n        <input type=\"text\" id=\"chat\" name=\"chat\" class=\"chat-field\" placeholder=\"Type your message here\"\r\n          [(ngModel)]=\"chat\">\r\n       <img src=\"../../assets/Images/send.png\" class=\"img-send\" (click)=\"sendMsg(chat)\" *ngIf=\"Send\">\r\n        <img src=\"../../assets/Images/rolling.gif\" class=\"img-send-rolling\"  *ngIf=\"Sending\" >\r\n      </div>\r\n    </div>\r\n  </ion-content>");

/***/ }),

/***/ "./src/app/chat/ChatsThreadListing/notificationchat/notificationchat-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/chat/ChatsThreadListing/notificationchat/notificationchat-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: NotificationchatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationchatPageRoutingModule", function() { return NotificationchatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notificationchat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notificationchat.page */ "./src/app/chat/ChatsThreadListing/notificationchat/notificationchat.page.ts");




const routes = [
    {
        path: '',
        component: _notificationchat_page__WEBPACK_IMPORTED_MODULE_3__["NotificationchatPage"]
    }
];
let NotificationchatPageRoutingModule = class NotificationchatPageRoutingModule {
};
NotificationchatPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationchatPageRoutingModule);



/***/ }),

/***/ "./src/app/chat/ChatsThreadListing/notificationchat/notificationchat.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/chat/ChatsThreadListing/notificationchat/notificationchat.module.ts ***!
  \*************************************************************************************/
/*! exports provided: NotificationchatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationchatPageModule", function() { return NotificationchatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _notificationchat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notificationchat-routing.module */ "./src/app/chat/ChatsThreadListing/notificationchat/notificationchat-routing.module.ts");
/* harmony import */ var _notificationchat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notificationchat.page */ "./src/app/chat/ChatsThreadListing/notificationchat/notificationchat.page.ts");
/* harmony import */ var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Navigation/NavigationBar/navigationbar.module */ "./src/app/Navigation/NavigationBar/navigationbar.module.ts");








let NotificationchatPageModule = class NotificationchatPageModule {
};
NotificationchatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notificationchat_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationchatPageRoutingModule"],
            _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__["NavigationbarModule"]
        ],
        declarations: [_notificationchat_page__WEBPACK_IMPORTED_MODULE_6__["NotificationchatPage"]]
    })
], NotificationchatPageModule);



/***/ }),

/***/ "./src/app/chat/ChatsThreadListing/notificationchat/notificationchat.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/chat/ChatsThreadListing/notificationchat/notificationchat.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-persona-chat {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 2fr 4fr 16fr 2fr;\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  position: fixed;\n  margin-top: 0.7em;\n}\n\nimg.image-chat {\n  height: 7vh;\n}\n\nimg.refesh-button-image {\n  width: 75%;\n}\n\np.chat-name {\n  margin-bottom: 0px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.text-message-writer {\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  position: fixed;\n  bottom: 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\ninput#chat {\n  width: 80%;\n  border-radius: 13px;\n  border: 1px solid;\n  margin: 11px;\n  padding-left: 15px;\n  font-size: 15px;\n}\n\nimg.img-send {\n  height: 3vh;\n}\n\n.chat-time {\n  height: 110vh;\n  overflow: scroll;\n  margin-bottom: 10vh;\n}\n\n.extra {\n  /* padding-bottom: 2em; */\n  padding-top: 6em;\n}\n\n.left-chat {\n  background-color: #0182FF;\n  width: 49%;\n  border-radius: 8px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  text-align: center;\n  margin-left: 6px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 13px;\n  margin: 0.5em 0em;\n}\n\n.right-chat {\n  float: right;\n  background-color: #E7E7EB;\n  border-radius: 8px;\n  margin: 0.5em 0em;\n  text-align: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 1em;\n  font-size: 13px;\n}\n\np.chat-content {\n  margin-bottom: 0px;\n  padding: 7px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.background-card {\n  background-color: white !important;\n}\n\n.right-chat-align {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.left-chat-align {\n  display: flex;\n  flex-direction: column;\n  float: right;\n  align-items: center;\n}\n\n.chat-align {\n  margin: 0em 1em;\n}\n\n.image-chat {\n  min-width: 65px !important;\n  height: 65px !important;\n}\n\n.name {\n  margin: 0px 15px;\n}\n\n.image {\n  width: 65px;\n  height: 65px;\n  overflow: hidden !important;\n  border-radius: 50%;\n}\n\nimg.img-send-rolling {\n  width: 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9DaGF0c1RocmVhZExpc3Rpbmcvbm90aWZpY2F0aW9uY2hhdC9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxjaGF0XFxDaGF0c1RocmVhZExpc3RpbmdcXG5vdGlmaWNhdGlvbmNoYXRcXG5vdGlmaWNhdGlvbmNoYXQucGFnZS5zY3NzIiwic3JjL2FwcC9jaGF0L0NoYXRzVGhyZWFkTGlzdGluZy9ub3RpZmljYXRpb25jaGF0L25vdGlmaWNhdGlvbmNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURHQTtFQUNJLFVBQUE7QUNBSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxrQ0FBQTtBQ0FKOztBREtBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0FDRko7O0FES0E7RUFDSSwwQkFBQTtFQUNBLHVCQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FESUE7RUFDSSxVQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jaGF0L0NoYXRzVGhyZWFkTGlzdGluZy9ub3RpZmljYXRpb25jaGF0L25vdGlmaWNhdGlvbmNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1wZXJzb25hLWNoYXQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNGZyIDE2ZnIgMmZyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLXRvcDogMC43ZW07XHJcblxyXG59XHJcblxyXG5pbWcuaW1hZ2UtY2hhdCB7XHJcbiAgICBoZWlnaHQ6IDd2aDtcclxufVxyXG5pbWcucmVmZXNoLWJ1dHRvbi1pbWFnZSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG59XHJcbnAuY2hhdC1uYW1lIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi50ZXh0LW1lc3NhZ2Utd3JpdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXQjY2hhdCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luOiAxMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5pbWcuaW1nLXNlbmQge1xyXG4gICAgaGVpZ2h0OiAzdmg7XHJcbn1cclxuXHJcbi5jaGF0LXRpbWUge1xyXG4gICAgaGVpZ2h0OiAxMTB2aDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG59XHJcblxyXG4uZXh0cmEge1xyXG4gICAgLyogcGFkZGluZy1ib3R0b206IDJlbTsgKi9cclxuICAgIHBhZGRpbmctdG9wOiA2ZW07XHJcbn1cclxuXHJcbi5sZWZ0LWNoYXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxODJGRjtcclxuICAgIHdpZHRoOiA0OSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IDAuNWVtIDBlbTtcclxufVxyXG5cclxuLnJpZ2h0LWNoYXQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3RTdFQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbjogMC41ZW0gMGVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxucC5jaGF0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG4ucmlnaHQtY2hhdC1hbGlnbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGVmdC1jaGF0LWFsaWduIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNoYXQtYWxpZ24ge1xyXG4gICAgbWFyZ2luOiAwZW0gMWVtO1xyXG59XHJcblxyXG4uaW1hZ2UtY2hhdCB7XHJcbiAgICBtaW4td2lkdGg6IDY1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICBtYXJnaW46IDBweCAxNXB4O1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuaW1nLmltZy1zZW5kLXJvbGxpbmcge1xyXG4gICAgd2lkdGg6IDV2dztcclxufSIsIi5oZWFkZXItcGVyc29uYS1jaGF0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNGZyIDE2ZnIgMmZyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW4tdG9wOiAwLjdlbTtcbn1cblxuaW1nLmltYWdlLWNoYXQge1xuICBoZWlnaHQ6IDd2aDtcbn1cblxuaW1nLnJlZmVzaC1idXR0b24taW1hZ2Uge1xuICB3aWR0aDogNzUlO1xufVxuXG5wLmNoYXQtbmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnRleHQtbWVzc2FnZS13cml0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlucHV0I2NoYXQge1xuICB3aWR0aDogODAlO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luOiAxMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW1nLmltZy1zZW5kIHtcbiAgaGVpZ2h0OiAzdmg7XG59XG5cbi5jaGF0LXRpbWUge1xuICBoZWlnaHQ6IDExMHZoO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBtYXJnaW4tYm90dG9tOiAxMHZoO1xufVxuXG4uZXh0cmEge1xuICAvKiBwYWRkaW5nLWJvdHRvbTogMmVtOyAqL1xuICBwYWRkaW5nLXRvcDogNmVtO1xufVxuXG4ubGVmdC1jaGF0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODJGRjtcbiAgd2lkdGg6IDQ5JTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAwLjVlbSAwZW07XG59XG5cbi5yaWdodC1jaGF0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFN0VCO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMC41ZW0gMGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5wLmNoYXQtY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZzogN3B4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmJhY2tncm91bmQtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5yaWdodC1jaGF0LWFsaWduIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sZWZ0LWNoYXQtYWxpZ24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbG9hdDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jaGF0LWFsaWduIHtcbiAgbWFyZ2luOiAwZW0gMWVtO1xufVxuXG4uaW1hZ2UtY2hhdCB7XG4gIG1pbi13aWR0aDogNjVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbn1cblxuLm5hbWUge1xuICBtYXJnaW46IDBweCAxNXB4O1xufVxuXG4uaW1hZ2Uge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaW1nLmltZy1zZW5kLXJvbGxpbmcge1xuICB3aWR0aDogNXZ3O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/chat/ChatsThreadListing/notificationchat/notificationchat.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/chat/ChatsThreadListing/notificationchat/notificationchat.page.ts ***!
  \***********************************************************************************/
/*! exports provided: NotificationchatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationchatPage", function() { return NotificationchatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NotificationchatPage = class NotificationchatPage {
    constructor(http, _Activatedroute) {
        this.http = http;
        this._Activatedroute = _Activatedroute;
        this.Send = true;
        this.Sending = false;
        this.updating = false;
    }
    ngOnInit() {
        //Thread
        this.sub = this._Activatedroute.paramMap.subscribe((params) => {
            this.thread = params.get("thread_id");
        });
        // Image
        this.sub = this._Activatedroute.paramMap.subscribe((params) => {
            this.image = params.get("image_path");
        });
        //Name
        this.sub = this._Activatedroute.paramMap.subscribe((params) => {
            this.name = params.get("name");
        });
        this.itr = JSON.parse(localStorage.getItem("currentUser"));
        console.log(this.itr.user.uid);
        this.getChat();
    }
    sendMsg(chat) {
        this.chat = "";
        this.Send = false;
        this.Sending = true;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set("X-CSRF-Token", this.itr.token)
            .set("Content-Type", "application/json")
            .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);
        const requestOptions = {
            headers: headers,
            withCredentials: true,
        };
        this.http
            .post("https://gowebtutorial.com/api/json/privatemsg/", {
            thread_id: this.thread,
            recipients: "44135",
            subject: "hello",
            body: chat,
        }, requestOptions)
            .subscribe((data) => {
            this.getChat();
            this.Sending = false;
            this.Send = true;
            console.log(data);
        });
    }
    getChat() {
        if (this.itr != null) {
            this.updating = true;
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set("X-CSRF-Token", this.itr.token)
                .set("Content-Type", "application/json")
                .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);
            const requestOptions = {
                headers: headers,
                withCredentials: true,
            };
            return this.http
                .get("https://gowebtutorial.com/api/json/privatemsg/" + this.thread, requestOptions)
                .subscribe((getMessages) => {
                this.messages = getMessages;
                this.message = this.messages.messages;
                this.thread = this.messages.pmtid;
                console.log(getMessages);
                this.updating = false;
            });
        }
    }
    refreshChat() {
        this.getChat();
    }
};
NotificationchatPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
NotificationchatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-notificationchat",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notificationchat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/ChatsThreadListing/notificationchat/notificationchat.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notificationchat.page.scss */ "./src/app/chat/ChatsThreadListing/notificationchat/notificationchat.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], NotificationchatPage);



/***/ })

}]);
//# sourceMappingURL=chat-ChatsThreadListing-notificationchat-notificationchat-module-es2015.js.map