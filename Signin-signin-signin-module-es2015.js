(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Signin-signin-signin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/signin/signin.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/signin/signin.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <app-navigationbar> </app-navigationbar>\r\n\r\n\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n<ion-content>\r\n\r\n<div class=\"main-singin\">\r\n  <!-- <div class=\"login-buton\">\r\n\r\n<div class=\"facebook-Login-buttom Login-page-button\">\r\n  Login with Facebook\r\n</div>\r\n\r\n<div class=\"google-Login-buttom Login-page-button\">\r\n  Login with Google\r\n</div>\r\n\r\n  </div> -->\r\n  <!-- <div class=\"or\">OR</div> -->\r\n  <div class=\"login-username\">Login with Email or Username</div>\r\n  <div class=\"forms-field\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"User Name\" name=\"user\" [(ngModel)]=\"user\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n\r\n      <input type=\"password\" class=\"form-control\" id=\"usr\" placeholder=\"Password\" name=\"password\"\r\n        [(ngModel)]=\"password\">\r\n        <div class=\"forgot-container\" routerLink=\"/forgot\">Forgot Password?</div> \r\n    </div>\r\n   \r\n    <div class=\"continue-button\" (click)=\"nextSteps()\">\r\n      Continue\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/Signin/signin/signin-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/Signin/signin/signin-routing.module.ts ***!
  \********************************************************/
/*! exports provided: SigninPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageRoutingModule", function() { return SigninPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin.page */ "./src/app/Signin/signin/signin.page.ts");




const routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_3__["SigninPage"]
    },
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SigninPageRoutingModule);



/***/ }),

/***/ "./src/app/Signin/signin/signin.module.ts":
/*!************************************************!*\
  !*** ./src/app/Signin/signin/signin.module.ts ***!
  \************************************************/
/*! exports provided: SigninPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin-routing.module */ "./src/app/Signin/signin/signin-routing.module.ts");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin.page */ "./src/app/Signin/signin/signin.page.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Navigation/NavigationBar/navigationbar.module */ "./src/app/Navigation/NavigationBar/navigationbar.module.ts");











let SigninPageModule = class SigninPageModule {
};
SigninPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigninPageRoutingModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
            _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_10__["NavigationbarModule"],
        ],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]],
    })
], SigninPageModule);



/***/ }),

/***/ "./src/app/Signin/signin/signin.page.scss":
/*!************************************************!*\
  !*** ./src/app/Signin/signin/signin.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-singin {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  flex-direction: column;\n}\n\n.continue-button-google {\n  background-color: #F64225;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.continue-button-facebook {\n  background-color: #4472C4;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.or {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 21px;\n  margin: 1em;\n}\n\n.forms-field {\n  margin: 1em 1em;\n}\n\n.form-control {\n  border: 1px solid;\n}\n\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  margin-top: 5em;\n}\n\n.success-market {\n  text-align: center;\n  margin: 2em;\n  font-size: 18px;\n  margin-bottom: 0em;\n}\n\n.under-text-button {\n  color: #ada2a2;\n}\n\n.continue-button-last {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  margin-bottom: 0px;\n}\n\n.button-last {\n  text-align: center;\n  margin: 0em 3em;\n}\n\n.singin-lasts {\n  margin-bottom: 2em !important;\n}\n\n.continue-button-last-blue {\n  background-color: #4372C4;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.login-buton {\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\np.heading-login {\n  text-align: center;\n  font-size: 20px;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\n.forgot-container {\n  float: right;\n  padding-top: 5px;\n}\n\n.Login-page-button {\n  padding: 1em 5em;\n  border-radius: 12px;\n  color: white;\n  font-size: 1.1em;\n  margin: 0.5em 0em;\n}\n\n.google-Login-buttom.Login-page-button {\n  background-color: #FF0000;\n  padding: 1em 5.5em;\n  border-radius: 12px;\n  color: white;\n  font-size: 1.1em;\n}\n\n.facebook-Login-buttom {\n  background-color: #4472C4;\n}\n\n.login-username {\n  text-align: center;\n  font-size: 18px;\n  font-family: \"Open Sans\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvU2lnbmluL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIiwic3JjL2FwcC9TaWduaW4vc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURLQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSEo7O0FES0E7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0hKOztBREtBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRko7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FER0E7RUFDSSxpQkFBQTtBQ0FKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFFSSxjQUFBO0FDRUo7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FEREE7RUFFSSw2QkFBQTtBQ0dKOztBRERBO0VBRUkseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDR0o7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0tKOztBREhFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDTUo7O0FERkE7RUFFSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QURGQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0kseUJBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9TaWduaW4vc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1zaW5naW4ge1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuXHJcblxyXG59XHJcbi5jb250aW51ZS1idXR0b24tZ29vZ2xlXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNjQyMjU7XHJcbiAgICBwYWRkaW5nOiAwLjZlbSAyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDJlbSAxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbi1mYWNlYm9va1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xyXG4gICAgcGFkZGluZzogMC42ZW0gMmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAyZW0gMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbi5vciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcbi5mb3Jtcy1maWVsZHtcclxuICAgIG1hcmdpbjogMWVtIDFlbTtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbi5jb250aW51ZS1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbn1cclxuLnN1Y2Nlc3MtbWFya2V0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMGVtO1xyXG59XHJcbi51bmRlci10ZXh0LWJ1dHRvblxyXG57XHJcbiAgICBjb2xvcjogI2FkYTJhMjtcclxufVxyXG4uY29udGludWUtYnV0dG9uLWxhc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmJ1dHRvbi1sYXN0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMGVtIDNlbTtcclxuXHJcbn1cclxuLnNpbmdpbi1sYXN0c1xyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW0gIWltcG9ydGFudDtcclxufVxyXG4uY29udGludWUtYnV0dG9uLWxhc3QtYmx1ZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3MkM0O1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgXHJcbn1cclxuLmxvZ2luLWJ1dG9uIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbnAuaGVhZGluZy1sb2dpbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmxvYWRpbmctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIC5mb3Jnb3QtY29udGFpbmVyIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcblxyXG4uTG9naW4tcGFnZS1idXR0b24ge1xyXG5cclxuICAgIHBhZGRpbmc6IDFlbSA1ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIG1hcmdpbjogMC41ZW0gMGVtO1xyXG59XHJcbi5nb29nbGUtTG9naW4tYnV0dG9tLkxvZ2luLXBhZ2UtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XHJcbiAgICBwYWRkaW5nOiAxZW0gNS41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxufVxyXG4uZmFjZWJvb2stTG9naW4tYnV0dG9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XHJcbn1cclxuLmxvZ2luLXVzZXJuYW1lIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4iLCIubWFpbi1zaW5naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGludWUtYnV0dG9uLWdvb2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNjQyMjU7XG4gIHBhZGRpbmc6IDAuNmVtIDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAyZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5jb250aW51ZS1idXR0b24tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICBwYWRkaW5nOiAwLjZlbSAyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMmVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ub3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW46IDFlbTtcbn1cblxuLmZvcm1zLWZpZWxkIHtcbiAgbWFyZ2luOiAxZW0gMWVtO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbi5jb250aW51ZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbiAgbWFyZ2luLXRvcDogNWVtO1xufVxuXG4uc3VjY2Vzcy1tYXJrZXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMmVtO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDBlbTtcbn1cblxuLnVuZGVyLXRleHQtYnV0dG9uIHtcbiAgY29sb3I6ICNhZGEyYTI7XG59XG5cbi5jb250aW51ZS1idXR0b24tbGFzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5idXR0b24tbGFzdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwZW0gM2VtO1xufVxuXG4uc2luZ2luLWxhc3RzIHtcbiAgbWFyZ2luLWJvdHRvbTogMmVtICFpbXBvcnRhbnQ7XG59XG5cbi5jb250aW51ZS1idXR0b24tbGFzdC1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNzJDNDtcbiAgaGVpZ2h0OiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgbWFyZ2luOiAyZW07XG59XG5cbi5sb2dpbi1idXRvbiB7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnAuaGVhZGluZy1sb2dpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5mb3Jnb3QtY29udGFpbmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uTG9naW4tcGFnZS1idXR0b24ge1xuICBwYWRkaW5nOiAxZW0gNWVtO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIG1hcmdpbjogMC41ZW0gMGVtO1xufVxuXG4uZ29vZ2xlLUxvZ2luLWJ1dHRvbS5Mb2dpbi1wYWdlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XG4gIHBhZGRpbmc6IDFlbSA1LjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuXG4uZmFjZWJvb2stTG9naW4tYnV0dG9tIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbn1cblxuLmxvZ2luLXVzZXJuYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Signin/signin/signin.page.ts":
/*!**********************************************!*\
  !*** ./src/app/Signin/signin/signin.page.ts ***!
  \**********************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








let SigninPage = class SigninPage {
    constructor(router, http, alertController, AuthService) {
        this.router = router;
        this.http = http;
        this.alertController = alertController;
        this.AuthService = AuthService;
        this.maxNumberOfTabs = 5;
        this.selectedIndex = 0;
        this.url = "http://gowebtutorial.com/api/json/system/connect";
        this.LoggedIn = true;
        this.isLoading = false;
    }
    ngOnInit() {
        this.siginUser = JSON.parse(localStorage.getItem("currentUser"));
        if (this.siginUser == null) {
            this.isLoading = false;
        }
        else if (this.siginUser != null) {
            this.isLoading = true;
            this.AuthService.systemConnect().subscribe((UserLoggedIn) => {
                localStorage.setItem("Signinuser", JSON.stringify(UserLoggedIn));
                this.UserDetails = UserLoggedIn;
                if (this.UserDetails != null) {
                    this.isLoading = false;
                    this.router.navigate(["/find-friends"]);
                }
            });
        }
    }
    tabChanged(tabChangeEvent) {
        this.selectedIndex = tabChangeEvent.index;
    }
    nextStep() {
        this.selectedIndex += 1;
    }
    previousStep() {
        this.selectedIndex -= 1;
    }
    nextSteps() {
        this.LoginForm(this.user, this.password);
    }
    LoginForm(user, pass) {
        this.isLoading = true;
        this.AuthService.loginUser(user, pass)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            if (error.status == 401) {
                this.username();
            }
            else if (error.status == 403) {
                this.notActivated();
            }
            this.isLoading = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(this.something());
        }))
            .subscribe((userDetail) => {
            localStorage.setItem("currentUser", JSON.stringify(userDetail));
            this.AuthService.systemConnect().subscribe((UserLoggedIn) => {
                localStorage.setItem("Signinuser", JSON.stringify(UserLoggedIn));
                this.UserDetails = UserLoggedIn;
                if (this.UserDetails != null) {
                    this.router.navigate(["/becomevrified"]);
                }
                console.log(UserLoggedIn);
            });
        });
    }
    correctAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const correct = yield this.alertController.create({
                message: "Please Provide Valid Details",
                buttons: ["OK"],
            });
            yield correct.present();
        });
    }
    username() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const correct = yield this.alertController.create({
                message: "Your username or password is incorrect",
                buttons: ["OK"],
            });
            yield correct.present();
        });
    }
    notActivated() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const correct = yield this.alertController.create({
                message: "The username  has not been activated or is blocked",
                buttons: ["OK"],
            });
            yield correct.present();
        });
    }
    something() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // const correct = await this.alertController.create({
            //   message: "Something bad happened; please try again later.",
            //   buttons: ["OK"],
            // });
            // await correct.present();
        });
    }
};
SigninPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
SigninPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-signin",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/signin/signin.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.page.scss */ "./src/app/Signin/signin/signin.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], SigninPage);



/***/ })

}]);
//# sourceMappingURL=Signin-signin-signin-module-es2015.js.map