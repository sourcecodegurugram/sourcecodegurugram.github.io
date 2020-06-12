(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs3-tabs3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs3/tabs3.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs3/tabs3.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <div class=\"background\" >\n    <div class=\"members-grid\" *ngFor=\"let favorite of ParseFavorate\">\n      <div class=\"photo-member-grid\">\n        <img src={{favorite[0].picture}} class=\"image-profile\">\n      </div>\n      <div class=\"data-member-grid\">\n        <p class=\"name card-item\">{{favorite[0].name}}</p>\n        <ion-label class=\"hobbies card-item \"  ><span class=\"left-heading\">Activities:&nbsp;</span>{{favorite[0].activities.value}}....\n        </ion-label>\n        <p class=\"distance card-item\"><span class=\"left-heading\">Distance:</span>1 miles away</p>\n      </div>\n      <img src=\"../../assets/Images/favorite.png\" class=\"blue-star\">\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/tabs3/tabs3-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/tabs3/tabs3-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Tabs3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs3PageRoutingModule", function() { return Tabs3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs3.page */ "./src/app/tabs3/tabs3.page.ts");




const routes = [
    {
        path: '',
        component: _tabs3_page__WEBPACK_IMPORTED_MODULE_3__["Tabs3Page"]
    }
];
let Tabs3PageRoutingModule = class Tabs3PageRoutingModule {
};
Tabs3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tabs3PageRoutingModule);



/***/ }),

/***/ "./src/app/tabs3/tabs3.module.ts":
/*!***************************************!*\
  !*** ./src/app/tabs3/tabs3.module.ts ***!
  \***************************************/
/*! exports provided: Tabs3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs3PageModule", function() { return Tabs3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tabs3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs3-routing.module */ "./src/app/tabs3/tabs3-routing.module.ts");
/* harmony import */ var _tabs3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs3.page */ "./src/app/tabs3/tabs3.page.ts");







let Tabs3PageModule = class Tabs3PageModule {
};
Tabs3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tabs3PageRoutingModule"]
        ],
        declarations: [_tabs3_page__WEBPACK_IMPORTED_MODULE_6__["Tabs3Page"]]
    })
], Tabs3PageModule);



/***/ }),

/***/ "./src/app/tabs3/tabs3.page.scss":
/*!***************************************!*\
  !*** ./src/app/tabs3/tabs3.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".members-grid {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  justify-content: center;\n  align-content: center;\n  border: 1px solid;\n  margin: 1em;\n}\n\n.data-member-grid {\n  margin-left: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\np {\n  margin-bottom: 1em;\n  font-size: 17px;\n}\n\n.background {\n  margin-top: 7em;\n}\n\n.blue-star {\n  position: absolute;\n  width: 7%;\n  margin: 4px;\n}\n\np {\n  margin-bottom: 0px;\n}\n\nimg.image-profile {\n  height: 16vh;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiczMvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxcdGFiczNcXHRhYnMzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiczMvdGFiczMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0VKOztBREFBO0VBRUksa0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkE7RUFFSSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3RhYnMzL3RhYnMzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW1iZXJzLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBtYXJnaW46IDFlbTtcbn1cbi5kYXRhLW1lbWJlci1ncmlkIHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbnBcbntcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZm9udC1zaXplOiAxN3B4O1xufSBcbi5iYWNrZ3JvdW5kIHtcbiAgICBtYXJnaW4tdG9wOiA3ZW07XG59XG4uYmx1ZS1zdGFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDclO1xuICAgIG1hcmdpbjogNHB4O1xufVxucFxue1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbmltZy5pbWFnZS1wcm9maWxlIHtcbiAgICBoZWlnaHQ6IDE2dmg7XG4gICAgd2lkdGg6IDEwMCU7XG59IiwiLm1lbWJlcnMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbjogMWVtO1xufVxuXG4uZGF0YS1tZW1iZXItZ3JpZCB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgbWFyZ2luLXRvcDogN2VtO1xufVxuXG4uYmx1ZS1zdGFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNyU7XG4gIG1hcmdpbjogNHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5pbWcuaW1hZ2UtcHJvZmlsZSB7XG4gIGhlaWdodDogMTZ2aDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/tabs3/tabs3.page.ts":
/*!*************************************!*\
  !*** ./src/app/tabs3/tabs3.page.ts ***!
  \*************************************/
/*! exports provided: Tabs3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs3Page", function() { return Tabs3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let Tabs3Page = class Tabs3Page {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.itrs = JSON.parse(localStorage.getItem("currentUser"));
        this.http.get('http://gowebtutorial.com/api/json/user/' + this.itrs.user.uid).subscribe(users => {
            this.allfavorate = users;
            this.listFavorate = this.allfavorate.field_favorite_users.und[0].value;
            this.ParseFavorate = JSON.parse(this.listFavorate);
            console.log(this.ParseFavorate);
        });
    }
};
Tabs3Page.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
Tabs3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs3/tabs3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs3.page.scss */ "./src/app/tabs3/tabs3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], Tabs3Page);



/***/ })

}]);
//# sourceMappingURL=tabs3-tabs3-module-es2015.js.map