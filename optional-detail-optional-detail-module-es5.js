function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["optional-detail-optional-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/optional-detail/optional-detail.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/optional-detail/optional-detail.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOptionalDetailOptionalDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"main-sign-up\">\n    <mat-tab-group class=\"mat-background\" [(selectedIndex)]=\"selectedIndex\">\n\n      <mat-tab>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" style=\"width:20%\"></div>\n        </div>\n        <div class=\"forms-field\">\n\n\n          <div class=\"form-group\">\n            <label for=\"usr\">What do you like to do for fun?</label>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\" for=\"check1\">\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" name=\"option1\" value=\"something\" checked>Option 1\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\" for=\"check2\">\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"check2\" name=\"option2\" value=\"something\">Option 2\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input type=\"checkbox\" class=\"form-check-input\">Option 3\n              </label>\n            </div>\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"usr\">How long have you lived here?</label>\n            <select class=\"form-control\" id=\"sel1\">\n              <option>Option1</option>\n              <option>Option2</option>\n              <option>Option3</option>\n              <option>Option4</option>\n            </select>\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"usr\">My friends and I usually talk about</label>\n            <select class=\"form-control\" id=\"sel1\">\n              <option>Option1</option>\n              <option>Option2</option>\n              <option>Option3</option>\n              <option>Option4</option>\n            </select>\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"usr\">A good friend is someone who</label>\n            <select class=\"form-control\" id=\"sel1\">\n              <option>Option1</option>\n              <option>Option2</option>\n              <option>Option3</option>\n              <option>Option4</option>\n            </select>\n          </div>\n  \n          <div class=\"form-group\">\n            <label for=\"usr\">When someone cancels plans we made, I think</label>\n            <select class=\"form-control\" id=\"sel1\">\n              <option>Option1</option>\n              <option>Option2</option>\n              <option>Option3</option>\n              <option>Option4</option>\n            </select>\n          </div>\n          \n          <div class=\"continue-button\" (click)=\"nextStep()\">\n            Continue\n          </div>\n\n        </div>\n      </mat-tab>\n\n      <mat-tab>\n\n        <div class=\"progress\">\n          <div class=\"progress-bar\" style=\"width:80%\"></div>\n        </div>\n\n        <div class=\"forms-field\">\n          <div class=\"form-group\">\n            <label for=\"sel1\">Are you in a relationship? </label>\n            <select class=\"form-control\" id=\"sel1\">\n              <option>Single</option>\n              <option>Married</option>\n              <option>Co-Habitating</option>\n              <option>In a Relationship</option>\n            </select>\n          </div>\n\n\n          <div class=\"blue-button-second-tab\">\n            Why do we ask this if its\n            not for dating or sex?\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">Do youhave kids</label>\n            <select class=\"form-control\" id=\"sel1\">\n              <option>Yes</option>\n              <option>No</option>\n            </select>\n          </div>\n\n    \n\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">How about pets?</label>\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">I spend my days…</label>\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">I also speak</label>\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\n          </div>\n          <div class=\"continue-button\" (click)=\"nextStep()\">\n            Continue\n          </div>\n\n\n\n\n        </div>\n      </mat-tab>\n\n\n\n      <mat-tab>\n\n        <div class=\"progress\">\n          <div class=\"progress-bar\" style=\"width:85%\"></div>\n        </div>\n\n        <div class=\"forms-field\">\n          <div class=\"form-group\">\n            <label for=\"sel1\">Do you smoke?</label>\n            <select class=\"form-control\" id=\"sel1\">\n              <option>Yes</option>\n              <option>No</option>\n            </select>\n          </div>\n         \n          <div class=\"form-group\">\n            <label for=\"sel1\">How about drinking alcohol? </label>\n            <select class=\"form-control\" id=\"sel1\">\n        \n              <option>NO</option>\n              <option>Sometimes</option>\n              <option>Rarely</option>\n              <option>Of Course</option>       \n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">Favorite Books</label>\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">Favorite Movies</label>\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">Favorite TV Shows</label>\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">Favorite Music</label>\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\n          </div>\n\n\n          </div>\n          <div class=\"continue-button\" (click)=\"nextStep()\">\n            Continue\n          </div>\n       \n      </mat-tab>\n\n\n\n\n      <mat-tab>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" style=\"width:100%\"></div>\n        </div>\n        <div class=\"forms-field\">\n          <div class=\"form-group\">\n            <label for=\"sel1\">Do you want to add some more photos?</label>\n           <div class=\"ad-more-pics\">\n            <div class=\"image-upload-container\">\n              <img src=\"../../assets/Images/food.png\" class=\"food\">\n            </div>\n            <div class=\"image-upload-container\">\n              <img src=\"../../assets/Images/food.png\" class=\"food\">\n            </div>\n            <div class=\"image-upload-container\">\n              <img src=\"../../assets/Images/food.png\" class=\"food\">\n            </div>\n            <div class=\"image-upload-container\">\n              <img src=\"../../assets/Images/food.png\" class=\"food\">\n            </div>\n            <div class=\"image-upload-container\">\n              <img src=\"../../assets/Images/food.png\" class=\"food\">\n            </div>\n            <div class=\"image-upload-container\">\n              <img src=\"../../assets/Images/food.png\" class=\"food\">\n            </div>\n            <div class=\"image-upload-container\">\n              <img src=\"../../assets/Images/food.png\" class=\"food\">\n            </div>\n            <div class=\"image-upload-container\">\n              <img src=\"../../assets/Images/food.png\" class=\"food\">\n            </div>\n            </div>\n\n          </div>\n\n          <div class=\"form-group\">\n          <label for=\"comment\">Anything else you want to share?</label>\n          <textarea class=\"form-control\" rows=\"5\" id=\"comment\"></textarea>\n        </div>\n          <div class=\"continue-button\" (click)=\"nextStep()\">\n            Complete\n          </div>\n        </div>\n      </mat-tab>\n\n\n<mat-tab>\n  <div class=\"forms-field\">\n<div class=\"upper-text-changes\">\n  Hello!  Would you like to add your hobbies and interests to your profile to improve your results?\n</div>\n\n<div class=\"form-group\">\n\n  <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"First Pick your top 3\">\n</div>\n\n<div class=\"form-group\">\n\n  <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Now pick the rest\">\n</div>\n\n    <div class=\"continue-button\" (click)=\"nextStep()\">\n      Save Changes\n    </div>\n\n    <div class=\"continue-button-blue\" >\n      Add More to Profile\n    </div>\n<div class=\"span-container\">\n    <span class=\"under-text-button\">Not right now, Thanks.</span>\n  </div>\n    </div>\n\n</mat-tab>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    </mat-tab-group>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/optional-detail/optional-detail-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/optional-detail/optional-detail-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: OptionalDetailPageRoutingModule */

  /***/
  function srcAppOptionalDetailOptionalDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionalDetailPageRoutingModule", function () {
      return OptionalDetailPageRoutingModule;
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


    var _optional_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./optional-detail.page */
    "./src/app/optional-detail/optional-detail.page.ts");

    var routes = [{
      path: '',
      component: _optional_detail_page__WEBPACK_IMPORTED_MODULE_3__["OptionalDetailPage"]
    }];

    var OptionalDetailPageRoutingModule = function OptionalDetailPageRoutingModule() {
      _classCallCheck(this, OptionalDetailPageRoutingModule);
    };

    OptionalDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OptionalDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/optional-detail/optional-detail.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/optional-detail/optional-detail.module.ts ***!
    \***********************************************************/

  /*! exports provided: OptionalDetailPageModule */

  /***/
  function srcAppOptionalDetailOptionalDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionalDetailPageModule", function () {
      return OptionalDetailPageModule;
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


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _optional_detail_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./optional-detail-routing.module */
    "./src/app/optional-detail/optional-detail-routing.module.ts");
    /* harmony import */


    var _optional_detail_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./optional-detail.page */
    "./src/app/optional-detail/optional-detail.page.ts");

    var OptionalDetailPageModule = function OptionalDetailPageModule() {
      _classCallCheck(this, OptionalDetailPageModule);
    };

    OptionalDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _optional_detail_routing_module__WEBPACK_IMPORTED_MODULE_8__["OptionalDetailPageRoutingModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]],
      declarations: [_optional_detail_page__WEBPACK_IMPORTED_MODULE_9__["OptionalDetailPage"]]
    })], OptionalDetailPageModule);
    /***/
  },

  /***/
  "./src/app/optional-detail/optional-detail.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/optional-detail/optional-detail.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOptionalDetailOptionalDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-sign-up {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  margin-top: 6em;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.forms-field {\n  margin: 1em 1em;\n}\n\np.register-with-us {\n  padding: 1.5em;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n\nbutton.btn.btn-success {\n  margin-bottom: 10px;\n}\n\n.chechk-box-terms {\n  margin-top: 10px;\n}\n\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #415DAE;\n}\n\n.facebook {\n  height: 2.9em;\n  width: 88%;\n}\n\n.btn-primary-google {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #E62E2D;\n  height: 3em;\n  width: 88%;\n}\n\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n\nspan.button-text {\n  width: 100%;\n}\n\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.signup-form-progress {\n  height: 23px;\n}\n\n.under-text {\n  color: #ada2a2;\n}\n\n.age-limit {\n  color: #ada2a2;\n}\n\n.form-control {\n  border: 1px solid;\n}\n\n.form-group {\n  margin: 1em 0em;\n}\n\n.progress {\n  display: flex;\n  height: 1.5rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n  margin: 0px 1.5em;\n  border: 1px solid;\n}\n\n.blue-button-second-tab {\n  background-color: #4472C4;\n  padding: 0.2em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 0px 0.5em;\n  border-radius: 6px;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 0em;\n  display: flex;\n  align-items: center;\n  color: black !important;\n  justify-content: space-between;\n  background-color: transparent !important;\n  width: 100% !important;\n  height: 2.5em;\n  border: 1px solid;\n}\n\n.dropdown {\n  margin-bottom: 1em;\n}\n\nul.dropdown-menu.show {\n  width: 100%;\n}\n\na {\n  color: black;\n}\n\n.upload-photos {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-direction: column;\n  color: black;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.btn {\n  color: black;\n  padding: 12px 20px;\n  border-radius: 8px;\n  /* font-size: 20px; */\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  align-items: center;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n\n.upload-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0px;\n  background-color: #DFF4F5;\n  margin: 9px 4em;\n  border-radius: 12px;\n  padding-left: 1em;\n}\n\n.or {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 21px;\n  margin: 1em;\n}\n\n.grid-icon {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  width: 100%;\n  text-align: center;\n}\n\n.icons {\n  height: 50vh;\n  overflow: auto;\n}\n\nimg.image-icon {\n  width: 61%;\n  margin: 1em;\n}\n\n.button-blue-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #4472C4;\n  color: white;\n  padding: 0.7em;\n  border-radius: 10px;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\n.terms-text {\n  height: 10vh;\n  overflow: auto;\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 0.5em;\n  text-align: justify;\n  font-size: 14px;\n}\n\n.terms {\n  margin: 1em 0px;\n}\n\n.continue-button-google {\n  background-color: #F64225;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.continue-button-facebook {\n  background-color: #4472C4;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.success-market {\n  text-align: center;\n  margin: 2em;\n  font-size: 18px;\n  margin-bottom: 0em;\n}\n\n.under-text-button {\n  color: #ada2a2;\n}\n\n.continue-button-last {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  margin-bottom: 0px;\n}\n\n.button-last {\n  text-align: center;\n  margin: 0em 3em;\n}\n\n.ad-more-pics {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n}\n\n.image-upload-container {\n  border: 1px solid;\n  /* height: 10vh; */\n}\n\n.continue-button-blue {\n  background-color: #4372c4;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.span-container {\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.upper-text-changes {\n  text-align: center;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9uYWwtZGV0YWlsL0s6XFxBbmd1bGFyIFByb2plY3RcXG5vdDREYXRpbmcvc3JjXFxhcHBcXG9wdGlvbmFsLWRldGFpbFxcb3B0aW9uYWwtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb3B0aW9uYWwtZGV0YWlsL29wdGlvbmFsLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBRUksV0FBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0FDR0o7O0FEQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0lKOztBREZBO0VBQ0ksYUFBQTtFQUVBLFVBQUE7QUNJSjs7QURGQTtFQUVJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUVBLFVBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtBQ0lKOztBREZBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0FDTUo7O0FESkE7RUFDSSxjQUFBO0FDT0o7O0FETEE7RUFDSSxjQUFBO0FDUUo7O0FETkE7RUFDSSxpQkFBQTtBQ1NKOztBRFBBO0VBQ0ksZUFBQTtBQ1VKOztBRE5BO0VBRUksYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNTSjs7QURQQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1VKOztBRFJBO0VBQ0csa0JBQUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ1dKOztBRFRBO0VBQ0ksa0JBQUE7QUNZSjs7QURWQTtFQUNJLFdBQUE7QUNhSjs7QURWQTtFQUVJLFlBQUE7QUNZSjs7QURWQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ2FKOztBRFZBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDYUo7O0FEVkU7RUFDRSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNZSjs7QURSRTtFQUVFLGdCQUFBO0VBQ0Ysa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNVRjs7QURSRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1dKOztBRFJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDV0o7O0FEVEE7RUFDSSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNZSjs7QURUQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDWUo7O0FEVkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ2FKOztBRFhBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDY0o7O0FEWkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDZUo7O0FEYkE7RUFDSSxlQUFBO0FDZ0JKOztBRGRBO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNnQko7O0FEZEE7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2dCSjs7QURkQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2lCSjs7QURmQTtFQUVJLGNBQUE7QUNpQko7O0FEZkE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2tCSjs7QURoQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNtQko7O0FEaEJBO0VBQ0ksYUFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtBQ21CSjs7QURqQkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDb0JKOztBRGxCQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3FCSjs7QURuQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDc0JKOztBRHBCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ3VCSiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbmFsLWRldGFpbC9vcHRpb25hbC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tc2lnbi11cCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogNmVtO1xufVxuLmZ1bGwtd2lkdGhcbntcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5mb3Jtcy1maWVsZHtcbiAgICBtYXJnaW46IDFlbSAxZW07XG59XG5wLnJlZ2lzdGVyLXdpdGgtdXMge1xuICAgIHBhZGRpbmc6IDEuNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNoZWNoay1ib3gtdGVybXMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zb2NpYWwtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTVEQUVcbn1cbi5mYWNlYm9vayB7XG4gICAgaGVpZ2h0OiAyLjllbTtcbiBcbiAgICB3aWR0aDogODglXG59XG4uYnRuLXByaW1hcnktZ29vZ2xlXG57XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2MkUyRDtcbiAgICBoZWlnaHQ6IDNlbTtcblxuICAgIHdpZHRoOiA4OCVcbn1cblxucC5vci10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyN3B4O1xufVxuc3Bhbi5idXR0b24tdGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uY29udGludWUtYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgbWFyZ2luOiAyZW07XG59XG4uc2lnbnVwLWZvcm0tcHJvZ3Jlc3N7XG4gICAgaGVpZ2h0OiAyM3B4O1xufVxuLnVuZGVyLXRleHQge1xuICAgIGNvbG9yOiAjYWRhMmEyO1xufVxuLmFnZS1saW1pdHtcbiAgICBjb2xvcjogI2FkYTJhMjs7XG59XG4uZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW46IDFlbSAwZW07XG59XG5cblxuLnByb2dyZXNzIHtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMS41cmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgbWFyZ2luOiAwcHggMS41ZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uYmx1ZS1idXR0b24tc2Vjb25kLXRhYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbiAgICBwYWRkaW5nOiAwLjJlbSAyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiAwcHggMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XG4gICBtYXJnaW4tYm90dG9tOiAwZW07IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uZHJvcGRvd24ge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbnVsLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIFxufVxuYVxue1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi51cGxvYWQtcGhvdG9zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgXG4gIC5idG4ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAvKiBmb250LXNpemU6IDIwcHg7ICovXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIH1cbiAgXG4gIC51cGxvYWQtYnRuLXdyYXBwZXIgaW5wdXRbdHlwZT1maWxlXSB7XG5cbiAgICBmb250LXNpemU6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbiAgfVxuICAudXBsb2FkLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRjRGNTtcbiAgICBtYXJnaW46IDlweCA0ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcblxufVxuLm9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgbWFyZ2luOiAxZW07XG59XG4uZ3JpZC1pY29uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuLmljb25zIHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5pbWcuaW1hZ2UtaWNvbiB7XG4gICAgd2lkdGg6IDYxJTtcbiAgICBtYXJnaW46IDFlbTtcbn1cbi5idXR0b24tYmx1ZS10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMC43ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xufVxuLnRlcm1zLXRleHQge1xuICAgIGhlaWdodDogMTB2aDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRlcm1zIHtcbiAgICBtYXJnaW46IDFlbSAwcHg7XG59XG4uY29udGludWUtYnV0dG9uLWdvb2dsZVxue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNjQyMjU7XG4gICAgcGFkZGluZzogMC42ZW0gMmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMmVtIDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uY29udGludWUtYnV0dG9uLWZhY2Vib29rXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbiAgICBwYWRkaW5nOiAwLjZlbSAyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiAyZW0gMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5zdWNjZXNzLW1hcmtldCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMmVtO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwZW07XG59XG4udW5kZXItdGV4dC1idXR0b25cbntcbiAgICBjb2xvcjogI2FkYTJhMjtcbn1cbi5jb250aW51ZS1idXR0b24tbGFzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xuICAgIGhlaWdodDogM2VtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIG1hcmdpbjogMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5idXR0b24tbGFzdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMGVtIDNlbTtcblxufVxuLmFkLW1vcmUtcGljcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgICBncmlkLWdhcDogMTBweDtcbn1cbi5pbWFnZS11cGxvYWQtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAvKiBoZWlnaHQ6IDEwdmg7ICovXG59XG4uY29udGludWUtYnV0dG9uLWJsdWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNzJjNDtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBtYXJnaW46IDJlbTtcbn1cbi5zcGFuLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4udXBwZXItdGV4dC1jaGFuZ2VzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufSIsIi5tYWluLXNpZ24tdXAge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA2ZW07XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3Jtcy1maWVsZCB7XG4gIG1hcmdpbjogMWVtIDFlbTtcbn1cblxucC5yZWdpc3Rlci13aXRoLXVzIHtcbiAgcGFkZGluZzogMS41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuYnV0dG9uLmJ0bi5idG4tc3VjY2VzcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jaGVjaGstYm94LXRlcm1zIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNvY2lhbC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE1REFFO1xufVxuXG4uZmFjZWJvb2sge1xuICBoZWlnaHQ6IDIuOWVtO1xuICB3aWR0aDogODglO1xufVxuXG4uYnRuLXByaW1hcnktZ29vZ2xlIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNjJFMkQ7XG4gIGhlaWdodDogM2VtO1xuICB3aWR0aDogODglO1xufVxuXG5wLm9yLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuc3Bhbi5idXR0b24tdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGludWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcbiAgaGVpZ2h0OiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgbWFyZ2luOiAyZW07XG59XG5cbi5zaWdudXAtZm9ybS1wcm9ncmVzcyB7XG4gIGhlaWdodDogMjNweDtcbn1cblxuLnVuZGVyLXRleHQge1xuICBjb2xvcjogI2FkYTJhMjtcbn1cblxuLmFnZS1saW1pdCB7XG4gIGNvbG9yOiAjYWRhMmEyO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luOiAxZW0gMGVtO1xufVxuXG4ucHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgbWFyZ2luOiAwcHggMS41ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uYmx1ZS1idXR0b24tc2Vjb25kLXRhYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gIHBhZGRpbmc6IDAuMmVtIDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwcHggMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XG4gIG1hcmdpbi1ib3R0b206IDBlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbi5kcm9wZG93biB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxudWwuZHJvcGRvd24tbWVudS5zaG93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi51cGxvYWQtcGhvdG9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5idG4ge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAvKiBmb250LXNpemU6IDIwcHg7ICovXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi51cGxvYWQtYnRuLXdyYXBwZXIgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xufVxuXG4udXBsb2FkLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGRjRGNTtcbiAgbWFyZ2luOiA5cHggNGVtO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cblxuLm9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5ncmlkLWljb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb25zIHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuaW1nLmltYWdlLWljb24ge1xuICB3aWR0aDogNjElO1xuICBtYXJnaW46IDFlbTtcbn1cblxuLmJ1dHRvbi1ibHVlLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjdlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi50ZXJtcy10ZXh0IHtcbiAgaGVpZ2h0OiAxMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50ZXJtcyB7XG4gIG1hcmdpbjogMWVtIDBweDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1nb29nbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjY0MjI1O1xuICBwYWRkaW5nOiAwLjZlbSAyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMmVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uY29udGludWUtYnV0dG9uLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbiAgcGFkZGluZzogMC42ZW0gMmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDJlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnN1Y2Nlc3MtbWFya2V0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJlbTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwZW07XG59XG5cbi51bmRlci10ZXh0LWJ1dHRvbiB7XG4gIGNvbG9yOiAjYWRhMmEyO1xufVxuXG4uY29udGludWUtYnV0dG9uLWxhc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uYnV0dG9uLWxhc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMGVtIDNlbTtcbn1cblxuLmFkLW1vcmUtcGljcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICBncmlkLWdhcDogMTBweDtcbn1cblxuLmltYWdlLXVwbG9hZC1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgLyogaGVpZ2h0OiAxMHZoOyAqL1xufVxuXG4uY29udGludWUtYnV0dG9uLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3MmM0O1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbn1cblxuLnNwYW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnVwcGVyLXRleHQtY2hhbmdlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/optional-detail/optional-detail.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/optional-detail/optional-detail.page.ts ***!
    \*********************************************************/

  /*! exports provided: OptionalDetailPage */

  /***/
  function srcAppOptionalDetailOptionalDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionalDetailPage", function () {
      return OptionalDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OptionalDetailPage = /*#__PURE__*/function () {
      function OptionalDetailPage() {
        _classCallCheck(this, OptionalDetailPage);

        this.maxNumberOfTabs = 5;
        this.selectedIndex = 0;
      }

      _createClass(OptionalDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "tabChanged",
        value: function tabChanged(tabChangeEvent) {
          this.selectedIndex = tabChangeEvent.index;
        }
      }, {
        key: "nextStep",
        value: function nextStep() {
          this.selectedIndex += 1;
        }
      }, {
        key: "previousStep",
        value: function previousStep() {
          this.selectedIndex -= 1;
        }
      }]);

      return OptionalDetailPage;
    }();

    OptionalDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-optional-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./optional-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/optional-detail/optional-detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./optional-detail.page.scss */
      "./src/app/optional-detail/optional-detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OptionalDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=optional-detail-optional-detail-module-es5.js.map