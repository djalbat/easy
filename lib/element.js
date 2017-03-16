'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
    value: function prepend(elementOrString) {
      var domElement = domElementFromElementOrString(elementOrString),
          firstChildDOMElement = this.domElement.firstChild;

      this.domElement.insertBefore(domElement, firstChildDOMElement);
    }
  }, {
    key: 'append',
    value: function append(elementOrString) {
      var domElement = domElementFromElementOrString(elementOrString);

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

      var descendantDOMElements = this.domElement.querySelectorAll(selector),
          descendantElements = elementsFromDOMElements(descendantDOMElements);

      return descendantElements;
    }
  }, {
    key: 'getChildElements',
    value: function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var descendantDOMElements = this.domElement.querySelectorAll(selector),
          allChildDOMElements = this.domElement.children,
          childDOMElements = filter(allChildDOMElements, function (childDOMElement) {
        return some(descendantDOMElements, function (descendantDOMElement) {
          return descendantDOMElement === childDOMElement;
        });
      }),
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
  }], [{
    key: 'clone',
    value: function clone(Class, element) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      if (Class instanceof Element) {
        element = Class;
        remainingArguments.shift();
        Class = Element;
      }

      var deep = true,
          domElement = element.domElement.cloneNode(deep);

      remainingArguments.unshift(domElement);
      remainingArguments.unshift(null);

      return new (Function.prototype.bind.apply(Class, remainingArguments))();
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(Class, html) {
      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      if (typeof Class === 'string') {
        html = Class;
        remainingArguments.shift();
        Class = Element;
      }

      var outerDOMElement = document.createElement('div');

      outerDOMElement.innerHTML = html; ///

      var domElement = outerDOMElement.firstChild;

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

      if ((typeof Class === 'undefined' ? 'undefined' : _typeof(Class)) === 'object') {
        domElement = Class;
        remainingArguments.shift();
        Class = Element;
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
          customHandlerNames = Class.customHandlerNames,
          additionalProperties = Class.additionalPropertes,
          html = '<' + tagName + '></' + tagName + '>',
          element = Element.fromHTML.apply(Element, [Class, html].concat(remainingArguments));

      element.applyProperties(properties, customHandlerNames, additionalProperties);

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

Element.LEFT_MOUSE_BUTTON = 0;
Element.MIDDLE_MOUSE_BUTTON = 1;
Element.RIGHT_MOUSE_BUTTON = 2;

module.exports = Element;

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

function domElementFromElementOrString(elementOrString) {
  var domElement = void 0;

  if (typeof elementOrString === 'string') {
    var string = elementOrString; ///

    domElement = document.createTextNode(string); ///
  } else {
    var element = elementOrString; ///

    domElement = element.domElement;
  }

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

function some(array, test) {
  var result = false;

  for (var index = 0; index < array.length; index++) {
    var element = array[index];

    result = test(element);

    if (result) {
      result = true;

      break;
    }
  }

  return result;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIk9mZnNldCIsInJlcXVpcmUiLCJCb3VuZHMiLCJqc3hNaXhpbiIsImV2ZW50TWl4aW4iLCJjbGlja01peGluIiwibW91c2VNaXhpbiIsInJlc2l6ZU1peGluIiwiRWxlbWVudCIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImRvbUVsZW1lbnRGcm9tU2VsZWN0b3IiLCJfX2VsZW1lbnRfXyIsImhhbmRsZXJzTWFwIiwiY2xvbmUiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsImluY2x1ZGVCb3JkZXIiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZHMiLCJmcm9tQm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJuYW1lIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZSIsImNvbnRhaW5zIiwiZWxlbWVudE9yU3RyaW5nIiwiZG9tRWxlbWVudEZyb21FbGVtZW50T3JTdHJpbmciLCJmaXJzdENoaWxkRE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50RE9NRWxlbWVudCIsImZpcnN0U2libGluZ0RPTUVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImVsZW1lbnQiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJuZXh0U2libGluZyIsImRpc3BsYXlTdHlsZSIsImRpc3BsYXkiLCJodG1sIiwidW5kZWZpbmVkIiwiaW5uZXJIVE1MIiwiY3NzIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJpbmRleCIsImxlbmd0aCIsImdldFByb3BlcnR5VmFsdWUiLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiYmluZCIsImRlc2NlbmRhbnRET01FbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkZXNjZW5kYW50RWxlbWVudHMiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsImFsbENoaWxkRE9NRWxlbWVudHMiLCJjaGlsZHJlbiIsImNoaWxkRE9NRWxlbWVudHMiLCJmaWx0ZXIiLCJjaGlsZERPTUVsZW1lbnQiLCJzb21lIiwiZGVzY2VuZGFudERPTUVsZW1lbnQiLCJjaGlsZEVsZW1lbnRzIiwibWF0Y2hlcyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50RWxlbWVudHMiLCJmaXJzdFBhcmVudEVsZW1lbnQiLCJmaXJzdCIsImFzY2VuZGFudERPTUVsZW1lbnRzIiwiYXNjZW5kYW50RE9NRWxlbWVudCIsInB1c2giLCJhc2NlbmRhbnRFbGVtZW50cyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwic2hpZnQiLCJkZWVwIiwiY2xvbmVOb2RlIiwidW5zaGlmdCIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiYXBwbHkiLCJvdXRlckRPTUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwidGFnTmFtZSIsImN1c3RvbUhhbmRsZXJOYW1lcyIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiYWRkaXRpb25hbFByb3BlcnRlcyIsImZyb21IVE1MIiwiYXBwbHlQcm9wZXJ0aWVzIiwiYXNzaWduIiwiTEVGVF9NT1VTRV9CVVRUT04iLCJNSURETEVfTU9VU0VfQlVUVE9OIiwiUklHSFRfTU9VU0VfQlVUVE9OIiwibW9kdWxlIiwiZXhwb3J0cyIsInN0cmluZyIsImNyZWF0ZVRleHROb2RlIiwiZG9tRWxlbWVudHMiLCJkb21FbGVtZW50c1dpdGhFbGVtZW50cyIsImVsZW1lbnRzIiwibWFwIiwiYXJyYXkiLCJ0ZXN0IiwicmVzdWx0IiwiZmlsdGVyZWRBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxlQUFSLENBQWY7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGVBQVIsQ0FEZjtBQUFBLElBRU1FLFdBQVdGLFFBQVEsYUFBUixDQUZqQjtBQUFBLElBR01HLGFBQWFILFFBQVEsZUFBUixDQUhuQjtBQUFBLElBSU1JLGFBQWFKLFFBQVEsZUFBUixDQUpuQjtBQUFBLElBS01LLGFBQWFMLFFBQVEsZUFBUixDQUxuQjtBQUFBLElBTU1NLGNBQWNOLFFBQVEsZ0JBQVIsQ0FOcEI7O0lBUU1PLE87QUFDSixtQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQyxVQUFMLEdBQWtCQyx1QkFBdUJGLFFBQXZCLENBQWxCOztBQUVBLFNBQUtDLFVBQUwsQ0FBZ0JFLFdBQWhCLEdBQThCLElBQTlCOztBQUVBLFNBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDRDs7Ozs0QkFFTztBQUFFLGFBQU9MLFFBQVFNLEtBQVIsQ0FBYyxJQUFkLENBQVA7QUFBNkI7OztnQ0FFM0I7QUFDVixVQUFNQyxNQUFNLEtBQUtMLFVBQUwsQ0FBZ0JNLFNBQTVCO0FBQUEsVUFBd0M7QUFDbENDLGFBQU8sS0FBS1AsVUFBTCxDQUFnQlEsVUFEN0I7QUFBQSxVQUMwQztBQUNwQ0MsZUFBUyxJQUFJbkIsTUFBSixDQUFXZSxHQUFYLEVBQWdCRSxJQUFoQixDQUZmOztBQUlBLGFBQU9FLE1BQVA7QUFDRDs7O2dDQUVnQztBQUFBLFVBQXZCQyxhQUF1Qix1RUFBUCxLQUFPOztBQUMvQixVQUFNQyxxQkFBcUIsS0FBS1gsVUFBTCxDQUFnQlkscUJBQWhCLEVBQTNCO0FBQUEsVUFDTUMsU0FBU3JCLE9BQU9zQixzQkFBUCxDQUE4Qkgsa0JBQTlCLENBRGY7O0FBR0EsYUFBT0UsTUFBUDtBQUNEOzs7K0JBRStCO0FB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QUFULENBQWdCNkMsS0FBaEIsRUFBdUJDLElBQXZCLEVBQTZCO0FBQzNCLE1BQU1FLGdCQUFnQixFQUF0Qjs7QUFFQSxPQUFLLElBQUkvRCxRQUFRLENBQWpCLEVBQW9CQSxRQUFRNEQsTUFBTTNELE1BQWxDLEVBQTBDRCxPQUExQyxFQUFtRDtBQUNqRCxRQUFNZCxVQUFVMEUsTUFBTTVELEtBQU4sQ0FBaEI7QUFBQSxRQUNNOEQsU0FBU0QsS0FBSzNFLE9BQUwsQ0FEZjs7QUFHQSxRQUFJNEUsTUFBSixFQUFZO0FBQ1ZDLG9CQUFjcEMsSUFBZCxDQUFtQnpDLE9BQW5CO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPNkUsYUFBUDtBQUNEOztBQUVELFNBQVN2QyxLQUFULENBQWVvQyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgT2Zmc2V0ID0gcmVxdWlyZSgnLi9taXNjL29mZnNldCcpLFxuICAgICAgQm91bmRzID0gcmVxdWlyZSgnLi9taXNjL2JvdW5kcycpLFxuICAgICAganN4TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2pzeCcpLFxuICAgICAgZXZlbnRNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZXZlbnQnKSxcbiAgICAgIGNsaWNrTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NsaWNrJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tb3VzZScpLFxuICAgICAgcmVzaXplTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3Jlc2l6ZScpO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7XG4gICAgXG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IHt9O1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBFbGVtZW50LmNsb25lKHRoaXMpOyB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKGluY2x1ZGVCb3JkZXIgPSBmYWxzZSkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSBmYWxzZSkge1xuICAgIGNvbnN0IHdpZHRoICA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgOyB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSBmYWxzZSkge1xuICAgIGNvbnN0IGhlaWdodCAgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJyc7IH1cblxuICBwcmVwZW5kKGVsZW1lbnRPclN0cmluZykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbUVsZW1lbnRPclN0cmluZyhlbGVtZW50T3JTdHJpbmcpLFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuICBcbiAgYXBwZW5kKGVsZW1lbnRPclN0cmluZykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbUVsZW1lbnRPclN0cmluZyhlbGVtZW50T3JTdHJpbmcpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdFNpYmxpbmdET01FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudC5maXJzdENoaWxkOyAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgZmlyc3RTaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG4gIH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBzaG93KGRpc3BsYXlTdHlsZSA9ICdibG9jaycpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5U3R5bGU7IH1cblxuICBoaWRlKCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZSgnZGlzYWJsZWQnKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpOyB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaHRtbCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gY29tcHV0ZWRTdHlsZVswXSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSAnc3RyaW5nJykge1xuICAgICAgbGV0IG5hbWUgPSBjc3M7IC8vL1xuXG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICBjc3MgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKGNzcyk7IC8vL1xuXG4gICAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIGdldERlc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9ICcqJykge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRET01FbGVtZW50cyA9IHRoaXMuZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcbiAgICAgICAgICBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkZXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBkZXNjZW5kYW50RE9NRWxlbWVudHMgPSB0aGlzLmRvbUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksXG4gICAgICAgICAgYWxsQ2hpbGRET01FbGVtZW50cyA9IHRoaXMuZG9tRWxlbWVudC5jaGlsZHJlbixcbiAgICAgICAgICBjaGlsZERPTUVsZW1lbnRzID0gZmlsdGVyKGFsbENoaWxkRE9NRWxlbWVudHMsIGZ1bmN0aW9uKGNoaWxkRE9NRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHNvbWUoZGVzY2VuZGFudERPTUVsZW1lbnRzLCBmdW5jdGlvbihkZXNjZW5kYW50RE9NRWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gKGRlc2NlbmRhbnRET01FbGVtZW50ID09PSBjaGlsZERPTUVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKHBhcmVudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnRzID0gW3BhcmVudERPTUVsZW1lbnRdLFxuICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBsZXQgYXNjZW5kYW50RE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cbiAgICB3aGlsZSAoYXNjZW5kYW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGFzY2VuZGFudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMucHVzaChhc2NlbmRhbnRET01FbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgYXNjZW5kYW50RE9NRWxlbWVudCA9IGFzY2VuZGFudERPTUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBhc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGFzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBhc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKENsYXNzIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgZWxlbWVudCA9IENsYXNzO1xuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnNoaWZ0KCk7XG4gICAgICBDbGFzcyA9IEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZGVlcCA9IHRydWUsXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudC5jbG9uZU5vZGUoZGVlcCk7XG5cbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHR5cGVvZiBDbGFzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGh0bWwgPSBDbGFzcztcbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5zaGlmdCgpO1xuICAgICAgQ2xhc3MgPSBFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IG91dGVyRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgb3V0ZXJET01FbGVtZW50LmlubmVySFRNTCA9IGh0bWw7ICAvLy9cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBvdXRlckRPTUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodHlwZW9mIENsYXNzID09PSAnb2JqZWN0Jykge1xuICAgICAgZG9tRWxlbWVudCA9IENsYXNzO1xuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnNoaWZ0KCk7XG4gICAgICBDbGFzcyA9IEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBDbGFzcy50YWdOYW1lLFxuICAgICAgICAgIGN1c3RvbUhhbmRsZXJOYW1lcyA9IENsYXNzLmN1c3RvbUhhbmRsZXJOYW1lcyxcbiAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllcyA9IENsYXNzLmFkZGl0aW9uYWxQcm9wZXJ0ZXMsXG4gICAgICAgICAgaHRtbCA9IGA8JHt0YWdOYW1lfT48LyR7dGFnTmFtZX0+YCxcbiAgICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGN1c3RvbUhhbmRsZXJOYW1lcywgYWRkaXRpb25hbFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW4pO1xuXG5FbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OID0gMDtcbkVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA9IDE7XG5FbGVtZW50LlJJR0hUX01PVVNFX0JVVFRPTiA9IDI7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21FbGVtZW50T3JTdHJpbmcoZWxlbWVudE9yU3RyaW5nKSB7XG4gIGxldCBkb21FbGVtZW50O1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHN0cmluZyA9IGVsZW1lbnRPclN0cmluZzsgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RyaW5nKTsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRPclN0cmluZzsgIC8vL1xuXG4gICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlcihkb21FbGVtZW50cywgZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiAoZG9tRWxlbWVudC5fX2VsZW1lbnRfXyAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBzb21lKGFycmF5LCB0ZXN0KSB7XG4gIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBmaWx0ZXJlZEFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19