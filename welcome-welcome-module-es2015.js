(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"loading-container\">\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n</div>\n\n<ion-content>\n  <div class=\"welcome\">\n    <div class=\"welcome-content\">\n      <p class=\"welcome-content-Para\">\n        Welcome!\n      </p>\n\n      <p class=\"welcome-content-Para\">\n        We can help you make <u>platonic</u>\n        connections in your local area.\n      </p>\n\n\n      <P class=\"welcome-content-Para\">\n        First, ONE BIG RULE:<br>\n\n        Platonic = we will not help you\n        find a date or sexual partners. No\n        judgment if that is your goal, but\n        kindly save your energy and use another app\n\n      </P>\n\n\n\n      <div class=\"blue-button\" (click)=\"popOpen()\">\n        Sounds Cool! Who can I meet?\n      </div>\n\n      <div class=\"green-button\" routerLink=\"/signup\">\n        Awesome! Sign me up!\n\n      </div>\n\n\n      <div class=\"alreday-member\" routerLink=\"/signin\">\n        I am already a member\n      </div>\n    </div>\n\n\n\n\n\n\n\n\n\n  </div>\n\n</ion-content>\n\n<div class=\"background-oops\" *ngIf=\"popup\">\n\n  <ion-card class=\"card-one\">\n    <div class=\"cross-pop\" (click)=\"closepop()\">\n      <img src=\"../../assets/Images/cross.png\" class=\"cross-image\">\n    </div><br>\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"search-container\" >\n    <ion-card-content class=\"card-content-font\">\n      Oops! Looks like location targeting is\n      turned off on your device. Either turn it on or\n      input your postal code and country to see\n      members in your area.\n    </ion-card-content>\n\n    <p class=\"tittle-card\">Find Friends</p>\n    <form class=\"form-fields\">\n\n      \n      <div class=\"form-group\">\n        <label for=\"fname\" class=\"form-label\">ZIP/Postal Code</label><br>\n        <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Postcode\" name=\"post\" class=\"form-field-zip-code\" [(ngModel)]=\"post\">\n  \n      </div>\n      <div class=\"form-group\">\n        <label for=\"country\">Country</label>\n        <select class=\"form-control\" id=\"country\" name=\"live\" > \n          <option value=\"au\" >Australia</option>\n          <option value=\"ca\">Canada</option>\n          <option value=\"in\">India</option>\n          <option value=\"nz\">New Zealand</option>\n          <option value=\"sg\">Singapore</option>\n          <option value=\"gb\">United Kingdom</option>\n          <option value=\"us\" selected=\"selected\">United States</option>\n\n        </select>\n        <span class=\"under-text\"></span>\n      </div>\n\n    \n      <br>\n      <div class=\"button-container\">\n        <button type=\"button\" class=\"button-common\" routerLink=\"/search-result/{{post}}\">Search</button>\n      </div>\n    </form>\n\n\n  </div>\n\n  </ion-card>\n</div>\n\n\n\n<!--Serach Result-->\n<div class=\"serach-result\" *ngIf=\"searchresult\">\n  <div class=\"background\">\n    <div class=\"tittle-home-page\">\n      <ion-card-subtitle class=\"tittle-home\">Members near you</ion-card-subtitle>\n      <img src=\"../../assets/Images/crosspop.png\" class=\"cross-pop-button\" (click)=\"closesearchpop()\">\n    </div>\n  \n  \n    <div class=\"member-cards\" *ngFor=\"let posts of  searchResponse\"\n      routerLink=\"/detail/{{posts.name}}/{{posts.mail}}/{{posts.uid}}\">\n  \n  \n      <div class=\"member-card-image\">\n  \n        <img src=\"{{posts.Picture}}\" alt=\"\" srcset=\"\" class=\"user-image\">\n      \n      </div>\n      <div class=\"member-card-text\">\n        <p class=\"name card-item\">{{posts.name}}<ion-badge slot=\"end\" color=\"light\" >Parent\n          </ion-badge>\n          <ion-badge slot=\"end\" color=\"light\" >Pet Owner</ion-badge>\n        </p>\n        <ion-label class=\"hobbies card-item \"><span\n            class=\"left-heading\">Activities:&nbsp;</span>{{posts.Activity | slice:3:5}} </ion-label>\n        <ion-badge slot=\"end\" color=\"light\">{{posts.Activity.length}}</ion-badge><br> \n        <!-- <ion-label class=\"hobbies card-item\" ><span class=\"left-heading\">Activities:</span>{{posts.Activity | slice:-2:-1}}</ion-label>\n      <ion-badge slot=\"end\"  color=\"light\"></ion-badge> -->\n        <p class=\"distance card-item\"><span class=\"left-heading\">Distance:</span>1 miles away</p>\n      </div>\n    </div>\n    <button *ngIf=\"currPage.length == 25\" class=\"showMore\" (click)=\"getSearchData()\">Show More</button>\n  </div>\n\n</div>");

/***/ }),

/***/ "./src/app/welcome/welcome-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/welcome/welcome-routing.module.ts ***!
  \***************************************************/
/*! exports provided: WelcomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function() { return WelcomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ "./src/app/welcome/welcome.module.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome-routing.module */ "./src/app/welcome/welcome-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");








let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_7__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/welcome/welcome.page.scss":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  /* align-items: center; */\n  margin: 0px 2em;\n  /* margin-top: 6em; */\n  height: 100vh;\n}\n\np.welcome-content-Para {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 200;\n}\n\n.blue-button {\n  background-color: #4472C4;\n  padding: 0.6em;\n  border-radius: 7px;\n  text-align: center;\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 19px;\n  margin: 1em 0px;\n  font-weight: 200;\n}\n\n.green-button {\n  background-color: green;\n  padding: 0.6em;\n  border-radius: 7px;\n  text-align: center;\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 19px;\n  font-weight: 200;\n  margin: 1em 0px;\n}\n\n.alreday-member {\n  text-align: center;\n  font-size: 20px;\n  color: red;\n  font-family: \"Open Sans\", sans-serif;\n  margin-top: 0.7em;\n  font-weight: 200;\n}\n\n.background-oops {\n  background-color: #0e0d0d29;\n  padding-top: 6em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\n.card-content-font {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n  margin-right: 1em;\n  margin-left: 1em;\n}\n\n.card-one {\n  border: 1px solid #707070;\n  margin: 1.5em;\n  margin-top: 7vh;\n}\n\n.tittle-card {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n  padding: 1em;\n}\n\nform.form-fields {\n  margin: 2em;\n}\n\ninput#fname {\n  /* height: 6vh; */\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 15px;\n  border: 1px solid;\n  margin-bottom: 20px;\n}\n\nselect#country {\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 15px;\n  border: 1px solid;\n  margin-bottom: 20px;\n  width: 55%;\n  font-size: 1em;\n}\n\n.form-label {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.form-label-country {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 18px;\n}\n\nbutton.button-common {\n  height: 40px;\n  padding: 0px 40px;\n  border: 1px solid #707070;\n  background-color: #449D44;\n  color: white;\n  border-radius: 7px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: bold;\n}\n\n.search-country {\n  width: 100% !important;\n  background-color: #F2F2F2;\n}\n\n.card-one {\n  background-color: white !important;\n}\n\n.loading-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\nimg.cross-image {\n  width: 9%;\n  margin: 5px;\n  float: right;\n  z-index: 1000;\n  position: relative;\n}\n\n.welcome {\n  margin-top: 3em;\n}\n\n.serach-result {\n  position: absolute;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  background-color: #00000073;\n  margin: 0em 0em;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 80vh;\n  overflow-x: auto;\n  width: 89vw;\n  margin-top: 5em;\n}\n\nion-card.ios.hydrated {\n  margin-top: 0px;\n}\n\n.tittle-home-page {\n  padding: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  padding-top: 2em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.tittle-home {\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: capitalize;\n}\n\n.member-cards {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  background-color: white;\n  margin: 20px;\n  align-items: center;\n  border: 1px solid #717171;\n  margin-top: 0px;\n}\n\np.card-item {\n  margin-bottom: 0px;\n  margin-top: -2px;\n  font-size: 14px;\n  color: #707070;\n}\n\np.name.card-item {\n  font-size: 16px;\n}\n\n.hobbies {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n  color: #707070;\n}\n\n.activities {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n  display: flex;\n  flex-direction: row;\n}\n\n.distance {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n}\n\nimg.number-mage {\n  width: 9%;\n}\n\n.left-heading {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n}\n\nimg.user-image {\n  width: 100%;\n  height: 14vh;\n}\n\n.modal-backdrop {\n  height: auto !important;\n}\n\n.modal-backdrop.show {\n  opacity: 1;\n}\n\np.modal-para {\n  text-align: justify;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  word-spacing: -1px;\n}\n\n.checkbox-popup {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n\nimg.check-box {\n  margin-right: 10px;\n  text-align: center;\n}\n\nh5.whos-on-site {\n  font-size: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n\n.button-flex {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.register-button {\n  background-color: #5ADB00;\n  height: 40px;\n}\n\nbutton.btn.btn-primary.login-button {\n  height: 40px;\n}\n\np.check-box-text {\n  margin-bottom: 0px;\n}\n\n.member-card-text {\n  margin-left: 3vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: 3vw;\n}\n\n.showMore {\n  width: 100%;\n  padding: 20px 0px;\n}\n\ninput#usr {\n  height: 5vh;\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFx3ZWxjb21lXFx3ZWxjb21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNKLGVBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDS0o7O0FERkE7RUFFSSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBRUEsZ0JBQUE7QUNHSjs7QUREQTtFQUVJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDRixjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0dGOztBREFBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREFBO0VBRUksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0FDR0o7O0FEREE7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O0VBQ0UsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDUEo7O0FEVUU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFVFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDUEo7O0FEVUU7RUFDRSxZQUFBO0FDUEo7O0FEVUU7RUFDRSxrQkFBQTtBQ1BKOztBRFVFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURVRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG4gICAgbWFyZ2luOiAwcHggMmVtO1xyXG4gICAgLyogbWFyZ2luLXRvcDogNmVtOyAqL1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5wLndlbGNvbWUtY29udGVudC1QYXJhIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuLmJsdWUtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XHJcbiAgICBwYWRkaW5nOiAwLjZlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbWFyZ2luOiAxZW0gMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG4uZ3JlZW4tYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgcGFkZGluZzogMC42ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbWFyZ2luOiAxZW0gMHB4O1xyXG59XHJcbi5hbHJlZGF5LW1lbWJlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogMC43ZW07XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1vb3BzXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTBkMGQyOTtcclxuICAgIHBhZGRpbmctdG9wOiA2ZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgXHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbi5jYXJkLWNvbnRlbnQtZm9udFxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuXHJcbn1cclxuLmNhcmQtb25le1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIG1hcmdpbjogMS41ZW07XHJcbiAgICBtYXJnaW4tdG9wOiA3dmg7XHJcblxyXG59XHJcbi50aXR0bGUtY2FyZFxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5mb3JtLmZvcm0tZmllbGRze1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbn1cclxuaW5wdXQjZm5hbWUge1xyXG4gICAgLyogaGVpZ2h0OiA2dmg7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICB9XHJcbiAgc2VsZWN0I2NvdW50cnkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG4gIC5mb3JtLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG4uZm9ybS1sYWJlbC1jb3VudHJ5XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxOHB4O1xyXG59XHJcbmJ1dHRvbi5idXR0b24tY29tbW9uIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDBweCA0MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjNDQ5RDQ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogYm9sZDtcclxufVxyXG4uc2VhcmNoLWNvdW50cnlcclxue1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbn1cclxuLmNhcmQtb25lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgaW1nLmNyb3NzLWltYWdlIHtcclxuICAgIHdpZHRoOiA5JTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi53ZWxjb21lIHtcclxuICAgIG1hcmdpbi10b3A6IDNlbTtcclxufVxyXG4uc2VyYWNoLXJlc3VsdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDczO1xyXG4gICAgbWFyZ2luOiAwZW0gMGVtO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIFxyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL0ltYWdlcy9CYWNrZ3JvdW5kVGlsZS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6ODB2aDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICB3aWR0aDogODl2dztcclxuICAgIG1hcmdpbi10b3A6IDVlbTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jYXJkLmlvcy5oeWRyYXRlZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXR0bGUtaG9tZS1wYWdlIHtcclxuICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAudGl0dGxlLWhvbWUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW1iZXItY2FyZHMge1xyXG4gIFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MTcxNzE7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIHAuY2FyZC1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgXHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICB9XHJcbiAgXHJcbiAgcC5uYW1lLmNhcmQtaXRlbSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob2JiaWVzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICBcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuYWN0aXZpdGllcyB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmRpc3RhbmNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgaW1nLm51bWJlci1tYWdlIHtcclxuICAgIHdpZHRoOiA5JTtcclxuICB9XHJcbiAgXHJcbiAgLmxlZnQtaGVhZGluZyB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG4gIFxyXG4gIGltZy51c2VyLWltYWdlIHtcclxuICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNHZoO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtYmFja2Ryb3Age1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1iYWNrZHJvcC5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIHAubW9kYWwtcGFyYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHdvcmQtc3BhY2luZzogLTFweDtcclxuICB9XHJcbiAgXHJcbiAgLmNoZWNrYm94LXBvcHVwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBpbWcuY2hlY2stYm94IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgaDUud2hvcy1vbi1zaXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uLWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnJlZ2lzdGVyLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICBcclxuICBidXR0b24uYnRuLmJ0bi1wcmltYXJ5LmxvZ2luLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHAuY2hlY2stYm94LXRleHQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuICBcclxuICAubWVtYmVyLWNhcmQtdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogM3Z3O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzdnc7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaG93TW9yZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gIH1cclxuICBpbnB1dCN1c3Ige1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn0iLCIud2VsY29tZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gIG1hcmdpbjogMHB4IDJlbTtcbiAgLyogbWFyZ2luLXRvcDogNmVtOyAqL1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5wLndlbGNvbWUtY29udGVudC1QYXJhIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLmJsdWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbiAgcGFkZGluZzogMC42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE5cHg7XG4gIG1hcmdpbjogMWVtIDBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLmdyZWVuLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBwYWRkaW5nOiAwLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luOiAxZW0gMHB4O1xufVxuXG4uYWxyZWRheS1tZW1iZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDAuN2VtO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uYmFja2dyb3VuZC1vb3BzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMGQwZDI5O1xuICBwYWRkaW5nLXRvcDogNmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLmNhcmQtY29udGVudC1mb250IHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuLmNhcmQtb25lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgbWFyZ2luOiAxLjVlbTtcbiAgbWFyZ2luLXRvcDogN3ZoO1xufVxuXG4udGl0dGxlLWNhcmQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuZm9ybS5mb3JtLWZpZWxkcyB7XG4gIG1hcmdpbjogMmVtO1xufVxuXG5pbnB1dCNmbmFtZSB7XG4gIC8qIGhlaWdodDogNnZoOyAqL1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDdweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbnNlbGVjdCNjb3VudHJ5IHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aWR0aDogNTUlO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLmZvcm0tbGFiZWwge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvcm0tbGFiZWwtY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE4cHg7XG59XG5cbmJ1dHRvbi5idXR0b24tY29tbW9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwcHggNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0OUQ0NDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG59XG5cbi5zZWFyY2gtY291bnRyeSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG59XG5cbi5jYXJkLW9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbmltZy5jcm9zcy1pbWFnZSB7XG4gIHdpZHRoOiA5JTtcbiAgbWFyZ2luOiA1cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ud2VsY29tZSB7XG4gIG1hcmdpbi10b3A6IDNlbTtcbn1cblxuLnNlcmFjaC1yZXN1bHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDczO1xuICBtYXJnaW46IDBlbSAwZW07XG59XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL0ltYWdlcy9CYWNrZ3JvdW5kVGlsZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aWR0aDogODl2dztcbiAgbWFyZ2luLXRvcDogNWVtO1xufVxuXG5pb24tY2FyZC5pb3MuaHlkcmF0ZWQge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi50aXR0bGUtaG9tZS1wYWdlIHtcbiAgcGFkZGluZzogMS41ZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nLXRvcDogMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXR0bGUtaG9tZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubWVtYmVyLWNhcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzE3MTcxO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbnAuY2FyZC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuXG5wLm5hbWUuY2FyZC1pdGVtIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaG9iYmllcyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5hY3Rpdml0aWVzIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZGlzdGFuY2Uge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmltZy5udW1iZXItbWFnZSB7XG4gIHdpZHRoOiA5JTtcbn1cblxuLmxlZnQtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmltZy51c2VyLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTR2aDtcbn1cblxuLm1vZGFsLWJhY2tkcm9wIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1iYWNrZHJvcC5zaG93IHtcbiAgb3BhY2l0eTogMTtcbn1cblxucC5tb2RhbC1wYXJhIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdvcmQtc3BhY2luZzogLTFweDtcbn1cblxuLmNoZWNrYm94LXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmltZy5jaGVjay1ib3gge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDUud2hvcy1vbi1zaXRlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idXR0b24tZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmVnaXN0ZXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBREIwMDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5LmxvZ2luLWJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbn1cblxucC5jaGVjay1ib3gtdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1lbWJlci1jYXJkLXRleHQge1xuICBtYXJnaW4tbGVmdDogM3Z3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWFyZ2luLXJpZ2h0OiAzdnc7XG59XG5cbi5zaG93TW9yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cblxuaW5wdXQjdXNyIHtcbiAgaGVpZ2h0OiA1dmg7XG4gIHBhZGRpbmc6IDFlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/welcome/welcome.page.ts":
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









let WelcomePage = class WelcomePage {
    constructor(ConfigService, geolocation, platform, nativeGeocoder, zone, _Activatedroute, routes, locate) {
        this.ConfigService = ConfigService;
        this.geolocation = geolocation;
        this.platform = platform;
        this.nativeGeocoder = nativeGeocoder;
        this.zone = zone;
        this._Activatedroute = _Activatedroute;
        this.routes = routes;
        this.locate = locate;
        this.isLoading = false;
        this.hide = false;
        this.popup = false;
        this.signup = false;
        this.maxNumberOfTabs = 2;
        this.selectedIndex = 0;
        this.activit = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.activities = ["yoga", "playdates (parents and children)", "happy hour/cocktails/beers", "sightseeing"];
        this.Result = false;
        this.searchResponse = [];
        this.pageIndex = 0;
        this.currPage = [];
        this.searchresult = false;
    }
    ngOnInit() {
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
                this.isLoading = false;
            }
            this.searchresult = true;
            this.getSearchData();
            // this.routes.navigate(["search-result/", this.postcode]);
        });
    }
    showFormPage() {
        // We will hide this page at starting. If lat long fails, we will unhide it so that people can fill information
        this.hide = true;
    }
    popOpen() {
        this.isLoading = true;
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
            this.isLoading = false;
            this.popup = true;
            this.showFormPage();
        });
    }
    closepop() {
        this.popup = false;
    }
    signups() {
        this.signup = true;
    }
    tabChanged(tabChangeEvent) {
        this.selectedIndex = tabChangeEvent.index;
    }
    nextStep() {
        this.selectedIndex += 1;
    }
    previousStep() {
        this.selectedIndex -= 1;
    }
    getSearchData() {
        this.ConfigService.getPostal(this.postcode, this.pageIndex).subscribe((elements) => {
            this.currPage = Object.keys(elements).map((i) => elements[i]);
            console.log(this.currPage);
            this.searchResponse = this.searchResponse.concat(this.currPage);
            console.log(this.searchResponse);
        });
        this.pageIndex++;
    }
    closesearchpop() {
        this.searchresult = false;
    }
};
WelcomePage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] }
];
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.page.scss */ "./src/app/welcome/welcome.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-module-es2015.js.map