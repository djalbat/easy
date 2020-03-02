'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Offset = require('./miscellaneous/offset'),
    Bounds = require('./miscellaneous/bounds'),
    constants = require('./constants'),
    jsxMixins = require('./mixins/jsx'),
    keyMixins = require('./mixins/key'),
    stateMixins = require('./mixins/state'),
    mouseMixins = require('./mixins/mouse'),
    eventMixins = require('./mixins/event'),
    clickMixins = require('./mixins/click'),
    scrollMixins = require('./mixins/scroll'),
    resizeMixins = require('./mixins/resize'),
    domUtilities = require('./utilities/dom'),
    nameUtilities = require('./utilities/name'),
    arrayUtilities = require('./utilities/array'),
    objectUtilities = require('./utilities/object');

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

      this.style('width', width);
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

      this.style('height', height);
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
      this.domElement.className = '';
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
      var displayStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'block';
      this.display(displayStyle);
    }
  }, {
    key: "hide",
    value: function hide() {
      this.style('display', 'none');
    }
  }, {
    key: "display",
    value: function display(_display) {
      this.style('display', _display);
    }
  }, {
    key: "enable",
    value: function enable() {
      this.clearAttribute('disabled');
    }
  }, {
    key: "disable",
    value: function disable() {
      this.setAttribute('disabled', 'disabled');
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
      var disabled = this.hasAttribute('disabled');
      return disabled;
    }
  }, {
    key: "isDisplayed",
    value: function isDisplayed() {
      var display = this.style('display'),
          displayed = display !== 'none';
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
      } else if (typeof _css === 'string') {
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
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';
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
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';
      var childDOMNodes = this.domElement.childNodes,
          childDOMElements = filterDOMNodesBySelector(childDOMNodes, selector),
          childElements = elementsFromDOMElements(childDOMElements);
      return childElements;
    }
  }, {
    key: "getParentElement",
    value: function getParentElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';
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
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';
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
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';
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
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';
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
      var outerDOMElement = document.createElement('div');
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

  if (Class.hasOwnProperty('defaultProperties')) {
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

  if (Class.hasOwnProperty('ignoredProperties')) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnQuanMiXSwibmFtZXMiOlsiT2Zmc2V0IiwicmVxdWlyZSIsIkJvdW5kcyIsImNvbnN0YW50cyIsImpzeE1peGlucyIsImtleU1peGlucyIsInN0YXRlTWl4aW5zIiwibW91c2VNaXhpbnMiLCJldmVudE1peGlucyIsImNsaWNrTWl4aW5zIiwic2Nyb2xsTWl4aW5zIiwicmVzaXplTWl4aW5zIiwiZG9tVXRpbGl0aWVzIiwibmFtZVV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwib2JqZWN0VXRpbGl0aWVzIiwiY29tYmluZSIsImlzU1ZHVGFnTmFtZSIsImZpcnN0IiwiYXVnbWVudCIsIlNWR19OQU1FU1BBQ0VfVVJJIiwiZG9tTm9kZU1hdGNoZXNTZWxlY3RvciIsImRvbUVsZW1lbnRGcm9tU2VsZWN0b3IiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsImZpbHRlckRPTU5vZGVzQnlTZWxlY3RvciIsImRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIiwiRWxlbWVudCIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsIl9fZWxlbWVudF9fIiwiY2xvbmUiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJpbmNsdWRlQm9yZGVyIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJuYW1lIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZSIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsInByZXBlbmQiLCJhcHBlbmQiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImVsZW1lbnQiLCJmaXJzdENoaWxkRE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImRpc3BsYXlTdHlsZSIsImRpc3BsYXkiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJlbmFibGVkIiwiZGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJzaG93aW5nIiwiaGlkZGVuIiwidW5kZWZpbmVkIiwiaHRtbCIsImlubmVySFRNTCIsImNzcyIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJnZXRQcm9wZXJ0eVZhbHVlIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImJsdXIiLCJmb2N1cyIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImRvbU5vZGUiLCJkZXNjZW5kYW50RE9NTm9kZXMiLCJkZXNjZW5kYW50RE9NRWxlbWVudHMiLCJkZXNjZW5kYW50RWxlbWVudHMiLCJjaGlsZERPTU5vZGVzIiwiY2hpbGROb2RlcyIsImNoaWxkRE9NRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzIiwicGFyZW50RE9NRWxlbWVudCIsIm1hdGNoZXMiLCJwYXJlbnRET01FbGVtZW50cyIsInBhcmVudEVsZW1lbnRzIiwiZmlyc3RQYXJlbnRFbGVtZW50IiwiYXNjZW5kYW50RE9NRWxlbWVudHMiLCJhc2NlbmRhbnRET01FbGVtZW50IiwicHVzaCIsImFzY2VuZGFudEVsZW1lbnRzIiwicHJldmlvdXNTaWJsaW5nRWxlbWVudCIsInByZXZpb3VzU2libGluZ0RPTU5vZGUiLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZ0VsZW1lbnQiLCJuZXh0U2libGluZ0RPTU5vZGUiLCJDbGFzcyIsImRlZXAiLCJjbG9uZU5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJmcm9tRE9NRWxlbWVudCIsIm91dGVyRE9NRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwidGFnTmFtZSIsImZyb21UYWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJhcHBseVByb3BlcnRpZXMiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJMRUZUX01PVVNFX0JVVFRPTiIsIlJJR0hUX01PVVNFX0JVVFRPTiIsIk1JRERMRV9NT1VTRV9CVVRUT04iLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlRWxlbWVudE5TIiwidW5zaGlmdCIsIkZ1bmN0aW9uIiwiYmluZCIsImNhbGwiLCJoYXNPd25Qcm9wZXJ0eSIsInN1cGVyQ2xhc3MiLCJnZXRQcm90b3R5cGVPZiIsImlnbm9yZWRQcm9wZXJ0eSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyx3QkFBRCxDQUF0QjtBQUFBLElBQ01DLE1BQU0sR0FBR0QsT0FBTyxDQUFDLHdCQUFELENBRHRCO0FBQUEsSUFFTUUsU0FBUyxHQUFHRixPQUFPLENBQUMsYUFBRCxDQUZ6QjtBQUFBLElBR01HLFNBQVMsR0FBR0gsT0FBTyxDQUFDLGNBQUQsQ0FIekI7QUFBQSxJQUlNSSxTQUFTLEdBQUdKLE9BQU8sQ0FBQyxjQUFELENBSnpCO0FBQUEsSUFLTUssV0FBVyxHQUFHTCxPQUFPLENBQUMsZ0JBQUQsQ0FMM0I7QUFBQSxJQU1NTSxXQUFXLEdBQUdOLE9BQU8sQ0FBQyxnQkFBRCxDQU4zQjtBQUFBLElBT01PLFdBQVcsR0FBR1AsT0FBTyxDQUFDLGdCQUFELENBUDNCO0FBQUEsSUFRTVEsV0FBVyxHQUFHUixPQUFPLENBQUMsZ0JBQUQsQ0FSM0I7QUFBQSxJQVNNUyxZQUFZ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QUFDZSxVQUFELEVBQWFoQixpQkFBYixDQUExQjtBQUNEOztBQUVELFNBQU9BLGlCQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE9mZnNldCA9IHJlcXVpcmUoJy4vbWlzY2VsbGFuZW91cy9vZmZzZXQnKSxcbiAgICAgIEJvdW5kcyA9IHJlcXVpcmUoJy4vbWlzY2VsbGFuZW91cy9ib3VuZHMnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyksXG4gICAgICBqc3hNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9qc3gnKSxcbiAgICAgIGtleU1peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL2tleScpLFxuICAgICAgc3RhdGVNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9zdGF0ZScpLFxuICAgICAgbW91c2VNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9tb3VzZScpLFxuICAgICAgZXZlbnRNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9jbGljaycpLFxuICAgICAgc2Nyb2xsTWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMvc2Nyb2xsJyksXG4gICAgICByZXNpemVNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9yZXNpemUnKSxcbiAgICAgIGRvbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2RvbScpLFxuICAgICAgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL25hbWUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIG9iamVjdFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL29iamVjdCcpO1xuXG5jb25zdCB7IGNvbWJpbmUgfSA9IG9iamVjdFV0aWxpdGllcyxcbiAgICAgIHsgaXNTVkdUYWdOYW1lIH0gPSBuYW1lVXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgYXVnbWVudCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IFNWR19OQU1FU1BBQ0VfVVJJIH0gPSBjb25zdGFudHMsXG4gICAgICB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gPSBkb21VdGlsaXRpZXM7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cbiAgXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHdpZHRoID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKCd3aWR0aCcsIHdpZHRoKTtcbiAgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZSgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJzsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSAnYmxvY2snKSB7IHRoaXMuZGlzcGxheShkaXNwbGF5U3R5bGUpOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5zdHlsZSgnZGlzcGxheScsICdub25lJyk7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZSgnZGlzcGxheScsIGRpc3BsYXkpOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKCdkaXNhYmxlZCcpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7IH1cblxuICBpc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBlbmFibGVkID0gIWRpc2FibGVkO1xuXG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLnN0eWxlKCdkaXNwbGF5JyksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09ICdub25lJyk7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gIGlzU2hvd2luZygpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgc2hvd2luZyA9IGRpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgaGlkZGVuID0gIWRpc3BsYXllZDtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG4gIH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNvbXB1dGVkU3R5bGVbMF0sICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgYmx1cigpIHsgdGhpcy5kb21FbGVtZW50LmJsdXIoKTsgfVxuXG4gIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIGdldERlc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9ICcqJykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlKSxcbiAgICAgICAgICBkZXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZGVzY2VuZGFudERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgY2hpbGRET01Ob2RlcyA9IHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLFxuICAgICAgICAgIGNoaWxkRE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoY2hpbGRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0UGFyZW50RWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBwYXJlbnRFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChwYXJlbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAocGFyZW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50cyA9IFtwYXJlbnRET01FbGVtZW50XSxcbiAgICAgICAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKTtcblxuICAgICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBnZXRBc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9ICcqJykge1xuICAgIGNvbnN0IGFzY2VuZGFudERPTUVsZW1lbnRzID0gW10sXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgbGV0IGFzY2VuZGFudERPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG4gICAgd2hpbGUgKGFzY2VuZGFudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChhc2NlbmRhbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFzY2VuZGFudERPTUVsZW1lbnRzLnB1c2goYXNjZW5kYW50RE9NRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGFzY2VuZGFudERPTUVsZW1lbnQgPSBhc2NlbmRhbnRET01FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gYXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcHJldmlvdXNTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5wcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICAgIGlmICgocHJldmlvdXNTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihwcmV2aW91c1NpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSBwcmV2aW91c1NpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZpb3VzU2libGluZ0VsZW1lbnQ7XG4gIH1cblxuICBnZXROZXh0U2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgbmV4dFNpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5uZXh0U2libGluZztcblxuICAgIGlmICgobmV4dFNpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKG5leHRTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBuZXh0U2libGluZ0VsZW1lbnQgPSBuZXh0U2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFNpYmxpbmdFbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBkZWVwID0gdHJ1ZSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LmNsb25lTm9kZShkZWVwKTtcblxuICAgIHJldHVybiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb3V0ZXJET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBvdXRlckRPTUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDsgIC8vL1xuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG91dGVyRE9NRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgcmV0dXJuIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBDbGFzcy50YWdOYW1lLFxuICAgICAgICAgIGVsZW1lbnQgPSBmcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZnJvbVRhZ05hbWUoRWxlbWVudCwgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBqc3hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHN0YXRlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHNjcm9sbE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbnMpO1xuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQsIHtcbiAgTEVGVF9NT1VTRV9CVVRUT046IDAsXG4gIFJJR0hUX01PVVNFX0JVVFRPTjogMixcbiAgTUlERExFX01PVVNFX0JVVFRPTjogMVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gZnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0VfVVJJLCB0YWdOYW1lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICByZXR1cm4gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG5cbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdFByb3BlcnRpZXMnKSkge1xuICAgIGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzLmRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRQcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgaWdub3JlZFByb3BlcnRpZXMgPSBbXSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoJ2lnbm9yZWRQcm9wZXJ0aWVzJykpIHtcbiAgICBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzcy5pZ25vcmVkUHJvcGVydGllcywgZnVuY3Rpb24oaWdub3JlZFByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gIWlnbm9yZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGlnbm9yZWRQcm9wZXJ0eSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBpZ25vcmVkUHJvcGVydGllcztcbn1cbiJdfQ==