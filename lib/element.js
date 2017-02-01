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

    event.initialise(this);
    mouse.initialise(this);
    resize.initialise(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiUG9zaXRpb24iLCJCb3VuZHMiLCJldmVudCIsIm1vdXNlIiwicmVzaXplIiwiRWxlbWVudCIsInNlbGVjdG9yIiwiJGVsZW1lbnQiLCIkZWxlbWVudEZyb21TZWxlY3RvciIsImRvbUVsZW1lbnQiLCJfX2VsZW1lbnRfXyIsImluaXRpYWxpc2UiLCJjbG9uZSIsIiRwb3NpdGlvbiIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImluY2x1ZGVCb3JkZXIiLCJpbmNsdWRlTWFyZ2luIiwiJG9mZnNldCIsIm9mZnNldCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJib3R0b20iLCJyaWdodCIsImJvdW5kcyIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsIm5hbWUiLCJhdHRyIiwidmFsdWUiLCJyZW1vdmVBdHRyIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZWxlbWVudCIsImJlZm9yZSIsImFmdGVyIiwiZWxlbWVudE9yU3RyaW5nIiwic3RyaW5nIiwicHJlcGVuZCIsImFwcGVuZCIsInNob3ciLCJoaWRlIiwicmVtb3ZlIiwiZGV0YWNoIiwiZW1wdHkiLCJodG1sIiwidW5kZWZpbmVkIiwiY3NzIiwicHJvcGVydHlOYW1lIiwia2V5IiwiZGF0YSIsImZvdW5kRE9NRWxlbWVudHMiLCJmaW5kIiwiZm91bmRFbGVtZW50cyIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiY2hpbGRET01FbGVtZW50cyIsImNoaWxkcmVuIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50IiwicGFyZW50RWxlbWVudHMiLCJmaXJzdFBhcmVudEVsZW1lbnQiLCJmaXJzdCIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnRzIiwiY2xpY2tIYW5kbGVyIiwibmFtZXNwYWNlIiwiYnV0dG9uIiwiTEVGVF9NT1VTRV9CVVRUT04iLCJhbGxvd0RlZmF1bHQiLCJvbiIsIk1JRERMRV9NT1VTRV9CVVRUT04iLCJvZmYiLCJkb3VibGVDbGlja0hhbmRsZXIiLCJmaXJzdEFyZ3VtZW50IiwicmVtYWluaW5nQXJndW1lbnRzIiwiaXNOb3RBQ2xhc3MiLCIkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCIsInNlY29uZEFyZ3VtZW50IiwiSFRNTEVsZW1lbnQiLCJSSUdIVF9NT1VTRV9CVVRUT04iLCJtb2R1bGUiLCJleHBvcnRzIiwiZmlyc3RBcmd1bWVudE5vdEFDbGFzcyIsInVuc2hpZnQiLCJDbGFzcyIsInNoaWZ0IiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJiaW5kIiwiYXBwbHkiLCJBcnJheSIsImNoaWxkU2VsZWN0b3IiLCJwYXJlbnQkRWxlbWVudCIsImRvbUVsZW1lbnRzIiwiZWxlbWVudHMiLCJkb21FbGVtZW50c0xlbmd0aCIsImxlbmd0aCIsImkiLCJwdXNoIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxJQUFJQyxRQUFRLFFBQVIsQ0FBUjs7QUFFQSxJQUFJQyxXQUFXRCxRQUFRLGlCQUFSLENBQWY7QUFBQSxJQUNJRSxTQUFTRixRQUFRLGVBQVIsQ0FEYjtBQUFBLElBRUlHLFFBQVFILFFBQVEsa0JBQVIsQ0FGWjtBQUFBLElBR0lJLFFBQVFKLFFBQVEsa0JBQVIsQ0FIWjtBQUFBLElBSUlLLFNBQVNMLFFBQVEsbUJBQVIsQ0FKYjs7SUFNTU0sTztBQUNKLG1CQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtDLFFBQUwsR0FBZ0JDLHFCQUFxQkYsUUFBckIsQ0FBaEI7O0FBRUEsUUFBSUcsYUFBYVgsRUFBRSxLQUFLUyxRQUFQLEVBQWlCLENBQWpCLENBQWpCLENBSG9CLENBR2tCOztBQUV0Q0UsZUFBV0MsV0FBWCxHQUF5QixJQUF6QixDQUxvQixDQUtXOztBQUUvQlIsVUFBTVMsVUFBTixDQUFpQixJQUFqQjtBQUNBUixVQUFNUSxVQUFOLENBQWlC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QUF4QixFQUFrQztBQUN2Q0MsZUFBV1QsRUFBRVEsUUFBRixDQUFYO0FBQ0QsR0FGTSxNQUVBLElBQUlBLG9CQUFvQlIsQ0FBeEIsRUFBMkI7QUFDaENTLGVBQVdELFFBQVgsQ0FEZ0MsQ0FDVjtBQUN2QixHQUZNLE1BRUEsSUFBSUEsb0JBQW9CMEYsS0FBeEIsRUFBZ0M7QUFDckMsUUFBSTVCLGdCQUFnQjlELFNBQVMsQ0FBVCxDQUFwQjtBQUFBLFFBQWlDO0FBQzdCMkYsb0JBQWdCM0YsU0FBUyxDQUFULENBRHBCO0FBQUEsUUFDa0M7QUFDOUI0RixxQkFBaUI5QixjQUFjN0QsUUFGbkMsQ0FEcUMsQ0FHUzs7QUFFOUNBLGVBQVcyRixlQUFlekMsSUFBZixDQUFvQndDLGFBQXBCLENBQVg7QUFDRDs7QUFFRCxTQUFPMUYsUUFBUDtBQUNEOztBQUVELFNBQVNvRCx1QkFBVCxDQUFpQ3dDLFdBQWpDLEVBQThDO0FBQzVDLE1BQUlDLFdBQVcsRUFBZjtBQUFBLE1BQ0lDLG9CQUFvQkYsWUFBWUcsTUFEcEM7O0FBR0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLGlCQUFwQixFQUF1Q0UsR0FBdkMsRUFBNEM7QUFDMUMsUUFBSTlGLGFBQWEwRixZQUFZSSxDQUFaLENBQWpCO0FBQUEsUUFDSWpFLFVBQVU3QixXQUFXQyxXQUR6Qjs7QUFHQSxRQUFJNEIsWUFBWWEsU0FBaEIsRUFBMkI7QUFDekJpRCxlQUFTSSxJQUFULENBQWNsRSxPQUFkO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPOEQsUUFBUDtBQUNEOztBQUVELFNBQVNqQyxLQUFULENBQWVzQyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxudmFyIFBvc2l0aW9uID0gcmVxdWlyZSgnLi9taXNjL3Bvc2l0aW9uJyksXG4gICAgQm91bmRzID0gcmVxdWlyZSgnLi9taXNjL2JvdW5kcycpLFxuICAgIGV2ZW50ID0gcmVxdWlyZSgnLi9kZWxlZ2F0ZS9ldmVudCcpLFxuICAgIG1vdXNlID0gcmVxdWlyZSgnLi9kZWxlZ2F0ZS9tb3VzZScpLFxuICAgIHJlc2l6ZSA9IHJlcXVpcmUoJy4vZGVsZWdhdGUvcmVzaXplJyk7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICB2YXIgZG9tRWxlbWVudCA9ICQodGhpcy4kZWxlbWVudClbMF07IC8vL1xuXG4gICAgZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7IC8vL1xuXG4gICAgZXZlbnQuaW5pdGlhbGlzZSh0aGlzKTtcbiAgICBtb3VzZS5pbml0aWFsaXNlKHRoaXMpO1xuICAgIHJlc2l6ZS5pbml0aWFsaXNlKHRoaXMpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBFbGVtZW50LmNsb25lKHRoaXMpOyB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdmFyICRwb3NpdGlvbiA9IHRoaXMuJGVsZW1lbnQucG9zaXRpb24oKSxcbiAgICAgICAgdG9wID0gJHBvc2l0aW9uLnRvcCxcbiAgICAgICAgbGVmdCA9ICRwb3NpdGlvbi5sZWZ0LFxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbih0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0Qm91bmRzKGluY2x1ZGVCb3JkZXIgPSBmYWxzZSwgaW5jbHVkZU1hcmdpbiA9IGZhbHNlKSB7XG4gICAgdmFyICRvZmZzZXQgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpLFxuICAgICAgICB0b3AgPSAkb2Zmc2V0LnRvcCwgIC8vL1xuICAgICAgICBsZWZ0ID0gJG9mZnNldC5sZWZ0LCAgLy8vXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aChpbmNsdWRlQm9yZGVyLCBpbmNsdWRlTWFyZ2luKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoaW5jbHVkZUJvcmRlciwgaW5jbHVkZU1hcmdpbiksXG4gICAgICAgIGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gZmFsc2UsIGluY2x1ZGVNYXJnaW4gPSBmYWxzZSkgeyBcbiAgICB2YXIgd2lkdGggPSBpbmNsdWRlQm9yZGVyID8gXG4gICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50Lm91dGVyV2lkdGgoaW5jbHVkZU1hcmdpbikgOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LndpZHRoKCk7XG4gICAgXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG4gIFxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IGZhbHNlLCBpbmNsdWRlTWFyZ2luID0gZmFsc2UpIHtcbiAgICB2YXIgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5vdXRlckhlaWdodChpbmNsdWRlTWFyZ2luKSA6XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LmhlaWdodCgpO1xuICAgIFxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5hdHRyKG5hbWUpOyB9XG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLiRlbGVtZW50LmF0dHIobmFtZSwgdmFsdWUpOyB9XG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cihuYW1lKTsgfVxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpOyB9XG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7IH1cbiAgcmVtb3ZlQ2xhc3NlcygpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygpOyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy4kZWxlbWVudC53aWR0aCh3aWR0aCk7IH1cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLiRlbGVtZW50LmhlaWdodChoZWlnaHQpOyB9XG5cbiAgcHJlcGVuZEJlZm9yZShlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYmVmb3JlKGVsZW1lbnQuJGVsZW1lbnQpOyB9XG4gIGFwcGVuZEFmdGVyKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5hZnRlcihlbGVtZW50LiRlbGVtZW50KTsgfVxuICBcbiAgcHJlcGVuZChlbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBlbGVtZW50T3JTdHJpbmc7IC8vL1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnByZXBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQucHJlcGVuZCgkZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIFxuICBhcHBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0gZWxlbWVudE9yU3RyaW5nOyAvLy9cblxuICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKCRlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBzaG93KCkgeyB0aGlzLiRlbGVtZW50LnNob3coKTsgfVxuICBoaWRlKCkgeyB0aGlzLiRlbGVtZW50LmhpZGUoKTsgfVxuICBlbmFibGUoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTsgfVxuICBkaXNhYmxlKCkgeyB0aGlzLiRlbGVtZW50LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7IH1cbiAgcmVtb3ZlKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZSgpOyB9XG4gIGRldGFjaCgpIHsgdGhpcy4kZWxlbWVudC5kZXRhY2goKTsgfVxuICBlbXB0eSgpIHsgdGhpcy4kZWxlbWVudC5lbXB0eSgpOyB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC5odG1sKGh0bWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGh0bWwgPSB0aGlzLiRlbGVtZW50Lmh0bWwoKTtcblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmICh0eXBlb2YgY3NzID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHByb3BlcnR5TmFtZSA9IGNzcztcblxuICAgICAgY3NzID0gdGhpcy4kZWxlbWVudC5jc3MocHJvcGVydHlOYW1lKTtcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kZWxlbWVudC5jc3MoY3NzKTtcbiAgICB9XG4gIH1cblxuICBkYXRhKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC5kYXRhKGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQuZGF0YShrZXkpO1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZmluZEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIGZvdW5kRE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LmZpbmQoc2VsZWN0b3IpLFxuICAgICAgICBmb3VuZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZm91bmRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZm91bmRFbGVtZW50cztcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgY2hpbGRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oc2VsZWN0b3IpLFxuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudEVsZW1lbnQoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50RE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LnBhcmVudChzZWxlY3RvciksXG4gICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyksXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcGFyZW50RWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50RE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LnBhcmVudHMoc2VsZWN0b3IpLFxuICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50cztcbiAgfVxuXG4gIG9uQ2xpY2soY2xpY2tIYW5kbGVyLCBuYW1lc3BhY2UsIGJ1dHRvbiA9IEVsZW1lbnQuTEVGVF9NT1VTRV9CVVRUT04sIGFsbG93RGVmYXVsdCA9IGZhbHNlKSB7XG4gICAgdGhpcy5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgc3dpdGNoIChidXR0b24pIHtcbiAgICAgICAgY2FzZSBFbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OIDpcbiAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7IC8vL1xuICAgICAgICAgICAgY2xpY2tIYW5kbGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRWxlbWVudC5NSURETEVfTU9VU0VfQlVUVE9OIDpcbiAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAxKSB7IC8vL1xuICAgICAgICAgICAgY2xpY2tIYW5kbGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWxsb3dEZWZhdWx0O1xuICAgIH0sIG5hbWVzcGFjZSk7XG4gIH1cbiAgXG4gIG9mZkNsaWNrKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignY2xpY2snLCBuYW1lc3BhY2UpOyB9XG5cbiAgb25Eb3VibGVDbGljayhkb3VibGVDbGlja0hhbmRsZXIsIG5hbWVzcGFjZSkge1xuICAgIHRoaXMub24oJ2RibGNsaWNrJyxmdW5jdGlvbigpIHtcbiAgICAgIGRvdWJsZUNsaWNrSGFuZGxlcigpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSwgbmFtZXNwYWNlKVxuICB9XG5cbiAgb2ZmRG91YmxlQ2xpY2sobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdkYmxjbGljaycsIG5hbWVzcGFjZSk7IH1cblxuICBzdGF0aWMgY2xvbmUoZmlyc3RBcmd1bWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQpO1xuXG4gICAgZnVuY3Rpb24gaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICgodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB8fCAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudChzZWNvbmRBcmd1bWVudCkge1xuICAgICAgdmFyICRlbGVtZW50ID0gKHR5cGVvZiBzZWNvbmRBcmd1bWVudCA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgJChzZWNvbmRBcmd1bWVudCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRBcmd1bWVudC4kZWxlbWVudDtcblxuICAgICAgcmV0dXJuICRlbGVtZW50LmNsb25lKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGZpcnN0QXJndW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBlbGVtZW50KGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KTtcblxuICAgIGZ1bmN0aW9uIGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudChzZWNvbmRBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICQoc2Vjb25kQXJndW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChmaXJzdEFyZ3VtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gZWxlbWVudChmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCk7XG5cbiAgICBmdW5jdGlvbiBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQoc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAkKHNlY29uZEFyZ3VtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiA9IDE7XG5FbGVtZW50Lk1JRERMRV9NT1VTRV9CVVRUT04gPSAyO1xuRWxlbWVudC5SSUdIVF9NT1VTRV9CVVRUT04gPSAzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQpIHtcbiAgdmFyIGZpcnN0QXJndW1lbnROb3RBQ2xhc3MgPSBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KTtcblxuICBpZiAoZmlyc3RBcmd1bWVudE5vdEFDbGFzcykge1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGZpcnN0QXJndW1lbnQpO1xuICAgIGZpcnN0QXJndW1lbnQgPSBFbGVtZW50O1xuICB9XG5cbiAgdmFyIENsYXNzID0gZmlyc3RBcmd1bWVudCxcbiAgICAgIHNlY29uZEFyZ3VtZW50ID0gcmVtYWluaW5nQXJndW1lbnRzLnNoaWZ0KCksXG4gICAgICAkZWxlbWVudCA9ICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KHNlY29uZEFyZ3VtZW50KTtcblxuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdCgkZWxlbWVudCk7XG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpOyAvLy9cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7ICAvLy9cbn1cblxuZnVuY3Rpb24gJGVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgdmFyICRlbGVtZW50O1xuXG4gIGlmIChmYWxzZSkge1xuXG4gIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICRlbGVtZW50ID0gJChzZWxlY3Rvcik7XG4gIH0gZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiAkKSB7XG4gICAgJGVsZW1lbnQgPSBzZWxlY3RvcjsgIC8vL1xuICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgQXJyYXkgKSB7XG4gICAgdmFyIHBhcmVudEVsZW1lbnQgPSBzZWxlY3RvclswXSwgLy8vXG4gICAgICAgIGNoaWxkU2VsZWN0b3IgPSBzZWxlY3RvclsxXSwgIC8vL1xuICAgICAgICBwYXJlbnQkRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuJGVsZW1lbnQ7ICAvLy9cblxuICAgICRlbGVtZW50ID0gcGFyZW50JEVsZW1lbnQuZmluZChjaGlsZFNlbGVjdG9yKTtcbiAgfVxuXG4gIHJldHVybiAkZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMpIHtcbiAgdmFyIGVsZW1lbnRzID0gW10sXG4gICAgICBkb21FbGVtZW50c0xlbmd0aCA9IGRvbUVsZW1lbnRzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvbUVsZW1lbnRzTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRzW2ldLFxuICAgICAgICBlbGVtZW50ID0gZG9tRWxlbWVudC5fX2VsZW1lbnRfXztcblxuICAgIGlmIChlbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==