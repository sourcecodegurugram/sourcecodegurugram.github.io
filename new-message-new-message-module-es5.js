function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-message-new-message-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-message/new-message.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-message/new-message.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewMessageNewMessagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>newMessage</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<div class=\"main-New-message-container\">\r\n  <div class=\"form-group\">\r\n    <input type=\"text\" class=\"form-control\" id=\"usr\" name=\"Subject\" [(ngModel)]=\"Subject\" placeholder=\"Enter Subject\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n  \r\n    <textarea class=\"form-control\" rows=\"5\" id=\"comment\" name=\"Message\" [(ngModel)]=\"Message\"  placeholder=\"Enter Message\"></textarea>\r\n  </div>\r\n\r\n<div class=\"button-align\">\r\n\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"sendMessage()\">Send</button>\r\n</div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/new-message/new-message-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/new-message/new-message-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: NewMessagePageRoutingModule */

  /***/
  function srcAppNewMessageNewMessageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/new-message/new-message.page.ts");

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
  "./src/app/new-message/new-message.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/new-message/new-message.module.ts ***!
    \***************************************************/

  /*! exports provided: NewMessagePageModule */

  /***/
  function srcAppNewMessageNewMessageModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _new_message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-message-routing.module */
    "./src/app/new-message/new-message-routing.module.ts");
    /* harmony import */


    var _new_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-message.page */
    "./src/app/new-message/new-message.page.ts");

    var NewMessagePageModule = function NewMessagePageModule() {
      _classCallCheck(this, NewMessagePageModule);
    };

    NewMessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_message_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewMessagePageRoutingModule"]],
      declarations: [_new_message_page__WEBPACK_IMPORTED_MODULE_6__["NewMessagePage"]]
    })], NewMessagePageModule);
    /***/
  },

  /***/
  "./src/app/new-message/new-message.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/new-message/new-message.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewMessageNewMessagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-New-message-container {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0em 2em;\n  align-items: center;\n  /* width: 100%; */\n  overflow: hidden;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LW1lc3NhZ2UvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxcbmV3LW1lc3NhZ2VcXG5ldy1tZXNzYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3LW1lc3NhZ2UvbmV3LW1lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9uZXctbWVzc2FnZS9uZXctbWVzc2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1OZXctbWVzc2FnZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBlbSAyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsIi5tYWluLU5ldy1tZXNzYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDBlbSAyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/new-message/new-message.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/new-message/new-message.page.ts ***!
    \*************************************************/

  /*! exports provided: NewMessagePage */

  /***/
  function srcAppNewMessageNewMessagePageTs(module, __webpack_exports__, __webpack_require__) {
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

    var NewMessagePage = /*#__PURE__*/function () {
      function NewMessagePage(_Activatedroute, http, router) {
        _classCallCheck(this, NewMessagePage);

        this._Activatedroute = _Activatedroute;
        this.http = http;
        this.router = router;
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

          console.log(this.uid);
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

            _this2.router.navigate(["/chat/tabs2"]);
          });
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
      }];
    };

    NewMessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-message',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-message.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-message/new-message.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-message.page.scss */
      "./src/app/new-message/new-message.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], NewMessagePage);
    /***/
  }
}]);
//# sourceMappingURL=new-message-new-message-module-es5.js.map