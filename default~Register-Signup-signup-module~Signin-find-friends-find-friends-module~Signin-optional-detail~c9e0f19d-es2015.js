(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Register-Signup-signup-module~Signin-find-friends-find-friends-module~Signin-optional-detail~c9e0f19d"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/NavigationBar/navigationbar.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/NavigationBar/navigationbar.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <div class=\"navigation\">\r\n    <div class=\"main-logo\">\r\n      <img src=\"../../assets/Images/header-logo.png\" alt=\"\" srcset=\"\" class=\"header-logo\" (click)=\"refresh()\">\r\n    </div>\r\n\r\n    <div class=\"account-status\">\r\n      <img src=\"../../assets/Images/user.png\" class=\"status-check\" \r\n        *ngIf=\"isLoogedIn\" (click)=\"openAlertDialog()\">\r\n    </div>\r\n\r\n    <div class=\"humburger-menu\">\r\n      <!-- <img src=\"../../assets/Images/cross.png\" class=\"hum-burger-menu-cross\" *ngIf=\"crossSign\" (click)=\"humBurgerCross()\"> -->\r\n      <img src=\"../../assets/Images/newmenu.png\" class=\"hum-burger-menu\" (click)=\"humburgereffect()\" *ngIf=\"humBurger\">\r\n    </div>\r\n\r\n<div class=\"newpopup\"></div>\r\n\r\n  </div>\r\n\r\n  <div class=\"main-menu\" *ngIf=\"mainMenu\">\r\n\r\n\r\n\r\n    <!-- <ul class=\"main-list\" (click)=\"itemclick()\">\r\n        <li><a routerLink=\"/signup\">Signup</a></li>\r\n        <li><a routerLink=\"/signin\">SignIn</a></li>\r\n        <li><a routerLink=\"/chat/searchUser\">Search Tab</a></li>\r\n        <li><a routerLink=\"/optional-detail\">optional-detail</a></li>\r\n        <li><a routerLink=\"/register\">Old Register</a></li>\r\n      </ul> -->\r\n  </div>\r\n\r\n</ion-header>\r\n\r\n<div class=\"login-form\" *ngIf=\"logggenIn\">\r\n\r\n  <form class=\"form-fields\">\r\n    <label for=\"name\" class=\"form-label\">Username</label><br>\r\n    <input type=\"text\" id=\"name\" class=\"form-field-zip-code search-country\" name=\"username\" #username><br>\r\n\r\n    <label for=\"name\" class=\"form-label\">Password</label><br>\r\n    <input id=\"password\" name=\"password\" class=\"form-field-zip-code search-country\" #password type=\"password\">\r\n\r\n    <div class=\"button-container\">\r\n      <button type=\"button\" class=\"button-common\" (click)=\"LoginForm(username.value,password.value)\">Submit</button>\r\n\r\n    </div>\r\n  </form>\r\n\r\n\r\n</div>\r\n \r\n\r\n<!-- The Modal Profile Edit-->\r\n<div class=\"modal\" id=\"profileedit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\" data-dismiss=\"modal\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"modal-grid\">\r\n\r\n          <div class=\"profile-picture-modal\">\r\n            <img src=\"../../assets/Images/p1.jpg\" class=\"image-profile\">\r\n\r\n          </div>\r\n\r\n          <div class=\"profile-name-modal\">\r\n            <span class=\"name\">{{name}}</span>\r\n            <span class=\"not-verified\">Verified</span>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"sidebar-content\">\r\n          <p class=\"detail-data\">FullName:<br><span class=\"output-text\">{{fname}} {{lname}}</span></p>\r\n          <p class=\"detail-data\">Activities:<br><span class=\"output-text\"\r\n              *ngFor=\"let actvities of activity\">{{actvities.value | slice:3:5}}</span></p>\r\n          <p class=\"detail-data\">Email:<br><span class=\"output-text\">{{Email}}</span></p>\r\n          <p class=\"detail-data\">Date of Birth:<br><span class=\"output-text\">{{DOB}}</span></p>\r\n          <p class=\"detail-data\">Languages:<br><span class=\"output-text\">Hindi,English</span></p>\r\n        </div>\r\n        <div class=\"continue-button\">\r\n          Add More Info\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- The Modal Account-->\r\n<div class=\"modal\" id=\"Account\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"forms-field\">\r\n          <div class=\"form-group font\">\r\n            <label for=\"sel1\">Communication Preferences</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\r\n          </div>\r\n          <label for=\"sel1\" class=\"font\">Change App Subscription:</label>\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Switch to Monthly\r\n            </label>\r\n          </div>\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Switch to Annual\r\n            </label>\r\n          </div>\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Freeze Subscription\r\n            </label>\r\n          </div>\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Cancel App Subscription\r\n            </label>\r\n          </div>\r\n          <div class=\"continue-button blue\">\r\n            Update Billing Info\r\n          </div>\r\n\r\n          <div class=\"form-group font\">\r\n            <label for=\"sel1\">New Password</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\r\n          </div>\r\n          <div class=\"form-group font\">\r\n\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Type again to confirm\">\r\n          </div>\r\n          <div class=\"continue-button\">\r\n            Save Changes\r\n          </div>\r\n          <div class=\"close-account\">\r\n            Close Account <br>\r\n            (Delete all My Info)\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/Navigation/NavigationBar/navigationbar.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Navigation/NavigationBar/navigationbar.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.navigation {\n  display: grid;\n  grid-template-columns: 6fr 1fr 1fr;\n  align-items: center;\n  border-bottom: 1px solid;\n  background-color: white;\n}\nimg.hum-burger-menu {\n  height: 4.5vh;\n}\n.main-logo {\n  margin: 0.8em;\n}\n.account-status {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nimg.hum-burger-menu-cross {\n  position: absolute;\n  top: 2.5vh;\n  right: 3.5vw;\n  z-index: 1;\n  height: 4.5vh;\n}\nul.main-list {\n  list-style: none;\n  font-size: 25px;\n  color: white;\n  display: flex;\n  align-items: center;\n  z-index: 999;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n  margin-left: 0px;\n  justify-content: space-evenly;\n  background-color: black;\n  opacity: 0.8;\n  padding-left: 0px;\n}\na {\n  color: white;\n  font-size: 20px;\n  text-transform: uppercase;\n}\nli {\n  padding: 0 0em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n.login-form.ng-star-inserted {\n  height: 100vh;\n  background-color: white;\n  position: relative;\n  z-index: 1;\n}\n.background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n.card-content-font {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n}\n.card-one {\n  border: 1px solid #707070;\n}\n.tittle-card {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 27px;\n  text-align: center;\n  color: #707070;\n  padding: 1em;\n}\nform.form-fields {\n  margin: 2em;\n  margin-top: 0px;\n  padding-top: 33px;\n}\ntextarea {\n  border-radius: 7px;\n  margin-top: 15px;\n  border: 1px solid;\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n}\nselect {\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 15px;\n  border: 1px solid;\n  margin-bottom: 20px;\n  width: 55%;\n  font-size: 16px;\n  margin-left: 0px;\n  padding-left: 10px;\n}\n.form-label {\n  font-size: 15px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n.form-label-country {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n.button-container {\n  display: flex;\n  margin: 2em;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n  margin-left: 0px;\n}\nbutton.button-common {\n  height: 35px;\n  padding: 0px 20px;\n  border: 1px solid #707070;\n  background-color: #449D44;\n  color: white;\n  border-radius: 7px;\n  font-size: 17px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: bold;\n}\n.search-country {\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n  padding-left: 10px;\n}\n.main-register-card {\n  border: 1px solid #707070;\n  margin: 1.5em;\n  margin-top: 7em;\n}\n.mat-background {\n  background-color: #F5F5F5;\n}\n.card-one-white {\n  background-color: white;\n  padding: 1px;\n}\np.register-with-us {\n  padding: 1.5em;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n.fa-arrow-circle-up:before {\n  content: \"\";\n  margin-right: 11px;\n}\nbutton.btn.btn-success {\n  margin-bottom: 10px;\n}\n.chechk-box-terms {\n  margin-top: 10px;\n}\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nbutton.btn.btn-primary {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #415DAE;\n}\n.facebook {\n  height: 3.5em;\n  padding: 0em 1em;\n  width: 88%;\n}\n.fa-facebook-square:before {\n  content: \"\";\n  font-size: 2em;\n  margin-right: 2em;\n}\n.btn-primary-google {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #4184F3;\n  height: 3.5em;\n  padding: 0em 1em;\n  width: 88%;\n}\n.fa-google-plus-square:before {\n  font-size: 2em;\n  margin-right: 2em;\n}\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n.having-trouble {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  margin: 0.5em;\n}\n.upload-card-register {\n  margin: 2em;\n  border: 1px solid #F5F5F5;\n}\n.profile-heading {\n  background-color: #F5F5F5;\n  padding: 0.3em;\n  border-bottom: 1px solid #F5F5F5;\n}\np.profile-card-title {\n  font-size: 14px;\n  margin: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n.upload-content {\n  margin: 10px;\n}\n.submit-button {\n  margin: 0px;\n  border: none;\n  padding: 0px 8vw;\n  height: 41px;\n  background-color: #5ADB00;\n  color: white;\n  font-size: 15px;\n}\np.terms {\n  padding-bottom: 10px;\n}\n.radio {\n  height: auto;\n  margin-right: 5px;\n  margin-top: 2px;\n  margin-left: 5vw;\n}\nselect::-ms-expand {\n  display: none;\n}\n.label-dropdown {\n  padding-left: 10px;\n}\n.condition-text-container {\n  height: 20vh;\n  overflow: auto;\n  border: 1px solid #707070;\n  border-radius: 7px;\n  background-color: #F2F2F2 !important;\n}\np.condition-text {\n  font-size: 12px;\n  color: black;\n  text-align: justify;\n  padding: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n.terms-checkbox {\n  margin-left: 0px;\n  margin-bottom: 0px;\n  margin-top: 1vh;\n}\n.button-prev {\n  background-color: #E81E16 !important;\n}\n.subscribe-card {\n  padding: 1em;\n  border: 1px solid #707070;\n  background-color: white;\n  margin: 2em 1em;\n}\n.subscription-successfull-text {\n  font-size: 14px;\n  color: black;\n  text-align: justify;\n  padding: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n.subscription-text-anchor {\n  font-size: 12px;\n  text-align: justify;\n  padding: 10px;\n  font-family: \"Open Sans\", sans-serif;\n}\n.other-option {\n  display: flex;\n  flex-direction: row;\n  justify-content: baseline;\n  align-items: flex-end;\n  padding: 10px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n  margin-bottom: 10px;\n}\n.text-subscribe-check {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-left: 2vw;\n  margin-bottom: 0px;\n}\n.membership {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\np.membership-text {\n  text-align: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  color: black;\n}\np.note-under-text {\n  margin-bottom: 0px;\n  margin-top: -15px;\n}\n.login-form {\n  background-color: white;\n  z-index: 1;\n  position: relative;\n  height: 100vh;\n}\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  font-size: 18px;\n}\n.logout-text-container {\n  text-align: center;\n  font-size: 21px;\n  margin: 1em;\n  text-transform: uppercase;\n}\n.modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  grid-gap: 11px;\n}\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n.sidebar-content {\n  margin-top: 1em;\n}\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 0.5em 1rem;\n  border-bottom: none;\n  border-top-left-radius: calc(.3rem - 1px);\n  border-top-right-radius: calc(.3rem - 1px);\n}\n.forms-field {\n  margin: 1em 1em;\n}\n.form-control {\n  border: 1px solid;\n}\n.font {\n  font-size: 20px;\n}\n.form-check {\n  font-size: 18px;\n}\n.blue {\n  background-color: #4372c4;\n}\n.close-account {\n  color: red;\n  margin: 1em;\n  text-align: center;\n}\nimg.status-check {\n  width: 80%;\n}\n.modal {\n  background: #000000a1;\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 0em 2em;\n  z-index: 1000;\n}\n.new-popup {\n  height: 100vh;\n  background-color: black;\n  width: 100%;\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uQmFyL25hdmlnYXRpb25iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL05hdmlnYXRpb24vTmF2aWdhdGlvbkJhci9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxOYXZpZ2F0aW9uXFxOYXZpZ2F0aW9uQmFyXFxuYXZpZ2F0aW9uYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBREVKO0FDQUE7RUFDSSxhQUFBO0FER0o7QUNEQTtFQUNJLGFBQUE7QURJSjtBQ0ZBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURLSjtBQ0hBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FETUo7QUNKQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRE9KO0FDTEE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FEUUo7QUNOQTtFQUNJLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FEU0o7QUNOQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRFNKO0FDTEU7RUFFRSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QURPSjtBQ0xBO0VBRUksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNGLGNBQUE7QURPRjtBQ0pBO0VBQ0kseUJBQUE7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Q0FBQTtFQUNBLDBDQUFBO0FEeUJKO0FDdkJBO0VBQ0ksZUFBQTtBRDBCSjtBQ3hCQTtFQUNJLGlCQUFBO0FEMkJKO0FDekJBO0VBQ0ksZUFBQTtBRDRCSjtBQzFCQTtFQUVJLGVBQUE7QUQ0Qko7QUMxQkE7RUFFQSx5QkFBQTtBRDRCQTtBQzFCQTtFQUVJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUQ0Qko7QUN6QkE7RUFDSSxVQUFBO0FENEJKO0FDMUJBO0VBQ0kscUJBQUE7QUQ2Qko7QUMzQkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FEOEJKO0FDNUJBO0VBRUksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUQ4QkoiLCJmaWxlIjoic3JjL2FwcC9OYXZpZ2F0aW9uL05hdmlnYXRpb25CYXIvbmF2aWdhdGlvbmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyIDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nLmh1bS1idXJnZXItbWVudSB7XG4gIGhlaWdodDogNC41dmg7XG59XG5cbi5tYWluLWxvZ28ge1xuICBtYXJnaW46IDAuOGVtO1xufVxuXG4uYWNjb3VudC1zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW1nLmh1bS1idXJnZXItbWVudS1jcm9zcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyLjV2aDtcbiAgcmlnaHQ6IDMuNXZ3O1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IDQuNXZoO1xufVxuXG51bC5tYWluLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmxpIHtcbiAgcGFkZGluZzogMCAwZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubG9naW4tZm9ybS5uZy1zdGFyLWluc2VydGVkIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uY2FyZC1jb250ZW50LWZvbnQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5jYXJkLW9uZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG59XG5cbi50aXR0bGUtY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgcGFkZGluZzogMWVtO1xufVxuXG5mb3JtLmZvcm0tZmllbGRzIHtcbiAgbWFyZ2luOiAyZW07XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDMzcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xufVxuXG5zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDdweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA1NSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9ybS1sYWJlbC1jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuYnV0dG9uLmJ1dHRvbi1jb21tb24ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ5RDQ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogYm9sZDtcbn1cblxuLnNlYXJjaC1jb3VudHJ5IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5tYWluLXJlZ2lzdGVyLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBtYXJnaW46IDEuNWVtO1xuICBtYXJnaW4tdG9wOiA3ZW07XG59XG5cbi5tYXQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jYXJkLW9uZS13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbnAucmVnaXN0ZXItd2l0aC11cyB7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5mYS1hcnJvdy1jaXJjbGUtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgqpcIjtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNoZWNoay1ib3gtdGVybXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc29jaWFsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTVEQUU7XG59XG5cbi5mYWNlYm9vayB7XG4gIGhlaWdodDogMy41ZW07XG4gIHBhZGRpbmc6IDBlbSAxZW07XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5mYS1mYWNlYm9vay1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgoJcIjtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG4uYnRuLXByaW1hcnktZ29vZ2xlIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTg0RjM7XG4gIGhlaWdodDogMy41ZW07XG4gIHBhZGRpbmc6IDBlbSAxZW07XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5mYS1nb29nbGUtcGx1cy1zcXVhcmU6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG5wLm9yLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuLmhhdmluZy10cm91YmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luOiAwLjVlbTtcbn1cblxuLnVwbG9hZC1jYXJkLXJlZ2lzdGVyIHtcbiAgbWFyZ2luOiAyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGNUY1RjU7XG59XG5cbi5wcm9maWxlLWhlYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICBwYWRkaW5nOiAwLjNlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUY1RjU7XG59XG5cbnAucHJvZmlsZS1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udXBsb2FkLWNvbnRlbnQge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMHB4IDh2dztcbiAgaGVpZ2h0OiA0MXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxucC50ZXJtcyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucmFkaW8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG59XG5cbnNlbGVjdDo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sYWJlbC1kcm9wZG93biB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNvbmRpdGlvbi10ZXh0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xufVxuXG5wLmNvbmRpdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udGVybXMtY2hlY2tib3gge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDF2aDtcbn1cblxuLmJ1dHRvbi1wcmV2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUUxNiAhaW1wb3J0YW50O1xufVxuXG4uc3Vic2NyaWJlLWNhcmQge1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDJlbSAxZW07XG59XG5cbi5zdWJzY3JpcHRpb24tc3VjY2Vzc2Z1bGwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnN1YnNjcmlwdGlvbi10ZXh0LWFuY2hvciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5vdGhlci1vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50ZXh0LXN1YnNjcmliZS1jaGVjayB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogMnZ3O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5tZW1iZXJzaGlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxucC5tZW1iZXJzaGlwLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5wLm5vdGUtdW5kZXItdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cbi5sb2dpbi1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5sb2dvdXQtdGV4dC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luOiAxZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tb2RhbC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xuICBncmlkLWdhcDogMTFweDtcbn1cblxuLnByb2ZpbGUtbmFtZS1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaWRlYmFyLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjVlbSAxcmVtO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKC4zcmVtIC0gMXB4KTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGNhbGMoLjNyZW0gLSAxcHgpO1xufVxuXG4uZm9ybXMtZmllbGQge1xuICBtYXJnaW46IDFlbSAxZW07XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmZvbnQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mb3JtLWNoZWNrIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzcyYzQ7XG59XG5cbi5jbG9zZS1hY2NvdW50IHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luOiAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nLnN0YXR1cy1jaGVjayB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5tb2RhbCB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBhMTtcbn1cblxuLm1vZGFsLW9wZW4gLm1vZGFsIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAwZW0gMmVtO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubmV3LXBvcHVwIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xufSIsIi5uYXZpZ2F0aW9uIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDZmciAxZnIgMWZyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbmltZy5odW0tYnVyZ2VyLW1lbnUge1xyXG4gICAgaGVpZ2h0OiA0LjV2aDtcclxufVxyXG4ubWFpbi1sb2dvIHtcclxuICAgIG1hcmdpbjogMC44ZW07XHJcbn1cclxuLmFjY291bnQtc3RhdHVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW1nLmh1bS1idXJnZXItbWVudS1jcm9zcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIuNXZoO1xyXG4gICAgcmlnaHQ6IDMuNXZ3O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGhlaWdodDogNC41dmg7XHJcbn1cclxudWwubWFpbi1saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbmEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5saSB7XHJcbiAgICBwYWRkaW5nOiAwIDBlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcbiAgLmJhY2tncm91bmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbi5jYXJkLWNvbnRlbnQtZm9udFxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcblxyXG59XHJcbi5jYXJkLW9uZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcblxyXG59XHJcbi50aXR0bGUtY2FyZFxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5mb3JtLmZvcm0tZmllbGRze1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzNweDtcclxufVxyXG5cclxuXHJcblxyXG4gIHRleHRhcmVhXHJcbiAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gXHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGhlaWdodDogNDdweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbn1cclxuICAuZm9ybS1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLmZvcm0tbGFiZWwtY291bnRyeVxyXG57XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5idXR0b24uYnV0dG9uLWNvbW1vbiB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzQ0OUQ0NDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbn1cclxuLnNlYXJjaC1jb3VudHJ5XHJcbntcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLm1haW4tcmVnaXN0ZXItY2FyZFxyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgbWFyZ2luOjEuNWVtO1xyXG4gICAgbWFyZ2luLXRvcDogN2VtO1xyXG59XHJcbi5tYXQtYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcbi5jYXJkLW9uZS13aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDFweDtcclxufVxyXG5wLnJlZ2lzdGVyLXdpdGgtdXMge1xyXG4gICAgcGFkZGluZzogMS41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uZmEtYXJyb3ctY2lyY2xlLXVwOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjBhYVwiO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xyXG59XHJcblxyXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNoZWNoay1ib3gtdGVybXMge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnNvY2lhbC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTVEQUVcclxufVxyXG4uZmFjZWJvb2sge1xyXG4gICAgaGVpZ2h0OiAzLjVlbTtcclxuICAgIHBhZGRpbmc6IDBlbSAxZW07XHJcbiAgICB3aWR0aDogODglXHJcbn1cclxuLmZhLWZhY2Vib29rLXNxdWFyZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYwODJcIjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbn1cclxuLmJ0bi1wcmltYXJ5LWdvb2dsZVxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTg0RjM7XHJcbiAgICBoZWlnaHQ6IDMuNWVtO1xyXG4gICAgcGFkZGluZzogMGVtIDFlbTtcclxuICAgIHdpZHRoOiA4OCVcclxufVxyXG4uZmEtZ29vZ2xlLXBsdXMtc3F1YXJlOmJlZm9yZSB7XHJcblxyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxufVxyXG5wLm9yLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG59XHJcbi5oYXZpbmctdHJvdWJsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxufVxyXG4udXBsb2FkLWNhcmQtcmVnaXN0ZXIge1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjVGNUY1O1xyXG59XHJcbi5wcm9maWxlLWhlYWRpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICAgIHBhZGRpbmc6IDAuM2VtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUY1RjU7XHJcbn1cclxucC5wcm9maWxlLWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4udXBsb2FkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweCA4dnc7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbnAudGVybXMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLnJhZGlvXHJcbntcclxuaGVpZ2h0OiBhdXRvO1xyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxubWFyZ2luLXRvcDogMnB4O1xyXG5tYXJnaW4tbGVmdDogNXZ3O1xyXG59XHJcblxyXG5cclxuXHJcbiAgXHJcbiAgc2VsZWN0OjotbXMtZXhwYW5kIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLmxhYmVsLWRyb3Bkb3duXHJcbntcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4uY29uZGl0aW9uLXRleHQtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMjB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjIgIWltcG9ydGFudDtcclxufVxyXG5wLmNvbmRpdGlvbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4udGVybXMtY2hlY2tib3gge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxufVxyXG4uYnV0dG9uLXByZXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUUxNiAhaW1wb3J0YW50O1xyXG59XHJcbi5zdWJzY3JpYmUtY2FyZFxyXG57XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDJlbSAxZW07XHJcbn1cclxuLnN1YnNjcmlwdGlvbi1zdWNjZXNzZnVsbC10ZXh0XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLnN1YnNjcmlwdGlvbi10ZXh0LWFuY2hvclxyXG57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ub3RoZXItb3B0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBiYXNlbGluZTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnRleHQtc3Vic2NyaWJlLWNoZWNrXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5tZW1iZXJzaGlwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5wLm1lbWJlcnNoaXAtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5wLm5vdGUtdW5kZXItdGV4dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuLy8gLm1haW4tbWVudSB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ubG9nb3V0LXRleHQtY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ubW9kYWwtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xyXG4gICAgZ3JpZC1nYXA6IDExcHg7XHJcbn1cclxuLnByb2ZpbGUtbmFtZS1tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zaWRlYmFyLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMC41ZW0gMXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKC4zcmVtIC0gMXB4KTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBjYWxjKC4zcmVtIC0gMXB4KTtcclxufVxyXG4uZm9ybXMtZmllbGR7XHJcbiAgICBtYXJnaW46IDFlbSAxZW07XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG4uZm9udCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmZvcm0tY2hlY2sge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uYmx1ZVxyXG57XHJcbmJhY2tncm91bmQtY29sb3I6ICM0MzcyYzQ7XHJcbn1cclxuLmNsb3NlLWFjY291bnRcclxue1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIFxyXG59XHJcbmltZy5zdGF0dXMtY2hlY2sge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG4ubW9kYWx7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTE7XHJcbn1cclxuLm1vZGFsLW9wZW4gLm1vZGFsIHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwZW0gMmVtO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG4ubmV3LXBvcHVwXHJcbntcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG59XHJcbiAgICAiXX0= */");

/***/ }),

/***/ "./src/app/Navigation/NavigationBar/navigationbar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Navigation/NavigationBar/navigationbar.component.ts ***!
  \*********************************************************************/
/*! exports provided: NavigationbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationbarComponent", function() { return NavigationbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _alert_profile_alert_profile_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alert-profile/alert-profile-dialog.component */ "./src/app/Navigation/NavigationBar/alert-profile/alert-profile-dialog.component.ts");










let NavigationbarComponent = class NavigationbarComponent {
    constructor(Configservice, route, router, http, _location, alertController, AuthService, dialog, snackBar) {
        this.Configservice = Configservice;
        this.route = route;
        this.router = router;
        this.http = http;
        this._location = _location;
        this.alertController = alertController;
        this.AuthService = AuthService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_8__["VERSION"];
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
        if (this.itrs == null) {
            this.isLoogedIn = false;
        }
        else if (this.itrs.user != null) {
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
    // ngOnDestroy() {
    //   this.sub.unsubscribe();
    // }
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
        this.http
            .post(this.logoutUrl, {}, requestOptions)
            .subscribe((head) => {
            console.log(head);
            localStorage.clear();
            window.location.reload();
        });
    }
    openAlertDialog() {
        const dialogRef = this.dialog.open(_alert_profile_alert_profile_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AlertProfileDialogComponent"], {
            data: {
                message: 'HelloWorld',
                buttonText: {
                    cancel: 'Done'
                }
            },
        });
    }
};
NavigationbarComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
NavigationbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-navigationbar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigationbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/NavigationBar/navigationbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigationbar.component.scss */ "./src/app/Navigation/NavigationBar/navigationbar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
], NavigationbarComponent);



/***/ }),

/***/ "./src/app/Navigation/NavigationBar/navigationbar.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/Navigation/NavigationBar/navigationbar.module.ts ***!
  \******************************************************************/
/*! exports provided: NavigationbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationbarModule", function() { return NavigationbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigationbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigationbar.component */ "./src/app/Navigation/NavigationBar/navigationbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");







let NavigationbarModule = class NavigationbarModule {
};
NavigationbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_navigationbar_component__WEBPACK_IMPORTED_MODULE_2__["NavigationbarComponent"]],
        exports: [_navigationbar_component__WEBPACK_IMPORTED_MODULE_2__["NavigationbarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
    })
], NavigationbarModule);



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



/***/ })

}]);
//# sourceMappingURL=default~Register-Signup-signup-module~Signin-find-friends-find-friends-module~Signin-optional-detail~c9e0f19d-es2015.js.map