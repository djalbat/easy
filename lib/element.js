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
                this.insertAfter(siblingElement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgdG91Y2hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RvdWNoXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCByZXNpemVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Jlc2l6ZVwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcbmltcG9ydCBmdWxsU2NyZWVuTWl4aW5zIGZyb20gXCIuL21peGlucy9mdWxsU2NyZWVuXCI7XG5pbXBvcnQgY3VzdG9tRXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2N1c3RvbUV2ZW50XCI7XG5cbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgZmlyc3QsIGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEVsZW1lbnQsIGRlc3Ryb3lFbGVtZW50LCBtb3VudEVsZW1lbnQsIHVubW91bnRFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IE5PTkUsXG4gICAgICAgICBCTE9DSyxcbiAgICAgICAgIFdJRFRILFxuICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgSEVJR0hULFxuICAgICAgICAgRElTUExBWSxcbiAgICAgICAgIERJU0FCTEVELFxuICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgU1ZHX05BTUVTUEFDRV9VUkksXG4gICAgICAgICBERUZBVUxUX1BST1BFUlRJRVMsXG4gICAgICAgICBJR05PUkVEX1BST1BFUlRJRVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID10aGlzLCAgLy8vXG4gICAgICAgICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgIGNvbnN0cnVjdEVsZW1lbnQoZWxlbWVudCwgZG9tRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoV0lEVEgsIHdpZHRoKTtcbiAgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShIRUlHSFQsIGhlaWdodCk7XG4gIH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQWxsQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IEVNUFRZX1NUUklORzsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0KGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIHJlZmVyZW5jZURPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDsgIC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICByZWZlcmVuY2VET01FbGVtZW50ID0gbnVsbDsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZURPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50Lm5leHRTaWJsaW5nOyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQpO1xuICB9XG5cbiAgbW91bnQoZWxlbWVudCkge1xuICAgIHRoaXMuYWRkKGVsZW1lbnQpO1xuXG4gICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgdW5tb3VudChlbGVtZW50KSB7XG4gICAgdW5tb3VudEVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgdGhpcy5pbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgbW91bnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIHRoaXMuaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBCTE9DSykgeyB0aGlzLmRpc3BsYXkoZGlzcGxheVN0eWxlKTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuc3R5bGUoRElTUExBWSwgTk9ORSk7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShESVNQTEFZLCBkaXNwbGF5KTsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShESVNBQkxFRCk7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZShESVNBQkxFRCwgRElTQUJMRUQpOyB9XG5cbiAgaXNFbmFibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgZW5hYmxlZCA9ICFkaXNhYmxlZDtcblxuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQXR0cmlidXRlKERJU0FCTEVEKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuICBcbiAgaXNEaXNwbGF5ZWQoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMuY3NzKERJU1BMQVkpLFxuICAgICAgICAgIGRpc3BsYXllZCA9IChkaXNwbGF5ICE9PSBOT05FKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlID0gbnVsbCkge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIGh0bWwoaHRtbCA9IG51bGwpIHtcbiAgICBpZiAoaHRtbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY3NzKGNzcyA9IG51bGwpIHtcbiAgICBpZiAoY3NzID09PSBudWxsKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBmaXJzdENvbXB1dGVkU3R5bGUgPSBmaXJzdFtjb21wdXRlZFN0eWxlXSxcbiAgICAgICAgICAgICAgbmFtZSA9IGZpcnN0Q29tcHV0ZWRTdHlsZSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjc3MgPT09IFNUUklORykge1xuICAgICAgbGV0IG5hbWUgPSBjc3M7IC8vL1xuXG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICBjc3MgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGRlc3Ryb3lFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB0YWdOYW1lIH0gPSBDbGFzcyxcbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpLFxuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpO1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuaW5pdGlhbGlzZSAmJiBlbGVtZW50LmluaXRpYWxpc2UoKTsgLy8vXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBDbGFzcyA9IEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30sIC8vL1xuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107IC8vL1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuaW5pdGlhbGlzZSAmJiBlbGVtZW50LmluaXRpYWxpc2UoKTsgLy8vXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBqc3hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHN0YXRlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHNjcm9sbE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZWxlbWVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBmdWxsU2NyZWVuTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGN1c3RvbUV2ZW50TWl4aW5zKTtcblxuZnVuY3Rpb24gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBudWxsLFxuICAgICAgICBlbGVtZW50ID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCBudWxsLCBzZWxlY3RvciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSksXG4gICAgICAgIGRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIGNvbnN0cnVjdEVsZW1lbnQoZWxlbWVudCwgZG9tRWxlbWVudCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShERUZBVUxUX1BST1BFUlRJRVMpKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBjb21iaW5lKGRlZmF1bHRQcm9wZXJ0aWVzLCBDbGFzc1tERUZBVUxUX1BST1BFUlRJRVNdKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpOyAgLy8vXG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KElHTk9SRURfUFJPUEVSVElFUykpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllcyA9IGF1Z21lbnQoaWdub3JlZFByb3BlcnRpZXMsIENsYXNzW0lHTk9SRURfUFJPUEVSVElFU10sIChpZ25vcmVkUHJvcGVydHkpID0+IHtcbiAgICAgIGlmICghaWdub3JlZFByb3BlcnRpZXMuaW5jbHVkZXMoaWdub3JlZFByb3BlcnR5KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBpZ25vcmVkUHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gaWdub3JlZFByb3BlcnRpZXM7XG59XG4iXSwibmFtZXMiOlsiRWxlbWVudCIsInNlbGVjdG9yIiwiZWxlbWVudCIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zdHJ1Y3RFbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImdldE9mZnNldCIsInRvcCIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0IiwiT2Zmc2V0IiwiZ2V0Qm91bmRzIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm91bmRzIiwiQm91bmRzIiwiZnJvbUJvdW5kaW5nQ2xpZW50UmVjdCIsImdldFdpZHRoIiwiaW5jbHVkZUJvcmRlciIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInNldFdpZHRoIiwic3R5bGUiLCJXSURUSCIsImdldEhlaWdodCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsInNldEhlaWdodCIsIkhFSUdIVCIsImhhc0F0dHJpYnV0ZSIsIm5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsImNsZWFyQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiYWRkQXR0cmlidXRlIiwiaGFzQ2xhc3MiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInNldENsYXNzIiwiYWRkQ2xhc3MiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlIiwicmVtb3ZlQWxsQ2xhc3NlcyIsIkVNUFRZX1NUUklORyIsImFkZFRvIiwicGFyZW50RWxlbWVudCIsImFwcGVuZFRvIiwiYXBwZW5kIiwicHJlcGVuZFRvIiwicHJlcGVuZCIsInJlbW92ZUZyb20iLCJpbnNlcnQiLCJyZWZlcmVuY2VET01FbGVtZW50IiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsInNpYmxpbmdFbGVtZW50IiwicGFyZW50RE9NTm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRBZnRlciIsIm5leHRTaWJsaW5nIiwibW91bnQiLCJtb3VudEVsZW1lbnQiLCJ1bm1vdW50IiwidW5tb3VudEVsZW1lbnQiLCJtb3VudEJlZm9yZSIsIm1vdW50QWZ0ZXIiLCJzaG93IiwiZGlzcGxheVN0eWxlIiwiQkxPQ0siLCJkaXNwbGF5IiwiaGlkZSIsIkRJU1BMQVkiLCJOT05FIiwiZW5hYmxlIiwiRElTQUJMRUQiLCJkaXNhYmxlIiwiaXNFbmFibGVkIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwiZW5hYmxlZCIsImlzRGlzcGxheWVkIiwiY3NzIiwiZGlzcGxheWVkIiwiaXNTaG93aW5nIiwic2hvd2luZyIsImlzSGlkZGVuIiwiaGlkZGVuIiwiaHRtbCIsImlubmVySFRNTCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJmaXJzdENvbXB1dGVkU3R5bGUiLCJmaXJzdCIsImdldFByb3BlcnR5VmFsdWUiLCJTVFJJTkciLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiZGVzdHJveSIsImRlc3Ryb3lFbGVtZW50IiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidGFnTmFtZSIsImVsZW1lbnRGcm9tVGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiYXBwbHlQcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsImZyb21UYWdOYW1lIiwiYXNzaWduIiwicHJvdG90eXBlIiwianN4TWl4aW5zIiwia2V5TWl4aW5zIiwibW91c2VNaXhpbnMiLCJjbGlja01peGlucyIsInN0YXRlTWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJ0b3VjaE1peGlucyIsInNjcm9sbE1peGlucyIsInJlc2l6ZU1peGlucyIsImVsZW1lbnRNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwiY3VzdG9tRXZlbnRNaXhpbnMiLCJGdW5jdGlvbiIsImJpbmQiLCJjYWxsIiwiaXNTVkdUYWdOYW1lIiwiY3JlYXRlRWxlbWVudE5TIiwiU1ZHX05BTUVTUEFDRV9VUkkiLCJjcmVhdGVFbGVtZW50IiwiaGFzT3duUHJvcGVydHkiLCJERUZBVUxUX1BST1BFUlRJRVMiLCJjb21iaW5lIiwic3VwZXJDbGFzcyIsImdldFByb3RvdHlwZU9mIiwiSUdOT1JFRF9QUk9QRVJUSUVTIiwiYXVnbWVudCIsImlnbm9yZWRQcm9wZXJ0eSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlDcUJBOzs7NkRBL0JGOzZEQUNBOzBEQUNHOzBEQUNBOzREQUNFOzREQUNBOzREQUNBOzREQUNBOzREQUNBOzZEQUNDOzZEQUNBOzhEQUNDO2lFQUNHO2tFQUNDO3NCQUVOO29CQUNLO3FCQUNFO3dCQUNnRDt5QkFXNUM7Ozs7Ozs7Ozs7Ozs7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