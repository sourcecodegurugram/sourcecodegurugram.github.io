(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Navigation-AccountSettings-account-setting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/AccountSettings/account-setting.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/AccountSettings/account-setting.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-background-black\">\n<div class=\"main-white-background\">\n\n<div class=\"forms-field\">\n <div class=\"exit-button\">\n  <img src=\"../../assets/Images/cross.png\" class=\"cross-image\" (click)=\"backClicked()\">\n </div>\n\n  <div class=\"form-group font\">\n    <label for=\"sel1\">Communication Preferences</label>\n    <input type=\"text\" class=\"form-control\" id=\"usr\">\n  </div>\n  <label for=\"sel1\" class=\"font\">Change App Subscription:</label>\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Switch to Monthly\n    </label>\n  </div>\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Switch to Annual\n    </label>\n  </div>\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Freeze Subscription\n    </label>\n  </div>\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Cancel App Subscription\n    </label>\n  </div>\n  <div class=\"continue-button blue\">\n    Update Billing Info\n  </div>\n\n  <div class=\"form-group font\">\n    <label for=\"sel1\">New Password</label>\n    <input type=\"text\" class=\"form-control\" id=\"usr\">\n  </div>\n  <div class=\"form-group font\">\n\n    <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Type again to confirm\">\n  </div>\n  <div class=\"continue-button\">\n    Save Changes\n  </div>\n  <div class=\"close-account\">\n    Close Account <br>\n    (Delete all My Info)\n  </div>\n</div>\n\n</div>\n</div>");

/***/ }),

/***/ "./src/app/Navigation/AccountSettings/account-setting-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Navigation/AccountSettings/account-setting-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AccountSettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingPageRoutingModule", function() { return AccountSettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _account_setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-setting.page */ "./src/app/Navigation/AccountSettings/account-setting.page.ts");




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

/***/ "./src/app/Navigation/AccountSettings/account-setting.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Navigation/AccountSettings/account-setting.module.ts ***!
  \**********************************************************************/
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
/* harmony import */ var _account_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-setting-routing.module */ "./src/app/Navigation/AccountSettings/account-setting-routing.module.ts");
/* harmony import */ var _account_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-setting.page */ "./src/app/Navigation/AccountSettings/account-setting.page.ts");







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

/***/ "./src/app/Navigation/AccountSettings/account-setting.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/Navigation/AccountSettings/account-setting.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-background-black {\n  background-color: #00000085;\n  height: 100vh;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  overflow: scroll;\n}\n\n.main-white-background {\n  background-color: white;\n  padding: 2em;\n  padding: 1em;\n  width: 88vw;\n  margin-top: 4em;\n}\n\nimg.cross-image {\n  width: 11%;\n}\n\n.exit-button {\n  display: flex;\n  float: right;\n  width: 100%;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.forms-field {\n  margin: 1em 1em;\n}\n\n.form-control {\n  border: 1px solid;\n}\n\n.font {\n  font-size: 20px;\n}\n\n.form-check {\n  font-size: 18px;\n}\n\n.blue {\n  background-color: #4372c4;\n}\n\n.close-account {\n  color: red;\n  margin: 1em;\n  text-align: center;\n}\n\nimg.status-check {\n  width: 80%;\n}\n\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvTmF2aWdhdGlvbi9BY2NvdW50U2V0dGluZ3MvYWNjb3VudC1zZXR0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvTmF2aWdhdGlvbi9BY2NvdW50U2V0dGluZ3MvYWNjb3VudC1zZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREdBO0VBQ0ksVUFBQTtBQ0FKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUVJLGVBQUE7QUNJSjs7QURGQTtFQUVBLHlCQUFBO0FDSUE7O0FERkE7RUFFSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxVQUFBO0FDS0o7O0FESEE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9OYXZpZ2F0aW9uL0FjY291bnRTZXR0aW5ncy9hY2NvdW50LXNldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYmFja2dyb3VuZC1ibGFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcblxyXG59XHJcbi5tYWluLXdoaXRlLWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICB3aWR0aDogODh2dztcclxuICAgIG1hcmdpbi10b3A6IDRlbTtcclxuXHJcblxyXG59XHJcbmltZy5jcm9zcy1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTElO1xyXG59XHJcbi5leGl0LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZm9ybXMtZmllbGR7XHJcbiAgICBtYXJnaW46IDFlbSAxZW07XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG4uZm9udCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmZvcm0tY2hlY2sge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uYmx1ZVxyXG57XHJcbmJhY2tncm91bmQtY29sb3I6ICM0MzcyYzQ7XHJcbn1cclxuLmNsb3NlLWFjY291bnRcclxue1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW1nLnN0YXR1cy1jaGVjayB7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbi5jb250aW51ZS1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn0iLCIubWFpbi1iYWNrZ3JvdW5kLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg1O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5tYWluLXdoaXRlLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMmVtO1xuICBwYWRkaW5nOiAxZW07XG4gIHdpZHRoOiA4OHZ3O1xuICBtYXJnaW4tdG9wOiA0ZW07XG59XG5cbmltZy5jcm9zcy1pbWFnZSB7XG4gIHdpZHRoOiAxMSU7XG59XG5cbi5leGl0LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3Jtcy1maWVsZCB7XG4gIG1hcmdpbjogMWVtIDFlbTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uZm9udCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZvcm0tY2hlY2sge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNzJjNDtcbn1cblxuLmNsb3NlLWFjY291bnQge1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW46IDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbWcuc3RhdHVzLWNoZWNrIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/Navigation/AccountSettings/account-setting.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/Navigation/AccountSettings/account-setting.page.ts ***!
  \********************************************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account-setting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/AccountSettings/account-setting.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account-setting.page.scss */ "./src/app/Navigation/AccountSettings/account-setting.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], AccountSettingPage);



/***/ })

}]);
//# sourceMappingURL=Navigation-AccountSettings-account-setting-module-es2015.js.map