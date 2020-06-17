(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigationbar-edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigationbar/edit-profile/edit-profile.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigationbar/edit-profile/edit-profile.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-background\">\r\n\r\n  <div class=\"second-background\">\r\n    <div class=\"third-desktop\">\r\n      <div class=\"modal-grid\">\r\n\r\n        <div class=\"profile-picture-modal\">\r\n          <img src=\"{{picture}}\" class=\"image-profile\">\r\n\r\n        </div>\r\n\r\n        <div class=\"profile-name-modal\">\r\n          <span class=\"name\">{{name}}</span>\r\n\r\n        </div>\r\n        <img src=\"../../assets/Images/cross.png\" class=\"cross-image\" (click)=\"backClicked()\">\r\n      </div>\r\n\r\n      <div class=\"sidebar-content\">\r\n        <p class=\"detail-data\">FullName:<br><span class=\"output-text\">{{fname}} {{lname}}</span></p>\r\n        <!-- <p class=\"detail-data-activity\"><br><span class=\"output-text\"\r\n        *ngFor=\"let actvities of activity\"></span></p> -->\r\n        <p class=\"detail-data\">Email:<br><span class=\"output-text\">{{Email}}</span></p>\r\n        <p class=\"detail-data\">Date of Birth:<br><span class=\"output-text\">{{DOB}}</span></p>\r\n        <p class=\"detail-data\">Languages:<br><span class=\"output-text\">Hindi,English</span></p>\r\n        <div class=\"activity\">\r\n          <div class=\"activity-heading\">\r\n            Activities:\r\n\r\n          </div>\r\n          <div class=\"activity-content\">\r\n\r\n            <div *ngFor=\"let actvities of activity\">{{actvities.value}}...</div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"continue-button\">\r\n        Add More Info\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/navigationbar/edit-profile/edit-profile-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/navigationbar/edit-profile/edit-profile-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: EditProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function() { return EditProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/navigationbar/edit-profile/edit-profile.page.ts");




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/navigationbar/edit-profile/edit-profile.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/navigationbar/edit-profile/edit-profile.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile-routing.module */ "./src/app/navigationbar/edit-profile/edit-profile-routing.module.ts");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/navigationbar/edit-profile/edit-profile.page.ts");







let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"]
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })
], EditProfilePageModule);



/***/ }),

/***/ "./src/app/navigationbar/edit-profile/edit-profile.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/navigationbar/edit-profile/edit-profile.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  font-size: 18px;\n}\n\n.modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 3fr 1fr;\n  grid-gap: 11px;\n}\n\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.sidebar-content {\n  margin-top: 1em;\n}\n\n.main-background {\n  background-color: #00000085;\n  height: 100vh;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.second-background {\n  background-color: white;\n  margin: 1em;\n}\n\nimg.cross-image {\n  width: 60%;\n}\n\n.detail-data-activity {\n  /* font-family: 'Open Sans', sans-serif; */\n  /* font-style: normal; */\n  /* display: block; */\n  display: -webkit-box;\n  /* max-width: 100%; */\n  /* height: 43px; */\n  /* margin: 0 auto; */\n  font-size: 14px;\n  /* line-height: 1; */\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.third-desktop {\n  margin: 2em;\n}\n\n.activity {\n  /* display: flex; */\n  /* flex-direction: column; */\n  /* display: flex; */\n  /* font-family: 'Open Sans', sans-serif; */\n  /* font-style: normal; */\n  display: block;\n  display: -webkit-box;\n  max-width: 100%;\n  height: 43px;\n  /* margin: 0 auto; */\n  font-size: 14px;\n  /* line-height: 1; */\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbmJhci9lZGl0LXByb2ZpbGUvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxcbmF2aWdhdGlvbmJhclxcZWRpdC1wcm9maWxlXFxlZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9uYXZpZ2F0aW9uYmFyL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUVBLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb25iYXIvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGludWUtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLm1vZGFsLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmciAxZnI7XHJcbiAgICBncmlkLWdhcDogMTFweDtcclxufVxyXG5cclxuLnByb2ZpbGUtbmFtZS1tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5cclxuLm1haW4tYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY29uZC1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbn1cclxuXHJcbmltZy5jcm9zcy1pbWFnZSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4uZGV0YWlsLWRhdGEtYWN0aXZpdHkge1xyXG4gICAgLyogZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyAqL1xyXG4gICAgLyogZm9udC1zdHlsZTogbm9ybWFsOyAqL1xyXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC8qIG1heC13aWR0aDogMTAwJTsgKi9cclxuICAgIC8qIGhlaWdodDogNDNweDsgKi9cclxuICAgIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLyogbGluZS1oZWlnaHQ6IDE7ICovXHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4udGhpcmQtZGVza3RvcCB7XHJcbiAgICBtYXJnaW46IDJlbTtcclxufVxyXG5cclxuLmFjdGl2aXR5IHtcclxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xyXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cclxuXHJcbiAgICAvKiBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7ICovXHJcbiAgICAvKiBmb250LXN0eWxlOiBub3JtYWw7ICovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgLyogbWFyZ2luOiAwIGF1dG87ICovXHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAvKiBsaW5lLWhlaWdodDogMTsgKi9cclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG59IiwiLmNvbnRpbnVlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tb2RhbC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyIDFmcjtcbiAgZ3JpZC1nYXA6IDExcHg7XG59XG5cbi5wcm9maWxlLW5hbWUtbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc2lkZWJhci1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4ubWFpbi1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg1O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2Vjb25kLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxZW07XG59XG5cbmltZy5jcm9zcy1pbWFnZSB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5kZXRhaWwtZGF0YS1hY3Rpdml0eSB7XG4gIC8qIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgKi9cbiAgLyogZm9udC1zdHlsZTogbm9ybWFsOyAqL1xuICAvKiBkaXNwbGF5OiBibG9jazsgKi9cbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIG1heC13aWR0aDogMTAwJTsgKi9cbiAgLyogaGVpZ2h0OiA0M3B4OyAqL1xuICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cbiAgZm9udC1zaXplOiAxNHB4O1xuICAvKiBsaW5lLWhlaWdodDogMTsgKi9cbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnRoaXJkLWRlc2t0b3Age1xuICBtYXJnaW46IDJlbTtcbn1cblxuLmFjdGl2aXR5IHtcbiAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cbiAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgLyogZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyAqL1xuICAvKiBmb250LXN0eWxlOiBub3JtYWw7ICovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQzcHg7XG4gIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xuICBmb250LXNpemU6IDE0cHg7XG4gIC8qIGxpbmUtaGVpZ2h0OiAxOyAqL1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/navigationbar/edit-profile/edit-profile.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/navigationbar/edit-profile/edit-profile.page.ts ***!
  \*****************************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let EditProfilePage = class EditProfilePage {
    constructor(_location) {
        this._location = _location;
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
            this.picture = this.itrs.user.picture.url;
            this.userlogged = JSON.parse(localStorage.getItem("Signinuser"));
            // console.log(this.itrs);
        }
    }
    backClicked() {
        this._location.back();
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigationbar/edit-profile/edit-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/navigationbar/edit-profile/edit-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], EditProfilePage);



/***/ })

}]);
//# sourceMappingURL=navigationbar-edit-profile-edit-profile-module-es2015.js.map