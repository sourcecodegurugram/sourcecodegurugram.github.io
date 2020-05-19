function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["elipsispipe-elipsispipe-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/elipsispipe/elipsispipe.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elipsispipe/elipsispipe.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppElipsispipeElipsispipePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header [translucent]=\"true\">\n \n  <ion-toolbar color=\"warning\">\n    <ion-button (click)=\"loadMap()\" shape=\"round\" color=\"dark\">\n      <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\n      Where I Am\n    </ion-button>\n    <ion-title slot=\"end\">Google Map</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header [translucent]=\"true\">\n \n  <ion-toolbar color=\"warning\">\n    <ion-button (click)=\"loadMap()\" shape=\"round\" color=\"dark\">\n      <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\n      Where I Am\n    </ion-button>\n    <ion-title slot=\"end\">Google Map</ion-title>\n  </ion-toolbar>\n \n</ion-header>\n \n<ion-content [fullscreen]=\"true\">\n \n  <div class=\"map-wrapper\">\n    <div id=\"map_center\">\n      <img src=\"../../assets/Images/ionicon.png\" />\n    </div>\n    <div #map id=\"map\"></div>\n  </div>\n \n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Lattitude</b>\n      </ion-col>\n      <ion-col>\n        {{latitude}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Longitude</b>\n      </ion-col>\n      <ion-col>\n        {{longitude}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Address</b>\n      </ion-col>\n      <ion-col>\n        {{address}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/elipsispipe/elipsispipe-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/elipsispipe/elipsispipe-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ElipsispipePageRoutingModule */

  /***/
  function srcAppElipsispipeElipsispipeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElipsispipePageRoutingModule", function () {
      return ElipsispipePageRoutingModule;
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


    var _elipsispipe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./elipsispipe.page */
    "./src/app/elipsispipe/elipsispipe.page.ts");

    var routes = [{
      path: '',
      component: _elipsispipe_page__WEBPACK_IMPORTED_MODULE_3__["ElipsispipePage"]
    }];

    var ElipsispipePageRoutingModule = function ElipsispipePageRoutingModule() {
      _classCallCheck(this, ElipsispipePageRoutingModule);
    };

    ElipsispipePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ElipsispipePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/elipsispipe/elipsispipe.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/elipsispipe/elipsispipe.module.ts ***!
    \***************************************************/

  /*! exports provided: ElipsispipePageModule */

  /***/
  function srcAppElipsispipeElipsispipeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElipsispipePageModule", function () {
      return ElipsispipePageModule;
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


    var _elipsispipe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./elipsispipe-routing.module */
    "./src/app/elipsispipe/elipsispipe-routing.module.ts");
    /* harmony import */


    var _elipsispipe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./elipsispipe.page */
    "./src/app/elipsispipe/elipsispipe.page.ts");

    var ElipsispipePageModule = function ElipsispipePageModule() {
      _classCallCheck(this, ElipsispipePageModule);
    };

    ElipsispipePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _elipsispipe_routing_module__WEBPACK_IMPORTED_MODULE_5__["ElipsispipePageRoutingModule"]],
      declarations: [_elipsispipe_page__WEBPACK_IMPORTED_MODULE_6__["ElipsispipePage"]]
    })], ElipsispipePageModule);
    /***/
  },

  /***/
  "./src/app/elipsispipe/elipsispipe.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/elipsispipe/elipsispipe.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppElipsispipeElipsispipePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 70vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxpcHNpc3BpcGUvSzpcXEFuZ3VsYXIgUHJvamVjdFxcbm90NERhdGluZy9zcmNcXGFwcFxcZWxpcHNpc3BpcGVcXGVsaXBzaXNwaXBlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZWxpcHNpc3BpcGUvZWxpcHNpc3BpcGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREdFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0FDQUo7O0FERUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvZWxpcHNpc3BpcGUvZWxpcHNpc3BpcGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcF9jYW52YXMge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIH1cclxuICAgXHJcbiAgIFxyXG4gICNhZGRyZXNzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgIFxyXG4gICNtYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgfVxyXG4gICBcclxuICAubWFwLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBcclxuICAgICNtYXBfY2VudGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNDFweDtcclxuICAgIH1cclxuICB9IiwiI21hcF9jYW52YXMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4jYWRkcmVzcyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHZoO1xufVxuXG4ubWFwLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFwLXdyYXBwZXIgI21hcF9jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gIG1hcmdpbi10b3A6IC00MXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/elipsispipe/elipsispipe.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/elipsispipe/elipsispipe.page.ts ***!
    \*************************************************/

  /*! exports provided: ElipsispipePage */

  /***/
  function srcAppElipsispipeElipsispipePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElipsispipePage", function () {
      return ElipsispipePage;
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


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");

    var ElipsispipePage = /*#__PURE__*/function () {
      function ElipsispipePage(geolocation, nativeGeocoder) {
        _classCallCheck(this, ElipsispipePage);

        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
      }

      _createClass(ElipsispipePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadMap();
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          var _this = this;

          this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var mapOptions = {
              center: latLng,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            _this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);

            _this.map.addListener('dragend', function () {
              _this.latitude = _this.map.center.lat();
              _this.longitude = _this.map.center.lng();

              _this.getAddressFromCoords(_this.map.center.lat(), _this.map.center.lng());
            });
          })["catch"](function (error) {
            console.log('Error getting location', error);
          });
        }
      }, {
        key: "getAddressFromCoords",
        value: function getAddressFromCoords(lattitude, longitude) {
          var _this2 = this;

          console.log("getAddressFromCoords " + lattitude + " " + longitude);
          var options = {
            useLocale: true,
            maxResults: 5
          };
          this.nativeGeocoder.reverseGeocode(lattitude, longitude, options).then(function (result) {
            _this2.address = "";
            var responseAddress = [];

            for (var _i = 0, _Object$entries = Object.entries(result[0]); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];

              if (value.length > 0) responseAddress.push(value);
            }

            responseAddress.reverse();

            for (var _i2 = 0, _responseAddress = responseAddress; _i2 < _responseAddress.length; _i2++) {
              var _value = _responseAddress[_i2];
              _this2.address += _value + ", ";
            }

            _this2.address = _this2.address.slice(0, -2);
          })["catch"](function (error) {
            _this2.address = "Address Not Available!";
          });
        }
      }]);

      return ElipsispipePage;
    }();

    ElipsispipePage.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ElipsispipePage.prototype, "mapElement", void 0);
    ElipsispipePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-elipsispipe',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./elipsispipe.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/elipsispipe/elipsispipe.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./elipsispipe.page.scss */
      "./src/app/elipsispipe/elipsispipe.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"]])], ElipsispipePage);
    /***/
  }
}]);
//# sourceMappingURL=elipsispipe-elipsispipe-module-es5.js.map