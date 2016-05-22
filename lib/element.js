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
    value: function on(events, handler) {
      this.$element.on(events, handler);
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(handler) {
      this.$element.on('mouseup', returnMouseEventHandler(handler));
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(handler) {
      this.$element.on('mousedown', returnMouseEventHandler(handler));
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver(handler) {
      this.$element.on('mouseover', returnMouseEventHandler(handler));
    }
  }, {
    key: 'onMouseOut',
    value: function onMouseOut(handler) {
      this.$element.on('mouseout', returnMouseEventHandler(handler));
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(handler) {
      this.$element.on('mousemove', returnMouseEventHandler(handler));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLElBQUksUUFBUSxRQUFSLENBQUo7O0FBRUosSUFBSSxTQUFTLFFBQVEsVUFBUixDQUFUO0lBQ0EsV0FBVyxRQUFRLFlBQVIsQ0FBWDs7SUFFRTtBQUNKLFdBREksT0FDSixDQUFZLG1CQUFaLEVBQWlDOzBCQUQ3QixTQUM2Qjs7QUFDL0IsU0FBSyxRQUFMLEdBQWdCLFdBQVcsbUJBQVgsQ0FBaEIsQ0FEK0I7O0FBRy9CLFNBQUssSUFBTCxDQUFVLFNBQVYsRUFBcUIsSUFBckIsRUFIK0I7R0FBakM7O2VBREk7OzRCQU9JO0FBQUUsYUFBTyxRQUFRLEtBQVIsQ0FBYyxJQUFkLENBQVAsQ0FBRjs7OzsyQkFFRDtBQUFFLFdBQUssUUFBTCxDQUFjLElBQWQsR0FBRjs7OzsyQkFDQTtBQUFFLFdBQUssUUFBTCxDQUFjLElBQWQsR0FBRjs7Ozs2QkFDRTtBQUFFLFdBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsVUFBekIsRUFBRjs7Ozs4QkFDQztBQUFFLFdBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsVUFBbkIsRUFBK0IsSUFBL0IsRUFBRjs7Ozs2QkFDRDtBQUFFLFdBQUssUUFBTCxDQUFjLE1BQWQsR0FBRjs7Ozs2QkFDQTtBQUFFLFdBQUssUUFBTCxDQUFjLE1BQWQsR0FBRjs7Ozs0QkFDRDtBQUFFLFdBQUssUUFBTCxDQUFjLEtBQWQsR0FBRjs7OzsrQkFFRztBQUFFLGFBQU8sS0FBSyxRQUFMLENBQWMsS0FBZCxFQUFQLENBQUY7Ozs7Z0NBQ0M7QUFBRSxhQUFPLEtBQUssUUFBTCxDQUFjLE1BQWQsRUFBUCxDQUFGOzs7O2tDQUNFO0FBQ1osVUFBSSxZQUFZLEtBQUssUUFBTCxDQUFjLFFBQWQsRUFBWjtVQUNBLE1BQU0sVUFBVSxHQUFWO1VBQ04sT0FBTyxVQUFVLElBQVY7VUFDUCxXQUFXLElBQUksUUFBSixDQUFhLEdBQWIsRUFB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Qjs7QUFYNEUsU0FhckUsS0FBSyxTQUFTLFNBQVQsQ0FBbUIsSUFBbkIsQ0FBd0IsS0FBeEIsQ0FBOEIsS0FBOUIsRUFBcUMsa0JBQXJDLEVBQUwsRUFBUDtBQWI0RSxDQUE5RTs7QUFnQkEsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUFFLFNBQU8sTUFBTSxDQUFOLENBQVAsQ0FBRjtDQUF0Qjs7QUFFQSxTQUFTLFNBQVQsQ0FBbUIsS0FBbkIsRUFBMEI7QUFBRSxTQUFPLE1BQU0sU0FBTixDQUFnQixLQUFoQixDQUFzQixJQUF0QixDQUEyQixLQUEzQixFQUFrQyxDQUFsQyxDQUFQLENBQUY7Q0FBMUIiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxudmFyIEJvdW5kcyA9IHJlcXVpcmUoJy4vYm91bmRzJyksXG4gICAgUG9zaXRpb24gPSByZXF1aXJlKCcuL3Bvc2l0aW9uJyk7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yU29tZXRoaW5nKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9IHRvJEVsZW1lbnQoc2VsZWN0b3JPclNvbWV0aGluZyk7XG5cbiAgICB0aGlzLmRhdGEoJ2VsZW1lbnQnLCB0aGlzKTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZSh0aGlzKTsgfVxuXG4gIHNob3coKSB7IHRoaXMuJGVsZW1lbnQuc2hvdygpOyB9XG4gIGhpZGUoKSB7IHRoaXMuJGVsZW1lbnQuaGlkZSgpOyB9XG4gIGVuYWJsZSgpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyB9XG4gIGRpc2FibGUoKSB7IHRoaXMuJGVsZW1lbnQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTsgfVxuICByZW1vdmUoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlKCk7IH1cbiAgZGV0YWNoKCkgeyB0aGlzLiRlbGVtZW50LmRldGFjaCgpOyB9XG4gIGVtcHR5KCkgeyB0aGlzLiRlbGVtZW50LmVtcHR5KCk7IH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQud2lkdGgoKTsgfVxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LmhlaWdodCgpOyB9XG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHZhciAkcG9zaXRpb24gPSB0aGlzLiRlbGVtZW50LnBvc2l0aW9uKCksXG4gICAgICAgIHRvcCA9ICRwb3NpdGlvbi50b3AsXG4gICAgICAgIGxlZnQgPSAkcG9zaXRpb24ubGVmdCxcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24odG9wLCBsZWZ0KTtcbiAgICBcbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgdmFyICRvZmZzZXQgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpLFxuICAgICAgICB0b3AgPSAkb2Zmc2V0LnRvcCwgIC8vL1xuICAgICAgICBsZWZ0ID0gJG9mZnNldC5sZWZ0LCAgLy8vXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICBib3R0b20gPSB0b3AgKyBoZWlnaHQsXG4gICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy4kZWxlbWVudC53aWR0aCh3aWR0aCk7IH1cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLiRlbGVtZW50LmhlaWdodChoZWlnaHQpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lKTsgfVxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy4kZWxlbWVudC5hdHRyKG5hbWUsIHZhbHVlKTsgfVxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIobmFtZSk7IH1cbiAgcHJlcGVuZEJlZm9yZShlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYmVmb3JlKGVsZW1lbnQuJGVsZW1lbnQpOyB9XG4gIGFwcGVuZEFmdGVyKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5hZnRlcihlbGVtZW50LiRlbGVtZW50KTsgfVxuICBcbiAgcHJlcGVuZChlbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBlbGVtZW50T3JTdHJpbmc7IC8vL1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnByZXBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQucHJlcGVuZCgkZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIFxuICBhcHBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0gZWxlbWVudE9yU3RyaW5nOyAvLy9cblxuICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKCRlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpOyB9XG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7IH1cbiAgcmVtb3ZlQ2xhc3NlcygpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygpOyB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuaHRtbChodG1sKVxuICAgIH0gZWxzZSB7XG4gICAgICBodG1sID0gdGhpcy4kZWxlbWVudC5odG1sKCk7XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSBjc3M7XG5cbiAgICAgIGNzcyA9IHRoaXMuJGVsZW1lbnQuY3NzKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKGNzcyk7XG4gICAgfVxuICB9XG5cbiAgZGF0YSgpIHtcbiAgICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAga2V5ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICB2YWx1ZTtcblxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICAgIHZhbHVlID0gdGhpcy4kZWxlbWVudC5kYXRhKGtleSk7XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuZGF0YShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBmaW5kRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgZm91bmRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuZmluZChzZWxlY3RvciksXG4gICAgICAgIGZvdW5kRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhmb3VuZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmb3VuZEVsZW1lbnRzO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBjaGlsZERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbihzZWxlY3RvciksXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50RWxlbWVudChzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQucGFyZW50KHNlbGVjdG9yKSxcbiAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKSxcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBwYXJlbnRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQucGFyZW50cyhzZWxlY3RvciksXG4gICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnRzO1xuICB9XG5cbiAgb24oZXZlbnRzLCBoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oZXZlbnRzLCBoYW5kbGVyKTsgfVxuXG4gIG9uTW91c2VVcChoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNldXAnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH1cbiAgb25Nb3VzZURvd24oaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZWRvd24nLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH1cbiAgb25Nb3VzZU92ZXIoaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZW92ZXInLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH1cbiAgb25Nb3VzZU91dChoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlb3V0JywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9XG4gIG9uTW91c2VNb3ZlKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2Vtb3ZlJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9XG5cbiAgc3RhdGljIGNsb25lKCkge1xuICAgIHZhciBmaXJzdEFyZ3VtZW50ID0gZmlyc3QoYXJndW1lbnRzKSxcbiAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzID0gcmVtYWluaW5nKGFyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gaW5zdGFuY2UoXG4gICAgICBmaXJzdEFyZ3VtZW50LFxuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLFxuICAgICAgZnVuY3Rpb24oZmlyc3RBcmd1bWVudCkge1xuICAgICAgICByZXR1cm4gKCh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpIHx8IChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudCkpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICAgIHZhciAkZWxlbWVudCA9ICh0eXBlb2Ygc2Vjb25kQXJndW1lbnQgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgJChzZWNvbmRBcmd1bWVudCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kQXJndW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgICAgcmV0dXJuICRlbGVtZW50LmNsb25lKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTCgpIHtcbiAgICB2YXIgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyksXG4gICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IHJlbWFpbmluZyhhcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGluc3RhbmNlKFxuICAgICAgZmlyc3RBcmd1bWVudCxcbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyxcbiAgICAgIGZ1bmN0aW9uKGZpcnN0QXJndW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICAgIHJldHVybiAkKHNlY29uZEFyZ3VtZW50KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KCkge1xuICAgIHZhciBmaXJzdEFyZ3VtZW50ID0gZmlyc3QoYXJndW1lbnRzKSxcbiAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzID0gcmVtYWluaW5nKGFyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gaW5zdGFuY2UoXG4gICAgICBmaXJzdEFyZ3VtZW50LFxuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLFxuICAgICAgZnVuY3Rpb24oZmlyc3RBcmd1bWVudCkge1xuICAgICAgICByZXR1cm4gKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICQoc2Vjb25kQXJndW1lbnQpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cblxuRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiA9IDE7XG5FbGVtZW50Lk1JRERMRV9NT1VTRV9CVVRUT04gPSAyO1xuRWxlbWVudC5SSUdIVF9NT1VTRV9CVVRUT04gPSAzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHRvJEVsZW1lbnQoc2VsZWN0b3JPclNvbWV0aGluZykge1xuICB2YXIgJGVsZW1lbnQ7XG5cbiAgaWYgKGZhbHNlKSB7XG5cbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3JPclNvbWV0aGluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAkZWxlbWVudCA9ICQoc2VsZWN0b3JPclNvbWV0aGluZyk7XG4gIH0gZWxzZSBpZiAoc2VsZWN0b3JPclNvbWV0aGluZyBpbnN0YW5jZW9mICQpIHtcbiAgICAkZWxlbWVudCA9IHNlbGVjdG9yT3JTb21ldGhpbmc7ICAvLy9cbiAgfSBlbHNlIGlmIChzZWxlY3Rvck9yU29tZXRoaW5nIGluc3RhbmNlb2YgQXJyYXkgKSB7XG4gICAgdmFyIHBhcmVudEVsZW1lbnQgPSBzZWxlY3Rvck9yU29tZXRoaW5nWzBdLCAvLy9cbiAgICAgICAgY2hpbGRTZWxlY3RvciA9IHNlbGVjdG9yT3JTb21ldGhpbmdbMV0sICAvLy9cbiAgICAgICAgcGFyZW50JEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LiRlbGVtZW50OyAgLy8vXG5cbiAgICAkZWxlbWVudCA9IHBhcmVudCRFbGVtZW50LmZpbmQoY2hpbGRTZWxlY3Rvcik7XG4gIH1cblxuICByZXR1cm4gJGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIG1vdXNlVG9wID0gZXZlbnQucGFnZVksICAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsIC8vL1xuICAgICAgICBtb3VzZUJ1dHRvbiA9IGV2ZW50LndoaWNoOyAvLy9cblxuICAgIGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICB2YXIgZWxlbWVudHMgPSBbXSxcbiAgICAgIGRvbUVsZW1lbnRzTGVuZ3RoID0gZG9tRWxlbWVudHMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9tRWxlbWVudHNMZW5ndGg7IGkrKykge1xuICAgIHZhciBkb21FbGVtZW50ID0gZG9tRWxlbWVudHNbaV0sXG4gICAgICAgICRlbGVtZW50ID0gJChkb21FbGVtZW50KSxcbiAgICAgICAgZWxlbWVudCA9ICRlbGVtZW50LmRhdGEoJ2VsZW1lbnQnKTtcblxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgdG8kRWxlbWVudCkge1xuICBpZiAoaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChmaXJzdEFyZ3VtZW50KTtcbiAgICBmaXJzdEFyZ3VtZW50ID0gRWxlbWVudDtcbiAgfVxuXG4gIHZhciBDbGFzcyA9IGZpcnN0QXJndW1lbnQsXG4gICAgICBzZWNvbmRBcmd1bWVudCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5zaGlmdCgpLFxuICAgICAgJGVsZW1lbnQgPSB0byRFbGVtZW50KHNlY29uZEFyZ3VtZW50KTtcblxuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdCgkZWxlbWVudCk7XG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpOyAvLy9cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7ICAvLy9cbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIHJlbWFpbmluZyhhcnJheSkgeyByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXksIDEpOyB9XG4iXX0=
