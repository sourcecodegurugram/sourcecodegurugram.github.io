function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~chat-chat-module~detail-detail-module~favorate-popup-favorate-popup-module~find-friends-find~f01dcdfd"], {
  /***/
  "./node_modules/@angular/cdk/esm2015/drag-drop.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/drag-drop.js ***!
    \********************************************************/

  /*! exports provided: DragDrop, DragRef, DropListRef, CdkDropList, CDK_DROP_LIST, CDK_DROP_LIST_CONTAINER, moveItemInArray, transferArrayItem, copyArrayItem, DragDropModule, DragDropRegistry, CdkDropListGroup, CDK_DRAG_CONFIG_FACTORY, CDK_DRAG_CONFIG, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder, ɵb */

  /***/
  function node_modulesAngularCdkEsm2015DragDropJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDrop", function () {
      return DragDrop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragRef", function () {
      return DragRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropListRef", function () {
      return DropListRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDropList", function () {
      return CdkDropList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function () {
      return CDK_DROP_LIST;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_CONTAINER", function () {
      return CDK_DROP_LIST_CONTAINER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "moveItemInArray", function () {
      return moveItemInArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transferArrayItem", function () {
      return transferArrayItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "copyArrayItem", function () {
      return copyArrayItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropModule", function () {
      return DragDropModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function () {
      return DragDropRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function () {
      return CdkDropListGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function () {
      return CDK_DRAG_CONFIG_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function () {
      return CDK_DRAG_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDrag", function () {
      return CdkDrag;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function () {
      return CdkDragHandle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function () {
      return CdkDragPreview;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function () {
      return CdkDragPlaceholder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return CDK_DRAG_PARENT;
    });
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Shallow-extends a stylesheet object with another stylesheet object.
     * \@docs-private
     * @param {?} dest
     * @param {?} source
     * @return {?}
     */


    function extendStyles(dest, source) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          dest[key] =
          /** @type {?} */
          source[key];
        }
      }

      return dest;
    }
    /**
     * Toggles whether the native drag interactions should be enabled for an element.
     * \@docs-private
     * @param {?} element Element on which to toggle the drag interactions.
     * @param {?} enable Whether the drag interactions should be enabled.
     * @return {?}
     */


    function toggleNativeDragInteractions(element, enable) {
      /** @type {?} */
      var userSelect = enable ? '' : 'none';
      extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Parses a CSS time value to milliseconds.
     * @param {?} value
     * @return {?}
     */


    function parseCssTimeUnitsToMs(value) {
      // Some browsers will return it in seconds, whereas others will return milliseconds.

      /** @type {?} */
      var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
      return parseFloat(value) * multiplier;
    }
    /**
     * Gets the transform transition duration, including the delay, of an element in milliseconds.
     * @param {?} element
     * @return {?}
     */


    function getTransformTransitionDurationInMs(element) {
      /** @type {?} */
      var computedStyle = getComputedStyle(element);
      /** @type {?} */

      var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
      /** @type {?} */

      var property = transitionedProperties.find(
      /**
      * @param {?} prop
      * @return {?}
      */
      function (prop) {
        return prop === 'transform' || prop === 'all';
      }); // If there's no transition for `all` or `transform`, we shouldn't do anything.

      if (!property) {
        return 0;
      } // Get the index of the property that we're interested in and match
      // it up to the same index in `transition-delay` and `transition-duration`.

      /** @type {?} */


      var propertyIndex = transitionedProperties.indexOf(property);
      /** @type {?} */

      var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
      /** @type {?} */

      var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
      return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
    }
    /**
     * Parses out multiple values from a computed style into an array.
     * @param {?} computedStyle
     * @param {?} name
     * @return {?}
     */


    function parseCssPropertyValue(computedStyle, name) {
      /** @type {?} */
      var value = computedStyle.getPropertyValue(name);
      return value.split(',').map(
      /**
      * @param {?} part
      * @return {?}
      */
      function (part) {
        return part.trim();
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Options that can be used to bind a passive event listener.
     * @type {?}
     */


    var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * Options that can be used to bind an active event listener.
     * @type {?}
     */

    var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
      passive: false
    });
    /**
     * Time in milliseconds for which to ignore mouse events, after
     * receiving a touch event. Used to avoid doing double work for
     * touch devices where the browser fires fake mouse events, in
     * addition to touch events.
     * @type {?}
     */

    var MOUSE_EVENT_IGNORE_TIME = 800;
    /**
     * Reference to a draggable item. Used to manipulate or dispose of the item.
     * \@docs-private
     * @template T
     */

    var DragRef = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} _config
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       * @param {?} _dragDropRegistry
       */
      function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        var _this = this;

        _classCallCheck(this, DragRef);

        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */

        this._passiveTransform = {
          x: 0,
          y: 0
        };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */

        this._activeTransform = {
          x: 0,
          y: 0
        };
        /**
         * Emits when the item is being moved.
         */

        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subscription to pointer movement events.
         */

        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */

        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being scrolled.
         */

        this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being resized.
         */

        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */

        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */

        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */

        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */

        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */

        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */

        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */

        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */

        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */

        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */

        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */

        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */

        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */

        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */

        this.moved = this._moveEvents.asObservable();
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */

        this._pointerDown =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          _this.beforeStarted.next(); // Delegate the event based on whether it started from a handle or the element itself.


          if (_this._handles.length) {
            /** @type {?} */
            var targetHandle = _this._handles.find(
            /**
            * @param {?} handle
            * @return {?}
            */
            function (handle) {
              /** @type {?} */
              var target = event.target;
              return !!target && (target === handle || handle.contains(
              /** @type {?} */
              target));
            });

            if (targetHandle && !_this._disabledHandles.has(targetHandle) && !_this.disabled) {
              _this._initializeDragSequence(targetHandle, event);
            }
          } else if (!_this.disabled) {
            _this._initializeDragSequence(_this._rootElement, event);
          }
        };
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */


        this._pointerMove =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (!_this._hasStartedDragging) {
            /** @type {?} */
            var pointerPosition = _this._getPointerPositionOnPage(event);
            /** @type {?} */


            var distanceX = Math.abs(pointerPosition.x - _this._pickupPositionOnPage.x);
            /** @type {?} */

            var distanceY = Math.abs(pointerPosition.y - _this._pickupPositionOnPage.y);
            /** @type {?} */

            var isOverThreshold = distanceX + distanceY >= _this._config.dragStartThreshold; // Only start dragging after the user has moved more than the minimum distance in either
            // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
            // in the `pointerMove` subscription, because we're not guaranteed to have one move event
            // per pixel of movement (e.g. if the user moves their pointer quickly).

            if (isOverThreshold) {
              /** @type {?} */
              var isDelayElapsed = Date.now() >= _this._dragStartTime + (_this.dragStartDelay || 0);

              if (!isDelayElapsed) {
                _this._endDragSequence(event);

                return;
              } // Prevent other drag sequences from starting while something in the container is still
              // being dragged. This can happen while we're waiting for the drop animation to finish
              // and can cause errors, because some elements might still be moving around.


              if (!_this._dropContainer || !_this._dropContainer.isDragging()) {
                _this._hasStartedDragging = true;

                _this._ngZone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this._startDragSequence(event);
                });
              }
            }

            return;
          } // We only need the preview dimensions if we have a boundary element.


          if (_this._boundaryElement) {
            // Cache the preview element rect if we haven't cached it already or if
            // we cached it too early before the element dimensions were computed.
            if (!_this._previewRect || !_this._previewRect.width && !_this._previewRect.height) {
              _this._previewRect = (_this._preview || _this._rootElement).getBoundingClientRect();
            }
          }
          /** @type {?} */


          var constrainedPointerPosition = _this._getConstrainedPointerPosition(event);

          _this._hasMoved = true;
          event.preventDefault();

          _this._updatePointerDirectionDelta(constrainedPointerPosition);

          if (_this._dropContainer) {
            _this._updateActiveDropContainer(constrainedPointerPosition);
          } else {
            /** @type {?} */
            var activeTransform = _this._activeTransform;
            activeTransform.x = constrainedPointerPosition.x - _this._pickupPositionOnPage.x + _this._passiveTransform.x;
            activeTransform.y = constrainedPointerPosition.y - _this._pickupPositionOnPage.y + _this._passiveTransform.y;

            _this._applyRootElementTransform(activeTransform.x, activeTransform.y); // Apply transform as attribute if dragging and svg element to work for IE


            if (typeof SVGElement !== 'undefined' && _this._rootElement instanceof SVGElement) {
              /** @type {?} */
              var appliedTransform = "translate(".concat(activeTransform.x, " ").concat(activeTransform.y, ")");

              _this._rootElement.setAttribute('transform', appliedTransform);
            }
          } // Since this event gets fired for every pixel while dragging, we only
          // want to fire it if the consumer opted into it. Also we have to
          // re-enter the zone because we run all of the events on the outside.


          if (_this._moveEvents.observers.length) {
            _this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this._moveEvents.next({
                source: _this,
                pointerPosition: constrainedPointerPosition,
                event: event,
                distance: _this._getDragDistance(constrainedPointerPosition),
                delta: _this._pointerDirectionDelta
              });
            });
          }
        };
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */


        this._pointerUp =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          _this._endDragSequence(event);
        };

        this.withRootElement(element);

        _dragDropRegistry.registerDragItem(this);
      }
      /**
       * Whether starting to drag this element is disabled.
       * @return {?}
       */


      _createClass(DragRef, [{
        key: "getPlaceholderElement",

        /**
         * Returns the element that is being used as a placeholder
         * while the current element is being dragged.
         * @return {?}
         */
        value: function getPlaceholderElement() {
          return this._placeholder;
        }
        /**
         * Returns the root draggable element.
         * @return {?}
         */

      }, {
        key: "getRootElement",
        value: function getRootElement() {
          return this._rootElement;
        }
        /**
         * Registers the handles that can be used to drag the element.
         * @template THIS
         * @this {THIS}
         * @param {?} handles
         * @return {THIS}
         */

      }, {
        key: "withHandles",
        value: function withHandles(handles) {
          /** @type {?} */
          this._handles = handles.map(
          /**
          * @param {?} handle
          * @return {?}
          */
          function (handle) {
            return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(handle);
          });

          /** @type {?} */
          this._handles.forEach(
          /**
          * @param {?} handle
          * @return {?}
          */
          function (handle) {
            return toggleNativeDragInteractions(handle, false);
          });

          /** @type {?} */
          this._toggleNativeDragInteractions();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Registers the template that should be used for the drag preview.
         * @template THIS
         * @this {THIS}
         * @param {?} template Template that from which to stamp out the preview.
         * @return {THIS}
         */

      }, {
        key: "withPreviewTemplate",
        value: function withPreviewTemplate(template) {
          /** @type {?} */
          this._previewTemplate = template;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Registers the template that should be used for the drag placeholder.
         * @template THIS
         * @this {THIS}
         * @param {?} template Template that from which to stamp out the placeholder.
         * @return {THIS}
         */

      }, {
        key: "withPlaceholderTemplate",
        value: function withPlaceholderTemplate(template) {
          /** @type {?} */
          this._placeholderTemplate = template;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets an alternate drag root element. The root element is the element that will be moved as
         * the user is dragging. Passing an alternate root element is useful when trying to enable
         * dragging on an element that you might not have access to.
         * @template THIS
         * @this {THIS}
         * @param {?} rootElement
         * @return {THIS}
         */

      }, {
        key: "withRootElement",
        value: function withRootElement(rootElement) {
          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(rootElement);

          if (element !==
          /** @type {?} */
          this._rootElement) {
            if (
            /** @type {?} */
            this._rootElement) {
              /** @type {?} */
              this._removeRootElementListeners(
              /** @type {?} */
              this._rootElement);
            }

            element.addEventListener('mousedown',
            /** @type {?} */
            this._pointerDown, activeEventListenerOptions);
            element.addEventListener('touchstart',
            /** @type {?} */
            this._pointerDown, passiveEventListenerOptions);

            /** @type {?} */
            this._initialTransform = undefined;

            /** @type {?} */
            this._rootElement = element;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Element to which the draggable's position will be constrained.
         * @template THIS
         * @this {THIS}
         * @param {?} boundaryElement
         * @return {THIS}
         */

      }, {
        key: "withBoundaryElement",
        value: function withBoundaryElement(boundaryElement) {
          var _this2 = this;

          /** @type {?} */
          this._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundaryElement) : null;

          /** @type {?} */
          this._resizeSubscription.unsubscribe();

          if (boundaryElement) {
            /** @type {?} */
            this._resizeSubscription =
            /** @type {?} */
            this._viewportRuler.change(10).subscribe(
            /**
            * @return {?}
            */
            function () {
              return (
                /** @type {?} */
                _this2._containInsideBoundaryOnResize()
              );
            });
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Removes the dragging functionality from the DOM element.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          this._removeRootElementListeners(this._rootElement); // Do this check before removing from the registry since it'll
          // stop being considered as dragged once it is removed.


          if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeElement(this._rootElement);
          }

          this._destroyPreview();

          this._destroyPlaceholder();

          this._dragDropRegistry.removeDragItem(this);

          this._removeSubscriptions();

          this.beforeStarted.complete();
          this.started.complete();
          this.released.complete();
          this.ended.complete();
          this.entered.complete();
          this.exited.complete();
          this.dropped.complete();

          this._moveEvents.complete();

          this._handles = [];

          this._disabledHandles.clear();

          this._dropContainer = undefined;
          this._boundaryElement = this._rootElement = this._placeholderTemplate = this._previewTemplate = this._nextSibling =
          /** @type {?} */
          null;
        }
        /**
         * Checks whether the element is currently being dragged.
         * @return {?}
         */

      }, {
        key: "isDragging",
        value: function isDragging() {
          return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
        }
        /**
         * Resets a standalone drag item to its initial position.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this._rootElement.style.transform = this._initialTransform || '';
          this._activeTransform = {
            x: 0,
            y: 0
          };
          this._passiveTransform = {
            x: 0,
            y: 0
          };
        }
        /**
         * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
         * @param {?} handle Handle element that should be disabled.
         * @return {?}
         */

      }, {
        key: "disableHandle",
        value: function disableHandle(handle) {
          if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
          }
        }
        /**
         * Enables a handle, if it has been disabled.
         * @param {?} handle Handle element to be enabled.
         * @return {?}
         */

      }, {
        key: "enableHandle",
        value: function enableHandle(handle) {
          this._disabledHandles["delete"](handle);
        }
        /**
         * Sets the layout direction of the draggable item.
         * @template THIS
         * @this {THIS}
         * @param {?} direction
         * @return {THIS}
         */

      }, {
        key: "withDirection",
        value: function withDirection(direction) {
          /** @type {?} */
          this._direction = direction;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the container that the item is part of.
         * @param {?} container
         * @return {?}
         */

      }, {
        key: "_withDropContainer",
        value: function _withDropContainer(container) {
          this._dropContainer = container;
        }
        /**
         * Gets the current position in pixels the draggable outside of a drop container.
         * @return {?}
         */

      }, {
        key: "getFreeDragPosition",
        value: function getFreeDragPosition() {
          /** @type {?} */
          var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
          return {
            x: position.x,
            y: position.y
          };
        }
        /**
         * Sets the current position in pixels the draggable outside of a drop container.
         * @template THIS
         * @this {THIS}
         * @param {?} value New position to be set.
         * @return {THIS}
         */

      }, {
        key: "setFreeDragPosition",
        value: function setFreeDragPosition(value) {
          /** @type {?} */
          this._activeTransform = {
            x: 0,
            y: 0
          };

          /** @type {?} */
          this._passiveTransform.x = value.x;

          /** @type {?} */
          this._passiveTransform.y = value.y;

          if (!
          /** @type {?} */
          this._dropContainer) {
            /** @type {?} */
            this._applyRootElementTransform(value.x, value.y);
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Updates the item's sort order based on the last-known pointer position.
         * @return {?}
         */

      }, {
        key: "_sortFromLastPointerPosition",
        value: function _sortFromLastPointerPosition() {
          /** @type {?} */
          var position = this._pointerPositionAtLastDirectionChange;

          if (position && this._dropContainer) {
            this._updateActiveDropContainer(position);
          }
        }
        /**
         * Unsubscribes from the global subscriptions.
         * @private
         * @return {?}
         */

      }, {
        key: "_removeSubscriptions",
        value: function _removeSubscriptions() {
          this._pointerMoveSubscription.unsubscribe();

          this._pointerUpSubscription.unsubscribe();

          this._scrollSubscription.unsubscribe();
        }
        /**
         * Destroys the preview element and its ViewRef.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPreview",
        value: function _destroyPreview() {
          if (this._preview) {
            removeElement(this._preview);
          }

          if (this._previewRef) {
            this._previewRef.destroy();
          }

          this._preview = this._previewRef =
          /** @type {?} */
          null;
        }
        /**
         * Destroys the placeholder element and its ViewRef.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPlaceholder",
        value: function _destroyPlaceholder() {
          if (this._placeholder) {
            removeElement(this._placeholder);
          }

          if (this._placeholderRef) {
            this._placeholderRef.destroy();
          }

          this._placeholder = this._placeholderRef =
          /** @type {?} */
          null;
        }
        /**
         * Clears subscriptions and stops the dragging sequence.
         * @private
         * @param {?} event Browser event object that ended the sequence.
         * @return {?}
         */

      }, {
        key: "_endDragSequence",
        value: function _endDragSequence(event) {
          var _this3 = this;

          // Note that here we use `isDragging` from the service, rather than from `this`.
          // The difference is that the one from the service reflects whether a dragging sequence
          // has been initiated, whereas the one on `this` includes whether the user has passed
          // the minimum dragging threshold.
          if (!this._dragDropRegistry.isDragging(this)) {
            return;
          }

          this._removeSubscriptions();

          this._dragDropRegistry.stopDragging(this);

          this._toggleNativeDragInteractions();

          if (this._handles) {
            this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
          }

          if (!this._hasStartedDragging) {
            return;
          }

          this.released.next({
            source: this
          });

          if (this._dropContainer) {
            // Stop scrolling immediately, instead of waiting for the animation to finish.
            this._dropContainer._stopScrolling();

            this._animatePreviewToPlaceholder().then(
            /**
            * @return {?}
            */
            function () {
              _this3._cleanupDragArtifacts(event);

              _this3._cleanupCachedDimensions();

              _this3._dragDropRegistry.stopDragging(_this3);
            });
          } else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;

            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this3.ended.next({
                source: _this3,
                distance: _this3._getDragDistance(_this3._getPointerPositionOnPage(event))
              });
            });

            this._cleanupCachedDimensions();

            this._dragDropRegistry.stopDragging(this);
          }
        }
        /**
         * Starts the dragging sequence.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_startDragSequence",
        value: function _startDragSequence(event) {
          // Emit the event on the item before the one on the container.
          this.started.next({
            source: this
          });

          if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
          }

          this._toggleNativeDragInteractions();

          if (this._dropContainer) {
            /** @type {?} */
            var element = this._rootElement; // Grab the `nextSibling` before the preview and placeholder
            // have been created so we don't get the preview by accident.

            this._nextSibling = element.nextSibling;
            /** @type {?} */

            var preview = this._preview = this._createPreviewElement();
            /** @type {?} */


            var placeholder = this._placeholder = this._createPlaceholderElement(); // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.


            element.style.display = 'none';

            this._document.body.appendChild(
            /** @type {?} */
            element.parentNode.replaceChild(placeholder, element));

            getPreviewInsertionPoint(this._document).appendChild(preview);

            this._dropContainer.start();
          }
        }
        /**
         * Sets up the different variables and subscriptions
         * that will be necessary for the dragging sequence.
         * @private
         * @param {?} referenceElement Element that started the drag sequence.
         * @param {?} event Browser event object that started the sequence.
         * @return {?}
         */

      }, {
        key: "_initializeDragSequence",
        value: function _initializeDragSequence(referenceElement, event) {
          var _this4 = this;

          // Always stop propagation for the event that initializes
          // the dragging sequence, in order to prevent it from potentially
          // starting another sequence for a draggable parent somewhere up the DOM tree.
          event.stopPropagation();
          /** @type {?} */

          var isDragging = this.isDragging();
          /** @type {?} */

          var isTouchSequence = isTouchEvent(event);
          /** @type {?} */

          var isAuxiliaryMouseButton = !isTouchSequence &&
          /** @type {?} */
          event.button !== 0;
          /** @type {?} */

          var rootElement = this._rootElement;
          /** @type {?} */

          var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now(); // If the event started from an element with the native HTML drag&drop, it'll interfere
          // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
          // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
          // it's flaky and it fails if the user drags it away quickly. Also note that we only want
          // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
          // events from firing on touch devices.

          if (event.target &&
          /** @type {?} */
          event.target.draggable && event.type === 'mousedown') {
            event.preventDefault();
          } // Abort if the user is already dragging or is using a mouse button other than the primary one.


          if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
          } // If we've got handles, we need to disable the tap highlight on the entire root element,
          // otherwise iOS will still add it, even though all the drag interactions on the handle
          // are disabled.


          if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
          }

          this._hasStartedDragging = this._hasMoved = false;
          this._initialContainer =
          /** @type {?} */
          this._dropContainer; // Avoid multiple subscriptions and memory leaks when multi touch
          // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)

          this._removeSubscriptions();

          this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
          this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
          this._scrollSubscription = this._dragDropRegistry.scroll.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this4._scrollPosition = _this4._viewportRuler.getViewportScrollPosition();
          });

          if (this._boundaryElement) {
            this._boundaryRect = this._boundaryElement.getBoundingClientRect();
          } // If we have a custom preview template, the element won't be visible anyway so we avoid the
          // extra `getBoundingClientRect` calls and just move the preview next to the cursor.


          this._pickupPositionInElement = this._previewTemplate && this._previewTemplate.template ? {
            x: 0,
            y: 0
          } : this._getPointerPositionInElement(referenceElement, event);
          /** @type {?} */

          var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);

          this._pointerDirectionDelta = {
            x: 0,
            y: 0
          };
          this._pointerPositionAtLastDirectionChange = {
            x: pointerPosition.x,
            y: pointerPosition.y
          };
          this._dragStartTime = Date.now();

          this._dragDropRegistry.startDragging(this, event);
        }
        /**
         * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_cleanupDragArtifacts",
        value: function _cleanupDragArtifacts(event) {
          var _this5 = this;

          // Restore the element's visibility and insert it at its old position in the DOM.
          // It's important that we maintain the position, because moving the element around in the DOM
          // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
          // while moving the existing elements in all other cases.
          this._rootElement.style.display = '';

          if (this._nextSibling) {
            /** @type {?} */
            this._nextSibling.parentNode.insertBefore(this._rootElement, this._nextSibling);
          } else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this._initialContainer.element).appendChild(this._rootElement);
          }

          this._destroyPreview();

          this._destroyPlaceholder();

          this._boundaryRect = this._previewRect = undefined; // Re-enter the NgZone since we bound `document` events on the outside.

          this._ngZone.run(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container =
            /** @type {?} */
            _this5._dropContainer;
            /** @type {?} */

            var currentIndex = container.getItemIndex(_this5);
            /** @type {?} */

            var pointerPosition = _this5._getPointerPositionOnPage(event);
            /** @type {?} */


            var distance = _this5._getDragDistance(_this5._getPointerPositionOnPage(event));
            /** @type {?} */


            var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);

            _this5.ended.next({
              source: _this5,
              distance: distance
            });

            _this5.dropped.next({
              item: _this5,
              currentIndex: currentIndex,
              previousIndex: _this5._initialContainer.getItemIndex(_this5),
              container: container,
              previousContainer: _this5._initialContainer,
              isPointerOverContainer: isPointerOverContainer,
              distance: distance
            });

            container.drop(_this5, currentIndex, _this5._initialContainer, isPointerOverContainer, distance);
            _this5._dropContainer = _this5._initialContainer;
          });
        }
        /**
         * Updates the item's position in its drop container, or moves it
         * into a new one, depending on its current drag position.
         * @private
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "_updateActiveDropContainer",
        value: function _updateActiveDropContainer(_ref) {
          var _this6 = this;

          var x = _ref.x,
              y = _ref.y;

          // Drop container that draggable has been moved into.

          /** @type {?} */
          var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y); // If we couldn't find a new container to move the item into, and the item has left its
          // initial container, check whether the it's over the initial container. This handles the
          // case where two containers are connected one way and the user tries to undo dragging an
          // item into a new container.


          if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
          }

          if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              // Notify the old container that the item has left.
              _this6.exited.next({
                item: _this6,
                container:
                /** @type {?} */
                _this6._dropContainer
              });

              /** @type {?} */
              _this6._dropContainer.exit(_this6); // Notify the new container that the item has entered.


              _this6._dropContainer =
              /** @type {?} */
              newContainer;

              _this6._dropContainer.enter(_this6, x, y);

              _this6.entered.next({
                item: _this6,
                container:
                /** @type {?} */
                newContainer,
                currentIndex:
                /** @type {?} */
                newContainer.getItemIndex(_this6)
              });
            });
          }

          /** @type {?} */
          this._dropContainer._startScrollingIfNecessary(x, y);

          /** @type {?} */
          this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);

          this._preview.style.transform = getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
        }
        /**
         * Creates the element that will be rendered next to the user's pointer
         * and will be used as a preview of the element that is being dragged.
         * @private
         * @return {?}
         */

      }, {
        key: "_createPreviewElement",
        value: function _createPreviewElement() {
          /** @type {?} */
          var previewConfig = this._previewTemplate;
          /** @type {?} */

          var previewTemplate = previewConfig ? previewConfig.template : null;
          /** @type {?} */

          var preview;

          if (previewTemplate) {
            /** @type {?} */
            var viewRef =
            /** @type {?} */
            previewConfig.viewContainer.createEmbeddedView(previewTemplate,
            /** @type {?} */
            previewConfig.context);
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;
            preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
          } else {
            /** @type {?} */
            var element = this._rootElement;
            /** @type {?} */

            var elementRect = element.getBoundingClientRect();
            preview = deepCloneNode(element);
            preview.style.width = "".concat(elementRect.width, "px");
            preview.style.height = "".concat(elementRect.height, "px");
            preview.style.transform = getTransform(elementRect.left, elementRect.top);
          }

          extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            // We have to reset the margin, because can throw off positioning relative to the viewport.
            margin: '0',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '1000'
          });
          toggleNativeDragInteractions(preview, false);
          preview.classList.add('cdk-drag-preview');
          preview.setAttribute('dir', this._direction);
          return preview;
        }
        /**
         * Animates the preview element from its current position to the location of the drop placeholder.
         * @private
         * @return {?} Promise that resolves when the animation completes.
         */

      }, {
        key: "_animatePreviewToPlaceholder",
        value: function _animatePreviewToPlaceholder() {
          var _this7 = this;

          // If the user hasn't moved yet, the transitionend event won't fire.
          if (!this._hasMoved) {
            return Promise.resolve();
          }
          /** @type {?} */


          var placeholderRect = this._placeholder.getBoundingClientRect(); // Apply the class that adds a transition to the preview.


          this._preview.classList.add('cdk-drag-animating'); // Move the preview to the placeholder position.


          this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top); // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
          // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
          // apply its style, we take advantage of the available info to figure out whether we need to
          // bind the event in the first place.

          /** @type {?} */

          var duration = getTransformTransitionDurationInMs(this._preview);

          if (duration === 0) {
            return Promise.resolve();
          }

          return this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return new Promise(
            /**
            * @param {?} resolve
            * @return {?}
            */
            function (resolve) {
              /** @type {?} */
              var handler =
              /** @type {?} */

              /**
              * @param {?} event
              * @return {?}
              */
              function handler(event) {
                if (!event || event.target === _this7._preview && event.propertyName === 'transform') {
                  _this7._preview.removeEventListener('transitionend', handler);

                  resolve();
                  clearTimeout(timeout);
                }
              }; // If a transition is short enough, the browser might not fire the `transitionend` event.
              // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
              // fire if the transition hasn't completed when it was supposed to.

              /** @type {?} */


              var timeout = setTimeout(
              /** @type {?} */
              handler, duration * 1.5);

              _this7._preview.addEventListener('transitionend', handler);
            });
          });
        }
        /**
         * Creates an element that will be shown instead of the current element while dragging.
         * @private
         * @return {?}
         */

      }, {
        key: "_createPlaceholderElement",
        value: function _createPlaceholderElement() {
          /** @type {?} */
          var placeholderConfig = this._placeholderTemplate;
          /** @type {?} */

          var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
          /** @type {?} */

          var placeholder;

          if (placeholderTemplate) {
            this._placeholderRef =
            /** @type {?} */
            placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate,
            /** @type {?} */
            placeholderConfig.context);
            placeholder = getRootNode(this._placeholderRef, this._document);
          } else {
            placeholder = deepCloneNode(this._rootElement);
          }

          placeholder.classList.add('cdk-drag-placeholder');
          return placeholder;
        }
        /**
         * Figures out the coordinates at which an element was picked up.
         * @private
         * @param {?} referenceElement Element that initiated the dragging.
         * @param {?} event Event that initiated the dragging.
         * @return {?}
         */

      }, {
        key: "_getPointerPositionInElement",
        value: function _getPointerPositionInElement(referenceElement, event) {
          /** @type {?} */
          var elementRect = this._rootElement.getBoundingClientRect();
          /** @type {?} */


          var handleElement = referenceElement === this._rootElement ? null : referenceElement;
          /** @type {?} */

          var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
          /** @type {?} */

          var point = isTouchEvent(event) ? event.targetTouches[0] : event;
          /** @type {?} */

          var x = point.pageX - referenceRect.left - this._scrollPosition.left;
          /** @type {?} */

          var y = point.pageY - referenceRect.top - this._scrollPosition.top;
          return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
          };
        }
        /**
         * Determines the point of the page that was touched by the user.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_getPointerPositionOnPage",
        value: function _getPointerPositionOnPage(event) {
          // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.

          /** @type {?} */
          var point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
          return {
            x: point.pageX - this._scrollPosition.left,
            y: point.pageY - this._scrollPosition.top
          };
        }
        /**
         * Gets the pointer position on the page, accounting for any position constraints.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_getConstrainedPointerPosition",
        value: function _getConstrainedPointerPosition(event) {
          /** @type {?} */
          var point = this._getPointerPositionOnPage(event);
          /** @type {?} */


          var constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
          /** @type {?} */

          var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;

          if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            constrainedPoint.y = this._pickupPositionOnPage.y;
          } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            constrainedPoint.x = this._pickupPositionOnPage.x;
          }

          if (this._boundaryRect) {
            var _this$_pickupPosition = this._pickupPositionInElement,
                pickupX = _this$_pickupPosition.x,
                pickupY = _this$_pickupPosition.y;
            /** @type {?} */

            var boundaryRect = this._boundaryRect;
            /** @type {?} */

            var previewRect =
            /** @type {?} */
            this._previewRect;
            /** @type {?} */

            var minY = boundaryRect.top + pickupY;
            /** @type {?} */

            var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */

            var minX = boundaryRect.left + pickupX;
            /** @type {?} */

            var maxX = boundaryRect.right - (previewRect.width - pickupX);
            constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
            constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
          }

          return constrainedPoint;
        }
        /**
         * Updates the current drag delta, based on the user's current pointer position on the page.
         * @private
         * @param {?} pointerPositionOnPage
         * @return {?}
         */

      }, {
        key: "_updatePointerDirectionDelta",
        value: function _updatePointerDirectionDelta(pointerPositionOnPage) {
          var x = pointerPositionOnPage.x,
              y = pointerPositionOnPage.y;
          /** @type {?} */

          var delta = this._pointerDirectionDelta;
          /** @type {?} */

          var positionSinceLastChange = this._pointerPositionAtLastDirectionChange; // Amount of pixels the user has dragged since the last time the direction changed.

          /** @type {?} */

          var changeX = Math.abs(x - positionSinceLastChange.x);
          /** @type {?} */

          var changeY = Math.abs(y - positionSinceLastChange.y); // Because we handle pointer events on a per-pixel basis, we don't want the delta
          // to change for every pixel, otherwise anything that depends on it can look erratic.
          // To make the delta more consistent, we track how much the user has moved since the last
          // delta change and we only update it after it has reached a certain threshold.

          if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
          }

          if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
          }

          return delta;
        }
        /**
         * Toggles the native drag interactions, based on how many handles are registered.
         * @private
         * @return {?}
         */

      }, {
        key: "_toggleNativeDragInteractions",
        value: function _toggleNativeDragInteractions() {
          if (!this._rootElement || !this._handles) {
            return;
          }
          /** @type {?} */


          var shouldEnable = this._handles.length > 0 || !this.isDragging();

          if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
          }
        }
        /**
         * Removes the manually-added event listeners from the root element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_removeRootElementListeners",
        value: function _removeRootElementListeners(element) {
          element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
          element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
        }
        /**
         * Applies a `transform` to the root element, taking into account any existing transforms on it.
         * @private
         * @param {?} x New transform value along the X axis.
         * @param {?} y New transform value along the Y axis.
         * @return {?}
         */

      }, {
        key: "_applyRootElementTransform",
        value: function _applyRootElementTransform(x, y) {
          /** @type {?} */
          var transform = getTransform(x, y); // Cache the previous transform amount only after the first drag sequence, because
          // we don't want our own transforms to stack on top of each other.

          if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
          } // Preserve the previous `transform` value, if there was one. Note that we apply our own
          // transform before the user's, because things like rotation can affect which direction
          // the element will be translated towards.


          this._rootElement.style.transform = this._initialTransform ? transform + ' ' + this._initialTransform : transform;
        }
        /**
         * Gets the distance that the user has dragged during the current drag sequence.
         * @private
         * @param {?} currentPosition Current position of the user's pointer.
         * @return {?}
         */

      }, {
        key: "_getDragDistance",
        value: function _getDragDistance(currentPosition) {
          /** @type {?} */
          var pickupPosition = this._pickupPositionOnPage;

          if (pickupPosition) {
            return {
              x: currentPosition.x - pickupPosition.x,
              y: currentPosition.y - pickupPosition.y
            };
          }

          return {
            x: 0,
            y: 0
          };
        }
        /**
         * Cleans up any cached element dimensions that we don't need after dragging has stopped.
         * @private
         * @return {?}
         */

      }, {
        key: "_cleanupCachedDimensions",
        value: function _cleanupCachedDimensions() {
          this._boundaryRect = this._previewRect = undefined;
        }
        /**
         * Checks whether the element is still inside its boundary after the viewport has been resized.
         * If not, the position is adjusted so that the element fits again.
         * @private
         * @return {?}
         */

      }, {
        key: "_containInsideBoundaryOnResize",
        value: function _containInsideBoundaryOnResize() {
          var _this$_passiveTransfo = this._passiveTransform,
              x = _this$_passiveTransfo.x,
              y = _this$_passiveTransfo.y;

          if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
            return;
          }
          /** @type {?} */


          var boundaryRect = this._boundaryElement.getBoundingClientRect();
          /** @type {?} */


          var elementRect = this._rootElement.getBoundingClientRect();
          /** @type {?} */


          var leftOverflow = boundaryRect.left - elementRect.left;
          /** @type {?} */

          var rightOverflow = elementRect.right - boundaryRect.right;
          /** @type {?} */

          var topOverflow = boundaryRect.top - elementRect.top;
          /** @type {?} */

          var bottomOverflow = elementRect.bottom - boundaryRect.bottom; // If the element has become wider than the boundary, we can't
          // do much to make it fit so we just anchor it to the left.

          if (boundaryRect.width > elementRect.width) {
            if (leftOverflow > 0) {
              x += leftOverflow;
            }

            if (rightOverflow > 0) {
              x -= rightOverflow;
            }
          } else {
            x = 0;
          } // If the element has become taller than the boundary, we can't
          // do much to make it fit so we just anchor it to the top.


          if (boundaryRect.height > elementRect.height) {
            if (topOverflow > 0) {
              y += topOverflow;
            }

            if (bottomOverflow > 0) {
              y -= bottomOverflow;
            }
          } else {
            y = 0;
          }

          if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
            this.setFreeDragPosition({
              y: y,
              x: x
            });
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

          if (newValue !== this._disabled) {
            this._disabled = newValue;

            this._toggleNativeDragInteractions();
          }
        }
      }]);

      return DragRef;
    }();
    /**
     * Gets a 3d `transform` that can be applied to an element.
     * @param {?} x Desired position of the element along the X axis.
     * @param {?} y Desired position of the element along the Y axis.
     * @return {?}
     */


    function getTransform(x, y) {
      // Round the transforms since some browsers will
      // blur the elements for sub-pixel transforms.
      return "translate3d(".concat(Math.round(x), "px, ").concat(Math.round(y), "px, 0)");
    }
    /**
     * Creates a deep clone of an element.
     * @param {?} node
     * @return {?}
     */


    function deepCloneNode(node) {
      /** @type {?} */
      var clone =
      /** @type {?} */
      node.cloneNode(true);
      /** @type {?} */

      var descendantsWithId = clone.querySelectorAll('[id]');
      /** @type {?} */

      var descendantCanvases = node.querySelectorAll('canvas'); // Remove the `id` to avoid having multiple elements with the same id on the page.

      clone.removeAttribute('id');

      for (var i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
      } // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
      // We match up the cloned canvas to their sources using their index in the DOM.


      if (descendantCanvases.length) {
        /** @type {?} */
        var cloneCanvases = clone.querySelectorAll('canvas');

        for (var _i = 0; _i < descendantCanvases.length; _i++) {
          /** @type {?} */
          var correspondingCloneContext = cloneCanvases[_i].getContext('2d');

          if (correspondingCloneContext) {
            correspondingCloneContext.drawImage(descendantCanvases[_i], 0, 0);
          }
        }
      }

      return clone;
    }
    /**
     * Clamps a value between a minimum and a maximum.
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */


    function clamp(value, min, max) {
      return Math.max(min, Math.min(max, value));
    }
    /**
     * Helper to remove an element from the DOM and to do all the necessary null checks.
     * @param {?} element Element to be removed.
     * @return {?}
     */


    function removeElement(element) {
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }
    /**
     * Determines whether an event is a touch event.
     * @param {?} event
     * @return {?}
     */


    function isTouchEvent(event) {
      // This function is called for every pixel that the user has dragged so we need it to be
      // as fast as possible. Since we only bind mouse events and touch events, we can assume
      // that if the event's name starts with `t`, it's a touch event.
      return event.type[0] === 't';
    }
    /**
     * Gets the element into which the drag preview should be inserted.
     * @param {?} documentRef
     * @return {?}
     */


    function getPreviewInsertionPoint(documentRef) {
      // We can't use the body if the user is in fullscreen mode,
      // because the preview will render under the fullscreen element.
      // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
      return documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    /**
     * Gets the root HTML element of an embedded view.
     * If the root is not an HTML element it gets wrapped in one.
     * @param {?} viewRef
     * @param {?} _document
     * @return {?}
     */


    function getRootNode(viewRef, _document) {
      /** @type {?} */
      var rootNode = viewRef.rootNodes[0];

      if (rootNode.nodeType !== _document.ELEMENT_NODE) {
        /** @type {?} */
        var wrapper = _document.createElement('div');

        wrapper.appendChild(rootNode);
        return wrapper;
      }

      return (
        /** @type {?} */
        rootNode
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Moves an item one index in an array to another.
     * @template T
     * @param {?} array Array in which to move the item.
     * @param {?} fromIndex Starting index of the item.
     * @param {?} toIndex Index to which the item should be moved.
     * @return {?}
     */


    function moveItemInArray(array, fromIndex, toIndex) {
      /** @type {?} */
      var from = clamp$1(fromIndex, array.length - 1);
      /** @type {?} */

      var to = clamp$1(toIndex, array.length - 1);

      if (from === to) {
        return;
      }
      /** @type {?} */


      var target = array[from];
      /** @type {?} */

      var delta = to < from ? -1 : 1;

      for (var i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
      }

      array[to] = target;
    }
    /**
     * Moves an item from one array to another.
     * @template T
     * @param {?} currentArray Array from which to transfer the item.
     * @param {?} targetArray Array into which to put the item.
     * @param {?} currentIndex Index of the item in its current array.
     * @param {?} targetIndex Index at which to insert the item.
     * @return {?}
     */


    function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
      /** @type {?} */
      var from = clamp$1(currentIndex, currentArray.length - 1);
      /** @type {?} */

      var to = clamp$1(targetIndex, targetArray.length);

      if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
      }
    }
    /**
     * Copies an item from one array to another, leaving it in its
     * original position in current array.
     * @template T
     * @param {?} currentArray Array from which to copy the item.
     * @param {?} targetArray Array into which is copy the item.
     * @param {?} currentIndex Index of the item in its current array.
     * @param {?} targetIndex Index at which to insert the item.
     *
     * @return {?}
     */


    function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
      /** @type {?} */
      var to = clamp$1(targetIndex, targetArray.length);

      if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
      }
    }
    /**
     * Clamps a number between zero and a maximum.
     * @param {?} value
     * @param {?} max
     * @return {?}
     */


    function clamp$1(value, max) {
      return Math.max(0, Math.min(max, value));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Counter used to generate unique ids for drop refs.
     * @type {?}
     */


    var _uniqueIdCounter = 0;
    /**
     * Proximity, as a ratio to width/height, at which a
     * dragged item will affect the drop container.
     * @type {?}
     */

    var DROP_PROXIMITY_THRESHOLD = 0.05;
    /**
     * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
     * viewport. The value comes from trying it out manually until it feels right.
     * @type {?}
     */

    var SCROLL_PROXIMITY_THRESHOLD = 0.05;
    /**
     * Number of pixels to scroll for each frame when auto-scrolling an element.
     * The value comes from trying it out manually until it feels right.
     * @type {?}
     */

    var AUTO_SCROLL_STEP = 2;
    /**
     * Reference to a drop list. Used to manipulate or dispose of the container.
     * \@docs-private
     * @template T
     */

    var DropListRef = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} _dragDropRegistry
       * @param {?} _document
       * @param {?=} _ngZone
       * @param {?=} _viewportRuler
       */
      function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        var _this8 = this;

        _classCallCheck(this, DropListRef);

        this._dragDropRegistry = _dragDropRegistry;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        /**
         * Unique ID for the drop list.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 8.0.0
         */

        this.id = "cdk-drop-list-ref-".concat(_uniqueIdCounter++);
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */

        this.disabled = false;
        /**
         * Whether sorting items within the list is disabled.
         */

        this.sortingDisabled = false;
        /**
         * Whether auto-scrolling the view when the user
         * moves their pointer close to the edges is disabled.
         */

        this.autoScrollDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */

        this.enterPredicate =
        /**
        * @return {?}
        */
        function () {
          return true;
        };
        /**
         * Emits right before dragging has started.
         */


        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */

        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */

        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */

        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */

        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */

        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */

        this._itemPositions = [];
        /**
         * Keeps track of the container's scroll position.
         */

        this._scrollPosition = {
          top: 0,
          left: 0
        };
        /**
         * Keeps track of the scroll position of the viewport.
         */

        this._viewportScrollPosition = {
          top: 0,
          left: 0
        };
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */

        this._previousSwap = {
          drag:
          /** @type {?} */
          null,
          delta: 0
        };
        /**
         * Drop lists that are connected to the current one.
         */

        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */

        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */

        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */

        this._direction = 'ltr';
        /**
         * Subscription to the window being scrolled.
         */

        this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Vertical direction in which the list is currently scrolling.
         */

        this._verticalScrollDirection = 0
        /* NONE */
        ;
        /**
         * Horizontal direction in which the list is currently scrolling.
         */

        this._horizontalScrollDirection = 0
        /* NONE */
        ;
        /**
         * Used to signal to the current auto-scroll sequence when to stop.
         */

        this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Handles the container being scrolled. Has to be an arrow function to preserve the context.
         */

        this._handleScroll =
        /**
        * @return {?}
        */
        function () {
          if (!_this8.isDragging()) {
            return;
          }
          /** @type {?} */


          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(_this8.element);

          _this8._updateAfterScroll(_this8._scrollPosition, element.scrollTop, element.scrollLeft);
        };
        /**
         * Starts the interval that'll auto-scroll the element.
         */


        this._startScrollInterval =
        /**
        * @return {?}
        */
        function () {
          _this8._stopScrolling();

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this8._stopScrollTimers)).subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var node = _this8._scrollNode;

            if (_this8._verticalScrollDirection === 1
            /* UP */
            ) {
                incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
              } else if (_this8._verticalScrollDirection === 2
            /* DOWN */
            ) {
                incrementVerticalScroll(node, AUTO_SCROLL_STEP);
              }

            if (_this8._horizontalScrollDirection === 1
            /* LEFT */
            ) {
                incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
              } else if (_this8._horizontalScrollDirection === 2
            /* RIGHT */
            ) {
                incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
              }
          });
        };
        /** @type {?} */


        var nativeNode = this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(element);
        this._shadowRoot = getShadowRoot(nativeNode) || _document;

        _dragDropRegistry.registerDropContainer(this);
      }
      /**
       * Removes the drop list functionality from the DOM element.
       * @return {?}
       */


      _createClass(DropListRef, [{
        key: "dispose",
        value: function dispose() {
          this._stopScrolling();

          this._stopScrollTimers.complete();

          this._removeListeners();

          this.beforeStarted.complete();
          this.entered.complete();
          this.exited.complete();
          this.dropped.complete();
          this.sorted.complete();

          this._activeSiblings.clear();

          this._scrollNode =
          /** @type {?} */
          null;

          this._dragDropRegistry.removeDropContainer(this);
        }
        /**
         * Whether an item from this list is currently being dragged.
         * @return {?}
         */

      }, {
        key: "isDragging",
        value: function isDragging() {
          return this._isDragging;
        }
        /**
         * Starts dragging an item.
         * @return {?}
         */

      }, {
        key: "start",
        value: function start() {
          var _this9 = this;

          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
          this.beforeStarted.next();
          this._isDragging = true;

          this._cacheItems();

          this._siblings.forEach(
          /**
          * @param {?} sibling
          * @return {?}
          */
          function (sibling) {
            return sibling._startReceiving(_this9);
          });

          this._removeListeners(); // @breaking-change 9.0.0 Remove check for _ngZone once it's marked as a required param.


          if (this._ngZone) {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return element.addEventListener('scroll', _this9._handleScroll);
            });
          } else {
            element.addEventListener('scroll', this._handleScroll);
          } // @breaking-change 9.0.0 Remove check for _viewportRuler once it's marked as a required param.


          if (this._viewportRuler) {
            this._listenToScrollEvents();
          }
        }
        /**
         * Emits an event to indicate that the user moved an item into the container.
         * @param {?} item Item that was moved into the container.
         * @param {?} pointerX Position of the item along the X axis.
         * @param {?} pointerY Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "enter",
        value: function enter(item, pointerX, pointerY) {
          this.start(); // If sorting is disabled, we want the item to return to its starting
          // position if the user is returning it to its initial container.

          /** @type {?} */

          var newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;

          if (newIndex === -1) {
            // We use the coordinates of where the item entered the drop
            // zone to figure out at which index it should be inserted.
            newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
          }
          /** @type {?} */


          var activeDraggables = this._activeDraggables;
          /** @type {?} */

          var currentIndex = activeDraggables.indexOf(item);
          /** @type {?} */

          var placeholder = item.getPlaceholderElement();
          /** @type {?} */

          var newPositionReference = activeDraggables[newIndex]; // If the item at the new position is the same as the item that is being dragged,
          // it means that we're trying to restore the item to its initial position. In this
          // case we should use the next item from the list as the reference.

          if (newPositionReference === item) {
            newPositionReference = activeDraggables[newIndex + 1];
          } // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
          // into another container and back again), we have to ensure that it isn't duplicated.


          if (currentIndex > -1) {
            activeDraggables.splice(currentIndex, 1);
          } // Don't use items that are being dragged as a reference, because
          // their element has been moved down to the bottom of the body.


          if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            var element = newPositionReference.getRootElement();

            /** @type {?} */
            element.parentElement.insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
          } else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).appendChild(placeholder);
            activeDraggables.push(item);
          } // The transform needs to be cleared so it doesn't throw off the measurements.


          placeholder.style.transform = ''; // Note that the positions were already cached when we called `start` above,
          // but we need to refresh them since the amount of items has changed.

          this._cacheItemPositions();

          this.entered.next({
            item: item,
            container: this,
            currentIndex: this.getItemIndex(item)
          });
        }
        /**
         * Removes an item from the container after it was dragged into another container by the user.
         * @param {?} item Item that was dragged out.
         * @return {?}
         */

      }, {
        key: "exit",
        value: function exit(item) {
          this._reset();

          this.exited.next({
            item: item,
            container: this
          });
        }
        /**
         * Drops an item into this container.
         * \@breaking-change 9.0.0 `distance` parameter to become required.
         * @param {?} item Item being dropped into the container.
         * @param {?} currentIndex Index at which the item should be inserted.
         * @param {?} previousContainer Container from which the item got dragged in.
         * @param {?} isPointerOverContainer Whether the user's pointer was over the
         *    container when the item was dropped.
         * @param {?=} distance Distance the user has dragged since the start of the dragging sequence.
         * @return {?}
         */

      }, {
        key: "drop",
        value: function drop(item, currentIndex, previousContainer, isPointerOverContainer) {
          var distance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
            x: 0,
            y: 0
          };

          this._reset();

          this.dropped.next({
            item: item,
            currentIndex: currentIndex,
            previousIndex: previousContainer.getItemIndex(item),
            container: this,
            previousContainer: previousContainer,
            isPointerOverContainer: isPointerOverContainer,
            distance: distance
          });
        }
        /**
         * Sets the draggable items that are a part of this list.
         * @template THIS
         * @this {THIS}
         * @param {?} items Items that are a part of this list.
         * @return {THIS}
         */

      }, {
        key: "withItems",
        value: function withItems(items) {
          var _this10 = this;

          /** @type {?} */
          this._draggables = items;
          items.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item._withDropContainer(
            /** @type {?} */
            _this10);
          });

          if (
          /** @type {?} */
          this.isDragging()) {
            /** @type {?} */
            this._cacheItems();
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the layout direction of the drop list.
         * @template THIS
         * @this {THIS}
         * @param {?} direction
         * @return {THIS}
         */

      }, {
        key: "withDirection",
        value: function withDirection(direction) {
          /** @type {?} */
          this._direction = direction;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the containers that are connected to this one. When two or more containers are
         * connected, the user will be allowed to transfer items between them.
         * @template THIS
         * @this {THIS}
         * @param {?} connectedTo Other containers that the current containers should be connected to.
         * @return {THIS}
         */

      }, {
        key: "connectedTo",
        value: function connectedTo(_connectedTo) {
          /** @type {?} */
          this._siblings = _connectedTo.slice();
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the orientation of the container.
         * @template THIS
         * @this {THIS}
         * @param {?} orientation New orientation for the container.
         * @return {THIS}
         */

      }, {
        key: "withOrientation",
        value: function withOrientation(orientation) {
          /** @type {?} */
          this._orientation = orientation;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Figures out the index of an item in the container.
         * @param {?} item Item whose index should be determined.
         * @return {?}
         */

      }, {
        key: "getItemIndex",
        value: function getItemIndex(item) {
          if (!this._isDragging) {
            return this._draggables.indexOf(item);
          } // Items are sorted always by top/left in the cache, however they flow differently in RTL.
          // The rest of the logic still stands no matter what orientation we're in, however
          // we need to invert the array when determining the index.

          /** @type {?} */


          var items = this._orientation === 'horizontal' && this._direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
          return findIndex(items,
          /**
          * @param {?} currentItem
          * @return {?}
          */
          function (currentItem) {
            return currentItem.drag === item;
          });
        }
        /**
         * Whether the list is able to receive the item that
         * is currently being dragged inside a connected drop list.
         * @return {?}
         */

      }, {
        key: "isReceiving",
        value: function isReceiving() {
          return this._activeSiblings.size > 0;
        }
        /**
         * Sorts an item inside the container based on its position.
         * @param {?} item Item to be sorted.
         * @param {?} pointerX Position of the item along the X axis.
         * @param {?} pointerY Position of the item along the Y axis.
         * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
         * @return {?}
         */

      }, {
        key: "_sortItem",
        value: function _sortItem(item, pointerX, pointerY, pointerDelta) {
          // Don't sort the item if sorting is disabled or it's out of range.
          if (this.sortingDisabled || !this._isPointerNearDropContainer(pointerX, pointerY)) {
            return;
          }
          /** @type {?} */


          var siblings = this._itemPositions;
          /** @type {?} */

          var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);

          if (newIndex === -1 && siblings.length > 0) {
            return;
          }
          /** @type {?} */


          var isHorizontal = this._orientation === 'horizontal';
          /** @type {?} */

          var currentIndex = findIndex(siblings,
          /**
          * @param {?} currentItem
          * @return {?}
          */
          function (currentItem) {
            return currentItem.drag === item;
          });
          /** @type {?} */

          var siblingAtNewPosition = siblings[newIndex];
          /** @type {?} */

          var currentPosition = siblings[currentIndex].clientRect;
          /** @type {?} */

          var newPosition = siblingAtNewPosition.clientRect;
          /** @type {?} */

          var delta = currentIndex > newIndex ? 1 : -1;
          this._previousSwap.drag = siblingAtNewPosition.drag;
          this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y; // How many pixels the item's placeholder should be offset.

          /** @type {?} */

          var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta); // How many pixels all the other items should be offset.

          /** @type {?} */


          var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta); // Save the previous order of the items before moving the item to its new index.
          // We use this to check whether an item has been moved as a result of the sorting.

          /** @type {?} */


          var oldOrder = siblings.slice(); // Shuffle the array in place.

          moveItemInArray(siblings, currentIndex, newIndex);
          this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item: item
          });
          siblings.forEach(
          /**
          * @param {?} sibling
          * @param {?} index
          * @return {?}
          */
          function (sibling, index) {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
              return;
            }
            /** @type {?} */


            var isDraggedItem = sibling.drag === item;
            /** @type {?} */

            var offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */

            var elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement(); // Update the offset to reflect the new position.

            sibling.offset += offset; // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.

            if (isHorizontal) {
              // Round the transforms since some browsers will
              // blur the elements, for sub-pixel transforms.
              elementToOffset.style.transform = "translate3d(".concat(Math.round(sibling.offset), "px, 0, 0)");
              adjustClientRect(sibling.clientRect, 0, offset);
            } else {
              elementToOffset.style.transform = "translate3d(0, ".concat(Math.round(sibling.offset), "px, 0)");
              adjustClientRect(sibling.clientRect, offset, 0);
            }
          });
        }
        /**
         * Checks whether the user's pointer is close to the edges of either the
         * viewport or the drop list and starts the auto-scroll sequence.
         * @param {?} pointerX User's pointer position along the x axis.
         * @param {?} pointerY User's pointer position along the y axis.
         * @return {?}
         */

      }, {
        key: "_startScrollingIfNecessary",
        value: function _startScrollingIfNecessary(pointerX, pointerY) {
          if (this.autoScrollDisabled) {
            return;
          }
          /** @type {?} */


          var scrollNode;
          /** @type {?} */

          var verticalScrollDirection = 0
          /* NONE */
          ;
          /** @type {?} */

          var horizontalScrollDirection = 0
          /* NONE */
          ; // Check whether we should start scrolling the container.

          if (this._isPointerNearDropContainer(pointerX, pointerY)) {
            /** @type {?} */
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);

            var _getElementScrollDire = getElementScrollDirections(element, this._clientRect, pointerX, pointerY);

            var _getElementScrollDire2 = _slicedToArray(_getElementScrollDire, 2);

            verticalScrollDirection = _getElementScrollDire2[0];
            horizontalScrollDirection = _getElementScrollDire2[1];

            if (verticalScrollDirection || horizontalScrollDirection) {
              scrollNode = element;
            }
          } // @breaking-change 9.0.0 Remove null check for _viewportRuler once it's a required parameter.
          // Otherwise check if we can start scrolling the viewport.


          if (this._viewportRuler && !verticalScrollDirection && !horizontalScrollDirection) {
            var _this$_viewportRuler$ = this._viewportRuler.getViewportSize(),
                width = _this$_viewportRuler$.width,
                height = _this$_viewportRuler$.height;
            /** @type {?} */


            var clientRect = {
              width: width,
              height: height,
              top: 0,
              right: width,
              bottom: height,
              left: 0
            };
            verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
            horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
            scrollNode = window;
          }

          if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
            this._verticalScrollDirection = verticalScrollDirection;
            this._horizontalScrollDirection = horizontalScrollDirection;
            this._scrollNode = scrollNode;

            if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
              // @breaking-change 9.0.0 Remove null check for `_ngZone` once it is made required.
              if (this._ngZone) {
                this._ngZone.runOutsideAngular(this._startScrollInterval);
              } else {
                this._startScrollInterval();
              }
            } else {
              this._stopScrolling();
            }
          }
        }
        /**
         * Stops any currently-running auto-scroll sequences.
         * @return {?}
         */

      }, {
        key: "_stopScrolling",
        value: function _stopScrolling() {
          this._stopScrollTimers.next();
        }
        /**
         * Caches the position of the drop list.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheOwnPosition",
        value: function _cacheOwnPosition() {
          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
          this._clientRect = getMutableClientRect(element);
          this._scrollPosition = {
            top: element.scrollTop,
            left: element.scrollLeft
          };
        }
        /**
         * Refreshes the position cache of the items and sibling containers.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheItemPositions",
        value: function _cacheItemPositions() {
          var _this11 = this;

          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          this._itemPositions = this._activeDraggables.map(
          /**
          * @param {?} drag
          * @return {?}
          */
          function (drag) {
            /** @type {?} */
            var elementToMeasure = _this11._dragDropRegistry.isDragging(drag) ? // If the element is being dragged, we have to measure the
            // placeholder, because the element is hidden.
            drag.getPlaceholderElement() : drag.getRootElement();
            return {
              drag: drag,
              offset: 0,
              clientRect: getMutableClientRect(elementToMeasure)
            };
          }).sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
          });
        }
        /**
         * Resets the container to its initial state.
         * @private
         * @return {?}
         */

      }, {
        key: "_reset",
        value: function _reset() {
          var _this12 = this;

          this._isDragging = false; // TODO(crisbeto): may have to wait for the animations to finish.

          this._activeDraggables.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.getRootElement().style.transform = '';
          });

          this._siblings.forEach(
          /**
          * @param {?} sibling
          * @return {?}
          */
          function (sibling) {
            return sibling._stopReceiving(_this12);
          });

          this._activeDraggables = [];
          this._itemPositions = [];
          this._previousSwap.drag = null;
          this._previousSwap.delta = 0;

          this._stopScrolling();

          this._removeListeners();
        }
        /**
         * Gets the offset in pixels by which the items that aren't being dragged should be moved.
         * @private
         * @param {?} currentIndex Index of the item currently being dragged.
         * @param {?} siblings All of the items in the list.
         * @param {?} delta Direction in which the user is moving.
         * @return {?}
         */

      }, {
        key: "_getSiblingOffsetPx",
        value: function _getSiblingOffsetPx(currentIndex, siblings, delta) {
          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          /** @type {?} */

          var currentPosition = siblings[currentIndex].clientRect;
          /** @type {?} */

          var immediateSibling = siblings[currentIndex + delta * -1];
          /** @type {?} */

          var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;

          if (immediateSibling) {
            /** @type {?} */
            var start = isHorizontal ? 'left' : 'top';
            /** @type {?} */

            var end = isHorizontal ? 'right' : 'bottom'; // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.

            if (delta === -1) {
              siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            } else {
              siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
          }

          return siblingOffset;
        }
        /**
         * Checks whether the pointer coordinates are close to the drop container.
         * @private
         * @param {?} pointerX Coordinates along the X axis.
         * @param {?} pointerY Coordinates along the Y axis.
         * @return {?}
         */

      }, {
        key: "_isPointerNearDropContainer",
        value: function _isPointerNearDropContainer(pointerX, pointerY) {
          var _this$_clientRect = this._clientRect,
              top = _this$_clientRect.top,
              right = _this$_clientRect.right,
              bottom = _this$_clientRect.bottom,
              left = _this$_clientRect.left,
              width = _this$_clientRect.width,
              height = _this$_clientRect.height;
          /** @type {?} */

          var xThreshold = width * DROP_PROXIMITY_THRESHOLD;
          /** @type {?} */

          var yThreshold = height * DROP_PROXIMITY_THRESHOLD;
          return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
        }
        /**
         * Gets the offset in pixels by which the item that is being dragged should be moved.
         * @private
         * @param {?} currentPosition Current position of the item.
         * @param {?} newPosition Position of the item where the current item should be moved.
         * @param {?} delta Direction in which the user is moving.
         * @return {?}
         */

      }, {
        key: "_getItemOffsetPx",
        value: function _getItemOffsetPx(currentPosition, newPosition, delta) {
          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          /** @type {?} */

          var itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top; // Account for differences in the item width/height.

          if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
          }

          return itemOffset;
        }
        /**
         * Gets the index of an item in the drop container, based on the position of the user's pointer.
         * @private
         * @param {?} item Item that is being sorted.
         * @param {?} pointerX Position of the user's pointer along the X axis.
         * @param {?} pointerY Position of the user's pointer along the Y axis.
         * @param {?=} delta Direction in which the user is moving their pointer.
         * @return {?}
         */

      }, {
        key: "_getItemIndexFromPointerPosition",
        value: function _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
          var _this13 = this;

          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          return findIndex(this._itemPositions,
          /**
          * @param {?} __0
          * @param {?} _
          * @param {?} array
          * @return {?}
          */
          function (_ref2, _, array) {
            var drag = _ref2.drag,
                clientRect = _ref2.clientRect;

            if (drag === item) {
              // If there's only one item left in the container, it must be
              // the dragged item itself so we use it as a reference.
              return array.length < 2;
            }

            if (delta) {
              /** @type {?} */
              var direction = isHorizontal ? delta.x : delta.y; // If the user is still hovering over the same item as last time, and they didn't change
              // the direction in which they're dragging, we don't consider it a direction swap.

              if (drag === _this13._previousSwap.drag && direction === _this13._previousSwap.delta) {
                return false;
              }
            }

            return isHorizontal ? // Round these down since most browsers report client rects with
            // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
            pointerX >= Math.floor(clientRect.left) && pointerX <= Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY <= Math.floor(clientRect.bottom);
          });
        }
        /**
         * Caches the current items in the list and their positions.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheItems",
        value: function _cacheItems() {
          this._activeDraggables = this._draggables.slice();

          this._cacheItemPositions();

          this._cacheOwnPosition();
        }
        /**
         * Updates the internal state of the container after a scroll event has happened.
         * @private
         * @param {?} scrollPosition Object that is keeping track of the scroll position.
         * @param {?} newTop New top scroll position.
         * @param {?} newLeft New left scroll position.
         * @param {?=} extraClientRect Extra `ClientRect` object that should be updated, in addition to the
         *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
         *  the `ClientRect` of the list.
         * @return {?}
         */

      }, {
        key: "_updateAfterScroll",
        value: function _updateAfterScroll(scrollPosition, newTop, newLeft, extraClientRect) {
          var _this14 = this;

          /** @type {?} */
          var topDifference = scrollPosition.top - newTop;
          /** @type {?} */

          var leftDifference = scrollPosition.left - newLeft;

          if (extraClientRect) {
            adjustClientRect(extraClientRect, topDifference, leftDifference);
          } // Since we know the amount that the user has scrolled we can shift all of the client rectangles
          // ourselves. This is cheaper than re-measuring everything and we can avoid inconsistent
          // behavior where we might be measuring the element before its position has changed.


          this._itemPositions.forEach(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref3) {
            var clientRect = _ref3.clientRect;
            adjustClientRect(clientRect, topDifference, leftDifference);
          }); // We need two loops for this, because we want all of the cached
          // positions to be up-to-date before we re-sort the item.


          this._itemPositions.forEach(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref4) {
            var drag = _ref4.drag;

            if (_this14._dragDropRegistry.isDragging(drag)) {
              // We need to re-sort the item manually, because the pointer move
              // events won't be dispatched while the user is scrolling.
              drag._sortFromLastPointerPosition();
            }
          });

          scrollPosition.top = newTop;
          scrollPosition.left = newLeft;
        }
        /**
         * Removes the event listeners associated with this drop list.
         * @private
         * @return {?}
         */

      }, {
        key: "_removeListeners",
        value: function _removeListeners() {
          Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).removeEventListener('scroll', this._handleScroll);

          this._viewportScrollSubscription.unsubscribe();
        }
        /**
         * Checks whether the user's pointer is positioned over the container.
         * @param {?} x Pointer position along the X axis.
         * @param {?} y Pointer position along the Y axis.
         * @return {?}
         */

      }, {
        key: "_isOverContainer",
        value: function _isOverContainer(x, y) {
          return isInsideClientRect(this._clientRect, x, y);
        }
        /**
         * Figures out whether an item should be moved into a sibling
         * drop container, based on its current position.
         * @param {?} item Drag item that is being moved.
         * @param {?} x Position of the item along the X axis.
         * @param {?} y Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "_getSiblingContainerFromPosition",
        value: function _getSiblingContainerFromPosition(item, x, y) {
          return this._siblings.find(
          /**
          * @param {?} sibling
          * @return {?}
          */
          function (sibling) {
            return sibling._canReceive(item, x, y);
          });
        }
        /**
         * Checks whether the drop list can receive the passed-in item.
         * @param {?} item Item that is being dragged into the list.
         * @param {?} x Position of the item along the X axis.
         * @param {?} y Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "_canReceive",
        value: function _canReceive(item, x, y) {
          if (!this.enterPredicate(item, this) || !isInsideClientRect(this._clientRect, x, y)) {
            return false;
          }
          /** @type {?} */


          var elementFromPoint =
          /** @type {?} */
          this._shadowRoot.elementFromPoint(x, y); // If there's no element at the pointer position, then
          // the client rect is probably scrolled out of the view.


          if (!elementFromPoint) {
            return false;
          }
          /** @type {?} */


          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element); // The `ClientRect`, that we're using to find the container over which the user is
          // hovering, doesn't give us any information on whether the element has been scrolled
          // out of the view or whether it's overlapping with other containers. This means that
          // we could end up transferring the item into a container that's invisible or is positioned
          // below another one. We use the result from `elementFromPoint` to get the top-most element
          // at the pointer position and to find whether it's one of the intersecting drop containers.

          return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
        }
        /**
         * Called by one of the connected drop lists when a dragging sequence has started.
         * @param {?} sibling Sibling in which dragging has started.
         * @return {?}
         */

      }, {
        key: "_startReceiving",
        value: function _startReceiving(sibling) {
          /** @type {?} */
          var activeSiblings = this._activeSiblings;

          if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);

            this._cacheOwnPosition();

            this._listenToScrollEvents();
          }
        }
        /**
         * Called by a connected drop list when dragging has stopped.
         * @param {?} sibling Sibling whose dragging has stopped.
         * @return {?}
         */

      }, {
        key: "_stopReceiving",
        value: function _stopReceiving(sibling) {
          this._activeSiblings["delete"](sibling);

          this._viewportScrollSubscription.unsubscribe();
        }
        /**
         * Starts listening to scroll events on the viewport.
         * Used for updating the internal state of the list.
         * @private
         * @return {?}
         */

      }, {
        key: "_listenToScrollEvents",
        value: function _listenToScrollEvents() {
          var _this15 = this;

          this._viewportScrollPosition =
          /** @type {?} */
          this._viewportRuler.getViewportScrollPosition();
          this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this15.isDragging()) {
              /** @type {?} */
              var newPosition =
              /** @type {?} */
              _this15._viewportRuler.getViewportScrollPosition();

              _this15._updateAfterScroll(_this15._viewportScrollPosition, newPosition.top, newPosition.left, _this15._clientRect);
            } else if (_this15.isReceiving()) {
              _this15._cacheOwnPosition();
            }
          });
        }
      }]);

      return DropListRef;
    }();
    /**
     * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
     * @param {?} clientRect `ClientRect` that should be updated.
     * @param {?} top Amount to add to the `top` position.
     * @param {?} left Amount to add to the `left` position.
     * @return {?}
     */


    function adjustClientRect(clientRect, top, left) {
      clientRect.top += top;
      clientRect.bottom = clientRect.top + clientRect.height;
      clientRect.left += left;
      clientRect.right = clientRect.left + clientRect.width;
    }
    /**
     * Finds the index of an item that matches a predicate function. Used as an equivalent
     * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
     * @template T
     * @param {?} array Array in which to look for matches.
     * @param {?} predicate Function used to determine whether an item is a match.
     * @return {?}
     */


    function findIndex(array, predicate) {
      for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
          return i;
        }
      }

      return -1;
    }
    /**
     * Checks whether some coordinates are within a `ClientRect`.
     * @param {?} clientRect ClientRect that is being checked.
     * @param {?} x Coordinates along the X axis.
     * @param {?} y Coordinates along the Y axis.
     * @return {?}
     */


    function isInsideClientRect(clientRect, x, y) {
      var top = clientRect.top,
          bottom = clientRect.bottom,
          left = clientRect.left,
          right = clientRect.right;
      return y >= top && y <= bottom && x >= left && x <= right;
    }
    /**
     * Gets a mutable version of an element's bounding `ClientRect`.
     * @param {?} element
     * @return {?}
     */


    function getMutableClientRect(element) {
      /** @type {?} */
      var clientRect = element.getBoundingClientRect(); // We need to clone the `clientRect` here, because all the values on it are readonly
      // and we need to be able to update them. Also we can't use a spread here, because
      // the values on a `ClientRect` aren't own properties. See:
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes

      return {
        top: clientRect.top,
        right: clientRect.right,
        bottom: clientRect.bottom,
        left: clientRect.left,
        width: clientRect.width,
        height: clientRect.height
      };
    }
    /**
     * Increments the vertical scroll position of a node.
     * @param {?} node Node whose scroll position should change.
     * @param {?} amount Amount of pixels that the `node` should be scrolled.
     * @return {?}
     */


    function incrementVerticalScroll(node, amount) {
      if (node === window) {
        /** @type {?} */
        node.scrollBy(0, amount);
      } else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.

        /** @type {?} */
        node.scrollTop += amount;
      }
    }
    /**
     * Increments the horizontal scroll position of a node.
     * @param {?} node Node whose scroll position should change.
     * @param {?} amount Amount of pixels that the `node` should be scrolled.
     * @return {?}
     */


    function incrementHorizontalScroll(node, amount) {
      if (node === window) {
        /** @type {?} */
        node.scrollBy(amount, 0);
      } else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.

        /** @type {?} */
        node.scrollLeft += amount;
      }
    }
    /**
     * Gets whether the vertical auto-scroll direction of a node.
     * @param {?} clientRect Dimensions of the node.
     * @param {?} pointerY Position of the user's pointer along the y axis.
     * @return {?}
     */


    function getVerticalScrollDirection(clientRect, pointerY) {
      var top = clientRect.top,
          bottom = clientRect.bottom,
          height = clientRect.height;
      /** @type {?} */

      var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;

      if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
        return 1
        /* UP */
        ;
      } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
        return 2
        /* DOWN */
        ;
      }

      return 0
      /* NONE */
      ;
    }
    /**
     * Gets whether the horizontal auto-scroll direction of a node.
     * @param {?} clientRect Dimensions of the node.
     * @param {?} pointerX Position of the user's pointer along the x axis.
     * @return {?}
     */


    function getHorizontalScrollDirection(clientRect, pointerX) {
      var left = clientRect.left,
          right = clientRect.right,
          width = clientRect.width;
      /** @type {?} */

      var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;

      if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
        return 1
        /* LEFT */
        ;
      } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
        return 2
        /* RIGHT */
        ;
      }

      return 0
      /* NONE */
      ;
    }
    /**
     * Gets the directions in which an element node should be scrolled,
     * assuming that the user's pointer is already within it scrollable region.
     * @param {?} element Element for which we should calculate the scroll direction.
     * @param {?} clientRect Bounding client rectangle of the element.
     * @param {?} pointerX Position of the user's pointer along the x axis.
     * @param {?} pointerY Position of the user's pointer along the y axis.
     * @return {?}
     */


    function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
      /** @type {?} */
      var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
      /** @type {?} */

      var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
      /** @type {?} */

      var verticalScrollDirection = 0
      /* NONE */
      ;
      /** @type {?} */

      var horizontalScrollDirection = 0
      /* NONE */
      ; // Note that we here we do some extra checks for whether the element is actually scrollable in
      // a certain direction and we only assign the scroll direction if it is. We do this so that we
      // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
      // This allows us to handle cases where the scroll regions of two scrollable elements overlap.

      if (computedVertical) {
        /** @type {?} */
        var scrollTop = element.scrollTop;

        if (computedVertical === 1
        /* UP */
        ) {
            if (scrollTop > 0) {
              verticalScrollDirection = 1
              /* UP */
              ;
            }
          } else if (element.scrollHeight - scrollTop > element.clientHeight) {
          verticalScrollDirection = 2
          /* DOWN */
          ;
        }
      }

      if (computedHorizontal) {
        /** @type {?} */
        var scrollLeft = element.scrollLeft;

        if (computedHorizontal === 1
        /* LEFT */
        ) {
            if (scrollLeft > 0) {
              horizontalScrollDirection = 1
              /* LEFT */
              ;
            }
          } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
          horizontalScrollDirection = 2
          /* RIGHT */
          ;
        }
      }

      return [verticalScrollDirection, horizontalScrollDirection];
    }
    /**
     * Gets the shadow root of an element, if any.
     * @param {?} element
     * @return {?}
     */


    function getShadowRoot(element) {
      if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["_supportsShadowDom"])()) {
        /** @type {?} */
        var rootNode = element.getRootNode ? element.getRootNode() : null;

        if (rootNode instanceof ShadowRoot) {
          return rootNode;
        }
      }

      return null;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Event options that can be used to bind an active, capturing event.
     * @type {?}
     */


    var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
      passive: false,
      capture: true
    });
    /**
     * Service that keeps track of all the drag item and drop container
     * instances, and manages global event listeners on the `document`.
     * \@docs-private
     * @template I, C
     */
    // Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
    // to avoid circular imports. If we were to reference them here, importing the registry into the
    // classes that are registering themselves will introduce a circular import.

    var DragDropRegistry = /*#__PURE__*/function () {
      /**
       * @param {?} _ngZone
       * @param {?} _document
       */
      function DragDropRegistry(_ngZone, _document) {
        var _this16 = this;

        _classCallCheck(this, DragDropRegistry);

        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */

        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */

        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */

        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */

        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */

        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */

        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the viewport has been scrolled while the user is dragging an item.
         */

        this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */

        this._preventDefaultWhileDragging =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (_this16._activeDragInstances.size) {
            event.preventDefault();
          }
        };

        this._document = _document;
      }
      /**
       * Adds a drop container to the registry.
       * @param {?} drop
       * @return {?}
       */


      _createClass(DragDropRegistry, [{
        key: "registerDropContainer",
        value: function registerDropContainer(drop) {
          if (!this._dropInstances.has(drop)) {
            if (this.getDropContainer(drop.id)) {
              throw Error("Drop instance with id \"".concat(drop.id, "\" has already been registered."));
            }

            this._dropInstances.add(drop);
          }
        }
        /**
         * Adds a drag item instance to the registry.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "registerDragItem",
        value: function registerDragItem(drag) {
          var _this17 = this;

          this._dragInstances.add(drag); // The `touchmove` event gets bound once, ahead of time, because WebKit
          // won't preventDefault on a dynamically-added `touchmove` listener.
          // See https://bugs.webkit.org/show_bug.cgi?id=184250.


          if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              // The event handler has to be explicitly active,
              // because newer browsers make it passive by default.
              _this17._document.addEventListener('touchmove', _this17._preventDefaultWhileDragging, activeCapturingEventOptions);
            });
          }
        }
        /**
         * Removes a drop container from the registry.
         * @param {?} drop
         * @return {?}
         */

      }, {
        key: "removeDropContainer",
        value: function removeDropContainer(drop) {
          this._dropInstances["delete"](drop);
        }
        /**
         * Removes a drag item instance from the registry.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "removeDragItem",
        value: function removeDragItem(drag) {
          this._dragInstances["delete"](drag);

          this.stopDragging(drag);

          if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
          }
        }
        /**
         * Starts the dragging sequence for a drag instance.
         * @param {?} drag Drag instance which is being dragged.
         * @param {?} event Event that initiated the dragging.
         * @return {?}
         */

      }, {
        key: "startDragging",
        value: function startDragging(drag, event) {
          var _this18 = this;

          // Do not process the same drag twice to avoid memory leaks and redundant listeners
          if (this._activeDragInstances.has(drag)) {
            return;
          }

          this._activeDragInstances.add(drag);

          if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            var _isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */


            var moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */

            var upEvent = _isTouchEvent ? 'touchend' : 'mouseup'; // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.

            this._globalListeners.set(moveEvent, {
              handler:
              /**
              * @param {?} e
              * @return {?}
              */
              function handler(e) {
                return _this18.pointerMove.next(
                /** @type {?} */
                e);
              },
              options: activeCapturingEventOptions
            }).set(upEvent, {
              handler:
              /**
              * @param {?} e
              * @return {?}
              */
              function handler(e) {
                return _this18.pointerUp.next(
                /** @type {?} */
                e);
              },
              options: true
            }).set('scroll', {
              handler:
              /**
              * @param {?} e
              * @return {?}
              */
              function handler(e) {
                return _this18.scroll.next(e);
              },
              // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
              // the document. See https://github.com/angular/components/issues/17144.
              options: true
            }) // Preventing the default action on `mousemove` isn't enough to disable text selection
            // on Safari so we need to prevent the selection event as well. Alternatively this can
            // be done by setting `user-select: none` on the `body`, however it has causes a style
            // recalculation which can be expensive on pages with a lot of elements.
            .set('selectstart', {
              handler: this._preventDefaultWhileDragging,
              options: activeCapturingEventOptions
            });

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this18._globalListeners.forEach(
              /**
              * @param {?} config
              * @param {?} name
              * @return {?}
              */
              function (config, name) {
                _this18._document.addEventListener(name, config.handler, config.options);
              });
            });
          }
        }
        /**
         * Stops dragging a drag item instance.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "stopDragging",
        value: function stopDragging(drag) {
          this._activeDragInstances["delete"](drag);

          if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
          }
        }
        /**
         * Gets whether a drag item instance is currently being dragged.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "isDragging",
        value: function isDragging(drag) {
          return this._activeDragInstances.has(drag);
        }
        /**
         * Gets a drop container by its id.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 8.0.0
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "getDropContainer",
        value: function getDropContainer(id) {
          return Array.from(this._dropInstances).find(
          /**
          * @param {?} instance
          * @return {?}
          */
          function (instance) {
            return instance.id === id;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this19 = this;

          this._dragInstances.forEach(
          /**
          * @param {?} instance
          * @return {?}
          */
          function (instance) {
            return _this19.removeDragItem(instance);
          });

          this._dropInstances.forEach(
          /**
          * @param {?} instance
          * @return {?}
          */
          function (instance) {
            return _this19.removeDropContainer(instance);
          });

          this._clearGlobalListeners();

          this.pointerMove.complete();
          this.pointerUp.complete();
        }
        /**
         * Clears out the global event listeners from the `document`.
         * @private
         * @return {?}
         */

      }, {
        key: "_clearGlobalListeners",
        value: function _clearGlobalListeners() {
          var _this20 = this;

          this._globalListeners.forEach(
          /**
          * @param {?} config
          * @param {?} name
          * @return {?}
          */
          function (config, name) {
            _this20._document.removeEventListener(name, config.handler, config.options);
          });

          this._globalListeners.clear();
        }
      }]);

      return DragDropRegistry;
    }();

    DragDropRegistry.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    DragDropRegistry.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    DragDropRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({
      factory: function DragDropRegistry_Factory() {
        return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]));
      },
      token: DragDropRegistry,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default configuration to be used when creating a `DragRef`.
     * @type {?}
     */

    var DEFAULT_CONFIG = {
      dragStartThreshold: 5,
      pointerDirectionChangeThreshold: 5
    };
    /**
     * Service that allows for drag-and-drop functionality to be attached to DOM elements.
     */

    var DragDrop = /*#__PURE__*/function () {
      /**
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       * @param {?} _dragDropRegistry
       */
      function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        _classCallCheck(this, DragDrop);

        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
      }
      /**
       * Turns an element into a draggable item.
       * @template T
       * @param {?} element Element to which to attach the dragging functionality.
       * @param {?=} config Object used to configure the dragging behavior.
       * @return {?}
       */


      _createClass(DragDrop, [{
        key: "createDrag",
        value: function createDrag(element) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG;
          return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
        }
        /**
         * Turns an element into a drop list.
         * @template T
         * @param {?} element Element to which to attach the drop list functionality.
         * @return {?}
         */

      }, {
        key: "createDropList",
        value: function createDropList(element) {
          return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
        }
      }]);

      return DragDrop;
    }();

    DragDrop.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    DragDrop.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]
      }, {
        type: DragDropRegistry
      }];
    };
    /** @nocollapse */


    DragDrop.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({
      factory: function DragDrop_Factory() {
        return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(DragDropRegistry));
      },
      token: DragDrop,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that is used to provide a CdkDropList instance to CdkDrag.
     * Used for avoiding circular imports.
     * @type {?}
     */

    var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DROP_LIST');
    /**
     * Injection token that is used to provide a CdkDropList instance to CdkDrag.
     * Used for avoiding circular imports.
     * @deprecated Use `CDK_DROP_LIST` instead.
     * \@breaking-change 8.0.0
     * @type {?}
     */

    var CDK_DROP_LIST_CONTAINER = CDK_DROP_LIST;
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
     * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
     * to avoid circular imports.
     * \@docs-private
     * @type {?}
     */

    var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_PARENT');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Handle that can be used to drag and CdkDrag instance.
     */

    var CdkDragHandle = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?=} parentDrag
       */
      function CdkDragHandle(element, parentDrag) {
        _classCallCheck(this, CdkDragHandle);

        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */

        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
      }
      /**
       * Whether starting to drag through this handle is disabled.
       * @return {?}
       */


      _createClass(CdkDragHandle, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

          this._stateChanges.next(this);
        }
      }]);

      return CdkDragHandle;
    }();

    CdkDragHandle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
      args: [{
        selector: '[cdkDragHandle]',
        host: {
          'class': 'cdk-drag-handle'
        }
      }]
    }];
    /** @nocollapse */

    CdkDragHandle.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [CDK_DRAG_PARENT]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }];
    };

    CdkDragHandle.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragHandleDisabled']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Element that will be used as a template for the placeholder of a CdkDrag when
     * it is being dragged. The placeholder is displayed in place of the element being dragged.
     * @template T
     */

    var CdkDragPlaceholder =
    /**
     * @param {?} templateRef
     */
    function CdkDragPlaceholder(templateRef) {
      _classCallCheck(this, CdkDragPlaceholder);

      this.templateRef = templateRef;
    };

    CdkDragPlaceholder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
      args: [{
        selector: 'ng-template[cdkDragPlaceholder]'
      }]
    }];
    /** @nocollapse */

    CdkDragPlaceholder.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
      }];
    };

    CdkDragPlaceholder.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Element that will be used as a template for the preview
     * of a CdkDrag when it is being dragged.
     * @template T
     */

    var CdkDragPreview =
    /**
     * @param {?} templateRef
     */
    function CdkDragPreview(templateRef) {
      _classCallCheck(this, CdkDragPreview);

      this.templateRef = templateRef;
    };

    CdkDragPreview.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
      args: [{
        selector: 'ng-template[cdkDragPreview]'
      }]
    }];
    /** @nocollapse */

    CdkDragPreview.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
      }];
    };

    CdkDragPreview.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to configure the behavior of `CdkDrag`.
     * @type {?}
     */

    var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_CONFIG', {
      providedIn: 'root',
      factory: CDK_DRAG_CONFIG_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function CDK_DRAG_CONFIG_FACTORY() {
      return {
        dragStartThreshold: 5,
        pointerDirectionChangeThreshold: 5
      };
    }
    /**
     * Element that can be moved inside a CdkDropList container.
     * @template T
     */


    var CdkDrag = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} dropContainer
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewContainerRef
       * @param {?} config
       * @param {?} _dir
       * @param {?} dragDrop
       * @param {?} _changeDetectorRef
       */
      function CdkDrag(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        var _this21 = this;

        _classCallCheck(this, CdkDrag);

        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */

        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits when the user starts dragging the item.
         */

        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */

        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */

        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */

        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */

        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */

        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */

        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          /** @type {?} */
          var subscription = _this21._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} movedEvent
          * @return {?}
          */
          function (movedEvent) {
            return {
              source: _this21,
              pointerPosition: movedEvent.pointerPosition,
              event: movedEvent.event,
              delta: movedEvent.delta,
              distance: movedEvent.distance
            };
          })).subscribe(observer);

          return (
            /**
            * @return {?}
            */
            function () {
              subscription.unsubscribe();
            }
          );
        });
        this._dragRef = dragDrop.createDrag(element, config);
        this._dragRef.data = this;

        this._syncInputs(this._dragRef);

        this._handleEvents(this._dragRef);
      }
      /**
       * Selector that will be used to determine the element to which the draggable's position will
       * be constrained. Matching starts from the element's parent and goes up the DOM until a matching
       * element has been found
       * @deprecated Use `boundaryElement` instead.
       * \@breaking-change 9.0.0
       * @return {?}
       */


      _createClass(CdkDrag, [{
        key: "getPlaceholderElement",

        /**
         * Returns the element that is being used as a placeholder
         * while the current element is being dragged.
         * @return {?}
         */
        value: function getPlaceholderElement() {
          return this._dragRef.getPlaceholderElement();
        }
        /**
         * Returns the root draggable element.
         * @return {?}
         */

      }, {
        key: "getRootElement",
        value: function getRootElement() {
          return this._dragRef.getRootElement();
        }
        /**
         * Resets a standalone drag item to its initial position.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this._dragRef.reset();
        }
        /**
         * Gets the pixel coordinates of the draggable outside of a drop container.
         * @return {?}
         */

      }, {
        key: "getFreeDragPosition",
        value: function getFreeDragPosition() {
          return this._dragRef.getFreeDragPosition();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this22 = this;

          // We need to wait for the zone to stabilize, in order for the reference
          // element to be in the proper place in the DOM. This is mostly relevant
          // for draggable elements inside portals since they get stamped out in
          // their original DOM position and then they get transferred to the portal.
          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this22._updateRootElement(); // Listen for any newly-added handles.


            _this22._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(_this22._handles), // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(
            /**
            * @param {?} handles
            * @return {?}
            */
            function (handles) {
              /** @type {?} */
              var childHandleElements = handles.filter(
              /**
              * @param {?} handle
              * @return {?}
              */
              function (handle) {
                return handle._parentDrag === _this22;
              }).map(
              /**
              * @param {?} handle
              * @return {?}
              */
              function (handle) {
                return handle.element;
              });

              _this22._dragRef.withHandles(childHandleElements);
            }), // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
            /**
            * @param {?} handles
            * @return {?}
            */
            function (handles) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, _toConsumableArray(handles.map(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                return item._stateChanges;
              })));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this22._destroyed)).subscribe(
            /**
            * @param {?} handleInstance
            * @return {?}
            */
            function (handleInstance) {
              // Enabled/disable the handle that changed in the DragRef.

              /** @type {?} */
              var dragRef = _this22._dragRef;
              /** @type {?} */

              var handle = handleInstance.element.nativeElement;
              handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            });

            if (_this22.freeDragPosition) {
              _this22._dragRef.setFreeDragPosition(_this22.freeDragPosition);
            }
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var rootSelectorChange = changes['rootElementSelector'];
          /** @type {?} */

          var positionChange = changes['freeDragPosition']; // We don't have to react to the first change since it's being
          // handled in `ngAfterViewInit` where it needs to be deferred.

          if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
          } // Skip the first change since it's being handled in `ngAfterViewInit`.


          if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();

          this._dragRef.dispose();
        }
        /**
         * Syncs the root element with the `DragRef`.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRootElement",
        value: function _updateRootElement() {
          /** @type {?} */
          var element = this.element.nativeElement;
          /** @type {?} */

          var rootElement = this.rootElementSelector ? getClosestMatchingAncestor(element, this.rootElementSelector) : element;

          if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " + "Currently attached to \"".concat(rootElement.nodeName, "\"."));
          }

          this._dragRef.withRootElement(rootElement || element);
        }
        /**
         * Gets the boundary element, based on the `boundaryElement` value.
         * @private
         * @return {?}
         */

      }, {
        key: "_getBoundaryElement",
        value: function _getBoundaryElement() {
          /** @type {?} */
          var boundary = this.boundaryElement;

          if (!boundary) {
            return null;
          }

          if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
          }
          /** @type {?} */


          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundary);

          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["isDevMode"])() && !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
          }

          return element;
        }
        /**
         * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_syncInputs",
        value: function _syncInputs(ref) {
          var _this23 = this;

          ref.beforeStarted.subscribe(
          /**
          * @return {?}
          */
          function () {
            if (!ref.isDragging()) {
              /** @type {?} */
              var dir = _this23._dir;
              /** @type {?} */

              var placeholder = _this23._placeholderTemplate ? {
                template: _this23._placeholderTemplate.templateRef,
                context: _this23._placeholderTemplate.data,
                viewContainer: _this23._viewContainerRef
              } : null;
              /** @type {?} */

              var preview = _this23._previewTemplate ? {
                template: _this23._previewTemplate.templateRef,
                context: _this23._previewTemplate.data,
                viewContainer: _this23._viewContainerRef
              } : null;
              ref.disabled = _this23.disabled;
              ref.lockAxis = _this23.lockAxis;
              ref.dragStartDelay = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(_this23.dragStartDelay);
              ref.constrainPosition = _this23.constrainPosition;
              ref.withBoundaryElement(_this23._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview);

              if (dir) {
                ref.withDirection(dir.value);
              }
            }
          });
        }
        /**
         * Handles the events from the underlying `DragRef`.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_handleEvents",
        value: function _handleEvents(ref) {
          var _this24 = this;

          ref.started.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this24.started.emit({
              source: _this24
            }); // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.


            _this24._changeDetectorRef.markForCheck();
          });
          ref.released.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this24.released.emit({
              source: _this24
            });
          });
          ref.ended.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this24.ended.emit({
              source: _this24,
              distance: event.distance
            }); // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.


            _this24._changeDetectorRef.markForCheck();
          });
          ref.entered.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this24.entered.emit({
              container: event.container.data,
              item: _this24,
              currentIndex: event.currentIndex
            });
          });
          ref.exited.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this24.exited.emit({
              container: event.container.data,
              item: _this24
            });
          });
          ref.dropped.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this24.dropped.emit({
              previousIndex: event.previousIndex,
              currentIndex: event.currentIndex,
              previousContainer: event.previousContainer.data,
              container: event.container.data,
              isPointerOverContainer: event.isPointerOverContainer,
              item: _this24,
              distance: event.distance
            });
          });
        }
      }, {
        key: "boundaryElementSelector",
        get: function get() {
          return typeof this.boundaryElement === 'string' ? this.boundaryElement :
          /** @type {?} */
          undefined;
        }
        /**
         * @param {?} selector
         * @return {?}
         */
        ,
        set: function set(selector) {
          this.boundaryElement = selector;
        }
        /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || this.dropContainer && this.dropContainer.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          this._dragRef.disabled = this._disabled;
        }
      }]);

      return CdkDrag;
    }();

    CdkDrag.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
      args: [{
        selector: '[cdkDrag]',
        exportAs: 'cdkDrag',
        host: {
          'class': 'cdk-drag',
          '[class.cdk-drag-disabled]': 'disabled',
          '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
        },
        providers: [{
          provide: CDK_DRAG_PARENT,
          useExisting: CdkDrag
        }]
      }]
    }];
    /** @nocollapse */

    CdkDrag.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [CDK_DROP_LIST]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [CDK_DRAG_CONFIG]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: DragDrop
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }];
    };

    CdkDrag.propDecorators = {
      _handles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
        args: [CdkDragHandle, {
          descendants: true
        }]
      }],
      _previewTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
        args: [CdkDragPreview, {
          "static": false
        }]
      }],
      _placeholderTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
        args: [CdkDragPlaceholder, {
          "static": false
        }]
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragData']
      }],
      lockAxis: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragLockAxis']
      }],
      rootElementSelector: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragRootElement']
      }],
      boundaryElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragBoundary']
      }],
      dragStartDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragStartDelay']
      }],
      freeDragPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragFreeDragPosition']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragDisabled']
      }],
      constrainPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDragConstrainPosition']
      }],
      started: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDragStarted']
      }],
      released: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDragReleased']
      }],
      ended: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDragEnded']
      }],
      entered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDragEntered']
      }],
      exited: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDragExited']
      }],
      dropped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDragDropped']
      }],
      moved: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDragMoved']
      }]
    };
    /**
     * Gets the closest ancestor of an element that matches a selector.
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */

    function getClosestMatchingAncestor(element, selector) {
      /** @type {?} */
      var currentElement =
      /** @type {?} */
      element.parentElement;

      while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
        /** @type {?} */
        currentElement.msMatchesSelector(selector)) {
          return currentElement;
        }

        currentElement = currentElement.parentElement;
      }

      return null;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
     * elements that are placed inside a `cdkDropListGroup` will be connected to each other
     * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
     * from `cdkDropList`.
     * @template T
     */


    var CdkDropListGroup = /*#__PURE__*/function () {
      function CdkDropListGroup() {
        _classCallCheck(this, CdkDropListGroup);

        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
      }
      /**
       * Whether starting a dragging sequence from inside this group is disabled.
       * @return {?}
       */


      _createClass(CdkDropListGroup, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._items.clear();
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkDropListGroup;
    }();

    CdkDropListGroup.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
      args: [{
        selector: '[cdkDropListGroup]',
        exportAs: 'cdkDropListGroup'
      }]
    }];
    CdkDropListGroup.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListGroupDisabled']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Counter used to generate unique ids for drop zones.
     * @type {?}
     */

    var _uniqueIdCounter$1 = 0;
    var ɵ0 = undefined; // @breaking-change 8.0.0 `CdkDropList` implements `CdkDropListContainer` for backwards
    // compatiblity. The implements clause, as well as all the methods that it enforces can
    // be removed when `CdkDropListContainer` is deleted.

    /**
     * Container that wraps a set of draggable items.
     * @template T
     */

    var CdkDropList = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} dragDrop
       * @param {?} _changeDetectorRef
       * @param {?=} _dir
       * @param {?=} _group
       */
      function CdkDropList(element, dragDrop, _changeDetectorRef, _dir, _group) {
        var _this25 = this;

        _classCallCheck(this, CdkDropList);

        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        /**
         * Emits when the list has been destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */

        this.connectedTo = [];
        /**
         * Direction in which the list is oriented.
         */

        this.orientation = 'vertical';
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */

        this.id = "cdk-drop-list-".concat(_uniqueIdCounter$1++);
        this._disabled = false;
        this._sortingDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */

        this.enterPredicate =
        /**
        * @return {?}
        */
        function () {
          return true;
        };
        /**
         * Whether to auto-scroll the view when the user moves their pointer close to the edges.
         */


        this.autoScrollDisabled = false;
        /**
         * Emits when the user drops an item inside the container.
         */

        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */

        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */

        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */

        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;

        this._dropListRef.enterPredicate =
        /**
        * @param {?} drag
        * @param {?} drop
        * @return {?}
        */
        function (drag, drop) {
          return _this25.enterPredicate(drag.data, drop.data);
        };

        this._syncInputs(this._dropListRef);

        this._handleEvents(this._dropListRef);

        CdkDropList._dropLists.push(this);

        if (_group) {
          _group._items.add(this);
        }
      }
      /**
       * Whether starting a dragging sequence from this container is disabled.
       * @return {?}
       */


      _createClass(CdkDropList, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this26 = this;

          this._draggables.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._draggables), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} items
          * @return {?}
          */
          function (items) {
            _this26._dropListRef.withItems(items.map(
            /**
            * @param {?} drag
            * @return {?}
            */
            function (drag) {
              return drag._dragRef;
            }));
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var index = CdkDropList._dropLists.indexOf(this);

          if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
          }

          if (this._group) {
            this._group._items["delete"](this);
          }

          this._dropListRef.dispose();

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Starts dragging an item.
         * @return {?}
         */

      }, {
        key: "start",
        value: function start() {
          this._dropListRef.start();
        }
        /**
         * Drops an item into this container.
         * @param {?} item Item being dropped into the container.
         * @param {?} currentIndex Index at which the item should be inserted.
         * @param {?} previousContainer Container from which the item got dragged in.
         * @param {?} isPointerOverContainer Whether the user's pointer was over the
         *    container when the item was dropped.
         * @return {?}
         */

      }, {
        key: "drop",
        value: function drop(item, currentIndex, previousContainer, isPointerOverContainer) {
          this._dropListRef.drop(item._dragRef, currentIndex,
          /** @type {?} */
          previousContainer._dropListRef, isPointerOverContainer);
        }
        /**
         * Emits an event to indicate that the user moved an item into the container.
         * @param {?} item Item that was moved into the container.
         * @param {?} pointerX Position of the item along the X axis.
         * @param {?} pointerY Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "enter",
        value: function enter(item, pointerX, pointerY) {
          this._dropListRef.enter(item._dragRef, pointerX, pointerY);
        }
        /**
         * Removes an item from the container after it was dragged into another container by the user.
         * @param {?} item Item that was dragged out.
         * @return {?}
         */

      }, {
        key: "exit",
        value: function exit(item) {
          this._dropListRef.exit(item._dragRef);
        }
        /**
         * Figures out the index of an item in the container.
         * @param {?} item Item whose index should be determined.
         * @return {?}
         */

      }, {
        key: "getItemIndex",
        value: function getItemIndex(item) {
          return this._dropListRef.getItemIndex(item._dragRef);
        }
        /**
         * Sorts an item inside the container based on its position.
         * @param {?} item Item to be sorted.
         * @param {?} pointerX Position of the item along the X axis.
         * @param {?} pointerY Position of the item along the Y axis.
         * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
         * @return {?}
         */

      }, {
        key: "_sortItem",
        value: function _sortItem(item, pointerX, pointerY, pointerDelta) {
          return this._dropListRef._sortItem(item._dragRef, pointerX, pointerY, pointerDelta);
        }
        /**
         * Figures out whether an item should be moved into a sibling
         * drop container, based on its current position.
         * @param {?} item Drag item that is being moved.
         * @param {?} x Position of the item along the X axis.
         * @param {?} y Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "_getSiblingContainerFromPosition",
        value: function _getSiblingContainerFromPosition(item, x, y) {
          /** @type {?} */
          var result = this._dropListRef._getSiblingContainerFromPosition(item._dragRef, x, y);

          return result ? result.data : null;
        }
        /**
         * Checks whether the user's pointer is positioned over the container.
         * @param {?} x Pointer position along the X axis.
         * @param {?} y Pointer position along the Y axis.
         * @return {?}
         */

      }, {
        key: "_isOverContainer",
        value: function _isOverContainer(x, y) {
          return this._dropListRef._isOverContainer(x, y);
        }
        /**
         * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_syncInputs",
        value: function _syncInputs(ref) {
          var _this27 = this;

          if (this._dir) {
            this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return ref.withDirection(value);
            });
          }

          ref.beforeStarted.subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(_this27.connectedTo).map(
            /**
            * @param {?} drop
            * @return {?}
            */
            function (drop) {
              return typeof drop === 'string' ?
              /** @type {?} */
              CdkDropList._dropLists.find(
              /**
              * @param {?} list
              * @return {?}
              */
              function (list) {
                return list.id === drop;
              }) : drop;
            });

            if (_this27._group) {
              _this27._group._items.forEach(
              /**
              * @param {?} drop
              * @return {?}
              */
              function (drop) {
                if (siblings.indexOf(drop) === -1) {
                  siblings.push(drop);
                }
              });
            }

            ref.disabled = _this27.disabled;
            ref.lockAxis = _this27.lockAxis;
            ref.sortingDisabled = _this27.sortingDisabled;
            ref.autoScrollDisabled = _this27.autoScrollDisabled;
            ref.connectedTo(siblings.filter(
            /**
            * @param {?} drop
            * @return {?}
            */
            function (drop) {
              return drop && drop !== _this27;
            }).map(
            /**
            * @param {?} list
            * @return {?}
            */
            function (list) {
              return list._dropListRef;
            })).withOrientation(_this27.orientation);
          });
        }
        /**
         * Handles events from the underlying DropListRef.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_handleEvents",
        value: function _handleEvents(ref) {
          var _this28 = this;

          ref.beforeStarted.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this28._changeDetectorRef.markForCheck();
          });
          ref.entered.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this28.entered.emit({
              container: _this28,
              item: event.item.data,
              currentIndex: event.currentIndex
            });
          });
          ref.exited.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this28.exited.emit({
              container: _this28,
              item: event.item.data
            });

            _this28._changeDetectorRef.markForCheck();
          });
          ref.sorted.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this28.sorted.emit({
              previousIndex: event.previousIndex,
              currentIndex: event.currentIndex,
              container: _this28,
              item: event.item.data
            });
          });
          ref.dropped.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this28.dropped.emit({
              previousIndex: event.previousIndex,
              currentIndex: event.currentIndex,
              previousContainer: event.previousContainer.data,
              container: event.container.data,
              item: event.item.data,
              isPointerOverContainer: event.isPointerOverContainer,
              distance: event.distance
            }); // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.


            _this28._changeDetectorRef.markForCheck();
          });
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || !!this._group && this._group.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether sorting within this drop list is disabled.
         * @return {?}
         */

      }, {
        key: "sortingDisabled",
        get: function get() {
          return this._sortingDisabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkDropList;
    }();
    /**
     * Keeps track of the drop lists that are currently on the page.
     */


    CdkDropList._dropLists = [];
    CdkDropList.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
      args: [{
        selector: '[cdkDropList], cdk-drop-list',
        exportAs: 'cdkDropList',
        providers: [// Prevent child drop lists from picking up the same group as their parent.
        {
          provide: CdkDropListGroup,
          useValue: ɵ0
        }, {
          provide: CDK_DROP_LIST_CONTAINER,
          useExisting: CdkDropList
        }],
        host: {
          'class': 'cdk-drop-list',
          '[id]': 'id',
          '[class.cdk-drop-list-disabled]': 'disabled',
          '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
          '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
        }
      }]
    }];
    /** @nocollapse */

    CdkDropList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: DragDrop
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: CdkDropListGroup,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
        }]
      }];
    };

    CdkDropList.propDecorators = {
      _draggables: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return CdkDrag;
        }), {
          // Explicitly set to false since some of the logic below makes assumptions about it.
          // The `.withItems` call below should be updated if we ever need to switch this to `true`.
          descendants: false
        }]
      }],
      connectedTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListConnectedTo']
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListData']
      }],
      orientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListOrientation']
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      lockAxis: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListLockAxis']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListDisabled']
      }],
      sortingDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListSortingDisabled']
      }],
      enterPredicate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListEnterPredicate']
      }],
      autoScrollDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['cdkDropListAutoScrollDisabled']
      }],
      dropped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDropListDropped']
      }],
      entered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDropListEntered']
      }],
      exited: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDropListExited']
      }],
      sorted: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['cdkDropListSorted']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var DragDropModule = function DragDropModule() {
      _classCallCheck(this, DragDropModule);
    };

    DragDropModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
      args: [{
        declarations: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
        exports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
        providers: [DragDrop]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=drag-drop.js.map

    /***/
  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
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


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]],
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], MaterialModule);
    /***/
  }
}]);
//# sourceMappingURL=default~chat-chat-module~detail-detail-module~favorate-popup-favorate-popup-module~find-friends-find~f01dcdfd-es5.js.map