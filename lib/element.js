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
            key: "destroy",
            value: function destroy() {
                var element = this; ///
                (0, _element1.destroyElement)(element);
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgdG91Y2hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RvdWNoXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCByZXNpemVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Jlc2l6ZVwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcbmltcG9ydCBmdWxsU2NyZWVuTWl4aW5zIGZyb20gXCIuL21peGlucy9mdWxsU2NyZWVuXCI7XG5pbXBvcnQgY3VzdG9tRXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2N1c3RvbUV2ZW50XCI7XG5cbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgZmlyc3QsIGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEVsZW1lbnQsIGRlc3Ryb3lFbGVtZW50LCBtb3VudEVsZW1lbnQsIHVubW91bnRFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IE5PTkUsXG4gICAgICAgICBCTE9DSyxcbiAgICAgICAgIFdJRFRILFxuICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgSEVJR0hULFxuICAgICAgICAgRElTUExBWSxcbiAgICAgICAgIERJU0FCTEVELFxuICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgU1ZHX05BTUVTUEFDRV9VUkksXG4gICAgICAgICBERUZBVUxUX1BST1BFUlRJRVMsXG4gICAgICAgICBJR05PUkVEX1BST1BFUlRJRVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID10aGlzLCAgLy8vXG4gICAgICAgICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgIGNvbnN0cnVjdEVsZW1lbnQoZWxlbWVudCwgZG9tRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBkZXN0cm95RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHdpZHRoID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFdJRFRILCB3aWR0aCk7XG4gIH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoSEVJR0hULCBoZWlnaHQpO1xuICB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUFsbENsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICByZWZlcmVuY2VET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgcmVmZXJlbmNlRE9NRWxlbWVudCA9IG51bGw7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZURPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5uZXh0U2libGluZzsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KGVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZChlbGVtZW50KTtcblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHVubW91bnQoZWxlbWVudCkge1xuICAgIHVubW91bnRFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gIH1cblxuICBtb3VudEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBzaG93KGRpc3BsYXlTdHlsZSA9IEJMT0NLKSB7IHRoaXMuZGlzcGxheShkaXNwbGF5U3R5bGUpOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5zdHlsZShESVNQTEFZLCBOT05FKTsgfVxuXG4gIGRpc3BsYXkoZGlzcGxheSkgeyB0aGlzLnN0eWxlKERJU1BMQVksIGRpc3BsYXkpOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKERJU0FCTEVEKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKERJU0FCTEVELCBESVNBQkxFRCk7IH1cblxuICBpc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBlbmFibGVkID0gIWRpc2FibGVkO1xuXG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNBdHRyaWJ1dGUoRElTQUJMRUQpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG4gIFxuICBpc0Rpc3BsYXllZCgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5jc3MoRElTUExBWSksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09IE5PTkUpO1xuICAgIFxuICAgIHJldHVybiBkaXNwbGF5ZWQ7XG4gIH1cblxuICBpc1Nob3dpbmcoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIHNob3dpbmcgPSBkaXNwbGF5ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzaG93aW5nO1xuICB9XG5cbiAgaXNIaWRkZW4oKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIGhpZGRlbiA9ICFkaXNwbGF5ZWQ7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgc3R5bGUobmFtZSwgdmFsdWUgPSBudWxsKSB7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdO1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgaHRtbChodG1sID0gbnVsbCkge1xuICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjc3MoY3NzID0gbnVsbCkge1xuICAgIGlmIChjc3MgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q29tcHV0ZWRTdHlsZSA9IGZpcnN0W2NvbXB1dGVkU3R5bGVdLFxuICAgICAgICAgICAgICBuYW1lID0gZmlyc3RDb21wdXRlZFN0eWxlLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNzcyA9PT0gU1RSSU5HKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY3NzW25hbWVdO1xuXG4gICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB0YWdOYW1lIH0gPSBDbGFzcyxcbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpLFxuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpO1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuaW5pdGlhbGlzZSAmJiBlbGVtZW50LmluaXRpYWxpc2UoKTsgLy8vXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBDbGFzcyA9IEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30sIC8vL1xuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107IC8vL1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuaW5pdGlhbGlzZSAmJiBlbGVtZW50LmluaXRpYWxpc2UoKTsgLy8vXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBqc3hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHN0YXRlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHNjcm9sbE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZWxlbWVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBmdWxsU2NyZWVuTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGN1c3RvbUV2ZW50TWl4aW5zKTtcblxuZnVuY3Rpb24gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBudWxsLFxuICAgICAgICBlbGVtZW50ID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCBudWxsLCBzZWxlY3RvciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSksXG4gICAgICAgIGRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIGNvbnN0cnVjdEVsZW1lbnQoZWxlbWVudCwgZG9tRWxlbWVudCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShERUZBVUxUX1BST1BFUlRJRVMpKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBjb21iaW5lKGRlZmF1bHRQcm9wZXJ0aWVzLCBDbGFzc1tERUZBVUxUX1BST1BFUlRJRVNdKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpOyAgLy8vXG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KElHTk9SRURfUFJPUEVSVElFUykpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllcyA9IGF1Z21lbnQoaWdub3JlZFByb3BlcnRpZXMsIENsYXNzW0lHTk9SRURfUFJPUEVSVElFU10sIChpZ25vcmVkUHJvcGVydHkpID0+IHtcbiAgICAgIGlmICghaWdub3JlZFByb3BlcnRpZXMuaW5jbHVkZXMoaWdub3JlZFByb3BlcnR5KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBpZ25vcmVkUHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gaWdub3JlZFByb3BlcnRpZXM7XG59XG4iXSwibmFtZXMiOlsiRWxlbWVudCIsInNlbGVjdG9yIiwiZWxlbWVudCIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zdHJ1Y3RFbGVtZW50IiwiZGVzdHJveSIsImRlc3Ryb3lFbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImdldE9mZnNldCIsInRvcCIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0IiwiT2Zmc2V0IiwiZ2V0Qm91bmRzIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm91bmRzIiwiQm91bmRzIiwiZnJvbUJvdW5kaW5nQ2xpZW50UmVjdCIsImdldFdpZHRoIiwiaW5jbHVkZUJvcmRlciIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInNldFdpZHRoIiwic3R5bGUiLCJXSURUSCIsImdldEhlaWdodCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsInNldEhlaWdodCIsIkhFSUdIVCIsImhhc0F0dHJpYnV0ZSIsIm5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsImNsZWFyQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiYWRkQXR0cmlidXRlIiwiaGFzQ2xhc3MiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInNldENsYXNzIiwiYWRkQ2xhc3MiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlIiwicmVtb3ZlQWxsQ2xhc3NlcyIsIkVNUFRZX1NUUklORyIsImFkZFRvIiwicGFyZW50RWxlbWVudCIsImFwcGVuZFRvIiwiYXBwZW5kIiwicHJlcGVuZFRvIiwicHJlcGVuZCIsInJlbW92ZUZyb20iLCJpbnNlcnQiLCJyZWZlcmVuY2VET01FbGVtZW50IiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsInNpYmxpbmdFbGVtZW50IiwicGFyZW50RE9NTm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRBZnRlciIsIm5leHRTaWJsaW5nIiwibW91bnQiLCJtb3VudEVsZW1lbnQiLCJ1bm1vdW50IiwidW5tb3VudEVsZW1lbnQiLCJtb3VudEJlZm9yZSIsIm1vdW50QWZ0ZXIiLCJzaG93IiwiZGlzcGxheVN0eWxlIiwiQkxPQ0siLCJkaXNwbGF5IiwiaGlkZSIsIkRJU1BMQVkiLCJOT05FIiwiZW5hYmxlIiwiRElTQUJMRUQiLCJkaXNhYmxlIiwiaXNFbmFibGVkIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwiZW5hYmxlZCIsImlzRGlzcGxheWVkIiwiY3NzIiwiZGlzcGxheWVkIiwiaXNTaG93aW5nIiwic2hvd2luZyIsImlzSGlkZGVuIiwiaGlkZGVuIiwiaHRtbCIsImlubmVySFRNTCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJmaXJzdENvbXB1dGVkU3R5bGUiLCJmaXJzdCIsImdldFByb3BlcnR5VmFsdWUiLCJTVFJJTkciLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidGFnTmFtZSIsImVsZW1lbnRGcm9tVGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiYXBwbHlQcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsImZyb21UYWdOYW1lIiwiYXNzaWduIiwicHJvdG90eXBlIiwianN4TWl4aW5zIiwia2V5TWl4aW5zIiwibW91c2VNaXhpbnMiLCJjbGlja01peGlucyIsInN0YXRlTWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJ0b3VjaE1peGlucyIsInNjcm9sbE1peGlucyIsInJlc2l6ZU1peGlucyIsImVsZW1lbnRNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwiY3VzdG9tRXZlbnRNaXhpbnMiLCJGdW5jdGlvbiIsImJpbmQiLCJjYWxsIiwiaXNTVkdUYWdOYW1lIiwiY3JlYXRlRWxlbWVudE5TIiwiU1ZHX05BTUVTUEFDRV9VUkkiLCJjcmVhdGVFbGVtZW50IiwiaGFzT3duUHJvcGVydHkiLCJERUZBVUxUX1BST1BFUlRJRVMiLCJjb21iaW5lIiwic3VwZXJDbGFzcyIsImdldFByb3RvdHlwZU9mIiwiSUdOT1JFRF9QUk9QRVJUSUVTIiwiYXVnbWVudCIsImlnbm9yZWRQcm9wZXJ0eSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlDcUJBOzs7NkRBL0JGOzZEQUNBOzBEQUNHOzBEQUNBOzREQUNFOzREQUNBOzREQUNBOzREQUNBOzREQUNBOzZEQUNDOzZEQUNBOzhEQUNDO2lFQUNHO2tFQUNDO3NCQUVOO29CQUNLO3FCQUNFO3dCQUNnRDt5QkFXNUM7Ozs7Ozs7Ozs7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