(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["popup-popup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/popup/popup.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/popup/popup.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"main-pop-background\">\n\n\n<div class=\"main-pop\">\n\n\n  <div class=\"pop-grids\">\n  <div class=\"modal-grid\">\n       \n    <div class=\"profile-picture-modal\">\n     <img src=\"../../assets/Images/p1.jpg\" class=\"image-profile\">\n\n    </div>\n\n    <div class=\"profile-name-modal\">\n      <span class=\"name\">{{name}}</span>\n      <span class=\"not-verified\">Verified</span>\n\n   </div>\n\n</div>\n\n<div class=\"siderbar-icon-data\">\n<div class=\"side-bar-icon\">\n<div class=\"group-text-image\">\n<img src=\"../../assets/Images/popchat.png\" class=\"chat-bubble\" routerLink=\"/chat/tabs2\">\n<span class=\"name-icon\">Chat</span>\n</div>\n<div class=\"group-text-image\">\n<img src=\"../../assets/Images/star.png\" class=\"chat-bubble\">\n<span class=\"name-icon\">Favorite</span>\n</div>\n<div class=\"group-text-image\">\n<img src=\"../../assets/Images/sign.png\" class=\"chat-bubble\" (click)=\"backClicked()\">\n</div>\n<div class=\"group-text-image mt-3\">\n<span class=\"name-icon\">Never See again</span>\n<img src=\"../../assets/Images/feeling.png\" class=\"chat-bubble mb-3\">\n</div>\n\n<div class=\"group-text-image\">\n<span class=\"name-icon\">Report to admin</span>\n</div>\n</div>\n<div class=\"sidebar-content\">\n<p class=\"detail-data\">FullName:<br><span class=\"output-text\">{{name}}</span></p>\n<p class=\"detail-data\">I Want To Be Contacted By:<br><span class=\"output-text\" *ngFor=\"let actvities of contact\" >{{actvities}}</span></p>\n<p class=\"detail-data\" *ngIf=\"musics\">Favorate Music:<br><span class=\"output-text\" *ngFor=\"let Music of musics\">{{Music.value}}</span></p>\n<p class=\"detail-data\" *ngIf=\"book\">Favorate Books:<br><span class=\"output-text\"  *ngFor=\"let books of book\">{{books.value}}</span></p>\n<p class=\"detail-data\" *ngIf=\"statu\">Relationship status:<br><span class=\"output-text\"*ngFor=\"let status of statu\">{{status.value}}</span></p>\n</div>\n</div>\n</div>\n</div>\n</div>\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  grid-gap: 11px;\n  margin: 1em;\n  margin-top: 1em;\n  margin-bottom: 0px;\n}\n\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.side-bar-icon {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin: 0em;\n}\n\nimg.chat-bubble {\n  width: 46%;\n  margin-top: 1em;\n}\n\n.siderbar-icon-data {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 11px;\n  /* margin: 2em; */\n  margin: 0em 1em;\n}\n\n.group-text-image {\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.popup-chat-page {\n  margin-top: 7em;\n  margin-left: 1em;\n  text-align: justify;\n  margin-right: 1em;\n}\n\n.modal {\n  background: #000000a1;\n}\n\n.main-pop-background {\n  background-color: #000000a3;\n  background-position: center;\n  height: 100vh;\n  overflow: auto;\n}\n\n.main-pop {\n  display: block;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  /* height: 80vh; */\n  /* padding-top: 13vh; */\n  /* padding-right: 17em; */\n}\n\n.pop-grids {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 0em;\n  background-color: white;\n  margin: 6em 2em;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wdXAvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxccG9wdXBcXHBvcHVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcG9wdXAvcG9wdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBRUEsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0RKOztBREdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERBO0VBQ0kscUJBQUE7QUNJSjs7QURGQTtFQUNJLDJCQUFBO0VBQ0EsMkJBQUE7RUFDSCxhQUFBO0VBQ0EsY0FBQTtBQ0tEOztBREhBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDTUo7O0FESkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcG9wdXAvcG9wdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcclxuICAgXHJcbiAgICBncmlkLWdhcDogMTFweDtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5cclxuLnByb2ZpbGUtbmFtZS1tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zaWRlLWJhci1pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luOiAwZW07XHJcbn1cclxuaW1nLmNoYXQtYnViYmxlIHtcclxuICAgIHdpZHRoOiA0NiU7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuLnNpZGVyYmFyLWljb24tZGF0YSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xyXG4gICAgZ3JpZC1nYXA6IDExcHg7XHJcbiAgICAvKiBtYXJnaW46IDJlbTsgKi9cclxuICAgIG1hcmdpbjogMGVtIDFlbTtcclxufVxyXG5cclxuXHJcbi5ncm91cC10ZXh0LWltYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5zaWRlYmFyLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucG9wdXAtY2hhdC1wYWdlIHtcclxuICAgIG1hcmdpbi10b3A6IDdlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuLm1vZGFse1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMGExO1xyXG59XHJcbi5tYWluLXBvcC1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhMztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuIGhlaWdodDogMTAwdmg7XHJcbiBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ubWFpbi1wb3Age1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyogaGVpZ2h0OiA4MHZoOyAqL1xyXG4gICAgLyogcGFkZGluZy10b3A6IDEzdmg7ICovXHJcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAxN2VtOyAqL1xyXG59XHJcbi5wb3AtZ3JpZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMGVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDZlbSAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn0iLCIubW9kYWwtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcbiAgZ3JpZC1nYXA6IDExcHg7XG4gIG1hcmdpbjogMWVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnByb2ZpbGUtbmFtZS1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaWRlLWJhci1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtYXJnaW46IDBlbTtcbn1cblxuaW1nLmNoYXQtYnViYmxlIHtcbiAgd2lkdGg6IDQ2JTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4uc2lkZXJiYXItaWNvbi1kYXRhIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICBncmlkLWdhcDogMTFweDtcbiAgLyogbWFyZ2luOiAyZW07ICovXG4gIG1hcmdpbjogMGVtIDFlbTtcbn1cblxuLmdyb3VwLXRleHQtaW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2lkZWJhci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wb3B1cC1jaGF0LXBhZ2Uge1xuICBtYXJnaW4tdG9wOiA3ZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG4ubW9kYWwge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTE7XG59XG5cbi5tYWluLXBvcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGEzO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWFpbi1wb3Age1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8qIGhlaWdodDogODB2aDsgKi9cbiAgLyogcGFkZGluZy10b3A6IDEzdmg7ICovXG4gIC8qIHBhZGRpbmctcmlnaHQ6IDE3ZW07ICovXG59XG5cbi5wb3AtZ3JpZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA2ZW0gMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59Il19 */");

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let PopupPage = class PopupPage {
    constructor(ConfigService, _Activatedroute, _location) {
        this.ConfigService = ConfigService;
        this._Activatedroute = _Activatedroute;
        this._location = _location;
        this.postman = {};
    }
    ngOnInit() {
        this.sub = this._Activatedroute.paramMap.subscribe((params) => {
            this.uid = params.get("uid");
        });
        this.ConfigService.getUser(this.uid).subscribe((data) => {
            this.post = data;
            console.log(data);
            this.name = this.post.name;
            this.picture = this.post.picture.url;
            this.long = this.post.field_long_in_city.length;
            this.genders = this.post.field_gender.und;
            this.statu = this.post.field_relationship_status.und;
            this.smokes = this.post.field_smoke.und;
            this.activity = this.post.field_activities_interests.und;
            this.edue = this.post.field_education_level.und;
            this.tends = this.post.field_friends_tend_to_be.und;
            this.cancels = this.post.field_plans_get_cancelled.und;
            this.day = this.post.field_spend_your_days.und;
            this.movie = this.post.field_favorite_movies.und;
            this.musics = this.post.field_favorite_music.und;
            this.book = this.post.field_favorite_books.und;
            this.friend = this.post.field_talk_about.und;
            this.contact = this.post.field_gender.und;
        });
    }
    backClicked() {
        this._location.back();
    }
};
PopupPage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
PopupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/popup/popup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup.page.scss */ "./src/app/popup/popup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
], PopupPage);



/***/ })

}]);
//# sourceMappingURL=popup-popup-module-es2015.js.map