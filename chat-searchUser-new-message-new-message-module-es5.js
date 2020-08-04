function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-searchUser-new-message-new-message-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/searchUser/new-message/new-message.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/searchUser/new-message/new-message.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatSearchUserNewMessageNewMessagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div  *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n\r\n<div class=\"main-New-message-container\">\r\n\r\n  <div class=\"heading-mew-message\">\r\n    Create new chat thread\r\n  </div>\r\n  \r\n  <div class=\"form-group\">\r\n    <input type=\"text\" class=\"form-control\" id=\"usr\" name=\"Subject\" [(ngModel)]=\"Subject\" placeholder=\"Enter Subject\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n  \r\n    <textarea class=\"form-control\" rows=\"5\" id=\"comment\" name=\"Message\" [(ngModel)]=\"Message\"  placeholder=\"Enter Message\"></textarea>\r\n  </div>\r\n\r\n<div class=\"button-align\">\r\n\r\n  <button type=\"button\" class=\"btn btn-primary send-button\" (click)=\"sendMessage()\">Send</button>\r\n\r\n\r\n\r\n</div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/chat/searchUser/new-message/new-message-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/chat/searchUser/new-message/new-message-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: NewMessagePageRoutingModule */

  /***/
  function srcAppChatSearchUserNewMessageNewMessageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewMessagePageRoutingModule", function () {
      return NewMessagePageRoutingModule;
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


    var _new_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new-message.page */
    "./src/app/chat/searchUser/new-message/new-message.page.ts");

    var routes = [{
      path: '',
      component: _new_message_page__WEBPACK_IMPORTED_MODULE_3__["NewMessagePage"]
    }];

    var NewMessagePageRoutingModule = function NewMessagePageRoutingModule() {
      _classCallCheck(this, NewMessagePageRoutingModule);
    };

    NewMessagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewMessagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chat/searchUser/new-message/new-message.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/chat/searchUser/new-message/new-message.module.ts ***!
    \*******************************************************************/

  /*! exports provided: NewMessagePageModule */

  /***/
  function srcAppChatSearchUserNewMessageNewMessageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewMessagePageModule", function () {
      return NewMessagePageModule;
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
    /*! ../../../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _new_message_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-message-routing.module */
    "./src/app/chat/searchUser/new-message/new-message-routing.module.ts");
    /* harmony import */


    var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../Navigation/NavigationBar/navigationbar.module */
    "./src/app/Navigation/NavigationBar/navigationbar.module.ts");
    /* harmony import */


    var _new_message_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./new-message.page */
    "./src/app/chat/searchUser/new-message/new-message.page.ts");

    var NewMessagePageModule = function NewMessagePageModule() {
      _classCallCheck(this, NewMessagePageModule);
    };

    NewMessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _new_message_routing_module__WEBPACK_IMPORTED_MODULE_6__["NewMessagePageRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__["NavigationbarModule"]],
      declarations: [_new_message_page__WEBPACK_IMPORTED_MODULE_8__["NewMessagePage"]]
    })], NewMessagePageModule);
    /***/
  },

  /***/
  "./src/app/chat/searchUser/new-message/new-message.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/chat/searchUser/new-message/new-message.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatSearchUserNewMessageNewMessagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-New-message-container {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0em 2em;\n  align-items: center;\n  /* width: 100%; */\n  overflow: hidden;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n  width: 100%;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\n.back-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.custom-back-button {\n  width: 100vw;\n  margin-bottom: 1em;\n}\n\n.send-button {\n  width: 100vw;\n}\n\n.button-align {\n  /* display: flow-root; */\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 17vh;\n}\n\n.heading-mew-message {\n  font-size: 20px;\n  margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvY2hhdC9zZWFyY2hVc2VyL25ldy1tZXNzYWdlL25ldy1tZXNzYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhdC9zZWFyY2hVc2VyL25ldy1tZXNzYWdlL25ldy1tZXNzYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNHSjs7QURERTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7QUNNSjs7QURKQTtFQUNJLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9zZWFyY2hVc2VyL25ldy1tZXNzYWdlL25ldy1tZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLU5ldy1tZXNzYWdlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMGVtIDJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAuYmFjay1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY3VzdG9tLWJhY2stYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG4uc2VuZC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcbi5idXR0b24tYWxpZ24ge1xyXG4gICAgLyogZGlzcGxheTogZmxvdy1yb290OyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDE3dmg7XHJcbn1cclxuLmhlYWRpbmctbWV3LW1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbn0iLCIubWFpbi1OZXctbWVzc2FnZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwZW0gMmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uYmFjay1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmN1c3RvbS1iYWNrLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4uc2VuZC1idXR0b24ge1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5idXR0b24tYWxpZ24ge1xuICAvKiBkaXNwbGF5OiBmbG93LXJvb3Q7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAxN3ZoO1xufVxuXG4uaGVhZGluZy1tZXctbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAxZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/chat/searchUser/new-message/new-message.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/chat/searchUser/new-message/new-message.page.ts ***!
    \*****************************************************************/

  /*! exports provided: NewMessagePage */

  /***/
  function srcAppChatSearchUserNewMessageNewMessagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewMessagePage", function () {
      return NewMessagePage;
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

    var NewMessagePage = /*#__PURE__*/function () {
      function NewMessagePage(_Activatedroute, http, router, _location) {
        _classCallCheck(this, NewMessagePage);

        this._Activatedroute = _Activatedroute;
        this.http = http;
        this.router = router;
        this._location = _location;
        this.isLoading = false;
      }

      _createClass(NewMessagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.itr = JSON.parse(localStorage.getItem("currentUser"));
          this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.uid = params.get("uid");
            _this.name = params.get("name");
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var _this2 = this;

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
            _this2.isLoading = false;

            _this2.router.navigate(["/chat/ChatsThreadListing"]);
          });
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          this._location.back();
        }
      }]);

      return NewMessagePage;
    }();

    NewMessagePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }];
    };

    NewMessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-message',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-message.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/searchUser/new-message/new-message.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-message.page.scss */
      "./src/app/chat/searchUser/new-message/new-message.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])], NewMessagePage);
    /***/
  }
}]);
//# sourceMappingURL=chat-searchUser-new-message-new-message-module-es5.js.map