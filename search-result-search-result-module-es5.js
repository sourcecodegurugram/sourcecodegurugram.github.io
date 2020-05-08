function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-result-search-result-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchResultSearchResultPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>searchResult</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"background\">\n  <div class=\"tittle-home-page\">\n    <ion-card-subtitle class=\"tittle-home\">Search > Result</ion-card-subtitle>\n  </div>\n\n\n  <div class=\"member-cards\" *ngFor=\"let posts of  postalcode | slice:0:25;\" routerLink=\"/detail/{{posts.name}}/{{posts.mail}}/{{posts.uid}}\">\n   \n  \n    <div class=\"member-card-image\">\n    \n      <img src=\"{{posts.Picture}}\" alt=\"\" srcset=\"\" class=\"user-image\">\n\n    </div>\n    <div class=\"member-card-text\">\n      <p class=\"name card-item\">{{posts.name}}<ion-badge slot=\"end\"  color=\"light\" *ngIf=\"posts.Pets.length==0\">Parent</ion-badge><ion-badge slot=\"end\"  color=\"light\" *ngIf=\"posts.Pets.length>0\">Pet Owner</ion-badge></p>\n      <ion-label class=\"hobbies card-item \"><span class=\"left-heading\">Activities:&nbsp;</span>{{posts.Activity | slice:3:5}} </ion-label>\n      <ion-badge slot=\"end\"  color=\"light\">{{posts.Activity.length}}</ion-badge><br>\n      <!-- <ion-label class=\"hobbies card-item\" ><span class=\"left-heading\">Activities:</span>{{posts.Activity | slice:-2:-1}}</ion-label>\n      <ion-badge slot=\"end\"  color=\"light\"></ion-badge> -->\n      <p class=\"distance card-item\"><span class=\"left-heading\">Distance:</span>1 miles away</p> \n    </div>\n  </div>\n \n\n\n\n\n\n</div>\n\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./src/app/search-result/search-result-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/search-result/search-result-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: SearchResultPageRoutingModule */

  /***/
  function srcAppSearchResultSearchResultRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultPageRoutingModule", function () {
      return SearchResultPageRoutingModule;
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


    var _search_result_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search-result.page */
    "./src/app/search-result/search-result.page.ts");

    var routes = [{
      path: '',
      component: _search_result_page__WEBPACK_IMPORTED_MODULE_3__["SearchResultPage"]
    }];

    var SearchResultPageRoutingModule = function SearchResultPageRoutingModule() {
      _classCallCheck(this, SearchResultPageRoutingModule);
    };

    SearchResultPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SearchResultPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/search-result/search-result.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/search-result/search-result.module.ts ***!
    \*******************************************************/

  /*! exports provided: SearchResultPageModule */

  /***/
  function srcAppSearchResultSearchResultModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultPageModule", function () {
      return SearchResultPageModule;
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


    var _search_result_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-result-routing.module */
    "./src/app/search-result/search-result-routing.module.ts");
    /* harmony import */


    var _search_result_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search-result.page */
    "./src/app/search-result/search-result.page.ts");

    var SearchResultPageModule = function SearchResultPageModule() {
      _classCallCheck(this, SearchResultPageModule);
    };

    SearchResultPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_result_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchResultPageRoutingModule"]],
      declarations: [_search_result_page__WEBPACK_IMPORTED_MODULE_6__["SearchResultPage"]]
    })], SearchResultPageModule);
    /***/
  },

  /***/
  "./src/app/search-result/search-result.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/search-result/search-result.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchResultSearchResultPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\nion-card.ios.hydrated {\n  margin-top: 0px;\n}\n\n.tittle-home-page {\n  padding: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  padding-top: 6em;\n}\n\n.tittle-home {\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: capitalize;\n}\n\n.member-cards {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  background-color: white;\n  margin: 20px;\n  align-items: center;\n  border: 1px solid #717171;\n  margin-top: 0px;\n}\n\np.card-item {\n  margin-bottom: 0px;\n  margin-top: -2px;\n  font-size: 14px;\n  color: #707070;\n}\n\np.name.card-item {\n  font-size: 16px;\n}\n\n.hobbies {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n  color: #707070;\n}\n\n.activities {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n  display: flex;\n  flex-direction: row;\n}\n\n.distance {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: italic;\n  font-size: 14px;\n}\n\nimg.number-mage {\n  width: 9%;\n}\n\n.left-heading {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n}\n\nimg.user-image {\n  width: 100%;\n  height: 14vh;\n}\n\n.modal-backdrop {\n  height: auto !important;\n}\n\n.modal-backdrop.show {\n  opacity: 1;\n}\n\np.modal-para {\n  text-align: justify;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  word-spacing: -1px;\n}\n\n.checkbox-popup {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n\nimg.check-box {\n  margin-right: 10px;\n  text-align: center;\n}\n\nh5.whos-on-site {\n  font-size: 1.5em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n\n.button-flex {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.register-button {\n  background-color: #5ADB00;\n  height: 40px;\n}\n\nbutton.btn.btn-primary.login-button {\n  height: 40px;\n}\n\np.check-box-text {\n  margin-bottom: 0px;\n}\n\n.member-card-text {\n  margin-left: 3vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: 3vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxzZWFyY2gtcmVzdWx0XFxzZWFyY2gtcmVzdWx0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0FDRkY7O0FESUE7RUFFSSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURHQTtFQUNFLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQUY7O0FERUE7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtBQ0NGOztBRENBO0VBRUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0YsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtBQ0RGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0FDREY7O0FESUE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNERjs7QURHQTtFQUNFLFNBQUE7QUNBRjs7QURFQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFFRSx1QkFBQTtBQ0NGOztBRENBO0VBRUUsVUFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FEREE7RUFDRSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QURGQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDS0Y7O0FESEE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNNRjs7QURKQTtFQUNFLFlBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0FDUUY7O0FETkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcblxyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xyXG59XHJcbi5iYWNrZ3JvdW5kXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL0ltYWdlcy9CYWNrZ3JvdW5kVGlsZS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5pb24tY2FyZC5pb3MuaHlkcmF0ZWQge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4udGl0dGxlLWhvbWUtcGFnZSB7XHJcbiAgcGFkZGluZzogMS41ZW07XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmctdG9wOiA2ZW07XHJcbn1cclxuLnRpdHRsZS1ob21lIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5tZW1iZXItY2FyZHMge1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzE3MTcxO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIFxyXG59XHJcblxyXG5wLmNhcmQtaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gXHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxucC5uYW1lLmNhcmQtaXRlbSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaG9iYmllcyB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiBcclxuICBjb2xvcjogIzcwNzA3MDtcclxuXHJcbn1cclxuLmFjdGl2aXRpZXMgIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG59XHJcbi5kaXN0YW5jZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaW1nLm51bWJlci1tYWdlIHtcclxuICB3aWR0aDogOSU7XHJcbn1cclxuLmxlZnQtaGVhZGluZyB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5pbWcudXNlci1pbWFnZSB7XHJcbiAgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNHZoO1xyXG59XHJcbi5tb2RhbC1iYWNrZHJvcFxyXG57XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1vZGFsLWJhY2tkcm9wLnNob3dcclxue1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxucC5tb2RhbC1wYXJhIHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHdvcmQtc3BhY2luZzogLTFweDtcclxufVxyXG4uY2hlY2tib3gtcG9wdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuaW1nLmNoZWNrLWJveCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuaDUud2hvcy1vbi1zaXRlIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5idXR0b24tZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5yZWdpc3Rlci1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1QURCMDA7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubG9naW4tYnV0dG9uIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxucC5jaGVjay1ib3gtdGV4dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5tZW1iZXItY2FyZC10ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogM3Z3O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG1hcmdpbi1yaWdodDogM3Z3O1xyXG59XHJcbiIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL0ltYWdlcy9CYWNrZ3JvdW5kVGlsZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuaW9uLWNhcmQuaW9zLmh5ZHJhdGVkIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4udGl0dGxlLWhvbWUtcGFnZSB7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy10b3A6IDZlbTtcbn1cblxuLnRpdHRsZS1ob21lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5tZW1iZXItY2FyZHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MTcxNzE7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxucC5jYXJkLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbnAubmFtZS5jYXJkLWl0ZW0ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ob2JiaWVzIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzcwNzA3MDtcbn1cblxuLmFjdGl2aXRpZXMge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5kaXN0YW5jZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW1nLm51bWJlci1tYWdlIHtcbiAgd2lkdGg6IDklO1xufVxuXG4ubGVmdC1oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuaW1nLnVzZXItaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNHZoO1xufVxuXG4ubW9kYWwtYmFja2Ryb3Age1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJhY2tkcm9wLnNob3cge1xuICBvcGFjaXR5OiAxO1xufVxuXG5wLm1vZGFsLXBhcmEge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd29yZC1zcGFjaW5nOiAtMXB4O1xufVxuXG4uY2hlY2tib3gtcG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW1nLmNoZWNrLWJveCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oNS53aG9zLW9uLXNpdGUge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJ1dHRvbi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZWdpc3Rlci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubG9naW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5wLmNoZWNrLWJveC10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWVtYmVyLWNhcmQtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAzdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXJnaW4tcmlnaHQ6IDN2dztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/search-result/search-result.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/search-result/search-result.page.ts ***!
    \*****************************************************/

  /*! exports provided: SearchResultPage */

  /***/
  function srcAppSearchResultSearchResultPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultPage", function () {
      return SearchResultPage;
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


    var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../config.service */
    "./src/app/config.service.ts");

    var SearchResultPage = /*#__PURE__*/function () {
      function SearchResultPage(_Activatedroute, ConfigService) {
        _classCallCheck(this, SearchResultPage);

        this._Activatedroute = _Activatedroute;
        this.ConfigService = ConfigService;
      }

      _createClass(SearchResultPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.post = params.get("post");
            console.log(_this.post);
          });
          this.ConfigService.getPostal(this.post).subscribe(function (elements) {
            _this.postalcode = elements;
            console.log(_this.postalcode);
          });
        }
      }]);

      return SearchResultPage;
    }();

    SearchResultPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }];
    };

    SearchResultPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-result',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-result.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search-result/search-result.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-result.page.scss */
      "./src/app/search-result/search-result.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], SearchResultPage);
    /***/
  }
}]);
//# sourceMappingURL=search-result-search-result-module-es5.js.map