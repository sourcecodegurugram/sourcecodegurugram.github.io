(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header ></ion-header>\n\n<div class=\"background\">\n  <div class=\"tittle-home-page\">\n    <ion-card-subtitle class=\"tittle-home\">Recent members in you area</ion-card-subtitle>\n  </div>\n\n  \n\n  <div class=\"member-cards\" *ngFor=\"let posts of  postse\" routerLink=\"/detail/{{posts.name}}/{{posts.mail}}/{{posts.uid}}\">\n    <div class=\"member-card-image\">\n    \n \n<img src=\"../../assets/Images/user_-4.png\" alt=\"\" srcset=\"\" class=\"user-image\">\n    </div>\n    <div class=\"member-card-text\">\n      <p class=\"name card-item\">{{posts.name}}<ion-badge slot=\"end\"  color=\"light\" *ngIf=\"posts.Pets.length==0\">Parent</ion-badge><ion-badge slot=\"end\"  color=\"light\" *ngIf=\"posts.Pets.length>0\">Pet Owner</ion-badge></p>\n      <ion-label class=\"hobbies card-item\"><span class=\"left-heading\" >Activities:&nbsp;</span>{{posts.Activity | slice:3:5}}... </ion-label>\n      <ion-badge slot=\"end\"  color=\"light\">{{posts.Activity.length}}</ion-badge><br>\n      <!-- <ion-label class=\"hobbies card-item\" ><span class=\"left-heading\">Activities:</span>{{posts.Activity | slice:-2:-1}}</ion-label>\n      <ion-badge slot=\"end\"  color=\"light\"></ion-badge> -->\n      <p class=\"distance card-item\"><span class=\"left-heading\">Distance:</span>1 miles away</p> \n    </div>\n  </div>\n \n</div>\n\n<div class=\"Load-more\" *ngIf=\"showmore\" >Load More</div>\n\n\n  <!-- The Modal -->\n  <div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n      \n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n         \n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <p class=\"modal-para\">Not4Dating wants to help you create communities, build meaningful relationships and feel truly connected to others</p>\n           <h5 class=\"whos-on-site\">Who’s on the site?</h5>\n          <div class=\"checkbox-popup\">\n            <img src=\"../../assets/Images/check.png\" class=\"check-box\">\n            <p class=\"check-box-text\">Our youngest member is 18,our oldest member is 85</p>\n          </div>\n          <div class=\"checkbox-popup\">\n            <img src=\"../../assets/Images/check.png\" class=\"check-box\">\n            <p class=\"check-box-text\">64% In a Relationship, 36% Not in a Relationship  </p>\n          </div>\n\n          <div class=\"button-flex\">\n            <button type=\"button\" class=\"btn btn-primary register-button\" routerLink=\"/register\">Register Now</button>\n            <button type=\"button\" class=\"btn btn-primary login-button\">Login Now</button>\n          </div>\n        </div>\n       \n      \n        \n       \n        \n      </div>\n    </div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\nion-card.ios.hydrated {\n  margin-top: 0px;\n}\n\n.tittle-home-page {\n  padding: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  padding-top: 6em;\n}\n\n.tittle-home {\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: capitalize;\n}\n\n.member-cards {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  background-color: white;\n  margin: 20px;\n  align-items: center;\n  border: 1px solid #717171;\n  margin-top: 0px;\n}\n\np.card-item {\n  margin-bottom: 0px;\n  margin-top: -2px;\n  font-size: 14px;\n  color: #707070;\n}\n\np.name.card-item {\n  font-size: 16px;\n}\n\n.hobbies {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n  color: #707070;\n}\n\n.activities {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n  display: flex;\n  flex-direction: row;\n}\n\n.distance {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n}\n\nimg.number-mage {\n  width: 9%;\n}\n\n.left-heading {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n}\n\nimg.user-image {\n  width: 100%;\n}\n\n.modal-backdrop {\n  height: auto !important;\n}\n\n.modal-backdrop.show {\n  opacity: 1;\n}\n\np.modal-para {\n  text-align: justify;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  word-spacing: -1px;\n}\n\n.checkbox-popup {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n\nimg.check-box {\n  margin-right: 10px;\n  text-align: center;\n}\n\nh5.whos-on-site {\n  font-size: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n\n.button-flex {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.register-button {\n  background-color: #5ADB00;\n  height: 40px;\n}\n\nbutton.btn.btn-primary.login-button {\n  height: 40px;\n}\n\np.check-box-text {\n  margin-bottom: 0px;\n}\n\n.member-card-text {\n  margin-left: 3vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: 3vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0FDRkY7O0FESUE7RUFFSSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURHQTtFQUNFLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQUY7O0FERUE7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtBQ0NGOztBRENBO0VBRUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0YsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtBQ0RGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0FDREY7O0FESUE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNERjs7QURHQTtFQUNFLFNBQUE7QUNBRjs7QURFQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUVFLFdBQUE7QUNDRjs7QURDQTtFQUVFLHVCQUFBO0FDQ0Y7O0FEQ0E7RUFFRSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QUREQTtFQUNFLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0lGOztBREZBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNLRjs7QURIQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ01GOztBREpBO0VBQ0UsWUFBQTtBQ09GOztBRExBO0VBQ0Usa0JBQUE7QUNRRjs7QUROQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cbi5iYWNrZ3JvdW5kXG57XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbn1cbmlvbi1jYXJkLmlvcy5oeWRyYXRlZCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi50aXR0bGUtaG9tZS1wYWdlIHtcbiAgcGFkZGluZzogMS41ZW07XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy10b3A6IDZlbTtcbn1cbi50aXR0bGUtaG9tZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5tZW1iZXItY2FyZHMge1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcxNzE3MTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIFxufVxuXG5wLmNhcmQtaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuIFxuICBjb2xvcjogIzcwNzA3MDtcbn1cbnAubmFtZS5jYXJkLWl0ZW0ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ob2JiaWVzIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiBcbiAgY29sb3I6ICM3MDcwNzA7XG5cbn1cbi5hY3Rpdml0aWVzICB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbn1cbi5kaXN0YW5jZSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pbWcubnVtYmVyLW1hZ2Uge1xuICB3aWR0aDogOSU7XG59XG4ubGVmdC1oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5pbWcudXNlci1pbWFnZSB7XG4gIFxuICB3aWR0aDogMTAwJTtcbn1cbi5tb2RhbC1iYWNrZHJvcFxue1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbi5tb2RhbC1iYWNrZHJvcC5zaG93XG57XG4gIG9wYWNpdHk6IDE7XG59XG5wLm1vZGFsLXBhcmEge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdvcmQtc3BhY2luZzogLTFweDtcbn1cbi5jaGVja2JveC1wb3B1cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmltZy5jaGVjay1ib3gge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuaDUud2hvcy1vbi1zaXRlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmJ1dHRvbi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucmVnaXN0ZXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBREIwMDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeS5sb2dpbi1idXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5wLmNoZWNrLWJveC10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLm1lbWJlci1jYXJkLXRleHQge1xuICBtYXJnaW4tbGVmdDogM3Z3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1hcmdpbi1yaWdodDogM3Z3O1xufVxuIiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG5pb24tY2FyZC5pb3MuaHlkcmF0ZWQge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi50aXR0bGUtaG9tZS1wYWdlIHtcbiAgcGFkZGluZzogMS41ZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nLXRvcDogNmVtO1xufVxuXG4udGl0dGxlLWhvbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1lbWJlci1jYXJkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcxNzE3MTtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5wLmNhcmQtaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzcwNzA3MDtcbn1cblxucC5uYW1lLmNhcmQtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmhvYmJpZXMge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuXG4uYWN0aXZpdGllcyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmRpc3RhbmNlIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pbWcubnVtYmVyLW1hZ2Uge1xuICB3aWR0aDogOSU7XG59XG5cbi5sZWZ0LWhlYWRpbmcge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5pbWcudXNlci1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9kYWwtYmFja2Ryb3Age1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJhY2tkcm9wLnNob3cge1xuICBvcGFjaXR5OiAxO1xufVxuXG5wLm1vZGFsLXBhcmEge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd29yZC1zcGFjaW5nOiAtMXB4O1xufVxuXG4uY2hlY2tib3gtcG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW1nLmNoZWNrLWJveCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oNS53aG9zLW9uLXNpdGUge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJ1dHRvbi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZWdpc3Rlci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubG9naW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5wLmNoZWNrLWJveC10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWVtYmVyLWNhcmQtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAzdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXJnaW4tcmlnaHQ6IDN2dztcbn0iXX0= */");

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