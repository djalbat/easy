'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Offset = require('./misc/offset'),
    Bounds = require('./misc/bounds'),
    jsxMixin = require('./mixin/jsx'),
    eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    mouseMixin = require('./mixin/mouse'),
    resizeMixin = require('./mixin/resize');

var Element = function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    this.domElement = domElementFromSelector(selector);

    this.domElement.__element__ = this;

    this.handlersMap = {};
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
      this.domElement.style.width = width + 'px';
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
      this.domElement.style.height = height + 'px';
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
    key: 'appendTo',
    value: function appendTo(parentElement) {
      var parentDOMElement = parentElement.domElement,
          firstSiblingDOMElement = parentDOMElement.firstChild; ///

      parentDOMElement.insertBefore(this.domElement, firstSiblingDOMElement);
    }
  }, {
    key: 'prependTo',
    value: function prependTo(parentElement) {
      var parentDOMElement = parentElement.domElement;

      parentDOMElement.insertBefore(this.domElement, null); ///
    }
  }, {
    key: 'removeFrom',
    value: function removeFrom(parentElement) {
      var parentDOMElement = parentElement.domElement;

      parentDOMElement.removeChild(this.domElement);
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
        _html = this.domElement.innerHTML; ///

        return _html;
      } else {
        var innerHTML = _html; ///

        this.domElement.innerHTML = innerHTML;
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

      var ignoredProperties = Class.ignoredProperties,
          additionalProperties = Class.additionalProperties;

      element.applyProperties(properties, ignoredProperties, additionalProperties);

      return element;
    }
  }]);

  return Element;
}();

Object.assign(Element.prototype, jsxMixin);
Object.assign(Element.prototype, eventMixin);
Object.assign(Element.prototype, clickMixin);
Object.assign(Element.prototype, mouseMixin);
Object.assign(Element.prototype, resizeMixin);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIk9mZnNldCIsInJlcXVpcmUiLCJCb3VuZHMiLCJqc3hNaXhpbiIsImV2ZW50TWl4aW4iLCJjbGlja01peGluIiwibW91c2VNaXhpbiIsInJlc2l6ZU1peGluIiwiRWxlbWVudCIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImRvbUVsZW1lbnRGcm9tU2VsZWN0b3IiLCJfX2VsZW1lbnRfXyIsImhhbmRsZXJzTWFwIiwiY2xvbmUiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsImluY2x1ZGVCb3JkZXIiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZHMiLCJmcm9tQm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJuYW1lIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZSIsImNvbnRhaW5zIiwiZWxlbWVudCIsImZpcnN0Q2hpbGRET01FbGVtZW50IiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50IiwiZmlyc3RTaWJsaW5nRE9NRWxlbWVudCIsInJlbW92ZUNoaWxkIiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwibmV4dFNpYmxpbmciLCJkaXNwbGF5U3R5bGUiLCJkaXNwbGF5IiwiaHRtbCIsInVuZGVmaW5lZCIsImlubmVySFRNTCIsImNzcyIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJnZXRQcm9wZXJ0eVZhbHVlIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImJpbmQiLCJkb21Ob2RlIiwiZGVzY2VuZGFudERPTU5vZGVzIiwiZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUiLCJkZXNjZW5kYW50RWxlbWVudHMiLCJmaWx0ZXJET01Ob2RlcyIsImNoaWxkRE9NTm9kZXMiLCJjaGlsZE5vZGVzIiwiY2hpbGRET01FbGVtZW50cyIsImNoaWxkRWxlbWVudHMiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsIm1hdGNoZXMiLCJwYXJlbnRET01FbGVtZW50cyIsInBhcmVudEVsZW1lbnRzIiwiZmlyc3RQYXJlbnRFbGVtZW50IiwiZmlyc3QiLCJhc2NlbmRhbnRET01FbGVtZW50cyIsImFzY2VuZGFudERPTUVsZW1lbnQiLCJwdXNoIiwiYXNjZW5kYW50RWxlbWVudHMiLCJwcmV2aW91c1NpYmxpbmdFbGVtZW50IiwicHJldmlvdXNTaWJsaW5nRE9NTm9kZSIsInByZXZpb3VzU2libGluZyIsImRvbU5vZGVNYXRjaGVzU2VsZWN0b3IiLCJuZXh0U2libGluZ0VsZW1lbnQiLCJuZXh0U2libGluZ0RPTU5vZGUiLCJDbGFzcyIsImRlZXAiLCJjbG9uZU5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ1bnNoaWZ0IiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJhcHBseSIsIm91dGVyRE9NRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInByb3BlcnRpZXMiLCJ0YWdOYW1lIiwiZnJvbUhUTUwiLCJpZ25vcmVkUHJvcGVydGllcyIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiYXBwbHlQcm9wZXJ0aWVzIiwiYXNzaWduIiwiTEVGVF9NT1VTRV9CVVRUT04iLCJNSURETEVfTU9VU0VfQlVUVE9OIiwiUklHSFRfTU9VU0VfQlVUVE9OIiwibW9kdWxlIiwiZXhwb3J0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkb21FbGVtZW50cyIsImRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzIiwiZmlsdGVyIiwiZWxlbWVudHMiLCJtYXAiLCJjb25jYXQiLCJjaGlsZERPTU5vZGUiLCJkb21Ob2RlcyIsImZpbHRlcmVkRE9NTm9kZXMiLCJkb21Ob2RlVHlwZSIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsIlRFWFRfTk9ERSIsImFycmF5IiwidGVzdCIsImZpbHRlcmVkQXJyYXkiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGVBQVIsQ0FBZjtBQUFBLElBQ01DLFNBQVNELFFBQVEsZUFBUixDQURmO0FBQUEsSUFFTUUsV0FBV0YsUUFBUSxhQUFSLENBRmpCO0FBQUEsSUFHTUcsYUFBYUgsUUFBUSxlQUFSLENBSG5CO0FBQUEsSUFJTUksYUFBYUosUUFBUSxlQUFSLENBSm5CO0FBQUEsSUFLTUssYUFBYUwsUUFBUSxlQUFSLENBTG5CO0FBQUEsSUFNTU0sY0FBY04sUUFBUSxnQkFBUixDQU5wQjs7SUFRTU8sTztBQUNKLG1CQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtDLFVBQUwsR0FBa0JDLHVCQUF1QkYsUUFBdkIsQ0FBbEI7O0FBRUEsU0FBS0MsVUFBTCxDQUFnQkUsV0FBaEIsR0FBOEIsSUFBOUI7O0FBRUEsU0FBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNEOzs7OzRCQUVPO0FBQUUsYUFBT0wsUUFBUU0sS0FBUixDQUFjLElBQWQsQ0FBUDtBQUE2Qjs7O2dDQUUzQjtBQUNWLFVBQU1DLE1BQU0sS0FBS0wsVUFBTCxDQUFnQk0sU0FBNUI7QUFBQSxVQUF3QztBQUNsQ0MsYUFBTyxLQUFLUCxVQUFMLENBQWdCUSxVQUQ3QjtBQUFBLFVBQzBDO0FBQ3BDQyxlQUFTLElBQUluQixNQUFKLENBQVdlLEdBQVgsRUFBZ0JFLElBQWhCLENBRmY7O0FBSUEsYUFBT0UsTUFBUDtBQUNEOzs7Z0NBRWdDO0FBQUEsVUFBdkJDLGFBQXVCLHVFQUFQLEtBQU87O0FBQy9CLFVBQU1DLHFCQUFxQixLQUFLWCxVQUFMLENBQWdCWSxxQkFBaEIsRUFBM0I7QUFBQSxVQUNNQyxTQUFTckIsT0FBT3NCLHNCQUFQLENBQThCSCxrQkFBOUIsQ0FEZjs7QUFHQSxhQUFPRSxNQUFQO0FBQ0Q7OzsrQkFFK0I7QUFBQSxVQUF2QkgsYUFBdUIsdUVBQVAsS0FBTzs7QUFDOUIsVUFBTUssUUFBUUwsZ0JBQ0UsS0FBS1YsVUFBTCxDQUFnQmdCLFdBRGxCLEdBRUksS0FBS2hCLFVBQUwsQ0FBZ0JpQixXQUZsQzs7QUFJQSxhQUFPRixLQUFQO0FBQ0Q7Ozs2QkFFUUEsSyxFQUFPO0FBQUUsV0FBS2YsVUFBTCxDQUFnQmtCLEtBQWhCLENBQXNCSCxLQUF0QixHQUFpQ0EsS0FBakM7QUFBNkM7OztnQ0FFOUI7QUFBQSxVQUF2QkwsYUFBdUIsdUVBQVAsS0FBTzs7QUFDL0IsVUFBTVMsU0FBU1QsZ0JBQ0UsS0FBS1YsVUFBTCxDQUFnQm9CLFlBRGxCLEdBRUksS0FBS3BCLFVBQUwsQ0FBZ0JxQixZQUZuQzs7QUFJQSxhQUFPRixNQUFQO0FBQ0Q7Ozs4QkFFU0EsTSxFQUFRO0FBQUUsV0FBS25CLFVBQUwsQ0FBZ0JrQixLQUFoQixDQUFzQkMsTUFBdEIsR0FBa0NBLE1BQWxDO0FBQStDOzs7aUNBRXRERyxJLEVBQU07QUFBRSxhQUFPLEtBQUt0QixVQUFMLENBQWdCdUIsWUFBaEIsQ0FBNkJELElBQTdCLENBQVA7QUFBNEM7OztpQ0FFcERBLEksRUFBTUUsSyxFQUFPO0FBQUUsV0FBS3hCLFVBQUwsQ0FBZ0J5QixZQUFoQixDQUE2QkgsSUFBN0IsRUFBbUNFLEtBQW5DO0FBQTRDOzs7bUNBRXpERixJLEVBQU07QUFBRSxXQUFLdEIsVUFBTCxDQUFnQjBCLGVBQWhCLENBQWdDSixJQUFoQztBQUF3Qzs7O2lDQUVsREEsSSxFQUFNRSxLLEVBQU87QUFBRSxXQUFLQyxZQUFMLENBQWtCSCxJQUFsQixFQUF3QkUsS0FBeEI7QUFBaUM7OztvQ0FFN0NGLEksRUFBTTtBQUFFLFdBQUtLLGNBQUwsQ0FBb0JMLElBQXBCO0FBQTRCOzs7NkJBRTNDTSxTLEVBQVc7QUFBRSxXQUFLNUIsVUFBTCxDQUFnQjRCLFNBQWhCLEdBQTRCQSxTQUE1QjtBQUF3Qzs7OzZCQUVyREEsUyxFQUFXO0FBQUUsV0FBSzVCLFVBQUwsQ0FBZ0I2QixTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEJGLFNBQTlCO0FBQTJDOzs7Z0NBRXJEQSxTLEVBQVc7QUFBRSxXQUFLNUIsVUFBTCxDQUFnQjZCLFNBQWhCLENBQTBCRSxNQUExQixDQUFpQ0gsU0FBakM7QUFBOEM7OztnQ0FFM0RBLFMsRUFBVztBQUFFLFdBQUs1QixVQUFMLENBQWdCNkIsU0FBaEIsQ0FBMEJHLE1BQTFCLENBQWlDSixTQUFqQztBQUE4Qzs7OzZCQUU5REEsUyxFQUFXO0FBQUUsYUFBTyxLQUFLNUIsVUFBTCxDQUFnQjZCLFNBQWhCLENBQTBCSSxRQUExQixDQUFtQ0wsU0FBbkMsQ0FBUDtBQUF1RDs7O21DQUU5RDtBQUFFLFdBQUs1QixVQUFMLENBQWdCNEIsU0FBaEIsR0FBNEIsRUFBNUI7QUFBaUM7Ozs0QkFFMUNNLE8sRUFBUztBQUNmLFVBQU1sQyxhQUFha0MsUUFBUWxDLFVBQTNCO0FBQUEsVUFDTW1DLHVCQUF1QixLQUFLbkMsVUFBTCxDQUFnQm9DLFVBRDdDOztBQUdBLFdBQUtwQyxVQUFMLENBQWdCcUMsWUFBaEIsQ0FBNkJyQyxVQUE3QixFQUF5Q21DLG9CQUF6QztBQUNEOzs7MkJBRU1ELE8sRUFBUztBQUNkLFVBQU1sQyxhQUFha0MsUUFBUWxDLFVBQTNCOztBQUVBLFdBQUtBLFVBQUwsQ0FBZ0JxQyxZQUFoQixDQUE2QnJDLFVBQTdCLEVBQXlDLElBQXpDLEVBSGMsQ0FHa0M7QUFDakQ7Ozs2QkFFUXNDLGEsRUFBZTtBQUN0QixVQUFNQyxtQkFBbUJELGNBQWN0QyxVQUF2QztBQUFBLFVBQ013Qyx5QkFBeUJELGlCQUFpQkgsVUFEaEQsQ0FEc0IsQ0FFc0M7O0FBRTVERyx1QkFBaUJGLFlBQWpCLENBQThCLEtBQUtyQyxVQUFuQyxFQUErQ3dDLHNCQUEvQztBQUNEOzs7OEJBRVNGLGEsRUFBZTtBQUN2QixVQUFNQyxtQkFBbUJELGNBQWN0QyxVQUF2Qzs7QUFFQXVDLHVCQUFpQkYsWUFBakIsQ0FBOEIsS0FBS3JDLFVBQW5DLEVBQStDLElBQS9DLEVBSHVCLENBRytCO0FBQ3ZEOzs7K0JBRVVzQyxhLEVBQWU7QUFDeEIsVUFBTUMsbUJBQW1CRCxjQUFjdEMsVUFBdkM7O0FBRUF1Qyx1QkFBaUJFLFdBQWpCLENBQTZCLEtBQUt6QyxVQUFsQztBQUNEOzs7MkJBRU1rQyxPLEVBQVM7QUFDZCxVQUFJQSxPQUFKLEVBQWE7QUFDWCxZQUFNbEMsYUFBYWtDLFFBQVFsQyxVQUEzQjs7QUFFQSxhQUFLQSxVQUFMLENBQWdCeUMsV0FBaEIsQ0FBNEJ6QyxVQUE1QjtBQUNELE9BSkQsTUFJTztBQUNMLGFBQUtBLFVBQUwsQ0FBZ0IrQixNQUFoQjtBQUNEO0FBQ0Y7OztpQ0FFWVcsYyxFQUFnQjtBQUMzQixVQUFNQyxnQkFBZ0JELGVBQWUxQyxVQUFmLENBQTBCNEMsVUFBaEQ7QUFBQSxVQUNNQyxvQkFBb0JILGVBQWUxQyxVQUR6Qzs7QUFHQTJDLG9CQUFjTixZQUFkLENBQTJCLEtBQUtyQyxVQUFoQyxFQUE0QzZDLGlCQUE1QztBQUNEOzs7Z0NBRVdILGMsRUFBZ0I7QUFDMUIsVUFBTUMsZ0JBQWdCRCxlQUFlMUMsVUFBZixDQUEwQjRDLFVBQWhEO0FBQUEsVUFDTUMsb0JBQW9CSCxlQUFlMUMsVUFEekM7O0FBR0EyQyxvQkFBY04sWUFBZCxDQUEyQixLQUFLckMsVUFBaEMsRUFBNEM2QyxrQkFBa0JDLFdBQTlELEVBSjBCLENBSW1EO0FBQzlFOzs7MkJBRTRCO0FBQUEsVUFBeEJDLFlBQXdCLHVFQUFULE9BQVM7QUFBRSxXQUFLL0MsVUFBTCxDQUFnQmtCLEtBQWhCLENBQXNCOEIsT0FBdEIsR0FBZ0NELFlBQWhDO0FBQStDOzs7MkJBRXZFO0FBQUUsV0FBSy9DLFVBQUwsQ0FBZ0JrQixLQUFoQixDQUFzQjhCLE9BQXRCLEdBQWdDLE1BQWhDO0FBQXlDOzs7NkJBRXpDO0FBQUUsV0FBS3JCLGNBQUwsQ0FBb0IsVUFBcEI7QUFBa0M7Ozs4QkFFbkM7QUFBRSxXQUFLRixZQUFMLENBQWtCLFVBQWxCLEVBQThCLFVBQTlCO0FBQTRDOzs7eUJBRW5Ed0IsSyxFQUFNO0FBQ1QsVUFBSUEsVUFBU0MsU0FBYixFQUF3QjtBQUN0QkQsZ0JBQU8sS0FBS2pELFVBQUwsQ0FBZ0JtRCxTQUF2QixDQURzQixDQUNZOztBQUVsQyxlQUFPRixLQUFQO0FBQ0QsT0FKRCxNQUlPO0FBQ0wsWUFBTUUsWUFBWUYsS0FBbEIsQ0FESyxDQUNtQjs7QUFFeEIsYUFBS2pELFVBQUwsQ0FBZ0JtRCxTQUFoQixHQUE0QkEsU0FBNUI7QUFDRDtBQUNGOzs7d0JBRUdDLEksRUFBSztBQUNQLFVBQUlBLFNBQVFGLFNBQVosRUFBdUI7QUFDckIsWUFBTUcsZ0JBQWdCQyxpQkFBaUIsS0FBS3RELFVBQXRCLENBQXRCO0FBQUEsWUFDTW9ELE1BQU0sRUFEWjs7QUFHQSxhQUFLLElBQUlHLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFGLGNBQWNHLE1BQTFDLEVBQWtERCxPQUFsRCxFQUEyRDtBQUN6RCxjQUFNakMsT0FBTytCLGNBQWMsQ0FBZCxDQUFiO0FBQUEsY0FBZ0M7QUFDMUI3QixrQkFBUTZCLGNBQWNJLGdCQUFkLENBQStCbkMsSUFBL0IsQ0FEZCxDQUR5RCxDQUVMOztBQUVwRDhCLGNBQUk5QixJQUFKLElBQVlFLEtBQVo7QUFDRDs7QUFFRCxlQUFPNEIsR0FBUDtBQUNELE9BWkQsTUFZTyxJQUFJLE9BQU9BLElBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUNsQyxZQUFJOUIsUUFBTzhCLElBQVgsQ0FEa0MsQ0FDbEI7O0FBRWhCLFlBQU1DLGlCQUFnQkMsaUJBQWlCLEtBQUt0RCxVQUF0QixDQUF0QjtBQUFBLFlBQ013QixTQUFRNkIsZUFBY0ksZ0JBQWQsQ0FBK0JuQyxLQUEvQixDQURkLENBSGtDLENBSWtCOztBQUVwRDhCLGVBQU01QixNQUFOLENBTmtDLENBTXBCOztBQUVkLGVBQU80QixJQUFQO0FBQ0QsT0FUTSxNQVNBO0FBQ0wsWUFBTU0sUUFBUUMsT0FBT0MsSUFBUCxDQUFZUixJQUFaLENBQWQsQ0FESyxDQUMyQjs7QUFFaENNLGNBQU1HLE9BQU4sQ0FBYyxVQUFTdkMsSUFBVCxFQUFlO0FBQzNCLGNBQU1FLFFBQVE0QixLQUFJOUIsSUFBSixDQUFkOztBQUVBLGVBQUt0QixVQUFMLENBQWdCa0IsS0FBaEIsQ0FBc0JJLElBQXRCLElBQThCRSxLQUE5QjtBQUNELFNBSmEsQ0FJWnNDLElBSlksQ0FJUCxJQUpPLENBQWQ7QUFLRDtBQUNGOzs7NENBRXFDO0FBQUEsVUFBaEIvRCxRQUFnQix1RUFBTCxHQUFLOztBQUNwQyxVQUFNZ0UsVUFBVSxLQUFLL0QsVUFBckI7QUFBQSxVQUFrQztBQUM1QmdFLDJCQUFxQkMsOEJBQThCRixPQUE5QixDQUQzQjtBQUFBLFVBRU1HLHFCQUFxQkMsZUFBZUgsa0JBQWYsRUFBbUNqRSxRQUFuQyxDQUYzQjs7QUFJQSxhQUFPbUUsa0JBQVA7QUFDRDs7O3VDQUVnQztBQUFBLFVBQWhCbkUsUUFBZ0IsdUVBQUwsR0FBSzs7QUFDL0IsVUFBTXFFLGdCQUFnQixLQUFLcEUsVUFBTCxDQUFnQnFFLFVBQXRDO0FBQUEsVUFDTUMsbUJBQW1CSCxlQUFlQyxhQUFmLEVBQThCckUsUUFBOUIsQ0FEekI7QUFBQSxVQUVNd0UsZ0JBQWdCQyx3QkFBd0JGLGdCQUF4QixDQUZ0Qjs7QUFJQSxhQUFPQyxhQUFQO0FBQ0Q7Ozt1Q0FFZ0M7QUFBQSxVQUFoQnhFLFFBQWdCLHVFQUFMLEdBQUs7O0FBQy9CLFVBQUl1QyxnQkFBZ0IsSUFBcEI7O0FBRUEsVUFBTUMsbUJBQW1CLEtBQUt2QyxVQUFMLENBQWdCc0MsYUFBekM7O0FBRUEsVUFBSUMscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLFlBQUlBLGlCQUFpQmtDLE9BQWpCLENBQXlCMUUsUUFBekIsQ0FBSixFQUF3QztBQUN0QyxjQUFNMkUsb0JBQW9CLENBQUNuQyxnQkFBRCxDQUExQjtBQUFBLGNBQ01vQyxpQkFBaUJILHdCQUF3QkUsaUJBQXhCLENBRHZCO0FBQUEsY0FFTUUscUJBQXFCQyxNQUFNRixjQUFOLENBRjNCOztBQUlBckMsMEJBQWdCc0Msc0JBQXNCLElBQXRDO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPdEMsYUFBUDtBQUNEOzs7MkNBRW9DO0FBQUEsVUFBaEJ2QyxRQUFnQix1RUFBTCxHQUFLOztBQUNuQyxVQUFNK0UsdUJBQXVCLEVBQTdCO0FBQUEsVUFDTXZDLG1CQUFtQixLQUFLdkMsVUFBTCxDQUFnQnNDLGFBRHpDOztBQUdBLFVBQUl5QyxzQkFBc0J4QyxnQkFBMUIsQ0FKbUMsQ0FJVTtBQUM3QyxhQUFPd0Msd0JBQXdCLElBQS9CLEVBQXFDO0FBQ25DLFlBQUlBLG9CQUFvQk4sT0FBcEIsQ0FBNEIxRSxRQUE1QixDQUFKLEVBQTJDO0FBQ3pDK0UsK0JBQXFCRSxJQUFyQixDQUEwQkQsbUJBQTFCO0FBQ0Q7O0FBRURBLDhCQUFzQkEsb0JBQW9CekMsYUFBMUM7QUFDRDs7QUFFRCxVQUFNMkMsb0JBQW9CVCx3QkFBd0JNLG9CQUF4QixDQUExQjs7QUFFQSxhQUFPRyxpQkFBUDtBQUNEOzs7Z0RBRXlDO0FBQUEsVUFBaEJsRixRQUFnQix1RUFBTCxHQUFLOztBQUN4QyxVQUFJbUYseUJBQXlCLElBQTdCOztBQUVBLFVBQU1DLHlCQUF5QixLQUFLbkYsVUFBTCxDQUFnQm9GLGVBQS9DLENBSHdDLENBR3lCOztBQUVqRSxVQUFLRCwyQkFBMkIsSUFBNUIsSUFBcUNFLHVCQUF1QkYsc0JBQXZCLEVBQStDcEYsUUFBL0MsQ0FBekMsRUFBbUc7QUFDakdtRixpQ0FBeUJDLHVCQUF1QmpGLFdBQXZCLElBQXNDLElBQS9EO0FBQ0Q7O0FBRUQsYUFBT2dGLHNCQUFQO0FBQ0Q7Ozs0Q0FFcUM7QUFBQSxVQUFoQm5GLFFBQWdCLHVFQUFMLEdBQUs7O0FBQ3BDLFVBQUl1RixxQkFBcUIsSUFBekI7O0FBRUEsVUFBTUMscUJBQXFCLEtBQUt2RixVQUFMLENBQWdCOEMsV0FBM0M7O0FBRUEsVUFBS3lDLHVCQUF1QixJQUF4QixJQUFpQ0YsdUJBQXVCRSxrQkFBdkIsRUFBMkN4RixRQUEzQyxDQUFyQyxFQUEyRjtBQUN6RnVGLDZCQUFxQkMsbUJBQW1CckYsV0FBbkIsSUFBa0MsSUFBdkQ7QUFDRDs7QUFFRCxhQUFPb0Ysa0JBQVA7QUFDRDs7OzBCQUVZRSxLLEVBQU90RCxPLEVBQWdDO0FBQ2xELFVBQU11RCxPQUFPLElBQWI7QUFBQSxVQUNNekYsYUFBYWtDLFFBQVFsQyxVQUFSLENBQW1CMEYsU0FBbkIsQ0FBNkJELElBQTdCLENBRG5COztBQURrRCx3Q0FBcEJFLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBSWxEQSx5QkFBbUJDLE9BQW5CLENBQTJCNUYsVUFBM0I7QUFDQTJGLHlCQUFtQkMsT0FBbkIsQ0FBMkIsSUFBM0I7O0FBRUEsYUFBTyxLQUFLQyxTQUFTQyxTQUFULENBQW1CaEMsSUFBbkIsQ0FBd0JpQyxLQUF4QixDQUE4QlAsS0FBOUIsRUFBcUNHLGtCQUFyQyxDQUFMLEdBQVA7QUFDRDs7OzZCQUVlSCxLLEVBQU92QyxJLEVBQTZCO0FBQ2xELFVBQU0rQyxrQkFBa0JDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBeEI7O0FBRUFGLHNCQUFnQjdDLFNBQWhCLEdBQTRCRixJQUE1QixDQUhrRCxDQUdmOztBQUVuQyxVQUFNakQsYUFBYWdHLGdCQUFnQjVELFVBQW5DOztBQUxrRCx5Q0FBcEJ1RCxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQU9sREEseUJBQW1CQyxPQUFuQixDQUEyQjVGLFVBQTNCO0FBQ0EyRix5QkFBbUJDLE9BQW5CLENBQTJCLElBQTNCOztBQUVBLGFBQU8sS0FBS0MsU0FBU0MsU0FBVCxDQUFtQmhDLElBQW5CLENBQXdCaUMsS0FBeEIsQ0FBOEJQLEtBQTlCLEVBQXFDRyxrQkFBckMsQ0FBTCxHQUFQO0FBQ0Q7OzttQ0FFcUJILEssRUFBT3hGLFUsRUFBbUM7QUFBQSx5Q0FBcEIyRixrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUM5REEseUJBQW1CQyxPQUFuQixDQUEyQjVGLFVBQTNCO0FBQ0EyRix5QkFBbUJDLE9BQW5CLENBQTJCLElBQTNCOztBQUVBLGFBQU8sS0FBS0MsU0FBU0MsU0FBVCxDQUFtQmhDLElBQW5CLENBQXdCaUMsS0FBeEIsQ0FBOEJQLEtBQTlCLEVBQXFDRyxrQkFBckMsQ0FBTCxHQUFQO0FBQ0Q7OzttQ0FFcUJILEssRUFBT1csVSxFQUFtQztBQUFBLHlDQUFwQlIsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFDOUQsVUFBTVMsVUFBVVosTUFBTVksT0FBdEI7QUFBQSxVQUNNbkQsYUFBV21ELE9BQVgsUUFETjtBQUFBLFVBRU1sRSxVQUFVcEMsUUFBUXVHLFFBQVIsaUJBQWlCYixLQUFqQixFQUF3QnZDLElBQXhCLFNBQWlDMEMsa0JBQWpDLEVBRmhCOztBQUlBLFVBQU1XLG9CQUFvQmQsTUFBTWMsaUJBQWhDO0FBQUEsVUFDTUMsdUJBQXVCZixNQUFNZSxvQkFEbkM7O0FBR0FyRSxjQUFRc0UsZUFBUixDQUF3QkwsVUFBeEIsRUFBb0NHLGlCQUFwQyxFQUF1REMsb0JBQXZEOztBQUVBLGFBQU9yRSxPQUFQO0FBQ0Q7Ozs7OztBQUdIeUIsT0FBTzhDLE1BQVAsQ0FBYzNHLFFBQVFnRyxTQUF0QixFQUFpQ3JHLFFBQWpDO0FBQ0FrRSxPQUFPOEMsTUFBUCxDQUFjM0csUUFBUWdHLFNBQXRCLEVBQWlDcEcsVUFBakM7QUFDQWlFLE9BQU84QyxNQUFQLENBQWMzRyxRQUFRZ0csU0FBdEIsRUFBaUNuRyxVQUFqQztBQUNBZ0UsT0FBTzhDLE1BQVAsQ0FBYzNHLFFBQVFnRyxTQUF0QixFQUFpQ2xHLFVBQWpDO0FBQ0ErRCxPQUFPOEMsTUFBUCxDQUFjM0csUUFBUWdHLFNBQXRCLEVBQWlDakcsV0FBakM7O0FBRUE4RCxPQUFPOEMsTUFBUCxDQUFjM0csT0FBZCxFQUF1QjtBQUNyQjRHLHFCQUFtQixDQURFO0FBRXJCQyx1QkFBcUIsQ0FGQTtBQUdyQkMsc0JBQW9CO0FBSEMsQ0FBdkI7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJoSCxPQUFqQjs7QUFFQSxTQUFTRyxzQkFBVCxDQUFnQ0YsUUFBaEMsRUFBMEM7QUFDeEMsTUFBTUMsYUFBYyxPQUFPRCxRQUFQLEtBQW9CLFFBQXJCLEdBQ0VrRyxTQUFTYyxnQkFBVCxDQUEwQmhILFFBQTFCLEVBQW9DLENBQXBDLENBREYsR0FDNEM7QUFDeENBLFVBRnZCLENBRHdDLENBR047O0FBRWxDLFNBQU9DLFVBQVA7QUFDRDs7QUFFRCxTQUFTd0UsdUJBQVQsQ0FBaUN3QyxXQUFqQyxFQUE4QztBQUM1QyxNQUFNQywwQkFBMEJDLE9BQU9GLFdBQVAsRUFBb0IsVUFBU2hILFVBQVQsRUFBcUI7QUFDakUsV0FBUUEsV0FBV0UsV0FBWCxLQUEyQmdELFNBQW5DO0FBQ0QsR0FGeUIsQ0FBaEM7QUFBQSxNQUdNaUUsV0FBV0Ysd0JBQXdCRyxHQUF4QixDQUE0QixVQUFTcEgsVUFBVCxFQUFxQjtBQUMxRCxXQUFPQSxXQUFXRSxXQUFsQjtBQUNELEdBRlUsQ0FIakI7O0FBT0EsU0FBT2lILFFBQVA7QUFDRDs7QUFFRCxTQUFTbEQsNkJBQVQsQ0FBdUNGLE9BQXZDLEVBQXlFO0FBQUEsTUFBekJDLGtCQUF5Qix1RUFBSixFQUFJOztBQUN2RSxNQUFNSSxnQkFBZ0JMLFFBQVFNLFVBQTlCLENBRHVFLENBQzVCOztBQUUzQ0wscUJBQW1CcUQsTUFBbkIsQ0FBMEJqRCxhQUExQjs7QUFFQUEsZ0JBQWNQLE9BQWQsQ0FBc0IsVUFBU3lELFlBQVQsRUFBdUI7QUFDM0NyRCxrQ0FBOEJxRCxZQUE5QixFQUE0Q3RELGtCQUE1QztBQUNELEdBRkQ7O0FBSUEsU0FBT0Esa0JBQVA7QUFDRDs7QUFFRCxTQUFTRyxjQUFULENBQXdCb0QsUUFBeEIsRUFBa0N4SCxRQUFsQyxFQUE0QztBQUMxQyxNQUFNeUgsbUJBQW1CTixPQUFPSyxRQUFQLEVBQWlCLFVBQVN4RCxPQUFULEVBQWtCO0FBQzFELFdBQU9zQix1QkFBdUJ0QixPQUF2QixFQUFnQ2hFLFFBQWhDLENBQVA7QUFDRCxHQUZ3QixDQUF6Qjs7QUFJQSxTQUFPeUgsZ0JBQVA7QUFDRDs7QUFFRCxTQUFTbkMsc0JBQVQsQ0FBZ0N0QixPQUFoQyxFQUF5Q2hFLFFBQXpDLEVBQW1EO0FBQ2pELE1BQU0wSCxjQUFjMUQsUUFBUTJELFFBQTVCOztBQUVBLFVBQVFELFdBQVI7QUFDRSxTQUFLRSxLQUFLQyxZQUFWO0FBQXlCO0FBQ3ZCLFlBQU01SCxhQUFhK0QsT0FBbkIsQ0FEdUIsQ0FDSzs7QUFFNUIsZUFBTy9ELFdBQVd5RSxPQUFYLENBQW1CMUUsUUFBbkIsQ0FBUDtBQUNEOztBQUVELFNBQUs0SCxLQUFLRSxTQUFWO0FBQXNCO0FBQ3BCLFlBQUk5SCxhQUFhLEdBQWpCLEVBQXNCO0FBQ3BCLGlCQUFPLElBQVA7QUFDRDtBQUNGO0FBWEg7O0FBY0EsU0FBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBU21ILE1BQVQsQ0FBZ0JZLEtBQWhCLEVBQXVCQyxJQUF2QixFQUE2QjtBQUMzQixNQUFNQyxnQkFBZ0IsRUFBdEI7O0FBRUEsT0FBSyxJQUFJekUsUUFBUSxDQUFqQixFQUFvQkEsUUFBUXVFLE1BQU10RSxNQUFsQyxFQUEwQ0QsT0FBMUMsRUFBbUQ7QUFDakQsUUFBTXJCLFVBQVU0RixNQUFNdkUsS0FBTixDQUFoQjtBQUFBLFFBQ00wRSxTQUFTRixLQUFLN0YsT0FBTCxDQURmOztBQUdBLFFBQUkrRixNQUFKLEVBQVk7QUFDVkQsb0JBQWNoRCxJQUFkLENBQW1COUMsT0FBbkI7QUFDRDtBQUNGOztBQUVELFNBQU84RixhQUFQO0FBQ0Q7O0FBRUQsU0FBU25ELEtBQVQsQ0FBZWlELEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBPZmZzZXQgPSByZXF1aXJlKCcuL21pc2Mvb2Zmc2V0JyksXG4gICAgICBCb3VuZHMgPSByZXF1aXJlKCcuL21pc2MvYm91bmRzJyksXG4gICAgICBqc3hNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vanN4JyksXG4gICAgICBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICByZXNpemVNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vcmVzaXplJyk7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpcztcbiAgICBcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0ge307XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7IH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJzsgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG4gIFxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50RWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0U2libGluZ0RPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50LmZpcnN0Q2hpbGQ7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBmaXJzdFNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gJ2Jsb2NrJykgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlTdHlsZTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKCdkaXNhYmxlZCcpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7IH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBodG1sID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wdXRlZFN0eWxlWzBdLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUpLFxuICAgICAgICAgIGRlc2NlbmRhbnRFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRlc2NlbmRhbnRET01Ob2Rlcywgc2VsZWN0b3IpO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGNoaWxkRE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBhc2NlbmRhbnRET01FbGVtZW50cyA9IFtdLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGxldCBhc2NlbmRhbnRET01FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuICAgIHdoaWxlIChhc2NlbmRhbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAoYXNjZW5kYW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhc2NlbmRhbnRET01FbGVtZW50cy5wdXNoKGFzY2VuZGFudERPTUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBhc2NlbmRhbnRET01FbGVtZW50ID0gYXNjZW5kYW50RE9NRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGFzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoYXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHByZXZpb3VzU2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQucHJldmlvdXNTaWJsaW5nOyAgLy8vXG5cbiAgICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xuICB9XG5cbiAgZ2V0TmV4dFNpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7XG5cbiAgICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgbmV4dFNpYmxpbmdFbGVtZW50ID0gbmV4dFNpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZGVlcCA9IHRydWUsXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudC5jbG9uZU5vZGUoZGVlcCk7XG5cbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb3V0ZXJET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBvdXRlckRPTUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDsgIC8vL1xuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG91dGVyRE9NRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gQ2xhc3MudGFnTmFtZSxcbiAgICAgICAgICBodG1sID0gYDwke3RhZ05hbWV9IC8+YCxcbiAgICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGNvbnN0IGlnbm9yZWRQcm9wZXJ0aWVzID0gQ2xhc3MuaWdub3JlZFByb3BlcnRpZXMsXG4gICAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXMgPSBDbGFzcy5hZGRpdGlvbmFsUHJvcGVydGllcztcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzLCBhZGRpdGlvbmFsUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBqc3hNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbik7XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudCwge1xuICBMRUZUX01PVVNFX0JVVFRPTjogMCxcbiAgTUlERExFX01PVVNFX0JVVFRPTjogMSxcbiAgUklHSFRfTU9VU0VfQlVUVE9OOiAyXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlcihkb21FbGVtZW50cywgZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiAoZG9tRWxlbWVudC5fX2VsZW1lbnRfXyAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBjb25zdCBjaGlsZERPTU5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzOyAgLy8vXG5cbiAgZGVzY2VuZGFudERPTU5vZGVzLmNvbmNhdChjaGlsZERPTU5vZGVzKTtcblxuICBjaGlsZERPTU5vZGVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRET01Ob2RlKSB7XG4gICAgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMpO1xuICB9KTtcblxuICByZXR1cm4gZGVzY2VuZGFudERPTU5vZGVzO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IGZpbHRlcihkb21Ob2RlcywgZnVuY3Rpb24oZG9tTm9kZSkge1xuICAgIHJldHVybiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tTm9kZVR5cGUgPSBkb21Ob2RlLm5vZGVUeXBlO1xuXG4gIHN3aXRjaCAoZG9tTm9kZVR5cGUpIHtcbiAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFIDoge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbU5vZGU7IC8vL1xuXG4gICAgICByZXR1cm4gZG9tRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBjYXNlIE5vZGUuVEVYVF9OT0RFIDoge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSAnKicpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBmaWx0ZXJlZEFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19