"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _offset = _interopRequireDefault(require("./miscellaneous/offset"));

var _bounds = _interopRequireDefault(require("./miscellaneous/bounds"));

var _object = require("./utilities/object");

var _name2 = require("./utilities/name");

var _array = require("./utilities/array");

var _constants = require("./constants");

var _dom = require("./utilities/dom");

var _click = require("./mixins/click");

var _resize = require("./mixins/resize");

var _state = require("./mixins/state");

var _key5 = require("./mixins/key");

var _event = require("./mixins/event");

var _jsx = require("./mixins/jsx");

var _scroll = require("./mixins/scroll");

var _mouse = require("./mixins/mouse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Element = /*#__PURE__*/function () {
  function Element(selectorOrDOMElement) {
    _classCallCheck(this, Element);

    _defineProperty(this, "on", _event.on);

    _defineProperty(this, "off", _event.off);

    _defineProperty(this, "onClick", _click.onClick);

    _defineProperty(this, "offClick", _click.offClick);

    _defineProperty(this, "onResize", _resize.onResize);

    _defineProperty(this, "offResize", _resize.offResize);

    _defineProperty(this, "getState", _state.getState);

    _defineProperty(this, "setState", _state.setState);

    _defineProperty(this, "updateState", _state.updateState);

    _defineProperty(this, "onKeyUp", _key5.onKeyUp);

    _defineProperty(this, "offKeyUp", _key5.offKeyUp);

    _defineProperty(this, "onKeyDown", _key5.onKeyDown);

    _defineProperty(this, "offKeyDown", _key5.offKeyDown);

    _defineProperty(this, "onMouseUp", _mouse.onMouseUp);

    _defineProperty(this, "onMouseDown", _mouse.onMouseDown);

    _defineProperty(this, "onMouseOver", _mouse.onMouseOver);

    _defineProperty(this, "onMouseOut", _mouse.onMouseOut);

    _defineProperty(this, "onMouseMove", _mouse.onMouseMove);

    _defineProperty(this, "offMouseUp", _mouse.offMouseUp);

    _defineProperty(this, "offMouseDown", _mouse.offMouseDown);

    _defineProperty(this, "offMouseOver", _mouse.offMouseOver);

    _defineProperty(this, "offMouseOut", _mouse.offMouseOut);

    _defineProperty(this, "offMouseMove", _mouse.offMouseMove);

    _defineProperty(this, "onScroll", _scroll.onScroll);

    _defineProperty(this, "offScroll", _scroll.offScroll);

    _defineProperty(this, "getScrollTop", _scroll.getScrollTop);

    _defineProperty(this, "getScrollLeft", _scroll.getScrollLeft);

    _defineProperty(this, "setScrollTop", _scroll.setScrollTop);

    _defineProperty(this, "setScrollLeft", _scroll.setScrollLeft);

    _defineProperty(this, "getContext", _jsx.getContext);

    _defineProperty(this, "getProperties", _jsx.getProperties);

    _defineProperty(this, "assignContext", _jsx.assignContext);

    _defineProperty(this, "applyProperties", _jsx.applyProperties);

    _defineProperty(this, "addEventListener", _event.addEventListener);

    _defineProperty(this, "removeEventListener", _event.removeEventListener);

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
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
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

exports["default"] = Element;

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

  if (Class.hasOwnProperty("className")) {
    var className = Class.className;
    Object.assign(defaultProperties, {
      className: className
    });
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInNlbGVjdG9yT3JET01FbGVtZW50Iiwib24iLCJvZmYiLCJvbkNsaWNrIiwib2ZmQ2xpY2siLCJvblJlc2l6ZSIsIm9mZlJlc2l6ZSIsImdldFN0YXRlIiwic2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsIm9uS2V5VXAiLCJvZmZLZXlVcCIsIm9uS2V5RG93biIsIm9mZktleURvd24iLCJvbk1vdXNlVXAiLCJvbk1vdXNlRG93biIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm9uTW91c2VNb3ZlIiwib2ZmTW91c2VVcCIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlT3ZlciIsIm9mZk1vdXNlT3V0Iiwib2ZmTW91c2VNb3ZlIiwib25TY3JvbGwiLCJvZmZTY3JvbGwiLCJnZXRTY3JvbGxUb3AiLCJnZXRTY3JvbGxMZWZ0Iiwic2V0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsTGVmdCIsImdldENvbnRleHQiLCJnZXRQcm9wZXJ0aWVzIiwiYXNzaWduQ29udGV4dCIsImFwcGx5UHJvcGVydGllcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VsZWN0b3IiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX19lbGVtZW50X18iLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsIk9mZnNldCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kcyIsIkJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJpbmNsdWRlQm9yZGVyIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJuYW1lIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZSIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsInByZXBlbmQiLCJhcHBlbmQiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImVsZW1lbnQiLCJmaXJzdENoaWxkRE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImRpc3BsYXlTdHlsZSIsImRpc3BsYXkiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJlbmFibGVkIiwiZGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJzaG93aW5nIiwiaGlkZGVuIiwidW5kZWZpbmVkIiwiaHRtbCIsImlubmVySFRNTCIsImNzcyIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJnZXRQcm9wZXJ0eVZhbHVlIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImJsdXIiLCJmb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJkb21Ob2RlIiwiZGVzY2VuZGFudERPTU5vZGVzIiwiZGVzY2VuZGFudERPTUVsZW1lbnRzIiwiZGVzY2VuZGFudEVsZW1lbnRzIiwiY2hpbGRET01Ob2RlcyIsImNoaWxkTm9kZXMiLCJjaGlsZERPTUVsZW1lbnRzIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudERPTUVsZW1lbnQiLCJtYXRjaGVzIiwicGFyZW50RE9NRWxlbWVudHMiLCJwYXJlbnRFbGVtZW50cyIsImZpcnN0UGFyZW50RWxlbWVudCIsImFzY2VuZGFudERPTUVsZW1lbnRzIiwiYXNjZW5kYW50RE9NRWxlbWVudCIsInB1c2giLCJhc2NlbmRhbnRFbGVtZW50cyIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdET01Ob2RlIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmdFbGVtZW50IiwibmV4dFNpYmxpbmdET01Ob2RlIiwidGFnTmFtZSIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJmcm9tVGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJDbGFzcyIsImRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJjcmVhdGVFbGVtZW50TlMiLCJTVkdfTkFNRVNQQUNFX1VSSSIsImNyZWF0ZUVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsInVuc2hpZnQiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsImJpbmQiLCJjYWxsIiwiaGFzT3duUHJvcGVydHkiLCJhc3NpZ24iLCJzdXBlckNsYXNzIiwiZ2V0UHJvdG90eXBlT2YiLCJpZ25vcmVkUHJvcGVydHkiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPO0FBNkNuQixtQkFBWUMsb0JBQVosRUFBa0M7QUFBQTs7QUFBQSxnQ0E1QzdCQyxTQTRDNkI7O0FBQUEsaUNBM0M1QkMsVUEyQzRCOztBQUFBLHFDQXpDeEJDLGNBeUN3Qjs7QUFBQSxzQ0F4Q3ZCQyxlQXdDdUI7O0FBQUEsc0NBdEN2QkMsZ0JBc0N1Qjs7QUFBQSx1Q0FyQ3RCQyxpQkFxQ3NCOztBQUFBLHNDQW5DdkJDLGVBbUN1Qjs7QUFBQSxzQ0FsQ3ZCQyxlQWtDdUI7O0FBQUEseUNBakNwQkMsa0JBaUNvQjs7QUFBQSxxQ0EvQnhCQyxhQStCd0I7O0FBQUEsc0NBOUJ2QkMsY0E4QnVCOztBQUFBLHVDQTdCdEJDLGVBNkJzQjs7QUFBQSx3Q0E1QnJCQyxnQkE0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QVNJLDBCQUFULENBQW9DRixLQUFwQyxFQUFtRTtBQUFBLE1BQXhCRCxpQkFBd0IsdUVBQUosRUFBSTs7QUFDakUsTUFBSUMsS0FBSyxDQUFDWSxjQUFOLENBQXFCLG1CQUFyQixDQUFKLEVBQStDO0FBQzdDLHdCQUFRYixpQkFBUixFQUEyQkMsS0FBSyxDQUFDRCxpQkFBakMsRUFBb0QsVUFBQ2lCLGVBQUQ7QUFBQSxhQUFxQixDQUFDakIsaUJBQWlCLENBQUNrQixRQUFsQixDQUEyQkQsZUFBM0IsQ0FBdEI7QUFBQSxLQUFwRDtBQUNEOztBQUVELE1BQU1GLFVBQVUsR0FBR2hELE1BQU0sQ0FBQ2lELGNBQVAsQ0FBc0JmLEtBQXRCLENBQW5COztBQUVBLE1BQUljLFVBQVUsS0FBSyxJQUFuQixFQUF5QjtBQUN2QlosSUFBQUEsMEJBQTBCLENBQUNZLFVBQUQsRUFBYWYsaUJBQWIsQ0FBMUI7QUFDRDs7QUFFRCxTQUFPQSxpQkFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBPZmZzZXQgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9vZmZzZXRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9ib3VuZHNcIjtcblxuaW1wb3J0IHsgY29tYmluZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBmaXJzdCwgYXVnbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgU1ZHX05BTUVTUEFDRV9VUkkgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2RvbVwiO1xuXG5pbXBvcnQgeyBvbkNsaWNrLCBvZmZDbGljayB9IGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHsgb25SZXNpemUsIG9mZlJlc2l6ZSB9IGZyb20gXCIuL21peGlucy9yZXNpemVcIjtcbmltcG9ydCB7IGdldFN0YXRlLCBzZXRTdGF0ZSwgdXBkYXRlU3RhdGUgfSBmcm9tIFwiLi9taXhpbnMvc3RhdGVcIjtcbmltcG9ydCB7IG9uS2V5VXAsIG9mZktleVVwLCBvbktleURvd24sIG9mZktleURvd24gfSBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgeyBvbiwgb2ZmLCBhZGRFdmVudExpc3RlbmVyLCByZW1vdmVFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgeyBnZXRDb250ZXh0LCBnZXRQcm9wZXJ0aWVzLCBhc3NpZ25Db250ZXh0LCBhcHBseVByb3BlcnRpZXMgfSBmcm9tIFwiLi9taXhpbnMvanN4XCI7XG5pbXBvcnQgeyBvblNjcm9sbCwgb2ZmU2Nyb2xsLCBnZXRTY3JvbGxUb3AsIGdldFNjcm9sbExlZnQsIHNldFNjcm9sbFRvcCwgc2V0U2Nyb2xsTGVmdCB9IGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCB7IG9uTW91c2VVcCwgb25Nb3VzZURvd24sIG9uTW91c2VPdmVyLCBvbk1vdXNlT3V0LCBvbk1vdXNlTW92ZSwgb2ZmTW91c2VVcCwgb2ZmTW91c2VEb3duLCBvZmZNb3VzZU92ZXIsIG9mZk1vdXNlT3V0LCBvZmZNb3VzZU1vdmUgfSBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIG9uID0gb247XG4gIG9mZiA9IG9mZjtcblxuICBvbkNsaWNrID0gb25DbGljaztcbiAgb2ZmQ2xpY2sgPSBvZmZDbGljaztcblxuICBvblJlc2l6ZSA9IG9uUmVzaXplO1xuICBvZmZSZXNpemUgPSBvZmZSZXNpemU7XG5cbiAgZ2V0U3RhdGUgPSBnZXRTdGF0ZTtcbiAgc2V0U3RhdGUgPSBzZXRTdGF0ZTtcbiAgdXBkYXRlU3RhdGUgPSB1cGRhdGVTdGF0ZTtcblxuICBvbktleVVwID0gb25LZXlVcDtcbiAgb2ZmS2V5VXAgPSBvZmZLZXlVcDtcbiAgb25LZXlEb3duID0gb25LZXlEb3duO1xuICBvZmZLZXlEb3duID0gb2ZmS2V5RG93bjtcblxuICBvbk1vdXNlVXAgPSBvbk1vdXNlVXA7XG4gIG9uTW91c2VEb3duID0gb25Nb3VzZURvd247XG4gIG9uTW91c2VPdmVyID0gb25Nb3VzZU92ZXI7XG4gIG9uTW91c2VPdXQgPSBvbk1vdXNlT3V0O1xuICBvbk1vdXNlTW92ZSA9IG9uTW91c2VNb3ZlO1xuICBvZmZNb3VzZVVwID0gb2ZmTW91c2VVcDtcbiAgb2ZmTW91c2VEb3duID0gb2ZmTW91c2VEb3duO1xuICBvZmZNb3VzZU92ZXIgPSBvZmZNb3VzZU92ZXI7XG4gIG9mZk1vdXNlT3V0ID0gb2ZmTW91c2VPdXQ7XG4gIG9mZk1vdXNlTW92ZSA9IG9mZk1vdXNlTW92ZTtcblxuICBvblNjcm9sbCA9IG9uU2Nyb2xsO1xuICBvZmZTY3JvbGwgPSBvZmZTY3JvbGw7XG4gIGdldFNjcm9sbFRvcCA9IGdldFNjcm9sbFRvcDtcbiAgZ2V0U2Nyb2xsTGVmdCA9IGdldFNjcm9sbExlZnQ7XG4gIHNldFNjcm9sbFRvcCA9IHNldFNjcm9sbFRvcDtcbiAgc2V0U2Nyb2xsTGVmdCA9IHNldFNjcm9sbExlZnQ7XG5cbiAgZ2V0Q29udGV4dCA9IGdldENvbnRleHQ7XG4gIGdldFByb3BlcnRpZXMgPSBnZXRQcm9wZXJ0aWVzO1xuICBhc3NpZ25Db250ZXh0ID0gYXNzaWduQ29udGV4dDtcbiAgYXBwbHlQcm9wZXJ0aWVzID0gYXBwbHlQcm9wZXJ0aWVzO1xuXG4gIGFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xuICByZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRE9NRWxlbWVudCkge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3JPckRPTUVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0b3JPckRPTUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gc2VsZWN0b3JPckRPTUVsZW1lbnQ7ICAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHdpZHRoID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFwid2lkdGhcIiwgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG4gIH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBcImJsb2NrXCIpIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShcImRpc3BsYXlcIiwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG4gIFxuICBpc0Rpc3BsYXllZCgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5zdHlsZShcImRpc3BsYXlcIiksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09IFwibm9uZVwiKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gY29tcHV0ZWRTdHlsZVswXSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBnZXREZXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlKSxcbiAgICAgICAgICBkZXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZGVzY2VuZGFudERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGFzY2VuZGFudERPTUVsZW1lbnRzID0gW10sXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgbGV0IGFzY2VuZGFudERPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG4gICAgd2hpbGUgKGFzY2VuZGFudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChhc2NlbmRhbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFzY2VuZGFudERPTUVsZW1lbnRzLnB1c2goYXNjZW5kYW50RE9NRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGFzY2VuZGFudERPTUVsZW1lbnQgPSBhc2NlbmRhbnRET01FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gYXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gICAgaWYgKChwcmV2aW91c1NpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKHByZXZpb3VzU2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7XG5cbiAgICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgbmV4dFNpYmxpbmdFbGVtZW50ID0gbmV4dFNpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZnJvbVRhZ05hbWUoRWxlbWVudCwgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IENsYXNzLnRhZ05hbWUsXG4gICAgICAgICAgZWxlbWVudCA9IGZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpLFxuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpO1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIGZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFX1VSSSwgdGFnTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgcmV0dXJuIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuXG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoXCJjbGFzc05hbWVcIikpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBDbGFzcy5jbGFzc05hbWU7XG5cbiAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRQcm9wZXJ0aWVzLCB7XG4gICAgICBjbGFzc05hbWVcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRQcm9wZXJ0aWVzXCIpKSB7XG4gICAgY29tYmluZShkZWZhdWx0UHJvcGVydGllcywgQ2xhc3MuZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShcImlnbm9yZWRQcm9wZXJ0aWVzXCIpKSB7XG4gICAgYXVnbWVudChpZ25vcmVkUHJvcGVydGllcywgQ2xhc3MuaWdub3JlZFByb3BlcnRpZXMsIChpZ25vcmVkUHJvcGVydHkpID0+ICFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIl19