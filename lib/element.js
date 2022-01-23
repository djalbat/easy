"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _offset = _interopRequireDefault(require("./offset"));
var _bounds = _interopRequireDefault(require("./bounds"));
var _jsx = _interopRequireDefault(require("./mixins/jsx"));
var _key = _interopRequireDefault(require("./mixins/key"));
var _click = _interopRequireDefault(require("./mixins/click"));
var _state = _interopRequireDefault(require("./mixins/state"));
var _event = _interopRequireDefault(require("./mixins/event"));
var _mouse = _interopRequireDefault(require("./mixins/mouse"));
var _resize = _interopRequireDefault(require("./mixins/resize"));
var _scroll = _interopRequireDefault(require("./mixins/scroll"));
var _element = _interopRequireDefault(require("./mixins/element"));
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
            key: "mount",
            value: function mount(element1) {
                var descendantElements = element1.getDescendantElements(), elements = [
                    element1
                ].concat(_toConsumableArray(descendantElements));
                this.add(element1);
                elements.reverse(); ///
                elements.forEach(function(element) {
                    return element.didMount && element.didMount();
                }); ///
            }
        },
        {
            key: "unmount",
            value: function unmount(element2) {
                var descendantElements = element2.getDescendantElements(), elements = [
                    element2
                ].concat(_toConsumableArray(descendantElements));
                elements.forEach(function(element) {
                    return element.willUnmount && element.willUnmount();
                }); ///
                this.remove(element2);
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
            value: function display1(display) {
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
                    var style1 = this.domElement.style[name];
                    return style1;
                }
            }
        },
        {
            key: "html",
            value: function html1(html) {
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
            value: function css1(css) {
                if (css === undefined) {
                    var computedStyle = getComputedStyle(this.domElement), css2 = {};
                    for(var index = 0; index < computedStyle.length; index++){
                        var firstComputedStyle = _array.first[computedStyle], name = firstComputedStyle, value = computedStyle.getPropertyValue(name); ///
                        css2[name] = value;
                    }
                    return css2;
                } else if ((typeof css === "undefined" ? "undefined" : _typeof(css)) === _constants.STRING) {
                    var name1 = css; ///
                    var computedStyle1 = getComputedStyle(this.domElement), value1 = computedStyle1.getPropertyValue(name1); ///
                    css = value1; ///
                    return css;
                } else {
                    var _this = this;
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
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key1 = 2; _key1 < _len; _key1++){
                    remainingArguments[_key1 - 2] = arguments[_key1];
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
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++){
                    remainingArguments[_key2 - 2] = arguments[_key2];
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
exports.default = _default;
function elementFromTagName(Class, tagName) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key3 = 2; _key3 < _len; _key3++){
        remainingArguments[_key3 - 2] = arguments[_key3];
    }
    var _bind;
    var selector = null, element = new ((_bind = Function.prototype.bind).call.apply(_bind, [
        Class,
        null,
        selector
    ].concat(_toConsumableArray(remainingArguments))));
    element.domElement = (0, _name).isSVGTagName(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
    element.domElement.__element__ = element; ///
    return element;
}
function defaultPropertiesFromClass(Class) {
    var defaultProperties = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Class.hasOwnProperty(_constants.DEFAULT_PROPERTIES)) {
        defaultProperties = (0, _object).combine(defaultProperties, Class[_constants.DEFAULT_PROPERTIES]);
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
        ignoredProperties = (0, _array).augment(ignoredProperties, Class[_constants.IGNORED_PROPERTIES], function(ignoredProperty) {
            return !ignoredProperties.includes(ignoredProperty);
        });
    }
    var superClass = Object.getPrototypeOf(Class);
    if (superClass !== null) {
        ignoredProperties = ignoredPropertiesFromClass(superClass, ignoredProperties);
    }
    return ignoredProperties;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgcmVzaXplTWl4aW5zIGZyb20gXCIuL21peGlucy9yZXNpemVcIjtcbmltcG9ydCBzY3JvbGxNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Njcm9sbFwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tYmluZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBmaXJzdCwgYXVnbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgTk9ORSxcbiAgICAgICAgIEJMT0NLLFxuICAgICAgICAgV0lEVEgsXG4gICAgICAgICBTVFJJTkcsXG4gICAgICAgICBIRUlHSFQsXG4gICAgICAgICBESVNQTEFZLFxuICAgICAgICAgRElTQUJMRUQsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBTVkdfTkFNRVNQQUNFX1VSSSxcbiAgICAgICAgIERFRkFVTFRfUFJPUEVSVElFUyxcbiAgICAgICAgIElHTk9SRURfUFJPUEVSVElFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgICB9XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShXSURUSCwgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKEhFSUdIVCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50LmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgIC4uLmRlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICAgIF07XG5cbiAgICB0aGlzLmFkZChlbGVtZW50KTtcblxuICAgIGVsZW1lbnRzLnJldmVyc2UoKTsgLy8vXG5cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5kaWRNb3VudCAmJiBlbGVtZW50LmRpZE1vdW50KCkpKTsgIC8vL1xuICB9XG5cbiAgdW5tb3VudChlbGVtZW50KSB7XG4gICAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICBdO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQud2lsbFVubW91bnQgJiYgZWxlbWVudC53aWxsVW5tb3VudCgpKSk7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBCTE9DSykgeyB0aGlzLmRpc3BsYXkoZGlzcGxheVN0eWxlKTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuc3R5bGUoRElTUExBWSwgTk9ORSk7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShESVNQTEFZLCBkaXNwbGF5KTsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShESVNBQkxFRCk7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZShESVNBQkxFRCwgRElTQUJMRUQpOyB9XG5cbiAgaXNFbmFibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgZW5hYmxlZCA9ICFkaXNhYmxlZDtcblxuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQXR0cmlidXRlKERJU0FCTEVEKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuICBcbiAgaXNEaXNwbGF5ZWQoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMuY3NzKERJU1BMQVkpLFxuICAgICAgICAgIGRpc3BsYXllZCA9IChkaXNwbGF5ICE9PSBOT05FKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBmaXJzdENvbXB1dGVkU3R5bGUgPSBmaXJzdFtjb21wdXRlZFN0eWxlXSxcbiAgICAgICAgICAgICAgbmFtZSA9IGZpcnN0Q29tcHV0ZWRTdHlsZSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSBTVFJJTkcpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgYmx1cigpIHsgdGhpcy5kb21FbGVtZW50LmJsdXIoKTsgfVxuXG4gIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuXG5mdW5jdGlvbiBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBzZWxlY3RvciA9IG51bGwsXG4gICAgICAgIGVsZW1lbnQgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoQ2xhc3MsIG51bGwsIHNlbGVjdG9yLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFX1VSSSwgdGFnTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSBlbGVtZW50OyAvLy9cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KERFRkFVTFRfUFJPUEVSVElFUykpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzW0RFRkFVTFRfUFJPUEVSVElFU10pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KElHTk9SRURfUFJPUEVSVElFUykpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllcyA9IGF1Z21lbnQoaWdub3JlZFByb3BlcnRpZXMsIENsYXNzW0lHTk9SRURfUFJPUEVSVElFU10sIChpZ25vcmVkUHJvcGVydHkpID0+ICFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBpZ25vcmVkUHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gaWdub3JlZFByb3BlcnRpZXM7XG59XG4iXSwibmFtZXMiOlsiRWxlbWVudCIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl9fZWxlbWVudF9fIiwiZ2V0RE9NRWxlbWVudCIsImdldE9mZnNldCIsInRvcCIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0IiwiZ2V0Qm91bmRzIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm91bmRzIiwiZnJvbUJvdW5kaW5nQ2xpZW50UmVjdCIsImdldFdpZHRoIiwiaW5jbHVkZUJvcmRlciIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInNldFdpZHRoIiwic3R5bGUiLCJnZXRIZWlnaHQiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzZXRIZWlnaHQiLCJoYXNBdHRyaWJ1dGUiLCJuYW1lIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwidmFsdWUiLCJjbGVhckF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImFkZEF0dHJpYnV0ZSIsInNldENsYXNzIiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlIiwiaGFzQ2xhc3MiLCJjb250YWlucyIsImNsZWFyQ2xhc3NlcyIsInByZXBlbmRUbyIsInBhcmVudEVsZW1lbnQiLCJwcmVwZW5kIiwiYXBwZW5kVG8iLCJhcHBlbmQiLCJhZGRUbyIsInJlbW92ZUZyb20iLCJpbnNlcnRCZWZvcmUiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRBZnRlciIsIm5leHRTaWJsaW5nIiwiZWxlbWVudCIsImZpcnN0Q2hpbGRET01FbGVtZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwibW91bnQiLCJkZXNjZW5kYW50RWxlbWVudHMiLCJnZXREZXNjZW5kYW50RWxlbWVudHMiLCJlbGVtZW50cyIsInJldmVyc2UiLCJmb3JFYWNoIiwiZGlkTW91bnQiLCJ1bm1vdW50Iiwid2lsbFVubW91bnQiLCJzaG93IiwiZGlzcGxheVN0eWxlIiwiZGlzcGxheSIsImhpZGUiLCJlbmFibGUiLCJkaXNhYmxlIiwiaXNFbmFibGVkIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwiZW5hYmxlZCIsImlzRGlzcGxheWVkIiwiY3NzIiwiZGlzcGxheWVkIiwiaXNTaG93aW5nIiwic2hvd2luZyIsImlzSGlkZGVuIiwiaGlkZGVuIiwidW5kZWZpbmVkIiwiaHRtbCIsImlubmVySFRNTCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJmaXJzdENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiYmx1ciIsImZvY3VzIiwiaGFzRm9jdXMiLCJhY3RpdmVFbGVtZW50IiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidGFnTmFtZSIsImVsZW1lbnRGcm9tVGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiYXBwbHlQcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsImZyb21UYWdOYW1lIiwiYXNzaWduIiwicHJvdG90eXBlIiwiRnVuY3Rpb24iLCJiaW5kIiwiY2FsbCIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsInN1cGVyQ2xhc3MiLCJnZXRQcm90b3R5cGVPZiIsImlnbm9yZWRQcm9wZXJ0eSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVPLEdBQVUsQ0FBVixPQUFVO0FBQ1YsR0FBVSxDQUFWLE9BQVU7QUFDUCxHQUFjLENBQWQsSUFBYztBQUNkLEdBQWMsQ0FBZCxJQUFjO0FBQ1osR0FBZ0IsQ0FBaEIsTUFBZ0I7QUFDaEIsR0FBZ0IsQ0FBaEIsTUFBZ0I7QUFDaEIsR0FBZ0IsQ0FBaEIsTUFBZ0I7QUFDaEIsR0FBZ0IsQ0FBaEIsTUFBZ0I7QUFDZixHQUFpQixDQUFqQixPQUFpQjtBQUNqQixHQUFpQixDQUFqQixPQUFpQjtBQUNoQixHQUFrQixDQUFsQixRQUFrQjtBQUVwQixHQUFvQixDQUFwQixPQUFvQjtBQUNmLEdBQWtCLENBQWxCLEtBQWtCO0FBQ2hCLEdBQW1CLENBQW5CLE1BQW1CO0FBV2YsR0FBYSxDQUFiLFVBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUxQ0EsT0FBTyxpQkFBYixRQUFRO2FBQUZBLE9BQU8sQ0FDQ0MsUUFBUTs7UUFDbEIsRUFBRSxFQUFFQSxRQUFRLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQ0gsUUFBUTtZQUVqRCxJQUFJLENBQUNDLFVBQVUsQ0FBQ0csV0FBVyxHQUFHLElBQUksQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFDekMsQ0FBQzs7OztZQUdIQyxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsTUFBTSxDQUFD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