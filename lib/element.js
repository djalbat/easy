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
                var offset = _offset.default.fromDOMElement(this.domElement);
                return offset;
            }
        },
        {
            key: "getBounds",
            value: function getBounds() {
                var bounds = _bounds.default.fromDOMElement(this.domElement);
                return bounds;
            }
        },
        {
            key: "getWidth",
            value: function getWidth() {
                return this.domElement.offsetWidth;
            } ///
        },
        {
            key: "getHeight",
            value: function getHeight() {
                return this.domElement.offsetHeight;
            } ///
        },
        {
            key: "getInnerWidth",
            value: function getInnerWidth() {
                return this.domElement.clientWidth;
            } ///
        },
        {
            key: "getInnerHeight",
            value: function getInnerHeight() {
                return this.domElement.clientHeight;
            } ///
        },
        {
            key: "setWidth",
            value: function setWidth(width) {
                width = "".concat(width, "px"); ///
                this.style(_constants.WIDTH, width);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgdG91Y2hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RvdWNoXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCByZXNpemVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Jlc2l6ZVwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcbmltcG9ydCBmdWxsU2NyZWVuTWl4aW5zIGZyb20gXCIuL21peGlucy9mdWxsU2NyZWVuXCI7XG5pbXBvcnQgY3VzdG9tRXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2N1c3RvbUV2ZW50XCI7XG5cbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgZmlyc3QsIGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEVsZW1lbnQsIGRlc3Ryb3lFbGVtZW50LCBtb3VudEVsZW1lbnQsIHVubW91bnRFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IE5PTkUsXG4gICAgICAgICBCTE9DSyxcbiAgICAgICAgIFdJRFRILFxuICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgSEVJR0hULFxuICAgICAgICAgRElTUExBWSxcbiAgICAgICAgIERJU0FCTEVELFxuICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgU1ZHX05BTUVTUEFDRV9VUkksXG4gICAgICAgICBERUZBVUxUX1BST1BFUlRJRVMsXG4gICAgICAgICBJR05PUkVEX1BST1BFUlRJRVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID10aGlzLCAgLy8vXG4gICAgICAgICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgIGNvbnN0cnVjdEVsZW1lbnQoZWxlbWVudCwgZG9tRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IG9mZnNldCA9IE9mZnNldC5mcm9tRE9NRWxlbWVudCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZHMgPSBCb3VuZHMuZnJvbURPTUVsZW1lbnQodGhpcy5kb21FbGVtZW50KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aDsgfSAgLy8vXG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodDsgfSAgLy8vXG5cbiAgZ2V0SW5uZXJXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfSAvLy9cblxuICBnZXRJbm5lckhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH0gLy8vXG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFdJRFRILCB3aWR0aCk7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKEhFSUdIVCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVBbGxDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gRU1QVFlfU1RSSU5HOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgcmVmZXJlbmNlRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkOyAgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIHJlZmVyZW5jZURPTUVsZW1lbnQgPSBudWxsOyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7ICAvLy9cblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudCk7XG4gIH1cblxuICBtb3VudChlbGVtZW50KSB7XG4gICAgdGhpcy5hZGQoZWxlbWVudCk7XG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICB1bm1vdW50KGVsZW1lbnQpIHtcbiAgICB1bm1vdW50RWxlbWVudChlbGVtZW50KTtcblxuICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICB9XG5cbiAgbW91bnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBtb3VudEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgdGhpcy5pbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBzaG93KGRpc3BsYXlTdHlsZSA9IEJMT0NLKSB7IHRoaXMuZGlzcGxheShkaXNwbGF5U3R5bGUpOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5zdHlsZShESVNQTEFZLCBOT05FKTsgfVxuXG4gIGRpc3BsYXkoZGlzcGxheSkgeyB0aGlzLnN0eWxlKERJU1BMQVksIGRpc3BsYXkpOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKERJU0FCTEVEKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKERJU0FCTEVELCBESVNBQkxFRCk7IH1cblxuICBpc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBlbmFibGVkID0gIWRpc2FibGVkO1xuXG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNBdHRyaWJ1dGUoRElTQUJMRUQpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG4gIFxuICBpc0Rpc3BsYXllZCgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5jc3MoRElTUExBWSksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09IE5PTkUpO1xuICAgIFxuICAgIHJldHVybiBkaXNwbGF5ZWQ7XG4gIH1cblxuICBpc1Nob3dpbmcoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIHNob3dpbmcgPSBkaXNwbGF5ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzaG93aW5nO1xuICB9XG5cbiAgaXNIaWRkZW4oKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIGhpZGRlbiA9ICFkaXNwbGF5ZWQ7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgc3R5bGUobmFtZSwgdmFsdWUgPSBudWxsKSB7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdO1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgaHRtbChodG1sID0gbnVsbCkge1xuICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjc3MoY3NzID0gbnVsbCkge1xuICAgIGlmIChjc3MgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q29tcHV0ZWRTdHlsZSA9IGZpcnN0W2NvbXB1dGVkU3R5bGVdLFxuICAgICAgICAgICAgICBuYW1lID0gZmlyc3RDb21wdXRlZFN0eWxlLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNzcyA9PT0gU1RSSU5HKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY3NzW25hbWVdO1xuXG4gICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgZGVzdHJveUVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IENsYXNzLFxuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSwgLy8vXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBbXTsgLy8vXG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc3RhdGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHJlc2l6ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY3VzdG9tRXZlbnRNaXhpbnMpO1xuXG5mdW5jdGlvbiBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBzZWxlY3RvciA9IG51bGwsXG4gICAgICAgIGVsZW1lbnQgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoQ2xhc3MsIG51bGwsIHNlbGVjdG9yLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKSxcbiAgICAgICAgZG9tRWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFX1VSSSwgdGFnTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgY29uc3RydWN0RWxlbWVudChlbGVtZW50LCBkb21FbGVtZW50KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KERFRkFVTFRfUFJPUEVSVElFUykpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzW0RFRkFVTFRfUFJPUEVSVElFU10pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7ICAvLy9cblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRQcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgaWdub3JlZFByb3BlcnRpZXMgPSBbXSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoSUdOT1JFRF9QUk9QRVJUSUVTKSkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gYXVnbWVudChpZ25vcmVkUHJvcGVydGllcywgQ2xhc3NbSUdOT1JFRF9QUk9QRVJUSUVTXSwgKGlnbm9yZWRQcm9wZXJ0eSkgPT4ge1xuICAgICAgaWYgKCFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBpZ25vcmVkUHJvcGVydGllcztcbn1cbiJdLCJuYW1lcyI6WyJFbGVtZW50Iiwic2VsZWN0b3IiLCJlbGVtZW50IiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnN0cnVjdEVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZ2V0T2Zmc2V0Iiwib2Zmc2V0IiwiT2Zmc2V0IiwiZnJvbURPTUVsZW1lbnQiLCJnZXRCb3VuZHMiLCJib3VuZHMiLCJCb3VuZHMiLCJnZXRXaWR0aCIsIm9mZnNldFdpZHRoIiwiZ2V0SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0SW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiZ2V0SW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzZXRXaWR0aCIsIndpZHRoIiwic3R5bGUiLCJXSURUSCIsInNldEhlaWdodCIsImhlaWdodCIsIkhFSUdIVCIsImhhc0F0dHJpYnV0ZSIsIm5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsImNsZWFyQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiYWRkQXR0cmlidXRlIiwiaGFzQ2xhc3MiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInNldENsYXNzIiwiYWRkQ2xhc3MiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlIiwicmVtb3ZlQWxsQ2xhc3NlcyIsIkVNUFRZX1NUUklORyIsImFkZFRvIiwicGFyZW50RWxlbWVudCIsImFwcGVuZFRvIiwiYXBwZW5kIiwicHJlcGVuZFRvIiwicHJlcGVuZCIsInJlbW92ZUZyb20iLCJpbnNlcnQiLCJyZWZlcmVuY2VET01FbGVtZW50IiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsInNpYmxpbmdFbGVtZW50IiwicGFyZW50RE9NTm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRBZnRlciIsIm5leHRTaWJsaW5nIiwibW91bnQiLCJtb3VudEVsZW1lbnQiLCJ1bm1vdW50IiwidW5tb3VudEVsZW1lbnQiLCJtb3VudEJlZm9yZSIsIm1vdW50QWZ0ZXIiLCJzaG93IiwiZGlzcGxheVN0eWxlIiwiQkxPQ0siLCJkaXNwbGF5IiwiaGlkZSIsIkRJU1BMQVkiLCJOT05FIiwiZW5hYmxlIiwiRElTQUJMRUQiLCJkaXNhYmxlIiwiaXNFbmFibGVkIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwiZW5hYmxlZCIsImlzRGlzcGxheWVkIiwiY3NzIiwiZGlzcGxheWVkIiwiaXNTaG93aW5nIiwic2hvd2luZyIsImlzSGlkZGVuIiwiaGlkZGVuIiwiaHRtbCIsImlubmVySFRNTCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJmaXJzdENvbXB1dGVkU3R5bGUiLCJmaXJzdCIsImdldFByb3BlcnR5VmFsdWUiLCJTVFJJTkciLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiZGVzdHJveSIsImRlc3Ryb3lFbGVtZW50IiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidGFnTmFtZSIsImVsZW1lbnRGcm9tVGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiYXBwbHlQcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsImZyb21UYWdOYW1lIiwiYXNzaWduIiwicHJvdG90eXBlIiwianN4TWl4aW5zIiwia2V5TWl4aW5zIiwibW91c2VNaXhpbnMiLCJjbGlja01peGlucyIsInN0YXRlTWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJ0b3VjaE1peGlucyIsInNjcm9sbE1peGlucyIsInJlc2l6ZU1peGlucyIsImVsZW1lbnRNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwiY3VzdG9tRXZlbnRNaXhpbnMiLCJGdW5jdGlvbiIsImJpbmQiLCJjYWxsIiwiaXNTVkdUYWdOYW1lIiwiY3JlYXRlRWxlbWVudE5TIiwiU1ZHX05BTUVTUEFDRV9VUkkiLCJjcmVhdGVFbGVtZW50IiwiaGFzT3duUHJvcGVydHkiLCJERUZBVUxUX1BST1BFUlRJRVMiLCJjb21iaW5lIiwic3VwZXJDbGFzcyIsImdldFByb3RvdHlwZU9mIiwiSUdOT1JFRF9QUk9QRVJUSUVTIiwiYXVnbWVudCIsImlnbm9yZWRQcm9wZXJ0eSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlDcUJBOzs7NkRBL0JGOzZEQUNBOzBEQUNHOzBEQUNBOzREQUNFOzREQUNBOzREQUNBOzREQUNBOzREQUNBOzZEQUNDOzZEQUNBOzhEQUNDO2lFQUNHO2tFQUNDO3NCQUVOO29CQUNLO3FCQUNFO3dCQUNnRDt5QkFXNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixJQUFBLEFBQU1BLHdCQUFOO2FBQU1BLFFBQ1BDLFFBQVE7Z0NBREREO1FBRWpCLElBQUlDLGFBQWEsTUFBTTtZQUNyQixJQUFNQyxVQUFTLElBQUksRUFDYkMsYUFBYUMsU0FBU0MsYUFBYSxDQUFDSjtZQUUxQ0ssSUFBQUEsMEJBQWdCLEVBQUNKLFNBQVNDO1FBQzVCOztrQkFQaUJIOztZQVVuQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixVQUFVO1lBQ3hCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVNDLGVBQU0sQ0FBQ0MsY0FBYyxDQUFDLElBQUksQ0FBQ1IsVUFBVTtnQkFFcEQsT0FBT007WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtn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