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
/* harmony default export */ __webpack_exports__["default"] = (".success-market {\n  text-align: center;\n  margin: 2em;\n  font-size: 18px;\n  margin-bottom: 0em;\n}\n\n.under-text-button {\n  color: #ada2a2;\n}\n\n.continue-button-last {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  margin-bottom: 0px;\n}\n\n.button-last {\n  text-align: center;\n  margin: 0em 3em;\n}\n\n.singin-lasts {\n  margin-bottom: 2em !important;\n}\n\n.continue-button-last-blue {\n  background-color: #4372C4;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.login-buton {\n  width: 100vw;\n}\n\np.heading-login {\n  text-align: center;\n  font-size: 20px;\n}\n\n.or {\n  width: 100vw;\n  text-align: center;\n}\n\n.main-div {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG9jdW1lbnRzL1NvdXJjZWNvZGUgV29yay9Bbmd1bGFyIE9mZmljZSBQcm9qZWN0L25vdDREYXRpbmcvc3JjL2FwcC9TaWduaW4vZmluZC1mcmllbmRzL2ZpbmQtZnJpZW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL1NpZ25pbi9maW5kLWZyaWVuZHMvZmluZC1mcmllbmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREdBO0VBQ0ksNkJBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBRElBO0VBQ0ksWUFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9TaWduaW4vZmluZC1mcmllbmRzL2ZpbmQtZnJpZW5kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VjY2Vzcy1tYXJrZXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwZW07XHJcbn1cclxuXHJcbi51bmRlci10ZXh0LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI2FkYTJhMjtcclxufVxyXG5cclxuLmNvbnRpbnVlLWJ1dHRvbi1sYXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmJ1dHRvbi1sYXN0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMGVtIDNlbTtcclxuXHJcbn1cclxuXHJcbi5zaW5naW4tbGFzdHMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250aW51ZS1idXR0b24tbGFzdC1ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzcyQzQ7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuXHJcbn1cclxuXHJcbi5sb2dpbi1idXRvbiB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbnAuaGVhZGluZy1sb2dpbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5vciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLWRpdiB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59IiwiLnN1Y2Nlc3MtbWFya2V0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJlbTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwZW07XG59XG5cbi51bmRlci10ZXh0LWJ1dHRvbiB7XG4gIGNvbG9yOiAjYWRhMmEyO1xufVxuXG4uY29udGludWUtYnV0dG9uLWxhc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uYnV0dG9uLWxhc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMGVtIDNlbTtcbn1cblxuLnNpbmdpbi1sYXN0cyB7XG4gIG1hcmdpbi1ib3R0b206IDJlbSAhaW1wb3J0YW50O1xufVxuXG4uY29udGludWUtYnV0dG9uLWxhc3QtYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzcyQzQ7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xufVxuXG4ubG9naW4tYnV0b24ge1xuICB3aWR0aDogMTAwdnc7XG59XG5cbnAuaGVhZGluZy1sb2dpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ub3Ige1xuICB3aWR0aDogMTAwdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW4tZGl2IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */");

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