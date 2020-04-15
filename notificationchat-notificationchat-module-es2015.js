(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificationchat-notificationchat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notificationchat/notificationchat.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notificationchat/notificationchat.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n  \n  <div class=\"background-card\">\n    <div class=\"header-persona-chat\" routerLink=\"/chat/tabs2\">\n      <div class=\"arrow\">\n  \n        <img src=\"../../assets/Images/asset-1.png\" class=\"arrow-image\">\n      </div>\n      <div class=\"image\">\n        <img src=\"../../assets/Images/logo.png\" class=\"image-chat\">\n      </div>\n      <div class=\"name\">\n     \n      </div>\n    </div>\n<div class=\"chat-time\"></div>\n    <div class=\"left-chat\">\n      <p class=\"chat-content\">How may I help you today?</p>\n    </div>\n    <div class=\"right-chat\">\n      <p class=\"chat-content\">Hi, I am having trouble with my \n        account....</p>\n    </div>\n  </div>\n  \n \n  \n  <div class=\"background-card\">\n    <div class=\"text-message-writer\">\n\n      <input type=\"text\" id=\"chat\" name=\"chat\" class=\"chat-field\" placeholder=\"Type your message here\">\n      <img src=\"../../assets/Images/send.png\" class=\"img-send\">\n    </div>\n  </div>\n");

/***/ }),

/***/ "./src/app/notificationchat/notificationchat-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/notificationchat/notificationchat-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationchatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationchatPageRoutingModule", function() { return NotificationchatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notificationchat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notificationchat.page */ "./src/app/notificationchat/notificationchat.page.ts");




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

/***/ "./src/app/notificationchat/notificationchat.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/notificationchat/notificationchat.module.ts ***!
  \*************************************************************/
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
/* harmony import */ var _notificationchat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notificationchat-routing.module */ "./src/app/notificationchat/notificationchat-routing.module.ts");
/* harmony import */ var _notificationchat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notificationchat.page */ "./src/app/notificationchat/notificationchat.page.ts");







let NotificationchatPageModule = class NotificationchatPageModule {
};
NotificationchatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notificationchat_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationchatPageRoutingModule"]
        ],
        declarations: [_notificationchat_page__WEBPACK_IMPORTED_MODULE_6__["NotificationchatPage"]]
    })
], NotificationchatPageModule);



/***/ }),

/***/ "./src/app/notificationchat/notificationchat.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/notificationchat/notificationchat.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-persona-chat {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 2fr 4fr 16fr;\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  margin-top: 1em;\n}\n\nimg.image-chat {\n  height: 7vh;\n}\n\np.chat-name {\n  margin-bottom: 0px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.text-message-writer {\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  position: absolute;\n  bottom: 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\ninput#chat {\n  width: 80%;\n  border-radius: 13px;\n  border: 1px solid;\n  margin: 11px;\n  padding-left: 15px;\n  font-size: 15px;\n}\n\nimg.img-send {\n  height: 3vh;\n}\n\n.chat-time {\n  display: flex;\n  /* justify-content: center; */\n  justify-content: center;\n  margin: 2em;\n  font-size: 14px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.left-chat {\n  background-color: #0182FF;\n  width: 49%;\n  border-radius: 50px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  text-align: center;\n  margin-left: 6px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 13px;\n}\n\n.right-chat {\n  float: right;\n  background-color: #E7E7EB;\n  width: 49%;\n  border-radius: 50px;\n  text-align: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 1em;\n  font-size: 13px;\n}\n\np.chat-content {\n  margin-bottom: 0px;\n  padding: 5px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.background-card {\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uY2hhdC9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxub3RpZmljYXRpb25jaGF0XFxub3RpZmljYXRpb25jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbm90aWZpY2F0aW9uY2hhdC9ub3RpZmljYXRpb25jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBRUkseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpBO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDT0o7O0FESkE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDUUo7O0FETEE7RUFFSSxrQ0FBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9uY2hhdC9ub3RpZmljYXRpb25jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItcGVyc29uYS1jaGF0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNGZyIDE2ZnI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuaW1nLmltYWdlLWNoYXQge1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbn1cclxucC5jaGF0LW5hbWUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4udGV4dC1tZXNzYWdlLXdyaXRlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW5wdXQjY2hhdCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luOiAxMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbmltZy5pbWctc2VuZCB7XHJcbiAgICBoZWlnaHQ6IDN2aDtcclxufVxyXG4uY2hhdC10aW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5sZWZ0LWNoYXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxODJGRjtcclxuICAgIHdpZHRoOiA0OSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ucmlnaHQtY2hhdCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFN0VCO1xyXG4gICAgd2lkdGg6IDQ5JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbnAuY2hhdC1jb250ZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG59XHJcbi5iYWNrZ3JvdW5kLWNhcmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufSIsIi5oZWFkZXItcGVyc29uYS1jaGF0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNGZyIDE2ZnI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbmltZy5pbWFnZS1jaGF0IHtcbiAgaGVpZ2h0OiA3dmg7XG59XG5cbnAuY2hhdC1uYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGV4dC1tZXNzYWdlLXdyaXRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW5wdXQjY2hhdCB7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW46IDExcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5pbWcuaW1nLXNlbmQge1xuICBoZWlnaHQ6IDN2aDtcbn1cblxuLmNoYXQtdGltZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5sZWZ0LWNoYXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MkZGO1xuICB3aWR0aDogNDklO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnJpZ2h0LWNoYXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFN0U3RUI7XG4gIHdpZHRoOiA0OSU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbnAuY2hhdC1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYmFja2dyb3VuZC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/notificationchat/notificationchat.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/notificationchat/notificationchat.page.ts ***!
  \***********************************************************/
/*! exports provided: NotificationchatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationchatPage", function() { return NotificationchatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationchatPage = class NotificationchatPage {
    constructor() { }
    ngOnInit() {
    }
};
NotificationchatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notificationchat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notificationchat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notificationchat/notificationchat.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notificationchat.page.scss */ "./src/app/notificationchat/notificationchat.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotificationchatPage);



/***/ })

}]);
//# sourceMappingURL=notificationchat-notificationchat-module-es2015.js.map