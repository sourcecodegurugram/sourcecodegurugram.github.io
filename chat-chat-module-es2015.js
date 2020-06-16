(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-tabs class=\"background-card\">\r\n  <ion-tab-bar slot=\"bottom\"  class=\"background-card\">\r\n    <ion-tab-button tab=\"tabs2\"  class=\"background-card\">\r\n      <ion-icon name=\"chatbubbles\"></ion-icon>\r\n      <ion-label>Chat</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button  tab=\"tabs3\"  class=\"background-card\">\r\n      <ion-icon name=\"star\"></ion-icon>\r\n      <ion-label>Favorite</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"searchTab\" class=\"background-card\">\r\n      <ion-icon name=\"search-sharp\"></ion-icon>\r\n      <ion-label>Search</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n  \r\n\r\n</ion-tabs>");

/***/ }),

/***/ "./src/app/chat/chat-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function() { return ChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");





const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_4__["ChatPage"],
        children: [
            { path: 'searchTab',
                loadChildren: () => Promise.all(/*! import() | searchTab-searchTab-module */[__webpack_require__.e("default~chat-chat-module~detail-detail-module~favorate-popup-favorate-popup-module~find-friends-find~f01dcdfd"), __webpack_require__.e("default~chat-chat-module~detail-detail-module~favorate-popup-favorate-popup-module~find-friends-find~c7e765fd"), __webpack_require__.e("searchTab-searchTab-module")]).then(__webpack_require__.bind(null, /*! ../searchTab/searchTab.module */ "./src/app/searchTab/searchTab.module.ts")).then(m => m.SearchTabPageModule) },
            {
                path: 'tabs2',
                loadChildren: () => Promise.all(/*! import() | tabs2-tabs2-module */[__webpack_require__.e("default~chat-chat-module~detail-detail-module~favorate-popup-favorate-popup-module~find-friends-find~f01dcdfd"), __webpack_require__.e("default~chat-chat-module~detail-detail-module~favorate-popup-favorate-popup-module~find-friends-find~c7e765fd"), __webpack_require__.e("tabs2-tabs2-module")]).then(__webpack_require__.bind(null, /*! ../tabs2/tabs2.module */ "./src/app/tabs2/tabs2.module.ts")).then(m => m.Tabs2PageModule)
            },
            { path: 'tabs3',
                loadChildren: () => Promise.all(/*! import() | tabs3-tabs3-module */[__webpack_require__.e("default~chat-chat-module~detail-detail-module~favorate-popup-favorate-popup-module~find-friends-find~f01dcdfd"), __webpack_require__.e("default~chat-chat-module~detail-detail-module~favorate-popup-favorate-popup-module~find-friends-find~c7e765fd"), __webpack_require__.e("tabs3-tabs3-module")]).then(__webpack_require__.bind(null, /*! ../tabs3/tabs3.module */ "./src/app/tabs3/tabs3.module.ts")).then(m => m.Tabs3PageModule) }
        ]
    },
    {
        path: '',
        redirectTo: '/searchTab',
        pathMatch: 'full'
    },
    {
        path: 'chat',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_4__["ChatPage"]
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/chat/chat-routing.module.ts");
/* harmony import */ var _navigationbar_navigationbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navigationbar/navigationbar.module */ "./src/app/navigationbar/navigationbar.module.ts");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");








let ChatPageModule = class ChatPageModule {
};
ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"],
            _navigationbar_navigationbar_module__WEBPACK_IMPORTED_MODULE_6__["NavigationbarModule"]
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_7__["ChatPage"]]
    })
], ChatPageModule);



/***/ }),

/***/ "./src/app/chat/chat.page.scss":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-card {\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxjaGF0XFxjaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhdC9jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtDQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtY2FyZFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59IiwiLmJhY2tncm91bmQtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/chat/chat.page.ts":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatPage = class ChatPage {
    constructor() { }
    ngOnInit() {
    }
};
ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.page.scss */ "./src/app/chat/chat.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChatPage);



/***/ })

}]);
//# sourceMappingURL=chat-chat-module-es2015.js.map