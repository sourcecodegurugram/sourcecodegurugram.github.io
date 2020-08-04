function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ChatsThreadListing-ChatsThreadListing-module~chat-ChatsThreadListing-ChatsThreadListing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatChatsThreadListingChatsThreadListingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n<div  *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n\r\n<ion-content>\r\n<div class=\"background-card\">\r\n  <div class=\"main-content-chat\">\r\n    <div class=\"chat-items\">\r\n      <div routerLink=\"/notificationchat/{{message.thread_id}}/{{message.picture.filename}}/{{message.name}}\"\r\n        class=\"chat-grid\" *ngFor=\"let message of counterpartParticipants\">\r\n        <div class=\"image\">\r\n          <img src=\"https://gowebtutorial.com/sites/default/files/{{message.picture.filename}}\" class=\" image-chat\">\r\n        </div>\r\n\r\n        <div class=\"name\">\r\n          <p class=\"chat-name\">{{message.name}}</p>\r\n          <p class=\"last-chat\">Subject:&nbsp;{{message.subject}}</p>\r\n        </div>\r\n        <div class=\"time\" *ngIf=\"(now | date:'yyyy')==(message.time  * 1000 | date:'yyyy')\">\r\n          <div class=\"time-text\">{{message.time  * 1000 | customDate}}</div>\r\n        </div>\r\n        <div class=\"time\" *ngIf=\"(now | date:'yyyy')!=(message.time  * 1000 |date:'yyyy')\">\r\n          <div class=\"time-text\">{{message.time  * 1000 | year}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/chat/ChatsThreadListing/ChatsThreadListing-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/chat/ChatsThreadListing/ChatsThreadListing-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: ChatsThreadListingPageRoutingModule */

  /***/
  function srcAppChatChatsThreadListingChatsThreadListingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatsThreadListingPageRoutingModule", function () {
      return ChatsThreadListingPageRoutingModule;
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


    var _ChatsThreadListing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ChatsThreadListing.page */
    "./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.ts");

    var routes = [{
      path: '',
      component: _ChatsThreadListing_page__WEBPACK_IMPORTED_MODULE_3__["ChatsThreadListingPage"]
    }];

    var ChatsThreadListingPageRoutingModule = function ChatsThreadListingPageRoutingModule() {
      _classCallCheck(this, ChatsThreadListingPageRoutingModule);
    };

    ChatsThreadListingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatsThreadListingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chat/ChatsThreadListing/ChatsThreadListing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/chat/ChatsThreadListing/ChatsThreadListing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: ChatsThreadListingPageModule */

  /***/
  function srcAppChatChatsThreadListingChatsThreadListingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatsThreadListingPageModule", function () {
      return ChatsThreadListingPageModule;
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


    var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ChatsThreadListing_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ChatsThreadListing-routing.module */
    "./src/app/chat/ChatsThreadListing/ChatsThreadListing-routing.module.ts");
    /* harmony import */


    var _Navigati_Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../Navigati../../Navigation/NavigationBar/navigationbar.module */
    "./src/app/Navigation/NavigationBar/navigationbar.module.ts");
    /* harmony import */


    var _ChatsThreadListing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ChatsThreadListing.page */
    "./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.ts");
    /* harmony import */


    var _custom_datepipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../custom.datepipe */
    "./src/app/custom.datepipe.ts");
    /* harmony import */


    var _year_datepipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../year.datepipe */
    "./src/app/year.datepipe.ts");

    var ChatsThreadListingPageModule = function ChatsThreadListingPageModule() {
      _classCallCheck(this, ChatsThreadListingPageModule);
    };

    ChatsThreadListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ChatsThreadListing_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChatsThreadListingPageRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _Navigati_Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__["NavigationbarModule"]],
      declarations: [_ChatsThreadListing_page__WEBPACK_IMPORTED_MODULE_8__["ChatsThreadListingPage"], _custom_datepipe__WEBPACK_IMPORTED_MODULE_9__["CustomDatePipe"], _year_datepipe__WEBPACK_IMPORTED_MODULE_10__["YearDatePipe"]]
    })], ChatsThreadListingPageModule);
    /***/
  },

  /***/
  "./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatChatsThreadListingChatsThreadListingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chat-grid {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  align-items: unset;\n  grid-gap: 0px;\n  margin: 1em;\n  align-items: center;\n  align-content: center;\n}\n\np.chat-name {\n  margin-bottom: 0px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 2%;\n  margin: auto 20px;\n}\n\np.last-chat {\n  margin-bottom: 0px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.main-content-chat {\n  overflow: scroll;\n}\n\n.background-card {\n  background-color: white !important;\n}\n\n.chat-items {\n  margin-bottom: 10em;\n}\n\n.time-text {\n  font-size: 14px;\n}\n\n.image-chat {\n  min-width: 65px !important;\n  height: 65px !important;\n  margin: auto !important;\n  display: block;\n}\n\n.image {\n  width: 65px;\n  height: 65px;\n  overflow: hidden !important;\n  border-radius: 50%;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\np.last-chat {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvY2hhdC9DaGF0c1RocmVhZExpc3RpbmcvQ2hhdHNUaHJlYWRMaXN0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhdC9DaGF0c1RocmVhZExpc3RpbmcvQ2hhdHNUaHJlYWRMaXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBRUksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGtDQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvQ2hhdHNUaHJlYWRMaXN0aW5nL0NoYXRzVGhyZWFkTGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xyXG4gICAgYWxpZ24taXRlbXM6IHVuc2V0O1xyXG4gICAgZ3JpZC1nYXA6IDBweDtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxucC5jaGF0LW5hbWUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbjogYXV0byAyMHB4O1xyXG59XHJcblxyXG5wLmxhc3QtY2hhdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50LWNoYXQge1xyXG5cclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNoYXQtaXRlbXMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBlbTtcclxufVxyXG5cclxuLnRpbWUtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5pbWFnZS1jaGF0IHtcclxuICAgIG1pbi13aWR0aDogNjVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmxvYWRpbmctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIHAubGFzdC1jaGF0IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn0iLCIuY2hhdC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcbiAgYWxpZ24taXRlbXM6IHVuc2V0O1xuICBncmlkLWdhcDogMHB4O1xuICBtYXJnaW46IDFlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG5wLmNoYXQtbmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW46IGF1dG8gMjBweDtcbn1cblxucC5sYXN0LWNoYXQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYWluLWNvbnRlbnQtY2hhdCB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5iYWNrZ3JvdW5kLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uY2hhdC1pdGVtcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwZW07XG59XG5cbi50aW1lLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbWFnZS1jaGF0IHtcbiAgbWluLXdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbnAubGFzdC1jaGF0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.ts ***!
    \********************************************************************/

  /*! exports provided: ChatsThreadListingPage */

  /***/
  function srcAppChatChatsThreadListingChatsThreadListingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatsThreadListingPage", function () {
      return ChatsThreadListingPage;
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

    var ChatsThreadListingPage = /*#__PURE__*/function () {
      function ChatsThreadListingPage(http) {
        _classCallCheck(this, ChatsThreadListingPage);

        this.http = http;
        this.url = "https://gowebtutorial.com/api/json/system/connect";
        this.formattedMessages = [];
        this.isLoading = true;
        this.counterpartParticipants = [];
        this.now = new Date();
      }

      _createClass(ChatsThreadListingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.itr = JSON.parse(localStorage.getItem("currentUser"));
          this.userlogged = JSON.parse(localStorage.getItem("Signinuser"));

          if (this.itr != null) {
            console.log(this.itr.token);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("X-CSRF-Token", this.itr.token).set("Content-Type", "application/json").set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);
            var requestOptions = {
              headers: headers,
              withCredentials: true
            };
            return this.http.get("https://gowebtutorial.com/api/json/privatemsg/", requestOptions).subscribe(function (getMessages) {
              _this.messages = getMessages;

              for (var i = 0; i < _this.messages.length; i++) {
                for (_this.participants in _this.messages[i].participants) {
                  // Get counterparty
                  if (_this.messages[i].participants[_this.participants].uid != "203820") {
                    // Add subject and time in participant object
                    _this.messages[i].participants[_this.participants].subject = _this.messages[i].subject;
                    _this.messages[i].participants[_this.participants].time = _this.messages[i].last_updated;
                    _this.messages[i].participants[_this.participants].thread_id = _this.messages[i].thread_id; // populate rest of fields

                    _this.counterpartParticipants.push(_this.messages[i].participants[_this.participants]);
                  }
                }
              }

              _this.isLoading = false;
            });
          }
        }
      }, {
        key: "click",
        value: function click() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("X-CSRF-Token", this.itr.token).set("Content-Type", "application/json").set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);
          var requestOptions = {
            headers: headers,
            withCredentials: true
          };
          return this.http.get("https://gowebtutorial.com/api/json/privatemsg/", requestOptions).subscribe(function (getMessages) {});
        }
      }, {
        key: "convertTimestamp",
        value: function convertTimestamp(timestamp) {
          var unix_timestamp = timestamp; // Create a new JavaScript Date object based on the timestamp
          // multiplied by 1000 so that the argument is in milliseconds, not seconds.

          var date = new Date(unix_timestamp * 1000); // Hours part from the timestamp

          var hours = date.getHours(); // Minutes part from the timestamp

          var minutes = "0" + date.getMinutes(); // Seconds part from the timestamp

          var seconds = "0" + date.getSeconds(); // Will display time in 10:30:23 format

          var formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
          return formattedTime;
        }
      }, {
        key: "function",
        value: function _function(scope) {
          scope.date = new Date();
        }
      }]);

      return ChatsThreadListingPage;
    }();

    ChatsThreadListingPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ChatsThreadListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-ChatsThreadListing",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ChatsThreadListing.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ChatsThreadListing.page.scss */
      "./src/app/chat/ChatsThreadListing/ChatsThreadListing.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ChatsThreadListingPage);
    /***/
  },

  /***/
  "./src/app/custom.datepipe.ts":
  /*!************************************!*\
    !*** ./src/app/custom.datepipe.ts ***!
    \************************************/

  /*! exports provided: CustomDatePipe */

  /***/
  function srcAppCustomDatepipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomDatePipe", function () {
      return CustomDatePipe;
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

    var CustomDatePipe = /*#__PURE__*/function (_angular_common__WEBP) {
      _inherits(CustomDatePipe, _angular_common__WEBP);

      var _super = _createSuper(CustomDatePipe);

      function CustomDatePipe() {
        _classCallCheck(this, CustomDatePipe);

        return _super.apply(this, arguments);
      }

      _createClass(CustomDatePipe, [{
        key: "transform",
        value: function transform(value, args) {
          return _get(_getPrototypeOf(CustomDatePipe.prototype), "transform", this).call(this, value, " dd MMMM ");
        }
      }]);

      return CustomDatePipe;
    }(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]);

    CustomDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'customDate'
    })], CustomDatePipe);
    /***/
  },

  /***/
  "./src/app/year.datepipe.ts":
  /*!**********************************!*\
    !*** ./src/app/year.datepipe.ts ***!
    \**********************************/

  /*! exports provided: YearDatePipe */

  /***/
  function srcAppYearDatepipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YearDatePipe", function () {
      return YearDatePipe;
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

    var YearDatePipe = /*#__PURE__*/function (_angular_common__WEBP2) {
      _inherits(YearDatePipe, _angular_common__WEBP2);

      var _super2 = _createSuper(YearDatePipe);

      function YearDatePipe() {
        _classCallCheck(this, YearDatePipe);

        return _super2.apply(this, arguments);
      }

      _createClass(YearDatePipe, [{
        key: "transform",
        value: function transform(value, args) {
          return _get(_getPrototypeOf(YearDatePipe.prototype), "transform", this).call(this, value, " dd MMMM yyyy ");
        }
      }]);

      return YearDatePipe;
    }(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]);

    YearDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'year'
    })], YearDatePipe);
    /***/
  }
}]);
//# sourceMappingURL=default~ChatsThreadListing-ChatsThreadListing-module~chat-ChatsThreadListing-ChatsThreadListing-module-es5.js.map