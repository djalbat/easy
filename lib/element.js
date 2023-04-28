"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _offset = /*#__PURE__*/ _interopRequireDefault(require("./offset"));
var _bounds = /*#__PURE__*/ _interopRequireDefault(require("./bounds"));
var _jsx = /*#__PURE__*/ _interopRequireDefault(require("./mixins/jsx"));
var _key = /*#__PURE__*/ _interopRequireDefault(require("./mixins/key"));
var _click = /*#__PURE__*/ _interopRequireDefault(require("./mixins/click"));
var _state = /*#__PURE__*/ _interopRequireDefault(require("./mixins/state"));
var _event = /*#__PURE__*/ _interopRequireDefault(require("./mixins/event"));
var _mouse = /*#__PURE__*/ _interopRequireDefault(require("./mixins/mouse"));
var _resize = /*#__PURE__*/ _interopRequireDefault(require("./mixins/resize"));
var _scroll = /*#__PURE__*/ _interopRequireDefault(require("./mixins/scroll"));
var _element = /*#__PURE__*/ _interopRequireDefault(require("./mixins/element"));
var _object = require("./utilities/object");
var _name = require("./utilities/name");
var _array = require("./utilities/array");
var _constants = require("./constants");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var Element = /*#__PURE__*/ function() {
    function Element(selector) {
        _classCallCheck(this, Element);
        if (selector) {
            this.domElement = document.querySelector(selector);
            this.domElement.__element__ = this; ///
        }
    }
    _createClass(Element, [
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
                var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
                parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
            }
        },
        {
            key: "insertAfter",
            value: function insertAfter(siblingElement) {
                var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
                parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
            }
        },
        {
            key: "prepend",
            value: function prepend(element) {
                var domElement = element.domElement, firstChildDOMElement = this.domElement.firstChild;
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
                mountElement(element);
            }
        },
        {
            key: "mountAfter",
            value: function mountAfter(siblingElement) {
                this.insertBefore(siblingElement);
                var element = this; ///
                mountElement(element);
            }
        },
        {
            key: "mount",
            value: function mount(element) {
                this.add(element);
                mountElement(element);
            }
        },
        {
            key: "unmount",
            value: function unmount(element) {
                unmountElement(element);
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
            value: function style(name, value) {
                if (value !== undefined) {
                    this.domElement.style[name] = value;
                } else {
                    var style = this.domElement.style[name];
                    return style;
                }
            }
        },
        {
            key: "html",
            value: function html(html) {
                if (html === undefined) {
                    var innerHTML = this.domElement.innerHTML;
                    html = innerHTML; ///
                    return html;
                } else {
                    var innerHTML1 = html; ///
                    this.domElement.innerHTML = innerHTML1;
                }
            }
        },
        {
            key: "css",
            value: function css(css) {
                var _this = this;
                if (css === undefined) {
                    var computedStyle = getComputedStyle(this.domElement), _$css = {};
                    for(var index = 0; index < computedStyle.length; index++){
                        var firstComputedStyle = _array.first[computedStyle], name = firstComputedStyle, value = computedStyle.getPropertyValue(name); ///
                        _$css[name] = value;
                    }
                    return _$css;
                } else if ((typeof css === "undefined" ? "undefined" : _typeof(css)) === _constants.STRING) {
                    var name1 = css; ///
                    var computedStyle1 = getComputedStyle(this.domElement), value1 = computedStyle1.getPropertyValue(name1); ///
                    css = value1; ///
                    return css;
                } else {
                    var names = Object.keys(css); ///
                    names.forEach(function(name) {
                        var value = css[name];
                        _this.style(name, value);
                    });
                }
            }
        },
        {
            key: "blur",
            value: function blur() {
                this.domElement.blur();
            }
        },
        {
            key: "focus",
            value: function focus() {
                this.domElement.focus();
            }
        },
        {
            key: "hasFocus",
            value: function hasFocus() {
                var focus = document.activeElement === this.domElement; ///
                return focus;
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
                ].concat(_toConsumableArray(remainingArguments))), defaultProperties = defaultPropertiesFromClass(Class), ignoredProperties = ignoredPropertiesFromClass(Class);
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
                ].concat(_toConsumableArray(remainingArguments))), defaultProperties = {}, ignoredProperties = []; ///
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
Object.assign(Element.prototype, _click.default);
Object.assign(Element.prototype, _state.default);
Object.assign(Element.prototype, _event.default);
Object.assign(Element.prototype, _mouse.default);
Object.assign(Element.prototype, _resize.default);
Object.assign(Element.prototype, _scroll.default);
Object.assign(Element.prototype, _element.default);
var _default = Element;
function mountElement(element) {
    var descendantElements = element.getDescendantElements(), elements = [
        element
    ].concat(_toConsumableArray(descendantElements));
    elements.reverse(); ///
    elements.forEach(function(element) {
        return element.didMount && element.didMount();
    }); ///
}
function unmountElement(element) {
    var descendantElements = element.getDescendantElements(), elements = [
        element
    ].concat(_toConsumableArray(descendantElements));
    elements.forEach(function(element) {
        return element.willUnmount && element.willUnmount();
    }); ///
}
function elementFromTagName(Class, tagName) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        remainingArguments[_key - 2] = arguments[_key];
    }
    var _Function_prototype_bind;
    var selector = null, element = new ((_Function_prototype_bind = Function.prototype.bind).call.apply(_Function_prototype_bind, [
        Class,
        null,
        selector
    ].concat(_toConsumableArray(remainingArguments))));
    element.domElement = (0, _name.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
    element.domElement.__element__ = element; ///
    return element;
}
function defaultPropertiesFromClass(Class) {
    var defaultProperties = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Class.hasOwnProperty(_constants.DEFAULT_PROPERTIES)) {
        defaultProperties = (0, _object.combine)(defaultProperties, Class[_constants.DEFAULT_PROPERTIES]);
    }
    var superClass = Object.getPrototypeOf(Class);
    if (superClass !== null) {
        defaultProperties = defaultPropertiesFromClass(superClass, defaultProperties);
    }
    return defaultProperties;
}
function ignoredPropertiesFromClass(Class) {
    var ignoredProperties = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    if (Class.hasOwnProperty(_constants.IGNORED_PROPERTIES)) {
        ignoredProperties = (0, _array.augment)(ignoredProperties, Class[_constants.IGNORED_PROPERTIES], function(ignoredProperty) {
            return !ignoredProperties.includes(ignoredProperty);
        });
    }
    var superClass = Object.getPrototypeOf(Class);
    if (superClass !== null) {
        ignoredProperties = ignoredPropertiesFromClass(superClass, ignoredProperties);
    }
    return ignoredProperties;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgcmVzaXplTWl4aW5zIGZyb20gXCIuL21peGlucy9yZXNpemVcIjtcbmltcG9ydCBzY3JvbGxNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Njcm9sbFwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tYmluZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBmaXJzdCwgYXVnbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgTk9ORSxcbiAgICAgICAgIEJMT0NLLFxuICAgICAgICAgV0lEVEgsXG4gICAgICAgICBTVFJJTkcsXG4gICAgICAgICBIRUlHSFQsXG4gICAgICAgICBESVNQTEFZLFxuICAgICAgICAgRElTQUJMRUQsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBTVkdfTkFNRVNQQUNFX1VSSSxcbiAgICAgICAgIERFRkFVTFRfUFJPUEVSVElFUyxcbiAgICAgICAgIElHTk9SRURfUFJPUEVSVElFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgICB9XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShXSURUSCwgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKEhFSUdIVCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBpbnNlcnQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgbW91bnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBtb3VudEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgdGhpcy5pbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgbW91bnQoZWxlbWVudCkge1xuICAgIHRoaXMuYWRkKGVsZW1lbnQpO1xuXG4gICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgdW5tb3VudChlbGVtZW50KSB7XG4gICAgdW5tb3VudEVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gQkxPQ0spIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKERJU1BMQVksIE5PTkUpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoRElTUExBWSwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoRElTQUJMRUQpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoRElTQUJMRUQsIERJU0FCTEVEKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShESVNBQkxFRCk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLmNzcyhESVNQTEFZKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gTk9ORSk7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gIGlzU2hvd2luZygpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgc2hvd2luZyA9IGRpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgaGlkZGVuID0gIWRpc3BsYXllZDtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG4gIH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZmlyc3RDb21wdXRlZFN0eWxlID0gZmlyc3RbY29tcHV0ZWRTdHlsZV0sXG4gICAgICAgICAgICAgIG5hbWUgPSBmaXJzdENvbXB1dGVkU3R5bGUsICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gU1RSSU5HKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IENsYXNzLFxuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSwgLy8vXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBbXTsgLy8vXG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc3RhdGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHNjcm9sbE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDtcblxuZnVuY3Rpb24gbW91bnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgXTtcblxuICBlbGVtZW50cy5yZXZlcnNlKCk7IC8vL1xuXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LmRpZE1vdW50ICYmIGVsZW1lbnQuZGlkTW91bnQoKSkpOyAgLy8vXG59XG5cbmZ1bmN0aW9uIHVubW91bnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC53aWxsVW5tb3VudCAmJiBlbGVtZW50LndpbGxVbm1vdW50KCkpKTsgIC8vL1xufVxuXG5mdW5jdGlvbiBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBzZWxlY3RvciA9IG51bGwsXG4gICAgICAgIGVsZW1lbnQgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoQ2xhc3MsIG51bGwsIHNlbGVjdG9yLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFX1VSSSwgdGFnTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSBlbGVtZW50OyAvLy9cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KERFRkFVTFRfUFJPUEVSVElFUykpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzW0RFRkFVTFRfUFJPUEVSVElFU10pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KElHTk9SRURfUFJPUEVSVElFUykpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllcyA9IGF1Z21lbnQoaWdub3JlZFByb3BlcnRpZXMsIENsYXNzW0lHTk9SRURfUFJPUEVSVElFU10sIChpZ25vcmVkUHJvcGVydHkpID0+ICFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBpZ25vcmVkUHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gaWdub3JlZFByb3BlcnRpZXM7XG59XG4iXSwibmFtZXMiOlsiRWxlbWVudCIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl9fZWxlbWVudF9fIiwiZ2V0RE9NRWxlbWVudCIsImdldE9mZnNldCIsInRvcCIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0IiwiT2Zmc2V0IiwiZ2V0Qm91bmRzIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm91bmRzIiwiQm91bmRzIiwiZnJvbUJvdW5kaW5nQ2xpZW50UmVjdCIsImdldFdpZHRoIiwiaW5jbHVkZUJvcmRlciIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInNldFdpZHRoIiwic3R5bGUiLCJXSURUSCIsImdldEhlaWdodCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsInNldEhlaWdodCIsIkhFSUdIVCIsImhhc0F0dHJpYnV0ZSIsIm5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsImNsZWFyQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiYWRkQXR0cmlidXRlIiwic2V0Q2xhc3MiLCJjbGFzc05hbWUiLCJhZGRDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJoYXNDbGFzcyIsImNvbnRhaW5zIiwiY2xlYXJDbGFzc2VzIiwiRU1QVFlfU1RSSU5HIiwicHJlcGVuZFRvIiwicGFyZW50RWxlbWVudCIsInByZXBlbmQiLCJhcHBlbmRUbyIsImFwcGVuZCIsImFkZFRvIiwicmVtb3ZlRnJvbSIsImluc2VydEJlZm9yZSIsInNpYmxpbmdFbGVtZW50IiwicGFyZW50RE9NTm9kZSIsInBhcmVudE5vZGUiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwibmV4dFNpYmxpbmciLCJlbGVtZW50IiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwiaW5zZXJ0IiwicmVtb3ZlQ2hpbGQiLCJtb3VudEJlZm9yZSIsIm1vdW50RWxlbWVudCIsIm1vdW50QWZ0ZXIiLCJtb3VudCIsInVubW91bnQiLCJ1bm1vdW50RWxlbWVudCIsInNob3ciLCJkaXNwbGF5U3R5bGUiLCJCTE9DSyIsImRpc3BsYXkiLCJoaWRlIiwiRElTUExBWSIsIk5PTkUiLCJlbmFibGUiLCJESVNBQkxFRCIsImRpc2FibGUiLCJpc0VuYWJsZWQiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJlbmFibGVkIiwiaXNEaXNwbGF5ZWQiLCJjc3MiLCJkaXNwbGF5ZWQiLCJpc1Nob3dpbmciLCJzaG93aW5nIiwiaXNIaWRkZW4iLCJoaWRkZW4iLCJ1bmRlZmluZWQiLCJodG1sIiwiaW5uZXJIVE1MIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJpbmRleCIsImxlbmd0aCIsImZpcnN0Q29tcHV0ZWRTdHlsZSIsImZpcnN0IiwiZ2V0UHJvcGVydHlWYWx1ZSIsIlNUUklORyIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJibHVyIiwiZm9jdXMiLCJoYXNGb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ0YWdOYW1lIiwiZWxlbWVudEZyb21UYWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJhcHBseVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiZnJvbVRhZ05hbWUiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJqc3hNaXhpbnMiLCJrZXlNaXhpbnMiLCJjbGlja01peGlucyIsInN0YXRlTWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJtb3VzZU1peGlucyIsInJlc2l6ZU1peGlucyIsInNjcm9sbE1peGlucyIsImVsZW1lbnRNaXhpbnMiLCJkZXNjZW5kYW50RWxlbWVudHMiLCJnZXREZXNjZW5kYW50RWxlbWVudHMiLCJlbGVtZW50cyIsInJldmVyc2UiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwiRnVuY3Rpb24iLCJiaW5kIiwiY2FsbCIsImlzU1ZHVGFnTmFtZSIsImNyZWF0ZUVsZW1lbnROUyIsIlNWR19OQU1FU1BBQ0VfVVJJIiwiY3JlYXRlRWxlbWVudCIsImhhc093blByb3BlcnR5IiwiREVGQVVMVF9QUk9QRVJUSUVTIiwiY29tYmluZSIsInN1cGVyQ2xhc3MiLCJnZXRQcm90b3R5cGVPZiIsIklHTk9SRURfUFJPUEVSVElFUyIsImF1Z21lbnQiLCJpZ25vcmVkUHJvcGVydHkiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK1VBOzs7ZUFBQTs7OzJEQTdVbUI7MkRBQ0E7d0RBQ0c7d0RBQ0E7MERBQ0U7MERBQ0E7MERBQ0E7MERBQ0E7MkRBQ0M7MkRBQ0E7NERBQ0M7c0JBRUY7b0JBQ0s7cUJBQ0U7eUJBV0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFBLEFBQU1BLHdCQXdTSCxBQXhTSDthQUFNQSxRQUNRQyxRQUFROzhCQURoQkQ7UUFFRixJQUFJQyxVQUFVO1lBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdDLFNBQVNDLGFBQWEsQ0FBQ0g7WUFFekMsSUFBSSxDQUFDQyxVQUFVLENBQUNHLFdBQVcsR0FBRyxJQUFJLEVBQUUsR0FBRztRQUN6QyxDQUFDOztpQkFOQ0w7O1lBU0pNLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixJQUFNQyxNQUFNLElBQUksQ0FBQ04sVUFBVSxDQUFDTyxTQUFTLEVBQy9CQyxPQUFPLElBQUksQ0FBQ1IsVUFBVSxDQUFDUyxVQUFVLEVBQ2pDQyxTQUFTLElBQUlDLGVBQU0sQ0FBQ0wsS0FBS0U7Z0JBRS9CLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixJQUFNQyxxQkFBcUIsSUFBSSxDQUFDYixVQUFVLENBQUNjLHFCQUFxQixJQUMxREMsU0FBU0MsZUFBTSxDQUFDQyxzQkFBc0IsQ0FBQ0o7Z0JBRTdDLE9BQU9FO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FB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