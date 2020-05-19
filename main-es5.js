function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", "stencil-ion-action-sheet-ios-entry-js"],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", "stencil-ion-action-sheet-md-entry-js"],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", "stencil-ion-alert-ios-entry-js"],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", "stencil-ion-alert-md-entry-js"],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", "stencil-ion-app_8-ios-entry-js"],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", "stencil-ion-app_8-md-entry-js"],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", "stencil-ion-avatar_3-ios-entry-js"],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", "stencil-ion-avatar_3-md-entry-js"],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", "stencil-ion-back-button-ios-entry-js"],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", "stencil-ion-back-button-md-entry-js"],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", "stencil-ion-backdrop-ios-entry-js"],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", "stencil-ion-backdrop-md-entry-js"],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", "stencil-ion-button_2-ios-entry-js"],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", "stencil-ion-button_2-md-entry-js"],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", "stencil-ion-card_5-ios-entry-js"],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", "stencil-ion-card_5-md-entry-js"],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", "stencil-ion-checkbox-ios-entry-js"],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", "stencil-ion-checkbox-md-entry-js"],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", "stencil-ion-chip-ios-entry-js"],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", "stencil-ion-chip-md-entry-js"],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", "stencil-ion-col_3-entry-js"],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", "stencil-ion-datetime_3-ios-entry-js"],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", "stencil-ion-datetime_3-md-entry-js"],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", "stencil-ion-fab_3-ios-entry-js"],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", "stencil-ion-fab_3-md-entry-js"],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", "stencil-ion-img-entry-js"],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", "stencil-ion-infinite-scroll_2-ios-entry-js"],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", "stencil-ion-infinite-scroll_2-md-entry-js"],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", "stencil-ion-input-ios-entry-js"],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", "stencil-ion-input-md-entry-js"],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", "stencil-ion-item-option_3-ios-entry-js"],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", "stencil-ion-item-option_3-md-entry-js"],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", "stencil-ion-item_8-ios-entry-js"],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", "stencil-ion-item_8-md-entry-js"],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", "stencil-ion-loading-ios-entry-js"],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", "stencil-ion-loading-md-entry-js"],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", "stencil-ion-menu_3-ios-entry-js"],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", "stencil-ion-menu_3-md-entry-js"],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", "stencil-ion-modal-ios-entry-js"],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", "stencil-ion-modal-md-entry-js"],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", "stencil-ion-nav_2-entry-js"],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", "stencil-ion-popover-ios-entry-js"],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", "stencil-ion-popover-md-entry-js"],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", "stencil-ion-progress-bar-ios-entry-js"],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", "stencil-ion-progress-bar-md-entry-js"],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", "stencil-ion-radio_2-ios-entry-js"],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", "stencil-ion-radio_2-md-entry-js"],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", "stencil-ion-range-ios-entry-js"],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", "stencil-ion-range-md-entry-js"],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", "stencil-ion-refresher_2-ios-entry-js"],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", "stencil-ion-refresher_2-md-entry-js"],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", "stencil-ion-reorder_2-ios-entry-js"],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", "stencil-ion-reorder_2-md-entry-js"],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", "stencil-ion-ripple-effect-entry-js"],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", "stencil-ion-route_4-entry-js"],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", "stencil-ion-searchbar-ios-entry-js"],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", "stencil-ion-searchbar-md-entry-js"],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", "stencil-ion-segment_2-ios-entry-js"],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", "stencil-ion-segment_2-md-entry-js"],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", "stencil-ion-select_3-ios-entry-js"],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", "stencil-ion-select_3-md-entry-js"],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", "stencil-ion-slide_2-ios-entry-js"],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", "stencil-ion-slide_2-md-entry-js"],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", "stencil-ion-spinner-entry-js"],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", "stencil-ion-split-pane-ios-entry-js"],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", "stencil-ion-split-pane-md-entry-js"],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", "stencil-ion-tab-bar_2-ios-entry-js"],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", "stencil-ion-tab-bar_2-md-entry-js"],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", "stencil-ion-tab_2-entry-js"],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", "stencil-ion-text-entry-js"],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", "stencil-ion-textarea-ios-entry-js"],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", "stencil-ion-textarea-md-entry-js"],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", "stencil-ion-toast-ios-entry-js"],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", "stencil-ion-toast-md-entry-js"],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", "stencil-ion-toggle-ios-entry-js"],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", "stencil-ion-toggle-md-entry-js"],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", "stencil-ion-virtual-scroll-entry-js"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-app>\n\n</ion-app> -->\n<app-navigationbar></app-navigationbar>\n<ion-router-outlet></ion-router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigationbar/navigationbar.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigationbar/navigationbar.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationbarNavigationbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <div class=\"navigation\">\r\n    <div class=\"main-logo\">\r\n    <img src=\"../../assets/Images/header-logo.png\" alt=\"\" srcset=\"\" class=\"header-logo\" routerLink=\"/\">\r\n    </div>\r\n    \r\n    <div class=\"account-status\">\r\n    \r\n      <img src=\"../../assets/Images/user.png\" class=\"status-check\"  data-toggle=\"modal\" data-target=\"#profile\">\r\n    </div>\r\n    \r\n    <div class=\"humburger-menu\">\r\n      <img src=\"../../assets/Images/cross.png\" class=\"hum-burger-menu-cross\" *ngIf=\"crossSign\" (click)=\"humBurgerCross()\">\r\n      <img src=\"../../assets/Images/newmenu.png\" class=\"hum-burger-menu\" (click)=\"humburgereffect()\" *ngIf=\"humBurger\" >\r\n    </div>\r\n   \r\n    </div>\r\n    \r\n    <div class=\"main-menu\" *ngIf=\"mainMenu\">\r\n      <ul class=\"main-list\" (click)=\"itemclick()\">\r\n        <li><a routerLink=\"/signup\">Signup</a></li>\r\n        <li><a routerLink=\"/signin\">SignIn</a></li>\r\n        <li><a routerLink=\"/chat/searchTab\">Search Tab</a></li>\r\n        <li><a routerLink=\"/optional-detail\">optional-detail</a></li>\r\n        <li><a routerLink=\"/register\">Old Register</a></li>\r\n      </ul>\r\n    </div>\r\n  </ion-header>\r\n\r\n <div class=\"login-form\" *ngIf=\"logggenIn\">\r\n\r\n  <form class=\"form-fields\">\r\n    <label for=\"name\" class=\"form-label\">Username</label><br>\r\n    <input type=\"text\" id=\"name\"  class=\"form-field-zip-code search-country\" name=\"username\" #username><br>\r\n\r\n    <label for=\"name\" class=\"form-label\">Password</label><br>\r\n    <input  id=\"password\" name=\"password\" class=\"form-field-zip-code search-country\" #password type=\"password\">\r\n\r\n    <div class=\"button-container\">\r\n      <button type=\"button\" class=\"button-common\" (click)=\"LoginForm(username.value,password.value)\">Submit</button>\r\n\r\n    </div>\r\n</form>\r\n\r\n\r\n </div>\r\n   <!-- The Modal nav Option-->\r\n   <div class=\"modal\" id=\"profile\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\" data-dismiss=\"modal\">\r\n      \r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        \r\n        <!-- Modal body -->\r\n        <div class=\"modal-body\">\r\n          <div class=\"continue-button\" data-toggle=\"modal\" data-target=\"#profileedit\" data-dismiss=\"modal\">\r\n            View/Edit Profile\r\n          </div>\r\n          <div class=\"continue-button\" data-toggle=\"modal\" data-target=\"#Account\" data-dismiss=\"modal\">\r\n            Account Settings\r\n          </div>\r\n<div class=\"logout-text-container\">\r\n          <span class=\"log-out-text\">Log Out</span>\r\n        </div>\r\n        </div>\r\n        \r\n       \r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- The Modal Profile Edit-->\r\n  <div class=\"modal\" id=\"profileedit\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\" data-dismiss=\"modal\">\r\n      \r\n        <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n        \r\n        <!-- Modal body -->\r\n        <div class=\"modal-body\">\r\n          \r\n          <div class=\"modal-grid\">\r\n       \r\n            <div class=\"profile-picture-modal\">\r\n             <img src=\"../../assets/Images/p1.jpg\" class=\"image-profile\">\r\n\r\n            </div>\r\n\r\n            <div class=\"profile-name-modal\">\r\n              <span class=\"name\">Lorem</span>\r\n              <span class=\"not-verified\">Verified</span>\r\n\r\n           </div>\r\n\r\n       </div>\r\n\r\n       <div class=\"sidebar-content\">\r\n        <p class=\"detail-data\">FullName:<br><span class=\"output-text\">Lorem10</span></p>\r\n        <p class=\"detail-data\">Activities:<br><span class=\"output-text\">Lorem,lorem,lorem...</span></p>\r\n        <p class=\"detail-data\">Favorate Music:<br><span class=\"output-text\">English,Punjabi..</span></p>\r\n        <p class=\"detail-data\">Favorate Show:<br><span class=\"output-text\">Big Bang.</span></p>\r\n        <p class=\"detail-data\">Languages:<br><span class=\"output-text\">Hindi,English</span></p>\r\n        </div>\r\n        <div class=\"continue-button\" >\r\n          Add More Info\r\n        </div>\r\n        </div>\r\n        \r\n       \r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- The Modal Account-->\r\n  <div class=\"modal\" id=\"Account\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\" >\r\n      \r\n        <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n        \r\n        <!-- Modal body -->\r\n        <div class=\"modal-body\">\r\n          \r\n          <div class=\"forms-field\">\r\n            <div class=\"form-group font\">\r\n              <label for=\"sel1\">Communication Preferences</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"usr\">\r\n            </div> \r\n\r\n           \r\n          \r\n\r\n         \r\n            <label for=\"sel1\" class=\"font\">Change App Subscription:</label>\r\n      <div class=\"form-check\">\r\n        <label class=\"form-check-label\">\r\n          <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Switch to Monthly\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <label class=\"form-check-label\">\r\n          <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Switch to Annual\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <label class=\"form-check-label\">\r\n          <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Freeze Subscription\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <label class=\"form-check-label\">\r\n          <input type=\"checkbox\" class=\"form-check-input font\" value=\"\">Cancel App Subscription\r\n        </label>\r\n      </div>\r\n      <div class=\"continue-button blue\" >\r\n        Update Billing Info\r\n      </div>\r\n\r\n      <div class=\"form-group font\">\r\n        <label for=\"sel1\">New Password</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"usr\">\r\n      </div> \r\n      <div class=\"form-group font\">\r\n       \r\n        <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Type again to confirm\">\r\n      </div> \r\n      <div class=\"continue-button\" >\r\n        Save Changes\r\n      </div>\r\n      <div class=\"close-account\">\r\n        Close Account <br>\r\n        (Delete all My Info)\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'location-targetting',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | location-targetting-location-targetting-module */
        [__webpack_require__.e("default~location-targetting-location-targetting-module~optional-detail-optional-detail-module~regist~5a236dac"), __webpack_require__.e("location-targetting-location-targetting-module")]).then(__webpack_require__.bind(null,
        /*! ./location-targetting/location-targetting.module */
        "./src/app/location-targetting/location-targetting.module.ts")).then(function (m) {
          return m.LocationTargettingPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | register-register-module */
        [__webpack_require__.e("default~location-targetting-location-targetting-module~optional-detail-optional-detail-module~regist~5a236dac"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null,
        /*! ./register/register.module */
        "./src/app/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'chat',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | chat-chat-module */
        "chat-chat-module").then(__webpack_require__.bind(null,
        /*! ./chat/chat.module */
        "./src/app/chat/chat.module.ts")).then(function (m) {
          return m.ChatPageModule;
        });
      }
    }, {
      path: 'searchTab',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | searchTab-searchTab-module */
        [__webpack_require__.e("default~location-targetting-location-targetting-module~optional-detail-optional-detail-module~regist~5a236dac"), __webpack_require__.e("searchTab-searchTab-module")]).then(__webpack_require__.bind(null,
        /*! ./searchTab/searchTab.module */
        "./src/app/searchTab/searchTab.module.ts")).then(function (m) {
          return m.SearchTabPageModule;
        });
      }
    }, {
      path: 'tabs2',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs2-tabs2-module */
        "tabs2-tabs2-module").then(__webpack_require__.bind(null,
        /*! ./tabs2/tabs2.module */
        "./src/app/tabs2/tabs2.module.ts")).then(function (m) {
          return m.Tabs2PageModule;
        });
      }
    }, {
      path: 'tabs3',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs3-tabs3-module */
        "tabs3-tabs3-module").then(__webpack_require__.bind(null,
        /*! ./tabs3/tabs3.module */
        "./src/app/tabs3/tabs3.module.ts")).then(function (m) {
          return m.Tabs3PageModule;
        });
      }
    }, {
      path: 'personal-chat',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | personal-chat-personal-chat-module */
        "personal-chat-personal-chat-module").then(__webpack_require__.bind(null,
        /*! ./personal-chat/personal-chat.module */
        "./src/app/personal-chat/personal-chat.module.ts")).then(function (m) {
          return m.PersonalChatPageModule;
        });
      }
    }, {
      path: 'notificationchat',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | notificationchat-notificationchat-module */
        "notificationchat-notificationchat-module").then(__webpack_require__.bind(null,
        /*! ./notificationchat/notificationchat.module */
        "./src/app/notificationchat/notificationchat.module.ts")).then(function (m) {
          return m.NotificationchatPageModule;
        });
      }
    }, {
      path: 'search-result/:post',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | search-result-search-result-module */
        "search-result-search-result-module").then(__webpack_require__.bind(null,
        /*! ./search-result/search-result.module */
        "./src/app/search-result/search-result.module.ts")).then(function (m) {
          return m.SearchResultPageModule;
        });
      }
    }, {
      path: 'detail/:name/:mail/:uid',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | detail-detail-module */
        "detail-detail-module").then(__webpack_require__.bind(null,
        /*! ./detail/detail.module */
        "./src/app/detail/detail.module.ts")).then(function (m) {
          return m.DetailPageModule;
        });
      }
    }, {
      path: 'elipsispipe',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | elipsispipe-elipsispipe-module */
        "elipsispipe-elipsispipe-module").then(__webpack_require__.bind(null,
        /*! ./elipsispipe/elipsispipe.module */
        "./src/app/elipsispipe/elipsispipe.module.ts")).then(function (m) {
          return m.ElipsispipePageModule;
        });
      }
    }, {
      path: 'welcome',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | welcome-welcome-module */
        [__webpack_require__.e("default~location-targetting-location-targetting-module~optional-detail-optional-detail-module~regist~5a236dac"), __webpack_require__.e("welcome-welcome-module")]).then(__webpack_require__.bind(null,
        /*! ./welcome/welcome.module */
        "./src/app/welcome/welcome.module.ts")).then(function (m) {
          return m.WelcomePageModule;
        });
      }
    }, {
      path: 'signup',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | signup-signup-module */
        [__webpack_require__.e("default~location-targetting-location-targetting-module~optional-detail-optional-detail-module~regist~5a236dac"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null,
        /*! ./signup/signup.module */
        "./src/app/signup/signup.module.ts")).then(function (m) {
          return m.SignupPageModule;
        });
      }
    }, {
      path: 'signin',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | signin-signin-module */
        [__webpack_require__.e("default~location-targetting-location-targetting-module~optional-detail-optional-detail-module~regist~5a236dac"), __webpack_require__.e("signin-signin-module")]).then(__webpack_require__.bind(null,
        /*! ./signin/signin.module */
        "./src/app/signin/signin.module.ts")).then(function (m) {
          return m.SigninPageModule;
        });
      }
    }, {
      path: 'optional-detail',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | optional-detail-optional-detail-module */
        [__webpack_require__.e("default~location-targetting-location-targetting-module~optional-detail-optional-detail-module~regist~5a236dac"), __webpack_require__.e("optional-detail-optional-detail-module")]).then(__webpack_require__.bind(null,
        /*! ./optional-detail/optional-detail.module */
        "./src/app/optional-detail/optional-detail.module.ts")).then(function (m) {
          return m.OptionalDetailPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _navigationbar_navigationbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./navigationbar/navigationbar.component */
    "./src/app/navigationbar/navigationbar.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng-recaptcha */
    "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
    /* harmony import */


    var _ellipsis_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../ellipsis.pipe */
    "./src/ellipsis.pipe.ts");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _navigationbar_navigationbar_component__WEBPACK_IMPORTED_MODULE_10__["NavigationbarComponent"], _ellipsis_pipe__WEBPACK_IMPORTED_MODULE_14__["EllipsisPipe"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__["RecaptchaModule"].forRoot()],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_15__["NativeGeocoder"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/blog.service.ts":
  /*!*********************************!*\
    !*** ./src/app/blog.service.ts ***!
    \*********************************/

  /*! exports provided: BlogService */

  /***/
  function srcAppBlogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogService", function () {
      return BlogService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var BlogService = /*#__PURE__*/function () {
      function BlogService(http) {
        _classCallCheck(this, BlogService);

        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
      }

      _createClass(BlogService, [{
        key: "getBlogs",
        value: function getBlogs(id) {
          console.log(id);

          if (id) {
            return this.http.get(this.API_URL + '/api/json/node/article/' + id);
          } else {
            return this.http.get(this.API_URL + '/api/json/node/article?sort=-created');
          }
        }
      }]);

      return BlogService;
    }();

    BlogService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], BlogService);
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
        this.serverUrl = "http://gowebtutorial.com/api/json/";
        this.articleUrl = this.serverUrl + "user.json";
        this.userUrl = this.serverUrl + "user/";
        this.hobbieUrl = this.serverUrl + "hobbies-json";
        this.postalUrl = this.serverUrl + "post-json?postal_code=";
        this.locationUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
        this.createUrl = "http://latdating.dd:8083/api/json/user/register";
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
  },

  /***/
  "./src/app/navigationbar/navigationbar.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/navigationbar/navigationbar.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationbarNavigationbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.navigation {\n  display: grid;\n  grid-template-columns: 6fr 1fr 1fr;\n  align-items: center;\n  border-bottom: 1px solid;\n  background-color: white;\n}\nimg.hum-burger-menu {\n  height: 4.5vh;\n}\n.main-logo {\n  margin: 0.8em;\n}\n.account-status {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nimg.hum-burger-menu-cross {\n  position: absolute;\n  top: 2.5vh;\n  right: 3.5vw;\n  z-index: 1;\n  height: 4.5vh;\n}\nul.main-list {\n  list-style: none;\n  font-size: 25px;\n  color: white;\n  display: flex;\n  align-items: center;\n  z-index: 999;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n  margin-left: 0px;\n  justify-content: space-evenly;\n  background-color: black;\n  opacity: 0.8;\n  padding-left: 0px;\n}\na {\n  color: white;\n  font-size: 20px;\n  text-transform: uppercase;\n}\nli {\n  padding: 0 0em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n.login-form.ng-star-inserted {\n  height: 100vh;\n  background-color: white;\n  position: relative;\n  z-index: 1;\n}\n.background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n.card-content-font {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n}\n.card-one {\n  border: 1px solid #707070;\n}\n.tittle-card {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 27px;\n  text-align: center;\n  color: #707070;\n  padding: 1em;\n}\nform.form-fields {\n  margin: 2em;\n  margin-top: 0px;\n  padding-top: 33px;\n}\ntextarea {\n  border-radius: 7px;\n  margin-top: 15px;\n  border: 1px solid;\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n}\nselect {\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 15px;\n  border: 1px solid;\n  margin-bottom: 20px;\n  width: 55%;\n  font-size: 16px;\n  margin-left: 0px;\n  padding-left: 10px;\n}\n.form-label {\n  font-size: 15px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n.form-label-country {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n.button-container {\n  display: flex;\n  margin: 2em;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n  margin-left: 0px;\n}\nbutton.button-common {\n  height: 35px;\n  padding: 0px 20px;\n  border: 1px solid #707070;\n  background-color: #449D44;\n  color: white;\n  border-radius: 7px;\n  font-size: 17px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: bold;\n}\n.search-country {\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n  padding-left: 10px;\n}\n.main-register-card {\n  border: 1px solid #707070;\n  margin: 1.5em;\n  margin-top: 7em;\n}\n.mat-background {\n  background-color: #F5F5F5;\n}\n.card-one-white {\n  background-color: white;\n  padding: 1px;\n}\np.register-with-us {\n  padding: 1.5em;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n.fa-arrow-circle-up:before {\n  content: \"\";\n  margin-right: 11px;\n}\nbutton.btn.btn-success {\n  margin-bottom: 10px;\n}\n.chechk-box-terms {\n  margin-top: 10px;\n}\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nbutton.btn.btn-primary {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #415DAE;\n}\n.facebook {\n  height: 3.5em;\n  padding: 0em 1em;\n  width: 88%;\n}\n.fa-facebook-square:before {\n  content: \"\";\n  font-size: 2em;\n  margin-right: 2em;\n}\n.btn-primary-google {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #4184F3;\n  height: 3.5em;\n  padding: 0em 1em;\n  width: 88%;\n}\n.fa-google-plus-square:before {\n  font-size: 2em;\n  margin-right: 2em;\n}\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n.having-trouble {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  margin: 0.5em;\n}\n.upload-card-register {\n  margin: 2em;\n  border: 1px solid #F5F5F5;\n}\n.profile-heading {\n  background-color: #F5F5F5;\n  padding: 0.3em;\n  border-bottom: 1px solid #F5F5F5;\n}\np.profile-card-title {\n  font-size: 14px;\n  margin: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n.upload-content {\n  margin: 10px;\n}\n.submit-button {\n  margin: 0px;\n  border: none;\n  padding: 0px 8vw;\n  height: 41px;\n  background-color: #5ADB00;\n  color: white;\n  font-size: 15px;\n}\np.terms {\n  padding-bottom: 10px;\n}\n.radio {\n  height: auto;\n  margin-right: 5px;\n  margin-top: 2px;\n  margin-left: 5vw;\n}\nselect::-ms-expand {\n  display: none;\n}\n.label-dropdown {\n  padding-left: 10px;\n}\n.condition-text-container {\n  height: 20vh;\n  overflow: auto;\n  border: 1px solid #707070;\n  border-radius: 7px;\n  background-color: #F2F2F2 !important;\n}\np.condition-text {\n  font-size: 12px;\n  color: black;\n  text-align: justify;\n  padding: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n.terms-checkbox {\n  margin-left: 0px;\n  margin-bottom: 0px;\n  margin-top: 1vh;\n}\n.button-prev {\n  background-color: #E81E16 !important;\n}\n.subscribe-card {\n  padding: 1em;\n  border: 1px solid #707070;\n  background-color: white;\n  margin: 2em 1em;\n}\n.subscription-successfull-text {\n  font-size: 14px;\n  color: black;\n  text-align: justify;\n  padding: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n.subscription-text-anchor {\n  font-size: 12px;\n  text-align: justify;\n  padding: 10px;\n  font-family: \"Open Sans\", sans-serif;\n}\n.other-option {\n  display: flex;\n  flex-direction: row;\n  justify-content: baseline;\n  align-items: flex-end;\n  padding: 10px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n  margin-bottom: 10px;\n}\n.text-subscribe-check {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-left: 2vw;\n  margin-bottom: 0px;\n}\n.membership {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\np.membership-text {\n  text-align: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  color: black;\n}\np.note-under-text {\n  margin-bottom: 0px;\n  margin-top: -15px;\n}\n.login-form {\n  background-color: white;\n  z-index: 1;\n  position: relative;\n  height: 100vh;\n}\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  font-size: 18px;\n}\n.logout-text-container {\n  text-align: center;\n  font-size: 21px;\n  margin: 1em;\n  text-transform: uppercase;\n}\n.modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  grid-gap: 11px;\n}\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n.sidebar-content {\n  margin-top: 1em;\n}\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 0.5em 1rem;\n  border-bottom: none;\n  border-top-left-radius: calc(.3rem - 1px);\n  border-top-right-radius: calc(.3rem - 1px);\n}\n.forms-field {\n  margin: 1em 1em;\n}\n.form-control {\n  border: 1px solid;\n}\n.font {\n  font-size: 20px;\n}\n.form-check {\n  font-size: 18px;\n}\n.blue {\n  background-color: #4372c4;\n}\n.close-account {\n  color: red;\n  margin: 1em;\n  text-align: center;\n}\nimg.status-check {\n  width: 80%;\n}\n.modal {\n  background: #000000a1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbmJhci9uYXZpZ2F0aW9uYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZpZ2F0aW9uYmFyL0s6XFxBbmd1bGFyIFByb2plY3RcXG5vdDREYXRpbmcvc3JjXFxhcHBcXG5hdmlnYXRpb25iYXJcXG5hdmlnYXRpb25iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FERUo7QUNBQTtFQUNJLGFBQUE7QURHSjtBQ0RBO0VBQ0ksYUFBQTtBRElKO0FDRkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBREtKO0FDSEE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QURNSjtBQ0pBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FET0o7QUNMQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QURRSjtBQ05BO0VBQ0ksY0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QURTSjtBQ05BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FEU0o7QUNMRTtFQUVFLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBRE9KO0FDTEE7RUFFSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0YsY0FBQTtBRE9GO0FDSkE7RUFDSSx5QkFBQTtBRE9KO0FDSkE7RUFFSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QURNSjtBQ0pBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRE9KO0FDRkU7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtFQUNBLG9DQUFBO0FER0o7QUNBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBREdKO0FDQUU7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBREdKO0FDQUE7RUFFSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBREVKO0FDQ0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QURHSjtBQ0RBO0VBRUksc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FER0o7QUNEQTtFQUVJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QURHSjtBQ0RBO0VBQ0kseUJBQUE7QURJSjtBQ0ZBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FES0o7QUNIQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURNSjtBQ0pBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FET0o7QUNKQTtFQUNJLG1CQUFBO0FET0o7QUNMQTtFQUNJLGdCQUFBO0FEUUo7QUNMQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURRSjtBQ05BO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QURTSjtBQ1BBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBRFVKO0FDUkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FEV0o7QUNUQTtFQUVJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBRFdKO0FDVEE7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7QURXSjtBQ1RBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FEWUo7QUNWQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FEYUo7QUNYQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBRGNKO0FDWkE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBRGVKO0FDYkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QURnQko7QUNkQTtFQUNJLFlBQUE7QURpQko7QUNkQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRGlCSjtBQ2ZBO0VBQ0ksb0JBQUE7QURrQko7QUNoQkE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURrQkE7QUNaRTtFQUFxQixhQUFBO0FEZ0J2QjtBQ2RBO0VBRUksa0JBQUE7QURnQko7QUNkQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FEaUJKO0FDZkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QURrQko7QUNoQkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRG1CSjtBQ2pCQTtFQUNJLG9DQUFBO0FEb0JKO0FDbEJBO0VBRUksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FEb0JKO0FDbEJBO0VBRUksZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURvQko7QUNsQkE7RUFFSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QURvQko7QUNsQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRHFCSjtBQ25CQTtFQUVJLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEcUJKO0FDbkJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QURzQko7QUNwQkE7RUFDSSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FEdUJKO0FDckJBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBRHdCSjtBQ2hCQTtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBRG1CSjtBQ2pCQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QURvQko7QUNsQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QURxQko7QUNuQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FEc0JKO0FDcEJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FEdUJKO0FDckJBO0VBQ0ksZUFBQTtBRHdCSjtBQ3RCQTtFQUVJLGFBQUE7RUFFQSx1QkFBQTtFQUVBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsMENBQUE7QUR5Qko7QUN2QkE7RUFDSSxlQUFBO0FEMEJKO0FDeEJBO0VBQ0ksaUJBQUE7QUQyQko7QUN6QkE7RUFDSSxlQUFBO0FENEJKO0FDMUJBO0VBRUksZUFBQTtBRDRCSjtBQzFCQTtFQUVBLHlCQUFBO0FENEJBO0FDMUJBO0VBRUksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRDRCSjtBQ3pCQTtFQUNJLFVBQUE7QUQ0Qko7QUMxQkE7RUFDSSxxQkFBQTtBRDZCSiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb25iYXIvbmF2aWdhdGlvbmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyIDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nLmh1bS1idXJnZXItbWVudSB7XG4gIGhlaWdodDogNC41dmg7XG59XG5cbi5tYWluLWxvZ28ge1xuICBtYXJnaW46IDAuOGVtO1xufVxuXG4uYWNjb3VudC1zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW1nLmh1bS1idXJnZXItbWVudS1jcm9zcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyLjV2aDtcbiAgcmlnaHQ6IDMuNXZ3O1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IDQuNXZoO1xufVxuXG51bC5tYWluLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmxpIHtcbiAgcGFkZGluZzogMCAwZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubG9naW4tZm9ybS5uZy1zdGFyLWluc2VydGVkIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uY2FyZC1jb250ZW50LWZvbnQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5jYXJkLW9uZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG59XG5cbi50aXR0bGUtY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgcGFkZGluZzogMWVtO1xufVxuXG5mb3JtLmZvcm0tZmllbGRzIHtcbiAgbWFyZ2luOiAyZW07XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDMzcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xufVxuXG5zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDdweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA1NSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9ybS1sYWJlbC1jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuYnV0dG9uLmJ1dHRvbi1jb21tb24ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ5RDQ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogYm9sZDtcbn1cblxuLnNlYXJjaC1jb3VudHJ5IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5tYWluLXJlZ2lzdGVyLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBtYXJnaW46IDEuNWVtO1xuICBtYXJnaW4tdG9wOiA3ZW07XG59XG5cbi5tYXQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jYXJkLW9uZS13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbnAucmVnaXN0ZXItd2l0aC11cyB7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5mYS1hcnJvdy1jaXJjbGUtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgqpcIjtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNoZWNoay1ib3gtdGVybXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc29jaWFsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTVEQUU7XG59XG5cbi5mYWNlYm9vayB7XG4gIGhlaWdodDogMy41ZW07XG4gIHBhZGRpbmc6IDBlbSAxZW07XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5mYS1mYWNlYm9vay1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgoJcIjtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG4uYnRuLXByaW1hcnktZ29vZ2xlIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTg0RjM7XG4gIGhlaWdodDogMy41ZW07XG4gIHBhZGRpbmc6IDBlbSAxZW07XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5mYS1nb29nbGUtcGx1cy1zcXVhcmU6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG5wLm9yLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuLmhhdmluZy10cm91YmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luOiAwLjVlbTtcbn1cblxuLnVwbG9hZC1jYXJkLXJlZ2lzdGVyIHtcbiAgbWFyZ2luOiAyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGNUY1RjU7XG59XG5cbi5wcm9maWxlLWhlYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICBwYWRkaW5nOiAwLjNlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUY1RjU7XG59XG5cbnAucHJvZmlsZS1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udXBsb2FkLWNvbnRlbnQge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMHB4IDh2dztcbiAgaGVpZ2h0OiA0MXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxucC50ZXJtcyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucmFkaW8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG59XG5cbnNlbGVjdDo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sYWJlbC1kcm9wZG93biB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNvbmRpdGlvbi10ZXh0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xufVxuXG5wLmNvbmRpdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udGVybXMtY2hlY2tib3gge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDF2aDtcbn1cblxuLmJ1dHRvbi1wcmV2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUUxNiAhaW1wb3J0YW50O1xufVxuXG4uc3Vic2NyaWJlLWNhcmQge1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDJlbSAxZW07XG59XG5cbi5zdWJzY3JpcHRpb24tc3VjY2Vzc2Z1bGwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnN1YnNjcmlwdGlvbi10ZXh0LWFuY2hvciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5vdGhlci1vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50ZXh0LXN1YnNjcmliZS1jaGVjayB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogMnZ3O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5tZW1iZXJzaGlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxucC5tZW1iZXJzaGlwLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5wLm5vdGUtdW5kZXItdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cbi5sb2dpbi1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5sb2dvdXQtdGV4dC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luOiAxZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tb2RhbC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xuICBncmlkLWdhcDogMTFweDtcbn1cblxuLnByb2ZpbGUtbmFtZS1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaWRlYmFyLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjVlbSAxcmVtO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKC4zcmVtIC0gMXB4KTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGNhbGMoLjNyZW0gLSAxcHgpO1xufVxuXG4uZm9ybXMtZmllbGQge1xuICBtYXJnaW46IDFlbSAxZW07XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmZvbnQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mb3JtLWNoZWNrIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzcyYzQ7XG59XG5cbi5jbG9zZS1hY2NvdW50IHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luOiAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nLnN0YXR1cy1jaGVjayB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5tb2RhbCB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBhMTtcbn0iLCIubmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDZmciAxZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuaW1nLmh1bS1idXJnZXItbWVudSB7XG4gICAgaGVpZ2h0OiA0LjV2aDtcbn1cbi5tYWluLWxvZ28ge1xuICAgIG1hcmdpbjogMC44ZW07XG59XG4uYWNjb3VudC1zdGF0dXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmltZy5odW0tYnVyZ2VyLW1lbnUtY3Jvc3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIuNXZoO1xuICAgIHJpZ2h0OiAzLjV2dztcbiAgICB6LWluZGV4OiAxO1xuICAgIGhlaWdodDogNC41dmg7XG59XG51bC5tYWluLWxpc3Qge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbmEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmxpIHtcbiAgICBwYWRkaW5nOiAwIDBlbTtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmxvZ2luLWZvcm0ubmctc3Rhci1pbnNlcnRlZCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbn1cblxuXG4gIC5iYWNrZ3JvdW5kXG57XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5jYXJkLWNvbnRlbnQtZm9udFxue1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3MDcwNzA7XG5cbn1cbi5jYXJkLW9uZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuXG59XG4udGl0dGxlLWNhcmRcbntcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgcGFkZGluZzogMWVtO1xufVxuZm9ybS5mb3JtLWZpZWxkc3tcbiAgICBtYXJnaW46IDJlbTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDMzcHg7XG59XG5cblxuXG4gIHRleHRhcmVhXG4gIHtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiBcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjIgIWltcG9ydGFudDtcbiAgfVxuXG4gIHNlbGVjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGhlaWdodDogNDdweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cbn1cbiAgLmZvcm0tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cbi5mb3JtLWxhYmVsLWNvdW50cnlcbntcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbmJ1dHRvbi5idXR0b24tY29tbW9uIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzQ0OUQ0NDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogYm9sZDtcbn1cbi5zZWFyY2gtY291bnRyeVxue1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5tYWluLXJlZ2lzdGVyLWNhcmRcbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgIG1hcmdpbjoxLjVlbTtcbiAgICBtYXJnaW4tdG9wOiA3ZW07XG59XG4ubWF0LWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG4uY2FyZC1vbmUtd2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDFweDtcbn1cbnAucmVnaXN0ZXItd2l0aC11cyB7XG4gICAgcGFkZGluZzogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmZhLWFycm93LWNpcmNsZS11cDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxmMGFhXCI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNoZWNoay1ib3gtdGVybXMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zb2NpYWwtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTVEQUVcbn1cbi5mYWNlYm9vayB7XG4gICAgaGVpZ2h0OiAzLjVlbTtcbiAgICBwYWRkaW5nOiAwZW0gMWVtO1xuICAgIHdpZHRoOiA4OCVcbn1cbi5mYS1mYWNlYm9vay1zcXVhcmU6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZjA4MlwiO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbi1yaWdodDogMmVtO1xufVxuLmJ0bi1wcmltYXJ5LWdvb2dsZVxue1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTg0RjM7XG4gICAgaGVpZ2h0OiAzLjVlbTtcbiAgICBwYWRkaW5nOiAwZW0gMWVtO1xuICAgIHdpZHRoOiA4OCVcbn1cbi5mYS1nb29nbGUtcGx1cy1zcXVhcmU6YmVmb3JlIHtcblxuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbi1yaWdodDogMmVtO1xufVxucC5vci10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyN3B4O1xufVxuLmhhdmluZy10cm91YmxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbjogMC41ZW07XG59XG4udXBsb2FkLWNhcmQtcmVnaXN0ZXIge1xuICAgIG1hcmdpbjogMmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGNUY1RjU7XG59XG4ucHJvZmlsZS1oZWFkaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIHBhZGRpbmc6IDAuM2VtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjVGNUY1O1xufVxucC5wcm9maWxlLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4udXBsb2FkLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHggOHZ3O1xuICAgIGhlaWdodDogNDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5wLnRlcm1zIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5yYWRpb1xue1xuaGVpZ2h0OiBhdXRvO1xubWFyZ2luLXJpZ2h0OiA1cHg7XG5tYXJnaW4tdG9wOiAycHg7XG5tYXJnaW4tbGVmdDogNXZ3O1xufVxuXG5cblxuICBcbiAgc2VsZWN0OjotbXMtZXhwYW5kIHsgZGlzcGxheTogbm9uZTsgfVxuXG4ubGFiZWwtZHJvcGRvd25cbntcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uY29uZGl0aW9uLXRleHQtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xufVxucC5jb25kaXRpb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4udGVybXMtY2hlY2tib3gge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDF2aDtcbn1cbi5idXR0b24tcHJldiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4MUUxNiAhaW1wb3J0YW50O1xufVxuLnN1YnNjcmliZS1jYXJkXG57XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAyZW0gMWVtO1xufVxuLnN1YnNjcmlwdGlvbi1zdWNjZXNzZnVsbC10ZXh0XG57XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5zdWJzY3JpcHRpb24tdGV4dC1hbmNob3JcbntcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cbi5vdGhlci1vcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnRleHQtc3Vic2NyaWJlLWNoZWNrXG57XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ubWVtYmVyc2hpcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5wLm1lbWJlcnNoaXAtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5wLm5vdGUtdW5kZXItdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuXG4vLyAubWFpbi1tZW51IHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vIH1cblxuXG4ubG9naW4tZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5jb250aW51ZS1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBtYXJnaW46IDJlbTtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4ubG9nb3V0LXRleHQtY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ubW9kYWwtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XG4gICAgZ3JpZC1nYXA6IDExcHg7XG59XG4ucHJvZmlsZS1uYW1lLW1vZGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLnNpZGViYXItY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuLm1vZGFsLWhlYWRlciB7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMC41ZW0gMXJlbTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGNhbGMoLjNyZW0gLSAxcHgpO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBjYWxjKC4zcmVtIC0gMXB4KTtcbn1cbi5mb3Jtcy1maWVsZHtcbiAgICBtYXJnaW46IDFlbSAxZW07XG59XG4uZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5mb250IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uZm9ybS1jaGVjayB7XG5cbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uYmx1ZVxue1xuYmFja2dyb3VuZC1jb2xvcjogIzQzNzJjNDtcbn1cbi5jbG9zZS1hY2NvdW50XG57XG4gICAgY29sb3I6cmVkO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIFxufVxuaW1nLnN0YXR1cy1jaGVjayB7XG4gICAgd2lkdGg6IDgwJTtcbn1cbi5tb2RhbHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/navigationbar/navigationbar.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/navigationbar/navigationbar.component.ts ***!
    \**********************************************************/

  /*! exports provided: NavigationbarComponent */

  /***/
  function srcAppNavigationbarNavigationbarComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    /*! ../config.service */
    "./src/app/config.service.ts");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var NavigationbarComponent = /*#__PURE__*/function () {
      function NavigationbarComponent(Configservice, blogService, route, router, http) {
        _classCallCheck(this, NavigationbarComponent);

        this.Configservice = Configservice;
        this.blogService = blogService;
        this.route = route;
        this.router = router;
        this.http = http;
        this.crossSign = false;
        this.humBurger = true;
        this.mainMenu = false;
        this.mainMenuItem = true;
        this.id = null;
        this.logggenIn = false;
        this.url = "http://latdating.dd:8083/api/json/system/connect";
      }

      _createClass(NavigationbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.Configservice.getArticle()
          //   .subscribe(data => {
          //     this.post = data;
          //    console.log(data)
          //   });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "humburgereffect",
        value: function humburgereffect() {
          this.crossSign = true;
          this.humBurger = false;
          this.mainMenu = true;
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
          var _this2 = this;

          console.log(user, pass);
          this.http.post('http://gowebtutorial.com/api/json/user/login', {
            username: user,
            password: pass
          }).subscribe(function (data) {
            _this2.post = data.token;
            _this2.headerDict = {
              "X-CSRF-Token": data.token
            };
          });
          return this.http.post(this.url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"](this.headerDict)
          }), this.logggenIn = false;
        }
      }]);

      return NavigationbarComponent;
    }();

    NavigationbarComponent.ctorParameters = function () {
      return [{
        type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    NavigationbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigationbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigationbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigationbar/navigationbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigationbar.component.scss */
      "./src/app/navigationbar/navigationbar.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])], NavigationbarComponent);
    /***/
  },

  /***/
  "./src/ellipsis.pipe.ts":
  /*!******************************!*\
    !*** ./src/ellipsis.pipe.ts ***!
    \******************************/

  /*! exports provided: EllipsisPipe */

  /***/
  function srcEllipsisPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function () {
      return EllipsisPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EllipsisPipe = /*#__PURE__*/function () {
      function EllipsisPipe() {
        _classCallCheck(this, EllipsisPipe);
      }

      _createClass(EllipsisPipe, [{
        key: "transform",
        value: function transform(value, args) {
          if (args === undefined) {
            return value;
          }

          if (value.length > args) {
            return value.substring(0, args) + '...';
          } else {
            return value;
          }
        }
      }]);

      return EllipsisPipe;
    }();

    EllipsisPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'ellipsis'
    })], EllipsisPipe);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://ritin.website/uri/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! K:\Angular Project\not4Dating\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map