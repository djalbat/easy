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
var _object = require("./utilities/object");
var _name = require("./utilities/name");
var _array = require("./utilities/array");
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
                mountElement(element);
            }
        },
        {
            key: "mountAfter",
            value: function mountAfter(siblingElement) {
                this.insertBefore(siblingElement);
                var element = this; ///
                mountElement(element);
            }
        },
        {
            key: "mount",
            value: function mount(element) {
                this.add(element);
                mountElement(element);
            }
        },
        {
            key: "unmount",
            value: function unmount(element) {
                unmountElement(element);
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
                var css = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                var _this = this;
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
var _default = Element;
function mountElement(element) {
    var descendantElements = element.getDescendantElements(), elements = [
        element
    ].concat(_to_consumable_array(descendantElements));
    elements.reverse(); ///
    elements.forEach(function(element) {
        element.didMount && element.didMount();
    });
}
function unmountElement(element) {
    var descendantElements = element.getDescendantElements(), elements = [
        element
    ].concat(_to_consumable_array(descendantElements));
    elements.forEach(function(element) {
        element.willUnmount && element.willUnmount();
    });
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgcmVzaXplTWl4aW5zIGZyb20gXCIuL21peGlucy9yZXNpemVcIjtcbmltcG9ydCBzY3JvbGxNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Njcm9sbFwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tYmluZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBmaXJzdCwgYXVnbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgTk9ORSxcbiAgICAgICAgIEJMT0NLLFxuICAgICAgICAgV0lEVEgsXG4gICAgICAgICBTVFJJTkcsXG4gICAgICAgICBIRUlHSFQsXG4gICAgICAgICBESVNQTEFZLFxuICAgICAgICAgRElTQUJMRUQsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBTVkdfTkFNRVNQQUNFX1VSSSxcbiAgICAgICAgIERFRkFVTFRfUFJPUEVSVElFUyxcbiAgICAgICAgIElHTk9SRURfUFJPUEVSVElFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgICB9XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShXSURUSCwgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKEhFSUdIVCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBpbnNlcnQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgbW91bnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBtb3VudEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgdGhpcy5pbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgbW91bnQoZWxlbWVudCkge1xuICAgIHRoaXMuYWRkKGVsZW1lbnQpO1xuXG4gICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgdW5tb3VudChlbGVtZW50KSB7XG4gICAgdW5tb3VudEVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gQkxPQ0spIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKERJU1BMQVksIE5PTkUpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoRElTUExBWSwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoRElTQUJMRUQpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoRElTQUJMRUQsIERJU0FCTEVEKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShESVNBQkxFRCk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLmNzcyhESVNQTEFZKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gTk9ORSk7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gIGlzU2hvd2luZygpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgc2hvd2luZyA9IGRpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgaGlkZGVuID0gIWRpc3BsYXllZDtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdHlsZShuYW1lLCB2YWx1ZSA9IG51bGwpIHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBodG1sKGh0bWwgPSBudWxsKSB7XG4gICAgaWYgKGh0bWwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNzcyhjc3MgPSBudWxsKSB7XG4gICAgaWYgKGNzcyA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZmlyc3RDb21wdXRlZFN0eWxlID0gZmlyc3RbY29tcHV0ZWRTdHlsZV0sXG4gICAgICAgICAgICAgIG5hbWUgPSBmaXJzdENvbXB1dGVkU3R5bGUsICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3NzID09PSBTVFJJTkcpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKGNzcyk7IC8vL1xuXG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgIHRoaXMuc3R5bGUobmFtZSwgdmFsdWUpO1xuICAgIH0pO1xuICB9XG4gIFxuICBibHVyKCkgeyB0aGlzLmRvbUVsZW1lbnQuYmx1cigpOyB9XG5cbiAgZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzO1xuICB9XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB0YWdOYW1lIH0gPSBDbGFzcyxcbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpLFxuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpO1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuaW5pdGlhbGlzZSAmJiBlbGVtZW50LmluaXRpYWxpc2UoKTsgLy8vXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBDbGFzcyA9IEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30sIC8vL1xuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107IC8vL1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuaW5pdGlhbGlzZSAmJiBlbGVtZW50LmluaXRpYWxpc2UoKTsgLy8vXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBqc3hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHN0YXRlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHJlc2l6ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIG1vdW50RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgIF07XG5cbiAgZWxlbWVudHMucmV2ZXJzZSgpOyAvLy9cblxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5kaWRNb3VudCAmJiBlbGVtZW50LmRpZE1vdW50KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1bm1vdW50RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgIF07XG5cbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQud2lsbFVubW91bnQgJiYgZWxlbWVudC53aWxsVW5tb3VudCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBudWxsLFxuICAgICAgICBlbGVtZW50ID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCBudWxsLCBzZWxlY3RvciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gZWxlbWVudDsgLy8vXG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShERUZBVUxUX1BST1BFUlRJRVMpKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBjb21iaW5lKGRlZmF1bHRQcm9wZXJ0aWVzLCBDbGFzc1tERUZBVUxUX1BST1BFUlRJRVNdKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShJR05PUkVEX1BST1BFUlRJRVMpKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzc1tJR05PUkVEX1BST1BFUlRJRVNdLCAoaWdub3JlZFByb3BlcnR5KSA9PiB7XG4gICAgICBpZiAoIWlnbm9yZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGlnbm9yZWRQcm9wZXJ0eSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfX2VsZW1lbnRfXyIsImdldERPTUVsZW1lbnQiLCJnZXRPZmZzZXQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsIk9mZnNldCIsImdldEJvdW5kcyIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kcyIsIkJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRXaWR0aCIsImluY2x1ZGVCb3JkZXIiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJzZXRXaWR0aCIsInN0eWxlIiwiV0lEVEgiLCJnZXRIZWlnaHQiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzZXRIZWlnaHQiLCJIRUlHSFQiLCJoYXNBdHRyaWJ1dGUiLCJuYW1lIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwidmFsdWUiLCJjbGVhckF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImFkZEF0dHJpYnV0ZSIsInNldENsYXNzIiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlIiwiaGFzQ2xhc3MiLCJjb250YWlucyIsImNsZWFyQ2xhc3NlcyIsIkVNUFRZX1NUUklORyIsInByZXBlbmRUbyIsInBhcmVudEVsZW1lbnQiLCJwcmVwZW5kIiwiYXBwZW5kVG8iLCJhcHBlbmQiLCJhZGRUbyIsInJlbW92ZUZyb20iLCJpbnNlcnRCZWZvcmUiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRBZnRlciIsIm5leHRTaWJsaW5nIiwiZWxlbWVudCIsImZpcnN0Q2hpbGRET01FbGVtZW50IiwiZmlyc3RDaGlsZCIsImluc2VydCIsInJlbW92ZUNoaWxkIiwibW91bnRCZWZvcmUiLCJtb3VudEVsZW1lbnQiLCJtb3VudEFmdGVyIiwibW91bnQiLCJ1bm1vdW50IiwidW5tb3VudEVsZW1lbnQiLCJzaG93IiwiZGlzcGxheVN0eWxlIiwiQkxPQ0siLCJkaXNwbGF5IiwiaGlkZSIsIkRJU1BMQVkiLCJOT05FIiwiZW5hYmxlIiwiRElTQUJMRUQiLCJkaXNhYmxlIiwiaXNFbmFibGVkIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwiZW5hYmxlZCIsImlzRGlzcGxheWVkIiwiY3NzIiwiZGlzcGxheWVkIiwiaXNTaG93aW5nIiwic2hvd2luZyIsImlzSGlkZGVuIiwiaGlkZGVuIiwiaHRtbCIsImlubmVySFRNTCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJmaXJzdENvbXB1dGVkU3R5bGUiLCJmaXJzdCIsImdldFByb3BlcnR5VmFsdWUiLCJTVFJJTkciLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiYmx1ciIsImZvY3VzIiwiaGFzRm9jdXMiLCJhY3RpdmVFbGVtZW50IiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidGFnTmFtZSIsImVsZW1lbnRGcm9tVGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiYXBwbHlQcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsImZyb21UYWdOYW1lIiwiYXNzaWduIiwicHJvdG90eXBlIiwianN4TWl4aW5zIiwia2V5TWl4aW5zIiwiY2xpY2tNaXhpbnMiLCJzdGF0ZU1peGlucyIsImV2ZW50TWl4aW5zIiwibW91c2VNaXhpbnMiLCJyZXNpemVNaXhpbnMiLCJzY3JvbGxNaXhpbnMiLCJlbGVtZW50TWl4aW5zIiwiZGVzY2VuZGFudEVsZW1lbnRzIiwiZ2V0RGVzY2VuZGFudEVsZW1lbnRzIiwiZWxlbWVudHMiLCJyZXZlcnNlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsIkZ1bmN0aW9uIiwiYmluZCIsImNhbGwiLCJpc1NWR1RhZ05hbWUiLCJjcmVhdGVFbGVtZW50TlMiLCJTVkdfTkFNRVNQQUNFX1VSSSIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsIkRFRkFVTFRfUFJPUEVSVElFUyIsImNvbWJpbmUiLCJzdXBlckNsYXNzIiwiZ2V0UHJvdG90eXBlT2YiLCJJR05PUkVEX1BST1BFUlRJRVMiLCJhdWdtZW50IiwiaWdub3JlZFByb3BlcnR5IiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFWQTs7O2VBQUE7Ozs2REFuVm1COzZEQUNBOzBEQUNHOzBEQUNBOzREQUNFOzREQUNBOzREQUNBOzREQUNBOzZEQUNDOzZEQUNBOzhEQUNDO3NCQUVGO29CQUNLO3FCQUNFO3lCQVdJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBQSxBQUFNQSx3QkFBRCxBQUFMO2FBQU1BLFFBQ1FDLFFBQVE7Z0NBRGhCRDtRQUVGLElBQUlDLFVBQVU7WUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0MsU0FBU0MsYUFBYSxDQUFDSDtZQUV6QyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0csV0FBVyxHQUFHLElBQUksRUFBRSxHQUFHO1FBQ3pDOztrQkFORUw7O1lBU0pNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osVUFBVTtZQUN4Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxNQUFNLElBQUksQ0FBQ04sVUFBVSxDQUFDTyxTQUFTLEVBQy9CQyxPQUFPLElBQUksQ0FBQ1IsVUFBVSxDQUFDUyxVQUFVLEVBQ2pDQyxTQUFTLElBQUlDLGVBQU0sQ0FBQ0wsS0FBS0U7Z0JBRS9CLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUJBQXFCLElBQUksQ0FBQ2IsVUFBVSxDQUFDYyxxQkFBcUIsSUFDMURDLFNBQVNDLGVBQU0sQ0FBQ0Msc0JBQXNCLENBQUNKO2dCQUU3QyxPQUFPRTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFTQyxnQkFBQUEsaUVBQWdCO2dCQUN2QixJQUFNQyxRQUFRRCxnQkFDRSxJQUFJLENBQUNuQixVQUFVLENBQUNxQixXQUFXLEdBQ3pCLElBQUksQ0FBQ3JCLFVBQVUsQ0FBQ3NCLFdBQVc7Z0JBRTdDLE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0gsS0FBSztnQkFDWkEsUUFBUSxBQUFDLEdBQVEsT0FBTkEsT0FBTSxPQUFLLEdBQUc7Z0JBRXpCLElBQUksQ0FBQ0ksS0FBSyxDQUFDQyxnQkFBSyxFQUFFTDtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBVVAsZ0JBQUFBLGlFQUFnQjtnQkFDeEIsSUFBTVEsU0FBU1IsZ0JBQ0UsSUFBSSxDQUFDbkIsVUFBVSxDQUFDNEIsWUFBWSxHQUMxQixJQUFJLENBQUM1QixVQUFVLENBQUM2QixZQUFZO2dCQUUvQyxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVILE1BQU07Z0JBQ2RBLFNBQVMsQUFBQyxHQUFTLE9BQVBBLFFBQU8sT0FBSyxHQUFHO2dCQUUzQixJQUFJLENBQUNILEtBQUssQ0FBQ08saUJBQU0sRUFBRUo7WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsSUFBSTtnQkFBSSxPQUFPLElBQUksQ0FBQ2pDLFVBQVUsQ0FBQ2dDLFlBQVksQ0FBQ0M7WUFBTzs7O1lBRWhFQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUQsSUFBSTtnQkFBSSxPQUFPLElBQUksQ0FBQ2pDLFVBQVUsQ0FBQ2tDLFlBQVksQ0FBQ0Q7WUFBTzs7O1lBRWhFRSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUYsSUFBSSxFQUFFRyxLQUFLO2dCQUFJLElBQUksQ0FBQ3BDLFVBQVUsQ0FBQ21DLFlBQVksQ0FBQ0YsTUFBTUc7WUFBUTs7O1lBRXZFQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUosSUFBSTtnQkFBSSxJQUFJLENBQUNqQyxVQUFVLENBQUNzQyxlQUFlLENBQUNMO1lBQU87OztZQUU5RE0sS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFOLElBQUksRUFBRUcsS0FBSztnQkFBSSxJQUFJLENBQUNELFlBQVksQ0FBQ0YsTUFBTUc7WUFBUTs7O1lBRTVERSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCTCxJQUFJO2dCQUFJLElBQUksQ0FBQ0ksY0FBYyxDQUFDSjtZQUFPOzs7WUFFbkRPLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxTQUFTO2dCQUFJLElBQUksQ0FBQ3pDLFVBQVUsQ0FBQ3lDLFNBQVMsR0FBR0E7WUFBVzs7O1lBRTdEQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0QsU0FBUztnQkFBSSxJQUFJLENBQUN6QyxVQUFVLENBQUMyQyxTQUFTLENBQUNDLEdBQUcsQ0FBQ0g7WUFBWTs7O1lBRWhFSSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUosU0FBUztnQkFBSSxJQUFJLENBQUN6QyxVQUFVLENBQUMyQyxTQUFTLENBQUNHLE1BQU0sQ0FBQ0w7WUFBWTs7O1lBRXRFTSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWU4sU0FBUztnQkFBSSxJQUFJLENBQUN6QyxVQUFVLENBQUMyQyxTQUFTLENBQUNLLE1BQU0sQ0FBQ1A7WUFBWTs7O1lBRXRFUSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU1IsU0FBUztnQkFBSSxPQUFPLElBQUksQ0FBQ3pDLFVBQVUsQ0FBQzJDLFNBQVMsQ0FBQ08sUUFBUSxDQUFDVDtZQUFZOzs7WUFFNUVVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBaUIsSUFBSSxDQUFDbkQsVUFBVSxDQUFDeUMsU0FBUyxHQUFHVyx1QkFBWTtZQUFFOzs7WUFFM0RDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxhQUFhO2dCQUFJQSxjQUFjQyxPQUFPLENBQUMsSUFBSTtZQUFHOzs7WUFFeERDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTRixhQUFhO2dCQUFJQSxjQUFjRyxNQUFNLENBQUMsSUFBSTtZQUFHOzs7WUFFdERDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNSixhQUFhO2dCQUFJQSxjQUFjVixHQUFHLENBQUMsSUFBSTtZQUFHOzs7WUFFaERlLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXTCxhQUFhO2dCQUFJQSxjQUFjUixNQUFNLENBQUMsSUFBSTtZQUFHOzs7WUFFeERjLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxjQUFjO2dCQUN6QixJQUFNQyxnQkFBZ0JELGVBQWU3RCxVQUFVLENBQUMrRCxVQUFVLEVBQ3BEQyxvQkFBb0JILGVBQWU3RCxVQUFVO2dCQUVuRDhELGNBQWNGLFlBQVksQ0FBQyxJQUFJLENBQUM1RCxVQUFVLEVBQUVnRTtZQUM5Qzs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZSixjQUFjO2dCQUN4QixJQUFNQyxnQkFBZ0JELGVBQWU3RCxVQUFVLENBQUMrRCxVQUFVLEVBQ3BEQyxvQkFBb0JILGVBQWU3RCxVQUFVO2dCQUVuRDhELGNBQWNGLFlBQVksQ0FBQyxJQUFJLENBQUM1RCxVQUFVLEVBQUVnRSxrQkFBa0JFLFdBQVcsR0FBSSxHQUFHO1lBQ2xGOzs7WUFFQVgsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFZLE9BQU87Z0JBQ2IsSUFBTW5FLGFBQWFtRSxRQUFRbkUsVUFBVSxFQUMvQm9FLHVCQUF1QixJQUFJLENBQUNwRSxVQUFVLENBQUNxRSxVQUFVO2dCQUV2RCxJQUFJLENBQUNyRSxVQUFVLENBQUM0RCxZQUFZLENBQUM1RCxZQUFZb0U7WUFDM0M7OztZQUVBWCxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT1UsT0FBTztnQkFDWixJQUFNbkUsYUFBYW1FLFFBQVFuRSxVQUFVO2dCQUVyQyxJQUFJLENBQUNBLFVBQVUsQ0FBQzRELFlBQVksQ0FBQzVELFlBQVksT0FBTyxHQUFHO1lBQ3JEOzs7WUFFQXNFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPSCxPQUFPO2dCQUFJLElBQUksQ0FBQ1YsTUFBTSxDQUFDVTtZQUFVOzs7WUFFeEN2QixLQUFBQTttQkFBQUEsU0FBQUEsSUFBSXVCLE9BQU87Z0JBQUksSUFBSSxDQUFDVixNQUFNLENBQUNVO1lBQVU7OztZQUVyQ3JCLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPcUIsT0FBTztnQkFDWixJQUFJQSxTQUFTO29CQUNYLElBQU1uRSxhQUFhbUUsUUFBUW5FLFVBQVU7b0JBRXJDLElBQUksQ0FBQ0EsVUFBVSxDQUFDdUUsV0FBVyxDQUFDdkU7Z0JBQzlCLE9BQU87b0JBQ0wsSUFBSSxDQUFDQSxVQUFVLENBQUM4QyxNQUFNO2dCQUN4QjtZQUNGOzs7WUFFQTBCLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZWCxjQUFjO2dCQUN4QixJQUFJLENBQUNELFlBQVksQ0FBQ0M7Z0JBRWxCLElBQU1NLFVBQVUsSUFBSSxFQUFFLEdBQUc7Z0JBRXpCTSxhQUFhTjtZQUNmOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdiLGNBQWM7Z0JBQ3ZCLElBQUksQ0FBQ0QsWUFBWSxDQUFDQztnQkFFbEIsSUFBTU0sVUFBVSxJQUFJLEVBQUUsR0FBRztnQkFFekJNLGFBQWFOO1lBQ2Y7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTVIsT0FBTztnQkFDWCxJQUFJLENBQUN2QixHQUFHLENBQUN1QjtnQkFFVE0sYUFBYU47WUFDZjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRVCxPQUFPO2dCQUNiVSxlQUFlVjtnQkFFZixJQUFJLENBQUNyQixNQUFNLENBQUNxQjtZQUNkOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFLQyxlQUFBQSxpRUFBZUMsZ0JBQUs7Z0JBQUksSUFBSSxDQUFDQyxPQUFPLENBQUNGO1lBQWU7OztZQUV6REcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFTLElBQUksQ0FBQzFELEtBQUssQ0FBQzJELGtCQUFPLEVBQUVDLGVBQUk7WUFBRzs7O1lBRXBDSCxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUEsT0FBTztnQkFBSSxJQUFJLENBQUN6RCxLQUFLLENBQUMyRCxrQkFBTyxFQUFFRjtZQUFVOzs7WUFFakRJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBVyxJQUFJLENBQUNoRCxjQUFjLENBQUNpRCxtQkFBUTtZQUFHOzs7WUFFMUNDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBWSxJQUFJLENBQUNwRCxZQUFZLENBQUNtRCxtQkFBUSxFQUFFQSxtQkFBUTtZQUFHOzs7WUFFbkRFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXLElBQUksQ0FBQ0MsVUFBVSxJQUMxQkMsVUFBVSxDQUFDRjtnQkFFakIsT0FBT0U7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCxXQUFXLElBQUksQ0FBQ3pELFlBQVksQ0FBQ3NELG1CQUFRO2dCQUUzQyxPQUFPRztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1YLFVBQVUsSUFBSSxDQUFDWSxHQUFHLENBQUNWLGtCQUFPLEdBQzFCVyxZQUFhYixZQUFZRyxlQUFJO2dCQUVuQyxPQUFPVTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELFlBQVksSUFBSSxDQUFDRixXQUFXLElBQzVCSSxVQUFVRixXQUFZLEdBQUc7Z0JBRS9CLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsWUFBWSxJQUFJLENBQUNGLFdBQVcsSUFDNUJNLFNBQVMsQ0FBQ0o7Z0JBRWhCLE9BQU9JO1lBQ1Q7OztZQUVBMUUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1TLElBQUk7b0JBQUVHLFFBQUFBLGlFQUFRO2dCQUNsQixJQUFJQSxVQUFVLE1BQU07b0JBQ2xCLElBQUksQ0FBQ3BDLFVBQVUsQ0FBQ3dCLEtBQUssQ0FBQ1MsS0FBSyxHQUFHRztvQkFFOUI7Z0JBQ0Y7Z0JBRUEsSUFBTVosUUFBUSxJQUFJLENBQUN4QixVQUFVLENBQUN3QixLQUFLLENBQUNTLEtBQUs7Z0JBRXpDLE9BQU9UO1lBQ1Q7OztZQUVBMkUsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFLQSxPQUFBQSxpRUFBTztnQkFDVixJQUFJQSxTQUFTLE1BQU07b0JBQ2pCLElBQU1DLFlBQVlELE1BQU0sR0FBRztvQkFFM0IsSUFBSSxDQUFDbkcsVUFBVSxDQUFDb0csU0FBUyxHQUFHQTtvQkFFNUI7Z0JBQ0Y7Z0JBRUEsSUFBTUEsYUFBWSxJQUFJLENBQUNwRyxVQUFVLENBQUNvRyxTQUFTO2dCQUUzQ0QsT0FBT0MsWUFBVyxHQUFHO2dCQUVyQixPQUFPRDtZQUNUOzs7WUFFQU4sS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFJQSxNQUFBQSxpRUFBTTs7Z0JBQ1IsSUFBSUEsUUFBUSxNQUFNO29CQUNoQixJQUFNUSxnQkFBZ0JDLGlCQUFpQixJQUFJLENBQUN0RyxVQUFVLEdBQ2hENkYsT0FBTSxDQUFDO29CQUViLElBQUssSUFBSVUsUUFBUSxHQUFHQSxRQUFRRixjQUFjRyxNQUFNLEVBQUVELFFBQVM7d0JBQ3pELElBQU1FLHFCQUFxQkMsWUFBSyxDQUFDTCxjQUFjLEVBQ3pDcEUsT0FBT3dFLG9CQUNQckUsUUFBUWlFLGNBQWNNLGdCQUFnQixDQUFDMUUsT0FBTyxHQUFHO3dCQUV2RDRELElBQUcsQ0FBQzVELEtBQUssR0FBR0c7b0JBQ2Q7b0JBRUEsT0FBT3lEO2dCQUNUO2dCQUVBLElBQUksQ0FBQSxPQUFPQSxvQ0FBUCxTQUFPQSxJQUFFLE1BQU1lLGlCQUFNLEVBQUU7b0JBQ3pCLElBQUkzRSxRQUFPNEQsS0FBSyxHQUFHO29CQUVuQixJQUFNUSxpQkFBZ0JDLGlCQUFpQixJQUFJLENBQUN0RyxVQUFVLEdBQ2hEb0MsU0FBUWlFLGVBQWNNLGdCQUFnQixDQUFDMUUsUUFBTyxHQUFHO29CQUV2RDRELE1BQU16RCxRQUFRLEdBQUc7b0JBRWpCLE9BQU95RDtnQkFDVDtnQkFFQSxJQUFNZ0IsUUFBUUMsT0FBT0MsSUFBSSxDQUFDbEIsTUFBTSxHQUFHO2dCQUVuQ2dCLE1BQU1HLE9BQU8sQ0FBQyxTQUFDL0U7b0JBQ2IsSUFBTUcsUUFBUXlELEdBQUcsQ0FBQzVELEtBQUs7b0JBRXZCLE1BQUtULEtBQUssQ0FBQ1MsTUFBTUc7Z0JBQ25CO1lBQ0Y7OztZQUVBNkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFTLElBQUksQ0FBQ2pILFVBQVUsQ0FBQ2lILElBQUk7WUFBSTs7O1lBRWpDQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVUsSUFBSSxDQUFDbEgsVUFBVSxDQUFDa0gsS0FBSztZQUFJOzs7WUFFbkNDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCxRQUFTakgsU0FBU21ILGFBQWEsS0FBSyxJQUFJLENBQUNwSCxVQUFVLEVBQUksR0FBRztnQkFFaEUsT0FBT2tIO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUMsS0FBSyxFQUFFQyxVQUFVO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQ3ZELElBQU0sQUFBRUMsVUFBWUgsTUFBWkcsU0FDRnRELFVBQVV1RCxtQkFBQUEsTUFBQUEsS0FBQUEsR0FBQUE7b0JBQW1CSjtvQkFBT0c7aUJBQStCLENBQXpEQyxPQUFtQyxxQkFBR0YsdUJBQ2hERyxvQkFBb0JDLDJCQUEyQk4sUUFDL0NPLG9CQUFvQkMsMkJBQTJCUjtnQkFFckRuRCxRQUFRNEQsZUFBZSxDQUFDUixZQUFZSSxtQkFBbUJFO2dCQUV2RDFELFFBQVE2RCxVQUFVLElBQUk3RCxRQUFRNkQsVUFBVSxJQUFJLEdBQUc7Z0JBRS9DLE9BQU83RDtZQUNUOzs7WUFFTzhELEtBQUFBO21CQUFQLFNBQU9BLFlBQVlSLE9BQU8sRUFBRUYsVUFBVTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUMzRCxJQUFNRixRQWpTSnhILFNBa1NJcUUsVUFBVXVELG1CQUFBQSxNQUFBQSxLQUFBQSxHQUFBQTtvQkFBbUJKO29CQUFPRztpQkFBK0IsQ0FBekRDLE9BQW1DLHFCQUFHRix1QkFDaERHLG9CQUFvQixDQUFDLEdBQ3JCRSxvQkFBb0IsRUFBRSxFQUFFLEdBQUc7Z0JBRWpDMUQsUUFBUTRELGVBQWUsQ0FBQ1IsWUFBWUksbUJBQW1CRTtnQkFFdkQxRCxRQUFRNkQsVUFBVSxJQUFJN0QsUUFBUTZELFVBQVUsSUFBSSxHQUFHO2dCQUUvQyxPQUFPN0Q7WUFDVDs7O1dBM1NJckU7O0FBOFNOZ0gsT0FBT29CLE1BQU0sQ0FBQ3BJLFFBQVFxSSxTQUFTLEVBQUVDLFlBQVM7QUFDMUN0QixPQUFPb0IsTUFBTSxDQUFDcEksUUFBUXFJLFNBQVMsRUFBRUUsWUFBUztBQUMxQ3ZCLE9BQU9vQixNQUFNLENBQUNwSSxRQUFRcUksU0FBUyxFQUFFRyxjQUFXO0FBQzVDeEIsT0FBT29CLE1BQU0sQ0FBQ3BJLFFBQVFxSSxTQUFTLEVBQUVJLGNBQVc7QUFDNUN6QixPQUFPb0IsTUFBTSxDQUFDcEksUUFBUXFJLFNBQVMsRUFBRUssY0FBVztBQUM1QzFCLE9BQU9vQixNQUFNLENBQUNwSSxRQUFRcUksU0FBUyxFQUFFTSxjQUFXO0FBQzVDM0IsT0FBT29CLE1BQU0sQ0FBQ3BJLFFBQVFxSSxTQUFTLEVBQUVPLGVBQVk7QUFDN0M1QixPQUFPb0IsTUFBTSxDQUFDcEksUUFBUXFJLFNBQVMsRUFBRVEsZUFBWTtBQUM3QzdCLE9BQU9vQixNQUFNLENBQUNwSSxRQUFRcUksU0FBUyxFQUFFUyxnQkFBYTtJQUU5QyxXQUFlOUk7QUFFZixTQUFTMkUsYUFBYU4sT0FBTztJQUMzQixJQUFNMEUscUJBQXFCMUUsUUFBUTJFLHFCQUFxQixJQUNsREMsV0FBVztRQUNUNUU7S0FFRCxDQUhVLE9BRVQscUJBQUcwRTtJQUdYRSxTQUFTQyxPQUFPLElBQUksR0FBRztJQUV2QkQsU0FBUy9CLE9BQU8sQ0FBQyxTQUFDN0M7UUFDaEJBLFFBQVE4RSxRQUFRLElBQUk5RSxRQUFROEUsUUFBUTtJQUN0QztBQUNGO0FBRUEsU0FBU3BFLGVBQWVWLE9BQU87SUFDN0IsSUFBTTBFLHFCQUFxQjFFLFFBQVEyRSxxQkFBcUIsSUFDbERDLFdBQVc7UUFDVDVFO0tBRUQsQ0FIVSxPQUVULHFCQUFHMEU7SUFHWEUsU0FBUy9CLE9BQU8sQ0FBQyxTQUFDN0M7UUFDaEJBLFFBQVErRSxXQUFXLElBQUkvRSxRQUFRK0UsV0FBVztJQUM1QztBQUNGO0FBRUEsU0FBU3hCLG1CQUFtQkosS0FBSyxFQUFFRyxPQUFPO0lBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdELHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO1FBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O1FBRTFDMkI7SUFEckIsSUFBTXBKLFdBQVcsTUFDWG9FLFVBQVUsSUFBS2dGLENBQUFBLENBQUFBLDJCQUFBQSxTQUFTaEIsU0FBUyxDQUFDaUIsSUFBSSxFQUFDQyxJQUFJLENBQTVCRixNQUFBQSwwQkFBQUE7UUFBNkI3QjtRQUFPO1FBQU12SDtLQUFnQyxDQUExRW9KLE9BQW9ELHFCQUFHM0IscUJBQWtCO0lBRTlGckQsUUFBUW5FLFVBQVUsR0FBR3NKLElBQUFBLGtCQUFZLEVBQUM3QixXQUNYeEgsU0FBU3NKLGVBQWUsQ0FBQ0MsNEJBQWlCLEVBQUUvQixXQUMxQ3hILFNBQVN3SixhQUFhLENBQUNoQztJQUVoRHRELFFBQVFuRSxVQUFVLENBQUNHLFdBQVcsR0FBR2dFLFNBQVMsR0FBRztJQUU3QyxPQUFPQTtBQUNUO0FBRUEsU0FBU3lELDJCQUEyQk4sS0FBSztRQUFFSyxvQkFBQUEsaUVBQW9CLENBQUM7SUFDOUQsSUFBSUwsTUFBTW9DLGNBQWMsQ0FBQ0MsNkJBQWtCLEdBQUc7UUFDNUNoQyxvQkFBb0JpQyxJQUFBQSxlQUFPLEVBQUNqQyxtQkFBbUJMLEtBQUssQ0FBQ3FDLDZCQUFrQixDQUFDO0lBQzFFO0lBRUEsSUFBTUUsYUFBYS9DLE9BQU9nRCxjQUFjLENBQUN4QztJQUV6QyxJQUFJdUMsZUFBZSxNQUFNO1FBQ3ZCbEMsb0JBQW9CQywyQkFBMkJpQyxZQUFZbEM7SUFDN0Q7SUFFQSxPQUFPQTtBQUNUO0FBRUEsU0FBU0csMkJBQTJCUixLQUFLO1FBQUVPLG9CQUFBQSxpRUFBb0IsRUFBRTtJQUMvRCxJQUFJUCxNQUFNb0MsY0FBYyxDQUFDSyw2QkFBa0IsR0FBRztRQUM1Q2xDLG9CQUFvQm1DLElBQUFBLGNBQU8sRUFBQ25DLG1CQUFtQlAsS0FBSyxDQUFDeUMsNkJBQWtCLENBQUMsRUFBRSxTQUFDRTtZQUN6RSxJQUFJLENBQUNwQyxrQkFBa0JxQyxRQUFRLENBQUNELGtCQUFrQjtnQkFDaEQsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLElBQU1KLGFBQWEvQyxPQUFPZ0QsY0FBYyxDQUFDeEM7SUFFekMsSUFBSXVDLGVBQWUsTUFBTTtRQUN2QmhDLG9CQUFvQkMsMkJBQTJCK0IsWUFBWWhDO0lBQzdEO0lBRUEsT0FBT0E7QUFDVCJ9