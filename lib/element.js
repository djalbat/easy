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
  function Element(selector) {
    _classCallCheck(this, Element);

    this.domElement = domElementFromSelector(selector);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIm1peGluIiwicmVxdWlyZSIsImV2ZW50IiwiY2xpY2siLCJtb3VzZSIsInJlc2l6ZSIsIk9mZnNldCIsIkJvdW5kcyIsIkVsZW1lbnQiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJkb21FbGVtZW50RnJvbVNlbGVjdG9yIiwiX19lbGVtZW50X18iLCJoYW5kbGVyc01hcCIsImNsb25lIiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXQiLCJpbmNsdWRlQm9yZGVyIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImJvdHRvbSIsInJpZ2h0IiwiYm91bmRzIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInN0eWxlIiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibmFtZSIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0b2dnbGUiLCJjb250YWlucyIsImVsZW1lbnRPclN0cmluZyIsImRvbUVsZW1lbnRGcm9tRWxlbWVudE9yU3RyaW5nIiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwicGFyZW50RWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJmaXJzdFNpYmxpbmdET01FbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJlbGVtZW50Iiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwibmV4dFNpYmxpbmciLCJkaXNwbGF5U3R5bGUiLCJkaXNwbGF5IiwiaHRtbCIsInVuZGVmaW5lZCIsImlubmVySFRNTCIsImNzcyIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJnZXRQcm9wZXJ0eVZhbHVlIiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImJpbmQiLCJkZXNjZW5kYW50RE9NRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGVzY2VuZGFudEVsZW1lbnRzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJhbGxDaGlsZERPTUVsZW1lbnRzIiwiY2hpbGRyZW4iLCJjaGlsZERPTUVsZW1lbnRzIiwiZmlsdGVyIiwiY2hpbGRET01FbGVtZW50Iiwic29tZSIsImRlc2NlbmRhbnRET01FbGVtZW50IiwiY2hpbGRFbGVtZW50cyIsIm1hdGNoZXMiLCJwYXJlbnRET01FbGVtZW50cyIsInBhcmVudEVsZW1lbnRzIiwiZmlyc3RQYXJlbnRFbGVtZW50IiwiZmlyc3QiLCJhc2NlbmRhbnRET01FbGVtZW50cyIsImFzY2VuZGFudERPTUVsZW1lbnQiLCJwdXNoIiwiYXNjZW5kYW50RWxlbWVudHMiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInNoaWZ0IiwiZGVlcCIsImNsb25lTm9kZSIsInVuc2hpZnQiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsImFwcGx5Iiwib3V0ZXJET01FbGVsbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHJpbmciLCJjcmVhdGVUZXh0Tm9kZSIsImRvbUVsZW1lbnRzIiwiZG9tRWxlbWVudHNXaXRoRWxlbWVudHMiLCJlbGVtZW50cyIsIm1hcCIsImFycmF5IiwidGVzdCIsInJlc3VsdCIsImZpbHRlcmVkQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxlQUFSLENBRGQ7QUFBQSxJQUVNRSxRQUFRRixRQUFRLGVBQVIsQ0FGZDtBQUFBLElBR01HLFFBQVFILFFBQVEsZUFBUixDQUhkO0FBQUEsSUFJ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LFFBQVA7QUFDRDs7QUFFRCxTQUFTOUIsSUFBVCxDQUFjZ0MsS0FBZCxFQUFxQkMsSUFBckIsRUFBMkI7QUFDekIsTUFBSUMsU0FBUyxLQUFiOztBQUVBLE9BQUssSUFBSW5ELFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFpRCxNQUFNaEQsTUFBbEMsRUFBMENELE9BQTFDLEVBQW1EO0FBQ2pELFFBQU1kLFVBQVUrRCxNQUFNakQsS0FBTixDQUFoQjs7QUFFQW1ELGFBQVNELEtBQUtoRSxPQUFMLENBQVQ7O0FBRUEsUUFBSWlFLE1BQUosRUFBWTtBQUNWQSxlQUFTLElBQVQ7O0FBRUE7QUFDRDtBQUNGOztBQUVELFNBQU9BLE1BQVA7QUFDRDs7QUFFRCxTQUFTcEMsTUFBVCxDQUFnQmtDLEtBQWhCLEVBQXVCQyxJQUF2QixFQUE2QjtBQUMzQixNQUFNRSxnQkFBZ0IsRUFBdEI7O0FBRUEsT0FBSyxJQUFJcEQsUUFBUSxDQUFqQixFQUFvQkEsUUFBUWlELE1BQU1oRCxNQUFsQyxFQUEwQ0QsT0FBMUMsRUFBbUQ7QUFDakQsUUFBTWQsVUFBVStELE1BQU1qRCxLQUFOLENBQWhCO0FBQUEsUUFDTW1ELFNBQVNELEtBQUtoRSxPQUFMLENBRGY7O0FBR0EsUUFBSWlFLE1BQUosRUFBWTtBQUNWQyxvQkFBY3pCLElBQWQsQ0FBbUJ6QyxPQUFuQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT2tFLGFBQVA7QUFDRDs7QUFFRCxTQUFTNUIsS0FBVCxDQUFleUIsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1peGluID0gcmVxdWlyZSgnLi9taXhpbicpLFxuICAgICAgZXZlbnQgPSByZXF1aXJlKCcuL21peGluL2V2ZW50JyksXG4gICAgICBjbGljayA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlID0gcmVxdWlyZSgnLi9taXhpbi9tb3VzZScpLFxuICAgICAgcmVzaXplID0gcmVxdWlyZSgnLi9taXhpbi9yZXNpemUnKSxcbiAgICAgIE9mZnNldCA9IHJlcXVpcmUoJy4vbWlzYy9vZmZzZXQnKSxcbiAgICAgIEJvdW5kcyA9IHJlcXVpcmUoJy4vbWlzYy9ib3VuZHMnKTtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgICBcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0ge307XG5cbiAgICBtaXhpbihldmVudCwgdGhpcywgRWxlbWVudCk7XG4gICAgbWl4aW4oY2xpY2ssIHRoaXMsIEVsZW1lbnQpO1xuICAgIG1peGluKG1vdXNlLCB0aGlzLCBFbGVtZW50KTtcbiAgICBtaXhpbihyZXNpemUsIHRoaXMsIEVsZW1lbnQpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBFbGVtZW50LmNsb25lKHRoaXMpOyB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKGluY2x1ZGVCb3JkZXIgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoaW5jbHVkZUJvcmRlciksXG4gICAgICAgICAgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gZmFsc2UpIHtcbiAgICBjb25zdCB3aWR0aCAgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDsgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gZmFsc2UpIHtcbiAgICBjb25zdCBoZWlnaHQgID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICcnOyB9XG5cbiAgcHJlcGVuZChlbGVtZW50T3JTdHJpbmcpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21FbGVtZW50T3JTdHJpbmcoZWxlbWVudE9yU3RyaW5nKSxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cbiAgXG4gIGFwcGVuZChlbGVtZW50T3JTdHJpbmcpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21FbGVtZW50T3JTdHJpbmcoZWxlbWVudE9yU3RyaW5nKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RTaWJsaW5nRE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQuZmlyc3RDaGlsZDsgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIGZpcnN0U2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50RWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50RWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSAnYmxvY2snKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVN0eWxlOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTsgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGh0bWwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MOyAvLy9cblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNvbXB1dGVkU3R5bGVbMF0sICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY3NzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBnZXREZXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBkZXNjZW5kYW50RE9NRWxlbWVudHMgPSB0aGlzLmRvbUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksXG4gICAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgZGVzY2VuZGFudERPTUVsZW1lbnRzID0gdGhpcy5kb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxuICAgICAgICAgIGFsbENoaWxkRE9NRWxlbWVudHMgPSB0aGlzLmRvbUVsZW1lbnQuY2hpbGRyZW4sXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlcihhbGxDaGlsZERPTUVsZW1lbnRzLCBmdW5jdGlvbihjaGlsZERPTUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBzb21lKGRlc2NlbmRhbnRET01FbGVtZW50cywgZnVuY3Rpb24oZGVzY2VuZGFudERPTUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChkZXNjZW5kYW50RE9NRWxlbWVudCA9PT0gY2hpbGRET01FbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0UGFyZW50RWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBwYXJlbnRFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChwYXJlbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAocGFyZW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50cyA9IFtwYXJlbnRET01FbGVtZW50XSxcbiAgICAgICAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKTtcblxuICAgICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBnZXRBc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9ICcqJykge1xuICAgIGNvbnN0IGFzY2VuZGFudERPTUVsZW1lbnRzID0gW10sXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgbGV0IGFzY2VuZGFudERPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG4gICAgd2hpbGUgKGFzY2VuZGFudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChhc2NlbmRhbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFzY2VuZGFudERPTUVsZW1lbnRzLnB1c2goYXNjZW5kYW50RE9NRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGFzY2VuZGFudERPTUVsZW1lbnQgPSBhc2NlbmRhbnRET01FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gYXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChDbGFzcyBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQgPSBDbGFzcztcbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5zaGlmdCgpO1xuICAgICAgQ2xhc3MgPSBFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGRlZXAgPSB0cnVlLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQuY2xvbmVOb2RlKGRlZXApO1xuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmICh0eXBlb2YgQ2xhc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICBodG1sID0gQ2xhc3M7XG4gICAgICByZW1haW5pbmdBcmd1bWVudHMuc2hpZnQoKTtcbiAgICAgIENsYXNzID0gRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBvdXRlckRPTUVsZWxtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBvdXRlckRPTUVsZWxtZW50LmlubmVySFRNTCA9IGh0bWw7ICAvLy9cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBvdXRlckRPTUVsZWxtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHR5cGVvZiBDbGFzcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGRvbUVsZW1lbnQgPSBDbGFzcztcbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5zaGlmdCgpO1xuICAgICAgQ2xhc3MgPSBFbGVtZW50O1xuICAgIH1cblxuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21FbGVtZW50T3JTdHJpbmcoZWxlbWVudE9yU3RyaW5nKSB7XG4gIGxldCBkb21FbGVtZW50O1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHN0cmluZyA9IGVsZW1lbnRPclN0cmluZzsgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RyaW5nKTsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRPclN0cmluZzsgIC8vL1xuXG4gICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlcihkb21FbGVtZW50cywgZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiAoZG9tRWxlbWVudC5fX2VsZW1lbnRfXyAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBzb21lKGFycmF5LCB0ZXN0KSB7XG4gIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBmaWx0ZXJlZEFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19