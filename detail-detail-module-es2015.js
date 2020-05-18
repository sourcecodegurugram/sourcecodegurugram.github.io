(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\">\r\n  <div class=\"container-card\">\r\n\r\n\r\n    <div class=\"picture\">\r\n      <div class=\"image-card\">\r\n        <img src=\"{{picture}}\" class=\"picture-img\">\r\n      </div>\r\n      <div class=\"top-card\">\r\n        <div class=\"name-output\">{{mail}}</div>\r\n        <p class=\"name-output\">{{name}}</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <ion-card class=\"subscribe-card\">\r\n      <div class=\"membership\">\r\n        <div *ngIf=\"genders\" class=\"inner-group\">\r\n          <div class=\"name\">Gender</div>\r\n          <div *ngFor=\"let gender of genders\" class=\"name-output\">{{gender.value}}</div>\r\n        </div><br>\r\n        <div *ngIf=\"statu\" class=\"inner-group\">\r\n          <div class=\"name\">Relationship Status:</div>\r\n          <div *ngFor=\"let status of statu\" class=\"name-output\">{{status.value}}</div>\r\n        </div><br>\r\n        <div *ngIf=\"edue\" class=\"inner-group\">\r\n          <div class=\"name\">Education Level</div>\r\n          <div *ngFor=\"let edu of edue\" class=\"name-output\">{{edu.value}}</div>\r\n        </div>\r\n      </div>\r\n    </ion-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <ion-card class=\"subscribe-card\" *ngIf=\"activity\">\r\n      <div class=\"membership inner-group-activity\">\r\n        <div >\r\n          <div class=\"name\">Activities/Interests</div>\r\n        </div>\r\n        <div>\r\n        <div *ngFor=\"let actvities of activity\" class=\"name-output\">{{actvities.value}}</div>\r\n      </div>\r\n      </div>\r\n    </ion-card>\r\n\r\n\r\n    <ion-card class=\"subscribe-card\">\r\n      <div class=\"membership\">\r\n        <div *ngIf=\"smokes\" class=\"inner-group\">\r\n          <div class=\"name\">How Often Do You Smoke?:</div>\r\n          <div *ngFor=\"let smoke of smokes\" class=\"name-output\">{{smoke.value}}</div>\r\n          <br>\r\n        </div>\r\n        <div *ngIf=\"tends\" class=\"inner-group\">\r\n          <div class=\"name\">Most Of My Friends Tend To Be:</div>\r\n          <div *ngFor=\"let tend of tends\" class=\"name-output\">{{tend.value}}</div>\r\n          <br>\r\n        </div>\r\n        <div *ngIf=\"cancels\" class=\"inner-group\">\r\n          <div class=\"name\">How Do you React If Plans Get Cancelled?:</div>\r\n          <div *ngFor=\"let cancel of cancels\" class=\"name-output\">{{cancel.value}}</div>\r\n          <br>\r\n        </div>\r\n\r\n        <div *ngIf=\"day\" class=\"inner-group\">\r\n          <div class=\"name\">How Do You Spend Your Days:</div>\r\n          <div *ngFor=\"let days of day\" class=\"name-output\">{{days.value}}</div>\r\n          <br>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"movie\" class=\"inner-group\">\r\n          <div class=\"name\">Favorite Movies:</div>\r\n          <div *ngFor=\"let movies of movie\" class=\"name-output\">{{movies.value}}</div>\r\n          <br>\r\n        </div>\r\n\r\n        <div *ngIf=\"Musics\" class=\"inner-group\">\r\n          <div class=\"name\"> Favorite Music</div>\r\n          <div *ngFor=\"let Music of musics\" class=\"name-output\">{{Music.value}}</div>\r\n          <br>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"show\" class=\"inner-group\">\r\n          <div class=\"name\">Favorite TV Shows</div>\r\n        <div *ngFor=\"let shows of show\" class=\"name-output\">{{shows.value}}</div>\r\n        <br>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"book\" class=\"inner-group\">\r\n          <div class=\"name\">Favorate Books</div>\r\n          <div *ngFor=\"let books of book\" class=\"name-output\">{{books.value}}</div>\r\n          <br>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"friend\" class=\"inner-group\">\r\n          <div class=\"name\">My Friends And I Usually Talk About:</div>\r\n        <div *ngFor=\"let friends of \" class=\"name-output\">{{friends.value}}</div>\r\n        <br>\r\n        </div>\r\n\r\n\r\n       \r\n      </div>\r\n    </ion-card>\r\n\r\n   \r\n\r\n\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\n.container-card {\n  margin-top: 5vh;\n}\n\n.membership {\n  padding: 10px;\n  text-align: left;\n  background-color: white;\n}\n\n.picture {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 0em;\n}\n\n.picture-img {\n  width: 50vw;\n  height: 13vh;\n  border-radius: 50%;\n  position: relative;\n  top: 7vh;\n  box-shadow: 0px 0px 0px 2px white;\n}\n\n.top-card {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  justify-content: center;\n  padding: 2vw;\n  padding-top: 8vh;\n  width: 90vw;\n  background-color: white;\n  margin: -5px;\n  padding-bottom: 2vh;\n}\n\np {\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.image-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 29vw;\n}\n\n.inner-group {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n}\n\n.membership.inner-group-activity {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9nb2QvTWFpbiBEYXRhL0FuZ3VsYXIgUHJvamVjdC9ub3Q0RGF0aW5nL3NyYy9hcHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksMkNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUE7RUFFSSxlQUFBO0FDQUo7O0FERUE7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUdJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFHQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQ0FBQTtBQ0ZKOztBRElBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREdBO0VBRUksa0JBQUE7RUFDQSxlQUFBO0FDREo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNBSjs7QURFQTtFQUNJLGFBQUE7RUFFQSw4QkFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL0ltYWdlcy9CYWNrZ3JvdW5kVGlsZS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4uY29udGFpbmVyLWNhcmRcclxue1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG59XHJcbi5tZW1iZXJzaGlwIHtcclxuICAgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5waWN0dXJlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogMGVtO1xyXG59XHJcbi5waWN0dXJlLWltZ1xyXG57XHJcbiAgXHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogMTN2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDd2aDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCB3aGl0ZTtcclxufVxyXG4udG9wLWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJ2dztcclxuICAgIHBhZGRpbmctdG9wOiA4dmg7XHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAtNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJ2aDtcclxufVxyXG5wXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uaW1hZ2UtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI5dnc7XHJcbn1cclxuLmlubmVyLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG4gICAgXHJcbn1cclxuLm1lbWJlcnNoaXAuaW5uZXItZ3JvdXAtYWN0aXZpdHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufSIsIi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL0ltYWdlcy9CYWNrZ3JvdW5kVGlsZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLmNvbnRhaW5lci1jYXJkIHtcbiAgbWFyZ2luLXRvcDogNXZoO1xufVxuXG4ubWVtYmVyc2hpcCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucGljdHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAwZW07XG59XG5cbi5waWN0dXJlLWltZyB7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDEzdmg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDd2aDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHdoaXRlO1xufVxuXG4udG9wLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAydnc7XG4gIHBhZGRpbmctdG9wOiA4dmg7XG4gIHdpZHRoOiA5MHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAtNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5pbWFnZS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyOXZ3O1xufVxuXG4uaW5uZXItZ3JvdXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG59XG5cbi5tZW1iZXJzaGlwLmlubmVyLWdyb3VwLWFjdGl2aXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */");

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
            //this.show = this.post.field_favorite_tv_show.und;
            this.book = this.post.field_favorite_books.und;
            this.friend = this.post.field_talk_about.und;
        });
    }
};
DetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-detail",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail.page.scss */ "./src/app/detail/detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=detail-detail-module-es2015.js.map