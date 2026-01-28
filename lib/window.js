"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" ///
, {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _key = /*#__PURE__*/ _interop_require_default(require("./mixins/key"));
var _event = /*#__PURE__*/ _interop_require_default(require("./mixins/event"));
var _mouse = /*#__PURE__*/ _interop_require_default(require("./mixins/mouse"));
var _click = /*#__PURE__*/ _interop_require_default(require("./mixins/click"));
var _focus = /*#__PURE__*/ _interop_require_default(require("./mixins/focus"));
var _constants = require("./constants");
var _eventTypes = require("./eventTypes");
var _scroll = require("./mixins/scroll");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var Window = /*#__PURE__*/ function() {
    function Window() {
        _class_call_check(this, Window);
        this.domElement = window; ///
    }
    _create_class(Window, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return this.domElement;
            }
        },
        {
            key: "assign",
            value: function assign() {
                for(var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++){
                    sources[_key] = arguments[_key];
                }
                var _Object;
                var target = this.domElement; ///
                (_Object = Object).assign.apply(_Object, [
                    target
                ].concat(_to_consumable_array(sources)));
            }
        },
        {
            key: "reload",
            value: function reload() {
                window.location.reload(); ///
            }
        },
        {
            key: "getWidth",
            value: function getWidth() {
                return this.domElement.innerWidth;
            } ///
        },
        {
            key: "getHeight",
            value: function getHeight() {
                return this.domElement.innerHeight;
            } ///
        },
        {
            key: "getScrollTop",
            value: function getScrollTop() {
                return this.domElement.pageYOffset;
            } ///
        },
        {
            key: "getScrollLeft",
            value: function getScrollLeft() {
                return this.domElement.pageXOffset;
            } ///
        },
        {
            key: "getSelection",
            value: function getSelection() {
                return this.domElement.getSelection();
            }
        },
        {
            key: "getScreenWidth",
            value: function getScreenWidth() {
                return this.domElement.screen.width;
            }
        },
        {
            key: "getScreenHeight",
            value: function getScreenHeight() {
                return this.domElement.screen.height;
            }
        },
        {
            key: "scrollTo",
            value: function scrollTo(scrollTop, scrollLeft) {
                this.domElement.scrollTo(scrollLeft, scrollTop);
            }
        },
        {
            key: "onResize",
            value: function onResize(resizeHandler, element) {
                var eventType = _eventTypes.RESIZE_EVENT_TYPE, eventListener = this.addEventListener(eventType, resizeHandler, element);
                this.domElement.addEventListener(eventType, eventListener);
            }
        },
        {
            key: "offResize",
            value: function offResize(resizeHandler, element) {
                var eventType = _eventTypes.RESIZE_EVENT_TYPE, eventListener = this.removeEventListener(eventType, resizeHandler, element);
                this.domElement.removeEventListener(eventType, eventListener);
            }
        }
    ]);
    return Window;
}();
Object.assign(Window.prototype, _key.default);
Object.assign(Window.prototype, _event.default);
Object.assign(Window.prototype, _mouse.default);
Object.assign(Window.prototype, _click.default);
Object.assign(Window.prototype, _focus.default);
Object.assign(Window.prototype, {
    onScroll: _scroll.onScroll,
    offScroll: _scroll.offScroll
});
var _default = (typeof window === "undefined" ? "undefined" : _type_of(window)) === _constants.UNDEFINED ? undefined : new Window();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IGZvY3VzTWl4aW5zIGZyb20gXCIuL21peGlucy9mb2N1c1wiO1xuXG5pbXBvcnQgeyBVTkRFRklORUQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFJFU0laRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgb25TY3JvbGwsIG9mZlNjcm9sbCB9IGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gd2luZG93OyAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGFzc2lnbiguLi5zb3VyY2VzKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIHJlbG9hZCgpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IC8vL1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG5cbiAgZ2V0U2VsZWN0aW9uKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldFNlbGVjdGlvbigpOyB9XG5cbiAgZ2V0U2NyZWVuV2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2NyZWVuLndpZHRoOyB9XG5cbiAgZ2V0U2NyZWVuSGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcmVlbi5oZWlnaHQ7IH1cblxuICBzY3JvbGxUbyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvKHNjcm9sbExlZnQsIHNjcm9sbFRvcCk7IH1cblxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gUkVTSVpFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gUkVTSVpFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGZvY3VzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwge1xuICBvblNjcm9sbCxcbiAgb2ZmU2Nyb2xsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKHR5cGVvZiB3aW5kb3cgPT09IFVOREVGSU5FRCkgPyB1bmRlZmluZWQgOiBuZXcgV2luZG93KCk7ICAvLy9cbiJdLCJuYW1lcyI6WyJXaW5kb3ciLCJkb21FbGVtZW50Iiwid2luZG93IiwiZ2V0RE9NRWxlbWVudCIsImFzc2lnbiIsInNvdXJjZXMiLCJPYmplY3QiLCJ0YXJnZXQiLCJyZWxvYWQiLCJsb2NhdGlvbiIsImdldFdpZHRoIiwiaW5uZXJXaWR0aCIsImdldEhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2V0U2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJnZXRTY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJnZXRTZWxlY3Rpb24iLCJnZXRTY3JlZW5XaWR0aCIsInNjcmVlbiIsIndpZHRoIiwiZ2V0U2NyZWVuSGVpZ2h0IiwiaGVpZ2h0Iiwic2Nyb2xsVG8iLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0Iiwib25SZXNpemUiLCJyZXNpemVIYW5kbGVyIiwiZWxlbWVudCIsImV2ZW50VHlwZSIsIlJFU0laRV9FVkVOVF9UWVBFIiwiZXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZSZXNpemUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJvdG90eXBlIiwia2V5TWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJtb3VzZU1peGlucyIsImNsaWNrTWl4aW5zIiwiZm9jdXNNaXhpbnMiLCJvblNjcm9sbCIsIm9mZlNjcm9sbCIsIlVOREVGSU5FRCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0VBLFVBQTBFLEdBQUc7Ozs7ZUFBN0U7OzswREF0RXNCOzREQUNFOzREQUNBOzREQUNBOzREQUNBO3lCQUVFOzBCQUNRO3NCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBQSxBQUFNQSx1QkFBTjthQUFNQTtnQ0FBQUE7UUFFRixJQUFJLENBQUNDLFVBQVUsR0FBR0MsUUFBUSxHQUFHOztrQkFGM0JGOztZQUtKRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQU8sSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLFVBQUgsVUFBQSxPQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLFFBQUgsUUFBQSxTQUFBLENBQUEsS0FBVTs7b0JBR2ZDO2dCQUZBLElBQU1DLFNBQVMsSUFBSSxDQUFDTixVQUFVLEVBQUUsR0FBRztnQkFFbkNLLENBQUFBLFVBQUFBLFFBQU9GLE1BQU0sT0FBYkUsU0FBQUE7b0JBQWNDO2lCQUFtQixDQUFqQ0QsT0FBc0IscUJBQUdEO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFTixPQUFPTyxRQUFRLENBQUNELE1BQU0sSUFBSSxHQUFHO1lBQy9COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFhLE9BQU8sSUFBSSxDQUFDVCxVQUFVLENBQUNVLFVBQVU7WUFBRSxFQUFFLEdBQUc7OztZQUVyREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDWCxVQUFVLENBQUNZLFdBQVc7WUFBRSxFQUFFLEdBQUc7OztZQUV2REMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFpQixPQUFPLElBQUksQ0FBQ2IsVUFBVSxDQUFDYyxXQUFXO1lBQUUsRUFBRyxHQUFHOzs7WUFFM0RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBa0IsT0FBTyxJQUFJLENBQUNmLFVBQVUsQ0FBQ2dCLFdBQVc7WUFBRSxFQUFFLEdBQUc7OztZQUUzREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFpQixPQUFPLElBQUksQ0FBQ2pCLFVBQVUsQ0FBQ2lCLFlBQVk7WUFBSTs7O1lBRXhEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQW1CLE9BQU8sSUFBSSxDQUFDbEIsVUFBVSxDQUFDbUIsTUFBTSxDQUFDQyxLQUFLO1lBQUU7OztZQUV4REMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFvQixPQUFPLElBQUksQ0FBQ3JCLFVBQVUsQ0FBQ21CLE1BQU0sQ0FBQ0csTUFBTTtZQUFFOzs7WUFFMURDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxTQUFTLEVBQUVDLFVBQVU7Z0JBQUksSUFBSSxDQUFDekIsVUFBVSxDQUFDdUIsUUFBUSxDQUFDRSxZQUFZRDtZQUFZOzs7WUFFbkZFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzdCLElBQU1DLFlBQVlDLDZCQUFpQixFQUM3QkMsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNILFdBQVdGLGVBQWVDO2dCQUV0RSxJQUFJLENBQUM1QixVQUFVLENBQUNnQyxnQkFBZ0IsQ0FBQ0gsV0FBV0U7WUFDOUM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVU4sYUFBYSxFQUFFQyxPQUFPO2dCQUM5QixJQUFNQyxZQUFZQyw2QkFBaUIsRUFDN0JDLGdCQUFnQixJQUFJLENBQUNHLG1CQUFtQixDQUFDTCxXQUFXRixlQUFlQztnQkFFekUsSUFBSSxDQUFDNUIsVUFBVSxDQUFDa0MsbUJBQW1CLENBQUNMLFdBQVdFO1lBQ2pEOzs7V0EvQ0loQzs7QUFrRE5NLE9BQU9GLE1BQU0sQ0FBQ0osT0FBT29DLFNBQVMsRUFBRUMsWUFBUztBQUN6Qy9CLE9BQU9GLE1BQU0sQ0FBQ0osT0FBT29DLFNBQVMsRUFBRUUsY0FBVztBQUMzQ2hDLE9BQU9GLE1BQU0sQ0FBQ0osT0FBT29DLFNBQVMsRUFBRUcsY0FBVztBQUMzQ2pDLE9BQU9GLE1BQU0sQ0FBQ0osT0FBT29DLFNBQVMsRUFBRUksY0FBVztBQUMzQ2xDLE9BQU9GLE1BQU0sQ0FBQ0osT0FBT29DLFNBQVMsRUFBRUssY0FBVztBQUMzQ25DLE9BQU9GLE1BQU0sQ0FBQ0osT0FBT29DLFNBQVMsRUFBRTtJQUM5Qk0sVUFBQUEsZ0JBQVE7SUFDUkMsV0FBQUEsaUJBQVM7QUFDWDtJQUVBLFdBQWUsQUFBQyxDQUFBLE9BQU96Qyx1Q0FBUCxTQUFPQSxPQUFLLE1BQU0wQyxvQkFBUyxHQUFJQyxZQUFZLElBQUk3QyJ9