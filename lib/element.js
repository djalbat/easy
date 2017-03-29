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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIk9mZnNldCIsInJlcXVpcmUiLCJCb3VuZHMiLCJqc3hNaXhpbiIsImV2ZW50TWl4aW4iLCJjbGlja01peGluIiwic2Nyb2xsTWl4aW4iLCJyZXNpemVNaXhpbiIsIm1vdXNlTWl4aW4iLCJrZXlNaXhpbiIsIkVsZW1lbnQiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiX19lbGVtZW50X18iLCJoYW5kbGVyc01hcCIsImNsb25lIiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXQiLCJpbmNsdWRlQm9yZGVyIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm91bmRzIiwiZnJvbUJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInN0eWxlIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibmFtZSIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0b2dnbGUiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiLCJwcmVwZW5kIiwiYXBwZW5kIiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJlbGVtZW50IiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJkaXNwbGF5U3R5bGUiLCJkaXNwbGF5IiwiaHRtbCIsInVuZGVmaW5lZCIsImlubmVySFRNTCIsImNzcyIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJnZXRQcm9wZXJ0eVZhbHVlIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImJpbmQiLCJkb21Ob2RlIiwiZGVzY2VuZGFudERPTU5vZGVzIiwiZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUiLCJkZXNjZW5kYW50RWxlbWVudHMiLCJmaWx0ZXJET01Ob2RlcyIsImNoaWxkRE9NTm9kZXMiLCJjaGlsZE5vZGVzIiwiY2hpbGRET01FbGVtZW50cyIsImNoaWxkRWxlbWVudHMiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsInBhcmVudERPTUVsZW1lbnQiLCJtYXRjaGVzIiwicGFyZW50RE9NRWxlbWVudHMiLCJwYXJlbnRFbGVtZW50cyIsImZpcnN0UGFyZW50RWxlbWVudCIsImZpcnN0IiwiYXNjZW5kYW50RE9NRWxlbWVudHMiLCJhc2NlbmRhbnRET01FbGVtZW50IiwicHVzaCIsImFzY2VuZGFudEVsZW1lbnRzIiwicHJldmlvdXNTaWJsaW5nRWxlbWVudCIsInByZXZpb3VzU2libGluZ0RPTU5vZGUiLCJwcmV2aW91c1NpYmxpbmciLCJkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yIiwibmV4dFNpYmxpbmdFbGVtZW50IiwibmV4dFNpYmxpbmdET01Ob2RlIiwiQ2xhc3MiLCJkZWVwIiwiY2xvbmVOb2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwidW5zaGlmdCIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiYXBwbHkiLCJvdXRlckRPTUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwidGFnTmFtZSIsImZyb21IVE1MIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJpZ25vcmVkUHJvcGVydGllcyIsImFwcGx5UHJvcGVydGllcyIsImFzc2lnbiIsIkxFRlRfTU9VU0VfQlVUVE9OIiwiTUlERExFX01PVVNFX0JVVFRPTiIsIlJJR0hUX01PVVNFX0JVVFRPTiIsIm1vZHVsZSIsImV4cG9ydHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZG9tRWxlbWVudHMiLCJkb21FbGVtZW50c1dpdGhFbGVtZW50cyIsImZpbHRlciIsImVsZW1lbnRzIiwibWFwIiwiY29uY2F0IiwiY2hpbGRET01Ob2RlIiwiZG9tTm9kZXMiLCJmaWx0ZXJlZERPTU5vZGVzIiwiZG9tTm9kZVR5cGUiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJURVhUX05PREUiLCJhcnJheSIsInRlc3QiLCJmaWx0ZXJlZEFycmF5IiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxlQUFSLENBQWY7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGVBQVIsQ0FEZjtBQUFBLElBRU1FLFdBQVdGLFFBQVEsYUFBUixDQUZqQjtBQUFBLElBR01HLGFBQWFILFFBQVEsZUFBUixDQUhuQjtBQUFBLElBSU1JLGFBQWFKLFFBQVEsZUFBUixDQUpuQjtBQUFBLElBS01LLGNBQWNMLFFBQVEsZ0JBQVIsQ0FMcEI7QUFBQSxJQU1NTSxjQUFjTixRQUFRLGdCQUFSLENBTnBCO0FBQUEsSUFPTU8sYUFBYVAsUUFBUSxlQUFSLENBUG5CO0FBQUEsSUFRTVEsV0FBV1IsUUFBUSxhQUFSLENBUmpCOztJQVVNUyxPO0FBQ0osbUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0MsVUFBTCxHQUFrQkMsdUJBQXVCRixRQUF2QixDQUFsQjs7QUFFQSxTQUFLQyxVQUFMLENBQWdCRSxXQUFoQixHQUE4QixJQUE5Qjs7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0Q7Ozs7NEJBRU87QUFBRSxhQUFPTCxRQUFRTSxLQUFSLENBQWMsSUFBZCxDQUFQO0FBQTZCOzs7Z0NBRTNCO0FBQ1YsVUFBTUMsTUFBTSxLQUFLTCxVQUFMLENBQWdCTSxTQUE1QjtBQUFBLFVBQXdDO0FBQ2xDQyxhQUFPLEtBQUtQLFVBQUwsQ0FBZ0JRLFVBRDdCO0FBQUEsVUFDMEM7QUFDcENDLGVBQVMsSUFBSXJCLE1B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QU8wSCxnQkFBUDtBQUNEOztBQUVELFNBQVNuQyxzQkFBVCxDQUFnQ3ZCLE9BQWhDLEVBQXlDaEUsUUFBekMsRUFBbUQ7QUFDakQsTUFBTTJILGNBQWMzRCxRQUFRNEQsUUFBNUI7O0FBRUEsVUFBUUQsV0FBUjtBQUNFLFNBQUtFLEtBQUtDLFlBQVY7QUFBeUI7QUFDdkIsWUFBTTdILGFBQWErRCxPQUFuQixDQUR1QixDQUNLOztBQUU1QixlQUFPL0QsV0FBVzBFLE9BQVgsQ0FBbUIzRSxRQUFuQixDQUFQO0FBQ0Q7O0FBRUQsU0FBSzZILEtBQUtFLFNBQVY7QUFBc0I7QUFDcEIsWUFBSS9ILGFBQWEsR0FBakIsRUFBc0I7QUFDcEIsaUJBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFYSDs7QUFjQSxTQUFPLEtBQVA7QUFDRDs7QUFFRCxTQUFTb0gsTUFBVCxDQUFnQlksS0FBaEIsRUFBdUJDLElBQXZCLEVBQTZCO0FBQzNCLE1BQU1DLGdCQUFnQixFQUF0Qjs7QUFFQSxPQUFLLElBQUkxRSxRQUFRLENBQWpCLEVBQW9CQSxRQUFRd0UsTUFBTXZFLE1BQWxDLEVBQTBDRCxPQUExQyxFQUFtRDtBQUNqRCxRQUFNWixVQUFVb0YsTUFBTXhFLEtBQU4sQ0FBaEI7QUFBQSxRQUNNMkUsU0FBU0YsS0FBS3JGLE9BQUwsQ0FEZjs7QUFHQSxRQUFJdUYsTUFBSixFQUFZO0FBQ1ZELG9CQUFjaEQsSUFBZCxDQUFtQnRDLE9BQW5CO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPc0YsYUFBUDtBQUNEOztBQUVELFNBQVNuRCxLQUFULENBQWVpRCxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgT2Zmc2V0ID0gcmVxdWlyZSgnLi9taXNjL29mZnNldCcpLFxuICAgICAgQm91bmRzID0gcmVxdWlyZSgnLi9taXNjL2JvdW5kcycpLFxuICAgICAganN4TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2pzeCcpLFxuICAgICAgZXZlbnRNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZXZlbnQnKSxcbiAgICAgIGNsaWNrTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NsaWNrJyksXG4gICAgICBzY3JvbGxNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vc2Nyb2xsJyksXG4gICAgICByZXNpemVNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vcmVzaXplJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tb3VzZScpLFxuICAgICAga2V5TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2tleScpO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7XG4gICAgXG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IHt9O1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBFbGVtZW50LmNsb25lKHRoaXMpOyB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKGluY2x1ZGVCb3JkZXIgPSBmYWxzZSkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSBmYWxzZSkge1xuICAgIGNvbnN0IHdpZHRoID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLndpZHRoID0gd2lkdGg7IH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICcnOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBzaG93KGRpc3BsYXlTdHlsZSA9ICdibG9jaycpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5U3R5bGU7IH1cblxuICBoaWRlKCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZSgnZGlzYWJsZWQnKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpOyB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wdXRlZFN0eWxlWzBdLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUpLFxuICAgICAgICAgIGRlc2NlbmRhbnRFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRlc2NlbmRhbnRET01Ob2Rlcywgc2VsZWN0b3IpO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGNoaWxkRE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBhc2NlbmRhbnRET01FbGVtZW50cyA9IFtdLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGxldCBhc2NlbmRhbnRET01FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuICAgIHdoaWxlIChhc2NlbmRhbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAoYXNjZW5kYW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhc2NlbmRhbnRET01FbGVtZW50cy5wdXNoKGFzY2VuZGFudERPTUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBhc2NlbmRhbnRET01FbGVtZW50ID0gYXNjZW5kYW50RE9NRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGFzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoYXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHByZXZpb3VzU2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQucHJldmlvdXNTaWJsaW5nOyAgLy8vXG5cbiAgICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xuICB9XG5cbiAgZ2V0TmV4dFNpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7XG5cbiAgICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgbmV4dFNpYmxpbmdFbGVtZW50ID0gbmV4dFNpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZGVlcCA9IHRydWUsXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudC5jbG9uZU5vZGUoZGVlcCk7XG5cbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb3V0ZXJET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBvdXRlckRPTUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDsgIC8vL1xuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG91dGVyRE9NRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gQ2xhc3MudGFnTmFtZSxcbiAgICAgICAgICBodG1sID0gYDwke3RhZ05hbWV9IC8+YCxcbiAgICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9wZXJ0aWVzID0gQ2xhc3MuZGVmYXVsdFByb3BlcnRpZXMsXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBDbGFzcy5pZ25vcmVkUHJvcGVydGllcztcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBqc3hNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbik7XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudCwge1xuICBMRUZUX01PVVNFX0JVVFRPTjogMCxcbiAgTUlERExFX01PVVNFX0JVVFRPTjogMSxcbiAgUklHSFRfTU9VU0VfQlVUVE9OOiAyXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlcihkb21FbGVtZW50cywgZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiAoZG9tRWxlbWVudC5fX2VsZW1lbnRfXyAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBjb25zdCBjaGlsZERPTU5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzOyAgLy8vXG5cbiAgZGVzY2VuZGFudERPTU5vZGVzLmNvbmNhdChjaGlsZERPTU5vZGVzKTtcblxuICBjaGlsZERPTU5vZGVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRET01Ob2RlKSB7XG4gICAgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMpO1xuICB9KTtcblxuICByZXR1cm4gZGVzY2VuZGFudERPTU5vZGVzO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IGZpbHRlcihkb21Ob2RlcywgZnVuY3Rpb24oZG9tTm9kZSkge1xuICAgIHJldHVybiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tTm9kZVR5cGUgPSBkb21Ob2RlLm5vZGVUeXBlO1xuXG4gIHN3aXRjaCAoZG9tTm9kZVR5cGUpIHtcbiAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFIDoge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbU5vZGU7IC8vL1xuXG4gICAgICByZXR1cm4gZG9tRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBjYXNlIE5vZGUuVEVYVF9OT0RFIDoge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSAnKicpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBmaWx0ZXJlZEFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19