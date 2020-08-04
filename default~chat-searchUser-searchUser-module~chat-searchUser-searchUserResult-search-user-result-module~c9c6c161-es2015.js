(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~chat-searchUser-searchUser-module~chat-searchUser-searchUserResult-search-user-result-module~c9c6c161"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/searchUser/searchUserResult/search-user-result.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/searchUser/searchUserResult/search-user-result.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-navigationbar></app-navigationbar>\n</ion-header>\n<div *ngIf=\"isLoading\" class=\"loading-container\">\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n</div>\n<ion-content>\n  <div class=\"background\" >\n    \n    \n    <div class=\"members-grid\" *ngFor=\"let result of searchResults\"  routerLink=\"/popup/{{result.Uid}}\">\n\n      <div class=\"photo-member-grid\">\n    <img src=\"{{result.Picture}}\" alt=\"\" srcset=\"\" class=\"user-image\">\n      </div>\n\n      <div class=\"data-member-grid\">\n        <div class=\"grid-name\">\n          {{result.name}}\n        </div>\n        \n        <div class=\"left-heading\">Activities:&nbsp;{{result.Activities}}</div>\n       \n        <div class=\"distance-container\">\n          <div class=\"distance card-item\">Distance:</div>\n          <div class=\"distance-ouput\">1 miles away</div>\n          \n            </div>\n\n       \n\n      </div>\n\n    </div>\n  </div>\n\n\n  <!-- <div class=\"not-found-result\" *ngIf=\"notfound\">\n    <div class=\"not-found-result-container-second\">\n   \n   <div class=\"align-box-not-found\">\n   <div class=\"not-found-result-data\">\n    \n     <div class=\"content-not-found\">\n    \n      <div class=\"mot-found-text\">Oops Not found Matches</div>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"backClicked()\">Goback</button>\n   \n   \n     </div>\n   \n   \n   </div>\n   \n   </div>\n   \n    </div>\n   \n   \n   \n   \n   \n   \n   </div> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/chat/searchUser/searchUserResult/search-user-result-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/chat/searchUser/searchUserResult/search-user-result-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SearchUserResultPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUserResultPageRoutingModule", function() { return SearchUserResultPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_user_result_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-user-result.page */ "./src/app/chat/searchUser/searchUserResult/search-user-result.page.ts");




const routes = [
    {
        path: '',
        component: _search_user_result_page__WEBPACK_IMPORTED_MODULE_3__["SearchUserResultPage"]
    }
];
let SearchUserResultPageRoutingModule = class SearchUserResultPageRoutingModule {
};
SearchUserResultPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchUserResultPageRoutingModule);



/***/ }),

/***/ "./src/app/chat/searchUser/searchUserResult/search-user-result.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/chat/searchUser/searchUserResult/search-user-result.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SearchUserResultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUserResultPageModule", function() { return SearchUserResultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _search_user_result_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-user-result-routing.module */ "./src/app/chat/searchUser/searchUserResult/search-user-result-routing.module.ts");
/* harmony import */ var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Navigation/NavigationBar/navigationbar.module */ "./src/app/Navigation/NavigationBar/navigationbar.module.ts");
/* harmony import */ var _search_user_result_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-user-result.page */ "./src/app/chat/searchUser/searchUserResult/search-user-result.page.ts");









let SearchUserResultPageModule = class SearchUserResultPageModule {
};
SearchUserResultPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__["NavigationbarModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _search_user_result_routing_module__WEBPACK_IMPORTED_MODULE_6__["SearchUserResultPageRoutingModule"]
        ],
        exports: [_search_user_result_page__WEBPACK_IMPORTED_MODULE_8__["SearchUserResultPage"]],
        declarations: [_search_user_result_page__WEBPACK_IMPORTED_MODULE_8__["SearchUserResultPage"]]
    })
], SearchUserResultPageModule);



/***/ }),

/***/ "./src/app/chat/searchUser/searchUserResult/search-user-result.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/chat/searchUser/searchUserResult/search-user-result.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  overflow-x: auto;\n}\n\n.forms-field {\n  margin: 1em 1em;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n  width: 100%;\n}\n\nspan.to {\n  margin: 0px 1em;\n}\n\n.dropdown-aged {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.form-control {\n  border: 1px solid;\n}\n\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.alreday-member {\n  text-align: center;\n  font-size: 20px;\n  color: red;\n  font-family: \"Open Sans\", sans-serif;\n  margin-top: 0.7em;\n  font-weight: 200;\n  margin-bottom: 0.7em;\n}\n\n.members-grid {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  justify-content: center;\n  align-content: center;\n  border: 1px solid;\n  margin: 1em;\n  height: 17vh;\n}\n\n.data-member-grid {\n  margin-left: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 3vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: 3vw;\n}\n\np {\n  margin-bottom: 0em;\n  font-size: 17px;\n}\n\n.chat-page-text {\n  margin-bottom: 1em;\n}\n\n.modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  grid-gap: 11px;\n}\n\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.side-bar-icon {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin: 0em;\n}\n\nimg.chat-bubble {\n  width: 46%;\n  margin-top: 1em;\n}\n\n.siderbar-icon-data {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 10px;\n}\n\n.group-text-image {\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.popup-chat-page {\n  margin-top: 7em;\n  margin-left: 1em;\n  text-align: justify;\n  margin-right: 1em;\n}\n\n.modal {\n  background: #000000a1;\n}\n\n.badage-name {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-top: 0.5em;\n}\n\n.badge-font {\n  font-size: 9px;\n}\n\n.right-heading {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.activity-container {\n  display: flex;\n  align-items: center;\n}\n\n.parent-badge {\n  margin-left: 10px;\n}\n\n.distance-container {\n  display: flex;\n}\n\n.left-heading {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  display: block;\n  display: -webkit-box;\n  /* max-width: 100%; */\n  height: 43px;\n  margin: 0 auto;\n  font-size: 14px;\n  /* line-height: 1; */\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.activity-container {\n  display: flex;\n  align-items: center;\n}\n\n.distance-container {\n  display: flex;\n  font-size: 14px;\n}\n\nimg.user-image {\n  width: 100%;\n  height: 16vh;\n}\n\n.grid-nmae {\n  font-size: 14px;\n}\n\n.not-found-result {\n  background-color: #00000091;\n  height: 100vh;\n  top: 0em;\n  position: fixed;\n  width: 100vw;\n  z-index: 1000;\n}\n\n.not-found-result-data {\n  background-color: white;\n  height: 17vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2em;\n}\n\n.not-found-result-container-second {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.align-box-not-found {\n  /* display: flex; */\n  justify-content: center;\n  /* height: 100vh; */\n  z-index: 1000;\n  align-items: center;\n  background-color: white;\n  width: 100vw;\n  margin: 0em 3em;\n  border-radius: 2em;\n}\n\n.content-not-found {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 67%;\n}\n\n.back-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.custom-back-button {\n  width: 90%;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvY2hhdC9zZWFyY2hVc2VyL3NlYXJjaFVzZXJSZXN1bHQvc2VhcmNoLXVzZXItcmVzdWx0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhdC9zZWFyY2hVc2VyL3NlYXJjaFVzZXJSZXN1bHQvc2VhcmNoLXVzZXItcmVzdWx0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLGdCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FER0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEREE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0tKOztBREhBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNNSjs7QURKQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ09KOztBRExBO0VBRUksa0JBQUE7RUFDQSxlQUFBO0FDT0o7O0FETEE7RUFFSSxrQkFBQTtBQ09KOztBRExBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ1FKOztBRE5BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDU0o7O0FEUEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNVSjs7QURSQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDV0o7O0FEVEE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDWUo7O0FEVkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNhSjs7QURYQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDY0o7O0FEWkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDZUo7O0FEYkE7RUFDSSxxQkFBQTtBQ2dCSjs7QURkQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNnQko7O0FEZEE7RUFDSSxjQUFBO0FDaUJKOztBRGZBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDa0JKOztBRGhCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ21CSjs7QURqQkE7RUFDSSxpQkFBQTtBQ29CSjs7QURsQkE7RUFDSSxhQUFBO0FDcUJKOztBRG5CQTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNzQko7O0FEbkJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDc0JKOztBRHBCQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDdUJKOztBRHJCQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FDdUJKOztBRHJCRTtFQUVJLGVBQUE7QUN1Qk47O0FEckJFO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ3dCSjs7QUR0QkE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDeUJKOztBRHRCQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3lCSjs7QUR2QkE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUMwQko7O0FEdkJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUMwQko7O0FEeEJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUMyQko7O0FEekJBO0VBQ0ksVUFBQTtBQzRCSjs7QUQxQkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQzZCSiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvc2VhcmNoVXNlci9zZWFyY2hVc2VyUmVzdWx0L3NlYXJjaC11c2VyLXJlc3VsdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZFxyXG57XHJcbiAgIFxyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbn1cclxuLmZvcm1zLWZpZWxke1xyXG4gICAgbWFyZ2luOiAxZW0gMWVtO1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5zcGFuLnRvIHtcclxuICAgIG1hcmdpbjogMHB4IDFlbTtcclxufVxyXG4uZHJvcGRvd24tYWdlZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbi5jb250aW51ZS1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbn1cclxuLmFscmVkYXktbWVtYmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjdlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjdlbTtcclxufVxyXG4ubWVtYmVycy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBoZWlnaHQ6IDE3dmg7XHJcbn1cclxuLmRhdGEtbWVtYmVyLWdyaWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogM3Z3O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzdnc7XHJcbn1cclxucFxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwZW07XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLmNoYXQtcGFnZS10ZXh0XHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG4ubW9kYWwtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xyXG4gICAgZ3JpZC1nYXA6IDExcHg7XHJcbn1cclxuLnByb2ZpbGUtbmFtZS1tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zaWRlLWJhci1pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luOiAwZW07XHJcbn1cclxuaW1nLmNoYXQtYnViYmxlIHtcclxuICAgIHdpZHRoOiA0NiU7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuLnNpZGVyYmFyLWljb24tZGF0YSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbn1cclxuLmdyb3VwLXRleHQtaW1hZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnNpZGViYXItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5wb3B1cC1jaGF0LXBhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogN2VtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG4ubW9kYWx7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTE7XHJcbn1cclxuLmJhZGFnZS1uYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbn1cclxuLmJhZGdlLWZvbnQge1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbn1cclxuLnJpZ2h0LWhlYWRpbmcge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4uYWN0aXZpdHktY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5wYXJlbnQtYmFkZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmRpc3RhbmNlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5sZWZ0LWhlYWRpbmcge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC8qIG1heC13aWR0aDogMTAwJTsgKi9cclxuICAgIGhlaWdodDogNDNweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLyogbGluZS1oZWlnaHQ6IDE7ICovXHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICB9XHJcbiAgLmFjdGl2aXR5LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZGlzdGFuY2UtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaW1nLnVzZXItaW1hZ2Uge1xyXG4gIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE2dmg7XHJcbiAgfVxyXG4gIC5ncmlkLW5tYWVcclxuICB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLm5vdC1mb3VuZC1yZXN1bHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDkxO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRvcDogMGVtO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufSAgIFxyXG4ubm90LWZvdW5kLXJlc3VsdC1kYXRhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAxN3ZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuIFxyXG59XHJcbi5ub3QtZm91bmQtcmVzdWx0LWNvbnRhaW5lci1zZWNvbmQge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmFsaWduLWJveC1ub3QtZm91bmQge1xyXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDBlbSAzZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICBcclxufVxyXG4uY29udGVudC1ub3QtZm91bmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiA2NyU7XHJcbn1cclxuLmJhY2stYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmN1c3RvbS1iYWNrLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH0iLCIuYmFja2dyb3VuZCB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5mb3Jtcy1maWVsZCB7XG4gIG1hcmdpbjogMWVtIDFlbTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuc3Bhbi50byB7XG4gIG1hcmdpbjogMHB4IDFlbTtcbn1cblxuLmRyb3Bkb3duLWFnZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uY29udGludWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcbiAgaGVpZ2h0OiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgbWFyZ2luOiAyZW07XG59XG5cbi5hbHJlZGF5LW1lbWJlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMC43ZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbi1ib3R0b206IDAuN2VtO1xufVxuXG4ubWVtYmVycy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luOiAxZW07XG4gIGhlaWdodDogMTd2aDtcbn1cblxuLmRhdGEtbWVtYmVyLWdyaWQge1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDN2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbi1yaWdodDogM3Z3O1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMGVtO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5jaGF0LXBhZ2UtdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLm1vZGFsLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XG4gIGdyaWQtZ2FwOiAxMXB4O1xufVxuXG4ucHJvZmlsZS1uYW1lLW1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNpZGUtYmFyLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1hcmdpbjogMGVtO1xufVxuXG5pbWcuY2hhdC1idWJibGUge1xuICB3aWR0aDogNDYlO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5zaWRlcmJhci1pY29uLWRhdGEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gIGdyaWQtZ2FwOiAxMHB4O1xufVxuXG4uZ3JvdXAtdGV4dC1pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaWRlYmFyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBvcHVwLWNoYXQtcGFnZSB7XG4gIG1hcmdpbi10b3A6IDdlbTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi5tb2RhbCB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBhMTtcbn1cblxuLmJhZGFnZS1uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xufVxuXG4uYmFkZ2UtZm9udCB7XG4gIGZvbnQtc2l6ZTogOXB4O1xufVxuXG4ucmlnaHQtaGVhZGluZyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYWN0aXZpdHktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBhcmVudC1iYWRnZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZGlzdGFuY2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmxlZnQtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLyogbWF4LXdpZHRoOiAxMDAlOyAqL1xuICBoZWlnaHQ6IDQzcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC8qIGxpbmUtaGVpZ2h0OiAxOyAqL1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYWN0aXZpdHktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRpc3RhbmNlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW1nLnVzZXItaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNnZoO1xufVxuXG4uZ3JpZC1ubWFlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubm90LWZvdW5kLXJlc3VsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5MTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubm90LWZvdW5kLXJlc3VsdC1kYXRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTd2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcbn1cblxuLm5vdC1mb3VuZC1yZXN1bHQtY29udGFpbmVyLXNlY29uZCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWxpZ24tYm94LW5vdC1mb3VuZCB7XG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xuICB6LWluZGV4OiAxMDAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IDBlbSAzZW07XG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcbn1cblxuLmNvbnRlbnQtbm90LWZvdW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDY3JTtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jdXN0b20tYmFjay1idXR0b24ge1xuICB3aWR0aDogOTAlO1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */");

/***/ }),

/***/ "./src/app/chat/searchUser/searchUserResult/search-user-result.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/chat/searchUser/searchUserResult/search-user-result.page.ts ***!
  \*****************************************************************************/
/*! exports provided: SearchUserResultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUserResultPage", function() { return SearchUserResultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let SearchUserResultPage = class SearchUserResultPage {
    constructor(ConfigService, _Activatedroute, _location) {
        this.ConfigService = ConfigService;
        this._Activatedroute = _Activatedroute;
        this._location = _location;
        this.notfound = false;
        this.isLoading = true;
    }
    ngOnInit() {
        this.itrs = JSON.parse(localStorage.getItem("currentUser"));
        this.sub = this._Activatedroute.paramMap.subscribe((params) => {
            this.gender = params.get("gender");
            this.meet = params.get("meet");
            this.activity = params.get("activity");
            this.Postcode = params.get("Postcode");
        });
        this.ConfigService.getSearchUrl(this.Postcode, this.gender, this.meet, this.activity).subscribe((elements) => {
            this.searchResults = elements;
            this.isLoading = false;
            if (this.searchResults.length == 0) {
                this.notfound = true;
                console.log("oops no result Found");
            }
            console.log(elements);
        });
    }
    backClicked() {
        this._location.back();
    }
};
SearchUserResultPage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
SearchUserResultPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-user-result',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-user-result.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/searchUser/searchUserResult/search-user-result.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-user-result.page.scss */ "./src/app/chat/searchUser/searchUserResult/search-user-result.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
], SearchUserResultPage);



/***/ })

}]);
//# sourceMappingURL=default~chat-searchUser-searchUser-module~chat-searchUser-searchUserResult-search-user-result-module~c9c6c161-es2015.js.map