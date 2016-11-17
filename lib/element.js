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

    this.resizeHandlers = [];
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

      return includeBorder ? this.$element.outerWidth(includeMargin) : this.$element.width();
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return includeBorder ? this.$element.outerHeight(includeMargin) : this.$element.height();
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
    key: 'onResize',
    value: function onResize(resizeHandler) {
      var resizeHandlers = hasResizeHandlers(this);

      if (!resizeHandlers) {
        appendResizeObject(this);
      }

      addResizeHandler(this, resizeHandler);
    }
  }, {
    key: 'offResize',
    value: function offResize(resizeHandler) {
      removeResizeHandler(this, resizeHandler);

      var resizeHandlers = hasResizeHandlers(this);

      if (!resizeHandlers) {
        removeResizeObject(this);
      }
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

function addResizeHandler(instance, resizeHandler) {
  instance.resizeHandlers.push(resizeHandler);
}

function removeResizeHandler(instance, resizeHandler) {
  var start = instance.resizeHandlers.indexOf(resizeHandler); ///

  if (start > -1) {
    var deleteCount = 1;

    instance.resizeHandlers.splice(start, deleteCount);
  }
}

function hasResizeHandlers(instance) {
  var resizeHandlersLength = instance.resizeHandlers.length,
      resizeHandlers = resizeHandlersLength > 0;

  return resizeHandlers;
}

function appendResizeObject(instance) {
  var resizeObject = document.createElement('object'),
      domElement = instance.$element[0]; ///

  resizeObject.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
  resizeObject.data = 'about:blank';
  resizeObject.type = 'text/html';

  resizeObject.__domElement__ = domElement;
  domElement.__resizeObject__ = resizeObject;
  domElement.__instance__ = instance;

  resizeObject.onload = resizeObjectLoadHandler;

  domElement.appendChild(resizeObject);
}

function removeResizeObject(instance) {
  var domElement = instance.$element[0],
      ///
  resizeObject = domElement.__resizeObject__,
      objectWindow = resizeObject.contentDocument.defaultView; ///

  objectWindow.removeEventListener('resize', resizeListener);

  domElement.removeChild(resizeObject);
}

function resizeObjectLoadHandler() {
  var resizeObjectWindow = this.contentDocument.defaultView; ///

  resizeObjectWindow.__domElement__ = this.__domElement__;
  resizeObjectWindow.addEventListener('resize', resizeListener);
}

function resizeListener(event) {
  var resizeObjectWindow = event.target || event.srcElement,
      ///
  domElement = resizeObjectWindow.__domElement__,
      instance = domElement.__instance__,
      width = instance.getWidth(),
      height = instance.getHeight();

  instance.resizeHandlers.forEach(function (resizeHandler) {
    resizeHandler(width, height);
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiQm91bmRzIiwiUG9zaXRpb24iLCJFbGVtZW50Iiwic2VsZWN0b3JPclNvbWV0aGluZyIsIiRlbGVtZW50IiwidG8kRWxlbWVudCIsImRhdGEiLCJyZXNpemVIYW5kbGVycyIsImNsb25lIiwic2hvdyIsImhpZGUiLCJyZW1vdmVBdHRyIiwiYXR0ciIsInJlbW92ZSIsImRldGFjaCIsImVtcHR5IiwiJHBvc2l0aW9uIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiaW5jbHVkZUJvcmRlciIsImluY2x1ZGVNYXJnaW4iLCIkb2Zmc2V0Iiwib2Zmc2V0Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImJvdHRvbSIsInJpZ2h0IiwiYm91bmRzIiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0IiwibmFtZSIsInZhbHVlIiwiZWxlbWVudCIsImJlZm9yZSIsImFmdGVyIiwiZWxlbWVudE9yU3RyaW5nIiwic3RyaW5nIiwicHJlcGVuZCIsImFwcGVuZCIsImNsYXNzTmFtZSIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImh0bWwiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjc3MiLCJwcm9wZXJ0eU5hbWUiLCJhcmd1bWVudHNMZW5ndGgiLCJrZXkiLCJzZWxlY3RvciIsImZvdW5kRE9NRWxlbWVudHMiLCJmaW5kIiwiZm91bmRFbGVtZW50cyIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiY2hpbGRET01FbGVtZW50cyIsImNoaWxkcmVuIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50IiwicGFyZW50RWxlbWVudHMiLCJmaXJzdFBhcmVudEVsZW1lbnQiLCJmaXJzdCIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnRzIiwiZXZlbnRzIiwiaGFuZGxlciIsIm5hbWVzcGFjZSIsInVuZGVmaW5lZCIsIm9uIiwib2ZmIiwibW91c2VVcEhhbmRsZXIiLCJyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwibW91c2VPdXRIYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsInJlc2l6ZUhhbmRsZXIiLCJoYXNSZXNpemVIYW5kbGVycyIsImFwcGVuZFJlc2l6ZU9iamVjdCIsImFkZFJlc2l6ZUhhbmRsZXIiLCJyZW1vdmVSZXNpemVIYW5kbGVyIiwicmVtb3ZlUmVzaXplT2JqZWN0IiwiZmlyc3RBcmd1bWVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImluc3RhbmNlIiwiaXNOb3RBQ2xhc3MiLCJzZWNvbmRBcmd1bWVudCIsIkhUTUxFbGVtZW50IiwiTEVGVF9NT1VTRV9CVVRUT04iLCJNSURETEVfTU9VU0VfQlVUVE9OIiwiUklHSFRfTU9VU0VfQlVUVE9OIiwibW9kdWxlIiwiZXhwb3J0cyIsIkFycmF5IiwiY2hpbGRTZWxlY3RvciIsInBhcmVudCRFbGVtZW50IiwiZXZlbnQiLCJtb3VzZVRvcCIsInBhZ2VZIiwibW91c2VMZWZ0IiwicGFnZVgiLCJtb3VzZUJ1dHRvbiIsIndoaWNoIiwiZG9tRWxlbWVudHMiLCJlbGVtZW50cyIsImRvbUVsZW1lbnRzTGVuZ3RoIiwiaSIsImRvbUVsZW1lbnQiLCJwdXNoIiwidW5zaGlmdCIsIkNsYXNzIiwic2hpZnQiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsImJpbmQiLCJhcHBseSIsImFycmF5Iiwic3RhcnQiLCJpbmRleE9mIiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZXNpemVIYW5kbGVyc0xlbmd0aCIsInJlc2l6ZU9iamVjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInR5cGUiLCJfX2RvbUVsZW1lbnRfXyIsIl9fcmVzaXplT2JqZWN0X18iLCJfX2luc3RhbmNlX18iLCJvbmxvYWQiLCJyZXNpemVPYmplY3RMb2FkSGFuZGxlciIsImFwcGVuZENoaWxkIiwib2JqZWN0V2luZG93IiwiY29udGVudERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzaXplTGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsInJlc2l6ZU9iamVjdFdpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJzcmNFbGVtZW50IiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsUUFBUixDQUFSOztBQUVBLElBQUlDLFNBQVNELFFBQVEsVUFBUixDQUFiO0FBQUEsSUFDSUUsV0FBV0YsUUFBUSxZQUFSLENBRGY7O0lBR01HLE87QUFDSixtQkFBWUMsbUJBQVosRUFBaUM7QUFBQTs7QUFDL0IsU0FBS0MsUUFBTCxHQUFnQkMsV0FBV0YsbUJBQVgsQ0FBaEI7O0FBRUEsU0FBS0csSUFBTCxDQUFVLFNBQVYsRUFBcUIsSUFBckI7O0FBRUEsU0FBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNEOzs7OzRCQUVPO0FBQUUsYUFBT0wsUUFBUU0sS0FBUixDQUFjLElBQWQsQ0FBUDtBQUE2Qjs7OzJCQUVoQztBQUFFLFdBQUtKLFFBQUwsQ0FBY0ssSUFBZDtBQUF1Qjs7OzJCQUN6QjtBQUFFLFdBQUtMLFFBQUwsQ0FBY00sSUFBZDtBQUF1Qjs7OzZCQUN2QjtBQUFFLFdBQUtOLFFBQUwsQ0FBY08sVUFBZCxDQUF5QixVQUF6QjtBQUF1Qzs7OzhCQUN4QztBQUFFLFdBQUtQLFFBQUwsQ0FBY1EsSUFBZCxDQUFtQixVQUFuQixFQUErQixJQUEvQjtBQUF1Qzs7OzZCQUMxQztBQUFFLFdBQUtSLFFBQUwsQ0FBY1MsTUFBZDtBQUF5Qjs7OzZCQUMzQjtBQUFFLFdBQUtULFFBQUwsQ0FBY1UsTUFBZDtBQUF5Qjs7OzRCQUM1QjtBQUFFLFdBQUtWLFFBQUwsQ0FBY1csS0FBZDtBQUF3Qjs7O2tDQUVwQjtBQUNaLFVBQUlDLFlBQVksS0FBS1osUUFBTCxDQUFjYSxRQUFkLEVBQWhCO0FBQUEsVUFDSUMsTUFBTUYsVUFBVUUs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U0EsY0FBVCxDQUF3QnpDLEtBQXhCLEVBQStCO0FBQzdCLE1BQUkyQyxxQkFBcUIzQyxNQUFNNkMsTUFBTixJQUFnQjdDLE1BQU04QyxVQUEvQztBQUFBLE1BQTREO0FBQ3hEbkMsZUFBYWdDLG1CQUFtQlosY0FEcEM7QUFBQSxNQUVJM0MsV0FBV3VCLFdBQVdzQixZQUYxQjtBQUFBLE1BR0k3RyxRQUFRZ0UsU0FBUy9ELFFBQVQsRUFIWjtBQUFBLE1BSUlDLFNBQVM4RCxTQUFTN0QsU0FBVCxFQUpiOztBQU1BNkQsV0FBU2pGLGNBQVQsQ0FBd0I0SSxPQUF4QixDQUFnQyxVQUFTbkUsYUFBVCxFQUF1QjtBQUNyREEsa0JBQWN4RCxLQUFkLEVBQXFCRSxNQUFyQjtBQUNELEdBRkQ7QUFHRCIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgQm91bmRzID0gcmVxdWlyZSgnLi9ib3VuZHMnKSxcbiAgICBQb3NpdGlvbiA9IHJlcXVpcmUoJy4vcG9zaXRpb24nKTtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JTb21ldGhpbmcpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gdG8kRWxlbWVudChzZWxlY3Rvck9yU29tZXRoaW5nKTtcblxuICAgIHRoaXMuZGF0YSgnZWxlbWVudCcsIHRoaXMpO1xuXG4gICAgdGhpcy5yZXNpemVIYW5kbGVycyA9IFtdO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBFbGVtZW50LmNsb25lKHRoaXMpOyB9XG5cbiAgc2hvdygpIHsgdGhpcy4kZWxlbWVudC5zaG93KCk7IH1cbiAgaGlkZSgpIHsgdGhpcy4kZWxlbWVudC5oaWRlKCk7IH1cbiAgZW5hYmxlKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7IH1cbiAgZGlzYWJsZSgpIHsgdGhpcy4kZWxlbWVudC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpOyB9XG4gIHJlbW92ZSgpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmUoKTsgfVxuICBkZXRhY2goKSB7IHRoaXMuJGVsZW1lbnQuZGV0YWNoKCk7IH1cbiAgZW1wdHkoKSB7IHRoaXMuJGVsZW1lbnQuZW1wdHkoKTsgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHZhciAkcG9zaXRpb24gPSB0aGlzLiRlbGVtZW50LnBvc2l0aW9uKCksXG4gICAgICAgIHRvcCA9ICRwb3NpdGlvbi50b3AsXG4gICAgICAgIGxlZnQgPSAkcG9zaXRpb24ubGVmdCxcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24odG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIGdldEJvdW5kcyhpbmNsdWRlQm9yZGVyID0gZmFsc2UsIGluY2x1ZGVNYXJnaW4gPSBmYWxzZSkge1xuICAgIHZhciAkb2Zmc2V0ID0gdGhpcy4kZWxlbWVudC5vZmZzZXQoKSxcbiAgICAgICAgdG9wID0gJG9mZnNldC50b3AsICAvLy9cbiAgICAgICAgbGVmdCA9ICRvZmZzZXQubGVmdCwgIC8vL1xuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciwgaW5jbHVkZU1hcmdpbiksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIsIGluY2x1ZGVNYXJnaW4pLFxuICAgICAgICBib3R0b20gPSB0b3AgKyBoZWlnaHQsXG4gICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IGZhbHNlLCBpbmNsdWRlTWFyZ2luID0gZmFsc2UpIHsgXG4gICAgcmV0dXJuIGluY2x1ZGVCb3JkZXIgPyBcbiAgICAgICAgICAgICB0aGlzLiRlbGVtZW50Lm91dGVyV2lkdGgoaW5jbHVkZU1hcmdpbikgOlxuICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC53aWR0aCgpOyBcbiAgfVxuICBcbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSBmYWxzZSwgaW5jbHVkZU1hcmdpbiA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQub3V0ZXJIZWlnaHQoaW5jbHVkZU1hcmdpbikgOlxuICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5oZWlnaHQoKTtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuJGVsZW1lbnQud2lkdGgod2lkdGgpOyB9XG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy4kZWxlbWVudC5oZWlnaHQoaGVpZ2h0KTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LmF0dHIobmFtZSk7IH1cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lLCB2YWx1ZSk7IH1cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKG5hbWUpOyB9XG4gIHByZXBlbmRCZWZvcmUoZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmJlZm9yZShlbGVtZW50LiRlbGVtZW50KTsgfVxuICBhcHBlbmRBZnRlcihlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYWZ0ZXIoZWxlbWVudC4kZWxlbWVudCk7IH1cbiAgXG4gIHByZXBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0gZWxlbWVudE9yU3RyaW5nOyAvLy9cblxuICAgICAgdGhpcy4kZWxlbWVudC5wcmVwZW5kKHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudE9yU3RyaW5nLCAgLy8vXG4gICAgICAgICAgJGVsZW1lbnQgPSBlbGVtZW50LiRlbGVtZW50O1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnByZXBlbmQoJGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBcbiAgYXBwZW5kKGVsZW1lbnRPclN0cmluZykge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHN0cmluZyA9IGVsZW1lbnRPclN0cmluZzsgLy8vXG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudE9yU3RyaW5nLCAgLy8vXG4gICAgICAgICAgJGVsZW1lbnQgPSBlbGVtZW50LiRlbGVtZW50O1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZCgkZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSk7IH1cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpOyB9XG4gIHJlbW92ZUNsYXNzZXMoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoKTsgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lmh0bWwoaHRtbClcbiAgICB9IGVsc2Uge1xuICAgICAgaHRtbCA9IHRoaXMuJGVsZW1lbnQuaHRtbCgpO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgcHJvcGVydHlOYW1lID0gY3NzO1xuXG4gICAgICBjc3MgPSB0aGlzLiRlbGVtZW50LmNzcyhwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmNzcyhjc3MpO1xuICAgIH1cbiAgfVxuXG4gIGRhdGEoKSB7XG4gICAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgIGtleSA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgdmFsdWU7XG5cbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQuZGF0YShrZXkpO1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmRhdGEoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZmluZEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIGZvdW5kRE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LmZpbmQoc2VsZWN0b3IpLFxuICAgICAgICBmb3VuZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZm91bmRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZm91bmRFbGVtZW50cztcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgY2hpbGRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oc2VsZWN0b3IpLFxuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudEVsZW1lbnQoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50RE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LnBhcmVudChzZWxlY3RvciksXG4gICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyksXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcGFyZW50RWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50RE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LnBhcmVudHMoc2VsZWN0b3IpLFxuICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50cztcbiAgfVxuXG4gIG9uKGV2ZW50cywgaGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgaWYgKG5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBldmVudHMgPSBldmVudHMgKyAnLicgKyBuYW1lc3BhY2U7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuJGVsZW1lbnQub24oZXZlbnRzLCBoYW5kbGVyKTsgXG4gIH1cbiAgXG4gIG9mZihldmVudHMsIG5hbWVzcGFjZSkge1xuICAgIGlmIChuYW1lc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnRzID0gZXZlbnRzICsgJy4nICsgbmFtZXNwYWNlO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLiRlbGVtZW50Lm9mZihldmVudHMpO1xuICB9XG5cbiAgb25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2V1cCcsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuICBvbk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2Vkb3duJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIobW91c2VEb3duSGFuZGxlciksIG5hbWVzcGFjZSk7IH1cbiAgb25Nb3VzZU92ZXIobW91c2VPdmVySGFuZGxlciwgbmFtZXNwYWNlKSB7IHRoaXMub24oJ21vdXNlb3ZlcicsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlT3ZlckhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VPdXQobW91c2VPdXRIYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2VvdXQnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihtb3VzZU91dEhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZW1vdmUnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuICBcbiAgb25SZXNpemUocmVzaXplSGFuZGxlcikge1xuICAgIHZhciByZXNpemVIYW5kbGVycyA9IGhhc1Jlc2l6ZUhhbmRsZXJzKHRoaXMpO1xuXG4gICAgaWYgKCFyZXNpemVIYW5kbGVycykge1xuICAgICAgYXBwZW5kUmVzaXplT2JqZWN0KHRoaXMpO1xuICAgIH1cblxuICAgIGFkZFJlc2l6ZUhhbmRsZXIodGhpcywgcmVzaXplSGFuZGxlcik7XG4gIH1cblxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlcikge1xuICAgIHJlbW92ZVJlc2l6ZUhhbmRsZXIodGhpcywgcmVzaXplSGFuZGxlcik7XG5cbiAgICB2YXIgcmVzaXplSGFuZGxlcnMgPSBoYXNSZXNpemVIYW5kbGVycyh0aGlzKTtcblxuICAgIGlmICghcmVzaXplSGFuZGxlcnMpIHtcbiAgICAgIHJlbW92ZVJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBvZmZNb3VzZVVwKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2V1cCcsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VEb3duKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2Vkb3duJywgbmFtZXNwYWNlKTsgfVxuICBvZmZNb3VzZU92ZXIobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZW92ZXInLCBuYW1lc3BhY2UpOyB9XG4gIG9mZk1vdXNlT3V0KG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2VvdXQnLCBuYW1lc3BhY2UpOyB9XG4gIG9mZk1vdXNlTW92ZShuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ21vdXNlbW92ZScsIG5hbWVzcGFjZSk7IH1cblxuICBzdGF0aWMgY2xvbmUoZmlyc3RBcmd1bWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlKGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsIHRvJEVsZW1lbnQpO1xuXG4gICAgZnVuY3Rpb24gaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICgodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB8fCAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0byRFbGVtZW50KHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICB2YXIgJGVsZW1lbnQgPSAodHlwZW9mIHNlY29uZEFyZ3VtZW50ID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICQoc2Vjb25kQXJndW1lbnQpIDpcbiAgICAgICAgICBzZWNvbmRBcmd1bWVudC4kZWxlbWVudDtcblxuICAgICAgcmV0dXJuICRlbGVtZW50LmNsb25lKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGZpcnN0QXJndW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCB0byRFbGVtZW50KTtcblxuICAgIGZ1bmN0aW9uIGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0byRFbGVtZW50KHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gJChzZWNvbmRBcmd1bWVudCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGZpcnN0QXJndW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCB0byRFbGVtZW50KTtcblxuICAgIGZ1bmN0aW9uIGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0byRFbGVtZW50KHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gJChzZWNvbmRBcmd1bWVudCk7XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQuTEVGVF9NT1VTRV9CVVRUT04gPSAxO1xuRWxlbWVudC5NSURETEVfTU9VU0VfQlVUVE9OID0gMjtcbkVsZW1lbnQuUklHSFRfTU9VU0VfQlVUVE9OID0gMztcblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiB0byRFbGVtZW50KHNlbGVjdG9yT3JTb21ldGhpbmcpIHtcbiAgdmFyICRlbGVtZW50O1xuXG4gIGlmIChmYWxzZSkge1xuXG4gIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yT3JTb21ldGhpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgJGVsZW1lbnQgPSAkKHNlbGVjdG9yT3JTb21ldGhpbmcpO1xuICB9IGVsc2UgaWYgKHNlbGVjdG9yT3JTb21ldGhpbmcgaW5zdGFuY2VvZiAkKSB7XG4gICAgJGVsZW1lbnQgPSBzZWxlY3Rvck9yU29tZXRoaW5nOyAgLy8vXG4gIH0gZWxzZSBpZiAoc2VsZWN0b3JPclNvbWV0aGluZyBpbnN0YW5jZW9mIEFycmF5ICkge1xuICAgIHZhciBwYXJlbnRFbGVtZW50ID0gc2VsZWN0b3JPclNvbWV0aGluZ1swXSwgLy8vXG4gICAgICAgIGNoaWxkU2VsZWN0b3IgPSBzZWxlY3Rvck9yU29tZXRoaW5nWzFdLCAgLy8vXG4gICAgICAgIHBhcmVudCRFbGVtZW50ID0gcGFyZW50RWxlbWVudC4kZWxlbWVudDsgIC8vL1xuXG4gICAgJGVsZW1lbnQgPSBwYXJlbnQkRWxlbWVudC5maW5kKGNoaWxkU2VsZWN0b3IpO1xuICB9XG5cbiAgcmV0dXJuICRlbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBtb3VzZVRvcCA9IGV2ZW50LnBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBldmVudC53aGljaDsgLy8vXG5cbiAgICBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQsIG1vdXNlQnV0dG9uKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMpIHtcbiAgdmFyIGVsZW1lbnRzID0gW10sXG4gICAgICBkb21FbGVtZW50c0xlbmd0aCA9IGRvbUVsZW1lbnRzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvbUVsZW1lbnRzTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRzW2ldLFxuICAgICAgICAkZWxlbWVudCA9ICQoZG9tRWxlbWVudCksXG4gICAgICAgIGVsZW1lbnQgPSAkZWxlbWVudC5kYXRhKCdlbGVtZW50Jyk7XG5cbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGluc3RhbmNlKGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsIHRvJEVsZW1lbnQpIHtcbiAgaWYgKGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpKSB7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZmlyc3RBcmd1bWVudCk7XG4gICAgZmlyc3RBcmd1bWVudCA9IEVsZW1lbnQ7XG4gIH1cblxuICB2YXIgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LFxuICAgICAgc2Vjb25kQXJndW1lbnQgPSByZW1haW5pbmdBcmd1bWVudHMuc2hpZnQoKSxcbiAgICAgICRlbGVtZW50ID0gdG8kRWxlbWVudChzZWNvbmRBcmd1bWVudCk7XG5cbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoJGVsZW1lbnQpO1xuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTsgLy8vXG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpOyAgLy8vXG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiBhZGRSZXNpemVIYW5kbGVyKGluc3RhbmNlLCByZXNpemVIYW5kbGVyKSB7XG4gIGluc3RhbmNlLnJlc2l6ZUhhbmRsZXJzLnB1c2gocmVzaXplSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJlc2l6ZUhhbmRsZXIoaW5zdGFuY2UsIHJlc2l6ZUhhbmRsZXIpIHtcbiAgdmFyIHN0YXJ0ID0gaW5zdGFuY2UucmVzaXplSGFuZGxlcnMuaW5kZXhPZihyZXNpemVIYW5kbGVyKTsgLy8vXG5cbiAgaWYgKHN0YXJ0ID4gLTEpIHtcbiAgICB2YXIgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgaW5zdGFuY2UucmVzaXplSGFuZGxlcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFzUmVzaXplSGFuZGxlcnMoaW5zdGFuY2UpIHtcbiAgdmFyIHJlc2l6ZUhhbmRsZXJzTGVuZ3RoID0gaW5zdGFuY2UucmVzaXplSGFuZGxlcnMubGVuZ3RoLFxuICAgICAgcmVzaXplSGFuZGxlcnMgPSAocmVzaXplSGFuZGxlcnNMZW5ndGggPiAwKTtcblxuICByZXR1cm4gcmVzaXplSGFuZGxlcnM7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFJlc2l6ZU9iamVjdChpbnN0YW5jZSkge1xuICB2YXIgcmVzaXplT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0JyksXG4gICAgICBkb21FbGVtZW50ID0gaW5zdGFuY2UuJGVsZW1lbnRbMF07ICAvLy9cblxuICByZXNpemVPYmplY3Quc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47IHBvaW50ZXItZXZlbnRzOiBub25lOyB6LWluZGV4OiAtMTsnKTtcbiAgcmVzaXplT2JqZWN0LmRhdGEgPSAnYWJvdXQ6YmxhbmsnO1xuICByZXNpemVPYmplY3QudHlwZSA9ICd0ZXh0L2h0bWwnO1xuXG4gIHJlc2l6ZU9iamVjdC5fX2RvbUVsZW1lbnRfXyA9IGRvbUVsZW1lbnQ7XG4gIGRvbUVsZW1lbnQuX19yZXNpemVPYmplY3RfXyA9IHJlc2l6ZU9iamVjdDtcbiAgZG9tRWxlbWVudC5fX2luc3RhbmNlX18gPSBpbnN0YW5jZTtcblxuICByZXNpemVPYmplY3Qub25sb2FkID0gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXI7XG5cbiAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSZXNpemVPYmplY3QoaW5zdGFuY2UpIHtcbiAgdmFyIGRvbUVsZW1lbnQgPSBpbnN0YW5jZS4kZWxlbWVudFswXSwgIC8vL1xuICAgICAgcmVzaXplT2JqZWN0ID0gZG9tRWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgb2JqZWN0V2luZG93ID0gcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIG9iamVjdFdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVMaXN0ZW5lcik7XG5cbiAgZG9tRWxlbWVudC5yZW1vdmVDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZXNpemVPYmplY3RMb2FkSGFuZGxlcigpIHtcbiAgdmFyIHJlc2l6ZU9iamVjdFdpbmRvdyA9IHRoaXMuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgcmVzaXplT2JqZWN0V2luZG93Ll9fZG9tRWxlbWVudF9fID0gdGhpcy5fX2RvbUVsZW1lbnRfXztcbiAgcmVzaXplT2JqZWN0V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gcmVzaXplTGlzdGVuZXIoZXZlbnQpIHtcbiAgdmFyIHJlc2l6ZU9iamVjdFdpbmRvdyA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50LCAgLy8vXG4gICAgICBkb21FbGVtZW50ID0gcmVzaXplT2JqZWN0V2luZG93Ll9fZG9tRWxlbWVudF9fLFxuICAgICAgaW5zdGFuY2UgPSBkb21FbGVtZW50Ll9faW5zdGFuY2VfXyxcbiAgICAgIHdpZHRoID0gaW5zdGFuY2UuZ2V0V2lkdGgoKSxcbiAgICAgIGhlaWdodCA9IGluc3RhbmNlLmdldEhlaWdodCgpO1xuXG4gIGluc3RhbmNlLnJlc2l6ZUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24ocmVzaXplSGFuZGxlcil7XG4gICAgcmVzaXplSGFuZGxlcih3aWR0aCwgaGVpZ2h0KTtcbiAgfSk7XG59XG4iXX0=