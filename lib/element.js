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
      var descendantElements = this.getDescendantElements();
      this.add(element);
      descendantElements.forEach(function (descendantElement) {
        return descendantElement.didMount && descendantElement.didMount();
      }); ///
    }
  }, {
    key: "unmount",
    value: function unmount(element) {
      var descendantElements = this.getDescendantElements();
      descendantElements.forEach(function (descendantElement) {
        return descendantElement.willUnmount && descendantElement.willUnmount();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInNlbGVjdG9yT3JET01FbGVtZW50Iiwic2VsZWN0b3IiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX19lbGVtZW50X18iLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsIk9mZnNldCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kcyIsIkJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJpbmNsdWRlQm9yZGVyIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJuYW1lIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZSIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsInByZXBlbmQiLCJhcHBlbmQiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImVsZW1lbnQiLCJmaXJzdENoaWxkRE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImRlc2NlbmRhbnRFbGVtZW50cyIsImdldERlc2NlbmRhbnRFbGVtZW50cyIsImZvckVhY2giLCJkZXNjZW5kYW50RWxlbWVudCIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJkaXNwbGF5U3R5bGUiLCJkaXNwbGF5IiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwiZW5hYmxlZCIsImRpc3BsYXllZCIsImlzRGlzcGxheWVkIiwic2hvd2luZyIsImhpZGRlbiIsInVuZGVmaW5lZCIsImh0bWwiLCJpbm5lckhUTUwiLCJjc3MiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImluZGV4IiwibGVuZ3RoIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImJsdXIiLCJmb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJkb21Ob2RlIiwiZGVzY2VuZGFudERPTU5vZGVzIiwiZGVzY2VuZGFudERPTUVsZW1lbnRzIiwiY2hpbGRET01Ob2RlcyIsImNoaWxkTm9kZXMiLCJjaGlsZERPTUVsZW1lbnRzIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudERPTUVsZW1lbnQiLCJtYXRjaGVzIiwicGFyZW50RE9NRWxlbWVudHMiLCJwYXJlbnRFbGVtZW50cyIsImZpcnN0UGFyZW50RWxlbWVudCIsImFzY2VuZGFudERPTUVsZW1lbnRzIiwiYXNjZW5kYW50RE9NRWxlbWVudCIsInB1c2giLCJhc2NlbmRhbnRFbGVtZW50cyIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdET01Ob2RlIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmdFbGVtZW50IiwibmV4dFNpYmxpbmdET01Ob2RlIiwidGFnTmFtZSIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJmcm9tVGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJhcHBseVByb3BlcnRpZXMiLCJDbGFzcyIsImRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJqc3hNaXhpbnMiLCJrZXlNaXhpbnMiLCJjbGlja01peGlucyIsInN0YXRlTWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJtb3VzZU1peGlucyIsInJlc2l6ZU1peGlucyIsInNjcm9sbE1peGlucyIsImNyZWF0ZUVsZW1lbnROUyIsIlNWR19OQU1FU1BBQ0VfVVJJIiwiY3JlYXRlRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwidW5zaGlmdCIsIkZ1bmN0aW9uIiwiYmluZCIsImNhbGwiLCJoYXNPd25Qcm9wZXJ0eSIsInN1cGVyQ2xhc3MiLCJnZXRQcm90b3R5cGVPZiIsImlnbm9yZWRQcm9wZXJ0eSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLE87QUFDSixtQkFBWUMsb0JBQVosRUFBa0M7QUFBQTs7QUFDaEMsUUFBSSxPQUFPQSxvQkFBUCxLQUFnQyxRQUFwQyxFQUE4QztBQUM1QyxVQUFNQyxRQUFRLEdBQUdELG9CQUFqQjtBQUVBLFdBQUtFLFVBQUwsR0FBa0JDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkgsUUFBdkIsQ0FBbEI7QUFDRCxLQUpELE1BSU87QUFDTCxVQUFNQyxVQUFVLEdBQUdGLG9CQUFuQixDQURLLENBQ3FDOztBQUUxQyxXQUFLRSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOztBQUVELFNBQUtBLFVBQUwsQ0FBZ0JHLFdBQWhCLEdBQThCLElBQTlCLENBWGdDLENBV0k7QUFDckM7Ozs7b0NBRWU7QUFDZCxhQUFPLEtBQUtILFVBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUksR0FBRyxHQUFHLEtBQUtKLFVBQUwsQ0FBZ0JLLFNBQTVCO0FBQUEsVUFBd0M7QUFDbENDLE1BQUFBLElBQUksR0FBRyxLQUFLTixVQUFMLENBQWdCTyxVQUQ3QjtBQUFBLFVBQzBDO0FBQ3BDQyxNQUFBQSxNQUFNLEdBQUcsSUFBSUMsa0JBQUosQ0FBV0wsR0FBWCxFQUFnQkUsSUFBaEIsQ0FGZjtBQUlBLGFBQU9FLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUUsa0JBQWtCLEdBQUcsS0FBS1Ys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RCxNQUFNRixVQUFVLEdBQUd2RCxNQUFNLENBQUN3RCxjQUFQLENBQXNCdkIsS0FBdEIsQ0FBbkI7O0FBRUEsTUFBSXNCLFVBQVUsS0FBSyxJQUFuQixFQUF5QjtBQUN2QnBCLElBQUFBLDBCQUEwQixDQUFDb0IsVUFBRCxFQUFheEIsaUJBQWIsQ0FBMUI7QUFDRDs7QUFFRCxTQUFPQSxpQkFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBPZmZzZXQgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9vZmZzZXRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgcmVzaXplTWl4aW5zIGZyb20gXCIuL21peGlucy9yZXNpemVcIjtcbmltcG9ydCBzY3JvbGxNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Njcm9sbFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL29iamVjdFwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IGZpcnN0LCBhdWdtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTVkdfTkFNRVNQQUNFX1VSSSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZG9tTm9kZU1hdGNoZXNTZWxlY3RvciwgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMsIGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvciwgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvZG9tXCI7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRE9NRWxlbWVudCkge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3JPckRPTUVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0b3JPckRPTUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gc2VsZWN0b3JPckRPTUVsZW1lbnQ7ICAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHdpZHRoID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFwid2lkdGhcIiwgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG4gIH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgbW91bnQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IHRoaXMuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCk7XG5cbiAgICB0aGlzLmFkZChlbGVtZW50KTtcblxuICAgIGRlc2NlbmRhbnRFbGVtZW50cy5mb3JFYWNoKChkZXNjZW5kYW50RWxlbWVudCkgPT4gKGRlc2NlbmRhbnRFbGVtZW50LmRpZE1vdW50ICYmIGRlc2NlbmRhbnRFbGVtZW50LmRpZE1vdW50KCkpKTsgIC8vL1xuICB9XG5cbiAgdW5tb3VudChlbGVtZW50KSB7XG4gICAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gdGhpcy5nZXREZXNjZW5kYW50RWxlbWVudHMoKTtcblxuICAgIGRlc2NlbmRhbnRFbGVtZW50cy5mb3JFYWNoKChkZXNjZW5kYW50RWxlbWVudCkgPT4gKGRlc2NlbmRhbnRFbGVtZW50LndpbGxVbm1vdW50ICYmIGRlc2NlbmRhbnRFbGVtZW50LndpbGxVbm1vdW50KCkpKTsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gIH1cblxuICBzaG93KGRpc3BsYXlTdHlsZSA9IFwiYmxvY2tcIikgeyB0aGlzLmRpc3BsYXkoZGlzcGxheVN0eWxlKTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTsgfVxuXG4gIGRpc3BsYXkoZGlzcGxheSkgeyB0aGlzLnN0eWxlKFwiZGlzcGxheVwiLCBkaXNwbGF5KTsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShcImRpc2FibGVkXCIpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpOyB9XG5cbiAgaXNFbmFibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgZW5hYmxlZCA9ICFkaXNhYmxlZDtcblxuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLnN0eWxlKFwiZGlzcGxheVwiKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gXCJub25lXCIpO1xuICAgIFxuICAgIHJldHVybiBkaXNwbGF5ZWQ7XG4gIH1cblxuICBpc1Nob3dpbmcoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIHNob3dpbmcgPSBkaXNwbGF5ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzaG93aW5nO1xuICB9XG5cbiAgaXNIaWRkZW4oKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIGhpZGRlbiA9ICFkaXNwbGF5ZWQ7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgc3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdO1xuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wdXRlZFN0eWxlWzBdLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgYmx1cigpIHsgdGhpcy5kb21FbGVtZW50LmJsdXIoKTsgfVxuXG4gIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIGdldERlc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUpLFxuICAgICAgICAgIGRlc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkZXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGNoaWxkRE9NTm9kZXMgPSB0aGlzLmRvbUVsZW1lbnQuY2hpbGROb2RlcyxcbiAgICAgICAgICBjaGlsZERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGNoaWxkRE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGxldCBwYXJlbnRFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChwYXJlbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAocGFyZW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50cyA9IFtwYXJlbnRET01FbGVtZW50XSxcbiAgICAgICAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKTtcblxuICAgICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBnZXRBc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgY29uc3QgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBsZXQgYXNjZW5kYW50RE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cbiAgICB3aGlsZSAoYXNjZW5kYW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGFzY2VuZGFudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMucHVzaChhc2NlbmRhbnRET01FbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgYXNjZW5kYW50RE9NRWxlbWVudCA9IGFzY2VuZGFudERPTUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBhc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGFzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBhc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGxldCBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHByZXZpb3VzU2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQucHJldmlvdXNTaWJsaW5nOyAgLy8vXG5cbiAgICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xuICB9XG5cbiAgZ2V0TmV4dFNpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgbmV4dFNpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5uZXh0U2libGluZztcblxuICAgIGlmICgobmV4dFNpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKG5leHRTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBuZXh0U2libGluZ0VsZW1lbnQgPSBuZXh0U2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFNpYmxpbmdFbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBmcm9tVGFnTmFtZShFbGVtZW50LCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30sIC8vL1xuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107IC8vL1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IENsYXNzLnRhZ05hbWUsXG4gICAgICAgICAgZWxlbWVudCA9IGZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpLFxuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpO1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc3RhdGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHNjcm9sbE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFX1VSSSwgdGFnTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgcmV0dXJuIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuXG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0UHJvcGVydGllc1wiKSkge1xuICAgIGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzLmRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRQcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgaWdub3JlZFByb3BlcnRpZXMgPSBbXSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoXCJpZ25vcmVkUHJvcGVydGllc1wiKSkge1xuICAgIGF1Z21lbnQoaWdub3JlZFByb3BlcnRpZXMsIENsYXNzLmlnbm9yZWRQcm9wZXJ0aWVzLCAoaWdub3JlZFByb3BlcnR5KSA9PiAhaWdub3JlZFByb3BlcnRpZXMuaW5jbHVkZXMoaWdub3JlZFByb3BlcnR5KSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBpZ25vcmVkUHJvcGVydGllcztcbn1cbiJdfQ==