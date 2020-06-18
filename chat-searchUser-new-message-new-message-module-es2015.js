(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-searchUser-new-message-new-message-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/searchUser/new-message/new-message.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/searchUser/new-message/new-message.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n\r\n<div class=\"main-New-message-container\">\r\n\r\n  <div class=\"heading-mew-message\">\r\n    Create new chat thread\r\n  </div>\r\n  \r\n  <div class=\"form-group\">\r\n    <input type=\"text\" class=\"form-control\" id=\"usr\" name=\"Subject\" [(ngModel)]=\"Subject\" placeholder=\"Enter Subject\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n  \r\n    <textarea class=\"form-control\" rows=\"5\" id=\"comment\" name=\"Message\" [(ngModel)]=\"Message\"  placeholder=\"Enter Message\"></textarea>\r\n  </div>\r\n\r\n<div class=\"button-align\">\r\n\r\n  <button type=\"button\" class=\"btn btn-primary send-button\" (click)=\"sendMessage()\">Send</button>\r\n\r\n\r\n  <button type=\"button\" class=\"btn btn-primary custom-back-button\" (click)=\"backClicked()\">Back</button>\r\n</div>\r\n</div>\r\n\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".main-New-message-container {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0em 2em;\n  align-items: center;\n  /* width: 100%; */\n  overflow: hidden;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n  width: 100%;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\n.back-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.custom-back-button {\n  width: 100vw;\n  margin-bottom: 1em;\n}\n\n.send-button {\n  width: 100vw;\n}\n\n.button-align {\n  /* display: flow-root; */\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 17vh;\n}\n\n.heading-mew-message {\n  font-size: 20px;\n  margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9zZWFyY2hVc2VyL25ldy1tZXNzYWdlL0s6XFxBbmd1bGFyIFByb2plY3RcXG5vdDREYXRpbmcvc3JjXFxhcHBcXGNoYXRcXHNlYXJjaFVzZXJcXG5ldy1tZXNzYWdlXFxuZXctbWVzc2FnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQvc2VhcmNoVXNlci9uZXctbWVzc2FnZS9uZXctbWVzc2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsYUFBQTtFQUVBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0FDTUo7O0FESkE7RUFDSSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ09KOztBRExBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvc2VhcmNoVXNlci9uZXctbWVzc2FnZS9uZXctbWVzc2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1OZXctbWVzc2FnZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBlbSAyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgLmJhY2stYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmN1c3RvbS1iYWNrLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuLnNlbmQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxufVxyXG4uYnV0dG9uLWFsaWduIHtcclxuICAgIC8qIGRpc3BsYXk6IGZsb3ctcm9vdDsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiAxN3ZoO1xyXG59XHJcbi5oZWFkaW5nLW1ldy1tZXNzYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59IiwiLm1haW4tTmV3LW1lc3NhZ2UtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMGVtIDJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogd2lkdGg6IDEwMCU7ICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jdXN0b20tYmFjay1idXR0b24ge1xuICB3aWR0aDogMTAwdnc7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLnNlbmQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4uYnV0dG9uLWFsaWduIHtcbiAgLyogZGlzcGxheTogZmxvdy1yb290OyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTd2aDtcbn1cblxuLmhlYWRpbmctbWV3LW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMWVtO1xufSJdfQ== */");

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