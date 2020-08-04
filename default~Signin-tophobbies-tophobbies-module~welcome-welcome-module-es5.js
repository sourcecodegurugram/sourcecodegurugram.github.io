function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Signin-tophobbies-tophobbies-module~welcome-welcome-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/tophobbies/tophobbies.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/tophobbies/tophobbies.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSigninTophobbiesTophobbiesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <app-navigationbar></app-navigationbar>\n</ion-header>\n\n<div *ngIf=\"isLoading\" class=\"loading-container\">\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n</div>\n\n\n  <div class=\"main-div-top-list\">\n    <div class=\"forms-field\">\n      <div class=\"upper-text-changes\">\n        Hello! Would you like to add your hobbies and interests to your profile to improve your results?\n      </div>\n\n      <label class=\"label-ionic-dropdown mt-3\">Top 3 Activities/Interest</label>\n \n     <ion-item class=\"mb-4\">\n            <ion-label>  </ion-label>\n            <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"Okay\" name=\"activity\" [(ngModel)]=\"topactivity\">\n              <ion-select-option value=\"yoga\" #yogas>yoga</ion-select-option>\n              <ion-select-option value=\"playdates (parents and children)\" #playdatess>playdates (parents and children)\n              </ion-select-option>\n              <ion-select-option value=\"happy hour/cocktails/beers\" #beers>happy hour/cocktails/beers\n              </ion-select-option>\n              <ion-select-option value=\"sightseeing\" #sightseeings>sightseeing</ion-select-option>\n              <ion-select-option value=\"artsy stuff (making or looking at)\" #artsy>artsy stuff (making or looking at)\n              </ion-select-option>\n              <ion-select-option value=\"cooking\" #cook>cooking</ion-select-option>\n              <ion-select-option value=\"dancing\" #dancing>dancing</ion-select-option>\n              <ion-select-option value=\"people watching\" #watching>people watching</ion-select-option>\n              <ion-select-option value=\"video games\" #games>video games</ion-select-option>\n              <ion-select-option value=\"traveling/vacations\" #traveling>traveling/vacations</ion-select-option>\n\n              <ion-select-option value=\"history buff\" #history>history buff</ion-select-option>\n              <ion-select-option value=\"board games\" #board>board games</ion-select-option>\n              <ion-select-option value=\"sports (playing)\" #sports>sports (playing)</ion-select-option>\n              <ion-select-option value=\"mom's/dad's night out w/o kids\" #mom>mom's/dad's night out w/o kids\n              </ion-select-option>\n              <ion-select-option value=\"outdoor activities\" #outdoor>outdoor activities</ion-select-option>\n              <ion-select-option value=\"dining out\" #dining>dining out</ion-select-option>\n              <ion-select-option value=\"concerts/shows\" #concerts>concerts/shows</ion-select-option>\n              <ion-select-option value=\"sports (watching)\" #sportwatching>sports (watching)</ion-select-option>\n              <ion-select-option value=\"shopping\" #shoppings>shopping</ion-select-option>\n              <ion-select-option value=\"crafty things (things you make)\" #crafty>crafty things (things you make)\n              </ion-select-option>\n              <ion-select-option value=\"photography\" #photographs>photography</ion-select-option>\n              <ion-select-option value=\"animal lover/pet owner\" #animal>animal lover/pet owner</ion-select-option>\n              <ion-select-option value=\"crime/mystery reader\" #crime> crime/mystery reader</ion-select-option>\n              <ion-select-option value=\"chess\" #chess>chess</ion-select-option>\n\n\n              <ion-select-option value=\"movies\" #movies>movies</ion-select-option>\n              <ion-select-option value=\"dog walking/dog park\" #dog>dog walking/dog park</ion-select-option>\n              <ion-select-option value=\"fitness/exercise\" #fitness>fitness/exercise</ion-select-option>\n              <ion-select-option value=\"playing music\" #music>playing music</ion-select-option>\n              <ion-select-option value=\"trekking/backpacking/camping\" #trekking>trekking/backpacking/camping\n              </ion-select-option>\n              <ion-select-option value=\"cars/motorcycles\" #cars>cars/motorcycles</ion-select-option>\n              <ion-select-option value=\"antiques\" #antiques>antiques</ion-select-option>\n              <ion-select-option value=\"horses/riding\" #horses>horses/riding</ion-select-option>\n              <ion-select-option value=\"anime/manga\" #anime>anime/manga</ion-select-option>\n              <ion-select-option value=\"scifi/fantasy\" #scifi>scifi/fantasy</ion-select-option>\n              <ion-select-option value=\"scuba\" #scuba> scuba</ion-select-option>\n              <ion-select-option value=\"gardeningr\" #gardening>gardening</ion-select-option>\n              <ion-select-option value=\"rock climbing\" #rock>rock climbing</ion-select-option>\n              <ion-select-option value=\"cycling/mountain biking\" #cycling>cycling/mountain biking</ion-select-option>\n\n              <ion-select-option value=\"mindfulness and meditation\" #mindfulness>mindfulness and meditation\n              </ion-select-option>\n              <ion-select-option value=\"makeup/hair/beauty\" #makeup>makeup/hair/beauty</ion-select-option>\n              <ion-select-option value=\" gambling\" #gambling>gambling</ion-select-option>\n\n              <ion-select-option value=\"billiards/snooker\" #billiards>billiards/snooker</ion-select-option>\n              <ion-select-option value=\"astrology/tarot\" #astrology>astrology/tarot</ion-select-option>\n              <ion-select-option value=\"golf\" #astrology> golf</ion-select-option>\n              <ion-select-option value=\"day hikes/bushwalking\" #hikes>day hikes/bushwalking</ion-select-option>\n              <ion-select-option value=\"tabletop RPG (D&D)\" #tabletop>tabletop RPG (D&D)</ion-select-option>\n              <ion-select-option value=\"reading\" #reading>reading</ion-select-option>\n              <ion-select-option value=\"creative writing\" #creative>creative writing</ion-select-option>\n              <ion-select-option value=\"cosplay\" #cosplay>cosplay</ion-select-option>\n              <ion-select-option value=\"home decorating\" #home>home decorating</ion-select-option>\n\n              <ion-select-option value=\" knitting, crochet, or sewing\" #knitting>knitting, crochet, or sewing\n              </ion-select-option>\n\n\n              <ion-select-option value=\"card games\" #card>card games</ion-select-option>\n              <ion-select-option value=\"religious activities\" #religious>religious activities</ion-select-option>\n              <ion-select-option value=\"board sports (surf, paddle, kite)\" #board>board sports (surf, paddle, kite)\n              </ion-select-option>\n\n              <ion-select-option value=\"religious activities\" #religious>religious activities</ion-select-option>\n              <ion-select-option value=\"volunteering, charity work\" #volunteering>volunteering, charity work\n              </ion-select-option>\n              <ion-select-option value=\"tennis\" #tennis>tennis</ion-select-option>\n\n\n\n            </ion-select>\n        \n          </ion-item>\n\n\n          <label class=\"label-ionic-dropdown\">Other Activities/Interest</label>\n    <ion-item class=\"\"  no-lines>\n\n            <ion-label></ion-label>\n            <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"Okay\" name=\"activity\" [(ngModel)]=\"otheractivity\"  lines=“none”>\n              <ion-select-option value=\"yoga\" #yogas>yoga</ion-select-option>\n              <ion-select-option value=\"playdates (parents and children)\" #playdatess>playdates (parents and children)\n              </ion-select-option>\n              <ion-select-option value=\"happy hour/cocktails/beers\" #beers>happy hour/cocktails/beers\n              </ion-select-option>\n              <ion-select-option value=\"sightseeing\" #sightseeings>sightseeing</ion-select-option>\n              <ion-select-option value=\"artsy stuff (making or looking at)\" #artsy>artsy stuff (making or looking at)\n              </ion-select-option>\n              <ion-select-option value=\"cooking\" #cook>cooking</ion-select-option>\n              <ion-select-option value=\"dancing\" #dancing>dancing</ion-select-option>\n              <ion-select-option value=\"people watching\" #watching>people watching</ion-select-option>\n              <ion-select-option value=\"video games\" #games>video games</ion-select-option>\n              <ion-select-option value=\"traveling/vacations\" #traveling>traveling/vacations</ion-select-option>\n\n              <ion-select-option value=\"history buff\" #history>history buff</ion-select-option>\n              <ion-select-option value=\"board games\" #board>board games</ion-select-option>\n              <ion-select-option value=\"sports (playing)\" #sports>sports (playing)</ion-select-option>\n              <ion-select-option value=\"mom's/dad's night out w/o kids\" #mom>mom's/dad's night out w/o kids\n              </ion-select-option>\n              <ion-select-option value=\"outdoor activities\" #outdoor>outdoor activities</ion-select-option>\n              <ion-select-option value=\"dining out\" #dining>dining out</ion-select-option>\n              <ion-select-option value=\"concerts/shows\" #concerts>concerts/shows</ion-select-option>\n              <ion-select-option value=\"sports (watching)\" #sportwatching>sports (watching)</ion-select-option>\n              <ion-select-option value=\"shopping\" #shoppings>shopping</ion-select-option>\n              <ion-select-option value=\"crafty things (things you make)\" #crafty>crafty things (things you make)\n              </ion-select-option>\n              <ion-select-option value=\"photography\" #photographs>photography</ion-select-option>\n              <ion-select-option value=\"animal lover/pet owner\" #animal>animal lover/pet owner</ion-select-option>\n              <ion-select-option value=\"crime/mystery reader\" #crime> crime/mystery reader</ion-select-option>\n              <ion-select-option value=\"chess\" #chess>chess</ion-select-option>\n\n\n              <ion-select-option value=\"movies\" #movies>movies</ion-select-option>\n              <ion-select-option value=\"dog walking/dog park\" #dog>dog walking/dog park</ion-select-option>\n              <ion-select-option value=\"fitness/exercise\" #fitness>fitness/exercise</ion-select-option>\n              <ion-select-option value=\"playing music\" #music>playing music</ion-select-option>\n              <ion-select-option value=\"trekking/backpacking/camping\" #trekking>trekking/backpacking/camping\n              </ion-select-option>\n              <ion-select-option value=\"cars/motorcycles\" #cars>cars/motorcycles</ion-select-option>\n              <ion-select-option value=\"antiques\" #antiques>antiques</ion-select-option>\n              <ion-select-option value=\"horses/riding\" #horses>horses/riding</ion-select-option>\n              <ion-select-option value=\"anime/manga\" #anime>anime/manga</ion-select-option>\n              <ion-select-option value=\"scifi/fantasy\" #scifi>scifi/fantasy</ion-select-option>\n              <ion-select-option value=\"scuba\" #scuba> scuba</ion-select-option>\n              <ion-select-option value=\"gardeningr\" #gardening>gardening</ion-select-option>\n              <ion-select-option value=\"rock climbing\" #rock>rock climbing</ion-select-option>\n              <ion-select-option value=\"cycling/mountain biking\" #cycling>cycling/mountain biking</ion-select-option>\n\n              <ion-select-option value=\"mindfulness and meditation\" #mindfulness>mindfulness and meditation\n              </ion-select-option>\n              <ion-select-option value=\"makeup/hair/beauty\" #makeup>makeup/hair/beauty</ion-select-option>\n              <ion-select-option value=\" gambling\" #gambling>gambling</ion-select-option>\n\n              <ion-select-option value=\"billiards/snooker\" #billiards>billiards/snooker</ion-select-option>\n              <ion-select-option value=\"astrology/tarot\" #astrology>astrology/tarot</ion-select-option>\n              <ion-select-option value=\"golf\" #astrology> golf</ion-select-option>\n              <ion-select-option value=\"day hikes/bushwalking\" #hikes>day hikes/bushwalking</ion-select-option>\n              <ion-select-option value=\"tabletop RPG (D&D)\" #tabletop>tabletop RPG (D&D)</ion-select-option>\n              <ion-select-option value=\"reading\" #reading>reading</ion-select-option>\n              <ion-select-option value=\"creative writing\" #creative>creative writing</ion-select-option>\n              <ion-select-option value=\"cosplay\" #cosplay>cosplay</ion-select-option>\n              <ion-select-option value=\"home decorating\" #home>home decorating</ion-select-option>\n\n              <ion-select-option value=\" knitting, crochet, or sewing\" #knitting>knitting, crochet, or sewing\n              </ion-select-option>\n\n\n              <ion-select-option value=\"card games\" #card>card games</ion-select-option>\n              <ion-select-option value=\"religious activities\" #religious>religious activities</ion-select-option>\n              <ion-select-option value=\"board sports (surf, paddle, kite)\" #board>board sports (surf, paddle, kite)\n              </ion-select-option>\n\n              <ion-select-option value=\"religious activities\" #religious>religious activities</ion-select-option>\n              <ion-select-option value=\"volunteering, charity work\" #volunteering>volunteering, charity work\n              </ion-select-option>\n              <ion-select-option value=\"tennis\" #tennis>tennis</ion-select-option>\n\n\n\n            </ion-select>\n          </ion-item> \n\n          <div class=\"continue-button\" (click)=\"notshowagain(topactivity,otheractivity)\">\n            Save Changes\n          </div>\n      <div class=\"span-container\">\n        <span class=\"under-text-button\" (click)=\"notshowagain(topactivity,otheractivity)\">Don’t ask me this again</span>\n      </div>\n    </div>\n  </div>\n\n";
    /***/
  },

  /***/
  "./src/app/Signin/tophobbies/tophobbies-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Signin/tophobbies/tophobbies-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: TophobbiesPageRoutingModule */

  /***/
  function srcAppSigninTophobbiesTophobbiesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TophobbiesPageRoutingModule", function () {
      return TophobbiesPageRoutingModule;
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


    var _tophobbies_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tophobbies.page */
    "./src/app/Signin/tophobbies/tophobbies.page.ts");

    var routes = [{
      path: '',
      component: _tophobbies_page__WEBPACK_IMPORTED_MODULE_3__["TophobbiesPage"]
    }];

    var TophobbiesPageRoutingModule = function TophobbiesPageRoutingModule() {
      _classCallCheck(this, TophobbiesPageRoutingModule);
    };

    TophobbiesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TophobbiesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Signin/tophobbies/tophobbies.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/Signin/tophobbies/tophobbies.module.ts ***!
    \********************************************************/

  /*! exports provided: TophobbiesPageModule */

  /***/
  function srcAppSigninTophobbiesTophobbiesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TophobbiesPageModule", function () {
      return TophobbiesPageModule;
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


    var _tophobbies_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tophobbies-routing.module */
    "./src/app/Signin/tophobbies/tophobbies-routing.module.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _tophobbies_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tophobbies.page */
    "./src/app/Signin/tophobbies/tophobbies.page.ts");
    /* harmony import */


    var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../Navigation/NavigationBar/navigationbar.module */
    "./src/app/Navigation/NavigationBar/navigationbar.module.ts");

    var TophobbiesPageModule = function TophobbiesPageModule() {
      _classCallCheck(this, TophobbiesPageModule);
    };

    TophobbiesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tophobbies_routing_module__WEBPACK_IMPORTED_MODULE_5__["TophobbiesPageRoutingModule"], _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_8__["NavigationbarModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
      exports: [_tophobbies_page__WEBPACK_IMPORTED_MODULE_7__["TophobbiesPage"]],
      declarations: [_tophobbies_page__WEBPACK_IMPORTED_MODULE_7__["TophobbiesPage"]]
    })], TophobbiesPageModule);
    /***/
  },

  /***/
  "./src/app/Signin/tophobbies/tophobbies.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/Signin/tophobbies/tophobbies.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSigninTophobbiesTophobbiesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-sign-up {\n  display: flex;\n  flex-direction: column;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.forms-field {\n  margin: 4em 1em;\n}\n\np.register-with-us {\n  padding: 1.5em;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n\nbutton.btn.btn-success {\n  margin-bottom: 10px;\n}\n\n.chechk-box-terms {\n  margin-top: 10px;\n}\n\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #415DAE;\n}\n\n.facebook {\n  height: 2.9em;\n  width: 88%;\n}\n\n.btn-primary-google {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #E62E2D;\n  height: 3em;\n  width: 88%;\n}\n\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n\nspan.button-text {\n  width: 100%;\n}\n\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.signup-form-progress {\n  height: 23px;\n}\n\n.under-text {\n  color: #ada2a2;\n}\n\n.age-limit {\n  color: #ada2a2;\n}\n\n.form-control {\n  border: 1px solid;\n}\n\n.form-group {\n  margin: 1em 0em;\n}\n\n.progress {\n  display: flex;\n  height: 1.5rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n  margin: 0px 1.5em;\n  border: 1px solid;\n  position: fixed;\n  width: 90%;\n}\n\n.blue-button-second-tab {\n  background-color: #4472C4;\n  padding: 0.2em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 0px 0.5em;\n  border-radius: 6px;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 0em;\n  display: flex;\n  align-items: center;\n  color: black !important;\n  justify-content: space-between;\n  background-color: transparent !important;\n  width: 100% !important;\n  height: 2.5em;\n  border: 1px solid;\n}\n\n.dropdown {\n  margin-bottom: 1em;\n}\n\nul.dropdown-menu.show {\n  width: 100%;\n}\n\na {\n  color: black;\n}\n\n.upload-photos {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-direction: column;\n  color: black;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.btn {\n  color: black;\n  padding: 12px 20px;\n  border-radius: 8px;\n  /* font-size: 20px; */\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  align-items: center;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n\n.upload-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0px;\n  background-color: #DFF4F5;\n  margin: 9px 4em;\n  border-radius: 12px;\n  padding-left: 1em;\n}\n\n.or {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 21px;\n  margin: 1em;\n}\n\n.grid-icon {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  width: 100%;\n  text-align: center;\n}\n\n.icons {\n  height: 50vh;\n  overflow: auto;\n}\n\nimg.image-icon {\n  width: 61%;\n  margin: 1em;\n}\n\n.button-blue-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #4472C4;\n  color: white;\n  padding: 0.7em;\n  border-radius: 10px;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\n.terms-text {\n  height: 10vh;\n  overflow: auto;\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 0.5em;\n  text-align: justify;\n  font-size: 14px;\n}\n\n.terms {\n  margin: 1em 0px;\n}\n\n.continue-button-google {\n  background-color: #F64225;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.continue-button-facebook {\n  background-color: #4472C4;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.success-market {\n  text-align: center;\n  margin: 2em;\n  font-size: 18px;\n  margin-bottom: 0em;\n}\n\n.under-text-button {\n  color: #ada2a2;\n}\n\n.continue-button-last {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  margin-bottom: 0px;\n}\n\n.button-last {\n  text-align: center;\n  margin: 0em 3em;\n}\n\n.ad-more-pics {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n}\n\n.image-upload-container {\n  border: 1px solid;\n  /* height: 10vh; */\n}\n\n.continue-button-blue {\n  background-color: #4372c4;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.span-container {\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.upper-text-changes {\n  text-align: center;\n  font-size: 20px;\n}\n\n.progree-container {\n  position: fixed;\n  width: 100%;\n  background-color: white;\n  padding: 1.5em 0em;\n  margin: 0px;\n}\n\n.previous-button {\n  background-color: #E62E2D;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.main-div-top-list.ng-star-inserted {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvU2lnbmluL3RvcGhvYmJpZXMvdG9waG9iYmllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL1NpZ25pbi90b3Bob2JiaWVzL3RvcGhvYmJpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0FDQUo7O0FER0E7RUFFSSxXQUFBO0FDREo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0VBRUEsVUFBQTtBQ0VKOztBREFBO0VBRUksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBRUEsVUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7QUNJSjs7QURGQTtFQUNJLGNBQUE7QUNLSjs7QURIQTtFQUNJLGNBQUE7QUNNSjs7QURKQTtFQUNJLGlCQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0FDUUo7O0FESkE7RUFFSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFB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Q0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNzQko7O0FEbkJBO0VBRUkseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDcUJKOztBRG5CQTtFQUVJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7QUNvQko7O0FEbEJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNxQkoiLCJmaWxlIjoic3JjL2FwcC9TaWduaW4vdG9waG9iYmllcy90b3Bob2JiaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXNpZ24tdXAge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgXG59XG4uZnVsbC13aWR0aFxue1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmZvcm1zLWZpZWxke1xuICAgIG1hcmdpbjogNGVtIDFlbTtcbn1cbnAucmVnaXN0ZXItd2l0aC11cyB7XG4gICAgcGFkZGluZzogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5cbmJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3Mge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2hlY2hrLWJveC10ZXJtcyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNvY2lhbC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNURBRVxufVxuLmZhY2Vib29rIHtcbiAgICBoZWlnaHQ6IDIuOWVtO1xuIFxuICAgIHdpZHRoOiA4OCVcbn1cbi5idG4tcHJpbWFyeS1nb29nbGVcbntcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTYyRTJEO1xuICAgIGhlaWdodDogM2VtO1xuXG4gICAgd2lkdGg6IDg4JVxufVxuXG5wLm9yLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI3cHg7XG59XG5zcGFuLmJ1dHRvbi10ZXh0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jb250aW51ZS1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBtYXJnaW46IDJlbTtcbn1cbi5zaWdudXAtZm9ybS1wcm9ncmVzc3tcbiAgICBoZWlnaHQ6IDIzcHg7XG59XG4udW5kZXItdGV4dCB7XG4gICAgY29sb3I6ICNhZGEyYTI7XG59XG4uYWdlLWxpbWl0e1xuICAgIGNvbG9yOiAjYWRhMmEyOztcbn1cbi5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbjogMWVtIDBlbTtcbn1cblxuXG4ucHJvZ3Jlc3Mge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXNpemU6IC43NXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICBtYXJnaW46IDBweCAxLjVlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDkwJTtcbn1cbi5ibHVlLWJ1dHRvbi1zZWNvbmQtdGFiIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICAgIHBhZGRpbmc6IDAuMmVtIDJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDBweCAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgIG1hcmdpbi1ib3R0b206IDBlbTsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyLjVlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5kcm9wZG93biB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxudWwuZHJvcGRvd24tbWVudS5zaG93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgXG59XG5hXG57XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLnVwbG9hZC1waG90b3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi51cGxvYWQtYnRuLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgLmJ0biB7XG4gICAgY29sb3I6IGJsYWNrO1xuICBcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIC8qIGZvbnQtc2l6ZTogMjBweDsgKi9cbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgfVxuICBcbiAgLnVwbG9hZC1idG4td3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcblxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICB9XG4gIC51cGxvYWQtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZGNEY1O1xuICAgIG1hcmdpbjogOXB4IDRlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuXG59XG4ub3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBtYXJnaW46IDFlbTtcbn1cbi5ncmlkLWljb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG4uaWNvbnMge1xuICAgIGhlaWdodDogNTB2aDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbmltZy5pbWFnZS1pY29uIHtcbiAgICB3aWR0aDogNjElO1xuICAgIG1hcmdpbjogMWVtO1xufVxuLmJ1dHRvbi1ibHVlLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG4udGVybXMtdGV4dCB7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4udGVybXMge1xuICAgIG1hcmdpbjogMWVtIDBweDtcbn1cbi5jb250aW51ZS1idXR0b24tZ29vZ2xlXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2NDIyNTtcbiAgICBwYWRkaW5nOiAwLjZlbSAyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiAyZW0gMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5jb250aW51ZS1idXR0b24tZmFjZWJvb2tcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICAgIHBhZGRpbmc6IDAuNmVtIDJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDJlbSAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLnN1Y2Nlc3MtbWFya2V0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyZW07XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBlbTtcbn1cbi51bmRlci10ZXh0LWJ1dHRvblxue1xuICAgIGNvbG9yOiAjYWRhMmEyO1xufVxuLmNvbnRpbnVlLWJ1dHRvbi1sYXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgbWFyZ2luOiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmJ1dHRvbi1sYXN0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwZW0gM2VtO1xuXG59XG4uYWQtbW9yZS1waWNzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xufVxuLmltYWdlLXVwbG9hZC1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIC8qIGhlaWdodDogMTB2aDsgKi9cbn1cbi5jb250aW51ZS1idXR0b24tYmx1ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3MmM0O1xuICAgIGhlaWdodDogM2VtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIG1hcmdpbjogMmVtO1xufVxuLnNwYW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi51cHBlci10ZXh0LWNoYW5nZXMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4ucHJvZ3JlZS1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEuNWVtIDBlbTtcbiAgICBtYXJnaW46IDBweDtcblxufVxuLnByZXZpb3VzLWJ1dHRvblxue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNjJFMkQ7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgbWFyZ2luOiAyZW07XG59XG4ubWFpbi1kaXYtdG9wLWxpc3Qubmctc3Rhci1pbnNlcnRlZCB7XG4gICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogOTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH0iLCIubWFpbi1zaWduLXVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm1zLWZpZWxkIHtcbiAgbWFyZ2luOiA0ZW0gMWVtO1xufVxuXG5wLnJlZ2lzdGVyLXdpdGgtdXMge1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNoZWNoay1ib3gtdGVybXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc29jaWFsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTVEQUU7XG59XG5cbi5mYWNlYm9vayB7XG4gIGhlaWdodDogMi45ZW07XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5idG4tcHJpbWFyeS1nb29nbGUge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2MkUyRDtcbiAgaGVpZ2h0OiAzZW07XG4gIHdpZHRoOiA4OCU7XG59XG5cbnAub3ItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyN3B4O1xufVxuXG5zcGFuLmJ1dHRvbi10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250aW51ZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbn1cblxuLnNpZ251cC1mb3JtLXByb2dyZXNzIHtcbiAgaGVpZ2h0OiAyM3B4O1xufVxuXG4udW5kZXItdGV4dCB7XG4gIGNvbG9yOiAjYWRhMmEyO1xufVxuXG4uYWdlLWxpbWl0IHtcbiAgY29sb3I6ICNhZGEyYTI7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW46IDFlbSAwZW07XG59XG5cbi5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBtYXJnaW46IDBweCAxLjVlbTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmJsdWUtYnV0dG9uLXNlY29uZC10YWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICBwYWRkaW5nOiAwLjJlbSAyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMHB4IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICBtYXJnaW4tYm90dG9tOiAwZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMi41ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uZHJvcGRvd24ge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbnVsLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udXBsb2FkLXBob3RvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnVwbG9hZC1idG4td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLyogZm9udC1zaXplOiAyMHB4OyAqL1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnVwbG9hZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERkY0RjU7XG4gIG1hcmdpbjogOXB4IDRlbTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG59XG5cbi5vciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIxcHg7XG4gIG1hcmdpbjogMWVtO1xufVxuXG4uZ3JpZC1pY29uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29ucyB7XG4gIGhlaWdodDogNTB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmltZy5pbWFnZS1pY29uIHtcbiAgd2lkdGg6IDYxJTtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5idXR0b24tYmx1ZS10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC43ZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG4udGVybXMtdGV4dCB7XG4gIGhlaWdodDogMTB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGVybXMge1xuICBtYXJnaW46IDFlbSAwcHg7XG59XG5cbi5jb250aW51ZS1idXR0b24tZ29vZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2NDIyNTtcbiAgcGFkZGluZzogMC42ZW0gMmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDJlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gIHBhZGRpbmc6IDAuNmVtIDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAyZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5zdWNjZXNzLW1hcmtldCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyZW07XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMGVtO1xufVxuXG4udW5kZXItdGV4dC1idXR0b24ge1xuICBjb2xvcjogI2FkYTJhMjtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1sYXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcbiAgaGVpZ2h0OiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgbWFyZ2luOiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmJ1dHRvbi1sYXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBlbSAzZW07XG59XG5cbi5hZC1tb3JlLXBpY3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDEwcHg7XG59XG5cbi5pbWFnZS11cGxvYWQtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIC8qIGhlaWdodDogMTB2aDsgKi9cbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNzJjNDtcbiAgaGVpZ2h0OiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgbWFyZ2luOiAyZW07XG59XG5cbi5zcGFuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi51cHBlci10ZXh0LWNoYW5nZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnByb2dyZWUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEuNWVtIDBlbTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5wcmV2aW91cy1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTYyRTJEO1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbn1cblxuLm1haW4tZGl2LXRvcC1saXN0Lm5nLXN0YXItaW5zZXJ0ZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Signin/tophobbies/tophobbies.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/Signin/tophobbies/tophobbies.page.ts ***!
    \******************************************************/

  /*! exports provided: TophobbiesPage */

  /***/
  function srcAppSigninTophobbiesTophobbiesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TophobbiesPage", function () {
      return TophobbiesPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var TophobbiesPage = /*#__PURE__*/function () {
      function TophobbiesPage(http, _location, _Activatedroute, ConfigService, router) {
        _classCallCheck(this, TophobbiesPage);

        this.http = http;
        this._location = _location;
        this._Activatedroute = _Activatedroute;
        this.ConfigService = ConfigService;
        this.router = router;
        this.maxNumberOfTabs = 5;
        this.selectedIndex = 0;
        this.donotStatus = false;
        this.isLoading = false;
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.toppingList = ["Extra cheese", "Mushroom", "Onion", "Pepperoni", "Sausage", "Tomato"];
      }

      _createClass(TophobbiesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userDetail = JSON.parse(localStorage.getItem("currentUser"));
          this.uid = this.userDetail.user.uid;
        }
      }, {
        key: "notshowagain",
        value: function notshowagain(topactivity, otheractivity) {
          var _this = this;

          this.isLoading = true;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("X-CSRF-Token", this.userDetail.token).set("Content-Type", "application/json").set("X-Cookie", this.userDetail.session_name + "=" + this.userDetail.sessid);
          var requestOptions = {
            headers: headers,
            withCredentials: true
          }; // Add entry into favorites

          this.http.put("https://gowebtutorial.com/api/json/user/" + this.userDetail.user.uid, {
            field_already_declared: {
              und: [{
                value: "true"
              }]
            },
            field_top3_activities: {
              und: topactivity
            },
            field_activities_interests: {
              und: otheractivity
            }
          }, requestOptions).subscribe(function (favorate) {
            console.log(favorate);
            _this.isLoading = false;

            _this.router.navigate(["/chat/searchUser"]);
          });
        }
      }]);

      return TophobbiesPage;
    }();

    TophobbiesPage.ctorParameters = function () {
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
      }];
    };

    TophobbiesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-tophobbies",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tophobbies.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/tophobbies/tophobbies.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tophobbies.page.scss */
      "./src/app/Signin/tophobbies/tophobbies.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], TophobbiesPage);
    /***/
  }
}]);
//# sourceMappingURL=default~Signin-tophobbies-tophobbies-module~welcome-welcome-module-es5.js.map