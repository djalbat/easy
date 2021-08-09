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
var _bind;
var Element1 = /*#__PURE__*/ function() {
    function Element1(selector) {
        _classCallCheck(this, Element1);
        if (selector) {
            this.domElement = document.querySelector(selector);
            this.domElement.__element__ = this; ///
        }
    }
    _createClass(Element1, [
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
            value: function mount(element) {
                var descendantElements = element.getDescendantElements(), elements = [
                    element
                ].concat(_toConsumableArray(descendantElements));
                elements.reverse(); ///
                this.add(element);
                elements.forEach(function(element1) {
                    return element1.didMount && element1.didMount();
                }); ///
            }
        },
        {
            key: "unmount",
            value: function unmount(element) {
                var descendantElements = element.getDescendantElements(), elements = [
                    element
                ].concat(_toConsumableArray(descendantElements));
                elements.forEach(function(element1) {
                    return element1.willUnmount && element1.willUnmount();
                }); ///
                this.remove(element);
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
            value: function display(display1) {
                this.style(_constants.DISPLAY, display1);
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
            value: function html(html1) {
                if (html1 === undefined) {
                    var innerHTML = this.domElement.innerHTML;
                    html1 = innerHTML; ///
                    return html1;
                } else {
                    var innerHTML = html1; ///
                    this.domElement.innerHTML = innerHTML;
                }
            }
        },
        {
            key: "css",
            value: function css(css1) {
                if (css1 === undefined) {
                    var computedStyle = getComputedStyle(this.domElement), css2 = {
                    };
                    for(var index = 0; index < computedStyle.length; index++){
                        var firstComputedStyle = _array.first[computedStyle], name = firstComputedStyle, value = computedStyle.getPropertyValue(name); ///
                        css2[name] = value;
                    }
                    return css2;
                } else if (_typeof(css1) === _constants.STRING) {
                    var name = css1; ///
                    var computedStyle = getComputedStyle(this.domElement), value = computedStyle.getPropertyValue(name); ///
                    css1 = value; ///
                    return css1;
                } else {
                    var names = Object.keys(css1); ///
                    names.forEach((function(name) {
                        var value = css1[name];
                        this.style(name, value);
                    }).bind(this));
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
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key1 = 2; _key1 < _len; _key1++){
                    remainingArguments[_key1 - 2] = arguments[_key1];
                }
                var Class = Element1, element = elementFromTagName.apply(void 0, [
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
    return Element1;
}();
Object.assign(Element1.prototype, _jsx.default);
Object.assign(Element1.prototype, _key.default);
Object.assign(Element1.prototype, _click.default);
Object.assign(Element1.prototype, _state.default);
Object.assign(Element1.prototype, _event.default);
Object.assign(Element1.prototype, _mouse.default);
Object.assign(Element1.prototype, _resize.default);
Object.assign(Element1.prototype, _scroll.default);
Object.assign(Element1.prototype, _element.default);
var _default = Element1;
exports.default = _default;
function elementFromTagName(Class, tagName) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key1 = 2; _key1 < _len; _key1++){
        remainingArguments[_key1 - 2] = arguments[_key1];
    }
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
        (0, _object).combine(defaultProperties, Class[_constants.DEFAULT_PROPERTIES]);
    }
    var superClass = Object.getPrototypeOf(Class);
    if (superClass !== null) {
        defaultPropertiesFromClass(superClass, defaultProperties);
    }
    return defaultProperties;
}
function ignoredPropertiesFromClass(Class, param) {
    var ignoredProperties = param === void 0 ? [] : param;
    if (Class.hasOwnProperty(_constants.IGNORED_PROPERTIES)) {
        (0, _array).augment(ignoredProperties, Class[_constants.IGNORED_PROPERTIES], function(ignoredProperty) {
            return !ignoredProperties.includes(ignoredProperty);
        });
    }
    var superClass = Object.getPrototypeOf(Class);
    if (superClass !== null) {
        ignoredPropertiesFromClass(superClass, ignoredProperties);
    }
    return ignoredProperties;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgcmVzaXplTWl4aW5zIGZyb20gXCIuL21peGlucy9yZXNpemVcIjtcbmltcG9ydCBzY3JvbGxNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Njcm9sbFwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tYmluZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBmaXJzdCwgYXVnbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgTk9ORSxcbiAgICAgICAgIEJMT0NLLFxuICAgICAgICAgV0lEVEgsXG4gICAgICAgICBTVFJJTkcsXG4gICAgICAgICBIRUlHSFQsXG4gICAgICAgICBESVNQTEFZLFxuICAgICAgICAgRElTQUJMRUQsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBTVkdfTkFNRVNQQUNFX1VSSSxcbiAgICAgICAgIERFRkFVTFRfUFJPUEVSVElFUyxcbiAgICAgICAgIElHTk9SRURfUFJPUEVSVElFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgICB9XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShXSURUSCwgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKEhFSUdIVCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50LmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgIC4uLmRlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICAgIF07XG5cbiAgICBlbGVtZW50cy5yZXZlcnNlKCk7IC8vL1xuXG4gICAgdGhpcy5hZGQoZWxlbWVudCk7XG5cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5kaWRNb3VudCAmJiBlbGVtZW50LmRpZE1vdW50KCkpKTsgIC8vL1xuICB9XG5cbiAgdW5tb3VudChlbGVtZW50KSB7XG4gICAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICBdO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQud2lsbFVubW91bnQgJiYgZWxlbWVudC53aWxsVW5tb3VudCgpKSk7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBCTE9DSykgeyB0aGlzLmRpc3BsYXkoZGlzcGxheVN0eWxlKTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuc3R5bGUoRElTUExBWSwgTk9ORSk7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShESVNQTEFZLCBkaXNwbGF5KTsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShESVNBQkxFRCk7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZShESVNBQkxFRCwgRElTQUJMRUQpOyB9XG5cbiAgaXNFbmFibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgZW5hYmxlZCA9ICFkaXNhYmxlZDtcblxuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQXR0cmlidXRlKERJU0FCTEVEKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuICBcbiAgaXNEaXNwbGF5ZWQoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMuY3NzKERJU1BMQVkpLFxuICAgICAgICAgIGRpc3BsYXllZCA9IChkaXNwbGF5ICE9PSBOT05FKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBmaXJzdENvbXB1dGVkU3R5bGUgPSBmaXJzdFtjb21wdXRlZFN0eWxlXSxcbiAgICAgICAgICAgICAgbmFtZSA9IGZpcnN0Q29tcHV0ZWRTdHlsZSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSBTVFJJTkcpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgYmx1cigpIHsgdGhpcy5kb21FbGVtZW50LmJsdXIoKTsgfVxuXG4gIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuXG5mdW5jdGlvbiBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBzZWxlY3RvciA9IG51bGwsXG4gICAgICAgIGVsZW1lbnQgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoQ2xhc3MsIG51bGwsIHNlbGVjdG9yLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFX1VSSSwgdGFnTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSBlbGVtZW50OyAvLy9cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KERFRkFVTFRfUFJPUEVSVElFUykpIHtcbiAgICBjb21iaW5lKGRlZmF1bHRQcm9wZXJ0aWVzLCBDbGFzc1tERUZBVUxUX1BST1BFUlRJRVNdKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRQcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgaWdub3JlZFByb3BlcnRpZXMgPSBbXSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoSUdOT1JFRF9QUk9QRVJUSUVTKSkge1xuICAgIGF1Z21lbnQoaWdub3JlZFByb3BlcnRpZXMsIENsYXNzW0lHTk9SRURfUFJPUEVSVElFU10sIChpZ25vcmVkUHJvcGVydHkpID0+ICFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRU8sT0FBVTtJQUNWLE9BQVU7SUFDUCxJQUFjO0lBQ2QsSUFBYztJQUNaLE1BQWdCO0lBQ2hCLE1BQWdCO0lBQ2hCLE1BQWdCO0lBQ2hCLE1BQWdCO0lBQ2YsT0FBaUI7SUFDakIsT0FBaUI7SUFDaEIsUUFBa0I7SUFFcEIsT0FBb0I7SUFDZixLQUFrQjtJQUNoQixNQUFtQjtJQVdmLFVBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9UekIsS0FBdUI7SUFsVHhDLFFBQU87YUFBUCxRQUFPLENBQ0MsUUFBUTs4QkFEaEIsUUFBTztZQUVMLFFBQVE7aUJBQ0wsVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUTtpQkFFNUMsVUFBVSxDQUFDLFdBQVcsUUFBUyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7OztpQkFMdkMsUUFBTzs7WUFTWCxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhOzRCQUNDLFVBQVU7Ozs7WUFHeEIsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUztvQkFDRCxHQUFHLFFBQVEsVUFBVSxDQUFDLFNBQVMsRUFDL0IsSUFBSSxRQUFRLFVBQVUsQ0FBQyxVQUFVLEVBQ2pDLE1BQU0sT0EzQ0csT0FBVSxTQTJDQyxHQUFHLEVBQUUsSUFBSTt1QkFFNUIsTUFBTTs7OztZQUdmLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVM7b0JBQ0Qsa0JBQWtCLFFBQVEsVUFBVSxDQUFDLHFCQUFxQixJQUMxRCxNQUFNLEdBakRHLE9BQVUsU0FpREgsc0JBQXNCLENBQUMsa0JBQWtCO3VCQUV4RCxNQUFN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