function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personal-chat-personal-chat-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-chat/personal-chat.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-chat/personal-chat.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPersonalChatPersonalChatPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>personalChat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background-card\">\n  <div class=\"header-persona-chat\" routerLink=\"/chat/tabs2\">\n    <div class=\"arrow\">\n\n      <img src=\"../../assets/Images/asset-1.png\" class=\"arrow-image\">\n    </div>\n    <div class=\"image\">\n      <img src=\"../../assets/Images/user_-8.png\" class=\"image-chat\">\n    </div>\n    <div class=\"name\">\n      <p class=\"chat-name\">Vibrant_chef</p>\n    </div>\n  </div>\n\n  <div class=\"chat-time\"></div>\n    <div class=\"left-chat\">\n      <p class=\"chat-content\">How are you?</p>\n    </div>\n    <div class=\"right-chat\">\n      <p class=\"chat-content\">Fine you say</p>\n    </div>\n\n\n    <div class=\"chat-time\"></div>\n    <div class=\"left-chat\">\n      <p class=\"chat-content\">'Lets meet tomorrow at 8'</p>\n    </div>\n    <div class=\"right-chat\">\n      <p class=\"chat-content\">Thats, great...</p>\n    </div>\n</ion-content>\n\n\n<ion-content>\n  <div class=\"text-message-writer\">\n\n    <input type=\"text\" id=\"chat\" name=\"chat\" class=\"chat-field\" placeholder=\"Type your message here\">\n    <img src=\"../../assets/Images/send.png\" class=\"img-send\">\n  </div>\n\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/personal-chat/personal-chat-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/personal-chat/personal-chat-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: PersonalChatPageRoutingModule */

  /***/
  function srcAppPersonalChatPersonalChatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalChatPageRoutingModule", function () {
      return PersonalChatPageRoutingModule;
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


    var _personal_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./personal-chat.page */
    "./src/app/personal-chat/personal-chat.page.ts");

    var routes = [{
      path: '',
      component: _personal_chat_page__WEBPACK_IMPORTED_MODULE_3__["PersonalChatPage"]
    }];

    var PersonalChatPageRoutingModule = function PersonalChatPageRoutingModule() {
      _classCallCheck(this, PersonalChatPageRoutingModule);
    };

    PersonalChatPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PersonalChatPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/personal-chat/personal-chat.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/personal-chat/personal-chat.module.ts ***!
    \*******************************************************/

  /*! exports provided: PersonalChatPageModule */

  /***/
  function srcAppPersonalChatPersonalChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalChatPageModule", function () {
      return PersonalChatPageModule;
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


    var _personal_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./personal-chat-routing.module */
    "./src/app/personal-chat/personal-chat-routing.module.ts");
    /* harmony import */


    var _personal_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./personal-chat.page */
    "./src/app/personal-chat/personal-chat.page.ts");

    var PersonalChatPageModule = function PersonalChatPageModule() {
      _classCallCheck(this, PersonalChatPageModule);
    };

    PersonalChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _personal_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonalChatPageRoutingModule"]],
      declarations: [_personal_chat_page__WEBPACK_IMPORTED_MODULE_6__["PersonalChatPage"]]
    })], PersonalChatPageModule);
    /***/
  },

  /***/
  "./src/app/personal-chat/personal-chat.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/personal-chat/personal-chat.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPersonalChatPersonalChatPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-persona-chat {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 2fr 4fr 16fr;\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  margin-top: 1em;\n}\n\nimg.image-chat {\n  height: 7vh;\n}\n\np.chat-name {\n  margin-bottom: 0px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.text-message-writer {\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  position: absolute;\n  bottom: 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\ninput#chat {\n  width: 80%;\n  border-radius: 13px;\n  border: 1px solid;\n  margin: 11px;\n  padding-left: 15px;\n  font-size: 15px;\n}\n\nimg.img-send {\n  height: 3vh;\n}\n\n.chat-time {\n  display: flex;\n  /* justify-content: center; */\n  justify-content: center;\n  margin: 2em;\n  font-size: 14px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.left-chat {\n  background-color: #0182FF;\n  width: 49%;\n  border-radius: 50px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  text-align: center;\n  margin-left: 6px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 13px;\n}\n\n.right-chat {\n  float: right;\n  background-color: #E7E7EB;\n  width: 49%;\n  border-radius: 50px;\n  text-align: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 1em;\n  font-size: 13px;\n}\n\np.chat-content {\n  margin-bottom: 0px;\n  padding: 5px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.background-card {\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwtY2hhdC9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxwZXJzb25hbC1jaGF0XFxwZXJzb25hbC1jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGVyc29uYWwtY2hhdC9wZXJzb25hbC1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBRUkseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpBO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDT0o7O0FESkE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDUUo7O0FETEE7RUFFSSxrQ0FBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvcGVyc29uYWwtY2hhdC9wZXJzb25hbC1jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItcGVyc29uYS1jaGF0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNGZyIDE2ZnI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuaW1nLmltYWdlLWNoYXQge1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbn1cclxucC5jaGF0LW5hbWUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4udGV4dC1tZXNzYWdlLXdyaXRlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW5wdXQjY2hhdCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luOiAxMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbmltZy5pbWctc2VuZCB7XHJcbiAgICBoZWlnaHQ6IDN2aDtcclxufVxyXG4uY2hhdC10aW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5sZWZ0LWNoYXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxODJGRjtcclxuICAgIHdpZHRoOiA0OSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ucmlnaHQtY2hhdCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFN0VCO1xyXG4gICAgd2lkdGg6IDQ5JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbnAuY2hhdC1jb250ZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG59XHJcbi5iYWNrZ3JvdW5kLWNhcmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufSIsIi5oZWFkZXItcGVyc29uYS1jaGF0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNGZyIDE2ZnI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbmltZy5pbWFnZS1jaGF0IHtcbiAgaGVpZ2h0OiA3dmg7XG59XG5cbnAuY2hhdC1uYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGV4dC1tZXNzYWdlLXdyaXRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW5wdXQjY2hhdCB7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW46IDExcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5pbWcuaW1nLXNlbmQge1xuICBoZWlnaHQ6IDN2aDtcbn1cblxuLmNoYXQtdGltZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5sZWZ0LWNoYXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4MkZGO1xuICB3aWR0aDogNDklO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnJpZ2h0LWNoYXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFN0U3RUI7XG4gIHdpZHRoOiA0OSU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbnAuY2hhdC1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYmFja2dyb3VuZC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/personal-chat/personal-chat.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/personal-chat/personal-chat.page.ts ***!
    \*****************************************************/

  /*! exports provided: PersonalChatPage */

  /***/
  function srcAppPersonalChatPersonalChatPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalChatPage", function () {
      return PersonalChatPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PersonalChatPage = /*#__PURE__*/function () {
      function PersonalChatPage() {
        _classCallCheck(this, PersonalChatPage);
      }

      _createClass(PersonalChatPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PersonalChatPage;
    }();

    PersonalChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-personal-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./personal-chat.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-chat/personal-chat.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./personal-chat.page.scss */
      "./src/app/personal-chat/personal-chat.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PersonalChatPage);
    /***/
  }
}]);
//# sourceMappingURL=personal-chat-personal-chat-module-es5.js.map