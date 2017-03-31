'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Offset = require('./misc/offset'),
    Bounds = require('./misc/bounds'),
    jsxMixin = require('./mixin/jsx'),
    eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    scrollMixin = require('./mixin/scroll'),
    resizeMixin = require('./mixin/resize'),
    mouseMixin = require('./mixin/mouse'),
    keyMixin = require('./mixin/key');

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
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);

      return bounds;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

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
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var height = includeBorder ? this.domElement.offsetHeight : this.domElement.clientHeight;

      return height;
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      this.domElement.style.height = height;
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
      this.domElement.style.display = displayStyle;
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.domElement.style.display = 'none';
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
          descendantElements = filterDOMNodes(descendantDOMNodes, selector);

      return descendantElements;
    }
  }, {
    key: 'getChildElements',
    value: function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var childDOMNodes = this.domElement.childNodes,
          childDOMElements = filterDOMNodes(childDOMNodes, selector),
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
          element = Element.fromHTML.apply(Element, [Class, html].concat(remainingArguments));

      var defaultProperties = Class.defaultProperties,
          ignoredProperties = Class.ignoredProperties;

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
  MIDDLE_MOUSE_BUTTON: 1,
  RIGHT_MOUSE_BUTTON: 2
});

module.exports = Element;

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

function elementsFromDOMElements(domElements) {
  var domElementsWithElements = filter(domElements, function (domElement) {
    return domElement.__element__ !== undefined;
  }),
      elements = domElementsWithElements.map(function (domElement) {
    return domElement.__element__;
  });

  return elements;
}

function descendantDOMNodesFromDOMNode(domNode) {
  var descendantDOMNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var childDOMNodes = domNode.childNodes; ///

  descendantDOMNodes.concat(childDOMNodes);

  childDOMNodes.forEach(function (childDOMNode) {
    descendantDOMNodesFromDOMNode(childDOMNode, descendantDOMNodes);
  });

  return descendantDOMNodes;
}

function filterDOMNodes(domNodes, selector) {
  var filteredDOMNodes = filter(domNodes, function (domNode) {
    return domNodeMatchesSelector(domNode, selector);
  });

  return filteredDOMNodes;
}

function domNodeMatchesSelector(domNode, selector) {
  var domNodeType = domNode.nodeType;

  switch (domNodeType) {
    case Node.ELEMENT_NODE:
      {
        var domElement = domNode; ///

        return domElement.matches(selector);
      }

    case Node.TEXT_NODE:
      {
        if (selector === '*') {
          return true;
        }
      }
  }

  return false;
}

function filter(array, test) {
  var filteredArray = [];

  for (var index = 0; index < array.length; index++) {
    var element = array[index],
        result = test(element);

    if (result) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIk9mZnNldCIsInJlcXVpcmUiLCJCb3VuZHMiLCJqc3hNaXhpbiIsImV2ZW50TWl4aW4iLCJjbGlja01peGluIiwic2Nyb2xsTWl4aW4iLCJyZXNpemVNaXhpbiIsIm1vdXNlTWl4aW4iLCJrZXlNaXhpbiIsIkVsZW1lbnQiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiX19lbGVtZW50X18iLCJjbG9uZSIsInRvcCIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0IiwiaW5jbHVkZUJvcmRlciIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJzdHlsZSIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsIm5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImNsZWFyQXR0cmlidXRlIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidG9nZ2xlIiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50IiwicHJlcGVuZCIsImFwcGVuZCIsInNpYmxpbmdFbGVtZW50IiwicGFyZW50RE9NTm9kZSIsInBhcmVudE5vZGUiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiZWxlbWVudCIsImZpcnN0Q2hpbGRET01FbGVtZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZGlzcGxheVN0eWxlIiwiZGlzcGxheSIsImh0bWwiLCJ1bmRlZmluZWQiLCJpbm5lckhUTUwiLCJjc3MiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImluZGV4IiwibGVuZ3RoIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJiaW5kIiwiYmx1ciIsImZvY3VzIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiZG9tTm9kZSIsImRlc2NlbmRhbnRET01Ob2RlcyIsImRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIiwiZGVzY2VuZGFudEVsZW1lbnRzIiwiZmlsdGVyRE9NTm9kZXMiLCJjaGlsZERPTU5vZGVzIiwiY2hpbGROb2RlcyIsImNoaWxkRE9NRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJwYXJlbnRET01FbGVtZW50IiwibWF0Y2hlcyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50RWxlbWVudHMiLCJmaXJzdFBhcmVudEVsZW1lbnQiLCJmaXJzdCIsImFzY2VuZGFudERPTUVsZW1lbnRzIiwiYXNjZW5kYW50RE9NRWxlbWVudCIsInB1c2giLCJhc2NlbmRhbnRFbGVtZW50cyIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdET01Ob2RlIiwicHJldmlvdXNTaWJsaW5nIiwiZG9tTm9kZU1hdGNoZXNTZWxlY3RvciIsIm5leHRTaWJsaW5nRWxlbWVudCIsIm5leHRTaWJsaW5nRE9NTm9kZSIsIkNsYXNzIiwiZGVlcCIsImNsb25lTm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInVuc2hpZnQiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsImFwcGx5Iiwib3V0ZXJET01FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInByb3BlcnRpZXMiLCJ0YWdOYW1lIiwiZnJvbUhUTUwiLCJkZWZhdWx0UHJvcGVydGllcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiYXBwbHlQcm9wZXJ0aWVzIiwiYXNzaWduIiwiTEVGVF9NT1VTRV9CVVRUT04iLCJNSURETEVfTU9VU0VfQlVUVE9OIiwiUklHSFRfTU9VU0VfQlVUVE9OIiwibW9kdWxlIiwiZXhwb3J0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkb21FbGVtZW50cyIsImRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzIiwiZmlsdGVyIiwiZWxlbWVudHMiLCJtYXAiLCJjb25jYXQiLCJjaGlsZERPTU5vZGUiLCJkb21Ob2RlcyIsImZpbHRlcmVkRE9NTm9kZXMiLCJkb21Ob2RlVHlwZSIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsIlRFWFRfTk9ERSIsImFycmF5IiwidGVzdCIsImZpbHRlcmVkQXJyYXkiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGVBQVIsQ0FBZjtBQUFBLElBQ01DLFNBQVNELFFBQVEsZUFBUixDQURmO0FBQUEsSUFFTUUsV0FBV0YsUUFBUSxhQUFSLENBRmpCO0FBQUEsSUFHTUcsYUFBYUgsUUFBUSxlQUFSLENBSG5CO0FBQUEsSUFJTUksYUFBYUosUUFBUSxlQUFSLENBSm5CO0FBQUEsSUFLTUssY0FBY0wsUUFBUSxnQkFBUixDQUxwQjtBQUFBLElBTU1NLGNBQWNOLFFBQVEsZ0JBQVIsQ0FOcEI7QUFBQSxJQU9NTyxhQUFhUCxRQUFRLGVBQVIsQ0FQbkI7QUFBQSxJQVFNUSxXQUFXUixRQUFRLGFBQVIsQ0FSakI7O0lBVU1TLE87QUFDSixtQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQyxVQUFMLEdBQWtCQyx1QkFBdUJGLFFBQXZCLENBQWxCOztBQUVBLFNBQUtDLFVBQUwsQ0FBZ0JFLFdBQWhCLEdBQThCLElBQTlCLENBSG9CLENBR2dCO0FBQ3JDOzs7OzRCQUVPO0FBQUUsYUFBT0osUUFBUUssS0FBUixDQUFjLElBQWQsQ0FBUDtBQUE2Qjs7O2dDQUUzQjtBQUNWLFVBQU1DLE1BQU0sS0FBS0osVUFBTCxDQUFnQkssU0FBNUI7QUFBQSxVQUF3QztBQUNsQ0MsYUFBTyxLQUFLTixVQUFMLENBQWdCTyxVQUQ3QjtBQUFBLFVBQzBDO0FBQ3BDQyxlQUFTLElBQUlwQixN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QUFQO0FBQWtCIiwiZmlsZSI6ImVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE9mZnNldCA9IHJlcXVpcmUoJy4vbWlzYy9vZmZzZXQnKSxcbiAgICAgIEJvdW5kcyA9IHJlcXVpcmUoJy4vbWlzYy9ib3VuZHMnKSxcbiAgICAgIGpzeE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9qc3gnKSxcbiAgICAgIGV2ZW50TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2V2ZW50JyksXG4gICAgICBjbGlja01peGluID0gcmVxdWlyZSgnLi9taXhpbi9jbGljaycpLFxuICAgICAgc2Nyb2xsTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3Njcm9sbCcpLFxuICAgICAgcmVzaXplTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3Jlc2l6ZScpLFxuICAgICAgbW91c2VNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbW91c2UnKSxcbiAgICAgIGtleU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9rZXknKTtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZSh0aGlzKTsgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcyhpbmNsdWRlQm9yZGVyID0gZmFsc2UpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gZmFsc2UpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS53aWR0aCA9IHdpZHRoOyB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSBmYWxzZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0OyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJzsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSAnYmxvY2snKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVN0eWxlOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTsgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gY29tcHV0ZWRTdHlsZVswXSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSAnc3RyaW5nJykge1xuICAgICAgbGV0IG5hbWUgPSBjc3M7IC8vL1xuXG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICBjc3MgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKGNzcyk7IC8vL1xuXG4gICAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBnZXREZXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBkb21Ob2RlID0gdGhpcy5kb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgZGVzY2VuZGFudERPTU5vZGVzID0gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSksXG4gICAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXMoZGVzY2VuZGFudERPTU5vZGVzLCBzZWxlY3Rvcik7XG5cbiAgICByZXR1cm4gZGVzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0Q2hpbGRFbGVtZW50cyhzZWxlY3RvciA9ICcqJykge1xuICAgIGNvbnN0IGNoaWxkRE9NTm9kZXMgPSB0aGlzLmRvbUVsZW1lbnQuY2hpbGROb2RlcyxcbiAgICAgICAgICBjaGlsZERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXMoY2hpbGRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0UGFyZW50RWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBwYXJlbnRFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChwYXJlbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAocGFyZW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50cyA9IFtwYXJlbnRET01FbGVtZW50XSxcbiAgICAgICAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKTtcblxuICAgICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBnZXRBc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9ICcqJykge1xuICAgIGNvbnN0IGFzY2VuZGFudERPTUVsZW1lbnRzID0gW10sXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgbGV0IGFzY2VuZGFudERPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG4gICAgd2hpbGUgKGFzY2VuZGFudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChhc2NlbmRhbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFzY2VuZGFudERPTUVsZW1lbnRzLnB1c2goYXNjZW5kYW50RE9NRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGFzY2VuZGFudERPTUVsZW1lbnQgPSBhc2NlbmRhbnRET01FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gYXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcHJldmlvdXNTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5wcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICAgIGlmICgocHJldmlvdXNTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihwcmV2aW91c1NpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSBwcmV2aW91c1NpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZpb3VzU2libGluZ0VsZW1lbnQ7XG4gIH1cblxuICBnZXROZXh0U2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgbmV4dFNpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5uZXh0U2libGluZztcblxuICAgIGlmICgobmV4dFNpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKG5leHRTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBuZXh0U2libGluZ0VsZW1lbnQgPSBuZXh0U2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFNpYmxpbmdFbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBkZWVwID0gdHJ1ZSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LmNsb25lTm9kZShkZWVwKTtcblxuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBvdXRlckRPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG91dGVyRE9NRWxlbWVudC5pbm5lckhUTUwgPSBodG1sOyAgLy8vXG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gb3V0ZXJET01FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBDbGFzcy50YWdOYW1lLFxuICAgICAgICAgIGh0bWwgPSBgPCR7dGFnTmFtZX0gLz5gLFxuICAgICAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgY29uc3QgZGVmYXVsdFByb3BlcnRpZXMgPSBDbGFzcy5kZWZhdWx0UHJvcGVydGllcyxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IENsYXNzLmlnbm9yZWRQcm9wZXJ0aWVzO1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGluKTtcblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LCB7XG4gIExFRlRfTU9VU0VfQlVUVE9OOiAwLFxuICBNSURETEVfTU9VU0VfQlVUVE9OOiAxLFxuICBSSUdIVF9NT1VTRV9CVVRUT046IDJcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzID0gZmlsdGVyKGRvbUVsZW1lbnRzLCBmdW5jdGlvbihkb21FbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIChkb21FbGVtZW50Ll9fZWxlbWVudF9fICE9PSB1bmRlZmluZWQpO1xuICAgICAgICB9KSxcbiAgICAgICAgZWxlbWVudHMgPSBkb21FbGVtZW50c1dpdGhFbGVtZW50cy5tYXAoZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiBkb21FbGVtZW50Ll9fZWxlbWVudF9fO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGRlc2NlbmRhbnRET01Ob2RlcyA9IFtdKSB7XG4gIGNvbnN0IGNoaWxkRE9NTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXM7ICAvLy9cblxuICBkZXNjZW5kYW50RE9NTm9kZXMuY29uY2F0KGNoaWxkRE9NTm9kZXMpO1xuXG4gIGNoaWxkRE9NTm9kZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZERPTU5vZGUpIHtcbiAgICBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShjaGlsZERPTU5vZGUsIGRlc2NlbmRhbnRET01Ob2Rlcyk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCBzZWxlY3Rvcikge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gZmlsdGVyKGRvbU5vZGVzLCBmdW5jdGlvbihkb21Ob2RlKSB7XG4gICAgcmV0dXJuIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpO1xuICB9KTtcblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cblxuZnVuY3Rpb24gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3Rvcikge1xuICBjb25zdCBkb21Ob2RlVHlwZSA9IGRvbU5vZGUubm9kZVR5cGU7XG5cbiAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREUgOiB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tTm9kZTsgLy8vXG5cbiAgICAgIHJldHVybiBkb21FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGNhc2UgTm9kZS5URVhUX05PREUgOiB7XG4gICAgICBpZiAoc2VsZWN0b3IgPT09ICcqJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gW107XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChlbGVtZW50KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkQXJyYXkucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRBcnJheTtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=