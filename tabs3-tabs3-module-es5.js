function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs3-tabs3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs3/tabs3.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs3/tabs3.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabs3Tabs3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"background\">\r\n    <div class=\"members-grid\" *ngFor=\"let favorite of ParseFavorate\" routerLink=\"/favorate-popup/{{favorite[0].uid}}\">\r\n      <div class=\"photo-member-grid\">\r\n        <img src={{favorite[0].picture}} class=\"image-profile\">\r\n      </div>\r\n      <div class=\"data-member-grid\">\r\n        <p class=\"name card-item\">{{favorite[0].name}}</p>\r\n        <ion-label class=\"hobbies card-item \"  ><span class=\"left-heading\">Activities:&nbsp;</span>{{favorite[0].activities.value}}....\r\n        </ion-label>\r\n        <p class=\"distance card-item\"><span class=\"left-heading\">Distance:</span>1 miles away</p>\r\n      </div>\r\n      <img src=\"../../assets/Images/favorite.png\" class=\"blue-star\">\r\n    </div>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tabs3/tabs3-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/tabs3/tabs3-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: Tabs3PageRoutingModule */

  /***/
  function srcAppTabs3Tabs3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabs3PageRoutingModule", function () {
      return Tabs3PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tabs3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs3.page */
    "./src/app/tabs3/tabs3.page.ts");

    var routes = [{
      path: '',
      component: _tabs3_page__WEBPACK_IMPORTED_MODULE_3__["Tabs3Page"]
    }];

    var Tabs3PageRoutingModule = function Tabs3PageRoutingModule() {
      _classCallCheck(this, Tabs3PageRoutingModule);
    };

    Tabs3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tabs3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs3/tabs3.module.ts":
  /*!***************************************!*\
    !*** ./src/app/tabs3/tabs3.module.ts ***!
    \***************************************/

  /*! exports provided: Tabs3PageModule */

  /***/
  function srcAppTabs3Tabs3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabs3PageModule", function () {
      return Tabs3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _tabs3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs3-routing.module */
    "./src/app/tabs3/tabs3-routing.module.ts");
    /* harmony import */


    var _navigationbar_navigationbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../navigationbar/navigationbar.module */
    "./src/app/navigationbar/navigationbar.module.ts");
    /* harmony import */


    var _tabs3_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tabs3.page */
    "./src/app/tabs3/tabs3.page.ts");

    var Tabs3PageModule = function Tabs3PageModule() {
      _classCallCheck(this, Tabs3PageModule);
    };

    Tabs3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tabs3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tabs3PageRoutingModule"], _navigationbar_navigationbar_module__WEBPACK_IMPORTED_MODULE_6__["NavigationbarModule"]],
      declarations: [_tabs3_page__WEBPACK_IMPORTED_MODULE_7__["Tabs3Page"]]
    })], Tabs3PageModule);
    /***/
  },

  /***/
  "./src/app/tabs3/tabs3.page.scss":
  /*!***************************************!*\
    !*** ./src/app/tabs3/tabs3.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabs3Tabs3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".members-grid {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  justify-content: center;\n  align-content: center;\n  border: 1px solid;\n  margin: 1em;\n}\n\n.data-member-grid {\n  margin-left: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\np {\n  margin-bottom: 1em;\n  font-size: 17px;\n}\n\n.blue-star {\n  position: absolute;\n  width: 7%;\n  margin: 4px;\n}\n\np {\n  margin-bottom: 0px;\n}\n\nimg.image-profile {\n  height: 16vh;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiczMvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxcdGFiczNcXHRhYnMzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiczMvdGFiczMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0VKOztBREFBO0VBRUksa0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUE7RUFFSSxrQkFBQTtBQ0FKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RhYnMzL3RhYnMzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW1iZXJzLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW46IDFlbTtcclxufVxyXG4uZGF0YS1tZW1iZXItZ3JpZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5wXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufSBcclxuLy8gLmJhY2tncm91bmQge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogN2VtO1xyXG4vLyB9XHJcbi5ibHVlLXN0YXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDclO1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbn1cclxucFxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuaW1nLmltYWdlLXByb2ZpbGUge1xyXG4gICAgaGVpZ2h0OiAxNnZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iLCIubWVtYmVycy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5kYXRhLW1lbWJlci1ncmlkIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmJsdWUtc3RhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDclO1xuICBtYXJnaW46IDRweDtcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuaW1nLmltYWdlLXByb2ZpbGUge1xuICBoZWlnaHQ6IDE2dmg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tabs3/tabs3.page.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs3/tabs3.page.ts ***!
    \*************************************/

  /*! exports provided: Tabs3Page */

  /***/
  function srcAppTabs3Tabs3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabs3Page", function () {
      return Tabs3Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var Tabs3Page = /*#__PURE__*/function () {
      function Tabs3Page(http) {
        _classCallCheck(this, Tabs3Page);

        this.http = http;
      }

      _createClass(Tabs3Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.itrs = JSON.parse(localStorage.getItem("currentUser"));
          this.http.get('https://gowebtutorial.com/api/json/user/' + this.itrs.user.uid).subscribe(function (users) {
            _this.allfavorate = users;
            _this.listFavorate = _this.allfavorate.field_favorite_users.und[0].value;
            _this.ParseFavorate = JSON.parse(_this.listFavorate);
            console.log(_this.ParseFavorate);
          });
        }
      }]);

      return Tabs3Page;
    }();

    Tabs3Page.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    Tabs3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs3/tabs3.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs3.page.scss */
      "./src/app/tabs3/tabs3.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], Tabs3Page);
    /***/
  }
}]);
//# sourceMappingURL=tabs3-tabs3-module-es5.js.map