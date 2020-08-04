(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Navigation-blockedusers-blockedusers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/blockedusers/blockedusers.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/blockedusers/blockedusers.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-navigationbar></app-navigationbar>\n</ion-header>\n<ion-content>\n  <div class=\"background\">\n    <div class=\"members-grid\" *ngFor=\"let favorite of uniqueFavorite\" routerLink=\"/popup/{{favorite[0].uid}}\">\n      <div class=\"photo-member-grid\">\n        <img src={{favorite[0].picture}} class=\"image-profile\">\n      </div>\n      <div class=\"data-member-grid\">\n        <p class=\"name card-item\">{{favorite[0].name}}</p>\n        <ion-label class=\"hobbies card-item \"><span class=\"left-heading\">Activities:&nbsp;</span><span\n            class=\"activities_values\" *ngFor=\"let activity of favorite[0].activities\">\n            {{activity.value}}\n          </span>.\n        </ion-label>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Navigation/blockedusers/blockedusers-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/Navigation/blockedusers/blockedusers-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: BlockedusersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockedusersPageRoutingModule", function() { return BlockedusersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _blockedusers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blockedusers.page */ "./src/app/Navigation/blockedusers/blockedusers.page.ts");




const routes = [
    {
        path: '',
        component: _blockedusers_page__WEBPACK_IMPORTED_MODULE_3__["BlockedusersPage"]
    }
];
let BlockedusersPageRoutingModule = class BlockedusersPageRoutingModule {
};
BlockedusersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BlockedusersPageRoutingModule);



/***/ }),

/***/ "./src/app/Navigation/blockedusers/blockedusers.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/Navigation/blockedusers/blockedusers.module.ts ***!
  \****************************************************************/
/*! exports provided: BlockedusersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockedusersPageModule", function() { return BlockedusersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _blockedusers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blockedusers-routing.module */ "./src/app/Navigation/blockedusers/blockedusers-routing.module.ts");
/* harmony import */ var _NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../NavigationBar/navigationbar.module */ "./src/app/Navigation/NavigationBar/navigationbar.module.ts");
/* harmony import */ var _blockedusers_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blockedusers.page */ "./src/app/Navigation/blockedusers/blockedusers.page.ts");








let BlockedusersPageModule = class BlockedusersPageModule {
};
BlockedusersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_6__["NavigationbarModule"],
            _blockedusers_routing_module__WEBPACK_IMPORTED_MODULE_5__["BlockedusersPageRoutingModule"]
        ],
        declarations: [_blockedusers_page__WEBPACK_IMPORTED_MODULE_7__["BlockedusersPage"]]
    })
], BlockedusersPageModule);



/***/ }),

/***/ "./src/app/Navigation/blockedusers/blockedusers.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/Navigation/blockedusers/blockedusers.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".members-grid {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  justify-content: center;\n  align-content: center;\n  border: 1px solid;\n  margin: 1em;\n}\n\n.data-member-grid {\n  margin-left: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-right: 1em;\n}\n\np {\n  margin-bottom: 1em;\n  font-size: 17px;\n}\n\np {\n  margin-bottom: 0px;\n}\n\nimg.image-profile {\n  height: 16vh;\n  width: 100%;\n}\n\n.hobbies {\n  font-family: \"Open Sans\", sans-serif;\n  /* font-style: normal; */\n  /* display: block; */\n  display: -webkit-box;\n  /* max-width: 100%; */\n  /* height: 43px; */\n  /* margin: 0 auto; */\n  font-size: 14px;\n  /* line-height: 1; */\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvTmF2aWdhdGlvbi9ibG9ja2VkdXNlcnMvYmxvY2tlZHVzZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvTmF2aWdhdGlvbi9ibG9ja2VkdXNlcnMvYmxvY2tlZHVzZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLG9DQUFBO0VBR0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL05hdmlnYXRpb24vYmxvY2tlZHVzZXJzL2Jsb2NrZWR1c2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVtYmVycy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbn1cclxuXHJcbi5kYXRhLW1lbWJlci1ncmlkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5cclxucCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbmltZy5pbWFnZS1wcm9maWxlIHtcclxuICAgIGhlaWdodDogMTZ2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaG9iYmllcyB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsXHJcbiAgICAgICAgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAvKiBmb250LXN0eWxlOiBub3JtYWw7ICovXHJcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLyogbWF4LXdpZHRoOiAxMDAlOyAqL1xyXG4gICAgLyogaGVpZ2h0OiA0M3B4OyAqL1xyXG4gICAgLyogbWFyZ2luOiAwIGF1dG87ICovXHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAvKiBsaW5lLWhlaWdodDogMTsgKi9cclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn0iLCIubWVtYmVycy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5kYXRhLW1lbWJlci1ncmlkIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmltZy5pbWFnZS1wcm9maWxlIHtcbiAgaGVpZ2h0OiAxNnZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhvYmJpZXMge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgLyogZm9udC1zdHlsZTogbm9ybWFsOyAqL1xuICAvKiBkaXNwbGF5OiBibG9jazsgKi9cbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIG1heC13aWR0aDogMTAwJTsgKi9cbiAgLyogaGVpZ2h0OiA0M3B4OyAqL1xuICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cbiAgZm9udC1zaXplOiAxNHB4O1xuICAvKiBsaW5lLWhlaWdodDogMTsgKi9cbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Navigation/blockedusers/blockedusers.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/Navigation/blockedusers/blockedusers.page.ts ***!
  \**************************************************************/
/*! exports provided: BlockedusersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockedusersPage", function() { return BlockedusersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BlockedusersPage = class BlockedusersPage {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.itrs = JSON.parse(localStorage.getItem("currentUser"));
        this.http
            .get("https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid)
            .subscribe((users) => {
            this.allfavorate = users;
            this.listFavorate = this.allfavorate.field_block_users.und[0].value;
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
BlockedusersPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BlockedusersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blockedusers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blockedusers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/blockedusers/blockedusers.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blockedusers.page.scss */ "./src/app/Navigation/blockedusers/blockedusers.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], BlockedusersPage);



/***/ })

}]);
//# sourceMappingURL=Navigation-blockedusers-blockedusers-module-es2015.js.map