(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ChatsThreadListing-ChatsThreadListing-module~chat-ChatsThreadListing-ChatsThreadListing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n<div  *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n\r\n<ion-content>\r\n<div class=\"background-card\">\r\n  <div class=\"main-content-chat\">\r\n    <div class=\"chat-items\">\r\n      <div routerLink=\"/notificationchat/{{message.thread_id}}/{{message.picture.filename}}/{{message.name}}\"\r\n        class=\"chat-grid\" *ngFor=\"let message of counterpartParticipants\">\r\n        <div class=\"image\">\r\n          <img src=\"https://gowebtutorial.com/sites/default/files/{{message.picture.filename}}\" class=\" image-chat\">\r\n        </div>\r\n\r\n        <div class=\"name\">\r\n          <p class=\"chat-name\">{{message.name}}</p>\r\n          <p class=\"last-chat\">{{message.subject}}</p>\r\n        </div>\r\n        <div class=\"time\">\r\n          <div class=\"time-text\">{{message.last_updated}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/chat/ChatsThreadListing/ChatsThreadListing-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/chat/ChatsThreadListing/ChatsThreadListing-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ChatsThreadListingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsThreadListingPageRoutingModule", function() { return ChatsThreadListingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ChatsThreadListing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatsThreadListing.page */ "./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.ts");




const routes = [
    {
        path: '',
        component: _ChatsThreadListing_page__WEBPACK_IMPORTED_MODULE_3__["ChatsThreadListingPage"]
    }
];
let ChatsThreadListingPageRoutingModule = class ChatsThreadListingPageRoutingModule {
};
ChatsThreadListingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatsThreadListingPageRoutingModule);



/***/ }),

/***/ "./src/app/chat/ChatsThreadListing/ChatsThreadListing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/chat/ChatsThreadListing/ChatsThreadListing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ChatsThreadListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsThreadListingPageModule", function() { return ChatsThreadListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ChatsThreadListing_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatsThreadListing-routing.module */ "./src/app/chat/ChatsThreadListing/ChatsThreadListing-routing.module.ts");
/* harmony import */ var _Navigati_Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Navigati../../Navigation/NavigationBar/navigationbar.module */ "./src/app/Navigation/NavigationBar/navigationbar.module.ts");
/* harmony import */ var _ChatsThreadListing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChatsThreadListing.page */ "./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.ts");









let ChatsThreadListingPageModule = class ChatsThreadListingPageModule {
};
ChatsThreadListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ChatsThreadListing_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChatsThreadListingPageRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _Navigati_Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__["NavigationbarModule"]
        ],
        declarations: [_ChatsThreadListing_page__WEBPACK_IMPORTED_MODULE_8__["ChatsThreadListingPage"]]
    })
], ChatsThreadListingPageModule);



/***/ }),

/***/ "./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chat-grid {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  align-items: unset;\n  grid-gap: 0px;\n  margin: 1em;\n  align-items: center;\n  align-content: center;\n}\n\np.chat-name {\n  margin-bottom: 0px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 2%;\n  margin: auto 20px;\n}\n\np.last-chat {\n  margin-bottom: 0px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.main-content-chat {\n  overflow: scroll;\n}\n\n.background-card {\n  background-color: white !important;\n}\n\n.chat-items {\n  margin-bottom: 10em;\n}\n\n.time-text {\n  font-size: 14px;\n}\n\n.image-chat {\n  min-width: 65px !important;\n  height: 65px !important;\n  margin: auto !important;\n  display: block;\n}\n\n.image {\n  width: 65px;\n  height: 65px;\n  overflow: hidden !important;\n  border-radius: 50%;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9DaGF0c1RocmVhZExpc3RpbmcvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxcY2hhdFxcQ2hhdHNUaHJlYWRMaXN0aW5nXFxDaGF0c1RocmVhZExpc3RpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9jaGF0L0NoYXRzVGhyZWFkTGlzdGluZy9DaGF0c1RocmVhZExpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFFSSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0NBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsYUFBQTtFQUVBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jaGF0L0NoYXRzVGhyZWFkTGlzdGluZy9DaGF0c1RocmVhZExpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcclxuICAgIGFsaWduLWl0ZW1zOiB1bnNldDtcclxuICAgIGdyaWQtZ2FwOiAwcHg7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbnAuY2hhdC1uYW1lIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW46IGF1dG8gMjBweDtcclxufVxyXG5cclxucC5sYXN0LWNoYXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLm1haW4tY29udGVudC1jaGF0IHtcclxuXHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaGF0LWl0ZW1zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwZW07XHJcbn1cclxuXHJcbi50aW1lLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtY2hhdCB7XHJcbiAgICBtaW4td2lkdGg6IDY1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmltYWdlIHtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH0iLCIuY2hhdC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcbiAgYWxpZ24taXRlbXM6IHVuc2V0O1xuICBncmlkLWdhcDogMHB4O1xuICBtYXJnaW46IDFlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG5wLmNoYXQtbmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW46IGF1dG8gMjBweDtcbn1cblxucC5sYXN0LWNoYXQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYWluLWNvbnRlbnQtY2hhdCB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5iYWNrZ3JvdW5kLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uY2hhdC1pdGVtcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwZW07XG59XG5cbi50aW1lLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbWFnZS1jaGF0IHtcbiAgbWluLXdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */");

/***/ }),

/***/ "./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.ts ***!
  \********************************************************************/
/*! exports provided: ChatsThreadListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsThreadListingPage", function() { return ChatsThreadListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ChatsThreadListingPage = class ChatsThreadListingPage {
    constructor(http) {
        this.http = http;
        this.url = "https://gowebtutorial.com/api/json/system/connect";
        this.formattedMessages = [];
        this.isLoading = true;
        this.counterpartParticipants = [];
    }
    ngOnInit() {
        this.itr = JSON.parse(localStorage.getItem("currentUser"));
        this.userlogged = JSON.parse(localStorage.getItem("Signinuser"));
        if (this.itr != null) {
            console.log(this.itr.token);
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set("X-CSRF-Token", this.itr.token)
                .set("Content-Type", "application/json")
                .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);
            const requestOptions = {
                headers: headers,
                withCredentials: true,
            };
            return this.http
                .get("https://gowebtutorial.com/api/json/privatemsg/", requestOptions)
                .subscribe((getMessages) => {
                this.messages = getMessages;
                for (var i = 0; i < this.messages.length; i++) {
                    for (this.participants in this.messages[i].participants) {
                        // Get counterparty
                        if (this.messages[i].participants[this.participants].uid != "203820") {
                            // Add subject and time in participant object
                            this.messages[i].participants[this.participants].subject = this.messages[i].subject;
                            this.messages[i].participants[this.participants].last_updated = this.convertTimestamp(this.messages[i].last_updated);
                            this.messages[i].participants[this.participants].thread_id = this.messages[i].thread_id;
                            // populate rest of fields
                            this.counterpartParticipants.push(this.messages[i].participants[this.participants]);
                        }
                    }
                }
                this.isLoading = false;
            });
        }
    }
    click() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set("X-CSRF-Token", this.itr.token)
            .set("Content-Type", "application/json")
            .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);
        const requestOptions = {
            headers: headers,
            withCredentials: true,
        };
        return this.http
            .get("https://gowebtutorial.com/api/json/privatemsg/", requestOptions)
            .subscribe((getMessages) => { });
    }
    convertTimestamp(timestamp) {
        let unix_timestamp = timestamp;
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();
        // Will display time in 10:30:23 format
        var formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
        return formattedTime;
    }
};
ChatsThreadListingPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ChatsThreadListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-ChatsThreadListing",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ChatsThreadListing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ChatsThreadListing.page.scss */ "./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ChatsThreadListingPage);



/***/ })

}]);
//# sourceMappingURL=default~ChatsThreadListing-ChatsThreadListing-module~chat-ChatsThreadListing-ChatsThreadListing-module-es2015.js.map