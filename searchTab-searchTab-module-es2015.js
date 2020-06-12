(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searchTab-searchTab-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/searchTab/searchTab.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/searchTab/searchTab.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"background-card\">\n  <div class=\"background\" *ngIf=\"search\">\n    <div class=\"forms-field\">\n      <div class=\"form-group\">\n        <label for=\"sel1\">Show me:</label>\n        <select class=\"form-control\" id=\"sel1\" name=\"gender\" [(ngModel)]=\"gender\">\n          <option value=\"Male\"> Male</option>\n          <option value=\"Female\">Female</option>\n          <option value=\"Gender Diverse\" selected=\"selected\">Gender Diverse</option>\n         \n        </select>\n        <span class=\"under-text\"></span>\n      </div>\n\n\n      <label for=\"age\">Aged</label>\n      <div class=\"dropdown-aged\">\n        <div class=\"form-group\">\n\n          <select class=\"form-control\" id=\"age\">\n            <option>20</option>\n            <option>25</option>\n            <option>30</option>\n          </select>\n        </div>\n        <span class=\"to\">To</span>\n        <div class=\"form-group\">\n\n          <select class=\"form-control\" id=\"age\">\n            <option>20</option>\n            <option>25</option>\n            <option>30</option>\n          </select>\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n \n        <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"  placeholder=\"Enter Postcode\" name=\"Postcode\" [(ngModel)]=\"Postcode\">\n        \n      </div>\n      <div class=\"form-group\">\n        <label for=\"sel1\">Country</label>\n        <select class=\"form-control\" id=\"sel1\" name=\"live\" [(ngModel)]=\"live\">\n          <option value=\"us\" selected=\"selected\">US</option>\n          <option value=\"ca\">Canada</option>\n          <option value=\"in\">India</option>\n          <option value=\"gb\">UK</option>\n          <option value=\"au\">Australia</option>\n          <option value=\"nz\">New Zealand</option>\n          <option value=\"sg\">Singapore</option>\n        </select>\n        <span class=\"under-text\"></span>\n      </div>\n\n      <label for=\"age\">of me, who are looking for</label>\n      <div class=\"form-group\">\n        <select class=\"form-control\" id=\"sel1\" name=\"meet\" [(ngModel)]=\"meet\">\n          <option value=\"1\">A few goods friends</option>\n          <option value=\"2\">A lot of accquaintances</option>\n          <option value=\"3\">No preference</option>\n\n\n        </select>\n        <span class=\"under-text\"></span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"usr\">And Likes</label>\n          <select class=\"form-control\" id=\"sel1\" name=\"activity\" [(ngModel)]=\"activity\">\n            <option value=\"yoga\" #yogas>yoga</option>\n            <option value=\"playdates (parents and children)\" #playdatess>playdates (parents and children)\n            </option >\n            <option value=\"happy hour/cocktails/beers\" #beers>happy hour/cocktails/beers\n            </option >\n            <option value=\"sightseeing\" #sightseeings>sightseeing</option >\n            <option value=\"artsy stuff (making or looking at)\" #artsy>artsy stuff (making or looking at)\n            </option >\n            <option value=\"cooking\" #cook>cooking</option >\n            <option value=\"dancing\" #dancing>dancing</option >\n            <option value=\"people watching\" #watching>people watching</option >\n            <option value=\"video games\" #games>video games</option >\n            <option value=\"traveling/vacations\" #traveling>traveling/vacations</option >\n\n            <option value=\"history buff\" #history>history buff</option >\n            <option value=\"board games\" #board>board games</option >\n            <option value=\"sports (playing)\" #sports>sports (playing)</option >\n            <option value=\"mom's/dad's night out w/o kids\" #mom>mom's/dad's night out w/o kids\n            </option >\n          </select>\n    \n      </div>\n      <div class=\"form-group\">\n        <label for=\"age\">Sort By</label>\n        <select class=\"form-control\" id=\"sel1\">\n          <option>Best Match</option>\n          <option>Recent Logins</option>\n          <option>Newest Members</option>\n        </select>\n      </div>\n    </div>\n \n\n\n    <div class=\"continue-button\" (click)=\"searchResult()\">\n      Find Friends\n    </div>\n\n    <div class=\"alreday-member\">\n      Reset Filter\n    </div>\n  </div>\n\n<div>\n  <div class=\"background\" *ngIf=\"searchitem\">\n    <div class=\"members-grid\" *ngFor=\"let result of searchResults\" (click)=\"userDetails()\" routerLink=\"/popup/{{result.Uid}}\">\n\n      <div class=\"photo-member-grid\">\n    <img src=\"{{result.Picture}}\" alt=\"\" srcset=\"\" class=\"user-image\">\n      </div>\n\n      <div class=\"data-member-grid\">\n        <div class=\"grid-name\">\n          {{result.name}}\n        </div>\n        \n        <div class=\"left-heading\">Activities:&nbsp;{{result.Activities}}</div>\n       \n        <div class=\"distance-container\">\n          <div class=\"distance card-item\">Distance:</div>\n          <div class=\"distance-ouput\">1 miles away</div>\n          \n            </div>\n\n       \n\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n<div class=\"popup-chat-page\" *ngIf=\"chatpage\">\n<p class=\"pop-up chat-page-text\">Hello!  What are you currently reading or listening to?  </p>\n<p class=\"pop-up chat-page-text\">Hey there!  What is one thing that always makes you laugh or puts a smile on your face? </p>\n<p class=\"pop-up chat-page-text\">Hiyah!  What is one thing you are looking forward to in the next few months and wouldn’t miss for the world?  \n</p>\n<p class=\"pop-up chat-page-text\">Hi! What did you do on your best day ever?</p>\n<p class=\"pop-up chat-page-text\">Helloooo!  What is the best gift you have ever given?   </p>\n\n\n<div class=\"form-group\">\n  <input type=\"text\" class=\"form-control\" id=\"usr\">\n</div>\n\n<div class=\"continue-button\" (click)=\"sendMsg()\">\n  Send\n</div>\n</div>\n\n\n<div class=\"not-found-result\" *ngIf=\"notfound\">\n <div class=\"not-found-result-container-second\">\n\n<div class=\"align-box-not-found\">\n<div class=\"not-found-result-data\">\n \n  <div class=\"content-not-found\">\n \n   <div class=\"mot-found-text\">Oops Not found Matches</div>\n   <button type=\"submit\" class=\"btn btn-primary\" (click)=\"notFoundResult()\">Goback</button>\n\n\n  </div>\n\n\n</div>\n\n</div>\n\n </div>\n\n\n\n\n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!--Modal-->\n  <div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n      \n   \n        \n        <!-- Modal body -->\n        <div class=\"modal-body\">\n\n\n          \n          <div class=\"modal-grid\">\n       \n               <div class=\"profile-picture-modal\">\n                <img src=\"../../assets/Images/p1.jpg\" class=\"image-profile\">\n\n               </div>\n\n               <div class=\"profile-name-modal\">\n                 <span class=\"name\">{{name}}</span>\n                 <span class=\"not-verified\">Verified</span>\n\n              </div>\n\n          </div>\n\n<div class=\"siderbar-icon-data\">\n  <div class=\"side-bar-icon\">\n    <div class=\"group-text-image\">\n   <img src=\"../../assets/Images/popchat.png\" class=\"chat-bubble\" data-dismiss=\"modal\" (click)=\"chatOpenPage()\">\n   <span class=\"name-icon\">Chat</span>\n  </div>\n  <div class=\"group-text-image\">\n   <img src=\"../../assets/Images/star.png\" class=\"chat-bubble\">\n   <span class=\"name-icon\">Favorite</span>\n  </div>\n  <div class=\"group-text-image\">\n   <img src=\"../../assets/Images/sign.png\" class=\"chat-bubble\" data-dismiss=\"modal\">\n  </div>\n<div class=\"group-text-image mt-3\">\n  <span class=\"name-icon\">Never See again</span>\n  <img src=\"../../assets/Images/feeling.png\" class=\"chat-bubble mb-3\">\n</div>\n\n<div class=\"group-text-image\">\n   <span class=\"name-icon\">Report to admin</span>\n  </div>\n  </div>\n<div class=\"sidebar-content\">\n<p class=\"detail-data\">FullName:<br><span class=\"output-text\">Lorem10</span></p>\n<p class=\"detail-data\">Activities:<br><span class=\"output-text\">Lorem,lorem,lorem...</span></p>\n<p class=\"detail-data\">Favorate Music:<br><span class=\"output-text\">English,Punjabi..</span></p>\n<p class=\"detail-data\">Favorate Show:<br><span class=\"output-text\">Big Bang.</span></p>\n<p class=\"detail-data\">Languages:<br><span class=\"output-text\">Hindi,English</span></p>\n</div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n        </div>\n        \n      \n        \n      </div>\n    </div>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/searchTab/searchTab-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/searchTab/searchTab-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchTabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTabPageRoutingModule", function() { return SearchTabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _searchTab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchTab.page */ "./src/app/searchTab/searchTab.page.ts");




const routes = [
    {
        path: '',
        component: _searchTab_page__WEBPACK_IMPORTED_MODULE_3__["SearchTabPage"]
    }
];
let SearchTabPageRoutingModule = class SearchTabPageRoutingModule {
};
SearchTabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchTabPageRoutingModule);



/***/ }),

/***/ "./src/app/searchTab/searchTab.module.ts":
/*!***********************************************!*\
  !*** ./src/app/searchTab/searchTab.module.ts ***!
  \***********************************************/
/*! exports provided: SearchTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTabPageModule", function() { return SearchTabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _searchTab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchTab-routing.module */ "./src/app/searchTab/searchTab-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _searchTab_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searchTab.page */ "./src/app/searchTab/searchTab.page.ts");








let SearchTabPageModule = class SearchTabPageModule {
};
SearchTabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _searchTab_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchTabPageRoutingModule"],
        ],
        declarations: [_searchTab_page__WEBPACK_IMPORTED_MODULE_7__["SearchTabPage"]]
    })
], SearchTabPageModule);



/***/ }),

/***/ "./src/app/searchTab/searchTab.page.scss":
/*!***********************************************!*\
  !*** ./src/app/searchTab/searchTab.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  overflow-x: auto;\n  margin-top: 7em;\n}\n\n.forms-field {\n  margin: 1em 1em;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n  width: 100%;\n}\n\nspan.to {\n  margin: 0px 1em;\n}\n\n.dropdown-aged {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.form-control {\n  border: 1px solid;\n}\n\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.alreday-member {\n  text-align: center;\n  font-size: 20px;\n  color: red;\n  font-family: \"Open Sans\", sans-serif;\n  margin-top: 0.7em;\n  font-weight: 200;\n  margin-bottom: 0.7em;\n}\n\n.members-grid {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  justify-content: center;\n  align-content: center;\n  border: 1px solid;\n  margin: 1em;\n  height: 17vh;\n}\n\n.data-member-grid {\n  margin-left: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 3vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: 3vw;\n}\n\np {\n  margin-bottom: 0em;\n  font-size: 17px;\n}\n\n.chat-page-text {\n  margin-bottom: 1em;\n}\n\n.modal-grid {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  grid-gap: 11px;\n}\n\n.profile-name-modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.side-bar-icon {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin: 0em;\n}\n\nimg.chat-bubble {\n  width: 46%;\n  margin-top: 1em;\n}\n\n.siderbar-icon-data {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 10px;\n}\n\n.group-text-image {\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.popup-chat-page {\n  margin-top: 7em;\n  margin-left: 1em;\n  text-align: justify;\n  margin-right: 1em;\n}\n\n.modal {\n  background: #000000a1;\n}\n\n.badage-name {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-top: 0.5em;\n}\n\n.badge-font {\n  font-size: 9px;\n}\n\n.right-heading {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.activity-container {\n  display: flex;\n  align-items: center;\n}\n\n.parent-badge {\n  margin-left: 10px;\n}\n\n.distance-container {\n  display: flex;\n}\n\n.left-heading {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  display: block;\n  display: -webkit-box;\n  /* max-width: 100%; */\n  height: 43px;\n  margin: 0 auto;\n  font-size: 14px;\n  /* line-height: 1; */\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.activity-container {\n  display: flex;\n  align-items: center;\n}\n\n.distance-container {\n  display: flex;\n  font-size: 14px;\n}\n\nimg.user-image {\n  width: 100%;\n  height: 16vh;\n}\n\n.grid-nmae {\n  font-size: 14px;\n}\n\n.not-found-result {\n  background-color: #00000091;\n  height: 100vh;\n  top: 0em;\n  position: fixed;\n  width: 100vw;\n  z-index: 1000;\n}\n\n.not-found-result-data {\n  background-color: white;\n  height: 17vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2em;\n}\n\n.not-found-result-container-second {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.align-box-not-found {\n  /* display: flex; */\n  justify-content: center;\n  /* height: 100vh; */\n  z-index: 1000;\n  align-items: center;\n  background-color: white;\n  width: 100vw;\n  margin: 0em 3em;\n  border-radius: 2em;\n}\n\n.content-not-found {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 67%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoVGFiL0s6XFxBbmd1bGFyIFByb2plY3RcXG5vdDREYXRpbmcvc3JjXFxhcHBcXHNlYXJjaFRhYlxcc2VhcmNoVGFiLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VhcmNoVGFiL3NlYXJjaFRhYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxnQkFBQTtFQUNBLGVBQUE7QUNESjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7QUNJSjs7QURGQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0tKOztBREhBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDTUo7O0FESkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ09KOztBRExBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDUUo7O0FETkE7RUFFSSxrQkFBQTtFQUNBLGVBQUE7QUNRSjs7QUROQTtFQUVJLGtCQUFBO0FDUUo7O0FETkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDU0o7O0FEUEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNVSjs7QURSQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ1dKOztBRFRBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUNZSjs7QURWQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNhSjs7QURYQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ2NKOztBRFpBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNlSjs7QURiQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNnQko7O0FEZEE7RUFDSSxxQkFBQTtBQ2lCSjs7QURmQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNpQko7O0FEZkE7RUFDSSxjQUFBO0FDa0JKOztBRGhCQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ21CSjs7QURqQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNvQko7O0FEbEJBO0VBQ0ksaUJBQUE7QUNxQko7O0FEbkJBO0VBQ0ksYUFBQTtBQ3NCSjs7QURwQkE7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDdUJKOztBRHBCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ3VCSjs7QURyQkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQ3dCSjs7QUR0QkE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQ3dCSjs7QUR0QkU7RUFFSSxlQUFBO0FDd0JOOztBRHRCRTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUN5Qko7O0FEdkJBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQzBCSjs7QUR2QkE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUMwQko7O0FEeEJBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDMkJKOztBRHhCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDMkJKIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoVGFiL3NlYXJjaFRhYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZFxyXG57XHJcbiAgIFxyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDdlbTtcclxufVxyXG4uZm9ybXMtZmllbGR7XHJcbiAgICBtYXJnaW46IDFlbSAxZW07XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbnNwYW4udG8ge1xyXG4gICAgbWFyZ2luOiAwcHggMWVtO1xyXG59XHJcbi5kcm9wZG93bi1hZ2VkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW46IDJlbTtcclxufVxyXG4uYWxyZWRheS1tZW1iZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDAuN2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuN2VtO1xyXG59XHJcbi5tZW1iZXJzLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGhlaWdodDogMTd2aDtcclxufVxyXG4uZGF0YS1tZW1iZXItZ3JpZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzdnc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDN2dztcclxufVxyXG5wXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDBlbTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4uY2hhdC1wYWdlLXRleHRcclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcbi5tb2RhbC1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XHJcbiAgICBncmlkLWdhcDogMTFweDtcclxufVxyXG4ucHJvZmlsZS1uYW1lLW1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnNpZGUtYmFyLWljb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW46IDBlbTtcclxufVxyXG5pbWcuY2hhdC1idWJibGUge1xyXG4gICAgd2lkdGg6IDQ2JTtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG4uc2lkZXJiYXItaWNvbi1kYXRhIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxufVxyXG4uZ3JvdXAtdGV4dC1pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uc2lkZWJhci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnBvcHVwLWNoYXQtcGFnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA3ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcbi5tb2RhbHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDBhMTtcclxufVxyXG4uYmFkYWdlLW5hbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcclxufVxyXG4uYmFkZ2UtZm9udCB7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxufVxyXG4ucmlnaHQtaGVhZGluZyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi5hY3Rpdml0eS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnBhcmVudC1iYWRnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uZGlzdGFuY2UtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmxlZnQtaGVhZGluZyB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLyogbWF4LXdpZHRoOiAxMDAlOyAqL1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAvKiBsaW5lLWhlaWdodDogMTsgKi9cclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gIH1cclxuICAuYWN0aXZpdHktY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5kaXN0YW5jZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pbWcudXNlci1pbWFnZSB7XHJcbiAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTZ2aDtcclxuICB9XHJcbiAgLmdyaWQtbm1hZVxyXG4gIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAubm90LWZvdW5kLXJlc3VsdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOTE7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdG9wOiAwZW07XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG59ICAgXHJcbi5ub3QtZm91bmQtcmVzdWx0LWRhdGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDE3dmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gXHJcbn1cclxuLm5vdC1mb3VuZC1yZXN1bHQtY29udGFpbmVyLXNlY29uZCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYWxpZ24tYm94LW5vdC1mb3VuZCB7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1hcmdpbjogMGVtIDNlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIFxyXG59XHJcbi5jb250ZW50LW5vdC1mb3VuZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDY3JTtcclxufSIsIi5iYWNrZ3JvdW5kIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLXRvcDogN2VtO1xufVxuXG4uZm9ybXMtZmllbGQge1xuICBtYXJnaW46IDFlbSAxZW07XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnNwYW4udG8ge1xuICBtYXJnaW46IDBweCAxZW07XG59XG5cbi5kcm9wZG93bi1hZ2VkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xufVxuXG4uYWxyZWRheS1tZW1iZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDAuN2VtO1xuICBmb250LXdlaWdodDogMjAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjdlbTtcbn1cblxuLm1lbWJlcnMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbjogMWVtO1xuICBoZWlnaHQ6IDE3dmg7XG59XG5cbi5kYXRhLW1lbWJlci1ncmlkIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAzdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXJnaW4tcmlnaHQ6IDN2dztcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDBlbTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uY2hhdC1wYWdlLXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5tb2RhbC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xuICBncmlkLWdhcDogMTFweDtcbn1cblxuLnByb2ZpbGUtbmFtZS1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaWRlLWJhci1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtYXJnaW46IDBlbTtcbn1cblxuaW1nLmNoYXQtYnViYmxlIHtcbiAgd2lkdGg6IDQ2JTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4uc2lkZXJiYXItaWNvbi1kYXRhIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICBncmlkLWdhcDogMTBweDtcbn1cblxuLmdyb3VwLXRleHQtaW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2lkZWJhci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wb3B1cC1jaGF0LXBhZ2Uge1xuICBtYXJnaW4tdG9wOiA3ZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG4ubW9kYWwge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTE7XG59XG5cbi5iYWRhZ2UtbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cblxuLmJhZGdlLWZvbnQge1xuICBmb250LXNpemU6IDlweDtcbn1cblxuLnJpZ2h0LWhlYWRpbmcge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmFjdGl2aXR5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wYXJlbnQtYmFkZ2Uge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmRpc3RhbmNlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sZWZ0LWhlYWRpbmcge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIG1heC13aWR0aDogMTAwJTsgKi9cbiAgaGVpZ2h0OiA0M3B4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICAvKiBsaW5lLWhlaWdodDogMTsgKi9cbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmFjdGl2aXR5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaXN0YW5jZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmltZy51c2VyLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTZ2aDtcbn1cblxuLmdyaWQtbm1hZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm5vdC1mb3VuZC1yZXN1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOTE7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRvcDogMGVtO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLm5vdC1mb3VuZC1yZXN1bHQtZGF0YSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDE3dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG59XG5cbi5ub3QtZm91bmQtcmVzdWx0LWNvbnRhaW5lci1zZWNvbmQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFsaWduLWJveC1ub3QtZm91bmQge1xuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cbiAgei1pbmRleDogMTAwMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWFyZ2luOiAwZW0gM2VtO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG59XG5cbi5jb250ZW50LW5vdC1mb3VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiA2NyU7XG59Il19 */");

/***/ }),

/***/ "./src/app/searchTab/searchTab.page.ts":
/*!*********************************************!*\
  !*** ./src/app/searchTab/searchTab.page.ts ***!
  \*********************************************/
/*! exports provided: SearchTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTabPage", function() { return SearchTabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");




let SearchTabPage = class SearchTabPage {
    constructor(ConfigService) {
        this.ConfigService = ConfigService;
        this.activity = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.activityList = ['Yoga', 'Cooking', 'Watching Movies'];
        this.search = true;
        this.searchitem = false;
        this.chatpage = false;
        this.notfound = false;
    }
    ngOnInit() {
        this.itrs = JSON.parse(localStorage.getItem("currentUser"));
        this.Localgender = JSON.parse(localStorage.getItem("gender"));
        if (this.Localgender != null) {
            this.gender = this.Localgender;
        }
        this.Localmeet = JSON.parse(localStorage.getItem("meet"));
        if (this.Localmeet != null) {
            this.meet = this.Localmeet;
        }
        this.Localactivity = JSON.parse(localStorage.getItem("activity"));
        if (this.Localactivity != null) {
            this.activity = this.Localactivity;
        }
        this.Localpostcode = JSON.parse(localStorage.getItem("Postcode"));
        if (this.Localpostcode != null) {
            this.Postcode = this.Localpostcode;
        }
        this.Locallive = JSON.parse(localStorage.getItem("Live"));
        if (this.Localpostcode != null) {
            this.live = this.Locallive;
        }
        //  this.Postcode=this.itrs.user.field_zip_code.und[0].postal_code
        //  this.live =this.itrs.user.field_zip_code.und[0].country
    }
    searchResult() {
        this.search = false;
        this.searchitem = true;
        this.getResult(this.gender, this.meet, this.activity, this.Postcode);
    }
    chatOpenPage() {
        this.search = false;
        this.searchitem = false;
        this.chatpage = true;
    }
    notFoundResult() {
        this.search = true;
        this.searchitem = false;
        this.notfound = false;
    }
    sendMsg() {
        this.searchitem = true;
        this.chatpage = false;
    }
    getResult(gender, meet, activity, Postcode) {
        this.ConfigService.getSearchUrl(gender, meet, activity, Postcode).subscribe((elements) => {
            this.searchResults = elements;
            console.log(this.searchResults.length);
            localStorage.setItem("gender", JSON.stringify(gender));
            localStorage.setItem("meet", JSON.stringify(meet));
            localStorage.setItem("activity", JSON.stringify(activity));
            localStorage.setItem("Postcode", JSON.stringify(Postcode));
            localStorage.setItem("Live", JSON.stringify(this.live));
            if (this.searchResults.length == 0) {
                this.notfound = true;
                console.log("oops no result Found");
            }
            console.log(elements);
        });
    }
    userDetails() {
        this.uid = this.searchResults[0].Uid;
        this.ConfigService.getUser(this.uid).subscribe((data) => {
            this.user = data;
        });
    }
    autofill() {
    }
};
SearchTabPage.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
SearchTabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searchTab',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./searchTab.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/searchTab/searchTab.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./searchTab.page.scss */ "./src/app/searchTab/searchTab.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
], SearchTabPage);



/***/ })

}]);
//# sourceMappingURL=searchTab-searchTab-module-es2015.js.map