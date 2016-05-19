'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var Bounds = require('./bounds');

var Element = function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    var selectorOrSomething = selector; ///

    this.$element = $element(selectorOrSomething);

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
    key: 'empty',
    value: function empty() {
      this.$element.empty();
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
    value: function clone(selector) {
      var Class, args;

      if (arguments.length === 1) {
        Class = Element;
        args = [];
      } else {
        Class = arguments[0];
        selector = arguments[1];
        args = Array.prototype.slice.call(arguments, 2);
      }

      var $clonedElement = $element(selector).clone();

      return instance(Class, $clonedElement, args);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
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
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      var Class, args;

      if (arguments.length === 1) {
        Class = Element;
        args = [];
      } else {
        Class = arguments[0];
        domElement = arguments[1];
        args = Array.prototype.slice.call(arguments, 2);
      }

      var $domElement = $(domElement);

      return instance(Class, $domElement, args);
    }
  }]);

  return Element;
}();

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

function $element(selectorOrSomething) {
  var $element;

  if (false) {} else if (typeof selectorOrSomething === 'string') {
    $element = $(selectorOrSomething);
  } else if (selectorOrSomething instanceof Array) {
    var parentElement = selectorOrSomething[0],
        ///
    childSelector = selectorOrSomething[1],
        ///
    parent$Element = parentElement.$element; ///

    $element = parent$Element.find(childSelector);
  } else if (selectorOrSomething instanceof $) {
    $element = selectorOrSomething; ///
  } else {
      ///
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLElBQUksUUFBUSxRQUFSLENBQUo7O0FBRUosSUFBSSxTQUFTLFFBQVEsVUFBUixDQUFUOztJQUVFO0FBQ0osV0FESSxPQUNKLENBQVksUUFBWixFQUFzQjswQkFEbEIsU0FDa0I7O0FBQ3BCLFFBQUksc0JBQXNCLFFBQXRCOztBQURnQixRQUdwQixDQUFLLFFBQUwsR0FBZ0IsU0FBUyxtQkFBVCxDQUFoQixDQUhvQjs7QUFLcEIsU0FBSyxJQUFMLENBQVUsU0FBVixFQUFxQixJQUFyQixFQUxvQjtHQUF0Qjs7ZUFESTs7NEJBU0k7QUFDTixVQUFJLGdCQUFnQixRQUFRLEtBQVIsQ0FBYyxLQUFLLFFBQUwsQ0FBOUIsQ0FERTs7QUFHTixhQUFPLGFBQVAsQ0FITTs7OzsyQkFNRDtBQUFFLFdBQUssUUFBTCxDQUFjLElBQWQsR0FBRjs7OzsyQkFDQTtBQUFFLFdBQUssUUFBTCxDQUFjLElBQWQsR0FBRjs7Ozs2QkFDRTtBQUFFLFdBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsVUFBekIsRUFBRjs7Ozs4QkFDQztBQUFFLFdBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsVUFBbkIsRUFBK0IsSUFBL0IsRUFBRjs7Ozs2QkFFRCxPQUFPO0FBQUUsV0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixLQUFwQixFQUFGOzs7OzhCQUNOLFFBQVE7QUFBRSxXQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLE1BQXJCLEVBQUY7Ozs7K0JBRVA7QUFBRSxhQUFPLEtBQUssUUFBTCxDQUFjLEtBQWQsRUFBUCxDQUFGOzs7O2dDQUNDO0FBQUUsYUFBTyxLQUFLLFFBQUwsQ0FBYyxNQUFkLEVBQVAsQ0FBRjs7OztnQ0FFQTtBQUNWLFVBQUksVUFBVSxLQUFLLFFBQUwsQ0FBYyxNQUFkLEVBQVY7VUFDQSxNQUFNLFFBQVEsR0FBUjs7QUFDTixhQUFPLFFBQVEsSUFB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VUFBRixDQUFYO1FBQ0EsVUFBVSxTQUFTLElBQVQsQ0FBYyxTQUFkLENBQVYsQ0FIc0M7O0FBSzFDLFFBQUksT0FBSixFQUFhO0FBQ1gsZUFBUyxJQUFULENBQWMsT0FBZCxFQURXO0tBQWI7R0FMRjs7QUFVQSxTQUFPLFFBQVAsQ0FkNEM7Q0FBOUM7O0FBaUJBLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFBRSxTQUFPLE1BQU0sQ0FBTixDQUFQLENBQUY7Q0FBdEIiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxudmFyIEJvdW5kcyA9IHJlcXVpcmUoJy4vYm91bmRzJyk7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHZhciBzZWxlY3Rvck9yU29tZXRoaW5nID0gc2VsZWN0b3I7IC8vL1xuXG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50KHNlbGVjdG9yT3JTb21ldGhpbmcpO1xuXG4gICAgdGhpcy5kYXRhKCdlbGVtZW50JywgdGhpcyk7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICB2YXIgY2xvbmVkRWxlbWVudCA9IEVsZW1lbnQuY2xvbmUodGhpcy4kZWxlbWVudCk7XG5cbiAgICByZXR1cm4gY2xvbmVkRWxlbWVudDtcbiAgfVxuXG4gIHNob3coKSB7IHRoaXMuJGVsZW1lbnQuc2hvdygpOyB9XG4gIGhpZGUoKSB7IHRoaXMuJGVsZW1lbnQuaGlkZSgpOyB9XG4gIGVuYWJsZSgpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyB9XG4gIGRpc2FibGUoKSB7IHRoaXMuJGVsZW1lbnQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuJGVsZW1lbnQud2lkdGgod2lkdGgpOyB9XG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy4kZWxlbWVudC5oZWlnaHQoaGVpZ2h0KTsgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC53aWR0aCgpOyB9XG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGVpZ2h0KCk7IH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgdmFyICRvZmZzZXQgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpLFxuICAgICAgICB0b3AgPSAkb2Zmc2V0LnRvcCwgIC8vL1xuICAgICAgICBsZWZ0ID0gJG9mZnNldC5sZWZ0LCAgLy8vXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICBib3R0b20gPSB0b3AgKyBoZWlnaHQsXG4gICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lKTsgfVxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy4kZWxlbWVudC5hdHRyKG5hbWUsIHZhbHVlKTsgfVxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIobmFtZSk7IH1cblxuICBwcmVwZW5kQmVmb3JlKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5iZWZvcmUoZWxlbWVudC4kZWxlbWVudCk7IH1cbiAgYXBwZW5kQWZ0ZXIoZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmFmdGVyKGVsZW1lbnQuJGVsZW1lbnQpOyB9XG4gIFxuICBwcmVwZW5kKGVsZW1lbnRPclN0cmluZykge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHN0cmluZyA9IGVsZW1lbnRPclN0cmluZzsgLy8vXG5cbiAgICAgIHRoaXMuJGVsZW1lbnQucHJlcGVuZChzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRPclN0cmluZywgIC8vL1xuICAgICAgICAgICRlbGVtZW50ID0gZWxlbWVudC4kZWxlbWVudDtcblxuICAgICAgdGhpcy4kZWxlbWVudC5wcmVwZW5kKCRlbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgXG4gIGFwcGVuZChlbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBlbGVtZW50T3JTdHJpbmc7IC8vL1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZChzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRPclN0cmluZywgIC8vL1xuICAgICAgICAgICRlbGVtZW50ID0gZWxlbWVudC4kZWxlbWVudDtcblxuICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoJGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZSgpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmUoKTsgfVxuICBkZXRhY2goKSB7IHRoaXMuJGVsZW1lbnQuZGV0YWNoKCk7IH1cbiAgXG4gIGVtcHR5KCkgeyB0aGlzLiRlbGVtZW50LmVtcHR5KCk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpOyB9XG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7IH1cbiAgcmVtb3ZlQ2xhc3NlcygpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygpOyB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuaHRtbChodG1sKVxuICAgIH0gZWxzZSB7XG4gICAgICBodG1sID0gdGhpcy4kZWxlbWVudC5odG1sKCk7XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSBjc3M7XG5cbiAgICAgIGNzcyA9IHRoaXMuJGVsZW1lbnQuY3NzKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKGNzcyk7XG4gICAgfVxuICB9XG5cbiAgZGF0YSgpIHtcbiAgICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAga2V5ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICB2YWx1ZTtcblxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICAgIHZhbHVlID0gdGhpcy4kZWxlbWVudC5kYXRhKGtleSk7XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuZGF0YShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBmaW5kRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgZm91bmRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuZmluZChzZWxlY3RvciksXG4gICAgICAgIGZvdW5kRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhmb3VuZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmb3VuZEVsZW1lbnRzO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBjaGlsZERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbihzZWxlY3RvciksXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50RWxlbWVudChzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQucGFyZW50KHNlbGVjdG9yKSxcbiAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKSxcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBwYXJlbnRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQucGFyZW50cyhzZWxlY3RvciksXG4gICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnRzO1xuICB9XG5cbiAgb24oZXZlbnRzLCBoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oZXZlbnRzLCBoYW5kbGVyKTsgfVxuXG4gIG9uTW91c2VVcChoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNldXAnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH1cbiAgb25Nb3VzZURvd24oaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZWRvd24nLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH1cbiAgb25Nb3VzZU92ZXIoaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZW92ZXInLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH1cbiAgb25Nb3VzZU91dChoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlb3V0JywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9XG4gIG9uTW91c2VNb3ZlKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2Vtb3ZlJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9XG5cbiAgc3RhdGljIGNsb25lKHNlbGVjdG9yKSB7XG4gICAgdmFyIENsYXNzLFxuICAgICAgICBhcmdzO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIENsYXNzID0gRWxlbWVudDtcbiAgICAgIGFyZ3MgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgQ2xhc3MgPSBhcmd1bWVudHNbMF07XG4gICAgICBzZWxlY3RvciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIH1cblxuICAgIHZhciAkY2xvbmVkRWxlbWVudCA9ICRlbGVtZW50KHNlbGVjdG9yKS5jbG9uZSgpO1xuXG4gICAgcmV0dXJuIGluc3RhbmNlKENsYXNzLCAkY2xvbmVkRWxlbWVudCwgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkge1xuICAgIHZhciBDbGFzcyxcbiAgICAgICAgYXJncztcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBDbGFzcyA9IEVsZW1lbnQ7XG4gICAgICBhcmdzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIENsYXNzID0gYXJndW1lbnRzWzBdO1xuICAgICAgaHRtbCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIH1cblxuICAgIHZhciAkaHRtbEVsZW1lbnQgPSAkKGh0bWwpO1xuXG4gICAgcmV0dXJuIGluc3RhbmNlKENsYXNzLCAkaHRtbEVsZW1lbnQsIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICB2YXIgQ2xhc3MsXG4gICAgICAgIGFyZ3M7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgQ2xhc3MgPSBFbGVtZW50O1xuICAgICAgYXJncyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBDbGFzcyA9IGFyZ3VtZW50c1swXTtcbiAgICAgIGRvbUVsZW1lbnQgPSBhcmd1bWVudHNbMV07XG4gICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICB9XG5cbiAgICB2YXIgJGRvbUVsZW1lbnQgPSAkKGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGluc3RhbmNlKENsYXNzLCAkZG9tRWxlbWVudCwgYXJncyk7XG4gIH1cbn1cblxuRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiA9IDE7XG5FbGVtZW50Lk1JRERMRV9NT1VTRV9CVVRUT04gPSAyO1xuRWxlbWVudC5SSUdIVF9NT1VTRV9CVVRUT04gPSAzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIG1vdXNlVG9wID0gZXZlbnQucGFnZVksICAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsIC8vL1xuICAgICAgICBtb3VzZUJ1dHRvbiA9IGV2ZW50LndoaWNoOyAvLy9cblxuICAgIGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24pO1xuICB9O1xufVxuXG5mdW5jdGlvbiAkZWxlbWVudChzZWxlY3Rvck9yU29tZXRoaW5nKSB7XG4gIHZhciAkZWxlbWVudDtcblxuICBpZiAoZmFsc2UpIHtcblxuICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3Rvck9yU29tZXRoaW5nID09PSAnc3RyaW5nJykge1xuICAgICRlbGVtZW50ID0gJChzZWxlY3Rvck9yU29tZXRoaW5nKTtcbiAgfSBlbHNlIGlmIChzZWxlY3Rvck9yU29tZXRoaW5nIGluc3RhbmNlb2YgQXJyYXkgKSB7XG4gICAgdmFyIHBhcmVudEVsZW1lbnQgPSBzZWxlY3Rvck9yU29tZXRoaW5nWzBdLCAvLy9cbiAgICAgICAgY2hpbGRTZWxlY3RvciA9IHNlbGVjdG9yT3JTb21ldGhpbmdbMV0sICAvLy9cbiAgICAgICAgcGFyZW50JEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LiRlbGVtZW50OyAgLy8vXG5cbiAgICAkZWxlbWVudCA9IHBhcmVudCRFbGVtZW50LmZpbmQoY2hpbGRTZWxlY3Rvcik7XG4gIH0gZWxzZSBpZiAoc2VsZWN0b3JPclNvbWV0aGluZyBpbnN0YW5jZW9mICQpIHtcbiAgICAkZWxlbWVudCA9IHNlbGVjdG9yT3JTb21ldGhpbmc7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICAvLy9cbiAgfVxuXG4gIHJldHVybiAkZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UoQ2xhc3MsICRlbGVtZW50LCBhcmdzKSB7XG4gIGFyZ3MudW5zaGlmdCgkZWxlbWVudCk7XG5cbiAgYXJncy51bnNoaWZ0KG51bGwpOyAvLy9cbiAgXG4gIHZhciBpbnN0YW5jZSA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIGFyZ3MpKTsgIC8vL1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMpIHtcbiAgdmFyIGVsZW1lbnRzID0gW10sXG4gICAgICBkb21FbGVtZW50c0xlbmd0aCA9IGRvbUVsZW1lbnRzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvbUVsZW1lbnRzTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRzW2ldLFxuICAgICAgICAkZWxlbWVudCA9ICQoZG9tRWxlbWVudCksXG4gICAgICAgIGVsZW1lbnQgPSAkZWxlbWVudC5kYXRhKCdlbGVtZW50Jyk7XG5cbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19
