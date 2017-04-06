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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIk9mZnNldCIsInJlcXVpcmUiLCJCb3VuZHMiLCJqc3hNaXhpbiIsImV2ZW50TWl4aW4iLCJjbGlja01peGluIiwic2Nyb2xsTWl4aW4iLCJyZXNpemVNaXhpbiIsIm1vdXNlTWl4aW4iLCJrZXlNaXhpbiIsIkVsZW1lbnQiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiX19lbGVtZW50X18iLCJjbG9uZSIsInRvcCIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0IiwiaW5jbHVkZUJvcmRlciIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJzdHlsZSIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsIm5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImNsZWFyQXR0cmlidXRlIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidG9nZ2xlIiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50IiwicHJlcGVuZCIsImFwcGVuZCIsInNpYmxpbmdFbGVtZW50IiwicGFyZW50RE9NTm9kZSIsInBhcmVudE5vZGUiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiZWxlbWVudCIsImZpcnN0Q2hpbGRET01FbGVtZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZGlzcGxheVN0eWxlIiwiZGlzcGxheSIsImh0bWwiLCJ1bmRlZmluZWQiLCJpbm5lckhUTUwiLCJjc3MiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImluZGV4IiwibGVuZ3RoIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJiaW5kIiwiYmx1ciIsImZvY3VzIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiZG9tTm9kZSIsImRlc2NlbmRhbnRET01Ob2RlcyIsImRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIiwiZGVzY2VuZGFudEVsZW1lbnRzIiwiZmlsdGVyRE9NTm9kZXMiLCJjaGlsZERPTU5vZGVzIiwiY2hpbGROb2RlcyIsImNoaWxkRE9NRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJwYXJlbnRET01FbGVtZW50IiwibWF0Y2hlcyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50RWxlbWVudHMiLCJmaXJzdFBhcmVudEVsZW1lbnQiLCJmaXJzdCIsImFzY2VuZGFudERPTUVsZW1lbnRzIiwiYXNjZW5kYW50RE9NRWxlbWVudCIsInB1c2giLCJhc2NlbmRhbnRFbGVtZW50cyIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdET01Ob2RlIiwicHJldmlvdXNTaWJsaW5nIiwiZG9tTm9kZU1hdGNoZXNTZWxlY3RvciIsIm5leHRTaWJsaW5nRWxlbWVudCIsIm5leHRTaWJsaW5nRE9NTm9kZSIsIkNsYXNzIiwiZGVlcCIsImNsb25lTm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInVuc2hpZnQiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsImFwcGx5Iiwib3V0ZXJET01FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInByb3BlcnRpZXMiLCJ0YWdOYW1lIiwiZnJvbUhUTUwiLCJkZWZhdWx0UHJvcGVydGllcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiYXBwbHlQcm9wZXJ0aWVzIiwiYXNzaWduIiwiTEVGVF9NT1VTRV9CVVRUT04iLCJNSURETEVfTU9VU0VfQlVUVE9OIiwiUklHSFRfTU9VU0VfQlVUVE9OIiwibW9kdWxlIiwiZXhwb3J0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkb21FbGVtZW50cyIsImRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzIiwiZmlsdGVyIiwiZWxlbWVudHMiLCJtYXAiLCJjb25jYXQiLCJjaGlsZERPTU5vZGUiLCJkb21Ob2RlcyIsImZpbHRlcmVkRE9NTm9kZXMiLCJkb21Ob2RlVHlwZSIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsIlRFWFRfTk9ERSIsImFycmF5IiwidGVzdCIsImZpbHRlcmVkQXJyYXkiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGVBQVIsQ0FBZjtBQUFBLElBQ01DLFNBQVNELFFBQVEsZUFBUixDQURmO0FBQUEsSUFFTUUsV0FBV0YsUUFBUSxhQUFSLENBRmpCO0FBQUEsSUFHTUcsYUFBYUgsUUFBUSxlQUFSLENBSG5CO0FBQUEsSUFJTUksYUFBYUosUUFBUSxlQUFSLENBSm5CO0FBQUEsSUFLTUssY0FBY0wsUUFBUSxnQkFBUixDQUxwQjtBQUFBLElBTU1NLGNBQWNOLFFBQVEsZ0JBQVIsQ0FOcEI7QUFBQSxJQU9NTyxhQUFhUCxRQUFRLGVBQVIsQ0FQbkI7QUFBQSxJQVFNUSxXQUFXUixRQUFRLGFBQVIsQ0FSakI7O0lBVU1TLE87QUFDSixtQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQyxVQUFMLEdBQWtCQyx1QkFBdUJGLFFBQXZCLENBQWxCOztBQUVBLFNBQUtDLFVBQUwsQ0FBZ0JFLFdBQWhCLEdBQThCLElBQTlCLENBSG9CLENBR2dCO0FBQ3JDOzs7OzRCQUVPO0FBQUUsYUFBT0osUUFBUUssS0FBUixDQUFjLElBQWQsQ0FBUDtBQUE2Qjs7O2dDQUUzQjtBQUNWLFVBQU1DLE1BQU0sS0FBS0osVUFBTCxDQUFnQkssU0FBNUI7QUFBQSxVQUF3QztBQUNsQ0MsYUFBTyxLQUFLTixVQUFMLENBQWdCTyxVQUQ3QjtBQUFBLFVBQzBDO0FBQ3BDQyxlQUFTLElBQUlwQixN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QW1CMUMsT0FBbkI7QUFDRDtBQUNGOztBQUVELFNBQU95RixhQUFQO0FBQ0Q7O0FBRUQsU0FBU2xELEtBQVQsQ0FBZWdELEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBPZmZzZXQgPSByZXF1aXJlKCcuL21pc2Mvb2Zmc2V0JyksXG4gICAgICBCb3VuZHMgPSByZXF1aXJlKCcuL21pc2MvYm91bmRzJyksXG4gICAgICBqc3hNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vanN4JyksXG4gICAgICBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIHNjcm9sbE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9zY3JvbGwnKSxcbiAgICAgIHJlc2l6ZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9yZXNpemUnKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICBrZXlNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4va2V5Jyk7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aDsgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gZmFsc2UpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodDsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJyc7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gJ2Jsb2NrJykgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlTdHlsZTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKCdkaXNhYmxlZCcpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7IH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNvbXB1dGVkU3R5bGVbMF0sICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY3NzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBibHVyKCkgeyB0aGlzLmRvbUVsZW1lbnQuYmx1cigpOyB9XG5cbiAgZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUpLFxuICAgICAgICAgIGRlc2NlbmRhbnRFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRlc2NlbmRhbnRET01Ob2Rlcywgc2VsZWN0b3IpO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGNoaWxkRE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBhc2NlbmRhbnRET01FbGVtZW50cyA9IFtdLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGxldCBhc2NlbmRhbnRET01FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuICAgIHdoaWxlIChhc2NlbmRhbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAoYXNjZW5kYW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhc2NlbmRhbnRET01FbGVtZW50cy5wdXNoKGFzY2VuZGFudERPTUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBhc2NlbmRhbnRET01FbGVtZW50ID0gYXNjZW5kYW50RE9NRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGFzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoYXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHByZXZpb3VzU2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQucHJldmlvdXNTaWJsaW5nOyAgLy8vXG5cbiAgICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xuICB9XG5cbiAgZ2V0TmV4dFNpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7XG5cbiAgICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgbmV4dFNpYmxpbmdFbGVtZW50ID0gbmV4dFNpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZGVlcCA9IHRydWUsXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudC5jbG9uZU5vZGUoZGVlcCk7XG5cbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb3V0ZXJET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBvdXRlckRPTUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDsgIC8vL1xuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG91dGVyRE9NRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gQ2xhc3MudGFnTmFtZSxcbiAgICAgICAgICBodG1sID0gYDwke3RhZ05hbWV9IC8+YCxcbiAgICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9wZXJ0aWVzID0gQ2xhc3MuZGVmYXVsdFByb3BlcnRpZXMsXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBDbGFzcy5pZ25vcmVkUHJvcGVydGllcztcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBqc3hNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbik7XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudCwge1xuICBMRUZUX01PVVNFX0JVVFRPTjogMCxcbiAgTUlERExFX01PVVNFX0JVVFRPTjogMSxcbiAgUklHSFRfTU9VU0VfQlVUVE9OOiAyXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlcihkb21FbGVtZW50cywgZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiAoZG9tRWxlbWVudC5fX2VsZW1lbnRfXyAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBjb25zdCBjaGlsZERPTU5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzOyAgLy8vXG5cbiAgZGVzY2VuZGFudERPTU5vZGVzLmNvbmNhdChjaGlsZERPTU5vZGVzKTtcblxuICBjaGlsZERPTU5vZGVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRET01Ob2RlKSB7XG4gICAgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMpO1xuICB9KTtcblxuICByZXR1cm4gZGVzY2VuZGFudERPTU5vZGVzO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IGZpbHRlcihkb21Ob2RlcywgZnVuY3Rpb24oZG9tTm9kZSkge1xuICAgIHJldHVybiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tTm9kZVR5cGUgPSBkb21Ob2RlLm5vZGVUeXBlO1xuXG4gIHN3aXRjaCAoZG9tTm9kZVR5cGUpIHtcbiAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFIDoge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbU5vZGU7IC8vL1xuXG4gICAgICByZXR1cm4gZG9tRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBjYXNlIE5vZGUuVEVYVF9OT0RFIDoge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSAnKicpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBmaWx0ZXJlZEFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19