function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Navigation-blockedusers-blockedusers-module~chat-ChatsThreadListing-ChatsThreadListing-modul~74a3f2ad"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/NavigationBar/navigationbar.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/NavigationBar/navigationbar.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationNavigationBarNavigationbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  \r\n  <div class=\"navigation\">\r\n    <div class=\"back\" >\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"welcome\"></ion-back-button>\r\n      </ion-buttons>\r\n    </div>\r\n    <div class=\"main-logo\">\r\n      <img src=\"../../assets/Images/header-logo.png\" alt=\"\" srcset=\"\" class=\"header-logo\" (click)=\"refresh()\">\r\n    </div>\r\n\r\n    <div class=\"account-status\">\r\n      <img src=\"../../assets/Images/user.png\" class=\"status-check\" \r\n        *ngIf=\"isLoogedIn\" (click)=\"openAlertDialog()\">\r\n    </div>\r\n\r\n    <div class=\"humburger-menu\">\r\n      <!-- <img src=\"../../assets/Images/cross.png\" class=\"hum-burger-menu-cross\" *ngIf=\"crossSign\" (click)=\"humBurgerCross()\"> -->\r\n      <img src=\"../../assets/Images/newmenu.png\" class=\"hum-burger-menu\" (click)=\"humburgereffect()\" *ngIf=\"humBurger\">\r\n    </div>\r\n\r\n<div class=\"newpopup\"></div>\r\n\r\n  </div>\r\n\r\n  <div class=\"main-menu\" *ngIf=\"mainMenu\">\r\n\r\n\r\n\r\n    <!-- <ul class=\"main-list\" (click)=\"itemclick()\">\r\n        <li><a routerLink=\"/signup\">Signup</a></li>\r\n        <li><a routerLink=\"/signin\">SignIn</a></li>\r\n        <li><a routerLink=\"/chat/searchUser\">Search Tab</a></li>\r\n        <li><a routerLink=\"/optional-detail\">optional-detail</a></li>\r\n        <li><a routerLink=\"/register\">Old Register</a></li>\r\n      </ul> -->\r\n  </div>\r\n\r\n</ion-header>\r\n\r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/Navigation/NavigationBar/navigationbar.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/Navigation/NavigationBar/navigationbar.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationNavigationBarNavigationbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.navigation {\n  display: grid;\n  grid-template-columns: 1fr 6fr 1fr 1fr;\n  align-items: center;\n  border-bottom: 1px solid;\n  background-color: white;\n}\nimg.hum-burger-menu {\n  height: 4.5vh;\n}\n.main-logo {\n  margin: 0.8em;\n}\n.account-status {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nimg.hum-burger-menu-cross {\n  position: absolute;\n  top: 2.5vh;\n  right: 3.5vw;\n  z-index: 1;\n  height: 4.5vh;\n}\nul.main-list {\n  list-style: none;\n  font-size: 25px;\n  color: white;\n  display: flex;\n  align-items: center;\n  z-index: 999;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n  margin-left: 0px;\n  justify-content: space-evenly;\n  background-color: black;\n  opacity: 0.8;\n  padding-left: 0px;\n}\na {\n  color: white;\n  font-size: 20px;\n  text-transform: uppercase;\n}\nli {\n  padding: 0 0em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n.login-form.ng-star-inserted {\n  height: 100vh;\n  background-color: white;\n  position: relative;\n  z-index: 1;\n}\n.background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n.card-content-font {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n}\n.card-one {\n  border: 1px solid #707070;\n}\n.tittle-card {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 27px;\n  text-align: center;\n  color: #707070;\n  padding: 1em;\n}\nform.form-fields {\n  margin: 2em;\n  margin-top: 0px;\n  padding-top: 33px;\n}\ntextarea {\n  border-radius: 7px;\n  margin-top: 15px;\n  border: 1px solid;\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n}\nselect {\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 15px;\n  border: 1px solid;\n  margin-bottom: 20px;\n  width: 55%;\n  font-size: 16px;\n  margin-left: 0px;\n  padding-left: 10px;\n}\n.form-label {\n  font-size: 15px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n.form-label-country {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n.button-container {\n  display: flex;\n  margin: 2em;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n  margin-left: 0px;\n}\nbutton.button-common {\n  height: 35px;\n  padding: 0px 20px;\n  border: 1px solid #707070;\n  background-color: #449D44;\n  color: white;\n  border-radius: 7px;\n  font-size: 17px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: bold;\n}\n.search-country {\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n  padding-left: 10px;\n}\n.main-register-card {\n  border: 1px solid #707070;\n  margin: 1.5em;\n  margin-top: 7em;\n}\n.mat-background {\n  background-color: #F5F5F5;\n}\n.card-one-white {\n  background-color: white;\n  padding: 1px;\n}\np.register-with-us {\n  padding: 1.5em;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n.fa-arrow-circle-up:before {\n  content: \"\";\n  margin-right: 11px;\n}\nbutton.btn.btn-success {\n  margin-bottom: 10px;\n}\n.chechk-box-terms {\n  margin-top: 10px;\n}\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nbutton.btn.btn-primary {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #415DAE;\n}\n.facebook {\n  height: 3.5em;\n  padding: 0em 1em;\n  width: 88%;\n}\n.fa-facebook-square:before {\n  content: \"\";\n  font-size: 2em;\n  margin-right: 2em;\n}\n.btn-primary-google {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #4184F3;\n  height: 3.5em;\n  padding: 0em 1em;\n  width: 88%;\n}\n.fa-google-plus-square:before {\n  font-size: 2em;\n  margin-right: 2em;\n}\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n.having-trouble {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  margin: 0.5em;\n}\n.upload-card-register {\n  margin: 2em;\n  border: 1px solid #F5F5F5;\n}\n.profile-heading {\n  background-color: #F5F5F5;\n  padding: 0.3em;\n  border-bottom: 1px solid #F5F5F5;\n}\np.profile-card-title {\n  font-size: 14px;\n  margin: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n.upload-content {\n  margin: 10px;\n}\n.submit-button {\n  margin: 0px;\n  border: none;\n  padding: 0px 8vw;\n  height: 41px;\n  background-color: #5ADB00;\n  color: white;\n  font-size: 15px;\n}\np.terms {\n  padding-bottom: 10px;\n}\n.radio {\n  height: auto;\n  margin-right: 5px;\n  margin-top: 2px;\n  margin-left: 5vw;\n}\nselect::-ms-expand {\n  display: none;\n}\n.label-dropdown {\n  padding-left: 10px;\n}\n.condition-text-container {\n  height: 20vh;\n  overflow: auto;\n  border: 1px solid #707070;\n  border-radius: 7px;\n  background-color: #F2F2F2 !important;\n}\np.condition-text {\n  font-size: 12px;\n  color: black;\n  text-align: justify;\n  padding: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n.terms-checkbox {\n  margin-left: 0px;\n  margin-bottom: 0px;\n  margin-top: 1vh;\n}\n.button-prev {\n  background-color: #E81E16 !important;\n}\n.subscribe-card {\n  padding: 1em;\n  border: 1px solid #707070;\n  background-color: white;\n  margin: 2em 1em;\n}\n.subscription-successfull-text {\n  font-size: 14px;\n  color: black;\n  text-align: justify;\n  padding: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n.subscription-text-anchor {\n  font-size: 12px;\n  text-align: justify;\n  padding: 10px;\n  font-family: \"Open Sans\", sans-serif;\n}\n.other-option {\n  display: flex;\n  flex-direction: row;\n  justify-content: baseline;\n  align-items: flex-end;\n  padding: 10px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n  margin-bottom: 10px;\n}\n.text-subscribe-check {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-left: 2vw;\n  margin-bottom: 0px;\n}\n.membership {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\np.membership-text {\n  text-align: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  color: black;\n}\np.note-under-text {\n  margin-bottom: 0px;\n  margin-top: -15px;\n}\n.login-form {\n  background-color: white;\n  z-index: 1;\n  position: relative;\n  height: 100vh;\n}\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  font-size: 18px;\n}\n.logout-text-container {\n  text-align: center;\n  font-size: 21px;\n  margin: 1em;\n  text-transform: uppercase;\n}\n.modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  grid-gap: 11px;\n}\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n.sidebar-content {\n  margin-top: 1em;\n}\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 0.5em 1rem;\n  border-bottom: none;\n  border-top-left-radius: calc(.3rem - 1px);\n  border-top-right-radius: calc(.3rem - 1px);\n}\n.forms-field {\n  margin: 1em 1em;\n}\n.form-control {\n  border: 1px solid;\n}\n.font {\n  font-size: 20px;\n}\n.form-check {\n  font-size: 18px;\n}\n.blue {\n  background-color: #4372c4;\n}\n.close-account {\n  color: red;\n  margin: 1em;\n  text-align: center;\n}\nimg.status-check {\n  width: 80%;\n}\n.modal {\n  background: #000000a1;\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 0em 2em;\n  z-index: 1000;\n}\n.new-popup {\n  height: 100vh;\n  background-color: black;\n  width: 100%;\n  z-index: 1000;\n}\n.back {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uQmFyL25hdmlnYXRpb25iYXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZ29kL0RvY3VtZW50cy9Tb3VyY2Vjb2RlIFdvcmsvQW5ndWxhciBPZmZpY2UgUHJvamVjdC9ub3Q0RGF0aW5nL3NyYy9hcHAvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uQmFyL25hdmlnYXRpb25iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksYUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FERUo7QUNBQTtFQUNJLGFBQUE7QURHSjtBQ0RBO0VBQ0ksYUFBQTtBRElKO0FDRkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBREtKO0FDSEE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QURNSjtBQ0pBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FET0o7QUNMQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QURRSjtBQ05BO0VBQ0ksY0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QURTSjtBQ05BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FEU0o7QUNMRTtFQUVFLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBRE9KO0FDTEE7RUFFSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0YsY0FBQTtBRE9GO0FDSkE7RUFDSSx5QkFB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LHlDQUFBO0VBQ0EsMENBQUE7QUR5Qko7QUN2QkE7RUFDSSxlQUFBO0FEMEJKO0FDeEJBO0VBQ0ksaUJBQUE7QUQyQko7QUN6QkE7RUFDSSxlQUFBO0FENEJKO0FDMUJBO0VBRUksZUFBQTtBRDRCSjtBQzFCQTtFQUVBLHlCQUFBO0FENEJBO0FDMUJBO0VBRUksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRDRCSjtBQ3pCQTtFQUNJLFVBQUE7QUQ0Qko7QUMxQkE7RUFDSSxxQkFBQTtBRDZCSjtBQzNCQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUQ4Qko7QUM1QkE7RUFFSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBRDhCSjtBQzNCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRDhCSiIsImZpbGUiOiJzcmMvYXBwL05hdmlnYXRpb24vTmF2aWdhdGlvbkJhci9uYXZpZ2F0aW9uYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm5hdmlnYXRpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgMWZyIDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nLmh1bS1idXJnZXItbWVudSB7XG4gIGhlaWdodDogNC41dmg7XG59XG5cbi5tYWluLWxvZ28ge1xuICBtYXJnaW46IDAuOGVtO1xufVxuXG4uYWNjb3VudC1zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW1nLmh1bS1idXJnZXItbWVudS1jcm9zcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyLjV2aDtcbiAgcmlnaHQ6IDMuNXZ3O1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IDQuNXZoO1xufVxuXG51bC5tYWluLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmxpIHtcbiAgcGFkZGluZzogMCAwZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubG9naW4tZm9ybS5uZy1zdGFyLWluc2VydGVkIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uY2FyZC1jb250ZW50LWZvbnQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5jYXJkLW9uZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG59XG5cbi50aXR0bGUtY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgcGFkZGluZzogMWVtO1xufVxuXG5mb3JtLmZvcm0tZmllbGRzIHtcbiAgbWFyZ2luOiAyZW07XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDMzcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xufVxuXG5zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDdweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA1NSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9ybS1sYWJlbC1jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuYnV0dG9uLmJ1dHRvbi1jb21tb24ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ5RDQ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogYm9sZDtcbn1cblxuLnNlYXJjaC1jb3VudHJ5IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5tYWluLXJlZ2lzdGVyLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBtYXJnaW46IDEuNWVtO1xuICBtYXJnaW4tdG9wOiA3ZW07XG59XG5cbi5tYXQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jYXJkLW9uZS13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbnAucmVnaXN0ZXItd2l0aC11cyB7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5mYS1hcnJvdy1jaXJjbGUtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgqpcIjtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNoZWNoay1ib3gtdGVybXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc29jaWFsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTVEQUU7XG59XG5cbi5mYWNlYm9vayB7XG4gIGhlaWdodDogMy41ZW07XG4gIHBhZGRpbmc6IDBlbSAxZW07XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5mYS1mYWNlYm9vay1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgoJcIjtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG4uYnRuLXByaW1hcnktZ29vZ2xlIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTg0RjM7XG4gIGhlaWdodDogMy41ZW07XG4gIHBhZGRpbmc6IDBlbSAxZW07XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5mYS1nb29nbGUtcGx1cy1zcXVhcmU6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG5wLm9yLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuLmhhdmluZy10cm91YmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luOiAwLjVlbTtcbn1cblxuLnVwbG9hZC1jYXJkLXJlZ2lzdGVyIHtcbiAgbWFyZ2luOiAyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGNUY1RjU7XG59XG5cbi5wcm9maWxlLWhlYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICBwYWRkaW5nOiAwLjNlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUY1RjU7XG59XG5cbnAucHJvZmlsZS1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udXBsb2FkLWNvbnRlbnQge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMHB4IDh2dztcbiAgaGVpZ2h0OiA0MXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxucC50ZXJtcyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucmFkaW8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG59XG5cbnNlbGVjdDo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sYWJlbC1kcm9wZG93biB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNvbmRpdGlvbi10ZXh0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xufVxuXG5wLmNvbmRpdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udGVybXMtY2hlY2tib3gge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDF2aDtcbn1cblxuLmJ1dHRvbi1wcmV2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUUxNiAhaW1wb3J0YW50O1xufVxuXG4uc3Vic2NyaWJlLWNhcmQge1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDJlbSAxZW07XG59XG5cbi5zdWJzY3JpcHRpb24tc3VjY2Vzc2Z1bGwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnN1YnNjcmlwdGlvbi10ZXh0LWFuY2hvciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5vdGhlci1vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50ZXh0LXN1YnNjcmliZS1jaGVjayB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogMnZ3O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5tZW1iZXJzaGlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxucC5tZW1iZXJzaGlwLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5wLm5vdGUtdW5kZXItdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cbi5sb2dpbi1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5sb2dvdXQtdGV4dC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luOiAxZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tb2RhbC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xuICBncmlkLWdhcDogMTFweDtcbn1cblxuLnByb2ZpbGUtbmFtZS1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaWRlYmFyLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjVlbSAxcmVtO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKC4zcmVtIC0gMXB4KTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGNhbGMoLjNyZW0gLSAxcHgpO1xufVxuXG4uZm9ybXMtZmllbGQge1xuICBtYXJnaW46IDFlbSAxZW07XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmZvbnQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mb3JtLWNoZWNrIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzcyYzQ7XG59XG5cbi5jbG9zZS1hY2NvdW50IHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luOiAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nLnN0YXR1cy1jaGVjayB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5tb2RhbCB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBhMTtcbn1cblxuLm1vZGFsLW9wZW4gLm1vZGFsIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAwZW0gMmVtO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubmV3LXBvcHVwIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4uYmFjayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59IiwiLm5hdmlnYXRpb24ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAxZnIgMWZyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbmltZy5odW0tYnVyZ2VyLW1lbnUge1xyXG4gICAgaGVpZ2h0OiA0LjV2aDtcclxufVxyXG4ubWFpbi1sb2dvIHtcclxuICAgIG1hcmdpbjogMC44ZW07XHJcbn1cclxuLmFjY291bnQtc3RhdHVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW1nLmh1bS1idXJnZXItbWVudS1jcm9zcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIuNXZoO1xyXG4gICAgcmlnaHQ6IDMuNXZ3O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGhlaWdodDogNC41dmg7XHJcbn1cclxudWwubWFpbi1saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbmEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5saSB7XHJcbiAgICBwYWRkaW5nOiAwIDBlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcbiAgLmJhY2tncm91bmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbi5jYXJkLWNvbnRlbnQtZm9udFxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcblxyXG59XHJcbi5jYXJkLW9uZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcblxyXG59XHJcbi50aXR0bGUtY2FyZFxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5mb3JtLmZvcm0tZmllbGRze1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzNweDtcclxufVxyXG5cclxuXHJcblxyXG4gIHRleHRhcmVhXHJcbiAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gXHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGhlaWdodDogNDdweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbn1cclxuICAuZm9ybS1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLmZvcm0tbGFiZWwtY291bnRyeVxyXG57XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5idXR0b24uYnV0dG9uLWNvbW1vbiB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzQ0OUQ0NDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbn1cclxuLnNlYXJjaC1jb3VudHJ5XHJcbntcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLm1haW4tcmVnaXN0ZXItY2FyZFxyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgbWFyZ2luOjEuNWVtO1xyXG4gICAgbWFyZ2luLXRvcDogN2VtO1xyXG59XHJcbi5tYXQtYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcbi5jYXJkLW9uZS13aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDFweDtcclxufVxyXG5wLnJlZ2lzdGVyLXdpdGgtdXMge1xyXG4gICAgcGFkZGluZzogMS41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uZmEtYXJyb3ctY2lyY2xlLXVwOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjBhYVwiO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xyXG59XHJcblxyXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNoZWNoay1ib3gtdGVybXMge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnNvY2lhbC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTVEQUVcclxufVxyXG4uZmFjZWJvb2sge1xyXG4gICAgaGVpZ2h0OiAzLjVlbTtcclxuICAgIHBhZGRpbmc6IDBlbSAxZW07XHJcbiAgICB3aWR0aDogODglXHJcbn1cclxuLmZhLWZhY2Vib29rLXNxdWFyZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYwODJcIjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbn1cclxuLmJ0bi1wcmltYXJ5LWdvb2dsZVxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTg0RjM7XHJcbiAgICBoZWlnaHQ6IDMuNWVtO1xyXG4gICAgcGFkZGluZzogMGVtIDFlbTtcclxuICAgIHdpZHRoOiA4OCVcclxufVxyXG4uZmEtZ29vZ2xlLXBsdXMtc3F1YXJlOmJlZm9yZSB7XHJcblxyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxufVxyXG5wLm9yLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG59XHJcbi5oYXZpbmctdHJvdWJsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxufVxyXG4udXBsb2FkLWNhcmQtcmVnaXN0ZXIge1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjVGNUY1O1xyXG59XHJcbi5wcm9maWxlLWhlYWRpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICAgIHBhZGRpbmc6IDAuM2VtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUY1RjU7XHJcbn1cclxucC5wcm9maWxlLWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4udXBsb2FkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweCA4dnc7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbnAudGVybXMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLnJhZGlvXHJcbntcclxuaGVpZ2h0OiBhdXRvO1xyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxubWFyZ2luLXRvcDogMnB4O1xyXG5tYXJnaW4tbGVmdDogNXZ3O1xyXG59XHJcblxyXG5cclxuXHJcbiAgXHJcbiAgc2VsZWN0OjotbXMtZXhwYW5kIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLmxhYmVsLWRyb3Bkb3duXHJcbntcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4uY29uZGl0aW9uLXRleHQtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMjB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjIgIWltcG9ydGFudDtcclxufVxyXG5wLmNvbmRpdGlvbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4udGVybXMtY2hlY2tib3gge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxufVxyXG4uYnV0dG9uLXByZXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUUxNiAhaW1wb3J0YW50O1xyXG59XHJcbi5zdWJzY3JpYmUtY2FyZFxyXG57XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDJlbSAxZW07XHJcbn1cclxuLnN1YnNjcmlwdGlvbi1zdWNjZXNzZnVsbC10ZXh0XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLnN1YnNjcmlwdGlvbi10ZXh0LWFuY2hvclxyXG57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ub3RoZXItb3B0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBiYXNlbGluZTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnRleHQtc3Vic2NyaWJlLWNoZWNrXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5tZW1iZXJzaGlwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5wLm1lbWJlcnNoaXAtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5wLm5vdGUtdW5kZXItdGV4dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuLy8gLm1haW4tbWVudSB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ubG9nb3V0LXRleHQtY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ubW9kYWwtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xyXG4gICAgZ3JpZC1nYXA6IDExcHg7XHJcbn1cclxuLnByb2ZpbGUtbmFtZS1tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zaWRlYmFyLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMC41ZW0gMXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKC4zcmVtIC0gMXB4KTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBjYWxjKC4zcmVtIC0gMXB4KTtcclxufVxyXG4uZm9ybXMtZmllbGR7XHJcbiAgICBtYXJnaW46IDFlbSAxZW07XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG4uZm9udCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmZvcm0tY2hlY2sge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uYmx1ZVxyXG57XHJcbmJhY2tncm91bmQtY29sb3I6ICM0MzcyYzQ7XHJcbn1cclxuLmNsb3NlLWFjY291bnRcclxue1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIFxyXG59XHJcbmltZy5zdGF0dXMtY2hlY2sge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG4ubW9kYWx7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTE7XHJcbn1cclxuLm1vZGFsLW9wZW4gLm1vZGFsIHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwZW0gMmVtO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG4ubmV3LXBvcHVwXHJcbntcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG59XHJcbiAgICBcclxuLmJhY2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Navigation/NavigationBar/navigationbar.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Navigation/NavigationBar/navigationbar.component.ts ***!
    \*********************************************************************/

  /*! exports provided: NavigationbarComponent */

  /***/
  function srcAppNavigationNavigationBarNavigationbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationbarComponent", function () {
      return NavigationbarComponent;
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
    /*! ../../config.service */
    "./src/app/config.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _alert_profile_alert_profile_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./alert-profile/alert-profile-dialog.component */
    "./src/app/Navigation/NavigationBar/alert-profile/alert-profile-dialog.component.ts");

    var NavigationbarComponent = /*#__PURE__*/function () {
      function NavigationbarComponent(Configservice, route, router, http, _location, alertController, AuthService, dialog, snackBar) {
        _classCallCheck(this, NavigationbarComponent);

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
        this.back = false;
        this.token = "https://gowebtutorial.com/api/json/user/token";
      }

      _createClass(NavigationbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.itrs = JSON.parse(localStorage.getItem("currentUser"));

          if (this.itrs == null) {
            this.isLoogedIn = false;
          } else if (this.itrs.user != null) {
            this.isLoogedIn = true;
            this.name = this.itrs.user.name;
            this.activity = this.itrs.user.field_activities_interests.und;
            this.Email = this.itrs.user.mail; //this.DOB = this.itrs.user.field_birth_date.und[0].value;

            this.fname = this.itrs.user.field_first_name.und[0].value;
            this.lname = this.itrs.user.field_last_name.und[0].value;
            this.userlogged = JSON.parse(localStorage.getItem("Signinuser"));
          }
        } // ngOnDestroy() {
        //   this.sub.unsubscribe();
        // }

      }, {
        key: "humburgereffect",
        value: function humburgereffect() {
          this.correctAlert();
        }
      }, {
        key: "humBurgerCross",
        value: function humBurgerCross() {
          this.crossSign = false;
          this.humBurger = true;
          this.mainMenu = false;
        }
      }, {
        key: "itemclick",
        value: function itemclick() {
          this.mainMenu = false;
          this.crossSign = false;
          this.humBurger = true;
        }
      }, {
        key: "LoginOpen",
        value: function LoginOpen() {
          if (this.logggenIn == false) {
            this.logggenIn = true;
          } else if (this.logggenIn == true) {
            this.logggenIn = false;
          }
        }
      }, {
        key: "LoginForm",
        value: function LoginForm(user, pass) {
          var _this = this;

          this.http.post("https://gowebtutorial.com/api/json/user/login", {
            username: user,
            password: pass
          }).subscribe(function (data) {
            _this.post = data.token;
            _this.headerDict = {
              "X-CSRF-Token": data.token
            };
          });
          return this.http.post(this.url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](this.headerDict)
          }), this.logggenIn = false;
        }
      }, {
        key: "close",
        value: function close() {
          this.isLoading = false;
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.router.navigate(["/"]);
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
      }, {
        key: "logOut",
        value: function logOut() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("X-CSRF-Token", this.itrs.token).set("Content-Type", "application/json").set("X-Cookie", this.itrs.session_name + "=" + this.itrs.sessid);
          var requestOptions = {
            headers: headers,
            withCredentials: true
          };
          this.http.post(this.logoutUrl, {}, requestOptions).subscribe(function (head) {
            console.log(head);
            localStorage.clear();
            window.location.reload();
          });
        }
      }, {
        key: "openAlertDialog",
        value: function openAlertDialog() {
          var dialogRef = this.dialog.open(_alert_profile_alert_profile_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AlertProfileDialogComponent"], {
            data: {
              message: 'HelloWorld',
              buttonText: {
                cancel: 'Done'
              }
            }
          });
        }
      }]);

      return NavigationbarComponent;
    }();

    NavigationbarComponent.ctorParameters = function () {
      return [{
        type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
      }];
    };

    NavigationbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-navigationbar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigationbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Navigation/NavigationBar/navigationbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigationbar.component.scss */
      "./src/app/Navigation/NavigationBar/navigationbar.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])], NavigationbarComponent);
    /***/
  },

  /***/
  "./src/app/Navigation/NavigationBar/navigationbar.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Navigation/NavigationBar/navigationbar.module.ts ***!
    \******************************************************************/

  /*! exports provided: NavigationbarModule */

  /***/
  function srcAppNavigationNavigationBarNavigationbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationbarModule", function () {
      return NavigationbarModule;
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


    var _navigationbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navigationbar.component */
    "./src/app/Navigation/NavigationBar/navigationbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../material.module */
    "./src/app/material.module.ts");

    var NavigationbarModule = function NavigationbarModule() {
      _classCallCheck(this, NavigationbarModule);
    };

    NavigationbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_navigationbar_component__WEBPACK_IMPORTED_MODULE_2__["NavigationbarComponent"]],
      exports: [_navigationbar_component__WEBPACK_IMPORTED_MODULE_2__["NavigationbarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]]
    })], NavigationbarModule);
    /***/
  },

  /***/
  "./src/app/config.service.ts":
  /*!***********************************!*\
    !*** ./src/app/config.service.ts ***!
    \***********************************/

  /*! exports provided: ConfigService */

  /***/
  function srcAppConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
      return ConfigService;
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

    var ConfigService = /*#__PURE__*/function () {
      function ConfigService(http) {
        _classCallCheck(this, ConfigService);

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

      _createClass(ConfigService, [{
        key: "getArticle",
        value: function getArticle() {
          return this.http.get(this.articleUrl);
        }
      }, {
        key: "getUser",
        value: function getUser(uid) {
          return this.http.get(this.userUrl + uid);
        }
      }, {
        key: "getHobbies",
        value: function getHobbies() {
          return this.http.get(this.hobbieUrl);
        }
      }, {
        key: "getPostal",
        value: function getPostal(post, pageIndex) {
          return this.http.get(this.postalUrl + post + "&page=" + pageIndex);
        }
      }, {
        key: "getLocation",
        value: function getLocation(lat, lng) {
          return this.http.get(this.locationUrl + lat + "," + lng + "&types;=postal_code" + "&key=AIzaSyBru6wNx3CwcvRbACg2G4-Cq7o6Lt4wOvI");
        }
      }, {
        key: "getSearchUrl",
        value: function getSearchUrl(Postalcode, gender, meet, activity) {
          // Only use fields that are specified
          if (Postalcode) {
            this.Postalcode = "&postal=" + Postalcode;
          } else {
            this.Postalcode = "";
          }

          if (gender != 0) {
            this.gender = "&gender=" + gender;
          } else if (gender == 0) {
            this.gender = "";
          }

          if (meet != 0) {
            this.meet = "&meet=" + meet;
          } else if (meet == 0) {
            this.meet = "";
          }

          if (activity != 0) {
            this.activity = "&activity=" + activity;
          } else if (activity == 0) {
            this.activity = "";
          }

          console.log(this.serverUrl + "search-view?" + this.Postalcode + this.gender + this.meet + this.activity);
          return this.http.get(this.serverUrl + "search-view?" + this.Postalcode + this.gender + this.meet + this.activity);
        }
      }]);

      return ConfigService;
    }();

    ConfigService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ConfigService);
    /***/
  }
}]);
//# sourceMappingURL=default~Navigation-blockedusers-blockedusers-module~chat-ChatsThreadListing-ChatsThreadListing-modul~74a3f2ad-es5.js.map