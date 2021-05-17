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
var _array = require("./utilities/array");
var _object = require("./utilities/object");
var _name = require("./utilities/name");
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
                this.style("width", width);
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
                this.style("height", height);
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
                this.domElement.className = "";
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
                var displayStyle = param === void 0 ? "block" : param;
                this.display(displayStyle);
            }
        },
        {
            key: "hide",
            value: function hide() {
                this.style("display", "none");
            }
        },
        {
            key: "display",
            value: function display(display1) {
                this.style("display", display1);
            }
        },
        {
            key: "enable",
            value: function enable() {
                this.clearAttribute("disabled");
            }
        },
        {
            key: "disable",
            value: function disable() {
                this.setAttribute("disabled", "disabled");
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
                var disabled = this.hasAttribute("disabled");
                return disabled;
            }
        },
        {
            key: "isDisplayed",
            value: function isDisplayed() {
                var display = this.css("display"), displayed = display !== "none";
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
                        var name = computedStyle[0], value = computedStyle.getPropertyValue(name); ///
                        css2[name] = value;
                    }
                    return css2;
                } else if (typeof css1 === "string") {
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
        },
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
    if (Class.hasOwnProperty("defaultProperties")) {
        (0, _object).combine(defaultProperties, Class.defaultProperties);
    }
    var superClass = Object.getPrototypeOf(Class);
    if (superClass !== null) {
        defaultPropertiesFromClass(superClass, defaultProperties);
    }
    return defaultProperties;
}
function ignoredPropertiesFromClass(Class, param) {
    var ignoredProperties = param === void 0 ? [] : param;
    if (Class.hasOwnProperty("ignoredProperties")) {
        (0, _array).augment(ignoredProperties, Class.ignoredProperties, function(ignoredProperty) {
            return !ignoredProperties.includes(ignoredProperty);
        });
    }
    var superClass = Object.getPrototypeOf(Class);
    if (superClass !== null) {
        ignoredPropertiesFromClass(superClass, ignoredProperties);
    }
    return ignoredProperties;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL21pc2NlbGxhbmVvdXMvb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvYm91bmRzXCI7XG5pbXBvcnQganN4TWl4aW5zIGZyb20gXCIuL21peGlucy9qc3hcIjtcbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHN0YXRlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IHJlc2l6ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvcmVzaXplXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgU1ZHX05BTUVTUEFDRV9VUkkgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gICAgfVxuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoXCJ3aWR0aFwiLCB3aWR0aCk7XG4gIH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBcIlwiOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VudChlbGVtZW50KSB7XG4gICAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICBdO1xuXG4gICAgZWxlbWVudHMucmV2ZXJzZSgpOyAvLy9cblxuICAgIHRoaXMuYWRkKGVsZW1lbnQpO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuZGlkTW91bnQgJiYgZWxlbWVudC5kaWRNb3VudCgpKSk7ICAvLy9cbiAgfVxuXG4gIHVubW91bnQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgICAgXTtcblxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LndpbGxVbm1vdW50ICYmIGVsZW1lbnQud2lsbFVubW91bnQoKSkpOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gXCJibG9ja1wiKSB7IHRoaXMuZGlzcGxheShkaXNwbGF5U3R5bGUpOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoXCJkaXNwbGF5XCIsIGRpc3BsYXkpOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7IH1cblxuICBpc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBlbmFibGVkID0gIWRpc2FibGVkO1xuXG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuICBcbiAgaXNEaXNwbGF5ZWQoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMuY3NzKFwiZGlzcGxheVwiKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gXCJub25lXCIpO1xuICAgIFxuICAgIHJldHVybiBkaXNwbGF5ZWQ7XG4gIH1cblxuICBpc1Nob3dpbmcoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIHNob3dpbmcgPSBkaXNwbGF5ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzaG93aW5nO1xuICB9XG5cbiAgaXNIaWRkZW4oKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIGhpZGRlbiA9ICFkaXNwbGF5ZWQ7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgc3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdO1xuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wdXRlZFN0eWxlWzBdLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgYmx1cigpIHsgdGhpcy5kb21FbGVtZW50LmJsdXIoKTsgfVxuXG4gIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBDbGFzcyA9IEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30sIC8vL1xuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107IC8vL1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuaW5pdGlhbGlzZSAmJiBlbGVtZW50LmluaXRpYWxpc2UoKTsgLy8vXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuXG5mdW5jdGlvbiBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBzZWxlY3RvciA9IG51bGwsXG4gICAgICAgIGVsZW1lbnQgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoQ2xhc3MsIG51bGwsIHNlbGVjdG9yLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFX1VSSSwgdGFnTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSBlbGVtZW50OyAvLy9cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFByb3BlcnRpZXNcIikpIHtcbiAgICBjb21iaW5lKGRlZmF1bHRQcm9wZXJ0aWVzLCBDbGFzcy5kZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KFwiaWdub3JlZFByb3BlcnRpZXNcIikpIHtcbiAgICBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzcy5pZ25vcmVkUHJvcGVydGllcywgKGlnbm9yZWRQcm9wZXJ0eSkgPT4gIWlnbm9yZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGlnbm9yZWRQcm9wZXJ0eSkpO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBpZ25vcmVkUHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gaWdub3JlZFByb3BlcnRpZXM7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFTyxPQUF3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