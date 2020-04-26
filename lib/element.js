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

var _key7 = require("./mixins/key");

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
  function Element(selector) {
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

    _defineProperty(this, "onKeyUp", _key7.onKeyUp);

    _defineProperty(this, "offKeyUp", _key7.offKeyUp);

    _defineProperty(this, "onKeyDown", _key7.onKeyDown);

    _defineProperty(this, "offKeyDown", _key7.offKeyDown);

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

    this.domElement = (0, _dom.domElementFromSelector)(selector);
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
    key: "fromHTML",
    value: function fromHTML(Class, html) {
      var outerDOMElement = document.createElement("div");
      outerDOMElement.innerHTML = html; ///

      var domElement = outerDOMElement.firstChild;

      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return _fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(Class, domElement) {
      for (var _len2 = arguments.length, remainingArguments = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      return _fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      for (var _len3 = arguments.length, remainingArguments = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      var tagName = Class.tagName,
          element = _fromTagName.apply(void 0, [Class, tagName].concat(remainingArguments)),
          defaultProperties = defaultPropertiesFromClass(Class),
          ignoredProperties = ignoredPropertiesFromClass(Class);

      element.applyProperties(properties, defaultProperties, ignoredProperties);
      return element;
    }
  }, {
    key: "fromTagName",
    value: function fromTagName(tagName, properties) {
      for (var _len4 = arguments.length, remainingArguments = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
      }

      var element = _fromTagName.apply(void 0, [Element, tagName].concat(remainingArguments)),
          defaultProperties = {},
          ///
      ignoredProperties = []; ///


      element.applyProperties(properties, defaultProperties, ignoredProperties);
      return element;
    }
  }]);

  return Element;
}();

exports["default"] = Element;

function _fromTagName(Class, tagName) {
  var domElement = (0, _name2.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);

  for (var _len5 = arguments.length, remainingArguments = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
    remainingArguments[_key5 - 2] = arguments[_key5];
  }

  return _fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
}

function _fromDOMElement(Class, domElement) {
  var _Function$prototype$b;

  for (var _len6 = arguments.length, remainingArguments = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    remainingArguments[_key6 - 2] = arguments[_key6];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInNlbGVjdG9yIiwib24iLCJvZmYiLCJvbkNsaWNrIiwib2ZmQ2xpY2siLCJvblJlc2l6ZSIsIm9mZlJlc2l6ZSIsImdldFN0YXRlIiwic2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsIm9uS2V5VXAiLCJvZmZLZXlVcCIsIm9uS2V5RG93biIsIm9mZktleURvd24iLCJvbk1vdXNlVXAiLCJvbk1vdXNlRG93biIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm9uTW91c2VNb3ZlIiwib2ZmTW91c2VVcCIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlT3ZlciIsIm9mZk1vdXNlT3V0Iiwib2ZmTW91c2VNb3ZlIiwib25TY3JvbGwiLCJvZmZTY3JvbGwiLCJnZXRTY3JvbGxUb3AiLCJnZXRTY3JvbGxMZWZ0Iiwic2V0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsTGVmdCIsImdldENvbnRleHQiLCJnZXRQcm9wZXJ0aWVzIiwiYXNzaWduQ29udGV4dCIsImFwcGx5UHJvcGVydGllcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9tRWxlbWVudCIsIl9fZWxlbWVudF9fIiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXQiLCJPZmZzZXQiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZHMiLCJCb3VuZHMiLCJmcm9tQm91bmRpbmdDbGllbnRSZWN0IiwiaW5jbHVkZUJvcmRlciIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInN0eWxlIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibmFtZSIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0b2dnbGUiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiLCJwcmVwZW5kIiwiYXBwZW5kIiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJlbGVtZW50IiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJkaXNwbGF5U3R5bGUiLCJkaXNwbGF5IiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwiZW5hYmxlZCIsImRpc3BsYXllZCIsImlzRGlzcGxheWVkIiwic2hvd2luZyIsImhpZGRlbiIsInVuZGVmaW5lZCIsImh0bWwiLCJpbm5lckhUTUwiLCJjc3MiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImluZGV4IiwibGVuZ3RoIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJibHVyIiwiZm9jdXMiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJkb21Ob2RlIiwiZGVzY2VuZGFudERPTU5vZGVzIiwiZGVzY2VuZGFudERPTUVsZW1lbnRzIiwiZGVzY2VuZGFudEVsZW1lbnRzIiwiY2hpbGRET01Ob2RlcyIsImNoaWxkTm9kZXMiLCJjaGlsZERPTUVsZW1lbnRzIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudERPTUVsZW1lbnQiLCJtYXRjaGVzIiwicGFyZW50RE9NRWxlbWVudHMiLCJwYXJlbnRFbGVtZW50cyIsImZpcnN0UGFyZW50RWxlbWVudCIsImFzY2VuZGFudERPTUVsZW1lbnRzIiwiYXNjZW5kYW50RE9NRWxlbWVudCIsInB1c2giLCJhc2NlbmRhbnRFbGVtZW50cyIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdET01Ob2RlIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmdFbGVtZW50IiwibmV4dFNpYmxpbmdET01Ob2RlIiwiQ2xhc3MiLCJvdXRlckRPTUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicmVtYWluaW5nQXJndW1lbnRzIiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwidGFnTmFtZSIsImZyb21UYWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJjcmVhdGVFbGVtZW50TlMiLCJTVkdfTkFNRVNQQUNFX1VSSSIsInVuc2hpZnQiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsImJpbmQiLCJjYWxsIiwiaGFzT3duUHJvcGVydHkiLCJzdXBlckNsYXNzIiwiZ2V0UHJvdG90eXBlT2YiLCJpZ25vcmVkUHJvcGVydHkiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPO0FBNkNuQixtQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBLGdDQTVDakJDLFNBNENpQjs7QUFBQSxpQ0EzQ2hCQyxVQTJDZ0I7O0FBQUEscUNBekNaQyxjQXlDWTs7QUFBQSxzQ0F4Q1hDLGVBd0NXOztBQUFBLHNDQXRDWEMsZ0JBc0NXOztBQUFBLHVDQXJDVkMsaUJBcUNVOztBQUFBLHNDQW5DWEMsZUFtQ1c7O0FBQUEsc0NBbENYQyxlQWtDVzs7QUFBQSx5Q0FqQ1JDLGtCQWlDUTs7QUFBQSxxQ0EvQlpDLGFBK0JZOztBQUFBLHNDQTlCWEMsY0E4Qlc7O0FBQUEsdUNBN0JWQyxlQTZCVTs7QUFBQSx3Q0E1QlRDLGdCQTRCUzs7QUFBQSx1Q0ExQlZDLGdCQTBCVTs7QUFBQSx5Q0F6QlJDLGtCQXlCUTs7QUFBQSx5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Q0FBb0NYLEtBQXBDLEVBQW1FO0FBQUEsTUFBeEJVLGlCQUF3Qix1RUFBSixFQUFJOztBQUNqRSxNQUFJVixLQUFLLENBQUNtQixjQUFOLENBQXFCLG1CQUFyQixDQUFKLEVBQStDO0FBQzdDLHdCQUFRVCxpQkFBUixFQUEyQlYsS0FBSyxDQUFDVSxpQkFBakMsRUFBb0QsVUFBQ1ksZUFBRDtBQUFBLGFBQXFCLENBQUNaLGlCQUFpQixDQUFDYSxRQUFsQixDQUEyQkQsZUFBM0IsQ0FBdEI7QUFBQSxLQUFwRDtBQUNEOztBQUVELE1BQU1GLFVBQVUsR0FBR2pELE1BQU0sQ0FBQ2tELGNBQVAsQ0FBc0JyQixLQUF0QixDQUFuQjs7QUFFQSxNQUFJb0IsVUFBVSxLQUFLLElBQW5CLEVBQXlCO0FBQ3ZCVCxJQUFBQSwwQkFBMEIsQ0FBQ1MsVUFBRCxFQUFhVixpQkFBYixDQUExQjtBQUNEOztBQUVELFNBQU9BLGlCQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL2JvdW5kc1wiO1xuXG5pbXBvcnQgeyBjb21iaW5lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL29iamVjdFwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IGZpcnN0LCBhdWdtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTVkdfTkFNRVNQQUNFX1VSSSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZG9tTm9kZU1hdGNoZXNTZWxlY3RvciwgZG9tRWxlbWVudEZyb21TZWxlY3RvciwgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMsIGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvciwgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvZG9tXCI7XG5cbmltcG9ydCB7IG9uQ2xpY2ssIG9mZkNsaWNrIH0gZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgeyBvblJlc2l6ZSwgb2ZmUmVzaXplIH0gZnJvbSBcIi4vbWl4aW5zL3Jlc2l6ZVwiO1xuaW1wb3J0IHsgZ2V0U3RhdGUsIHNldFN0YXRlLCB1cGRhdGVTdGF0ZSB9IGZyb20gXCIuL21peGlucy9zdGF0ZVwiO1xuaW1wb3J0IHsgb25LZXlVcCwgb2ZmS2V5VXAsIG9uS2V5RG93biwgb2ZmS2V5RG93biB9IGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCB7IG9uLCBvZmYsIGFkZEV2ZW50TGlzdGVuZXIsIHJlbW92ZUV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCB7IGdldENvbnRleHQsIGdldFByb3BlcnRpZXMsIGFzc2lnbkNvbnRleHQsIGFwcGx5UHJvcGVydGllcyB9IGZyb20gXCIuL21peGlucy9qc3hcIjtcbmltcG9ydCB7IG9uU2Nyb2xsLCBvZmZTY3JvbGwsIGdldFNjcm9sbFRvcCwgZ2V0U2Nyb2xsTGVmdCwgc2V0U2Nyb2xsVG9wLCBzZXRTY3JvbGxMZWZ0IH0gZnJvbSBcIi4vbWl4aW5zL3Njcm9sbFwiO1xuaW1wb3J0IHsgb25Nb3VzZVVwLCBvbk1vdXNlRG93biwgb25Nb3VzZU92ZXIsIG9uTW91c2VPdXQsIG9uTW91c2VNb3ZlLCBvZmZNb3VzZVVwLCBvZmZNb3VzZURvd24sIG9mZk1vdXNlT3Zlciwgb2ZmTW91c2VPdXQsIG9mZk1vdXNlTW92ZSB9IGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgb24gPSBvbjtcbiAgb2ZmID0gb2ZmO1xuXG4gIG9uQ2xpY2sgPSBvbkNsaWNrO1xuICBvZmZDbGljayA9IG9mZkNsaWNrO1xuXG4gIG9uUmVzaXplID0gb25SZXNpemU7XG4gIG9mZlJlc2l6ZSA9IG9mZlJlc2l6ZTtcblxuICBnZXRTdGF0ZSA9IGdldFN0YXRlO1xuICBzZXRTdGF0ZSA9IHNldFN0YXRlO1xuICB1cGRhdGVTdGF0ZSA9IHVwZGF0ZVN0YXRlO1xuXG4gIG9uS2V5VXAgPSBvbktleVVwO1xuICBvZmZLZXlVcCA9IG9mZktleVVwO1xuICBvbktleURvd24gPSBvbktleURvd247XG4gIG9mZktleURvd24gPSBvZmZLZXlEb3duO1xuXG4gIG9uTW91c2VVcCA9IG9uTW91c2VVcDtcbiAgb25Nb3VzZURvd24gPSBvbk1vdXNlRG93bjtcbiAgb25Nb3VzZU92ZXIgPSBvbk1vdXNlT3ZlcjtcbiAgb25Nb3VzZU91dCA9IG9uTW91c2VPdXQ7XG4gIG9uTW91c2VNb3ZlID0gb25Nb3VzZU1vdmU7XG4gIG9mZk1vdXNlVXAgPSBvZmZNb3VzZVVwO1xuICBvZmZNb3VzZURvd24gPSBvZmZNb3VzZURvd247XG4gIG9mZk1vdXNlT3ZlciA9IG9mZk1vdXNlT3ZlcjtcbiAgb2ZmTW91c2VPdXQgPSBvZmZNb3VzZU91dDtcbiAgb2ZmTW91c2VNb3ZlID0gb2ZmTW91c2VNb3ZlO1xuXG4gIG9uU2Nyb2xsID0gb25TY3JvbGw7XG4gIG9mZlNjcm9sbCA9IG9mZlNjcm9sbDtcbiAgZ2V0U2Nyb2xsVG9wID0gZ2V0U2Nyb2xsVG9wO1xuICBnZXRTY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsTGVmdDtcbiAgc2V0U2Nyb2xsVG9wID0gc2V0U2Nyb2xsVG9wO1xuICBzZXRTY3JvbGxMZWZ0ID0gc2V0U2Nyb2xsTGVmdDtcblxuICBnZXRDb250ZXh0ID0gZ2V0Q29udGV4dDtcbiAgZ2V0UHJvcGVydGllcyA9IGdldFByb3BlcnRpZXM7XG4gIGFzc2lnbkNvbnRleHQgPSBhc3NpZ25Db250ZXh0O1xuICBhcHBseVByb3BlcnRpZXMgPSBhcHBseVByb3BlcnRpZXM7XG5cbiAgYWRkRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXI7XG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSByZW1vdmVFdmVudExpc3RlbmVyO1xuXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHdpZHRoID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFwid2lkdGhcIiwgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG4gIH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBcImJsb2NrXCIpIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShcImRpc3BsYXlcIiwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG4gIFxuICBpc0Rpc3BsYXllZCgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5zdHlsZShcImRpc3BsYXlcIiksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09IFwibm9uZVwiKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gY29tcHV0ZWRTdHlsZVswXSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBnZXREZXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlKSxcbiAgICAgICAgICBkZXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZGVzY2VuZGFudERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGFzY2VuZGFudERPTUVsZW1lbnRzID0gW10sXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgbGV0IGFzY2VuZGFudERPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG4gICAgd2hpbGUgKGFzY2VuZGFudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChhc2NlbmRhbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFzY2VuZGFudERPTUVsZW1lbnRzLnB1c2goYXNjZW5kYW50RE9NRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGFzY2VuZGFudERPTUVsZW1lbnQgPSBhc2NlbmRhbnRET01FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gYXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gICAgaWYgKChwcmV2aW91c1NpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKHByZXZpb3VzU2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7XG5cbiAgICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgbmV4dFNpYmxpbmdFbGVtZW50ID0gbmV4dFNpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb3V0ZXJET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIG91dGVyRE9NRWxlbWVudC5pbm5lckhUTUwgPSBodG1sOyAgLy8vXG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gb3V0ZXJET01FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICByZXR1cm4gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IENsYXNzLnRhZ05hbWUsXG4gICAgICAgICAgZWxlbWVudCA9IGZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpLFxuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpO1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBmcm9tVGFnTmFtZShFbGVtZW50LCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30sIC8vL1xuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107IC8vL1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIGZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFX1VSSSwgdGFnTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgcmV0dXJuIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuXG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0UHJvcGVydGllc1wiKSkge1xuICAgIGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzLmRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRQcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgaWdub3JlZFByb3BlcnRpZXMgPSBbXSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoXCJpZ25vcmVkUHJvcGVydGllc1wiKSkge1xuICAgIGF1Z21lbnQoaWdub3JlZFByb3BlcnRpZXMsIENsYXNzLmlnbm9yZWRQcm9wZXJ0aWVzLCAoaWdub3JlZFByb3BlcnR5KSA9PiAhaWdub3JlZFByb3BlcnRpZXMuaW5jbHVkZXMoaWdub3JlZFByb3BlcnR5KSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBpZ25vcmVkUHJvcGVydGllcztcbn1cbiJdfQ==