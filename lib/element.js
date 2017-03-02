'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var Position = require('./misc/position'),
    Bounds = require('./misc/bounds'),
    event = require('./delegate/event'),
    mouse = require('./delegate/mouse'),
    resize = require('./delegate/resize');

var Element = function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    this.$element = $elementFromSelector(selector);

    var domElement = $(this.$element)[0]; ///

    domElement.__element__ = this; ///

    event.delegateTo(this, Element);
    mouse.delegateTo(this, Element);
    resize.delegateTo(this, Element);
  }

  _createClass(Element, [{
    key: 'clone',
    value: function clone() {
      return Element.clone(this);
    }
  }, {
    key: 'getPosition',
    value: function getPosition() {
      var $position = this.$element.position(),
          top = $position.top,
          left = $position.left,
          position = new Position(top, left);

      return position;
    }
  }, {
    key: 'getBounds',
    value: function getBounds() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var $offset = this.$element.offset(),
          top = $offset.top,
          ///
      left = $offset.left,
          ///
      width = this.getWidth(includeBorder, includeMargin),
          height = this.getHeight(includeBorder, includeMargin),
          bottom = top + height,
          right = left + width,
          bounds = new Bounds(top, left, bottom, right);

      return bounds;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var width = includeBorder ? this.$element.outerWidth(includeMargin) : this.$element.width();

      return width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var height = includeBorder ? this.$element.outerHeight(includeMargin) : this.$element.height();

      return height;
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      return this.$element.attr(name);
    }
  }, {
    key: 'addAttribute',
    value: function addAttribute(name, value) {
      this.$element.attr(name, value);
    }
  }, {
    key: 'removeAttribute',
    value: function removeAttribute(name) {
      this.$element.removeAttr(name);
    }
  }, {
    key: 'hasClass',
    value: function hasClass(className) {
      return this.$element.hasClass(className);
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      this.$element.addClass(className);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      this.$element.removeClass(className);
    }
  }, {
    key: 'removeClasses',
    value: function removeClasses() {
      this.$element.removeClass();
    }
  }, {
    key: 'setWidth',
    value: function setWidth(width) {
      this.$element.width(width);
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      this.$element.height(height);
    }
  }, {
    key: 'prependBefore',
    value: function prependBefore(element) {
      this.$element.before(element.$element);
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(element) {
      this.$element.after(element.$element);
    }
  }, {
    key: 'prepend',
    value: function prepend(elementOrString) {
      if (typeof elementOrString === 'string') {
        var string = elementOrString; ///

        this.$element.prepend(string);
      } else {
        var element = elementOrString,
            ///
        $element = element.$element;

        this.$element.prepend($element);
      }
    }
  }, {
    key: 'append',
    value: function append(elementOrString) {
      if (typeof elementOrString === 'string') {
        var string = elementOrString; ///

        this.$element.append(string);
      } else {
        var element = elementOrString,
            ///
        $element = element.$element;

        this.$element.append($element);
      }
    }
  }, {
    key: 'show',
    value: function show() {
      this.$element.show();
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.$element.hide();
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.$element.removeAttr('disabled');
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.$element.attr('disabled', true);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.$element.remove();
    }
  }, {
    key: 'detach',
    value: function detach() {
      this.$element.detach();
    }
  }, {
    key: 'empty',
    value: function empty() {
      this.$element.empty();
    }
  }, {
    key: 'html',
    value: function html(_html) {
      if (_html !== undefined) {
        this.$element.html(_html);
      } else {
        _html = this.$element.html();

        return _html;
      }
    }
  }, {
    key: 'css',
    value: function css(_css) {
      if (typeof _css === 'string') {
        var propertyName = _css;

        _css = this.$element.css(propertyName);

        return _css;
      } else {
        this.$element.css(_css);
      }
    }
  }, {
    key: 'data',
    value: function data(key, value) {
      if (value !== undefined) {
        this.$element.data(key, value);
      } else {
        value = this.$element.data(key);

        return value;
      }
    }
  }, {
    key: 'findElements',
    value: function findElements(selector) {
      var foundDOMElements = this.$element.find(selector),
          foundElements = elementsFromDOMElements(foundDOMElements);

      return foundElements;
    }
  }, {
    key: 'childElements',
    value: function childElements(selector) {
      var childDOMElements = this.$element.children(selector),
          childElements = elementsFromDOMElements(childDOMElements);

      return childElements;
    }
  }, {
    key: 'parentElement',
    value: function parentElement(selector) {
      var parentDOMElements = this.$element.parent(selector),
          parentElements = elementsFromDOMElements(parentDOMElements),
          firstParentElement = first(parentElements),
          parentElement = firstParentElement || null;

      return parentElement;
    }
  }, {
    key: 'parentElements',
    value: function parentElements(selector) {
      var parentDOMElements = this.$element.parents(selector),
          parentElements = elementsFromDOMElements(parentDOMElements);

      return parentElements;
    }
  }, {
    key: 'onClick',
    value: function onClick(clickHandler, namespace) {
      var button = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Element.LEFT_MOUSE_BUTTON;
      var allowDefault = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      this.on('click', function (event) {
        switch (button) {
          case Element.LEFT_MOUSE_BUTTON:
            if (event.button === 0) {
              ///
              clickHandler();
            }
            break;

          case Element.MIDDLE_MOUSE_BUTTON:
            if (event.button === 1) {
              ///
              clickHandler();
            }
            break;
        }

        return allowDefault;
      }, namespace);
    }
  }, {
    key: 'offClick',
    value: function offClick(namespace) {
      this.off('click', namespace);
    }
  }, {
    key: 'onDoubleClick',
    value: function onDoubleClick(doubleClickHandler, namespace) {
      this.on('dblclick', function () {
        doubleClickHandler();

        return false;
      }, namespace);
    }
  }, {
    key: 'offDoubleClick',
    value: function offDoubleClick(namespace) {
      this.off('dblclick', namespace);
    }
  }], [{
    key: 'clone',
    value: function clone(firstArgument) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }

      return element(firstArgument, remainingArguments, isNotAClass, $elementFromSecondArgument);

      function isNotAClass(firstArgument) {
        return typeof firstArgument === 'string' || firstArgument instanceof Element;
      }

      function $elementFromSecondArgument(secondArgument) {
        var $element = typeof secondArgument === 'string' ? $(secondArgument) : secondArgument.$element;

        return $element.clone();
      }
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(firstArgument) {
      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 1] = arguments[_key2];
      }

      return element(firstArgument, remainingArguments, isNotAClass, $elementFromSecondArgument);

      function isNotAClass(firstArgument) {
        return typeof firstArgument === 'string';
      }

      function $elementFromSecondArgument(secondArgument) {
        return $(secondArgument);
      }
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(firstArgument) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 1] = arguments[_key3];
      }

      return element(firstArgument, remainingArguments, isNotAClass, $elementFromSecondArgument);

      function isNotAClass(firstArgument) {
        return firstArgument instanceof HTMLElement;
      }

      function $elementFromSecondArgument(secondArgument) {
        return $(secondArgument);
      }
    }
  }]);

  return Element;
}();

Element.LEFT_MOUSE_BUTTON = 1;
Element.MIDDLE_MOUSE_BUTTON = 2;
Element.RIGHT_MOUSE_BUTTON = 3;

module.exports = Element;

function element(firstArgument, remainingArguments, isNotAClass, $elementFromSecondArgument) {
  var firstArgumentNotAClass = isNotAClass(firstArgument);

  if (firstArgumentNotAClass) {
    remainingArguments.unshift(firstArgument);
    firstArgument = Element;
  }

  var Class = firstArgument,
      secondArgument = remainingArguments.shift(),
      $element = $elementFromSecondArgument(secondArgument);

  remainingArguments.unshift($element);
  remainingArguments.unshift(null); ///

  return new (Function.prototype.bind.apply(Class, remainingArguments))(); ///
}

function $elementFromSelector(selector) {
  var $element;

  if (false) {} else if (typeof selector === 'string') {
    $element = $(selector);
  } else if (selector instanceof $) {
    $element = selector; ///
  } else if (selector instanceof Array) {
    var parentElement = selector[0],
        ///
    childSelector = selector[1],
        ///
    parent$Element = parentElement.$element; ///

    $element = parent$Element.find(childSelector);
  }

  return $element;
}

function elementsFromDOMElements(domElements) {
  var elements = [],
      domElementsLength = domElements.length;

  for (var i = 0; i < domElementsLength; i++) {
    var domElement = domElements[i],
        element = domElement.__element__;

    if (element !== undefined) {
      elements.push(element);
    }
  }

  return elements;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiUG9zaXRpb24iLCJCb3VuZHMiLCJldmVudCIsIm1vdXNlIiwicmVzaXplIiwiRWxlbWVudCIsInNlbGVjdG9yIiwiJGVsZW1lbnQiLCIkZWxlbWVudEZyb21TZWxlY3RvciIsImRvbUVsZW1lbnQiLCJfX2VsZW1lbnRfXyIsImRlbGVnYXRlVG8iLCJjbG9uZSIsIiRwb3NpdGlvbiIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImluY2x1ZGVCb3JkZXIiLCJpbmNsdWRlTWFyZ2luIiwiJG9mZnNldCIsIm9mZnNldCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJib3R0b20iLCJyaWdodCIsImJvdW5kcyIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsIm5hbWUiLCJhdHRyIiwidmFsdWUiLCJyZW1vdmVBdHRyIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZWxlbWVudCIsImJlZm9yZSIsImFmdGVyIiwiZWxlbWVudE9yU3RyaW5nIiwic3RyaW5nIiwicHJlcGVuZCIsImFwcGVuZCIsInNob3ciLCJoaWRlIiwicmVtb3ZlIiwiZGV0YWNoIiwiZW1wdHkiLCJodG1sIiwidW5kZWZpbmVkIiwiY3NzIiwicHJvcGVydHlOYW1lIiwia2V5IiwiZGF0YSIsImZvdW5kRE9NRWxlbWVudHMiLCJmaW5kIiwiZm91bmRFbGVtZW50cyIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiY2hpbGRET01FbGVtZW50cyIsImNoaWxkcmVuIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50IiwicGFyZW50RWxlbWVudHMiLCJmaXJzdFBhcmVudEVsZW1lbnQiLCJmaXJzdCIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnRzIiwiY2xpY2tIYW5kbGVyIiwibmFtZXNwYWNlIiwiYnV0dG9uIiwiTEVGVF9NT1VTRV9CVVRUT04iLCJhbGxvd0RlZmF1bHQiLCJvbiIsIk1JRERMRV9NT1VTRV9CVVRUT04iLCJvZmYiLCJkb3VibGVDbGlja0hhbmRsZXIiLCJmaXJzdEFyZ3VtZW50IiwicmVtYWluaW5nQXJndW1lbnRzIiwiaXNOb3RBQ2xhc3MiLCIkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCIsInNlY29uZEFyZ3VtZW50IiwiSFRNTEVsZW1lbnQiLCJSSUdIVF9NT1VTRV9CVVRUT04iLCJtb2R1bGUiLCJleHBvcnRzIiwiZmlyc3RBcmd1bWVudE5vdEFDbGFzcyIsInVuc2hpZnQiLCJDbGFzcyIsInNoaWZ0IiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJiaW5kIiwiYXBwbHkiLCJBcnJheSIsImNoaWxkU2VsZWN0b3IiLCJwYXJlbnQkRWxlbWVudCIsImRvbUVsZW1lbnRzIiwiZWxlbWVudHMiLCJkb21FbGVtZW50c0xlbmd0aCIsImxlbmd0aCIsImkiLCJwdXNoIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxJQUFJQyxRQUFRLFFBQVIsQ0FBUjs7QUFFQSxJQUFJQyxXQUFXRCxRQUFRLGlCQUFSLENBQWY7QUFBQSxJQUNJRSxTQUFTRixRQUFRLGVBQVIsQ0FEYjtBQUFBLElBRUlHLFFBQVFILFFBQVEsa0JBQVIsQ0FGWjtBQUFBLElBR0lJLFFBQVFKLFFBQVEsa0JBQVIsQ0FIWjtBQUFBLElBSUlLLFNBQVNMLFFBQVEsbUJBQVIsQ0FKYjs7SUFNTU0sTztBQUNKLG1CQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtDLFFBQUwsR0FBZ0JDLHFCQUFxQkYsUUFBckIsQ0FBaEI7O0FBRUEsUUFBSUcsYUFBYVgsRUFBRSxLQUFLUyxRQUFQLEVBQWlCLENBQWpCLENBQWpCLENBSG9CLENBR2tCOztBQUV0Q0UsZUFBV0MsV0FBWCxHQUF5QixJQUF6QixDQUxvQixDQUtXOztBQUUvQlIsVUFBTVMsVUFBTixDQUFpQixJQUFqQixFQUF1Qk4sT0FBdkI7QUFDQUYsVUFB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LENBRVYsQ0FGRCxNQUVPLElBQUksT0FBT0QsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUN2Q0MsZUFBV1QsRUFBRVEsUUFBRixDQUFYO0FBQ0QsR0FGTSxNQUVBLElBQUlBLG9CQUFvQlIsQ0FBeEIsRUFBMkI7QUFDaENTLGVBQVdELFFBQVgsQ0FEZ0MsQ0FDVjtBQUN2QixHQUZNLE1BRUEsSUFBSUEsb0JBQW9CMEYsS0FBeEIsRUFBZ0M7QUFDckMsUUFBSTVCLGdCQUFnQjlELFNBQVMsQ0FBVCxDQUFwQjtBQUFBLFFBQWlDO0FBQzdCMkYsb0JBQWdCM0YsU0FBUyxDQUFULENBRHBCO0FBQUEsUUFDa0M7QUFDOUI0RixxQkFBaUI5QixjQUFjN0QsUUFGbkMsQ0FEcUMsQ0FHUzs7QUFFOUNBLGVBQVcyRixlQUFlekMsSUFBZixDQUFvQndDLGFBQXBCLENBQVg7QUFDRDs7QUFFRCxTQUFPMUYsUUFBUDtBQUNEOztBQUVELFNBQVNvRCx1QkFBVCxDQUFpQ3dDLFdBQWpDLEVBQThDO0FBQzVDLE1BQUlDLFdBQVcsRUFBZjtBQUFBLE1BQ0lDLG9CQUFvQkYsWUFBWUcsTUFEcEM7O0FBR0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLGlCQUFwQixFQUF1Q0UsR0FBdkMsRUFBNEM7QUFDMUMsUUFBSTlGLGFBQWEwRixZQUFZSSxDQUFaLENBQWpCO0FBQUEsUUFDSWpFLFVBQVU3QixXQUFXQyxXQUR6Qjs7QUFHQSxRQUFJNEIsWUFBWWEsU0FBaEIsRUFBMkI7QUFDekJpRCxlQUFTSSxJQUFULENBQWNsRSxPQUFkO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPOEQsUUFBUDtBQUNEOztBQUVELFNBQVNqQyxLQUFULENBQWVzQyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxudmFyIFBvc2l0aW9uID0gcmVxdWlyZSgnLi9taXNjL3Bvc2l0aW9uJyksXG4gICAgQm91bmRzID0gcmVxdWlyZSgnLi9taXNjL2JvdW5kcycpLFxuICAgIGV2ZW50ID0gcmVxdWlyZSgnLi9kZWxlZ2F0ZS9ldmVudCcpLFxuICAgIG1vdXNlID0gcmVxdWlyZSgnLi9kZWxlZ2F0ZS9tb3VzZScpLFxuICAgIHJlc2l6ZSA9IHJlcXVpcmUoJy4vZGVsZWdhdGUvcmVzaXplJyk7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICB2YXIgZG9tRWxlbWVudCA9ICQodGhpcy4kZWxlbWVudClbMF07IC8vL1xuXG4gICAgZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7IC8vL1xuXG4gICAgZXZlbnQuZGVsZWdhdGVUbyh0aGlzLCBFbGVtZW50KTtcbiAgICBtb3VzZS5kZWxlZ2F0ZVRvKHRoaXMsIEVsZW1lbnQpO1xuICAgIHJlc2l6ZS5kZWxlZ2F0ZVRvKHRoaXMsIEVsZW1lbnQpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBFbGVtZW50LmNsb25lKHRoaXMpOyB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdmFyICRwb3NpdGlvbiA9IHRoaXMuJGVsZW1lbnQucG9zaXRpb24oKSxcbiAgICAgICAgdG9wID0gJHBvc2l0aW9uLnRvcCxcbiAgICAgICAgbGVmdCA9ICRwb3NpdGlvbi5sZWZ0LFxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbih0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0Qm91bmRzKGluY2x1ZGVCb3JkZXIgPSBmYWxzZSwgaW5jbHVkZU1hcmdpbiA9IGZhbHNlKSB7XG4gICAgdmFyICRvZmZzZXQgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpLFxuICAgICAgICB0b3AgPSAkb2Zmc2V0LnRvcCwgIC8vL1xuICAgICAgICBsZWZ0ID0gJG9mZnNldC5sZWZ0LCAgLy8vXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aChpbmNsdWRlQm9yZGVyLCBpbmNsdWRlTWFyZ2luKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoaW5jbHVkZUJvcmRlciwgaW5jbHVkZU1hcmdpbiksXG4gICAgICAgIGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gZmFsc2UsIGluY2x1ZGVNYXJnaW4gPSBmYWxzZSkgeyBcbiAgICB2YXIgd2lkdGggPSBpbmNsdWRlQm9yZGVyID8gXG4gICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50Lm91dGVyV2lkdGgoaW5jbHVkZU1hcmdpbikgOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LndpZHRoKCk7XG4gICAgXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG4gIFxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IGZhbHNlLCBpbmNsdWRlTWFyZ2luID0gZmFsc2UpIHtcbiAgICB2YXIgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5vdXRlckhlaWdodChpbmNsdWRlTWFyZ2luKSA6XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LmhlaWdodCgpO1xuICAgIFxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5hdHRyKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIobmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LmFkZENsYXNzKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3NlcygpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygpOyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy4kZWxlbWVudC53aWR0aCh3aWR0aCk7IH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuJGVsZW1lbnQuaGVpZ2h0KGhlaWdodCk7IH1cblxuICBwcmVwZW5kQmVmb3JlKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5iZWZvcmUoZWxlbWVudC4kZWxlbWVudCk7IH1cblxuICBhcHBlbmRBZnRlcihlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYWZ0ZXIoZWxlbWVudC4kZWxlbWVudCk7IH1cbiAgXG4gIHByZXBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0gZWxlbWVudE9yU3RyaW5nOyAvLy9cblxuICAgICAgdGhpcy4kZWxlbWVudC5wcmVwZW5kKHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudE9yU3RyaW5nLCAgLy8vXG4gICAgICAgICAgJGVsZW1lbnQgPSBlbGVtZW50LiRlbGVtZW50O1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnByZXBlbmQoJGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBcbiAgYXBwZW5kKGVsZW1lbnRPclN0cmluZykge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHN0cmluZyA9IGVsZW1lbnRPclN0cmluZzsgLy8vXG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudE9yU3RyaW5nLCAgLy8vXG4gICAgICAgICAgJGVsZW1lbnQgPSBlbGVtZW50LiRlbGVtZW50O1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZCgkZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHsgdGhpcy4kZWxlbWVudC5zaG93KCk7IH1cblxuICBoaWRlKCkgeyB0aGlzLiRlbGVtZW50LmhpZGUoKTsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy4kZWxlbWVudC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpOyB9XG5cbiAgcmVtb3ZlKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZSgpOyB9XG5cbiAgZGV0YWNoKCkgeyB0aGlzLiRlbGVtZW50LmRldGFjaCgpOyB9XG5cbiAgZW1wdHkoKSB7IHRoaXMuJGVsZW1lbnQuZW1wdHkoKTsgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuaHRtbChodG1sKVxuICAgIH0gZWxzZSB7XG4gICAgICBodG1sID0gdGhpcy4kZWxlbWVudC5odG1sKCk7XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSBjc3M7XG5cbiAgICAgIGNzcyA9IHRoaXMuJGVsZW1lbnQuY3NzKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKGNzcyk7XG4gICAgfVxuICB9XG5cbiAgZGF0YShrZXksIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuZGF0YShrZXksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB0aGlzLiRlbGVtZW50LmRhdGEoa2V5KTtcblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBmb3VuZERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5maW5kKHNlbGVjdG9yKSxcbiAgICAgICAgZm91bmRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGZvdW5kRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZvdW5kRWxlbWVudHM7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIGNoaWxkRE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKHNlbGVjdG9yKSxcbiAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRFbGVtZW50KHNlbGVjdG9yKSB7XG4gICAgdmFyIHBhcmVudERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5wYXJlbnQoc2VsZWN0b3IpLFxuICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpLFxuICAgICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHBhcmVudEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIHBhcmVudERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5wYXJlbnRzKHNlbGVjdG9yKSxcbiAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudHM7XG4gIH1cblxuICBvbkNsaWNrKGNsaWNrSGFuZGxlciwgbmFtZXNwYWNlLCBidXR0b24gPSBFbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OLCBhbGxvd0RlZmF1bHQgPSBmYWxzZSkge1xuICAgIHRoaXMub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHN3aXRjaCAoYnV0dG9uKSB7XG4gICAgICAgIGNhc2UgRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiA6XG4gICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkgeyAvLy9cbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA6XG4gICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMSkgeyAvLy9cbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFsbG93RGVmYXVsdDtcbiAgICB9LCBuYW1lc3BhY2UpO1xuICB9XG4gIFxuICBvZmZDbGljayhuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ2NsaWNrJywgbmFtZXNwYWNlKTsgfVxuXG4gIG9uRG91YmxlQ2xpY2soZG91YmxlQ2xpY2tIYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm9uKCdkYmxjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICBkb3VibGVDbGlja0hhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sIG5hbWVzcGFjZSlcbiAgfVxuXG4gIG9mZkRvdWJsZUNsaWNrKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignZGJsY2xpY2snLCBuYW1lc3BhY2UpOyB9XG5cbiAgc3RhdGljIGNsb25lKGZpcnN0QXJndW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBlbGVtZW50KGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KTtcblxuICAgIGZ1bmN0aW9uIGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAoKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykgfHwgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQoc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgIHZhciAkZWxlbWVudCA9ICh0eXBlb2Ygc2Vjb25kQXJndW1lbnQgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICQoc2Vjb25kQXJndW1lbnQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kQXJndW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHJldHVybiAkZWxlbWVudC5jbG9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChmaXJzdEFyZ3VtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gZWxlbWVudChmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCk7XG5cbiAgICBmdW5jdGlvbiBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQoc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAkKHNlY29uZEFyZ3VtZW50KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQpO1xuXG4gICAgZnVuY3Rpb24gaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkge1xuICAgICAgcmV0dXJuIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gJChzZWNvbmRBcmd1bWVudCk7XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQuTEVGVF9NT1VTRV9CVVRUT04gPSAxO1xuRWxlbWVudC5NSURETEVfTU9VU0VfQlVUVE9OID0gMjtcbkVsZW1lbnQuUklHSFRfTU9VU0VfQlVUVE9OID0gMztcblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBlbGVtZW50KGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KSB7XG4gIHZhciBmaXJzdEFyZ3VtZW50Tm90QUNsYXNzID0gaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCk7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnROb3RBQ2xhc3MpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChmaXJzdEFyZ3VtZW50KTtcbiAgICBmaXJzdEFyZ3VtZW50ID0gRWxlbWVudDtcbiAgfVxuXG4gIHZhciBDbGFzcyA9IGZpcnN0QXJndW1lbnQsXG4gICAgICBzZWNvbmRBcmd1bWVudCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5zaGlmdCgpLFxuICAgICAgJGVsZW1lbnQgPSAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudChzZWNvbmRBcmd1bWVudCk7XG5cbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoJGVsZW1lbnQpO1xuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTsgLy8vXG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpOyAgLy8vXG59XG5cbmZ1bmN0aW9uICRlbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIHZhciAkZWxlbWVudDtcblxuICBpZiAoZmFsc2UpIHtcblxuICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAkZWxlbWVudCA9ICQoc2VsZWN0b3IpO1xuICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgJCkge1xuICAgICRlbGVtZW50ID0gc2VsZWN0b3I7ICAvLy9cbiAgfSBlbHNlIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEFycmF5ICkge1xuICAgIHZhciBwYXJlbnRFbGVtZW50ID0gc2VsZWN0b3JbMF0sIC8vL1xuICAgICAgICBjaGlsZFNlbGVjdG9yID0gc2VsZWN0b3JbMV0sICAvLy9cbiAgICAgICAgcGFyZW50JEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LiRlbGVtZW50OyAgLy8vXG5cbiAgICAkZWxlbWVudCA9IHBhcmVudCRFbGVtZW50LmZpbmQoY2hpbGRTZWxlY3Rvcik7XG4gIH1cblxuICByZXR1cm4gJGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIHZhciBlbGVtZW50cyA9IFtdLFxuICAgICAgZG9tRWxlbWVudHNMZW5ndGggPSBkb21FbGVtZW50cy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb21FbGVtZW50c0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSBkb21FbGVtZW50c1tpXSxcbiAgICAgICAgZWxlbWVudCA9IGRvbUVsZW1lbnQuX19lbGVtZW50X187XG5cbiAgICBpZiAoZWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=