'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var Bounds = require('./bounds'),
    Position = require('./position');

var Element = function () {
  function Element(selectorOrSomething) {
    _classCallCheck(this, Element);

    this.$element = to$Element(selectorOrSomething);

    this.data('element', this);
  }

  _createClass(Element, [{
    key: 'clone',
    value: function clone() {
      return Element.clone(this);
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
    key: 'getWidth',
    value: function getWidth() {
      return this.$element.width();
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.$element.height();
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
      var $offset = this.$element.offset(),
          top = $offset.top,
          ///
      left = $offset.left,
          ///
      width = this.getWidth(),
          height = this.getHeight(),
          bottom = top + height,
          right = left + width,
          bounds = new Bounds(top, left, bottom, right);

      return bounds;
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
    key: 'html',
    value: function html(_html) {
      if (arguments.length === 1) {
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
    value: function data() {
      var argumentsLength = arguments.length,
          key = arguments[0],
          value;

      if (argumentsLength === 1) {
        value = this.$element.data(key);

        return value;
      } else {
        value = arguments[1];

        this.$element.data(key, value);
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
    key: 'on',
    value: function on(events, handler, namespace) {
      if (namespace !== undefined) {
        events = events + '.' + namespace;
      }

      this.$element.on(events, handler);
    }
  }, {
    key: 'off',
    value: function off(events, namespace) {
      if (namespace !== undefined) {
        events = events + '.' + namespace;
      }

      this.$element.off(events);
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(mouseUpHandler, namespace) {
      this.on('mouseup', returnMouseEventHandler(mouseUpHandler), namespace);
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(mouseDownHandler, namespace) {
      this.on('mousedown', returnMouseEventHandler(mouseDownHandler), namespace);
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver(mouseOverHandler, namespace) {
      this.on('mouseover', returnMouseEventHandler(mouseOverHandler), namespace);
    }
  }, {
    key: 'onMouseOut',
    value: function onMouseOut(mouseOutHandler, namespace) {
      this.on('mouseout', returnMouseEventHandler(mouseOutHandler), namespace);
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(mouseMoveHandler, namespace) {
      this.on('mousemove', returnMouseEventHandler(mouseMoveHandler), namespace);
    }
  }, {
    key: 'offMouseUp',
    value: function offMouseUp(namespace) {
      this.off('mouseup', namespace);
    }
  }, {
    key: 'offMouseDown',
    value: function offMouseDown(namespace) {
      this.off('mousedown', namespace);
    }
  }, {
    key: 'offMouseOver',
    value: function offMouseOver(namespace) {
      this.off('mouseover', namespace);
    }
  }, {
    key: 'offMouseOut',
    value: function offMouseOut(namespace) {
      this.off('mouseout', namespace);
    }
  }, {
    key: 'offMouseMove',
    value: function offMouseMove(namespace) {
      this.off('mousemove', namespace);
    }
  }], [{
    key: 'clone',
    value: function clone(firstArgument) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }

      return instance(firstArgument, remainingArguments, isNotAClass, to$Element);

      function isNotAClass(firstArgument) {
        return typeof firstArgument === 'string' || firstArgument instanceof Element;
      }

      function to$Element(secondArgument) {
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

      return instance(firstArgument, remainingArguments, isNotAClass, to$Element);

      function isNotAClass(firstArgument) {
        return typeof firstArgument === 'string';
      }

      function to$Element(secondArgument) {
        return $(secondArgument);
      }
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(firstArgument) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 1] = arguments[_key3];
      }

      return instance(firstArgument, remainingArguments, isNotAClass, to$Element);

      function isNotAClass(firstArgument) {
        return firstArgument instanceof HTMLElement;
      }

      function to$Element(secondArgument) {
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

function to$Element(selectorOrSomething) {
  var $element;

  if (false) {} else if (typeof selectorOrSomething === 'string') {
    $element = $(selectorOrSomething);
  } else if (selectorOrSomething instanceof $) {
    $element = selectorOrSomething; ///
  } else if (selectorOrSomething instanceof Array) {
    var parentElement = selectorOrSomething[0],
        ///
    childSelector = selectorOrSomething[1],
        ///
    parent$Element = parentElement.$element; ///

    $element = parent$Element.find(childSelector);
  }

  return $element;
}

function returnMouseEventHandler(handler) {
  return function (event) {
    var mouseTop = event.pageY,
        ///
    mouseLeft = event.pageX,
        ///
    mouseButton = event.which; ///

    handler(mouseTop, mouseLeft, mouseButton);
  };
}

function elementsFromDOMElements(domElements) {
  var elements = [],
      domElementsLength = domElements.length;

  for (var i = 0; i < domElementsLength; i++) {
    var domElement = domElements[i],
        $element = $(domElement),
        element = $element.data('element');

    if (element) {
      elements.push(element);
    }
  }

  return elements;
}

function instance(firstArgument, remainingArguments, isNotAClass, to$Element) {
  if (isNotAClass(firstArgument)) {
    remainingArguments.unshift(firstArgument);
    firstArgument = Element;
  }

  var Class = firstArgument,
      secondArgument = remainingArguments.shift(),
      $element = to$Element(secondArgument);

  remainingArguments.unshift($element);
  remainingArguments.unshift(null); ///

  return new (Function.prototype.bind.apply(Class, remainingArguments))(); ///
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiQm91bmRzIiwiUG9zaXRpb24iLCJFbGVtZW50Iiwic2VsZWN0b3JPclNvbWV0aGluZyIsIiRlbGVtZW50IiwidG8kRWxlbWVudCIsImRhdGEiLCJjbG9uZSIsInNob3ciLCJoaWRlIiwicmVtb3ZlQXR0ciIsImF0dHIiLCJyZW1vdmUiLCJkZXRhY2giLCJlbXB0eSIsIndpZHRoIiwiaGVpZ2h0IiwiJHBvc2l0aW9uIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiJG9mZnNldCIsIm9mZnNldCIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiLCJib3VuZHMiLCJuYW1lIiwidmFsdWUiLCJlbGVtZW50IiwiYmVmb3JlIiwiYWZ0ZXIiLCJlbGVtZW50T3JTdHJpbmciLCJzdHJpbmciLCJwcmVwZW5kIiwiYXBwZW5kIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaHRtbCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNzcyIsInByb3BlcnR5TmFtZSIsImFyZ3VtZW50c0xlbmd0aCIsImtleSIsInNlbGVjdG9yIiwiZm91bmRET01FbGVtZW50cyIsImZpbmQiLCJmb3VuZEVsZW1lbnRzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJjaGlsZERPTUVsZW1lbnRzIiwiY2hpbGRyZW4iLCJjaGlsZEVsZW1lbnRzIiwicGFyZW50RE9NRWxlbWVudHMiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50cyIsImZpcnN0UGFyZW50RWxlbWVudCIsImZpcnN0IiwicGFyZW50RWxlbWVudCIsInBhcmVudHMiLCJldmVudHMiLCJoYW5kbGVyIiwibmFtZXNwYWNlIiwidW5kZWZpbmVkIiwib24iLCJvZmYiLCJtb3VzZVVwSGFuZGxlciIsInJldHVybk1vdXNlRXZlbnRIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJtb3VzZU91dEhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwiZmlyc3RBcmd1bWVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImluc3RhbmNlIiwiaXNOb3RBQ2xhc3MiLCJzZWNvbmRBcmd1bWVudCIsIkhUTUxFbGVtZW50IiwiTEVGVF9NT1VTRV9CVVRUT04iLCJNSURETEVfTU9VU0VfQlVUVE9OIiwiUklHSFRfTU9VU0VfQlVUVE9OIiwibW9kdWxlIiwiZXhwb3J0cyIsIkFycmF5IiwiY2hpbGRTZWxlY3RvciIsInBhcmVudCRFbGVtZW50IiwiZXZlbnQiLCJtb3VzZVRvcCIsInBhZ2VZIiwibW91c2VMZWZ0IiwicGFnZVgiLCJtb3VzZUJ1dHRvbiIsIndoaWNoIiwiZG9tRWxlbWVudHMiLCJlbGVtZW50cyIsImRvbUVsZW1lbnRzTGVuZ3RoIiwiaSIsImRvbUVsZW1lbnQiLCJwdXNoIiwidW5zaGlmdCIsIkNsYXNzIiwic2hpZnQiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsImJpbmQiLCJhcHBseSIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxRQUFSLENBQVI7O0FBRUEsSUFBSUMsU0FBU0QsUUFBUSxVQUFSLENBQWI7QUFBQSxJQUNJRSxXQUFXRixRQUFRLFlBQVIsQ0FEZjs7SUFHTUcsTztBQUNKLG1CQUFZQyxtQkFBWixFQUFpQztBQUFBOztBQUMvQixTQUFLQyxRQUFMLEdBQWdCQyxXQUFXRixtQkFBWCxDQUFoQjs7QUFFQSxTQUFLRyxJQUFMLENBQVUsU0FBVixFQUFxQixJQUFyQjtBQUNEOzs7OzRCQUVPO0FBQUUsYUFBT0osUUFBUUssS0FBUixDQUFjLElBQWQsQ0FBUDtBQUE2Qjs7OzJCQUVoQztBQUFFLFdBQUtILFFBQUwsQ0FBY0ksSUFBZDtBQUF1Qjs7OzJCQUN6QjtBQUFFLFdBQUtKLFFBQUwsQ0FBY0ssSUFBZDtBQUF1Qjs7OzZCQUN2QjtBQUFFLFdBQUtMLFFBQUwsQ0FBY00sVUFBZCxDQUF5QixVQUF6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RCxTQUFTaEIsS0FBVCxDQUFlaUQsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbnZhciBCb3VuZHMgPSByZXF1aXJlKCcuL2JvdW5kcycpLFxuICAgIFBvc2l0aW9uID0gcmVxdWlyZSgnLi9wb3NpdGlvbicpO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPclNvbWV0aGluZykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSB0byRFbGVtZW50KHNlbGVjdG9yT3JTb21ldGhpbmcpO1xuXG4gICAgdGhpcy5kYXRhKCdlbGVtZW50JywgdGhpcyk7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cblxuICBzaG93KCkgeyB0aGlzLiRlbGVtZW50LnNob3coKTsgfVxuICBoaWRlKCkgeyB0aGlzLiRlbGVtZW50LmhpZGUoKTsgfVxuICBlbmFibGUoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTsgfVxuICBkaXNhYmxlKCkgeyB0aGlzLiRlbGVtZW50LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7IH1cbiAgcmVtb3ZlKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZSgpOyB9XG4gIGRldGFjaCgpIHsgdGhpcy4kZWxlbWVudC5kZXRhY2goKTsgfVxuICBlbXB0eSgpIHsgdGhpcy4kZWxlbWVudC5lbXB0eSgpOyB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LndpZHRoKCk7IH1cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5oZWlnaHQoKTsgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHZhciAkcG9zaXRpb24gPSB0aGlzLiRlbGVtZW50LnBvc2l0aW9uKCksXG4gICAgICAgIHRvcCA9ICRwb3NpdGlvbi50b3AsXG4gICAgICAgIGxlZnQgPSAkcG9zaXRpb24ubGVmdCxcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24odG9wLCBsZWZ0KTtcbiAgICBcbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgdmFyICRvZmZzZXQgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpLFxuICAgICAgICB0b3AgPSAkb2Zmc2V0LnRvcCwgIC8vL1xuICAgICAgICBsZWZ0ID0gJG9mZnNldC5sZWZ0LCAgLy8vXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICBib3R0b20gPSB0b3AgKyBoZWlnaHQsXG4gICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy4kZWxlbWVudC53aWR0aCh3aWR0aCk7IH1cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLiRlbGVtZW50LmhlaWdodChoZWlnaHQpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lKTsgfVxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy4kZWxlbWVudC5hdHRyKG5hbWUsIHZhbHVlKTsgfVxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIobmFtZSk7IH1cbiAgcHJlcGVuZEJlZm9yZShlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYmVmb3JlKGVsZW1lbnQuJGVsZW1lbnQpOyB9XG4gIGFwcGVuZEFmdGVyKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5hZnRlcihlbGVtZW50LiRlbGVtZW50KTsgfVxuICBcbiAgcHJlcGVuZChlbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBlbGVtZW50T3JTdHJpbmc7IC8vL1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnByZXBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQucHJlcGVuZCgkZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIFxuICBhcHBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0gZWxlbWVudE9yU3RyaW5nOyAvLy9cblxuICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKCRlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpOyB9XG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7IH1cbiAgcmVtb3ZlQ2xhc3NlcygpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygpOyB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuaHRtbChodG1sKVxuICAgIH0gZWxzZSB7XG4gICAgICBodG1sID0gdGhpcy4kZWxlbWVudC5odG1sKCk7XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSBjc3M7XG5cbiAgICAgIGNzcyA9IHRoaXMuJGVsZW1lbnQuY3NzKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKGNzcyk7XG4gICAgfVxuICB9XG5cbiAgZGF0YSgpIHtcbiAgICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAga2V5ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICB2YWx1ZTtcblxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICAgIHZhbHVlID0gdGhpcy4kZWxlbWVudC5kYXRhKGtleSk7XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuZGF0YShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBmaW5kRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgZm91bmRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuZmluZChzZWxlY3RvciksXG4gICAgICAgIGZvdW5kRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhmb3VuZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmb3VuZEVsZW1lbnRzO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBjaGlsZERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbihzZWxlY3RvciksXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50RWxlbWVudChzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQucGFyZW50KHNlbGVjdG9yKSxcbiAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKSxcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBwYXJlbnRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQucGFyZW50cyhzZWxlY3RvciksXG4gICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnRzO1xuICB9XG5cbiAgb24oZXZlbnRzLCBoYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICBpZiAobmFtZXNwYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGV2ZW50cyA9IGV2ZW50cyArICcuJyArIG5hbWVzcGFjZTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy4kZWxlbWVudC5vbihldmVudHMsIGhhbmRsZXIpOyBcbiAgfVxuICBcbiAgb2ZmKGV2ZW50cywgbmFtZXNwYWNlKSB7XG4gICAgaWYgKG5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBldmVudHMgPSBldmVudHMgKyAnLicgKyBuYW1lc3BhY2U7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuJGVsZW1lbnQub2ZmKGV2ZW50cyk7XG4gIH1cblxuICBvbk1vdXNlVXAobW91c2VVcEhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZXVwJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIobW91c2VVcEhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZWRvd24nLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihtb3VzZURvd25IYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuICBvbk1vdXNlT3Zlcihtb3VzZU92ZXJIYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2VvdmVyJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIobW91c2VPdmVySGFuZGxlciksIG5hbWVzcGFjZSk7IH1cbiAgb25Nb3VzZU91dChtb3VzZU91dEhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZW91dCcsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlT3V0SGFuZGxlciksIG5hbWVzcGFjZSk7IH1cbiAgb25Nb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlciwgbmFtZXNwYWNlKSB7IHRoaXMub24oJ21vdXNlbW92ZScsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG5cbiAgb2ZmTW91c2VVcChuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ21vdXNldXAnLCBuYW1lc3BhY2UpOyB9XG4gIG9mZk1vdXNlRG93bihuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ21vdXNlZG93bicsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VPdmVyKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2VvdmVyJywgbmFtZXNwYWNlKTsgfVxuICBvZmZNb3VzZU91dChuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ21vdXNlb3V0JywgbmFtZXNwYWNlKTsgfVxuICBvZmZNb3VzZU1vdmUobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZW1vdmUnLCBuYW1lc3BhY2UpOyB9XG5cbiAgc3RhdGljIGNsb25lKGZpcnN0QXJndW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCB0byRFbGVtZW50KTtcblxuICAgIGZ1bmN0aW9uIGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAoKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykgfHwgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG8kRWxlbWVudChzZWNvbmRBcmd1bWVudCkge1xuICAgICAgdmFyICRlbGVtZW50ID0gKHR5cGVvZiBzZWNvbmRBcmd1bWVudCA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAkKHNlY29uZEFyZ3VtZW50KSA6XG4gICAgICAgICAgc2Vjb25kQXJndW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHJldHVybiAkZWxlbWVudC5jbG9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChmaXJzdEFyZ3VtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgdG8kRWxlbWVudCk7XG5cbiAgICBmdW5jdGlvbiBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG8kRWxlbWVudChzZWNvbmRBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICQoc2Vjb25kQXJndW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChmaXJzdEFyZ3VtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgdG8kRWxlbWVudCk7XG5cbiAgICBmdW5jdGlvbiBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG8kRWxlbWVudChzZWNvbmRBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICQoc2Vjb25kQXJndW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OID0gMTtcbkVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA9IDI7XG5FbGVtZW50LlJJR0hUX01PVVNFX0JVVFRPTiA9IDM7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gdG8kRWxlbWVudChzZWxlY3Rvck9yU29tZXRoaW5nKSB7XG4gIHZhciAkZWxlbWVudDtcblxuICBpZiAoZmFsc2UpIHtcblxuICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3Rvck9yU29tZXRoaW5nID09PSAnc3RyaW5nJykge1xuICAgICRlbGVtZW50ID0gJChzZWxlY3Rvck9yU29tZXRoaW5nKTtcbiAgfSBlbHNlIGlmIChzZWxlY3Rvck9yU29tZXRoaW5nIGluc3RhbmNlb2YgJCkge1xuICAgICRlbGVtZW50ID0gc2VsZWN0b3JPclNvbWV0aGluZzsgIC8vL1xuICB9IGVsc2UgaWYgKHNlbGVjdG9yT3JTb21ldGhpbmcgaW5zdGFuY2VvZiBBcnJheSApIHtcbiAgICB2YXIgcGFyZW50RWxlbWVudCA9IHNlbGVjdG9yT3JTb21ldGhpbmdbMF0sIC8vL1xuICAgICAgICBjaGlsZFNlbGVjdG9yID0gc2VsZWN0b3JPclNvbWV0aGluZ1sxXSwgIC8vL1xuICAgICAgICBwYXJlbnQkRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuJGVsZW1lbnQ7ICAvLy9cblxuICAgICRlbGVtZW50ID0gcGFyZW50JEVsZW1lbnQuZmluZChjaGlsZFNlbGVjdG9yKTtcbiAgfVxuXG4gIHJldHVybiAkZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQud2hpY2g7IC8vL1xuXG4gICAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0LCBtb3VzZUJ1dHRvbik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIHZhciBlbGVtZW50cyA9IFtdLFxuICAgICAgZG9tRWxlbWVudHNMZW5ndGggPSBkb21FbGVtZW50cy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb21FbGVtZW50c0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSBkb21FbGVtZW50c1tpXSxcbiAgICAgICAgJGVsZW1lbnQgPSAkKGRvbUVsZW1lbnQpLFxuICAgICAgICBlbGVtZW50ID0gJGVsZW1lbnQuZGF0YSgnZWxlbWVudCcpO1xuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCB0byRFbGVtZW50KSB7XG4gIGlmIChpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSkge1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGZpcnN0QXJndW1lbnQpO1xuICAgIGZpcnN0QXJndW1lbnQgPSBFbGVtZW50O1xuICB9XG5cbiAgdmFyIENsYXNzID0gZmlyc3RBcmd1bWVudCxcbiAgICAgIHNlY29uZEFyZ3VtZW50ID0gcmVtYWluaW5nQXJndW1lbnRzLnNoaWZ0KCksXG4gICAgICAkZWxlbWVudCA9IHRvJEVsZW1lbnQoc2Vjb25kQXJndW1lbnQpO1xuXG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KCRlbGVtZW50KTtcbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7IC8vL1xuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTsgIC8vL1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==