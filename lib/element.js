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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIiwiLi4vc3JjL2JvdW5kcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9vZmZzZXRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4vYm91bmRzXCI7XG5pbXBvcnQganN4TWl4aW5zIGZyb20gXCIuL21peGlucy9qc3hcIjtcbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHN0YXRlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IHJlc2l6ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvcmVzaXplXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgZmlyc3QsIGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IE5PTkUsXG4gICAgICAgICBCTE9DSyxcbiAgICAgICAgIFdJRFRILFxuICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgSEVJR0hULFxuICAgICAgICAgRElTUExBWSxcbiAgICAgICAgIERJU0FCTEVELFxuICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgU1ZHX05BTUVTUEFDRV9VUkksXG4gICAgICAgICBERUZBVUxUX1BST1BFUlRJRVMsXG4gICAgICAgICBJR05PUkVEX1BST1BFUlRJRVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gICAgfVxuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoV0lEVEgsIHdpZHRoKTtcbiAgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShIRUlHSFQsIGhlaWdodCk7XG4gIH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gRU1QVFlfU1RSSU5HOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VudChlbGVtZW50KSB7XG4gICAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5hZGQoZWxlbWVudCk7XG5cbiAgICBlbGVtZW50cy5yZXZlcnNlKCk7IC8vL1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuZGlkTW91bnQgJiYgZWxlbWVudC5kaWRNb3VudCgpKSk7ICAvLy9cbiAgfVxuXG4gIHVubW91bnQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgICAgXTtcblxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LndpbGxVbm1vdW50ICYmIGVsZW1lbnQud2lsbFVubW91bnQoKSkpOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gQkxPQ0spIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKERJU1BMQVksIE5PTkUpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoRElTUExBWSwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoRElTQUJMRUQpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoRElTQUJMRUQsIERJU0FCTEVEKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShESVNBQkxFRCk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLmNzcyhESVNQTEFZKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gTk9ORSk7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gIGlzU2hvd2luZygpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgc2hvd2luZyA9IGRpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgaGlkZGVuID0gIWRpc3BsYXllZDtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG4gIH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZmlyc3RDb21wdXRlZFN0eWxlID0gZmlyc3RbY29tcHV0ZWRTdHlsZV0sXG4gICAgICAgICAgICAgIG5hbWUgPSBmaXJzdENvbXB1dGVkU3R5bGUsICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gU1RSSU5HKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IENsYXNzLFxuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSwgLy8vXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBbXTsgLy8vXG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc3RhdGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHNjcm9sbE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDtcblxuZnVuY3Rpb24gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBudWxsLFxuICAgICAgICBlbGVtZW50ID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCBudWxsLCBzZWxlY3RvciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gZWxlbWVudDsgLy8vXG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShERUZBVUxUX1BST1BFUlRJRVMpKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBjb21iaW5lKGRlZmF1bHRQcm9wZXJ0aWVzLCBDbGFzc1tERUZBVUxUX1BST1BFUlRJRVNdKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShJR05PUkVEX1BST1BFUlRJRVMpKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzc1tJR05PUkVEX1BST1BFUlRJRVNdLCAoaWdub3JlZFByb3BlcnR5KSA9PiAhaWdub3JlZFByb3BlcnRpZXMuaW5jbHVkZXMoaWdub3JlZFByb3BlcnR5KSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucmlnaHQgLSB0aGlzLmxlZnQpO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLmJvdHRvbSAtIHRoaXMudG9wKTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxuXG4gIHNldExlZnQobGVmdCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBzZXRSaWdodChyaWdodCkge1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b20pIHtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIHNoaWZ0KGhvcml6b250YWxPZmZzZXQsIHZlcnRpY2FsT2Zmc2V0KSB7XG4gICAgdGhpcy50b3AgKz0gdmVydGljYWxPZmZzZXQ7XG4gICAgdGhpcy5sZWZ0ICs9IGhvcml6b250YWxPZmZzZXQ7XG4gICAgdGhpcy5yaWdodCArPSBob3Jpem9udGFsT2Zmc2V0O1xuICAgIHRoaXMuYm90dG9tICs9IHZlcnRpY2FsT2Zmc2V0O1xuICB9XG5cbiAgaXNPdmVybGFwcGluZ01vdXNlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDw9IG1vdXNlVG9wKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDw9IG1vdXNlTGVmdClcbiAgICAgICAgICAgJiYgKHRoaXMucmlnaHQgPiBtb3VzZUxlZnQpXG4gICAgICAgICAgICYmICh0aGlzLmJvdHRvbSA+IG1vdXNlVG9wKSAgKTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBib3VuZHMuYm90dG9tKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDwgYm91bmRzLnJpZ2h0KVxuICAgICAgICAgICAmJiAodGhpcy5yaWdodCA+IGJvdW5kcy5sZWZ0KVxuICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiBib3VuZHMudG9wKSAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCwgLy8vXG4gICAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCwgIC8vL1xuICAgICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICByaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5yaWdodCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgYm90dG9tID0gYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbSArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCByaWdodCwgYm90dG9tKTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFbGVtZW50Iiwic2VsZWN0b3IiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX19lbGVtZW50X18iLCJnZXRET01FbGVtZW50IiwiZ2V0T2Zmc2V0IiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXQiLCJPZmZzZXQiLCJnZXRCb3VuZHMiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZHMiLCJCb3VuZHMiLCJmcm9tQm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0V2lkdGgiLCJpbmNsdWRlQm9yZGVyIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwic2V0V2lkdGgiLCJzdHlsZSIsIldJRFRIIiwiZ2V0SGVpZ2h0IiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiSEVJR0hUIiwiaGFzQXR0cmlidXRlIiwibmFtZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInZhbHVlIiwiY2xlYXJBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGRBdHRyaWJ1dGUiLCJzZXRDbGFzcyIsImNsYXNzTmFtZSIsImFkZENsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmUiLCJ0b2dnbGVDbGFzcyIsInRvZ2dsZSIsImhhc0NsYXNzIiwiY29udGFpbnMiLCJjbGVhckNsYXNzZXMiLCJFTVBUWV9TVFJJTkciLCJwcmVwZW5kVG8iLCJwYXJlbnRFbGVtZW50IiwicHJlcGVuZCIsImFwcGVuZFRvIiwiYXBwZW5kIiwiYWRkVG8iLCJyZW1vdmVGcm9tIiwiaW5zZXJ0QmVmb3JlIiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QWZ0ZXIiLCJuZXh0U2libGluZyIsImVsZW1lbnQiLCJmaXJzdENoaWxkRE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsIm1vdW50IiwiZGVzY2VuZGFudEVsZW1lbnRzIiwiZ2V0RGVzY2VuZGFudEVsZW1lbnRzIiwiZWxlbWVudHMiLCJyZXZlcnNlIiwiZm9yRWFjaCIsImRpZE1vdW50IiwidW5tb3VudCIsIndpbGxVbm1vdW50Iiwic2hvdyIsImRpc3BsYXlTdHlsZSIsIkJMT0NLIiwiZGlzcGxheSIsImhpZGUiLCJESVNQTEFZIiwiTk9ORSIsImVuYWJsZSIsIkRJU0FCTEVEIiwiZGlzYWJsZSIsImlzRW5hYmxlZCIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImVuYWJsZWQiLCJpc0Rpc3BsYXllZCIsImNzcyIsImRpc3BsYXllZCIsImlzU2hvd2luZyIsInNob3dpbmciLCJpc0hpZGRlbiIsImhpZGRlbiIsInVuZGVmaW5lZCIsImh0bWwiLCJpbm5lckhUTUwiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImluZGV4IiwibGVuZ3RoIiwiZmlyc3RDb21wdXRlZFN0eWxlIiwiZmlyc3QiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiU1RSSU5HIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiYmx1ciIsImZvY3VzIiwiaGFzRm9jdXMiLCJhY3RpdmVFbGVtZW50IiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidGFnTmFtZSIsImVsZW1lbnRGcm9tVGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiYXBwbHlQcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsImZyb21UYWdOYW1lIiwiYXNzaWduIiwicHJvdG90eXBlIiwianN4TWl4aW5zIiwia2V5TWl4aW5zIiwiY2xpY2tNaXhpbnMiLCJzdGF0ZU1peGlucyIsImV2ZW50TWl4aW5zIiwibW91c2VNaXhpbnMiLCJyZXNpemVNaXhpbnMiLCJzY3JvbGxNaXhpbnMiLCJlbGVtZW50TWl4aW5zIiwiRnVuY3Rpb24iLCJiaW5kIiwiY2FsbCIsImlzU1ZHVGFnTmFtZSIsImNyZWF0ZUVsZW1lbnROUyIsIlNWR19OQU1FU1BBQ0VfVVJJIiwiY3JlYXRlRWxlbWVudCIsImhhc093blByb3BlcnR5IiwiREVGQVVMVF9QUk9QRVJUSUVTIiwiY29tYmluZSIsInN1cGVyQ2xhc3MiLCJnZXRQcm90b3R5cGVPZiIsIklHTk9SRURfUFJPUEVSVElFUyIsImF1Z21lbnQiLCJpZ25vcmVkUHJvcGVydHkiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVNLElBQUEsT0FBVSxrQ0FBVixVQUFV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