"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Element;
    }
});
var _offset = /*#__PURE__*/ _interop_require_default(require("./offset"));
var _bounds = /*#__PURE__*/ _interop_require_default(require("./bounds"));
var _jsx = /*#__PURE__*/ _interop_require_default(require("./mixins/jsx"));
var _key = /*#__PURE__*/ _interop_require_default(require("./mixins/key"));
var _state = /*#__PURE__*/ _interop_require_default(require("./mixins/state"));
var _event = /*#__PURE__*/ _interop_require_default(require("./mixins/event"));
var _mouse = /*#__PURE__*/ _interop_require_default(require("./mixins/mouse"));
var _click = /*#__PURE__*/ _interop_require_default(require("./mixins/click"));
var _touch = /*#__PURE__*/ _interop_require_default(require("./mixins/touch"));
var _scroll = /*#__PURE__*/ _interop_require_default(require("./mixins/scroll"));
var _resize = /*#__PURE__*/ _interop_require_default(require("./mixins/resize"));
var _element = /*#__PURE__*/ _interop_require_default(require("./mixins/element"));
var _fullScreen = /*#__PURE__*/ _interop_require_default(require("./mixins/fullScreen"));
var _customEvent = /*#__PURE__*/ _interop_require_default(require("./mixins/customEvent"));
var _array = require("./utilities/array");
var _object = require("./utilities/object");
var _name = require("./utilities/name");
var _element1 = require("./utilities/element");
var _constants = require("./constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var Element = /*#__PURE__*/ function() {
    function Element(selector) {
        _class_call_check(this, Element);
        if (selector !== null) {
            var element = this, domElement = document.querySelector(selector);
            (0, _element1.constructElement)(element, domElement);
        }
    }
    _create_class(Element, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return this.domElement;
            }
        },
        {
            key: "getOffset",
            value: function getOffset() {
                var offset = _offset.default.fromDOMElement(this.domElement);
                return offset;
            }
        },
        {
            key: "getBounds",
            value: function getBounds() {
                var bounds = _bounds.default.fromDOMElement(this.domElement);
                return bounds;
            }
        },
        {
            key: "getWidth",
            value: function getWidth() {
                return this.domElement.offsetWidth;
            } ///
        },
        {
            key: "getHeight",
            value: function getHeight() {
                return this.domElement.offsetHeight;
            } ///
        },
        {
            key: "getInnerWidth",
            value: function getInnerWidth() {
                return this.domElement.clientWidth;
            } ///
        },
        {
            key: "getInnerHeight",
            value: function getInnerHeight() {
                return this.domElement.clientHeight;
            } ///
        },
        {
            key: "setWidth",
            value: function setWidth(width) {
                width = "".concat(width, "px"); ///
                this.style(_constants.WIDTH, width);
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
            key: "hasClass",
            value: function hasClass(className) {
                return this.domElement.classList.contains(className);
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
            key: "removeAllClasses",
            value: function removeAllClasses() {
                this.domElement.className = _constants.EMPTY_STRING;
            }
        },
        {
            key: "addTo",
            value: function addTo(parentElement) {
                parentElement.add(this);
            }
        },
        {
            key: "appendTo",
            value: function appendTo(parentElement) {
                parentElement.append(this);
            }
        },
        {
            key: "prependTo",
            value: function prependTo(parentElement) {
                parentElement.prepend(this);
            }
        },
        {
            key: "removeFrom",
            value: function removeFrom(parentElement) {
                parentElement.remove(this);
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
                    element.remove();
                    return;
                }
                this.domElement.remove();
            }
        },
        {
            key: "prepend",
            value: function prepend(element) {
                var domElement = element.domElement, referenceDOMElement = this.domElement.firstChild; ///
                this.domElement.insertBefore(domElement, referenceDOMElement);
            }
        },
        {
            key: "append",
            value: function append(element) {
                var domElement = element.domElement, referenceDOMElement = null; ///
                this.domElement.insertBefore(domElement, referenceDOMElement);
            }
        },
        {
            key: "insertBefore",
            value: function insertBefore(siblingElement) {
                var parentDOMNode = siblingElement.domElement.parentNode, referenceDOMElement = siblingElement.domElement; ///
                parentDOMNode.insertBefore(this.domElement, referenceDOMElement);
            }
        },
        {
            key: "insertAfter",
            value: function insertAfter(siblingElement) {
                var parentDOMNode = siblingElement.domElement.parentNode, referenceDOMElement = siblingElement.domElement.nextSibling; ///
                parentDOMNode.insertBefore(this.domElement, referenceDOMElement);
            }
        },
        {
            key: "mount",
            value: function mount(element) {
                this.add(element);
                (0, _element1.mountElement)(element);
            }
        },
        {
            key: "unmount",
            value: function unmount(element) {
                (0, _element1.unmountElement)(element);
                this.remove(element);
            }
        },
        {
            key: "mountBefore",
            value: function mountBefore(siblingElement) {
                this.insertBefore(siblingElement);
                var element = this; ///
                (0, _element1.mountElement)(element);
            }
        },
        {
            key: "mountAfter",
            value: function mountAfter(siblingElement) {
                this.insertAfter(siblingElement);
                var element = this; ///
                (0, _element1.mountElement)(element);
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
            value: function style(name) {
                var value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (value !== null) {
                    this.domElement.style[name] = value;
                    return;
                }
                var style = this.domElement.style[name];
                return style;
            }
        },
        {
            key: "html",
            value: function html() {
                var html = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                if (html !== null) {
                    var innerHTML = html; ///
                    this.domElement.innerHTML = innerHTML;
                    return;
                }
                var innerHTML1 = this.domElement.innerHTML;
                html = innerHTML1; ///
                return html;
            }
        },
        {
            key: "css",
            value: function css() {
                var _this = this;
                var css = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                if (css === null) {
                    css = {};
                    var computedStyles = getComputedStyle(this.domElement); ///
                    for(var index = 0; index < computedStyles.length; index++){
                        var computedStyle = computedStyles[index], name = computedStyle, value = computedStyles.getPropertyValue(name); ///
                        css[name] = value;
                    }
                } else if ((typeof css === "undefined" ? "undefined" : _type_of(css)) === _constants.STRING) {
                    var name1 = css; ///
                    var computedStyles1 = getComputedStyle(this.domElement), value1 = computedStyles1.getPropertyValue(name1); ///
                    css = value1; ///
                } else {
                    var names = Object.keys(css); ///
                    names.forEach(function(name) {
                        var value = css[name];
                        _this.style(name, value);
                    });
                }
                return css;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var element = this; ///
                (0, _element1.destroyElement)(element);
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
                ].concat(_to_consumable_array(remainingArguments))), defaultProperties = defaultPropertiesFromClass(Class), ignoredProperties = ignoredPropertiesFromClass(Class);
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
                ].concat(_to_consumable_array(remainingArguments))), defaultProperties = {}, ignoredProperties = []; ///
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
Object.assign(Element.prototype, _mouse.default);
Object.assign(Element.prototype, _click.default);
Object.assign(Element.prototype, _state.default);
Object.assign(Element.prototype, _event.default);
Object.assign(Element.prototype, _touch.default);
Object.assign(Element.prototype, _scroll.default);
Object.assign(Element.prototype, _resize.default);
Object.assign(Element.prototype, _element.default);
Object.assign(Element.prototype, _fullScreen.default);
Object.assign(Element.prototype, _customEvent.default);
function elementFromTagName(Class, tagName) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        remainingArguments[_key - 2] = arguments[_key];
    }
    var _Function_prototype_bind;
    var selector = null, element = new ((_Function_prototype_bind = Function.prototype.bind).call.apply(_Function_prototype_bind, [
        Class,
        null,
        selector
    ].concat(_to_consumable_array(remainingArguments)))), domElement = (0, _name.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
    (0, _element1.constructElement)(element, domElement);
    return element;
}
function defaultPropertiesFromClass(Class) {
    var defaultProperties = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Class.hasOwnProperty(_constants.DEFAULT_PROPERTIES)) {
        defaultProperties = (0, _object.combine)(defaultProperties, Class[_constants.DEFAULT_PROPERTIES]);
    }
    var superClass = Object.getPrototypeOf(Class); ///
    if (superClass !== null) {
        defaultProperties = defaultPropertiesFromClass(superClass, defaultProperties);
    }
    return defaultProperties;
}
function ignoredPropertiesFromClass(Class) {
    var ignoredProperties = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    if (Class.hasOwnProperty(_constants.IGNORED_PROPERTIES)) {
        ignoredProperties = (0, _array.augment)(ignoredProperties, Class[_constants.IGNORED_PROPERTIES], function(ignoredProperty) {
            if (!ignoredProperties.includes(ignoredProperty)) {
                return true;
            }
        });
    }
    var superClass = Object.getPrototypeOf(Class);
    if (superClass !== null) {
        ignoredProperties = ignoredPropertiesFromClass(superClass, ignoredProperties);
    }
    return ignoredProperties;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgdG91Y2hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RvdWNoXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCByZXNpemVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Jlc2l6ZVwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcbmltcG9ydCBmdWxsU2NyZWVuTWl4aW5zIGZyb20gXCIuL21peGlucy9mdWxsU2NyZWVuXCI7XG5pbXBvcnQgY3VzdG9tRXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2N1c3RvbUV2ZW50XCI7XG5cbmltcG9ydCB7IGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgY29uc3RydWN0RWxlbWVudCwgZGVzdHJveUVsZW1lbnQsIG1vdW50RWxlbWVudCwgdW5tb3VudEVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgTk9ORSxcbiAgICAgICAgIEJMT0NLLFxuICAgICAgICAgV0lEVEgsXG4gICAgICAgICBTVFJJTkcsXG4gICAgICAgICBIRUlHSFQsXG4gICAgICAgICBESVNQTEFZLFxuICAgICAgICAgRElTQUJMRUQsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBTVkdfTkFNRVNQQUNFX1VSSSxcbiAgICAgICAgIERFRkFVTFRfUFJPUEVSVElFUyxcbiAgICAgICAgIElHTk9SRURfUFJPUEVSVElFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPXRoaXMsICAvLy9cbiAgICAgICAgICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgY29uc3RydWN0RWxlbWVudChlbGVtZW50LCBkb21FbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gT2Zmc2V0LmZyb21ET01FbGVtZW50KHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kcyA9IEJvdW5kcy5mcm9tRE9NRWxlbWVudCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoOyB9ICAvLy9cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0OyB9ICAvLy9cblxuICBnZXRJbm5lcldpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9IC8vL1xuXG4gIGdldElubmVySGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfSAvLy9cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoV0lEVEgsIHdpZHRoKTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoSEVJR0hULCBoZWlnaHQpO1xuICB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUFsbENsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICByZWZlcmVuY2VET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgcmVmZXJlbmNlRE9NRWxlbWVudCA9IG51bGw7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZURPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5uZXh0U2libGluZzsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KGVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZChlbGVtZW50KTtcblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHVubW91bnQoZWxlbWVudCkge1xuICAgIHVubW91bnRFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gIH1cblxuICBtb3VudEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICB0aGlzLmluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gQkxPQ0spIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKERJU1BMQVksIE5PTkUpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoRElTUExBWSwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoRElTQUJMRUQpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoRElTQUJMRUQsIERJU0FCTEVEKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShESVNBQkxFRCk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLmNzcyhESVNQTEFZKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gTk9ORSk7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gIGlzU2hvd2luZygpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgc2hvd2luZyA9IGRpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgaGlkZGVuID0gIWRpc3BsYXllZDtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdHlsZShuYW1lLCB2YWx1ZSA9IG51bGwpIHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBodG1sKGh0bWwgPSBudWxsKSB7XG4gICAgaWYgKGh0bWwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNzcyhjc3MgPSBudWxsKSB7XG4gICAgaWYgKGNzcyA9PT0gbnVsbCkge1xuICAgICAgY3NzID0ge307XG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpOyAvLy9cblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gY29tcHV0ZWRTdHlsZXNbaW5kZXhdLFxuICAgICAgICAgICAgICBuYW1lID0gY29tcHV0ZWRTdHlsZSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGVzLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gU1RSSU5HKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLCAvLy9cbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBkZXN0cm95RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjdXN0b21FdmVudE1peGlucyk7XG5cbmZ1bmN0aW9uIGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IHNlbGVjdG9yID0gbnVsbCxcbiAgICAgICAgZWxlbWVudCA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChDbGFzcywgbnVsbCwgc2VsZWN0b3IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykpLFxuICAgICAgICBkb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0VfVVJJLCB0YWdOYW1lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBjb25zdHJ1Y3RFbGVtZW50KGVsZW1lbnQsIGRvbUVsZW1lbnQpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoREVGQVVMVF9QUk9QRVJUSUVTKSkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gY29tYmluZShkZWZhdWx0UHJvcGVydGllcywgQ2xhc3NbREVGQVVMVF9QUk9QRVJUSUVTXSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTsgIC8vL1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShJR05PUkVEX1BST1BFUlRJRVMpKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzc1tJR05PUkVEX1BST1BFUlRJRVNdLCAoaWdub3JlZFByb3BlcnR5KSA9PiB7XG4gICAgICBpZiAoIWlnbm9yZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGlnbm9yZWRQcm9wZXJ0eSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJzZWxlY3RvciIsImVsZW1lbnQiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uc3RydWN0RWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJnZXRPZmZzZXQiLCJvZmZzZXQiLCJPZmZzZXQiLCJmcm9tRE9NRWxlbWVudCIsImdldEJvdW5kcyIsImJvdW5kcyIsIkJvdW5kcyIsImdldFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJnZXRJbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJnZXRJbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInNldFdpZHRoIiwid2lkdGgiLCJzdHlsZSIsIldJRFRIIiwic2V0SGVpZ2h0IiwiaGVpZ2h0IiwiSEVJR0hUIiwiaGFzQXR0cmlidXRlIiwibmFtZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInZhbHVlIiwiY2xlYXJBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGRBdHRyaWJ1dGUiLCJoYXNDbGFzcyIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic2V0Q2xhc3MiLCJhZGRDbGFzcyIsImFkZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJyZW1vdmVBbGxDbGFzc2VzIiwiRU1QVFlfU1RSSU5HIiwiYWRkVG8iLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kVG8iLCJhcHBlbmQiLCJwcmVwZW5kVG8iLCJwcmVwZW5kIiwicmVtb3ZlRnJvbSIsImluc2VydCIsInJlZmVyZW5jZURPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsImluc2VydEFmdGVyIiwibmV4dFNpYmxpbmciLCJtb3VudCIsIm1vdW50RWxlbWVudCIsInVubW91bnQiLCJ1bm1vdW50RWxlbWVudCIsIm1vdW50QmVmb3JlIiwibW91bnRBZnRlciIsInNob3ciLCJkaXNwbGF5U3R5bGUiLCJCTE9DSyIsImRpc3BsYXkiLCJoaWRlIiwiRElTUExBWSIsIk5PTkUiLCJlbmFibGUiLCJESVNBQkxFRCIsImRpc2FibGUiLCJpc0VuYWJsZWQiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJlbmFibGVkIiwiaXNEaXNwbGF5ZWQiLCJjc3MiLCJkaXNwbGF5ZWQiLCJpc1Nob3dpbmciLCJzaG93aW5nIiwiaXNIaWRkZW4iLCJoaWRkZW4iLCJodG1sIiwiaW5uZXJIVE1MIiwiY29tcHV0ZWRTdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJjb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIlNUUklORyIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJkZXN0cm95IiwiZGVzdHJveUVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ0YWdOYW1lIiwiZWxlbWVudEZyb21UYWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJhcHBseVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiZnJvbVRhZ05hbWUiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJqc3hNaXhpbnMiLCJrZXlNaXhpbnMiLCJtb3VzZU1peGlucyIsImNsaWNrTWl4aW5zIiwic3RhdGVNaXhpbnMiLCJldmVudE1peGlucyIsInRvdWNoTWl4aW5zIiwic2Nyb2xsTWl4aW5zIiwicmVzaXplTWl4aW5zIiwiZWxlbWVudE1peGlucyIsImZ1bGxTY3JlZW5NaXhpbnMiLCJjdXN0b21FdmVudE1peGlucyIsIkZ1bmN0aW9uIiwiYmluZCIsImNhbGwiLCJpc1NWR1RhZ05hbWUiLCJjcmVhdGVFbGVtZW50TlMiLCJTVkdfTkFNRVNQQUNFX1VSSSIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsIkRFRkFVTFRfUFJPUEVSVElFUyIsImNvbWJpbmUiLCJzdXBlckNsYXNzIiwiZ2V0UHJvdG90eXBlT2YiLCJJR05PUkVEX1BST1BFUlRJRVMiLCJhdWdtZW50IiwiaWdub3JlZFByb3BlcnR5IiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBaUNxQkE7Ozs2REEvQkY7NkRBQ0E7MERBQ0c7MERBQ0E7NERBQ0U7NERBQ0E7NERBQ0E7NERBQ0E7NERBQ0E7NkRBQ0M7NkRBQ0E7OERBQ0M7aUVBQ0c7a0VBQ0M7cUJBRU47c0JBQ0E7b0JBQ0s7d0JBQ2tEO3lCQVc1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQUEsQUFBTUEsd0JBQU47YUFBTUEsUUFDUEMsUUFBUTtnQ0FEREQ7UUFFakIsSUFBSUMsYUFBYSxNQUFNO1lBQ3JCLElBQU1DLFVBQVMsSUFBSSxFQUNiQyxhQUFhQyxTQUFTQyxhQUFhLENBQUNKO1lBRTFDSyxJQUFBQSwwQkFBZ0IsRUFBQ0osU0FBU0M7UUFDNUI7O2tCQVBpQkg7O1lBVW5CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBU0MsZUFBTSxDQUFDQyxjQUFjLENBQUMsSUFBSSxDQUFDUixVQUFVO2dCQUVwRCxPQUFPTTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVNDLGVBQU0s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