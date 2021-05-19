"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _offset = _interopRequireDefault(require("./miscellaneous/offset"));
var _bounds = _interopRequireDefault(require("./miscellaneous/bounds"));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL21pc2NlbGxhbmVvdXMvb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvYm91bmRzXCI7XG5pbXBvcnQganN4TWl4aW5zIGZyb20gXCIuL21peGlucy9qc3hcIjtcbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHN0YXRlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IHJlc2l6ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvcmVzaXplXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgZmlyc3QsIGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IE5PTkUsXG4gICAgICAgICBCTE9DSyxcbiAgICAgICAgIFdJRFRILFxuICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgSEVJR0hULFxuICAgICAgICAgRElTUExBWSxcbiAgICAgICAgIERJU0FCTEVELFxuICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgU1ZHX05BTUVTUEFDRV9VUkksXG4gICAgICAgICBERUZBVUxUX1BST1BFUlRJRVMsXG4gICAgICAgICBJR05PUkVEX1BST1BFUlRJRVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gICAgfVxuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoV0lEVEgsIHdpZHRoKTtcbiAgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShIRUlHSFQsIGhlaWdodCk7XG4gIH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gRU1QVFlfU1RSSU5HOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VudChlbGVtZW50KSB7XG4gICAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICBdO1xuXG4gICAgZWxlbWVudHMucmV2ZXJzZSgpOyAvLy9cblxuICAgIHRoaXMuYWRkKGVsZW1lbnQpO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuZGlkTW91bnQgJiYgZWxlbWVudC5kaWRNb3VudCgpKSk7ICAvLy9cbiAgfVxuXG4gIHVubW91bnQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgICAgXTtcblxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LndpbGxVbm1vdW50ICYmIGVsZW1lbnQud2lsbFVubW91bnQoKSkpOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gQkxPQ0spIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKERJU1BMQVksIE5PTkUpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoRElTUExBWSwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoRElTQUJMRUQpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoRElTQUJMRUQsIERJU0FCTEVEKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShESVNBQkxFRCk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLmNzcyhESVNQTEFZKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gTk9ORSk7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gIGlzU2hvd2luZygpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgc2hvd2luZyA9IGRpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgaGlkZGVuID0gIWRpc3BsYXllZDtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG4gIH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZmlyc3RDb21wdXRlZFN0eWxlID0gZmlyc3RbY29tcHV0ZWRTdHlsZV0sXG4gICAgICAgICAgICAgIG5hbWUgPSBmaXJzdENvbXB1dGVkU3R5bGUsICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gU1RSSU5HKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IENsYXNzLFxuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSwgLy8vXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBbXTsgLy8vXG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc3RhdGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHNjcm9sbE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDtcblxuZnVuY3Rpb24gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBudWxsLFxuICAgICAgICBlbGVtZW50ID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCBudWxsLCBzZWxlY3RvciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gZWxlbWVudDsgLy8vXG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShERUZBVUxUX1BST1BFUlRJRVMpKSB7XG4gICAgY29tYmluZShkZWZhdWx0UHJvcGVydGllcywgQ2xhc3NbREVGQVVMVF9QUk9QRVJUSUVTXSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KElHTk9SRURfUFJPUEVSVElFUykpIHtcbiAgICBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzc1tJR05PUkVEX1BST1BFUlRJRVNdLCAoaWdub3JlZFByb3BlcnR5KSA9PiAhaWdub3JlZFByb3BlcnRpZXMuaW5jbHVkZXMoaWdub3JlZFByb3BlcnR5KSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBpZ25vcmVkUHJvcGVydGllcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVPLE9BQXdCO0lBQ3hCLE9BQXdCO0lBQ3JCLElBQWM7SUFDZCxJQUFjO0lBQ1osTUFBZ0I7SUFDaEIsTUFBZ0I7SUFDaEIsTUFBZ0I7SUFDaEIsTUFBZ0I7SUFDZixPQUFpQjtJQUNqQixPQUFpQjtJQUNoQixRQUFrQjtJQUVwQixPQUFvQjtJQUNmLEtBQWtCO0lBQ2hCLE1BQW1CO0lBV2YsVUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb1R6QixLQUF1QjtJQWxUeEMsUUFBTzthQUFQLFFBQU8sQ0FDQyxRQUFROzhCQURoQixRQUFPO1lBRUwsUUFBUTtpQkFDTCxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRO2lCQUU1QyxVQUFVLENBQUMsV0FBVyxRQUFTLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7O2lCQUx2QyxRQUFPOztZQVNYLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7NEJBQ0MsVUFBVTs7OztZQUd4QixHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTO29CQUNELEdBQUcsUUFBUSxVQUFVLENBQUMsU0FBUyxFQUMvQixJQUFJLFFBQVEsVUFBVSxDQUFDLFVBQVUsRUFDakMsTUFBTSxPQTNDRyxPQUF3QixTQTJDYixHQUFHLEVBQUUsSUFBSTt1QkFFNUIsTUFBTTs7OztZQUdmLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVM7b0JBQ0Qsa0JBQWtCLFFBQVEsVUFBVSxDQUFDLHFCQUFxQixJQUMxRCxNQUFNLEdBakRHLE9BQXdCLFNBaURqQixzQkFBc0IsQ0FBQyxrQkFBa0I7dUJBRXhELE1BQU07Ozs7WUFHZixHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLENBQUMsS0FBb0I7b0JBQXBCLGFBQWEsR0FBYixLQUFvQixjQUFKLElBQUksR0FBcEIsS0FBb0I7b0JBQ3JCLEtBQUssR0FBRyxhQUFhLFFBQ04sVUFBVSxDQUFDLFdBQVcsUUFDcEIsVUFBVSxDQUFDLFdBQVc7dUJBRXRDLEtBQUs7Ozs7WUFHZCxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLENBQUMsS0FBSztnQkFDWixLQUFLLE1BQVksTUFBRSxDQUFSLEtBQUssR0FBQyxFQUFFLEdBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3FCQUVwQixLQUFLLENBekNxQixVQUFhLFFBeUMxQixLQUFLOzs7O1lBR3pCLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsQ0FBQyxLQUFvQjtvQkFBcEIsYUFBYSxHQUFiLEtBQW9CLGNBQUosSUFBSSxHQUFwQixLQUFvQjtvQkFDdEIsTUFBTSxHQUFHLGFBQWEsUUFDTixVQUFVLENBQUMsWUFBWSxRQUNyQixVQUFVLENBQUMsWUFBWTt1QkFFeEMsTUFBTTs7OztZQUdmLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsQ0FBQyxNQUFNO2dCQUNkLE1BQU0sTUFBYSxNQUFFLENBQVQsTUFBTSxHQUFDLEVBQUUsR0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7cUJBRXRCLEtBQUssQ0F2RHFCLFVBQWEsU0F1RHpCLE1BQU07Ozs7WUFHM0IsR0FBWSxHQUFaLFlBQVk7NEJBQVosWUFBWSxDQUFDLElBQUk7NEJBQWdCLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSTs7OztZQUU3RCxHQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZLENBQUMsSUFBSTs0QkFBZ0IsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJOzs7O1lBRTdELEdBQVksR0FBWixZQUFZOzRCQUFaLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSztxQkFBUyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLOzs7O1lBRXBFLEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWMsQ0FBQyxJQUFJO3FCQUFTLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSTs7OztZQUUzRCxHQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUs7cUJBQVMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLOzs7O1lBRXpELEdBQWUsR0FBZixlQUFlOzRCQUFmLGVBQWUsQ0FBQyxJQUFJO3FCQUFTLGNBQWMsQ0FBQyxJQUFJOzs7O1lBRWhELEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsQ0FBQyxTQUFTO3FCQUFTLFVBQVUsQ0FBQyxTQUFTLEdBQUcsU0FBUzs7OztZQUUzRCxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLENBQUMsU0FBUztxQkFBUyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTOzs7O1lBRTdELEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVcsQ0FBQyxTQUFTO3FCQUFTLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVM7Ozs7WUFFbkUsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxDQUFDLFNBQVM7cUJBQVMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztZQUVuRSxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLENBQUMsU0FBUzs0QkFBZ0IsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztZQUV6RSxHQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZO3FCQUFVLFVBQVUsQ0FBQyxTQUFTLEdBaEZULFVBQWE7Ozs7WUFrRjlDLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsQ0FBQyxhQUFhO2dCQUFJLGFBQWEsQ0FBQyxPQUFPOzs7O1lBRWhELEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsQ0FBQyxhQUFhO2dCQUFJLGFBQWEsQ0FBQyxNQUFNOzs7O1lBRTlDLEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssQ0FBQyxhQUFhO2dCQUFJLGFBQWEsQ0FBQyxHQUFHOzs7O1lBRXhDLEdBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVUsQ0FBQyxhQUFhO2dCQUFJLGFBQWEsQ0FBQyxNQUFNOzs7O1lBRWhELEdBQVksR0FBWixZQUFZOzRCQUFaLFlBQVksQ0FBQyxjQUFjO29CQUNuQixhQUFhLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQ3BELGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxVQUFVO2dCQUVuRCxhQUFhLENBQUMsWUFBWSxNQUFNLFVBQVUsRUFBRSxpQkFBaUI7Ozs7WUFHL0QsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxDQUFDLGNBQWM7b0JBQ2xCLGFBQWEsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFDcEQsaUJBQWlCLEdBQUcsY0FBYyxDQUFDLFVBQVU7Z0JBRW5ELGFBQWEsQ0FBQyxZQUFZLE1BQU0sVUFBVSxFQUFFLGlCQUFpQixDQUFDLFdBQVcsRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Ozs7WUFHbEYsR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTyxDQUFDLE9BQU87b0JBQ1AsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQy9CLG9CQUFvQixRQUFRLFVBQVUsQ0FBQyxVQUFVO3FCQUVsRCxVQUFVLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxvQkFBb0I7Ozs7WUFHL0QsR0FBTSxHQUFOLE1BQU07NEJBQU4sTUFBTSxDQUFDLE9BQU87b0JBQ04sVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVO3FCQUVoQyxVQUFVLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOzs7O1lBR3JELEdBQUcsR0FBSCxHQUFHOzRCQUFILEdBQUcsQ0FBQyxPQUFPO3FCQUFTLE1BQU0sQ0FBQyxPQUFPOzs7O1lBRWxDLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sQ0FBQyxPQUFPO29CQUNSLE9BQU87d0JBQ0gsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVO3lCQUVoQyxVQUFVLENBQUMsV0FBVyxDQUFDLFVBQVU7O3lCQUVqQyxVQUFVLENBQUMsTUFBTTs7Ozs7WUFJMUIsR0FBSyxHQUFMLEtBQUs7NEJBQUwsS0FBSyxDQUFDLE9BQU87b0JBQ0wsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixJQUNsRCxRQUFRO29CQUNOLE9BQU87a0JBREUsTUFHVixvQkFESSxrQkFBa0I7Z0JBRzdCLFFBQVEsQ0FBQyxPQUFPLEdBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3FCQUVsQixHQUFHLENBQUMsT0FBTztnQkFFaEIsUUFBUSxDQUFDLE9BQU8sVUFBRSxRQUFPOzJCQUFNLFFBQU8sQ0FBQyxRQUFRLElBQUksUUFBTyxDQUFDLFFBQVE7bUJBQU8sQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOzs7O1lBRy9FLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU8sQ0FBQyxPQUFPO29CQUNQLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsSUFDbEQsUUFBUTtvQkFDTixPQUFPO2tCQURFLE1BR1Ysb0JBREksa0JBQWtCO2dCQUc3QixRQUFRLENBQUMsT0FBTyxVQUFFLFFBQU87MkJBQU0sUUFBTyxDQUFDLFdBQVcsSUFBSSxRQUFPLENBQUMsV0FBVzttQkFBTyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7cUJBRTlFLE1BQU0sQ0FBQyxPQUFPOzs7O1lBR3JCLEdBQUksR0FBSixJQUFJOzRCQUFKLElBQUksQ0FBQyxLQUFvQjtvQkFBcEIsWUFBWSxHQUFaLEtBQW9CLGNBM0pRLFVBQWEsU0EySnpDLEtBQW9CO3FCQUFTLE9BQU8sQ0FBQyxZQUFZOzs7O1lBRXRELEdBQUksR0FBSixJQUFJOzRCQUFKLElBQUk7cUJBQVUsS0FBSyxDQTdKYyxVQUFhLFVBQWIsVUFBYTs7OztZQStKOUMsR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTyxDQUFDLFFBQU87cUJBQVMsS0FBSyxDQS9KSSxVQUFhLFVBK0pQLFFBQU87Ozs7WUFFOUMsR0FBTSxHQUFOLE1BQU07NEJBQU4sTUFBTTtxQkFBVSxjQUFjLENBaktHLFVBQWE7Ozs7WUFtSzlDLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU87cUJBQVUsWUFBWSxDQW5LSSxVQUFhLFdBQWIsVUFBYTs7OztZQXFLOUMsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUztvQkFDRCxRQUFRLFFBQVEsVUFBVSxJQUMxQixPQUFPLElBQUksUUFBUTt1QkFFbEIsT0FBTzs7OztZQUdoQixHQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVO29CQUNGLFFBQVEsUUFBUSxZQUFZLENBN0tILFVBQWE7dUJBK0tyQyxRQUFROzs7O1lBR2pCLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7b0JBQ0gsT0FBTyxRQUFRLEdBQUcsQ0FuTE8sVUFBYSxXQW9MdEMsU0FBUyxHQUFJLE9BQU8sS0FwTEssVUFBYTt1QkFzTHJDLFNBQVM7Ozs7WUFHbEIsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUztvQkFDRCxTQUFTLFFBQVEsV0FBVyxJQUM1QixPQUFPLEdBQUcsU0FBUyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFeEIsT0FBTzs7OztZQUdoQixHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRO29CQUNBLFNBQVMsUUFBUSxXQUFXLElBQzVCLE1BQU0sSUFBSSxTQUFTO3VCQUVsQixNQUFNOzs7O1lBR2YsR0FBSyxHQUFMLEtBQUs7NEJBQUwsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLO29CQUNYLEtBQUssS0FBSyxTQUFTO3lCQUNoQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLOzt3QkFFN0IsTUFBSyxRQUFRLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSTsyQkFFakMsTUFBSzs7Ozs7WUFJaEIsR0FBSSxHQUFKLElBQUk7NEJBQUosSUFBSSxDQUFDLEtBQUk7b0JBQ0gsS0FBSSxLQUFLLFNBQVM7d0JBQ2QsU0FBUyxRQUFRLFVBQVUsQ0FBQyxTQUFTO29CQUUzQyxLQUFJLEdBQUcsU0FBUyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzsyQkFFZCxLQUFJOzt3QkFFTCxTQUFTLEdBQUcsS0FBSSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt5QkFFdEIsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTOzs7OztZQUl6QyxHQUFHLEdBQUgsR0FBRzs0QkFBSCxHQUFHLENBQUMsSUFBRztvQkFDRCxJQUFHLEtBQUssU0FBUzt3QkFDYixhQUFhLEdBQUcsZ0JBQWdCLE1BQU0sVUFBVSxHQUNoRCxJQUFHOzs0QkFFQSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLEtBQUs7NEJBQy9DLGtCQUFrQixHQWhQRCxNQUFtQixPQWdQVCxhQUFhLEdBQ3hDLElBQUksR0FBRyxrQkFBa0IsRUFDekIsS0FBSyxHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3dCQUV2RCxJQUFHLENBQUMsSUFBSSxJQUFJLEtBQUs7OzJCQUdaLElBQUc7MkJBQ0QsT0FBVSxDQUFILElBQUcsTUE3T1UsVUFBYTt3QkE4T3RDLElBQUksR0FBRyxJQUFHLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3dCQUViLGFBQWEsR0FBRyxnQkFBZ0IsTUFBTSxVQUFVLEdBQ2hELEtBQUssR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFdkQsSUFBRyxHQUFHLEtBQUssQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7MkJBRVYsSUFBRzs7d0JBRUosS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBRyxFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFbkMsS0FBSyxDQUFDLE9BQU8sV0FBRSxJQUFJOzRCQUNYLEtBQUssR0FBRyxJQUFHLENBQUMsSUFBSTs2QkFFakIsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLOzs7Ozs7WUFLNUIsR0FBSSxHQUFKLElBQUk7NEJBQUosSUFBSTtxQkFBVSxVQUFVLENBQUMsSUFBSTs7OztZQUU3QixHQUFLLEdBQUwsS0FBSzs0QkFBTCxLQUFLO3FCQUFVLFVBQVUsQ0FBQyxLQUFLOzs7O1lBRS9CLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7b0JBQ0EsS0FBSyxHQUFJLFFBQVEsQ0FBQyxhQUFhLFVBQVUsVUFBVSxDQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFekQsS0FBSzs7Ozs7WUFHUCxHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVU7d0JBQUUsSUFBcUIsR0FBckIsU0FBcUIsQ0FBckIsTUFBcUIsRUFBbEIsa0JBQWtCLGFBQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLENBQXFCLEdBQXJCLEtBQXFCLEdBQXJCLENBQXFCLEVBQXJCLEtBQXFCLEdBQXJCLElBQXFCLEVBQXJCLEtBQXFCO29CQUFsQixrQkFBa0IsQ0FBckIsS0FBcUIsR0FBckIsQ0FBcUIsSUFBckIsU0FBcUIsQ0FBckIsS0FBcUI7O29CQUMvQyxPQUFPLEdBQUssS0FBSyxDQUFqQixPQUFPLEVBQ1QsT0FBTyxHQUFHLGtCQUFrQixDQUFsQixLQUF5RCxNQUF6RCxDQUFrQjtvQkFBQyxLQUFLO29CQUFFLE9BQU87a0JBQWpDLE1BQXlELG9CQUFuQixrQkFBa0IsS0FDbEUsaUJBQWlCLEdBQUcsMEJBQTBCLENBQUMsS0FBSyxHQUNwRCxpQkFBaUIsR0FBRywwQkFBMEIsQ0FBQyxLQUFLO2dCQUUxRCxPQUFPLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUI7Z0JBRXhFLE9BQU8sQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLFVBQVUsR0FBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRXhDLE9BQU87Ozs7WUFHVCxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQVU7d0JBQUUsSUFBcUIsR0FBckIsU0FBcUIsQ0FBckIsTUFBcUIsRUFBbEIsa0JBQWtCLGFBQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLENBQXFCLEdBQXJCLEtBQXFCLEdBQXJCLENBQXFCLEVBQXJCLEtBQXFCLEdBQXJCLElBQXFCLEVBQXJCLEtBQXFCO29CQUFsQixrQkFBa0IsQ0FBckIsS0FBcUIsR0FBckIsQ0FBcUIsSUFBckIsU0FBcUIsQ0FBckIsS0FBcUI7O29CQUNyRCxLQUFLLEdBQUcsUUFBTyxFQUNmLE9BQU8sR0FBRyxrQkFBa0IsQ0FBbEIsS0FBeUQsTUFBekQsQ0FBa0I7b0JBQUMsS0FBSztvQkFBRSxPQUFPO2tCQUFqQyxNQUF5RCxvQkFBbkIsa0JBQWtCLEtBQ2xFLGlCQUFpQjttQkFDakIsaUJBQWlCLE1BQU8sQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVqQyxPQUFPLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUI7Z0JBRXhFLE9BQU8sQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLFVBQVUsR0FBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRXhDLE9BQU87Ozs7V0FoU1osUUFBTzs7QUFvU2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFPLENBQUMsU0FBUyxFQTdUVCxJQUFjO0FBOFRwQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQU8sQ0FBQyxTQUFTLEVBN1RULElBQWM7QUE4VHBDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBTyxDQUFDLFNBQVMsRUE3VFAsTUFBZ0I7QUE4VHhDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBTyxDQUFDLFNBQVMsRUE3VFAsTUFBZ0I7QUE4VHhDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBTyxDQUFDLFNBQVMsRUE3VFAsTUFBZ0I7QUE4VHhDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBTyxDQUFDLFNBQVMsRUE3VFAsTUFBZ0I7QUE4VHhDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBTyxDQUFDLFNBQVMsRUE3VE4sT0FBaUI7QUE4VDFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBTyxDQUFDLFNBQVMsRUE3VE4sT0FBaUI7QUE4VDFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBTyxDQUFDLFNBQVMsRUE3VEwsUUFBa0I7ZUErVDdCLFFBQU87O1NBRWIsa0JBQWtCLENBQUMsS0FBSyxFQUFFLE9BQU87WUFBRSxJQUFxQixHQUFyQixTQUFxQixDQUFyQixNQUFxQixFQUFsQixrQkFBa0IsYUFBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsQ0FBcUIsR0FBckIsS0FBcUIsR0FBckIsQ0FBcUIsRUFBckIsS0FBcUIsR0FBckIsSUFBcUIsRUFBckIsS0FBcUI7UUFBbEIsa0JBQWtCLENBQXJCLEtBQXFCLEdBQXJCLENBQXFCLElBQXJCLFNBQXFCLENBQXJCLEtBQXFCOztRQUN6RCxRQUFRLEdBQUcsSUFBSSxFQUNmLE9BQU8sU0FBUSxLQUF1QixHQUF2QixRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBQyxJQUFJLENBQTVCLEtBQTBFLENBQTFFLEtBQXVCO1FBQU0sS0FBSztRQUFFLElBQUk7UUFBRSxRQUFRO01BQWxELE1BQTBFLG9CQUFuQixrQkFBa0I7SUFFOUYsT0FBTyxDQUFDLFVBQVUsT0FsVVMsS0FBa0IsZUFrVVgsT0FBTyxJQUNsQixRQUFRLENBQUMsZUFBZSxDQXZUZCxVQUFhLG9CQXVUcUIsT0FBTyxJQUNqRCxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU87SUFFdkQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztXQUV0QyxPQUFPOztTQUdQLDBCQUEwQixDQUFDLEtBQUssRUFBRSxLQUFzQjtRQUF0QixpQkFBaUIsR0FBakIsS0FBc0I7UUFBdEIsS0FBc0I7UUFDM0QsS0FBSyxDQUFDLGNBQWMsQ0FoVVMsVUFBYTtZQWJ4QixPQUFvQixVQThVaEMsaUJBQWlCLEVBQUUsS0FBSyxDQWpVRCxVQUFhOztRQW9VeEMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSztRQUUxQyxVQUFVLEtBQUssSUFBSTtRQUNyQiwwQkFBMEIsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCOztXQUduRCxpQkFBaUI7O1NBR2pCLDBCQUEwQixDQUFDLEtBQUssRUFBRSxLQUFzQjtRQUF0QixpQkFBaUIsR0FBakIsS0FBc0IsbUJBQXRCLEtBQXNCO1FBQzNELEtBQUssQ0FBQyxjQUFjLENBOVVTLFVBQWE7WUFYakIsTUFBbUIsVUEwVnRDLGlCQUFpQixFQUFFLEtBQUssQ0EvVUQsVUFBYSwrQkErVVcsZUFBZTtvQkFBTSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsZUFBZTs7O1FBR2xILFVBQVUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUs7UUFFMUMsVUFBVSxLQUFLLElBQUk7UUFDckIsMEJBQTBCLENBQUMsVUFBVSxFQUFFLGlCQUFpQjs7V0FHbkQsaUJBQWlCIn0=