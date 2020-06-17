(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs3-tabs3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs3/tabs3.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs3/tabs3.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"background\">\r\n    <div class=\"members-grid\" *ngFor=\"let favorite of uniqueFavorite\" routerLink=\"/favorate-popup/{{favorite[0].uid}}\">\r\n      <div class=\"photo-member-grid\">\r\n        <img src={{favorite[0].picture}} class=\"image-profile\">\r\n      </div>\r\n      <div class=\"data-member-grid\">\r\n        <p class=\"name card-item\">{{favorite[0].name}}</p>\r\n        <ion-label class=\"hobbies card-item \"><span class=\"left-heading\">Activities:&nbsp;</span><span\r\n            class=\"activities_values\" *ngFor=\"let activity of favorite[0].activities\">\r\n            {{activity.value}}\r\n          </span>.\r\n        </ion-label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>");

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
/* harmony import */ var _navigationbar_navigationbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navigationbar/navigationbar.module */ "./src/app/navigationbar/navigationbar.module.ts");
/* harmony import */ var _tabs3_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs3.page */ "./src/app/tabs3/tabs3.page.ts");








let Tabs3PageModule = class Tabs3PageModule {
};
Tabs3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tabs3PageRoutingModule"],
            _navigationbar_navigationbar_module__WEBPACK_IMPORTED_MODULE_6__["NavigationbarModule"]
        ],
        declarations: [_tabs3_page__WEBPACK_IMPORTED_MODULE_7__["Tabs3Page"]]
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
/* harmony default export */ __webpack_exports__["default"] = (".members-grid {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  justify-content: center;\n  align-content: center;\n  border: 1px solid;\n  margin: 1em;\n}\n\n.data-member-grid {\n  margin-left: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-right: 1em;\n}\n\np {\n  margin-bottom: 1em;\n  font-size: 17px;\n}\n\np {\n  margin-bottom: 0px;\n}\n\nimg.image-profile {\n  height: 16vh;\n  width: 100%;\n}\n\n.hobbies {\n  font-family: \"Open Sans\", sans-serif;\n  /* font-style: normal; */\n  /* display: block; */\n  display: -webkit-box;\n  /* max-width: 100%; */\n  /* height: 43px; */\n  /* margin: 0 auto; */\n  font-size: 14px;\n  /* line-height: 1; */\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiczMvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxcdGFiczNcXHRhYnMzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiczMvdGFiczMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksb0NBQUE7RUFHQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvdGFiczMvdGFiczMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbWJlcnMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcblxyXG4uZGF0YS1tZW1iZXItZ3JpZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5pbWcuaW1hZ2UtcHJvZmlsZSB7XHJcbiAgICBoZWlnaHQ6IDE2dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhvYmJpZXMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLFxyXG4gICAgICAgIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgLyogZm9udC1zdHlsZTogbm9ybWFsOyAqL1xyXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC8qIG1heC13aWR0aDogMTAwJTsgKi9cclxuICAgIC8qIGhlaWdodDogNDNweDsgKi9cclxuICAgIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLyogbGluZS1oZWlnaHQ6IDE7ICovXHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59IiwiLm1lbWJlcnMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbjogMWVtO1xufVxuXG4uZGF0YS1tZW1iZXItZ3JpZCB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5pbWcuaW1hZ2UtcHJvZmlsZSB7XG4gIGhlaWdodDogMTZ2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ob2JiaWVzIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIC8qIGZvbnQtc3R5bGU6IG5vcm1hbDsgKi9cbiAgLyogZGlzcGxheTogYmxvY2s7ICovXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAvKiBtYXgtd2lkdGg6IDEwMCU7ICovXG4gIC8qIGhlaWdodDogNDNweDsgKi9cbiAgLyogbWFyZ2luOiAwIGF1dG87ICovXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLyogbGluZS1oZWlnaHQ6IDE7ICovXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59Il19 */");

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
        this.http
            .get("https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid)
            .subscribe((users) => {
            this.allfavorate = users;
            this.listFavorate = this.allfavorate.field_favorite_users.und[0].value;
            this.ParseFavorate = JSON.parse(this.listFavorate);
            this.uniqueFavorite = this.removeDuplicatesBy((x) => x[0].name, this.ParseFavorate);
            console.log(this.uniqueFavorite);
            console.log(this.ParseFavorate);
        });
    }
    removeDuplicatesBy(keyFn, array) {
        var mySet = new Set();
        return array.filter(function (x) {
            var key = keyFn(x), isNew = !mySet.has(key);
            if (isNew)
                mySet.add(key);
            return isNew;
        });
    }
};
Tabs3Page.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
Tabs3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-tabs3",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs3/tabs3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs3.page.scss */ "./src/app/tabs3/tabs3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], Tabs3Page);



/***/ })

}]);
//# sourceMappingURL=tabs3-tabs3-module-es2015.js.map