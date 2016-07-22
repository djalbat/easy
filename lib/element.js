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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLElBQUksUUFBUSxRQUFSLENBQUo7O0FBRUosSUFBSSxTQUFTLFFBQVEsVUFBUixDQUFUO0lBQ0EsV0FBVyxRQUFRLFlBQVIsQ0FBWDs7SUFFRTtBQUNKLG1CQUFZLG1CQUFaLEVBQWlDOzs7QUFDL0IsU0FBSyxRQUFMLEdBQWdCLFdBQVcsbUJBQVgsQ0FBaEIsQ0FEK0I7O0FBRy9CLFNBQUssSUFBTCxDQUFVLFNBQVYsRUFBcUIsSUFBckIsRUFIK0I7R0FBakM7Ozs7NEJBTVE7QUFBRSxhQUFPLFFBQVEsS0FBUixDQUFjLElBQWQsQ0FBUCxDQUFGOzs7OzJCQUVEO0FBQUUsV0FBSyxRQUFMLENBQWMsSUFBZCxHQUFGOzs7OzJCQUNBO0FBQUUsV0FBSyxRQUFMLENBQWMsSUFBZCxHQUFGOzs7OzZCQUNFO0FBQUUsV0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixVQUF6QixFQUFGOzs7OzhCQUNDO0FBQUUsV0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixVQUFuQixFQUErQixJQUEvQixFQUFGOzs7OzZCQUNEO0FBQUUsV0FBSyxRQUFMLENBQWMsTUFBZCxHQUFGOzs7OzZCQUNBO0FBQUUsV0FBSyxRQUFMLENBQWMsTUFBZCxHQUFGOzs7OzRCQUNEO0FBQUUsV0FBSyxRQUFMLENBQWMsS0FBZCxHQUFGOzs7OytCQUVHO0FBQUUsYUFBTyxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQVAsQ0FBRjs7OztnQ0FDQztBQUFFLGFBQU8sS0FBSyxRQUFMLENBQWMsTUFBZCxFQUFQLENBQUY7Ozs7a0NBQ0U7QUFDWixVQUFJLFlBQVksS0FBSyxRQUFMLENBQWMsUUFBZCxFQUFaO1VBQ0EsTUFBTSxVQUFVLEdBQVY7VUFDTixPQUFPLFVBQVUsSUFBVjtVQUNQLFdBQVcsSUFBSSxRQUFKLENBQWEsR0FBYixFQUFrQixJQUFsQixDQUFYLENBSlE7O0FBTVos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WUFBWSxDQUFaLENBQWI7UUFDQSxXQUFXLEVBQUUsVUFBRixDQUFYO1FBQ0EsVUFBVSxTQUFTLElBQVQsQ0FBYyxTQUFkLENBQVYsQ0FIc0M7O0FBSzFDLFFBQUksT0FBSixFQUFhO0FBQ1gsZUFBUyxJQUFULENBQWMsT0FBZCxFQURXO0tBQWI7R0FMRjs7QUFVQSxTQUFPLFFBQVAsQ0FkNEM7Q0FBOUM7O0FBaUJBLFNBQVMsUUFBVCxDQUFrQixhQUFsQixFQUFpQyxrQkFBakMsRUFBcUQsV0FBckQsRUFBa0UsVUFBbEUsRUFBOEU7QUFDNUUsTUFBSSxZQUFZLGFBQVosQ0FBSixFQUFnQztBQUM5Qix1QkFBbUIsT0FBbkIsQ0FBMkIsYUFBM0IsRUFEOEI7QUFFOUIsb0JBQWdCLE9BQWhCLENBRjhCO0dBQWhDOztBQUtBLE1BQUksUUFBUSxhQUFSO01BQ0EsaUJBQWlCLG1CQUFtQixLQUFuQixFQUFqQjtNQUNBLFdBQVcsV0FBVyxjQUFYLENBQVgsQ0FSd0U7O0FBVTVFLHFCQUFtQixPQUFuQixDQUEyQixRQUEzQixFQVY0RTtBQVc1RSxxQkFBbUIsT0FBbkIsQ0FBMkIsSUFBM0I7O0FBWDRFLFNBYXJFLEtBQUssU0FBUyxTQUFULENBQW1CLElBQW5CLENBQXdCLEtBQXhCLENBQThCLEtBQTlCLEVBQXFDLGtCQUFyQyxFQUFMLEVBQVA7QUFiNEUsQ0FBOUU7O0FBZ0JBLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFBRSxTQUFPLE1BQU0sQ0FBTixDQUFQLENBQUY7Q0FBdEI7O0FBRUEsU0FBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCO0FBQUUsU0FBTyxNQUFNLFNBQU4sQ0FBZ0IsS0FBaEIsQ0FBc0IsSUFBdEIsQ0FBMkIsS0FBM0IsRUFBa0MsQ0FBbEMsQ0FBUCxDQUFGO0NBQTFCIiwiZmlsZSI6ImVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbnZhciBCb3VuZHMgPSByZXF1aXJlKCcuL2JvdW5kcycpLFxuICAgIFBvc2l0aW9uID0gcmVxdWlyZSgnLi9wb3NpdGlvbicpO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPclNvbWV0aGluZykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSB0byRFbGVtZW50KHNlbGVjdG9yT3JTb21ldGhpbmcpO1xuXG4gICAgdGhpcy5kYXRhKCdlbGVtZW50JywgdGhpcyk7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cblxuICBzaG93KCkgeyB0aGlzLiRlbGVtZW50LnNob3coKTsgfVxuICBoaWRlKCkgeyB0aGlzLiRlbGVtZW50LmhpZGUoKTsgfVxuICBlbmFibGUoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTsgfVxuICBkaXNhYmxlKCkgeyB0aGlzLiRlbGVtZW50LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7IH1cbiAgcmVtb3ZlKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZSgpOyB9XG4gIGRldGFjaCgpIHsgdGhpcy4kZWxlbWVudC5kZXRhY2goKTsgfVxuICBlbXB0eSgpIHsgdGhpcy4kZWxlbWVudC5lbXB0eSgpOyB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LndpZHRoKCk7IH1cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5oZWlnaHQoKTsgfVxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB2YXIgJHBvc2l0aW9uID0gdGhpcy4kZWxlbWVudC5wb3NpdGlvbigpLFxuICAgICAgICB0b3AgPSAkcG9zaXRpb24udG9wLFxuICAgICAgICBsZWZ0ID0gJHBvc2l0aW9uLmxlZnQsXG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHRvcCwgbGVmdCk7XG4gICAgXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIHZhciAkb2Zmc2V0ID0gdGhpcy4kZWxlbWVudC5vZmZzZXQoKSxcbiAgICAgICAgdG9wID0gJG9mZnNldC50b3AsICAvLy9cbiAgICAgICAgbGVmdCA9ICRvZmZzZXQubGVmdCwgIC8vL1xuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuJGVsZW1lbnQud2lkdGgod2lkdGgpOyB9XG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy4kZWxlbWVudC5oZWlnaHQoaGVpZ2h0KTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LmF0dHIobmFtZSk7IH1cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lLCB2YWx1ZSk7IH1cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKG5hbWUpOyB9XG4gIHByZXBlbmRCZWZvcmUoZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmJlZm9yZShlbGVtZW50LiRlbGVtZW50KTsgfVxuICBhcHBlbmRBZnRlcihlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYWZ0ZXIoZWxlbWVudC4kZWxlbWVudCk7IH1cbiAgXG4gIHByZXBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0gZWxlbWVudE9yU3RyaW5nOyAvLy9cblxuICAgICAgdGhpcy4kZWxlbWVudC5wcmVwZW5kKHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudE9yU3RyaW5nLCAgLy8vXG4gICAgICAgICAgJGVsZW1lbnQgPSBlbGVtZW50LiRlbGVtZW50O1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnByZXBlbmQoJGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBcbiAgYXBwZW5kKGVsZW1lbnRPclN0cmluZykge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHN0cmluZyA9IGVsZW1lbnRPclN0cmluZzsgLy8vXG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudE9yU3RyaW5nLCAgLy8vXG4gICAgICAgICAgJGVsZW1lbnQgPSBlbGVtZW50LiRlbGVtZW50O1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZCgkZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSk7IH1cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpOyB9XG4gIHJlbW92ZUNsYXNzZXMoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoKTsgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lmh0bWwoaHRtbClcbiAgICB9IGVsc2Uge1xuICAgICAgaHRtbCA9IHRoaXMuJGVsZW1lbnQuaHRtbCgpO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgcHJvcGVydHlOYW1lID0gY3NzO1xuXG4gICAgICBjc3MgPSB0aGlzLiRlbGVtZW50LmNzcyhwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmNzcyhjc3MpO1xuICAgIH1cbiAgfVxuXG4gIGRhdGEoKSB7XG4gICAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgIGtleSA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgdmFsdWU7XG5cbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQuZGF0YShrZXkpO1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmRhdGEoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZmluZEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIGZvdW5kRE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LmZpbmQoc2VsZWN0b3IpLFxuICAgICAgICBmb3VuZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZm91bmRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZm91bmRFbGVtZW50cztcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgY2hpbGRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oc2VsZWN0b3IpLFxuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudEVsZW1lbnQoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50RE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LnBhcmVudChzZWxlY3RvciksXG4gICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyksXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcGFyZW50RWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50RE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LnBhcmVudHMoc2VsZWN0b3IpLFxuICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50cztcbiAgfVxuXG4gIG9uKGV2ZW50cywgaGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgaWYgKG5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBldmVudHMgPSBldmVudHMgKyAnLicgKyBuYW1lc3BhY2U7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuJGVsZW1lbnQub24oZXZlbnRzLCBoYW5kbGVyKTsgXG4gIH1cbiAgXG4gIG9mZihldmVudHMsIG5hbWVzcGFjZSkge1xuICAgIGlmIChuYW1lc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnRzID0gZXZlbnRzICsgJy4nICsgbmFtZXNwYWNlO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLiRlbGVtZW50Lm9mZihldmVudHMpO1xuICB9XG5cbiAgb25Nb3VzZVVwKGhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZXVwJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlciksIG5hbWVzcGFjZSk7IH1cbiAgb25Nb3VzZURvd24oaGFuZGxlciwgbmFtZXNwYWNlKSB7IHRoaXMub24oJ21vdXNlZG93bicsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VPdmVyKGhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZW92ZXInLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuICBvbk1vdXNlT3V0KGhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZW91dCcsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VNb3ZlKGhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZW1vdmUnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuXG4gIG9mZk1vdXNlVXAobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZXVwJywgbmFtZXNwYWNlKTsgfVxuICBvZmZNb3VzZURvd24obmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZWRvd24nLCBuYW1lc3BhY2UpOyB9XG4gIG9mZk1vdXNlT3ZlcihuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ21vdXNlb3ZlcicsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VPdXQobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZW91dCcsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VNb3ZlKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2Vtb3ZlJywgbmFtZXNwYWNlKTsgfVxuXG4gIHN0YXRpYyBjbG9uZSgpIHtcbiAgICB2YXIgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyksXG4gICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IHJlbWFpbmluZyhhcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGluc3RhbmNlKFxuICAgICAgZmlyc3RBcmd1bWVudCxcbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyxcbiAgICAgIGZ1bmN0aW9uKGZpcnN0QXJndW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICgodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB8fCAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihzZWNvbmRBcmd1bWVudCkge1xuICAgICAgICB2YXIgJGVsZW1lbnQgPSAodHlwZW9mIHNlY29uZEFyZ3VtZW50ID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICQoc2Vjb25kQXJndW1lbnQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZEFyZ3VtZW50LiRlbGVtZW50O1xuXG4gICAgICAgIHJldHVybiAkZWxlbWVudC5jbG9uZSgpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoKSB7XG4gICAgdmFyIGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpLFxuICAgICAgICByZW1haW5pbmdBcmd1bWVudHMgPSByZW1haW5pbmcoYXJndW1lbnRzKTtcblxuICAgIHJldHVybiBpbnN0YW5jZShcbiAgICAgIGZpcnN0QXJndW1lbnQsXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMsXG4gICAgICBmdW5jdGlvbihmaXJzdEFyZ3VtZW50KSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihzZWNvbmRBcmd1bWVudCkge1xuICAgICAgICByZXR1cm4gJChzZWNvbmRBcmd1bWVudCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudCgpIHtcbiAgICB2YXIgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyksXG4gICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IHJlbWFpbmluZyhhcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGluc3RhbmNlKFxuICAgICAgZmlyc3RBcmd1bWVudCxcbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyxcbiAgICAgIGZ1bmN0aW9uKGZpcnN0QXJndW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICAgIHJldHVybiAkKHNlY29uZEFyZ3VtZW50KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG5cbkVsZW1lbnQuTEVGVF9NT1VTRV9CVVRUT04gPSAxO1xuRWxlbWVudC5NSURETEVfTU9VU0VfQlVUVE9OID0gMjtcbkVsZW1lbnQuUklHSFRfTU9VU0VfQlVUVE9OID0gMztcblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiB0byRFbGVtZW50KHNlbGVjdG9yT3JTb21ldGhpbmcpIHtcbiAgdmFyICRlbGVtZW50O1xuXG4gIGlmIChmYWxzZSkge1xuXG4gIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yT3JTb21ldGhpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgJGVsZW1lbnQgPSAkKHNlbGVjdG9yT3JTb21ldGhpbmcpO1xuICB9IGVsc2UgaWYgKHNlbGVjdG9yT3JTb21ldGhpbmcgaW5zdGFuY2VvZiAkKSB7XG4gICAgJGVsZW1lbnQgPSBzZWxlY3Rvck9yU29tZXRoaW5nOyAgLy8vXG4gIH0gZWxzZSBpZiAoc2VsZWN0b3JPclNvbWV0aGluZyBpbnN0YW5jZW9mIEFycmF5ICkge1xuICAgIHZhciBwYXJlbnRFbGVtZW50ID0gc2VsZWN0b3JPclNvbWV0aGluZ1swXSwgLy8vXG4gICAgICAgIGNoaWxkU2VsZWN0b3IgPSBzZWxlY3Rvck9yU29tZXRoaW5nWzFdLCAgLy8vXG4gICAgICAgIHBhcmVudCRFbGVtZW50ID0gcGFyZW50RWxlbWVudC4kZWxlbWVudDsgIC8vL1xuXG4gICAgJGVsZW1lbnQgPSBwYXJlbnQkRWxlbWVudC5maW5kKGNoaWxkU2VsZWN0b3IpO1xuICB9XG5cbiAgcmV0dXJuICRlbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBtb3VzZVRvcCA9IGV2ZW50LnBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBldmVudC53aGljaDsgLy8vXG5cbiAgICBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQsIG1vdXNlQnV0dG9uKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMpIHtcbiAgdmFyIGVsZW1lbnRzID0gW10sXG4gICAgICBkb21FbGVtZW50c0xlbmd0aCA9IGRvbUVsZW1lbnRzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvbUVsZW1lbnRzTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRzW2ldLFxuICAgICAgICAkZWxlbWVudCA9ICQoZG9tRWxlbWVudCksXG4gICAgICAgIGVsZW1lbnQgPSAkZWxlbWVudC5kYXRhKCdlbGVtZW50Jyk7XG5cbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGluc3RhbmNlKGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsIHRvJEVsZW1lbnQpIHtcbiAgaWYgKGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpKSB7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZmlyc3RBcmd1bWVudCk7XG4gICAgZmlyc3RBcmd1bWVudCA9IEVsZW1lbnQ7XG4gIH1cblxuICB2YXIgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LFxuICAgICAgc2Vjb25kQXJndW1lbnQgPSByZW1haW5pbmdBcmd1bWVudHMuc2hpZnQoKSxcbiAgICAgICRlbGVtZW50ID0gdG8kRWxlbWVudChzZWNvbmRBcmd1bWVudCk7XG5cbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoJGVsZW1lbnQpO1xuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTsgLy8vXG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpOyAgLy8vXG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiByZW1haW5pbmcoYXJyYXkpIHsgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5LCAxKTsgfVxuIl19
