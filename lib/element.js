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
            value: function mount(element) {
                var descendantElements = element.getDescendantElements(), elements = [
                    element
                ].concat(_toConsumableArray(descendantElements));
                elements.reverse(); ///
                this.add(element);
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
                    var style = this.domElement.style[name];
                    return style;
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
                    var computedStyle = getComputedStyle(this.domElement), css = {
                    };
                    for(var index = 0; index < computedStyle.length; index++){
                        var firstComputedStyle = _array.first[computedStyle], name = firstComputedStyle, value = computedStyle.getPropertyValue(name); ///
                        css[name] = value;
                    }
                    return css;
                } else if ((typeof css1 === "undefined" ? "undefined" : _typeof(css1)) === _constants.STRING) {
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
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        remainingArguments[_key - 2] = arguments[_key];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIk9mZnNldCIsIkJvdW5kcyIsImpzeE1peGlucyIsImtleU1peGlucyIsImNsaWNrTWl4aW5zIiwic3RhdGVNaXhpbnMiLCJldmVudE1peGlucyIsIm1vdXNlTWl4aW5zIiwicmVzaXplTWl4aW5zIiwic2Nyb2xsTWl4aW5zIiwiZWxlbWVudE1peGlucyIsImNvbWJpbmUiLCJpc1NWR1RhZ05hbWUiLCJmaXJzdCIsImF1Z21lbnQiLCJOT05FIiwiQkxPQ0siLCJXSURUSCIsIlNUUklORyIsIkhFSUdIVCIsIkRJU1BMQVkiLCJESVNBQkxFRCIsIkVNUFRZX1NUUklORyIsIlNWR19OQU1FU1BBQ0VfVVJJIiwiREVGQVVMVF9QUk9QRVJUSUVTIiwiSUdOT1JFRF9QUk9QRVJUSUVTIiwiRWxlbWVudCIsImNvbnN0cnVjdG9yIiwic2VsZWN0b3IiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX19lbGVtZW50X18iLCJnZXRET01FbGVtZW50IiwiZ2V0T2Zmc2V0IiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXQiLCJnZXRCb3VuZHMiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZHMiLCJmcm9tQm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0V2lkdGgiLCJpbmNsdWRlQm9yZGVyIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwic2V0V2lkdGgiLCJzdHlsZSIsImdldEhlaWdodCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsInNldEhlaWdodCIsImhhc0F0dHJpYnV0ZSIsIm5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsImNsZWFyQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiYWRkQXR0cmlidXRlIiwic2V0Q2xhc3MiLCJjbGFzc05hbWUiLCJhZGRDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJoYXNDbGFzcyIsImNvbnRhaW5zIiwiY2xlYXJDbGFzc2VzIiwicHJlcGVuZFRvIiwicGFyZW50RWxlbWVudCIsInByZXBlbmQiLCJhcHBlbmRUbyIsImFwcGVuZCIsImFkZFRvIiwicmVtb3ZlRnJvbSIsImluc2VydEJlZm9yZSIsInNpYmxpbmdFbGVtZW50IiwicGFyZW50RE9NTm9kZSIsInBhcmVudE5vZGUiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwibmV4dFNpYmxpbmciLCJlbGVtZW50IiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJtb3VudCIsImRlc2NlbmRhbnRFbGVtZW50cyIsImdldERlc2NlbmRhbnRFbGVtZW50cyIsImVsZW1lbnRzIiwicmV2ZXJzZSIsImZvckVhY2giLCJkaWRNb3VudCIsInVubW91bnQiLCJ3aWxsVW5tb3VudCIsInNob3ciLCJkaXNwbGF5U3R5bGUiLCJkaXNwbGF5IiwiaGlkZSIsImVuYWJsZSIsImRpc2FibGUiLCJpc0VuYWJsZWQiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJlbmFibGVkIiwiaXNEaXNwbGF5ZWQiLCJjc3MiLCJkaXNwbGF5ZWQiLCJpc1Nob3dpbmciLCJzaG93aW5nIiwiaXNIaWRkZW4iLCJoaWRkZW4iLCJ1bmRlZmluZWQiLCJodG1sIiwiaW5uZXJIVE1MIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJpbmRleCIsImxlbmd0aCIsImZpcnN0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJibHVyIiwiZm9jdXMiLCJoYXNGb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ0YWdOYW1lIiwiZWxlbWVudEZyb21UYWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJhcHBseVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiZnJvbVRhZ05hbWUiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJGdW5jdGlvbiIsImJpbmQiLCJjYWxsIiwiY3JlYXRlRWxlbWVudE5TIiwiY3JlYXRlRWxlbWVudCIsImhhc093blByb3BlcnR5Iiwic3VwZXJDbGFzcyIsImdldFByb3RvdHlwZU9mIiwiaWdub3JlZFByb3BlcnR5IiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRU8sR0FBVSxDQUFWLE9BQVU7QUFDVixHQUFVLENBQVYsT0FBVTtBQUNQLEdBQWMsQ0FBZCxJQUFjO0FBQ2QsR0FBYyxDQUFkLElBQWM7QUFDWixHQUFnQixDQUFoQixNQUFnQjtBQUNoQixHQUFnQixDQUFoQixNQUFnQjtBQUNoQixHQUFnQixDQUFoQixNQUFnQjtBQUNoQixHQUFnQixDQUFoQixNQUFnQjtBQUNmLEdBQWlCLENBQWpCLE9BQWlCO0FBQ2pCLEdBQWlCLENBQWpCLE9BQWlCO0FBQ2hCLEdBQWtCLENBQWxCLFFBQWtCO0FBRXBCLEdBQW9CLENBQXBCLE9BQW9CO0FBQ2YsR0FBa0IsQ0FBbEIsS0FBa0I7QUFDaEIsR0FBbUIsQ0FBbkIsTUFBbUI7QUFXZixHQUFhLENBQWIsVUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb1R6QixLQUF1QjtJQWxUeEMsT0FBTyxpQkFBYixRQUFRO2FBQUYsT0FBTyxDQUNDLFFBQVE7OEJBRGhCLE9BQU87UUFFVCxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUTtZ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