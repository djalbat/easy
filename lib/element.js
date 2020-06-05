"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _offset = _interopRequireDefault(require("./miscellaneous/offset"));

var _bounds = _interopRequireDefault(require("./miscellaneous/bounds"));

var _jsx = _interopRequireDefault(require("./mixins/jsx"));

var _key4 = _interopRequireDefault(require("./mixins/key"));

var _click = _interopRequireDefault(require("./mixins/click"));

var _state = _interopRequireDefault(require("./mixins/state"));

var _event = _interopRequireDefault(require("./mixins/event"));

var _mouse = _interopRequireDefault(require("./mixins/mouse"));

var _resize = _interopRequireDefault(require("./mixins/resize"));

var _scroll = _interopRequireDefault(require("./mixins/scroll"));

var _object = require("./utilities/object");

var _name2 = require("./utilities/name");

var _array = require("./utilities/array");

var _constants = require("./constants");

var _dom = require("./utilities/dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Element = /*#__PURE__*/function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    if (selector) {
      this.domElement = document.querySelector(selector);
      this.domElement.__element__ = this; ///
    }
  }

  _createClass(Element, [{
    key: "getDOMElement",
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      var top = this.domElement.offsetTop,
          ///
      left = this.domElement.offsetLeft,
          ///
      offset = new _offset["default"](top, left);
      return offset;
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = _bounds["default"].fromBoundingClientRect(boundingClientRect);

      return bounds;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var width = includeBorder ? this.domElement.offsetWidth : this.domElement.clientWidth;
      return width;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      width = "".concat(width, "px"); ///

      this.style("width", width);
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var height = includeBorder ? this.domElement.offsetHeight : this.domElement.clientHeight;
      return height;
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      height = "".concat(height, "px"); ///

      this.style("height", height);
    }
  }, {
    key: "hasAttribute",
    value: function hasAttribute(name) {
      return this.domElement.hasAttribute(name);
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(name) {
      return this.domElement.getAttribute(name);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.domElement.setAttribute(name, value);
    }
  }, {
    key: "clearAttribute",
    value: function clearAttribute(name) {
      this.domElement.removeAttribute(name);
    }
  }, {
    key: "addAttribute",
    value: function addAttribute(name, value) {
      this.setAttribute(name, value);
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(name) {
      this.clearAttribute(name);
    }
  }, {
    key: "setClass",
    value: function setClass(className) {
      this.domElement.className = className;
    }
  }, {
    key: "addClass",
    value: function addClass(className) {
      this.domElement.classList.add(className);
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      this.domElement.classList.remove(className);
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(className) {
      this.domElement.classList.toggle(className);
    }
  }, {
    key: "hasClass",
    value: function hasClass(className) {
      return this.domElement.classList.contains(className);
    }
  }, {
    key: "clearClasses",
    value: function clearClasses() {
      this.domElement.className = "";
    }
  }, {
    key: "prependTo",
    value: function prependTo(parentElement) {
      parentElement.prepend(this);
    }
  }, {
    key: "appendTo",
    value: function appendTo(parentElement) {
      parentElement.append(this);
    }
  }, {
    key: "addTo",
    value: function addTo(parentElement) {
      parentElement.add(this);
    }
  }, {
    key: "removeFrom",
    value: function removeFrom(parentElement) {
      parentElement.remove(this);
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;
      parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;
      parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
    }
  }, {
    key: "prepend",
    value: function prepend(element) {
      var domElement = element.domElement,
          firstChildDOMElement = this.domElement.firstChild;
      this.domElement.insertBefore(domElement, firstChildDOMElement);
    }
  }, {
    key: "append",
    value: function append(element) {
      var domElement = element.domElement;
      this.domElement.insertBefore(domElement, null); ///
    }
  }, {
    key: "add",
    value: function add(element) {
      this.append(element);
    }
  }, {
    key: "remove",
    value: function remove(element) {
      if (element) {
        var domElement = element.domElement;
        this.domElement.removeChild(domElement);
      } else {
        this.domElement.remove();
      }
    }
  }, {
    key: "mount",
    value: function mount(element) {
      this.add(element);
      var descendantElements = this.getDescendantElements();
      descendantElements.reverse();
      var elements = [].concat(_toConsumableArray(descendantElements), [element]);
      elements.forEach(function (element) {
        return element.didMount && element.didMount();
      }); ///
    }
  }, {
    key: "unmount",
    value: function unmount(element) {
      var descendantElements = this.getDescendantElements(),
          elements = [element].concat(_toConsumableArray(descendantElements));
      elements.forEach(function (element) {
        return element.willUnmount && element.willUnmount();
      }); ///

      this.remove(element);
    }
  }, {
    key: "show",
    value: function show() {
      var displayStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "block";
      this.display(displayStyle);
    }
  }, {
    key: "hide",
    value: function hide() {
      this.style("display", "none");
    }
  }, {
    key: "display",
    value: function display(_display) {
      this.style("display", _display);
    }
  }, {
    key: "enable",
    value: function enable() {
      this.clearAttribute("disabled");
    }
  }, {
    key: "disable",
    value: function disable() {
      this.setAttribute("disabled", "disabled");
    }
  }, {
    key: "isEnabled",
    value: function isEnabled() {
      var disabled = this.isDisabled(),
          enabled = !disabled;
      return enabled;
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      var disabled = this.hasAttribute("disabled");
      return disabled;
    }
  }, {
    key: "isDisplayed",
    value: function isDisplayed() {
      var display = this.style("display"),
          displayed = display !== "none";
      return displayed;
    }
  }, {
    key: "isShowing",
    value: function isShowing() {
      var displayed = this.isDisplayed(),
          showing = displayed; ///

      return showing;
    }
  }, {
    key: "isHidden",
    value: function isHidden() {
      var displayed = this.isDisplayed(),
          hidden = !displayed;
      return hidden;
    }
  }, {
    key: "style",
    value: function style(name, value) {
      if (value !== undefined) {
        this.domElement.style[name] = value;
      } else {
        var style = this.domElement.style[name];
        return style;
      }
    }
  }, {
    key: "html",
    value: function html(_html) {
      if (_html === undefined) {
        var innerHTML = this.domElement.innerHTML;
        _html = innerHTML; ///

        return _html;
      } else {
        var _innerHTML = _html; ///

        this.domElement.innerHTML = _innerHTML;
      }
    }
  }, {
    key: "css",
    value: function css(_css) {
      var _this = this;

      if (_css === undefined) {
        var computedStyle = getComputedStyle(this.domElement),
            css = {};

        for (var index = 0; index < computedStyle.length; index++) {
          var name = computedStyle[0],
              ///
          value = computedStyle.getPropertyValue(name); ///

          css[name] = value;
        }

        return css;
      } else if (typeof _css === "string") {
        var _name = _css; ///

        var _computedStyle = getComputedStyle(this.domElement),
            _value = _computedStyle.getPropertyValue(_name); ///


        _css = _value; ///

        return _css;
      } else {
        var names = Object.keys(_css); ///

        names.forEach(function (name) {
          var value = _css[name];

          _this.style(name, value);
        });
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      this.domElement.blur();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.domElement.focus();
    }
  }, {
    key: "hasFocus",
    value: function hasFocus() {
      var focus = document.activeElement === this.domElement; ///

      return focus;
    }
  }, {
    key: "getDescendantElements",
    value: function getDescendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var domNode = this.domElement,
          ///
      descendantDOMNodes = (0, _dom.descendantDOMNodesFromDOMNode)(domNode),
          descendantDOMElements = (0, _dom.filterDOMNodesBySelector)(descendantDOMNodes, selector),
          descendantElements = (0, _dom.elementsFromDOMElements)(descendantDOMElements);
      return descendantElements;
    }
  }, {
    key: "getChildElements",
    value: function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var childDOMNodes = this.domElement.childNodes,
          childDOMElements = (0, _dom.filterDOMNodesBySelector)(childDOMNodes, selector),
          childElements = (0, _dom.elementsFromDOMElements)(childDOMElements);
      return childElements;
    }
  }, {
    key: "getParentElement",
    value: function getParentElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var parentElement = null;
      var parentDOMElement = this.domElement.parentElement;

      if (parentDOMElement !== null) {
        if (parentDOMElement.matches(selector)) {
          var parentDOMElements = [parentDOMElement],
              parentElements = (0, _dom.elementsFromDOMElements)(parentDOMElements),
              firstParentElement = (0, _array.first)(parentElements);
          parentElement = firstParentElement || null;
        }
      }

      return parentElement;
    }
  }, {
    key: "getAscendantElements",
    value: function getAscendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var ascendantDOMElements = [],
          parentDOMElement = this.domElement.parentElement;
      var ascendantDOMElement = parentDOMElement; ///

      while (ascendantDOMElement !== null) {
        if (ascendantDOMElement.matches(selector)) {
          ascendantDOMElements.push(ascendantDOMElement);
        }

        ascendantDOMElement = ascendantDOMElement.parentElement;
      }

      var ascendantElements = (0, _dom.elementsFromDOMElements)(ascendantDOMElements);
      return ascendantElements;
    }
  }, {
    key: "getPreviousSiblingElement",
    value: function getPreviousSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var previousSiblingElement = null;
      var previousSiblingDOMNode = this.domElement.previousSibling; ///

      if (previousSiblingDOMNode !== null && (0, _dom.domNodeMatchesSelector)(previousSiblingDOMNode, selector)) {
        previousSiblingElement = previousSiblingDOMNode.__element__ || null;
      }

      return previousSiblingElement;
    }
  }, {
    key: "getNextSiblingElement",
    value: function getNextSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var nextSiblingElement = null;
      var nextSiblingDOMNode = this.domElement.nextSibling;

      if (nextSiblingDOMNode !== null && (0, _dom.domNodeMatchesSelector)(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
      }

      return nextSiblingElement;
    }
  }], [{
    key: "fromTagName",
    value: function fromTagName(tagName, properties) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var Class = Element,
          ///
      element = elementFromTagName.apply(void 0, [Class, tagName].concat(remainingArguments)),
          defaultProperties = {},
          ///
      ignoredProperties = []; ///

      element.applyProperties(properties, defaultProperties, ignoredProperties);
      return element;
    }
  }, {
    key: "fromClass",
    value: function fromClass(Class, properties) {
      for (var _len2 = arguments.length, remainingArguments = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      var tagName = Class.tagName,
          element = elementFromTagName.apply(void 0, [Class, tagName].concat(remainingArguments)),
          defaultProperties = defaultPropertiesFromClass(Class),
          ignoredProperties = ignoredPropertiesFromClass(Class);
      element.applyProperties(properties, defaultProperties, ignoredProperties);
      return element;
    }
  }]);

  return Element;
}();

Object.assign(Element.prototype, _jsx["default"]);
Object.assign(Element.prototype, _key4["default"]);
Object.assign(Element.prototype, _click["default"]);
Object.assign(Element.prototype, _state["default"]);
Object.assign(Element.prototype, _event["default"]);
Object.assign(Element.prototype, _mouse["default"]);
Object.assign(Element.prototype, _resize["default"]);
Object.assign(Element.prototype, _scroll["default"]);
var _default = Element;
exports["default"] = _default;

function elementFromTagName(Class, tagName) {
  var _Function$prototype$b;

  for (var _len3 = arguments.length, remainingArguments = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    remainingArguments[_key3 - 2] = arguments[_key3];
  }

  var selector = null,
      element = new ((_Function$prototype$b = Function.prototype.bind).call.apply(_Function$prototype$b, [Class, null, selector].concat(remainingArguments)))();
  element.domElement = (0, _name2.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
  element.domElement.__element__ = element; ///

  return element;
}

function defaultPropertiesFromClass(Class) {
  var defaultProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (Class.hasOwnProperty("defaultProperties")) {
    (0, _object.combine)(defaultProperties, Class.defaultProperties);
  }

  var superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    defaultPropertiesFromClass(superClass, defaultProperties);
  }

  return defaultProperties;
}

function ignoredPropertiesFromClass(Class) {
  var ignoredProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (Class.hasOwnProperty("ignoredProperties")) {
    (0, _array.augment)(ignoredProperties, Class.ignoredProperties, function (ignoredProperty) {
      return !ignoredProperties.includes(ignoredProperty);
    });
  }

  var superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    ignoredPropertiesFromClass(superClass, ignoredProperties);
  }

  return ignoredProperties;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl9fZWxlbWVudF9fIiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXQiLCJPZmZzZXQiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZHMiLCJCb3VuZHMiLCJmcm9tQm91bmRpbmdDbGllbnRSZWN0IiwiaW5jbHVkZUJvcmRlciIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInN0eWxlIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibmFtZSIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0b2dnbGUiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiLCJwcmVwZW5kIiwiYXBwZW5kIiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJlbGVtZW50IiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJkZXNjZW5kYW50RWxlbWVudHMiLCJnZXREZXNjZW5kYW50RWxlbWVudHMiLCJyZXZlcnNlIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImRpc3BsYXlTdHlsZSIsImRpc3BsYXkiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJlbmFibGVkIiwiZGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJzaG93aW5nIiwiaGlkZGVuIiwidW5kZWZpbmVkIiwiaHRtbCIsImlubmVySFRNTCIsImNzcyIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJnZXRQcm9wZXJ0eVZhbHVlIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiYmx1ciIsImZvY3VzIiwiYWN0aXZlRWxlbWVudCIsImRvbU5vZGUiLCJkZXNjZW5kYW50RE9NTm9kZXMiLCJkZXNjZW5kYW50RE9NRWxlbWVudHMiLCJjaGlsZERPTU5vZGVzIiwiY2hpbGROb2RlcyIsImNoaWxkRE9NRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzIiwicGFyZW50RE9NRWxlbWVudCIsIm1hdGNoZXMiLCJwYXJlbnRET01FbGVtZW50cyIsInBhcmVudEVsZW1lbnRzIiwiZmlyc3RQYXJlbnRFbGVtZW50IiwiYXNjZW5kYW50RE9NRWxlbWVudHMiLCJhc2NlbmRhbnRET01FbGVtZW50IiwicHVzaCIsImFzY2VuZGFudEVsZW1lbnRzIiwicHJldmlvdXNTaWJsaW5nRWxlbWVudCIsInByZXZpb3VzU2libGluZ0RPTU5vZGUiLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZ0VsZW1lbnQiLCJuZXh0U2libGluZ0RPTU5vZGUiLCJ0YWdOYW1lIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkNsYXNzIiwiZWxlbWVudEZyb21UYWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJpZ25vcmVkUHJvcGVydGllcyIsImFwcGx5UHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJqc3hNaXhpbnMiLCJrZXlNaXhpbnMiLCJjbGlja01peGlucyIsInN0YXRlTWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJtb3VzZU1peGlucyIsInJlc2l6ZU1peGlucyIsInNjcm9sbE1peGlucyIsIkZ1bmN0aW9uIiwiYmluZCIsImNhbGwiLCJjcmVhdGVFbGVtZW50TlMiLCJTVkdfTkFNRVNQQUNFX1VSSSIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsInN1cGVyQ2xhc3MiLCJnZXRQcm90b3R5cGVPZiIsImlnbm9yZWRQcm9wZXJ0eSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE87QUFDSixtQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixRQUFJQSxRQUFKLEVBQWM7QUFDWixXQUFLQyxVQUFMLEdBQWtCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJILFFBQXZCLENBQWxCO0FBRUEsV0FBS0MsVUFBTCxDQUFnQkcsV0FBaEIsR0FBOEIsSUFBOUIsQ0FIWSxDQUd3QjtBQUNyQztBQUNGOzs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLSCxVQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1JLEdBQUcsR0FBRyxLQUFLSixVQUFMLENBQWdCSyxTQUE1QjtBQUFBLFVBQXdDO0FBQ2xDQyxNQUFBQSxJQUFJLEdBQUcsS0FBS04sVUFBTCxDQUFnQk8sVUFEN0I7QUFBQSxVQUMwQztBQUNwQ0MsTUFBQUEsTUFBTSxHQUFHLElBQUlDLGtCQUFKLENBQVdMLEdBQVgsRUFBZ0JFLElBQWhCLENBRmY7QUFJQSxhQUFPRSxNQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1FLGtCQUFrQixHQUFHLEtBQUtWLFVBQUwsQ0FBZ0JXLHFCQUFoQixFQUEzQjtBQUFBLFVBQ01DLE1BQU0sR0FBR0MsbUJBQU9DLHNCQUFQLENBQThCSixrQkFBOUIsQ0FEZjs7QUFHQSxhQUFPRSxNQUFQO0FBQ0Q7OzsrQkFFOEI7QUFBQSxVQUF0QkcsYUFBc0IsdUVBQU4sSUFBTTtBQUM3QixVQUFNQyxLQUFLLEdBQUdELGFBQWEs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LFVBQUQsRUFBYXJCLGlCQUFiLENBQTFCO0FBQ0Q7O0FBRUQsU0FBT0EsaUJBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL21pc2NlbGxhbmVvdXMvb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvYm91bmRzXCI7XG5pbXBvcnQganN4TWl4aW5zIGZyb20gXCIuL21peGlucy9qc3hcIjtcbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHN0YXRlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IHJlc2l6ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvcmVzaXplXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcblxuaW1wb3J0IHsgY29tYmluZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBmaXJzdCwgYXVnbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgU1ZHX05BTUVTUEFDRV9VUkkgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2RvbVwiO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgICB9XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShcIndpZHRoXCIsIHdpZHRoKTtcbiAgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShcImhlaWdodFwiLCBoZWlnaHQpO1xuICB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdW50KGVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZChlbGVtZW50KTtcblxuICAgIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IHRoaXMuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCk7XG5cbiAgICBkZXNjZW5kYW50RWxlbWVudHMucmV2ZXJzZSgpO1xuXG4gICAgY29uc3QgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHMsXG4gICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgXTtcblxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LmRpZE1vdW50ICYmIGVsZW1lbnQuZGlkTW91bnQoKSkpOyAgLy8vXG4gIH1cblxuICB1bm1vdW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSB0aGlzLmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgIC4uLmRlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICAgIF07XG5cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC53aWxsVW5tb3VudCAmJiBlbGVtZW50LndpbGxVbm1vdW50KCkpKTsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gIH1cblxuICBzaG93KGRpc3BsYXlTdHlsZSA9IFwiYmxvY2tcIikgeyB0aGlzLmRpc3BsYXkoZGlzcGxheVN0eWxlKTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTsgfVxuXG4gIGRpc3BsYXkoZGlzcGxheSkgeyB0aGlzLnN0eWxlKFwiZGlzcGxheVwiLCBkaXNwbGF5KTsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShcImRpc2FibGVkXCIpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpOyB9XG5cbiAgaXNFbmFibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgZW5hYmxlZCA9ICFkaXNhYmxlZDtcblxuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLnN0eWxlKFwiZGlzcGxheVwiKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gXCJub25lXCIpO1xuICAgIFxuICAgIHJldHVybiBkaXNwbGF5ZWQ7XG4gIH1cblxuICBpc1Nob3dpbmcoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIHNob3dpbmcgPSBkaXNwbGF5ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzaG93aW5nO1xuICB9XG5cbiAgaXNIaWRkZW4oKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIGhpZGRlbiA9ICFkaXNwbGF5ZWQ7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgc3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdO1xuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wdXRlZFN0eWxlWzBdLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgYmx1cigpIHsgdGhpcy5kb21FbGVtZW50LmJsdXIoKTsgfVxuXG4gIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIGdldERlc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUpLFxuICAgICAgICAgIGRlc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkZXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGNoaWxkRE9NTm9kZXMgPSB0aGlzLmRvbUVsZW1lbnQuY2hpbGROb2RlcyxcbiAgICAgICAgICBjaGlsZERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGNoaWxkRE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGxldCBwYXJlbnRFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChwYXJlbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAocGFyZW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50cyA9IFtwYXJlbnRET01FbGVtZW50XSxcbiAgICAgICAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKTtcblxuICAgICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBnZXRBc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgY29uc3QgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBsZXQgYXNjZW5kYW50RE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cbiAgICB3aGlsZSAoYXNjZW5kYW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGFzY2VuZGFudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMucHVzaChhc2NlbmRhbnRET01FbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgYXNjZW5kYW50RE9NRWxlbWVudCA9IGFzY2VuZGFudERPTUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBhc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGFzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBhc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGxldCBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHByZXZpb3VzU2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQucHJldmlvdXNTaWJsaW5nOyAgLy8vXG5cbiAgICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xuICB9XG5cbiAgZ2V0TmV4dFNpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgbmV4dFNpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5uZXh0U2libGluZztcblxuICAgIGlmICgobmV4dFNpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKG5leHRTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBuZXh0U2libGluZ0VsZW1lbnQgPSBuZXh0U2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFNpYmxpbmdFbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSwgLy8vXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBbXTsgLy8vXG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IENsYXNzLFxuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDtcblxuZnVuY3Rpb24gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBudWxsLFxuICAgICAgICBlbGVtZW50ID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCBudWxsLCBzZWxlY3RvciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gZWxlbWVudDsgLy8vXG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRQcm9wZXJ0aWVzXCIpKSB7XG4gICAgY29tYmluZShkZWZhdWx0UHJvcGVydGllcywgQ2xhc3MuZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShcImlnbm9yZWRQcm9wZXJ0aWVzXCIpKSB7XG4gICAgYXVnbWVudChpZ25vcmVkUHJvcGVydGllcywgQ2xhc3MuaWdub3JlZFByb3BlcnRpZXMsIChpZ25vcmVkUHJvcGVydHkpID0+ICFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIl19