'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var Bounds = require('./bounds');

var Element = function () {
  function Element(selectorOr$Element) {
    _classCallCheck(this, Element);

    this.$element = $element(selectorOr$Element);

    this.data('element', this);
  }

  _createClass(Element, [{
    key: 'clone',
    value: function clone() {
      var clonedElement = Element.clone(this.$element);

      return clonedElement;
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
  }]);

  return Element;
}();

Element.fromHTML = function (html) {
  var Class, args;

  if (arguments.length === 1) {
    Class = Element;
    args = [];
  } else {
    Class = arguments[0];
    html = arguments[1];
    args = Array.prototype.slice.call(arguments, 2);
  }

  var $htmlElement = $(html);

  return instance(Class, $htmlElement, args);
};

Element.clone = function (selectorOr$Element) {
  var Class, args;

  if (arguments.length === 1) {
    Class = Element;
    args = [];
  } else {
    Class = arguments[0];
    selectorOr$Element = arguments[1];
    args = Array.prototype.slice.call(arguments, 2);
  }

  var $clonedElement = $element(selectorOr$Element).clone();

  return instance(Class, $clonedElement, args);
};

Element.LEFT_MOUSE_BUTTON = 1;
Element.MIDDLE_MOUSE_BUTTON = 2;
Element.RIGHT_MOUSE_BUTTON = 3;

module.exports = Element;

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

function $element(selectorOr$Element) {
  var $element;

  if (selectorOr$Element instanceof $) {
    $element = selectorOr$Element;
  } else if (typeof selectorOr$Element === 'string') {
    $element = $(selectorOr$Element);
  } else {
    var parentSelectorOr$Element = selectorOr$Element[0],
        ///
    childSelector = selectorOr$Element[1],
        ///
    parent$Element = parentSelectorOr$Element instanceof $ ? parentSelectorOr$Element : $(parentSelectorOr$Element);

    $element = parent$Element.find(childSelector);
  }

  return $element;
}

function instance(Class, $element, args) {
  args.unshift($element);

  args.unshift(null); ///

  var instance = new (Function.prototype.bind.apply(Class, args))(); ///

  return instance;
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

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLElBQUksUUFBUSxRQUFSLENBQUo7O0FBRUosSUFBSSxTQUFTLFFBQVEsVUFBUixDQUFUOztJQUVFO0FBQ0osV0FESSxPQUNKLENBQVksa0JBQVosRUFBZ0M7MEJBRDVCLFNBQzRCOztBQUM5QixTQUFLLFFBQUwsR0FBZ0IsU0FBUyxrQkFBVCxDQUFoQixDQUQ4Qjs7QUFHOUIsU0FBSyxJQUFMLENBQVUsU0FBVixFQUFxQixJQUFyQixFQUg4QjtHQUFoQzs7ZUFESTs7NEJBT0k7QUFDTixVQUFJLGdCQUFnQixRQUFRLEtBQVIsQ0FBYyxLQUFLLFFBQUwsQ0FBOUIsQ0FERTs7QUFHTixhQUFPLGFBQVAsQ0FITTs7OzsyQkFNRDtBQUFFLFdBQUssUUFBTCxDQUFjLElBQWQsR0FBRjs7OzsyQkFDQTtBQUFFLFdBQUssUUFBTCxDQUFjLElBQWQsR0FBRjs7Ozs2QkFDRTtBQUFFLFdBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsVUFBekIsRUFBRjs7Ozs4QkFDQztBQUFFLFdBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsVUFBbkIsRUFBK0IsSUFBL0IsRUFBRjs7Ozs2QkFFRCxPQUFPO0FBQUUsV0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixFQUFGOzs7OzhCQUNOLFFBQVE7QUFBRSxXQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLE1BQXJCLEVBQUY7Ozs7K0JBRVA7QUFBRSxhQUFPLEtBQUssUUFBTCxDQUFjLEtBQWQsRUFBUCxDQUFGOzs7O2dDQUNDO0FBQUUsYUFBTyxLQUFLLFFBQUwsQ0FBYyxNQUFkLEVBQVAsQ0FBRjs7OztnQ0FFQTtBQUNWLFVBQUksVUFBVSxLQUFLLFFBQUwsQ0FBYyxNQUFkLEVBQVY7VUFDQSxNQUFNLFFBQVEsR0FBUjs7QUFDTixhQUFPLFFBQVEsSUFBUjs7QUFDUCxjQUFRLEtBQUssUUFBTCxFQUFSO1VB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QUFmLENBQW9CLGFBQXBCLENBQVgsQ0FMSztHQUZBOztBQVVQLFNBQU8sUUFBUCxDQWZvQztDQUF0Qzs7QUFrQkEsU0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCLFFBQXpCLEVBQW1DLElBQW5DLEVBQXlDO0FBQ3ZDLE9BQUssT0FBTCxDQUFhLFFBQWIsRUFEdUM7O0FBR3ZDLE9BQUssT0FBTCxDQUFhLElBQWI7O0FBSHVDLE1BS25DLFdBQVcsS0FBSyxTQUFTLFNBQVQsQ0FBbUIsSUFBbkIsQ0FBd0IsS0FBeEIsQ0FBOEIsS0FBOUIsRUFBcUMsSUFBckMsRUFBTCxFQUFYOztBQUxtQyxTQU9oQyxRQUFQLENBUHVDO0NBQXpDOztBQVVBLFNBQVMsdUJBQVQsQ0FBaUMsV0FBakMsRUFBOEM7QUFDNUMsTUFBSSxXQUFXLEVBQVg7TUFDQSxvQkFBb0IsWUFBWSxNQUFaLENBRm9COztBQUk1QyxPQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxpQkFBSixFQUF1QixHQUF2QyxFQUE0QztBQUMxQyxRQUFJLGFBQWEsWUFBWSxDQUFaLENBQWI7UUFDQSxXQUFXLEVBQUUsVUFBRixDQUFYO1FBQ0EsVUFBVSxTQUFTLElBQVQsQ0FBYyxTQUFkLENBQVYsQ0FIc0M7O0FBSzFDLFFBQUksT0FBSixFQUFhO0FBQ1gsZUFBUyxJQUFULENBQWMsT0FBZCxFQURXO0tBQWI7R0FMRjs7QUFVQSxTQUFPLFFBQVAsQ0FkNEM7Q0FBOUM7O0FBaUJBLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFBRSxTQUFPLE1BQU0sQ0FBTixDQUFQLENBQUY7Q0FBdEIiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxudmFyIEJvdW5kcyA9IHJlcXVpcmUoJy4vYm91bmRzJyk7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KTtcblxuICAgIHRoaXMuZGF0YSgnZWxlbWVudCcsIHRoaXMpO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgdmFyIGNsb25lZEVsZW1lbnQgPSBFbGVtZW50LmNsb25lKHRoaXMuJGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNsb25lZEVsZW1lbnQ7XG4gIH1cblxuICBzaG93KCkgeyB0aGlzLiRlbGVtZW50LnNob3coKTsgfVxuICBoaWRlKCkgeyB0aGlzLiRlbGVtZW50LmhpZGUoKTsgfVxuICBlbmFibGUoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTsgfVxuICBkaXNhYmxlKCkgeyB0aGlzLiRlbGVtZW50LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7IH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLiRlbGVtZW50LndpZHRoKHdpZHRoKTsgfVxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuJGVsZW1lbnQuaGVpZ2h0KGhlaWdodCk7IH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQud2lkdGgoKTsgfVxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LmhlaWdodCgpOyB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIHZhciAkb2Zmc2V0ID0gdGhpcy4kZWxlbWVudC5vZmZzZXQoKSxcbiAgICAgICAgdG9wID0gJG9mZnNldC50b3AsICAvLy9cbiAgICAgICAgbGVmdCA9ICRvZmZzZXQubGVmdCwgIC8vL1xuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LmF0dHIobmFtZSk7IH1cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lLCB2YWx1ZSk7IH1cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKG5hbWUpOyB9XG5cbiAgcHJlcGVuZEJlZm9yZShlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYmVmb3JlKGVsZW1lbnQuJGVsZW1lbnQpOyB9XG4gIGFwcGVuZEFmdGVyKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5hZnRlcihlbGVtZW50LiRlbGVtZW50KTsgfVxuICBcbiAgcHJlcGVuZChlbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBlbGVtZW50T3JTdHJpbmc7IC8vL1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnByZXBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQucHJlcGVuZCgkZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIFxuICBhcHBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0gZWxlbWVudE9yU3RyaW5nOyAvLy9cblxuICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKCRlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlKCk7IH1cbiAgZGV0YWNoKCkgeyB0aGlzLiRlbGVtZW50LmRldGFjaCgpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSk7IH1cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpOyB9XG4gIHJlbW92ZUNsYXNzZXMoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoKTsgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lmh0bWwoaHRtbClcbiAgICB9IGVsc2Uge1xuICAgICAgaHRtbCA9IHRoaXMuJGVsZW1lbnQuaHRtbCgpO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgcHJvcGVydHlOYW1lID0gY3NzO1xuXG4gICAgICBjc3MgPSB0aGlzLiRlbGVtZW50LmNzcyhwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmNzcyhjc3MpO1xuICAgIH1cbiAgfVxuXG4gIGRhdGEoKSB7XG4gICAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgIGtleSA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgdmFsdWU7XG5cbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQuZGF0YShrZXkpO1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmRhdGEoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZmluZEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIGZvdW5kRE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LmZpbmQoc2VsZWN0b3IpLFxuICAgICAgICBmb3VuZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZm91bmRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZm91bmRFbGVtZW50cztcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgY2hpbGRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oc2VsZWN0b3IpLFxuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudEVsZW1lbnQoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50RE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LnBhcmVudChzZWxlY3RvciksXG4gICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyksXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcGFyZW50RWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50RE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LnBhcmVudHMoc2VsZWN0b3IpLFxuICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50cztcbiAgfVxuXG4gIG9uKGV2ZW50cywgaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKGV2ZW50cywgaGFuZGxlcik7IH1cblxuICBvbk1vdXNlVXAoaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZXVwJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9XG4gIG9uTW91c2VEb3duKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2Vkb3duJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9XG4gIG9uTW91c2VPdmVyKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2VvdmVyJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9XG4gIG9uTW91c2VPdXQoaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZW91dCcsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfVxuICBvbk1vdXNlTW92ZShoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlbW92ZScsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfVxufVxuXG5FbGVtZW50LmZyb21IVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICB2YXIgQ2xhc3MsXG4gICAgICBhcmdzO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgQ2xhc3MgPSBFbGVtZW50O1xuICAgIGFyZ3MgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBDbGFzcyA9IGFyZ3VtZW50c1swXTtcbiAgICBodG1sID0gYXJndW1lbnRzWzFdO1xuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICB9XG5cbiAgdmFyICRodG1sRWxlbWVudCA9ICQoaHRtbCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlKENsYXNzLCAkaHRtbEVsZW1lbnQsIGFyZ3MpO1xufTtcblxuRWxlbWVudC5jbG9uZSA9IGZ1bmN0aW9uKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICB2YXIgQ2xhc3MsXG4gICAgICBhcmdzO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgQ2xhc3MgPSBFbGVtZW50O1xuICAgIGFyZ3MgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBDbGFzcyA9IGFyZ3VtZW50c1swXTtcbiAgICBzZWxlY3Rvck9yJEVsZW1lbnQgPSBhcmd1bWVudHNbMV07XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gIH1cblxuICB2YXIgJGNsb25lZEVsZW1lbnQgPSAkZWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpLmNsb25lKCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlKENsYXNzLCAkY2xvbmVkRWxlbWVudCwgYXJncyk7XG59O1xuXG5FbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OID0gMTtcbkVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA9IDI7XG5FbGVtZW50LlJJR0hUX01PVVNFX0JVVFRPTiA9IDM7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQud2hpY2g7IC8vL1xuXG4gICAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0LCBtb3VzZUJ1dHRvbik7XG4gIH07XG59XG5cbmZ1bmN0aW9uICRlbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICB2YXIgJGVsZW1lbnQ7XG5cbiAgaWYgKHNlbGVjdG9yT3IkRWxlbWVudCBpbnN0YW5jZW9mICQpIHtcbiAgICAkZWxlbWVudCA9IHNlbGVjdG9yT3IkRWxlbWVudDtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3JPciRFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICRlbGVtZW50ID0gJChzZWxlY3Rvck9yJEVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJlbnRTZWxlY3Rvck9yJEVsZW1lbnQgPSBzZWxlY3Rvck9yJEVsZW1lbnRbMF0sIC8vL1xuICAgICAgICBjaGlsZFNlbGVjdG9yID0gc2VsZWN0b3JPciRFbGVtZW50WzFdLCAgLy8vXG4gICAgICAgIHBhcmVudCRFbGVtZW50ID0gKHBhcmVudFNlbGVjdG9yT3IkRWxlbWVudCBpbnN0YW5jZW9mICQpID8gcGFyZW50U2VsZWN0b3JPciRFbGVtZW50IDogJChwYXJlbnRTZWxlY3Rvck9yJEVsZW1lbnQpO1xuXG4gICAgJGVsZW1lbnQgPSBwYXJlbnQkRWxlbWVudC5maW5kKGNoaWxkU2VsZWN0b3IpO1xuICB9XG5cbiAgcmV0dXJuICRlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZShDbGFzcywgJGVsZW1lbnQsIGFyZ3MpIHtcbiAgYXJncy51bnNoaWZ0KCRlbGVtZW50KTtcblxuICBhcmdzLnVuc2hpZnQobnVsbCk7IC8vL1xuICBcbiAgdmFyIGluc3RhbmNlID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgYXJncykpOyAgLy8vXG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICB2YXIgZWxlbWVudHMgPSBbXSxcbiAgICAgIGRvbUVsZW1lbnRzTGVuZ3RoID0gZG9tRWxlbWVudHMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9tRWxlbWVudHNMZW5ndGg7IGkrKykge1xuICAgIHZhciBkb21FbGVtZW50ID0gZG9tRWxlbWVudHNbaV0sXG4gICAgICAgICRlbGVtZW50ID0gJChkb21FbGVtZW50KSxcbiAgICAgICAgZWxlbWVudCA9ICRlbGVtZW50LmRhdGEoJ2VsZW1lbnQnKTtcblxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=
