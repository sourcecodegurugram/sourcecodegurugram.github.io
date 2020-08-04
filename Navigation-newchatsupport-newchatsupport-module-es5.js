function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Navigation-newchatsupport-newchatsupport-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/newchatsupport/newchatsupport.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/newchatsupport/newchatsupport.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationNewchatsupportNewchatsupportPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <app-navigationbar></app-navigationbar>\n</ion-header>\n<div  *ngIf=\"isLoading\" class=\"loading-container\">\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n</div>\n\n\n<div class=\"main-New-message-container\" *ngIf=\"isLoggedIn\">\n\n  <div class=\"heading-mew-message\">\n    Create new chat thread\n  </div>\n  \n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" id=\"usr\" name=\"Subject\" [(ngModel)]=\"Subject\" placeholder=\"Enter Subject\">\n  </div>\n  <div class=\"form-group\">\n  \n    <textarea class=\"form-control\" rows=\"5\" id=\"comment\" name=\"Message\" [(ngModel)]=\"Message\"  placeholder=\"Enter Message\"></textarea>\n  </div>\n\n<div class=\"button-align\">\n\n  <button type=\"button\" class=\"btn btn-primary send-button\" (click)=\"sendMessage()\">Send</button>\n\n\n\n</div>\n</div>\n\n\n\n<div class=\"main-pop-background\" *ngIf=\"!isLoggedIn\">\n\n\n  <div class=\"main-pop\">\n  \n  \n    <div class=\"pop-grids\">\n\n      <div class=\"pop-content\">\n        Not4Dating wants to help you create communities, build meaningful relationships and feel truly connected to others.\n        <h5 class=\"whos-on-site\">Who’s on the site?</h5>\n\n\n        <div class=\"checkbox-popup\">\n          <img src=\"../../assets/Images/check.png\" class=\"check-box\">\n          <p class=\"check-box-text\">Our youngest member is 18,our oldest member is 85</p>\n        </div>\n        <div class=\"checkbox-popup\">\n          <img src=\"../../assets/Images/check.png\" class=\"check-box\">\n          <p class=\"check-box-text\">64% In a Relationship, 36% Not in a Relationship  </p>\n        </div>\n        <div class=\"button-flex\">\n          <button type=\"button\" class=\"btn btn-primary register-button\" routerLink=\"/signup\">Awesome! Sign me up!</button>\n          <button type=\"button\" class=\"btn btn-primary login-button\" routerLink=\"/signin\">I am already a member</button>\n        </div>\n      </div>\n     \n    </div>\n    \n  \n  </div>\n  </div>\n";
    /***/
  },

  /***/
  "./src/app/Navigation/newchatsupport/newchatsupport-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/Navigation/newchatsupport/newchatsupport-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: NewchatsupportPageRoutingModule */

  /***/
  function srcAppNavigationNewchatsupportNewchatsupportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewchatsupportPageRoutingModule", function () {
      return NewchatsupportPageRoutingModule;
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


    var _newchatsupport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./newchatsupport.page */
    "./src/app/Navigation/newchatsupport/newchatsupport.page.ts");

    var routes = [{
      path: '',
      component: _newchatsupport_page__WEBPACK_IMPORTED_MODULE_3__["NewchatsupportPage"]
    }];

    var NewchatsupportPageRoutingModule = function NewchatsupportPageRoutingModule() {
      _classCallCheck(this, NewchatsupportPageRoutingModule);
    };

    NewchatsupportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewchatsupportPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Navigation/newchatsupport/newchatsupport.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Navigation/newchatsupport/newchatsupport.module.ts ***!
    \********************************************************************/

  /*! exports provided: NewchatsupportPageModule */

  /***/
  function srcAppNavigationNewchatsupportNewchatsupportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewchatsupportPageModule", function () {
      return NewchatsupportPageModule;
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


    var _newchatsupport_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./newchatsupport-routing.module */
    "./src/app/Navigation/newchatsupport/newchatsupport-routing.module.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _newchatsupport_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./newchatsupport.page */
    "./src/app/Navigation/newchatsupport/newchatsupport.page.ts");
    /* harmony import */


    var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../Navigation/NavigationBar/navigationbar.module */
    "./src/app/Navigation/NavigationBar/navigationbar.module.ts");

    var NewchatsupportPageModule = function NewchatsupportPageModule() {
      _classCallCheck(this, NewchatsupportPageModule);
    };

    NewchatsupportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_8__["NavigationbarModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _newchatsupport_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewchatsupportPageRoutingModule"]],
      declarations: [_newchatsupport_page__WEBPACK_IMPORTED_MODULE_7__["NewchatsupportPage"]]
    })], NewchatsupportPageModule);
    /***/
  },

  /***/
  "./src/app/Navigation/newchatsupport/newchatsupport.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/Navigation/newchatsupport/newchatsupport.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationNewchatsupportNewchatsupportPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-New-message-container {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0em 2em;\n  align-items: center;\n  /* width: 100%; */\n  overflow: hidden;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n  width: 100%;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\n.back-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.custom-back-button {\n  width: 100vw;\n  margin-bottom: 1em;\n}\n\n.send-button {\n  width: 100vw;\n}\n\n.button-align {\n  /* display: flow-root; */\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 17vh;\n}\n\n.heading-mew-message {\n  font-size: 20px;\n  margin: 1em;\n}\n\n.main-pop-background {\n  background-color: #000000a3;\n  background-position: center;\n  height: 100vh;\n  overflow: auto;\n}\n\n.main-pop {\n  display: block;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n}\n\n.pop-grids {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 0em;\n  background-color: white;\n  margin: 0em 2em;\n  margin-bottom: 0px;\n}\n\nh5.whos-on-site {\n  font-size: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n\n.checkbox-popup {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n\nimg.check-box {\n  margin-right: 10px;\n  text-align: center;\n}\n\n.button-flex {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.register-button {\n  background-color: #5ADB00;\n  height: 40px;\n}\n\nbutton.btn.btn-primary.login-button {\n  height: 40px;\n}\n\np.check-box-text {\n  margin-bottom: 0px;\n}\n\n.pop-content {\n  margin: 1em;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvTmF2aWdhdGlvbi9uZXdjaGF0c3VwcG9ydC9uZXdjaGF0c3VwcG9ydC5wYWdlLnNjc3MiLCJzcmMvYXBwL05hdmlnYXRpb24vbmV3Y2hhdHN1cHBvcnQvbmV3Y2hhdHN1cHBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREhBO0VBQ0ksWUFBQTtBQ01KOztBREpBO0VBQ0ksd0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNPSjs7QURMQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDUUo7O0FETEE7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0gsYUFBQTtFQUNBLGNBQUE7QUNRRDs7QUROQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNTSjs7QURQQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDU0o7O0FEUEE7RUFDSSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURSRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDV0o7O0FEVEU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDWUo7O0FEVEU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ1lKOztBRFZFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDYUo7O0FEWEU7RUFDRSxZQUFBO0FDY0o7O0FEWkU7RUFDRSxrQkFBQTtBQ2VKOztBRGJFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNnQkoiLCJmaWxlIjoic3JjL2FwcC9OYXZpZ2F0aW9uL25ld2NoYXRzdXBwb3J0L25ld2NoYXRzdXBwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLU5ldy1tZXNzYWdlLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwZW0gMmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA5O1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAuYmFjay1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jdXN0b20tYmFjay1idXR0b24ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4uc2VuZC1idXR0b24ge1xuICAgIHdpZHRoOiAxMDB2dztcbn1cbi5idXR0b24tYWxpZ24ge1xuICAgIC8qIGRpc3BsYXk6IGZsb3ctcm9vdDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogMTd2aDtcbn1cbi5oZWFkaW5nLW1ldy1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbi5tYWluLXBvcC1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYTM7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuIGhlaWdodDogMTAwdmg7XG4gb3ZlcmZsb3c6IGF1dG87XG59XG4ubWFpbi1wb3Age1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4ucG9wLWdyaWRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMGVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMGVtIDJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5oNS53aG9zLW9uLXNpdGUge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgLmNoZWNrYm94LXBvcHVwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIGltZy5jaGVjay1ib3gge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICB9XG4gIC5idXR0b24tZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5yZWdpc3Rlci1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QURCMDA7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG4gIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkubG9naW4tYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgcC5jaGVjay1ib3gtdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5wb3AtY29udGVudCB7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59IiwiLm1haW4tTmV3LW1lc3NhZ2UtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMGVtIDJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogd2lkdGg6IDEwMCU7ICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jdXN0b20tYmFjay1idXR0b24ge1xuICB3aWR0aDogMTAwdnc7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLnNlbmQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4uYnV0dG9uLWFsaWduIHtcbiAgLyogZGlzcGxheTogZmxvdy1yb290OyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTd2aDtcbn1cblxuLmhlYWRpbmctbWV3LW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMWVtO1xufVxuXG4ubWFpbi1wb3AtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhMztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1haW4tcG9wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wb3AtZ3JpZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwZW0gMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmg1Lndob3Mtb24tc2l0ZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY2hlY2tib3gtcG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW1nLmNoZWNrLWJveCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9uLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJlZ2lzdGVyLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QURCMDA7XG4gIGhlaWdodDogNDBweDtcbn1cblxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeS5sb2dpbi1idXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbnAuY2hlY2stYm94LXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5wb3AtY29udGVudCB7XG4gIG1hcmdpbjogMWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Navigation/newchatsupport/newchatsupport.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Navigation/newchatsupport/newchatsupport.page.ts ***!
    \******************************************************************/

  /*! exports provided: NewchatsupportPage */

  /***/
  function srcAppNavigationNewchatsupportNewchatsupportPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewchatsupportPage", function () {
      return NewchatsupportPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var NewchatsupportPage = /*#__PURE__*/function () {
      function NewchatsupportPage(_Activatedroute, http, router, _location, alertController) {
        _classCallCheck(this, NewchatsupportPage);

        this._Activatedroute = _Activatedroute;
        this.http = http;
        this.router = router;
        this._location = _location;
        this.alertController = alertController;
        this.isLoading = false;
        this.isLoggedIn = false;
      }

      _createClass(NewchatsupportPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.itr = JSON.parse(localStorage.getItem("currentUser"));

          if (this.itr == null) {
            this.router.navigate(["/notLoggedIn"]);
          } else {
            this.isLoggedIn = true;
            this.getAllChat();
          }
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var _this = this;

          this.isLoading = true;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("X-CSRF-Token", this.itr.token).set("Content-Type", "application/json").set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);
          var requestOptions = {
            headers: headers,
            withCredentials: true
          };
          return this.http.post("https://gowebtutorial.com/api/json/privatemsg", {
            recipients: this.name,
            subject: this.Subject,
            body: this.Message
          }, requestOptions).subscribe(function (getMessagesSend) {
            console.log(getMessagesSend);
            _this.participatnts = getMessagesSend;
            _this.pmtId = _this.participatnts.pmtid;
            console.log(_this.pmtId);
            _this.isLoading = false;

            _this.router.navigate(["/chatsupport/" + _this.pmtId]);
          });
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          this._location.back();
        }
      }, {
        key: "getAllChat",
        value: function getAllChat() {
          var _this2 = this;

          return this.http.get("https://gowebtutorial.com/api/json/user/204451").subscribe(function (chatSupport) {
            _this2.chatSupports = chatSupport;
            _this2.image = _this2.chatSupports.picture.filename;
            _this2.name = _this2.chatSupports.name;
            _this2.uid = _this2.chatSupports.uid;
            console.log(_this2.chatSupports);
          });
        }
      }, {
        key: "correctAlert",
        value: function correctAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var correct;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      message: " chat for help",
                      buttons: ["OK"]
                    });

                  case 2:
                    correct = _context.sent;
                    _context.next = 5;
                    return correct.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return NewchatsupportPage;
    }();

    NewchatsupportPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    NewchatsupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-newchatsupport',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./newchatsupport.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/newchatsupport/newchatsupport.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./newchatsupport.page.scss */
      "./src/app/Navigation/newchatsupport/newchatsupport.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], NewchatsupportPage);
    /***/
  }
}]);
//# sourceMappingURL=Navigation-newchatsupport-newchatsupport-module-es5.js.map