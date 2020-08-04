(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Signin-forgotpassword-forgotpassword-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/forgotpassword/forgotpassword.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/forgotpassword/forgotpassword.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <app-navigationbar></app-navigationbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"isLoading\" class=\"loading-container\">\n    <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n  </div>\n  <div class=\"main-singin\">\n    <!-- <div class=\"login-buton\">\n  \n  <div class=\"facebook-Login-buttom Login-page-button\">\n    Login with Facebook\n  </div>\n  \n  <div class=\"google-Login-buttom Login-page-button\">\n    Login with Google\n  </div>\n  \n    </div> -->\n    <!-- <div class=\"or\">OR</div> -->\n    <div class=\"login-username\">Reset with Email or Username</div>\n    <div class=\"forms-field\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"User Name/Email\" name=\"user\" [(ngModel)]=\"user\">\n      </div>\n  \n    \n     \n      <div class=\"continue-button\" (click)=\"resetPassword(user)\">\n        Continue\n      </div>\n    \n      <div class=\"previous-button\" (click)=\"locationBack()\">\n        Back\n      </div>\n    </div>\n  \n  \n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Signin/forgotpassword/forgotpassword-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/Signin/forgotpassword/forgotpassword-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ForgotpasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageRoutingModule", function() { return ForgotpasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/Signin/forgotpassword/forgotpassword.page.ts");




const routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpasswordPage"]
    }
];
let ForgotpasswordPageRoutingModule = class ForgotpasswordPageRoutingModule {
};
ForgotpasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotpasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/Signin/forgotpassword/forgotpassword.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/Signin/forgotpassword/forgotpassword.module.ts ***!
  \****************************************************************/
/*! exports provided: ForgotpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpassword-routing.module */ "./src/app/Signin/forgotpassword/forgotpassword-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/Signin/forgotpassword/forgotpassword.page.ts");
/* harmony import */ var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Navigation/NavigationBar/navigationbar.module */ "./src/app/Navigation/NavigationBar/navigationbar.module.ts");









let ForgotpasswordPageModule = class ForgotpasswordPageModule {
};
ForgotpasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_8__["NavigationbarModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPageRoutingModule"]
        ],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_7__["ForgotpasswordPage"]]
    })
], ForgotpasswordPageModule);



/***/ }),

/***/ "./src/app/Signin/forgotpassword/forgotpassword.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/Signin/forgotpassword/forgotpassword.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-singin {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  flex-direction: column;\n}\n\n.continue-button-google {\n  background-color: #F64225;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.continue-button-facebook {\n  background-color: #4472C4;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.or {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 21px;\n  margin: 1em;\n}\n\n.forms-field {\n  margin: 1em 1em;\n}\n\n.form-control {\n  border: 1px solid;\n}\n\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  margin-top: 5em;\n}\n\n.success-market {\n  text-align: center;\n  margin: 2em;\n  font-size: 18px;\n  margin-bottom: 0em;\n}\n\n.under-text-button {\n  color: #ada2a2;\n}\n\n.continue-button-last {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  margin-bottom: 0px;\n}\n\n.button-last {\n  text-align: center;\n  margin: 0em 3em;\n}\n\n.singin-lasts {\n  margin-bottom: 2em !important;\n}\n\n.continue-button-last-blue {\n  background-color: #4372C4;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.login-buton {\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\np.heading-login {\n  text-align: center;\n  font-size: 20px;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\n.forgot-container {\n  float: right;\n  padding-top: 5px;\n}\n\n.Login-page-button {\n  padding: 1em 5em;\n  border-radius: 12px;\n  color: white;\n  font-size: 1.1em;\n  margin: 0.5em 0em;\n}\n\n.google-Login-buttom.Login-page-button {\n  background-color: #FF0000;\n  padding: 1em 5.5em;\n  border-radius: 12px;\n  color: white;\n  font-size: 1.1em;\n}\n\n.facebook-Login-buttom {\n  background-color: #4472C4;\n}\n\n.login-username {\n  text-align: center;\n  font-size: 18px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.previous-button {\n  background-color: #4472C4;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvU2lnbmluL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvU2lnbmluL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0FKOztBREtBO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURLQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSEo7O0FES0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNGSjs7QURJQTtFQUNJLGVBQUE7QUNESjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUVJLGNBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNJSjs7QUREQTtFQUVJLDZCQUFBO0FDR0o7O0FEREE7RUFFSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNHSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsYUFBQTtFQUVBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDS0o7O0FESEU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURGQTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFDSSx5QkFBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNPSjs7QURKQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ09KOztBRExBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL1NpZ25pbi9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1zaW5naW4ge1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblxuXG59XG4uY29udGludWUtYnV0dG9uLWdvb2dsZVxue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNjQyMjU7XG4gICAgcGFkZGluZzogMC42ZW0gMmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMmVtIDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uY29udGludWUtYnV0dG9uLWZhY2Vib29rXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbiAgICBwYWRkaW5nOiAwLjZlbSAyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiAyZW0gMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5vciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIG1hcmdpbjogMWVtO1xufVxuLmZvcm1zLWZpZWxke1xuICAgIG1hcmdpbjogMWVtIDFlbTtcbn1cbi5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLmNvbnRpbnVlLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xuICAgIGhlaWdodDogM2VtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIG1hcmdpbjogMmVtO1xuICAgIG1hcmdpbi10b3A6IDVlbTtcbn1cbi5zdWNjZXNzLW1hcmtldCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMmVtO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwZW07XG59XG4udW5kZXItdGV4dC1idXR0b25cbntcbiAgICBjb2xvcjogI2FkYTJhMjtcbn1cbi5jb250aW51ZS1idXR0b24tbGFzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xuICAgIGhlaWdodDogM2VtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIG1hcmdpbjogMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5idXR0b24tbGFzdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMGVtIDNlbTtcblxufVxuLnNpbmdpbi1sYXN0c1xue1xuICAgIG1hcmdpbi1ib3R0b206IDJlbSAhaW1wb3J0YW50O1xufVxuLmNvbnRpbnVlLWJ1dHRvbi1sYXN0LWJsdWVcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3MkM0O1xuICAgIGhlaWdodDogM2VtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIG1hcmdpbjogMmVtO1xuICBcbn1cbi5sb2dpbi1idXRvbiB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxucC5oZWFkaW5nLWxvZ2luIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA5O1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAuZm9yZ290LWNvbnRhaW5lciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cblxuLkxvZ2luLXBhZ2UtYnV0dG9uIHtcblxuICAgIHBhZGRpbmc6IDFlbSA1ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBtYXJnaW46IDAuNWVtIDBlbTtcbn1cbi5nb29nbGUtTG9naW4tYnV0dG9tLkxvZ2luLXBhZ2UtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xuICAgIHBhZGRpbmc6IDFlbSA1LjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuMWVtO1xufVxuLmZhY2Vib29rLUxvZ2luLWJ1dHRvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbn1cbi5sb2dpbi11c2VybmFtZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbi5wcmV2aW91cy1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgbWFyZ2luOiAyZW07XG59XG4ubG9hZGluZy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDk7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgb3BhY2l0eTogMC41O1xufSIsIi5tYWluLXNpbmdpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb250aW51ZS1idXR0b24tZ29vZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2NDIyNTtcbiAgcGFkZGluZzogMC42ZW0gMmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDJlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gIHBhZGRpbmc6IDAuNmVtIDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAyZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5vciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIxcHg7XG4gIG1hcmdpbjogMWVtO1xufVxuXG4uZm9ybXMtZmllbGQge1xuICBtYXJnaW46IDFlbSAxZW07XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xuICBtYXJnaW4tdG9wOiA1ZW07XG59XG5cbi5zdWNjZXNzLW1hcmtldCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyZW07XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMGVtO1xufVxuXG4udW5kZXItdGV4dC1idXR0b24ge1xuICBjb2xvcjogI2FkYTJhMjtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1sYXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcbiAgaGVpZ2h0OiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgbWFyZ2luOiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmJ1dHRvbi1sYXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBlbSAzZW07XG59XG5cbi5zaW5naW4tbGFzdHMge1xuICBtYXJnaW4tYm90dG9tOiAyZW0gIWltcG9ydGFudDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1sYXN0LWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3MkM0O1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbn1cblxuLmxvZ2luLWJ1dG9uIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxucC5oZWFkaW5nLWxvZ2luIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmZvcmdvdC1jb250YWluZXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5Mb2dpbi1wYWdlLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFlbSA1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbWFyZ2luOiAwLjVlbSAwZW07XG59XG5cbi5nb29nbGUtTG9naW4tYnV0dG9tLkxvZ2luLXBhZ2UtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcbiAgcGFkZGluZzogMWVtIDUuNWVtO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbi5mYWNlYm9vay1Mb2dpbi1idXR0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xufVxuXG4ubG9naW4tdXNlcm5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wcmV2aW91cy1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbn1cblxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Signin/forgotpassword/forgotpassword.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/Signin/forgotpassword/forgotpassword.page.ts ***!
  \**************************************************************/
/*! exports provided: ForgotpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function() { return ForgotpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let ForgotpasswordPage = class ForgotpasswordPage {
    constructor(http, _location, alertController, AuthService) {
        this.http = http;
        this._location = _location;
        this.alertController = alertController;
        this.AuthService = AuthService;
        this.isLoading = false;
    }
    ngOnInit() {
    }
    resetPassword(user) {
        this.isLoading = true;
        this.AuthService.forgotUser(user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((error) => {
            if (error.status == 406) {
                this.wrongUser();
            }
            this.isLoading = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(this.something());
        }))
            .subscribe((userDetail) => {
            this.isLoading = false;
            this.Alert();
        });
    }
    locationBack() {
        this._location.back();
    }
    Alert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: "We have sent a password reset request to your registered email",
                buttons: ["OK"],
            });
            this.locationBack();
            yield alert.present();
        });
    }
    wrongUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: "Wrong username or email id",
                buttons: ["OK"],
            });
            yield alert.present();
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
ForgotpasswordPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
ForgotpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgotpassword.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/forgotpassword/forgotpassword.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgotpassword.page.scss */ "./src/app/Signin/forgotpassword/forgotpassword.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], ForgotpasswordPage);



/***/ })

}]);
//# sourceMappingURL=Signin-forgotpassword-forgotpassword-module-es2015.js.map