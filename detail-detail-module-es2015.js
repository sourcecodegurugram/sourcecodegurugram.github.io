(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\">\n<div class=\"container-card\">\n\n  \n  <div class=\"picture\">\n    <div class=\"image-card\">\n    <img src=\"{{picture}}\" class=\"picture-img\">\n  </div>\n    <div class=\"top-card\">\n    <div class=\"name-output\">{{mail}}</div>\n      <p class=\"name-output\">{{name}}</p>  \n    </div>\n  </div>\n\n\n\n\n      <ion-card class=\"subscribe-card\">\n        <div class=\"membership\">\n          <div class=\"name\">Gender</div>\n          <div class=\"name-output\">{{gender}}</div>\n        </div>\n        </ion-card>\n\n        <ion-card class=\"subscribe-card\" >\n          <div class=\"membership\">\n            <div class=\"name\">Relationship Status:</div>\n            <div class=\"name-output\">{{status}}</div>\n          </div>\n          </ion-card>\n\n          <ion-card class=\"subscribe-card\" >\n            <div class=\"membership\">\n              <div class=\"name\">Activities/Interests</div>\n              <div class=\"name-output\">{{actvities}}</div>\n            </div>\n            </ion-card>\n            <ion-card class=\"subscribe-card\" >\n              <div class=\"membership\">\n                <div class=\"name\">Education Level</div>\n                <div class=\"name-output\">{{edu}}</div>\n              </div>\n              </ion-card>\n            \n              <ion-card class=\"subscribe-card\" >\n                <div class=\"membership\">\n                  <div class=\"name\">How Often Do You Smoke?:</div>\n                  <div class=\"name-output\">{{smoke}}</div>\n                </div>\n                </ion-card>\n              <ion-card class=\"subscribe-card\" >\n                <div class=\"membership\">\n                  <div class=\"name\">Most Of My Friends Tend To Be:</div>\n                  <div class=\"name-output\">{{tend}}</div>\n                </div>\n                </ion-card>\n\n                <ion-card class=\"subscribe-card\" >\n                  <div class=\"membership\">\n                    <div class=\"name\">How Do you React If Plans Get Cancelled?:</div>\n                    <div class=\"name-output\">{{cancel}}</div>\n                  </div>\n                  </ion-card>\n\n                  <ion-card class=\"subscribe-card\" >\n                    <div class=\"membership\">\n                      <div class=\"name\">How Do You Spend Your Days:</div>\n                      <div class=\"name-output\">{{days}}</div>\n                    </div>\n                    </ion-card>\n                  \n                    <ion-card class=\"subscribe-card\" >\n                      <div class=\"membership\">\n                        <div class=\"name\">Favorite Movies:</div>\n                        <div class=\"name-output\">{{movies}}</div>\n                      </div>\n                      </ion-card>\n\n\n                      <ion-card class=\"subscribe-card\" *ngIf=\"Music\">\n                        <div class=\"membership\">\n                          <div class=\"name\"> Favorite Music</div>\n                          <div class=\"name-output\">{{Music}}</div>\n                        </div>\n                        </ion-card>\n                     \n                        <ion-card class=\"subscribe-card\"  *ngIf=\"shows\">\n                          <div class=\"membership\">\n                            <div class=\"name\">Favorite TV Shows</div>\n                            <div class=\"name-output\">{{shows}}</div>\n                          </div>\n                          </ion-card>\n                          <ion-card class=\"subscribe-card\" *ngIf=\"books\">\n                            <div class=\"membership\">\n                              <div class=\"name\">Favorate Books</div>\n                              <div class=\"name-output\">{{books}}</div>\n                            </div>\n                            </ion-card>\n\n                            <ion-card class=\"subscribe-card\" *ngIf=\"friends\">\n                              <div class=\"membership\">\n                                <div class=\"name\">My Friends And I Usually Talk About:</div>\n                                <div class=\"name-output\">{{friends}}</div>\n                              </div>\n                              </ion-card>\n\n\n\n\n\n                        \n                            \n\n          \n            <ion-card class=\"subscribe-card\" *ngIf=\"meet\">\n              <div class=\"membership\">\n                <div class=\"name\">I'm Looking To Meet:</div>\n                <div class=\"name-output\">{{meet}}</div>\n              </div>\n              </ion-card>\n           \n              \n                <ion-card class=\"subscribe-card\" *ngIf=\"long\">\n                  <div class=\"membership\">\n                    <div class=\"name\">How Long Have You Lived In The Area?</div>\n                    <div class=\"name-output\">{{long}}</div>\n                  </div>\n                  </ion-card>\n\n\n                  \n                \n\n                   \n\n\n                    \n\n                      \n                    \n  </div>\n\n\n\n\n</div>");

/***/ }),

/***/ "./src/app/detail/detail-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/detail/detail-routing.module.ts ***!
  \*************************************************/
/*! exports provided: DetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function() { return DetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.page */ "./src/app/detail/detail.page.ts");




const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    }
];
let DetailPageRoutingModule = class DetailPageRoutingModule {
};
DetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailPageRoutingModule);



/***/ }),

/***/ "./src/app/detail/detail.module.ts":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-routing.module */ "./src/app/detail/detail-routing.module.ts");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/detail/detail.page.ts");







let DetailPageModule = class DetailPageModule {
};
DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })
], DetailPageModule);



/***/ }),

/***/ "./src/app/detail/detail.page.scss":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\n.container-card {\n  margin-top: 5vh;\n}\n\n.membership {\n  display: grid;\n  grid-template-columns: 2fr 2fr;\n  padding: 10px;\n  text-align: left;\n}\n\n.picture {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 0em;\n}\n\n.picture-img {\n  width: 50vw;\n  height: 13vh;\n  border-radius: 50%;\n  position: relative;\n  top: 7vh;\n  box-shadow: 0px 0px 0px 2px white;\n}\n\n.top-card {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  justify-content: center;\n  padding: 2vw;\n  padding-top: 8vh;\n  width: 90vw;\n  background-color: white;\n  margin: -5px;\n  padding-bottom: 2vh;\n}\n\np {\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.image-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 29vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL0s6XFxBbmd1bGFyIFByb2plY3RcXG5vdDREYXRpbmcvc3JjXFxhcHBcXGRldGFpbFxcZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFQTtFQUVJLGVBQUE7QUNBSjs7QURFQTtFQUNJLGFBQUE7RUFFQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUdJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFHQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQ0FBQTtBQ0ZKOztBRElBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREdBO0VBRUksa0JBQUE7RUFDQSxlQUFBO0FDREo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbi5jb250YWluZXItY2FyZFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbn1cclxuLm1lbWJlcnNoaXAge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICBcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5waWN0dXJlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogMGVtO1xyXG59XHJcbi5waWN0dXJlLWltZ1xyXG57XHJcbiAgXHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogMTN2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDd2aDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCB3aGl0ZTtcclxufVxyXG4udG9wLWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJ2dztcclxuICAgIHBhZGRpbmctdG9wOiA4dmg7XHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAtNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJ2aDtcclxufVxyXG5wXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uaW1hZ2UtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI5dnc7XHJcbn0iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9JbWFnZXMvQmFja2dyb3VuZFRpbGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5jb250YWluZXItY2FyZCB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbn1cblxuLm1lbWJlcnNoaXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5waWN0dXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDBlbTtcbn1cblxuLnBpY3R1cmUtaW1nIHtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogMTN2aDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogN3ZoO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggd2hpdGU7XG59XG5cbi50b3AtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJ2dztcbiAgcGFkZGluZy10b3A6IDh2aDtcbiAgd2lkdGg6IDkwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IC01cHg7XG4gIHBhZGRpbmctYm90dG9tOiAydmg7XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmltYWdlLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDI5dnc7XG59Il19 */");

/***/ }),

/***/ "./src/app/detail/detail.page.ts":
/*!***************************************!*\
  !*** ./src/app/detail/detail.page.ts ***!
  \***************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");




let DetailPage = class DetailPage {
    constructor(_Activatedroute, ConfigService) {
        this._Activatedroute = _Activatedroute;
        this.ConfigService = ConfigService;
        this.postman = {};
    }
    ngOnInit() {
        this.sub = this._Activatedroute.paramMap.subscribe((params) => {
            this.name = params.get("name");
            this.mail = params.get("mail");
            this.uid = params.get("uid");
        });
        this.ConfigService.getUser(this.uid).subscribe((data) => {
            this.post = data;
            console.log(this.post);
            this.picture = this.post.picture.url;
            this.long = this.post.field_long_in_city.length;
            this.gender = this.post.field_gender.und[0].value;
            this.activity = this.post.field_activities_interests.und;
            for (let i = 0; i < this.activity.length; i++) {
                this.actvities = this.activity[i].value;
            }
            this.smokes = this.post.field_smoke.und;
            for (let s = 0; s < this.smokes.length; s++) {
                this.smoke = this.smokes[s].value;
                console.log(this.smokes[s].value);
            }
            this.statu = this.post.field_relationship_status.und;
            for (let u = 0; u < this.statu.length; u++) {
                this.status = this.statu[u].value;
                console.log(this.statu[u].value);
            }
            this.edue = this.post.field_education_level.und;
            for (let e = 0; e < this.edue.length; e++) {
                this.edu = this.edue[e].value;
                console.log(this.edue[e].value);
            }
            this.tends = this.post.field_friends_tend_to_be.und;
            for (let e = 0; e < this.tends.length; e++) {
                this.tend = this.tends[e].value;
                console.log(this.tends[e].value);
            }
            this.cancels = this.post.field_plans_get_cancelled.und;
            for (let e = 0; e < this.cancels.length; e++) {
                this.cancel = this.cancels[e].value;
                console.log(this.cancels[e].value);
            }
            this.day = this.post.field_spend_your_days.und;
            for (let e = 0; e < this.day.length; e++) {
                this.days = this.day[e].value;
                console.log(this.day[e].value);
            }
            this.movie = this.post.field_favorite_movies.und;
            for (let d = 0; d < this.movie.length; d++) {
                this.movies = this.movie[d].value;
                console.log(this.movie[d].value);
            }
            this.musics = this.post.field_favorite_music.und;
            for (let d = 0; d < this.musics.length; d++) {
                this.music = this.musics[d].value;
                console.log(this.musics[d].value);
            }
            //  this.show = this.post.field_favorite_tv_show.und;
            //  for(let d=0;d< this.show.length;d++)
            //  {
            //     this.shows=this.show[d].value
            //     console.log(this.show[d].value)
            //  }
            this.book = this.post.field_favorite_books.und;
            for (let b = 0; b < this.book.length; b++) {
                this.books = this.book[b].value;
                console.log(this.book[b].value);
            }
            this.friend = this.post.field_talk_about.und;
            for (let d = 0; d < this.friend.length; d++) {
                this.friends = this.friend[d].value;
                console.log(this.friend[d].value);
            }
        });
    }
};
DetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail.page.scss */ "./src/app/detail/detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=detail-detail-module-es2015.js.map