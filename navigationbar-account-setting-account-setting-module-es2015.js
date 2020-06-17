(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigationbar-account-setting-account-setting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigationbar/account-setting/account-setting.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigationbar/account-setting/account-setting.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-background-black\">\n<div class=\"main-white-background\">\n\n<div class=\"forms-field\">\n <div class=\"exit-button\">\n  <img src=\"../../assets/Images/cross.png\" class=\"cross-image\" (click)=\"backClicked()\">\n </div>\n\n  <div class=\"form-group font\">\n    <label for=\"sel1\">Communication Preferences</label>\n    <input type=\"text\" class=\"form-control\" id=\"usr\">\n  </div>\n  <label for=\"sel1\" class=\"font\">Change App Subscription:</label>\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Switch to Monthly\n    </label>\n  </div>\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Switch to Annual\n    </label>\n  </div>\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Freeze Subscription\n    </label>\n  </div>\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Cancel App Subscription\n    </label>\n  </div>\n  <div class=\"continue-button blue\">\n    Update Billing Info\n  </div>\n\n  <div class=\"form-group font\">\n    <label for=\"sel1\">New Password</label>\n    <input type=\"text\" class=\"form-control\" id=\"usr\">\n  </div>\n  <div class=\"form-group font\">\n\n    <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Type again to confirm\">\n  </div>\n  <div class=\"continue-button\">\n    Save Changes\n  </div>\n  <div class=\"close-account\">\n    Close Account <br>\n    (Delete all My Info)\n  </div>\n</div>\n\n</div>\n</div>");

/***/ }),

/***/ "./src/app/navigationbar/account-setting/account-setting-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/navigationbar/account-setting/account-setting-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AccountSettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingPageRoutingModule", function() { return AccountSettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _account_setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-setting.page */ "./src/app/navigationbar/account-setting/account-setting.page.ts");




const routes = [
    {
        path: '',
        component: _account_setting_page__WEBPACK_IMPORTED_MODULE_3__["AccountSettingPage"]
    }
];
let AccountSettingPageRoutingModule = class AccountSettingPageRoutingModule {
};
AccountSettingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountSettingPageRoutingModule);



/***/ }),

/***/ "./src/app/navigationbar/account-setting/account-setting.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/navigationbar/account-setting/account-setting.module.ts ***!
  \*************************************************************************/
/*! exports provided: AccountSettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingPageModule", function() { return AccountSettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _account_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-setting-routing.module */ "./src/app/navigationbar/account-setting/account-setting-routing.module.ts");
/* harmony import */ var _account_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-setting.page */ "./src/app/navigationbar/account-setting/account-setting.page.ts");







let AccountSettingPageModule = class AccountSettingPageModule {
};
AccountSettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountSettingPageRoutingModule"]
        ],
        declarations: [_account_setting_page__WEBPACK_IMPORTED_MODULE_6__["AccountSettingPage"]]
    })
], AccountSettingPageModule);



/***/ }),

/***/ "./src/app/navigationbar/account-setting/account-setting.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/navigationbar/account-setting/account-setting.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-background-black {\n  background-color: #00000085;\n  height: 100vh;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  overflow: scroll;\n}\n\n.main-white-background {\n  background-color: white;\n  padding: 2em;\n  padding: 1em;\n  width: 88vw;\n  margin-top: 4em;\n}\n\nimg.cross-image {\n  width: 11%;\n}\n\n.exit-button {\n  display: flex;\n  float: right;\n  width: 100%;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.forms-field {\n  margin: 1em 1em;\n}\n\n.form-control {\n  border: 1px solid;\n}\n\n.font {\n  font-size: 20px;\n}\n\n.form-check {\n  font-size: 18px;\n}\n\n.blue {\n  background-color: #4372c4;\n}\n\n.close-account {\n  color: red;\n  margin: 1em;\n  text-align: center;\n}\n\nimg.status-check {\n  width: 80%;\n}\n\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbmJhci9hY2NvdW50LXNldHRpbmcvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxcbmF2aWdhdGlvbmJhclxcYWNjb3VudC1zZXR0aW5nXFxhY2NvdW50LXNldHRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9uYXZpZ2F0aW9uYmFyL2FjY291bnQtc2V0dGluZy9hY2NvdW50LXNldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FER0E7RUFDSSxVQUFBO0FDQUo7O0FERUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxpQkFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBREZBO0VBRUksZUFBQTtBQ0lKOztBREZBO0VBRUEseUJBQUE7QUNJQTs7QURGQTtFQUVJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLFVBQUE7QUNLSjs7QURIQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb25iYXIvYWNjb3VudC1zZXR0aW5nL2FjY291bnQtc2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1iYWNrZ3JvdW5kLWJsYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4NTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuXHJcbn1cclxuLm1haW4td2hpdGUtYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHdpZHRoOiA4OHZ3O1xyXG4gICAgbWFyZ2luLXRvcDogNGVtO1xyXG5cclxuXHJcbn1cclxuaW1nLmNyb3NzLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMSU7XHJcbn1cclxuLmV4aXQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mb3Jtcy1maWVsZHtcclxuICAgIG1hcmdpbjogMWVtIDFlbTtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbi5mb250IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uZm9ybS1jaGVjayB7XHJcblxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5ibHVlXHJcbntcclxuYmFja2dyb3VuZC1jb2xvcjogIzQzNzJjNDtcclxufVxyXG4uY2xvc2UtYWNjb3VudFxyXG57XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pbWcuc3RhdHVzLWNoZWNrIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufSIsIi5tYWluLWJhY2tncm91bmQtYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLm1haW4td2hpdGUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyZW07XG4gIHBhZGRpbmc6IDFlbTtcbiAgd2lkdGg6IDg4dnc7XG4gIG1hcmdpbi10b3A6IDRlbTtcbn1cblxuaW1nLmNyb3NzLWltYWdlIHtcbiAgd2lkdGg6IDExJTtcbn1cblxuLmV4aXQtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm1zLWZpZWxkIHtcbiAgbWFyZ2luOiAxZW0gMWVtO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbi5mb250IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZm9ybS1jaGVjayB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3MmM0O1xufVxuXG4uY2xvc2UtYWNjb3VudCB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbjogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZy5zdGF0dXMtY2hlY2sge1xuICB3aWR0aDogODAlO1xufVxuXG4uY29udGludWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcbiAgaGVpZ2h0OiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgbWFyZ2luOiAyZW07XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/navigationbar/account-setting/account-setting.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/navigationbar/account-setting/account-setting.page.ts ***!
  \***********************************************************************/
/*! exports provided: AccountSettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingPage", function() { return AccountSettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let AccountSettingPage = class AccountSettingPage {
    constructor(_location) {
        this._location = _location;
    }
    ngOnInit() {
    }
    backClicked() {
        this._location.back();
    }
};
AccountSettingPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
AccountSettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account-setting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account-setting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigationbar/account-setting/account-setting.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account-setting.page.scss */ "./src/app/navigationbar/account-setting/account-setting.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], AccountSettingPage);



/***/ })

}]);
//# sourceMappingURL=navigationbar-account-setting-account-setting-module-es2015.js.map