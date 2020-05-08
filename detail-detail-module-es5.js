function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"background\">\n<div class=\"container-card\">\n\n  <div class=\"picture\">\n\n    <img src=\"{{picture}}\" class=\"picture\">\n    <p class=\"name-output\">{{name}}</p>\n  \n  </div>\n\n\n    <ion-card class=\"subscribe-card\">\n      <div class=\"membership\">\n        <div class=\"name\">Mail</div>\n        <div class=\"name-output\">{{mail}}</div>\n\n        \n      </div>\n      </ion-card>\n\n      <ion-card class=\"subscribe-card\">\n        <div class=\"membership\">\n          <div class=\"name\">Gender</div>\n          <div class=\"name-output\">{{gender}}</div>\n        </div>\n        </ion-card>\n\n\n        <ion-card class=\"subscribe-card\" *ngIf=\"books\">\n          <div class=\"membership\">\n            <div class=\"name\">Favorate Books</div>\n            <div class=\"name-output\">{{books}}</div>\n          </div>\n          </ion-card>\n\n          <ion-card class=\"subscribe-card\" *ngIf=\"actvities\">\n            <div class=\"membership\">\n              <div class=\"name\">Activities/Interests</div>\n              <div class=\"name-output\">{{actvities}}</div>\n            </div>\n            </ion-card>\n            <ion-card class=\"subscribe-card\" *ngIf=\"meet\">\n              <div class=\"membership\">\n                <div class=\"name\">I'm Looking To Meet:</div>\n                <div class=\"name-output\">{{meet}}</div>\n              </div>\n              </ion-card>\n              <ion-card class=\"subscribe-card\" *ngIf=\"status\">\n                <div class=\"membership\">\n                  <div class=\"name\">Relationship Status:</div>\n                  <div class=\"name-output\">{{status}}</div>\n                </div>\n                </ion-card>\n              \n                <ion-card class=\"subscribe-card\" *ngIf=\"long\">\n                  <div class=\"membership\">\n                    <div class=\"name\">How Long Have You Lived In The Area?</div>\n                    <div class=\"name-output\">{{long}}</div>\n                  </div>\n                  </ion-card>\n\n\n                  <ion-card class=\"subscribe-card\" *ngIf=\"edu\">\n                    <div class=\"membership\">\n                      <div class=\"name\">Education Level</div>\n                      <div class=\"name-output\">{{edu}}</div>\n                    </div>\n                    </ion-card>\n                  \n                \n\n                    <ion-card class=\"subscribe-card\" *ngIf=\"smoke\">\n                      <div class=\"membership\">\n                        <div class=\"name\">How Often Do You Smoke?:</div>\n                        <div class=\"name-output\">{{smoke}}</div>\n                      </div>\n                      </ion-card>\n\n\n                    \n\n                      \n                    \n  </div>\n\n\n\n\n</div>";
    /***/
  },

  /***/
  "./src/app/detail/detail-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/detail/detail-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: DetailPageRoutingModule */

  /***/
  function srcAppDetailDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function () {
      return DetailPageRoutingModule;
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


    var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detail.page */
    "./src/app/detail/detail.page.ts");

    var routes = [{
      path: '',
      component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    }];

    var DetailPageRoutingModule = function DetailPageRoutingModule() {
      _classCallCheck(this, DetailPageRoutingModule);
    };

    DetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/detail/detail.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/detail/detail.module.ts ***!
    \*****************************************/

  /*! exports provided: DetailPageModule */

  /***/
  function srcAppDetailDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPageModule", function () {
      return DetailPageModule;
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


    var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detail-routing.module */
    "./src/app/detail/detail-routing.module.ts");
    /* harmony import */


    var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail.page */
    "./src/app/detail/detail.page.ts");

    var DetailPageModule = function DetailPageModule() {
      _classCallCheck(this, DetailPageModule);
    };

    DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]],
      declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })], DetailPageModule);
    /***/
  },

  /***/
  "./src/app/detail/detail.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/detail/detail.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\n.container-card {\n  margin-top: 13vh;\n}\n\n.membership {\n  display: flex;\n  flex-direction: row;\n  /* justify-content: space-around; */\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.picture {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 19vh;\n  flex-direction: column;\n  margin-top: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL0s6XFxBbmd1bGFyIFByb2plY3RcXG5vdDREYXRpbmcvc3JjXFxhcHBcXGRldGFpbFxcZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFQTtFQUVJLGdCQUFBO0FDQUo7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL0ltYWdlcy9CYWNrZ3JvdW5kVGlsZS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4uY29udGFpbmVyLWNhcmRcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMTN2aDtcclxufVxyXG4ubWVtYmVyc2hpcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4ucGljdHVyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxOXZoO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgXHJcbn0iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9JbWFnZXMvQmFja2dyb3VuZFRpbGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5jb250YWluZXItY2FyZCB7XG4gIG1hcmdpbi10b3A6IDEzdmg7XG59XG5cbi5tZW1iZXJzaGlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7ICovXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnBpY3R1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxOXZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/detail/detail.page.ts":
  /*!***************************************!*\
    !*** ./src/app/detail/detail.page.ts ***!
    \***************************************/

  /*! exports provided: DetailPage */

  /***/
  function srcAppDetailDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPage", function () {
      return DetailPage;
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


    var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../config.service */
    "./src/app/config.service.ts");

    var DetailPage = /*#__PURE__*/function () {
      function DetailPage(_Activatedroute, ConfigService) {
        _classCallCheck(this, DetailPage);

        this._Activatedroute = _Activatedroute;
        this.ConfigService = ConfigService;
        this.postman = {};
      }

      _createClass(DetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.name = params.get("name");
            _this.mail = params.get("mail");
            _this.uid = params.get("uid");
          });
          this.ConfigService.getUser(this.uid).subscribe(function (data) {
            _this.post = data;
            console.log(_this.post);
            _this.picture = _this.post.picture.url;
            _this["long"] = _this.post.field_long_in_city.length;
            _this.gender = _this.post.field_gender.und[0].value;
            _this.books = _this.post.field_favorite_books.und[0].value;
            _this.actvities = _this.post.field_activities_interests.und[0].value;
            _this.meet = _this.post.field_look_meet.und[0].value;
            _this.status = _this.post.field_relationship_status.und[0].value;
            _this.edu = _this.post.field_education_level.und[0].value;
            _this.smoke = _this.post.field_smoke.und[0].value;
            console.log(_this.status);
          });
        }
      }]);

      return DetailPage;
    }();

    DetailPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }];
    };

    DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detail.page.scss */
      "./src/app/detail/detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], DetailPage);
    /***/
  }
}]);
//# sourceMappingURL=detail-detail-module-es5.js.map