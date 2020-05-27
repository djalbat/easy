"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _offset = _interopRequireDefault(require("./miscellaneous/offset"));

var _bounds = _interopRequireDefault(require("./miscellaneous/bounds"));

var _jsx = _interopRequireDefault(require("./mixins/jsx"));

var _key5 = _interopRequireDefault(require("./mixins/key"));

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Element = /*#__PURE__*/function () {
  function Element(selectorOrDOMElement) {
    _classCallCheck(this, Element);

    if (typeof selectorOrDOMElement === "string") {
      var selector = selectorOrDOMElement;
      this.domElement = document.querySelector(selector);
    } else {
      var domElement = selectorOrDOMElement; ///

      this.domElement = domElement;
    }

    this.domElement.__element__ = this; ///
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

      var element = _fromTagName.apply(void 0, [Element, tagName].concat(remainingArguments)),
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
          element = _fromTagName.apply(void 0, [Class, tagName].concat(remainingArguments)),
          defaultProperties = defaultPropertiesFromClass(Class),
          ignoredProperties = ignoredPropertiesFromClass(Class);

      element.applyProperties(properties, defaultProperties, ignoredProperties);
      return element;
    }
  }]);

  return Element;
}();

Object.assign(Element.prototype, _jsx["default"]);
Object.assign(Element.prototype, _key5["default"]);
Object.assign(Element.prototype, _click["default"]);
Object.assign(Element.prototype, _state["default"]);
Object.assign(Element.prototype, _event["default"]);
Object.assign(Element.prototype, _mouse["default"]);
Object.assign(Element.prototype, _resize["default"]);
Object.assign(Element.prototype, _scroll["default"]);
var _default = Element;
exports["default"] = _default;

function _fromTagName(Class, tagName) {
  var domElement = (0, _name2.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);

  for (var _len3 = arguments.length, remainingArguments = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    remainingArguments[_key3 - 2] = arguments[_key3];
  }

  return fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
}

function fromDOMElement(Class, domElement) {
  var _Function$prototype$b;

  for (var _len4 = arguments.length, remainingArguments = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    remainingArguments[_key4 - 2] = arguments[_key4];
  }

  remainingArguments.unshift(domElement);
  remainingArguments.unshift(null);
  return new ((_Function$prototype$b = Function.prototype.bind).call.apply(_Function$prototype$b, [Class].concat(remainingArguments)))();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInNlbGVjdG9yT3JET01FbGVtZW50Iiwic2VsZWN0b3IiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX19lbGVtZW50X18iLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsIk9mZnNldCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kcyIsIkJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJpbmNsdWRlQm9yZGVyIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJuYW1lIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZSIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsInByZXBlbmQiLCJhcHBlbmQiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImVsZW1lbnQiLCJmaXJzdENoaWxkRE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImRlc2NlbmRhbnRFbGVtZW50cyIsImdldERlc2NlbmRhbnRFbGVtZW50cyIsInJldmVyc2UiLCJlbGVtZW50cyIsImZvckVhY2giLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwiZGlzcGxheVN0eWxlIiwiZGlzcGxheSIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImVuYWJsZWQiLCJkaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsInNob3dpbmciLCJoaWRkZW4iLCJ1bmRlZmluZWQiLCJodG1sIiwiaW5uZXJIVE1MIiwiY3NzIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJpbmRleCIsImxlbmd0aCIsImdldFByb3BlcnR5VmFsdWUiLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJibHVyIiwiZm9jdXMiLCJhY3RpdmVFbGVtZW50IiwiZG9tTm9kZSIsImRlc2NlbmRhbnRET01Ob2RlcyIsImRlc2NlbmRhbnRET01FbGVtZW50cyIsImNoaWxkRE9NTm9kZXMiLCJjaGlsZE5vZGVzIiwiY2hpbGRET01FbGVtZW50cyIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRET01FbGVtZW50IiwibWF0Y2hlcyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50RWxlbWVudHMiLCJmaXJzdFBhcmVudEVsZW1lbnQiLCJhc2NlbmRhbnRET01FbGVtZW50cyIsImFzY2VuZGFudERPTUVsZW1lbnQiLCJwdXNoIiwiYXNjZW5kYW50RWxlbWVudHMiLCJwcmV2aW91c1NpYmxpbmdFbGVtZW50IiwicHJldmlvdXNTaWJsaW5nRE9NTm9kZSIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nRWxlbWVudCIsIm5leHRTaWJsaW5nRE9NTm9kZSIsInRhZ05hbWUiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZnJvbVRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiYXBwbHlQcm9wZXJ0aWVzIiwiQ2xhc3MiLCJkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyIsImlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiYXNzaWduIiwicHJvdG90eXBlIiwianN4TWl4aW5zIiwia2V5TWl4aW5zIiwiY2xpY2tNaXhpbnMiLCJzdGF0ZU1peGlucyIsImV2ZW50TWl4aW5zIiwibW91c2VNaXhpbnMiLCJyZXNpemVNaXhpbnMiLCJzY3JvbGxNaXhpbnMiLCJjcmVhdGVFbGVtZW50TlMiLCJTVkdfTkFNRVNQQUNFX1VSSSIsImNyZWF0ZUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsInVuc2hpZnQiLCJGdW5jdGlvbiIsImJpbmQiLCJjYWxsIiwiaGFzT3duUHJvcGVydHkiLCJzdXBlckNsYXNzIiwiZ2V0UHJvdG90eXBlT2YiLCJpZ25vcmVkUHJvcGVydHkiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE87QUFDSixtQkFBWUMsb0JBQVosRUFBa0M7QUFBQTs7QUFDaEMsUUFBSSxPQUFPQSxvQkFBUCxLQUFnQyxRQUFwQyxFQUE4QztBQUM1QyxVQUFNQyxRQUFRLEdBQUdELG9CQUFqQjtBQUVBLFdBQUtFLFVBQUwsR0FBa0JDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkgsUUFBdkIsQ0FBbEI7QUFDRCxLQUpELE1BSU87QUFDTCxVQUFNQyxVQUFVLEdBQUdGLG9CQUFuQixDQURLLENBQ3FDOztBQUUxQyxXQUFLRSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOztBQUVELFNBQUtBLFVBQUwsQ0FBZ0JHLFdBQWhCLEdBQThCLElBQTlCLENBWGdDLENBV0k7QUFDckM7Ozs7b0NBRWU7QUFDZCxhQUFPLEtBQUtILFVBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUksR0FBRyxHQUFHLEtBQUtKLFVBQUwsQ0FBZ0JLLFNBQTVCO0FBQUEsVUFBd0M7QUFDbENDLE1BQUFBLElBQUksR0FBRyxLQUFLTixVQUFMLENBQWdCTyxVQUQ3QjtBQUFBLFVBQzBDO0FBQ3BDQyxNQUFBQSxNQUFNLEdBQUcsSUFBSUMsa0JBQUosQ0FBV0wsR0FBWCxFQUFnQkUsSUFBaEIsQ0FGZjtBQUlBLGFBQU9FLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUUsa0JBQWtCLEdB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QUFDRixpQkFBakMsRUFBb0QsVUFBQzBCLGVBQUQ7QUFBQSxhQUFxQixDQUFDMUIsaUJBQWlCLENBQUMyQixRQUFsQixDQUEyQkQsZUFBM0IsQ0FBdEI7QUFBQSxLQUFwRDtBQUNEOztBQUVELE1BQU1GLFVBQVUsR0FBR3ZELE1BQU0sQ0FBQ3dELGNBQVAsQ0FBc0J2QixLQUF0QixDQUFuQjs7QUFFQSxNQUFJc0IsVUFBVSxLQUFLLElBQW5CLEVBQXlCO0FBQ3ZCcEIsSUFBQUEsMEJBQTBCLENBQUNvQixVQUFELEVBQWF4QixpQkFBYixDQUExQjtBQUNEOztBQUVELFNBQU9BLGlCQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL2JvdW5kc1wiO1xuaW1wb3J0IGpzeE1peGlucyBmcm9tIFwiLi9taXhpbnMvanN4XCI7XG5pbXBvcnQga2V5TWl4aW5zIGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCBjbGlja01peGlucyBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcbmltcG9ydCBzdGF0ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3RhdGVcIjtcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCBtb3VzZU1peGlucyBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcbmltcG9ydCByZXNpemVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Jlc2l6ZVwiO1xuaW1wb3J0IHNjcm9sbE1peGlucyBmcm9tIFwiLi9taXhpbnMvc2Nyb2xsXCI7XG5cbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgZmlyc3QsIGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNWR19OQU1FU1BBQ0VfVVJJIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yLCBlbGVtZW50c0Zyb21ET01FbGVtZW50cywgZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yLCBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9kb21cIjtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JET01FbGVtZW50KSB7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3Rvck9yRE9NRWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3Rvck9yRE9NRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBzZWxlY3Rvck9yRE9NRWxlbWVudDsgIC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgIH1cblxuICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7IC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoXCJ3aWR0aFwiLCB3aWR0aCk7XG4gIH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBcIlwiOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VudChlbGVtZW50KSB7XG4gICAgdGhpcy5hZGQoZWxlbWVudCk7XG5cbiAgICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSB0aGlzLmdldERlc2NlbmRhbnRFbGVtZW50cygpO1xuXG4gICAgZGVzY2VuZGFudEVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgIGNvbnN0IGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzLFxuICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgIF07XG5cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5kaWRNb3VudCAmJiBlbGVtZW50LmRpZE1vdW50KCkpKTsgIC8vL1xuICB9XG5cbiAgdW5tb3VudChlbGVtZW50KSB7XG4gICAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gdGhpcy5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICBdO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQud2lsbFVubW91bnQgJiYgZWxlbWVudC53aWxsVW5tb3VudCgpKSk7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBcImJsb2NrXCIpIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShcImRpc3BsYXlcIiwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG4gIFxuICBpc0Rpc3BsYXllZCgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5zdHlsZShcImRpc3BsYXlcIiksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09IFwibm9uZVwiKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gY29tcHV0ZWRTdHlsZVswXSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBnZXREZXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlKSxcbiAgICAgICAgICBkZXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZGVzY2VuZGFudERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGFzY2VuZGFudERPTUVsZW1lbnRzID0gW10sXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgbGV0IGFzY2VuZGFudERPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG4gICAgd2hpbGUgKGFzY2VuZGFudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChhc2NlbmRhbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFzY2VuZGFudERPTUVsZW1lbnRzLnB1c2goYXNjZW5kYW50RE9NRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGFzY2VuZGFudERPTUVsZW1lbnQgPSBhc2NlbmRhbnRET01FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gYXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gICAgaWYgKChwcmV2aW91c1NpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKHByZXZpb3VzU2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7XG5cbiAgICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgbmV4dFNpYmxpbmdFbGVtZW50ID0gbmV4dFNpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZnJvbVRhZ05hbWUoRWxlbWVudCwgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBDbGFzcy50YWdOYW1lLFxuICAgICAgICAgIGVsZW1lbnQgPSBmcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBqc3hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHN0YXRlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHJlc2l6ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuXG5mdW5jdGlvbiBmcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIHJldHVybiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcblxuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFByb3BlcnRpZXNcIikpIHtcbiAgICBjb21iaW5lKGRlZmF1bHRQcm9wZXJ0aWVzLCBDbGFzcy5kZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KFwiaWdub3JlZFByb3BlcnRpZXNcIikpIHtcbiAgICBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzcy5pZ25vcmVkUHJvcGVydGllcywgKGlnbm9yZWRQcm9wZXJ0eSkgPT4gIWlnbm9yZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGlnbm9yZWRQcm9wZXJ0eSkpO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBpZ25vcmVkUHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gaWdub3JlZFByb3BlcnRpZXM7XG59XG4iXX0=