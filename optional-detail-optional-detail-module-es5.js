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


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"main-sign-up\">\n    <mat-tab-group class=\"mat-background\" [(selectedIndex)]=\"selectedIndex\">\n\n      <mat-tab>\n        <div class=\"progree-container\">\n        <div class=\"progress\">\n          <div class=\"progress-bar\" style=\"width:20%\"></div>\n        </div>\n      </div>\n        <div class=\"forms-field\">\n\n\n          <div class=\"form-group\">\n            <label for=\"usr\">What do you like to do for fun?</label>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\" for=\"check1\">\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" name=\"option1\" value=\"something\" checked>Option 1\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\" for=\"check2\">\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"check2\" name=\"option2\" value=\"something\">Option 2\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input type=\"checkbox\" class=\"form-check-input\">Option 3\n              </label>\n            </div>\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"usr\">How long have you lived here?</label>\n            <select class=\"form-control\" id=\"sel1\">\n              <option value=\"0\">< 2 years</option>\n              <option value=\"1\">2-5 years</option>\n              <option vlaue=\"2\">>5 years</option>\n            </select>\n          </div>\n\n\n          <ion-item class=\"mt-4 usually-dropdown\">\n\n            <ion-label>My friends and I usually talk about</ion-label>\n            <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"Okay\">\n          \n              <ion-select-option value=\"Work\" #Work>Work\n              </ion-select-option>\n              <ion-select-option value=\"Family\" #Family>Family</ion-select-option>\n              <ion-select-option value=\"Relationships\" #Relationships>Relationships\n              </ion-select-option>\n              <ion-select-option value=\"Gossip\" #Gossip>Gossip</ion-select-option>\n              <ion-select-option value=\"Fashion\" #Fashion>Fashion</ion-select-option>\n              <ion-select-option value=\"Sports\" #Sports>Sports</ion-select-option>\n              <ion-select-option value=\"Other\" #Other>Other</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n\n        \n\n          <ion-item class=\"mt-4 usually-dropdown mb-4\">\n\n            <ion-label>A Good Friend Is Someone Who...</ion-label>\n            <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"Okay\">\n          \n              <ion-select-option value=\"is always there for me.\" #always>is always there for me.\n              </ion-select-option>\n              <ion-select-option value=\"Family\" #Family>Family</ion-select-option>\n              <ion-select-option value=\"always sides with me no matter what.\" #sides>always sides with me no matter what.\n              </ion-select-option>\n              <ion-select-option value=\"will be honest with me even if it hurts.\" #hurts>will be honest with me even if it hurts.</ion-select-option>\n              <ion-select-option value=\"gives advice\" #advice>gives advice</ion-select-option>\n              <ion-select-option value=\"takes my advice.\" #takes>takes my advice.</ion-select-option>\n              <ion-select-option value=\"is an activity partner.\" #partner>is an activity partner.</ion-select-option>\n            </ion-select>\n          </ion-item>\n      \n  \n          <div class=\"form-group\">\n            <label for=\"usr\">When someone cancels plans we made, I think</label>\n            <select class=\"form-control\" id=\"sel1\">\n              <option value=\"My reaction depends on the reason why.\">My reaction depends on the reason why.</option>\n              <option value=\"Things happen – no big deal.\">Things happen – no big deal.</option>\n              <option value=\"It really bothers me and I am wary of the friendship.\">It really bothers me and I am wary of the friendship.</option>\n              <option value=\"I’m generally understanding, but I can only be blown off so many times before I will start to question the friendship.\">I’m generally understanding, but I can only be blown off so many times before I will start to question the friendship.</option>\n            </select>\n          </div>\n          \n          <div class=\"continue-button\" (click)=\"nextStep()\">\n            Continue\n          </div>\n      \n        </div>\n      </mat-tab>\n\n      <mat-tab>\n        <div class=\"progree-container\">\n        <div class=\"progress\">\n          <div class=\"progress-bar\" style=\"width:80%\"></div>\n        </div>\n      </div>\n\n        <div class=\"forms-field\">\n          <div class=\"form-group\">\n            <label for=\"sel1\">Are you in a relationship? </label>\n            <select class=\"form-control\" id=\"sel1\">\n              <option>Single</option>\n              <option>Married</option>\n              <option>Co-Habitating</option>\n              <option value=\"Significant Other But Not Living Together\">Significant Other But Not Living Together</option>\n              <option value=\"Divorced\">Divorced</option>\n              <option value=\"Widowed\">Widowed</option>\n              <option value=\"Engaged\">Engaged</option>\n            \n              </select>\n          </div>\n\n\n          <div class=\"blue-button-second-tab\">\n            Why do we ask this if its\n            not for dating or sex?\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">Do youhave kids</label>\n            <select class=\"form-control\" id=\"sel1\">\n              <option>Yes</option>\n              <option>No</option>\n            </select>\n          </div>\n\n    \n          <ion-item class=\"mt-4 usually-dropdown mb-4\">\n\n            <ion-label>How about pets?</ion-label>\n            <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"Okay\">\n          \n              <ion-select-option value=\"Dog\" #Dog>Dog\n              </ion-select-option>\n              <ion-select-option value=\"Cat\" #Cat>Cat</ion-select-option>\n              <ion-select-option value=\"Rabbit\" #Rabbit>Rabbit\n              </ion-select-option>\n              <ion-select-option value=\"Birds\" #Birds>Birds</ion-select-option>\n              <ion-select-option value=\"Fish\" #Fish>Fish</ion-select-option>\n              <ion-select-option value=\"Reptile\" #Reptile>Reptile</ion-select-option>\n              <ion-select-option value=\"Other\" #Other>Other</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n       \n\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">I spend my days…</label>\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">I also speak</label>\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\n          </div>\n          <div class=\"continue-button\" (click)=\"nextStep()\">\n            Continue\n          </div>\n          <div class=\"previous-button\" (click)=\"previousStep()\">\n            Previous\n          </div>\n\n\n\n        </div>\n      </mat-tab>\n\n\n\n      <mat-tab>\n        <div class=\"progree-container\">\n        <div class=\"progress\">\n          <div class=\"progress-bar\" style=\"width:85%\"></div>\n        </div>\n      </div>\n        <div class=\"forms-field\">\n          <div class=\"form-group\">\n            <label for=\"sel1\">Do you smoke?</label>\n            <select class=\"form-control\" id=\"sel1\">\n              <option value=\"Never\">Never</option>\n              <option value=\"Rarely\">Rarely</option>\n              <option value=\"Weekends Only\">Weekends Only</option>\n              <option value=\"Couple Times a Week\">Couple Times a Week</option>\n              <option value=\" Every Day\"> Every Day</option>\n             \n            </select>\n          </div>\n         \n          <div class=\"form-group\">\n            <label for=\"sel1\">How about drinking alcohol? </label>\n            <select class=\"form-control\" id=\"sel1\">\n        \n              <option value=\"Never\">Never</option>\n              <option value=\"Rarely\">Rarely</option>\n              <option value=\"Weekends Only\">Weekends Only</option>\n              <option value=\"Couple Times a Week\">Couple Times a Week</option>\n              <option value=\" Every Day\"> Every Day</option>     \n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">Favorite Books</label>\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">Favorite Movies</label>\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">Favorite TV Shows</label>\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">Favorite Music</label>\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\n          </div>\n\n\n          </div>\n          <div class=\"continue-button\" (click)=\"nextStep()\">\n            Continue\n          </div>\n          <div class=\"previous-button\" (click)=\"previousStep()\">\n            Previous\n          </div>\n       \n      </mat-tab>\n\n\n\n\n      <mat-tab>\n        <div class=\"progree-container\">\n        <div class=\"progress\">\n          <div class=\"progress-bar\" style=\"width:100%\"></div>\n        </div>\n      </div>\n        <div class=\"forms-field\">\n          <div class=\"form-group\">\n            <label for=\"sel1\">Do you want to add some more photos?</label>\n           <div class=\"ad-more-pics\">\n            <div class=\"image-upload-container\">\n              <img src=\"../../assets/Images/food.png\" class=\"food\">\n            </div>\n            <div class=\"image-upload-container\">\n              <img src=\"../../assets/Images/food.png\" class=\"food\">\n            </div>\n            <div class=\"image-upload-container\">\n              <img src=\"../../assets/Images/food.png\" class=\"food\">\n            </div>\n            <div class=\"image-upload-container\">\n              <img src=\"../../assets/Images/food.png\" class=\"food\">\n            </div>\n            <div class=\"image-upload-container\">\n              <img src=\"../../assets/Images/food.png\" class=\"food\">\n            </div>\n            <div class=\"image-upload-container\">\n              <img src=\"../../assets/Images/food.png\" class=\"food\">\n            </div>\n            <div class=\"image-upload-container\">\n              <img src=\"../../assets/Images/food.png\" class=\"food\">\n            </div>\n            <div class=\"image-upload-container\">\n              <img src=\"../../assets/Images/food.png\" class=\"food\">\n            </div>\n            </div>\n\n          </div>\n\n          <div class=\"form-group\">\n          <label for=\"comment\">Anything else you want to share?</label>\n          <textarea class=\"form-control\" rows=\"5\" id=\"comment\"></textarea>\n        </div>\n          <div class=\"continue-button\" (click)=\"nextStep()\">\n            Complete\n          </div>\n          <div class=\"previous-button\" (click)=\"previousStep()\">\n            Previous\n          </div>\n        </div>\n      </mat-tab>\n\n\n<mat-tab>\n  <div class=\"forms-field\">\n<div class=\"upper-text-changes\">\n  Hello!  Would you like to add your hobbies and interests to your profile to improve your results?\n</div>\n\n<div class=\"form-group\">\n\n  <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"First Pick your top 3\">\n</div>\n\n<div class=\"form-group\">\n\n  <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Now pick the rest\">\n</div>\n\n    <div class=\"continue-button\" (click)=\"nextStep()\">\n      Save Changes\n    </div>\n\n    <div class=\"continue-button-blue\" >\n      Add More to Profile\n    </div>\n<div class=\"span-container\">\n    <span class=\"under-text-button\">Not right now, Thanks.</span>\n  </div>\n    </div>\n\n</mat-tab>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    </mat-tab-group>\n  </div>\n\n</ion-content>";
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


    __webpack_exports__["default"] = ".main-sign-up {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  margin-top: 6em;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.forms-field {\n  margin: 3em 1em;\n}\n\np.register-with-us {\n  padding: 1.5em;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n\nbutton.btn.btn-success {\n  margin-bottom: 10px;\n}\n\n.chechk-box-terms {\n  margin-top: 10px;\n}\n\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #415DAE;\n}\n\n.facebook {\n  height: 2.9em;\n  width: 88%;\n}\n\n.btn-primary-google {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #E62E2D;\n  height: 3em;\n  width: 88%;\n}\n\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n\nspan.button-text {\n  width: 100%;\n}\n\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.signup-form-progress {\n  height: 23px;\n}\n\n.under-text {\n  color: #ada2a2;\n}\n\n.age-limit {\n  color: #ada2a2;\n}\n\n.form-control {\n  border: 1px solid;\n}\n\n.form-group {\n  margin: 1em 0em;\n}\n\n.progress {\n  display: flex;\n  height: 1.5rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n  margin: 0px 1.5em;\n  border: 1px solid;\n  position: fixed;\n  width: 90%;\n}\n\n.blue-button-second-tab {\n  background-color: #4472C4;\n  padding: 0.2em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 0px 0.5em;\n  border-radius: 6px;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 0em;\n  display: flex;\n  align-items: center;\n  color: black !important;\n  justify-content: space-between;\n  background-color: transparent !important;\n  width: 100% !important;\n  height: 2.5em;\n  border: 1px solid;\n}\n\n.dropdown {\n  margin-bottom: 1em;\n}\n\nul.dropdown-menu.show {\n  width: 100%;\n}\n\na {\n  color: black;\n}\n\n.upload-photos {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-direction: column;\n  color: black;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.btn {\n  color: black;\n  padding: 12px 20px;\n  border-radius: 8px;\n  /* font-size: 20px; */\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  align-items: center;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n\n.upload-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0px;\n  background-color: #DFF4F5;\n  margin: 9px 4em;\n  border-radius: 12px;\n  padding-left: 1em;\n}\n\n.or {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 21px;\n  margin: 1em;\n}\n\n.grid-icon {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  width: 100%;\n  text-align: center;\n}\n\n.icons {\n  height: 50vh;\n  overflow: auto;\n}\n\nimg.image-icon {\n  width: 61%;\n  margin: 1em;\n}\n\n.button-blue-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #4472C4;\n  color: white;\n  padding: 0.7em;\n  border-radius: 10px;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\n.terms-text {\n  height: 10vh;\n  overflow: auto;\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 0.5em;\n  text-align: justify;\n  font-size: 14px;\n}\n\n.terms {\n  margin: 1em 0px;\n}\n\n.continue-button-google {\n  background-color: #F64225;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.continue-button-facebook {\n  background-color: #4472C4;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.success-market {\n  text-align: center;\n  margin: 2em;\n  font-size: 18px;\n  margin-bottom: 0em;\n}\n\n.under-text-button {\n  color: #ada2a2;\n}\n\n.continue-button-last {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  margin-bottom: 0px;\n}\n\n.button-last {\n  text-align: center;\n  margin: 0em 3em;\n}\n\n.ad-more-pics {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n}\n\n.image-upload-container {\n  border: 1px solid;\n  /* height: 10vh; */\n}\n\n.continue-button-blue {\n  background-color: #4372c4;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.span-container {\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.upper-text-changes {\n  text-align: center;\n  font-size: 20px;\n}\n\n.progree-container.ng-star-inserted {\n  position: fixed;\n  width: 100%;\n  background-color: white;\n  padding: 1.5em 0em;\n  margin: 0px;\n  margin-top: -4vh;\n}\n\n.previous-button {\n  background-color: #E62E2D;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9uYWwtZGV0YWlsL0s6XFxBbmd1bGFyIFByb2plY3RcXG5vdDREYXRpbmcvc3JjXFxhcHBcXG9wdGlvbmFsLWRldGFpbFxcb3B0aW9uYWwtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb3B0aW9uYWwtZGV0YWlsL29wdGlvbmFsLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBRUksV0FBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0FDR0o7O0FEQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0lKOztBREZBO0VBQ0ksYUFBQTtFQUVBLFVBQUE7QUNJSjs7QURGQTtFQUVJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUVBLFVBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtBQ0lKOztBREZBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0FDTUo7O0FESkE7RUFDSSxjQUFBO0FDT0o7O0FETEE7RUFDSSxjQUFBO0FDUUo7O0FETkE7RUFDSSxpQkFBQTtBQ1NKOztBRFBBO0VBQ0ks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Q0ksa0JBQUE7RUFDQSxlQUFBO0FDdUJKOztBRHJCQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ3dCSjs7QUR0QkE7RUFFSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUN3QkoiLCJmaWxlIjoic3JjL2FwcC9vcHRpb25hbC1kZXRhaWwvb3B0aW9uYWwtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXNpZ24tdXAge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDZlbTtcbn1cbi5mdWxsLXdpZHRoXG57XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybXMtZmllbGR7XG4gICAgbWFyZ2luOiAzZW0gMWVtO1xufVxucC5yZWdpc3Rlci13aXRoLXVzIHtcbiAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cblxuYnV0dG9uLmJ0bi5idG4tc3VjY2VzcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jaGVjaGstYm94LXRlcm1zIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc29jaWFsLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE1REFFXG59XG4uZmFjZWJvb2sge1xuICAgIGhlaWdodDogMi45ZW07XG4gXG4gICAgd2lkdGg6IDg4JVxufVxuLmJ0bi1wcmltYXJ5LWdvb2dsZVxue1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNjJFMkQ7XG4gICAgaGVpZ2h0OiAzZW07XG5cbiAgICB3aWR0aDogODglXG59XG5cbnAub3ItdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbn1cbnNwYW4uYnV0dG9uLXRleHQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRpbnVlLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xuICAgIGhlaWdodDogM2VtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIG1hcmdpbjogMmVtO1xufVxuLnNpZ251cC1mb3JtLXByb2dyZXNze1xuICAgIGhlaWdodDogMjNweDtcbn1cbi51bmRlci10ZXh0IHtcbiAgICBjb2xvcjogI2FkYTJhMjtcbn1cbi5hZ2UtbGltaXR7XG4gICAgY29sb3I6ICNhZGEyYTI7O1xufVxuLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luOiAxZW0gMGVtO1xufVxuXG5cbi5wcm9ncmVzcyB7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIG1hcmdpbjogMHB4IDEuNWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogOTAlO1xufVxuLmJsdWUtYnV0dG9uLXNlY29uZC10YWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gICAgcGFkZGluZzogMC4yZW0gMmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMHB4IDAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICAgbWFyZ2luLWJvdHRvbTogMGVtOyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLmRyb3Bkb3duIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG51bC5kcm9wZG93bi1tZW51LnNob3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICBcbn1cbmFcbntcbiAgICBjb2xvcjogYmxhY2s7XG59XG4udXBsb2FkLXBob3RvcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnVwbG9hZC1idG4td3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIFxuICAuYnRuIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgLyogZm9udC1zaXplOiAyMHB4OyAqL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICB9XG4gIFxuICAudXBsb2FkLWJ0bi13cmFwcGVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuXG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIH1cbiAgLnVwbG9hZC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkY0RjU7XG4gICAgbWFyZ2luOiA5cHggNGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XG5cbn1cbi5vciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIG1hcmdpbjogMWVtO1xufVxuLmdyaWQtaWNvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbi5pY29ucyB7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuaW1nLmltYWdlLWljb24ge1xuICAgIHdpZHRoOiA2MSU7XG4gICAgbWFyZ2luOiAxZW07XG59XG4uYnV0dG9uLWJsdWUtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbi50ZXJtcy10ZXh0IHtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50ZXJtcyB7XG4gICAgbWFyZ2luOiAxZW0gMHB4O1xufVxuLmNvbnRpbnVlLWJ1dHRvbi1nb29nbGVcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjY0MjI1O1xuICAgIHBhZGRpbmc6IDAuNmVtIDJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDJlbSAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmNvbnRpbnVlLWJ1dHRvbi1mYWNlYm9va1xue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gICAgcGFkZGluZzogMC42ZW0gMmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMmVtIDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uc3VjY2Vzcy1tYXJrZXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDJlbTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMGVtO1xufVxuLnVuZGVyLXRleHQtYnV0dG9uXG57XG4gICAgY29sb3I6ICNhZGEyYTI7XG59XG4uY29udGludWUtYnV0dG9uLWxhc3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBtYXJnaW46IDJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uYnV0dG9uLWxhc3Qge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDBlbSAzZW07XG5cbn1cbi5hZC1tb3JlLXBpY3Mge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG59XG4uaW1hZ2UtdXBsb2FkLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgLyogaGVpZ2h0OiAxMHZoOyAqL1xufVxuLmNvbnRpbnVlLWJ1dHRvbi1ibHVle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzcyYzQ7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgbWFyZ2luOiAyZW07XG59XG4uc3Bhbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLnVwcGVyLXRleHQtY2hhbmdlcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5wcm9ncmVlLWNvbnRhaW5lci5uZy1zdGFyLWluc2VydGVkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMS41ZW0gMGVtO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IC00dmg7XG59XG4ucHJldmlvdXMtYnV0dG9uXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2MkUyRDtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBtYXJnaW46IDJlbTtcbn0iLCIubWFpbi1zaWduLXVwIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogNmVtO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybXMtZmllbGQge1xuICBtYXJnaW46IDNlbSAxZW07XG59XG5cbnAucmVnaXN0ZXItd2l0aC11cyB7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2hlY2hrLWJveC10ZXJtcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zb2NpYWwtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNURBRTtcbn1cblxuLmZhY2Vib29rIHtcbiAgaGVpZ2h0OiAyLjllbTtcbiAgd2lkdGg6IDg4JTtcbn1cblxuLmJ0bi1wcmltYXJ5LWdvb2dsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTYyRTJEO1xuICBoZWlnaHQ6IDNlbTtcbiAgd2lkdGg6IDg4JTtcbn1cblxucC5vci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI3cHg7XG59XG5cbnNwYW4uYnV0dG9uLXRleHQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xufVxuXG4uc2lnbnVwLWZvcm0tcHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDIzcHg7XG59XG5cbi51bmRlci10ZXh0IHtcbiAgY29sb3I6ICNhZGEyYTI7XG59XG5cbi5hZ2UtbGltaXQge1xuICBjb2xvcjogI2FkYTJhMjtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbjogMWVtIDBlbTtcbn1cblxuLnByb2dyZXNzIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMS41cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIG1hcmdpbjogMHB4IDEuNWVtO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogOTAlO1xufVxuXG4uYmx1ZS1idXR0b24tc2Vjb25kLXRhYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gIHBhZGRpbmc6IDAuMmVtIDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwcHggMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XG4gIG1hcmdpbi1ib3R0b206IDBlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbi5kcm9wZG93biB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxudWwuZHJvcGRvd24tbWVudS5zaG93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi51cGxvYWQtcGhvdG9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5idG4ge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAvKiBmb250LXNpemU6IDIwcHg7ICovXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi51cGxvYWQtYnRuLXdyYXBwZXIgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xufVxuXG4udXBsb2FkLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGRjRGNTtcbiAgbWFyZ2luOiA5cHggNGVtO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cblxuLm9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5ncmlkLWljb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb25zIHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuaW1nLmltYWdlLWljb24ge1xuICB3aWR0aDogNjElO1xuICBtYXJnaW46IDFlbTtcbn1cblxuLmJ1dHRvbi1ibHVlLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjdlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi50ZXJtcy10ZXh0IHtcbiAgaGVpZ2h0OiAxMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50ZXJtcyB7XG4gIG1hcmdpbjogMWVtIDBweDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1nb29nbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjY0MjI1O1xuICBwYWRkaW5nOiAwLjZlbSAyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMmVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uY29udGludWUtYnV0dG9uLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbiAgcGFkZGluZzogMC42ZW0gMmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDJlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnN1Y2Nlc3MtbWFya2V0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJlbTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwZW07XG59XG5cbi51bmRlci10ZXh0LWJ1dHRvbiB7XG4gIGNvbG9yOiAjYWRhMmEyO1xufVxuXG4uY29udGludWUtYnV0dG9uLWxhc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uYnV0dG9uLWxhc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMGVtIDNlbTtcbn1cblxuLmFkLW1vcmUtcGljcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICBncmlkLWdhcDogMTBweDtcbn1cblxuLmltYWdlLXVwbG9hZC1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgLyogaGVpZ2h0OiAxMHZoOyAqL1xufVxuXG4uY29udGludWUtYnV0dG9uLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3MmM0O1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbn1cblxuLnNwYW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnVwcGVyLXRleHQtY2hhbmdlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucHJvZ3JlZS1jb250YWluZXIubmctc3Rhci1pbnNlcnRlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxLjVlbSAwZW07XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAtNHZoO1xufVxuXG4ucHJldmlvdXMtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2MkUyRDtcbiAgaGVpZ2h0OiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgbWFyZ2luOiAyZW07XG59Il19 */";
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