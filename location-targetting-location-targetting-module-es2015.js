(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-targetting-location-targetting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/location-targetting/location-targetting.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location-targetting/location-targetting.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>navigation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div class=\"background\">\r\n\r\n  <ion-card class=\"card-one\" *ngIf=\"hide\">\r\n    <ion-card-content class=\"card-content-font\">\r\n      Location targeting is turned off on your device. Please provide the following details to see members in your area.\r\n      Postal code and Country. Search button will say find friends.\r\n    </ion-card-content>\r\n\r\n    <p class=\"tittle-card\">Find Friends</p>\r\n    <form class=\"form-fields\">\r\n      <label for=\"fname\" class=\"form-label\">ZIP/Postal Code</label><br>\r\n      <input type=\"text\" id=\"fname\" name=\"post\" class=\"form-field-zip-code\" [(ngModel)]=\"post\"><br>\r\n\r\n      <label class=\"form-label-country\">Country</label><br>\r\n      <select id=\"country\" class=\"country-field\">\r\n        <option value=\"United States\">United States</option>\r\n        <option value=\"USA\">USA</option>\r\n        <option value=\"Dubai\">Dubai</option>\r\n        <option value=\"India\">India</option>\r\n      </select>\r\n      <br>\r\n      <div class=\"button-container\">\r\n        <button type=\"button\" class=\"button-common\" (click)=\"buttonClick()\"\r\n          routerLink=\"/search-result/{{post}}\">Search</button>\r\n      </div>\r\n    </form>\r\n\r\n\r\n\r\n    <p class=\"tittle-card\">Can’t find your\r\n      country ?\r\n      Send us a message here and we will add it\r\n    </p>\r\n\r\n    <form class=\"form-fields\">\r\n\r\n      <label class=\"form-label-country form-label\">Country</label><br>\r\n      <select id=\"country\" class=\"country-field search-country\">\r\n        <option value=\"country\">Country</option>\r\n        <option value=\"USA\">USA</option>\r\n        <option value=\"Dubai\">Dubai</option>\r\n        <option value=\"India\">India</option>\r\n      </select>\r\n      <br>\r\n      <label for=\"fname\" class=\"form-label\">Postcode</label><br>\r\n      <input type=\"text\" id=\"fname\" name=\"fname\" class=\"form-field-zip-code search-country\"><br>\r\n\r\n\r\n      <div class=\"button-container\">\r\n        <button type=\"button\" class=\"button-common\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </ion-card>\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ConfigService = class ConfigService {
    constructor(http) {
        this.http = http;
        this.serverUrl = "https://gowebtutorial.com/api/json/";
        this.articleUrl = this.serverUrl + "user.json";
        this.userUrl = this.serverUrl + "user/";
        this.hobbieUrl = this.serverUrl + "hobbies-json";
        this.postalUrl = this.serverUrl + "post-json?postal_code=";
        this.locationUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
        this.createUrl = "https://gowebtutorial.com/api/json/user/register";
        this.searchUrl = this.serverUrl + "search-view?gender=";
    }
    getArticle() {
        return this.http.get(this.articleUrl);
    }
    getUser(uid) {
        return this.http.get(this.userUrl + uid);
    }
    getHobbies() {
        return this.http.get(this.hobbieUrl);
    }
    getPostal(post, pageIndex) {
        return this.http.get(this.postalUrl + post + "&page=" + pageIndex);
    }
    getLocation(lat, lng) {
        return this.http.get(this.locationUrl +
            lat +
            "," +
            lng +
            "&types;=postal_code" +
            "&key=AIzaSyBru6wNx3CwcvRbACg2G4-Cq7o6Lt4wOvI");
    }
    getSearchUrl(gender, meet, activity, Postalcode) {
        // Only use fields that are specified
        if (gender) {
            this.gender = "&gender=" + gender;
        }
        else {
            this.gender = "";
        }
        if (meet) {
            this.meet = "&meet=" + meet;
        }
        else {
            this.meet = "";
        }
        if (activity) {
            this.activity = "&activity=" + activity;
        }
        else {
            this.activity = "";
        }
        if (Postalcode) {
            this.Postalcode = "&postal=" + Postalcode;
        }
        else {
            this.Postalcode = "";
        }
        console.log(this.serverUrl +
            "search-view?test=test" +
            this.gender +
            this.meet +
            this.activity +
            this.Postalcode);
        return this.http.get(this.serverUrl +
            "search-view?test=test" +
            this.gender +
            this.meet +
            this.activity +
            this.Postalcode);
    }
};
ConfigService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ConfigService);



/***/ }),

/***/ "./src/app/location-targetting/location-targetting-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/location-targetting/location-targetting-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: LocationTargettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationTargettingPageRoutingModule", function() { return LocationTargettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _location_targetting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location-targetting.page */ "./src/app/location-targetting/location-targetting.page.ts");




const routes = [
    {
        path: '',
        component: _location_targetting_page__WEBPACK_IMPORTED_MODULE_3__["LocationTargettingPage"]
    }
];
let LocationTargettingPageRoutingModule = class LocationTargettingPageRoutingModule {
};
LocationTargettingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LocationTargettingPageRoutingModule);



/***/ }),

/***/ "./src/app/location-targetting/location-targetting.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/location-targetting/location-targetting.module.ts ***!
  \*******************************************************************/
/*! exports provided: LocationTargettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationTargettingPageModule", function() { return LocationTargettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _location_targetting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-targetting-routing.module */ "./src/app/location-targetting/location-targetting-routing.module.ts");
/* harmony import */ var _location_targetting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-targetting.page */ "./src/app/location-targetting/location-targetting.page.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");








let LocationTargettingPageModule = class LocationTargettingPageModule {
};
LocationTargettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _location_targetting_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationTargettingPageRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        ],
        declarations: [_location_targetting_page__WEBPACK_IMPORTED_MODULE_6__["LocationTargettingPage"]]
    })
], LocationTargettingPageModule);



/***/ }),

/***/ "./src/app/location-targetting/location-targetting.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/location-targetting/location-targetting.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\n.card-content-font {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n}\n\n.card-one {\n  border: 1px solid #707070;\n  margin: 1.5em;\n  margin-top: 7vh;\n}\n\n.tittle-card {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n  padding: 1em;\n}\n\nform.form-fields {\n  margin: 2em;\n}\n\ninput#fname {\n  /* height: 6vh; */\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 15px;\n  border: 1px solid;\n  margin-bottom: 20px;\n}\n\nselect#country {\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 15px;\n  border: 1px solid;\n  margin-bottom: 20px;\n  width: 55%;\n  font-size: 1em;\n}\n\n.form-label {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.form-label-country {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 18px;\n}\n\nbutton.button-common {\n  height: 40px;\n  padding: 0px 40px;\n  border: 1px solid #707070;\n  background-color: #449D44;\n  color: white;\n  border-radius: 7px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: bold;\n}\n\n.search-country {\n  width: 100% !important;\n  background-color: #F2F2F2;\n}\n\n.card-one {\n  background-color: white !important;\n}\n\n.loading-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24tdGFyZ2V0dGluZy9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxsb2NhdGlvbi10YXJnZXR0aW5nXFxsb2NhdGlvbi10YXJnZXR0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9jYXRpb24tdGFyZ2V0dGluZy9sb2NhdGlvbi10YXJnZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVBO0VBRUksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNGLGNBQUE7QUNBRjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUVJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdBO0VBQ0ksV0FBQTtBQ0FKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENBO0VBRUksZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFFSSxzQkFBQTtFQUNBLHlCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQ0FBQTtBQ0dKOztBRERFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uLXRhcmdldHRpbmcvbG9jYXRpb24tdGFyZ2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9JbWFnZXMvQmFja2dyb3VuZFRpbGUucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuLmNhcmQtY29udGVudC1mb250XHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuXHJcbn1cclxuLmNhcmQtb25le1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIG1hcmdpbjogMS41ZW07XHJcbiAgICBtYXJnaW4tdG9wOiA3dmg7XHJcblxyXG59XHJcbi50aXR0bGUtY2FyZFxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5mb3JtLmZvcm0tZmllbGRze1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbn1cclxuaW5wdXQjZm5hbWUge1xyXG4gICAgLyogaGVpZ2h0OiA2dmg7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICB9XHJcbiAgc2VsZWN0I2NvdW50cnkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG4gIC5mb3JtLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG4uZm9ybS1sYWJlbC1jb3VudHJ5XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxOHB4O1xyXG59XHJcbmJ1dHRvbi5idXR0b24tY29tbW9uIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDBweCA0MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjNDQ5RDQ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogYm9sZDtcclxufVxyXG4uc2VhcmNoLWNvdW50cnlcclxue1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbn1cclxuLmNhcmQtb25lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgIiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uY2FyZC1jb250ZW50LWZvbnQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5jYXJkLW9uZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIG1hcmdpbjogMS41ZW07XG4gIG1hcmdpbi10b3A6IDd2aDtcbn1cblxuLnRpdHRsZS1jYXJkIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbmZvcm0uZm9ybS1maWVsZHMge1xuICBtYXJnaW46IDJlbTtcbn1cblxuaW5wdXQjZm5hbWUge1xuICAvKiBoZWlnaHQ6IDZ2aDsgKi9cbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5zZWxlY3QjY291bnRyeSB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDU1JTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3JtLWxhYmVsLWNvdW50cnkge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxOHB4O1xufVxuXG5idXR0b24uYnV0dG9uLWNvbW1vbiB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMHB4IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDlENDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBib2xkO1xufVxuXG4uc2VhcmNoLWNvdW50cnkge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xufVxuXG4uY2FyZC1vbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/location-targetting/location-targetting.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/location-targetting/location-targetting.page.ts ***!
  \*****************************************************************/
/*! exports provided: LocationTargettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationTargettingPage", function() { return LocationTargettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let LocationTargettingPage = class LocationTargettingPage {
    constructor(ConfigService, geolocation, platform, nativeGeocoder, zone, _Activatedroute, routes) {
        this.ConfigService = ConfigService;
        this.geolocation = geolocation;
        this.platform = platform;
        this.nativeGeocoder = nativeGeocoder;
        this.zone = zone;
        this._Activatedroute = _Activatedroute;
        this.routes = routes;
        this.hide = false;
    }
    ngOnInit() {
        this.geolocation
            .getCurrentPosition()
            .then((resp) => {
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;
            console.log(this.lat);
            console.log(this.lng);
            // If we get lat long then we will pull Address details from reverse geo lookup
            if (this.lat && this.lng) {
                this.reverseGeoLookup();
            }
            else {
                this.showFormPage();
            }
        }) // If we do not get lat long, we will present page with form for address and post code
            .catch((error) => {
            this.showFormPage();
        });
    }
    reverseGeoLookup() {
        // This is where the code for reverse GEO lookup will come
        this.ConfigService.getLocation(this.lat, this.lng).subscribe((data) => {
            this.addressData = data;
            this.address = this.addressData.results[0].address_components;
            for (var i = 0; i < this.address.length; i++) {
                if (this.address[i].types.includes("postal_code")) {
                    this.postcode = this.address[i].long_name;
                }
            }
            this.routes.navigate(["search-result/", this.postcode]);
        });
    }
    showFormPage() {
        // We will hide this page at starting. If lat long fails, we will unhide it so that people can fill information
        this.hide = true;
    }
    buttonClick() {
        // this.ConfigService.getPostal(this.post).subscribe((elements) => {});
    }
};
LocationTargettingPage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
LocationTargettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-location-targetting",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./location-targetting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/location-targetting/location-targetting.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./location-targetting.page.scss */ "./src/app/location-targetting/location-targetting.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], LocationTargettingPage);



/***/ })

}]);
//# sourceMappingURL=location-targetting-location-targetting-module-es2015.js.map