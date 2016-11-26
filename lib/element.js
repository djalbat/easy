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

      var width = includeBorder ? this.$element.outerWidth(includeMargin) : this.$element.width();

      return width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var height = includeBorder ? this.$element.outerHeight(includeMargin) : this.$element.height();

      return height;
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
      if (_html !== undefined) {
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
    value: function data(key, value) {
      if (value !== undefined) {
        this.$element.data(key, value);
      } else {
        value = this.$element.data(key);

        return value;
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
    key: 'onClick',
    value: function onClick(clickHandler) {
      var button = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Element.LEFT_MOUSE_BUTTON;

      this.$element.on('click', function (event) {
        switch (button) {
          case Element.LEFT_MOUSE_BUTTON:
            if (event.button === 0) {
              ///
              clickHandler();
            }
            break;

          case Element.MIDDLE_MOUSE_BUTTON:
            if (event.button === 1) {
              ///
              clickHandler();
            }
            break;
        }

        return false;
      });
    }
  }, {
    key: 'offClick',
    value: function offClick(clickHandler) {
      this.$element.off('click', clickHandler);
    }
  }, {
    key: 'onDoubleClick',
    value: function onDoubleClick(doubleClickHandler) {
      this.$element.on('dbclick', function () {
        doubleClickHandler();

        return false;
      });
    }
  }, {
    key: 'offDoubleClick',
    value: function offDoubleClick(doubleClickHandler) {
      this.$element.off('dbclick', doubleClickHandler);
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

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiQm91bmRzIiwiUG9zaXRpb24iLCJFbGVtZW50Iiwic2VsZWN0b3IiLCIkZWxlbWVudCIsIiRlbGVtZW50RnJvbVNlbGVjdG9yIiwiZGF0YSIsInJlc2l6ZUhhbmRsZXJzIiwiY2xvbmUiLCJzaG93IiwiaGlkZSIsInJlbW92ZUF0dHIiLCJhdHRyIiwicmVtb3ZlIiwiZGV0YWNoIiwiZW1wdHkiLCIkcG9zaXRpb24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJpbmNsdWRlQm9yZGVyIiwiaW5jbHVkZU1hcmdpbiIsIiRvZmZzZXQiLCJvZmZzZXQiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiLCJib3VuZHMiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJuYW1lIiwidmFsdWUiLCJlbGVtZW50IiwiYmVmb3JlIiwiYWZ0ZXIiLCJlbGVtZW50T3JTdHJpbmciLCJzdHJpbmciLCJwcmVwZW5kIiwiYXBwZW5kIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaHRtbCIsInVuZGVmaW5lZCIsImNzcyIsInByb3BlcnR5TmFtZSIsImtleSIsImZvdW5kRE9NRWxlbWVudHMiLCJmaW5kIiwiZm91bmRFbGVtZW50cyIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiY2hpbGRET01FbGVtZW50cyIsImNoaWxkcmVuIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50IiwicGFyZW50RWxlbWVudHMiLCJmaXJzdFBhcmVudEVsZW1lbnQiLCJmaXJzdCIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnRzIiwiZXZlbnRzIiwiaGFuZGxlciIsIm5hbWVzcGFjZSIsIm9uIiwib2ZmIiwiY2xpY2tIYW5kbGVyIiwiYnV0dG9uIiwiTEVGVF9NT1VTRV9CVVRUT04iLCJldmVudCIsIk1JRERMRV9NT1VTRV9CVVRUT04iLCJkb3VibGVDbGlja0hhbmRsZXIiLCJtb3VzZVVwSGFuZGxlciIsInJldHVybk1vdXNlRXZlbnRIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJtb3VzZU91dEhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwicmVzaXplSGFuZGxlciIsImhhc1Jlc2l6ZUhhbmRsZXJzIiwiYXBwZW5kUmVzaXplT2JqZWN0IiwiYWRkUmVzaXplSGFuZGxlciIsInJlbW92ZVJlc2l6ZUhhbmRsZXIiLCJyZW1vdmVSZXNpemVPYmplY3QiLCJmaXJzdEFyZ3VtZW50IiwicmVtYWluaW5nQXJndW1lbnRzIiwiaW5zdGFuY2UiLCJpc05vdEFDbGFzcyIsIiRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50Iiwic2Vjb25kQXJndW1lbnQiLCJIVE1MRWxlbWVudCIsIlJJR0hUX01PVVNFX0JVVFRPTiIsIm1vZHVsZSIsImV4cG9ydHMiLCJBcnJheSIsImNoaWxkU2VsZWN0b3IiLCJwYXJlbnQkRWxlbWVudCIsIm1vdXNlVG9wIiwicGFnZVkiLCJtb3VzZUxlZnQiLCJwYWdlWCIsIm1vdXNlQnV0dG9uIiwid2hpY2giLCJkb21FbGVtZW50cyIsImVsZW1lbnRzIiwiZG9tRWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJpIiwiZG9tRWxlbWVudCIsInB1c2giLCJ1bnNoaWZ0IiwiQ2xhc3MiLCJzaGlmdCIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiYmluZCIsImFwcGx5Iiwic3RhcnQiLCJpbmRleE9mIiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZXNpemVIYW5kbGVyc0xlbmd0aCIsInJlc2l6ZU9iamVjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInR5cGUiLCJfX2RvbUVsZW1lbnRfXyIsIl9fcmVzaXplT2JqZWN0X18iLCJfX2luc3RhbmNlX18iLCJvbmxvYWQiLCJyZXNpemVPYmplY3RMb2FkSGFuZGxlciIsImFwcGVuZENoaWxkIiwib2JqZWN0V2luZG93IiwiY29udGVudERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzaXplTGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsInJlc2l6ZU9iamVjdFdpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJzcmNFbGVtZW50IiwiZm9yRWFjaCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxRQUFSLENBQVI7O0FBRUEsSUFBSUMsU0FBU0QsUUFBUSxVQUFSLENBQWI7QUFBQSxJQUNJRSxXQUFXRixRQUFRLFlBQVIsQ0FEZjs7SUFHTUcsTztBQUNKLG1CQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtDLFFBQUwsR0FBZ0JDLHFCQUFxQkYsUUFBckIsQ0FBaEI7O0FBRUEsU0FBS0csSUFBTCxDQUFVLFNBQVYsRUFBcUIsSUFBckI7O0FBRUEsU0FBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNEOzs7OzRCQUVPO0FBQUUsYUFBT0wsUUFBUU0sS0FBUixDQUFjLElBQWQsQ0FBUDtBQUE2Qjs7OzJCQUVoQztBQUFFLFdBQUtKLFFBQUwsQ0FBY0ssSUFBZDtBQUF1Qjs7OzJCQUN6QjtBQUFFLFdBQUtMLFFBQUwsQ0FBY00sSUFBZDtBQUF1Qjs7OzZCQUN2QjtBQUFFLFdBQUtOLFFBQUwsQ0FBY08sVUFBZCxDQUF5QixVQUF6QjtBQUF1Qzs7OzhCQUN4QztBQUFFLFdBQUtQLFFBQUwsQ0FBY1EsSUFBZCxDQUFtQixVQUFuQixFQUErQixJQUEvQjtBQUF1Qzs7OzZCQUMxQztBQUFFLFdBQUtSLFFBQUwsQ0FBY1MsTUFBZDtBQUF5Qjs7OzZCQUMzQjtBQUFFLFdBQUtULFFBQUwsQ0FBY1UsTUFBZDtBQUF5Qjs7OzRCQUM1QjtBQUFFLFdBQUtWLFFBQUwsQ0FBY1csS0FBZDtBQUF3Qjs7O2tDQUVwQjtBQUNaLFVBQUlDLFlBQVksS0FBS1osUUFBTCxDQUFjYSxR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RUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgQm91bmRzID0gcmVxdWlyZSgnLi9ib3VuZHMnKSxcbiAgICBQb3NpdGlvbiA9IHJlcXVpcmUoJy4vcG9zaXRpb24nKTtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuZGF0YSgnZWxlbWVudCcsIHRoaXMpO1xuXG4gICAgdGhpcy5yZXNpemVIYW5kbGVycyA9IFtdO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBFbGVtZW50LmNsb25lKHRoaXMpOyB9XG5cbiAgc2hvdygpIHsgdGhpcy4kZWxlbWVudC5zaG93KCk7IH1cbiAgaGlkZSgpIHsgdGhpcy4kZWxlbWVudC5oaWRlKCk7IH1cbiAgZW5hYmxlKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7IH1cbiAgZGlzYWJsZSgpIHsgdGhpcy4kZWxlbWVudC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpOyB9XG4gIHJlbW92ZSgpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmUoKTsgfVxuICBkZXRhY2goKSB7IHRoaXMuJGVsZW1lbnQuZGV0YWNoKCk7IH1cbiAgZW1wdHkoKSB7IHRoaXMuJGVsZW1lbnQuZW1wdHkoKTsgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHZhciAkcG9zaXRpb24gPSB0aGlzLiRlbGVtZW50LnBvc2l0aW9uKCksXG4gICAgICAgIHRvcCA9ICRwb3NpdGlvbi50b3AsXG4gICAgICAgIGxlZnQgPSAkcG9zaXRpb24ubGVmdCxcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24odG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIGdldEJvdW5kcyhpbmNsdWRlQm9yZGVyID0gZmFsc2UsIGluY2x1ZGVNYXJnaW4gPSBmYWxzZSkge1xuICAgIHZhciAkb2Zmc2V0ID0gdGhpcy4kZWxlbWVudC5vZmZzZXQoKSxcbiAgICAgICAgdG9wID0gJG9mZnNldC50b3AsICAvLy9cbiAgICAgICAgbGVmdCA9ICRvZmZzZXQubGVmdCwgIC8vL1xuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciwgaW5jbHVkZU1hcmdpbiksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIsIGluY2x1ZGVNYXJnaW4pLFxuICAgICAgICBib3R0b20gPSB0b3AgKyBoZWlnaHQsXG4gICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IGZhbHNlLCBpbmNsdWRlTWFyZ2luID0gZmFsc2UpIHsgXG4gICAgdmFyIHdpZHRoID0gaW5jbHVkZUJvcmRlciA/IFxuICAgICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5vdXRlcldpZHRoKGluY2x1ZGVNYXJnaW4pIDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC53aWR0aCgpO1xuICAgIFxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuICBcbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSBmYWxzZSwgaW5jbHVkZU1hcmdpbiA9IGZhbHNlKSB7XG4gICAgdmFyIGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQub3V0ZXJIZWlnaHQoaW5jbHVkZU1hcmdpbikgOlxuICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5oZWlnaHQoKTtcbiAgICBcbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy4kZWxlbWVudC53aWR0aCh3aWR0aCk7IH1cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLiRlbGVtZW50LmhlaWdodChoZWlnaHQpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lKTsgfVxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy4kZWxlbWVudC5hdHRyKG5hbWUsIHZhbHVlKTsgfVxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIobmFtZSk7IH1cbiAgcHJlcGVuZEJlZm9yZShlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYmVmb3JlKGVsZW1lbnQuJGVsZW1lbnQpOyB9XG4gIGFwcGVuZEFmdGVyKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5hZnRlcihlbGVtZW50LiRlbGVtZW50KTsgfVxuICBcbiAgcHJlcGVuZChlbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBlbGVtZW50T3JTdHJpbmc7IC8vL1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnByZXBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQucHJlcGVuZCgkZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIFxuICBhcHBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0gZWxlbWVudE9yU3RyaW5nOyAvLy9cblxuICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKCRlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpOyB9XG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7IH1cbiAgcmVtb3ZlQ2xhc3NlcygpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygpOyB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC5odG1sKGh0bWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGh0bWwgPSB0aGlzLiRlbGVtZW50Lmh0bWwoKTtcblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmICh0eXBlb2YgY3NzID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHByb3BlcnR5TmFtZSA9IGNzcztcblxuICAgICAgY3NzID0gdGhpcy4kZWxlbWVudC5jc3MocHJvcGVydHlOYW1lKTtcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kZWxlbWVudC5jc3MoY3NzKTtcbiAgICB9XG4gIH1cblxuICBkYXRhKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC5kYXRhKGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQuZGF0YShrZXkpO1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZmluZEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIGZvdW5kRE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LmZpbmQoc2VsZWN0b3IpLFxuICAgICAgICBmb3VuZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZm91bmRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZm91bmRFbGVtZW50cztcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgY2hpbGRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oc2VsZWN0b3IpLFxuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudEVsZW1lbnQoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50RE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LnBhcmVudChzZWxlY3RvciksXG4gICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyksXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcGFyZW50RWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50RE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LnBhcmVudHMoc2VsZWN0b3IpLFxuICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50cztcbiAgfVxuXG4gIG9uKGV2ZW50cywgaGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgaWYgKG5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBldmVudHMgPSBldmVudHMgKyAnLicgKyBuYW1lc3BhY2U7XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC5vbihldmVudHMsIGhhbmRsZXIpO1xuICB9XG4gIFxuICBvZmYoZXZlbnRzLCBuYW1lc3BhY2UpIHtcbiAgICBpZiAobmFtZXNwYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGV2ZW50cyA9IGV2ZW50cyArICcuJyArIG5hbWVzcGFjZTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9mZihldmVudHMpO1xuICB9XG5cbiAgb25DbGljayhjbGlja0hhbmRsZXIsIGJ1dHRvbiA9IEVsZW1lbnQuTEVGVF9NT1VTRV9CVVRUT04pIHtcbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHN3aXRjaCAoYnV0dG9uKSB7XG4gICAgICAgIGNhc2UgRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiA6XG4gICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkgeyAvLy9cbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA6XG4gICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMSkgeyAvLy9cbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG4gIFxuICBvZmZDbGljayhjbGlja0hhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vZmYoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIG9uRG91YmxlQ2xpY2soZG91YmxlQ2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5vbignZGJjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICBkb3VibGVDbGlja0hhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH1cblxuICBvZmZEb3VibGVDbGljayhkb3VibGVDbGlja0hhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vZmYoJ2RiY2xpY2snLCBkb3VibGVDbGlja0hhbmRsZXIpOyB9XG5cbiAgb25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2V1cCcsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuICBvbk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2Vkb3duJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIobW91c2VEb3duSGFuZGxlciksIG5hbWVzcGFjZSk7IH1cbiAgb25Nb3VzZU92ZXIobW91c2VPdmVySGFuZGxlciwgbmFtZXNwYWNlKSB7IHRoaXMub24oJ21vdXNlb3ZlcicsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlT3ZlckhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VPdXQobW91c2VPdXRIYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2VvdXQnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihtb3VzZU91dEhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZW1vdmUnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuXG4gIG9mZk1vdXNlVXAobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZXVwJywgbmFtZXNwYWNlKTsgfVxuICBvZmZNb3VzZURvd24obmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZWRvd24nLCBuYW1lc3BhY2UpOyB9XG4gIG9mZk1vdXNlT3ZlcihuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ21vdXNlb3ZlcicsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VPdXQobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZW91dCcsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VNb3ZlKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2Vtb3ZlJywgbmFtZXNwYWNlKTsgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHtcbiAgICB2YXIgcmVzaXplSGFuZGxlcnMgPSBoYXNSZXNpemVIYW5kbGVycyh0aGlzKTtcblxuICAgIGlmICghcmVzaXplSGFuZGxlcnMpIHtcbiAgICAgIGFwcGVuZFJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgICB9XG5cbiAgICBhZGRSZXNpemVIYW5kbGVyKHRoaXMsIHJlc2l6ZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHtcbiAgICByZW1vdmVSZXNpemVIYW5kbGVyKHRoaXMsIHJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgdmFyIHJlc2l6ZUhhbmRsZXJzID0gaGFzUmVzaXplSGFuZGxlcnModGhpcyk7XG5cbiAgICBpZiAoIXJlc2l6ZUhhbmRsZXJzKSB7XG4gICAgICByZW1vdmVSZXNpemVPYmplY3QodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsb25lKGZpcnN0QXJndW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCk7XG5cbiAgICBmdW5jdGlvbiBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gKCh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpIHx8IChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICB2YXIgJGVsZW1lbnQgPSAodHlwZW9mIHNlY29uZEFyZ3VtZW50ID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICQoc2Vjb25kQXJndW1lbnQpIDpcbiAgICAgICAgICBzZWNvbmRBcmd1bWVudC4kZWxlbWVudDtcblxuICAgICAgcmV0dXJuICRlbGVtZW50LmNsb25lKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGZpcnN0QXJndW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCk7XG5cbiAgICBmdW5jdGlvbiBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQoc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAkKHNlY29uZEFyZ3VtZW50KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlKGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KTtcblxuICAgIGZ1bmN0aW9uIGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudChzZWNvbmRBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICQoc2Vjb25kQXJndW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OID0gMTtcbkVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA9IDI7XG5FbGVtZW50LlJJR0hUX01PVVNFX0JVVFRPTiA9IDM7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gJGVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgdmFyICRlbGVtZW50O1xuXG4gIGlmIChmYWxzZSkge1xuXG4gIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICRlbGVtZW50ID0gJChzZWxlY3Rvcik7XG4gIH0gZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiAkKSB7XG4gICAgJGVsZW1lbnQgPSBzZWxlY3RvcjsgIC8vL1xuICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgQXJyYXkgKSB7XG4gICAgdmFyIHBhcmVudEVsZW1lbnQgPSBzZWxlY3RvclswXSwgLy8vXG4gICAgICAgIGNoaWxkU2VsZWN0b3IgPSBzZWxlY3RvclsxXSwgIC8vL1xuICAgICAgICBwYXJlbnQkRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuJGVsZW1lbnQ7ICAvLy9cblxuICAgICRlbGVtZW50ID0gcGFyZW50JEVsZW1lbnQuZmluZChjaGlsZFNlbGVjdG9yKTtcbiAgfVxuXG4gIHJldHVybiAkZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQud2hpY2g7IC8vL1xuXG4gICAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0LCBtb3VzZUJ1dHRvbik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIHZhciBlbGVtZW50cyA9IFtdLFxuICAgICAgZG9tRWxlbWVudHNMZW5ndGggPSBkb21FbGVtZW50cy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb21FbGVtZW50c0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSBkb21FbGVtZW50c1tpXSxcbiAgICAgICAgJGVsZW1lbnQgPSAkKGRvbUVsZW1lbnQpLFxuICAgICAgICBlbGVtZW50ID0gJGVsZW1lbnQuZGF0YSgnZWxlbWVudCcpO1xuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCkge1xuICBpZiAoaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChmaXJzdEFyZ3VtZW50KTtcbiAgICBmaXJzdEFyZ3VtZW50ID0gRWxlbWVudDtcbiAgfVxuXG4gIHZhciBDbGFzcyA9IGZpcnN0QXJndW1lbnQsXG4gICAgICBzZWNvbmRBcmd1bWVudCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5zaGlmdCgpLFxuICAgICAgJGVsZW1lbnQgPSAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudChzZWNvbmRBcmd1bWVudCk7XG5cbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoJGVsZW1lbnQpO1xuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTsgLy8vXG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpOyAgLy8vXG59XG5cbmZ1bmN0aW9uIGFkZFJlc2l6ZUhhbmRsZXIoaW5zdGFuY2UsIHJlc2l6ZUhhbmRsZXIpIHtcbiAgaW5zdGFuY2UucmVzaXplSGFuZGxlcnMucHVzaChyZXNpemVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplSGFuZGxlcihpbnN0YW5jZSwgcmVzaXplSGFuZGxlcikge1xuICB2YXIgc3RhcnQgPSBpbnN0YW5jZS5yZXNpemVIYW5kbGVycy5pbmRleE9mKHJlc2l6ZUhhbmRsZXIpOyAvLy9cblxuICBpZiAoc3RhcnQgPiAtMSkge1xuICAgIHZhciBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBpbnN0YW5jZS5yZXNpemVIYW5kbGVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNSZXNpemVIYW5kbGVycyhpbnN0YW5jZSkge1xuICB2YXIgcmVzaXplSGFuZGxlcnNMZW5ndGggPSBpbnN0YW5jZS5yZXNpemVIYW5kbGVycy5sZW5ndGgsXG4gICAgICByZXNpemVIYW5kbGVycyA9IChyZXNpemVIYW5kbGVyc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiByZXNpemVIYW5kbGVycztcbn1cblxuZnVuY3Rpb24gYXBwZW5kUmVzaXplT2JqZWN0KGluc3RhbmNlKSB7XG4gIHZhciByZXNpemVPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKSxcbiAgICAgIGRvbUVsZW1lbnQgPSBpbnN0YW5jZS4kZWxlbWVudFswXTsgIC8vL1xuXG4gIHJlc2l6ZU9iamVjdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IC0xOycpO1xuICByZXNpemVPYmplY3QuZGF0YSA9ICdhYm91dDpibGFuayc7XG4gIHJlc2l6ZU9iamVjdC50eXBlID0gJ3RleHQvaHRtbCc7XG5cbiAgcmVzaXplT2JqZWN0Ll9fZG9tRWxlbWVudF9fID0gZG9tRWxlbWVudDtcbiAgZG9tRWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fID0gcmVzaXplT2JqZWN0O1xuICBkb21FbGVtZW50Ll9faW5zdGFuY2VfXyA9IGluc3RhbmNlO1xuXG4gIHJlc2l6ZU9iamVjdC5vbmxvYWQgPSByZXNpemVPYmplY3RMb2FkSGFuZGxlcjtcblxuICBkb21FbGVtZW50LmFwcGVuZENoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJlc2l6ZU9iamVjdChpbnN0YW5jZSkge1xuICB2YXIgZG9tRWxlbWVudCA9IGluc3RhbmNlLiRlbGVtZW50WzBdLCAgLy8vXG4gICAgICByZXNpemVPYmplY3QgPSBkb21FbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKTtcblxuICBkb21FbGVtZW50LnJlbW92ZUNoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKCkge1xuICB2YXIgcmVzaXplT2JqZWN0V2luZG93ID0gdGhpcy5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuX19kb21FbGVtZW50X18gPSB0aGlzLl9fZG9tRWxlbWVudF9fO1xuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplTGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiByZXNpemVMaXN0ZW5lcihldmVudCkge1xuICB2YXIgcmVzaXplT2JqZWN0V2luZG93ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQsICAvLy9cbiAgICAgIGRvbUVsZW1lbnQgPSByZXNpemVPYmplY3RXaW5kb3cuX19kb21FbGVtZW50X18sXG4gICAgICBpbnN0YW5jZSA9IGRvbUVsZW1lbnQuX19pbnN0YW5jZV9fLFxuICAgICAgd2lkdGggPSBpbnN0YW5jZS5nZXRXaWR0aCgpLFxuICAgICAgaGVpZ2h0ID0gaW5zdGFuY2UuZ2V0SGVpZ2h0KCk7XG5cbiAgaW5zdGFuY2UucmVzaXplSGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihyZXNpemVIYW5kbGVyKXtcbiAgICByZXNpemVIYW5kbGVyKHdpZHRoLCBoZWlnaHQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=