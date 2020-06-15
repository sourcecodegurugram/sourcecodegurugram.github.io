(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header ></ion-header>\r\n\r\n<div class=\"background\">\r\n  <div class=\"tittle-home-page\">\r\n    <ion-card-subtitle class=\"tittle-home\">Recent members in you area</ion-card-subtitle>\r\n  </div>\r\n\r\n  \r\n\r\n  <div class=\"member-cards\" *ngFor=\"let posts of  postse\" routerLink=\"/detail/{{posts.name}}/{{posts.mail}}/{{posts.uid}}\">\r\n    <div class=\"member-card-image\">\r\n    \r\n \r\n<img src=\"../../assets/Images/user_-4.png\" alt=\"\" srcset=\"\" class=\"user-image\">\r\n    </div>\r\n    <div class=\"member-card-text\">\r\n      <p class=\"name card-item\">{{posts.name}}<ion-badge slot=\"end\"  color=\"light\" *ngIf=\"posts.Pets.length==0\">Parent</ion-badge><ion-badge slot=\"end\"  color=\"light\" *ngIf=\"posts.Pets.length>0\">Pet Owner</ion-badge></p>\r\n      <ion-label class=\"hobbies card-item\"><span class=\"left-heading\" >Activities:&nbsp;</span>{{posts.Activity | slice:3:5}}... </ion-label>\r\n      <ion-badge slot=\"end\"  color=\"light\">{{posts.Activity.length}}</ion-badge><br>\r\n      <!-- <ion-label class=\"hobbies card-item\" ><span class=\"left-heading\">Activities:</span>{{posts.Activity | slice:-2:-1}}</ion-label>\r\n      <ion-badge slot=\"end\"  color=\"light\"></ion-badge> -->\r\n      <p class=\"distance card-item\"><span class=\"left-heading\">Distance:</span>1 miles away</p> \r\n    </div>\r\n  </div>\r\n \r\n</div>\r\n\r\n<div class=\"Load-more\" *ngIf=\"showmore\" >Load More</div>\r\n\r\n\r\n  <!-- The Modal -->\r\n  <div class=\"modal\" id=\"myModal\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n      \r\n        <!-- Modal Header -->\r\n        <div class=\"modal-header\">\r\n         \r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p class=\"modal-para\">Not4Dating wants to help you create communities, build meaningful relationships and feel truly connected to others</p>\r\n           <h5 class=\"whos-on-site\">Who’s on the site?</h5>\r\n          <div class=\"checkbox-popup\">\r\n            <img src=\"../../assets/Images/check.png\" class=\"check-box\">\r\n            <p class=\"check-box-text\">Our youngest member is 18,our oldest member is 85</p>\r\n          </div>\r\n          <div class=\"checkbox-popup\">\r\n            <img src=\"../../assets/Images/check.png\" class=\"check-box\">\r\n            <p class=\"check-box-text\">64% In a Relationship, 36% Not in a Relationship  </p>\r\n          </div>\r\n\r\n          <div class=\"button-flex\">\r\n            <button type=\"button\" class=\"btn btn-primary register-button\" routerLink=\"/register\">Register Now</button>\r\n            <button type=\"button\" class=\"btn btn-primary login-button\">Login Now</button>\r\n          </div>\r\n        </div>\r\n       \r\n      \r\n        \r\n       \r\n        \r\n      </div>\r\n    </div>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _replace_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../replace.pipe */ "./src/app/replace.pipe.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _replace_pipe__WEBPACK_IMPORTED_MODULE_7__["ReplacePipe"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\nion-card.ios.hydrated {\n  margin-top: 0px;\n}\n\n.tittle-home-page {\n  padding: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  padding-top: 6em;\n}\n\n.tittle-home {\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: capitalize;\n}\n\n.member-cards {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  background-color: white;\n  margin: 20px;\n  align-items: center;\n  border: 1px solid #717171;\n  margin-top: 0px;\n}\n\np.card-item {\n  margin-bottom: 0px;\n  margin-top: -2px;\n  font-size: 14px;\n  color: #707070;\n}\n\np.name.card-item {\n  font-size: 16px;\n}\n\n.hobbies {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n  color: #707070;\n}\n\n.activities {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n  display: flex;\n  flex-direction: row;\n}\n\n.distance {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n}\n\nimg.number-mage {\n  width: 9%;\n}\n\n.left-heading {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n}\n\nimg.user-image {\n  width: 100%;\n}\n\n.modal-backdrop {\n  height: auto !important;\n}\n\n.modal-backdrop.show {\n  opacity: 1;\n}\n\np.modal-para {\n  text-align: justify;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  word-spacing: -1px;\n}\n\n.checkbox-popup {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n\nimg.check-box {\n  margin-right: 10px;\n  text-align: center;\n}\n\nh5.whos-on-site {\n  font-size: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n\n.button-flex {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.register-button {\n  background-color: #5ADB00;\n  height: 40px;\n}\n\nbutton.btn.btn-primary.login-button {\n  height: 40px;\n}\n\np.check-box-text {\n  margin-bottom: 0px;\n}\n\n.member-card-text {\n  margin-left: 3vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: 3vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0FDRkY7O0FESUE7RUFFSSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURHQTtFQUNFLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQUY7O0FERUE7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtBQ0NGOztBRENBO0VBRUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0YsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtBQ0RGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0FDREY7O0FESUE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNERjs7QURHQTtFQUNFLFNBQUE7QUNBRjs7QURFQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUVFLFdBQUE7QUNDRjs7QURDQTtFQUVFLHVCQUFBO0FDQ0Y7O0FEQ0E7RUFFRSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QUREQTtFQUNFLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0lGOztBREZBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNLRjs7QURIQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ01GOztBREpBO0VBQ0UsWUFBQTtBQ09GOztBRExBO0VBQ0Usa0JBQUE7QUNRRjs7QUROQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbn1cclxuLmJhY2tncm91bmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbmlvbi1jYXJkLmlvcy5oeWRyYXRlZCB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi50aXR0bGUtaG9tZS1wYWdlIHtcclxuICBwYWRkaW5nOiAxLjVlbTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZy10b3A6IDZlbTtcclxufVxyXG4udGl0dGxlLWhvbWUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLm1lbWJlci1jYXJkcyB7XHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MTcxNzE7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgXHJcbn1cclxuXHJcbnAuY2FyZC1pdGVtIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTJweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiBcclxuICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG5wLm5hbWUuY2FyZC1pdGVtIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5ob2JiaWVzIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuIFxyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG5cclxufVxyXG4uYWN0aXZpdGllcyAge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbn1cclxuLmRpc3RhbmNlIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pbWcubnVtYmVyLW1hZ2Uge1xyXG4gIHdpZHRoOiA5JTtcclxufVxyXG4ubGVmdC1oZWFkaW5nIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcbmltZy51c2VyLWltYWdlIHtcclxuICBcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubW9kYWwtYmFja2Ryb3Bcclxue1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbC1iYWNrZHJvcC5zaG93XHJcbntcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbnAubW9kYWwtcGFyYSB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB3b3JkLXNwYWNpbmc6IC0xcHg7XHJcbn1cclxuLmNoZWNrYm94LXBvcHVwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbmltZy5jaGVjay1ib3gge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbmg1Lndob3Mtb24tc2l0ZSB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uYnV0dG9uLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucmVnaXN0ZXItYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5LmxvZ2luLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbnAuY2hlY2stYm94LXRleHQge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ubWVtYmVyLWNhcmQtdGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDN2dztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDN2dztcclxufVxyXG4iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9JbWFnZXMvQmFja2dyb3VuZFRpbGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbmlvbi1jYXJkLmlvcy5oeWRyYXRlZCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnRpdHRsZS1ob21lLXBhZ2Uge1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmctdG9wOiA2ZW07XG59XG5cbi50aXR0bGUtaG9tZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubWVtYmVyLWNhcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzE3MTcxO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbnAuY2FyZC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuXG5wLm5hbWUuY2FyZC1pdGVtIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaG9iYmllcyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5hY3Rpdml0aWVzIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZGlzdGFuY2Uge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmltZy5udW1iZXItbWFnZSB7XG4gIHdpZHRoOiA5JTtcbn1cblxuLmxlZnQtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmltZy51c2VyLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb2RhbC1iYWNrZHJvcCB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtYmFja2Ryb3Auc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbnAubW9kYWwtcGFyYSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICB3b3JkLXNwYWNpbmc6IC0xcHg7XG59XG5cbi5jaGVja2JveC1wb3B1cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pbWcuY2hlY2stYm94IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmg1Lndob3Mtb24tc2l0ZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYnV0dG9uLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJlZ2lzdGVyLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QURCMDA7XG4gIGhlaWdodDogNDBweDtcbn1cblxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeS5sb2dpbi1idXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbnAuY2hlY2stYm94LXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5tZW1iZXItY2FyZC10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDN2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbi1yaWdodDogM3Z3O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");






let HomePage = class HomePage {
    constructor(Configservice, geolocation, Platform, nativeGeocoder) {
        this.Configservice = Configservice;
        this.geolocation = geolocation;
        this.Platform = Platform;
        this.nativeGeocoder = nativeGeocoder;
        this.showmore = true;
    }
    ngOnInit() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log("latitude" + resp.coords.latitude);
            console.log("longitude" + resp.coords.longitude);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        this.Configservice.getArticle()
            .subscribe(data => {
            console.log(this.uid);
        });
        this.Configservice.getHobbies()
            .subscribe(element => {
            this.postse = element;
            console.log(element);
        });
    }
    test() {
        this.Configservice.getArticle()
            .subscribe(data => {
            this.post = data;
            console.log(this.post);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"]])
], HomePage);



/***/ }),

/***/ "./src/app/replace.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/replace.pipe.ts ***!
  \*********************************/
/*! exports provided: ReplacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacePipe", function() { return ReplacePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReplacePipe = class ReplacePipe {
    transform(value, regexValue, replaceValue) {
        let regex = new RegExp(regexValue, 'g');
        return value.replace(regex, replaceValue);
    }
};
ReplacePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'replace'
    })
], ReplacePipe);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map