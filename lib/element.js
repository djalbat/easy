"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _offset = _interopRequireDefault(require("./offset"));
var _bounds = _interopRequireDefault(require("./bounds"));
var _jsx = _interopRequireDefault(require("./mixins/jsx"));
var _key1 = _interopRequireDefault(require("./mixins/key"));
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
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
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
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
            value: function getWidth(param) {
                var includeBorder = param === void 0 ? true : param;
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
            value: function getHeight(param) {
                var includeBorder = param === void 0 ? true : param;
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
            value: function show(param) {
                var displayStyle = param === void 0 ? _constants.BLOCK : param;
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
                    var computedStyle = getComputedStyle(this.domElement), css2 = {
                    };
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
                ].concat(_toConsumableArray(remainingArguments))), defaultProperties = {
                }, ignoredProperties = []; ///
                element.applyProperties(properties, defaultProperties, ignoredProperties);
                element.initialise && element.initialise(); ///
                return element;
            }
        }
    ]);
    return Element;
}();
Object.assign(Element.prototype, _jsx.default);
Object.assign(Element.prototype, _key1.default);
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
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        remainingArguments[_key - 2] = arguments[_key];
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
function defaultPropertiesFromClass(Class, param) {
    var defaultProperties = param === void 0 ? {
    } : param;
    if (Class.hasOwnProperty(_constants.DEFAULT_PROPERTIES)) {
        defaultProperties = (0, _object).combine(defaultProperties, Class[_constants.DEFAULT_PROPERTIES]);
    }
    var superClass = Object.getPrototypeOf(Class);
    if (superClass !== null) {
        defaultProperties = defaultPropertiesFromClass(superClass, defaultProperties);
    }
    return defaultProperties;
}
function ignoredPropertiesFromClass(Class, param) {
    var ignoredProperties = param === void 0 ? [] : param;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgcmVzaXplTWl4aW5zIGZyb20gXCIuL21peGlucy9yZXNpemVcIjtcbmltcG9ydCBzY3JvbGxNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Njcm9sbFwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tYmluZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBmaXJzdCwgYXVnbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgTk9ORSxcbiAgICAgICAgIEJMT0NLLFxuICAgICAgICAgV0lEVEgsXG4gICAgICAgICBTVFJJTkcsXG4gICAgICAgICBIRUlHSFQsXG4gICAgICAgICBESVNQTEFZLFxuICAgICAgICAgRElTQUJMRUQsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBTVkdfTkFNRVNQQUNFX1VSSSxcbiAgICAgICAgIERFRkFVTFRfUFJPUEVSVElFUyxcbiAgICAgICAgIElHTk9SRURfUFJPUEVSVElFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgICB9XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShXSURUSCwgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKEhFSUdIVCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50LmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgIC4uLmRlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICAgIF07XG5cbiAgICB0aGlzLmFkZChlbGVtZW50KTtcblxuICAgIGVsZW1lbnRzLnJldmVyc2UoKTsgLy8vXG5cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5kaWRNb3VudCAmJiBlbGVtZW50LmRpZE1vdW50KCkpKTsgIC8vL1xuICB9XG5cbiAgdW5tb3VudChlbGVtZW50KSB7XG4gICAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICBdO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQud2lsbFVubW91bnQgJiYgZWxlbWVudC53aWxsVW5tb3VudCgpKSk7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBCTE9DSykgeyB0aGlzLmRpc3BsYXkoZGlzcGxheVN0eWxlKTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuc3R5bGUoRElTUExBWSwgTk9ORSk7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShESVNQTEFZLCBkaXNwbGF5KTsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShESVNBQkxFRCk7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZShESVNBQkxFRCwgRElTQUJMRUQpOyB9XG5cbiAgaXNFbmFibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgZW5hYmxlZCA9ICFkaXNhYmxlZDtcblxuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQXR0cmlidXRlKERJU0FCTEVEKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuICBcbiAgaXNEaXNwbGF5ZWQoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMuY3NzKERJU1BMQVkpLFxuICAgICAgICAgIGRpc3BsYXllZCA9IChkaXNwbGF5ICE9PSBOT05FKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBmaXJzdENvbXB1dGVkU3R5bGUgPSBmaXJzdFtjb21wdXRlZFN0eWxlXSxcbiAgICAgICAgICAgICAgbmFtZSA9IGZpcnN0Q29tcHV0ZWRTdHlsZSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSBTVFJJTkcpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgYmx1cigpIHsgdGhpcy5kb21FbGVtZW50LmJsdXIoKTsgfVxuXG4gIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuXG5mdW5jdGlvbiBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBzZWxlY3RvciA9IG51bGwsXG4gICAgICAgIGVsZW1lbnQgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoQ2xhc3MsIG51bGwsIHNlbGVjdG9yLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFX1VSSSwgdGFnTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSBlbGVtZW50OyAvLy9cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KERFRkFVTFRfUFJPUEVSVElFUykpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzW0RFRkFVTFRfUFJPUEVSVElFU10pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KElHTk9SRURfUFJPUEVSVElFUykpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllcyA9IGF1Z21lbnQoaWdub3JlZFByb3BlcnRpZXMsIENsYXNzW0lHTk9SRURfUFJPUEVSVElFU10sIChpZ25vcmVkUHJvcGVydHkpID0+ICFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBpZ25vcmVkUHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gaWdub3JlZFByb3BlcnRpZXM7XG59XG4iXSwibmFtZXMiOlsiRWxlbWVudCIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl9fZWxlbWVudF9fIiwiZ2V0RE9NRWxlbWVudCIsImdldE9mZnNldCIsInRvcCIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0IiwiZ2V0Qm91bmRzIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm91bmRzIiwiZnJvbUJvdW5kaW5nQ2xpZW50UmVjdCIsImdldFdpZHRoIiwiaW5jbHVkZUJvcmRlciIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInNldFdpZHRoIiwic3R5bGUiLCJnZXRIZWlnaHQiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzZXRIZWlnaHQiLCJoYXNBdHRyaWJ1dGUiLCJuYW1lIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwidmFsdWUiLCJjbGVhckF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImFkZEF0dHJpYnV0ZSIsInNldENsYXNzIiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlIiwiaGFzQ2xhc3MiLCJjb250YWlucyIsImNsZWFyQ2xhc3NlcyIsInByZXBlbmRUbyIsInBhcmVudEVsZW1lbnQiLCJwcmVwZW5kIiwiYXBwZW5kVG8iLCJhcHBlbmQiLCJhZGRUbyIsInJlbW92ZUZyb20iLCJpbnNlcnRCZWZvcmUiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRBZnRlciIsIm5leHRTaWJsaW5nIiwiZWxlbWVudCIsImZpcnN0Q2hpbGRET01FbGVtZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwibW91bnQiLCJkZXNjZW5kYW50RWxlbWVudHMiLCJnZXREZXNjZW5kYW50RWxlbWVudHMiLCJlbGVtZW50cyIsInJldmVyc2UiLCJmb3JFYWNoIiwiZGlkTW91bnQiLCJ1bm1vdW50Iiwid2lsbFVubW91bnQiLCJzaG93IiwiZGlzcGxheVN0eWxlIiwiZGlzcGxheSIsImhpZGUiLCJlbmFibGUiLCJkaXNhYmxlIiwiaXNFbmFibGVkIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwiZW5hYmxlZCIsImlzRGlzcGxheWVkIiwiY3NzIiwiZGlzcGxheWVkIiwiaXNTaG93aW5nIiwic2hvd2luZyIsImlzSGlkZGVuIiwiaGlkZGVuIiwidW5kZWZpbmVkIiwiaHRtbCIsImlubmVySFRNTCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJmaXJzdENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiYmx1ciIsImZvY3VzIiwiaGFzRm9jdXMiLCJhY3RpdmVFbGVtZW50IiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidGFnTmFtZSIsImVsZW1lbnRGcm9tVGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiYXBwbHlQcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsImZyb21UYWdOYW1lIiwiYXNzaWduIiwicHJvdG90eXBlIiwiRnVuY3Rpb24iLCJiaW5kIiwiY2FsbCIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsInN1cGVyQ2xhc3MiLCJnZXRQcm90b3R5cGVPZiIsImlnbm9yZWRQcm9wZXJ0eSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVPLEdBQVUsQ0FBVixPQUFVO0FBQ1YsR0FBVSxDQUFWLE9BQVU7QUFDUCxHQUFjLENBQWQsSUFBYztBQUNkLEdBQWMsQ0FBZCxLQUFjO0FBQ1osR0FBZ0IsQ0FBaEIsTUFBZ0I7QUFDaEIsR0FBZ0IsQ0FBaEIsTUFBZ0I7QUFDaEIsR0FBZ0IsQ0FBaEIsTUFBZ0I7QUFDaEIsR0FBZ0IsQ0FBaEIsTUFBZ0I7QUFDZixHQUFpQixDQUFqQixPQUFpQjtBQUNqQixHQUFpQixDQUFqQixPQUFpQjtBQUNoQixHQUFrQixDQUFsQixRQUFrQjtBQUVwQixHQUFvQixDQUFwQixPQUFvQjtBQUNmLEdBQWtCLENBQWxCLEtBQWtCO0FBQ2hCLEdBQW1CLENBQW5CLE1BQW1CO0FBV2YsR0FBYSxDQUFiLFVBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUxQ0EsT0FBTyxpQkFBYixRQUFRO2FBQUZBLE9BQU8sQ0FDQ0MsUUFBUTs4QkFEaEJELE9BQU87UUFFVCxFQUFFLEVBQUVDLFFBQVEsRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDSCxRQUFRO1lBRWpELElBQUksQ0FBQ0MsVUFBVSxDQUFDRyxXQUFXLEdBQUcsSUFBSSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUN6QyxDQUFDOztpQkFOQ0wsT0FBTzs7WUFTWE0sR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsR0FBRyxDQUFDO2dC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