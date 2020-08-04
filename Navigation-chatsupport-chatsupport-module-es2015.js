(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Navigation-chatsupport-chatsupport-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/chatsupport/chatsupport.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/chatsupport/chatsupport.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-navigationbar></app-navigationbar>\n</ion-header>\n\n  <ion-content style=\"background-color: white;\">\n    <div class=\"background-card new\">\n      <div class=\"header-persona-chat\" >\n        <div class=\"arrow\" routerLink=\"/chat/ChatsThreadListing\">\n       \n          <img src=\"../../assets/Images/asset-1.png\" class=\"arrow-image\">\n        </div>\n        <div class=\"image\">\n          <img src=\"https://gowebtutorial.com/sites/default/files/{{image}}\" class=\"image-chat\">\n        </div>\n        <div class=\"name\">\n          {{name}}\n        </div>\n        <div class=\"refesh-button\" (click)=\"refreshChat()\">\n          <i class=\"fa fa-refresh fa-spin\" style=\"font-size:24px\" *ngIf=\"updating\"></i>\n          <i style=\"font-size:24px\" class=\"fa\" *ngIf=\"!updating\">&#xf021;</i>\n\n    <!-- <img src=\"../../assets/Images/refresh.png\" class=\"refesh-button-image\"> -->\n\n        </div>\n      </div>\n      <div class=\"extra\"></div>\n      <div class=\"chat-time\" id=\"test\">\n        <div class=\"chat-align\" *ngFor=\"let new of message\">\n          <div class=\"left-chat-align\">\n            <div class=\"right-chat\">\n              <p class=\"chat-content\" *ngIf=\"new.author!=itr.user.uid\">{{new.body}}</p>\n            </div>\n           \n          </div>\n          <div class=\"right-chat-align\">\n            <div class=\"left-chat\">\n              <p class=\"chat-content\" *ngIf=\"new.author==itr.user.uid\">{{new.body}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"background-card\">\n      <div class=\"text-message-writer\">\n        <input type=\"text\" id=\"chat\" name=\"chat\" class=\"chat-field\" placeholder=\"Type your message here\"\n          [(ngModel)]=\"chat\">\n       <img src=\"../../assets/Images/send.png\" class=\"img-send\" (click)=\"sendMsg(chat)\" *ngIf=\"Send\">\n        <img src=\"../../assets/Images/rolling.gif\" class=\"img-send-rolling\"  *ngIf=\"Sending\" >\n      </div>\n    </div>\n  </ion-content>");

/***/ }),

/***/ "./src/app/Navigation/chatsupport/chatsupport-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Navigation/chatsupport/chatsupport-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ChatsupportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsupportPageRoutingModule", function() { return ChatsupportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chatsupport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatsupport.page */ "./src/app/Navigation/chatsupport/chatsupport.page.ts");




const routes = [
    {
        path: '',
        component: _chatsupport_page__WEBPACK_IMPORTED_MODULE_3__["ChatsupportPage"]
    }
];
let ChatsupportPageRoutingModule = class ChatsupportPageRoutingModule {
};
ChatsupportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatsupportPageRoutingModule);



/***/ }),

/***/ "./src/app/Navigation/chatsupport/chatsupport.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/Navigation/chatsupport/chatsupport.module.ts ***!
  \**************************************************************/
/*! exports provided: ChatsupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsupportPageModule", function() { return ChatsupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _chatsupport_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatsupport-routing.module */ "./src/app/Navigation/chatsupport/chatsupport-routing.module.ts");
/* harmony import */ var _chatsupport_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatsupport.page */ "./src/app/Navigation/chatsupport/chatsupport.page.ts");
/* harmony import */ var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Navigation/NavigationBar/navigationbar.module */ "./src/app/Navigation/NavigationBar/navigationbar.module.ts");








let ChatsupportPageModule = class ChatsupportPageModule {
};
ChatsupportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__["NavigationbarModule"],
            _chatsupport_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatsupportPageRoutingModule"]
        ],
        declarations: [_chatsupport_page__WEBPACK_IMPORTED_MODULE_6__["ChatsupportPage"]]
    })
], ChatsupportPageModule);



/***/ }),

/***/ "./src/app/Navigation/chatsupport/chatsupport.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/Navigation/chatsupport/chatsupport.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-persona-chat {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 2fr 4fr 16fr 2fr;\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  position: fixed;\n  margin-top: 0.7em;\n}\n\nimg.image-chat {\n  height: 7vh;\n}\n\nimg.refesh-button-image {\n  width: 75%;\n}\n\np.chat-name {\n  margin-bottom: 0px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.text-message-writer {\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  position: fixed;\n  bottom: 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\ninput#chat {\n  width: 80%;\n  border-radius: 13px;\n  border: 1px solid;\n  margin: 11px;\n  padding-left: 15px;\n  font-size: 15px;\n}\n\nimg.img-send {\n  height: 3vh;\n}\n\n.chat-time {\n  height: 110vh;\n  overflow: scroll;\n  margin-bottom: 10vh;\n}\n\n.extra {\n  /* padding-bottom: 2em; */\n  padding-top: 6em;\n}\n\n.left-chat {\n  background-color: #0182FF;\n  width: 49%;\n  border-radius: 8px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  text-align: center;\n  margin-left: 6px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 13px;\n  margin: 0.5em 0em;\n}\n\n.right-chat {\n  float: right;\n  background-color: #E7E7EB;\n  border-radius: 8px;\n  margin: 0.5em 0em;\n  text-align: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 1em;\n  font-size: 13px;\n}\n\np.chat-content {\n  margin-bottom: 0px;\n  padding: 7px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.background-card {\n  background-color: white !important;\n}\n\n.right-chat-align {\n  display: flex;\n  flex-direction: column;\n  float: right;\n  align-items: flex-end;\n  width: 100%;\n}\n\n.left-chat-align {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.chat-align {\n  margin: 0em 1em;\n}\n\n.image-chat {\n  min-width: 65px !important;\n  height: 65px !important;\n}\n\n.name {\n  margin: 0px 15px;\n}\n\n.image {\n  width: 65px;\n  height: 65px;\n  overflow: hidden !important;\n  border-radius: 50%;\n}\n\nimg.img-send-rolling {\n  width: 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvTmF2aWdhdGlvbi9jaGF0c3VwcG9ydC9jaGF0c3VwcG9ydC5wYWdlLnNjc3MiLCJzcmMvYXBwL05hdmlnYXRpb24vY2hhdHN1cHBvcnQvY2hhdHN1cHBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURHQTtFQUNJLFVBQUE7QUNBSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxrQ0FBQTtBQ0FKOztBREtBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBRE1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNISjs7QURRQTtFQUNJLGVBQUE7QUNMSjs7QURRQTtFQUNJLDBCQUFBO0VBQ0EsdUJBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0FDTEo7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURPQTtFQUNJLFVBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL05hdmlnYXRpb24vY2hhdHN1cHBvcnQvY2hhdHN1cHBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1wZXJzb25hLWNoYXQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDRmciAxNmZyIDJmcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW4tdG9wOiAwLjdlbTtcblxufVxuXG5pbWcuaW1hZ2UtY2hhdCB7XG4gICAgaGVpZ2h0OiA3dmg7XG59XG5pbWcucmVmZXNoLWJ1dHRvbi1pbWFnZSB7XG4gICAgd2lkdGg6IDc1JTtcbn1cbnAuY2hhdC1uYW1lIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGV4dC1tZXNzYWdlLXdyaXRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pbnB1dCNjaGF0IHtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgbWFyZ2luOiAxMXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbmltZy5pbWctc2VuZCB7XG4gICAgaGVpZ2h0OiAzdmg7XG59XG5cbi5jaGF0LXRpbWUge1xuICAgIGhlaWdodDogMTEwdmg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xufVxuXG4uZXh0cmEge1xuICAgIC8qIHBhZGRpbmctYm90dG9tOiAyZW07ICovXG4gICAgcGFkZGluZy10b3A6IDZlbTtcbn1cblxuLmxlZnQtY2hhdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxODJGRjtcbiAgICB3aWR0aDogNDklO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luOiAwLjVlbSAwZW07XG59XG5cbi5yaWdodC1jaGF0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3RTdFQjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiAwLjVlbSAwZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxucC5jaGF0LWNvbnRlbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbn1cblxuLmJhY2tncm91bmQtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuXG5cbi5yaWdodC1jaGF0LWFsaWduIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB3aWR0aDogMTAwJTtcblxuICBcbn1cbi5sZWZ0LWNoYXQtYWxpZ24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuIFxufVxuXG4uY2hhdC1hbGlnbiB7XG4gICAgbWFyZ2luOiAwZW0gMWVtO1xufVxuXG4uaW1hZ2UtY2hhdCB7XG4gICAgbWluLXdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uYW1lIHtcbiAgICBtYXJnaW46IDBweCAxNXB4O1xufVxuXG4uaW1hZ2Uge1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNjVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuaW1nLmltZy1zZW5kLXJvbGxpbmcge1xuICAgIHdpZHRoOiA1dnc7XG59IiwiLmhlYWRlci1wZXJzb25hLWNoYXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA0ZnIgMTZmciAyZnI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbi10b3A6IDAuN2VtO1xufVxuXG5pbWcuaW1hZ2UtY2hhdCB7XG4gIGhlaWdodDogN3ZoO1xufVxuXG5pbWcucmVmZXNoLWJ1dHRvbi1pbWFnZSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbnAuY2hhdC1uYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGV4dC1tZXNzYWdlLXdyaXRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW5wdXQjY2hhdCB7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW46IDExcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5pbWcuaW1nLXNlbmQge1xuICBoZWlnaHQ6IDN2aDtcbn1cblxuLmNoYXQtdGltZSB7XG4gIGhlaWdodDogMTEwdmg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG1hcmdpbi1ib3R0b206IDEwdmg7XG59XG5cbi5leHRyYSB7XG4gIC8qIHBhZGRpbmctYm90dG9tOiAyZW07ICovXG4gIHBhZGRpbmctdG9wOiA2ZW07XG59XG5cbi5sZWZ0LWNoYXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MkZGO1xuICB3aWR0aDogNDklO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDAuNWVtIDBlbTtcbn1cblxuLnJpZ2h0LWNoYXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFN0U3RUI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAwLjVlbSAwZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbnAuY2hhdC1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiA3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYmFja2dyb3VuZC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnJpZ2h0LWNoYXQtYWxpZ24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbG9hdDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sZWZ0LWNoYXQtYWxpZ24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmNoYXQtYWxpZ24ge1xuICBtYXJnaW46IDBlbSAxZW07XG59XG5cbi5pbWFnZS1jaGF0IHtcbiAgbWluLXdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjVweCAhaW1wb3J0YW50O1xufVxuXG4ubmFtZSB7XG4gIG1hcmdpbjogMHB4IDE1cHg7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pbWcuaW1nLXNlbmQtcm9sbGluZyB7XG4gIHdpZHRoOiA1dnc7XG59Il19 */");

/***/ }),

/***/ "./src/app/Navigation/chatsupport/chatsupport.page.ts":
/*!************************************************************!*\
  !*** ./src/app/Navigation/chatsupport/chatsupport.page.ts ***!
  \************************************************************/
/*! exports provided: ChatsupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsupportPage", function() { return ChatsupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ChatsupportPage = class ChatsupportPage {
    constructor(http, _Activatedroute) {
        this.http = http;
        this._Activatedroute = _Activatedroute;
        this.Send = true;
        this.Sending = false;
        this.updating = false;
        this.counterpartParticipants = [];
    }
    ngOnInit() {
        this.itr = JSON.parse(localStorage.getItem("currentUser"));
        this.sub = this._Activatedroute.paramMap.subscribe((params) => {
            this.thread = params.get("pmtId");
        });
        this.getAllChat();
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
    getAllChat() {
        return this.http
            .get("https://gowebtutorial.com/api/json/user/204451").subscribe(chatSupport => {
            this.chatSupports = chatSupport;
            this.image = this.chatSupports.picture.filename;
            this.name = this.chatSupports.name;
        });
    }
};
ChatsupportPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ChatsupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chatsupport',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chatsupport.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/chatsupport/chatsupport.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chatsupport.page.scss */ "./src/app/Navigation/chatsupport/chatsupport.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ChatsupportPage);



/***/ })

}]);
//# sourceMappingURL=Navigation-chatsupport-chatsupport-module-es2015.js.map