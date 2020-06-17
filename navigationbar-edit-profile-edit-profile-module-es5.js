function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigationbar-edit-profile-edit-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigationbar/edit-profile/edit-profile.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigationbar/edit-profile/edit-profile.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationbarEditProfileEditProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"main-background\">\n\n  <div class=\"second-background\">\n\n  <div class=\"modal-grid\">\n\n    <div class=\"profile-picture-modal\">\n      <img src=\"../../assets/Images/p1.jpg\" class=\"image-profile\">\n\n    </div>\n\n    <div class=\"profile-name-modal\">\n      <span class=\"name\">{{name}}</span>\n      <span class=\"not-verified\">Verified</span>\n    </div>\n    <img src=\"../../assets/Images/cross.png\" class=\"cross-image\" (click)=\"backClicked()\">\n  </div>\n\n  <div class=\"sidebar-content\">\n    <p class=\"detail-data\">FullName:<br><span class=\"output-text\">{{fname}} {{lname}}</span></p>\n    <p class=\"detail-data\">Activities:<br><span class=\"output-text\"\n        *ngFor=\"let actvities of activity\">{{actvities.value | slice:3:5}}</span></p>\n    <p class=\"detail-data\">Email:<br><span class=\"output-text\">{{Email}}</span></p>\n    <p class=\"detail-data\">Date of Birth:<br><span class=\"output-text\">{{DOB}}</span></p>\n    <p class=\"detail-data\">Languages:<br><span class=\"output-text\">Hindi,English</span></p>\n  </div>\n  <div class=\"continue-button\">\n    Add More Info\n  </div>\n\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/navigationbar/edit-profile/edit-profile-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/navigationbar/edit-profile/edit-profile-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: EditProfilePageRoutingModule */

  /***/
  function srcAppNavigationbarEditProfileEditProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function () {
      return EditProfilePageRoutingModule;
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


    var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-profile.page */
    "./src/app/navigationbar/edit-profile/edit-profile.page.ts");

    var routes = [{
      path: '',
      component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
    }];

    var EditProfilePageRoutingModule = function EditProfilePageRoutingModule() {
      _classCallCheck(this, EditProfilePageRoutingModule);
    };

    EditProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/navigationbar/edit-profile/edit-profile.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/navigationbar/edit-profile/edit-profile.module.ts ***!
    \*******************************************************************/

  /*! exports provided: EditProfilePageModule */

  /***/
  function srcAppNavigationbarEditProfileEditProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function () {
      return EditProfilePageModule;
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


    var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-profile-routing.module */
    "./src/app/navigationbar/edit-profile/edit-profile-routing.module.ts");
    /* harmony import */


    var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-profile.page */
    "./src/app/navigationbar/edit-profile/edit-profile.page.ts");

    var EditProfilePageModule = function EditProfilePageModule() {
      _classCallCheck(this, EditProfilePageModule);
    };

    EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"]],
      declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })], EditProfilePageModule);
    /***/
  },

  /***/
  "./src/app/navigationbar/edit-profile/edit-profile.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/navigationbar/edit-profile/edit-profile.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationbarEditProfileEditProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  font-size: 18px;\n}\n\n.modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 3fr 1fr;\n  grid-gap: 11px;\n}\n\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.sidebar-content {\n  margin-top: 1em;\n}\n\n.main-background {\n  background-color: #00000085;\n  height: 100vh;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.second-background {\n  background-color: white;\n  padding: 2em;\n  margin: 1em;\n}\n\nimg.cross-image {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbmJhci9lZGl0LXByb2ZpbGUvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxcbmF2aWdhdGlvbmJhclxcZWRpdC1wcm9maWxlXFxlZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9uYXZpZ2F0aW9uYmFyL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0FDSUo7O0FERkE7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDS0o7O0FESEE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTUo7O0FESkE7RUFDSSxVQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uYmFyL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRpbnVlLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ubW9kYWwtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAxMXB4O1xyXG59XHJcbi5wcm9maWxlLW5hbWUtbW9kYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uc2lkZWJhci1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG4ubWFpbi1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4NTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zZWNvbmQtYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcbmltZy5jcm9zcy1pbWFnZSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59IiwiLmNvbnRpbnVlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tb2RhbC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyIDFmcjtcbiAgZ3JpZC1nYXA6IDExcHg7XG59XG5cbi5wcm9maWxlLW5hbWUtbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc2lkZWJhci1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4ubWFpbi1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg1O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2Vjb25kLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMmVtO1xuICBtYXJnaW46IDFlbTtcbn1cblxuaW1nLmNyb3NzLWltYWdlIHtcbiAgd2lkdGg6IDYwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/navigationbar/edit-profile/edit-profile.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/navigationbar/edit-profile/edit-profile.page.ts ***!
    \*****************************************************************/

  /*! exports provided: EditProfilePage */

  /***/
  function srcAppNavigationbarEditProfileEditProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePage", function () {
      return EditProfilePage;
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

    var EditProfilePage = /*#__PURE__*/function () {
      function EditProfilePage(_location) {
        _classCallCheck(this, EditProfilePage);

        this._location = _location;
        this.crossSign = false;
        this.humBurger = true;
        this.mainMenu = false;
        this.mainMenuItem = true;
        this.id = null;
        this.logggenIn = false;
        this.isLoading = false;
        this.logoutUrl = "https://gowebtutorial.com/api/json/user/logout";
        this.url = "https://latdating.dd:8083/api/json/system/connect";
        this.isLoogedIn = false;
        this.token = "https://gowebtutorial.com/api/json/user/token";
      }

      _createClass(EditProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.itrs = JSON.parse(localStorage.getItem("currentUser"));

          if (this.itrs == null) {
            this.isLoogedIn = false;
          } else if (this.itrs.user != null) {
            this.isLoogedIn = true;
            this.name = this.itrs.user.name;
            this.activity = this.itrs.user.field_activities_interests.und;
            this.Email = this.itrs.user.mail;
            this.DOB = this.itrs.user.field_birth_date.und[0].value;
            this.fname = this.itrs.user.field_first_name.und[0].value;
            this.lname = this.itrs.user.field_last_name.und[0].value;
            this.userlogged = JSON.parse(localStorage.getItem("Signinuser"));
          }
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          this._location.back();
        }
      }]);

      return EditProfilePage;
    }();

    EditProfilePage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigationbar/edit-profile/edit-profile.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-profile.page.scss */
      "./src/app/navigationbar/edit-profile/edit-profile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])], EditProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=navigationbar-edit-profile-edit-profile-module-es5.js.map