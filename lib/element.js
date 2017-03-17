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
          ignoredProperties = Class.ignoredProperties,
          additionalProperties = Class.additionalProperties,
          html = '<' + tagName + '></' + tagName + '>',
          element = Element.fromHTML.apply(Element, [Class, html].concat(remainingArguments));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIk9mZnNldCIsInJlcXVpcmUiLCJCb3VuZHMiLCJqc3hNaXhpbiIsImV2ZW50TWl4aW4iLCJjbGlja01peGluIiwibW91c2VNaXhpbiIsInJlc2l6ZU1peGluIiwiRWxlbWVudCIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImRvbUVsZW1lbnRGcm9tU2VsZWN0b3IiLCJfX2VsZW1lbnRfXyIsImhhbmRsZXJzTWFwIiwiY2xvbmUiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsImluY2x1ZGVCb3JkZXIiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZHMiLCJmcm9tQm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJuYW1lIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZSIsImNvbnRhaW5zIiwiZWxlbWVudE9yU3RyaW5nIiwiZG9tRWxlbWVudEZyb21FbGVtZW50T3JTdHJpbmciLCJmaXJzdENoaWxkRE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50RE9NRWxlbWVudCIsImZpcnN0U2libGluZ0RPTUVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImVsZW1lbnQiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJuZXh0U2libGluZyIsImRpc3BsYXlTdHlsZSIsImRpc3BsYXkiLCJodG1sIiwidW5kZWZpbmVkIiwiaW5uZXJIVE1MIiwiY3NzIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJpbmRleCIsImxlbmd0aCIsImdldFByb3BlcnR5VmFsdWUiLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiYmluZCIsImRlc2NlbmRhbnRET01FbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkZXNjZW5kYW50RWxlbWVudHMiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsImFsbENoaWxkRE9NRWxlbWVudHMiLCJjaGlsZHJlbiIsImNoaWxkRE9NRWxlbWVudHMiLCJmaWx0ZXIiLCJjaGlsZERPTUVsZW1lbnQiLCJzb21lIiwiZGVzY2VuZGFudERPTUVsZW1lbnQiLCJjaGlsZEVsZW1lbnRzIiwibWF0Y2hlcyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50RWxlbWVudHMiLCJmaXJzdFBhcmVudEVsZW1lbnQiLCJmaXJzdCIsImFzY2VuZGFudERPTUVsZW1lbnRzIiwiYXNjZW5kYW50RE9NRWxlbWVudCIsInB1c2giLCJhc2NlbmRhbnRFbGVtZW50cyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwic2hpZnQiLCJkZWVwIiwiY2xvbmVOb2RlIiwidW5zaGlmdCIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiYXBwbHkiLCJvdXRlckRPTUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJmcm9tSFRNTCIsImFwcGx5UHJvcGVydGllcyIsImFzc2lnbiIsIkxFRlRfTU9VU0VfQlVUVE9OIiwiTUlERExFX01PVVNFX0JVVFRPTiIsIlJJR0hUX01PVVNFX0JVVFRPTiIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHJpbmciLCJjcmVhdGVUZXh0Tm9kZSIsImRvbUVsZW1lbnRzIiwiZG9tRWxlbWVudHNXaXRoRWxlbWVudHMi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SUFBdkIsRUFBNkI7QUFDM0IsTUFBTUUsZ0JBQWdCLEVBQXRCOztBQUVBLE9BQUssSUFBSTlELFFBQVEsQ0FBakIsRUFBb0JBLFFBQVEyRCxNQUFNMUQsTUFBbEMsRUFBMENELE9BQTFDLEVBQW1EO0FBQ2pELFFBQU1kLFVBQVV5RSxNQUFNM0QsS0FBTixDQUFoQjtBQUFBLFFBQ002RCxTQUFTRCxLQUFLMUUsT0FBTCxDQURmOztBQUdBLFFBQUkyRSxNQUFKLEVBQVk7QUFDVkMsb0JBQWNuQyxJQUFkLENBQW1CekMsT0FBbkI7QUFDRDtBQUNGOztBQUVELFNBQU80RSxhQUFQO0FBQ0Q7O0FBRUQsU0FBU3RDLEtBQVQsQ0FBZW1DLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBPZmZzZXQgPSByZXF1aXJlKCcuL21pc2Mvb2Zmc2V0JyksXG4gICAgICBCb3VuZHMgPSByZXF1aXJlKCcuL21pc2MvYm91bmRzJyksXG4gICAgICBqc3hNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vanN4JyksXG4gICAgICBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICByZXNpemVNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vcmVzaXplJyk7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpcztcbiAgICBcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0ge307XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3Qgd2lkdGggID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7IH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3QgaGVpZ2h0ICA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJzsgfVxuXG4gIHByZXBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tRWxlbWVudE9yU3RyaW5nKGVsZW1lbnRPclN0cmluZyksXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG4gIFxuICBhcHBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tRWxlbWVudE9yU3RyaW5nKGVsZW1lbnRPclN0cmluZyk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50RWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0U2libGluZ0RPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50LmZpcnN0Q2hpbGQ7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBmaXJzdFNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gJ2Jsb2NrJykgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlTdHlsZTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKCdkaXNhYmxlZCcpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7IH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBodG1sID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wdXRlZFN0eWxlWzBdLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgZGVzY2VuZGFudERPTUVsZW1lbnRzID0gdGhpcy5kb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxuICAgICAgICAgIGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRlc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZGVzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0Q2hpbGRFbGVtZW50cyhzZWxlY3RvciA9ICcqJykge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRET01FbGVtZW50cyA9IHRoaXMuZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcbiAgICAgICAgICBhbGxDaGlsZERPTUVsZW1lbnRzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkcmVuLFxuICAgICAgICAgIGNoaWxkRE9NRWxlbWVudHMgPSBmaWx0ZXIoYWxsQ2hpbGRET01FbGVtZW50cywgZnVuY3Rpb24oY2hpbGRET01FbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gc29tZShkZXNjZW5kYW50RE9NRWxlbWVudHMsIGZ1bmN0aW9uKGRlc2NlbmRhbnRET01FbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiAoZGVzY2VuZGFudERPTUVsZW1lbnQgPT09IGNoaWxkRE9NRWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBhc2NlbmRhbnRET01FbGVtZW50cyA9IFtdLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGxldCBhc2NlbmRhbnRET01FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuICAgIHdoaWxlIChhc2NlbmRhbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAoYXNjZW5kYW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhc2NlbmRhbnRET01FbGVtZW50cy5wdXNoKGFzY2VuZGFudERPTUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBhc2NlbmRhbnRET01FbGVtZW50ID0gYXNjZW5kYW50RE9NRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGFzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoYXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoQ2xhc3MgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICBlbGVtZW50ID0gQ2xhc3M7XG4gICAgICByZW1haW5pbmdBcmd1bWVudHMuc2hpZnQoKTtcbiAgICAgIENsYXNzID0gRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWVwID0gdHJ1ZSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LmNsb25lTm9kZShkZWVwKTtcblxuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodHlwZW9mIENsYXNzID09PSAnc3RyaW5nJykge1xuICAgICAgaHRtbCA9IENsYXNzO1xuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnNoaWZ0KCk7XG4gICAgICBDbGFzcyA9IEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgb3V0ZXJET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBvdXRlckRPTUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDsgIC8vL1xuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG91dGVyRE9NRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmICh0eXBlb2YgQ2xhc3MgPT09ICdvYmplY3QnKSB7XG4gICAgICBkb21FbGVtZW50ID0gQ2xhc3M7XG4gICAgICByZW1haW5pbmdBcmd1bWVudHMuc2hpZnQoKTtcbiAgICAgIENsYXNzID0gRWxlbWVudDtcbiAgICB9XG5cbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IENsYXNzLnRhZ05hbWUsXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBDbGFzcy5pZ25vcmVkUHJvcGVydGllcyxcbiAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllcyA9IENsYXNzLmFkZGl0aW9uYWxQcm9wZXJ0aWVzLFxuICAgICAgICAgIGh0bWwgPSBgPCR7dGFnTmFtZX0+PC8ke3RhZ05hbWV9PmAsXG4gICAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcywgYWRkaXRpb25hbFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW4pO1xuXG5FbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OID0gMDtcbkVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA9IDE7XG5FbGVtZW50LlJJR0hUX01PVVNFX0JVVFRPTiA9IDI7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21FbGVtZW50T3JTdHJpbmcoZWxlbWVudE9yU3RyaW5nKSB7XG4gIGxldCBkb21FbGVtZW50O1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHN0cmluZyA9IGVsZW1lbnRPclN0cmluZzsgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RyaW5nKTsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRPclN0cmluZzsgIC8vL1xuXG4gICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlcihkb21FbGVtZW50cywgZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiAoZG9tRWxlbWVudC5fX2VsZW1lbnRfXyAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBzb21lKGFycmF5LCB0ZXN0KSB7XG4gIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBmaWx0ZXJlZEFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19