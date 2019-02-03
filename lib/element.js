'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Element = function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    this.domElement = domElementFromSelector(selector);

    this.domElement.__element__ = this; ///
  }

  _createClass(Element, [{
    key: 'clone',
    value: function clone() {
      return Element.clone(this);
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'getOffset',
    value: function getOffset() {
      var top = this.domElement.offsetTop,
          ///
      left = this.domElement.offsetLeft,
          ///
      offset = new Offset(top, left);

      return offset;
    }
  }, {
    key: 'getBounds',
    value: function getBounds() {
      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);

      return bounds;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var width = includeBorder ? this.domElement.offsetWidth : this.domElement.clientWidth;

      return width;
    }
  }, {
    key: 'setWidth',
    value: function setWidth(width) {
      width = width + 'px'; ///

      this.style('width', width);
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var height = includeBorder ? this.domElement.offsetHeight : this.domElement.clientHeight;

      return height;
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      height = height + 'px'; ///

      this.style('height', height);
    }
  }, {
    key: 'hasAttribute',
    value: function hasAttribute(name) {
      return this.domElement.hasAttribute(name);
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      return this.domElement.getAttribute(name);
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(name, value) {
      this.domElement.setAttribute(name, value);
    }
  }, {
    key: 'clearAttribute',
    value: function clearAttribute(name) {
      this.domElement.removeAttribute(name);
    }
  }, {
    key: 'addAttribute',
    value: function addAttribute(name, value) {
      this.setAttribute(name, value);
    }
  }, {
    key: 'removeAttribute',
    value: function removeAttribute(name) {
      this.clearAttribute(name);
    }
  }, {
    key: 'setClass',
    value: function setClass(className) {
      this.domElement.className = className;
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      this.domElement.classList.add(className);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      this.domElement.classList.remove(className);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(className) {
      this.domElement.classList.toggle(className);
    }
  }, {
    key: 'hasClass',
    value: function hasClass(className) {
      return this.domElement.classList.contains(className);
    }
  }, {
    key: 'clearClasses',
    value: function clearClasses() {
      this.domElement.className = '';
    }
  }, {
    key: 'prependTo',
    value: function prependTo(parentElement) {
      parentElement.prepend(this);
    }
  }, {
    key: 'appendTo',
    value: function appendTo(parentElement) {
      parentElement.append(this);
    }
  }, {
    key: 'addTo',
    value: function addTo(parentElement) {
      parentElement.add(this);
    }
  }, {
    key: 'removeFrom',
    value: function removeFrom(parentElement) {
      parentElement.remove(this);
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

      parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
    }
  }, {
    key: 'insertAfter',
    value: function insertAfter(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

      parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
    }
  }, {
    key: 'prepend',
    value: function prepend(element) {
      var domElement = element.domElement,
          firstChildDOMElement = this.domElement.firstChild;

      this.domElement.insertBefore(domElement, firstChildDOMElement);
    }
  }, {
    key: 'append',
    value: function append(element) {
      var domElement = element.domElement;

      this.domElement.insertBefore(domElement, null); ///
    }
  }, {
    key: 'add',
    value: function add(element) {
      this.append(element);
    }
  }, {
    key: 'remove',
    value: function remove(element) {
      if (element) {
        var domElement = element.domElement;

        this.domElement.removeChild(domElement);
      } else {
        this.domElement.remove();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      var displayStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'block';
      this.display(displayStyle);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.style('display', 'none');
    }
  }, {
    key: 'display',
    value: function display(_display) {
      this.style('display', _display);
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.clearAttribute('disabled');
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.setAttribute('disabled', 'disabled');
    }
  }, {
    key: 'isEnabled',
    value: function isEnabled() {
      var disabled = this.isDisabled(),
          enabled = !disabled;

      return enabled;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      var disabled = this.hasAttribute('disabled');

      return disabled;
    }
  }, {
    key: 'isDisplayed',
    value: function isDisplayed() {
      var display = this.style('display'),
          displayed = display !== 'none';

      return displayed;
    }
  }, {
    key: 'isShowing',
    value: function isShowing() {
      var displayed = this.isDisplayed(),
          showing = displayed; ///

      return showing;
    }
  }, {
    key: 'isHidden',
    value: function isHidden() {
      var displayed = this.isDisplayed(),
          hidden = !displayed;

      return hidden;
    }
  }, {
    key: 'style',
    value: function style(name, value) {
      if (value !== undefined) {
        this.domElement.style[name] = value;
      } else {
        var style = this.domElement.style[name];

        return style;
      }
    }
  }, {
    key: 'html',
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
    key: 'css',
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
    key: 'blur',
    value: function blur() {
      this.domElement.blur();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.domElement.focus();
    }
  }, {
    key: 'hasFocus',
    value: function hasFocus() {
      var focus = document.activeElement === this.domElement; ///

      return focus;
    }
  }, {
    key: 'getDescendantElements',
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
    key: 'getChildElements',
    value: function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var childDOMNodes = this.domElement.childNodes,
          childDOMElements = filterDOMNodesBySelector(childDOMNodes, selector),
          childElements = elementsFromDOMElements(childDOMElements);

      return childElements;
    }
  }, {
    key: 'getParentElement',
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
    key: 'getAscendantElements',
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
    key: 'getPreviousSiblingElement',
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
    key: 'getNextSiblingElement',
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
    key: 'clone',
    value: function clone(Class, element) {
      var deep = true,
          domElement = element.domElement.cloneNode(deep);

      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return _fromDOMElement.apply(undefined, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(Class, html) {
      var outerDOMElement = document.createElement('div');

      outerDOMElement.innerHTML = html; ///

      var domElement = outerDOMElement.firstChild;

      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      return _fromDOMElement.apply(undefined, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      return _fromDOMElement.apply(undefined, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
      }

      var tagName = Class.tagName,
          element = _fromTagName.apply(undefined, [Class, tagName].concat(remainingArguments)),
          defaultProperties = defaultPropertiesFromClass(Class),
          ignoredProperties = ignoredPropertiesFromClass(Class);

      element.applyProperties(properties, defaultProperties, ignoredProperties);

      return element;
    }
  }, {
    key: 'fromTagName',
    value: function fromTagName(tagName, properties) {
      for (var _len5 = arguments.length, remainingArguments = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        remainingArguments[_key5 - 2] = arguments[_key5];
      }

      var element = _fromTagName.apply(undefined, [Element, tagName].concat(remainingArguments)),
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

  for (var _len6 = arguments.length, remainingArguments = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    remainingArguments[_key6 - 2] = arguments[_key6];
  }

  return _fromDOMElement.apply(undefined, [Class, domElement].concat(remainingArguments));
}

function _fromDOMElement(Class, domElement) {
  var _Function$prototype$b;

  for (var _len7 = arguments.length, remainingArguments = Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIk9mZnNldCIsInJlcXVpcmUiLCJCb3VuZHMiLCJjb25zdGFudHMiLCJqc3hNaXhpbnMiLCJrZXlNaXhpbnMiLCJzdGF0ZU1peGlucyIsIm1vdXNlTWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJjbGlja01peGlucyIsInNjcm9sbE1peGlucyIsInJlc2l6ZU1peGlucyIsImRvbVV0aWxpdGllcyIsIm5hbWVVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsIm9iamVjdFV0aWxpdGllcyIsImNvbWJpbmUiLCJpc1NWR1RhZ05hbWUiLCJmaXJzdCIsImF1Z21lbnQiLCJTVkdfTkFNRVNQQUNFX1VSSSIsImRvbU5vZGVNYXRjaGVzU2VsZWN0b3IiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IiLCJkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSIsIkVsZW1lbnQiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJfX2VsZW1lbnRfXyIsImNsb25lIiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXQiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZHMiLCJmcm9tQm91bmRpbmdDbGllbnRSZWN0IiwiaW5jbHVkZUJvcmRlciIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInN0eWxlIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibmFtZSIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0b2dnbGUiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiLCJwcmVwZW5kIiwiYXBwZW5kIiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJlbGVtZW50IiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJkaXNwbGF5U3R5bGUiLCJkaXNwbGF5IiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwiZW5hYmxlZCIsImRpc3BsYXllZCIsImlzRGlzcGxheWVkIiwic2hvd2luZyIsImhpZGRlbiIsInVuZGVmaW5lZCIsImh0bWwiLCJpbm5lckhUTUwiLCJjc3MiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImluZGV4IiwibGVuZ3RoIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJibHVyIiwiZm9jdXMiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJkb21Ob2RlIiwiZGVzY2VuZGFudERPTU5vZGVzIiwiZGVzY2VuZGFudERPTUVsZW1lbnRzIiwiZGVzY2VuZGFudEVsZW1lbnRzIiwiY2hpbGRET01Ob2RlcyIsImNoaWxkTm9kZXMiLCJjaGlsZERPTUVsZW1lbnRzIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudERPTUVsZW1lbnQiLCJtYXRjaGVzIiwicGFyZW50RE9NRWxlbWVudHMiLCJwYXJlbnRFbGVtZW50cyIsImZpcnN0UGFyZW50RWxlbWVudCIsImFzY2VuZGFudERPTUVsZW1lbnRzIiwiYXNjZW5kYW50RE9NRWxlbWVudCIsInB1c2giLCJhc2NlbmRhbnRFbGVtZW50cyIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdET01Ob2RlIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmdFbGVtZW50IiwibmV4dFNpYmxpbmdET01Ob2RlIiwiQ2xhc3MiLCJkZWVwIiwiY2xvbmVOb2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZnJvbURPTUVsZW1lbnQiLCJvdXRlckRPTUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicHJvcGVydGllcyIsInRhZ05hbWUiLCJmcm9tVGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiYXBwbHlQcm9wZXJ0aWVzIiwiYXNzaWduIiwicHJvdG90eXBlIiwiTEVGVF9NT1VTRV9CVVRUT04iLCJSSUdIVF9NT1VTRV9CVVRUT04iLCJNSURETEVfTU9VU0VfQlVUVE9OIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUVsZW1lbnROUyIsInVuc2hpZnQiLCJiaW5kIiwiY2FsbCIsImhhc093blByb3BlcnR5Iiwic3VwZXJDbGFzcyIsImdldFByb3RvdHlwZU9mIiwiaWdub3JlZFByb3BlcnR5IiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLHdCQUFSLENBQWY7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLHdCQUFSLENBRGY7QUFBQSxJQUVNRSxZQUFZRixRQUFRLGFBQVIsQ0FGbEI7QUFBQSxJQUdNRyxZQUFZSCxRQUFRLGNBQVIsQ0FIbEI7QUFBQSxJQUlNSSxZQUFZSixRQUFRLGNBQVIsQ0FKbEI7QUFBQSxJQUtNSyxjQUFjTCxRQUFRLGdCQUFSLENBTHBCO0FBQUEsSUFNTU0sY0FBY04sUUFBUSxnQkFBUixDQU5wQjtBQUFBLElBT01PLGNBQWNQLFFBQVEsZ0JBQVIsQ0FQcEI7QUFBQSxJQVFNUSxjQUFjUixRQUFRLGdCQUFSLENBUnBCO0FBQUEsSUFTTVMsZUFBZVQsUUFBUSxpQkFBUixDQVRyQjtBQUFBLElBVU1VLGVBQWVWLFFBQVEsaUJBQVIsQ0FWckI7QUFBQSxJQVdNVyxlQUFlWCxRQUFRLGlCQUFSLENBWHJCO0FBQUEsSUFZTVks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Q0FBc0I1QixLQUF0QixDQUFuQjs7QUFFQSxNQUFJMkIsZUFBZSxJQUFuQixFQUF5QjtBQUN2QmhCLCtCQUEyQmdCLFVBQTNCLEVBQXVDakIsaUJBQXZDO0FBQ0Q7O0FBRUQsU0FBT0EsaUJBQVA7QUFDRDs7QUFFRCxTQUFTRywwQkFBVCxDQUFvQ2IsS0FBcEMsRUFBbUU7QUFBQSxNQUF4QlksaUJBQXdCLHVFQUFKLEVBQUk7O0FBQ2pFLE1BQUlaLE1BQU0wQixjQUFOLENBQXFCLG1CQUFyQixDQUFKLEVBQStDO0FBQzdDakksWUFBUW1ILGlCQUFSLEVBQTJCWixNQUFNWSxpQkFBakMsRUFBb0QsVUFBU2lCLGVBQVQsRUFBMEI7QUFDNUUsYUFBTyxDQUFDakIsa0JBQWtCa0IsUUFBbEIsQ0FBMkJELGVBQTNCLENBQVI7QUFDRCxLQUZEO0FBR0Q7O0FBRUQsTUFBTUYsYUFBYXhELE9BQU95RCxjQUFQLENBQXNCNUIsS0FBdEIsQ0FBbkI7O0FBRUEsTUFBSTJCLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJkLCtCQUEyQmMsVUFBM0IsRUFBdUNmLGlCQUF2QztBQUNEOztBQUVELFNBQU9BLGlCQUFQO0FBQ0QiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgT2Zmc2V0ID0gcmVxdWlyZSgnLi9taXNjZWxsYW5lb3VzL29mZnNldCcpLFxuICAgICAgQm91bmRzID0gcmVxdWlyZSgnLi9taXNjZWxsYW5lb3VzL2JvdW5kcycpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKSxcbiAgICAgIGpzeE1peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL2pzeCcpLFxuICAgICAga2V5TWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMva2V5JyksXG4gICAgICBzdGF0ZU1peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL3N0YXRlJyksXG4gICAgICBtb3VzZU1peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL21vdXNlJyksXG4gICAgICBldmVudE1peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL2V2ZW50JyksXG4gICAgICBjbGlja01peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL2NsaWNrJyksXG4gICAgICBzY3JvbGxNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9zY3JvbGwnKSxcbiAgICAgIHJlc2l6ZU1peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL3Jlc2l6ZScpLFxuICAgICAgZG9tVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZG9tJyksXG4gICAgICBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvbmFtZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgb2JqZWN0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvb2JqZWN0Jyk7XG5cbmNvbnN0IHsgY29tYmluZSB9ID0gb2JqZWN0VXRpbGl0aWVzLFxuICAgICAgeyBpc1NWR1RhZ05hbWUgfSA9IG5hbWVVdGlsaXRpZXMsXG4gICAgICB7IGZpcnN0LCBhdWdtZW50IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgU1ZHX05BTUVTUEFDRV9VUkkgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgZG9tTm9kZU1hdGNoZXNTZWxlY3RvciwgZG9tRWxlbWVudEZyb21TZWxlY3RvciwgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMsIGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvciwgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUgfSA9IGRvbVV0aWxpdGllcztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZSh0aGlzKTsgfVxuICBcbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoJ3dpZHRoJywgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKCdoZWlnaHQnLCBoZWlnaHQpO1xuICB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICcnOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBzaG93KGRpc3BsYXlTdHlsZSA9ICdibG9jaycpIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTsgfVxuXG4gIGRpc3BsYXkoZGlzcGxheSkgeyB0aGlzLnN0eWxlKCdkaXNwbGF5JywgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuICBcbiAgaXNEaXNwbGF5ZWQoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMuc3R5bGUoJ2Rpc3BsYXknKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gJ25vbmUnKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gY29tcHV0ZWRTdHlsZVswXSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSAnc3RyaW5nJykge1xuICAgICAgbGV0IG5hbWUgPSBjc3M7IC8vL1xuXG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICBjc3MgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKGNzcyk7IC8vL1xuXG4gICAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY3NzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuc3R5bGUobmFtZSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFxuICBibHVyKCkgeyB0aGlzLmRvbUVsZW1lbnQuYmx1cigpOyB9XG5cbiAgZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUpLFxuICAgICAgICAgIGRlc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkZXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKHBhcmVudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnRzID0gW3BhcmVudERPTUVsZW1lbnRdLFxuICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBsZXQgYXNjZW5kYW50RE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cbiAgICB3aGlsZSAoYXNjZW5kYW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGFzY2VuZGFudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMucHVzaChhc2NlbmRhbnRET01FbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgYXNjZW5kYW50RE9NRWxlbWVudCA9IGFzY2VuZGFudERPTUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBhc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGFzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBhc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gICAgaWYgKChwcmV2aW91c1NpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKHByZXZpb3VzU2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBuZXh0U2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nO1xuXG4gICAgaWYgKChuZXh0U2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IobmV4dFNpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIG5leHRTaWJsaW5nRWxlbWVudCA9IG5leHRTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0U2libGluZ0VsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGRlZXAgPSB0cnVlLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQuY2xvbmVOb2RlKGRlZXApO1xuXG4gICAgcmV0dXJuIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBvdXRlckRPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG91dGVyRE9NRWxlbWVudC5pbm5lckhUTUwgPSBodG1sOyAgLy8vXG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gb3V0ZXJET01FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICByZXR1cm4gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IENsYXNzLnRhZ05hbWUsXG4gICAgICAgICAgZWxlbWVudCA9IGZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpLFxuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpO1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBmcm9tVGFnTmFtZShFbGVtZW50LCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30sIC8vL1xuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107IC8vL1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc3RhdGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHJlc2l6ZU1peGlucyk7XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudCwge1xuICBMRUZUX01PVVNFX0JVVFRPTjogMCxcbiAgUklHSFRfTU9VU0VfQlVUVE9OOiAyLFxuICBNSURETEVfTU9VU0VfQlVUVE9OOiAxXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBmcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIHJldHVybiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcblxuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KCdkZWZhdWx0UHJvcGVydGllcycpKSB7XG4gICAgY29tYmluZShkZWZhdWx0UHJvcGVydGllcywgQ2xhc3MuZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eSgnaWdub3JlZFByb3BlcnRpZXMnKSkge1xuICAgIGF1Z21lbnQoaWdub3JlZFByb3BlcnRpZXMsIENsYXNzLmlnbm9yZWRQcm9wZXJ0aWVzLCBmdW5jdGlvbihpZ25vcmVkUHJvcGVydHkpIHtcbiAgICAgIHJldHVybiAhaWdub3JlZFByb3BlcnRpZXMuaW5jbHVkZXMoaWdub3JlZFByb3BlcnR5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIl19