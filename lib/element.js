"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Element;
    }
});
var _offset = /*#__PURE__*/ _interop_require_default(require("./offset"));
var _bounds = /*#__PURE__*/ _interop_require_default(require("./bounds"));
var _jsx = /*#__PURE__*/ _interop_require_default(require("./mixins/jsx"));
var _key = /*#__PURE__*/ _interop_require_default(require("./mixins/key"));
var _state = /*#__PURE__*/ _interop_require_default(require("./mixins/state"));
var _event = /*#__PURE__*/ _interop_require_default(require("./mixins/event"));
var _mouse = /*#__PURE__*/ _interop_require_default(require("./mixins/mouse"));
var _click = /*#__PURE__*/ _interop_require_default(require("./mixins/click"));
var _touch = /*#__PURE__*/ _interop_require_default(require("./mixins/touch"));
var _scroll = /*#__PURE__*/ _interop_require_default(require("./mixins/scroll"));
var _resize = /*#__PURE__*/ _interop_require_default(require("./mixins/resize"));
var _element = /*#__PURE__*/ _interop_require_default(require("./mixins/element"));
var _fullScreen = /*#__PURE__*/ _interop_require_default(require("./mixins/fullScreen"));
var _customEvent = /*#__PURE__*/ _interop_require_default(require("./mixins/customEvent"));
var _object = require("./utilities/object");
var _name = require("./utilities/name");
var _array = require("./utilities/array");
var _element1 = require("./utilities/element");
var _constants = require("./constants");
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
var Element = /*#__PURE__*/ function() {
    function Element(selector) {
        _class_call_check(this, Element);
        if (selector !== null) {
            var element = this, domElement = document.querySelector(selector);
            (0, _element1.constructElement)(element, domElement);
        }
    }
    _create_class(Element, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return this.domElement;
            }
        },
        {
            key: "getOffset",
            value: function getOffset() {
                var top = this.domElement.offsetTop, left = this.domElement.offsetLeft, offset = new _offset.default(top, left);
                return offset;
            }
        },
        {
            key: "getBounds",
            value: function getBounds() {
                var boundingClientRect = this.domElement.getBoundingClientRect(), bounds = _bounds.default.fromBoundingClientRect(boundingClientRect);
                return bounds;
            }
        },
        {
            key: "getWidth",
            value: function getWidth() {
                var includeBorder = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var width = includeBorder ? this.domElement.offsetWidth : this.domElement.clientWidth;
                return width;
            }
        },
        {
            key: "setWidth",
            value: function setWidth(width) {
                width = "".concat(width, "px"); ///
                this.style(_constants.WIDTH, width);
            }
        },
        {
            key: "getHeight",
            value: function getHeight() {
                var includeBorder = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var height = includeBorder ? this.domElement.offsetHeight : this.domElement.clientHeight;
                return height;
            }
        },
        {
            key: "setHeight",
            value: function setHeight(height) {
                height = "".concat(height, "px"); ///
                this.style(_constants.HEIGHT, height);
            }
        },
        {
            key: "hasAttribute",
            value: function hasAttribute(name) {
                return this.domElement.hasAttribute(name);
            }
        },
        {
            key: "getAttribute",
            value: function getAttribute(name) {
                return this.domElement.getAttribute(name);
            }
        },
        {
            key: "setAttribute",
            value: function setAttribute(name, value) {
                this.domElement.setAttribute(name, value);
            }
        },
        {
            key: "clearAttribute",
            value: function clearAttribute(name) {
                this.domElement.removeAttribute(name);
            }
        },
        {
            key: "addAttribute",
            value: function addAttribute(name, value) {
                this.setAttribute(name, value);
            }
        },
        {
            key: "removeAttribute",
            value: function removeAttribute(name) {
                this.clearAttribute(name);
            }
        },
        {
            key: "hasClass",
            value: function hasClass(className) {
                return this.domElement.classList.contains(className);
            }
        },
        {
            key: "setClass",
            value: function setClass(className) {
                this.domElement.className = className;
            }
        },
        {
            key: "addClass",
            value: function addClass(className) {
                this.domElement.classList.add(className);
            }
        },
        {
            key: "removeClass",
            value: function removeClass(className) {
                this.domElement.classList.remove(className);
            }
        },
        {
            key: "toggleClass",
            value: function toggleClass(className) {
                this.domElement.classList.toggle(className);
            }
        },
        {
            key: "removeAllClasses",
            value: function removeAllClasses() {
                this.domElement.className = _constants.EMPTY_STRING;
            }
        },
        {
            key: "addTo",
            value: function addTo(parentElement) {
                parentElement.add(this);
            }
        },
        {
            key: "appendTo",
            value: function appendTo(parentElement) {
                parentElement.append(this);
            }
        },
        {
            key: "prependTo",
            value: function prependTo(parentElement) {
                parentElement.prepend(this);
            }
        },
        {
            key: "removeFrom",
            value: function removeFrom(parentElement) {
                parentElement.remove(this);
            }
        },
        {
            key: "insert",
            value: function insert(element) {
                this.append(element);
            }
        },
        {
            key: "add",
            value: function add(element) {
                this.append(element);
            }
        },
        {
            key: "remove",
            value: function remove(element) {
                if (element) {
                    element.remove();
                    return;
                }
                this.domElement.remove();
            }
        },
        {
            key: "prepend",
            value: function prepend(element) {
                var domElement = element.domElement, referenceDOMElement = this.domElement.firstChild; ///
                this.domElement.insertBefore(domElement, referenceDOMElement);
            }
        },
        {
            key: "append",
            value: function append(element) {
                var domElement = element.domElement, referenceDOMElement = null; ///
                this.domElement.insertBefore(domElement, referenceDOMElement);
            }
        },
        {
            key: "insertBefore",
            value: function insertBefore(siblingElement) {
                var parentDOMNode = siblingElement.domElement.parentNode, referenceDOMElement = siblingElement.domElement; ///
                parentDOMNode.insertBefore(this.domElement, referenceDOMElement);
            }
        },
        {
            key: "insertAfter",
            value: function insertAfter(siblingElement) {
                var parentDOMNode = siblingElement.domElement.parentNode, referenceDOMElement = siblingElement.domElement.nextSibling; ///
                parentDOMNode.insertBefore(this.domElement, referenceDOMElement);
            }
        },
        {
            key: "mount",
            value: function mount(element) {
                this.add(element);
                (0, _element1.mountElement)(element);
            }
        },
        {
            key: "unmount",
            value: function unmount(element) {
                (0, _element1.unmountElement)(element);
                this.remove(element);
            }
        },
        {
            key: "mountBefore",
            value: function mountBefore(siblingElement) {
                this.insertBefore(siblingElement);
                var element = this; ///
                (0, _element1.mountElement)(element);
            }
        },
        {
            key: "mountAfter",
            value: function mountAfter(siblingElement) {
                this.insertBefore(siblingElement);
                var element = this; ///
                (0, _element1.mountElement)(element);
            }
        },
        {
            key: "show",
            value: function show() {
                var displayStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.BLOCK;
                this.display(displayStyle);
            }
        },
        {
            key: "hide",
            value: function hide() {
                this.style(_constants.DISPLAY, _constants.NONE);
            }
        },
        {
            key: "display",
            value: function display(display) {
                this.style(_constants.DISPLAY, display);
            }
        },
        {
            key: "enable",
            value: function enable() {
                this.clearAttribute(_constants.DISABLED);
            }
        },
        {
            key: "disable",
            value: function disable() {
                this.setAttribute(_constants.DISABLED, _constants.DISABLED);
            }
        },
        {
            key: "isEnabled",
            value: function isEnabled() {
                var disabled = this.isDisabled(), enabled = !disabled;
                return enabled;
            }
        },
        {
            key: "isDisabled",
            value: function isDisabled() {
                var disabled = this.hasAttribute(_constants.DISABLED);
                return disabled;
            }
        },
        {
            key: "isDisplayed",
            value: function isDisplayed() {
                var display = this.css(_constants.DISPLAY), displayed = display !== _constants.NONE;
                return displayed;
            }
        },
        {
            key: "isShowing",
            value: function isShowing() {
                var displayed = this.isDisplayed(), showing = displayed; ///
                return showing;
            }
        },
        {
            key: "isHidden",
            value: function isHidden() {
                var displayed = this.isDisplayed(), hidden = !displayed;
                return hidden;
            }
        },
        {
            key: "style",
            value: function style(name) {
                var value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (value !== null) {
                    this.domElement.style[name] = value;
                    return;
                }
                var style = this.domElement.style[name];
                return style;
            }
        },
        {
            key: "html",
            value: function html() {
                var html = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                if (html !== null) {
                    var innerHTML = html; ///
                    this.domElement.innerHTML = innerHTML;
                    return;
                }
                var innerHTML1 = this.domElement.innerHTML;
                html = innerHTML1; ///
                return html;
            }
        },
        {
            key: "css",
            value: function css() {
                var _this = this;
                var css = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                if (css === null) {
                    var computedStyle = getComputedStyle(this.domElement), css1 = {};
                    for(var index = 0; index < computedStyle.length; index++){
                        var firstComputedStyle = _array.first[computedStyle], name = firstComputedStyle, value = computedStyle.getPropertyValue(name); ///
                        css1[name] = value;
                    }
                    return css1;
                }
                if ((typeof css === "undefined" ? "undefined" : _type_of(css)) === _constants.STRING) {
                    var name1 = css; ///
                    var computedStyle1 = getComputedStyle(this.domElement), value1 = computedStyle1.getPropertyValue(name1); ///
                    css = value1; ///
                    return css;
                }
                var names = Object.keys(css); ///
                names.forEach(function(name) {
                    var value = css[name];
                    _this.style(name, value);
                });
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var element = this; ///
                (0, _element1.destroyElement)(element);
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var tagName = Class.tagName, element = elementFromTagName.apply(void 0, [
                    Class,
                    tagName
                ].concat(_to_consumable_array(remainingArguments))), defaultProperties = defaultPropertiesFromClass(Class), ignoredProperties = ignoredPropertiesFromClass(Class);
                element.applyProperties(properties, defaultProperties, ignoredProperties);
                element.initialise && element.initialise(); ///
                return element;
            }
        },
        {
            key: "fromTagName",
            value: function fromTagName(tagName, properties) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var Class = Element, element = elementFromTagName.apply(void 0, [
                    Class,
                    tagName
                ].concat(_to_consumable_array(remainingArguments))), defaultProperties = {}, ignoredProperties = []; ///
                element.applyProperties(properties, defaultProperties, ignoredProperties);
                element.initialise && element.initialise(); ///
                return element;
            }
        }
    ]);
    return Element;
}();
Object.assign(Element.prototype, _jsx.default);
Object.assign(Element.prototype, _key.default);
Object.assign(Element.prototype, _mouse.default);
Object.assign(Element.prototype, _click.default);
Object.assign(Element.prototype, _state.default);
Object.assign(Element.prototype, _event.default);
Object.assign(Element.prototype, _touch.default);
Object.assign(Element.prototype, _scroll.default);
Object.assign(Element.prototype, _resize.default);
Object.assign(Element.prototype, _element.default);
Object.assign(Element.prototype, _fullScreen.default);
Object.assign(Element.prototype, _customEvent.default);
function elementFromTagName(Class, tagName) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        remainingArguments[_key - 2] = arguments[_key];
    }
    var _Function_prototype_bind;
    var selector = null, element = new ((_Function_prototype_bind = Function.prototype.bind).call.apply(_Function_prototype_bind, [
        Class,
        null,
        selector
    ].concat(_to_consumable_array(remainingArguments)))), domElement = (0, _name.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
    (0, _element1.constructElement)(element, domElement);
    return element;
}
function defaultPropertiesFromClass(Class) {
    var defaultProperties = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Class.hasOwnProperty(_constants.DEFAULT_PROPERTIES)) {
        defaultProperties = (0, _object.combine)(defaultProperties, Class[_constants.DEFAULT_PROPERTIES]);
    }
    var superClass = Object.getPrototypeOf(Class); ///
    if (superClass !== null) {
        defaultProperties = defaultPropertiesFromClass(superClass, defaultProperties);
    }
    return defaultProperties;
}
function ignoredPropertiesFromClass(Class) {
    var ignoredProperties = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    if (Class.hasOwnProperty(_constants.IGNORED_PROPERTIES)) {
        ignoredProperties = (0, _array.augment)(ignoredProperties, Class[_constants.IGNORED_PROPERTIES], function(ignoredProperty) {
            if (!ignoredProperties.includes(ignoredProperty)) {
                return true;
            }
        });
    }
    var superClass = Object.getPrototypeOf(Class);
    if (superClass !== null) {
        ignoredProperties = ignoredPropertiesFromClass(superClass, ignoredProperties);
    }
    return ignoredProperties;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgdG91Y2hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RvdWNoXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCByZXNpemVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Jlc2l6ZVwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcbmltcG9ydCBmdWxsU2NyZWVuTWl4aW5zIGZyb20gXCIuL21peGlucy9mdWxsU2NyZWVuXCI7XG5pbXBvcnQgY3VzdG9tRXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2N1c3RvbUV2ZW50XCI7XG5cbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgZmlyc3QsIGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEVsZW1lbnQsIGRlc3Ryb3lFbGVtZW50LCBtb3VudEVsZW1lbnQsIHVubW91bnRFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IE5PTkUsXG4gICAgICAgICBCTE9DSyxcbiAgICAgICAgIFdJRFRILFxuICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgSEVJR0hULFxuICAgICAgICAgRElTUExBWSxcbiAgICAgICAgIERJU0FCTEVELFxuICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgU1ZHX05BTUVTUEFDRV9VUkksXG4gICAgICAgICBERUZBVUxUX1BST1BFUlRJRVMsXG4gICAgICAgICBJR05PUkVEX1BST1BFUlRJRVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID10aGlzLCAgLy8vXG4gICAgICAgICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgIGNvbnN0cnVjdEVsZW1lbnQoZWxlbWVudCwgZG9tRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoV0lEVEgsIHdpZHRoKTtcbiAgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShIRUlHSFQsIGhlaWdodCk7XG4gIH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQWxsQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IEVNUFRZX1NUUklORzsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0KGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIHJlZmVyZW5jZURPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDsgIC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICByZWZlcmVuY2VET01FbGVtZW50ID0gbnVsbDsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZURPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50Lm5leHRTaWJsaW5nOyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQpO1xuICB9XG5cbiAgbW91bnQoZWxlbWVudCkge1xuICAgIHRoaXMuYWRkKGVsZW1lbnQpO1xuXG4gICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgdW5tb3VudChlbGVtZW50KSB7XG4gICAgdW5tb3VudEVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgdGhpcy5pbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgbW91bnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gQkxPQ0spIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKERJU1BMQVksIE5PTkUpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoRElTUExBWSwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoRElTQUJMRUQpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoRElTQUJMRUQsIERJU0FCTEVEKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShESVNBQkxFRCk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLmNzcyhESVNQTEFZKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gTk9ORSk7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gIGlzU2hvd2luZygpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgc2hvd2luZyA9IGRpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgaGlkZGVuID0gIWRpc3BsYXllZDtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdHlsZShuYW1lLCB2YWx1ZSA9IG51bGwpIHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBodG1sKGh0bWwgPSBudWxsKSB7XG4gICAgaWYgKGh0bWwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNzcyhjc3MgPSBudWxsKSB7XG4gICAgaWYgKGNzcyA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZmlyc3RDb21wdXRlZFN0eWxlID0gZmlyc3RbY29tcHV0ZWRTdHlsZV0sXG4gICAgICAgICAgICAgIG5hbWUgPSBmaXJzdENvbXB1dGVkU3R5bGUsICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3NzID09PSBTVFJJTkcpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKGNzcyk7IC8vL1xuXG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgIHRoaXMuc3R5bGUobmFtZSwgdmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBkZXN0cm95RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjdXN0b21FdmVudE1peGlucyk7XG5cbmZ1bmN0aW9uIGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IHNlbGVjdG9yID0gbnVsbCxcbiAgICAgICAgZWxlbWVudCA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChDbGFzcywgbnVsbCwgc2VsZWN0b3IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykpLFxuICAgICAgICBkb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0VfVVJJLCB0YWdOYW1lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBjb25zdHJ1Y3RFbGVtZW50KGVsZW1lbnQsIGRvbUVsZW1lbnQpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoREVGQVVMVF9QUk9QRVJUSUVTKSkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gY29tYmluZShkZWZhdWx0UHJvcGVydGllcywgQ2xhc3NbREVGQVVMVF9QUk9QRVJUSUVTXSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTsgIC8vL1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShJR05PUkVEX1BST1BFUlRJRVMpKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzc1tJR05PUkVEX1BST1BFUlRJRVNdLCAoaWdub3JlZFByb3BlcnR5KSA9PiB7XG4gICAgICBpZiAoIWlnbm9yZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGlnbm9yZWRQcm9wZXJ0eSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJzZWxlY3RvciIsImVsZW1lbnQiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uc3RydWN0RWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJnZXRPZmZzZXQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsIk9mZnNldCIsImdldEJvdW5kcyIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kcyIsIkJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRXaWR0aCIsImluY2x1ZGVCb3JkZXIiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJzZXRXaWR0aCIsInN0eWxlIiwiV0lEVEgiLCJnZXRIZWlnaHQiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzZXRIZWlnaHQiLCJIRUlHSFQiLCJoYXNBdHRyaWJ1dGUiLCJuYW1lIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwidmFsdWUiLCJjbGVhckF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImFkZEF0dHJpYnV0ZSIsImhhc0NsYXNzIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzZXRDbGFzcyIsImFkZENsYXNzIiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmUiLCJ0b2dnbGVDbGFzcyIsInRvZ2dsZSIsInJlbW92ZUFsbENsYXNzZXMiLCJFTVBUWV9TVFJJTkciLCJhZGRUbyIsInBhcmVudEVsZW1lbnQiLCJhcHBlbmRUbyIsImFwcGVuZCIsInByZXBlbmRUbyIsInByZXBlbmQiLCJyZW1vdmVGcm9tIiwiaW5zZXJ0IiwicmVmZXJlbmNlRE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QWZ0ZXIiLCJuZXh0U2libGluZyIsIm1vdW50IiwibW91bnRFbGVtZW50IiwidW5tb3VudCIsInVubW91bnRFbGVtZW50IiwibW91bnRCZWZvcmUiLCJtb3VudEFmdGVyIiwic2hvdyIsImRpc3BsYXlTdHlsZSIsIkJMT0NLIiwiZGlzcGxheSIsImhpZGUiLCJESVNQTEFZIiwiTk9ORSIsImVuYWJsZSIsIkRJU0FCTEVEIiwiZGlzYWJsZSIsImlzRW5hYmxlZCIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImVuYWJsZWQiLCJpc0Rpc3BsYXllZCIsImNzcyIsImRpc3BsYXllZCIsImlzU2hvd2luZyIsInNob3dpbmciLCJpc0hpZGRlbiIsImhpZGRlbiIsImh0bWwiLCJpbm5lckhUTUwiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImluZGV4IiwibGVuZ3RoIiwiZmlyc3RDb21wdXRlZFN0eWxlIiwiZmlyc3QiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiU1RSSU5HIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImRlc3Ryb3kiLCJkZXN0cm95RWxlbWVudCIsImZyb21DbGFzcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInRhZ05hbWUiLCJlbGVtZW50RnJvbVRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyIsImFwcGx5UHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJmcm9tVGFnTmFtZSIsImFzc2lnbiIsInByb3RvdHlwZSIsImpzeE1peGlucyIsImtleU1peGlucyIsIm1vdXNlTWl4aW5zIiwiY2xpY2tNaXhpbnMiLCJzdGF0ZU1peGlucyIsImV2ZW50TWl4aW5zIiwidG91Y2hNaXhpbnMiLCJzY3JvbGxNaXhpbnMiLCJyZXNpemVNaXhpbnMiLCJlbGVtZW50TWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsImN1c3RvbUV2ZW50TWl4aW5zIiwiRnVuY3Rpb24iLCJiaW5kIiwiY2FsbCIsImlzU1ZHVGFnTmFtZSIsImNyZWF0ZUVsZW1lbnROUyIsIlNWR19OQU1FU1BBQ0VfVVJJIiwiY3JlYXRlRWxlbWVudCIsImhhc093blByb3BlcnR5IiwiREVGQVVMVF9QUk9QRVJUSUVTIiwiY29tYmluZSIsInN1cGVyQ2xhc3MiLCJnZXRQcm90b3R5cGVPZiIsIklHTk9SRURfUFJPUEVSVElFUyIsImF1Z21lbnQiLCJpZ25vcmVkUHJvcGVydHkiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFpQ3FCQTs7OzZEQS9CRjs2REFDQTswREFDRzswREFDQTs0REFDRTs0REFDQTs0REFDQTs0REFDQTs0REFDQTs2REFDQzs2REFDQTs4REFDQztpRUFDRztrRUFDQztzQkFFTjtvQkFDSztxQkFDRTt3QkFDZ0Q7eUJBVzVDOzs7Ozs7Ozs7Ozs7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