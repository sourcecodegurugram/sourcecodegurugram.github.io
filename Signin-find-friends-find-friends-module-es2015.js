(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Signin-find-friends-find-friends-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/find-friends/find-friends.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/find-friends/find-friends.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n  <app-navigationbar></app-navigationbar>\r\n\r\n  \r\n<div class=\"main-div\">\r\n  <div class=\"success-market\">Hello! What would you like to do first?\r\n  </div>\r\n\r\n  <div class=\"last-tab-button\" routerLink=\"/chat/searchUser\">\r\n    <div class=\"continue-button-last singin-lasts\">\r\n      Find Friends\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"or\">OR</div>\r\n\r\n\r\n  <div class=\"last-tab-button\" routerLink=\"/optional-detail\">\r\n    <div class=\"continue-button-last-blue singin-last\">\r\n      Finish My Profile\r\n    </div>\r\n\r\n    <div class=\"success-market\">Your Profile is currently X% complete. Our members who share more information in\r\n      their profile get better results. But, if you don’t want to finish now you can add to your profile later at\r\n      any time.</div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/Signin/find-friends/find-friends-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/Signin/find-friends/find-friends-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: FindFriendsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindFriendsPageRoutingModule", function() { return FindFriendsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _find_friends_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-friends.page */ "./src/app/Signin/find-friends/find-friends.page.ts");




const routes = [
    {
        path: '',
        component: _find_friends_page__WEBPACK_IMPORTED_MODULE_3__["FindFriendsPage"]
    }
];
let FindFriendsPageRoutingModule = class FindFriendsPageRoutingModule {
};
FindFriendsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FindFriendsPageRoutingModule);



/***/ }),

/***/ "./src/app/Signin/find-friends/find-friends.module.ts":
/*!************************************************************!*\
  !*** ./src/app/Signin/find-friends/find-friends.module.ts ***!
  \************************************************************/
/*! exports provided: FindFriendsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindFriendsPageModule", function() { return FindFriendsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _find_friends_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./find-friends-routing.module */ "./src/app/Signin/find-friends/find-friends-routing.module.ts");
/* harmony import */ var _find_friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./find-friends.page */ "./src/app/Signin/find-friends/find-friends.page.ts");
/* harmony import */ var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Navigation/NavigationBar/navigationbar.module */ "./src/app/Navigation/NavigationBar/navigationbar.module.ts");








let FindFriendsPageModule = class FindFriendsPageModule {
};
FindFriendsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _find_friends_routing_module__WEBPACK_IMPORTED_MODULE_5__["FindFriendsPageRoutingModule"], _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__["NavigationbarModule"]
        ],
        declarations: [_find_friends_page__WEBPACK_IMPORTED_MODULE_6__["FindFriendsPage"]]
    })
], FindFriendsPageModule);



/***/ }),

/***/ "./src/app/Signin/find-friends/find-friends.page.scss":
/*!************************************************************!*\
  !*** ./src/app/Signin/find-friends/find-friends.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".success-market {\n  text-align: center;\n  margin: 2em;\n  font-size: 18px;\n  margin-bottom: 0em;\n}\n\n.under-text-button {\n  color: #ada2a2;\n}\n\n.continue-button-last {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  margin-bottom: 0px;\n}\n\n.button-last {\n  text-align: center;\n  margin: 0em 3em;\n}\n\n.singin-lasts {\n  margin-bottom: 2em !important;\n}\n\n.continue-button-last-blue {\n  background-color: #4372C4;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.login-buton {\n  width: 100vw;\n}\n\np.heading-login {\n  text-align: center;\n  font-size: 20px;\n}\n\n.or {\n  width: 100vw;\n  text-align: center;\n}\n\n.main-div {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2lnbmluL2ZpbmQtZnJpZW5kcy9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxTaWduaW5cXGZpbmQtZnJpZW5kc1xcZmluZC1mcmllbmRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvU2lnbmluL2ZpbmQtZnJpZW5kcy9maW5kLWZyaWVuZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FER0E7RUFDSSw2QkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQUo7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL1NpZ25pbi9maW5kLWZyaWVuZHMvZmluZC1mcmllbmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWNjZXNzLW1hcmtldCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBlbTtcclxufVxyXG5cclxuLnVuZGVyLXRleHQtYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjYWRhMmEyO1xyXG59XHJcblxyXG4uY29udGludWUtYnV0dG9uLWxhc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLWxhc3Qge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwZW0gM2VtO1xyXG5cclxufVxyXG5cclxuLnNpbmdpbi1sYXN0cyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRpbnVlLWJ1dHRvbi1sYXN0LWJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNzJDNDtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hcmdpbjogMmVtO1xyXG5cclxufVxyXG5cclxuLmxvZ2luLWJ1dG9uIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxucC5oZWFkaW5nLWxvZ2luIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm9yIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4tZGl2IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0iLCIuc3VjY2Vzcy1tYXJrZXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMmVtO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDBlbTtcbn1cblxuLnVuZGVyLXRleHQtYnV0dG9uIHtcbiAgY29sb3I6ICNhZGEyYTI7XG59XG5cbi5jb250aW51ZS1idXR0b24tbGFzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5idXR0b24tbGFzdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwZW0gM2VtO1xufVxuXG4uc2luZ2luLWxhc3RzIHtcbiAgbWFyZ2luLWJvdHRvbTogMmVtICFpbXBvcnRhbnQ7XG59XG5cbi5jb250aW51ZS1idXR0b24tbGFzdC1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNzJDNDtcbiAgaGVpZ2h0OiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgbWFyZ2luOiAyZW07XG59XG5cbi5sb2dpbi1idXRvbiB7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxucC5oZWFkaW5nLWxvZ2luIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5vciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbi1kaXYge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/Signin/find-friends/find-friends.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/Signin/find-friends/find-friends.page.ts ***!
  \**********************************************************/
/*! exports provided: FindFriendsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindFriendsPage", function() { return FindFriendsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FindFriendsPage = class FindFriendsPage {
    constructor() { }
    ngOnInit() {
    }
};
FindFriendsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-find-friends',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./find-friends.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/find-friends/find-friends.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./find-friends.page.scss */ "./src/app/Signin/find-friends/find-friends.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FindFriendsPage);



/***/ })

}]);
//# sourceMappingURL=Signin-find-friends-find-friends-module-es2015.js.map