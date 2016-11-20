'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var Bounds = require('./bounds'),
    Position = require('./position');

var Element = function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    this.$element = $elementFromSelector(selector);

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

      return instance(firstArgument, remainingArguments, isNotAClass, $elementFromSecondArgument);

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

      return instance(firstArgument, remainingArguments, isNotAClass, $elementFromSecondArgument);

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

      return instance(firstArgument, remainingArguments, isNotAClass, $elementFromSecondArgument);

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

function instance(firstArgument, remainingArguments, isNotAClass, $elementFromSecondArgument) {
  if (isNotAClass(firstArgument)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiQm91bmRzIiwiUG9zaXRpb24iLCJFbGVtZW50Iiwic2VsZWN0b3IiLCIkZWxlbWVudCIsIiRlbGVtZW50RnJvbVNlbGVjdG9yIiwiZGF0YSIsInJlc2l6ZUhhbmRsZXJzIiwiY2xvbmUiLCJzaG93IiwiaGlkZSIsInJlbW92ZUF0dHIiLCJhdHRyIiwicmVtb3ZlIiwiZGV0YWNoIiwiZW1wdHkiLCIkcG9zaXRpb24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJpbmNsdWRlQm9yZGVyIiwiaW5jbHVkZU1hcmdpbiIsIiRvZmZzZXQiLCJvZmZzZXQiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiLCJib3VuZHMiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJuYW1lIiwidmFsdWUiLCJlbGVtZW50IiwiYmVmb3JlIiwiYWZ0ZXIiLCJlbGVtZW50T3JTdHJpbmciLCJzdHJpbmciLCJwcmVwZW5kIiwiYXBwZW5kIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaHRtbCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNzcyIsInByb3BlcnR5TmFtZSIsImFyZ3VtZW50c0xlbmd0aCIsImtleSIsImZvdW5kRE9NRWxlbWVudHMiLCJmaW5kIiwiZm91bmRFbGVtZW50cyIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiY2hpbGRET01FbGVtZW50cyIsImNoaWxkcmVuIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50IiwicGFyZW50RWxlbWVudHMiLCJmaXJzdFBhcmVudEVsZW1lbnQiLCJmaXJzdCIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnRzIiwiZXZlbnRzIiwiaGFuZGxlciIsIm5hbWVzcGFjZSIsInVuZGVmaW5lZCIsIm9uIiwib2ZmIiwibW91c2VVcEhhbmRsZXIiLCJyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwibW91c2VPdXRIYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsInJlc2l6ZUhhbmRsZXIiLCJoYXNSZXNpemVIYW5kbGVycyIsImFwcGVuZFJlc2l6ZU9iamVjdCIsImFkZFJlc2l6ZUhhbmRsZXIiLCJyZW1vdmVSZXNpemVIYW5kbGVyIiwicmVtb3ZlUmVzaXplT2JqZWN0IiwiZmlyc3RBcmd1bWVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImluc3RhbmNlIiwiaXNOb3RBQ2xhc3MiLCIkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCIsInNlY29uZEFyZ3VtZW50IiwiSFRNTEVsZW1lbnQiLCJMRUZUX01PVVNFX0JVVFRPTiIsIk1JRERMRV9NT1VTRV9CVVRUT04iLCJSSUdIVF9NT1VTRV9CVVRUT04iLCJtb2R1bGUiLCJleHBvcnRzIiwiQXJyYXkiLCJjaGlsZFNlbGVjdG9yIiwicGFyZW50JEVsZW1lbnQiLCJldmVudCIsIm1vdXNlVG9wIiwicGFnZVkiLCJtb3VzZUxlZnQiLCJwYWdlWCIsIm1vdXNlQnV0dG9uIiwid2hpY2giLCJkb21FbGVtZW50cyIsImVsZW1lbnRzIiwiZG9tRWxlbWVudHNMZW5ndGgiLCJpIiwiZG9tRWxlbWVudCIsInB1c2giLCJ1bnNoaWZ0IiwiQ2xhc3MiLCJzaGlmdCIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiYmluZCIsImFwcGx5IiwiYXJyYXkiLCJzdGFydCIsImluZGV4T2YiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJlc2l6ZUhhbmRsZXJzTGVuZ3RoIiwicmVzaXplT2JqZWN0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidHlwZSIsIl9fZG9tRWxlbWVudF9fIiwiX19yZXNpemVPYmplY3RfXyIsIl9faW5zdGFuY2VfXyIsIm9ubG9hZCIsInJlc2l6ZU9iamVjdExvYWRIYW5kbGVyIiwiYXBwZW5kQ2hpbGQiLCJvYmplY3RXaW5kb3ciLCJjb250ZW50RG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNpemVMaXN0ZW5lciIsInJlbW92ZUNoaWxkIiwicmVzaXplT2JqZWN0V2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsInNyY0VsZW1lbnQiLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxRQUFSLENBQVI7O0FBRUEsSUFBSUMsU0FBU0QsUUFBUSxVQUFSLENBQWI7QUFBQSxJQUNJRSxXQUFXRixRQUFRLFlBQVIsQ0FEZjs7SUFHTUcsTztBQUNKLG1CQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtDLFFBQUwsR0FBZ0JDLHFCQUFxQkYsUUFBckIsQ0FBaEI7O0FBRUEsU0FBS0csSUFBTCxDQUFVLFNBQVYsRUFBcUIsSUFBckI7O0FBRUEsU0FBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNEOzs7OzRCQUVPO0FBQUUsYUFBT0wsUUFBUU0sS0FBUixDQUFjLElBQWQsQ0FBUDtBQUE2Qjs7OzJCQUVoQztBQUFFLFdBQUtKLFFBQUwsQ0FBY0ssSUFBZDtBQUF1Qjs7OzJCQUN6QjtBQUFFLFdBQUtMLFFBQUwsQ0FBY00sSUFBZDtBQUF1Qjs7OzZCQUN2QjtBQUFFLFdBQUtOLFFBQUwsQ0FBY08sVUFBZCxDQUF5QixVQUF6QjtBQUF1Qzs7OzhCQUN4QztBQUFFLFdBQUtQLFFBQUwsQ0FBY1EsSUFBZCxDQUFtQixVQUFuQixFQUErQixJQUEvQjtBQUF1Qzs7OzZCQUMxQztBQUFFLFdBQUtSLFFBQUwsQ0FBY1MsTUFBZDtBQUF5Qjs7OzZCQUMzQjtBQUFFLFdBQUtULFFBQUwsQ0FBY1UsTUFBZDtBQUF5Qjs7OzRCQUM1QjtBQUFFLFdBQUtWLFFBQUwsQ0FBY1csS0FBZDtBQUF3Qjs7O2tDQUVwQjtBQUNaLFVBQUlDLFlBQVksS0FBS1osUUFBTCxDQUFjYSxRQUFkLEVBQWhCO0FBQUEs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Q0gsY0FBOUM7QUFDRDs7QUFFRCxTQUFTQSxjQUFULENBQXdCekMsS0FBeEIsRUFBK0I7QUFDN0IsTUFBSTJDLHFCQUFxQjNDLE1BQU02QyxNQUFOLElBQWdCN0MsTUFBTThDLFVBQS9DO0FBQUEsTUFBNEQ7QUFDeERuQyxlQUFhZ0MsbUJBQW1CWixjQURwQztBQUFBLE1BRUk1QyxXQUFXd0IsV0FBV3NCLFlBRjFCO0FBQUEsTUFHSTdHLFFBQVErRCxTQUFTOUQsUUFBVCxFQUhaO0FBQUEsTUFJSUMsU0FBUzZELFNBQVM1RCxTQUFULEVBSmI7O0FBTUE0RCxXQUFTaEYsY0FBVCxDQUF3QjRJLE9BQXhCLENBQWdDLFVBQVNwRSxhQUFULEVBQXVCO0FBQ3JEQSxrQkFBY3ZELEtBQWQsRUFBcUJFLE1BQXJCO0FBQ0QsR0FGRDtBQUdEIiwiZmlsZSI6ImVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbnZhciBCb3VuZHMgPSByZXF1aXJlKCcuL2JvdW5kcycpLFxuICAgIFBvc2l0aW9uID0gcmVxdWlyZSgnLi9wb3NpdGlvbicpO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5kYXRhKCdlbGVtZW50JywgdGhpcyk7XG5cbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXJzID0gW107XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cblxuICBzaG93KCkgeyB0aGlzLiRlbGVtZW50LnNob3coKTsgfVxuICBoaWRlKCkgeyB0aGlzLiRlbGVtZW50LmhpZGUoKTsgfVxuICBlbmFibGUoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTsgfVxuICBkaXNhYmxlKCkgeyB0aGlzLiRlbGVtZW50LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7IH1cbiAgcmVtb3ZlKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZSgpOyB9XG4gIGRldGFjaCgpIHsgdGhpcy4kZWxlbWVudC5kZXRhY2goKTsgfVxuICBlbXB0eSgpIHsgdGhpcy4kZWxlbWVudC5lbXB0eSgpOyB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdmFyICRwb3NpdGlvbiA9IHRoaXMuJGVsZW1lbnQucG9zaXRpb24oKSxcbiAgICAgICAgdG9wID0gJHBvc2l0aW9uLnRvcCxcbiAgICAgICAgbGVmdCA9ICRwb3NpdGlvbi5sZWZ0LFxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbih0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0Qm91bmRzKGluY2x1ZGVCb3JkZXIgPSBmYWxzZSwgaW5jbHVkZU1hcmdpbiA9IGZhbHNlKSB7XG4gICAgdmFyICRvZmZzZXQgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpLFxuICAgICAgICB0b3AgPSAkb2Zmc2V0LnRvcCwgIC8vL1xuICAgICAgICBsZWZ0ID0gJG9mZnNldC5sZWZ0LCAgLy8vXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aChpbmNsdWRlQm9yZGVyLCBpbmNsdWRlTWFyZ2luKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoaW5jbHVkZUJvcmRlciwgaW5jbHVkZU1hcmdpbiksXG4gICAgICAgIGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gZmFsc2UsIGluY2x1ZGVNYXJnaW4gPSBmYWxzZSkgeyBcbiAgICByZXR1cm4gaW5jbHVkZUJvcmRlciA/IFxuICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQub3V0ZXJXaWR0aChpbmNsdWRlTWFyZ2luKSA6XG4gICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LndpZHRoKCk7IFxuICB9XG4gIFxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IGZhbHNlLCBpbmNsdWRlTWFyZ2luID0gZmFsc2UpIHtcbiAgICByZXR1cm4gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5vdXRlckhlaWdodChpbmNsdWRlTWFyZ2luKSA6XG4gICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LmhlaWdodCgpO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy4kZWxlbWVudC53aWR0aCh3aWR0aCk7IH1cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLiRlbGVtZW50LmhlaWdodChoZWlnaHQpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lKTsgfVxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy4kZWxlbWVudC5hdHRyKG5hbWUsIHZhbHVlKTsgfVxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIobmFtZSk7IH1cbiAgcHJlcGVuZEJlZm9yZShlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYmVmb3JlKGVsZW1lbnQuJGVsZW1lbnQpOyB9XG4gIGFwcGVuZEFmdGVyKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5hZnRlcihlbGVtZW50LiRlbGVtZW50KTsgfVxuICBcbiAgcHJlcGVuZChlbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBlbGVtZW50T3JTdHJpbmc7IC8vL1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnByZXBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQucHJlcGVuZCgkZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIFxuICBhcHBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0gZWxlbWVudE9yU3RyaW5nOyAvLy9cblxuICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKCRlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpOyB9XG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7IH1cbiAgcmVtb3ZlQ2xhc3NlcygpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygpOyB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuaHRtbChodG1sKVxuICAgIH0gZWxzZSB7XG4gICAgICBodG1sID0gdGhpcy4kZWxlbWVudC5odG1sKCk7XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSBjc3M7XG5cbiAgICAgIGNzcyA9IHRoaXMuJGVsZW1lbnQuY3NzKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKGNzcyk7XG4gICAgfVxuICB9XG5cbiAgZGF0YSgpIHtcbiAgICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAga2V5ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICB2YWx1ZTtcblxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICAgIHZhbHVlID0gdGhpcy4kZWxlbWVudC5kYXRhKGtleSk7XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuZGF0YShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBmaW5kRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgZm91bmRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuZmluZChzZWxlY3RvciksXG4gICAgICAgIGZvdW5kRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhmb3VuZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmb3VuZEVsZW1lbnRzO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBjaGlsZERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbihzZWxlY3RvciksXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50RWxlbWVudChzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQucGFyZW50KHNlbGVjdG9yKSxcbiAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKSxcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBwYXJlbnRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQucGFyZW50cyhzZWxlY3RvciksXG4gICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnRzO1xuICB9XG5cbiAgb24oZXZlbnRzLCBoYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICBpZiAobmFtZXNwYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGV2ZW50cyA9IGV2ZW50cyArICcuJyArIG5hbWVzcGFjZTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy4kZWxlbWVudC5vbihldmVudHMsIGhhbmRsZXIpOyBcbiAgfVxuICBcbiAgb2ZmKGV2ZW50cywgbmFtZXNwYWNlKSB7XG4gICAgaWYgKG5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBldmVudHMgPSBldmVudHMgKyAnLicgKyBuYW1lc3BhY2U7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuJGVsZW1lbnQub2ZmKGV2ZW50cyk7XG4gIH1cblxuICBvbk1vdXNlVXAobW91c2VVcEhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZXVwJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIobW91c2VVcEhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZWRvd24nLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihtb3VzZURvd25IYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuICBvbk1vdXNlT3Zlcihtb3VzZU92ZXJIYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2VvdmVyJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIobW91c2VPdmVySGFuZGxlciksIG5hbWVzcGFjZSk7IH1cbiAgb25Nb3VzZU91dChtb3VzZU91dEhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZW91dCcsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlT3V0SGFuZGxlciksIG5hbWVzcGFjZSk7IH1cbiAgb25Nb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlciwgbmFtZXNwYWNlKSB7IHRoaXMub24oJ21vdXNlbW92ZScsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIFxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyKSB7XG4gICAgdmFyIHJlc2l6ZUhhbmRsZXJzID0gaGFzUmVzaXplSGFuZGxlcnModGhpcyk7XG5cbiAgICBpZiAoIXJlc2l6ZUhhbmRsZXJzKSB7XG4gICAgICBhcHBlbmRSZXNpemVPYmplY3QodGhpcyk7XG4gICAgfVxuXG4gICAgYWRkUmVzaXplSGFuZGxlcih0aGlzLCByZXNpemVIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyKSB7XG4gICAgcmVtb3ZlUmVzaXplSGFuZGxlcih0aGlzLCByZXNpemVIYW5kbGVyKTtcblxuICAgIHZhciByZXNpemVIYW5kbGVycyA9IGhhc1Jlc2l6ZUhhbmRsZXJzKHRoaXMpO1xuXG4gICAgaWYgKCFyZXNpemVIYW5kbGVycykge1xuICAgICAgcmVtb3ZlUmVzaXplT2JqZWN0KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIG9mZk1vdXNlVXAobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZXVwJywgbmFtZXNwYWNlKTsgfVxuICBvZmZNb3VzZURvd24obmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZWRvd24nLCBuYW1lc3BhY2UpOyB9XG4gIG9mZk1vdXNlT3ZlcihuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ21vdXNlb3ZlcicsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VPdXQobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZW91dCcsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VNb3ZlKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2Vtb3ZlJywgbmFtZXNwYWNlKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShmaXJzdEFyZ3VtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQpO1xuXG4gICAgZnVuY3Rpb24gaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICgodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB8fCAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudChzZWNvbmRBcmd1bWVudCkge1xuICAgICAgdmFyICRlbGVtZW50ID0gKHR5cGVvZiBzZWNvbmRBcmd1bWVudCA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAkKHNlY29uZEFyZ3VtZW50KSA6XG4gICAgICAgICAgc2Vjb25kQXJndW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHJldHVybiAkZWxlbWVudC5jbG9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChmaXJzdEFyZ3VtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQpO1xuXG4gICAgZnVuY3Rpb24gaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gJChzZWNvbmRBcmd1bWVudCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGZpcnN0QXJndW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCk7XG5cbiAgICBmdW5jdGlvbiBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQoc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAkKHNlY29uZEFyZ3VtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiA9IDE7XG5FbGVtZW50Lk1JRERMRV9NT1VTRV9CVVRUT04gPSAyO1xuRWxlbWVudC5SSUdIVF9NT1VTRV9CVVRUT04gPSAzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uICRlbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIHZhciAkZWxlbWVudDtcblxuICBpZiAoZmFsc2UpIHtcblxuICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAkZWxlbWVudCA9ICQoc2VsZWN0b3IpO1xuICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgJCkge1xuICAgICRlbGVtZW50ID0gc2VsZWN0b3I7ICAvLy9cbiAgfSBlbHNlIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEFycmF5ICkge1xuICAgIHZhciBwYXJlbnRFbGVtZW50ID0gc2VsZWN0b3JbMF0sIC8vL1xuICAgICAgICBjaGlsZFNlbGVjdG9yID0gc2VsZWN0b3JbMV0sICAvLy9cbiAgICAgICAgcGFyZW50JEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LiRlbGVtZW50OyAgLy8vXG5cbiAgICAkZWxlbWVudCA9IHBhcmVudCRFbGVtZW50LmZpbmQoY2hpbGRTZWxlY3Rvcik7XG4gIH1cblxuICByZXR1cm4gJGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIG1vdXNlVG9wID0gZXZlbnQucGFnZVksICAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsIC8vL1xuICAgICAgICBtb3VzZUJ1dHRvbiA9IGV2ZW50LndoaWNoOyAvLy9cblxuICAgIGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICB2YXIgZWxlbWVudHMgPSBbXSxcbiAgICAgIGRvbUVsZW1lbnRzTGVuZ3RoID0gZG9tRWxlbWVudHMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9tRWxlbWVudHNMZW5ndGg7IGkrKykge1xuICAgIHZhciBkb21FbGVtZW50ID0gZG9tRWxlbWVudHNbaV0sXG4gICAgICAgICRlbGVtZW50ID0gJChkb21FbGVtZW50KSxcbiAgICAgICAgZWxlbWVudCA9ICRlbGVtZW50LmRhdGEoJ2VsZW1lbnQnKTtcblxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQpIHtcbiAgaWYgKGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpKSB7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZmlyc3RBcmd1bWVudCk7XG4gICAgZmlyc3RBcmd1bWVudCA9IEVsZW1lbnQ7XG4gIH1cblxuICB2YXIgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LFxuICAgICAgc2Vjb25kQXJndW1lbnQgPSByZW1haW5pbmdBcmd1bWVudHMuc2hpZnQoKSxcbiAgICAgICRlbGVtZW50ID0gJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQoc2Vjb25kQXJndW1lbnQpO1xuXG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KCRlbGVtZW50KTtcbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7IC8vL1xuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTsgIC8vL1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZnVuY3Rpb24gYWRkUmVzaXplSGFuZGxlcihpbnN0YW5jZSwgcmVzaXplSGFuZGxlcikge1xuICBpbnN0YW5jZS5yZXNpemVIYW5kbGVycy5wdXNoKHJlc2l6ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSZXNpemVIYW5kbGVyKGluc3RhbmNlLCByZXNpemVIYW5kbGVyKSB7XG4gIHZhciBzdGFydCA9IGluc3RhbmNlLnJlc2l6ZUhhbmRsZXJzLmluZGV4T2YocmVzaXplSGFuZGxlcik7IC8vL1xuXG4gIGlmIChzdGFydCA+IC0xKSB7XG4gICAgdmFyIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGluc3RhbmNlLnJlc2l6ZUhhbmRsZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc1Jlc2l6ZUhhbmRsZXJzKGluc3RhbmNlKSB7XG4gIHZhciByZXNpemVIYW5kbGVyc0xlbmd0aCA9IGluc3RhbmNlLnJlc2l6ZUhhbmRsZXJzLmxlbmd0aCxcbiAgICAgIHJlc2l6ZUhhbmRsZXJzID0gKHJlc2l6ZUhhbmRsZXJzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIHJlc2l6ZUhhbmRsZXJzO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRSZXNpemVPYmplY3QoaW5zdGFuY2UpIHtcbiAgdmFyIHJlc2l6ZU9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpLFxuICAgICAgZG9tRWxlbWVudCA9IGluc3RhbmNlLiRlbGVtZW50WzBdOyAgLy8vXG5cbiAgcmVzaXplT2JqZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG4gIHJlc2l6ZU9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcbiAgcmVzaXplT2JqZWN0LnR5cGUgPSAndGV4dC9odG1sJztcblxuICByZXNpemVPYmplY3QuX19kb21FbGVtZW50X18gPSBkb21FbGVtZW50O1xuICBkb21FbGVtZW50Ll9fcmVzaXplT2JqZWN0X18gPSByZXNpemVPYmplY3Q7XG4gIGRvbUVsZW1lbnQuX19pbnN0YW5jZV9fID0gaW5zdGFuY2U7XG5cbiAgcmVzaXplT2JqZWN0Lm9ubG9hZCA9IHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyO1xuXG4gIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplT2JqZWN0KGluc3RhbmNlKSB7XG4gIHZhciBkb21FbGVtZW50ID0gaW5zdGFuY2UuJGVsZW1lbnRbMF0sICAvLy9cbiAgICAgIHJlc2l6ZU9iamVjdCA9IGRvbUVsZW1lbnQuX19yZXNpemVPYmplY3RfXyxcbiAgICAgIG9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICBvYmplY3RXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplTGlzdGVuZXIpO1xuXG4gIGRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoKSB7XG4gIHZhciByZXNpemVPYmplY3RXaW5kb3cgPSB0aGlzLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIHJlc2l6ZU9iamVjdFdpbmRvdy5fX2RvbUVsZW1lbnRfXyA9IHRoaXMuX19kb21FbGVtZW50X187XG4gIHJlc2l6ZU9iamVjdFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVMaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZUxpc3RlbmVyKGV2ZW50KSB7XG4gIHZhciByZXNpemVPYmplY3RXaW5kb3cgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCwgIC8vL1xuICAgICAgZG9tRWxlbWVudCA9IHJlc2l6ZU9iamVjdFdpbmRvdy5fX2RvbUVsZW1lbnRfXyxcbiAgICAgIGluc3RhbmNlID0gZG9tRWxlbWVudC5fX2luc3RhbmNlX18sXG4gICAgICB3aWR0aCA9IGluc3RhbmNlLmdldFdpZHRoKCksXG4gICAgICBoZWlnaHQgPSBpbnN0YW5jZS5nZXRIZWlnaHQoKTtcblxuICBpbnN0YW5jZS5yZXNpemVIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKHJlc2l6ZUhhbmRsZXIpe1xuICAgIHJlc2l6ZUhhbmRsZXIod2lkdGgsIGhlaWdodCk7XG4gIH0pO1xufVxuIl19