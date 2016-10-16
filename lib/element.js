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
    value: function onMouseUp(handler, namespace) {
      this.on('mouseup', returnMouseEventHandler(handler), namespace);
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(handler, namespace) {
      this.on('mousedown', returnMouseEventHandler(handler), namespace);
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver(handler, namespace) {
      this.on('mouseover', returnMouseEventHandler(handler), namespace);
    }
  }, {
    key: 'onMouseOut',
    value: function onMouseOut(handler, namespace) {
      this.on('mouseout', returnMouseEventHandler(handler), namespace);
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(handler, namespace) {
      this.on('mousemove', returnMouseEventHandler(handler), namespace);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiQm91bmRzIiwiUG9zaXRpb24iLCJFbGVtZW50Iiwic2VsZWN0b3JPclNvbWV0aGluZyIsIiRlbGVtZW50IiwidG8kRWxlbWVudCIsImRhdGEiLCJjbG9uZSIsInNob3ciLCJoaWRlIiwicmVtb3ZlQXR0ciIsImF0dHIiLCJyZW1vdmUiLCJkZXRhY2giLCJlbXB0eSIsIndpZHRoIiwiaGVpZ2h0IiwiJHBvc2l0aW9uIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiJG9mZnNldCIsIm9mZnNldCIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiLCJib3VuZHMiLCJuYW1lIiwidmFsdWUiLCJlbGVtZW50IiwiYmVmb3JlIiwiYWZ0ZXIiLCJlbGVtZW50T3JTdHJpbmciLCJzdHJpbmciLCJwcmVwZW5kIiwiYXBwZW5kIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaHRtbCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNzcyIsInByb3BlcnR5TmFtZSIsImFyZ3VtZW50c0xlbmd0aCIsImtleSIsInNlbGVjdG9yIiwiZm91bmRET01FbGVtZW50cyIsImZpbmQiLCJmb3VuZEVsZW1lbnRzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJjaGlsZERPTUVsZW1lbnRzIiwiY2hpbGRyZW4iLCJjaGlsZEVsZW1lbnRzIiwicGFyZW50RE9NRWxlbWVudHMiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50cyIsImZpcnN0UGFyZW50RWxlbWVudCIsImZpcnN0IiwicGFyZW50RWxlbWVudCIsInBhcmVudHMiLCJldmVudHMiLCJoYW5kbGVyIiwibmFtZXNwYWNlIiwidW5kZWZpbmVkIiwib24iLCJvZmYiLCJyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlciIsImZpcnN0QXJndW1lbnQiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJpbnN0YW5jZSIsImlzTm90QUNsYXNzIiwic2Vjb25kQXJndW1lbnQiLCJIVE1MRWxlbWVudCIsIkxFRlRfTU9VU0VfQlVUVE9OIiwiTUlERExFX01PVVNFX0JVVFRPTiIsIlJJR0hUX01PVVNFX0JVVFRPTiIsIm1vZHVsZSIsImV4cG9ydHMiLCJBcnJheSIsImNoaWxkU2VsZWN0b3IiLCJwYXJlbnQkRWxlbWVudCIsImV2ZW50IiwibW91c2VUb3AiLCJwYWdlWSIsIm1vdXNlTGVmdCIsInBhZ2VYIiwibW91c2VCdXR0b24iLCJ3aGljaCIsImRvbUVsZW1lbnRzIiwiZWxlbWVudHMiLCJkb21FbGVtZW50c0xlbmd0aCIsImkiLCJkb21FbGVtZW50IiwicHVzaCIsInVuc2hpZnQiLCJDbGFzcyIsInNoaWZ0IiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJiaW5kIiwiYXBwbHkiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsUUFBUixDQUFSOztBQUVBLElBQUlDLFNBQVNELFFBQVEsVUFBUixDQUFiO0FBQUEsSUFDSUUsV0FBV0YsUUFBUSxZQUFSLENBRGY7O0lBR01HLE87QUFDSixtQkFBWUMsbUJBQVosRUFBaUM7QUFBQTs7QUFDL0IsU0FBS0MsUUFBTCxHQUFnQkMsV0FBV0YsbUJBQVgsQ0FBaEI7O0FBRUEsU0FBS0csSUFBTCxDQUFVLFNBQVYsRUFBcUIsSUFBckI7QUFDRDs7Ozs0QkFFTztBQUFFLGFBQU9KLFFBQVFLLEtBQVIsQ0FBYyxJQUFkLENBQVA7QUFBNkI7OzsyQkFFaEM7QUFBRSxXQUFLSCxRQUFMLENBQWNJLElBQWQ7QUFBdUI7OzsyQkFDekI7QUFBRSxXQUFLSixRQUFMLENBQWNLLElBQWQ7QUFBdUI7Ozs2QkFDdkI7QUFBRSxXQUFLTCxRQUFMLENBQWNNLFVBQWQsQ0FBeUIsVUFBekI7QUFBdUM7Ozs4QkFDeEM7QUFBRSxXQUFLTixRQUFMLENBQWNPLElBQWQsQ0FBbUIsVUFBbkIsRUFBK0IsSUFBL0I7QUFBdUM7Ozs2QkFDMUM7QUFBRSxXQUFL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J3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgQm91bmRzID0gcmVxdWlyZSgnLi9ib3VuZHMnKSxcbiAgICBQb3NpdGlvbiA9IHJlcXVpcmUoJy4vcG9zaXRpb24nKTtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JTb21ldGhpbmcpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gdG8kRWxlbWVudChzZWxlY3Rvck9yU29tZXRoaW5nKTtcblxuICAgIHRoaXMuZGF0YSgnZWxlbWVudCcsIHRoaXMpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBFbGVtZW50LmNsb25lKHRoaXMpOyB9XG5cbiAgc2hvdygpIHsgdGhpcy4kZWxlbWVudC5zaG93KCk7IH1cbiAgaGlkZSgpIHsgdGhpcy4kZWxlbWVudC5oaWRlKCk7IH1cbiAgZW5hYmxlKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7IH1cbiAgZGlzYWJsZSgpIHsgdGhpcy4kZWxlbWVudC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpOyB9XG4gIHJlbW92ZSgpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmUoKTsgfVxuICBkZXRhY2goKSB7IHRoaXMuJGVsZW1lbnQuZGV0YWNoKCk7IH1cbiAgZW1wdHkoKSB7IHRoaXMuJGVsZW1lbnQuZW1wdHkoKTsgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC53aWR0aCgpOyB9XG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGVpZ2h0KCk7IH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB2YXIgJHBvc2l0aW9uID0gdGhpcy4kZWxlbWVudC5wb3NpdGlvbigpLFxuICAgICAgICB0b3AgPSAkcG9zaXRpb24udG9wLFxuICAgICAgICBsZWZ0ID0gJHBvc2l0aW9uLmxlZnQsXG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHRvcCwgbGVmdCk7XG4gICAgXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIHZhciAkb2Zmc2V0ID0gdGhpcy4kZWxlbWVudC5vZmZzZXQoKSxcbiAgICAgICAgdG9wID0gJG9mZnNldC50b3AsICAvLy9cbiAgICAgICAgbGVmdCA9ICRvZmZzZXQubGVmdCwgIC8vL1xuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuJGVsZW1lbnQud2lkdGgod2lkdGgpOyB9XG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy4kZWxlbWVudC5oZWlnaHQoaGVpZ2h0KTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LmF0dHIobmFtZSk7IH1cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lLCB2YWx1ZSk7IH1cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKG5hbWUpOyB9XG4gIHByZXBlbmRCZWZvcmUoZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmJlZm9yZShlbGVtZW50LiRlbGVtZW50KTsgfVxuICBhcHBlbmRBZnRlcihlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYWZ0ZXIoZWxlbWVudC4kZWxlbWVudCk7IH1cbiAgXG4gIHByZXBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0gZWxlbWVudE9yU3RyaW5nOyAvLy9cblxuICAgICAgdGhpcy4kZWxlbWVudC5wcmVwZW5kKHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudE9yU3RyaW5nLCAgLy8vXG4gICAgICAgICAgJGVsZW1lbnQgPSBlbGVtZW50LiRlbGVtZW50O1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnByZXBlbmQoJGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBcbiAgYXBwZW5kKGVsZW1lbnRPclN0cmluZykge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHN0cmluZyA9IGVsZW1lbnRPclN0cmluZzsgLy8vXG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudE9yU3RyaW5nLCAgLy8vXG4gICAgICAgICAgJGVsZW1lbnQgPSBlbGVtZW50LiRlbGVtZW50O1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZCgkZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSk7IH1cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpOyB9XG4gIHJlbW92ZUNsYXNzZXMoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoKTsgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lmh0bWwoaHRtbClcbiAgICB9IGVsc2Uge1xuICAgICAgaHRtbCA9IHRoaXMuJGVsZW1lbnQuaHRtbCgpO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgcHJvcGVydHlOYW1lID0gY3NzO1xuXG4gICAgICBjc3MgPSB0aGlzLiRlbGVtZW50LmNzcyhwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmNzcyhjc3MpO1xuICAgIH1cbiAgfVxuXG4gIGRhdGEoKSB7XG4gICAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgIGtleSA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgdmFsdWU7XG5cbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQuZGF0YShrZXkpO1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmRhdGEoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZmluZEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIGZvdW5kRE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LmZpbmQoc2VsZWN0b3IpLFxuICAgICAgICBmb3VuZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZm91bmRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZm91bmRFbGVtZW50cztcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgY2hpbGRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oc2VsZWN0b3IpLFxuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudEVsZW1lbnQoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50RE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LnBhcmVudChzZWxlY3RvciksXG4gICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyksXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcGFyZW50RWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50RE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LnBhcmVudHMoc2VsZWN0b3IpLFxuICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50cztcbiAgfVxuXG4gIG9uKGV2ZW50cywgaGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgaWYgKG5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBldmVudHMgPSBldmVudHMgKyAnLicgKyBuYW1lc3BhY2U7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuJGVsZW1lbnQub24oZXZlbnRzLCBoYW5kbGVyKTsgXG4gIH1cbiAgXG4gIG9mZihldmVudHMsIG5hbWVzcGFjZSkge1xuICAgIGlmIChuYW1lc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnRzID0gZXZlbnRzICsgJy4nICsgbmFtZXNwYWNlO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLiRlbGVtZW50Lm9mZihldmVudHMpO1xuICB9XG5cbiAgb25Nb3VzZVVwKGhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZXVwJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlciksIG5hbWVzcGFjZSk7IH1cbiAgb25Nb3VzZURvd24oaGFuZGxlciwgbmFtZXNwYWNlKSB7IHRoaXMub24oJ21vdXNlZG93bicsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VPdmVyKGhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZW92ZXInLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuICBvbk1vdXNlT3V0KGhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZW91dCcsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VNb3ZlKGhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZW1vdmUnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuXG4gIG9mZk1vdXNlVXAobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZXVwJywgbmFtZXNwYWNlKTsgfVxuICBvZmZNb3VzZURvd24obmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZWRvd24nLCBuYW1lc3BhY2UpOyB9XG4gIG9mZk1vdXNlT3ZlcihuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ21vdXNlb3ZlcicsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VPdXQobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZW91dCcsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VNb3ZlKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2Vtb3ZlJywgbmFtZXNwYWNlKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShmaXJzdEFyZ3VtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgdG8kRWxlbWVudCk7XG5cbiAgICBmdW5jdGlvbiBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gKCh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpIHx8IChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvJEVsZW1lbnQoc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgIHZhciAkZWxlbWVudCA9ICh0eXBlb2Ygc2Vjb25kQXJndW1lbnQgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgJChzZWNvbmRBcmd1bWVudCkgOlxuICAgICAgICAgIHNlY29uZEFyZ3VtZW50LiRlbGVtZW50O1xuXG4gICAgICByZXR1cm4gJGVsZW1lbnQuY2xvbmUoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoZmlyc3RBcmd1bWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlKGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsIHRvJEVsZW1lbnQpO1xuXG4gICAgZnVuY3Rpb24gaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvJEVsZW1lbnQoc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAkKHNlY29uZEFyZ3VtZW50KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlKGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsIHRvJEVsZW1lbnQpO1xuXG4gICAgZnVuY3Rpb24gaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkge1xuICAgICAgcmV0dXJuIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvJEVsZW1lbnQoc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAkKHNlY29uZEFyZ3VtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiA9IDE7XG5FbGVtZW50Lk1JRERMRV9NT1VTRV9CVVRUT04gPSAyO1xuRWxlbWVudC5SSUdIVF9NT1VTRV9CVVRUT04gPSAzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHRvJEVsZW1lbnQoc2VsZWN0b3JPclNvbWV0aGluZykge1xuICB2YXIgJGVsZW1lbnQ7XG5cbiAgaWYgKGZhbHNlKSB7XG5cbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3JPclNvbWV0aGluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAkZWxlbWVudCA9ICQoc2VsZWN0b3JPclNvbWV0aGluZyk7XG4gIH0gZWxzZSBpZiAoc2VsZWN0b3JPclNvbWV0aGluZyBpbnN0YW5jZW9mICQpIHtcbiAgICAkZWxlbWVudCA9IHNlbGVjdG9yT3JTb21ldGhpbmc7ICAvLy9cbiAgfSBlbHNlIGlmIChzZWxlY3Rvck9yU29tZXRoaW5nIGluc3RhbmNlb2YgQXJyYXkgKSB7XG4gICAgdmFyIHBhcmVudEVsZW1lbnQgPSBzZWxlY3Rvck9yU29tZXRoaW5nWzBdLCAvLy9cbiAgICAgICAgY2hpbGRTZWxlY3RvciA9IHNlbGVjdG9yT3JTb21ldGhpbmdbMV0sICAvLy9cbiAgICAgICAgcGFyZW50JEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LiRlbGVtZW50OyAgLy8vXG5cbiAgICAkZWxlbWVudCA9IHBhcmVudCRFbGVtZW50LmZpbmQoY2hpbGRTZWxlY3Rvcik7XG4gIH1cblxuICByZXR1cm4gJGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIG1vdXNlVG9wID0gZXZlbnQucGFnZVksICAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsIC8vL1xuICAgICAgICBtb3VzZUJ1dHRvbiA9IGV2ZW50LndoaWNoOyAvLy9cblxuICAgIGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICB2YXIgZWxlbWVudHMgPSBbXSxcbiAgICAgIGRvbUVsZW1lbnRzTGVuZ3RoID0gZG9tRWxlbWVudHMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9tRWxlbWVudHNMZW5ndGg7IGkrKykge1xuICAgIHZhciBkb21FbGVtZW50ID0gZG9tRWxlbWVudHNbaV0sXG4gICAgICAgICRlbGVtZW50ID0gJChkb21FbGVtZW50KSxcbiAgICAgICAgZWxlbWVudCA9ICRlbGVtZW50LmRhdGEoJ2VsZW1lbnQnKTtcblxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgdG8kRWxlbWVudCkge1xuICBpZiAoaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChmaXJzdEFyZ3VtZW50KTtcbiAgICBmaXJzdEFyZ3VtZW50ID0gRWxlbWVudDtcbiAgfVxuXG4gIHZhciBDbGFzcyA9IGZpcnN0QXJndW1lbnQsXG4gICAgICBzZWNvbmRBcmd1bWVudCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5zaGlmdCgpLFxuICAgICAgJGVsZW1lbnQgPSB0byRFbGVtZW50KHNlY29uZEFyZ3VtZW50KTtcblxuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdCgkZWxlbWVudCk7XG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpOyAvLy9cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7ICAvLy9cbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=