(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-result-search-result-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"background\">\r\n    <div class=\"tittle-home-page\">\r\n      <ion-card-subtitle class=\"tittle-home\">Search > Result</ion-card-subtitle>\r\n    </div>\r\n\r\n\r\n <div class=\"member-cards\" *ngFor=\"let posts of  searchResponse\"\r\n      routerLink=\"/detail/{{posts.name}}/{{posts.mail}}/{{posts.uid}}\" >\r\n  \r\n  \r\n      <div class=\"member-card-image\">\r\n  \r\n        <img src=\"{{posts.Picture}}\" alt=\"\" srcset=\"\" class=\"user-image\">\r\n      \r\n      </div>\r\n      <div class=\"member-card-text\">\r\n<div class=\"badage-name\">\r\n        <div class=\"name card-item\">{{posts.name}} </div>\r\n        <div class=\"parent-badge\">\r\n\r\n        <ion-badge slot=\"end\" color=\"medium\" *ngIf=\"posts.Pets.length==0\" class=\"badge-font\">Parent\r\n          </ion-badge>\r\n        <ion-badge slot=\"end\" color=\"medium\"*ngIf=\"posts.Pets.length>0\" class=\"badge-font\" >Pet Owner</ion-badge>\r\n    </div>\r\n       </div>\r\n\r\n       <div class=\"activity-container\">\r\n <div class=\"left-heading \">Activities:</div>\r\n <div class=\"right-heading\">{{posts.Activity}}</div>\r\n<div class=\"badage-container\"><ion-badge slot=\"end\" color=\"medium\">{{posts.Activity.length}}</ion-badge></div>\r\n       </div>\r\n       \r\n  <div class=\"distance-container\">\r\n<div class=\"distance card-item\">Distance:</div>\r\n<div class=\"distance-ouput\">1 miles away</div>\r\n\r\n  </div>\r\n \r\n \r\n    </div>\r\n    <button *ngIf=\"currPage.length == 25\" class=\"showMore\" (click)=\"getSearchData()\">Show More</button>\r\n  </div>\r\n\r\n\r\n  \r\n</ion-content>");

/***/ }),

/***/ "./src/app/search-result/search-result-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/search-result/search-result-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SearchResultPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultPageRoutingModule", function() { return SearchResultPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_result_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-result.page */ "./src/app/search-result/search-result.page.ts");




const routes = [
    {
        path: '',
        component: _search_result_page__WEBPACK_IMPORTED_MODULE_3__["SearchResultPage"]
    }
];
let SearchResultPageRoutingModule = class SearchResultPageRoutingModule {
};
SearchResultPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchResultPageRoutingModule);



/***/ }),

/***/ "./src/app/search-result/search-result.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/search-result/search-result.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchResultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultPageModule", function() { return SearchResultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _search_result_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-result-routing.module */ "./src/app/search-result/search-result-routing.module.ts");
/* harmony import */ var _search_result_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-result.page */ "./src/app/search-result/search-result.page.ts");
/* harmony import */ var _navigationbar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navigationbar/navigationbar.module */ "./src/app/navigationbar/navigationbar.module.ts");








let SearchResultPageModule = class SearchResultPageModule {
};
SearchResultPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_result_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchResultPageRoutingModule"],
            _navigationbar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__["NavigationbarModule"]
        ],
        declarations: [_search_result_page__WEBPACK_IMPORTED_MODULE_6__["SearchResultPage"],]
    })
], SearchResultPageModule);



/***/ }),

/***/ "./src/app/search-result/search-result.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/search-result/search-result.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\nion-card.ios.hydrated {\n  margin-top: 0px;\n}\n\n.tittle-home-page {\n  padding: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  padding-top: 6em;\n}\n\n.tittle-home {\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: capitalize;\n}\n\n.member-cards {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  background-color: white;\n  margin: 20px;\n  align-items: center;\n  border: 1px solid #717171;\n  margin-top: 0px;\n}\n\np.card-item {\n  margin-bottom: 0px;\n  margin-top: -2px;\n  font-size: 14px;\n  color: #707070;\n}\n\np.name.card-item {\n  font-size: 16px;\n}\n\n.hobbies {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n  color: #707070;\n}\n\n.activities {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n  display: flex;\n  flex-direction: row;\n}\n\n.distance {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n}\n\nimg.number-mage {\n  width: 9%;\n}\n\n.left-heading {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n}\n\nimg.user-image {\n  width: 100%;\n  height: 14vh;\n}\n\n.modal-backdrop {\n  height: auto !important;\n}\n\n.modal-backdrop.show {\n  opacity: 1;\n}\n\np.modal-para {\n  text-align: justify;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  word-spacing: -1px;\n}\n\n.checkbox-popup {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n\nimg.check-box {\n  margin-right: 10px;\n  text-align: center;\n}\n\nh5.whos-on-site {\n  font-size: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n\n.button-flex {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.register-button {\n  background-color: #5ADB00;\n  height: 40px;\n}\n\nbutton.btn.btn-primary.login-button {\n  height: 40px;\n}\n\np.check-box-text {\n  margin-bottom: 0px;\n}\n\n.member-card-text {\n  margin-left: 3vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: 3vw;\n}\n\n.showMore {\n  width: 100%;\n  padding: 20px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxzZWFyY2gtcmVzdWx0XFxzZWFyY2gtcmVzdWx0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0FDRkY7O0FES0E7RUFDRSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURLQTtFQUNFLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtBQ0ZGOztBREtBO0VBRUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNIRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtBQ0xGOztBRFFBO0VBQ0UsZUFBQTtBQ0xGOztBRFFBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0FDTkY7O0FEVUE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1BGOztBRFdBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNSRjs7QURXQTtFQUNFLFNBQUE7QUNSRjs7QURXQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7QUNSRjs7QURXQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0FDVEY7O0FEWUE7RUFDRSx1QkFBQTtBQ1RGOztBRFlBO0VBQ0UsVUFBQTtBQ1RGOztBRFlBO0VBQ0UsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNURjs7QURZQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVEY7O0FEWUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDVEY7O0FEYUE7RUFDRSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNWRjs7QURhQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDVkY7O0FEYUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNWRjs7QURhQTtFQUNFLFlBQUE7QUNWRjs7QURhQTtFQUNFLGtCQUFBO0FDVkY7O0FEYUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9JbWFnZXMvQmFja2dyb3VuZFRpbGUucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG5pb24tY2FyZC5pb3MuaHlkcmF0ZWQge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLnRpdHRsZS1ob21lLXBhZ2Uge1xyXG4gIHBhZGRpbmc6IDEuNWVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nLXRvcDogNmVtO1xyXG59XHJcblxyXG4udGl0dGxlLWhvbWUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5tZW1iZXItY2FyZHMge1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNzE3MTcxO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuXHJcbn1cclxuXHJcbnAuY2FyZC1pdGVtIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTJweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcblxyXG5wLm5hbWUuY2FyZC1pdGVtIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5ob2JiaWVzIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcblxyXG59XHJcblxyXG4uYWN0aXZpdGllcyB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxufVxyXG5cclxuLmRpc3RhbmNlIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaW1nLm51bWJlci1tYWdlIHtcclxuICB3aWR0aDogOSU7XHJcbn1cclxuXHJcbi5sZWZ0LWhlYWRpbmcge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbmltZy51c2VyLWltYWdlIHtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNHZoO1xyXG59XHJcblxyXG4ubW9kYWwtYmFja2Ryb3Age1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWwtYmFja2Ryb3Auc2hvdyB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxucC5tb2RhbC1wYXJhIHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHdvcmQtc3BhY2luZzogLTFweDtcclxufVxyXG5cclxuLmNoZWNrYm94LXBvcHVwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5pbWcuY2hlY2stYm94IHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuaDUud2hvcy1vbi1zaXRlIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYnV0dG9uLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBREIwMDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubG9naW4tYnV0dG9uIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbnAuY2hlY2stYm94LXRleHQge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLm1lbWJlci1jYXJkLXRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiAzdnc7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBtYXJnaW4tcmlnaHQ6IDN2dztcclxufVxyXG5cclxuLnNob3dNb3JlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG4iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9JbWFnZXMvQmFja2dyb3VuZFRpbGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbmlvbi1jYXJkLmlvcy5oeWRyYXRlZCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnRpdHRsZS1ob21lLXBhZ2Uge1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmctdG9wOiA2ZW07XG59XG5cbi50aXR0bGUtaG9tZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubWVtYmVyLWNhcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzE3MTcxO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbnAuY2FyZC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuXG5wLm5hbWUuY2FyZC1pdGVtIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaG9iYmllcyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5hY3Rpdml0aWVzIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZGlzdGFuY2Uge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmltZy5udW1iZXItbWFnZSB7XG4gIHdpZHRoOiA5JTtcbn1cblxuLmxlZnQtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmltZy51c2VyLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTR2aDtcbn1cblxuLm1vZGFsLWJhY2tkcm9wIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1iYWNrZHJvcC5zaG93IHtcbiAgb3BhY2l0eTogMTtcbn1cblxucC5tb2RhbC1wYXJhIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdvcmQtc3BhY2luZzogLTFweDtcbn1cblxuLmNoZWNrYm94LXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmltZy5jaGVjay1ib3gge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDUud2hvcy1vbi1zaXRlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idXR0b24tZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmVnaXN0ZXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBREIwMDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5LmxvZ2luLWJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbn1cblxucC5jaGVjay1ib3gtdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1lbWJlci1jYXJkLXRleHQge1xuICBtYXJnaW4tbGVmdDogM3Z3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWFyZ2luLXJpZ2h0OiAzdnc7XG59XG5cbi5zaG93TW9yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/search-result/search-result.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/search-result/search-result.page.ts ***!
  \*****************************************************/
/*! exports provided: SearchResultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultPage", function() { return SearchResultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");




let SearchResultPage = class SearchResultPage {
    constructor(_Activatedroute, ConfigService) {
        this._Activatedroute = _Activatedroute;
        this.ConfigService = ConfigService;
        this.searchResponse = [];
        this.pageIndex = 0;
        this.currPage = [];
    }
    ngOnInit() {
        this.sub = this._Activatedroute.paramMap.subscribe((params) => {
            this.post = params.get("post");
        });
        this.getSearchData();
    }
    getSearchData() {
        this.ConfigService.getPostal(this.post, this.pageIndex).subscribe((elements) => {
            this.currPage = Object.keys(elements).map((i) => elements[i]);
            console.log(this.currPage);
            this.searchResponse = this.searchResponse.concat(this.currPage);
            console.log(this.searchResponse);
        });
        this.pageIndex++;
    }
};
SearchResultPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
SearchResultPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-search-result",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-result.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-result.page.scss */ "./src/app/search-result/search-result.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
], SearchResultPage);



/***/ })

}]);
//# sourceMappingURL=search-result-search-result-module-es2015.js.map