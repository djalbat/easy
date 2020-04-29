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

var _jsx = require("./mixins/jsx");

var _scroll = require("./mixins/scroll");

var _event = require("./mixins/event");

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

    _defineProperty(this, "findEventListener", _event.findEventListener);

    _defineProperty(this, "findEventListeners", _event.findEventListeners);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInNlbGVjdG9yT3JET01FbGVtZW50Iiwib24iLCJvZmYiLCJvbkNsaWNrIiwib2ZmQ2xpY2siLCJvblJlc2l6ZSIsIm9mZlJlc2l6ZSIsImdldFN0YXRlIiwic2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsIm9uS2V5VXAiLCJvZmZLZXlVcCIsIm9uS2V5RG93biIsIm9mZktleURvd24iLCJvbk1vdXNlVXAiLCJvbk1vdXNlRG93biIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm9uTW91c2VNb3ZlIiwib2ZmTW91c2VVcCIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlT3ZlciIsIm9mZk1vdXNlT3V0Iiwib2ZmTW91c2VNb3ZlIiwib25TY3JvbGwiLCJvZmZTY3JvbGwiLCJnZXRTY3JvbGxUb3AiLCJnZXRTY3JvbGxMZWZ0Iiwic2V0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsTGVmdCIsImdldENvbnRleHQiLCJnZXRQcm9wZXJ0aWVzIiwiYXNzaWduQ29udGV4dCIsImFwcGx5UHJvcGVydGllcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaW5kRXZlbnRMaXN0ZW5lciIsImZpbmRFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfX2VsZW1lbnRfXyIsInRvcCIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0IiwiT2Zmc2V0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm91bmRzIiwiQm91bmRzIiwiZnJvbUJvdW5kaW5nQ2xpZW50UmVjdCIsImluY2x1ZGVCb3JkZXIiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJzdHlsZSIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsIm5hbWUiLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImNsZWFyQXR0cmlidXRlIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidG9nZ2xlIiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50IiwicHJlcGVuZCIsImFwcGVuZCIsInNpYmxpbmdFbGVtZW50IiwicGFyZW50RE9NTm9kZSIsInBhcmVudE5vZGUiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiZWxlbWVudCIsImZpcnN0Q2hpbGRET01FbGVtZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZGlzcGxheVN0eWxlIiwiZGlzcGxheSIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImVuYWJsZWQiLCJkaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsInNob3dpbmciLCJoaWRkZW4iLCJ1bmRlZmluZWQiLCJodG1sIiwiaW5uZXJIVE1MIiwiY3NzIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJpbmRleCIsImxlbmd0aCIsImdldFByb3BlcnR5VmFsdWUiLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiYmx1ciIsImZvY3VzIiwiYWN0aXZlRWxlbWVudCIsImRvbU5vZGUiLCJkZXNjZW5kYW50RE9NTm9kZXMiLCJkZXNjZW5kYW50RE9NRWxlbWVudHMiLCJkZXNjZW5kYW50RWxlbWVudHMiLCJjaGlsZERPTU5vZGVzIiwiY2hpbGROb2RlcyIsImNoaWxkRE9NRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzIiwicGFyZW50RE9NRWxlbWVudCIsIm1hdGNoZXMiLCJwYXJlbnRET01FbGVtZW50cyIsInBhcmVudEVsZW1lbnRzIiwiZmlyc3RQYXJlbnRFbGVtZW50IiwiYXNjZW5kYW50RE9NRWxlbWVudHMiLCJhc2NlbmRhbnRET01FbGVtZW50IiwicHVzaCIsImFzY2VuZGFudEVsZW1lbnRzIiwicHJldmlvdXNTaWJsaW5nRWxlbWVudCIsInByZXZpb3VzU2libGluZ0RPTU5vZGUiLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZ0VsZW1lbnQiLCJuZXh0U2libGluZ0RPTU5vZGUiLCJ0YWdOYW1lIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImZyb21UYWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJpZ25vcmVkUHJvcGVydGllcyIsIkNsYXNzIiwiZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyIsImNyZWF0ZUVsZW1lbnROUyIsIlNWR19OQU1FU1BBQ0VfVVJJIiwiY3JlYXRlRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwidW5zaGlmdCIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiYmluZCIsImNhbGwiLCJoYXNPd25Qcm9wZXJ0eSIsInN1cGVyQ2xhc3MiLCJnZXRQcm90b3R5cGVPZiIsImlnbm9yZWRQcm9wZXJ0eSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87QUErQ25CLG1CQUFZQyxvQkFBWixFQUFrQztBQUFBOztBQUFBLGdDQTlDN0JDLFNBOEM2Qjs7QUFBQSxpQ0E3QzVCQyxVQTZDNEI7O0FBQUEscUNBM0N4QkMsY0EyQ3dCOztBQUFBLHNDQTFDdkJDLGVBMEN1Qjs7QUFBQSxzQ0F4Q3ZCQyxnQkF3Q3VCOztBQUFBLHVDQXZDdEJDLGlCQXVDc0I7O0FBQUEsc0NBckN2QkMsZUFxQ3VCOztBQUFBLHNDQXBDdkJDLGVBb0N1Qjs7QUFBQSx5Q0FuQ3BCQyxrQkFtQ29COztBQUFBLHFDQWpDeEJDLGFBaUN3Qjs7QUFBQSxzQ0FoQ3ZCQyxjQWdDdUI7O0FBQUEsdUNB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QUM3Qyx3QkFBUWIsaUJBQVIsRUFBMkJDLEtBQUssQ0FBQ0QsaUJBQWpDLEVBQW9ELFVBQUNnQixlQUFEO0FBQUEsYUFBcUIsQ0FBQ2hCLGlCQUFpQixDQUFDaUIsUUFBbEIsQ0FBMkJELGVBQTNCLENBQXRCO0FBQUEsS0FBcEQ7QUFDRDs7QUFFRCxNQUFNRixVQUFVLEdBQUcvQyxNQUFNLENBQUNnRCxjQUFQLENBQXNCZCxLQUF0QixDQUFuQjs7QUFFQSxNQUFJYSxVQUFVLEtBQUssSUFBbkIsRUFBeUI7QUFDdkJYLElBQUFBLDBCQUEwQixDQUFDVyxVQUFELEVBQWFkLGlCQUFiLENBQTFCO0FBQ0Q7O0FBRUQsU0FBT0EsaUJBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL21pc2NlbGxhbmVvdXMvb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvYm91bmRzXCI7XG5cbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgZmlyc3QsIGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNWR19OQU1FU1BBQ0VfVVJJIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yLCBlbGVtZW50c0Zyb21ET01FbGVtZW50cywgZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yLCBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9kb21cIjtcblxuaW1wb3J0IHsgb25DbGljaywgb2ZmQ2xpY2sgfSBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcbmltcG9ydCB7IG9uUmVzaXplLCBvZmZSZXNpemUgfSBmcm9tIFwiLi9taXhpbnMvcmVzaXplXCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUsIHVwZGF0ZVN0YXRlIH0gZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgeyBvbktleVVwLCBvZmZLZXlVcCwgb25LZXlEb3duLCBvZmZLZXlEb3duIH0gZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IHsgZ2V0Q29udGV4dCwgZ2V0UHJvcGVydGllcywgYXNzaWduQ29udGV4dCwgYXBwbHlQcm9wZXJ0aWVzIH0gZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IHsgb25TY3JvbGwsIG9mZlNjcm9sbCwgZ2V0U2Nyb2xsVG9wLCBnZXRTY3JvbGxMZWZ0LCBzZXRTY3JvbGxUb3AsIHNldFNjcm9sbExlZnQgfSBmcm9tIFwiLi9taXhpbnMvc2Nyb2xsXCI7XG5pbXBvcnQgeyBvbiwgb2ZmLCBhZGRFdmVudExpc3RlbmVyLCBmaW5kRXZlbnRMaXN0ZW5lciwgZmluZEV2ZW50TGlzdGVuZXJzLCByZW1vdmVFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgeyBvbk1vdXNlVXAsIG9uTW91c2VEb3duLCBvbk1vdXNlT3Zlciwgb25Nb3VzZU91dCwgb25Nb3VzZU1vdmUsIG9mZk1vdXNlVXAsIG9mZk1vdXNlRG93biwgb2ZmTW91c2VPdmVyLCBvZmZNb3VzZU91dCwgb2ZmTW91c2VNb3ZlIH0gZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuICBvbiA9IG9uO1xuICBvZmYgPSBvZmY7XG5cbiAgb25DbGljayA9IG9uQ2xpY2s7XG4gIG9mZkNsaWNrID0gb2ZmQ2xpY2s7XG5cbiAgb25SZXNpemUgPSBvblJlc2l6ZTtcbiAgb2ZmUmVzaXplID0gb2ZmUmVzaXplO1xuXG4gIGdldFN0YXRlID0gZ2V0U3RhdGU7XG4gIHNldFN0YXRlID0gc2V0U3RhdGU7XG4gIHVwZGF0ZVN0YXRlID0gdXBkYXRlU3RhdGU7XG5cbiAgb25LZXlVcCA9IG9uS2V5VXA7XG4gIG9mZktleVVwID0gb2ZmS2V5VXA7XG4gIG9uS2V5RG93biA9IG9uS2V5RG93bjtcbiAgb2ZmS2V5RG93biA9IG9mZktleURvd247XG5cbiAgb25Nb3VzZVVwID0gb25Nb3VzZVVwO1xuICBvbk1vdXNlRG93biA9IG9uTW91c2VEb3duO1xuICBvbk1vdXNlT3ZlciA9IG9uTW91c2VPdmVyO1xuICBvbk1vdXNlT3V0ID0gb25Nb3VzZU91dDtcbiAgb25Nb3VzZU1vdmUgPSBvbk1vdXNlTW92ZTtcbiAgb2ZmTW91c2VVcCA9IG9mZk1vdXNlVXA7XG4gIG9mZk1vdXNlRG93biA9IG9mZk1vdXNlRG93bjtcbiAgb2ZmTW91c2VPdmVyID0gb2ZmTW91c2VPdmVyO1xuICBvZmZNb3VzZU91dCA9IG9mZk1vdXNlT3V0O1xuICBvZmZNb3VzZU1vdmUgPSBvZmZNb3VzZU1vdmU7XG5cbiAgb25TY3JvbGwgPSBvblNjcm9sbDtcbiAgb2ZmU2Nyb2xsID0gb2ZmU2Nyb2xsO1xuICBnZXRTY3JvbGxUb3AgPSBnZXRTY3JvbGxUb3A7XG4gIGdldFNjcm9sbExlZnQgPSBnZXRTY3JvbGxMZWZ0O1xuICBzZXRTY3JvbGxUb3AgPSBzZXRTY3JvbGxUb3A7XG4gIHNldFNjcm9sbExlZnQgPSBzZXRTY3JvbGxMZWZ0O1xuXG4gIGdldENvbnRleHQgPSBnZXRDb250ZXh0O1xuICBnZXRQcm9wZXJ0aWVzID0gZ2V0UHJvcGVydGllcztcbiAgYXNzaWduQ29udGV4dCA9IGFzc2lnbkNvbnRleHQ7XG4gIGFwcGx5UHJvcGVydGllcyA9IGFwcGx5UHJvcGVydGllcztcblxuICBhZGRFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcjtcbiAgZmluZEV2ZW50TGlzdGVuZXIgPSBmaW5kRXZlbnRMaXN0ZW5lcjtcbiAgZmluZEV2ZW50TGlzdGVuZXJzID0gZmluZEV2ZW50TGlzdGVuZXJzO1xuICByZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRE9NRWxlbWVudCkge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3JPckRPTUVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0b3JPckRPTUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gc2VsZWN0b3JPckRPTUVsZW1lbnQ7ICAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHdpZHRoID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFwid2lkdGhcIiwgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG4gIH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBcImJsb2NrXCIpIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShcImRpc3BsYXlcIiwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG4gIFxuICBpc0Rpc3BsYXllZCgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5zdHlsZShcImRpc3BsYXlcIiksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09IFwibm9uZVwiKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gY29tcHV0ZWRTdHlsZVswXSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBnZXREZXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlKSxcbiAgICAgICAgICBkZXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZGVzY2VuZGFudERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGFzY2VuZGFudERPTUVsZW1lbnRzID0gW10sXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgbGV0IGFzY2VuZGFudERPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG4gICAgd2hpbGUgKGFzY2VuZGFudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChhc2NlbmRhbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFzY2VuZGFudERPTUVsZW1lbnRzLnB1c2goYXNjZW5kYW50RE9NRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGFzY2VuZGFudERPTUVsZW1lbnQgPSBhc2NlbmRhbnRET01FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gYXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gICAgaWYgKChwcmV2aW91c1NpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKHByZXZpb3VzU2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7XG5cbiAgICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgbmV4dFNpYmxpbmdFbGVtZW50ID0gbmV4dFNpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZnJvbVRhZ05hbWUoRWxlbWVudCwgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBDbGFzcy50YWdOYW1lLFxuICAgICAgICAgIGVsZW1lbnQgPSBmcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBmcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIHJldHVybiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcblxuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFByb3BlcnRpZXNcIikpIHtcbiAgICBjb21iaW5lKGRlZmF1bHRQcm9wZXJ0aWVzLCBDbGFzcy5kZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KFwiaWdub3JlZFByb3BlcnRpZXNcIikpIHtcbiAgICBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzcy5pZ25vcmVkUHJvcGVydGllcywgKGlnbm9yZWRQcm9wZXJ0eSkgPT4gIWlnbm9yZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGlnbm9yZWRQcm9wZXJ0eSkpO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBpZ25vcmVkUHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gaWdub3JlZFByb3BlcnRpZXM7XG59XG4iXX0=