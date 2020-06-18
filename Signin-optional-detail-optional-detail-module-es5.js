function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Signin-optional-detail-optional-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/optional-detail/optional-detail.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/optional-detail/optional-detail.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSigninOptionalDetailOptionalDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"main-sign-up\">\r\n    <mat-tab-group class=\"mat-background\" [(selectedIndex)]=\"selectedIndex\">\r\n\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:20%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"forms-field\">\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"usr\">What do you like to do for fun?</label>\r\n            <div class=\"form-check\">\r\n              <label class=\"form-check-label\" for=\"check1\">\r\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" name=\"option1\" value=\"something\"\r\n                  checked>Option 1\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <label class=\"form-check-label\" for=\"check2\">\r\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"check2\" name=\"option2\" value=\"something\">Option 2\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <label class=\"form-check-label\">\r\n                <input type=\"checkbox\" class=\"form-check-input\">Option 3\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"usr\">How long have you lived here?</label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"long\" [(ngModel)]=\"live\">\r\n              <option value=\"0\"> < 2 years</option> \r\n              <option value=\"1\">2-5 years </option>\r\n              <option value=\"2\">>5 years</option>\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <ion-item class=\"mt-4 usually-dropdown\">\r\n\r\n            <ion-label>My friends and I usually talk about</ion-label>\r\n            <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"Okay\" name=\"talkabout\" [(ngModel)]=\"talkabout\">\r\n\r\n              <ion-select-option value=\"Work\" #Work>Work\r\n              </ion-select-option>\r\n              <ion-select-option value=\"Family\" #Family>Family</ion-select-option>\r\n              <ion-select-option value=\"Relationships\" #Relationships>Relationships\r\n              </ion-select-option>\r\n              <ion-select-option value=\"Gossip\" #Gossip>Gossip</ion-select-option>\r\n              <ion-select-option value=\"Fashion\" #Fashion>Fashion</ion-select-option>\r\n              <ion-select-option value=\"Sports\" #Sports>Sports</ion-select-option>\r\n              <ion-select-option value=\"Other\" #Other>Other</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n\r\n\r\n\r\n          <ion-item class=\"mt-4 usually-dropdown mb-4\">\r\n\r\n            <ion-label>A Good Friend Is Someone Who...</ion-label>\r\n            <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"Okay\" name=\"goodFriend\" [(ngModel)]=\"goodFriend\">\r\n\r\n              <ion-select-option value=\"is always there for me.\" #always>is always there for me.\r\n              </ion-select-option>\r\n              <ion-select-option value=\"Family\" #Family>Family</ion-select-option>\r\n              <ion-select-option value=\"always sides with me no matter what.\" #sides>always sides with me no matter\r\n                what.\r\n              </ion-select-option>\r\n              <ion-select-option value=\"will be honest with me even if it hurts.\" #hurts>will be honest with me even if\r\n                it hurts.</ion-select-option>\r\n              <ion-select-option value=\"gives advice\" #advice>gives advice</ion-select-option>\r\n              <ion-select-option value=\"takes my advice.\" #takes>takes my advice.</ion-select-option>\r\n              <ion-select-option value=\"is an activity partner.\" #partner>is an activity partner.</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"usr\">When someone cancels plans we made, I think</label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"cancels\" [(ngModel)]=\"cancels\">\r\n              <option value=\"My reaction depends on the reason why.\">My reaction depends on the reason why.</option>\r\n              <option value=\"Things happen – no big deal.\">Things happen – no big deal.</option>\r\n              <option value=\"It really bothers me and I am wary of the friendship.\">It really bothers me and I am wary\r\n                of the friendship.</option>\r\n              <option\r\n                value=\"I’m generally understanding, but I can only be blown off so many times before I will start to question the friendship.\">\r\n                I’m generally understanding, but I can only be blown off so many times before I will start to question\r\n                the friendship.</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"continue-button\" (click)=\"nextStep()\" >\r\n            Continue\r\n          </div>\r\n\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:80%\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"forms-field\">\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Are you in a relationship? </label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"status\" [(ngModel)]=\"status\">\r\n              <option>Single</option>\r\n              <option>Married</option>\r\n              <option>Co-Habitating</option>\r\n              <option value=\"Significant Other But Not Living Together\">Significant Other But Not Living Together\r\n              </option>\r\n              <option value=\"Divorced\">Divorced</option>\r\n              <option value=\"Widowed\">Widowed</option>\r\n              <option value=\"Engaged\">Engaged</option>\r\n\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <div class=\"blue-button-second-tab\">\r\n            Why do we ask this if its\r\n            not for dating or sex?\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Do youhave kids</label>\r\n            <select class=\"form-control\" id=\"sel1\">\r\n              <option>Yes</option>\r\n              <option>No</option>\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <ion-item class=\"mt-4 usually-dropdown mb-4\">\r\n\r\n            <ion-label>How about pets?</ion-label>\r\n            <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"Okay\" name=\"pets\" [(ngModel)]=\"pets\">\r\n              <ion-select-option value=\"Dog\" #Dog>Dog\r\n              </ion-select-option>\r\n              <ion-select-option value=\"Cat\" #Cat>Cat</ion-select-option>\r\n              <ion-select-option value=\"Rabbit\" #Rabbit>Rabbit\r\n              </ion-select-option>\r\n              <ion-select-option value=\"Birds\" #Birds>Birds</ion-select-option>\r\n              <ion-select-option value=\"Fish\" #Fish>Fish</ion-select-option>\r\n              <ion-select-option value=\"Reptile\" #Reptile>Reptile</ion-select-option>\r\n              <ion-select-option value=\"Other\" #Other>Other</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">I spend my days…</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"usr\" name=\"spend\" [(ngModel)]=\"spend\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">I also speak</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\" name=\"speak\" [(ngModel)]=\"speak\">\r\n          </div>\r\n          <div class=\"continue-button\"  (click)=\"nextStep()\">\r\n            Continue\r\n          </div>\r\n          <div class=\"previous-button\" (click)=\"previousStep()\">\r\n            Previous\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </mat-tab>\r\n\r\n\r\n\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:85%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"forms-field\">\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Do you smoke?</label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"smoke\" [(ngModel)]=\"smoke\">\r\n              <option value=\"Never\">Never</option>\r\n              <option value=\"Rarely\">Rarely</option>\r\n              <option value=\"Weekends Only\">Weekends Only</option>\r\n              <option value=\"Couple Times a Week\">Couple Times a Week</option>\r\n              <option value=\" Every Day\"> Every Day</option>\r\n\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">How about drinking alcohol? </label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"alcohol\" [(ngModel)]=\"alcohol\">\r\n\r\n              <option value=\"Never\">Never</option>\r\n              <option value=\"Rarely\">Rarely</option>\r\n              <option value=\"Weekends Only\">Weekends Only</option>\r\n              <option value=\"Couple Times a Week\">Couple Times a Week</option>\r\n              <option value=\" Every Day\"> Every Day</option>\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Education Level</label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"education\" [(ngModel)]=\"education\">\r\n\r\n              <option value=\"_none\">- None -</option>\r\n              <option value=\"Less Than High School Diploma\">Less Than High School Diploma</option>\r\n              <option value=\"High School Diploma\">High School Diploma</option>\r\n              <option value=\"Some College/Technical School\">Some College/Technical School</option>\r\n              <option value=\"Associates Degree\">Associates Degree</option>\r\n              <option value=\"Technical School Degree\">Technical School Degree</option>\r\n              <option value=\"College Degree\">College Degree</option>\r\n              <option value=\"Graduate Degree\">Graduate Degree</option>\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Favorite Books</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"usr\" name=\"books\" [(ngModel)]=\"books\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Favorite Movies</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"usr\" name=\"movies\" [(ngModel)]=\"movies\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Favorite TV Shows</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"usr\" name=\"shows\" [(ngModel)]=\"shows\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Favorite Music</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"usr\" name=\"music\" [(ngModel)]=\"music\"></textarea>\r\n          </div>\r\n\r\n       \r\n\r\n\r\n        </div>\r\n        <div class=\"continue-button\"  (click)=\"nextStep()\">\r\n          Continue\r\n        </div>\r\n        <div class=\"previous-button\" (click)=\"previousStep()\">\r\n          Previous\r\n        </div>\r\n\r\n      </mat-tab>\r\n\r\n\r\n\r\n\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:100%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"forms-field\">\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Do you want to add some more photos?</label>\r\n            <div class=\"ad-more-pics\">\r\n              <div class=\"image-upload-container\">\r\n                <img src=\"../../assets/Images/food.png\" class=\"food\">\r\n              </div>\r\n              <div class=\"image-upload-container\">\r\n                <img src=\"../../assets/Images/food.png\" class=\"food\">\r\n              </div>\r\n              <div class=\"image-upload-container\">\r\n                <img src=\"../../assets/Images/food.png\" class=\"food\">\r\n              </div>\r\n              <div class=\"image-upload-container\">\r\n                <img src=\"../../assets/Images/food.png\" class=\"food\">\r\n              </div>\r\n              <div class=\"image-upload-container\">\r\n                <img src=\"../../assets/Images/food.png\" class=\"food\">\r\n              </div>\r\n              <div class=\"image-upload-container\">\r\n                <img src=\"../../assets/Images/food.png\" class=\"food\">\r\n              </div>\r\n              <div class=\"image-upload-container\">\r\n                <img src=\"../../assets/Images/food.png\" class=\"food\">\r\n              </div>\r\n              <div class=\"image-upload-container\">\r\n                <img src=\"../../assets/Images/food.png\" class=\"food\">\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"comment\">Anything else you want to share?</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"comment\" name=\"anything\" [(ngModel)]=\"anything\"></textarea>\r\n          </div>\r\n          <div class=\"continue-button\"  (click)=\"optionDetail(live,talkabout,goodFriend,cancels,status,pets,spend,speak,smoke,alcohol,education,books,movies,shows,music,anything)\">\r\n            Complete\r\n          </div>\r\n          <div class=\"previous-button\" (click)=\"previousStep()\">\r\n            Previous\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n\r\n      <mat-tab>\r\n        <div class=\"forms-field\">\r\n          <div class=\"upper-text-changes\">\r\n            Hello! Would you like to add your hobbies and interests to your profile to improve your results?\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"First Pick your top 3\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Now pick the rest\">\r\n          </div>\r\n\r\n          <div class=\"continue-button\" (click)=\"nextStep()\">\r\n            Save Changes\r\n          </div>\r\n\r\n          <div class=\"continue-button-blue\">\r\n            Add More to Profile\r\n          </div>\r\n          <div class=\"span-container\">\r\n            <span class=\"under-text-button\">Not right now, Thanks.</span>\r\n          </div>\r\n        </div>\r\n\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Signin/optional-detail/optional-detail-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/Signin/optional-detail/optional-detail-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: OptionalDetailPageRoutingModule */

  /***/
  function srcAppSigninOptionalDetailOptionalDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/Signin/optional-detail/optional-detail.page.ts");

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
  "./src/app/Signin/optional-detail/optional-detail.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Signin/optional-detail/optional-detail.module.ts ***!
    \******************************************************************/

  /*! exports provided: OptionalDetailPageModule */

  /***/
  function srcAppSigninOptionalDetailOptionalDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    /*! ../../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _optional_detail_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./optional-detail-routing.module */
    "./src/app/Signin/optional-detail/optional-detail-routing.module.ts");
    /* harmony import */


    var _optional_detail_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./optional-detail.page */
    "./src/app/Signin/optional-detail/optional-detail.page.ts");
    /* harmony import */


    var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../Navigation/NavigationBar/navigationbar.module */
    "./src/app/Navigation/NavigationBar/navigationbar.module.ts");

    var OptionalDetailPageModule = function OptionalDetailPageModule() {
      _classCallCheck(this, OptionalDetailPageModule);
    };

    OptionalDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _optional_detail_routing_module__WEBPACK_IMPORTED_MODULE_8__["OptionalDetailPageRoutingModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_10__["NavigationbarModule"]],
      declarations: [_optional_detail_page__WEBPACK_IMPORTED_MODULE_9__["OptionalDetailPage"]]
    })], OptionalDetailPageModule);
    /***/
  },

  /***/
  "./src/app/Signin/optional-detail/optional-detail.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/Signin/optional-detail/optional-detail.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSigninOptionalDetailOptionalDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-sign-up {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  margin-top: 6em;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.forms-field {\n  margin: 3em 1em;\n}\n\np.register-with-us {\n  padding: 1.5em;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n\nbutton.btn.btn-success {\n  margin-bottom: 10px;\n}\n\n.chechk-box-terms {\n  margin-top: 10px;\n}\n\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #415DAE;\n}\n\n.facebook {\n  height: 2.9em;\n  width: 88%;\n}\n\n.btn-primary-google {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #E62E2D;\n  height: 3em;\n  width: 88%;\n}\n\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n\nspan.button-text {\n  width: 100%;\n}\n\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.signup-form-progress {\n  height: 23px;\n}\n\n.under-text {\n  color: #ada2a2;\n}\n\n.age-limit {\n  color: #ada2a2;\n}\n\n.form-control {\n  border: 1px solid;\n}\n\n.form-group {\n  margin: 1em 0em;\n}\n\n.progress {\n  display: flex;\n  height: 1.5rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n  margin: 0px 1.5em;\n  border: 1px solid;\n  position: fixed;\n  width: 90%;\n}\n\n.blue-button-second-tab {\n  background-color: #4472C4;\n  padding: 0.2em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 0px 0.5em;\n  border-radius: 6px;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 0em;\n  display: flex;\n  align-items: center;\n  color: black !important;\n  justify-content: space-between;\n  background-color: transparent !important;\n  width: 100% !important;\n  height: 2.5em;\n  border: 1px solid;\n}\n\n.dropdown {\n  margin-bottom: 1em;\n}\n\nul.dropdown-menu.show {\n  width: 100%;\n}\n\na {\n  color: black;\n}\n\n.upload-photos {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-direction: column;\n  color: black;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.btn {\n  color: black;\n  padding: 12px 20px;\n  border-radius: 8px;\n  /* font-size: 20px; */\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  align-items: center;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n\n.upload-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0px;\n  background-color: #DFF4F5;\n  margin: 9px 4em;\n  border-radius: 12px;\n  padding-left: 1em;\n}\n\n.or {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 21px;\n  margin: 1em;\n}\n\n.grid-icon {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  width: 100%;\n  text-align: center;\n}\n\n.icons {\n  height: 50vh;\n  overflow: auto;\n}\n\nimg.image-icon {\n  width: 61%;\n  margin: 1em;\n}\n\n.button-blue-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #4472C4;\n  color: white;\n  padding: 0.7em;\n  border-radius: 10px;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\n.terms-text {\n  height: 10vh;\n  overflow: auto;\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 0.5em;\n  text-align: justify;\n  font-size: 14px;\n}\n\n.terms {\n  margin: 1em 0px;\n}\n\n.continue-button-google {\n  background-color: #F64225;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.continue-button-facebook {\n  background-color: #4472C4;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.success-market {\n  text-align: center;\n  margin: 2em;\n  font-size: 18px;\n  margin-bottom: 0em;\n}\n\n.under-text-button {\n  color: #ada2a2;\n}\n\n.continue-button-last {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  margin-bottom: 0px;\n}\n\n.button-last {\n  text-align: center;\n  margin: 0em 3em;\n}\n\n.ad-more-pics {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n}\n\n.image-upload-container {\n  border: 1px solid;\n  /* height: 10vh; */\n}\n\n.continue-button-blue {\n  background-color: #4372c4;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.span-container {\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.upper-text-changes {\n  text-align: center;\n  font-size: 20px;\n}\n\n.progree-container.ng-star-inserted {\n  position: fixed;\n  width: 100%;\n  background-color: white;\n  padding: 1.5em 0em;\n  margin: 0px;\n  margin-top: -4vh;\n}\n\n.previous-button {\n  background-color: #E62E2D;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2lnbmluL29wdGlvbmFsLWRldGFpbC9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxTaWduaW5cXG9wdGlvbmFsLWRldGFpbFxcb3B0aW9uYWwtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvU2lnbmluL29wdGlvbmFsLWRldGFpbC9vcHRpb25hbC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUVJLFdBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBREFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNJSjs7QURGQTtFQUNJLGFBQUE7RUFFQSxVQUFBO0FDSUo7O0FERkE7RUFFSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFFQSxVQUFBO0FDR0o7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7QUNJSjs7QURGQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0tKOztBREhBO0VBQ0ksWUFBQTtBQ01KOztBREpBO0VBQ0ksY0FBQTtBQ09KOztBRExBO0VBQ0ksY0FBQTtBQ1FKOztBRE5BO0VBQ0ksaUJBQUE7QUNTSjs7QURQQTtFQUNJLGVBQUE7QUNVSjs7QUROQTtFQUVJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNTSjs7QURQQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1VKOztBRFJBO0VBQ0csa0JBQUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ1dKOztBRFRBO0VBQ0ksa0JBQUE7QUNZSjs7QURWQTtFQUNJLFdBQUE7QUNhSjs7QURWQTtFQUVJLFlBQUE7QUNZSjs7QURWQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ2FKOztBRFZBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDYUo7O0FEVkU7RUFDRSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNZSjs7QURSRTtFQUVFLGdCQUFBO0VBQ0Ysa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNVRjs7QURSRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1dKOztBRFJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDV0o7O0FEVEE7RUFDSSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNZSjs7QURUQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDWUo7O0FEVkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ2FKOztBRFhBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDY0o7O0FEWkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDZUo7O0FEYkE7RUFDSSxlQUFBO0FDZ0JKOztBRGRBO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNnQko7O0FEZEE7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2dCSjs7QURkQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2lCSjs7QURmQTtFQUVJLGNBQUE7QUNpQko7O0FEZkE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2tCSjs7QURoQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNtQko7O0FEaEJBO0VBQ0ksYUFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtBQ21CSjs7QURqQkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDb0JKOztBRGxCQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3FCSjs7QURuQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDc0JKOztBRHBCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ3VCSjs7QURyQkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN3Qko7O0FEdEJBO0VBRUkseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDd0JKIiwiZmlsZSI6InNyYy9hcHAvU2lnbmluL29wdGlvbmFsLWRldGFpbC9vcHRpb25hbC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tc2lnbi11cCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tdG9wOiA2ZW07XHJcbn1cclxuLmZ1bGwtd2lkdGhcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZvcm1zLWZpZWxke1xyXG4gICAgbWFyZ2luOiAzZW0gMWVtO1xyXG59XHJcbnAucmVnaXN0ZXItd2l0aC11cyB7XHJcbiAgICBwYWRkaW5nOiAxLjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5cclxuYnV0dG9uLmJ0bi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jaGVjaGstYm94LXRlcm1zIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE1REFFXHJcbn1cclxuLmZhY2Vib29rIHtcclxuICAgIGhlaWdodDogMi45ZW07XHJcbiBcclxuICAgIHdpZHRoOiA4OCVcclxufVxyXG4uYnRuLXByaW1hcnktZ29vZ2xlXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2MkUyRDtcclxuICAgIGhlaWdodDogM2VtO1xyXG5cclxuICAgIHdpZHRoOiA4OCVcclxufVxyXG5cclxucC5vci10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxufVxyXG5zcGFuLmJ1dHRvbi10ZXh0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb250aW51ZS1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbn1cclxuLnNpZ251cC1mb3JtLXByb2dyZXNze1xyXG4gICAgaGVpZ2h0OiAyM3B4O1xyXG59XHJcbi51bmRlci10ZXh0IHtcclxuICAgIGNvbG9yOiAjYWRhMmEyO1xyXG59XHJcbi5hZ2UtbGltaXR7XHJcbiAgICBjb2xvcjogI2FkYTJhMjs7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW46IDFlbSAwZW07XHJcbn1cclxuXHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgbWFyZ2luOiAwcHggMS41ZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuLmJsdWUtYnV0dG9uLXNlY29uZC10YWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMHB4IDAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xyXG4gICBtYXJnaW4tYm90dG9tOiAwZW07IFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbi5kcm9wZG93biB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxudWwuZHJvcGRvd24tbWVudS5zaG93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG59XHJcbmFcclxue1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi51cGxvYWQtcGhvdG9zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udXBsb2FkLWJ0bi13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIFxyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgLyogZm9udC1zaXplOiAyMHB4OyAqL1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIH1cclxuICBcclxuICAudXBsb2FkLWJ0bi13cmFwcGVyIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC51cGxvYWQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZGNEY1O1xyXG4gICAgbWFyZ2luOiA5cHggNGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG5cclxufVxyXG4ub3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBtYXJnaW46IDFlbTtcclxufVxyXG4uZ3JpZC1pY29uIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4uaWNvbnMge1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuaW1nLmltYWdlLWljb24ge1xyXG4gICAgd2lkdGg6IDYxJTtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcbi5idXR0b24tYmx1ZS10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC43ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcbi50ZXJtcy10ZXh0IHtcclxuICAgIGhlaWdodDogMTB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi50ZXJtcyB7XHJcbiAgICBtYXJnaW46IDFlbSAwcHg7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbi1nb29nbGVcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2NDIyNTtcclxuICAgIHBhZGRpbmc6IDAuNmVtIDJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMmVtIDFlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4uY29udGludWUtYnV0dG9uLWZhY2Vib29rXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XHJcbiAgICBwYWRkaW5nOiAwLjZlbSAyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDJlbSAxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuLnN1Y2Nlc3MtbWFya2V0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMGVtO1xyXG59XHJcbi51bmRlci10ZXh0LWJ1dHRvblxyXG57XHJcbiAgICBjb2xvcjogI2FkYTJhMjtcclxufVxyXG4uY29udGludWUtYnV0dG9uLWxhc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmJ1dHRvbi1sYXN0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMGVtIDNlbTtcclxuXHJcbn1cclxuLmFkLW1vcmUtcGljcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxufVxyXG4uaW1hZ2UtdXBsb2FkLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIC8qIGhlaWdodDogMTB2aDsgKi9cclxufVxyXG4uY29udGludWUtYnV0dG9uLWJsdWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3MmM0O1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbn1cclxuLnNwYW4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4udXBwZXItdGV4dC1jaGFuZ2VzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ucHJvZ3JlZS1jb250YWluZXIubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMS41ZW0gMGVtO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHZoO1xyXG59XHJcbi5wcmV2aW91cy1idXR0b25cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2MkUyRDtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hcmdpbjogMmVtO1xyXG59IiwiLm1haW4tc2lnbi11cCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDZlbTtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm1zLWZpZWxkIHtcbiAgbWFyZ2luOiAzZW0gMWVtO1xufVxuXG5wLnJlZ2lzdGVyLXdpdGgtdXMge1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNoZWNoay1ib3gtdGVybXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc29jaWFsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTVEQUU7XG59XG5cbi5mYWNlYm9vayB7XG4gIGhlaWdodDogMi45ZW07XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5idG4tcHJpbWFyeS1nb29nbGUge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2MkUyRDtcbiAgaGVpZ2h0OiAzZW07XG4gIHdpZHRoOiA4OCU7XG59XG5cbnAub3ItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyN3B4O1xufVxuXG5zcGFuLmJ1dHRvbi10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250aW51ZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbn1cblxuLnNpZ251cC1mb3JtLXByb2dyZXNzIHtcbiAgaGVpZ2h0OiAyM3B4O1xufVxuXG4udW5kZXItdGV4dCB7XG4gIGNvbG9yOiAjYWRhMmEyO1xufVxuXG4uYWdlLWxpbWl0IHtcbiAgY29sb3I6ICNhZGEyYTI7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW46IDFlbSAwZW07XG59XG5cbi5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBtYXJnaW46IDBweCAxLjVlbTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmJsdWUtYnV0dG9uLXNlY29uZC10YWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICBwYWRkaW5nOiAwLjJlbSAyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMHB4IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICBtYXJnaW4tYm90dG9tOiAwZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMi41ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uZHJvcGRvd24ge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbnVsLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udXBsb2FkLXBob3RvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnVwbG9hZC1idG4td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLyogZm9udC1zaXplOiAyMHB4OyAqL1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnVwbG9hZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERkY0RjU7XG4gIG1hcmdpbjogOXB4IDRlbTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG59XG5cbi5vciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIxcHg7XG4gIG1hcmdpbjogMWVtO1xufVxuXG4uZ3JpZC1pY29uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29ucyB7XG4gIGhlaWdodDogNTB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmltZy5pbWFnZS1pY29uIHtcbiAgd2lkdGg6IDYxJTtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5idXR0b24tYmx1ZS10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC43ZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG4udGVybXMtdGV4dCB7XG4gIGhlaWdodDogMTB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGVybXMge1xuICBtYXJnaW46IDFlbSAwcHg7XG59XG5cbi5jb250aW51ZS1idXR0b24tZ29vZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2NDIyNTtcbiAgcGFkZGluZzogMC42ZW0gMmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDJlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gIHBhZGRpbmc6IDAuNmVtIDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAyZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5zdWNjZXNzLW1hcmtldCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyZW07XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMGVtO1xufVxuXG4udW5kZXItdGV4dC1idXR0b24ge1xuICBjb2xvcjogI2FkYTJhMjtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1sYXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcbiAgaGVpZ2h0OiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgbWFyZ2luOiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmJ1dHRvbi1sYXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBlbSAzZW07XG59XG5cbi5hZC1tb3JlLXBpY3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDEwcHg7XG59XG5cbi5pbWFnZS11cGxvYWQtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIC8qIGhlaWdodDogMTB2aDsgKi9cbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNzJjNDtcbiAgaGVpZ2h0OiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgbWFyZ2luOiAyZW07XG59XG5cbi5zcGFuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi51cHBlci10ZXh0LWNoYW5nZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnByb2dyZWUtY29udGFpbmVyLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMS41ZW0gMGVtO1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogLTR2aDtcbn1cblxuLnByZXZpb3VzLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNjJFMkQ7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Signin/optional-detail/optional-detail.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Signin/optional-detail/optional-detail.page.ts ***!
    \****************************************************************/

  /*! exports provided: OptionalDetailPage */

  /***/
  function srcAppSigninOptionalDetailOptionalDetailPageTs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../config.service */
    "./src/app/config.service.ts");

    var OptionalDetailPage = /*#__PURE__*/function () {
      function OptionalDetailPage(http, _location, _Activatedroute, ConfigService) {
        _classCallCheck(this, OptionalDetailPage);

        this.http = http;
        this._location = _location;
        this._Activatedroute = _Activatedroute;
        this.ConfigService = ConfigService;
        this.maxNumberOfTabs = 5;
        this.selectedIndex = 0;
      }

      _createClass(OptionalDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.userDetail = JSON.parse(localStorage.getItem("currentUser"));
          this.uid = this.userDetail.user.uid;
          this.ConfigService.getUser(this.uid).subscribe(function (userData) {
            _this.userFullDetails = userData;
            console.log(_this.userFullDetails); //   if(this.userFullDetails.field_long_in_city != null)
            //   {
            //     this.live =this.userFullDetails.field_long_in_city.und[0].value
            //   }
            //  if(this.userFullDetails.field_talk_about !=null)
            //  {
            //    for(let i=0;i>this.userFullDetails.field_talk_about.und;i++)
            //     this.talkabout=this.userFullDetails.field_talk_about.und[i]
            //     console.log(this.talkabout)
            //  }
            //  if(this.userFullDetails.field_plans_get_cancelled != null)
            //  {
            //    this.cancels = this.userFullDetails.field_plans_get_cancelled.und[0].value
            //  }
            //  if(this.userFullDetails.field_relationship_status != null)
            //  {
            //    this.status = this.userFullDetails.field_relationship_status.und[0].value
            //  }
          });
        }
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
      }, {
        key: "optionDetail",
        value: function optionDetail(live, talkabout, goodFriend, cancels, status, pets, spend, speak, smoke, alcohol, education, books, movies, shows, music, anything) {
          var _this2 = this;

          console.log(goodFriend);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("X-CSRF-Token", this.userDetail.token).set("Content-Type", "application/json").set("X-Cookie", this.userDetail.session_name + "=" + this.userDetail.sessid);
          var requestOptions = {
            headers: headers,
            withCredentials: true
          };
          this.http.put("https://gowebtutorial.com/api/json/user/" + this.uid, {
            field_long_in_city: {
              und: live
            },
            field_talk_about: {
              und: talkabout
            },
            //  field_good_friend:
            //  {
            //     und:[{goodFriend}]
            //   },
            field_plans_get_cancelled: {
              und: cancels
            },
            field_relationship_status: {
              und: status
            },
            field_any_pets: {
              und: pets
            },
            field_spend_your_days: {
              und: [{
                value: spend
              }]
            },
            field_languages: {
              und: {
                value: speak
              }
            },
            field_smoke: {
              und: smoke
            },
            field_alcohol: {
              und: alcohol
            },
            field_education_level: {
              und: education
            },
            field_favorite_books: {
              und: {
                value: books
              }
            },
            field_favorite_movies: {
              und: {
                value: movies
              }
            },
            field_favorite_tv_shows: {
              und: {
                value: shows
              }
            },
            field_favorite_music: {
              und: {
                value: music
              }
            },
            field_you_say: {
              und: {
                value: anything
              }
            }
          }, requestOptions).subscribe(function (UserData) {
            _this2.nextStep();

            console.log(UserData);
          });
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          this._location.back();
        }
      }]);

      return OptionalDetailPage;
    }();

    OptionalDetailPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
      }];
    };

    OptionalDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-optional-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./optional-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/optional-detail/optional-detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./optional-detail.page.scss */
      "./src/app/Signin/optional-detail/optional-detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])], OptionalDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=Signin-optional-detail-optional-detail-module-es5.js.map