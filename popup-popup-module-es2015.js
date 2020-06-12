(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["popup-popup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/popup/popup.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/popup/popup.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-pop-background\">\r\n\r\n\r\n  <div class=\"main-pop\">\r\n\r\n\r\n    <div class=\"pop-grids\">\r\n      <div class=\"modal-grid\">\r\n\r\n        <div class=\"profile-picture-modal\">\r\n          <img src={{picture}} class=\"image-profile\">\r\n\r\n        </div>\r\n\r\n        <div class=\"profile-name-modal\">\r\n          <span class=\"name\">{{name}}</span>\r\n          <span class=\"not-verified\">Verified</span>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"siderbar-icon-data\">\r\n        <div class=\"side-bar-icon\">\r\n          <div class=\"group-text-image\">\r\n            <img src=\"../../assets/Images/popchat.png\" class=\"chat-bubble\" routerLink=\"/new-message/{{uid}}/{{name}}\">\r\n            <span class=\"name-icon\">Chat</span>\r\n          </div>\r\n          <div class=\"group-text-image\" (click)=\"getFavorite()\">\r\n            <img src=\"../../assets/Images/star.png\" class=\"chat-bubble\">\r\n            <span class=\"name-icon\">Favorite</span>\r\n          </div>\r\n          <div class=\"group-text-image\">\r\n            <img src=\"../../assets/Images/sign.png\" class=\"chat-bubble\" (click)=\"backClicked()\">\r\n          </div>\r\n          <div class=\"group-text-image mt-3\">\r\n            <span class=\"name-icon\">Never See again</span>\r\n            <img src=\"../../assets/Images/feeling.png\" class=\"chat-bubble mb-3\">\r\n          </div>\r\n\r\n          <div class=\"group-text-image\">\r\n            <span class=\"name-icon\">Report to admin</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"sidebar-content\">\r\n          <p class=\"detail-data\">FullName:<br><span class=\"output-text\">{{name}}</span></p>\r\n\r\n          <p class=\"detail-data\">Gender:<br><span class=\"output-text\"\r\n            *ngFor=\"let genders of genders\">{{genders.value}}</span></p>\r\n          \r\n          <p class=\"detail-data\">Actvities:<br><span class=\"output-text\"\r\n            *ngFor=\"let activity of activity\">{{activity.value}}</span></p>\r\n          <p class=\"detail-data\">I Want To Be Contacted By:<br><span class=\"output-text\"\r\n              *ngFor=\"let actvities of contact\">{{actvities.value}}</span></p>\r\n             \r\n          <p class=\"detail-data\" *ngIf=\"musics\">Favorite Music:<br><span class=\"output-text\"\r\n              *ngFor=\"let Music of musics\">{{Music.value}}</span></p>\r\n          <p class=\"detail-data\" *ngIf=\"book\">Favorate Books:<br><span class=\"output-text\"\r\n              *ngFor=\"let books of book\">{{books.value}}</span></p>\r\n          \r\n              <p class=\"detail-data\" *ngIf=\"movie\">Favorate Movies:<br><span class=\"output-text\"\r\n                *ngFor=\"let movies of movie\">{{movies.value}}</span></p>\r\n                <p class=\"detail-data\" *ngIf=\"day\">How you spend your days?:<br><span class=\"output-text\"\r\n                  *ngFor=\"let days of day\">{{days.value}}</span></p>\r\n                  <p class=\"detail-data\" *ngIf=\"cancels\">If plan get cancels?:<br><span class=\"output-text\"\r\n                    *ngFor=\"let cancel of cancels\">{{cancel.value}}</span></p>\r\n\r\n                    <p class=\"detail-data\" *ngIf=\"tends\">Firends tends to be?:<br><span class=\"output-text\"\r\n                      *ngFor=\"let tend of tends\">{{tend.value}}</span></p>\r\n                      <p class=\"detail-data\" *ngIf=\"edue\">Education Level:<br><span class=\"output-text\"\r\n                        *ngFor=\"let edue of edue\">{{edue.value}}</span></p>\r\n                        <p class=\"detail-data\" *ngIf=\"smokes\">Do you smokes:<br><span class=\"output-text\"\r\n                          *ngFor=\"let smokes of smokes\">{{smokes.value}}</span></p>\r\n                          <p class=\"detail-data\" *ngIf=\"statu\">Relationship status:<br><span class=\"output-text\"\r\n                            *ngFor=\"let statu of statu\">{{statu.value}}</span></p>\r\n                            <p class=\"detail-data\" *ngIf=\"long\">How long you live:<br><span class=\"output-text\"\r\n                              *ngFor=\"let long of long\">{{long.value}}</span></p>\r\n                            \r\n                          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/popup/popup-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/popup/popup-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PopupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPageRoutingModule", function() { return PopupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.page */ "./src/app/popup/popup.page.ts");




const routes = [
    {
        path: '',
        component: _popup_page__WEBPACK_IMPORTED_MODULE_3__["PopupPage"]
    }
];
let PopupPageRoutingModule = class PopupPageRoutingModule {
};
PopupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PopupPageRoutingModule);



/***/ }),

/***/ "./src/app/popup/popup.module.ts":
/*!***************************************!*\
  !*** ./src/app/popup/popup.module.ts ***!
  \***************************************/
/*! exports provided: PopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPageModule", function() { return PopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _popup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup-routing.module */ "./src/app/popup/popup-routing.module.ts");
/* harmony import */ var _popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup.page */ "./src/app/popup/popup.page.ts");







let PopupPageModule = class PopupPageModule {
};
PopupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _popup_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupPageRoutingModule"]
        ],
        declarations: [_popup_page__WEBPACK_IMPORTED_MODULE_6__["PopupPage"]]
    })
], PopupPageModule);



/***/ }),

/***/ "./src/app/popup/popup.page.scss":
/*!***************************************!*\
  !*** ./src/app/popup/popup.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  grid-gap: 11px;\n  margin: 1em;\n  margin-top: 1em;\n  margin-bottom: 0px;\n}\n\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.side-bar-icon {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin: 0em;\n}\n\nimg.chat-bubble {\n  width: 46%;\n  margin-top: 1em;\n}\n\n.siderbar-icon-data {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 11px;\n  /* margin: 2em; */\n  margin: 0em 1em;\n}\n\np.detail-data {\n  width: 63%;\n}\n\n.group-text-image {\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 1em;\n}\n\n.popup-chat-page {\n  margin-top: 7em;\n  margin-left: 1em;\n  text-align: justify;\n  margin-right: 1em;\n}\n\n.modal {\n  background: #000000a1;\n}\n\n.main-pop-background {\n  background-color: #000000a3;\n  background-position: center;\n  height: 100vh;\n  overflow: auto;\n}\n\n.main-pop {\n  display: block;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  /* height: 80vh; */\n  /* padding-top: 13vh; */\n  /* padding-right: 17em; */\n}\n\n.pop-grids {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 0em;\n  background-color: white;\n  margin: 6em 2em;\n  margin-bottom: 0px;\n}\n\nimg.image-profile {\n  height: 17vh;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wdXAvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxccG9wdXBcXHBvcHVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcG9wdXAvcG9wdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBRUEsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0RKOztBREdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBO0VBQ0ksVUFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURIQTtFQUNJLHFCQUFBO0FDTUo7O0FESkE7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0gsYUFBQTtFQUNBLGNBQUE7QUNPRDs7QURMQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ1FKOztBRE5BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QUROQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9wb3B1cC9wb3B1cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XG4gICBcbiAgICBncmlkLWdhcDogMTFweDtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5cbi5wcm9maWxlLW5hbWUtbW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uc2lkZS1iYXItaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBtYXJnaW46IDBlbTtcbn1cbmltZy5jaGF0LWJ1YmJsZSB7XG4gICAgd2lkdGg6IDQ2JTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG4uc2lkZXJiYXItaWNvbi1kYXRhIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgICBncmlkLWdhcDogMTFweDtcbiAgICAvKiBtYXJnaW46IDJlbTsgKi9cbiAgICBtYXJnaW46IDBlbSAxZW07XG59XG5cbnAuZGV0YWlsLWRhdGEge1xuICAgIHdpZHRoOiA2MyU7XG59XG4uZ3JvdXAtdGV4dC1pbWFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNpZGViYXItY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5wb3B1cC1jaGF0LXBhZ2Uge1xuICAgIG1hcmdpbi10b3A6IDdlbTtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG4ubW9kYWx7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMGExO1xufVxuLm1haW4tcG9wLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhMztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gaGVpZ2h0OiAxMDB2aDtcbiBvdmVyZmxvdzogYXV0bztcbn1cbi5tYWluLXBvcCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qIGhlaWdodDogODB2aDsgKi9cbiAgICAvKiBwYWRkaW5nLXRvcDogMTN2aDsgKi9cbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAxN2VtOyAqL1xufVxuLnBvcC1ncmlkcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuIFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDBlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDZlbSAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuaW1nLmltYWdlLXByb2ZpbGUge1xuICAgIGhlaWdodDogMTd2aDtcbiAgICB3aWR0aDogMTAwJTtcbn0iLCIubW9kYWwtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcbiAgZ3JpZC1nYXA6IDExcHg7XG4gIG1hcmdpbjogMWVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnByb2ZpbGUtbmFtZS1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaWRlLWJhci1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtYXJnaW46IDBlbTtcbn1cblxuaW1nLmNoYXQtYnViYmxlIHtcbiAgd2lkdGg6IDQ2JTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4uc2lkZXJiYXItaWNvbi1kYXRhIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICBncmlkLWdhcDogMTFweDtcbiAgLyogbWFyZ2luOiAyZW07ICovXG4gIG1hcmdpbjogMGVtIDFlbTtcbn1cblxucC5kZXRhaWwtZGF0YSB7XG4gIHdpZHRoOiA2MyU7XG59XG5cbi5ncm91cC10ZXh0LWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNpZGViYXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5wb3B1cC1jaGF0LXBhZ2Uge1xuICBtYXJnaW4tdG9wOiA3ZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG4ubW9kYWwge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTE7XG59XG5cbi5tYWluLXBvcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGEzO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWFpbi1wb3Age1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8qIGhlaWdodDogODB2aDsgKi9cbiAgLyogcGFkZGluZy10b3A6IDEzdmg7ICovXG4gIC8qIHBhZGRpbmctcmlnaHQ6IDE3ZW07ICovXG59XG5cbi5wb3AtZ3JpZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA2ZW0gMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmltZy5pbWFnZS1wcm9maWxlIHtcbiAgaGVpZ2h0OiAxN3ZoO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/popup/popup.page.ts":
/*!*************************************!*\
  !*** ./src/app/popup/popup.page.ts ***!
  \*************************************/
/*! exports provided: PopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPage", function() { return PopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let PopupPage = class PopupPage {
    constructor(ConfigService, _Activatedroute, _location, http) {
        this.ConfigService = ConfigService;
        this._Activatedroute = _Activatedroute;
        this._location = _location;
        this.http = http;
        this.postman = {};
        this.scope = [];
    }
    ngOnInit() {
        this.itrs = JSON.parse(localStorage.getItem("currentUser"));
        this.sub = this._Activatedroute.paramMap.subscribe((params) => {
            this.uid = params.get("uid");
        });
        this.http.get("https://gowebtutorial.com/api/json/user/" + this.uid).subscribe((data) => {
            this.post = data;
            this.name = this.post.name; //
            this.picture = this.post.picture.url; //
            this.long = this.post.field_long_in_city.length;
            this.genders = this.post.field_gender.und; //
            this.statu = this.post.field_relationship_status.und; //
            this.smokes = this.post.field_smoke.und; //
            this.activity = this.post.field_activities_interests.und; //
            this.edue = this.post.field_education_level.und; //
            this.tends = this.post.field_friends_tend_to_be.und; //
            this.cancels = this.post.field_plans_get_cancelled.und; //
            this.day = this.post.field_spend_your_days.und; //
            this.movie = this.post.field_favorite_movies.und; //
            this.musics = this.post.field_favorite_music.und; //
            this.book = this.post.field_favorite_books.und; //
            this.friend = this.post.field_talk_about.und;
            this.contact = this.post.field_gender.und; //
            this.favInfo = [
                {
                    name: this.post.name,
                    picture: this.post.picture.url,
                    activities: this.post.field_activities_interests.und,
                },
            ];
            console.log(this.post);
        });
    }
    backClicked() {
        this._location.back();
    }
    getFavorite() {
        this.scope = [];
        this.http
            .get("http://gowebtutorial.com/api/json/user/" + this.itrs.user.uid)
            .subscribe((users) => {
            this.respnoseJSON = users;
            if (this.respnoseJSON.field_favorite_users.und) {
                console.log("value exists");
                this.scope = JSON.parse(this.respnoseJSON.field_favorite_users["und"][0]["value"]);
                this.scope.push(this.favInfo);
            }
            else {
                console.log("value doesnt exist");
                this.scope.push(this.favInfo);
            }
            this.addFavorite();
        });
    }
    addFavorite() {
        // Add
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]()
            .set("X-CSRF-Token", this.itrs.token)
            .set("Content-Type", "application/json")
            .set("X-Cookie", this.itrs.session_name + "=" + this.itrs.sessid);
        const requestOptions = {
            headers: headers,
            withCredentials: true,
        };
        // Add entry into favorites
        this.responseString = JSON.stringify(this.scope);
        console.log(this.scope);
        this.http
            .put("http://gowebtutorial.com/api/json/user/" + this.itrs.user.uid, {
            field_favorite_users: {
                und: [
                    {
                        value: this.responseString,
                    },
                ],
            },
        }, requestOptions)
            .subscribe((favorate) => { });
    }
};
PopupPage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
PopupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-popup",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/popup/popup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup.page.scss */ "./src/app/popup/popup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], PopupPage);



/***/ })

}]);
//# sourceMappingURL=popup-popup-module-es2015.js.map