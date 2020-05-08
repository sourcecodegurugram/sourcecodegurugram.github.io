function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-targetting-location-targetting-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/location-targetting/location-targetting.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location-targetting/location-targetting.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLocationTargettingLocationTargettingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>navigation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<div class=\"background\">\n\n  <ion-card class=\"card-one\">\n    <ion-card-content class=\"card-content-font\">\n      Location targeting is turned off on your device.  Please provide the following details to see members in your area.  Postal code and Country.  Search button will say find friends.\n    </ion-card-content>\n\n\n  \n    <p class=\"tittle-card\">Find Friends</p>\n    <form class=\"form-fields\">\n      <label for=\"fname\" class=\"form-label\"    >ZIP/Postal Code</label><br>\n      <input type=\"text\" id=\"fname\" name=\"post\" class=\"form-field-zip-code\" [(ngModel)]=\"post\"><br>\n\n      <label class=\"form-label-country\">Country</label><br>\n      <select id=\"country\" class=\"country-field\">\n        <option value=\"United States\">United States</option>\n        <option value=\"USA\">USA</option>\n        <option value=\"Dubai\">Dubai</option>\n        <option value=\"India\">India</option>\n      </select>\n      <br>\n      <div class=\"button-container\">\n        <button type=\"button\" class=\"button-common\" (click)=\"buttonClick()\" routerLink=\"/search-result/{{post}}\">Search</button>\n      </div>\n    </form>\n \n\n  \n    <p class=\"tittle-card\">Can’t find your \n      country ?\n      Send us a message here and we will add it\n    </p>\n\n    <form class=\"form-fields\">\n      \n      <label class=\"form-label-country form-label\">Country</label><br>\n      <select id=\"country\" class=\"country-field search-country\">\n        <option value=\"country\">Country</option>\n        <option value=\"USA\">USA</option>\n        <option value=\"Dubai\">Dubai</option>\n        <option value=\"India\">India</option>\n      </select>\n      <br>\n      <label for=\"fname\" class=\"form-label\">Postcode</label><br>\n      <input type=\"text\" id=\"fname\" name=\"fname\" class=\"form-field-zip-code search-country\"><br>\n\n      \n      <div class=\"button-container\">\n        <button type=\"button\" class=\"button-common\">Submit</button>\n      </div>\n    </form>\n  </ion-card>\n\n\n</div>";
    /***/
  },

  /***/
  "./src/app/location-targetting/location-targetting-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/location-targetting/location-targetting-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: LocationTargettingPageRoutingModule */

  /***/
  function srcAppLocationTargettingLocationTargettingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationTargettingPageRoutingModule", function () {
      return LocationTargettingPageRoutingModule;
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


    var _location_targetting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./location-targetting.page */
    "./src/app/location-targetting/location-targetting.page.ts");

    var routes = [{
      path: '',
      component: _location_targetting_page__WEBPACK_IMPORTED_MODULE_3__["LocationTargettingPage"]
    }];

    var LocationTargettingPageRoutingModule = function LocationTargettingPageRoutingModule() {
      _classCallCheck(this, LocationTargettingPageRoutingModule);
    };

    LocationTargettingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LocationTargettingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/location-targetting/location-targetting.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/location-targetting/location-targetting.module.ts ***!
    \*******************************************************************/

  /*! exports provided: LocationTargettingPageModule */

  /***/
  function srcAppLocationTargettingLocationTargettingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationTargettingPageModule", function () {
      return LocationTargettingPageModule;
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


    var _location_targetting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./location-targetting-routing.module */
    "./src/app/location-targetting/location-targetting-routing.module.ts");
    /* harmony import */


    var _location_targetting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./location-targetting.page */
    "./src/app/location-targetting/location-targetting.page.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");

    var LocationTargettingPageModule = function LocationTargettingPageModule() {
      _classCallCheck(this, LocationTargettingPageModule);
    };

    LocationTargettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _location_targetting_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationTargettingPageRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]],
      declarations: [_location_targetting_page__WEBPACK_IMPORTED_MODULE_6__["LocationTargettingPage"]]
    })], LocationTargettingPageModule);
    /***/
  },

  /***/
  "./src/app/location-targetting/location-targetting.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/location-targetting/location-targetting.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLocationTargettingLocationTargettingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\n.card-content-font {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n}\n\n.card-one {\n  border: 1px solid #707070;\n  margin: 1.5em;\n  margin-top: 7vh;\n}\n\n.tittle-card {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n  padding: 1em;\n}\n\nform.form-fields {\n  margin: 2em;\n}\n\ninput#fname {\n  /* height: 6vh; */\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 15px;\n  border: 1px solid;\n  margin-bottom: 20px;\n}\n\nselect#country {\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 15px;\n  border: 1px solid;\n  margin-bottom: 20px;\n  width: 55%;\n  font-size: 1em;\n}\n\n.form-label {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.form-label-country {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 18px;\n}\n\nbutton.button-common {\n  height: 40px;\n  padding: 0px 40px;\n  border: 1px solid #707070;\n  background-color: #449D44;\n  color: white;\n  border-radius: 7px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: bold;\n}\n\n.search-country {\n  width: 100% !important;\n  background-color: #F2F2F2;\n}\n\n.card-one {\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24tdGFyZ2V0dGluZy9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxsb2NhdGlvbi10YXJnZXR0aW5nXFxsb2NhdGlvbi10YXJnZXR0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9jYXRpb24tdGFyZ2V0dGluZy9sb2NhdGlvbi10YXJnZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVBO0VBRUksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNGLGNBQUE7QUNBRjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUVJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdBO0VBQ0ksV0FBQTtBQ0FKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENBO0VBRUksZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFFSSxzQkFBQTtFQUNBLHlCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb24tdGFyZ2V0dGluZy9sb2NhdGlvbi10YXJnZXR0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL0ltYWdlcy9CYWNrZ3JvdW5kVGlsZS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4uY2FyZC1jb250ZW50LWZvbnRcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG5cclxufVxyXG4uY2FyZC1vbmV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgbWFyZ2luOiAxLjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDd2aDtcclxuXHJcbn1cclxuLnRpdHRsZS1jYXJkXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcbmZvcm0uZm9ybS1maWVsZHN7XHJcbiAgICBtYXJnaW46IDJlbTtcclxufVxyXG5pbnB1dCNmbmFtZSB7XHJcbiAgICAvKiBoZWlnaHQ6IDZ2aDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGhlaWdodDogNDdweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIH1cclxuICBzZWxlY3QjY291bnRyeSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcbiAgLmZvcm0tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcbi5mb3JtLWxhYmVsLWNvdW50cnlcclxue1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE4cHg7XHJcbn1cclxuYnV0dG9uLmJ1dHRvbi1jb21tb24ge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDQwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM0NDlENDQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBib2xkO1xyXG59XHJcbi5zZWFyY2gtY291bnRyeVxyXG57XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxufVxyXG4uY2FyZC1vbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9IiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uY2FyZC1jb250ZW50LWZvbnQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5jYXJkLW9uZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIG1hcmdpbjogMS41ZW07XG4gIG1hcmdpbi10b3A6IDd2aDtcbn1cblxuLnRpdHRsZS1jYXJkIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbmZvcm0uZm9ybS1maWVsZHMge1xuICBtYXJnaW46IDJlbTtcbn1cblxuaW5wdXQjZm5hbWUge1xuICAvKiBoZWlnaHQ6IDZ2aDsgKi9cbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5zZWxlY3QjY291bnRyeSB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDU1JTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3JtLWxhYmVsLWNvdW50cnkge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxOHB4O1xufVxuXG5idXR0b24uYnV0dG9uLWNvbW1vbiB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMHB4IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDlENDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBib2xkO1xufVxuXG4uc2VhcmNoLWNvdW50cnkge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xufVxuXG4uY2FyZC1vbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/location-targetting/location-targetting.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/location-targetting/location-targetting.page.ts ***!
    \*****************************************************************/

  /*! exports provided: LocationTargettingPage */

  /***/
  function srcAppLocationTargettingLocationTargettingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationTargettingPage", function () {
      return LocationTargettingPage;
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


    var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../config.service */
    "./src/app/config.service.ts");

    var LocationTargettingPage = /*#__PURE__*/function () {
      function LocationTargettingPage(ConfigService) {
        _classCallCheck(this, LocationTargettingPage);

        this.ConfigService = ConfigService;
      }

      _createClass(LocationTargettingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ConfigService.getPostal(this.post).subscribe(function (elements) {
            console.log(elements);
          });
        }
      }, {
        key: "buttonClick",
        value: function buttonClick() {
          this.ConfigService.getPostal(this.post).subscribe(function (elements) {
            console.log(elements);
          });
          console.log(this.post);
        }
      }]);

      return LocationTargettingPage;
    }();

    LocationTargettingPage.ctorParameters = function () {
      return [{
        type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }];
    };

    LocationTargettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-location-targetting',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./location-targetting.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/location-targetting/location-targetting.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./location-targetting.page.scss */
      "./src/app/location-targetting/location-targetting.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])], LocationTargettingPage);
    /***/
  }
}]);
//# sourceMappingURL=location-targetting-location-targetting-module-es5.js.map