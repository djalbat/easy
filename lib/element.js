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
            value: function mount(element) {
                var descendantElements = element.getDescendantElements(), elements = [
                    element
                ].concat(_toConsumableArray(descendantElements));
                this.add(element);
                elements.reverse(); ///
                elements.forEach(function(element) {
                    return element.didMount && element.didMount();
                }); ///
            }
        },
        {
            key: "unmount",
            value: function unmount(element) {
                var descendantElements = element.getDescendantElements(), elements = [
                    element
                ].concat(_toConsumableArray(descendantElements));
                elements.forEach(function(element) {
                    return element.willUnmount && element.willUnmount();
                }); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgcmVzaXplTWl4aW5zIGZyb20gXCIuL21peGlucy9yZXNpemVcIjtcbmltcG9ydCBzY3JvbGxNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Njcm9sbFwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tYmluZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBmaXJzdCwgYXVnbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgTk9ORSxcbiAgICAgICAgIEJMT0NLLFxuICAgICAgICAgV0lEVEgsXG4gICAgICAgICBTVFJJTkcsXG4gICAgICAgICBIRUlHSFQsXG4gICAgICAgICBESVNQTEFZLFxuICAgICAgICAgRElTQUJMRUQsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBTVkdfTkFNRVNQQUNFX1VSSSxcbiAgICAgICAgIERFRkFVTFRfUFJPUEVSVElFUyxcbiAgICAgICAgIElHTk9SRURfUFJPUEVSVElFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgICB9XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShXSURUSCwgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKEhFSUdIVCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50LmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgIC4uLmRlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICAgIF07XG5cbiAgICB0aGlzLmFkZChlbGVtZW50KTtcblxuICAgIGVsZW1lbnRzLnJldmVyc2UoKTsgLy8vXG5cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5kaWRNb3VudCAmJiBlbGVtZW50LmRpZE1vdW50KCkpKTsgIC8vL1xuICB9XG5cbiAgdW5tb3VudChlbGVtZW50KSB7XG4gICAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICBdO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQud2lsbFVubW91bnQgJiYgZWxlbWVudC53aWxsVW5tb3VudCgpKSk7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBCTE9DSykgeyB0aGlzLmRpc3BsYXkoZGlzcGxheVN0eWxlKTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuc3R5bGUoRElTUExBWSwgTk9ORSk7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShESVNQTEFZLCBkaXNwbGF5KTsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShESVNBQkxFRCk7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZShESVNBQkxFRCwgRElTQUJMRUQpOyB9XG5cbiAgaXNFbmFibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgZW5hYmxlZCA9ICFkaXNhYmxlZDtcblxuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQXR0cmlidXRlKERJU0FCTEVEKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuICBcbiAgaXNEaXNwbGF5ZWQoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMuY3NzKERJU1BMQVkpLFxuICAgICAgICAgIGRpc3BsYXllZCA9IChkaXNwbGF5ICE9PSBOT05FKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBmaXJzdENvbXB1dGVkU3R5bGUgPSBmaXJzdFtjb21wdXRlZFN0eWxlXSxcbiAgICAgICAgICAgICAgbmFtZSA9IGZpcnN0Q29tcHV0ZWRTdHlsZSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSBTVFJJTkcpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgYmx1cigpIHsgdGhpcy5kb21FbGVtZW50LmJsdXIoKTsgfVxuXG4gIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuXG5mdW5jdGlvbiBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBzZWxlY3RvciA9IG51bGwsXG4gICAgICAgIGVsZW1lbnQgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoQ2xhc3MsIG51bGwsIHNlbGVjdG9yLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFX1VSSSwgdGFnTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSBlbGVtZW50OyAvLy9cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KERFRkFVTFRfUFJPUEVSVElFUykpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzW0RFRkFVTFRfUFJPUEVSVElFU10pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KElHTk9SRURfUFJPUEVSVElFUykpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllcyA9IGF1Z21lbnQoaWdub3JlZFByb3BlcnRpZXMsIENsYXNzW0lHTk9SRURfUFJPUEVSVElFU10sIChpZ25vcmVkUHJvcGVydHkpID0+ICFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBpZ25vcmVkUHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gaWdub3JlZFByb3BlcnRpZXM7XG59XG4iXSwibmFtZXMiOlsiRWxlbWVudCIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl9fZWxlbWVudF9fIiwiZ2V0RE9NRWxlbWVudCIsImdldE9mZnNldCIsInRvcCIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0IiwiT2Zmc2V0IiwiZ2V0Qm91bmRzIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm91bmRzIiwiQm91bmRzIiwiZnJvbUJvdW5kaW5nQ2xpZW50UmVjdCIsImdldFdpZHRoIiwiaW5jbHVkZUJvcmRlciIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInNldFdpZHRoIiwic3R5bGUiLCJXSURUSCIsImdldEhlaWdodCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsInNldEhlaWdodCIsIkhFSUdIVCIsImhhc0F0dHJpYnV0ZSIsIm5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsImNsZWFyQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiYWRkQXR0cmlidXRlIiwic2V0Q2xhc3MiLCJjbGFzc05hbWUiLCJhZGRDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJoYXNDbGFzcyIsImNvbnRhaW5zIiwiY2xlYXJDbGFzc2VzIiwiRU1QVFlfU1RSSU5HIiwicHJlcGVuZFRvIiwicGFyZW50RWxlbWVudCIsInByZXBlbmQiLCJhcHBlbmRUbyIsImFwcGVuZCIsImFkZFRvIiwicmVtb3ZlRnJvbSIsImluc2VydEJlZm9yZSIsInNpYmxpbmdFbGVtZW50IiwicGFyZW50RE9NTm9kZSIsInBhcmVudE5vZGUiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwibmV4dFNpYmxpbmciLCJlbGVtZW50IiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJtb3VudCIsImRlc2NlbmRhbnRFbGVtZW50cyIsImdldERlc2NlbmRhbnRFbGVtZW50cyIsImVsZW1lbnRzIiwicmV2ZXJzZSIsImZvckVhY2giLCJkaWRNb3VudCIsInVubW91bnQiLCJ3aWxsVW5tb3VudCIsInNob3ciLCJkaXNwbGF5U3R5bGUiLCJCTE9DSyIsImRpc3BsYXkiLCJoaWRlIiwiRElTUExBWSIsIk5PTkUiLCJlbmFibGUiLCJESVNBQkxFRCIsImRpc2FibGUiLCJpc0VuYWJsZWQiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJlbmFibGVkIiwiaXNEaXNwbGF5ZWQiLCJjc3MiLCJkaXNwbGF5ZWQiLCJpc1Nob3dpbmciLCJzaG93aW5nIiwiaXNIaWRkZW4iLCJoaWRkZW4iLCJ1bmRlZmluZWQiLCJodG1sIiwiaW5uZXJIVE1MIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJpbmRleCIsImxlbmd0aCIsImZpcnN0Q29tcHV0ZWRTdHlsZSIsImZpcnN0IiwiZ2V0UHJvcGVydHlWYWx1ZSIsIlNUUklORyIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImJsdXIiLCJmb2N1cyIsImhhc0ZvY3VzIiwiYWN0aXZlRWxlbWVudCIsImZyb21DbGFzcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInRhZ05hbWUiLCJlbGVtZW50RnJvbVRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyIsImFwcGx5UHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJmcm9tVGFnTmFtZSIsImFzc2lnbiIsInByb3RvdHlwZSIsImpzeE1peGlucyIsImtleU1peGlucyIsImNsaWNrTWl4aW5zIiwic3RhdGVNaXhpbnMiLCJldmVudE1peGlucyIsIm1vdXNlTWl4aW5zIiwicmVzaXplTWl4aW5zIiwic2Nyb2xsTWl4aW5zIiwiZWxlbWVudE1peGlucyIsIkZ1bmN0aW9uIiwiYmluZCIsImNhbGwiLCJpc1NWR1RhZ05hbWUiLCJjcmVhdGVFbGVtZW50TlMiLCJTVkdfTkFNRVNQQUNFX1VSSSIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsIkRFRkFVTFRfUFJPUEVSVElFUyIsImNvbWJpbmUiLCJzdXBlckNsYXNzIiwiZ2V0UHJvdG90eXBlT2YiLCJJR05PUkVEX1BST1BFUlRJRVMiLCJhdWdtZW50IiwiaWdub3JlZFByb3BlcnR5IiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJVQTs7O2VBQUE7OzsyREF6VW1COzJEQUNBO3dEQUNHO3dEQUNBOzBEQUNFOzBEQUNBOzBEQUNBOzBEQUNBOzJEQUNDOzJEQUNBOzREQUNDO3NCQUVGO29CQUNLO3FCQUNFO3lCQVdJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBQSxBQUFNQSx3QkFvU0gsQUFwU0g7YUFBTUEsUUFDUUMsUUFBUTs4QkFEaEJEO1FBRUYsSUFBSUMsVUFBVTtZQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxTQUFTQyxhQUFhLENBQUNIO1lBRXpDLElBQUksQ0FBQ0MsVUFBVSxDQUFDRyxXQUFXLEdBQUcsSUFBSSxFQUFFLEdBQUc7UUFDekMsQ0FBQzs7aUJBTkNMOztZQVNKTSxLQUFB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