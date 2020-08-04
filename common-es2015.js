(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-729ec402.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-729ec402.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (el) => {
    return (el.children != null) ? el.children : el.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/find-friends/find-friends.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/find-friends/find-friends.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n<div class=\"main-div\">\r\n  <div class=\"success-market\">Hello! What would you like to do first?\r\n  </div>\r\n\r\n  <div class=\"last-tab-button\" routerLink=\"/chat/searchUser\">\r\n    <div class=\"continue-button-last singin-lasts\">\r\n      Find Friends\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"or\">OR</div>\r\n\r\n\r\n  <div class=\"last-tab-button\" routerLink=\"/optional-detail\">\r\n    <div class=\"continue-button-last-blue singin-last\">\r\n      Finish My Profile\r\n    </div>\r\n\r\n    <div class=\"success-market\">Your Profile is currently X% complete. Our members who share more information in\r\n      their profile get better results. But, if you don’t want to finish now you can add to your profile later at\r\n      any time.</div>\r\n  </div>\r\n<div class=\"update-profile-container\" routerLink=\"/\">\r\n  <ion-icon name=\"arrow-forward-outline\"></ion-icon>&nbsp;<span class=\"update-later\">Update Profile Later</span>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/FavoriteUsers/FavoriteUsers.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/FavoriteUsers/FavoriteUsers.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"background\">\r\n    <div class=\"members-grid\" *ngFor=\"let favorite of uniqueFavorite\" routerLink=\"/popup/{{favorite[0].uid}}\">\r\n      <div class=\"photo-member-grid\">\r\n        <img src={{favorite[0].picture}} class=\"image-profile\">\r\n      </div>\r\n      <div class=\"data-member-grid\">\r\n        <p class=\"name card-item\">{{favorite[0].name}}</p>\r\n        <ion-label class=\"hobbies card-item \"><span class=\"left-heading\">Activities:&nbsp;</span><span\r\n            class=\"activities_values\" *ngFor=\"let activity of favorite[0].activities\">\r\n            {{activity.value}}\r\n          </span>.\r\n        </ion-label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/no-result-found/no-result-found.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/no-result-found/no-result-found.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"no-result-found\">\n\n  <div class= \"popup-no-result\">\n    <div class=\"no-result-background\">\n      <div class=\"crosss-sign\" routerLink=\"/\">\n        <img src=\"../../assets/Images/cross.png\" class=\"cross-image\">\n      </div>\n    <div class=\"no-result-popup-content\">\n      Looks like we have not yet expanded to your area. Click here to suggest that we come to you next!<br>\n      <span (click)=\"email()\">Click here </span>to suggest that we come to you next\n    </div>\n  \n  </div>\n</div>\n  </div>\n");

/***/ }),

/***/ "./src/app/Signin/find-friends/find-friends-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/Signin/find-friends/find-friends-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: FindFriendsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindFriendsPageRoutingModule", function() { return FindFriendsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _find_friends_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-friends.page */ "./src/app/Signin/find-friends/find-friends.page.ts");




const routes = [
    {
        path: '',
        component: _find_friends_page__WEBPACK_IMPORTED_MODULE_3__["FindFriendsPage"]
    }
];
let FindFriendsPageRoutingModule = class FindFriendsPageRoutingModule {
};
FindFriendsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FindFriendsPageRoutingModule);



/***/ }),

/***/ "./src/app/Signin/find-friends/find-friends.module.ts":
/*!************************************************************!*\
  !*** ./src/app/Signin/find-friends/find-friends.module.ts ***!
  \************************************************************/
/*! exports provided: FindFriendsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindFriendsPageModule", function() { return FindFriendsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _find_friends_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./find-friends-routing.module */ "./src/app/Signin/find-friends/find-friends-routing.module.ts");
/* harmony import */ var _find_friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./find-friends.page */ "./src/app/Signin/find-friends/find-friends.page.ts");
/* harmony import */ var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Navigation/NavigationBar/navigationbar.module */ "./src/app/Navigation/NavigationBar/navigationbar.module.ts");








let FindFriendsPageModule = class FindFriendsPageModule {
};
FindFriendsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _find_friends_routing_module__WEBPACK_IMPORTED_MODULE_5__["FindFriendsPageRoutingModule"], _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_7__["NavigationbarModule"]
        ],
        exports: [_find_friends_page__WEBPACK_IMPORTED_MODULE_6__["FindFriendsPage"]],
        declarations: [_find_friends_page__WEBPACK_IMPORTED_MODULE_6__["FindFriendsPage"]]
    })
], FindFriendsPageModule);



/***/ }),

/***/ "./src/app/Signin/find-friends/find-friends.page.scss":
/*!************************************************************!*\
  !*** ./src/app/Signin/find-friends/find-friends.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".success-market {\n  text-align: center;\n  margin: 2em;\n  font-size: 18px;\n  margin-bottom: 0em;\n}\n\n.under-text-button {\n  color: #ada2a2;\n}\n\n.continue-button-last {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  margin-bottom: 0px;\n}\n\n.button-last {\n  text-align: center;\n  margin: 0em 3em;\n}\n\n.singin-lasts {\n  margin-bottom: 2em !important;\n}\n\n.continue-button-last-blue {\n  background-color: #4372C4;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.login-buton {\n  width: 100vw;\n}\n\np.heading-login {\n  text-align: center;\n  font-size: 20px;\n}\n\n.or {\n  width: 100vw;\n  text-align: center;\n}\n\n.main-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: white;\n  height: 100%;\n  overflow: scroll;\n}\n\n@media screen and (max-width: 320px) {\n  .success-market {\n    text-align: center;\n    margin: 2em;\n    font-size: 16px;\n  }\n}\n\n.update-profile-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n  margin: 1em;\n  margin-left: 0px;\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvU2lnbmluL2ZpbmQtZnJpZW5kcy9maW5kLWZyaWVuZHMucGFnZS5zY3NzIiwic3JjL2FwcC9TaWduaW4vZmluZC1mcmllbmRzL2ZpbmQtZnJpZW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNJLDZCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRko7O0FESUE7RUFFSTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUNGTjtBQUNGOztBREtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL1NpZ25pbi9maW5kLWZyaWVuZHMvZmluZC1mcmllbmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWNjZXNzLW1hcmtldCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBlbTtcclxufVxyXG5cclxuLnVuZGVyLXRleHQtYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjYWRhMmEyO1xyXG59XHJcblxyXG4uY29udGludWUtYnV0dG9uLWxhc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLWxhc3Qge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwZW0gM2VtO1xyXG5cclxufVxyXG5cclxuLnNpbmdpbi1sYXN0cyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRpbnVlLWJ1dHRvbi1sYXN0LWJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNzJDNDtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hcmdpbjogMmVtO1xyXG5cclxufVxyXG5cclxuLmxvZ2luLWJ1dG9uIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxucC5oZWFkaW5nLWxvZ2luIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm9yIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4tZGl2IHtcclxuICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjBweClcclxue1xyXG4gICAgLnN1Y2Nlc3MtbWFya2V0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIFxyXG59XHJcbn1cclxuLnVwZGF0ZS1wcm9maWxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59IiwiLnN1Y2Nlc3MtbWFya2V0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJlbTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwZW07XG59XG5cbi51bmRlci10ZXh0LWJ1dHRvbiB7XG4gIGNvbG9yOiAjYWRhMmEyO1xufVxuXG4uY29udGludWUtYnV0dG9uLWxhc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uYnV0dG9uLWxhc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMGVtIDNlbTtcbn1cblxuLnNpbmdpbi1sYXN0cyB7XG4gIG1hcmdpbi1ib3R0b206IDJlbSAhaW1wb3J0YW50O1xufVxuXG4uY29udGludWUtYnV0dG9uLWxhc3QtYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzcyQzQ7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xufVxuXG4ubG9naW4tYnV0b24ge1xuICB3aWR0aDogMTAwdnc7XG59XG5cbnAuaGVhZGluZy1sb2dpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ub3Ige1xuICB3aWR0aDogMTAwdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW4tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5zdWNjZXNzLW1hcmtldCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMmVtO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLnVwZGF0ZS1wcm9maWxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/Signin/find-friends/find-friends.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/Signin/find-friends/find-friends.page.ts ***!
  \**********************************************************/
/*! exports provided: FindFriendsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindFriendsPage", function() { return FindFriendsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FindFriendsPage = class FindFriendsPage {
    constructor() { }
    ngOnInit() {
    }
};
FindFriendsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-find-friends',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./find-friends.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Signin/find-friends/find-friends.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./find-friends.page.scss */ "./src/app/Signin/find-friends/find-friends.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FindFriendsPage);



/***/ }),

/***/ "./src/app/chat/FavoriteUsers/FavoriteUsers-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/chat/FavoriteUsers/FavoriteUsers-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: FavoriteUsersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteUsersPageRoutingModule", function() { return FavoriteUsersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _FavoriteUsers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FavoriteUsers.page */ "./src/app/chat/FavoriteUsers/FavoriteUsers.page.ts");




const routes = [
    {
        path: '',
        component: _FavoriteUsers_page__WEBPACK_IMPORTED_MODULE_3__["FavoriteUsersPage"]
    }
];
let FavoriteUsersPageRoutingModule = class FavoriteUsersPageRoutingModule {
};
FavoriteUsersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FavoriteUsersPageRoutingModule);



/***/ }),

/***/ "./src/app/chat/FavoriteUsers/FavoriteUsers.module.ts":
/*!************************************************************!*\
  !*** ./src/app/chat/FavoriteUsers/FavoriteUsers.module.ts ***!
  \************************************************************/
/*! exports provided: FavoriteUsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteUsersPageModule", function() { return FavoriteUsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _FavoriteUsers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FavoriteUsers-routing.module */ "./src/app/chat/FavoriteUsers/FavoriteUsers-routing.module.ts");
/* harmony import */ var _Navigati_Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Navigati../../Navigation/NavigationBar/navigationbar.module */ "./src/app/Navigation/NavigationBar/navigationbar.module.ts");
/* harmony import */ var _FavoriteUsers_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FavoriteUsers.page */ "./src/app/chat/FavoriteUsers/FavoriteUsers.page.ts");








let FavoriteUsersPageModule = class FavoriteUsersPageModule {
};
FavoriteUsersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _FavoriteUsers_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoriteUsersPageRoutingModule"],
            _Navigati_Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_6__["NavigationbarModule"]
        ],
        declarations: [_FavoriteUsers_page__WEBPACK_IMPORTED_MODULE_7__["FavoriteUsersPage"]]
    })
], FavoriteUsersPageModule);



/***/ }),

/***/ "./src/app/chat/FavoriteUsers/FavoriteUsers.page.scss":
/*!************************************************************!*\
  !*** ./src/app/chat/FavoriteUsers/FavoriteUsers.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".members-grid {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  justify-content: center;\n  align-content: center;\n  border: 1px solid;\n  margin: 1em;\n}\n\n.data-member-grid {\n  margin-left: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-right: 1em;\n}\n\np {\n  margin-bottom: 1em;\n  font-size: 17px;\n}\n\np {\n  margin-bottom: 0px;\n}\n\nimg.image-profile {\n  height: 16vh;\n  width: 100%;\n}\n\n.hobbies {\n  font-family: \"Open Sans\", sans-serif;\n  /* font-style: normal; */\n  /* display: block; */\n  display: -webkit-box;\n  /* max-width: 100%; */\n  /* height: 43px; */\n  /* margin: 0 auto; */\n  font-size: 14px;\n  /* line-height: 1; */\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvY2hhdC9GYXZvcml0ZVVzZXJzL0Zhdm9yaXRlVXNlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9jaGF0L0Zhdm9yaXRlVXNlcnMvRmF2b3JpdGVVc2Vycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxvQ0FBQTtFQUdBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jaGF0L0Zhdm9yaXRlVXNlcnMvRmF2b3JpdGVVc2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVtYmVycy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbn1cclxuXHJcbi5kYXRhLW1lbWJlci1ncmlkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5cclxucCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbmltZy5pbWFnZS1wcm9maWxlIHtcclxuICAgIGhlaWdodDogMTZ2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaG9iYmllcyB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsXHJcbiAgICAgICAgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAvKiBmb250LXN0eWxlOiBub3JtYWw7ICovXHJcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLyogbWF4LXdpZHRoOiAxMDAlOyAqL1xyXG4gICAgLyogaGVpZ2h0OiA0M3B4OyAqL1xyXG4gICAgLyogbWFyZ2luOiAwIGF1dG87ICovXHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAvKiBsaW5lLWhlaWdodDogMTsgKi9cclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn0iLCIubWVtYmVycy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5kYXRhLW1lbWJlci1ncmlkIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmltZy5pbWFnZS1wcm9maWxlIHtcbiAgaGVpZ2h0OiAxNnZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhvYmJpZXMge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgLyogZm9udC1zdHlsZTogbm9ybWFsOyAqL1xuICAvKiBkaXNwbGF5OiBibG9jazsgKi9cbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIG1heC13aWR0aDogMTAwJTsgKi9cbiAgLyogaGVpZ2h0OiA0M3B4OyAqL1xuICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cbiAgZm9udC1zaXplOiAxNHB4O1xuICAvKiBsaW5lLWhlaWdodDogMTsgKi9cbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/chat/FavoriteUsers/FavoriteUsers.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/chat/FavoriteUsers/FavoriteUsers.page.ts ***!
  \**********************************************************/
/*! exports provided: FavoriteUsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteUsersPage", function() { return FavoriteUsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FavoriteUsersPage = class FavoriteUsersPage {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.itrs = JSON.parse(localStorage.getItem("currentUser"));
        this.http
            .get("https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid)
            .subscribe((users) => {
            this.allfavorate = users;
            this.listFavorate = this.allfavorate.field_favorite_users.und[0].value;
            this.ParseFavorate = JSON.parse(this.listFavorate);
            this.uniqueFavorite = this.removeDuplicatesBy((x) => x[0].name, this.ParseFavorate);
            console.log(this.uniqueFavorite);
            console.log(this.ParseFavorate);
        });
    }
    removeDuplicatesBy(keyFn, array) {
        var mySet = new Set();
        return array.filter(function (x) {
            var key = keyFn(x), isNew = !mySet.has(key);
            if (isNew)
                mySet.add(key);
            return isNew;
        });
    }
};
FavoriteUsersPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FavoriteUsersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-FavoriteUsers",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./FavoriteUsers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/FavoriteUsers/FavoriteUsers.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./FavoriteUsers.page.scss */ "./src/app/chat/FavoriteUsers/FavoriteUsers.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], FavoriteUsersPage);



/***/ }),

/***/ "./src/app/welcome/no-result-found/no-result-found-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/welcome/no-result-found/no-result-found-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: NoResultFoundPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoResultFoundPageRoutingModule", function() { return NoResultFoundPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _no_result_found_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-result-found.page */ "./src/app/welcome/no-result-found/no-result-found.page.ts");




const routes = [
    {
        path: '',
        component: _no_result_found_page__WEBPACK_IMPORTED_MODULE_3__["NoResultFoundPage"]
    }
];
let NoResultFoundPageRoutingModule = class NoResultFoundPageRoutingModule {
};
NoResultFoundPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NoResultFoundPageRoutingModule);



/***/ }),

/***/ "./src/app/welcome/no-result-found/no-result-found.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/welcome/no-result-found/no-result-found.module.ts ***!
  \*******************************************************************/
/*! exports provided: NoResultFoundPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoResultFoundPageModule", function() { return NoResultFoundPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _no_result_found_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./no-result-found-routing.module */ "./src/app/welcome/no-result-found/no-result-found-routing.module.ts");
/* harmony import */ var _no_result_found_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./no-result-found.page */ "./src/app/welcome/no-result-found/no-result-found.page.ts");







let NoResultFoundPageModule = class NoResultFoundPageModule {
};
NoResultFoundPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _no_result_found_routing_module__WEBPACK_IMPORTED_MODULE_5__["NoResultFoundPageRoutingModule"]
        ],
        exports: [_no_result_found_page__WEBPACK_IMPORTED_MODULE_6__["NoResultFoundPage"]],
        declarations: [_no_result_found_page__WEBPACK_IMPORTED_MODULE_6__["NoResultFoundPage"]]
    })
], NoResultFoundPageModule);



/***/ }),

/***/ "./src/app/welcome/no-result-found/no-result-found.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/welcome/no-result-found/no-result-found.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-result-found {\n  background-color: #00000078;\n  /* position: absolute; */\n  height: 100vh;\n  z-index: 1000;\n}\n\n.popup-no-result {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0em 3em;\n  text-align: center;\n}\n\n.no-result-background {\n  background-color: white;\n  border-radius: 12px;\n}\n\n.no-result-popup-content {\n  padding: 1em 2em;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 200;\n}\n\n.green-button {\n  background-color: green;\n  padding: 0.5em;\n  border-radius: 7px;\n  text-align: center;\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 15px;\n  font-weight: 200;\n  margin: 1em 0px;\n}\n\nimg.cross-image {\n  height: 3vh;\n}\n\n.crosss-sign {\n  float: right;\n  margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvd2VsY29tZS9uby1yZXN1bHQtZm91bmQvbm8tcmVzdWx0LWZvdW5kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2VsY29tZS9uby1yZXN1bHQtZm91bmQvbm8tcmVzdWx0LWZvdW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUU7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURBQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREk7RUFDRSxXQUFBO0FDSU47O0FERkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS9uby1yZXN1bHQtZm91bmQvbm8tcmVzdWx0LWZvdW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1yZXN1bHQtZm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA3ODtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG4gIC5wb3B1cC1uby1yZXN1bHQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwZW0gM2VtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubm8tcmVzdWx0LWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5uby1yZXN1bHQtcG9wdXAtY29udGVudCB7XG4gICAgcGFkZGluZzogMWVtIDJlbTtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uZ3JlZW4tYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIG1hcmdpbjogMWVtIDBweDtcbiAgICB9XG4gICAgaW1nLmNyb3NzLWltYWdlIHtcbiAgICAgIGhlaWdodDogM3ZoO1xuICB9XG4gIC5jcm9zc3Mtc2lnbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogMWVtO1xufSIsIi5uby1yZXN1bHQtZm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNzg7XG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLnBvcHVwLW5vLXJlc3VsdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMGVtIDNlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm8tcmVzdWx0LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLm5vLXJlc3VsdC1wb3B1cC1jb250ZW50IHtcbiAgcGFkZGluZzogMWVtIDJlbTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5ncmVlbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgcGFkZGluZzogMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbjogMWVtIDBweDtcbn1cblxuaW1nLmNyb3NzLWltYWdlIHtcbiAgaGVpZ2h0OiAzdmg7XG59XG5cbi5jcm9zc3Mtc2lnbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/welcome/no-result-found/no-result-found.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/welcome/no-result-found/no-result-found.page.ts ***!
  \*****************************************************************/
/*! exports provided: NoResultFoundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoResultFoundPage", function() { return NoResultFoundPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");



var app;
let NoResultFoundPage = class NoResultFoundPage {
    constructor(emailComposer) {
        this.emailComposer = emailComposer;
    }
    ngOnInit() {
    }
    email() {
        this.emailComposer.getClients().then((apps) => {
            // Returns an array of configured email clients for the device
        });
        this.emailComposer.hasClient().then(app, (isValid) => {
            if (isValid) {
                // Now we know we have a valid email client configured
                // Not specifying an app will return true if at least one email client is configured
            }
        });
        this.emailComposer.hasAccount().then((isValid) => {
            if (isValid) {
                // Now we know we have a valid email account configured
            }
        });
        this.emailComposer.isAvailable().then(app, (available) => {
            if (available) {
                // Now we know we can send an email, calls hasClient and hasAccount
                // Not specifying an app will return true if at least one email client is configured
            }
        });
        let email = {
            to: 'ritin.nijhawan@gmail.com',
            cc: 'ritin.nijhawan7838@gmail.com',
            attachments: [
                'file://img/logo.png',
                'res://icon.png',
                'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
                'file://README.pdf'
            ],
            subject: 'Cordova Icons',
            body: 'How are you? Nice greetings from Leipzig',
            isHtml: true
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    }
};
NoResultFoundPage.ctorParameters = () => [
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_2__["EmailComposer"] }
];
NoResultFoundPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-no-result-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./no-result-found.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/no-result-found/no-result-found.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./no-result-found.page.scss */ "./src/app/welcome/no-result-found/no-result-found.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_2__["EmailComposer"]])
], NoResultFoundPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map