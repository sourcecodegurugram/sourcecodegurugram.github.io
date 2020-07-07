(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-searchUser-new-message-new-message-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/searchUser/new-message/new-message.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/searchUser/new-message/new-message.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n\r\n<div class=\"main-New-message-container\">\r\n\r\n  <div class=\"heading-mew-message\">\r\n    Create new chat thread\r\n  </div>\r\n  \r\n  <div class=\"form-group\">\r\n    <input type=\"text\" class=\"form-control\" id=\"usr\" name=\"Subject\" [(ngModel)]=\"Subject\" placeholder=\"Enter Subject\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n  \r\n    <textarea class=\"form-control\" rows=\"5\" id=\"comment\" name=\"Message\" [(ngModel)]=\"Message\"  placeholder=\"Enter Message\"></textarea>\r\n  </div>\r\n\r\n<div class=\"button-align\">\r\n\r\n  <button type=\"button\" class=\"btn btn-primary send-button\" (click)=\"sendMessage()\">Send</button>\r\n\r\n\r\n\r\n</div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./src/app/chat/searchUser/new-message/new-message-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/chat/searchUser/new-message/new-message-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: NewMessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessagePageRoutingModule", function() { return NewMessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _new_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-message.page */ "./src/app/chat/searchUser/new-message/new-message.page.ts");




const routes = [
    {
        path: '',
        component: _new_message_page__WEBPACK_IMPORTED_MODULE_3__["NewMessagePage"]
    }
];
let NewMessagePageRoutingModule = class NewMessagePageRoutingModule {
};
NewMessagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewMessagePageRoutingModule);



/***/ }),

/***/ "./src/app/chat/searchUser/new-message/new-message.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/chat/searchUser/new-message/new-message.module.ts ***!
  \*******************************************************************/
/*! exports provided: NewMessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessagePageModule", function() { return NewMessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _new_message_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-message-routing.module */ "./src/app/chat/searchUser/new-message/new-message-routing.module.ts");
/* harmony import */ var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Navigation/NavigationBar/navigationbar.module */ "./src/app/Navigation/NavigationBar/navigationbar.module.ts");
/* harmony import */ var _new_message_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-message.page */ "./src/app/chat/searchUser/new-message/new-message.page.ts");









let NewMessagePageModule = class NewMessagePageModule {
};
NewMessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _new_message_routing_module__WEBPACK_IMPORTED_MODULE_6__["NewMessagePageRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__["NavigationbarModule"]
        ],
        declarations: [_new_message_page__WEBPACK_IMPORTED_MODULE_8__["NewMessagePage"]]
    })
], NewMessagePageModule);



/***/ }),

/***/ "./src/app/chat/searchUser/new-message/new-message.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/chat/searchUser/new-message/new-message.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-New-message-container {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0em 2em;\n  align-items: center;\n  /* width: 100%; */\n  overflow: hidden;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n  width: 100%;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\n.back-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.custom-back-button {\n  width: 100vw;\n  margin-bottom: 1em;\n}\n\n.send-button {\n  width: 100vw;\n}\n\n.button-align {\n  /* display: flow-root; */\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 17vh;\n}\n\n.heading-mew-message {\n  font-size: 20px;\n  margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG9jdW1lbnRzL1NvdXJjZWNvZGUgV29yay9Bbmd1bGFyIE9mZmljZSBQcm9qZWN0L25vdDREYXRpbmcvc3JjL2FwcC9jaGF0L3NlYXJjaFVzZXIvbmV3LW1lc3NhZ2UvbmV3LW1lc3NhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9jaGF0L3NlYXJjaFVzZXIvbmV3LW1lc3NhZ2UvbmV3LW1lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREhBO0VBQ0ksWUFBQTtBQ01KOztBREpBO0VBQ0ksd0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNPSjs7QURMQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9jaGF0L3NlYXJjaFVzZXIvbmV3LW1lc3NhZ2UvbmV3LW1lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tTmV3LW1lc3NhZ2UtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwZW0gMmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmxvYWRpbmctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jdXN0b20tYmFjay1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcbi5zZW5kLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbn1cclxuLmJ1dHRvbi1hbGlnbiB7XHJcbiAgICAvKiBkaXNwbGF5OiBmbG93LXJvb3Q7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogMTd2aDtcclxufVxyXG4uaGVhZGluZy1tZXctbWVzc2FnZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDFlbTtcclxufSIsIi5tYWluLU5ldy1tZXNzYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDBlbSAyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY3VzdG9tLWJhY2stYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5zZW5kLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLmJ1dHRvbi1hbGlnbiB7XG4gIC8qIGRpc3BsYXk6IGZsb3ctcm9vdDsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDE3dmg7XG59XG5cbi5oZWFkaW5nLW1ldy1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDFlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/chat/searchUser/new-message/new-message.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/chat/searchUser/new-message/new-message.page.ts ***!
  \*****************************************************************/
/*! exports provided: NewMessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessagePage", function() { return NewMessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let NewMessagePage = class NewMessagePage {
    constructor(_Activatedroute, http, router, _location) {
        this._Activatedroute = _Activatedroute;
        this.http = http;
        this.router = router;
        this._location = _location;
        this.isLoading = false;
    }
    ngOnInit() {
        this.itr = JSON.parse(localStorage.getItem("currentUser"));
        this.sub = this._Activatedroute.paramMap.subscribe((params) => {
            this.uid = params.get("uid");
            this.name = params.get("name");
        });
    }
    sendMessage() {
        this.isLoading = true;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
            .set("X-CSRF-Token", this.itr.token)
            .set("Content-Type", "application/json")
            .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);
        const requestOptions = {
            headers: headers,
            withCredentials: true,
        };
        return this.http
            .post("https://gowebtutorial.com/api/json/privatemsg", {
            recipients: this.name,
            subject: this.Subject,
            body: this.Message
        }, requestOptions)
            .subscribe((getMessagesSend) => {
            this.isLoading = false;
            this.router.navigate(["/chat/ChatsThreadListing"]);
        });
    }
    backClicked() {
        this._location.back();
    }
};
NewMessagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
NewMessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-message.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/searchUser/new-message/new-message.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-message.page.scss */ "./src/app/chat/searchUser/new-message/new-message.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
], NewMessagePage);



/***/ })

}]);
//# sourceMappingURL=chat-searchUser-new-message-new-message-module-es2015.js.map