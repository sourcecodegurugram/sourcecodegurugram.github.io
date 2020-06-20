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
/* harmony default export */ __webpack_exports__["default"] = (".members-grid {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  justify-content: center;\n  align-content: center;\n  border: 1px solid;\n  margin: 1em;\n}\n\n.data-member-grid {\n  margin-left: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-right: 1em;\n}\n\np {\n  margin-bottom: 1em;\n  font-size: 17px;\n}\n\np {\n  margin-bottom: 0px;\n}\n\nimg.image-profile {\n  height: 16vh;\n  width: 100%;\n}\n\n.hobbies {\n  font-family: \"Open Sans\", sans-serif;\n  /* font-style: normal; */\n  /* display: block; */\n  display: -webkit-box;\n  /* max-width: 100%; */\n  /* height: 43px; */\n  /* margin: 0 auto; */\n  font-size: 14px;\n  /* line-height: 1; */\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTmF2aWdhdGlvbi9ibG9ja2VkdXNlcnMvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxcTmF2aWdhdGlvblxcYmxvY2tlZHVzZXJzXFxibG9ja2VkdXNlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9OYXZpZ2F0aW9uL2Jsb2NrZWR1c2Vycy9ibG9ja2VkdXNlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksb0NBQUE7RUFHQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvTmF2aWdhdGlvbi9ibG9ja2VkdXNlcnMvYmxvY2tlZHVzZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW1iZXJzLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW46IDFlbTtcclxufVxyXG5cclxuLmRhdGEtbWVtYmVyLWdyaWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcblxyXG5wIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuaW1nLmltYWdlLXByb2ZpbGUge1xyXG4gICAgaGVpZ2h0OiAxNnZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ob2JiaWVzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJyxcclxuICAgICAgICBzYW5zLXNlcmlmO1xyXG5cclxuICAgIC8qIGZvbnQtc3R5bGU6IG5vcm1hbDsgKi9cclxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAvKiBtYXgtd2lkdGg6IDEwMCU7ICovXHJcbiAgICAvKiBoZWlnaHQ6IDQzcHg7ICovXHJcbiAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC8qIGxpbmUtaGVpZ2h0OiAxOyAqL1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufSIsIi5tZW1iZXJzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW46IDFlbTtcbn1cblxuLmRhdGEtbWVtYmVyLWdyaWQge1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuaW1nLmltYWdlLXByb2ZpbGUge1xuICBoZWlnaHQ6IDE2dmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaG9iYmllcyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAvKiBmb250LXN0eWxlOiBub3JtYWw7ICovXG4gIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLyogbWF4LXdpZHRoOiAxMDAlOyAqL1xuICAvKiBoZWlnaHQ6IDQzcHg7ICovXG4gIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xuICBmb250LXNpemU6IDE0cHg7XG4gIC8qIGxpbmUtaGVpZ2h0OiAxOyAqL1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */");

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