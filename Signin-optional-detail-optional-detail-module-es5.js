function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-optional-detail-optional-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/optional-detail/optional-detail.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/optional-detail/optional-detail.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSigninOptionalDetailOptionalDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"main-sign-up\">\r\n    <mat-tab-group class=\"mat-background\" [(selectedIndex)]=\"selectedIndex\">\r\n\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:20%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"forms-field\">\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"usr\">What do you like to do for fun?</label>\r\n            <div class=\"form-check\">\r\n              <label class=\"form-check-label\" for=\"check1\">\r\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\" name=\"option1\" value=\"something\"\r\n                  checked>Option 1\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <label class=\"form-check-label\" for=\"check2\">\r\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"check2\" name=\"option2\" value=\"something\">Option 2\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <label class=\"form-check-label\">\r\n                <input type=\"checkbox\" class=\"form-check-input\">Option 3\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"usr\">How long have you lived here?</label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"long\" [(ngModel)]=\"live\">\r\n              <option value=\"0\"> < 2 years</option> \r\n              <option value=\"1\">2-5 years </option>\r\n              <option value=\"2\">>5 years</option>\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <ion-item class=\"mt-4 usually-dropdown\">\r\n\r\n            <ion-label>My friends and I usually talk about</ion-label>\r\n            <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"Okay\" name=\"talkabout\" [(ngModel)]=\"talkabout\">\r\n\r\n              <ion-select-option value=\"Work\" #Work>Work\r\n              </ion-select-option>\r\n              <ion-select-option value=\"Family\" #Family>Family</ion-select-option>\r\n              <ion-select-option value=\"Relationships\" #Relationships>Relationships\r\n              </ion-select-option>\r\n              <ion-select-option value=\"Gossip\" #Gossip>Gossip</ion-select-option>\r\n              <ion-select-option value=\"Fashion\" #Fashion>Fashion</ion-select-option>\r\n              <ion-select-option value=\"Sports\" #Sports>Sports</ion-select-option>\r\n              <ion-select-option value=\"Other\" #Other>Other</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n\r\n\r\n\r\n          <ion-item class=\"mt-4 usually-dropdown mb-4\">\r\n\r\n            <ion-label>A Good Friend Is Someone Who...</ion-label>\r\n            <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"Okay\" name=\"goodFriend\" [(ngModel)]=\"goodFriend\">\r\n\r\n              <ion-select-option value=\"is always there for me.\" #always>is always there for me.\r\n              </ion-select-option>\r\n              <ion-select-option value=\"Family\" #Family>Family</ion-select-option>\r\n              <ion-select-option value=\"always sides with me no matter what.\" #sides>always sides with me no matter\r\n                what.\r\n              </ion-select-option>\r\n              <ion-select-option value=\"will be honest with me even if it hurts.\" #hurts>will be honest with me even if\r\n                it hurts.</ion-select-option>\r\n              <ion-select-option value=\"gives advice\" #advice>gives advice</ion-select-option>\r\n              <ion-select-option value=\"takes my advice.\" #takes>takes my advice.</ion-select-option>\r\n              <ion-select-option value=\"is an activity partner.\" #partner>is an activity partner.</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"usr\">When someone cancels plans we made </label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"cancels\" [(ngModel)]=\"cancels\">\r\n              <option value=\"My reaction depends on the reason why.\">My reaction depends on the reason why.</option>\r\n              <option value=\"I think no big deal\">I think no big deal</option>\r\n              <option value=\"It really bothers me and I am wary of the friendship.\">It really bothers me and I am wary\r\n                of the friendship.</option>\r\n              <option\r\n                value=\"I’m generally understanding, but I can only be blown off so many times before I will start to question the friendship.\">\r\n                I’m generally understanding, but I can only be blown off so many times before I will start to question\r\n                the friendship.</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"continue-button\" (click)=\"nextStep()\" >\r\n            Continue\r\n          </div>\r\n\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:80%\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"forms-field\">\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Are you in a relationship? </label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"status\" [(ngModel)]=\"status\">\r\n              <option>Yes</option>\r\n              <option>No</option>\r\n              <!-- <option>Single</option>\r\n              <option>Married</option>\r\n              <option>Co-Habitating</option>\r\n              <option value=\"Significant Other But Not Living Together\">Significant Other But Not Living Together\r\n              </option>\r\n              <option value=\"Divorced\">Divorced</option>\r\n              <option value=\"Widowed\">Widowed</option>\r\n              <option value=\"Engaged\">Engaged</option> -->\r\n\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <div class=\"blue-button-second-tab\">\r\n            Why do we ask this if its\r\n            not for dating or sex?\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Do you have kids?</label>\r\n            <select class=\"form-control\" id=\"sel1\">\r\n              <option>Yes</option>\r\n              <option>No</option>\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <ion-item class=\"mt-4 usually-dropdown mb-4\">\r\n\r\n            <ion-label>Do You Have Pets?</ion-label>\r\n            <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"Okay\" name=\"pets\" [(ngModel)]=\"pets\">\r\n              <ion-select-option value=\"Dog\" #Dog>Dog\r\n              </ion-select-option>\r\n              <ion-select-option value=\"Cat\" #Cat>Cat</ion-select-option>\r\n              <ion-select-option value=\"Rabbit\" #Rabbit>Rabbit\r\n              </ion-select-option>\r\n              <ion-select-option value=\"Birds\" #Birds>Birds</ion-select-option>\r\n              <ion-select-option value=\"Fish\" #Fish>Fish</ion-select-option>\r\n              <ion-select-option value=\"Reptile\" #Reptile>Reptile</ion-select-option>\r\n              <ion-select-option value=\"Other\" #Other>Other</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">I spend my days…</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"usr\" name=\"spend\" [(ngModel)]=\"spend\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">I also speak</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\" name=\"speak\" [(ngModel)]=\"speak\">\r\n          </div>\r\n          <div class=\"continue-button\"  (click)=\"nextStep()\">\r\n            Continue\r\n          </div>\r\n          <div class=\"previous-button\" (click)=\"previousStep()\">\r\n            Previous\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </mat-tab>\r\n\r\n\r\n\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:85%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"forms-field\">\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Do you smoke?</label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"smoke\" [(ngModel)]=\"smoke\">\r\n              <option value=\"Never\">Never</option>\r\n              <option value=\"Rarely\">Socially</option>\r\n              <option value=\"Yes\">Yes</option>\r\n              <!-- <option value=\"Couple Times a Week\">Couple Times a Week</option>\r\n              <option value=\" Every Day\"> Every Day</option> -->\r\n\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">How about drinking alcohol? </label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"alcohol\" [(ngModel)]=\"alcohol\">\r\n\r\n              <option value=\"Never\">Never</option>\r\n              <option value=\"Rarely\">Rarely</option>\r\n              <option value=\"Weekends Only\">Weekends Only</option>\r\n              <option value=\"Couple Times a Week\">Couple Times a Week</option>\r\n              <option value=\" Every Day\"> Every Day</option>\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <!-- <div class=\"form-group\">\r\n            <label for=\"sel1\">Education Level</label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"education\" [(ngModel)]=\"education\">\r\n\r\n              <option value=\"_none\">- None -</option>\r\n              <option value=\"Less Than High School Diploma\">Less Than High School Diploma</option>\r\n              <option value=\"High School Diploma\">High School Diploma</option>\r\n              <option value=\"Some College/Technical School\">Some College/Technical School</option>\r\n              <option value=\"Associates Degree\">Associates Degree</option>\r\n              <option value=\"Technical School Degree\">Technical School Degree</option>\r\n              <option value=\"College Degree\">College Degree</option>\r\n              <option value=\"Graduate Degree\">Graduate Degree</option>\r\n            </select>\r\n          </div> -->\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Favorite Books</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"usr\" name=\"books\" [(ngModel)]=\"books\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Favorite Movies</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"usr\" name=\"movies\" [(ngModel)]=\"movies\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Favorite TV Shows</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"usr\" name=\"shows\" [(ngModel)]=\"shows\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Favorite Music</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"usr\" name=\"music\" [(ngModel)]=\"music\"></textarea>\r\n          </div>\r\n\r\n       \r\n\r\n\r\n        </div>\r\n        <div class=\"continue-button\"  (click)=\"nextStep()\">\r\n          Continue\r\n        </div>\r\n        <div class=\"previous-button\" (click)=\"previousStep()\">\r\n          Previous\r\n        </div>\r\n\r\n      </mat-tab>\r\n\r\n\r\n\r\n\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:100%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"forms-field\">\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Do you want to add some more photos?</label>\r\n            <div class=\"ad-more-pics\">\r\n              <div class=\"image-upload-container\">\r\n                <img src=\"../../assets/Images/food.png\" class=\"food\">\r\n              </div>\r\n              <div class=\"image-upload-container\">\r\n                <img src=\"../../assets/Images/food.png\" class=\"food\">\r\n              </div>\r\n              <div class=\"image-upload-container\">\r\n                <img src=\"../../assets/Images/food.png\" class=\"food\">\r\n              </div>\r\n              <div class=\"image-upload-container\">\r\n                <img src=\"../../assets/Images/food.png\" class=\"food\">\r\n              </div>\r\n              <div class=\"image-upload-container\">\r\n                <img src=\"../../assets/Images/food.png\" class=\"food\">\r\n              </div>\r\n              <div class=\"image-upload-container\">\r\n                <img src=\"../../assets/Images/food.png\" class=\"food\">\r\n              </div>\r\n              <div class=\"image-upload-container\">\r\n                <img src=\"../../assets/Images/food.png\" class=\"food\">\r\n              </div>\r\n              <div class=\"image-upload-container\">\r\n                <img src=\"../../assets/Images/food.png\" class=\"food\">\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"comment\">Anything else you want to share?</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"comment\" name=\"anything\" [(ngModel)]=\"anything\"></textarea>\r\n          </div>\r\n          <div class=\"continue-button\"  (click)=\"optionDetail(live,talkabout,goodFriend,cancels,status,pets,spend,speak,smoke,alcohol,education,books,movies,shows,music,anything)\">\r\n            Complete\r\n          </div>\r\n          <div class=\"previous-button\" (click)=\"previousStep()\">\r\n            Previous\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n\r\n      <mat-tab>\r\n\r\n        <div class=\"main-div-top-list\">\r\n        <div class=\"forms-field\">\r\n          <div class=\"upper-text-changes\">\r\n            Hello! Would you like to add your hobbies and interests to your profile to improve your results?\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"First Pick your top 3\">\r\n          </div>\r\n\r\n          <!-- <div class=\"form-group\">\r\n\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Now pick the rest\">\r\n          </div> -->\r\n\r\n          <div class=\"continue-button\" (click)=\"nextStep()\">\r\n            Save Changes\r\n          </div>\r\n\r\n          <!-- <div class=\"continue-button-blue\">\r\n            Add More to Profile\r\n          </div> -->\r\n          <div class=\"span-container\">\r\n            <span class=\"under-text-button\">Don’t ask me this again</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/signin/optional-detail/optional-detail-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/signin/optional-detail/optional-detail-routing.module.ts ***!
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
    "./src/app/signin/optional-detail/optional-detail.page.ts");

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
  "./src/app/signin/optional-detail/optional-detail.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/signin/optional-detail/optional-detail.module.ts ***!
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
    "./src/app/signin/optional-detail/optional-detail-routing.module.ts");
    /* harmony import */


    var _optional_detail_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./optional-detail.page */
    "./src/app/signin/optional-detail/optional-detail.page.ts");
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
  "./src/app/signin/optional-detail/optional-detail.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/signin/optional-detail/optional-detail.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSigninOptionalDetailOptionalDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-sign-up {\n  display: flex;\n  flex-direction: column;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.forms-field {\n  margin: 4em 1em;\n}\n\np.register-with-us {\n  padding: 1.5em;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n\nbutton.btn.btn-success {\n  margin-bottom: 10px;\n}\n\n.chechk-box-terms {\n  margin-top: 10px;\n}\n\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #415DAE;\n}\n\n.facebook {\n  height: 2.9em;\n  width: 88%;\n}\n\n.btn-primary-google {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #E62E2D;\n  height: 3em;\n  width: 88%;\n}\n\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n\nspan.button-text {\n  width: 100%;\n}\n\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.signup-form-progress {\n  height: 23px;\n}\n\n.under-text {\n  color: #ada2a2;\n}\n\n.age-limit {\n  color: #ada2a2;\n}\n\n.form-control {\n  border: 1px solid;\n}\n\n.form-group {\n  margin: 1em 0em;\n}\n\n.progress {\n  display: flex;\n  height: 1.5rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n  margin: 0px 1.5em;\n  border: 1px solid;\n  position: fixed;\n  width: 90%;\n}\n\n.blue-button-second-tab {\n  background-color: #4472C4;\n  padding: 0.2em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 0px 0.5em;\n  border-radius: 6px;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 0em;\n  display: flex;\n  align-items: center;\n  color: black !important;\n  justify-content: space-between;\n  background-color: transparent !important;\n  width: 100% !important;\n  height: 2.5em;\n  border: 1px solid;\n}\n\n.dropdown {\n  margin-bottom: 1em;\n}\n\nul.dropdown-menu.show {\n  width: 100%;\n}\n\na {\n  color: black;\n}\n\n.upload-photos {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-direction: column;\n  color: black;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.btn {\n  color: black;\n  padding: 12px 20px;\n  border-radius: 8px;\n  /* font-size: 20px; */\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  align-items: center;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n\n.upload-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0px;\n  background-color: #DFF4F5;\n  margin: 9px 4em;\n  border-radius: 12px;\n  padding-left: 1em;\n}\n\n.or {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 21px;\n  margin: 1em;\n}\n\n.grid-icon {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  width: 100%;\n  text-align: center;\n}\n\n.icons {\n  height: 50vh;\n  overflow: auto;\n}\n\nimg.image-icon {\n  width: 61%;\n  margin: 1em;\n}\n\n.button-blue-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #4472C4;\n  color: white;\n  padding: 0.7em;\n  border-radius: 10px;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\n.terms-text {\n  height: 10vh;\n  overflow: auto;\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 0.5em;\n  text-align: justify;\n  font-size: 14px;\n}\n\n.terms {\n  margin: 1em 0px;\n}\n\n.continue-button-google {\n  background-color: #F64225;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.continue-button-facebook {\n  background-color: #4472C4;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.success-market {\n  text-align: center;\n  margin: 2em;\n  font-size: 18px;\n  margin-bottom: 0em;\n}\n\n.under-text-button {\n  color: #ada2a2;\n}\n\n.continue-button-last {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  margin-bottom: 0px;\n}\n\n.button-last {\n  text-align: center;\n  margin: 0em 3em;\n}\n\n.ad-more-pics {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n}\n\n.image-upload-container {\n  border: 1px solid;\n  /* height: 10vh; */\n}\n\n.continue-button-blue {\n  background-color: #4372c4;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.span-container {\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.upper-text-changes {\n  text-align: center;\n  font-size: 20px;\n}\n\n.progree-container {\n  position: fixed;\n  width: 100%;\n  background-color: white;\n  padding: 1.5em 0em;\n  margin: 0px;\n}\n\n.previous-button {\n  background-color: #E62E2D;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.main-div-top-list.ng-star-inserted {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG9jdW1lbnRzL1NvdXJjZWNvZGUgV29yay9Bbmd1bGFyIE9mZmljZSBQcm9qZWN0L25vdDREYXRpbmcvc3JjL2FwcC9zaWduaW4vb3B0aW9uYWwtZGV0YWlsL29wdGlvbmFsLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ25pbi9vcHRpb25hbC1kZXRhaWwvb3B0aW9uYWwtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtBQ0FKOztBREdBO0VBRUksV0FBQTtBQ0RKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUVBLFVBQUE7QUNFSjs7QURBQTtFQUVJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUVBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0FDS0o7O0FESEE7RUFDSSxjQUFBO0FDTUo7O0FESkE7RUFDSSxpQkFBQTtBQ09KOztBRExBO0VBQ0ksZUFBQTtBQ1FKOztBREpBO0VBRUksYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ09KOztBRExBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDUUo7O0FETkE7RUFDRyxrQkFBQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDU0o7O0FEUEE7RUFDSSxrQkFBQTtBQ1VKOztBRFJBO0VBQ0ksV0FBQTtBQ1dKOztBRFJBO0VBRUksWUFBQTtBQ1VKOztBRFJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDV0o7O0FEUkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNXSjs7QURSRTtFQUNFLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1VKOztBRE5FO0VBRUUsZ0JBQUE7RUFDRixrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ1FGOztBRE5FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDU0o7O0FETkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNTSjs7QURQQTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1VKOztBRFBBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNVSjs7QURSQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDV0o7O0FEVEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNZSjs7QURWQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNhSjs7QURYQTtFQUNJLGVBQUE7QUNjSjs7QURaQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDY0o7O0FEWkE7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2NKOztBRFpBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDZUo7O0FEYkE7RUFFSSxjQUFBO0FDZUo7O0FEYkE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2dCSjs7QURkQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ2lCSjs7QURkQTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7QUNpQko7O0FEZkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDa0JKOztBRGhCQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ21CSjs7QURqQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDb0JKOztBRGxCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ3FCSjs7QURuQkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDc0JKOztBRG5CQTtFQUVJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3FCSjs7QURuQkE7RUFFSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGdCQUFBO0FDb0JKIiwiZmlsZSI6InNyYy9hcHAvc2lnbmluL29wdGlvbmFsLWRldGFpbC9vcHRpb25hbC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tc2lnbi11cCB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgIFxyXG59XHJcbi5mdWxsLXdpZHRoXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mb3Jtcy1maWVsZHtcclxuICAgIG1hcmdpbjogNGVtIDFlbTtcclxufVxyXG5wLnJlZ2lzdGVyLXdpdGgtdXMge1xyXG4gICAgcGFkZGluZzogMS41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbmJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uY2hlY2hrLWJveC10ZXJtcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc29jaWFsLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNURBRVxyXG59XHJcbi5mYWNlYm9vayB7XHJcbiAgICBoZWlnaHQ6IDIuOWVtO1xyXG4gXHJcbiAgICB3aWR0aDogODglXHJcbn1cclxuLmJ0bi1wcmltYXJ5LWdvb2dsZVxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNjJFMkQ7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuXHJcbiAgICB3aWR0aDogODglXHJcbn1cclxuXHJcbnAub3ItdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbn1cclxuc3Bhbi5idXR0b24tdGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGludWUtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hcmdpbjogMmVtO1xyXG59XHJcbi5zaWdudXAtZm9ybS1wcm9ncmVzc3tcclxuICAgIGhlaWdodDogMjNweDtcclxufVxyXG4udW5kZXItdGV4dCB7XHJcbiAgICBjb2xvcjogI2FkYTJhMjtcclxufVxyXG4uYWdlLWxpbWl0e1xyXG4gICAgY29sb3I6ICNhZGEyYTI7O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luOiAxZW0gMGVtO1xyXG59XHJcblxyXG5cclxuLnByb2dyZXNzIHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIG1hcmdpbjogMHB4IDEuNWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcbi5ibHVlLWJ1dHRvbi1zZWNvbmQtdGFiIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweCAwLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcclxuICAgbWFyZ2luLWJvdHRvbTogMGVtOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG4uZHJvcGRvd24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcbnVsLmRyb3Bkb3duLW1lbnUuc2hvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxufVxyXG5hXHJcbntcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4udXBsb2FkLXBob3RvcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnVwbG9hZC1idG4td3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuYnRuIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICBcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIC8qIGZvbnQtc2l6ZTogMjBweDsgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLnVwbG9hZC1idG4td3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcclxuXHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAudXBsb2FkLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRjRGNTtcclxuICAgIG1hcmdpbjogOXB4IDRlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuXHJcbn1cclxuLm9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbn1cclxuLmdyaWQtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLmljb25zIHtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbmltZy5pbWFnZS1pY29uIHtcclxuICAgIHdpZHRoOiA2MSU7XHJcbiAgICBtYXJnaW46IDFlbTtcclxufVxyXG4uYnV0dG9uLWJsdWUtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuN2VtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG4udGVybXMtdGV4dCB7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4udGVybXMge1xyXG4gICAgbWFyZ2luOiAxZW0gMHB4O1xyXG59XHJcbi5jb250aW51ZS1idXR0b24tZ29vZ2xlXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNjQyMjU7XHJcbiAgICBwYWRkaW5nOiAwLjZlbSAyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDJlbSAxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbi1mYWNlYm9va1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xyXG4gICAgcGFkZGluZzogMC42ZW0gMmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAyZW0gMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbi5zdWNjZXNzLW1hcmtldCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBlbTtcclxufVxyXG4udW5kZXItdGV4dC1idXR0b25cclxue1xyXG4gICAgY29sb3I6ICNhZGEyYTI7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbi1sYXN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5idXR0b24tbGFzdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBlbSAzZW07XHJcblxyXG59XHJcbi5hZC1tb3JlLXBpY3Mge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbn1cclxuLmltYWdlLXVwbG9hZC1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAvKiBoZWlnaHQ6IDEwdmg7ICovXHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbi1ibHVle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNzJjNDtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hcmdpbjogMmVtO1xyXG59XHJcbi5zcGFuLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnVwcGVyLXRleHQtY2hhbmdlcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnByb2dyZWUtY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEuNWVtIDBlbTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG5cclxufVxyXG4ucHJldmlvdXMtYnV0dG9uXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNjJFMkQ7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW46IDJlbTtcclxufVxyXG4ubWFpbi1kaXYtdG9wLWxpc3Qubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSIsIi5tYWluLXNpZ24tdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybXMtZmllbGQge1xuICBtYXJnaW46IDRlbSAxZW07XG59XG5cbnAucmVnaXN0ZXItd2l0aC11cyB7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2hlY2hrLWJveC10ZXJtcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zb2NpYWwtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNURBRTtcbn1cblxuLmZhY2Vib29rIHtcbiAgaGVpZ2h0OiAyLjllbTtcbiAgd2lkdGg6IDg4JTtcbn1cblxuLmJ0bi1wcmltYXJ5LWdvb2dsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTYyRTJEO1xuICBoZWlnaHQ6IDNlbTtcbiAgd2lkdGg6IDg4JTtcbn1cblxucC5vci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI3cHg7XG59XG5cbnNwYW4uYnV0dG9uLXRleHQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xufVxuXG4uc2lnbnVwLWZvcm0tcHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDIzcHg7XG59XG5cbi51bmRlci10ZXh0IHtcbiAgY29sb3I6ICNhZGEyYTI7XG59XG5cbi5hZ2UtbGltaXQge1xuICBjb2xvcjogI2FkYTJhMjtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbjogMWVtIDBlbTtcbn1cblxuLnByb2dyZXNzIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMS41cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIG1hcmdpbjogMHB4IDEuNWVtO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogOTAlO1xufVxuXG4uYmx1ZS1idXR0b24tc2Vjb25kLXRhYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gIHBhZGRpbmc6IDAuMmVtIDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwcHggMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XG4gIG1hcmdpbi1ib3R0b206IDBlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbi5kcm9wZG93biB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxudWwuZHJvcGRvd24tbWVudS5zaG93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi51cGxvYWQtcGhvdG9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5idG4ge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAvKiBmb250LXNpemU6IDIwcHg7ICovXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi51cGxvYWQtYnRuLXdyYXBwZXIgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xufVxuXG4udXBsb2FkLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGRjRGNTtcbiAgbWFyZ2luOiA5cHggNGVtO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cblxuLm9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5ncmlkLWljb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb25zIHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuaW1nLmltYWdlLWljb24ge1xuICB3aWR0aDogNjElO1xuICBtYXJnaW46IDFlbTtcbn1cblxuLmJ1dHRvbi1ibHVlLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjdlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi50ZXJtcy10ZXh0IHtcbiAgaGVpZ2h0OiAxMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50ZXJtcyB7XG4gIG1hcmdpbjogMWVtIDBweDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1nb29nbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjY0MjI1O1xuICBwYWRkaW5nOiAwLjZlbSAyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMmVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uY29udGludWUtYnV0dG9uLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbiAgcGFkZGluZzogMC42ZW0gMmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDJlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnN1Y2Nlc3MtbWFya2V0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJlbTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwZW07XG59XG5cbi51bmRlci10ZXh0LWJ1dHRvbiB7XG4gIGNvbG9yOiAjYWRhMmEyO1xufVxuXG4uY29udGludWUtYnV0dG9uLWxhc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uYnV0dG9uLWxhc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMGVtIDNlbTtcbn1cblxuLmFkLW1vcmUtcGljcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICBncmlkLWdhcDogMTBweDtcbn1cblxuLmltYWdlLXVwbG9hZC1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgLyogaGVpZ2h0OiAxMHZoOyAqL1xufVxuXG4uY29udGludWUtYnV0dG9uLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3MmM0O1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbn1cblxuLnNwYW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnVwcGVyLXRleHQtY2hhbmdlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucHJvZ3JlZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMS41ZW0gMGVtO1xuICBtYXJnaW46IDBweDtcbn1cblxuLnByZXZpb3VzLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNjJFMkQ7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xufVxuXG4ubWFpbi1kaXYtdG9wLWxpc3Qubmctc3Rhci1pbnNlcnRlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/signin/optional-detail/optional-detail.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/signin/optional-detail/optional-detail.page.ts ***!
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/optional-detail/optional-detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./optional-detail.page.scss */
      "./src/app/signin/optional-detail/optional-detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])], OptionalDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=signin-optional-detail-optional-detail-module-es5.js.map