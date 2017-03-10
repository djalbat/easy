'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mixin = require('./mixin'),
    event = require('./mixin/event'),
    click = require('./mixin/click'),
    mouse = require('./mixin/mouse'),
    resize = require('./mixin/resize'),
    Offset = require('./misc/offset'),
    Bounds = require('./misc/bounds');

var Element = function () {
  function Element(domElementOrSelector) {
    _classCallCheck(this, Element);

    this.domElement = domElementFromDOMElementOrSelector(domElementOrSelector);

    this.domElement.__element__ = this; ///

    this.handlersMap = {};

    mixin(event, this, Element);
    mixin(click, this, Element);
    mixin(mouse, this, Element);
    mixin(resize, this, Element);
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

      var top = this.domElement.offsetTop,
          ///
      left = this.domElement.offsetLeft,
          ///
      width = this.getWidth(includeBorder),
          height = this.getHeight(includeBorder),
          bottom = top + height,
          right = left + width,
          bounds = new Bounds(top, left, bottom, right);

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

      var outerDOMElelment = document.createElement('div');

      outerDOMElelment.innerHTML = html; ///

      var domElement = outerDOMElelment.firstChild;

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
  }]);

  return Element;
}();

module.exports = Element;

function domElementFromDOMElementOrSelector(domElementOrSelector) {
  var domElement = typeof domElementOrSelector === 'string' ? document.querySelectorAll(domElementOrSelector)[0] : ///
  domElementOrSelector;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIm1peGluIiwicmVxdWlyZSIsImV2ZW50IiwiY2xpY2siLCJtb3VzZSIsInJlc2l6ZSIsIk9mZnNldCIsIkJvdW5kcyIsIkVsZW1lbnQiLCJkb21FbGVtZW50T3JTZWxlY3RvciIsImRvbUVsZW1lbnQiLCJkb21FbGVtZW50RnJvbURPTUVsZW1lbnRPclNlbGVjdG9yIiwiX19lbGVtZW50X18iLCJoYW5kbGVyc01hcCIsImNsb25lIiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXQiLCJpbmNsdWRlQm9yZGVyIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImJvdHRvbSIsInJpZ2h0IiwiYm91bmRzIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInN0eWxlIiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibmFtZSIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0b2dnbGUiLCJjb250YWlucyIsImVsZW1lbnRPclN0cmluZyIsImRvbUVsZW1lbnRGcm9tRWxlbWVudE9yU3RyaW5nIiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwicGFyZW50RWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJmaXJzdFNpYmxpbmdET01FbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJlbGVtZW50Iiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwibmV4dFNpYmxpbmciLCJkaXNwbGF5U3R5bGUiLCJkaXNwbGF5IiwiaHRtbCIsInVuZGVmaW5lZCIsImlubmVySFRNTCIsImNzcyIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJnZXRQcm9wZXJ0eVZhbHVlIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImJpbmQiLCJzZWxlY3RvciIsImRlc2NlbmRhbnRET01FbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkZXNjZW5kYW50RWxlbWVudHMiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsImFsbENoaWxkRE9NRWxlbWVudHMiLCJjaGlsZHJlbiIsImNoaWxkRE9NRWxlbWVudHMiLCJmaWx0ZXIiLCJjaGlsZERPTUVsZW1lbnQiLCJzb21lIiwiZGVzY2VuZGFudERPTUVsZW1lbnQiLCJjaGlsZEVsZW1lbnRzIiwibWF0Y2hlcyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50RWxlbWVudHMiLCJmaXJzdFBhcmVudEVsZW1lbnQiLCJmaXJzdCIsImFzY2VuZGFudERPTUVsZW1lbnRzIiwiYXNjZW5kYW50RE9NRWxlbWVudCIsInB1c2giLCJhc2NlbmRhbnRFbGVtZW50cyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwic2hpZnQiLCJkZWVwIiwiY2xvbmVOb2RlIiwidW5zaGlmdCIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiYXBwbHkiLCJvdXRlckRPTUVsZWxtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsInN0cmluZyIsImNyZWF0ZVRleHROb2RlIiwiZG9tRWxlbWVudHMiLCJkb21FbGVtZW50c1dpdGhFbGVtZW50cyIsImVsZW1lbnRzIiwibWFwIiwiYXJyYXkiLCJ0ZXN0IiwicmVzdWx0IiwiZmlsdGVyZWRBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNQyxRQUFRRCxRQUFRLGVBQVIsQ0FEZDtBQUFBLElBRU1FLFFBQVFGLFFBQVEsZUFBUixDQUZkO0FBQUEs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SGpCOztBQU9BLFNBQU93RyxRQUFQO0FBQ0Q7O0FBRUQsU0FBUzlCLElBQVQsQ0FBY2dDLEtBQWQsRUFBcUJDLElBQXJCLEVBQTJCO0FBQ3pCLE1BQUlDLFNBQVMsS0FBYjs7QUFFQSxPQUFLLElBQUlwRCxRQUFRLENBQWpCLEVBQW9CQSxRQUFRa0QsTUFBTWpELE1BQWxDLEVBQTBDRCxPQUExQyxFQUFtRDtBQUNqRCxRQUFNZCxVQUFVZ0UsTUFBTWxELEtBQU4sQ0FBaEI7O0FBRUFvRCxhQUFTRCxLQUFLakUsT0FBTCxDQUFUOztBQUVBLFFBQUlrRSxNQUFKLEVBQVk7QUFDVkEsZUFBUyxJQUFUOztBQUVBO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPQSxNQUFQO0FBQ0Q7O0FBRUQsU0FBU3BDLE1BQVQsQ0FBZ0JrQyxLQUFoQixFQUF1QkMsSUFBdkIsRUFBNkI7QUFDM0IsTUFBTUUsZ0JBQWdCLEVBQXRCOztBQUVBLE9BQUssSUFBSXJELFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFrRCxNQUFNakQsTUFBbEMsRUFBMENELE9BQTFDLEVBQW1EO0FBQ2pELFFBQU1kLFVBQVVnRSxNQUFNbEQsS0FBTixDQUFoQjtBQUFBLFFBQ01vRCxTQUFTRCxLQUFLakUsT0FBTCxDQURmOztBQUdBLFFBQUlrRSxNQUFKLEVBQVk7QUFDVkMsb0JBQWN6QixJQUFkLENBQW1CMUMsT0FBbkI7QUFDRDtBQUNGOztBQUVELFNBQU9tRSxhQUFQO0FBQ0Q7O0FBRUQsU0FBUzVCLEtBQVQsQ0FBZXlCLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4nKSxcbiAgICAgIGV2ZW50ID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2sgPSByZXF1aXJlKCcuL21peGluL2NsaWNrJyksXG4gICAgICBtb3VzZSA9IHJlcXVpcmUoJy4vbWl4aW4vbW91c2UnKSxcbiAgICAgIHJlc2l6ZSA9IHJlcXVpcmUoJy4vbWl4aW4vcmVzaXplJyksXG4gICAgICBPZmZzZXQgPSByZXF1aXJlKCcuL21pc2Mvb2Zmc2V0JyksXG4gICAgICBCb3VuZHMgPSByZXF1aXJlKCcuL21pc2MvYm91bmRzJyk7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50T3JTZWxlY3Rvcikge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tRE9NRWxlbWVudE9yU2VsZWN0b3IoZG9tRWxlbWVudE9yU2VsZWN0b3IpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gICAgXG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IHt9O1xuXG4gICAgbWl4aW4oZXZlbnQsIHRoaXMsIEVsZW1lbnQpO1xuICAgIG1peGluKGNsaWNrLCB0aGlzLCBFbGVtZW50KTtcbiAgICBtaXhpbihtb3VzZSwgdGhpcywgRWxlbWVudCk7XG4gICAgbWl4aW4ocmVzaXplLCB0aGlzLCBFbGVtZW50KTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZSh0aGlzKTsgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcyhpbmNsdWRlQm9yZGVyID0gZmFsc2UpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKGluY2x1ZGVCb3JkZXIpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIpLFxuICAgICAgICAgIGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3Qgd2lkdGggID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aDsgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gZmFsc2UpIHtcbiAgICBjb25zdCBoZWlnaHQgID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodDsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJyc7IH1cblxuICBwcmVwZW5kKGVsZW1lbnRPclN0cmluZykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbUVsZW1lbnRPclN0cmluZyhlbGVtZW50T3JTdHJpbmcpLFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuICBcbiAgYXBwZW5kKGVsZW1lbnRPclN0cmluZykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbUVsZW1lbnRPclN0cmluZyhlbGVtZW50T3JTdHJpbmcpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdFNpYmxpbmdET01FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudC5maXJzdENoaWxkOyAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgZmlyc3RTaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG4gIH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBzaG93KGRpc3BsYXlTdHlsZSA9ICdibG9jaycpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5U3R5bGU7IH1cblxuICBoaWRlKCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZSgnZGlzYWJsZWQnKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpOyB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaHRtbCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gY29tcHV0ZWRTdHlsZVswXSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSAnc3RyaW5nJykge1xuICAgICAgbGV0IG5hbWUgPSBjc3M7IC8vL1xuXG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICBjc3MgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKGNzcyk7IC8vL1xuXG4gICAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIGdldERlc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9ICcqJykge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRET01FbGVtZW50cyA9IHRoaXMuZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcbiAgICAgICAgICBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkZXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBkZXNjZW5kYW50RE9NRWxlbWVudHMgPSB0aGlzLmRvbUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksXG4gICAgICAgICAgYWxsQ2hpbGRET01FbGVtZW50cyA9IHRoaXMuZG9tRWxlbWVudC5jaGlsZHJlbixcbiAgICAgICAgICBjaGlsZERPTUVsZW1lbnRzID0gZmlsdGVyKGFsbENoaWxkRE9NRWxlbWVudHMsIGZ1bmN0aW9uKGNoaWxkRE9NRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHNvbWUoZGVzY2VuZGFudERPTUVsZW1lbnRzLCBmdW5jdGlvbihkZXNjZW5kYW50RE9NRWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gKGRlc2NlbmRhbnRET01FbGVtZW50ID09PSBjaGlsZERPTUVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKHBhcmVudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnRzID0gW3BhcmVudERPTUVsZW1lbnRdLFxuICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBsZXQgYXNjZW5kYW50RE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cbiAgICB3aGlsZSAoYXNjZW5kYW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGFzY2VuZGFudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMucHVzaChhc2NlbmRhbnRET01FbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgYXNjZW5kYW50RE9NRWxlbWVudCA9IGFzY2VuZGFudERPTUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBhc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGFzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBhc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKENsYXNzIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgZWxlbWVudCA9IENsYXNzO1xuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnNoaWZ0KCk7XG4gICAgICBDbGFzcyA9IEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZGVlcCA9IHRydWUsXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudC5jbG9uZU5vZGUoZGVlcCk7XG5cbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHR5cGVvZiBDbGFzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGh0bWwgPSBDbGFzcztcbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5zaGlmdCgpO1xuICAgICAgQ2xhc3MgPSBFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IG91dGVyRE9NRWxlbG1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG91dGVyRE9NRWxlbG1lbnQuaW5uZXJIVE1MID0gaHRtbDsgIC8vL1xuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG91dGVyRE9NRWxlbG1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodHlwZW9mIENsYXNzID09PSAnb2JqZWN0Jykge1xuICAgICAgZG9tRWxlbWVudCA9IENsYXNzO1xuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnNoaWZ0KCk7XG4gICAgICBDbGFzcyA9IEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbURPTUVsZW1lbnRPclNlbGVjdG9yKGRvbUVsZW1lbnRPclNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIGRvbUVsZW1lbnRPclNlbGVjdG9yID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGRvbUVsZW1lbnRPclNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBkb21FbGVtZW50T3JTZWxlY3RvcjtcblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21FbGVtZW50T3JTdHJpbmcoZWxlbWVudE9yU3RyaW5nKSB7XG4gIGxldCBkb21FbGVtZW50O1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHN0cmluZyA9IGVsZW1lbnRPclN0cmluZzsgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RyaW5nKTsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRPclN0cmluZzsgIC8vL1xuXG4gICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlcihkb21FbGVtZW50cywgZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiAoZG9tRWxlbWVudC5fX2VsZW1lbnRfXyAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBzb21lKGFycmF5LCB0ZXN0KSB7XG4gIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBmaWx0ZXJlZEFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19