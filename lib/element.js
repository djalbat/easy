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

          this.style(name, value);
        }.bind(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIk9mZnNldCIsInJlcXVpcmUiLCJCb3VuZHMiLCJjb25zdGFudHMiLCJqc3hNaXhpbnMiLCJrZXlNaXhpbnMiLCJzdGF0ZU1peGlucyIsIm1vdXNlTWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJjbGlja01peGlucyIsInNjcm9sbE1peGlucyIsInJlc2l6ZU1peGlucyIsImRvbVV0aWxpdGllcyIsIm5hbWVVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsIm9iamVjdFV0aWxpdGllcyIsImNvbWJpbmUiLCJpc1NWR1RhZ05hbWUiLCJmaXJzdCIsImF1Z21lbnQiLCJTVkdfTkFNRVNQQUNFX1VSSSIsImRvbU5vZGVNYXRjaGVzU2VsZWN0b3IiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IiLCJkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSIsIkVsZW1lbnQiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJfX2VsZW1lbnRfXyIsImNsb25lIiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXQiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZHMiLCJmcm9tQm91bmRpbmdDbGllbnRSZWN0IiwiaW5jbHVkZUJvcmRlciIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInN0eWxlIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibmFtZSIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0b2dnbGUiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiLCJwcmVwZW5kIiwiYXBwZW5kIiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJlbGVtZW50IiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJkaXNwbGF5U3R5bGUiLCJkaXNwbGF5IiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwiZW5hYmxlZCIsImRpc3BsYXllZCIsImlzRGlzcGxheWVkIiwic2hvd2luZyIsImhpZGRlbiIsInVuZGVmaW5lZCIsImh0bWwiLCJpbm5lckhUTUwiLCJjc3MiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImluZGV4IiwibGVuZ3RoIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJiaW5kIiwiYmx1ciIsImZvY3VzIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiZG9tTm9kZSIsImRlc2NlbmRhbnRET01Ob2RlcyIsImRlc2NlbmRhbnRET01FbGVtZW50cyIsImRlc2NlbmRhbnRFbGVtZW50cyIsImNoaWxkRE9NTm9kZXMiLCJjaGlsZE5vZGVzIiwiY2hpbGRET01FbGVtZW50cyIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRET01FbGVtZW50IiwibWF0Y2hlcyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50RWxlbWVudHMiLCJmaXJzdFBhcmVudEVsZW1lbnQiLCJhc2NlbmRhbnRET01FbGVtZW50cyIsImFzY2VuZGFudERPTUVsZW1lbnQiLCJwdXNoIiwiYXNjZW5kYW50RWxlbWVudHMiLCJwcmV2aW91c1NpYmxpbmdFbGVtZW50IiwicHJldmlvdXNTaWJsaW5nRE9NTm9kZSIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nRWxlbWVudCIsIm5leHRTaWJsaW5nRE9NTm9kZSIsIkNsYXNzIiwiZGVlcCIsImNsb25lTm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImZyb21ET01FbGVtZW50Iiwib3V0ZXJET01FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInByb3BlcnRpZXMiLCJ0YWdOYW1lIiwiZnJvbVRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyIsImFwcGx5UHJvcGVydGllcyIsImFzc2lnbiIsInByb3RvdHlwZSIsIkxFRlRfTU9VU0VfQlVUVE9OIiwiUklHSFRfTU9VU0VfQlVUVE9OIiwiTUlERExFX01PVVNFX0JVVFRPTiIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVFbGVtZW50TlMiLCJ1bnNoaWZ0IiwiY2FsbCIsImhhc093blByb3BlcnR5Iiwic3VwZXJDbGFzcyIsImdldFByb3RvdHlwZU9mIiwiaWdub3JlZFByb3BlcnR5IiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLHdCQUFSLENBQWY7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLHdCQUFSLENBRGY7QUFBQSxJQUVNRSxZQUFZRixRQUFRLGFBQVIsQ0FGbEI7QUFBQSxJQUdNRyxZQUFZSCxRQUFRLGNBQVIsQ0FIbEI7QUFBQSxJQUlNSSxZQUFZSixRQUFRLGNBQVIsQ0FKbEI7QUFBQSxJQUtNSyxjQUFjTCxRQUFRLGdCQUFSLENBTHBCO0FBQUEsSUFNTU0sY0FBY04sUUFBUSxnQkFBUixDQU5wQjtBQUFBLElBT01PLGNBQWNQLFFBQVEsZ0JBQVIsQ0FQcEI7QUFBQSxJQVFNUSxjQUFjUixRQUFRLGdCQUFSLENBUnBCO0FBQUEsSUFTTVMsZUFBZVQsUUFBUSxpQkFBUixDQVRyQjtBQUFBLElBVU1VLGVBQWVWLFFBQVEsaUJBQVIsQ0FWckI7QUFBQSxJQVdNVyxlQUFlWCxRQUFRLGlCQUFSLENBWHJCO0FBQUEsSUFZTVksZ0JBQWdCWixRQUFRLGtCQUFSLENBWnRCO0FBQUEsSUFhTWEsaUJBQWlCYixRQUFRLG1CQUFSLENBYnZCO0FBQUEsSUFjTWMsa0JBQWtCZCxRQUFRLG9CQUFSLENBZHhCOztBQWdCTSxJQUFFZSxPQUFGLEdBQWNELGVBQWQsQ0FBRUMsT0FBRjtBQUFBLElBQ0VDLFlBREYsR0FDbUJKLGFBRG5CLENBQ0VJLFlBREY7QUFBQSxJQUVFQyxLQUZGLEdBRXFCSixjQUZyQixDQUVFSSxLQUZGO0FBQUEsSUFFU0MsT0FGVCxHQUVxQkwsY0FGckIsQ0FFU0ssT0FGVDtBQUFBLElBR0VDLGlCQUhGLEdBR3dCakIsU0FIeEIsQ0FHRWlCLGlCQUhGO0FBQUEsSUFJRUMsc0JBSkYsR0FJdUlULFlBSnZJLENBSUVTLHNCQUpGO0FBQUEsSUFJMEJDLHNCQUoxQixHQUl1SVYsWUFKdkksQ0FJMEJVLHNCQUoxQjtBQUFBLElBSWtEQyx1QkFKbEQsR0FJdUlYLFlBSnZJLENBSWtEVyx1QkFKbEQ7QUFBQSxJQUkyRUMsd0JBSjNFLEdBSXVJWixZQUp2SSxDQUkyRVksd0JBSjNFO0FBQUEsSUFJcUdDLDZCQUpyRyxHQUl1SWIsWUFKdkksQ0FJcUdhLDZCQUpyRzs7SUFNQUMsTztBQUNKLG1CQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtDLFVBQUwsR0FBa0JOLHVCQUF1QkssUUFBdkIsQ0FBbEI7O0FBRUEsU0FBS0MsVUFBTCxDQUFnQkMsV0FBaEIsR0FBOEIsSUFBOUIsQ0FIb0IsQ0FHZ0I7QUFDckM7Ozs7NEJBRU87QUFBRSxhQUFPSCxRQUFRSSxLQUFSLENBQWMsSUFBZCxDQUFQO0FBQTZCOzs7b0NBRXZCO0FBQ2QsYUFBTyxLQUFLRixVQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1HLE1BQU0sS0FBS0gsVUFBTCxDQUFnQkksU0FBNUI7QUFBQSxVQUF3QztBQUNsQ0MsYUFBTyxLQUFLTCxVQUFMLENBQWdCTSxVQUQ3QjtBQUFBLFVBQzBDO0FBQ3BDQyxlQUFTLElBQUluQyxNQUFKLENBQVcrQixHQUFYLEVBQWdCRSxJQUFoQixDQUZmOztBQUlBLGFBQU9FLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMscUJBQXFCLEtBQUtSLFVBQUwsQ0FBZ0JTLHFCQUFoQixFQUEzQjtBQUFBLFVBQ01DLFNBQVNwQyxPQUFPcUMsc0JBQVAsQ0FBOEJILGtCQUE5QixDQURmOztBQUdBLGFBQU9FLE1BQVA7QUFDRDs7OytCQUU4QjtBQUFBLFVBQXRCRSxhQUFzQix1RUFBTixJQUFNOztBQUM3QixVQUFNQyxRQUFRRCxnQkFDRSxLQUFLWixVQUFMLENBQWdCYyxXQURsQixHQUVJLEtBQUtkLFVBQUwsQ0FBZ0JlLFdBRmxDOztBQUlBLGFBQU9GLEtBQVA7QUFDRDs7OzZCQUVRQSxLLEVBQU87QUFDZEEsY0FBV0EsS0FBWCxRQURjLENBQ1E7O0FBRXRCLFdBQUtHLEtBQUwsQ0FBVyxPQUFYLEVBQW9CSCxLQUFwQjtBQUNEOzs7Z0NBRStCO0FBQUEsVUFBdEJELGFBQXNCLHVFQUFOLElBQU07O0FBQzlCLFVBQU1LLFNBQVNMLGdCQUNFLEtBQUtaLFVBQUwsQ0FBZ0JrQixZQURsQixHQUVJLEtBQUtsQixVQUFMLENBQWdCbUIsWUFGbkM7O0FBSUEsYUFBT0YsTUFBUDtBQUNEOzs7OEJBRVNBLE0sRUFBUTtBQUNoQkEsZUFBWUEsTUFBWixRQURnQixDQUNROztBQUV4QixXQUFLRCxLQUFMLENBQVcsUUFBWCxFQUFxQkMsTUFBckI7QUFDRDs7O2lDQUVZRyxJLEVBQU07QUFBRSxhQUFPLEtBQUtwQixVQUFMLENBQWdCcUIsWUFBaEIsQ0FBNkJELElBQTdCLENBQVA7QUFBNEM7OztpQ0FFcERBLEksRUFBTTtBQUFFLGFBQU8sS0FBS3BCLFVBQUwsQ0FBZ0JzQixZQUFoQixDQUE2QkYsSUFBN0IsQ0FBUDtBQUE0Qzs7O2lDQUVwREEsSSxFQUFNRyxLLEVBQU87QUFBRSxXQUFLdkIsVUFBTCxDQUFnQndCLFlBQWhCLENBQTZCSixJQUE3QixFQUFtQ0csS0FBbkM7QUFBNEM7OzttQ0FFekRILEksRUFBTTtBQUFFLFdBQUtwQixVQUFMLENBQWdCeUIsZUFBaEIsQ0FBZ0NMLElBQWhDO0FBQXdDOzs7aUNBRWxEQSxJLEVBQU1HLEssRUFBTztBQUFFLFdBQUtDLFlBQUwsQ0FBa0JKLElBQWxCLEVBQXdCRyxLQUF4QjtBQUFpQzs7O29DQUU3Q0gsSSxFQUFNO0FBQUUsV0FBS00sY0FBTCxDQUFvQk4sSUFBcEI7QUFBNEI7Ozs2QkFFM0NPLFMsRUFBVztBQUFFLFdBQUszQixVQUFMLENBQWdCMkIsU0FBaEIsR0FBNEJBLFNBQTVCO0FBQXdDOzs7NkJBRXJEQSxTLEVBQVc7QUFBRSxXQUFLM0IsVUFBTCxDQUFnQjRCLFNBQWhCLENBQTBCQyxHQUExQixDQUE4QkYsU0FBOUI7QUFBMkM7OztnQ0FFckRBLFMsRUFBVztBQUFFLFdBQUszQixVQUFMLENBQWdCNEIsU0FBaEIsQ0FBMEJFLE1BQTFCLENBQWlDSCxTQUFqQztBQUE4Qzs7O2dDQUUzREEsUyxFQUFXO0FBQUUsV0FBSzNCLFVBQUwsQ0FBZ0I0QixTQUFoQixDQUEwQkcsTUFBMUIsQ0FBaUNKLFNBQWpDO0FBQThDOzs7NkJBRTlEQSxTLEVBQVc7QUFBRSxhQUFPLEtBQUszQixVQUFMLENBQWdCNEIsU0FBaEIsQ0FBMEJJLFFBQTFCLENBQW1DTCxTQUFuQyxDQUFQO0FBQXVEOzs7bUNBRTlEO0FBQUUsV0FBSzNCLFVBQUwsQ0FBZ0IyQixTQUFoQixHQUE0QixFQUE1QjtBQUFpQzs7OzhCQUV4Q00sYSxFQUFlO0FBQUVBLG9CQUFjQyxPQUFkLENBQXNCLElBQXRCO0FBQThCOzs7NkJBRWhERCxhLEVBQWU7QUFBRUEsb0JBQWNFLE1BQWQsQ0FBcUIsSUFBckI7QUFBNkI7OzswQkFFakRGLGEsRUFBZTtBQUFFQSxvQkFBY0osR0FBZCxDQUFrQixJQUFsQjtBQUEwQjs7OytCQUV0Q0ksYSxFQUFlO0FBQUVBLG9CQUFjSCxNQUFkLENBQXFCLElBQXJCO0FBQTZCOzs7aUNBRTVDTSxjLEVBQWdCO0FBQzNCLFVBQU1DLGdCQUFnQkQsZUFBZXBDLFVBQWYsQ0FBMEJzQyxVQUFoRDtBQUFBLFVBQ01DLG9CQUFvQkgsZUFBZXBDLFVBRHpDOztBQUdBcUMsb0JBQWNHLFlBQWQsQ0FBMkIsS0FBS3hDLFVBQWhDLEVBQTRDdUMsaUJBQTVDO0FBQ0Q7OztnQ0FFV0gsYyxFQUFnQjtBQUMxQixVQUFNQyxnQkFBZ0JELGVBQWVwQyxVQUFmLENBQTBCc0MsVUFBaEQ7QUFBQSxVQUNNQyxvQkFBb0JILGVBQWVwQyxVQUR6Qzs7QUFHQXFDLG9CQUFjRyxZQUFkLENBQTJCLEtBQUt4QyxVQUFoQyxFQUE0Q3VDLGtCQUFrQkUsV0FBOUQsRUFKMEIsQ0FJbUQ7QUFDOUU7Ozs0QkFFT0MsTyxFQUFTO0FBQ2YsVUFBTTFDLGFBQWEwQyxRQUFRMUMsVUFBM0I7QUFBQSxVQUNNMkMsdUJBQXVCLEtBQUszQyxVQUFMLENBQWdCNEMsVUFEN0M7O0FBR0EsV0FBSzVDLFVBQUwsQ0FBZ0J3QyxZQUFoQixDQUE2QnhDLFVBQTdCLEVBQXlDMkMsb0JBQXpDO0FBQ0Q7OzsyQkFFTUQsTyxFQUFTO0FBQ2QsVUFBTTFDLGFBQWEwQyxRQUFRMUMsVUFBM0I7O0FBRUEsV0FBS0EsVUFBTCxDQUFnQndDLFlBQWhCLENBQTZCeEMsVUFBN0IsRUFBeUMsSUFBekMsRUFIYyxDQUdrQztBQUNqRDs7O3dCQUVHMEMsTyxFQUFTO0FBQUUsV0FBS1AsTUFBTCxDQUFZTyxPQUFaO0FBQXVCOzs7MkJBRS9CQSxPLEVBQVM7QUFDZCxVQUFJQSxPQUFKLEVBQWE7QUFDWCxZQUFNMUMsYUFBYTBDLFFBQVExQyxVQUEzQjs7QUFFQSxhQUFLQSxVQUFMLENBQWdCNkMsV0FBaEIsQ0FBNEI3QyxVQUE1QjtBQUNELE9BSkQsTUFJTztBQUNMLGFBQUtBLFVBQUwsQ0FBZ0I4QixNQUFoQjtBQUNEO0FBQ0Y7OzsyQkFFNEI7QUFBQSxVQUF4QmdCLFlBQXdCLHVFQUFULE9BQVM7QUFBRSxXQUFLQyxPQUFMLENBQWFELFlBQWI7QUFBNkI7OzsyQkFFckQ7QUFBRSxXQUFLOUIsS0FBTCxDQUFXLFNBQVgsRUFBc0IsTUFBdEI7QUFBZ0M7Ozs0QkFFakMrQixRLEVBQVM7QUFBRSxXQUFLL0IsS0FBTCxDQUFXLFNBQVgsRUFBc0IrQixRQUF0QjtBQUFpQzs7OzZCQUUzQztBQUFFLFdBQUtyQixjQUFMLENBQW9CLFVBQXBCO0FBQWtDOzs7OEJBRW5DO0FBQUUsV0FBS0YsWUFBTCxDQUFrQixVQUFsQixFQUE4QixVQUE5QjtBQUE0Qzs7O2dDQUU1QztBQUNWLFVBQU13QixXQUFXLEtBQUtDLFVBQUwsRUFBakI7QUFBQSxVQUNNQyxVQUFVLENBQUNGLFFBRGpCOztBQUdBLGFBQU9FLE9BQVA7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUYsV0FBVyxLQUFLM0IsWUFBTCxDQUFrQixVQUFsQixDQUFqQjs7QUFFQSxhQUFPMkIsUUFBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNRCxVQUFVLEtBQUsvQixLQUFMLENBQVcsU0FBWCxDQUFoQjtBQUFBLFVBQ01tQyxZQUFhSixZQUFZLE1BRC9COztBQUdBLGFBQU9JLFNBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUEsWUFBWSxLQUFLQyxXQUFMLEVBQWxCO0FBQUEsVUFDTUMsVUFBVUYsU0FEaEIsQ0FEVSxDQUVrQjs7QUFFNUIsYUFBT0UsT0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNRixZQUFZLEtBQUtDLFdBQUwsRUFBbEI7QUFBQSxVQUNNRSxTQUFTLENBQUNILFNBRGhCOztBQUdBLGFBQU9HLE1BQVA7QUFDRDs7OzBCQUVLbEMsSSxFQUFNRyxLLEVBQU87QUFDakIsVUFBSUEsVUFBVWdDLFNBQWQsRUFBeUI7QUFDdkIsYUFBS3ZELFVBQUwsQ0FBZ0JnQixLQUFoQixDQUFzQkksSUFBdEIsSUFBOEJHLEtBQTlCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTVAsUUFBUSxLQUFLaEIsVUFBTCxDQUFnQmdCLEtBQWhCLENBQXNCSSxJQUF0QixDQUFkOztBQUVBLGVBQU9KLEtBQVA7QUFDRDtBQUNGOzs7eUJBRUl3QyxLLEVBQU07QUFDVCxVQUFJQSxVQUFTRCxTQUFiLEVBQXdCO0FBQ3RCLFlBQU1FLFlBQVksS0FBS3pELFVBQUwsQ0FBZ0J5RCxTQUFsQzs7QUFFQUQsZ0JBQU9DLFNBQVAsQ0FIc0IsQ0FHSjs7QUFFbEIsZUFBT0QsS0FBUDtBQUNELE9BTkQsTUFNTztBQUNMLFlBQU1DLGFBQVlELEtBQWxCLENBREssQ0FDbUI7O0FBRXhCLGFBQUt4RCxVQUFMLENBQWdCeUQsU0FBaEIsR0FBNEJBLFVBQTVCO0FBQ0Q7QUFDRjs7O3dCQUVHQyxJLEVBQUs7QUFDUCxVQUFJQSxTQUFRSCxTQUFaLEVBQXVCO0FBQ3JCLFlBQU1JLGdCQUFnQkMsaUJBQWlCLEtBQUs1RCxVQUF0QixDQUF0QjtBQUFBLFlBQ00wRCxNQUFNLEVBRFo7O0FBR0EsYUFBSyxJQUFJRyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRRixjQUFjRyxNQUExQyxFQUFrREQsT0FBbEQsRUFBMkQ7QUFDekQsY0FBTXpDLE9BQU91QyxjQUFjLENBQWQsQ0FBYjtBQUFBLGNBQWdDO0FBQzFCcEMsa0JBQVFvQyxjQUFjSSxnQkFBZCxDQUErQjNDLElBQS9CLENBRGQsQ0FEeUQsQ0FFTDs7QUFFcERzQyxjQUFJdEMsSUFBSixJQUFZRyxLQUFaO0FBQ0Q7O0FBRUQsZUFBT21DLEdBQVA7QUFDRCxPQVpELE1BWU8sSUFBSSxPQUFPQSxJQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDbEMsWUFBSXRDLFFBQU9zQyxJQUFYLENBRGtDLENBQ2xCOztBQUVoQixZQUFNQyxpQkFBZ0JDLGlCQUFpQixLQUFLNUQsVUFBdEIsQ0FBdEI7QUFBQSxZQUNNdUIsU0FBUW9DLGVBQWNJLGdCQUFkLENBQStCM0MsS0FBL0IsQ0FEZCxDQUhrQyxDQUlrQjs7QUFFcERzQyxlQUFNbkMsTUFBTixDQU5rQyxDQU1wQjs7QUFFZCxlQUFPbUMsSUFBUDtBQUNELE9BVE0sTUFTQTtBQUNMLFlBQU1NLFFBQVFDLE9BQU9DLElBQVAsQ0FBWVIsSUFBWixDQUFkLENBREssQ0FDMkI7O0FBRWhDTSxjQUFNRyxPQUFOLENBQWMsVUFBUy9DLElBQVQsRUFBZTtBQUMzQixjQUFNRyxRQUFRbUMsS0FBSXRDLElBQUosQ0FBZDs7QUFFQSxlQUFLSixLQUFMLENBQVdJLElBQVgsRUFBaUJHLEtBQWpCO0FBQ0QsU0FKYSxDQUlaNkMsSUFKWSxDQUlQLElBSk8sQ0FBZDtBQUtEO0FBQ0Y7OzsyQkFFTTtBQUFFLFdBQUtwRSxVQUFMLENBQWdCcUUsSUFBaEI7QUFBeUI7Ozs0QkFFMUI7QUFBRSxXQUFLckUsVUFBTCxDQUFnQnNFLEtBQWhCO0FBQTBCOzs7K0JBRXpCO0FBQ1QsVUFBTUEsUUFBU0MsU0FBU0MsYUFBVCxLQUEyQixLQUFLeEUsVUFBL0MsQ0FEUyxDQUNvRDs7QUFFN0QsYUFBT3NFLEtBQVA7QUFDRDs7OzRDQUVxQztBQUFBLFVBQWhCdkUsUUFBZ0IsdUVBQUwsR0FBSzs7QUFDcEMsVUFBTTBFLFVBQVUsS0FBS3pFLFVBQXJCO0FBQUEsVUFBa0M7QUFDNUIwRSwyQkFBcUI3RSw4QkFBOEI0RSxPQUE5QixDQUQzQjtBQUFBLFVBRU1FLHdCQUF3Qi9FLHlCQUF5QjhFLGtCQUF6QixFQUE2QzNFLFFBQTdDLENBRjlCO0FBQUEsVUFHTTZFLHFCQUFxQmpGLHdCQUF3QmdGLHFCQUF4QixDQUgzQjs7QUFLQSxhQUFPQyxrQkFBUDtBQUNEOzs7dUNBRWdDO0FBQUEsVUFBaEI3RSxRQUFnQix1RUFBTCxHQUFLOztBQUMvQixVQUFNOEUsZ0JBQWdCLEtBQUs3RSxVQUFMLENBQWdCOEUsVUFBdEM7QUFBQSxVQUNNQyxtQkFBbUJuRix5QkFBeUJpRixhQUF6QixFQUF3QzlFLFFBQXhDLENBRHpCO0FBQUEsVUFFTWlGLGdCQUFnQnJGLHdCQUF3Qm9GLGdCQUF4QixDQUZ0Qjs7QUFJQSxhQUFPQyxhQUFQO0FBQ0Q7Ozt1Q0FFZ0M7QUFBQSxVQUFoQmpGLFFBQWdCLHVFQUFMLEdBQUs7O0FBQy9CLFVBQUlrQyxnQkFBZ0IsSUFBcEI7O0FBRUEsVUFBTWdELG1CQUFtQixLQUFLakYsVUFBTCxDQUFnQmlDLGFBQXpDOztBQUVBLFVBQUlnRCxxQkFBcUIsSUFBekIsRUFBK0I7QUFDN0IsWUFBSUEsaUJBQWlCQyxPQUFqQixDQUF5Qm5GLFFBQXpCLENBQUosRUFBd0M7QUFDdEMsY0FBTW9GLG9CQUFvQixDQUFDRixnQkFBRCxDQUExQjtBQUFBLGNBQ01HLGlCQUFpQnpGLHdCQUF3QndGLGlCQUF4QixDQUR2QjtBQUFBLGNBRU1FLHFCQUFxQi9GLE1BQU04RixjQUFOLENBRjNCOztBQUlBbkQsMEJBQWdCb0Qsc0JBQXNCLElBQXRDO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPcEQsYUFBUDtBQUNEOzs7MkNBRW9DO0FBQUEsVUFBaEJsQyxRQUFnQix1RUFBTCxHQUFLOztBQUNuQyxVQUFNdUYsdUJBQXVCLEVBQTdCO0FBQUEsVUFDTUwsbUJBQW1CLEtBQUtqRixVQUFMLENBQWdCaUMsYUFEekM7O0FBR0EsVUFBSXNELHNCQUFzQk4sZ0JBQTFCLENBSm1DLENBSVU7QUFDN0MsYUFBT00sd0JBQXdCLElBQS9CLEVBQXFDO0FBQ25DLFlBQUlBLG9CQUFvQkwsT0FBcEIsQ0FBNEJuRixRQUE1QixDQUFKLEVBQTJDO0FBQ3pDdUYsK0JBQXFCRSxJQUFyQixDQUEwQkQsbUJBQTFCO0FBQ0Q7O0FBRURBLDhCQUFzQkEsb0JBQW9CdEQsYUFBMUM7QUFDRDs7QUFFRCxVQUFNd0Qsb0JBQW9COUYsd0JBQXdCMkYsb0JBQXhCLENBQTFCOztBQUVBLGFBQU9HLGlCQUFQO0FBQ0Q7OztnREFFeUM7QUFBQSxVQUFoQjFGLFFBQWdCLHVFQUFMLEdBQUs7O0FBQ3hDLFVBQUkyRix5QkFBeUIsSUFBN0I7O0FBRUEsVUFBTUMseUJBQXlCLEtBQUszRixVQUFMLENBQWdCNEYsZUFBL0MsQ0FId0MsQ0FHeUI7O0FBRWpFLFVBQUtELDJCQUEyQixJQUE1QixJQUFxQ2xHLHVCQUF1QmtHLHNCQUF2QixFQUErQzVGLFFBQS9DLENBQXpDLEVBQW1HO0FBQ2pHMkYsaUNBQXlCQyx1QkFBdUIxRixXQUF2QixJQUFzQyxJQUEvRDtBQUNEOztBQUVELGFBQU95RixzQkFBUDtBQUNEOzs7NENBRXFDO0FBQUEsVUFBaEIzRixRQUFnQix1RUFBTCxHQUFLOztBQUNwQyxVQUFJOEYscUJBQXFCLElBQXpCOztBQUVBLFVBQU1DLHFCQUFxQixLQUFLOUYsVUFBTCxDQUFnQnlDLFdBQTNDOztBQUVBLFVBQUtxRCx1QkFBdUIsSUFBeEIsSUFBaUNyRyx1QkFBdUJxRyxrQkFBdkIsRUFBMkMvRixRQUEzQyxDQUFyQyxFQUEyRjtBQUN6RjhGLDZCQUFxQkMsbUJBQW1CN0YsV0FBbkIsSUFBa0MsSUFBdkQ7QUFDRDs7QUFFRCxhQUFPNEYsa0JBQVA7QUFDRDs7OzBCQUVZRSxLLEVBQU9yRCxPLEVBQWdDO0FBQ2xELFVBQU1zRCxPQUFPLElBQWI7QUFBQSxVQUNNaEcsYUFBYTBDLFFBQVExQyxVQUFSLENBQW1CaUcsU0FBbkIsQ0FBNkJELElBQTdCLENBRG5COztBQURrRCx3Q0FBcEJFLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBSWxELGFBQU9DLGtDQUFlSixLQUFmLEVBQXNCL0YsVUFBdEIsU0FBcUNrRyxrQkFBckMsRUFBUDtBQUNEOzs7NkJBRWVILEssRUFBT3ZDLEksRUFBNkI7QUFDbEQsVUFBTTRDLGtCQUFrQjdCLFNBQVM4QixhQUFULENBQXVCLEtBQXZCLENBQXhCOztBQUVBRCxzQkFBZ0IzQyxTQUFoQixHQUE0QkQsSUFBNUIsQ0FIa0QsQ0FHZjs7QUFFbkMsVUFBTXhELGFBQWFvRyxnQkFBZ0J4RCxVQUFuQzs7QUFMa0QseUNBQXBCc0Qsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFPbEQsYUFBT0Msa0NBQWVKLEtBQWYsRUFBc0IvRixVQUF0QixTQUFxQ2tHLGtCQUFyQyxFQUFQO0FBQ0Q7OzttQ0FFcUJILEssRUFBTy9GLFUsRUFBbUM7QUFBQSx5Q0FBcEJrRyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUM5RCxhQUFPQyxrQ0FBZUosS0FBZixFQUFzQi9GLFVBQXRCLFNBQXFDa0csa0JBQXJDLEVBQVA7QUFDRDs7O21DQUVxQkgsSyxFQUFPTyxVLEVBQW1DO0FBQUEseUNBQXBCSixrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUM5RCxVQUFNSyxVQUFVUixNQUFNUSxPQUF0QjtBQUFBLFVBQ003RCxVQUFVOEQsK0JBQVlULEtBQVosRUFBbUJRLE9BQW5CLFNBQStCTCxrQkFBL0IsRUFEaEI7QUFBQSxVQUVNTyxvQkFBb0JDLDJCQUEyQlgsS0FBM0IsQ0FGMUI7QUFBQSxVQUdNWSxvQkFBb0JDLDJCQUEyQmIsS0FBM0IsQ0FIMUI7O0FBS0FyRCxjQUFRbUUsZUFBUixDQUF3QlAsVUFBeEIsRUFBb0NHLGlCQUFwQyxFQUF1REUsaUJBQXZEOztBQUVBLGFBQU9qRSxPQUFQO0FBQ0Q7OztnQ0FFa0I2RCxPLEVBQVNELFUsRUFBbUM7QUFBQSx5Q0FBcEJKLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQzdELFVBQU14RCxVQUFVOEQsK0JBQVkxRyxPQUFaLEVBQXFCeUcsT0FBckIsU0FBaUNMLGtCQUFqQyxFQUFoQjtBQUFBLFVBQ01PLG9CQUFvQixFQUQxQjtBQUFBLFVBQzhCO0FBQ3hCRSwwQkFBb0IsRUFGMUIsQ0FENkQsQ0FHL0I7O0FBRTlCakUsY0FBUW1FLGVBQVIsQ0FBd0JQLFVBQXhCLEVBQW9DRyxpQkFBcEMsRUFBdURFLGlCQUF2RDs7QUFFQSxhQUFPakUsT0FBUDtBQUNEOzs7Ozs7QUFHSHVCLE9BQU82QyxNQUFQLENBQWNoSCxRQUFRaUgsU0FBdEIsRUFBaUN2SSxTQUFqQztBQUNBeUYsT0FBTzZDLE1BQVAsQ0FBY2hILFFBQVFpSCxTQUF0QixFQUFpQ3RJLFNBQWpDO0FBQ0F3RixPQUFPNkMsTUFBUCxDQUFjaEgsUUFBUWlILFNBQXRCLEVBQWlDckksV0FBakM7QUFDQXVGLE9BQU82QyxNQUFQLENBQWNoSCxRQUFRaUgsU0FBdEIsRUFBaUNwSSxXQUFqQztBQUNBc0YsT0FBTzZDLE1BQVAsQ0FBY2hILFFBQVFpSCxTQUF0QixFQUFpQ25JLFdBQWpDO0FBQ0FxRixPQUFPNkMsTUFBUCxDQUFjaEgsUUFBUWlILFNBQXRCLEVBQWlDbEksV0FBakM7QUFDQW9GLE9BQU82QyxNQUFQLENBQWNoSCxRQUFRaUgsU0FBdEIsRUFBaUNqSSxZQUFqQztBQUNBbUYsT0FBTzZDLE1BQVAsQ0FBY2hILFFBQVFpSCxTQUF0QixFQUFpQ2hJLFlBQWpDOztBQUVBa0YsT0FBTzZDLE1BQVAsQ0FBY2hILE9BQWQsRUFBdUI7QUFDckJrSCxxQkFBbUIsQ0FERTtBQUVyQkMsc0JBQW9CLENBRkM7QUFHckJDLHVCQUFxQjtBQUhBLENBQXZCOztBQU1BQyxPQUFPQyxPQUFQLEdBQWlCdEgsT0FBakI7O0FBRUEsU0FBUzBHLFlBQVQsQ0FBcUJULEtBQXJCLEVBQTRCUSxPQUE1QixFQUE0RDtBQUMxRCxNQUFNdkcsYUFBYVgsYUFBYWtILE9BQWIsSUFDRWhDLFNBQVM4QyxlQUFULENBQXlCN0gsaUJBQXpCLEVBQTRDK0csT0FBNUMsQ0FERixHQUVJaEMsU0FBUzhCLGFBQVQsQ0FBdUJFLE9BQXZCLENBRnZCOztBQUQwRCxxQ0FBcEJMLGtCQUFvQjtBQUFwQkEsc0JBQW9CO0FBQUE7O0FBSzFELFNBQU9DLGtDQUFlSixLQUFmLEVBQXNCL0YsVUFBdEIsU0FBcUNrRyxrQkFBckMsRUFBUDtBQUNEOztBQUVELFNBQVNDLGVBQVQsQ0FBd0JKLEtBQXhCLEVBQStCL0YsVUFBL0IsRUFBa0U7QUFBQTs7QUFBQSxxQ0FBcEJrRyxrQkFBb0I7QUFBcEJBLHNCQUFvQjtBQUFBOztBQUNoRUEscUJBQW1Cb0IsT0FBbkIsQ0FBMkJ0SCxVQUEzQjs7QUFFQWtHLHFCQUFtQm9CLE9BQW5CLENBQTJCLElBQTNCOztBQUVBLFNBQU8sS0FBSyxrQ0FBU1AsU0FBVCxDQUFtQjNDLElBQW5CLEVBQXdCbUQsSUFBeEIsK0JBQTZCeEIsS0FBN0IsU0FBdUNHLGtCQUF2QyxFQUFMLEdBQVA7QUFDRDs7QUFFRCxTQUFTUSwwQkFBVCxDQUFvQ1gsS0FBcEMsRUFBbUU7QUFBQSxNQUF4QlUsaUJBQXdCLHVFQUFKLEVBQUk7O0FBQ2pFLE1BQUlWLE1BQU15QixjQUFOLENBQXFCLG1CQUFyQixDQUFKLEVBQStDO0FBQzdDcEksWUFBUXFILGlCQUFSLEVBQTJCVixNQUFNVSxpQkFBakM7QUFDRDs7QUFFRCxNQUFNZ0IsYUFBYXhELE9BQU95RCxjQUFQLENBQXNCM0IsS0FBdEIsQ0FBbkI7O0FBRUEsTUFBSTBCLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJmLCtCQUEyQmUsVUFBM0IsRUFBdUNoQixpQkFBdkM7QUFDRDs7QUFFRCxTQUFPQSxpQkFBUDtBQUNEOztBQUVELFNBQVNHLDBCQUFULENBQW9DYixLQUFwQyxFQUFtRTtBQUFBLE1BQXhCWSxpQkFBd0IsdUVBQUosRUFBSTs7QUFDakUsTUFBSVosTUFBTXlCLGNBQU4sQ0FBcUIsbUJBQXJCLENBQUosRUFBK0M7QUFDN0NqSSxZQUFRb0gsaUJBQVIsRUFBMkJaLE1BQU1ZLGlCQUFqQyxFQUFvRCxVQUFTZ0IsZUFBVCxFQUEwQjtBQUM1RSxhQUFPLENBQUNoQixrQkFBa0JpQixRQUFsQixDQUEyQkQsZUFBM0IsQ0FBUjtBQUNELEtBRkQ7QUFHRDs7QUFFRCxNQUFNRixhQUFheEQsT0FBT3lELGNBQVAsQ0FBc0IzQixLQUF0QixDQUFuQjs7QUFFQSxNQUFJMEIsZUFBZSxJQUFuQixFQUF5QjtBQUN2QmIsK0JBQTJCYSxVQUEzQixFQUF1Q2QsaUJBQXZDO0FBQ0Q7O0FBRUQsU0FBT0EsaUJBQVA7QUFDRCIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBPZmZzZXQgPSByZXF1aXJlKCcuL21pc2NlbGxhbmVvdXMvb2Zmc2V0JyksXG4gICAgICBCb3VuZHMgPSByZXF1aXJlKCcuL21pc2NlbGxhbmVvdXMvYm91bmRzJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpLFxuICAgICAganN4TWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMvanN4JyksXG4gICAgICBrZXlNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9rZXknKSxcbiAgICAgIHN0YXRlTWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMvc3RhdGUnKSxcbiAgICAgIG1vdXNlTWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMvbW91c2UnKSxcbiAgICAgIGV2ZW50TWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMvZXZlbnQnKSxcbiAgICAgIGNsaWNrTWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMvY2xpY2snKSxcbiAgICAgIHNjcm9sbE1peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL3Njcm9sbCcpLFxuICAgICAgcmVzaXplTWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMvcmVzaXplJyksXG4gICAgICBkb21VdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9kb20nKSxcbiAgICAgIG5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9uYW1lJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBvYmplY3RVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9vYmplY3QnKTtcblxuY29uc3QgeyBjb21iaW5lIH0gPSBvYmplY3RVdGlsaXRpZXMsXG4gICAgICB7IGlzU1ZHVGFnTmFtZSB9ID0gbmFtZVV0aWxpdGllcyxcbiAgICAgIHsgZmlyc3QsIGF1Z21lbnQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBTVkdfTkFNRVNQQUNFX1VSSSB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yLCBkb21FbGVtZW50RnJvbVNlbGVjdG9yLCBlbGVtZW50c0Zyb21ET01FbGVtZW50cywgZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yLCBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSB9ID0gZG9tVXRpbGl0aWVzO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7IC8vL1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBFbGVtZW50LmNsb25lKHRoaXMpOyB9XG4gIFxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZSgnd2lkdGgnLCB3aWR0aCk7XG4gIH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoJ2hlaWdodCcsIGhlaWdodCk7XG4gIH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJyc7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gJ2Jsb2NrJykgeyB0aGlzLmRpc3BsYXkoZGlzcGxheVN0eWxlKTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCBkaXNwbGF5KTsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZSgnZGlzYWJsZWQnKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpOyB9XG5cbiAgaXNFbmFibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgZW5hYmxlZCA9ICFkaXNhYmxlZDtcblxuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG4gIFxuICBpc0Rpc3BsYXllZCgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5zdHlsZSgnZGlzcGxheScpLFxuICAgICAgICAgIGRpc3BsYXllZCA9IChkaXNwbGF5ICE9PSAnbm9uZScpO1xuICAgIFxuICAgIHJldHVybiBkaXNwbGF5ZWQ7XG4gIH1cblxuICBpc1Nob3dpbmcoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIHNob3dpbmcgPSBkaXNwbGF5ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzaG93aW5nO1xuICB9XG5cbiAgaXNIaWRkZW4oKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIGhpZGRlbiA9ICFkaXNwbGF5ZWQ7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgc3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdO1xuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wdXRlZFN0eWxlWzBdLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG4gIFxuICBibHVyKCkgeyB0aGlzLmRvbUVsZW1lbnQuYmx1cigpOyB9XG5cbiAgZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUpLFxuICAgICAgICAgIGRlc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkZXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKHBhcmVudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnRzID0gW3BhcmVudERPTUVsZW1lbnRdLFxuICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBsZXQgYXNjZW5kYW50RE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cbiAgICB3aGlsZSAoYXNjZW5kYW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGFzY2VuZGFudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMucHVzaChhc2NlbmRhbnRET01FbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgYXNjZW5kYW50RE9NRWxlbWVudCA9IGFzY2VuZGFudERPTUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBhc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGFzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBhc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gICAgaWYgKChwcmV2aW91c1NpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKHByZXZpb3VzU2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBuZXh0U2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nO1xuXG4gICAgaWYgKChuZXh0U2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IobmV4dFNpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIG5leHRTaWJsaW5nRWxlbWVudCA9IG5leHRTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0U2libGluZ0VsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGRlZXAgPSB0cnVlLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQuY2xvbmVOb2RlKGRlZXApO1xuXG4gICAgcmV0dXJuIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBvdXRlckRPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG91dGVyRE9NRWxlbWVudC5pbm5lckhUTUwgPSBodG1sOyAgLy8vXG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gb3V0ZXJET01FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICByZXR1cm4gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IENsYXNzLnRhZ05hbWUsXG4gICAgICAgICAgZWxlbWVudCA9IGZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpLFxuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MpO1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBmcm9tVGFnTmFtZShFbGVtZW50LCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30sIC8vL1xuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107IC8vL1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc3RhdGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHJlc2l6ZU1peGlucyk7XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudCwge1xuICBMRUZUX01PVVNFX0JVVFRPTjogMCxcbiAgUklHSFRfTU9VU0VfQlVUVE9OOiAyLFxuICBNSURETEVfTU9VU0VfQlVUVE9OOiAxXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBmcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIHJldHVybiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcblxuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KCdkZWZhdWx0UHJvcGVydGllcycpKSB7XG4gICAgY29tYmluZShkZWZhdWx0UHJvcGVydGllcywgQ2xhc3MuZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eSgnaWdub3JlZFByb3BlcnRpZXMnKSkge1xuICAgIGF1Z21lbnQoaWdub3JlZFByb3BlcnRpZXMsIENsYXNzLmlnbm9yZWRQcm9wZXJ0aWVzLCBmdW5jdGlvbihpZ25vcmVkUHJvcGVydHkpIHtcbiAgICAgIHJldHVybiAhaWdub3JlZFByb3BlcnRpZXMuaW5jbHVkZXMoaWdub3JlZFByb3BlcnR5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIl19