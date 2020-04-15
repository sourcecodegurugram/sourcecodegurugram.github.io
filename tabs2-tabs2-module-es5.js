function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs2-tabs2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs2/tabs2.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs2/tabs2.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabs2Tabs2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content class=\"background-card\">\n  <div class=\"main-content-chat\">\n  <div class=\"chat-grid\" routerLink=\"/personal-chat\">\n    <div class=\"image\">\n      <img src=\"../../assets/Images/user_-6.png\" class=\"image-chat\">\n    </div>\n\n    <div class=\"name\">\n      <p class=\"chat-name\">Vibrant_chef</p>\n      <p class=\"last-chat\">How are you</p>\n    </div>\n\n    <div class=\"time\">\n      <p class=\"time-text\">6:45Pm</p>\n    </div>\n  </div>\n  <div class=\"chat-grid\">\n    <div class=\"image\">\n      <img src=\"../../assets/Images/user_-10.png\" class=\"image-chat\">\n    </div>\n\n    <div class=\"name\">\n      <p class=\"chat-name\">Ibrahim</p>\n      <p class=\"last-chat\">Lets meet tomorrow at 8</p>\n    </div>\n\n    <div class=\"time\">\n      <p class=\"time-text\">4:45Pm</p>\n    </div>\n  </div>\n  <div class=\"chat-grid\">\n    <div class=\"image\">\n      <img src=\"../../assets/Images/user_-11.png\" class=\"image-chat\">\n    </div>\n\n    <div class=\"name\">\n      <p class=\"chat-name\">dedrick96</p>\n      <p class=\"last-chat\">I have similar taste in movies  as you</p>\n    </div>\n\n    <div class=\"time\">\n      <p class=\"time-text\">4:45Pm</p>\n    </div>\n  </div>\n</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tabs2/tabs2-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/tabs2/tabs2-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: Tabs2PageRoutingModule */

  /***/
  function srcAppTabs2Tabs2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabs2PageRoutingModule", function () {
      return Tabs2PageRoutingModule;
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


    var _tabs2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs2.page */
    "./src/app/tabs2/tabs2.page.ts");

    var routes = [{
      path: '',
      component: _tabs2_page__WEBPACK_IMPORTED_MODULE_3__["Tabs2Page"]
    }];

    var Tabs2PageRoutingModule = function Tabs2PageRoutingModule() {
      _classCallCheck(this, Tabs2PageRoutingModule);
    };

    Tabs2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tabs2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs2/tabs2.module.ts":
  /*!***************************************!*\
    !*** ./src/app/tabs2/tabs2.module.ts ***!
    \***************************************/

  /*! exports provided: Tabs2PageModule */

  /***/
  function srcAppTabs2Tabs2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabs2PageModule", function () {
      return Tabs2PageModule;
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


    var _tabs2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs2-routing.module */
    "./src/app/tabs2/tabs2-routing.module.ts");
    /* harmony import */


    var _tabs2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs2.page */
    "./src/app/tabs2/tabs2.page.ts");

    var Tabs2PageModule = function Tabs2PageModule() {
      _classCallCheck(this, Tabs2PageModule);
    };

    Tabs2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tabs2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tabs2PageRoutingModule"]],
      declarations: [_tabs2_page__WEBPACK_IMPORTED_MODULE_6__["Tabs2Page"]]
    })], Tabs2PageModule);
    /***/
  },

  /***/
  "./src/app/tabs2/tabs2.page.scss":
  /*!***************************************!*\
    !*** ./src/app/tabs2/tabs2.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabs2Tabs2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chat-grid {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  align-items: unset;\n  grid-gap: 0px;\n  margin: 1em;\n  align-items: center;\n  align-content: center;\n}\n\np.chat-name {\n  margin-bottom: 0px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 2%;\n}\n\np.last-chat {\n  margin-bottom: 0px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.main-content-chat {\n  padding-top: 6em !important;\n}\n\n.background-card {\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiczIvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxcdGFiczJcXHRhYnMyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiczIvdGFiczIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERBO0VBRUksMkJBQUE7QUNHSjs7QUREQTtFQUVJLGtDQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC90YWJzMi90YWJzMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xyXG4gICAgYWxpZ24taXRlbXM6IHVuc2V0O1xyXG4gICAgZ3JpZC1nYXA6IDBweDtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5wLmNoYXQtbmFtZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcbnAubGFzdC1jaGF0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLm1haW4tY29udGVudC1jaGF0XHJcbntcclxuICAgIHBhZGRpbmctdG9wOiA2ZW0gIWltcG9ydGFudDtcclxufVxyXG4uYmFja2dyb3VuZC1jYXJkXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmNoYXQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XG4gIGFsaWduLWl0ZW1zOiB1bnNldDtcbiAgZ3JpZC1nYXA6IDBweDtcbiAgbWFyZ2luOiAxZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxucC5jaGF0LW5hbWUge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxucC5sYXN0LWNoYXQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYWluLWNvbnRlbnQtY2hhdCB7XG4gIHBhZGRpbmctdG9wOiA2ZW0gIWltcG9ydGFudDtcbn1cblxuLmJhY2tncm91bmQtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tabs2/tabs2.page.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs2/tabs2.page.ts ***!
    \*************************************/

  /*! exports provided: Tabs2Page */

  /***/
  function srcAppTabs2Tabs2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabs2Page", function () {
      return Tabs2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Tabs2Page = /*#__PURE__*/function () {
      function Tabs2Page() {
        _classCallCheck(this, Tabs2Page);
      }

      _createClass(Tabs2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Tabs2Page;
    }();

    Tabs2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs2/tabs2.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs2.page.scss */
      "./src/app/tabs2/tabs2.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Tabs2Page);
    /***/
  }
}]);
//# sourceMappingURL=tabs2-tabs2-module-es5.js.map