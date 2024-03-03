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
var _offset = /*#__PURE__*/ _interop_require_default(require("./offset"));
var _bounds = /*#__PURE__*/ _interop_require_default(require("./bounds"));
var _jsx = /*#__PURE__*/ _interop_require_default(require("./mixins/jsx"));
var _key = /*#__PURE__*/ _interop_require_default(require("./mixins/key"));
var _click = /*#__PURE__*/ _interop_require_default(require("./mixins/click"));
var _state = /*#__PURE__*/ _interop_require_default(require("./mixins/state"));
var _event = /*#__PURE__*/ _interop_require_default(require("./mixins/event"));
var _mouse = /*#__PURE__*/ _interop_require_default(require("./mixins/mouse"));
var _resize = /*#__PURE__*/ _interop_require_default(require("./mixins/resize"));
var _scroll = /*#__PURE__*/ _interop_require_default(require("./mixins/scroll"));
var _element = /*#__PURE__*/ _interop_require_default(require("./mixins/element"));
var _customEvent = /*#__PURE__*/ _interop_require_default(require("./mixins/customEvent"));
var _object = require("./utilities/object");
var _name = require("./utilities/name");
var _array = require("./utilities/array");
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
        if (selector) {
            this.domElement = document.querySelector(selector);
            this.domElement.__element__ = this; ///
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
                var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement; ///
                parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
            }
        },
        {
            key: "insertAfter",
            value: function insertAfter(siblingElement) {
                var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement; ///
                parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
            }
        },
        {
            key: "prepend",
            value: function prepend(element) {
                var domElement = element.domElement, firstChildDOMElement = this.domElement.firstChild; ///
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
                    var domElement = element.domElement;
                    this.domElement.removeChild(domElement);
                } else {
                    this.domElement.remove();
                }
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
                this.insertBefore(siblingElement);
                var element = this; ///
                (0, _element1.mountElement)(element);
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
                    var computedStyle = getComputedStyle(this.domElement), css1 = {};
                    for(var index = 0; index < computedStyle.length; index++){
                        var firstComputedStyle = _array.first[computedStyle], name = firstComputedStyle, value = computedStyle.getPropertyValue(name); ///
                        css1[name] = value;
                    }
                    return css1;
                }
                if ((typeof css === "undefined" ? "undefined" : _type_of(css)) === _constants.STRING) {
                    var name1 = css; ///
                    var computedStyle1 = getComputedStyle(this.domElement), value1 = computedStyle1.getPropertyValue(name1); ///
                    css = value1; ///
                    return css;
                }
                var names = Object.keys(css); ///
                names.forEach(function(name) {
                    var value = css[name];
                    _this.style(name, value);
                });
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
Object.assign(Element.prototype, _click.default);
Object.assign(Element.prototype, _state.default);
Object.assign(Element.prototype, _event.default);
Object.assign(Element.prototype, _mouse.default);
Object.assign(Element.prototype, _resize.default);
Object.assign(Element.prototype, _scroll.default);
Object.assign(Element.prototype, _element.default);
Object.assign(Element.prototype, _customEvent.default);
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
    ].concat(_to_consumable_array(remainingArguments))));
    element.domElement = (0, _name.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
    element.domElement.__element__ = element; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgcmVzaXplTWl4aW5zIGZyb20gXCIuL21peGlucy9yZXNpemVcIjtcbmltcG9ydCBzY3JvbGxNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Njcm9sbFwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcbmltcG9ydCBjdXN0b21FdmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvY3VzdG9tRXZlbnRcIjtcblxuaW1wb3J0IHsgY29tYmluZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBmaXJzdCwgYXVnbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbW91bnRFbGVtZW50LCB1bm1vdW50RWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBOT05FLFxuICAgICAgICAgQkxPQ0ssXG4gICAgICAgICBXSURUSCxcbiAgICAgICAgIFNUUklORyxcbiAgICAgICAgIEhFSUdIVCxcbiAgICAgICAgIERJU1BMQVksXG4gICAgICAgICBESVNBQkxFRCxcbiAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgIFNWR19OQU1FU1BBQ0VfVVJJLFxuICAgICAgICAgREVGQVVMVF9QUk9QRVJUSUVTLFxuICAgICAgICAgSUdOT1JFRF9QUk9QRVJUSUVTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHdpZHRoID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFdJRFRILCB3aWR0aCk7XG4gIH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoSEVJR0hULCBoZWlnaHQpO1xuICB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IEVNUFRZX1NUUklORzsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkOyAgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgaW5zZXJ0KGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdW50QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgdGhpcy5pbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgbW91bnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KGVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZChlbGVtZW50KTtcblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHVubW91bnQoZWxlbWVudCkge1xuICAgIHVubW91bnRFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gIH1cblxuICBzaG93KGRpc3BsYXlTdHlsZSA9IEJMT0NLKSB7IHRoaXMuZGlzcGxheShkaXNwbGF5U3R5bGUpOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5zdHlsZShESVNQTEFZLCBOT05FKTsgfVxuXG4gIGRpc3BsYXkoZGlzcGxheSkgeyB0aGlzLnN0eWxlKERJU1BMQVksIGRpc3BsYXkpOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKERJU0FCTEVEKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKERJU0FCTEVELCBESVNBQkxFRCk7IH1cblxuICBpc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBlbmFibGVkID0gIWRpc2FibGVkO1xuXG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNBdHRyaWJ1dGUoRElTQUJMRUQpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG4gIFxuICBpc0Rpc3BsYXllZCgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5jc3MoRElTUExBWSksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09IE5PTkUpO1xuICAgIFxuICAgIHJldHVybiBkaXNwbGF5ZWQ7XG4gIH1cblxuICBpc1Nob3dpbmcoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIHNob3dpbmcgPSBkaXNwbGF5ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzaG93aW5nO1xuICB9XG5cbiAgaXNIaWRkZW4oKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIGhpZGRlbiA9ICFkaXNwbGF5ZWQ7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgc3R5bGUobmFtZSwgdmFsdWUgPSBudWxsKSB7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdO1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgaHRtbChodG1sID0gbnVsbCkge1xuICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjc3MoY3NzID0gbnVsbCkge1xuICAgIGlmIChjc3MgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q29tcHV0ZWRTdHlsZSA9IGZpcnN0W2NvbXB1dGVkU3R5bGVdLFxuICAgICAgICAgICAgICBuYW1lID0gZmlyc3RDb21wdXRlZFN0eWxlLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNzcyA9PT0gU1RSSU5HKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY3NzW25hbWVdO1xuXG4gICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgYmx1cigpIHsgdGhpcy5kb21FbGVtZW50LmJsdXIoKTsgfVxuXG4gIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY3VzdG9tRXZlbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuXG5mdW5jdGlvbiBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBzZWxlY3RvciA9IG51bGwsXG4gICAgICAgIGVsZW1lbnQgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoQ2xhc3MsIG51bGwsIHNlbGVjdG9yLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFX1VSSSwgdGFnTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSBlbGVtZW50OyAvLy9cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KERFRkFVTFRfUFJPUEVSVElFUykpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzW0RFRkFVTFRfUFJPUEVSVElFU10pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7ICAvLy9cblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRQcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgaWdub3JlZFByb3BlcnRpZXMgPSBbXSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoSUdOT1JFRF9QUk9QRVJUSUVTKSkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gYXVnbWVudChpZ25vcmVkUHJvcGVydGllcywgQ2xhc3NbSUdOT1JFRF9QUk9QRVJUSUVTXSwgKGlnbm9yZWRQcm9wZXJ0eSkgPT4ge1xuICAgICAgaWYgKCFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBpZ25vcmVkUHJvcGVydGllcztcbn1cbiJdLCJuYW1lcyI6WyJFbGVtZW50Iiwic2VsZWN0b3IiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX19lbGVtZW50X18iLCJnZXRET01FbGVtZW50IiwiZ2V0T2Zmc2V0IiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXQiLCJPZmZzZXQiLCJnZXRCb3VuZHMiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZHMiLCJCb3VuZHMiLCJmcm9tQm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0V2lkdGgiLCJpbmNsdWRlQm9yZGVyIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwic2V0V2lkdGgiLCJzdHlsZSIsIldJRFRIIiwiZ2V0SGVpZ2h0IiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiSEVJR0hUIiwiaGFzQXR0cmlidXRlIiwibmFtZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInZhbHVlIiwiY2xlYXJBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGRBdHRyaWJ1dGUiLCJzZXRDbGFzcyIsImNsYXNzTmFtZSIsImFkZENsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmUiLCJ0b2dnbGVDbGFzcyIsInRvZ2dsZSIsImhhc0NsYXNzIiwiY29udGFpbnMiLCJjbGVhckNsYXNzZXMiLCJFTVBUWV9TVFJJTkciLCJwcmVwZW5kVG8iLCJwYXJlbnRFbGVtZW50IiwicHJlcGVuZCIsImFwcGVuZFRvIiwiYXBwZW5kIiwiYWRkVG8iLCJyZW1vdmVGcm9tIiwiaW5zZXJ0QmVmb3JlIiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QWZ0ZXIiLCJuZXh0U2libGluZyIsImVsZW1lbnQiLCJmaXJzdENoaWxkRE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJpbnNlcnQiLCJyZW1vdmVDaGlsZCIsIm1vdW50QmVmb3JlIiwibW91bnRFbGVtZW50IiwibW91bnRBZnRlciIsIm1vdW50IiwidW5tb3VudCIsInVubW91bnRFbGVtZW50Iiwic2hvdyIsImRpc3BsYXlTdHlsZSIsIkJMT0NLIiwiZGlzcGxheSIsImhpZGUiLCJESVNQTEFZIiwiTk9ORSIsImVuYWJsZSIsIkRJU0FCTEVEIiwiZGlzYWJsZSIsImlzRW5hYmxlZCIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImVuYWJsZWQiLCJpc0Rpc3BsYXllZCIsImNzcyIsImRpc3BsYXllZCIsImlzU2hvd2luZyIsInNob3dpbmciLCJpc0hpZGRlbiIsImhpZGRlbiIsImh0bWwiLCJpbm5lckhUTUwiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImluZGV4IiwibGVuZ3RoIiwiZmlyc3RDb21wdXRlZFN0eWxlIiwiZmlyc3QiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiU1RSSU5HIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImJsdXIiLCJmb2N1cyIsImhhc0ZvY3VzIiwiYWN0aXZlRWxlbWVudCIsImZyb21DbGFzcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInRhZ05hbWUiLCJlbGVtZW50RnJvbVRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyIsImFwcGx5UHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJmcm9tVGFnTmFtZSIsImFzc2lnbiIsInByb3RvdHlwZSIsImpzeE1peGlucyIsImtleU1peGlucyIsImNsaWNrTWl4aW5zIiwic3RhdGVNaXhpbnMiLCJldmVudE1peGlucyIsIm1vdXNlTWl4aW5zIiwicmVzaXplTWl4aW5zIiwic2Nyb2xsTWl4aW5zIiwiZWxlbWVudE1peGlucyIsImN1c3RvbUV2ZW50TWl4aW5zIiwiRnVuY3Rpb24iLCJiaW5kIiwiY2FsbCIsImlzU1ZHVGFnTmFtZSIsImNyZWF0ZUVsZW1lbnROUyIsIlNWR19OQU1FU1BBQ0VfVVJJIiwiY3JlYXRlRWxlbWVudCIsImhhc093blByb3BlcnR5IiwiREVGQVVMVF9QUk9QRVJUSUVTIiwiY29tYmluZSIsInN1cGVyQ2xhc3MiLCJnZXRQcm90b3R5cGVPZiIsIklHTk9SRURfUFJPUEVSVElFUyIsImF1Z21lbnQiLCJpZ25vcmVkUHJvcGVydHkiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd1ZBOzs7ZUFBQTs7OzZEQXRWbUI7NkRBQ0E7MERBQ0c7MERBQ0E7NERBQ0U7NERBQ0E7NERBQ0E7NERBQ0E7NkRBQ0M7NkRBQ0E7OERBQ0M7a0VBQ0k7c0JBRU47b0JBQ0s7cUJBQ0U7d0JBQ2M7eUJBV1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFBLEFBQU1BLHdCQUFELEFBQUw7YUFBTUEsUUFDUUMsUUFBUTtnQ0FEaEJEO1FBRUYsSUFBSUMsVUFBVTtZQUNaLElBQUksQ0FBQ0MsVUFB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