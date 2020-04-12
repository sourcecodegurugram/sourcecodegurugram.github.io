(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs2-tabs2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs2/tabs2.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs2/tabs2.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content >\n  <div class=\"main-content-chat\">\n  <div class=\"chat-grid\" routerLink=\"/personal-chat\">\n    <div class=\"image\">\n      <img src=\"../../assets/Images/user_-6.png\" class=\"image-chat\">\n    </div>\n\n    <div class=\"name\">\n      <p class=\"chat-name\">Vibrant_chef</p>\n      <p class=\"last-chat\">How are you</p>\n    </div>\n\n    <div class=\"time\">\n      <p class=\"time-text\">6:45Pm</p>\n    </div>\n  </div>\n  <div class=\"chat-grid\">\n    <div class=\"image\">\n      <img src=\"../../assets/Images/user_-10.png\" class=\"image-chat\">\n    </div>\n\n    <div class=\"name\">\n      <p class=\"chat-name\">Ibrahim</p>\n      <p class=\"last-chat\">Lets meet tomorrow at 8</p>\n    </div>\n\n    <div class=\"time\">\n      <p class=\"time-text\">4:45Pm</p>\n    </div>\n  </div>\n  <div class=\"chat-grid\">\n    <div class=\"image\">\n      <img src=\"../../assets/Images/user_-11.png\" class=\"image-chat\">\n    </div>\n\n    <div class=\"name\">\n      <p class=\"chat-name\">dedrick96</p>\n      <p class=\"last-chat\">I have similar taste in movies  as you</p>\n    </div>\n\n    <div class=\"time\">\n      <p class=\"time-text\">4:45Pm</p>\n    </div>\n  </div>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/tabs2/tabs2-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/tabs2/tabs2-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Tabs2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs2PageRoutingModule", function() { return Tabs2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs2.page */ "./src/app/tabs2/tabs2.page.ts");




const routes = [
    {
        path: '',
        component: _tabs2_page__WEBPACK_IMPORTED_MODULE_3__["Tabs2Page"]
    }
];
let Tabs2PageRoutingModule = class Tabs2PageRoutingModule {
};
Tabs2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tabs2PageRoutingModule);



/***/ }),

/***/ "./src/app/tabs2/tabs2.module.ts":
/*!***************************************!*\
  !*** ./src/app/tabs2/tabs2.module.ts ***!
  \***************************************/
/*! exports provided: Tabs2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs2PageModule", function() { return Tabs2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tabs2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs2-routing.module */ "./src/app/tabs2/tabs2-routing.module.ts");
/* harmony import */ var _tabs2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs2.page */ "./src/app/tabs2/tabs2.page.ts");







let Tabs2PageModule = class Tabs2PageModule {
};
Tabs2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tabs2PageRoutingModule"]
        ],
        declarations: [_tabs2_page__WEBPACK_IMPORTED_MODULE_6__["Tabs2Page"]]
    })
], Tabs2PageModule);



/***/ }),

/***/ "./src/app/tabs2/tabs2.page.scss":
/*!***************************************!*\
  !*** ./src/app/tabs2/tabs2.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chat-grid {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  align-items: unset;\n  grid-gap: 0px;\n  margin: 1em;\n  align-items: center;\n  align-content: center;\n}\n\np.chat-name {\n  margin-bottom: 0px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 2%;\n}\n\np.last-chat {\n  margin-bottom: 0px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.main-content-chat {\n  padding-top: 6em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9nb2QvTWFpbiBEYXRhL0FuZ3VsYXIgUHJvamVjdC9ub3Q0RGF0aW5nL3NyYy9hcHAvdGFiczIvdGFiczIucGFnZS5zY3NzIiwiYXBwL3RhYnMyL3RhYnMyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUVJLDJCQUFBO0FDR0oiLCJmaWxlIjoiYXBwL3RhYnMyL3RhYnMyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XHJcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7XHJcbiAgICBncmlkLWdhcDogMHB4O1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbnAuY2hhdC1uYW1lIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxucC5sYXN0LWNoYXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ubWFpbi1jb250ZW50LWNoYXRcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDZlbSAhaW1wb3J0YW50O1xyXG59IiwiLmNoYXQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XG4gIGFsaWduLWl0ZW1zOiB1bnNldDtcbiAgZ3JpZC1nYXA6IDBweDtcbiAgbWFyZ2luOiAxZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxucC5jaGF0LW5hbWUge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxucC5sYXN0LWNoYXQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYWluLWNvbnRlbnQtY2hhdCB7XG4gIHBhZGRpbmctdG9wOiA2ZW0gIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tabs2/tabs2.page.ts":
/*!*************************************!*\
  !*** ./src/app/tabs2/tabs2.page.ts ***!
  \*************************************/
/*! exports provided: Tabs2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs2Page", function() { return Tabs2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tabs2Page = class Tabs2Page {
    constructor() { }
    ngOnInit() {
    }
};
Tabs2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs2/tabs2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs2.page.scss */ "./src/app/tabs2/tabs2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tabs2Page);



/***/ })

}]);
//# sourceMappingURL=tabs2-tabs2-module-es2015.js.map