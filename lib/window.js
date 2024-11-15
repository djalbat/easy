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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IGZvY3VzTWl4aW5zIGZyb20gXCIuL21peGlucy9mb2N1c1wiO1xuXG5pbXBvcnQgeyBVTkRFRklORUQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFJFU0laRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgb25TY3JvbGwsIG9mZlNjcm9sbCB9IGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gd2luZG93OyAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGFzc2lnbiguLi5zb3VyY2VzKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIHJlbG9hZCgpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IC8vL1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG5cbiAgZ2V0U2VsZWN0aW9uKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldFNlbGVjdGlvbigpOyB9XG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFJFU0laRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFJFU0laRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBmb2N1c01peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIHtcbiAgb25TY3JvbGwsXG4gIG9mZlNjcm9sbFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2Ygd2luZG93ID09PSBVTkRFRklORUQpID8gdW5kZWZpbmVkIDogbmV3IFdpbmRvdygpOyAgLy8vXG4iXSwibmFtZXMiOlsiV2luZG93IiwiZG9tRWxlbWVudCIsIndpbmRvdyIsImdldERPTUVsZW1lbnQiLCJhc3NpZ24iLCJzb3VyY2VzIiwiT2JqZWN0IiwidGFyZ2V0IiwicmVsb2FkIiwibG9jYXRpb24iLCJnZXRXaWR0aCIsImlubmVyV2lkdGgiLCJnZXRIZWlnaHQiLCJpbm5lckhlaWdodCIsImdldFNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZ2V0U2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiZ2V0U2VsZWN0aW9uIiwib25SZXNpemUiLCJyZXNpemVIYW5kbGVyIiwiZWxlbWVudCIsImV2ZW50VHlwZSIsIlJFU0laRV9FVkVOVF9UWVBFIiwiZXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZSZXNpemUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJvdG90eXBlIiwia2V5TWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJtb3VzZU1peGlucyIsImNsaWNrTWl4aW5zIiwiZm9jdXNNaXhpbnMiLCJvblNjcm9sbCIsIm9mZlNjcm9sbCIsIlVOREVGSU5FRCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0VBLFVBQTBFLEdBQUc7Ozs7ZUFBN0U7OzswREFoRXNCOzREQUNFOzREQUNBOzREQUNBOzREQUNBO3lCQUVFOzBCQUNRO3NCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBQSxBQUFNQSx1QkFBTjthQUFNQTtnQ0FBQUE7UUFFRixJQUFJLENBQUNDLFVBQVUsR0FBR0MsUUFBUSxHQUFHOztrQkFGM0JGOztZQUtKRyxLQUFB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