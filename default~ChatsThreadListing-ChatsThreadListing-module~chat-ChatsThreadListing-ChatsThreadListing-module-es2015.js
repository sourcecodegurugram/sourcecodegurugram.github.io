(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ChatsThreadListing-ChatsThreadListing-module~chat-ChatsThreadListing-ChatsThreadListing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n<div  *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n\r\n<ion-content>\r\n<div class=\"background-card\">\r\n  <div class=\"main-content-chat\">\r\n    <div class=\"chat-items\">\r\n      <div routerLink=\"/notificationchat/{{message.thread_id}}/{{message.picture.filename}}/{{message.name}}\"\r\n        class=\"chat-grid\" *ngFor=\"let message of counterpartParticipants\">\r\n        <div class=\"image\">\r\n          <img src=\"https://gowebtutorial.com/sites/default/files/{{message.picture.filename}}\" class=\" image-chat\">\r\n        </div>\r\n\r\n        <div class=\"name\">\r\n          <p class=\"chat-name\">{{message.name}}</p>\r\n          <p class=\"last-chat\">Subject:&nbsp;{{message.subject}}</p>\r\n        </div>\r\n        <div class=\"time\" *ngIf=\"(now | date:'yyyy')==(message.time  * 1000 | date:'yyyy')\">\r\n          <div class=\"time-text\">{{message.time  * 1000 | customDate}}</div>\r\n        </div>\r\n        <div class=\"time\" *ngIf=\"(now | date:'yyyy')!=(message.time  * 1000 |date:'yyyy')\">\r\n          <div class=\"time-text\">{{message.time  * 1000 | year}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</ion-content>");

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
/* harmony import */ var _custom_datepipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../custom.datepipe */ "./src/app/custom.datepipe.ts");
/* harmony import */ var _year_datepipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../year.datepipe */ "./src/app/year.datepipe.ts");











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
        declarations: [_ChatsThreadListing_page__WEBPACK_IMPORTED_MODULE_8__["ChatsThreadListingPage"], _custom_datepipe__WEBPACK_IMPORTED_MODULE_9__["CustomDatePipe"], _year_datepipe__WEBPACK_IMPORTED_MODULE_10__["YearDatePipe"]]
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
/* harmony default export */ __webpack_exports__["default"] = (".chat-grid {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  align-items: unset;\n  grid-gap: 0px;\n  margin: 1em;\n  align-items: center;\n  align-content: center;\n}\n\np.chat-name {\n  margin-bottom: 0px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 2%;\n  margin: auto 20px;\n}\n\np.last-chat {\n  margin-bottom: 0px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.main-content-chat {\n  overflow: scroll;\n}\n\n.background-card {\n  background-color: white !important;\n}\n\n.chat-items {\n  margin-bottom: 10em;\n}\n\n.time-text {\n  font-size: 14px;\n}\n\n.image-chat {\n  min-width: 65px !important;\n  height: 65px !important;\n  margin: auto !important;\n  display: block;\n}\n\n.image {\n  width: 65px;\n  height: 65px;\n  overflow: hidden !important;\n  border-radius: 50%;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\np.last-chat {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9DaGF0c1RocmVhZExpc3RpbmcvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxcY2hhdFxcQ2hhdHNUaHJlYWRMaXN0aW5nXFxDaGF0c1RocmVhZExpc3RpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9jaGF0L0NoYXRzVGhyZWFkTGlzdGluZy9DaGF0c1RocmVhZExpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFFSSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0NBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsYUFBQTtFQUVBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9DaGF0c1RocmVhZExpc3RpbmcvQ2hhdHNUaHJlYWRMaXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XHJcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7XHJcbiAgICBncmlkLWdhcDogMHB4O1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5wLmNoYXQtbmFtZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgbWFyZ2luOiBhdXRvIDIwcHg7XHJcbn1cclxuXHJcbnAubGFzdC1jaGF0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQtY2hhdCB7XHJcblxyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLmJhY2tncm91bmQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2hhdC1pdGVtcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMGVtO1xyXG59XHJcblxyXG4udGltZS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmltYWdlLWNoYXQge1xyXG4gICAgbWluLXdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgcC5sYXN0LWNoYXQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxufSIsIi5jaGF0LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xuICBhbGlnbi1pdGVtczogdW5zZXQ7XG4gIGdyaWQtZ2FwOiAwcHg7XG4gIG1hcmdpbjogMWVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbnAuY2hhdC1uYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbjogYXV0byAyMHB4O1xufVxuXG5wLmxhc3QtY2hhdCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1haW4tY29udGVudC1jaGF0IHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmJhY2tncm91bmQtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5jaGF0LWl0ZW1zIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBlbTtcbn1cblxuLnRpbWUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmltYWdlLWNoYXQge1xuICBtaW4td2lkdGg6IDY1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmltYWdlIHtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNjVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxucC5sYXN0LWNoYXQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufSJdfQ== */");

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
        this.now = new Date();
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
                            this.messages[i].participants[this.participants].
                                time = this.messages[i].last_updated;
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
    function(scope) {
        scope.date = new Date();
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



/***/ }),

/***/ "./src/app/custom.datepipe.ts":
/*!************************************!*\
  !*** ./src/app/custom.datepipe.ts ***!
  \************************************/
/*! exports provided: CustomDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDatePipe", function() { return CustomDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let CustomDatePipe = class CustomDatePipe extends _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] {
    transform(value, args) {
        return super.transform(value, " dd MMMM ");
    }
};
CustomDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'customDate'
    })
], CustomDatePipe);



/***/ }),

/***/ "./src/app/year.datepipe.ts":
/*!**********************************!*\
  !*** ./src/app/year.datepipe.ts ***!
  \**********************************/
/*! exports provided: YearDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearDatePipe", function() { return YearDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let YearDatePipe = class YearDatePipe extends _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] {
    transform(value, args) {
        return super.transform(value, " dd MMMM yyyy ");
    }
};
YearDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'year'
    })
], YearDatePipe);



/***/ })

}]);
//# sourceMappingURL=default~ChatsThreadListing-ChatsThreadListing-module~chat-ChatsThreadListing-ChatsThreadListing-module-es2015.js.map