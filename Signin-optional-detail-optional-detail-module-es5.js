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


    __webpack_exports__["default"] = "<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<ion-content>\r\n  <div class=\"main-sign-up\">\r\n    <mat-tab-group class=\"mat-background\" [(selectedIndex)]=\"selectedIndex\">\r\n\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:25%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"forms-field\">\r\n\r\n\r\n    \r\n          <div class=\"ionic-dropdowns\">\r\n\r\n            <label class=\"label-ionic-dropdown\">What do you like to do for fun?</label>\r\n            <ion-item class=\"usually-dropdown\">\r\n              <ion-label></ion-label>\r\n              <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"Okay\" name=\"fun\" [(ngModel)]=\"fun\"\r\n                class=\"ion-select-option-setting\">\r\n\r\n                <ion-select-option value=\"yoga\" #yogas>yoga</ion-select-option>\r\n                <ion-select-option value=\"playdates (parents and children)\" #playdatess>playdates (parents and children)\r\n                 </ion-select-option>\r\n                    <ion-select-option value=\"happy hour/cocktails/beers\" #beers>happy hour/cocktails/beers\r\n                 </ion-select-option>\r\n                 <ion-select-option value=\"sightseeing\" #sightseeings>sightseeing</ion-select-option>\r\n                 <ion-select-option value=\"artsy stuff (making or looking at)\" #artsy>artsy stuff (making or looking at)\r\n                 </ion-select-option>\r\n                 <ion-select-option value=\"cooking\" #cook>cooking</ion-select-option>\r\n                 <ion-select-option value=\"dancing\" #dancing>dancing</ion-select-option>\r\n                 <ion-select-option value=\"people watching\" #watching>people watching</ion-select-option>\r\n              <ion-select-option value=\"traveling/vacations\" #traveling>traveling/vacations</ion-select-option>\r\n   \r\n                 <ion-select-option value=\"history buff\" #history>history buff</ion-select-option>\r\n                 <ion-select-option value=\"board games\" #board>board games</ion-select-option>\r\n                 <ion-select-option value=\"sports (playing)\" #sports>sports (playing)</ion-select-option>\r\n                 <ion-select-option value=\"mom's/dad's night out w/o kids\" #mom>mom's/dad's night out w/o kids\r\n                 </ion-select-option>\r\n                 <ion-select-option value=\"outdoor activities\" #outdoor>outdoor activities</ion-select-option>\r\n                 <ion-select-option value=\"dining out\" #dining>dining out</ion-select-option>\r\n                 <ion-select-option value=\"concerts/shows\" #concerts>concerts/shows</ion-select-option>\r\n                 <ion-select-option value=\"sports (watching)\" #sportwatching>sports (watching)</ion-select-option>\r\n                 <ion-select-option value=\"shopping\" #shoppings>shopping</ion-select-option>\r\n                 <ion-select-option value=\"video games\" #games>video games</ion-select-option>\r\n                  <ion-select-option value=\"crafty things (things you make)\" #crafty>crafty things (things you make)\r\n                 </ion-select-option>\r\n                 <ion-select-option value=\"photography\" #photographs>photography</ion-select-option>\r\n                 <ion-select-option value=\"animal lover/pet owner\" #animal>animal lover/pet owner</ion-select-option>\r\n                 <ion-select-option value=\"crime/mystery reader\" #crime> crime/mystery reader</ion-select-option>\r\n                 <ion-select-option value=\"chess\" #chess>chess</ion-select-option>\r\n   \r\n   \r\n    <ion-select-option value=\"movies\">movies</ion-select-option>\r\n        \r\n                 <ion-select-option value=\"fitness/exercise\" >fitness/exercise</ion-select-option>\r\n                 <ion-select-option value=\"playing music\">playing music</ion-select-option>\r\n               <ion-select-option value=\"trekking/backpacking/camping\" >trekking/backpacking/camping\r\n                 </ion-select-option> \r\n                     <ion-select-option value=\"cars/motorcycles\" #cars>cars/motorcycles</ion-select-option>\r\n                 <ion-select-option value=\"antiques\" #antiques>antiques</ion-select-option>\r\n                 <ion-select-option value=\"horses/riding\" #horses>horses/riding</ion-select-option>\r\n                 <ion-select-option value=\"anime/manga\" #anime>anime/manga</ion-select-option>\r\n                 <ion-select-option value=\"scifi/fantasy\" #scifi>scifi/fantasy</ion-select-option>\r\n                 <ion-select-option value=\"scuba\" #scuba> scuba</ion-select-option>\r\n                 <ion-select-option value=\"gardeningr\" #gardening>gardening</ion-select-option>\r\n                 <ion-select-option value=\"rock climbing\" #rock>rock climbing</ion-select-option>\r\n                 <ion-select-option value=\"cycling/mountain biking\" #cycling>cycling/mountain biking</ion-select-option>\r\n   \r\n                 <ion-select-option value=\"mindfulness and meditation\" #mindfulness>mindfulness and meditation\r\n                 </ion-select-option>\r\n                 <ion-select-option value=\"makeup/hair/beauty\" #makeup>makeup/hair/beauty</ion-select-option>\r\n                 <ion-select-option value=\" gambling\" #gambling>gambling</ion-select-option>\r\n   \r\n                 <ion-select-option value=\"billiards/snooker\" #billiards>billiards/snooker</ion-select-option>\r\n                 <ion-select-option value=\"astrology/tarot\" #astrology>astrology/tarot</ion-select-option>\r\n                 <ion-select-option value=\"golf\" #astrology> golf</ion-select-option>\r\n                 <ion-select-option value=\"day hikes/bushwalking\" #hikes>day hikes/bushwalking</ion-select-option>\r\n                 <ion-select-option value=\"tabletop RPG (D&D)\" #tabletop>tabletop RPG (D&D)</ion-select-option>\r\n                 <ion-select-option value=\"reading\" #reading>reading</ion-select-option>\r\n                 <ion-select-option value=\"creative writing\" #creative>creative writing</ion-select-option>\r\n                 <ion-select-option value=\"cosplay\" #cosplay>cosplay</ion-select-option>\r\n                 <ion-select-option value=\"home decorating\" #home>home decorating</ion-select-option>\r\n   \r\n                 <ion-select-option value=\" knitting, crochet, or sewing\" #knitting>knitting, crochet, or sewing\r\n                 </ion-select-option>\r\n   \r\n   \r\n                 <ion-select-option value=\"card games\" #card>card games</ion-select-option>\r\n                 <ion-select-option value=\"religious activities\" #religious>religious activities</ion-select-option>\r\n                 <ion-select-option value=\"board sports (surf, paddle, kite)\" #board>board sports (surf, paddle, kite)\r\n                 </ion-select-option>\r\n   \r\n                 <ion-select-option value=\"religious activities\" #religious>religious activities</ion-select-option>\r\n                 <ion-select-option value=\"volunteering, charity work\" #volunteering>volunteering, charity work\r\n                 </ion-select-option>\r\n                 <ion-select-option value=\"tennis\" #tennis>tennis</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </div>\r\n\r\n           \r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"usr\">How long have you lived here?</label>\r\n            <select class=\"form-control selectpicker\" id=\"sel1\" name=\"long\" [(ngModel)]=\"live\">\r\n              <option value=\"0\" style=\"background-color: azure;\">\r\n                < 2 years</option> <option value=\"1\">2-5 years\r\n              </option>\r\n              <option value=\"2\">>5 years</option>\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <div class=\"ionic-dropdowns\">\r\n\r\n            <label class=\"label-ionic-dropdown\">My friends and I usually talk about</label>\r\n            <ion-item class=\"usually-dropdown\">\r\n              <ion-label></ion-label>\r\n              <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"Okay\" name=\"talkabout\" [(ngModel)]=\"talkabout\"\r\n                class=\"ion-select-option-setting\">\r\n\r\n                <ion-select-option value=\"Work\" #Work>Work\r\n                </ion-select-option>\r\n                <ion-select-option value=\"Family\" #Family>Family</ion-select-option>\r\n                <ion-select-option value=\"Relationships\" #Relationships>Relationships\r\n                </ion-select-option>\r\n                <ion-select-option value=\"Gossip\" #Gossip>Gossip</ion-select-option>\r\n                <ion-select-option value=\"Fashion\" #Fashion>Fashion</ion-select-option>\r\n                <ion-select-option value=\"Sports\" #Sports>Sports</ion-select-option>\r\n                <ion-select-option value=\"Other\" #Other>Other</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </div>\r\n\r\n\r\n          <label class=\"label-ionic-dropdown mt-4\">A Good Friend Is Someone Who...</label>\r\n          <ion-item class=\"usually-dropdown mb-4\">\r\n\r\n            <ion-label></ion-label>\r\n            <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"Okay\" name=\"goodFriend\" [(ngModel)]=\"goodFriend\">\r\n\r\n              <ion-select-option value=\"is always there for me.\" #always>is always there for me.\r\n              </ion-select-option>\r\n              <ion-select-option value=\"always sides with me no matter what.\" #sides>always sides with me no matter\r\n                what.\r\n              </ion-select-option>\r\n              <ion-select-option value=\"will be honest with me even if it hurts.\" #hurts>will be honest with me even if\r\n                it hurts.</ion-select-option>\r\n              <ion-select-option value=\"gives advice\" #advice>gives advice</ion-select-option>\r\n              <ion-select-option value=\"takes my advice.\" #takes>takes my advice.</ion-select-option>\r\n              <ion-select-option value=\"is an activity partner.\" #partner>is an activity partner.</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        \r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"usr\">When someone cancels plans we made </label>\r\n\r\n            \r\n            <select class=\"form-control\" id=\"sel1\" name=\"cancels\" [(ngModel)]=\"cancels\">\r\n              <option value=\"My reaction depends on the reason why.\">My reaction depends on the reason why.</option>\r\n              <option value=\"I think no big deal\">I think no big deal</option>\r\n              <option value=\"It really bothers me and I am wary of the friendship.\">It really bothers me and I am wary\r\n                of the friendship.</option>\r\n              <option\r\n                value=\"I’m generally understanding, but I can only be blown off so many times before I will start to question the friendship.\">\r\n                I’m generally understanding, but I can only be blown off so many times before I will start to question\r\n                the friendship.</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"continue-button\" (click)=\"nextStep()\">\r\n            Continue\r\n          </div>\r\n\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:50%\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"forms-field\">\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Are you in a relationship? </label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"status\" [(ngModel)]=\"status\">\r\n              <option value=\"Yes\">Yes</option>\r\n              <option value=\"No\">No</option>\r\n           \r\n\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <div class=\"blue-button-second-tab\" (click)=\"Alert()\">\r\n            Why do we ask this if its\r\n            not for dating or sex?\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Do you have kids?</label>\r\n            <select class=\"form-control\" id=\"sel1\">\r\n              <option>Yes</option>\r\n              <option>No</option>\r\n            </select>\r\n          </div>\r\n\r\n          <label class=\"label-ionic-dropdown mt-4\">Do You Have Pets?</label>\r\n          <ion-item class=\"usually-dropdown mb-4\" no-lines>\r\n\r\n            <ion-label></ion-label>\r\n            <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"Okay\" name=\"pets\" [(ngModel)]=\"pets\" no-lines>\r\n              <ion-select-option value=\"Dog\" #Dog>Dog\r\n              </ion-select-option>\r\n              <ion-select-option value=\"Cat\" #Cat>Cat</ion-select-option>\r\n              <ion-select-option value=\"Rabbit\" #Rabbit>Rabbit\r\n              </ion-select-option>\r\n              <ion-select-option value=\"Birds\" #Birds>Birds</ion-select-option>\r\n              <ion-select-option value=\"Fish\" #Fish>Fish</ion-select-option>\r\n              <ion-select-option value=\"Reptile\" #Reptile>Reptile</ion-select-option>\r\n              <ion-select-option value=\"Other\" #Other>Other</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">I spend my days…</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"usr\" name=\"spend\" [(ngModel)]=\"spend\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">I also speak</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\" name=\"speak\" [(ngModel)]=\"speak\">\r\n          </div>\r\n          <div class=\"continue-button\" (click)=\"nextStep()\">\r\n            Continue\r\n          </div>\r\n          <div class=\"previous-button\" (click)=\"previousStep()\">\r\n            Previous\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </mat-tab>\r\n\r\n\r\n\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:75%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"forms-field\">\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Do you smoke?</label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"smoke\" [(ngModel)]=\"smoke\">\r\n              <option value=\"Never\">Never</option>\r\n              <option value=\"Rarely\">Socially</option>\r\n              <option value=\"Yes\">Yes</option>\r\n              <!-- <option value=\"Couple Times a Week\">Couple Times a Week</option>\r\n              <option value=\" Every Day\"> Every Day</option> -->\r\n\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">How about drinking alcohol? </label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"alcohol\" [(ngModel)]=\"alcohol\">\r\n\r\n              <option value=\"Never\">Never</option>\r\n              <option value=\"Rarely\">Rarely</option>\r\n              <option value=\"Weekends Only\">Weekends Only</option>\r\n              <option value=\"Couple Times a Week\">Couple Times a Week</option>\r\n              <option value=\" Every Day\"> Every Day</option>\r\n            </select>\r\n          </div>\r\n\r\n\r\n    \r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Favorite Books</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"usr\" name=\"books\" [(ngModel)]=\"books\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Favorite Movies</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"usr\" name=\"movies\" [(ngModel)]=\"movies\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Favorite TV Shows</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"usr\" name=\"shows\" [(ngModel)]=\"shows\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Favorite Music</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"usr\" name=\"music\" [(ngModel)]=\"music\"></textarea>\r\n          </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n        <div class=\"continue-button\" (click)=\"nextStep()\">\r\n          Continue\r\n        </div>\r\n        <div class=\"previous-button\" (click)=\"previousStep()\">\r\n          Previous\r\n        </div>\r\n\r\n      </mat-tab>\r\n\r\n\r\n\r\n\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:100%\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"forms-field\">\r\n          <h3>Your photos</h3>\r\n          <div class=\"additionalUserImages\">\r\n            <div class=\"imageContainer\" *ngFor=\"let image of userImages\">\r\n              <img class=\"userImage\" src=\"https://gowebtutorial.com/sites/default/files/{{image.filename}}\" />\r\n            </div>\r\n          </div>\r\n\r\n          <h3>Upload another</h3>\r\n          <div *ngIf=\"!imageContinue\" class=\"upload-btn-wrapper\">\r\n            <div class=\"upload-button\">\r\n              <div class=\"logo-camera\">\r\n                <img src=\"../../assets/Images/camera.png\" class=\"camera-pic\">\r\n              </div>\r\n              <div>\r\n                <button *ngIf=\"!imageContinue\" class=\"btn\" (click)=\"filechooser()\">Upload from library</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"comment\">Anything else you want to share?</label>\r\n            <textarea class=\"form-control\" rows=\"5\" id=\"comment\" name=\"anything\" [(ngModel)]=\"anything\"></textarea>\r\n          </div>\r\n          <div class=\"continue-button\"\r\n            (click)=\"optionDetail(fun,live,talkabout,goodFriend,cancels,status,pets,spend,speak,smoke,alcohol,education,books,movies,shows,music,anything)\">\r\n            Complete\r\n          </div>\r\n          <div class=\"previous-button\" (click)=\"previousStep()\">\r\n            Previous\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n    </mat-tab-group>\r\n  </div>\r\n\r\n</ion-content>";
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


    __webpack_exports__["default"] = ".main-sign-up {\n  display: flex;\n  flex-direction: column;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.forms-field {\n  margin: 4em 1em;\n}\n\np.register-with-us {\n  padding: 1.5em;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n\nbutton.btn.btn-success {\n  margin-bottom: 10px;\n}\n\n.chechk-box-terms {\n  margin-top: 10px;\n}\n\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #415DAE;\n}\n\n.facebook {\n  height: 2.9em;\n  width: 88%;\n}\n\n.btn-primary-google {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #E62E2D;\n  height: 3em;\n  width: 88%;\n}\n\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n\nspan.button-text {\n  width: 100%;\n}\n\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.signup-form-progress {\n  height: 23px;\n}\n\n.under-text {\n  color: #ada2a2;\n}\n\n.age-limit {\n  color: #ada2a2;\n}\n\n.form-control {\n  border: 1px solid;\n}\n\n.form-group {\n  margin: 1em 0em;\n}\n\n.progress {\n  display: flex;\n  height: 1.5rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n  margin: 0px 1.5em;\n  border: 1px solid;\n  position: fixed;\n  width: 90%;\n}\n\n.blue-button-second-tab {\n  background-color: #4472C4;\n  padding: 0.2em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 0px 0.5em;\n  border-radius: 6px;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 0em;\n  display: flex;\n  align-items: center;\n  color: black !important;\n  justify-content: space-between;\n  background-color: transparent !important;\n  width: 100% !important;\n  height: 2.5em;\n  border: 1px solid;\n}\n\n.dropdown {\n  margin-bottom: 1em;\n}\n\nul.dropdown-menu.show {\n  width: 100%;\n}\n\na {\n  color: black;\n}\n\n.upload-photos {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-direction: column;\n  color: black;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.btn {\n  color: black;\n  padding: 12px 20px;\n  border-radius: 8px;\n  /* font-size: 20px; */\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  align-items: center;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n\n.upload-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0px;\n  background-color: #DFF4F5;\n  margin: 9px 4em;\n  border-radius: 12px;\n  padding-left: 1em;\n}\n\n.or {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 21px;\n  margin: 1em;\n}\n\n.grid-icon {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  width: 100%;\n  text-align: center;\n}\n\n.icons {\n  height: 50vh;\n  overflow: auto;\n}\n\nimg.image-icon {\n  width: 61%;\n  margin: 1em;\n}\n\n.button-blue-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #4472C4;\n  color: white;\n  padding: 0.7em;\n  border-radius: 10px;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\n.terms-text {\n  height: 10vh;\n  overflow: auto;\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 0.5em;\n  text-align: justify;\n  font-size: 14px;\n}\n\n.terms {\n  margin: 1em 0px;\n}\n\n.continue-button-google {\n  background-color: #F64225;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.continue-button-facebook {\n  background-color: #4472C4;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.success-market {\n  text-align: center;\n  margin: 2em;\n  font-size: 18px;\n  margin-bottom: 0em;\n}\n\n.under-text-button {\n  color: #ada2a2;\n}\n\n.continue-button-last {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  margin-bottom: 0px;\n}\n\n.button-last {\n  text-align: center;\n  margin: 0em 3em;\n}\n\n.ad-more-pics {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n}\n\n.image-upload-container {\n  border: 1px solid;\n  height: 10vh;\n}\n\n.continue-button-blue {\n  background-color: #4372c4;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.span-container {\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.upper-text-changes {\n  text-align: center;\n  font-size: 20px;\n}\n\n.progree-container {\n  position: fixed;\n  width: 100%;\n  background-color: white;\n  padding: 1.5em 0em;\n  margin: 0px;\n}\n\n.previous-button {\n  background-color: #4472C4;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.main-div-top-list.ng-star-inserted {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\ninput.upload-multiple {\n  position: relative;\n  /* visibility: hidden; */\n  top: -8vh;\n  width: 20vw;\n  height: 8vw;\n  opacity: 0;\n}\n\n.upload-button-main {\n  display: flex;\n  justify-content: center;\n}\n\n.image-conatiner {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 1em;\n  margin-bottom: 1em;\n}\n\nimg.images-uploaded {\n  height: 12vh;\n  /* padding-bottom: 1em; */\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\n.additionalUserImages {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.imageContainer {\n  width: 20vw;\n  height: 20vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageContainer img {\n  width: 20vw;\n  height: 20vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.additionalUserImages {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 1em;\n}\n\noption {\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvU2lnbmluL29wdGlvbmFsLWRldGFpbC9vcHRpb25hbC1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9TaWduaW4vb3B0aW9uYWwtZGV0YWlsL29wdGlvbmFsLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURLQTtFQUNJLG1CQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7RUFFQSxVQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFFQSxVQUFBO0FDSko7O0FET0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7QUNKSjs7QURPQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0pKOztBRE9BO0VBQ0ksWUFBQTtBQ0pKOztBRE9BO0VBQ0ksY0FBQTtBQ0pKOztBRE9BO0VBQ0ksY0FBQTtBQ0pKOztBRFFBO0VBQ0ksaUJBQUE7QUNMSjs7QURRQTtFQUNJLGVBQUE7QUNMSjs7QURTQTtFQUVJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNOSjs7QURTQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7QUNOSjs7QURTQTtFQUNJLFdBQUE7QUNOSjs7QURVQTtFQUNJLFlBQUE7QUNQSjs7QURVQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ1BKOztBRFVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDUEo7O0FEVUE7RUFDSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNSSjs7QURZQTtFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNWSjs7QURhQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1ZKOztBRGNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDWEo7O0FEY0E7RUFDSSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNYSjs7QURlQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDWko7O0FEZUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ1pKOztBRGVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDWko7O0FEZUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDWko7O0FEZUE7RUFDSSxlQUFBO0FDWko7O0FEZUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1pKOztBRGVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNaSjs7QURlQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1pKOztBRGVBO0VBQ0ksY0FBQTtBQ1pKOztBRGVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNaSjs7QURlQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ1pKOztBRGdCQTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7QUNiSjs7QURnQkE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNiSjs7QURnQkE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNiSjs7QURnQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDYko7O0FEZ0JBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDYko7O0FEZ0JBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ2JKOztBRGlCQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ2RKOztBRGlCQTtFQUVJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7QUNoQko7O0FEbUJBO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNoQko7O0FEbUJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDaEJKOztBRG1CQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtBQ2pCSjs7QURxQkE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNsQko7O0FEcUJBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDbkJKOztBRHNCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNwQko7O0FEc0JBO0VBRUksYUFBQTtFQUNBLHNDQUFBO0VBRUEsYUFBQTtBQ3JCSjs7QUR3QkE7RUFDSSxrQ0FBQTtBQ3JCSiIsImZpbGUiOiJzcmMvYXBwL1NpZ25pbi9vcHRpb25hbC1kZXRhaWwvb3B0aW9uYWwtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXNpZ24tdXAge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3Jtcy1maWVsZCB7XHJcbiAgICBtYXJnaW46IDRlbSAxZW07XHJcbn1cclxuXHJcbnAucmVnaXN0ZXItd2l0aC11cyB7XHJcbiAgICBwYWRkaW5nOiAxLjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5cclxuYnV0dG9uLmJ0bi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2hlY2hrLWJveC10ZXJtcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc29jaWFsLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTVEQUVcclxufVxyXG5cclxuLmZhY2Vib29rIHtcclxuICAgIGhlaWdodDogMi45ZW07XHJcblxyXG4gICAgd2lkdGg6IDg4JVxyXG59XHJcblxyXG4uYnRuLXByaW1hcnktZ29vZ2xlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2MkUyRDtcclxuICAgIGhlaWdodDogM2VtO1xyXG5cclxuICAgIHdpZHRoOiA4OCVcclxufVxyXG5cclxucC5vci10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxufVxyXG5cclxuc3Bhbi5idXR0b24tdGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRpbnVlLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbn1cclxuXHJcbi5zaWdudXAtZm9ybS1wcm9ncmVzcyB7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbn1cclxuXHJcbi51bmRlci10ZXh0IHtcclxuICAgIGNvbG9yOiAjYWRhMmEyO1xyXG59XHJcblxyXG4uYWdlLWxpbWl0IHtcclxuICAgIGNvbG9yOiAjYWRhMmEyO1xyXG4gICAgO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW46IDFlbSAwZW07XHJcbn1cclxuXHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgbWFyZ2luOiAwcHggMS41ZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5ibHVlLWJ1dHRvbi1zZWNvbmQtdGFiIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweCAwLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDIuNWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbnVsLmRyb3Bkb3duLW1lbnUuc2hvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udXBsb2FkLXBob3RvcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnVwbG9hZC1idG4td3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAvKiBmb250LXNpemU6IDIwcHg7ICovXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi51cGxvYWQtYnRuLXdyYXBwZXIgaW5wdXRbdHlwZT1maWxlXSB7XHJcblxyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4udXBsb2FkLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRjRGNTtcclxuICAgIG1hcmdpbjogOXB4IDRlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuXHJcbn1cclxuXHJcbi5vciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcblxyXG4uZ3JpZC1pY29uIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmljb25zIHtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5pbWcuaW1hZ2UtaWNvbiB7XHJcbiAgICB3aWR0aDogNjElO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbn1cclxuXHJcbi5idXR0b24tYmx1ZS10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC43ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG4udGVybXMtdGV4dCB7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnRlcm1zIHtcclxuICAgIG1hcmdpbjogMWVtIDBweDtcclxufVxyXG5cclxuLmNvbnRpbnVlLWJ1dHRvbi1nb29nbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2NDIyNTtcclxuICAgIHBhZGRpbmc6IDAuNmVtIDJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMmVtIDFlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmNvbnRpbnVlLWJ1dHRvbi1mYWNlYm9vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xyXG4gICAgcGFkZGluZzogMC42ZW0gMmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAyZW0gMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uc3VjY2Vzcy1tYXJrZXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwZW07XHJcbn1cclxuXHJcbi51bmRlci10ZXh0LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI2FkYTJhMjtcclxufVxyXG5cclxuLmNvbnRpbnVlLWJ1dHRvbi1sYXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmJ1dHRvbi1sYXN0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMGVtIDNlbTtcclxuXHJcbn1cclxuXHJcbi5hZC1tb3JlLXBpY3Mge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS11cGxvYWQtY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG59XHJcblxyXG4uY29udGludWUtYnV0dG9uLWJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNzJjNDtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hcmdpbjogMmVtO1xyXG59XHJcblxyXG4uc3Bhbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udXBwZXItdGV4dC1jaGFuZ2VzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnByb2dyZWUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxLjVlbSAwZW07XHJcbiAgICBtYXJnaW46IDBweDtcclxuXHJcbn1cclxuXHJcbi5wcmV2aW91cy1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hcmdpbjogMmVtO1xyXG59XHJcblxyXG4ubWFpbi1kaXYtdG9wLWxpc3Qubmctc3Rhci1pbnNlcnRlZCB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5pbnB1dC51cGxvYWQtbXVsdGlwbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xyXG4gICAgdG9wOiAtOHZoO1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICBoZWlnaHQ6IDh2dztcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi51cGxvYWQtYnV0dG9uLW1haW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2UtY29uYXRpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDFlbTtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcblxyXG59XHJcblxyXG5pbWcuaW1hZ2VzLXVwbG9hZGVkIHtcclxuICAgIGhlaWdodDogMTJ2aDtcclxuICAgIC8qIHBhZGRpbmctYm90dG9tOiAxZW07ICovXHJcbn1cclxuXHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uYWRkaXRpb25hbFVzZXJJbWFnZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uaW1hZ2VDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICBoZWlnaHQ6IDIwdnc7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlQ29udGFpbmVyIGltZyB7XHJcbiAgICB3aWR0aDogMjB2dztcclxuICAgIGhlaWdodDogMjB2dztcclxuICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmFkZGl0aW9uYWxVc2VySW1hZ2Vze1xyXG4gIFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG5cclxuICAgIGdyaWQtZ2FwOiAxZW07XHJcbn1cclxuXHJcbm9wdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH0iLCIubWFpbi1zaWduLXVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm1zLWZpZWxkIHtcbiAgbWFyZ2luOiA0ZW0gMWVtO1xufVxuXG5wLnJlZ2lzdGVyLXdpdGgtdXMge1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNoZWNoay1ib3gtdGVybXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc29jaWFsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTVEQUU7XG59XG5cbi5mYWNlYm9vayB7XG4gIGhlaWdodDogMi45ZW07XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5idG4tcHJpbWFyeS1nb29nbGUge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2MkUyRDtcbiAgaGVpZ2h0OiAzZW07XG4gIHdpZHRoOiA4OCU7XG59XG5cbnAub3ItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyN3B4O1xufVxuXG5zcGFuLmJ1dHRvbi10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250aW51ZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbn1cblxuLnNpZ251cC1mb3JtLXByb2dyZXNzIHtcbiAgaGVpZ2h0OiAyM3B4O1xufVxuXG4udW5kZXItdGV4dCB7XG4gIGNvbG9yOiAjYWRhMmEyO1xufVxuXG4uYWdlLWxpbWl0IHtcbiAgY29sb3I6ICNhZGEyYTI7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW46IDFlbSAwZW07XG59XG5cbi5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBtYXJnaW46IDBweCAxLjVlbTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmJsdWUtYnV0dG9uLXNlY29uZC10YWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICBwYWRkaW5nOiAwLjJlbSAyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMHB4IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICBtYXJnaW4tYm90dG9tOiAwZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMi41ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uZHJvcGRvd24ge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbnVsLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udXBsb2FkLXBob3RvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnVwbG9hZC1idG4td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLyogZm9udC1zaXplOiAyMHB4OyAqL1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnVwbG9hZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERkY0RjU7XG4gIG1hcmdpbjogOXB4IDRlbTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG59XG5cbi5vciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIxcHg7XG4gIG1hcmdpbjogMWVtO1xufVxuXG4uZ3JpZC1pY29uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29ucyB7XG4gIGhlaWdodDogNTB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmltZy5pbWFnZS1pY29uIHtcbiAgd2lkdGg6IDYxJTtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5idXR0b24tYmx1ZS10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC43ZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG4udGVybXMtdGV4dCB7XG4gIGhlaWdodDogMTB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGVybXMge1xuICBtYXJnaW46IDFlbSAwcHg7XG59XG5cbi5jb250aW51ZS1idXR0b24tZ29vZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2NDIyNTtcbiAgcGFkZGluZzogMC42ZW0gMmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDJlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gIHBhZGRpbmc6IDAuNmVtIDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAyZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5zdWNjZXNzLW1hcmtldCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyZW07XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMGVtO1xufVxuXG4udW5kZXItdGV4dC1idXR0b24ge1xuICBjb2xvcjogI2FkYTJhMjtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1sYXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcbiAgaGVpZ2h0OiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgbWFyZ2luOiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmJ1dHRvbi1sYXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBlbSAzZW07XG59XG5cbi5hZC1tb3JlLXBpY3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDEwcHg7XG59XG5cbi5pbWFnZS11cGxvYWQtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGhlaWdodDogMTB2aDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNzJjNDtcbiAgaGVpZ2h0OiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgbWFyZ2luOiAyZW07XG59XG5cbi5zcGFuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi51cHBlci10ZXh0LWNoYW5nZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnByb2dyZWUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEuNWVtIDBlbTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5wcmV2aW91cy1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbn1cblxuLm1haW4tZGl2LXRvcC1saXN0Lm5nLXN0YXItaW5zZXJ0ZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW5wdXQudXBsb2FkLW11bHRpcGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXG4gIHRvcDogLTh2aDtcbiAgd2lkdGg6IDIwdnc7XG4gIGhlaWdodDogOHZ3O1xuICBvcGFjaXR5OiAwO1xufVxuXG4udXBsb2FkLWJ1dHRvbi1tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWFnZS1jb25hdGluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBncmlkLWdhcDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbmltZy5pbWFnZXMtdXBsb2FkZWQge1xuICBoZWlnaHQ6IDEydmg7XG4gIC8qIHBhZGRpbmctYm90dG9tOiAxZW07ICovXG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmFkZGl0aW9uYWxVc2VySW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmltYWdlQ29udGFpbmVyIHtcbiAgd2lkdGg6IDIwdnc7XG4gIGhlaWdodDogMjB2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWFnZUNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMjB2dztcbiAgaGVpZ2h0OiAyMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZGl0aW9uYWxVc2VySW1hZ2VzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAxZW07XG59XG5cbm9wdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */";
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/file-chooser/ngx */
    "./node_modules/@ionic-native/file-chooser/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/ngx/index.js");

    var OptionalDetailPage = /*#__PURE__*/function () {
      function OptionalDetailPage(http, _location, _Activatedroute, ConfigService, router, alertController, fileChooser, filePath, changeDetector) {
        _classCallCheck(this, OptionalDetailPage);

        this.http = http;
        this._location = _location;
        this._Activatedroute = _Activatedroute;
        this.ConfigService = ConfigService;
        this.router = router;
        this.alertController = alertController;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.changeDetector = changeDetector;
        this.imageContinue = false;
        this.maxNumberOfTabs = 5;
        this.selectedIndex = 0;
        this.donotStatus = false;
        this.scope = [];
        this.images = [];
        this.additionalImageObject = {};
        this.additionalTotalObject = {};
        this.isLoading = false;
        this.win = window;
      }

      _createClass(OptionalDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.userDetail = JSON.parse(localStorage.getItem("currentUser"));
          this.uid = this.userDetail.user.uid;
          this.ConfigService.getUser(this.uid).subscribe(function (userData) {
            _this.userFullDetails = userData;
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
          this.selectedIndex += 1; // Loader at beginning of additonal image tab so that images and object are loaded

          if (this.selectedIndex == 3) {
            // Start image page routine
            this.initImagePage();
          }
        }
      }, {
        key: "previousStep",
        value: function previousStep() {
          this.selectedIndex -= 1;
        }
      }, {
        key: "optionDetail",
        value: function optionDetail(fun, live, talkabout, goodFriend, cancels, status, pets, spend, speak, smoke, alcohol, education, books, movies, shows, music, anything) {
          var _this2 = this;

          console.log("test upload");
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
            field_do_for_fun: {
              und: fun
            },
            //  field_good_friend:
            //  {
            //     und:goodFriend
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
            field_favorite_books: {
              und: [{
                value: books
              }]
            },
            field_favorite_movies: {
              und: [{
                value: movies
              }]
            },
            field_favorite_tv_shows: {
              und: [{
                value: shows
              }]
            },
            field_favorite_music: {
              und: [{
                value: music
              }]
            },
            field_you_say: {
              und: [{
                value: anything
              }]
            }
          }, requestOptions).subscribe(function (result) {
            _this2.router.navigate(["/"]);
          });
          this.additionalTotalObject = {
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
          };

          for (var k in this.additionalImageObject) {
            this.additionalTotalObject[k] = this.additionalImageObject[k];
          }
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          this._location.back();
        }
      }, {
        key: "pagechange",
        value: function pagechange() {
          if (this.userFullDetails.field_already_declared.und != undefined) {
            this.router.navigate(["/chat/searchUser"]);
          }

          if (this.userFullDetails.field_already_declared.und == undefined) {
            this.router.navigate(["/topHobbies"]);
          }
        }
      }, {
        key: "newUpload",
        value: function newUpload() {
          var _this3 = this;

          this.scope = [];
          this.http.get("https://gowebtutorial.com/api/json/file/" + this.Picurl.fid).subscribe(function (res) {
            _this3.pictureDetail = res;
            _this3.pictureUrl = _this3.pictureDetail.uri_full;
          });
        }
      }, {
        key: "Alert",
        value: function Alert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      message: "Information to be provided",
                      buttons: ["OK"]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event) {
          var _this4 = this;

          if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;

            var _loop = function _loop(i) {
              filesAmount = event.target.files.length;
              _this4.imageName = event.target.files[i].name;
              reader = new FileReader();

              reader.onload = function (event) {
                _this4.images.push({
                  uri: event.target.result,
                  name: _this4.imageName
                });

                _this4.additionalImageObject["field_additional_image_" + i] = {
                  uri: event.target.result,
                  name: _this4.imageName
                };
              };

              reader.readAsDataURL(event.target.files[i]);
            };

            for (var i = 0; i < filesAmount; i++) {
              var filesAmount;
              var reader;

              _loop(i);
            }
          }
        }
      }, {
        key: "_handleReaderLoaded",
        value: function _handleReaderLoaded(readerEvt) {
          var binaryString = readerEvt.target.result;
          this.base64textString = btoa(binaryString);
        }
      }, {
        key: "initImagePage",
        value: function initImagePage() {
          var _this5 = this;

          this.isLoading = true;
          this.ConfigService.getUser(this.uid).subscribe(function (data) {
            _this5.userData = data;
            _this5.userImages = _this5.userData.field_user_avatar["und"];
            console.log(_this5.userImages);
            _this5.isLoading = false;

            _this5.changeDetector.detectChanges();
          });
        }
      }, {
        key: "filechooser",
        value: function filechooser() {
          var _this6 = this;

          this.fileChooser.open().then(function (fileuri) {
            _this6.isLoading = true;

            var imagePath = _this6.win.Ionic.WebView.convertFileSrc(fileuri);

            _this6.displayImage = imagePath;

            _this6.filePath.resolveNativePath(fileuri).then(function (filePath) {
              fetch(imagePath).then(function (res) {
                res.blob().then(function (blob) {
                  function getFileReader() {
                    var fileReader = new FileReader();
                    var zoneOriginalInstance = fileReader["__zone_symbol__originalInstance"];
                    return zoneOriginalInstance || fileReader;
                  }

                  var newInstance = getFileReader();

                  newInstance.onload = function () {
                    // Is it JPG or PNG
                    var base64data = newInstance.result.toString();

                    if (base64data.includes("data:image/jpeg;base64,")) {
                      // File Name
                      var timestamp = Math.floor(Date.now() / 1000);
                      this.fileName = this.name + "_profile_image_" + timestamp + ".jpg"; //Base 64 string

                      var removeString = "data:image/jpeg;base64,";
                      this.base64textString = base64data.replace(removeString, "");
                    } else if (base64data.includes("data:image/png;base64,")) {
                      var _timestamp = Math.floor(Date.now() / 1000);

                      this.fileName = this.name + "_profile_image_" + _timestamp + ".png"; //Base 64 string

                      var _removeString = "data:image/png;base64,";
                      this.base64textString = base64data.replace(_removeString, "");
                    }

                    this.picture = this.fileName;
                    this.changeDetector.detectChanges();
                    this.onUpload(this.picture);
                  }.bind(_this6);

                  newInstance.readAsDataURL(blob);
                });
              });
            });
          });
        }
      }, {
        key: "onUpload",
        value: function onUpload(picture) {
          var _this7 = this;

          this.isLoading = true;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/x-www-form-urlencoded");
          this.uploadData = {
            file: this.base64textString,
            filename: picture,
            filepath: "public://" + picture
          };
          this.http.post("https://gowebtutorial.com/api/json/file/", this.uploadData).subscribe(function (rest) {
            _this7.Picurl = rest;

            _this7.postNewImage(_this7.Picurl);
          });
        }
      }, {
        key: "postNewImage",
        value: function postNewImage(pictureObject) {
          var _this8 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("X-CSRF-Token", this.userDetail.token).set("Content-Type", "application/json").set("X-Cookie", this.userDetail.session_name + "=" + this.userDetail.sessid);
          var requestOptions = {
            headers: headers,
            withCredentials: true
          };
          var index;

          if (this.userImages) {
            index = this.userImages.length;
          } else {
            this.userImages = [];
            index = 0;
          }

          this.responseString = {
            field_user_avatar: {
              und: []
            }
          };
          this.responseString["field_user_avatar"]["und"] = this.userImages;
          this.responseString["field_user_avatar"]["und"][index] = pictureObject;
          console.log(this.responseString);
          this.http.put("https://gowebtutorial.com/api/json/user/" + this.uid, this.responseString, requestOptions).subscribe(function (result) {
            console.log("posted image " + result);

            _this8.initImagePage();
          });
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
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_7__["FileChooser"]
      }, {
        type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    OptionalDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-optional-detail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./optional-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/optional-detail/optional-detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./optional-detail.page.scss */
      "./src/app/Signin/optional-detail/optional-detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_7__["FileChooser"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], OptionalDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=Signin-optional-detail-optional-detail-module-es5.js.map