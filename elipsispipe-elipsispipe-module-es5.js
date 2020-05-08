function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["elipsispipe-elipsispipe-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/elipsispipe/elipsispipe.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elipsispipe/elipsispipe.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppElipsispipeElipsispipePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>elipsispipe</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/elipsispipe/elipsispipe-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/elipsispipe/elipsispipe-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ElipsispipePageRoutingModule */

  /***/
  function srcAppElipsispipeElipsispipeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElipsispipePageRoutingModule", function () {
      return ElipsispipePageRoutingModule;
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


    var _elipsispipe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./elipsispipe.page */
    "./src/app/elipsispipe/elipsispipe.page.ts");

    var routes = [{
      path: '',
      component: _elipsispipe_page__WEBPACK_IMPORTED_MODULE_3__["ElipsispipePage"]
    }];

    var ElipsispipePageRoutingModule = function ElipsispipePageRoutingModule() {
      _classCallCheck(this, ElipsispipePageRoutingModule);
    };

    ElipsispipePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ElipsispipePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/elipsispipe/elipsispipe.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/elipsispipe/elipsispipe.module.ts ***!
    \***************************************************/

  /*! exports provided: ElipsispipePageModule */

  /***/
  function srcAppElipsispipeElipsispipeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElipsispipePageModule", function () {
      return ElipsispipePageModule;
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


    var _elipsispipe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./elipsispipe-routing.module */
    "./src/app/elipsispipe/elipsispipe-routing.module.ts");
    /* harmony import */


    var _elipsispipe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./elipsispipe.page */
    "./src/app/elipsispipe/elipsispipe.page.ts");

    var ElipsispipePageModule = function ElipsispipePageModule() {
      _classCallCheck(this, ElipsispipePageModule);
    };

    ElipsispipePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _elipsispipe_routing_module__WEBPACK_IMPORTED_MODULE_5__["ElipsispipePageRoutingModule"]],
      declarations: [_elipsispipe_page__WEBPACK_IMPORTED_MODULE_6__["ElipsispipePage"]]
    })], ElipsispipePageModule);
    /***/
  },

  /***/
  "./src/app/elipsispipe/elipsispipe.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/elipsispipe/elipsispipe.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppElipsispipeElipsispipePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsaXBzaXNwaXBlL2VsaXBzaXNwaXBlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/elipsispipe/elipsispipe.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/elipsispipe/elipsispipe.page.ts ***!
    \*************************************************/

  /*! exports provided: ElipsispipePage */

  /***/
  function srcAppElipsispipeElipsispipePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElipsispipePage", function () {
      return ElipsispipePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ElipsispipePage = /*#__PURE__*/function () {
      function ElipsispipePage() {
        _classCallCheck(this, ElipsispipePage);
      }

      _createClass(ElipsispipePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ElipsispipePage;
    }();

    ElipsispipePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-elipsispipe',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./elipsispipe.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/elipsispipe/elipsispipe.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./elipsispipe.page.scss */
      "./src/app/elipsispipe/elipsispipe.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ElipsispipePage);
    /***/
  }
}]);
//# sourceMappingURL=elipsispipe-elipsispipe-module-es5.js.map