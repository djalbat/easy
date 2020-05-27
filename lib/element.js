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
      this.add(element);
      var descendantElements = this.getDescendantElements();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInNlbGVjdG9yT3JET01FbGVtZW50Iiwic2VsZWN0b3IiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX19lbGVtZW50X18iLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsIk9mZnNldCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kcyIsIkJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJpbmNsdWRlQm9yZGVyIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJuYW1lIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZSIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsInByZXBlbmQiLCJhcHBlbmQiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImVsZW1lbnQiLCJmaXJzdENoaWxkRE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImRlc2NlbmRhbnRFbGVtZW50cyIsImdldERlc2NlbmRhbnRFbGVtZW50cyIsImZvckVhY2giLCJkZXNjZW5kYW50RWxlbWVudCIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJkaXNwbGF5U3R5bGUiLCJkaXNwbGF5IiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwiZW5hYmxlZCIsImRpc3BsYXllZCIsImlzRGlzcGxheWVkIiwic2hvd2luZyIsImhpZGRlbiIsInVuZGVmaW5lZCIsImh0bWwiLCJpbm5lckhUTUwiLCJjc3MiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImluZGV4IiwibGVuZ3RoIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImJsdXIiLCJmb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJkb21Ob2RlIiwiZGVzY2VuZGFudERPTU5vZGVzIiwiZGVzY2VuZGFudERPTUVsZW1lbnRzIiwiY2hpbGRET01Ob2RlcyIsImNoaWxkTm9kZXMiLCJjaGlsZERPTUVsZW1lbnRzIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudERPTUVsZW1lbnQiLCJtYXRjaGVzIiwicGFyZW50RE9NRWxlbWVudHMiLCJwYXJlbnRFbGVtZW50cyIsImZpcnN0UGFyZW50RWxlbWVudCIsImFzY2VuZGFudERPTUVsZW1lbnRzIiwiYXNjZW5kYW50RE9NRWxlbWVudCIsInB1c2giLCJhc2NlbmRhbnRFbGVtZW50cyIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdET01Ob2RlIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmdFbGVtZW50IiwibmV4dFNpYmxpbmdET01Ob2RlIiwidGFnTmFtZSIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJmcm9tVGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJhcHBseVByb3BlcnRpZXMiLCJDbGFzcyIsImRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJqc3hNaXhpbnMiLCJrZXlNaXhpbnMiLCJjbGlja01peGlucyIsInN0YXRlTWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJtb3VzZU1peGlucyIsInJlc2l6ZU1peGlucyIsInNjcm9sbE1peGlucyIsImNyZWF0ZUVsZW1lbnROUyIsIlNWR19OQU1FU1BBQ0VfVVJJIiwiY3JlYXRlRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwidW5zaGlmdCIsIkZ1bmN0aW9uIiwiYmluZCIsImNhbGwiLCJoYXNPd25Qcm9wZXJ0eSIsInN1cGVyQ2xhc3MiLCJnZXRQcm90b3R5cGVPZiIsImlnbm9yZWRQcm9wZXJ0eSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLE87QUFDSixtQkFBWUMsb0JBQVosRUFBa0M7QUFBQTs7QUFDaEMsUUFBSSxPQUFPQSxvQkFBUCxLQUFnQyxRQUFwQyxFQUE4QztBQUM1QyxVQUFNQyxRQUFRLEdBQUdELG9CQUFqQjtBQUVBLFdBQUtFLFVBQUwsR0FBa0JDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkgsUUFBdkIsQ0FBbEI7QUFDRCxLQUpELE1BSU87QUFDTCxVQUFNQyxVQUFVLEdBQUdGLG9CQUFuQixDQURLLENBQ3FDOztBQUUxQyxXQUFLRSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOztBQUVELFNBQUtBLFVBQUwsQ0FBZ0JHLFdBQWhCLEdBQThCLElBQTlCLENBWGdDLENBV0k7QUFDckM7Ozs7b0NBRWU7QUFDZCxhQUFPLEtBQUtILFVBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUksR0FBRyxHQUFHLEtBQUtKLFVBQUwsQ0FBZ0JLLFNBQTVCO0FBQUEsVUFBd0M7QUFDbENDLE1BQUFBLElBQUksR0FBRyxLQUFLTixVQUFMLENBQWdCTyxVQUQ3QjtBQUFBLFVBQzBDO0FBQ3BDQyxNQUFBQSxNQUFNLEdBQUcsSUFBSUMsa0JBQUosQ0FBV0wsR0FBWCxFQUFnQkUsSUFBaEIsQ0FGZjtBQUlBLGFBQU9FLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUUsa0JBQWtCLEdBQUcsS0FBS1Ys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LE1BQU1GLFVBQVUsR0FBR3ZELE1BQU0sQ0FBQ3dELGNBQVAsQ0FBc0J2QixLQUF0QixDQUFuQjs7QUFFQSxNQUFJc0IsVUFBVSxLQUFLLElBQW5CLEVBQXlCO0FBQ3ZCcEIsSUFBQUEsMEJBQTBCLENBQUNvQixVQUFELEVBQWF4QixpQkFBYixDQUExQjtBQUNEOztBQUVELFNBQU9BLGlCQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL2JvdW5kc1wiO1xuaW1wb3J0IGpzeE1peGlucyBmcm9tIFwiLi9taXhpbnMvanN4XCI7XG5pbXBvcnQga2V5TWl4aW5zIGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCBjbGlja01peGlucyBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcbmltcG9ydCBzdGF0ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3RhdGVcIjtcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCBtb3VzZU1peGlucyBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcbmltcG9ydCByZXNpemVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Jlc2l6ZVwiO1xuaW1wb3J0IHNjcm9sbE1peGlucyBmcm9tIFwiLi9taXhpbnMvc2Nyb2xsXCI7XG5cbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgZmlyc3QsIGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNWR19OQU1FU1BBQ0VfVVJJIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yLCBlbGVtZW50c0Zyb21ET01FbGVtZW50cywgZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yLCBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9kb21cIjtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JET01FbGVtZW50KSB7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3Rvck9yRE9NRWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3Rvck9yRE9NRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBzZWxlY3Rvck9yRE9NRWxlbWVudDsgIC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgIH1cblxuICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7IC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoXCJ3aWR0aFwiLCB3aWR0aCk7XG4gIH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBcIlwiOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VudChlbGVtZW50KSB7XG4gICAgdGhpcy5hZGQoZWxlbWVudCk7XG5cbiAgICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSB0aGlzLmdldERlc2NlbmRhbnRFbGVtZW50cygpO1xuXG4gICAgZGVzY2VuZGFudEVsZW1lbnRzLmZvckVhY2goKGRlc2NlbmRhbnRFbGVtZW50KSA9PiAoZGVzY2VuZGFudEVsZW1lbnQuZGlkTW91bnQgJiYgZGVzY2VuZGFudEVsZW1lbnQuZGlkTW91bnQoKSkpOyAgLy8vXG4gIH1cblxuICB1bm1vdW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSB0aGlzLmdldERlc2NlbmRhbnRFbGVtZW50cygpO1xuXG4gICAgZGVzY2VuZGFudEVsZW1lbnRzLmZvckVhY2goKGRlc2NlbmRhbnRFbGVtZW50KSA9PiAoZGVzY2VuZGFudEVsZW1lbnQud2lsbFVubW91bnQgJiYgZGVzY2VuZGFudEVsZW1lbnQud2lsbFVubW91bnQoKSkpOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gXCJibG9ja1wiKSB7IHRoaXMuZGlzcGxheShkaXNwbGF5U3R5bGUpOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoXCJkaXNwbGF5XCIsIGRpc3BsYXkpOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7IH1cblxuICBpc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBlbmFibGVkID0gIWRpc2FibGVkO1xuXG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuICBcbiAgaXNEaXNwbGF5ZWQoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMuc3R5bGUoXCJkaXNwbGF5XCIpLFxuICAgICAgICAgIGRpc3BsYXllZCA9IChkaXNwbGF5ICE9PSBcIm5vbmVcIik7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gIGlzU2hvd2luZygpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgc2hvd2luZyA9IGRpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgaGlkZGVuID0gIWRpc3BsYXllZDtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG4gIH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNvbXB1dGVkU3R5bGVbMF0sICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbGV0IG5hbWUgPSBjc3M7IC8vL1xuXG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICBjc3MgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKGNzcyk7IC8vL1xuXG4gICAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY3NzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuc3R5bGUobmFtZSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFxuICBibHVyKCkgeyB0aGlzLmRvbUVsZW1lbnQuYmx1cigpOyB9XG5cbiAgZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBjb25zdCBkb21Ob2RlID0gdGhpcy5kb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgZGVzY2VuZGFudERPTU5vZGVzID0gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSksXG4gICAgICAgICAgZGVzY2VuZGFudERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGRlc2NlbmRhbnRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICAgIGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRlc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZGVzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0Q2hpbGRFbGVtZW50cyhzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgY29uc3QgY2hpbGRET01Ob2RlcyA9IHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLFxuICAgICAgICAgIGNoaWxkRE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoY2hpbGRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0UGFyZW50RWxlbWVudChzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKHBhcmVudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnRzID0gW3BhcmVudERPTUVsZW1lbnRdLFxuICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBjb25zdCBhc2NlbmRhbnRET01FbGVtZW50cyA9IFtdLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGxldCBhc2NlbmRhbnRET01FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuICAgIHdoaWxlIChhc2NlbmRhbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAoYXNjZW5kYW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhc2NlbmRhbnRET01FbGVtZW50cy5wdXNoKGFzY2VuZGFudERPTUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBhc2NlbmRhbnRET01FbGVtZW50ID0gYXNjZW5kYW50RE9NRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGFzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoYXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgbGV0IHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcHJldmlvdXNTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5wcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICAgIGlmICgocHJldmlvdXNTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihwcmV2aW91c1NpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSBwcmV2aW91c1NpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZpb3VzU2libGluZ0VsZW1lbnQ7XG4gIH1cblxuICBnZXROZXh0U2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGxldCBuZXh0U2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nO1xuXG4gICAgaWYgKChuZXh0U2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IobmV4dFNpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIG5leHRTaWJsaW5nRWxlbWVudCA9IG5leHRTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0U2libGluZ0VsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGZyb21UYWdOYW1lKEVsZW1lbnQsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSwgLy8vXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBbXTsgLy8vXG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gQ2xhc3MudGFnTmFtZSxcbiAgICAgICAgICBlbGVtZW50ID0gZnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDtcblxuZnVuY3Rpb24gZnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0VfVVJJLCB0YWdOYW1lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICByZXR1cm4gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG5cbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRQcm9wZXJ0aWVzXCIpKSB7XG4gICAgY29tYmluZShkZWZhdWx0UHJvcGVydGllcywgQ2xhc3MuZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShcImlnbm9yZWRQcm9wZXJ0aWVzXCIpKSB7XG4gICAgYXVnbWVudChpZ25vcmVkUHJvcGVydGllcywgQ2xhc3MuaWdub3JlZFByb3BlcnRpZXMsIChpZ25vcmVkUHJvcGVydHkpID0+ICFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIl19