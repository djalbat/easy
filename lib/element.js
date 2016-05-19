'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var Bounds = require('./bounds');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLElBQUksUUFBUSxRQUFSLENBQUo7O0FBRUosSUFBSSxTQUFTLFFBQVEsVUFBUixDQUFUOztJQUVFO0FBQ0osV0FESSxPQUNKLENBQVksbUJBQVosRUFBaUM7MEJBRDdCLFNBQzZCOztBQUMvQixTQUFLLFFBQUwsR0FBZ0IsV0FBVyxtQkFBWCxDQUFoQixDQUQrQjs7QUFHL0IsU0FBSyxJQUFMLENBQVUsU0FBVixFQUFxQixJQUFyQixFQUgrQjtHQUFqQzs7ZUFESTs7NEJBT0k7QUFBRSxhQUFPLFFBQVEsS0FBUixDQUFjLElBQWQsQ0FBUCxDQUFGOzs7OzJCQUVEO0FBQUUsV0FBSyxRQUFMLENBQWMsSUFBZCxHQUFGOzs7OzJCQUNBO0FBQUUsV0FBSyxRQUFMLENBQWMsSUFBZCxHQUFGOzs7OzZCQUNFO0FBQUUsV0FBSyxRQUFMLENBQWMsVUFBZCxDQUF5QixVQUF6QixFQUFGOzs7OzhCQUNDO0FBQUUsV0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixVQUFuQixFQUErQixJQUEvQixFQUFGOzs7OzZCQUNEO0FBQUUsV0FBSyxRQUFMLENBQWMsTUFBZCxHQUFGOzs7OzZCQUNBO0FBQUUsV0FBSyxRQUFMLENBQWMsTUFBZCxHQUFGOzs7OzRCQUNEO0FBQUUsV0FBSyxRQUFMLENBQWMsS0FBZCxHQUFGOzs7OytCQUVHO0FBQUUsYUFBTyxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQVAsQ0FBRjs7OztnQ0FDQztBQUFFLGFBQU8sS0FBSyxRQUFMLENBQWMsTUFBZCxFQUFQLENBQUY7Ozs7Z0NBRUE7QUFDVixVQUFJLFVBQVUsS0FBSyxRQUFMLENBQWMsTUFBZCxFQUFWO1VBQ0EsTUFBTSxRQUFRLEdBQVI7O0FBQ04sYUFBTyxRQUFRLElBQVI7O0FBQ1AsY0FBUSxLQUFLLFFBQUwsRUFBUjtVQUNBLFNBQVMsS0FBSyxTQUFMLEVBQVQ7VUFDQSxT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QUFtQixLQUFuQixFQUEwQjtBQUFFLFNBQU8sTUFBTSxTQUFOLENBQWdCLEtBQWhCLENBQXNCLElBQXRCLENBQTJCLEtBQTNCLEVBQWtDLENBQWxDLENBQVAsQ0FBRjtDQUExQiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgQm91bmRzID0gcmVxdWlyZSgnLi9ib3VuZHMnKTtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JTb21ldGhpbmcpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gdG8kRWxlbWVudChzZWxlY3Rvck9yU29tZXRoaW5nKTtcblxuICAgIHRoaXMuZGF0YSgnZWxlbWVudCcsIHRoaXMpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBFbGVtZW50LmNsb25lKHRoaXMpOyB9XG5cbiAgc2hvdygpIHsgdGhpcy4kZWxlbWVudC5zaG93KCk7IH1cbiAgaGlkZSgpIHsgdGhpcy4kZWxlbWVudC5oaWRlKCk7IH1cbiAgZW5hYmxlKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7IH1cbiAgZGlzYWJsZSgpIHsgdGhpcy4kZWxlbWVudC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpOyB9XG4gIHJlbW92ZSgpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmUoKTsgfVxuICBkZXRhY2goKSB7IHRoaXMuJGVsZW1lbnQuZGV0YWNoKCk7IH1cbiAgZW1wdHkoKSB7IHRoaXMuJGVsZW1lbnQuZW1wdHkoKTsgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC53aWR0aCgpOyB9XG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGVpZ2h0KCk7IH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgdmFyICRvZmZzZXQgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpLFxuICAgICAgICB0b3AgPSAkb2Zmc2V0LnRvcCwgIC8vL1xuICAgICAgICBsZWZ0ID0gJG9mZnNldC5sZWZ0LCAgLy8vXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICBib3R0b20gPSB0b3AgKyBoZWlnaHQsXG4gICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy4kZWxlbWVudC53aWR0aCh3aWR0aCk7IH1cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLiRlbGVtZW50LmhlaWdodChoZWlnaHQpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lKTsgfVxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy4kZWxlbWVudC5hdHRyKG5hbWUsIHZhbHVlKTsgfVxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIobmFtZSk7IH1cbiAgcHJlcGVuZEJlZm9yZShlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYmVmb3JlKGVsZW1lbnQuJGVsZW1lbnQpOyB9XG4gIGFwcGVuZEFmdGVyKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5hZnRlcihlbGVtZW50LiRlbGVtZW50KTsgfVxuICBcbiAgcHJlcGVuZChlbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBlbGVtZW50T3JTdHJpbmc7IC8vL1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnByZXBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQucHJlcGVuZCgkZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIFxuICBhcHBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0gZWxlbWVudE9yU3RyaW5nOyAvLy9cblxuICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKCRlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpOyB9XG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7IH1cbiAgcmVtb3ZlQ2xhc3NlcygpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygpOyB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuaHRtbChodG1sKVxuICAgIH0gZWxzZSB7XG4gICAgICBodG1sID0gdGhpcy4kZWxlbWVudC5odG1sKCk7XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSBjc3M7XG5cbiAgICAgIGNzcyA9IHRoaXMuJGVsZW1lbnQuY3NzKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKGNzcyk7XG4gICAgfVxuICB9XG5cbiAgZGF0YSgpIHtcbiAgICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAga2V5ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICB2YWx1ZTtcblxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICAgIHZhbHVlID0gdGhpcy4kZWxlbWVudC5kYXRhKGtleSk7XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuZGF0YShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBmaW5kRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgZm91bmRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuZmluZChzZWxlY3RvciksXG4gICAgICAgIGZvdW5kRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhmb3VuZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmb3VuZEVsZW1lbnRzO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBjaGlsZERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbihzZWxlY3RvciksXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50RWxlbWVudChzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQucGFyZW50KHNlbGVjdG9yKSxcbiAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKSxcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBwYXJlbnRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQucGFyZW50cyhzZWxlY3RvciksXG4gICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnRzO1xuICB9XG5cbiAgb24oZXZlbnRzLCBoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oZXZlbnRzLCBoYW5kbGVyKTsgfVxuXG4gIG9uTW91c2VVcChoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNldXAnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH1cbiAgb25Nb3VzZURvd24oaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZWRvd24nLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH1cbiAgb25Nb3VzZU92ZXIoaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZW92ZXInLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH1cbiAgb25Nb3VzZU91dChoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlb3V0JywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9XG4gIG9uTW91c2VNb3ZlKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2Vtb3ZlJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikpOyB9XG5cbiAgc3RhdGljIGNsb25lKCkge1xuICAgIHZhciBmaXJzdEFyZ3VtZW50ID0gZmlyc3QoYXJndW1lbnRzKSxcbiAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzID0gcmVtYWluaW5nKGFyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gaW5zdGFuY2UoXG4gICAgICBmaXJzdEFyZ3VtZW50LFxuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLFxuICAgICAgZnVuY3Rpb24oZmlyc3RBcmd1bWVudCkge1xuICAgICAgICByZXR1cm4gKCh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpIHx8IChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudCkpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICAgIHZhciAkZWxlbWVudCA9ICh0eXBlb2Ygc2Vjb25kQXJndW1lbnQgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgJChzZWNvbmRBcmd1bWVudCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kQXJndW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgICAgcmV0dXJuICRlbGVtZW50LmNsb25lKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTCgpIHtcbiAgICB2YXIgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyksXG4gICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IHJlbWFpbmluZyhhcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGluc3RhbmNlKFxuICAgICAgZmlyc3RBcmd1bWVudCxcbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyxcbiAgICAgIGZ1bmN0aW9uKGZpcnN0QXJndW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICAgIHJldHVybiAkKHNlY29uZEFyZ3VtZW50KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KCkge1xuICAgIHZhciBmaXJzdEFyZ3VtZW50ID0gZmlyc3QoYXJndW1lbnRzKSxcbiAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzID0gcmVtYWluaW5nKGFyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gaW5zdGFuY2UoXG4gICAgICBmaXJzdEFyZ3VtZW50LFxuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLFxuICAgICAgZnVuY3Rpb24oZmlyc3RBcmd1bWVudCkge1xuICAgICAgICByZXR1cm4gKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICQoc2Vjb25kQXJndW1lbnQpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cblxuRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiA9IDE7XG5FbGVtZW50Lk1JRERMRV9NT1VTRV9CVVRUT04gPSAyO1xuRWxlbWVudC5SSUdIVF9NT1VTRV9CVVRUT04gPSAzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHRvJEVsZW1lbnQoc2VsZWN0b3JPclNvbWV0aGluZykge1xuICB2YXIgJGVsZW1lbnQ7XG5cbiAgaWYgKGZhbHNlKSB7XG5cbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3JPclNvbWV0aGluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAkZWxlbWVudCA9ICQoc2VsZWN0b3JPclNvbWV0aGluZyk7XG4gIH0gZWxzZSBpZiAoc2VsZWN0b3JPclNvbWV0aGluZyBpbnN0YW5jZW9mICQpIHtcbiAgICAkZWxlbWVudCA9IHNlbGVjdG9yT3JTb21ldGhpbmc7ICAvLy9cbiAgfSBlbHNlIGlmIChzZWxlY3Rvck9yU29tZXRoaW5nIGluc3RhbmNlb2YgQXJyYXkgKSB7XG4gICAgdmFyIHBhcmVudEVsZW1lbnQgPSBzZWxlY3Rvck9yU29tZXRoaW5nWzBdLCAvLy9cbiAgICAgICAgY2hpbGRTZWxlY3RvciA9IHNlbGVjdG9yT3JTb21ldGhpbmdbMV0sICAvLy9cbiAgICAgICAgcGFyZW50JEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LiRlbGVtZW50OyAgLy8vXG5cbiAgICAkZWxlbWVudCA9IHBhcmVudCRFbGVtZW50LmZpbmQoY2hpbGRTZWxlY3Rvcik7XG4gIH1cblxuICByZXR1cm4gJGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIG1vdXNlVG9wID0gZXZlbnQucGFnZVksICAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsIC8vL1xuICAgICAgICBtb3VzZUJ1dHRvbiA9IGV2ZW50LndoaWNoOyAvLy9cblxuICAgIGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICB2YXIgZWxlbWVudHMgPSBbXSxcbiAgICAgIGRvbUVsZW1lbnRzTGVuZ3RoID0gZG9tRWxlbWVudHMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9tRWxlbWVudHNMZW5ndGg7IGkrKykge1xuICAgIHZhciBkb21FbGVtZW50ID0gZG9tRWxlbWVudHNbaV0sXG4gICAgICAgICRlbGVtZW50ID0gJChkb21FbGVtZW50KSxcbiAgICAgICAgZWxlbWVudCA9ICRlbGVtZW50LmRhdGEoJ2VsZW1lbnQnKTtcblxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgdG8kRWxlbWVudCkge1xuICBpZiAoaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChmaXJzdEFyZ3VtZW50KTtcbiAgICBmaXJzdEFyZ3VtZW50ID0gRWxlbWVudDtcbiAgfVxuXG4gIHZhciBDbGFzcyA9IGZpcnN0QXJndW1lbnQsXG4gICAgICBzZWNvbmRBcmd1bWVudCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5zaGlmdCgpLFxuICAgICAgJGVsZW1lbnQgPSB0byRFbGVtZW50KHNlY29uZEFyZ3VtZW50KTtcblxuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdCgkZWxlbWVudCk7XG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpOyAvLy9cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7ICAvLy9cbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIHJlbWFpbmluZyhhcnJheSkgeyByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXksIDEpOyB9XG4iXX0=
