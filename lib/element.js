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

    domElement.__instance__ = this;

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
        instance = domElement.__instance__;

    if (instance !== undefined) {
      var element = instance; ///

      elements.push(element);
    }
  }

  return elements;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiUG9zaXRpb24iLCJCb3VuZHMiLCJldmVudCIsIm1vdXNlIiwicmVzaXplIiwiRWxlbWVudCIsInNlbGVjdG9yIiwiJGVsZW1lbnQiLCIkZWxlbWVudEZyb21TZWxlY3RvciIsImRvbUVsZW1lbnQiLCJfX2luc3RhbmNlX18iLCJpbml0aWFsaXNlIiwiY2xvbmUiLCIkcG9zaXRpb24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJpbmNsdWRlQm9yZGVyIiwiaW5jbHVkZU1hcmdpbiIsIiRvZmZzZXQiLCJvZmZzZXQiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiLCJib3VuZHMiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJuYW1lIiwiYXR0ciIsInZhbHVlIiwicmVtb3ZlQXR0ciIsImNsYXNzTmFtZSIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImVsZW1lbnQiLCJiZWZvcmUiLCJhZnRlciIsImVsZW1lbnRPclN0cmluZyIsInN0cmluZyIsInByZXBlbmQiLCJhcHBlbmQiLCJzaG93IiwiaGlkZSIsInJlbW92ZSIsImRldGFjaCIsImVtcHR5IiwiaHRtbCIsInVuZGVmaW5lZCIsImNzcyIsInByb3BlcnR5TmFtZSIsImtleSIsImRhdGEiLCJmb3VuZERPTUVsZW1lbnRzIiwiZmluZCIsImZvdW5kRWxlbWVudHMiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsImNoaWxkRE9NRWxlbWVudHMiLCJjaGlsZHJlbiIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRET01FbGVtZW50cyIsInBhcmVudCIsInBhcmVudEVsZW1lbnRzIiwiZmlyc3RQYXJlbnRFbGVtZW50IiwiZmlyc3QiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50cyIsImNsaWNrSGFuZGxlciIsIm5hbWVzcGFjZSIsImJ1dHRvbiIsIkxFRlRfTU9VU0VfQlVUVE9OIiwiYWxsb3dEZWZhdWx0Iiwib24iLCJNSURETEVfTU9VU0VfQlVUVE9OIiwib2ZmIiwiZG91YmxlQ2xpY2tIYW5kbGVyIiwiZmlyc3RBcmd1bWVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImlzTm90QUNsYXNzIiwiJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQiLCJzZWNvbmRBcmd1bWVudCIsIkhUTUxFbGVtZW50IiwiUklHSFRfTU9VU0VfQlVUVE9OIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpcnN0QXJndW1lbnROb3RBQ2xhc3MiLCJ1bnNoaWZ0IiwiQ2xhc3MiLCJzaGlmdCIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiYmluZCIsImFwcGx5IiwiQXJyYXkiLCJjaGlsZFNlbGVjdG9yIiwicGFyZW50JEVsZW1lbnQiLCJkb21FbGVtZW50cyIsImVsZW1lbnRzIiwiZG9tRWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJpIiwiaW5zdGFuY2UiLCJwdXNoIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxJQUFJQyxRQUFRLFFBQVIsQ0FBUjs7QUFFQSxJQUFJQyxXQUFXRCxRQUFRLGlCQUFSLENBQWY7QUFBQSxJQUNJRSxTQUFTRixRQUFRLGVBQVIsQ0FEYjtBQUFBLElBRUlHLFFBQVFILFFBQVEsa0JBQVIsQ0FGWjtBQUFBLElBR0lJLFFBQVFKLFFBQVEsa0JBQVIsQ0FIWjtBQUFBLElBSUlLLFNBQVNMLFFBQVEsbUJBQVIsQ0FKYjs7SUFNTU0sTztBQUNKLG1CQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtDLFFBQUwsR0FBZ0JDLHFCQUFxQkYsUUFBckIsQ0FBaEI7O0FBRUEsUUFBSUcsYUFBYVgsRUFBRSxLQUFLUyxRQUFQLEVBQWlCLENBQWpCLENBQWpCLENBSG9CLENBR2tCOztBQUV0Q0UsZUFBV0MsWUFBWCxHQUEwQixJQUExQjs7QUFFQVIsVUFBTVMsVUFBTixDQUFpQixJQUFqQjtBQUNBUixVQUFNUSxVQUFOLENBQWlC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QUF4QixFQUFrQztBQUN2Q0MsZUFBV1QsRUFBRVEsUUFBRixDQUFYO0FBQ0QsR0FGTSxNQUVBLElBQUlBLG9CQUFvQlIsQ0FBeEIsRUFBMkI7QUFDaENTLGVBQVdELFFBQVgsQ0FEZ0MsQ0FDVjtBQUN2QixHQUZNLE1BRUEsSUFBSUEsb0JBQW9CMEYsS0FBeEIsRUFBZ0M7QUFDckMsUUFBSTVCLGdCQUFnQjlELFNBQVMsQ0FBVCxDQUFwQjtBQUFBLFFBQWlDO0FBQzdCMkYsb0JBQWdCM0YsU0FBUyxDQUFULENBRHBCO0FBQUEsUUFDa0M7QUFDOUI0RixxQkFBaUI5QixjQUFjN0QsUUFGbkMsQ0FEcUMsQ0FHUzs7QUFFOUNBLGVBQVcyRixlQUFlekMsSUFBZixDQUFvQndDLGFBQXBCLENBQVg7QUFDRDs7QUFFRCxTQUFPMUYsUUFBUDtBQUNEOztBQUVELFNBQVNvRCx1QkFBVCxDQUFpQ3dDLFdBQWpDLEVBQThDO0FBQzVDLE1BQUlDLFdBQVcsRUFBZjtBQUFBLE1BQ0lDLG9CQUFvQkYsWUFBWUcsTUFEcEM7O0FBR0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLGlCQUFwQixFQUF1Q0UsR0FBdkMsRUFBNEM7QUFDMUMsUUFBSTlGLGFBQWEwRixZQUFZSSxDQUFaLENBQWpCO0FBQUEsUUFDSUMsV0FBVy9GLFdBQVdDLFlBRDFCOztBQUdBLFFBQUk4RixhQUFhckQsU0FBakIsRUFBNEI7QUFDMUIsVUFBSWIsVUFBVWtFLFFBQWQsQ0FEMEIsQ0FDRjs7QUFFeEJKLGVBQVNLLElBQVQsQ0FBY25FLE9BQWQ7QUFDRDtBQUNGOztBQUVELFNBQU84RCxRQUFQO0FBQ0Q7O0FBRUQsU0FBU2pDLEtBQVQsQ0FBZXVDLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgUG9zaXRpb24gPSByZXF1aXJlKCcuL21pc2MvcG9zaXRpb24nKSxcbiAgICBCb3VuZHMgPSByZXF1aXJlKCcuL21pc2MvYm91bmRzJyksXG4gICAgZXZlbnQgPSByZXF1aXJlKCcuL2RlbGVnYXRlL2V2ZW50JyksXG4gICAgbW91c2UgPSByZXF1aXJlKCcuL2RlbGVnYXRlL21vdXNlJyksXG4gICAgcmVzaXplID0gcmVxdWlyZSgnLi9kZWxlZ2F0ZS9yZXNpemUnKTtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIHZhciBkb21FbGVtZW50ID0gJCh0aGlzLiRlbGVtZW50KVswXTsgLy8vXG5cbiAgICBkb21FbGVtZW50Ll9faW5zdGFuY2VfXyA9IHRoaXM7XG5cbiAgICBldmVudC5pbml0aWFsaXNlKHRoaXMpO1xuICAgIG1vdXNlLmluaXRpYWxpc2UodGhpcyk7XG4gICAgcmVzaXplLmluaXRpYWxpc2UodGhpcyk7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB2YXIgJHBvc2l0aW9uID0gdGhpcy4kZWxlbWVudC5wb3NpdGlvbigpLFxuICAgICAgICB0b3AgPSAkcG9zaXRpb24udG9wLFxuICAgICAgICBsZWZ0ID0gJHBvc2l0aW9uLmxlZnQsXG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBnZXRCb3VuZHMoaW5jbHVkZUJvcmRlciA9IGZhbHNlLCBpbmNsdWRlTWFyZ2luID0gZmFsc2UpIHtcbiAgICB2YXIgJG9mZnNldCA9IHRoaXMuJGVsZW1lbnQub2Zmc2V0KCksXG4gICAgICAgIHRvcCA9ICRvZmZzZXQudG9wLCAgLy8vXG4gICAgICAgIGxlZnQgPSAkb2Zmc2V0LmxlZnQsICAvLy9cbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKGluY2x1ZGVCb3JkZXIsIGluY2x1ZGVNYXJnaW4pLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodChpbmNsdWRlQm9yZGVyLCBpbmNsdWRlTWFyZ2luKSxcbiAgICAgICAgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSBmYWxzZSwgaW5jbHVkZU1hcmdpbiA9IGZhbHNlKSB7IFxuICAgIHZhciB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgPyBcbiAgICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQub3V0ZXJXaWR0aChpbmNsdWRlTWFyZ2luKSA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQud2lkdGgoKTtcbiAgICBcbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cbiAgXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gZmFsc2UsIGluY2x1ZGVNYXJnaW4gPSBmYWxzZSkge1xuICAgIHZhciBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50Lm91dGVySGVpZ2h0KGluY2x1ZGVNYXJnaW4pIDpcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuaGVpZ2h0KCk7XG4gICAgXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LmF0dHIobmFtZSk7IH1cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lLCB2YWx1ZSk7IH1cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKG5hbWUpOyB9XG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWUpOyB9XG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LmFkZENsYXNzKGNsYXNzTmFtZSk7IH1cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICByZW1vdmVDbGFzc2VzKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCk7IH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLiRlbGVtZW50LndpZHRoKHdpZHRoKTsgfVxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuJGVsZW1lbnQuaGVpZ2h0KGhlaWdodCk7IH1cblxuICBwcmVwZW5kQmVmb3JlKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5iZWZvcmUoZWxlbWVudC4kZWxlbWVudCk7IH1cbiAgYXBwZW5kQWZ0ZXIoZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmFmdGVyKGVsZW1lbnQuJGVsZW1lbnQpOyB9XG4gIFxuICBwcmVwZW5kKGVsZW1lbnRPclN0cmluZykge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHN0cmluZyA9IGVsZW1lbnRPclN0cmluZzsgLy8vXG5cbiAgICAgIHRoaXMuJGVsZW1lbnQucHJlcGVuZChzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRPclN0cmluZywgIC8vL1xuICAgICAgICAgICRlbGVtZW50ID0gZWxlbWVudC4kZWxlbWVudDtcblxuICAgICAgdGhpcy4kZWxlbWVudC5wcmVwZW5kKCRlbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgXG4gIGFwcGVuZChlbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBlbGVtZW50T3JTdHJpbmc7IC8vL1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZChzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRPclN0cmluZywgIC8vL1xuICAgICAgICAgICRlbGVtZW50ID0gZWxlbWVudC4kZWxlbWVudDtcblxuICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoJGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7IHRoaXMuJGVsZW1lbnQuc2hvdygpOyB9XG4gIGhpZGUoKSB7IHRoaXMuJGVsZW1lbnQuaGlkZSgpOyB9XG4gIGVuYWJsZSgpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyB9XG4gIGRpc2FibGUoKSB7IHRoaXMuJGVsZW1lbnQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTsgfVxuICByZW1vdmUoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlKCk7IH1cbiAgZGV0YWNoKCkgeyB0aGlzLiRlbGVtZW50LmRldGFjaCgpOyB9XG4gIGVtcHR5KCkgeyB0aGlzLiRlbGVtZW50LmVtcHR5KCk7IH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lmh0bWwoaHRtbClcbiAgICB9IGVsc2Uge1xuICAgICAgaHRtbCA9IHRoaXMuJGVsZW1lbnQuaHRtbCgpO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgcHJvcGVydHlOYW1lID0gY3NzO1xuXG4gICAgICBjc3MgPSB0aGlzLiRlbGVtZW50LmNzcyhwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmNzcyhjc3MpO1xuICAgIH1cbiAgfVxuXG4gIGRhdGEoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmRhdGEoa2V5LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gdGhpcy4kZWxlbWVudC5kYXRhKGtleSk7XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBmaW5kRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgZm91bmRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuZmluZChzZWxlY3RvciksXG4gICAgICAgIGZvdW5kRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhmb3VuZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmb3VuZEVsZW1lbnRzO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBjaGlsZERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbihzZWxlY3RvciksXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50RWxlbWVudChzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQucGFyZW50KHNlbGVjdG9yKSxcbiAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKSxcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBwYXJlbnRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQucGFyZW50cyhzZWxlY3RvciksXG4gICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnRzO1xuICB9XG5cbiAgb25DbGljayhjbGlja0hhbmRsZXIsIG5hbWVzcGFjZSwgYnV0dG9uID0gRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiwgYWxsb3dEZWZhdWx0ID0gZmFsc2UpIHtcbiAgICB0aGlzLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBzd2l0Y2ggKGJ1dHRvbikge1xuICAgICAgICBjYXNlIEVsZW1lbnQuTEVGVF9NT1VTRV9CVVRUT04gOlxuICAgICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHsgLy8vXG4gICAgICAgICAgICBjbGlja0hhbmRsZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBFbGVtZW50Lk1JRERMRV9NT1VTRV9CVVRUT04gOlxuICAgICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDEpIHsgLy8vXG4gICAgICAgICAgICBjbGlja0hhbmRsZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhbGxvd0RlZmF1bHQ7XG4gICAgfSwgbmFtZXNwYWNlKTtcbiAgfVxuICBcbiAgb2ZmQ2xpY2sobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdjbGljaycsIG5hbWVzcGFjZSk7IH1cblxuICBvbkRvdWJsZUNsaWNrKGRvdWJsZUNsaWNrSGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgdGhpcy5vbignZGJsY2xpY2snLGZ1bmN0aW9uKCkge1xuICAgICAgZG91YmxlQ2xpY2tIYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LCBuYW1lc3BhY2UpXG4gIH1cblxuICBvZmZEb3VibGVDbGljayhuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ2RibGNsaWNrJywgbmFtZXNwYWNlKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShmaXJzdEFyZ3VtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gZWxlbWVudChmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCk7XG5cbiAgICBmdW5jdGlvbiBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gKCh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpIHx8IChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICB2YXIgJGVsZW1lbnQgPSAodHlwZW9mIHNlY29uZEFyZ3VtZW50ID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAkKHNlY29uZEFyZ3VtZW50KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZEFyZ3VtZW50LiRlbGVtZW50O1xuXG4gICAgICByZXR1cm4gJGVsZW1lbnQuY2xvbmUoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoZmlyc3RBcmd1bWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQpO1xuXG4gICAgZnVuY3Rpb24gaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gJChzZWNvbmRBcmd1bWVudCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGZpcnN0QXJndW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBlbGVtZW50KGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KTtcblxuICAgIGZ1bmN0aW9uIGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudChzZWNvbmRBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICQoc2Vjb25kQXJndW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OID0gMTtcbkVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA9IDI7XG5FbGVtZW50LlJJR0hUX01PVVNFX0JVVFRPTiA9IDM7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gZWxlbWVudChmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCkge1xuICB2YXIgZmlyc3RBcmd1bWVudE5vdEFDbGFzcyA9IGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpO1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50Tm90QUNsYXNzKSB7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZmlyc3RBcmd1bWVudCk7XG4gICAgZmlyc3RBcmd1bWVudCA9IEVsZW1lbnQ7XG4gIH1cblxuICB2YXIgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LFxuICAgICAgc2Vjb25kQXJndW1lbnQgPSByZW1haW5pbmdBcmd1bWVudHMuc2hpZnQoKSxcbiAgICAgICRlbGVtZW50ID0gJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQoc2Vjb25kQXJndW1lbnQpO1xuXG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KCRlbGVtZW50KTtcbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7IC8vL1xuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTsgIC8vL1xufVxuXG5mdW5jdGlvbiAkZWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICB2YXIgJGVsZW1lbnQ7XG5cbiAgaWYgKGZhbHNlKSB7XG5cbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgJGVsZW1lbnQgPSAkKHNlbGVjdG9yKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mICQpIHtcbiAgICAkZWxlbWVudCA9IHNlbGVjdG9yOyAgLy8vXG4gIH0gZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBBcnJheSApIHtcbiAgICB2YXIgcGFyZW50RWxlbWVudCA9IHNlbGVjdG9yWzBdLCAvLy9cbiAgICAgICAgY2hpbGRTZWxlY3RvciA9IHNlbGVjdG9yWzFdLCAgLy8vXG4gICAgICAgIHBhcmVudCRFbGVtZW50ID0gcGFyZW50RWxlbWVudC4kZWxlbWVudDsgIC8vL1xuXG4gICAgJGVsZW1lbnQgPSBwYXJlbnQkRWxlbWVudC5maW5kKGNoaWxkU2VsZWN0b3IpO1xuICB9XG5cbiAgcmV0dXJuICRlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICB2YXIgZWxlbWVudHMgPSBbXSxcbiAgICAgIGRvbUVsZW1lbnRzTGVuZ3RoID0gZG9tRWxlbWVudHMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9tRWxlbWVudHNMZW5ndGg7IGkrKykge1xuICAgIHZhciBkb21FbGVtZW50ID0gZG9tRWxlbWVudHNbaV0sXG4gICAgICAgIGluc3RhbmNlID0gZG9tRWxlbWVudC5fX2luc3RhbmNlX187XG5cbiAgICBpZiAoaW5zdGFuY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBpbnN0YW5jZTsgLy8vXG4gICAgICBcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==