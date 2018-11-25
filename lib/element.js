'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var jsxMixins = require('./mixins/jsx'),
    keyMixins = require('./mixins/key'),
    mouseMixins = require('./mixins/mouse'),
    eventMixins = require('./mixins/event'),
    clickMixins = require('./mixins/click'),
    scrollMixins = require('./mixins/scroll'),
    resizeMixins = require('./mixins/resize'),
    Offset = require('./miscellaneous/offset'),
    Bounds = require('./miscellaneous/bounds'),
    domUtilities = require('./utilities/dom'),
    arrayUtilities = require('./utilities/array'),
    objectUtilities = require('./utilities/object'),
    tagNameUtilities = require('./utilities/tagName');

var combine = objectUtilities.combine,
    isSVGTagName = tagNameUtilities.isSVGTagName,
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
  var domElement = isSVGTagName(tagName) ? document.createElementNS('http://www.w3.org/2000/svg', tagName) : document.createElement(tagName);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbImpzeE1peGlucyIsInJlcXVpcmUiLCJrZXlNaXhpbnMiLCJtb3VzZU1peGlucyIsImV2ZW50TWl4aW5zIiwiY2xpY2tNaXhpbnMiLCJzY3JvbGxNaXhpbnMiLCJyZXNpemVNaXhpbnMiLCJPZmZzZXQiLCJCb3VuZHMiLCJkb21VdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsIm9iamVjdFV0aWxpdGllcyIsInRhZ05hbWVVdGlsaXRpZXMiLCJjb21iaW5lIiwiaXNTVkdUYWdOYW1lIiwiZmlyc3QiLCJhdWdtZW50IiwiZG9tTm9kZU1hdGNoZXNTZWxlY3RvciIsImRvbUVsZW1lbnRGcm9tU2VsZWN0b3IiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsImZpbHRlckRPTU5vZGVzQnlTZWxlY3RvciIsImRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIiwiRWxlbWVudCIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsIl9fZWxlbWVudF9fIiwiY2xvbmUiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJpbmNsdWRlQm9yZGVyIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJuYW1lIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZSIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsInByZXBlbmQiLCJhcHBlbmQiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImVsZW1lbnQiLCJmaXJzdENoaWxkRE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImRpc3BsYXlTdHlsZSIsImRpc3BsYXkiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJlbmFibGVkIiwiZGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJzaG93aW5nIiwiaGlkZGVuIiwidW5kZWZpbmVkIiwiaHRtbCIsImlubmVySFRNTCIsImNzcyIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJnZXRQcm9wZXJ0eVZhbHVlIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImJpbmQiLCJibHVyIiwiZm9jdXMiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJkb21Ob2RlIiwiZGVzY2VuZGFudERPTU5vZGVzIiwiZGVzY2VuZGFudERPTUVsZW1lbnRzIiwiZGVzY2VuZGFudEVsZW1lbnRzIiwiY2hpbGRET01Ob2RlcyIsImNoaWxkTm9kZXMiLCJjaGlsZERPTUVsZW1lbnRzIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudERPTUVsZW1lbnQiLCJtYXRjaGVzIiwicGFyZW50RE9NRWxlbWVudHMiLCJwYXJlbnRFbGVtZW50cyIsImZpcnN0UGFyZW50RWxlbWVudCIsImFzY2VuZGFudERPTUVsZW1lbnRzIiwiYXNjZW5kYW50RE9NRWxlbWVudCIsInB1c2giLCJhc2NlbmRhbnRFbGVtZW50cyIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdET01Ob2RlIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmdFbGVtZW50IiwibmV4dFNpYmxpbmdET01Ob2RlIiwiQ2xhc3MiLCJkZWVwIiwiY2xvbmVOb2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZnJvbURPTUVsZW1lbnQiLCJvdXRlckRPTUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicHJvcGVydGllcyIsInRhZ05hbWUiLCJmcm9tVGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MiLCJpZ25vcmVkUHJvcGVydGllcyIsImlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzIiwiYXBwbHlQcm9wZXJ0aWVzIiwiYXNzaWduIiwicHJvdG90eXBlIiwiTEVGVF9NT1VTRV9CVVRUT04iLCJSSUdIVF9NT1VTRV9CVVRUT04iLCJNSURETEVfTU9VU0VfQlVUVE9OIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUVsZW1lbnROUyIsInVuc2hpZnQiLCJjYWxsIiwiaGFzT3duUHJvcGVydHkiLCJzdXBlckNsYXNzIiwiZ2V0UHJvdG90eXBlT2YiLCJpZ25vcmVkUHJvcGVydHkiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLFlBQVlELFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1FLGNBQWNGLFFBQVEsZ0JBQVIsQ0FGcEI7QUFBQSxJQUdNRyxjQUFjSCxRQUFRLGdCQUFSLENBSHBCO0FBQUEsSUFJTUksY0FBY0osUUFBUSxnQkFBUixDQUpwQjtBQUFBLElBS01LLGVBQWVMLFFBQVEsaUJBQVIsQ0FMckI7QUFBQSxJQU1NTSxlQUFlTixRQUFRLGlCQUFSLENBTnJCO0FBQUEsSUFPTU8sU0FBU1AsUUFBUSx3QkFBUixDQVBmO0FBQUEsSUFRTVEsU0FBU1IsUUFBUSx3QkFBUixDQVJmO0FBQUEsSUFTTVMsZUFBZVQsUUFBUSxpQkFBUixDQVRyQjtBQUFBLElBVU1VLGlCQUFpQlYsUUFBUSxtQkFBUixDQVZ2QjtBQUFBLElBV01XLGtCQUFrQlgsUUFBUSxvQkFBUixDQVh4QjtBQUFBLElBWU1ZLG1CQUFtQlosUUFBUSxxQkFBUixDQVp6Qjs7QUFjTSxJQUFFYSxP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TUFBSVosTUFBTXlCLGNBQU4sQ0FBcUIsbUJBQXJCLENBQUosRUFBK0M7QUFDN0NoSSxZQUFRbUgsaUJBQVIsRUFBMkJaLE1BQU1ZLGlCQUFqQyxFQUFvRCxVQUFTZ0IsZUFBVCxFQUEwQjtBQUM1RSxhQUFPLENBQUNoQixrQkFBa0JpQixRQUFsQixDQUEyQkQsZUFBM0IsQ0FBUjtBQUNELEtBRkQ7QUFHRDs7QUFFRCxNQUFNRixhQUFheEQsT0FBT3lELGNBQVAsQ0FBc0IzQixLQUF0QixDQUFuQjs7QUFFQSxNQUFJMEIsZUFBZSxJQUFuQixFQUF5QjtBQUN2QmIsK0JBQTJCYSxVQUEzQixFQUF1Q2QsaUJBQXZDO0FBQ0Q7O0FBRUQsU0FBT0EsaUJBQVA7QUFDRCIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBqc3hNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9qc3gnKSxcbiAgICAgIGtleU1peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL2tleScpLFxuICAgICAgbW91c2VNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9tb3VzZScpLFxuICAgICAgZXZlbnRNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9jbGljaycpLFxuICAgICAgc2Nyb2xsTWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMvc2Nyb2xsJyksXG4gICAgICByZXNpemVNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9yZXNpemUnKSxcbiAgICAgIE9mZnNldCA9IHJlcXVpcmUoJy4vbWlzY2VsbGFuZW91cy9vZmZzZXQnKSxcbiAgICAgIEJvdW5kcyA9IHJlcXVpcmUoJy4vbWlzY2VsbGFuZW91cy9ib3VuZHMnKSxcbiAgICAgIGRvbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2RvbScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgb2JqZWN0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvb2JqZWN0JyksXG4gICAgICB0YWdOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdGFnTmFtZScpO1xuXG5jb25zdCB7IGNvbWJpbmUgfSA9IG9iamVjdFV0aWxpdGllcyxcbiAgICAgIHsgaXNTVkdUYWdOYW1lIH0gPSB0YWdOYW1lVXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgYXVnbWVudCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gPSBkb21VdGlsaXRpZXM7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cbiAgXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHdpZHRoID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKCd3aWR0aCcsIHdpZHRoKTtcbiAgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZSgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJzsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSAnYmxvY2snKSB7IHRoaXMuZGlzcGxheShkaXNwbGF5U3R5bGUpOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5zdHlsZSgnZGlzcGxheScsICdub25lJyk7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZSgnZGlzcGxheScsIGRpc3BsYXkpOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKCdkaXNhYmxlZCcpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7IH1cblxuICBpc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBlbmFibGVkID0gIWRpc2FibGVkO1xuXG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLnN0eWxlKCdkaXNwbGF5JyksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09ICdub25lJyk7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gIGlzU2hvd2luZygpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgc2hvd2luZyA9IGRpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgaGlkZGVuID0gIWRpc3BsYXllZDtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG4gIH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNvbXB1dGVkU3R5bGVbMF0sICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY3NzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuc3R5bGUobmFtZSwgdmFsdWUpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cbiAgXG4gIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBnZXREZXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBkb21Ob2RlID0gdGhpcy5kb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgZGVzY2VuZGFudERPTU5vZGVzID0gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSksXG4gICAgICAgICAgZGVzY2VuZGFudERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGRlc2NlbmRhbnRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICAgIGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRlc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZGVzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0Q2hpbGRFbGVtZW50cyhzZWxlY3RvciA9ICcqJykge1xuICAgIGNvbnN0IGNoaWxkRE9NTm9kZXMgPSB0aGlzLmRvbUVsZW1lbnQuY2hpbGROb2RlcyxcbiAgICAgICAgICBjaGlsZERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGNoaWxkRE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBhc2NlbmRhbnRET01FbGVtZW50cyA9IFtdLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGxldCBhc2NlbmRhbnRET01FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuICAgIHdoaWxlIChhc2NlbmRhbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAoYXNjZW5kYW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhc2NlbmRhbnRET01FbGVtZW50cy5wdXNoKGFzY2VuZGFudERPTUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBhc2NlbmRhbnRET01FbGVtZW50ID0gYXNjZW5kYW50RE9NRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGFzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoYXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHByZXZpb3VzU2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQucHJldmlvdXNTaWJsaW5nOyAgLy8vXG5cbiAgICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xuICB9XG5cbiAgZ2V0TmV4dFNpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7XG5cbiAgICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgbmV4dFNpYmxpbmdFbGVtZW50ID0gbmV4dFNpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZGVlcCA9IHRydWUsXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudC5jbG9uZU5vZGUoZGVlcCk7XG5cbiAgICByZXR1cm4gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG91dGVyRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgb3V0ZXJET01FbGVtZW50LmlubmVySFRNTCA9IGh0bWw7ICAvLy9cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBvdXRlckRPTUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHJldHVybiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gQ2xhc3MudGFnTmFtZSxcbiAgICAgICAgICBlbGVtZW50ID0gZnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGZyb21UYWdOYW1lKEVsZW1lbnQsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSwgLy8vXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBbXTsgLy8vXG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW5zKTtcblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LCB7XG4gIExFRlRfTU9VU0VfQlVUVE9OOiAwLFxuICBSSUdIVF9NT1VTRV9CVVRUT046IDIsXG4gIE1JRERMRV9NT1VTRV9CVVRUT046IDFcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCB0YWdOYW1lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICByZXR1cm4gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG5cbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdFByb3BlcnRpZXMnKSkge1xuICAgIGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzLmRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRQcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgaWdub3JlZFByb3BlcnRpZXMgPSBbXSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoJ2lnbm9yZWRQcm9wZXJ0aWVzJykpIHtcbiAgICBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzcy5pZ25vcmVkUHJvcGVydGllcywgZnVuY3Rpb24oaWdub3JlZFByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gIWlnbm9yZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGlnbm9yZWRQcm9wZXJ0eSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBpZ25vcmVkUHJvcGVydGllcztcbn1cbiJdfQ==