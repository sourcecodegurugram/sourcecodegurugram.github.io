(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Navigation-MyProfile-MyProfile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/MyProfile/MyProfile.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/MyProfile/MyProfile.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-background\">\r\n\r\n  <div class=\"second-background\">\r\n    <div class=\"third-desktop\">\r\n      <div class=\"modal-grid\">\r\n\r\n        <div class=\"profile-picture-modal\">\r\n          <img src=\"{{picture}}\" class=\"image-profile\">\r\n\r\n        </div>\r\n\r\n        <div class=\"profile-name-modal\">\r\n          <span class=\"name\">{{name}}</span>\r\n\r\n        </div>\r\n        <img src=\"../../assets/Images/cross.png\" class=\"cross-image\" (click)=\"backClicked()\">\r\n      </div>\r\n\r\n      <div class=\"sidebar-content\">\r\n        <p class=\"detail-data\">FullName:<br><span class=\"output-text\">{{fname}} {{lname}}</span></p>\r\n        <!-- <p class=\"detail-data-activity\"><br><span class=\"output-text\"\r\n        *ngFor=\"let actvities of activity\"></span></p> -->\r\n        <p class=\"detail-data\">Email:<br><span class=\"output-text\">{{Email}}</span></p>\r\n        <!-- <p class=\"detail-data\">Date of Birth:<br><span class=\"output-text\">{{DOB}}</span></p> -->\r\n        <p class=\"detail-data\">Languages:<br><span class=\"output-text\">Hindi,English</span></p>\r\n        <div class=\"activity\">\r\n          <div class=\"activity-heading\">\r\n            Activities:\r\n\r\n          </div>\r\n          <div class=\"activity-content\">\r\n\r\n            <div *ngFor=\"let actvities of activity\">{{actvities.value}}...</div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"continue-button\">\r\n        Add More Info\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/Navigation/MyProfile/MyProfile-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/Navigation/MyProfile/MyProfile-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: MyProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageRoutingModule", function() { return MyProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _MyProfile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyProfile.page */ "./src/app/Navigation/MyProfile/MyProfile.page.ts");




const routes = [
    {
        path: '',
        component: _MyProfile_page__WEBPACK_IMPORTED_MODULE_3__["MyProfilePage"]
    }
];
let MyProfilePageRoutingModule = class MyProfilePageRoutingModule {
};
MyProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/Navigation/MyProfile/MyProfile.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/Navigation/MyProfile/MyProfile.module.ts ***!
  \**********************************************************/
/*! exports provided: MyProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _MyProfile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyProfile-routing.module */ "./src/app/Navigation/MyProfile/MyProfile-routing.module.ts");
/* harmony import */ var _MyProfile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyProfile.page */ "./src/app/Navigation/MyProfile/MyProfile.page.ts");







let MyProfilePageModule = class MyProfilePageModule {
};
MyProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _MyProfile_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyProfilePageRoutingModule"]
        ],
        declarations: [_MyProfile_page__WEBPACK_IMPORTED_MODULE_6__["MyProfilePage"]]
    })
], MyProfilePageModule);



/***/ }),

/***/ "./src/app/Navigation/MyProfile/MyProfile.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/Navigation/MyProfile/MyProfile.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  font-size: 18px;\n}\n\n.modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 3fr 1fr;\n  grid-gap: 11px;\n}\n\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.sidebar-content {\n  margin-top: 1em;\n}\n\n.main-background {\n  background-color: #00000085;\n  height: 100vh;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.second-background {\n  background-color: white;\n  margin: 1em;\n}\n\nimg.cross-image {\n  width: 60%;\n}\n\n.detail-data-activity {\n  /* font-family: 'Open Sans', sans-serif; */\n  /* font-style: normal; */\n  /* display: block; */\n  display: -webkit-box;\n  /* max-width: 100%; */\n  /* height: 43px; */\n  /* margin: 0 auto; */\n  font-size: 14px;\n  /* line-height: 1; */\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.third-desktop {\n  margin: 2em;\n}\n\n.activity {\n  /* display: flex; */\n  /* flex-direction: column; */\n  /* display: flex; */\n  /* font-family: 'Open Sans', sans-serif; */\n  /* font-style: normal; */\n  display: block;\n  display: -webkit-box;\n  max-width: 100%;\n  height: 43px;\n  /* margin: 0 auto; */\n  font-size: 14px;\n  /* line-height: 1; */\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvTmF2aWdhdGlvbi9NeVByb2ZpbGUvTXlQcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvTmF2aWdhdGlvbi9NeVByb2ZpbGUvTXlQcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFFQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9OYXZpZ2F0aW9uL015UHJvZmlsZS9NeVByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRpbnVlLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnIgMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDExcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLW5hbWUtbW9kYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnNpZGViYXItY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi5tYWluLWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg1O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWNvbmQtYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcblxyXG5pbWcuY3Jvc3MtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLmRldGFpbC1kYXRhLWFjdGl2aXR5IHtcclxuICAgIC8qIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgKi9cclxuICAgIC8qIGZvbnQtc3R5bGU6IG5vcm1hbDsgKi9cclxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAvKiBtYXgtd2lkdGg6IDEwMCU7ICovXHJcbiAgICAvKiBoZWlnaHQ6IDQzcHg7ICovXHJcbiAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC8qIGxpbmUtaGVpZ2h0OiAxOyAqL1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnRoaXJkLWRlc2t0b3Age1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbn1cclxuXHJcbi5hY3Rpdml0eSB7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cclxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcblxyXG4gICAgLyogZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyAqL1xyXG4gICAgLyogZm9udC1zdHlsZTogbm9ybWFsOyAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDNweDtcclxuICAgIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLyogbGluZS1oZWlnaHQ6IDE7ICovXHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxufSIsIi5jb250aW51ZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubW9kYWwtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmciAxZnI7XG4gIGdyaWQtZ2FwOiAxMXB4O1xufVxuXG4ucHJvZmlsZS1uYW1lLW1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNpZGViYXItY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLm1haW4tYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4NTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY29uZC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMWVtO1xufVxuXG5pbWcuY3Jvc3MtaW1hZ2Uge1xuICB3aWR0aDogNjAlO1xufVxuXG4uZGV0YWlsLWRhdGEtYWN0aXZpdHkge1xuICAvKiBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7ICovXG4gIC8qIGZvbnQtc3R5bGU6IG5vcm1hbDsgKi9cbiAgLyogZGlzcGxheTogYmxvY2s7ICovXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAvKiBtYXgtd2lkdGg6IDEwMCU7ICovXG4gIC8qIGhlaWdodDogNDNweDsgKi9cbiAgLyogbWFyZ2luOiAwIGF1dG87ICovXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLyogbGluZS1oZWlnaHQ6IDE7ICovXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50aGlyZC1kZXNrdG9wIHtcbiAgbWFyZ2luOiAyZW07XG59XG5cbi5hY3Rpdml0eSB7XG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gIC8qIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgKi9cbiAgLyogZm9udC1zdHlsZTogbm9ybWFsOyAqL1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0M3B4O1xuICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cbiAgZm9udC1zaXplOiAxNHB4O1xuICAvKiBsaW5lLWhlaWdodDogMTsgKi9cbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Navigation/MyProfile/MyProfile.page.ts":
/*!********************************************************!*\
  !*** ./src/app/Navigation/MyProfile/MyProfile.page.ts ***!
  \********************************************************/
/*! exports provided: MyProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePage", function() { return MyProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let MyProfilePage = class MyProfilePage {
    constructor(_location) {
        this._location = _location;
        this.crossSign = false;
        this.humBurger = true;
        this.mainMenu = false;
        this.mainMenuItem = true;
        this.id = null;
        this.logggenIn = false;
        this.isLoading = false;
        this.logoutUrl = "https://gowebtutorial.com/api/json/user/logout";
        this.url = "https://latdating.dd:8083/api/json/system/connect";
        this.isLoogedIn = false;
        this.token = "https://gowebtutorial.com/api/json/user/token";
    }
    ngOnInit() {
        this.itrs = JSON.parse(localStorage.getItem("currentUser"));
        if (this.itrs == null) {
            this.isLoogedIn = false;
        }
        else if (this.itrs.user != null) {
            this.isLoogedIn = true;
            this.name = this.itrs.user.name;
            this.activity = this.itrs.user.field_activities_interests.und;
            this.Email = this.itrs.user.mail;
            //this.DOB = this.itrs.user.field_birth_date.und[0].value;
            this.fname = this.itrs.user.field_first_name.und[0].value;
            this.lname = this.itrs.user.field_last_name.und[0].value;
            this.picture = this.itrs.user.picture.url;
            this.newPicture = this.itrs.user.field_temp_pic_field;
            this.userlogged = JSON.parse(localStorage.getItem("Signinuser"));
        }
    }
    backClicked() {
        this._location.back();
    }
};
MyProfilePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
MyProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-MyProfile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./MyProfile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/MyProfile/MyProfile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./MyProfile.page.scss */ "./src/app/Navigation/MyProfile/MyProfile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], MyProfilePage);



/***/ })

}]);
//# sourceMappingURL=Navigation-MyProfile-MyProfile-module-es2015.js.map