(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs3-tabs3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs3/tabs3.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs3/tabs3.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n  <div class=\"background\" >\n\n    <div class=\"members-grid\" style=\"background-color: #4372C4;color: white;\">\n\n      <div class=\"photo-member-grid\">\n        <img src=\"../../assets/Images/p1.jpg\" class=\"image-profile\">\n\n      </div>\n\n      <div class=\"data-member-grid\">\n        <p class=\"name card-item\">Lorem</p>\n        <ion-label class=\"hobbies card-item \"><span class=\"left-heading\">Activities:&nbsp;</span>Lorem1,Lorem2...\n        </ion-label>\n        <p class=\"distance card-item\"><span class=\"left-heading\">Distance:</span>1 miles away</p>\n\n      </div>\n<img src=\"../../assets/Images/favorite.png\" class=\"blue-star\">\n    </div>\n\n\n\n\n\n    <div class=\"members-grid\">\n\n      <div class=\"photo-member-grid\">\n        <img src=\"../../assets/Images/p1.jpg\" class=\"image-profile\">\n\n      </div>\n\n      <div class=\"data-member-grid\">\n        <p class=\"name card-item\">Lorem</p>\n        <ion-label class=\"hobbies card-item \"><span class=\"left-heading\">Activities:&nbsp;</span>Lorem1,Lorem2...\n        </ion-label>\n        <p class=\"distance card-item\"><span class=\"left-heading\">Distance:</span>1 miles away</p>\n\n      </div>\n      <img src=\"../../assets/Images/favorite.png\" class=\"blue-star\">\n    </div>\n\n    <div class=\"members-grid\">\n\n      <div class=\"photo-member-grid\">\n        <img src=\"../../assets/Images/p1.jpg\" class=\"image-profile\">\n\n      </div>\n\n      <div class=\"data-member-grid\">\n        <p class=\"name card-item\">Lorem</p>\n        <ion-label class=\"hobbies card-item \"><span class=\"left-heading\">Activities:&nbsp;</span>Lorem1,Lorem2...\n        </ion-label>\n        <p class=\"distance card-item\"><span class=\"left-heading\">Distance:</span>1 miles away</p>\n\n      </div>\n      <img src=\"../../assets/Images/favorite.png\" class=\"blue-star\">\n    </div>\n\n  </div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".members-grid {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  justify-content: center;\n  align-content: center;\n  border: 1px solid;\n  margin: 1em;\n}\n\n.data-member-grid {\n  margin-left: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\np {\n  margin-bottom: 1em;\n  font-size: 17px;\n}\n\n.background {\n  margin-top: 7em;\n}\n\n.blue-star {\n  position: absolute;\n  width: 7%;\n  margin: 4px;\n}\n\np {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9nb2QvTWFpbiBEYXRhL0FuZ3VsYXIgUHJvamVjdC9ub3Q0RGF0aW5nL3NyYy9hcHAvdGFiczMvdGFiczMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzMy90YWJzMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDRUo7O0FEQUE7RUFFSSxrQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNJSjs7QURGQTtFQUVJLGtCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC90YWJzMy90YWJzMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVtYmVycy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgbWFyZ2luOiAxZW07XG59XG4uZGF0YS1tZW1iZXItZ3JpZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5wXG57XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn0gXG4uYmFja2dyb3VuZCB7XG4gICAgbWFyZ2luLXRvcDogN2VtO1xufVxuLmJsdWUtc3RhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3JTtcbiAgICBtYXJnaW46IDRweDtcbn1cbnBcbntcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59IiwiLm1lbWJlcnMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbjogMWVtO1xufVxuXG4uZGF0YS1tZW1iZXItZ3JpZCB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgbWFyZ2luLXRvcDogN2VtO1xufVxuXG4uYmx1ZS1zdGFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNyU7XG4gIG1hcmdpbjogNHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufSJdfQ== */");

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


let Tabs3Page = class Tabs3Page {
    constructor() { }
    ngOnInit() {
    }
};
Tabs3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs3/tabs3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs3.page.scss */ "./src/app/tabs3/tabs3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tabs3Page);



/***/ })

}]);
//# sourceMappingURL=tabs3-tabs3-module-es2015.js.map