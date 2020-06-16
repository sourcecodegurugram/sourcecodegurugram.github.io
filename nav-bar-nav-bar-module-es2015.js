(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nav-bar-nav-bar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-header>\r\n  <div class=\"navigation\">\r\n    <div class=\"main-logo\">\r\n    <img src=\"../../assets/Images/header-logo.png\" alt=\"\" srcset=\"\" class=\"header-logo\"  (click)=\"refresh()\">\r\n    </div>\r\n    \r\n    <div class=\"account-status\">\r\n    \r\n      <img src=\"../../assets/Images/user.png\" class=\"status-check\"  data-toggle=\"modal\" data-target=\"#profile\" *ngIf=\"isLoogedIn\">\r\n    </div>\r\n    \r\n    <div class=\"humburger-menu\">\r\n      <!-- <img src=\"../../assets/Images/cross.png\" class=\"hum-burger-menu-cross\" *ngIf=\"crossSign\" (click)=\"humBurgerCross()\"> -->\r\n      <img src=\"../../assets/Images/newmenu.png\" class=\"hum-burger-menu\" (click)=\"humburgereffect()\" *ngIf=\"humBurger\" >\r\n    </div>\r\n   \r\n    </div>\r\n    \r\n    <div class=\"main-menu\" *ngIf=\"mainMenu\">\r\n\r\n          \r\n\r\n      <!-- <ul class=\"main-list\" (click)=\"itemclick()\">\r\n        <li><a routerLink=\"/signup\">Signup</a></li>\r\n        <li><a routerLink=\"/signin\">SignIn</a></li>\r\n        <li><a routerLink=\"/chat/searchTab\">Search Tab</a></li>\r\n        <li><a routerLink=\"/optional-detail\">optional-detail</a></li>\r\n        <li><a routerLink=\"/register\">Old Register</a></li>\r\n      </ul> -->\r\n    </div>\r\n  </ion-header>\r\n\r\n <div class=\"login-form\" *ngIf=\"logggenIn\">\r\n\r\n  <form class=\"form-fields\">\r\n    <label for=\"name\" class=\"form-label\">Username</label><br>\r\n    <input type=\"text\" id=\"name\"  class=\"form-field-zip-code search-country\" name=\"username\" #username><br>\r\n\r\n    <label for=\"name\" class=\"form-label\">Password</label><br>\r\n    <input  id=\"password\" name=\"password\" class=\"form-field-zip-code search-country\" #password type=\"password\">\r\n\r\n    <div class=\"button-container\">\r\n      <button type=\"button\" class=\"button-common\" (click)=\"LoginForm(username.value,password.value)\">Submit</button>\r\n\r\n    </div>\r\n</form>\r\n\r\n\r\n </div>\r\n   <!-- The Modal nav Option-->\r\n   <div class=\"modal\" id=\"profile\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\" data-dismiss=\"modal\">\r\n      \r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        \r\n        <!-- Modal body -->\r\n        <div class=\"modal-body\">\r\n          <div class=\"continue-button\" data-toggle=\"modal\" data-target=\"#profileedit\" data-dismiss=\"modal\">\r\n            View/Edit Profile\r\n          </div>\r\n          <div class=\"continue-button\" data-toggle=\"modal\" data-target=\"#Account\" data-dismiss=\"modal\">\r\n            Account Settings\r\n          </div>\r\n<div class=\"logout-text-container\" (click)=\"logOut()\">\r\n          <span class=\"log-out-text\">Log Out</span>\r\n        </div>\r\n        </div>\r\n        \r\n       \r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- The Modal Profile Edit-->\r\n  <div class=\"modal\" id=\"profileedit\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\" data-dismiss=\"modal\">\r\n      \r\n        <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n        \r\n        <!-- Modal body -->\r\n        <div class=\"modal-body\">\r\n          \r\n          <div class=\"modal-grid\">\r\n       \r\n            <div class=\"profile-picture-modal\">\r\n             <img src=\"../../assets/Images/p1.jpg\" class=\"image-profile\">\r\n\r\n            </div>\r\n\r\n            <div class=\"profile-name-modal\">\r\n              <span class=\"name\">{{name}}</span>\r\n              <span class=\"not-verified\">Verified</span>\r\n\r\n           </div>\r\n\r\n       </div>\r\n\r\n       <div class=\"sidebar-content\">\r\n        <p class=\"detail-data\">FullName:<br><span class=\"output-text\">{{fname}} {{lname}}</span></p>\r\n        <p class=\"detail-data\">Activities:<br><span class=\"output-text\" *ngFor=\"let actvities of activity\">{{actvities.value | slice:3:5}}</span></p>\r\n        <p class=\"detail-data\">Email:<br><span class=\"output-text\">{{Email}}</span></p>\r\n        <p class=\"detail-data\">Date of Birth:<br><span class=\"output-text\">{{DOB}}</span></p>\r\n        <p class=\"detail-data\">Languages:<br><span class=\"output-text\">Hindi,English</span></p>\r\n        </div>\r\n        <div class=\"continue-button\" >\r\n          Add More Info\r\n        </div>\r\n        </div>\r\n        \r\n       \r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- The Modal Account-->\r\n  <div class=\"modal\" id=\"Account\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\" >\r\n      \r\n        <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n        \r\n        <!-- Modal body -->\r\n        <div class=\"modal-body\">\r\n          \r\n          <div class=\"forms-field\">\r\n            <div class=\"form-group font\">\r\n              <label for=\"sel1\">Communication Preferences</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"usr\">\r\n            </div> \r\n\r\n           \r\n          \r\n\r\n         \r\n            <label for=\"sel1\" class=\"font\">Change App Subscription:</label>\r\n      <div class=\"form-check\">\r\n        <label class=\"form-check-label\">\r\n          <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Switch to Monthly\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <label class=\"form-check-label\">\r\n          <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Switch to Annual\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <label class=\"form-check-label\">\r\n          <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Freeze Subscription\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <label class=\"form-check-label\">\r\n          <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Cancel App Subscription\r\n        </label>\r\n      </div>\r\n      <div class=\"continue-button blue\" >\r\n        Update Billing Info\r\n      </div>\r\n\r\n      <div class=\"form-group font\">\r\n        <label for=\"sel1\">New Password</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"usr\">\r\n      </div> \r\n      <div class=\"form-group font\">\r\n       \r\n        <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Type again to confirm\">\r\n      </div> \r\n      <div class=\"continue-button\" >\r\n        Save Changes\r\n      </div>\r\n      <div class=\"close-account\">\r\n        Close Account <br>\r\n        (Delete all My Info)\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.url = "https://gowebtutorial.com/api/json/system/connect";
    }
    loginUser(user, pass) {
        return this.http.post("https://gowebtutorial.com/api/json/user/login", { username: user, password: pass, });
    }
    systemConnect() {
        this.itr = JSON.parse(localStorage.getItem("currentUser"));
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set("X-CSRF-Token", this.itr.token)
            .set("Content-Type", "application/json")
            .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);
        const requestOptions = {
            headers: headers,
            withCredentials: true,
        };
        return this.http.post(this.url, {}, requestOptions);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AuthService);



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

/***/ "./src/app/nav-bar/nav-bar-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/nav-bar/nav-bar-routing.module.ts ***!
  \***************************************************/
/*! exports provided: NavBarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarPageRoutingModule", function() { return NavBarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nav_bar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar.page */ "./src/app/nav-bar/nav-bar.page.ts");




const routes = [
    {
        path: '',
        component: _nav_bar_page__WEBPACK_IMPORTED_MODULE_3__["NavBarPage"]
    }
];
let NavBarPageRoutingModule = class NavBarPageRoutingModule {
};
NavBarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NavBarPageRoutingModule);



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/nav-bar/nav-bar.module.ts ***!
  \*******************************************/
/*! exports provided: NavBarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarPageModule", function() { return NavBarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _nav_bar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar-routing.module */ "./src/app/nav-bar/nav-bar-routing.module.ts");
/* harmony import */ var _nav_bar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar.page */ "./src/app/nav-bar/nav-bar.page.ts");







let NavBarPageModule = class NavBarPageModule {
};
NavBarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nav_bar_routing_module__WEBPACK_IMPORTED_MODULE_5__["NavBarPageRoutingModule"]
        ],
        declarations: [_nav_bar_page__WEBPACK_IMPORTED_MODULE_6__["NavBarPage"]]
    })
], NavBarPageModule);



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.page.scss":
/*!*******************************************!*\
  !*** ./src/app/nav-bar/nav-bar.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.navigation {\n  display: grid;\n  grid-template-columns: 6fr 1fr 1fr;\n  align-items: center;\n  border-bottom: 1px solid;\n  background-color: white;\n}\nimg.hum-burger-menu {\n  height: 4.5vh;\n}\n.main-logo {\n  margin: 0.8em;\n}\n.account-status {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nimg.hum-burger-menu-cross {\n  position: absolute;\n  top: 2.5vh;\n  right: 3.5vw;\n  z-index: 1;\n  height: 4.5vh;\n}\nul.main-list {\n  list-style: none;\n  font-size: 25px;\n  color: white;\n  display: flex;\n  align-items: center;\n  z-index: 999;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n  margin-left: 0px;\n  justify-content: space-evenly;\n  background-color: black;\n  opacity: 0.8;\n  padding-left: 0px;\n}\na {\n  color: white;\n  font-size: 20px;\n  text-transform: uppercase;\n}\nli {\n  padding: 0 0em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n.login-form.ng-star-inserted {\n  height: 100vh;\n  background-color: white;\n  position: relative;\n  z-index: 1;\n}\n.background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n.card-content-font {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n}\n.card-one {\n  border: 1px solid #707070;\n}\n.tittle-card {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 27px;\n  text-align: center;\n  color: #707070;\n  padding: 1em;\n}\nform.form-fields {\n  margin: 2em;\n  margin-top: 0px;\n  padding-top: 33px;\n}\ntextarea {\n  border-radius: 7px;\n  margin-top: 15px;\n  border: 1px solid;\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n}\nselect {\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 15px;\n  border: 1px solid;\n  margin-bottom: 20px;\n  width: 55%;\n  font-size: 16px;\n  margin-left: 0px;\n  padding-left: 10px;\n}\n.form-label {\n  font-size: 15px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n.form-label-country {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n.button-container {\n  display: flex;\n  margin: 2em;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n  margin-left: 0px;\n}\nbutton.button-common {\n  height: 35px;\n  padding: 0px 20px;\n  border: 1px solid #707070;\n  background-color: #449D44;\n  color: white;\n  border-radius: 7px;\n  font-size: 17px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: bold;\n}\n.search-country {\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n  padding-left: 10px;\n}\n.main-register-card {\n  border: 1px solid #707070;\n  margin: 1.5em;\n  margin-top: 7em;\n}\n.mat-background {\n  background-color: #F5F5F5;\n}\n.card-one-white {\n  background-color: white;\n  padding: 1px;\n}\np.register-with-us {\n  padding: 1.5em;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n.fa-arrow-circle-up:before {\n  content: \"\";\n  margin-right: 11px;\n}\nbutton.btn.btn-success {\n  margin-bottom: 10px;\n}\n.chechk-box-terms {\n  margin-top: 10px;\n}\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nbutton.btn.btn-primary {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #415DAE;\n}\n.facebook {\n  height: 3.5em;\n  padding: 0em 1em;\n  width: 88%;\n}\n.fa-facebook-square:before {\n  content: \"\";\n  font-size: 2em;\n  margin-right: 2em;\n}\n.btn-primary-google {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #4184F3;\n  height: 3.5em;\n  padding: 0em 1em;\n  width: 88%;\n}\n.fa-google-plus-square:before {\n  font-size: 2em;\n  margin-right: 2em;\n}\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n.having-trouble {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  margin: 0.5em;\n}\n.upload-card-register {\n  margin: 2em;\n  border: 1px solid #F5F5F5;\n}\n.profile-heading {\n  background-color: #F5F5F5;\n  padding: 0.3em;\n  border-bottom: 1px solid #F5F5F5;\n}\np.profile-card-title {\n  font-size: 14px;\n  margin: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n.upload-content {\n  margin: 10px;\n}\n.submit-button {\n  margin: 0px;\n  border: none;\n  padding: 0px 8vw;\n  height: 41px;\n  background-color: #5ADB00;\n  color: white;\n  font-size: 15px;\n}\np.terms {\n  padding-bottom: 10px;\n}\n.radio {\n  height: auto;\n  margin-right: 5px;\n  margin-top: 2px;\n  margin-left: 5vw;\n}\nselect::-ms-expand {\n  display: none;\n}\n.label-dropdown {\n  padding-left: 10px;\n}\n.condition-text-container {\n  height: 20vh;\n  overflow: auto;\n  border: 1px solid #707070;\n  border-radius: 7px;\n  background-color: #F2F2F2 !important;\n}\np.condition-text {\n  font-size: 12px;\n  color: black;\n  text-align: justify;\n  padding: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n.terms-checkbox {\n  margin-left: 0px;\n  margin-bottom: 0px;\n  margin-top: 1vh;\n}\n.button-prev {\n  background-color: #E81E16 !important;\n}\n.subscribe-card {\n  padding: 1em;\n  border: 1px solid #707070;\n  background-color: white;\n  margin: 2em 1em;\n}\n.subscription-successfull-text {\n  font-size: 14px;\n  color: black;\n  text-align: justify;\n  padding: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n.subscription-text-anchor {\n  font-size: 12px;\n  text-align: justify;\n  padding: 10px;\n  font-family: \"Open Sans\", sans-serif;\n}\n.other-option {\n  display: flex;\n  flex-direction: row;\n  justify-content: baseline;\n  align-items: flex-end;\n  padding: 10px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n  margin-bottom: 10px;\n}\n.text-subscribe-check {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-left: 2vw;\n  margin-bottom: 0px;\n}\n.membership {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\np.membership-text {\n  text-align: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  color: black;\n}\np.note-under-text {\n  margin-bottom: 0px;\n  margin-top: -15px;\n}\n.login-form {\n  background-color: white;\n  z-index: 1;\n  position: relative;\n  height: 100vh;\n}\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  font-size: 18px;\n}\n.logout-text-container {\n  text-align: center;\n  font-size: 21px;\n  margin: 1em;\n  text-transform: uppercase;\n}\n.modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  grid-gap: 11px;\n}\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n.sidebar-content {\n  margin-top: 1em;\n}\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 0.5em 1rem;\n  border-bottom: none;\n  border-top-left-radius: calc(.3rem - 1px);\n  border-top-right-radius: calc(.3rem - 1px);\n}\n.forms-field {\n  margin: 1em 1em;\n}\n.form-control {\n  border: 1px solid;\n}\n.font {\n  font-size: 20px;\n}\n.form-check {\n  font-size: 18px;\n}\n.blue {\n  background-color: #4372c4;\n}\n.close-account {\n  color: red;\n  margin: 1em;\n  text-align: center;\n}\nimg.status-check {\n  width: 80%;\n}\n.modal {\n  background: #000000a1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmF2LWJhci9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxuYXYtYmFyXFxuYXYtYmFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QURFSjtBQ0FBO0VBQ0ksYUFBQTtBREdKO0FDREE7RUFDSSxhQUFBO0FESUo7QUNGQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FES0o7QUNIQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBRE1KO0FDSkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURPSjtBQ0xBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBRFFKO0FDTkE7RUFDSSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBRFNKO0FDTkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QURTSjtBQ0xFO0VBRUUsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FET0o7QUNMQTtFQUVJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDRixjQUFBO0FET0Y7QUNKQTtFQUNJLHlCQUFBO0FET0o7QUNKQTtFQUVJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtB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QUNJLGVBQUE7QUQ0Qko7QUMxQkE7RUFFSSxlQUFBO0FENEJKO0FDMUJBO0VBRUEseUJBQUE7QUQ0QkE7QUMxQkE7RUFFSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FENEJKO0FDekJBO0VBQ0ksVUFBQTtBRDRCSjtBQzFCQTtFQUNJLHFCQUFBO0FENkJKIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyIDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nLmh1bS1idXJnZXItbWVudSB7XG4gIGhlaWdodDogNC41dmg7XG59XG5cbi5tYWluLWxvZ28ge1xuICBtYXJnaW46IDAuOGVtO1xufVxuXG4uYWNjb3VudC1zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW1nLmh1bS1idXJnZXItbWVudS1jcm9zcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyLjV2aDtcbiAgcmlnaHQ6IDMuNXZ3O1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IDQuNXZoO1xufVxuXG51bC5tYWluLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmxpIHtcbiAgcGFkZGluZzogMCAwZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubG9naW4tZm9ybS5uZy1zdGFyLWluc2VydGVkIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uY2FyZC1jb250ZW50LWZvbnQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5jYXJkLW9uZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG59XG5cbi50aXR0bGUtY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgcGFkZGluZzogMWVtO1xufVxuXG5mb3JtLmZvcm0tZmllbGRzIHtcbiAgbWFyZ2luOiAyZW07XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDMzcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xufVxuXG5zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDdweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA1NSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9ybS1sYWJlbC1jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuYnV0dG9uLmJ1dHRvbi1jb21tb24ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ5RDQ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogYm9sZDtcbn1cblxuLnNlYXJjaC1jb3VudHJ5IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5tYWluLXJlZ2lzdGVyLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBtYXJnaW46IDEuNWVtO1xuICBtYXJnaW4tdG9wOiA3ZW07XG59XG5cbi5tYXQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jYXJkLW9uZS13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbnAucmVnaXN0ZXItd2l0aC11cyB7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5mYS1hcnJvdy1jaXJjbGUtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgqpcIjtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNoZWNoay1ib3gtdGVybXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc29jaWFsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTVEQUU7XG59XG5cbi5mYWNlYm9vayB7XG4gIGhlaWdodDogMy41ZW07XG4gIHBhZGRpbmc6IDBlbSAxZW07XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5mYS1mYWNlYm9vay1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgoJcIjtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG4uYnRuLXByaW1hcnktZ29vZ2xlIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTg0RjM7XG4gIGhlaWdodDogMy41ZW07XG4gIHBhZGRpbmc6IDBlbSAxZW07XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5mYS1nb29nbGUtcGx1cy1zcXVhcmU6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG5wLm9yLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuLmhhdmluZy10cm91YmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luOiAwLjVlbTtcbn1cblxuLnVwbG9hZC1jYXJkLXJlZ2lzdGVyIHtcbiAgbWFyZ2luOiAyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGNUY1RjU7XG59XG5cbi5wcm9maWxlLWhlYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICBwYWRkaW5nOiAwLjNlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUY1RjU7XG59XG5cbnAucHJvZmlsZS1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udXBsb2FkLWNvbnRlbnQge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMHB4IDh2dztcbiAgaGVpZ2h0OiA0MXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxucC50ZXJtcyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucmFkaW8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG59XG5cbnNlbGVjdDo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sYWJlbC1kcm9wZG93biB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNvbmRpdGlvbi10ZXh0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xufVxuXG5wLmNvbmRpdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udGVybXMtY2hlY2tib3gge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDF2aDtcbn1cblxuLmJ1dHRvbi1wcmV2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUUxNiAhaW1wb3J0YW50O1xufVxuXG4uc3Vic2NyaWJlLWNhcmQge1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDJlbSAxZW07XG59XG5cbi5zdWJzY3JpcHRpb24tc3VjY2Vzc2Z1bGwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnN1YnNjcmlwdGlvbi10ZXh0LWFuY2hvciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5vdGhlci1vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50ZXh0LXN1YnNjcmliZS1jaGVjayB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogMnZ3O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5tZW1iZXJzaGlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxucC5tZW1iZXJzaGlwLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5wLm5vdGUtdW5kZXItdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cbi5sb2dpbi1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5sb2dvdXQtdGV4dC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luOiAxZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tb2RhbC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xuICBncmlkLWdhcDogMTFweDtcbn1cblxuLnByb2ZpbGUtbmFtZS1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaWRlYmFyLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjVlbSAxcmVtO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKC4zcmVtIC0gMXB4KTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGNhbGMoLjNyZW0gLSAxcHgpO1xufVxuXG4uZm9ybXMtZmllbGQge1xuICBtYXJnaW46IDFlbSAxZW07XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmZvbnQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mb3JtLWNoZWNrIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzcyYzQ7XG59XG5cbi5jbG9zZS1hY2NvdW50IHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luOiAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nLnN0YXR1cy1jaGVjayB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5tb2RhbCB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBhMTtcbn0iLCIubmF2aWdhdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyIDFmcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5pbWcuaHVtLWJ1cmdlci1tZW51IHtcclxuICAgIGhlaWdodDogNC41dmg7XHJcbn1cclxuLm1haW4tbG9nbyB7XHJcbiAgICBtYXJnaW46IDAuOGVtO1xyXG59XHJcbi5hY2NvdW50LXN0YXR1cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmltZy5odW0tYnVyZ2VyLW1lbnUtY3Jvc3Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyLjV2aDtcclxuICAgIHJpZ2h0OiAzLjV2dztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDQuNXZoO1xyXG59XHJcbnVsLm1haW4tbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5hIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxubGkge1xyXG4gICAgcGFkZGluZzogMCAwZW07XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybS5uZy1zdGFyLWluc2VydGVkIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcblxyXG4gIC5iYWNrZ3JvdW5kXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL0ltYWdlcy9CYWNrZ3JvdW5kVGlsZS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4uY2FyZC1jb250ZW50LWZvbnRcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG5cclxufVxyXG4uY2FyZC1vbmV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG5cclxufVxyXG4udGl0dGxlLWNhcmRcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn1cclxuZm9ybS5mb3JtLWZpZWxkc3tcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMzcHg7XHJcbn1cclxuXHJcblxyXG5cclxuICB0ZXh0YXJlYVxyXG4gIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuIFxyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHNlbGVjdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG59XHJcbiAgLmZvcm0tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcbi5mb3JtLWxhYmVsLWNvdW50cnlcclxue1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuYnV0dG9uLmJ1dHRvbi1jb21tb24ge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM0NDlENDQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBib2xkO1xyXG59XHJcbi5zZWFyY2gtY291bnRyeVxyXG57XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5tYWluLXJlZ2lzdGVyLWNhcmRcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIG1hcmdpbjoxLjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDdlbTtcclxufVxyXG4ubWF0LWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG4uY2FyZC1vbmUtd2hpdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbn1cclxucC5yZWdpc3Rlci13aXRoLXVzIHtcclxuICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmZhLWFycm93LWNpcmNsZS11cDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYwYWFcIjtcclxuICAgIG1hcmdpbi1yaWdodDogMTFweDtcclxufVxyXG5cclxuYnV0dG9uLmJ0bi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jaGVjaGstYm94LXRlcm1zIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE1REFFXHJcbn1cclxuLmZhY2Vib29rIHtcclxuICAgIGhlaWdodDogMy41ZW07XHJcbiAgICBwYWRkaW5nOiAwZW0gMWVtO1xyXG4gICAgd2lkdGg6IDg4JVxyXG59XHJcbi5mYS1mYWNlYm9vay1zcXVhcmU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDgyXCI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMmVtO1xyXG59XHJcbi5idG4tcHJpbWFyeS1nb29nbGVcclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4NEYzO1xyXG4gICAgaGVpZ2h0OiAzLjVlbTtcclxuICAgIHBhZGRpbmc6IDBlbSAxZW07XHJcbiAgICB3aWR0aDogODglXHJcbn1cclxuLmZhLWdvb2dsZS1wbHVzLXNxdWFyZTpiZWZvcmUge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbn1cclxucC5vci10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxufVxyXG4uaGF2aW5nLXRyb3VibGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbn1cclxuLnVwbG9hZC1jYXJkLXJlZ2lzdGVyIHtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Y1RjVGNTtcclxufVxyXG4ucHJvZmlsZS1oZWFkaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgICBwYWRkaW5nOiAwLjNlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjVGNUY1O1xyXG59XHJcbnAucHJvZmlsZS1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLnVwbG9hZC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHggOHZ3O1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVBREIwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5wLnRlcm1zIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5yYWRpb1xyXG57XHJcbmhlaWdodDogYXV0bztcclxubWFyZ2luLXJpZ2h0OiA1cHg7XHJcbm1hcmdpbi10b3A6IDJweDtcclxubWFyZ2luLWxlZnQ6IDV2dztcclxufVxyXG5cclxuXHJcblxyXG4gIFxyXG4gIHNlbGVjdDo6LW1zLWV4cGFuZCB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHJcbi5sYWJlbC1kcm9wZG93blxyXG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmNvbmRpdGlvbi10ZXh0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbn1cclxucC5jb25kaXRpb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLnRlcm1zLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbn1cclxuLmJ1dHRvbi1wcmV2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFODFFMTYgIWltcG9ydGFudDtcclxufVxyXG4uc3Vic2NyaWJlLWNhcmRcclxue1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAyZW0gMWVtO1xyXG59XHJcbi5zdWJzY3JpcHRpb24tc3VjY2Vzc2Z1bGwtdGV4dFxyXG57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5zdWJzY3JpcHRpb24tdGV4dC1hbmNob3Jcclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm90aGVyLW9wdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogYmFzZWxpbmU7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi50ZXh0LXN1YnNjcmliZS1jaGVja1xyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJ2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ubWVtYmVyc2hpcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxucC5tZW1iZXJzaGlwLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxucC5ub3RlLXVuZGVyLXRleHQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxuXHJcbi8vIC5tYWluLW1lbnUge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5jb250aW51ZS1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmxvZ291dC10ZXh0LWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLm1vZGFsLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcclxuICAgIGdyaWQtZ2FwOiAxMXB4O1xyXG59XHJcbi5wcm9maWxlLW5hbWUtbW9kYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uc2lkZWJhci1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDFyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogY2FsYyguM3JlbSAtIDFweCk7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogY2FsYyguM3JlbSAtIDFweCk7XHJcbn1cclxuLmZvcm1zLWZpZWxke1xyXG4gICAgbWFyZ2luOiAxZW0gMWVtO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuLmZvbnQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5mb3JtLWNoZWNrIHtcclxuXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmJsdWVcclxue1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjNDM3MmM0O1xyXG59XHJcbi5jbG9zZS1hY2NvdW50XHJcbntcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxufVxyXG5pbWcuc3RhdHVzLWNoZWNrIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuLm1vZGFse1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMGExO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.page.ts":
/*!*****************************************!*\
  !*** ./src/app/nav-bar/nav-bar.page.ts ***!
  \*****************************************/
/*! exports provided: NavBarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarPage", function() { return NavBarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");








let NavBarPage = class NavBarPage {
    constructor(Configservice, route, router, http, _location, alertController, AuthService) {
        this.Configservice = Configservice;
        this.route = route;
        this.router = router;
        this.http = http;
        this._location = _location;
        this.alertController = alertController;
        this.AuthService = AuthService;
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
    ngOnInit() {
        this.itrs = JSON.parse(localStorage.getItem("currentUser"));
        if (this.itrs.user != null) {
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
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    humburgereffect() {
        this.correctAlert();
    }
    humBurgerCross() {
        this.crossSign = false;
        this.humBurger = true;
        this.mainMenu = false;
    }
    itemclick() {
        this.mainMenu = false;
        this.crossSign = false;
        this.humBurger = true;
    }
    LoginOpen() {
        if (this.logggenIn == false) {
            this.logggenIn = true;
        }
        else if (this.logggenIn == true) {
            this.logggenIn = false;
        }
    }
    LoginForm(user, pass) {
        this.http
            .post("https://gowebtutorial.com/api/json/user/login", {
            username: user,
            password: pass,
        })
            .subscribe((data) => {
            this.post = data.token;
            this.headerDict = { "X-CSRF-Token": data.token };
        });
        return (this.http.post(this.url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](this.headerDict) }),
            (this.logggenIn = false));
    }
    close() {
        this.isLoading = false;
    }
    refresh() {
        this.router.navigate(["/"]);
    }
    correctAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const correct = yield this.alertController.create({
                message: " chat for help",
                buttons: ["OK"],
            });
            yield correct.present();
        });
    }
    logOut() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]()
            .set("X-CSRF-Token", this.itrs.token)
            .set("Content-Type", "application/json")
            .set("X-Cookie", this.itrs.session_name + "=" + this.itrs.sessid);
        const requestOptions = {
            headers: headers,
            withCredentials: true,
        };
        this.http.post(this.logoutUrl, {}, requestOptions).subscribe((head) => {
            console.log(head);
            localStorage.clear();
            window.location.reload();
        });
    }
};
NavBarPage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
NavBarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.page.scss */ "./src/app/nav-bar/nav-bar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
], NavBarPage);



/***/ })

}]);
//# sourceMappingURL=nav-bar-nav-bar-module-es2015.js.map