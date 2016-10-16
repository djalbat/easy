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
    value: function clone() {
      var firstArgument = first(arguments),
          remainingArguments = remaining(arguments);

      return instance(firstArgument, remainingArguments, function (firstArgument) {
        return typeof firstArgument === 'string' || firstArgument instanceof Element;
      }, function (secondArgument) {
        var $element = typeof secondArgument === 'string' ? $(secondArgument) : secondArgument.$element;

        return $element.clone();
      });
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML() {
      var firstArgument = first(arguments),
          remainingArguments = remaining(arguments);

      return instance(firstArgument, remainingArguments, function (firstArgument) {
        return typeof firstArgument === 'string';
      }, function (secondArgument) {
        return $(secondArgument);
      });
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement() {
      var firstArgument = first(arguments),
          remainingArguments = remaining(arguments);

      return instance(firstArgument, remainingArguments, function (firstArgument) {
        return firstArgument instanceof HTMLElement;
      }, function (secondArgument) {
        return $(secondArgument);
      });
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

function remaining(array) {
  return Array.prototype.slice.call(array, 1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiQm91bmRzIiwiUG9zaXRpb24iLCJFbGVtZW50Iiwic2VsZWN0b3JPclNvbWV0aGluZyIsIiRlbGVtZW50IiwidG8kRWxlbWVudCIsImRhdGEiLCJjbG9uZSIsInNob3ciLCJoaWRlIiwicmVtb3ZlQXR0ciIsImF0dHIiLCJyZW1vdmUiLCJkZXRhY2giLCJlbXB0eSIsIndpZHRoIiwiaGVpZ2h0IiwiJHBvc2l0aW9uIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiJG9mZnNldCIsIm9mZnNldCIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiLCJib3VuZHMiLCJuYW1lIiwidmFsdWUiLCJlbGVtZW50IiwiYmVmb3JlIiwiYWZ0ZXIiLCJlbGVtZW50T3JTdHJpbmciLCJzdHJpbmciLCJwcmVwZW5kIiwiYXBwZW5kIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaHRtbCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNzcyIsInByb3BlcnR5TmFtZSIsImFyZ3VtZW50c0xlbmd0aCIsImtleSIsInNlbGVjdG9yIiwiZm91bmRET01FbGVtZW50cyIsImZpbmQiLCJmb3VuZEVsZW1lbnRzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJjaGlsZERPTUVsZW1lbnRzIiwiY2hpbGRyZW4iLCJjaGlsZEVsZW1lbnRzIiwicGFyZW50RE9NRWxlbWVudHMiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50cyIsImZpcnN0UGFyZW50RWxlbWVudCIsImZpcnN0IiwicGFyZW50RWxlbWVudCIsInBhcmVudHMiLCJldmVudHMiLCJoYW5kbGVyIiwibmFtZXNwYWNlIiwidW5kZWZpbmVkIiwib24iLCJvZmYiLCJyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlciIsImZpcnN0QXJndW1lbnQiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJyZW1haW5pbmciLCJpbnN0YW5jZSIsInNlY29uZEFyZ3VtZW50IiwiSFRNTEVsZW1lbnQiLCJMRUZUX01PVVNFX0JVVFRPTiIsIk1JRERMRV9NT1VTRV9CVVRUT04iLCJSSUdIVF9NT1VTRV9CVVRUT04iLCJtb2R1bGUiLCJleHBvcnRzIiwiQXJyYXkiLCJjaGlsZFNlbGVjdG9yIiwicGFyZW50JEVsZW1lbnQiLCJldmVudCIsIm1vdXNlVG9wIiwicGFnZVkiLCJtb3VzZUxlZnQiLCJwYWdlWCIsIm1vdXNlQnV0dG9uIiwid2hpY2giLCJkb21FbGVtZW50cyIsImVsZW1lbnRzIiwiZG9tRWxlbWVudHNMZW5ndGgiLCJpIiwiZG9tRWxlbWVudCIsInB1c2giLCJpc05vdEFDbGFzcyIsInVuc2hpZnQiLCJDbGFzcyIsInNoaWZ0IiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJiaW5kIiwiYXBwbHkiLCJhcnJheSIsInNsaWNlIiwiY2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsUUFBUixDQUFSOztBQUVBLElBQUlDLFNBQVNELFFBQVEsVUFBUixDQUFiO0FBQUEsSUFDSUUsV0FBV0YsUUFBUSxZQUFSLENBRGY7O0lBR01HLE87QUFDSixtQkFBWUMsbUJBQVosRUFBaUM7QUFBQTs7QUFDL0IsU0FBS0MsUUFBTCxHQUFnQkMsV0FBV0YsbUJBQVgsQ0FBaEI7O0FBRUEsU0FBS0csSUFBTCxDQUFVLFNBQVYsRUFBcUIsSUFBckI7QUFDRDs7Ozs0QkFFTztBQUFFLGFBQU9KLFFBQVFLLEtBQVIsQ0FBYyxJQUFkLENBQVA7QUFBNkI7OzsyQkFFaEM7QUFBRSxXQUFLSCxRQUFMLENBQWNJLElBQWQ7QUFBdUI7OzsyQkFDekI7QUFBRSxXQUFLSixRQUFMLENBQWNLLElBQWQ7QUFBdUI7Ozs2QkFDdkI7QUFBRSxXQUFLTCxRQUFMLENBQWNNLFVBQWQsQ0FBeUIsVUFBekI7QUFBdUM7Ozs4QkFDeEM7QUFBRSxXQUFLTixRQUFMLENBQWNPLElBQWQsQ0FBbUIsVUFBbkIsRUFBK0IsSUFB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LENBQXNCQyxJQUF0QixDQUEyQkYsS0FBM0IsRUFBa0MsQ0FBbEMsQ0FBUDtBQUE4QyIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgQm91bmRzID0gcmVxdWlyZSgnLi9ib3VuZHMnKSxcbiAgICBQb3NpdGlvbiA9IHJlcXVpcmUoJy4vcG9zaXRpb24nKTtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JTb21ldGhpbmcpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gdG8kRWxlbWVudChzZWxlY3Rvck9yU29tZXRoaW5nKTtcblxuICAgIHRoaXMuZGF0YSgnZWxlbWVudCcsIHRoaXMpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBFbGVtZW50LmNsb25lKHRoaXMpOyB9XG5cbiAgc2hvdygpIHsgdGhpcy4kZWxlbWVudC5zaG93KCk7IH1cbiAgaGlkZSgpIHsgdGhpcy4kZWxlbWVudC5oaWRlKCk7IH1cbiAgZW5hYmxlKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7IH1cbiAgZGlzYWJsZSgpIHsgdGhpcy4kZWxlbWVudC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpOyB9XG4gIHJlbW92ZSgpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmUoKTsgfVxuICBkZXRhY2goKSB7IHRoaXMuJGVsZW1lbnQuZGV0YWNoKCk7IH1cbiAgZW1wdHkoKSB7IHRoaXMuJGVsZW1lbnQuZW1wdHkoKTsgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC53aWR0aCgpOyB9XG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGVpZ2h0KCk7IH1cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdmFyICRwb3NpdGlvbiA9IHRoaXMuJGVsZW1lbnQucG9zaXRpb24oKSxcbiAgICAgICAgdG9wID0gJHBvc2l0aW9uLnRvcCxcbiAgICAgICAgbGVmdCA9ICRwb3NpdGlvbi5sZWZ0LFxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbih0b3AsIGxlZnQpO1xuICAgIFxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICB2YXIgJG9mZnNldCA9IHRoaXMuJGVsZW1lbnQub2Zmc2V0KCksXG4gICAgICAgIHRvcCA9ICRvZmZzZXQudG9wLCAgLy8vXG4gICAgICAgIGxlZnQgPSAkb2Zmc2V0LmxlZnQsICAvLy9cbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgIGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLiRlbGVtZW50LndpZHRoKHdpZHRoKTsgfVxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuJGVsZW1lbnQuaGVpZ2h0KGhlaWdodCk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5hdHRyKG5hbWUpOyB9XG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLiRlbGVtZW50LmF0dHIobmFtZSwgdmFsdWUpOyB9XG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cihuYW1lKTsgfVxuICBwcmVwZW5kQmVmb3JlKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5iZWZvcmUoZWxlbWVudC4kZWxlbWVudCk7IH1cbiAgYXBwZW5kQWZ0ZXIoZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmFmdGVyKGVsZW1lbnQuJGVsZW1lbnQpOyB9XG4gIFxuICBwcmVwZW5kKGVsZW1lbnRPclN0cmluZykge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHN0cmluZyA9IGVsZW1lbnRPclN0cmluZzsgLy8vXG5cbiAgICAgIHRoaXMuJGVsZW1lbnQucHJlcGVuZChzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRPclN0cmluZywgIC8vL1xuICAgICAgICAgICRlbGVtZW50ID0gZWxlbWVudC4kZWxlbWVudDtcblxuICAgICAgdGhpcy4kZWxlbWVudC5wcmVwZW5kKCRlbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgXG4gIGFwcGVuZChlbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBlbGVtZW50T3JTdHJpbmc7IC8vL1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZChzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRPclN0cmluZywgIC8vL1xuICAgICAgICAgICRlbGVtZW50ID0gZWxlbWVudC4kZWxlbWVudDtcblxuICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoJGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWUpOyB9XG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LmFkZENsYXNzKGNsYXNzTmFtZSk7IH1cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICByZW1vdmVDbGFzc2VzKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCk7IH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy4kZWxlbWVudC5odG1sKGh0bWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGh0bWwgPSB0aGlzLiRlbGVtZW50Lmh0bWwoKTtcblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmICh0eXBlb2YgY3NzID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHByb3BlcnR5TmFtZSA9IGNzcztcblxuICAgICAgY3NzID0gdGhpcy4kZWxlbWVudC5jc3MocHJvcGVydHlOYW1lKTtcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kZWxlbWVudC5jc3MoY3NzKTtcbiAgICB9XG4gIH1cblxuICBkYXRhKCkge1xuICAgIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICBrZXkgPSBhcmd1bWVudHNbMF0sXG4gICAgICAgIHZhbHVlO1xuXG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgICAgdmFsdWUgPSB0aGlzLiRlbGVtZW50LmRhdGEoa2V5KTtcblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGFyZ3VtZW50c1sxXTtcblxuICAgICAgdGhpcy4kZWxlbWVudC5kYXRhKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBmb3VuZERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5maW5kKHNlbGVjdG9yKSxcbiAgICAgICAgZm91bmRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGZvdW5kRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZvdW5kRWxlbWVudHM7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIGNoaWxkRE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKHNlbGVjdG9yKSxcbiAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRFbGVtZW50KHNlbGVjdG9yKSB7XG4gICAgdmFyIHBhcmVudERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5wYXJlbnQoc2VsZWN0b3IpLFxuICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpLFxuICAgICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHBhcmVudEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIHBhcmVudERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5wYXJlbnRzKHNlbGVjdG9yKSxcbiAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudHM7XG4gIH1cblxuICBvbihldmVudHMsIGhhbmRsZXIsIG5hbWVzcGFjZSkge1xuICAgIGlmIChuYW1lc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnRzID0gZXZlbnRzICsgJy4nICsgbmFtZXNwYWNlO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLiRlbGVtZW50Lm9uKGV2ZW50cywgaGFuZGxlcik7IFxuICB9XG4gIFxuICBvZmYoZXZlbnRzLCBuYW1lc3BhY2UpIHtcbiAgICBpZiAobmFtZXNwYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGV2ZW50cyA9IGV2ZW50cyArICcuJyArIG5hbWVzcGFjZTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy4kZWxlbWVudC5vZmYoZXZlbnRzKTtcbiAgfVxuXG4gIG9uTW91c2VVcChoYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2V1cCcsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VEb3duKGhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZWRvd24nLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuICBvbk1vdXNlT3ZlcihoYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2VvdmVyJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlciksIG5hbWVzcGFjZSk7IH1cbiAgb25Nb3VzZU91dChoYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2VvdXQnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuICBvbk1vdXNlTW92ZShoYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2Vtb3ZlJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlciksIG5hbWVzcGFjZSk7IH1cblxuICBvZmZNb3VzZVVwKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2V1cCcsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VEb3duKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2Vkb3duJywgbmFtZXNwYWNlKTsgfVxuICBvZmZNb3VzZU92ZXIobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZW92ZXInLCBuYW1lc3BhY2UpOyB9XG4gIG9mZk1vdXNlT3V0KG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2VvdXQnLCBuYW1lc3BhY2UpOyB9XG4gIG9mZk1vdXNlTW92ZShuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ21vdXNlbW92ZScsIG5hbWVzcGFjZSk7IH1cblxuICBzdGF0aWMgY2xvbmUoKSB7XG4gICAgdmFyIGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpLFxuICAgICAgICByZW1haW5pbmdBcmd1bWVudHMgPSByZW1haW5pbmcoYXJndW1lbnRzKTtcblxuICAgIHJldHVybiBpbnN0YW5jZShcbiAgICAgIGZpcnN0QXJndW1lbnQsXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMsXG4gICAgICBmdW5jdGlvbihmaXJzdEFyZ3VtZW50KSB7XG4gICAgICAgIHJldHVybiAoKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykgfHwgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgICAgdmFyICRlbGVtZW50ID0gKHR5cGVvZiBzZWNvbmRBcmd1bWVudCA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAkKHNlY29uZEFyZ3VtZW50KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRBcmd1bWVudC4kZWxlbWVudDtcblxuICAgICAgICByZXR1cm4gJGVsZW1lbnQuY2xvbmUoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKCkge1xuICAgIHZhciBmaXJzdEFyZ3VtZW50ID0gZmlyc3QoYXJndW1lbnRzKSxcbiAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzID0gcmVtYWluaW5nKGFyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gaW5zdGFuY2UoXG4gICAgICBmaXJzdEFyZ3VtZW50LFxuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLFxuICAgICAgZnVuY3Rpb24oZmlyc3RBcmd1bWVudCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJyk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICQoc2Vjb25kQXJndW1lbnQpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoKSB7XG4gICAgdmFyIGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpLFxuICAgICAgICByZW1haW5pbmdBcmd1bWVudHMgPSByZW1haW5pbmcoYXJndW1lbnRzKTtcblxuICAgIHJldHVybiBpbnN0YW5jZShcbiAgICAgIGZpcnN0QXJndW1lbnQsXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMsXG4gICAgICBmdW5jdGlvbihmaXJzdEFyZ3VtZW50KSB7XG4gICAgICAgIHJldHVybiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihzZWNvbmRBcmd1bWVudCkge1xuICAgICAgICByZXR1cm4gJChzZWNvbmRBcmd1bWVudCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG5FbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OID0gMTtcbkVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA9IDI7XG5FbGVtZW50LlJJR0hUX01PVVNFX0JVVFRPTiA9IDM7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gdG8kRWxlbWVudChzZWxlY3Rvck9yU29tZXRoaW5nKSB7XG4gIHZhciAkZWxlbWVudDtcblxuICBpZiAoZmFsc2UpIHtcblxuICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3Rvck9yU29tZXRoaW5nID09PSAnc3RyaW5nJykge1xuICAgICRlbGVtZW50ID0gJChzZWxlY3Rvck9yU29tZXRoaW5nKTtcbiAgfSBlbHNlIGlmIChzZWxlY3Rvck9yU29tZXRoaW5nIGluc3RhbmNlb2YgJCkge1xuICAgICRlbGVtZW50ID0gc2VsZWN0b3JPclNvbWV0aGluZzsgIC8vL1xuICB9IGVsc2UgaWYgKHNlbGVjdG9yT3JTb21ldGhpbmcgaW5zdGFuY2VvZiBBcnJheSApIHtcbiAgICB2YXIgcGFyZW50RWxlbWVudCA9IHNlbGVjdG9yT3JTb21ldGhpbmdbMF0sIC8vL1xuICAgICAgICBjaGlsZFNlbGVjdG9yID0gc2VsZWN0b3JPclNvbWV0aGluZ1sxXSwgIC8vL1xuICAgICAgICBwYXJlbnQkRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuJGVsZW1lbnQ7ICAvLy9cblxuICAgICRlbGVtZW50ID0gcGFyZW50JEVsZW1lbnQuZmluZChjaGlsZFNlbGVjdG9yKTtcbiAgfVxuXG4gIHJldHVybiAkZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQud2hpY2g7IC8vL1xuXG4gICAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0LCBtb3VzZUJ1dHRvbik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIHZhciBlbGVtZW50cyA9IFtdLFxuICAgICAgZG9tRWxlbWVudHNMZW5ndGggPSBkb21FbGVtZW50cy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb21FbGVtZW50c0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSBkb21FbGVtZW50c1tpXSxcbiAgICAgICAgJGVsZW1lbnQgPSAkKGRvbUVsZW1lbnQpLFxuICAgICAgICBlbGVtZW50ID0gJGVsZW1lbnQuZGF0YSgnZWxlbWVudCcpO1xuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCB0byRFbGVtZW50KSB7XG4gIGlmIChpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSkge1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGZpcnN0QXJndW1lbnQpO1xuICAgIGZpcnN0QXJndW1lbnQgPSBFbGVtZW50O1xuICB9XG5cbiAgdmFyIENsYXNzID0gZmlyc3RBcmd1bWVudCxcbiAgICAgIHNlY29uZEFyZ3VtZW50ID0gcmVtYWluaW5nQXJndW1lbnRzLnNoaWZ0KCksXG4gICAgICAkZWxlbWVudCA9IHRvJEVsZW1lbnQoc2Vjb25kQXJndW1lbnQpO1xuXG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KCRlbGVtZW50KTtcbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7IC8vL1xuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTsgIC8vL1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZnVuY3Rpb24gcmVtYWluaW5nKGFycmF5KSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheSwgMSk7IH1cbiJdfQ==