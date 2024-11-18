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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgdG91Y2hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RvdWNoXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCByZXNpemVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Jlc2l6ZVwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcbmltcG9ydCBmdWxsU2NyZWVuTWl4aW5zIGZyb20gXCIuL21peGlucy9mdWxsU2NyZWVuXCI7XG5pbXBvcnQgY3VzdG9tRXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2N1c3RvbUV2ZW50XCI7XG5cbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgZmlyc3QsIGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG1vdW50RWxlbWVudCwgdW5tb3VudEVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgTk9ORSxcbiAgICAgICAgIEJMT0NLLFxuICAgICAgICAgV0lEVEgsXG4gICAgICAgICBTVFJJTkcsXG4gICAgICAgICBIRUlHSFQsXG4gICAgICAgICBESVNQTEFZLFxuICAgICAgICAgRElTQUJMRUQsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBTVkdfTkFNRVNQQUNFX1VSSSxcbiAgICAgICAgIERFRkFVTFRfUFJPUEVSVElFUyxcbiAgICAgICAgIElHTk9SRURfUFJPUEVSVElFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgICB9XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShXSURUSCwgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKEhFSUdIVCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVBbGxDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gRU1QVFlfU1RSSU5HOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLCAvLy9cbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLCAvLy9cbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBpbnNlcnQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgbW91bnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBtb3VudEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgdGhpcy5pbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgbW91bnQoZWxlbWVudCkge1xuICAgIHRoaXMuYWRkKGVsZW1lbnQpO1xuXG4gICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgdW5tb3VudChlbGVtZW50KSB7XG4gICAgdW5tb3VudEVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gQkxPQ0spIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKERJU1BMQVksIE5PTkUpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoRElTUExBWSwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoRElTQUJMRUQpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoRElTQUJMRUQsIERJU0FCTEVEKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShESVNBQkxFRCk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLmNzcyhESVNQTEFZKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gTk9ORSk7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gIGlzU2hvd2luZygpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgc2hvd2luZyA9IGRpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgaGlkZGVuID0gIWRpc3BsYXllZDtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdHlsZShuYW1lLCB2YWx1ZSA9IG51bGwpIHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBodG1sKGh0bWwgPSBudWxsKSB7XG4gICAgaWYgKGh0bWwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNzcyhjc3MgPSBudWxsKSB7XG4gICAgaWYgKGNzcyA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZmlyc3RDb21wdXRlZFN0eWxlID0gZmlyc3RbY29tcHV0ZWRTdHlsZV0sXG4gICAgICAgICAgICAgIG5hbWUgPSBmaXJzdENvbXB1dGVkU3R5bGUsICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3NzID09PSBTVFJJTkcpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKGNzcyk7IC8vL1xuXG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgIHRoaXMuc3R5bGUobmFtZSwgdmFsdWUpO1xuICAgIH0pO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IENsYXNzLFxuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSwgLy8vXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBbXTsgLy8vXG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc3RhdGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHJlc2l6ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY3VzdG9tRXZlbnRNaXhpbnMpO1xuXG5mdW5jdGlvbiBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBzZWxlY3RvciA9IG51bGwsXG4gICAgICAgIGVsZW1lbnQgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoQ2xhc3MsIG51bGwsIHNlbGVjdG9yLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFX1VSSSwgdGFnTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSBlbGVtZW50OyAvLy9cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KERFRkFVTFRfUFJPUEVSVElFUykpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzW0RFRkFVTFRfUFJPUEVSVElFU10pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7ICAvLy9cblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRQcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgaWdub3JlZFByb3BlcnRpZXMgPSBbXSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoSUdOT1JFRF9QUk9QRVJUSUVTKSkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gYXVnbWVudChpZ25vcmVkUHJvcGVydGllcywgQ2xhc3NbSUdOT1JFRF9QUk9QRVJUSUVTXSwgKGlnbm9yZWRQcm9wZXJ0eSkgPT4ge1xuICAgICAgaWYgKCFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBpZ25vcmVkUHJvcGVydGllcztcbn1cbiJdLCJuYW1lcyI6WyJFbGVtZW50Iiwic2VsZWN0b3IiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX19lbGVtZW50X18iLCJnZXRET01FbGVtZW50IiwiZ2V0T2Zmc2V0IiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXQiLCJPZmZzZXQiLCJnZXRCb3VuZHMiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZHMiLCJCb3VuZHMiLCJmcm9tQm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0V2lkdGgiLCJpbmNsdWRlQm9yZGVyIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwic2V0V2lkdGgiLCJzdHlsZSIsIldJRFRIIiwiZ2V0SGVpZ2h0IiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiSEVJR0hUIiwiaGFzQXR0cmlidXRlIiwibmFtZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInZhbHVlIiwiY2xlYXJBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGRBdHRyaWJ1dGUiLCJoYXNDbGFzcyIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic2V0Q2xhc3MiLCJhZGRDbGFzcyIsImFkZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJyZW1vdmVBbGxDbGFzc2VzIiwiRU1QVFlfU1RSSU5HIiwicHJlcGVuZFRvIiwicGFyZW50RWxlbWVudCIsInByZXBlbmQiLCJhcHBlbmRUbyIsImFwcGVuZCIsImFkZFRvIiwicmVtb3ZlRnJvbSIsImluc2VydEJlZm9yZSIsInNpYmxpbmdFbGVtZW50IiwicGFyZW50RE9NTm9kZSIsInBhcmVudE5vZGUiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwibmV4dFNpYmxpbmciLCJlbGVtZW50IiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwiaW5zZXJ0IiwicmVtb3ZlQ2hpbGQiLCJtb3VudEJlZm9yZSIsIm1vdW50RWxlbWVudCIsIm1vdW50QWZ0ZXIiLCJtb3VudCIsInVubW91bnQiLCJ1bm1vdW50RWxlbWVudCIsInNob3ciLCJkaXNwbGF5U3R5bGUiLCJCTE9DSyIsImRpc3BsYXkiLCJoaWRlIiwiRElTUExBWSIsIk5PTkUiLCJlbmFibGUiLCJESVNBQkxFRCIsImRpc2FibGUiLCJpc0VuYWJsZWQiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJlbmFibGVkIiwiaXNEaXNwbGF5ZWQiLCJjc3MiLCJkaXNwbGF5ZWQiLCJpc1Nob3dpbmciLCJzaG93aW5nIiwiaXNIaWRkZW4iLCJoaWRkZW4iLCJodG1sIiwiaW5uZXJIVE1MIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJpbmRleCIsImxlbmd0aCIsImZpcnN0Q29tcHV0ZWRTdHlsZSIsImZpcnN0IiwiZ2V0UHJvcGVydHlWYWx1ZSIsIlNUUklORyIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ0YWdOYW1lIiwiZWxlbWVudEZyb21UYWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJhcHBseVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiZnJvbVRhZ05hbWUiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJqc3hNaXhpbnMiLCJrZXlNaXhpbnMiLCJtb3VzZU1peGlucyIsImNsaWNrTWl4aW5zIiwic3RhdGVNaXhpbnMiLCJldmVudE1peGlucyIsInRvdWNoTWl4aW5zIiwic2Nyb2xsTWl4aW5zIiwicmVzaXplTWl4aW5zIiwiZWxlbWVudE1peGlucyIsImZ1bGxTY3JlZW5NaXhpbnMiLCJjdXN0b21FdmVudE1peGlucyIsIkZ1bmN0aW9uIiwiYmluZCIsImNhbGwiLCJpc1NWR1RhZ05hbWUiLCJjcmVhdGVFbGVtZW50TlMiLCJTVkdfTkFNRVNQQUNFX1VSSSIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsIkRFRkFVTFRfUFJPUEVSVElFUyIsImNvbWJpbmUiLCJzdXBlckNsYXNzIiwiZ2V0UHJvdG90eXBlT2YiLCJJR05PUkVEX1BST1BFUlRJRVMiLCJhdWdtZW50IiwiaWdub3JlZFByb3BlcnR5IiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBaUNxQkE7Ozs2REEvQkY7NkRBQ0E7MERBQ0c7MERBQ0E7NERBQ0U7NERBQ0E7NERBQ0E7NERBQ0E7NERBQ0E7NkRBQ0M7NkRBQ0E7OERBQ0M7aUVBQ0c7a0VBQ0M7c0JBRU47b0JBQ0s7cUJBQ0U7d0JBQ2M7eUJBV1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixJQUFBLEFBQU1BLHdCQUFOO2FBQU1BLFFBQ1BDLFFBQVE7Z0NBREREO1FBRWpCLElBQUlDLFVBQVU7WUFDWixJQUFJLENBQUNDLFVBQVUsR0FB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