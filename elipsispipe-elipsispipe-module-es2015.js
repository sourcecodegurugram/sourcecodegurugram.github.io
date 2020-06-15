(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["elipsispipe-elipsispipe-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/elipsispipe/elipsispipe.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elipsispipe/elipsispipe.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header [translucent]=\"true\">\r\n \r\n  <ion-toolbar color=\"warning\">\r\n    <ion-button (click)=\"loadMap()\" shape=\"round\" color=\"dark\">\r\n      <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\r\n      Where I Am\r\n    </ion-button>\r\n    <ion-title slot=\"end\">Google Map</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header [translucent]=\"true\">\r\n \r\n  <ion-toolbar color=\"warning\">\r\n    <ion-button (click)=\"loadMap()\" shape=\"round\" color=\"dark\">\r\n      <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\r\n      Where I Am\r\n    </ion-button>\r\n    <ion-title slot=\"end\">Google Map</ion-title>\r\n  </ion-toolbar>\r\n \r\n</ion-header>\r\n \r\n<ion-content [fullscreen]=\"true\">\r\n \r\n  <div class=\"map-wrapper\">\r\n    <div id=\"map_center\">\r\n      <img src=\"../../assets/Images/ionicon.png\" />\r\n    </div>\r\n    <div #map id=\"map\"></div>\r\n  </div>\r\n \r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"3\">\r\n        <b>Lattitude</b>\r\n      </ion-col>\r\n      <ion-col>\r\n        {{latitude}}\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"3\">\r\n        <b>Longitude</b>\r\n      </ion-col>\r\n      <ion-col>\r\n        {{longitude}}\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"3\">\r\n        <b>Address</b>\r\n      </ion-col>\r\n      <ion-col>\r\n        {{address}}\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n \r\n \r\n</ion-content>");

/***/ }),

/***/ "./src/app/elipsispipe/elipsispipe-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/elipsispipe/elipsispipe-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ElipsispipePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElipsispipePageRoutingModule", function() { return ElipsispipePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _elipsispipe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elipsispipe.page */ "./src/app/elipsispipe/elipsispipe.page.ts");




const routes = [
    {
        path: '',
        component: _elipsispipe_page__WEBPACK_IMPORTED_MODULE_3__["ElipsispipePage"]
    }
];
let ElipsispipePageRoutingModule = class ElipsispipePageRoutingModule {
};
ElipsispipePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ElipsispipePageRoutingModule);



/***/ }),

/***/ "./src/app/elipsispipe/elipsispipe.module.ts":
/*!***************************************************!*\
  !*** ./src/app/elipsispipe/elipsispipe.module.ts ***!
  \***************************************************/
/*! exports provided: ElipsispipePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElipsispipePageModule", function() { return ElipsispipePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _elipsispipe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elipsispipe-routing.module */ "./src/app/elipsispipe/elipsispipe-routing.module.ts");
/* harmony import */ var _elipsispipe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elipsispipe.page */ "./src/app/elipsispipe/elipsispipe.page.ts");







let ElipsispipePageModule = class ElipsispipePageModule {
};
ElipsispipePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _elipsispipe_routing_module__WEBPACK_IMPORTED_MODULE_5__["ElipsispipePageRoutingModule"]
        ],
        declarations: [_elipsispipe_page__WEBPACK_IMPORTED_MODULE_6__["ElipsispipePage"]]
    })
], ElipsispipePageModule);



/***/ }),

/***/ "./src/app/elipsispipe/elipsispipe.page.scss":
/*!***************************************************!*\
  !*** ./src/app/elipsispipe/elipsispipe.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 70vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxpcHNpc3BpcGUvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxcZWxpcHNpc3BpcGVcXGVsaXBzaXNwaXBlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZWxpcHNpc3BpcGUvZWxpcHNpc3BpcGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREdFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0FDQUo7O0FERUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvZWxpcHNpc3BpcGUvZWxpcHNpc3BpcGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcF9jYW52YXMge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIH1cclxuICAgXHJcbiAgIFxyXG4gICNhZGRyZXNzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgIFxyXG4gICNtYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgfVxyXG4gICBcclxuICAubWFwLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBcclxuICAgICNtYXBfY2VudGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNDFweDtcclxuICAgIH1cclxuICB9IiwiI21hcF9jYW52YXMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4jYWRkcmVzcyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHZoO1xufVxuXG4ubWFwLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFwLXdyYXBwZXIgI21hcF9jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gIG1hcmdpbi10b3A6IC00MXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/elipsispipe/elipsispipe.page.ts":
/*!*************************************************!*\
  !*** ./src/app/elipsispipe/elipsispipe.page.ts ***!
  \*************************************************/
/*! exports provided: ElipsispipePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElipsispipePage", function() { return ElipsispipePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");




let ElipsispipePage = class ElipsispipePage {
    constructor(geolocation, nativeGeocoder) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
    }
    ngOnInit() {
        this.loadMap();
    }
    loadMap() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            let mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.map.addListener('dragend', () => {
                this.latitude = this.map.center.lat();
                this.longitude = this.map.center.lng();
                this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng());
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    getAddressFromCoords(lattitude, longitude) {
        console.log("getAddressFromCoords " + lattitude + " " + longitude);
        let options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
            .then((result) => {
            this.address = "";
            let responseAddress = [];
            for (let [key, value] of Object.entries(result[0])) {
                if (value.length > 0)
                    responseAddress.push(value);
            }
            responseAddress.reverse();
            for (let value of responseAddress) {
                this.address += value + ", ";
            }
            this.address = this.address.slice(0, -2);
        })
            .catch((error) => {
            this.address = "Address Not Available!";
        });
    }
};
ElipsispipePage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ElipsispipePage.prototype, "mapElement", void 0);
ElipsispipePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-elipsispipe',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./elipsispipe.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/elipsispipe/elipsispipe.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./elipsispipe.page.scss */ "./src/app/elipsispipe/elipsispipe.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
        _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"]])
], ElipsispipePage);



/***/ })

}]);
//# sourceMappingURL=elipsispipe-elipsispipe-module-es2015.js.map