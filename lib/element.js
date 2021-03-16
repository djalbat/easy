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
var Element1 = function() {
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
    element.domElement = _name.isSVGTagName(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
    element.domElement.__element__ = element; ///
    return element;
}
function defaultPropertiesFromClass(Class, param) {
    var defaultProperties = param === void 0 ? {
    } : param;
    if (Class.hasOwnProperty("defaultProperties")) {
        _object.combine(defaultProperties, Class.defaultProperties);
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
        _array.augment(ignoredProperties, Class.ignoredProperties, function(ignoredProperty) {
            return !ignoredProperties.includes(ignoredProperty);
        });
    }
    var superClass = Object.getPrototypeOf(Class);
    if (superClass !== null) {
        ignoredPropertiesFromClass(superClass, ignoredProperties);
    }
    return ignoredProperties;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL21pc2NlbGxhbmVvdXMvb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvYm91bmRzXCI7XG5pbXBvcnQganN4TWl4aW5zIGZyb20gXCIuL21peGlucy9qc3hcIjtcbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHN0YXRlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IHJlc2l6ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvcmVzaXplXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgU1ZHX05BTUVTUEFDRV9VUkkgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gICAgfVxuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoXCJ3aWR0aFwiLCB3aWR0aCk7XG4gIH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBcIlwiOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VudChlbGVtZW50KSB7XG4gICAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICBdO1xuXG4gICAgZWxlbWVudHMucmV2ZXJzZSgpOyAvLy9cblxuICAgIHRoaXMuYWRkKGVsZW1lbnQpO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuZGlkTW91bnQgJiYgZWxlbWVudC5kaWRNb3VudCgpKSk7ICAvLy9cbiAgfVxuXG4gIHVubW91bnQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgICAgXTtcblxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LndpbGxVbm1vdW50ICYmIGVsZW1lbnQud2lsbFVubW91bnQoKSkpOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gXCJibG9ja1wiKSB7IHRoaXMuZGlzcGxheShkaXNwbGF5U3R5bGUpOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoXCJkaXNwbGF5XCIsIGRpc3BsYXkpOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7IH1cblxuICBpc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBlbmFibGVkID0gIWRpc2FibGVkO1xuXG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuICBcbiAgaXNEaXNwbGF5ZWQoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMuY3NzKFwiZGlzcGxheVwiKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gXCJub25lXCIpO1xuICAgIFxuICAgIHJldHVybiBkaXNwbGF5ZWQ7XG4gIH1cblxuICBpc1Nob3dpbmcoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIHNob3dpbmcgPSBkaXNwbGF5ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzaG93aW5nO1xuICB9XG5cbiAgaXNIaWRkZW4oKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIGhpZGRlbiA9ICFkaXNwbGF5ZWQ7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgc3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdO1xuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wdXRlZFN0eWxlWzBdLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgYmx1cigpIHsgdGhpcy5kb21FbGVtZW50LmJsdXIoKTsgfVxuXG4gIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBDbGFzcyA9IEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30sIC8vL1xuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107IC8vL1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB0YWdOYW1lIH0gPSBDbGFzcyxcbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpLFxuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpO1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc3RhdGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHNjcm9sbE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDtcblxuZnVuY3Rpb24gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBudWxsLFxuICAgICAgICBlbGVtZW50ID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCBudWxsLCBzZWxlY3RvciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gZWxlbWVudDsgLy8vXG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRQcm9wZXJ0aWVzXCIpKSB7XG4gICAgY29tYmluZShkZWZhdWx0UHJvcGVydGllcywgQ2xhc3MuZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShcImlnbm9yZWRQcm9wZXJ0aWVzXCIpKSB7XG4gICAgYXVnbWVudChpZ25vcmVkUHJvcGVydGllcywgQ2xhc3MuaWdub3JlZFByb3BlcnRpZXMsIChpZ25vcmVkUHJvcGVydHkpID0+ICFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsT0FBQTtJQUNBLE9BQUE7SUFDQSxJQUFBO0lBQ0EsSUFBQTtJQUNBLE1BQUE7SUFDQSxNQUFBO0lBQ0EsTUFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFFQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLEtBQUE7SUFDQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUErU0EsS0FBQTtJQTdTQSxRQUFBO2FBQUEsUUFBQSxDQUNBLFFBQUE7OEJBREEsUUFBQTtZQUVBLFFBQUE7aUJBQ0EsVUFBQSxHQUFBLFFBQUEsQ0FBQSxhQUFBLENBQUEsUUFBQTtpQkFFQSxVQUFBLENBQUEsV0FBQSxRQUFBLENBQUEsRUFBQSxDQUFBOzs7aUJBTEEsUUFBQTs7QUFTQSxlQUFBLEdBQUEsYUFBQTs0QkFBQSxhQUFBOzRCQUNBLFVBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsU0FBQTs0QkFBQSxTQUFBO29CQUNBLEdBQUEsUUFBQSxVQUFBLENBQUEsU0FBQSxFQUNBLElBQUEsUUFBQSxVQUFBLENBQUEsVUFBQSxFQUNBLE1BQUEsT0FqQ0EsT0FBQSxTQWlDQSxHQUFBLEVBQUEsSUFBQTt1QkFFQSxNQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFNBQUE7NEJBQUEsU0FBQTtvQkFDQSxrQkFBQSxRQUFBLFVBQUEsQ0FBQSxxQkFBQSxJQUNBLE1BQUEsR0F2Q0EsT0FBQSxTQXVDQSxzQkFBQSxDQUFBLGtCQUFBO3VCQUVBLE1BQUE7Ozs7QUFHQSxlQUFBLEdBQUEsUUFBQTs0QkFBQSxRQUFBLENBQUEsS0FBQTtvQkFBQSxhQUFBLEdBQUEsS0FBQSxjQUFBLElBQUEsR0FBQSxLQUFBO29CQUNBLEtBQUEsR0FBQSxhQUFBLFFBQ0EsVUFBQSxDQUFBLFdBQUEsUUFDQSxVQUFBLENBQUEsV0FBQTt1QkFFQSxLQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFFBQUE7NEJBQUEsUUFBQSxDQUFBLEtBQUE7QUFDQSxxQkFBQSxNQUFBLE1BQUEsQ0FBQSxLQUFBLEdBQUEsRUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBO3FCQUVBLEtBQUEsRUFBQSxLQUFBLEdBQUEsS0FBQTs7OztBQUdBLGVBQUEsR0FBQSxTQUFBOzRCQUFBLFNBQUEsQ0FBQSxLQUFBO29CQUFBLGFBQUEsR0FBQSxLQUFBLGNBQUEsSUFBQSxHQUFBLEtBQUE7b0JBQ0EsTUFBQSxHQUFBLGFBQUEsUUFDQSxVQUFBLENBQUEsWUFBQSxRQUNBLFVBQUEsQ0FBQSxZQUFBO3VCQUVBLE1BQUE7Ozs7QUFHQSxlQUFBLEdBQUEsU0FBQTs0QkFBQSxTQUFBLENBQUEsTUFBQTtBQUNBLHNCQUFBLE1BQUEsTUFBQSxDQUFBLE1BQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUE7cUJBRUEsS0FBQSxFQUFBLE1BQUEsR0FBQSxNQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFlBQUE7NEJBQUEsWUFBQSxDQUFBLElBQUE7NEJBQUEsVUFBQSxDQUFBLFlBQUEsQ0FBQSxJQUFBOzs7O0FBRUEsZUFBQSxHQUFBLFlBQUE7NEJBQUEsWUFBQSxDQUFBLElBQUE7NEJBQUEsVUFBQSxDQUFBLFlBQUEsQ0FBQSxJQUFBOzs7O0FBRUEsZUFBQSxHQUFBLFlBQUE7NEJBQUEsWUFBQSxDQUFBLElBQUEsRUFBQSxLQUFBO3FCQUFBLFVBQUEsQ0FBQSxZQUFBLENBQUEsSUFBQSxFQUFBLEtBQUE7Ozs7QUFFQSxlQUFBLEdBQUEsY0FBQTs0QkFBQSxjQUFBLENBQUEsSUFBQTtxQkFBQSxVQUFBLENBQUEsZUFBQSxDQUFBLElBQUE7Ozs7QUFFQSxlQUFBLEdBQUEsWUFBQTs0QkFBQSxZQUFBLENBQUEsSUFBQSxFQUFBLEtBQUE7cUJBQUEsWUFBQSxDQUFBLElBQUEsRUFBQSxLQUFBOzs7O0FBRUEsZUFBQSxHQUFBLGVBQUE7NEJBQUEsZUFBQSxDQUFBLElBQUE7cUJBQUEsY0FBQSxDQUFBLElBQUE7Ozs7QUFFQSxlQUFBLEdBQUEsUUFBQTs0QkFBQSxRQUFBLENBQUEsU0FBQTtxQkFBQSxVQUFBLENBQUEsU0FBQSxHQUFBLFNBQUE7Ozs7QUFFQSxlQUFBLEdBQUEsUUFBQTs0QkFBQSxRQUFBLENBQUEsU0FBQTtxQkFBQSxVQUFBLENBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxTQUFBOzs7O0FBRUEsZUFBQSxHQUFBLFdBQUE7NEJBQUEsV0FBQSxDQUFBLFNBQUE7cUJBQUEsVUFBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsU0FBQTs7OztBQUVBLGVBQUEsR0FBQSxXQUFBOzRCQUFBLFdBQUEsQ0FBQSxTQUFBO3FCQUFBLFVBQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxDQUFBLFNBQUE7Ozs7QUFFQSxlQUFBLEdBQUEsUUFBQTs0QkFBQSxRQUFBLENBQUEsU0FBQTs0QkFBQSxVQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsQ0FBQSxTQUFBOzs7O0FBRUEsZUFBQSxHQUFBLFlBQUE7NEJBQUEsWUFBQTtxQkFBQSxVQUFBLENBQUEsU0FBQTs7OztBQUVBLGVBQUEsR0FBQSxTQUFBOzRCQUFBLFNBQUEsQ0FBQSxhQUFBO0FBQUEsNkJBQUEsQ0FBQSxPQUFBOzs7O0FBRUEsZUFBQSxHQUFBLFFBQUE7NEJBQUEsUUFBQSxDQUFBLGFBQUE7QUFBQSw2QkFBQSxDQUFBLE1BQUE7Ozs7QUFFQSxlQUFBLEdBQUEsS0FBQTs0QkFBQSxLQUFBLENBQUEsYUFBQTtBQUFBLDZCQUFBLENBQUEsR0FBQTs7OztBQUVBLGVBQUEsR0FBQSxVQUFBOzRCQUFBLFVBQUEsQ0FBQSxhQUFBO0FBQUEsNkJBQUEsQ0FBQSxNQUFBOzs7O0FBRUEsZUFBQSxHQUFBLFlBQUE7NEJBQUEsWUFBQSxDQUFBLGNBQUE7b0JBQ0EsYUFBQSxHQUFBLGNBQUEsQ0FBQSxVQUFBLENBQUEsVUFBQSxFQUNBLGlCQUFBLEdBQUEsY0FBQSxDQUFBLFVBQUE7QUFFQSw2QkFBQSxDQUFBLFlBQUEsTUFBQSxVQUFBLEVBQUEsaUJBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsV0FBQTs0QkFBQSxXQUFBLENBQUEsY0FBQTtvQkFDQSxhQUFBLEdBQUEsY0FBQSxDQUFBLFVBQUEsQ0FBQSxVQUFBLEVBQ0EsaUJBQUEsR0FBQSxjQUFBLENBQUEsVUFBQTtBQUVBLDZCQUFBLENBQUEsWUFBQSxNQUFBLFVBQUEsRUFBQSxpQkFBQSxDQUFBLFdBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQTs7OztBQUdBLGVBQUEsR0FBQSxPQUFBOzRCQUFBLE9BQUEsQ0FBQSxPQUFBO29CQUNBLFVBQUEsR0FBQSxPQUFBLENBQUEsVUFBQSxFQUNBLG9CQUFBLFFBQUEsVUFBQSxDQUFBLFVBQUE7cUJBRUEsVUFBQSxDQUFBLFlBQUEsQ0FBQSxVQUFBLEVBQUEsb0JBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsTUFBQTs0QkFBQSxNQUFBLENBQUEsT0FBQTtvQkFDQSxVQUFBLEdBQUEsT0FBQSxDQUFBLFVBQUE7cUJBRUEsVUFBQSxDQUFBLFlBQUEsQ0FBQSxVQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxDQUFBOzs7O0FBR0EsZUFBQSxHQUFBLEdBQUE7NEJBQUEsR0FBQSxDQUFBLE9BQUE7cUJBQUEsTUFBQSxDQUFBLE9BQUE7Ozs7QUFFQSxlQUFBLEdBQUEsTUFBQTs0QkFBQSxNQUFBLENBQUEsT0FBQTtvQkFDQSxPQUFBO3dCQUNBLFVBQUEsR0FBQSxPQUFBLENBQUEsVUFBQTt5QkFFQSxVQUFBLENBQUEsV0FBQSxDQUFBLFVBQUE7O3lCQUVBLFVBQUEsQ0FBQSxNQUFBOzs7OztBQUlBLGVBQUEsR0FBQSxLQUFBOzRCQUFBLEtBQUEsQ0FBQSxPQUFBO29CQUNBLGtCQUFBLEdBQUEsT0FBQSxDQUFBLHFCQUFBLElBQ0EsUUFBQTtBQUNBLDJCQUFBO2tCQURBLE1BR0Esb0JBREEsa0JBQUE7QUFHQSx3QkFBQSxDQUFBLE9BQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQTtxQkFFQSxHQUFBLENBQUEsT0FBQTtBQUVBLHdCQUFBLENBQUEsT0FBQSxVQUFBLFFBQUE7MkJBQUEsUUFBQSxDQUFBLFFBQUEsSUFBQSxRQUFBLENBQUEsUUFBQTttQkFBQSxDQUFBLEVBQUEsQ0FBQTs7OztBQUdBLGVBQUEsR0FBQSxPQUFBOzRCQUFBLE9BQUEsQ0FBQSxPQUFBO29CQUNBLGtCQUFBLEdBQUEsT0FBQSxDQUFBLHFCQUFBLElBQ0EsUUFBQTtBQUNBLDJCQUFBO2tCQURBLE1BR0Esb0JBREEsa0JBQUE7QUFHQSx3QkFBQSxDQUFBLE9BQUEsVUFBQSxRQUFBOzJCQUFBLFFBQUEsQ0FBQSxXQUFBLElBQUEsUUFBQSxDQUFBLFdBQUE7bUJBQUEsQ0FBQSxFQUFBLENBQUE7cUJBRUEsTUFBQSxDQUFBLE9BQUE7Ozs7QUFHQSxlQUFBLEdBQUEsSUFBQTs0QkFBQSxJQUFBLENBQUEsS0FBQTtvQkFBQSxZQUFBLEdBQUEsS0FBQSxlQUFBLEtBQUEsSUFBQSxLQUFBO3FCQUFBLE9BQUEsQ0FBQSxZQUFBOzs7O0FBRUEsZUFBQSxHQUFBLElBQUE7NEJBQUEsSUFBQTtxQkFBQSxLQUFBLEVBQUEsT0FBQSxJQUFBLElBQUE7Ozs7QUFFQSxlQUFBLEdBQUEsT0FBQTs0QkFBQSxPQUFBLENBQUEsUUFBQTtxQkFBQSxLQUFBLEVBQUEsT0FBQSxHQUFBLFFBQUE7Ozs7QUFFQSxlQUFBLEdBQUEsTUFBQTs0QkFBQSxNQUFBO3FCQUFBLGNBQUEsRUFBQSxRQUFBOzs7O0FBRUEsZUFBQSxHQUFBLE9BQUE7NEJBQUEsT0FBQTtxQkFBQSxZQUFBLEVBQUEsUUFBQSxJQUFBLFFBQUE7Ozs7QUFFQSxlQUFBLEdBQUEsU0FBQTs0QkFBQSxTQUFBO29CQUNBLFFBQUEsUUFBQSxVQUFBLElBQ0EsT0FBQSxJQUFBLFFBQUE7dUJBRUEsT0FBQTs7OztBQUdBLGVBQUEsR0FBQSxVQUFBOzRCQUFBLFVBQUE7b0JBQ0EsUUFBQSxRQUFBLFlBQUEsRUFBQSxRQUFBO3VCQUVBLFFBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsV0FBQTs0QkFBQSxXQUFBO29CQUNBLE9BQUEsUUFBQSxHQUFBLEVBQUEsT0FBQSxJQUNBLFNBQUEsR0FBQSxPQUFBLE1BQUEsSUFBQTt1QkFFQSxTQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFNBQUE7NEJBQUEsU0FBQTtvQkFDQSxTQUFBLFFBQUEsV0FBQSxJQUNBLE9BQUEsR0FBQSxTQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7dUJBRUEsT0FBQTs7OztBQUdBLGVBQUEsR0FBQSxRQUFBOzRCQUFBLFFBQUE7b0JBQ0EsU0FBQSxRQUFBLFdBQUEsSUFDQSxNQUFBLElBQUEsU0FBQTt1QkFFQSxNQUFBOzs7O0FBR0EsZUFBQSxHQUFBLEtBQUE7NEJBQUEsS0FBQSxDQUFBLElBQUEsRUFBQSxLQUFBO29CQUNBLEtBQUEsS0FBQSxTQUFBO3lCQUNBLFVBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxJQUFBLEtBQUE7O3dCQUVBLE1BQUEsUUFBQSxVQUFBLENBQUEsS0FBQSxDQUFBLElBQUE7MkJBRUEsTUFBQTs7Ozs7QUFJQSxlQUFBLEdBQUEsSUFBQTs0QkFBQSxJQUFBLENBQUEsS0FBQTtvQkFDQSxLQUFBLEtBQUEsU0FBQTt3QkFDQSxTQUFBLFFBQUEsVUFBQSxDQUFBLFNBQUE7QUFFQSx5QkFBQSxHQUFBLFNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTsyQkFFQSxLQUFBOzt3QkFFQSxTQUFBLEdBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO3lCQUVBLFVBQUEsQ0FBQSxTQUFBLEdBQUEsU0FBQTs7Ozs7QUFJQSxlQUFBLEdBQUEsR0FBQTs0QkFBQSxHQUFBLENBQUEsSUFBQTtvQkFDQSxJQUFBLEtBQUEsU0FBQTt3QkFDQSxhQUFBLEdBQUEsZ0JBQUEsTUFBQSxVQUFBLEdBQ0EsSUFBQTs7NEJBRUEsS0FBQSxHQUFBLENBQUEsRUFBQSxLQUFBLEdBQUEsYUFBQSxDQUFBLE1BQUEsRUFBQSxLQUFBOzRCQUNBLElBQUEsR0FBQSxhQUFBLENBQUEsQ0FBQSxHQUNBLEtBQUEsR0FBQSxhQUFBLENBQUEsZ0JBQUEsQ0FBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUE7QUFFQSw0QkFBQSxDQUFBLElBQUEsSUFBQSxLQUFBOzsyQkFHQSxJQUFBO2tDQUNBLElBQUEsTUFBQSxNQUFBO3dCQUNBLElBQUEsR0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7d0JBRUEsYUFBQSxHQUFBLGdCQUFBLE1BQUEsVUFBQSxHQUNBLEtBQUEsR0FBQSxhQUFBLENBQUEsZ0JBQUEsQ0FBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUE7QUFFQSx3QkFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTsyQkFFQSxJQUFBOzt3QkFFQSxLQUFBLEdBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUE7QUFFQSx5QkFBQSxDQUFBLE9BQUEsV0FBQSxJQUFBOzRCQUNBLEtBQUEsR0FBQSxJQUFBLENBQUEsSUFBQTs2QkFFQSxLQUFBLENBQUEsSUFBQSxFQUFBLEtBQUE7Ozs7OztBQUtBLGVBQUEsR0FBQSxJQUFBOzRCQUFBLElBQUE7cUJBQUEsVUFBQSxDQUFBLElBQUE7Ozs7QUFFQSxlQUFBLEdBQUEsS0FBQTs0QkFBQSxLQUFBO3FCQUFBLFVBQUEsQ0FBQSxLQUFBOzs7O0FBRUEsZUFBQSxHQUFBLFFBQUE7NEJBQUEsUUFBQTtvQkFDQSxLQUFBLEdBQUEsUUFBQSxDQUFBLGFBQUEsVUFBQSxVQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7dUJBRUEsS0FBQTs7Ozs7QUFHQSxlQUFBLEdBQUEsV0FBQTs0QkFBQSxXQUFBLENBQUEsT0FBQSxFQUFBLFVBQUE7d0JBQUEsSUFBQSxHQUFBLFNBQUEsQ0FBQSxNQUFBLEVBQUEsa0JBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsS0FBQSxHQUFBLElBQUEsRUFBQSxLQUFBO0FBQUEsc0NBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxLQUFBOztvQkFDQSxLQUFBLEdBQUEsUUFBQSxFQUNBLE9BQUEsR0FBQSxrQkFBQSxDQUFBLEtBQUEsTUFBQSxDQUFBO0FBQUEseUJBQUE7QUFBQSwyQkFBQTtrQkFBQSxNQUFBLG9CQUFBLGtCQUFBLEtBQ0EsaUJBQUE7bUJBQ0EsaUJBQUEsTUFBQSxDQUFBLEVBQUEsQ0FBQTtBQUVBLHVCQUFBLENBQUEsZUFBQSxDQUFBLFVBQUEsRUFBQSxpQkFBQSxFQUFBLGlCQUFBO3VCQUVBLE9BQUE7Ozs7QUFHQSxlQUFBLEdBQUEsU0FBQTs0QkFBQSxTQUFBLENBQUEsS0FBQSxFQUFBLFVBQUE7d0JBQUEsSUFBQSxHQUFBLFNBQUEsQ0FBQSxNQUFBLEVBQUEsa0JBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLEtBQUEsR0FBQSxDQUFBLEVBQUEsS0FBQSxHQUFBLElBQUEsRUFBQSxLQUFBO0FBQUEsc0NBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxLQUFBOztvQkFDQSxPQUFBLEdBQUEsS0FBQSxDQUFBLE9BQUEsRUFDQSxPQUFBLEdBQUEsa0JBQUEsQ0FBQSxLQUFBLE1BQUEsQ0FBQTtBQUFBLHlCQUFBO0FBQUEsMkJBQUE7a0JBQUEsTUFBQSxvQkFBQSxrQkFBQSxLQUNBLGlCQUFBLEdBQUEsMEJBQUEsQ0FBQSxLQUFBLEdBQ0EsaUJBQUEsR0FBQSwwQkFBQSxDQUFBLEtBQUE7QUFFQSx1QkFBQSxDQUFBLGVBQUEsQ0FBQSxVQUFBLEVBQUEsaUJBQUEsRUFBQSxpQkFBQTt1QkFFQSxPQUFBOzs7O1dBM1JBLFFBQUE7O0FBK1JBLE1BQUEsQ0FBQSxNQUFBLENBQUEsUUFBQSxDQUFBLFNBQUEsRUE5U0EsSUFBQTtBQStTQSxNQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxTQUFBLEVBOVNBLElBQUE7QUErU0EsTUFBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsU0FBQSxFQTlTQSxNQUFBO0FBK1NBLE1BQUEsQ0FBQSxNQUFBLENBQUEsUUFBQSxDQUFBLFNBQUEsRUE5U0EsTUFBQTtBQStTQSxNQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxTQUFBLEVBOVNBLE1BQUE7QUErU0EsTUFBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsU0FBQSxFQTlTQSxNQUFBO0FBK1NBLE1BQUEsQ0FBQSxNQUFBLENBQUEsUUFBQSxDQUFBLFNBQUEsRUE5U0EsT0FBQTtBQStTQSxNQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxTQUFBLEVBOVNBLE9BQUE7QUErU0EsTUFBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsU0FBQSxFQTlTQSxRQUFBO2VBZ1RBLFFBQUE7O1NBRUEsa0JBQUEsQ0FBQSxLQUFBLEVBQUEsT0FBQTtZQUFBLElBQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLGtCQUFBLGFBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxLQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxJQUFBLEVBQUEsS0FBQTtBQUFBLDBCQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsS0FBQTs7UUFDQSxRQUFBLEdBQUEsSUFBQSxFQUNBLE9BQUEsU0FBQSxLQUFBLEdBQUEsUUFBQSxDQUFBLFNBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBO0FBQUEsYUFBQTtBQUFBLFlBQUE7QUFBQSxnQkFBQTtNQUFBLE1BQUEsb0JBQUEsa0JBQUE7QUFFQSxXQUFBLENBQUEsVUFBQSxHQWxUQSxLQUFBLGNBa1RBLE9BQUEsSUFDQSxRQUFBLENBQUEsZUFBQSxDQWxUQSxVQUFBLG9CQWtUQSxPQUFBLElBQ0EsUUFBQSxDQUFBLGFBQUEsQ0FBQSxPQUFBO0FBRUEsV0FBQSxDQUFBLFVBQUEsQ0FBQSxXQUFBLEdBQUEsT0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO1dBRUEsT0FBQTs7U0FHQSwwQkFBQSxDQUFBLEtBQUEsRUFBQSxLQUFBO1FBQUEsaUJBQUEsR0FBQSxLQUFBO1FBQUEsS0FBQTtRQUNBLEtBQUEsQ0FBQSxjQUFBLEVBQUEsaUJBQUE7QUE3VEEsZUFBQSxTQThUQSxpQkFBQSxFQUFBLEtBQUEsQ0FBQSxpQkFBQTs7UUFHQSxVQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxLQUFBO1FBRUEsVUFBQSxLQUFBLElBQUE7QUFDQSxrQ0FBQSxDQUFBLFVBQUEsRUFBQSxpQkFBQTs7V0FHQSxpQkFBQTs7U0FHQSwwQkFBQSxDQUFBLEtBQUEsRUFBQSxLQUFBO1FBQUEsaUJBQUEsR0FBQSxLQUFBLG1CQUFBLEtBQUE7UUFDQSxLQUFBLENBQUEsY0FBQSxFQUFBLGlCQUFBO0FBNVVBLGNBQUEsU0E2VUEsaUJBQUEsRUFBQSxLQUFBLENBQUEsaUJBQUEsV0FBQSxlQUFBO29CQUFBLGlCQUFBLENBQUEsUUFBQSxDQUFBLGVBQUE7OztRQUdBLFVBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLEtBQUE7UUFFQSxVQUFBLEtBQUEsSUFBQTtBQUNBLGtDQUFBLENBQUEsVUFBQSxFQUFBLGlCQUFBOztXQUdBLGlCQUFBIn0=