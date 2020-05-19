(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personal-chat-personal-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-chat/personal-chat.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-chat/personal-chat.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content style=\"background-color: white;\">\n<div class=\"background-card new\">\n  <div class=\"header-persona-chat\" routerLink=\"/chat/tabs2\">\n    <div class=\"arrow\">\n\n      <img src=\"../../assets/Images/asset-1.png\" class=\"arrow-image\">\n    </div>\n    <div class=\"image\">\n      <img src=\"../../assets/Images/user_-8.png\" class=\"image-chat\">\n    </div>\n    <div class=\"name\">\n      <p class=\"chat-name\">Vibrant_chef</p>\n    </div>\n  </div>\n\n  <div class=\"chat-time\"></div>\n    <div class=\"left-chat\">\n      <p class=\"chat-content\">How are you?</p>\n    </div>\n    <div class=\"right-chat\">\n      <p class=\"chat-content\">Fine you say</p>\n    </div>\n\n\n    <div class=\"chat-time\"></div>\n    <div class=\"left-chat\">\n      <p class=\"chat-content\">'Lets meet tomorrow at 8'</p>\n    </div>\n    <div class=\"right-chat\">\n      <p class=\"chat-content\">Thats, great...</p>\n    </div>\n  </div>\n</ion-content>\n<ion-content class=\"background-card\">\n<div  class=\"background-card\">\n  <div class=\"text-message-writer\">\n    <input type=\"text\" id=\"chat\" name=\"chat\" class=\"chat-field\" placeholder=\"Type your message here\">\n    <img src=\"../../assets/Images/send.png\" class=\"img-send\">\n  </div>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/personal-chat/personal-chat-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/personal-chat/personal-chat-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PersonalChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalChatPageRoutingModule", function() { return PersonalChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _personal_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal-chat.page */ "./src/app/personal-chat/personal-chat.page.ts");




const routes = [
    {
        path: '',
        component: _personal_chat_page__WEBPACK_IMPORTED_MODULE_3__["PersonalChatPage"]
    }
];
let PersonalChatPageRoutingModule = class PersonalChatPageRoutingModule {
};
PersonalChatPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PersonalChatPageRoutingModule);



/***/ }),

/***/ "./src/app/personal-chat/personal-chat.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/personal-chat/personal-chat.module.ts ***!
  \*******************************************************/
/*! exports provided: PersonalChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalChatPageModule", function() { return PersonalChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _personal_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-chat-routing.module */ "./src/app/personal-chat/personal-chat-routing.module.ts");
/* harmony import */ var _personal_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-chat.page */ "./src/app/personal-chat/personal-chat.page.ts");







let PersonalChatPageModule = class PersonalChatPageModule {
};
PersonalChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _personal_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonalChatPageRoutingModule"]
        ],
        declarations: [_personal_chat_page__WEBPACK_IMPORTED_MODULE_6__["PersonalChatPage"]]
    })
], PersonalChatPageModule);



/***/ }),

/***/ "./src/app/personal-chat/personal-chat.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/personal-chat/personal-chat.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-persona-chat {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 2fr 4fr 16fr;\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  margin-top: 1em;\n}\n\nimg.image-chat {\n  height: 7vh;\n}\n\np.chat-name {\n  margin-bottom: 0px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.text-message-writer {\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  position: absolute;\n  bottom: 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\ninput#chat {\n  width: 80%;\n  border-radius: 13px;\n  border: 1px solid;\n  margin: 11px;\n  padding-left: 15px;\n  font-size: 15px;\n}\n\nimg.img-send {\n  height: 3vh;\n}\n\n.chat-time {\n  display: flex;\n  /* justify-content: center; */\n  justify-content: center;\n  margin: 2em;\n  font-size: 14px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.left-chat {\n  background-color: #0182FF;\n  width: 49%;\n  border-radius: 50px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  text-align: center;\n  margin-left: 6px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 13px;\n}\n\n.right-chat {\n  float: right;\n  background-color: #E7E7EB;\n  width: 49%;\n  border-radius: 50px;\n  text-align: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 1em;\n  font-size: 13px;\n}\n\np.chat-content {\n  margin-bottom: 0px;\n  padding: 5px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.background-card {\n  background-color: white !important;\n}\n\n.new {\n  margin-top: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwtY2hhdC9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxwZXJzb25hbC1jaGF0XFxwZXJzb25hbC1jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGVyc29uYWwtY2hhdC9wZXJzb25hbC1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBRUkseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpBO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDT0o7O0FESkE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDUUo7O0FETEE7RUFFSSxrQ0FBQTtBQ09KOztBRExBO0VBQ0ksZ0JBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFsLWNoYXQvcGVyc29uYWwtY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXBlcnNvbmEtY2hhdCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDRmciAxNmZyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbmltZy5pbWFnZS1jaGF0IHtcclxuICAgIGhlaWdodDogN3ZoO1xyXG59XHJcbnAuY2hhdC1uYW1lIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLnRleHQtbWVzc2FnZS13cml0ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlucHV0I2NoYXQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbjogMTFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5pbWcuaW1nLXNlbmQge1xyXG4gICAgaGVpZ2h0OiAzdmg7XHJcbn1cclxuLmNoYXQtdGltZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4ubGVmdC1jaGF0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTgyRkY7XHJcbiAgICB3aWR0aDogNDklO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnJpZ2h0LWNoYXQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3RTdFQjtcclxuICAgIHdpZHRoOiA0OSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5wLmNoYXQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxufVxyXG4uYmFja2dyb3VuZC1jYXJkXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5ldyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG59IiwiLmhlYWRlci1wZXJzb25hLWNoYXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA0ZnIgMTZmcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgcGFkZGluZzogMC41ZW07XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuaW1nLmltYWdlLWNoYXQge1xuICBoZWlnaHQ6IDd2aDtcbn1cblxucC5jaGF0LW5hbWUge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi50ZXh0LW1lc3NhZ2Utd3JpdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgcGFkZGluZzogMC41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pbnB1dCNjaGF0IHtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbjogMTFweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmltZy5pbWctc2VuZCB7XG4gIGhlaWdodDogM3ZoO1xufVxuXG4uY2hhdC10aW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmxlZnQtY2hhdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTgyRkY7XG4gIHdpZHRoOiA0OSU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucmlnaHQtY2hhdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U3RTdFQjtcbiAgd2lkdGg6IDQ5JTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxucC5jaGF0LWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5iYWNrZ3JvdW5kLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubmV3IHtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/personal-chat/personal-chat.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/personal-chat/personal-chat.page.ts ***!
  \*****************************************************/
/*! exports provided: PersonalChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalChatPage", function() { return PersonalChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PersonalChatPage = class PersonalChatPage {
    constructor() { }
    ngOnInit() {
    }
};
PersonalChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-chat/personal-chat.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personal-chat.page.scss */ "./src/app/personal-chat/personal-chat.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PersonalChatPage);



/***/ })

}]);
//# sourceMappingURL=personal-chat-personal-chat-module-es2015.js.map