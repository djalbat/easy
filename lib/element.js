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
var _focus = /*#__PURE__*/ _interop_require_default(require("./mixins/focus"));
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
        if (selector) {
            this.domElement = document.querySelector(selector);
            this.domElement.__element__ = this; ///
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
            key: "hasClass",
            value: function hasClass(className) {
                return this.domElement.classList.contains(className);
            }
        },
        {
            key: "clearClasses",
            value: function clearClasses() {
                this.domElement.className = _constants.EMPTY_STRING;
            }
        },
        {
            key: "prependTo",
            value: function prependTo(parentElement) {
                parentElement.prepend(this);
            }
        },
        {
            key: "appendTo",
            value: function appendTo(parentElement) {
                parentElement.append(this);
            }
        },
        {
            key: "addTo",
            value: function addTo(parentElement) {
                parentElement.add(this);
            }
        },
        {
            key: "removeFrom",
            value: function removeFrom(parentElement) {
                parentElement.remove(this);
            }
        },
        {
            key: "insertBefore",
            value: function insertBefore(siblingElement) {
                var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement; ///
                parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
            }
        },
        {
            key: "insertAfter",
            value: function insertAfter(siblingElement) {
                var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement; ///
                parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
            }
        },
        {
            key: "prepend",
            value: function prepend(element) {
                var domElement = element.domElement, firstChildDOMElement = this.domElement.firstChild; ///
                this.domElement.insertBefore(domElement, firstChildDOMElement);
            }
        },
        {
            key: "append",
            value: function append(element) {
                var domElement = element.domElement;
                this.domElement.insertBefore(domElement, null); ///
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
                    var domElement = element.domElement;
                    this.domElement.removeChild(domElement);
                } else {
                    this.domElement.remove();
                }
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
Object.assign(Element.prototype, _focus.default);
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
    ].concat(_to_consumable_array(remainingArguments))));
    element.domElement = (0, _name.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
    element.domElement.__element__ = element; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgZm9jdXNNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2ZvY3VzXCI7XG5pbXBvcnQgdG91Y2hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RvdWNoXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCByZXNpemVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Jlc2l6ZVwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcbmltcG9ydCBmdWxsc2NyZWVuTWl4aW5zIGZyb20gXCIuL21peGlucy9mdWxsU2NyZWVuXCI7XG5pbXBvcnQgY3VzdG9tRXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2N1c3RvbUV2ZW50XCI7XG5cbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgZmlyc3QsIGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG1vdW50RWxlbWVudCwgdW5tb3VudEVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgTk9ORSxcbiAgICAgICAgIEJMT0NLLFxuICAgICAgICAgV0lEVEgsXG4gICAgICAgICBTVFJJTkcsXG4gICAgICAgICBIRUlHSFQsXG4gICAgICAgICBESVNQTEFZLFxuICAgICAgICAgRElTQUJMRUQsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBTVkdfTkFNRVNQQUNFX1VSSSxcbiAgICAgICAgIERFRkFVTFRfUFJPUEVSVElFUyxcbiAgICAgICAgIElHTk9SRURfUFJPUEVSVElFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgICB9XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShXSURUSCwgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKEhFSUdIVCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDsgIC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGluc2VydChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VudEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBtb3VudChlbGVtZW50KSB7XG4gICAgdGhpcy5hZGQoZWxlbWVudCk7XG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICB1bm1vdW50KGVsZW1lbnQpIHtcbiAgICB1bm1vdW50RWxlbWVudChlbGVtZW50KTtcblxuICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBCTE9DSykgeyB0aGlzLmRpc3BsYXkoZGlzcGxheVN0eWxlKTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuc3R5bGUoRElTUExBWSwgTk9ORSk7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShESVNQTEFZLCBkaXNwbGF5KTsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShESVNBQkxFRCk7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZShESVNBQkxFRCwgRElTQUJMRUQpOyB9XG5cbiAgaXNFbmFibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgZW5hYmxlZCA9ICFkaXNhYmxlZDtcblxuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQXR0cmlidXRlKERJU0FCTEVEKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuICBcbiAgaXNEaXNwbGF5ZWQoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMuY3NzKERJU1BMQVkpLFxuICAgICAgICAgIGRpc3BsYXllZCA9IChkaXNwbGF5ICE9PSBOT05FKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlID0gbnVsbCkge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIGh0bWwoaHRtbCA9IG51bGwpIHtcbiAgICBpZiAoaHRtbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY3NzKGNzcyA9IG51bGwpIHtcbiAgICBpZiAoY3NzID09PSBudWxsKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBmaXJzdENvbXB1dGVkU3R5bGUgPSBmaXJzdFtjb21wdXRlZFN0eWxlXSxcbiAgICAgICAgICAgICAgbmFtZSA9IGZpcnN0Q29tcHV0ZWRTdHlsZSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjc3MgPT09IFNUUklORykge1xuICAgICAgbGV0IG5hbWUgPSBjc3M7IC8vL1xuXG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICBjc3MgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBmb2N1c01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZnVsbHNjcmVlbk1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjdXN0b21FdmVudE1peGlucyk7XG5cbmZ1bmN0aW9uIGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IHNlbGVjdG9yID0gbnVsbCxcbiAgICAgICAgZWxlbWVudCA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChDbGFzcywgbnVsbCwgc2VsZWN0b3IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykpO1xuXG4gIGVsZW1lbnQuZG9tRWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0VfVVJJLCB0YWdOYW1lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIGVsZW1lbnQuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IGVsZW1lbnQ7IC8vL1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoREVGQVVMVF9QUk9QRVJUSUVTKSkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gY29tYmluZShkZWZhdWx0UHJvcGVydGllcywgQ2xhc3NbREVGQVVMVF9QUk9QRVJUSUVTXSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTsgIC8vL1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShJR05PUkVEX1BST1BFUlRJRVMpKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzc1tJR05PUkVEX1BST1BFUlRJRVNdLCAoaWdub3JlZFByb3BlcnR5KSA9PiB7XG4gICAgICBpZiAoIWlnbm9yZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGlnbm9yZWRQcm9wZXJ0eSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfX2VsZW1lbnRfXyIsImdldERPTUVsZW1lbnQiLCJnZXRPZmZzZXQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsIk9mZnNldCIsImdldEJvdW5kcyIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kcyIsIkJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRXaWR0aCIsImluY2x1ZGVCb3JkZXIiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJzZXRXaWR0aCIsInN0eWxlIiwiV0lEVEgiLCJnZXRIZWlnaHQiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzZXRIZWlnaHQiLCJIRUlHSFQiLCJoYXNBdHRyaWJ1dGUiLCJuYW1lIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwidmFsdWUiLCJjbGVhckF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImFkZEF0dHJpYnV0ZSIsInNldENsYXNzIiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlIiwiaGFzQ2xhc3MiLCJjb250YWlucyIsImNsZWFyQ2xhc3NlcyIsIkVNUFRZX1NUUklORyIsInByZXBlbmRUbyIsInBhcmVudEVsZW1lbnQiLCJwcmVwZW5kIiwiYXBwZW5kVG8iLCJhcHBlbmQiLCJhZGRUbyIsInJlbW92ZUZyb20iLCJpbnNlcnRCZWZvcmUiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRBZnRlciIsIm5leHRTaWJsaW5nIiwiZWxlbWVudCIsImZpcnN0Q2hpbGRET01FbGVtZW50IiwiZmlyc3RDaGlsZCIsImluc2VydCIsInJlbW92ZUNoaWxkIiwibW91bnRCZWZvcmUiLCJtb3VudEVsZW1lbnQiLCJtb3VudEFmdGVyIiwibW91bnQiLCJ1bm1vdW50IiwidW5tb3VudEVsZW1lbnQiLCJzaG93IiwiZGlzcGxheVN0eWxlIiwiQkxPQ0siLCJkaXNwbGF5IiwiaGlkZSIsIkRJU1BMQVkiLCJOT05FIiwiZW5hYmxlIiwiRElTQUJMRUQiLCJkaXNhYmxlIiwiaXNFbmFibGVkIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwiZW5hYmxlZCIsImlzRGlzcGxheWVkIiwiY3NzIiwiZGlzcGxheWVkIiwiaXNTaG93aW5nIiwic2hvd2luZyIsImlzSGlkZGVuIiwiaGlkZGVuIiwiaHRtbCIsImlubmVySFRNTCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJmaXJzdENvbXB1dGVkU3R5bGUiLCJmaXJzdCIsImdldFByb3BlcnR5VmFsdWUiLCJTVFJJTkciLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidGFnTmFtZSIsImVsZW1lbnRGcm9tVGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiYXBwbHlQcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsImZyb21UYWdOYW1lIiwiYXNzaWduIiwicHJvdG90eXBlIiwianN4TWl4aW5zIiwia2V5TWl4aW5zIiwibW91c2VNaXhpbnMiLCJjbGlja01peGlucyIsInN0YXRlTWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJmb2N1c01peGlucyIsInRvdWNoTWl4aW5zIiwic2Nyb2xsTWl4aW5zIiwicmVzaXplTWl4aW5zIiwiZWxlbWVudE1peGlucyIsImZ1bGxzY3JlZW5NaXhpbnMiLCJjdXN0b21FdmVudE1peGlucyIsIkZ1bmN0aW9uIiwiYmluZCIsImNhbGwiLCJpc1NWR1RhZ05hbWUiLCJjcmVhdGVFbGVtZW50TlMiLCJTVkdfTkFNRVNQQUNFX1VSSSIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsIkRFRkFVTFRfUFJPUEVSVElFUyIsImNvbWJpbmUiLCJzdXBlckNsYXNzIiwiZ2V0UHJvdG90eXBlT2YiLCJJR05PUkVEX1BST1BFUlRJRVMiLCJhdWdtZW50IiwiaWdub3JlZFByb3BlcnR5IiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBa0NxQkE7Ozs2REFoQ0Y7NkRBQ0E7MERBQ0c7MERBQ0E7NERBQ0U7NERBQ0E7NERBQ0E7NERBQ0E7NERBQ0E7NERBQ0E7NkRBQ0M7NkRBQ0E7OERBQ0M7aUVBQ0c7a0VBQ0M7c0JBRU47b0JBQ0s7cUJBQ0U7d0JBQ2M7eUJBV1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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