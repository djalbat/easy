"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Offset = require("./miscellaneous/offset"),
    Bounds = require("./miscellaneous/bounds"),
    constants = require("./constants"),
    jsxMixins = require("./mixins/jsx"),
    keyMixins = require("./mixins/key"),
    stateMixins = require("./mixins/state"),
    mouseMixins = require("./mixins/mouse"),
    eventMixins = require("./mixins/event"),
    clickMixins = require("./mixins/click"),
    scrollMixins = require("./mixins/scroll"),
    resizeMixins = require("./mixins/resize"),
    domUtilities = require("./utilities/dom"),
    nameUtilities = require("./utilities/name"),
    arrayUtilities = require("./utilities/array"),
    objectUtilities = require("./utilities/object");

var combine = objectUtilities.combine,
    isSVGTagName = nameUtilities.isSVGTagName,
    first = arrayUtilities.first,
    augment = arrayUtilities.augment,
    SVG_NAMESPACE_URI = constants.SVG_NAMESPACE_URI,
    domNodeMatchesSelector = domUtilities.domNodeMatchesSelector,
    domElementFromSelector = domUtilities.domElementFromSelector,
    elementsFromDOMElements = domUtilities.elementsFromDOMElements,
    filterDOMNodesBySelector = domUtilities.filterDOMNodesBySelector,
    descendantDOMNodesFromDOMNode = domUtilities.descendantDOMNodesFromDOMNode;

var Element = /*#__PURE__*/function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    this.domElement = domElementFromSelector(selector);
    this.domElement.__element__ = this; ///
  }

  _createClass(Element, [{
    key: "clone",
    value: function clone() {
      return Element.clone(this);
    }
  }, {
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
      offset = new Offset(top, left);
      return offset;
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);
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
      descendantDOMNodes = descendantDOMNodesFromDOMNode(domNode),
          descendantDOMElements = filterDOMNodesBySelector(descendantDOMNodes, selector),
          descendantElements = elementsFromDOMElements(descendantDOMElements);
      return descendantElements;
    }
  }, {
    key: "getChildElements",
    value: function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var childDOMNodes = this.domElement.childNodes,
          childDOMElements = filterDOMNodesBySelector(childDOMNodes, selector),
          childElements = elementsFromDOMElements(childDOMElements);
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
              parentElements = elementsFromDOMElements(parentDOMElements),
              firstParentElement = first(parentElements);
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

      var ascendantElements = elementsFromDOMElements(ascendantDOMElements);
      return ascendantElements;
    }
  }, {
    key: "getPreviousSiblingElement",
    value: function getPreviousSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var previousSiblingElement = null;
      var previousSiblingDOMNode = this.domElement.previousSibling; ///

      if (previousSiblingDOMNode !== null && domNodeMatchesSelector(previousSiblingDOMNode, selector)) {
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

      if (nextSiblingDOMNode !== null && domNodeMatchesSelector(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
      }

      return nextSiblingElement;
    }
  }], [{
    key: "clone",
    value: function clone(Class, element) {
      var deep = true,
          domElement = element.domElement.cloneNode(deep);

      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return _fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(Class, html) {
      var outerDOMElement = document.createElement("div");
      outerDOMElement.innerHTML = html; ///

      var domElement = outerDOMElement.firstChild;

      for (var _len2 = arguments.length, remainingArguments = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      return _fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      return _fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      for (var _len4 = arguments.length, remainingArguments = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
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
      for (var _len5 = arguments.length, remainingArguments = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        remainingArguments[_key5 - 2] = arguments[_key5];
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

Object.assign(Element.prototype, jsxMixins);
Object.assign(Element.prototype, keyMixins);
Object.assign(Element.prototype, stateMixins);
Object.assign(Element.prototype, mouseMixins);
Object.assign(Element.prototype, eventMixins);
Object.assign(Element.prototype, clickMixins);
Object.assign(Element.prototype, scrollMixins);
Object.assign(Element.prototype, resizeMixins);
Object.assign(Element, {
  LEFT_MOUSE_BUTTON: 0,
  RIGHT_MOUSE_BUTTON: 2,
  MIDDLE_MOUSE_BUTTON: 1
});
module.exports = Element;

function _fromTagName(Class, tagName) {
  var domElement = isSVGTagName(tagName) ? document.createElementNS(SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);

  for (var _len6 = arguments.length, remainingArguments = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    remainingArguments[_key6 - 2] = arguments[_key6];
  }

  return _fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
}

function _fromDOMElement(Class, domElement) {
  var _Function$prototype$b;

  for (var _len7 = arguments.length, remainingArguments = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
    remainingArguments[_key7 - 2] = arguments[_key7];
  }

  remainingArguments.unshift(domElement);
  remainingArguments.unshift(null);
  return new ((_Function$prototype$b = Function.prototype.bind).call.apply(_Function$prototype$b, [Class].concat(remainingArguments)))();
}

function defaultPropertiesFromClass(Class) {
  var defaultProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (Class.hasOwnProperty("defaultProperties")) {
    combine(defaultProperties, Class.defaultProperties);
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
    augment(ignoredProperties, Class.ignoredProperties, function (ignoredProperty) {
      return !ignoredProperties.includes(ignoredProperty);
    });
  }

  var superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    ignoredPropertiesFromClass(superClass, ignoredProperties);
  }

  return ignoredProperties;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnQuanMiXSwibmFtZXMiOlsiT2Zmc2V0IiwicmVxdWlyZSIsIkJvdW5kcyIsImNvbnN0YW50cyIsImpzeE1peGlucyIsImtleU1peGlucyIsInN0YXRlTWl4aW5zIiwibW91c2VNaXhpbnMiLCJldmVudE1peGlucyIsImNsaWNrTWl4aW5zIiwic2Nyb2xsTWl4aW5zIiwicmVzaXplTWl4aW5zIiwiZG9tVXRpbGl0aWVzIiwibmFtZVV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwib2JqZWN0VXRpbGl0aWVzIiwiY29tYmluZSIsImlzU1ZHVGFnTmFtZSIsImZpcnN0IiwiYXVnbWVudCIsIlNWR19OQU1FU1BBQ0VfVVJJIiwiZG9tTm9kZU1hdGNoZXNTZWxlY3RvciIsImRvbUVsZW1lbnRGcm9tU2VsZWN0b3IiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsImZpbHRlckRPTU5vZGVzQnlTZWxlY3RvciIsImRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIiwiRWxlbWVudCIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsIl9fZWxlbWVudF9fIiwiY2xvbmUiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJpbmNsdWRlQm9yZGVyIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJuYW1lIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZSIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsInByZXBlbmQiLCJhcHBlbmQiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImVsZW1lbnQiLCJmaXJzdENoaWxkRE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImRpc3BsYXlTdHlsZSIsImRpc3BsYXkiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJlbmFibGVkIiwiZGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJzaG93aW5nIiwiaGlkZGVuIiwidW5kZWZpbmVkIiwiaHRtbCIsImlubmVySFRNTCIsImNzcyIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJnZXRQcm9wZXJ0eVZhbHVlIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImJsdXIiLCJmb2N1cyIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImRvbU5vZGUiLCJkZXNjZW5kYW50RE9NTm9kZXMiLCJkZXNjZW5kYW50RE9NRWxlbWVudHMiLCJkZXNjZW5kYW50RWxlbWVudHMiLCJjaGlsZERPTU5vZGVzIiwiY2hpbGROb2RlcyIsImNoaWxkRE9NRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzIiwicGFyZW50RE9NRWxlbWVudCIsIm1hdGNoZXMiLCJwYXJlbnRET01FbGVtZW50cyIsInBhcmVudEVsZW1lbnRzIiwiZmlyc3RQYXJlbnRFbGVtZW50IiwiYXNjZW5kYW50RE9NRWxlbWVudHMiLCJhc2NlbmRhbnRET01FbGVtZW50IiwicHVzaCIsImFzY2VuZGFudEVsZW1lbnRzIiwicHJldmlvdXNTaWJsaW5nRWxlbWVudCIsInByZXZpb3VzU2libGluZ0RPTU5vZGUiLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZ0VsZW1lbnQiLCJuZXh0U2libGluZ0RPTU5vZGUiLCJDbGFzcyIsImRlZXAiLCJjbG9uZU5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJmcm9tRE9NRWxlbWVudCIsIm91dGVyRE9NRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwidGFnTmFtZSIsImZyb21UYWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJhcHBseVByb3BlcnRpZXMiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJMRUZUX01PVVNFX0JVVFRPTiIsIlJJR0hUX01PVVNFX0JVVFRPTiIsIk1JRERMRV9NT1VTRV9CVVRUT04iLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlRWxlbWVudE5TIiwidW5zaGlmdCIsIkZ1bmN0aW9uIiwiYmluZCIsImNhbGwiLCJoYXNPd25Qcm9wZXJ0eSIsInN1cGVyQ2xhc3MiLCJnZXRQcm90b3R5cGVPZiIsImlnbm9yZWRQcm9wZXJ0eSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyx3QkFBRCxDQUF0QjtBQUFBLElBQ01DLE1BQU0sR0FBR0QsT0FBTyxDQUFDLHdCQUFELENBRHRCO0FBQUEsSUFFTUUsU0FBUyxHQUFHRixPQUFPLENBQUMsYUFBRCxDQUZ6QjtBQUFBLElBR01HLFNBQVMsR0FBR0gsT0FBTyxDQUFDLGNBQUQsQ0FIekI7QUFBQSxJQUlNSSxTQUFTLEdBQUdKLE9BQU8sQ0FBQyxjQUFELENBSnpCO0FBQUEsSUFLTUssV0FBVyxHQUFHTCxPQUFPLENBQUMsZ0JBQUQsQ0FMM0I7QUFBQSxJQU1NTSxXQUFXLEdBQUdOLE9BQU8sQ0FBQyxnQkFBRCxDQU4zQjtBQUFBLElBT01PLFdBQVcsR0FBR1AsT0FBTyxDQUFDLGdCQUFELENBUDNCO0FBQUEsSUFRTVEsV0FBVyxHQUFHUixPQUFPLENBQUMsZ0JBQUQsQ0FSM0I7QUFBQSxJQVNNUyxZQUFZ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QUFDZSxVQUFELEVBQWFoQixpQkFBYixDQUExQjtBQUNEOztBQUVELFNBQU9BLGlCQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgT2Zmc2V0ID0gcmVxdWlyZShcIi4vbWlzY2VsbGFuZW91cy9vZmZzZXRcIiksXG4gICAgICBCb3VuZHMgPSByZXF1aXJlKFwiLi9taXNjZWxsYW5lb3VzL2JvdW5kc1wiKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKSxcbiAgICAgIGpzeE1peGlucyA9IHJlcXVpcmUoXCIuL21peGlucy9qc3hcIiksXG4gICAgICBrZXlNaXhpbnMgPSByZXF1aXJlKFwiLi9taXhpbnMva2V5XCIpLFxuICAgICAgc3RhdGVNaXhpbnMgPSByZXF1aXJlKFwiLi9taXhpbnMvc3RhdGVcIiksXG4gICAgICBtb3VzZU1peGlucyA9IHJlcXVpcmUoXCIuL21peGlucy9tb3VzZVwiKSxcbiAgICAgIGV2ZW50TWl4aW5zID0gcmVxdWlyZShcIi4vbWl4aW5zL2V2ZW50XCIpLFxuICAgICAgY2xpY2tNaXhpbnMgPSByZXF1aXJlKFwiLi9taXhpbnMvY2xpY2tcIiksXG4gICAgICBzY3JvbGxNaXhpbnMgPSByZXF1aXJlKFwiLi9taXhpbnMvc2Nyb2xsXCIpLFxuICAgICAgcmVzaXplTWl4aW5zID0gcmVxdWlyZShcIi4vbWl4aW5zL3Jlc2l6ZVwiKSxcbiAgICAgIGRvbVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuL3V0aWxpdGllcy9kb21cIiksXG4gICAgICBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZShcIi4vdXRpbGl0aWVzL25hbWVcIiksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuL3V0aWxpdGllcy9hcnJheVwiKSxcbiAgICAgIG9iamVjdFV0aWxpdGllcyA9IHJlcXVpcmUoXCIuL3V0aWxpdGllcy9vYmplY3RcIik7XG5cbmNvbnN0IHsgY29tYmluZSB9ID0gb2JqZWN0VXRpbGl0aWVzLFxuICAgICAgeyBpc1NWR1RhZ05hbWUgfSA9IG5hbWVVdGlsaXRpZXMsXG4gICAgICB7IGZpcnN0LCBhdWdtZW50IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgU1ZHX05BTUVTUEFDRV9VUkkgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgZG9tTm9kZU1hdGNoZXNTZWxlY3RvciwgZG9tRWxlbWVudEZyb21TZWxlY3RvciwgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMsIGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvciwgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUgfSA9IGRvbVV0aWxpdGllcztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZSh0aGlzKTsgfVxuICBcbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoXCJ3aWR0aFwiLCB3aWR0aCk7XG4gIH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBcIlwiOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBzaG93KGRpc3BsYXlTdHlsZSA9IFwiYmxvY2tcIikgeyB0aGlzLmRpc3BsYXkoZGlzcGxheVN0eWxlKTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTsgfVxuXG4gIGRpc3BsYXkoZGlzcGxheSkgeyB0aGlzLnN0eWxlKFwiZGlzcGxheVwiLCBkaXNwbGF5KTsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShcImRpc2FibGVkXCIpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpOyB9XG5cbiAgaXNFbmFibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgZW5hYmxlZCA9ICFkaXNhYmxlZDtcblxuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLnN0eWxlKFwiZGlzcGxheVwiKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gXCJub25lXCIpO1xuICAgIFxuICAgIHJldHVybiBkaXNwbGF5ZWQ7XG4gIH1cblxuICBpc1Nob3dpbmcoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIHNob3dpbmcgPSBkaXNwbGF5ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzaG93aW5nO1xuICB9XG5cbiAgaXNIaWRkZW4oKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIGhpZGRlbiA9ICFkaXNwbGF5ZWQ7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgc3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdO1xuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wdXRlZFN0eWxlWzBdLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgYmx1cigpIHsgdGhpcy5kb21FbGVtZW50LmJsdXIoKTsgfVxuXG4gIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIGdldERlc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUpLFxuICAgICAgICAgIGRlc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkZXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGNoaWxkRE9NTm9kZXMgPSB0aGlzLmRvbUVsZW1lbnQuY2hpbGROb2RlcyxcbiAgICAgICAgICBjaGlsZERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGNoaWxkRE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGxldCBwYXJlbnRFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChwYXJlbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAocGFyZW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50cyA9IFtwYXJlbnRET01FbGVtZW50XSxcbiAgICAgICAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKTtcblxuICAgICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBnZXRBc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgY29uc3QgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBsZXQgYXNjZW5kYW50RE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cbiAgICB3aGlsZSAoYXNjZW5kYW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGFzY2VuZGFudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMucHVzaChhc2NlbmRhbnRET01FbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgYXNjZW5kYW50RE9NRWxlbWVudCA9IGFzY2VuZGFudERPTUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBhc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGFzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBhc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGxldCBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHByZXZpb3VzU2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQucHJldmlvdXNTaWJsaW5nOyAgLy8vXG5cbiAgICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xuICB9XG5cbiAgZ2V0TmV4dFNpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgbmV4dFNpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5uZXh0U2libGluZztcblxuICAgIGlmICgobmV4dFNpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKG5leHRTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBuZXh0U2libGluZ0VsZW1lbnQgPSBuZXh0U2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFNpYmxpbmdFbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBkZWVwID0gdHJ1ZSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LmNsb25lTm9kZShkZWVwKTtcblxuICAgIHJldHVybiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb3V0ZXJET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIG91dGVyRE9NRWxlbWVudC5pbm5lckhUTUwgPSBodG1sOyAgLy8vXG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gb3V0ZXJET01FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICByZXR1cm4gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IENsYXNzLnRhZ05hbWUsXG4gICAgICAgICAgZWxlbWVudCA9IGZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpLFxuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpO1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBmcm9tVGFnTmFtZShFbGVtZW50LCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30sIC8vL1xuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107IC8vL1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc3RhdGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHJlc2l6ZU1peGlucyk7XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudCwge1xuICBMRUZUX01PVVNFX0JVVFRPTjogMCxcbiAgUklHSFRfTU9VU0VfQlVUVE9OOiAyLFxuICBNSURETEVfTU9VU0VfQlVUVE9OOiAxXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBmcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIHJldHVybiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcblxuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFByb3BlcnRpZXNcIikpIHtcbiAgICBjb21iaW5lKGRlZmF1bHRQcm9wZXJ0aWVzLCBDbGFzcy5kZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KFwiaWdub3JlZFByb3BlcnRpZXNcIikpIHtcbiAgICBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzcy5pZ25vcmVkUHJvcGVydGllcywgZnVuY3Rpb24oaWdub3JlZFByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gIWlnbm9yZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGlnbm9yZWRQcm9wZXJ0eSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBpZ25vcmVkUHJvcGVydGllcztcbn1cbiJdfQ==