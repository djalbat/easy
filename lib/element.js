'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Offset = require('./misc/offset'),
    Bounds = require('./misc/bounds'),
    jsxMixin = require('./mixin/jsx'),
    eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    scrollMixin = require('./mixin/scroll'),
    resizeMixin = require('./mixin/resize'),
    mouseMixin = require('./mixin/mouse'),
    keyMixin = require('./mixin/key'),
    domUtilities = require('./utilities/dom'),
    objectUtilities = require('./utilities/object');

var arrayUtilities = necessary.arrayUtilities,
    combine = objectUtilities.combine,
    first = arrayUtilities.first,
    augment = arrayUtilities.augment,
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
      this.domElement.style.width = width;
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
      this.domElement.style.height = height;
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
      this.domElement.style.display = 'none';
    }
  }, {
    key: 'display',
    value: function display(displayStyle) {
      this.domElement.style.display = displayStyle;
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
      return this.domElement.style.display !== 'none';
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

          this.domElement.style[name] = value;
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

      remainingArguments.unshift(domElement);
      remainingArguments.unshift(null);

      return new (Function.prototype.bind.apply(Class, remainingArguments))();
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

      remainingArguments.unshift(domElement);
      remainingArguments.unshift(null);

      return new (Function.prototype.bind.apply(Class, remainingArguments))();
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      remainingArguments.unshift(domElement);
      remainingArguments.unshift(null);

      return new (Function.prototype.bind.apply(Class, remainingArguments))();
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
      }

      var tagName = Class.tagName,
          html = '<' + tagName + ' />',
          element = Element.fromHTML.apply(Element, [Class, html].concat(remainingArguments)),
          defaultProperties = defaultPropertiesFromClass(Class),
          ignoredProperties = ignoredPropertiesFromClass(Class);

      element.applyProperties(properties, defaultProperties, ignoredProperties);

      return element;
    }
  }, {
    key: 'fromString',
    value: function fromString(string, properties) {
      for (var _len5 = arguments.length, remainingArguments = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        remainingArguments[_key5 - 2] = arguments[_key5];
      }

      var tagName = string,
          ///
      html = '<' + tagName + ' />',
          element = Element.fromHTML.apply(Element, [Element, html].concat(remainingArguments)),
          defaultProperties = {},
          ///
      ignoredProperties = []; ///

      element.applyProperties(properties, defaultProperties, ignoredProperties);

      return element;
    }
  }]);

  return Element;
}();

Object.assign(Element.prototype, jsxMixin);
Object.assign(Element.prototype, eventMixin);
Object.assign(Element.prototype, clickMixin);
Object.assign(Element.prototype, scrollMixin);
Object.assign(Element.prototype, resizeMixin);
Object.assign(Element.prototype, mouseMixin);
Object.assign(Element.prototype, keyMixin);

Object.assign(Element, {
  LEFT_MOUSE_BUTTON: 0,
  RIGHT_MOUSE_BUTTON: 2,
  MIDDLE_MOUSE_BUTTON: 1
});

module.exports = Element;

function defaultPropertiesFromClass(Class) {
  var defaultProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  combine(defaultProperties, Class.defaultProperties);

  var superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    defaultPropertiesFromClass(superClass, defaultProperties);
  }

  return defaultProperties;
}

function ignoredPropertiesFromClass(Class) {
  var ignoredProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  augment(ignoredProperties, Class.ignoredProperties || [], function (ignoredProperty) {
    return !ignoredProperties.includes(ignoredProperty);
  });

  var superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    ignoredPropertiesFromClass(superClass, ignoredProperties);
  }

  return ignoredProperties;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJPZmZzZXQiLCJCb3VuZHMiLCJqc3hNaXhpbiIsImV2ZW50TWl4aW4iLCJjbGlja01peGluIiwic2Nyb2xsTWl4aW4iLCJyZXNpemVNaXhpbiIsIm1vdXNlTWl4aW4iLCJrZXlNaXhpbiIsImRvbVV0aWxpdGllcyIsIm9iamVjdFV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiY29tYmluZSIsImZpcnN0IiwiYXVnbWVudCIsImRvbU5vZGVNYXRjaGVzU2VsZWN0b3IiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IiLCJkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSIsIkVsZW1lbnQiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJfX2VsZW1lbnRfXyIsImNsb25lIiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXQiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZHMiLCJmcm9tQm91bmRpbmdDbGllbnRSZWN0IiwiaW5jbHVkZUJvcmRlciIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInN0eWxlIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibmFtZSIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0b2dnbGUiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiLCJwcmVwZW5kIiwiYXBwZW5kIiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJlbGVtZW50IiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJkaXNwbGF5U3R5bGUiLCJkaXNwbGF5IiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwiZW5hYmxlZCIsImh0bWwiLCJ1bmRlZmluZWQiLCJpbm5lckhUTUwiLCJjc3MiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImluZGV4IiwibGVuZ3RoIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJiaW5kIiwiYmx1ciIsImZvY3VzIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiZG9tTm9kZSIsImRlc2NlbmRhbnRET01Ob2RlcyIsImRlc2NlbmRhbnRET01FbGVtZW50cyIsImRlc2NlbmRhbnRFbGVtZW50cyIsImNoaWxkRE9NTm9kZXMiLCJjaGlsZE5vZGVzIiwiY2hpbGRET01FbGVtZW50cyIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRET01FbGVtZW50IiwibWF0Y2hlcyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50RWxlbWVudHMiLCJmaXJzdFBhcmVudEVsZW1lbnQiLCJhc2NlbmRhbnRET01FbGVtZW50cyIsImFzY2VuZGFudERPTUVsZW1lbnQiLCJwdXNoIiwiYXNjZW5kYW50RWxlbWVudHMiLCJwcmV2aW91c1NpYmxpbmdFbGVtZW50IiwicHJldmlvdXNTaWJsaW5nRE9NTm9kZSIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nRWxlbWVudCIsIm5leHRTaWJsaW5nRE9NTm9kZSIsIkNsYXNzIiwiZGVlcCIsImNsb25lTm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInVuc2hpZnQiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsImFwcGx5Iiwib3V0ZXJET01FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInByb3BlcnRpZXMiLCJ0YWdOYW1lIiwiZnJvbUhUTUwiLCJkZWZhdWx0UHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyIsImFwcGx5UHJvcGVydGllcyIsInN0cmluZyIsImFzc2lnbiIsIkxFRlRfTU9VU0VfQlVUVE9OIiwiUklHSFRfTU9VU0VfQlVUVE9OIiwiTUlERExFX01PVVNFX0JVVFRPTiIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdXBlckNsYXNzIiwiZ2V0UHJvdG90eXBlT2YiLCJpZ25vcmVkUHJvcGVydHkiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxTQUFTRCxRQUFRLGVBQVIsQ0FBZjtBQUFBLElBQ01FLFNBQVNGLFFBQVEsZUFBUixDQURmO0FBQUEsSUFFTUcsV0FBV0gsUUFBUSxhQUFSLENBRmpCO0FBQUEsSUFHTUksYUFBYUosUUFBUSxlQUFSLENBSG5CO0FBQUEsSUFJTUssYUFBYUwsUUFBUSxlQUFSLENBSm5CO0FBQUEsSUFLTU0sY0FBY04sUUFBUSxnQkFBUixDQUxwQjtBQUFBLElBTU1PLGNBQWNQLFFBQVEsZ0JBQVIsQ0FOcEI7QUFBQSxJQU9NUSxhQUFhUixRQUFRLGVBQVIsQ0FQbkI7QUFBQSxJQVFNUyxXQUFXVCxRQUFRLGFBQVIsQ0FSakI7QUFBQSxJQVNNVSxlQUFlVixRQUFRLGlCQUFSLENBVHJCO0FBQUEsSUFVTVcsa0JBQWtCWCxRQUFRLG9CQUFSLENBVnhCOztBQVlNLElBQUVZLGNBQUYsR0FBcUJiLFNBQXJCLENBQUVhLGNBQUY7QUFBQSxJQUNFQyxPQURGLEdBQ2NGLGVBRGQsQ0FDRUUsT0FERjtBQUFBLElBRUVDLEtBRkYsR0FFcUJGLGNBRnJCLENBRUVFLEtBRkY7QUFBQSxJQUVTQyxPQUZULEdBRXFCSCxjQUZyQixDQUVTRyxPQUZUO0FBQUEs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LEtBQXRCLENBQW5COztBQUVBLE1BQUl5QixlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCWCwrQkFBMkJXLFVBQTNCLEVBQXVDWixpQkFBdkM7QUFDRDs7QUFFRCxTQUFPQSxpQkFBUDtBQUNEOztBQUVELFNBQVNHLDBCQUFULENBQW9DaEIsS0FBcEMsRUFBbUU7QUFBQSxNQUF4QmUsaUJBQXdCLHVFQUFKLEVBQUk7O0FBQ2pFbEgsVUFBUWtILGlCQUFSLEVBQTJCZixNQUFNZSxpQkFBTixJQUEyQixFQUF0RCxFQUEwRCxVQUFTWSxlQUFULEVBQTBCO0FBQ2xGLFdBQU8sQ0FBQ1osa0JBQWtCYSxRQUFsQixDQUEyQkQsZUFBM0IsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTUYsYUFBYXZELE9BQU93RCxjQUFQLENBQXNCMUIsS0FBdEIsQ0FBbkI7O0FBRUEsTUFBSXlCLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJULCtCQUEyQlMsVUFBM0IsRUFBdUNWLGlCQUF2QztBQUNEOztBQUVELFNBQU9BLGlCQUFQO0FBQ0QiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IE9mZnNldCA9IHJlcXVpcmUoJy4vbWlzYy9vZmZzZXQnKSxcbiAgICAgIEJvdW5kcyA9IHJlcXVpcmUoJy4vbWlzYy9ib3VuZHMnKSxcbiAgICAgIGpzeE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9qc3gnKSxcbiAgICAgIGV2ZW50TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2V2ZW50JyksXG4gICAgICBjbGlja01peGluID0gcmVxdWlyZSgnLi9taXhpbi9jbGljaycpLFxuICAgICAgc2Nyb2xsTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3Njcm9sbCcpLFxuICAgICAgcmVzaXplTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3Jlc2l6ZScpLFxuICAgICAgbW91c2VNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbW91c2UnKSxcbiAgICAgIGtleU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9rZXknKSxcbiAgICAgIGRvbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2RvbScpLFxuICAgICAgb2JqZWN0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvb2JqZWN0Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgY29tYmluZSB9ID0gb2JqZWN0VXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgYXVnbWVudCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gPSBkb21VdGlsaXRpZXM7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cbiAgXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHdpZHRoID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLndpZHRoID0gd2lkdGg7IH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodDsgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJzsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSAnYmxvY2snKSB7IHRoaXMuZGlzcGxheShkaXNwbGF5U3R5bGUpOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cblxuICBkaXNwbGF5KGRpc3BsYXlTdHlsZSkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlTdHlsZTsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZSgnZGlzYWJsZWQnKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpOyB9XG5cbiAgaXNFbmFibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgZW5hYmxlZCA9ICFkaXNhYmxlZDtcblxuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG4gIFxuICBpc0Rpc3BsYXllZCgpIHsgcmV0dXJuICh0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKTsgfSAgICBcblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNvbXB1dGVkU3R5bGVbMF0sICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY3NzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBibHVyKCkgeyB0aGlzLmRvbUVsZW1lbnQuYmx1cigpOyB9XG5cbiAgZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUpLFxuICAgICAgICAgIGRlc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkZXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKHBhcmVudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnRzID0gW3BhcmVudERPTUVsZW1lbnRdLFxuICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBsZXQgYXNjZW5kYW50RE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cbiAgICB3aGlsZSAoYXNjZW5kYW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGFzY2VuZGFudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMucHVzaChhc2NlbmRhbnRET01FbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgYXNjZW5kYW50RE9NRWxlbWVudCA9IGFzY2VuZGFudERPTUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBhc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGFzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBhc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gICAgaWYgKChwcmV2aW91c1NpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKHByZXZpb3VzU2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBuZXh0U2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nO1xuXG4gICAgaWYgKChuZXh0U2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IobmV4dFNpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIG5leHRTaWJsaW5nRWxlbWVudCA9IG5leHRTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0U2libGluZ0VsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGRlZXAgPSB0cnVlLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQuY2xvbmVOb2RlKGRlZXApO1xuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG91dGVyRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgb3V0ZXJET01FbGVtZW50LmlubmVySFRNTCA9IGh0bWw7ICAvLy9cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBvdXRlckRPTUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IENsYXNzLnRhZ05hbWUsXG4gICAgICAgICAgaHRtbCA9IGA8JHt0YWdOYW1lfSAvPmAsXG4gICAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICBodG1sID0gYDwke3RhZ05hbWV9IC8+YCxcbiAgICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChFbGVtZW50LCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30sIC8vL1xuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107IC8vL1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGluKTtcblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LCB7XG4gIExFRlRfTU9VU0VfQlVUVE9OOiAwLFxuICBSSUdIVF9NT1VTRV9CVVRUT046IDIsXG4gIE1JRERMRV9NT1VTRV9CVVRUT046IDFcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzLmRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgYXVnbWVudChpZ25vcmVkUHJvcGVydGllcywgQ2xhc3MuaWdub3JlZFByb3BlcnRpZXMgfHwgW10sIGZ1bmN0aW9uKGlnbm9yZWRQcm9wZXJ0eSkge1xuICAgIHJldHVybiAhaWdub3JlZFByb3BlcnRpZXMuaW5jbHVkZXMoaWdub3JlZFByb3BlcnR5KTtcbiAgfSk7XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBpZ25vcmVkUHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gaWdub3JlZFByb3BlcnRpZXM7XG59XG4iXX0=