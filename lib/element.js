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
      var allowDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

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

        return allowDefault;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiQm91bmRzIiwiUG9zaXRpb24iLCJFbGVtZW50Iiwic2VsZWN0b3IiLCIkZWxlbWVudCIsIiRlbGVtZW50RnJvbVNlbGVjdG9yIiwiZGF0YSIsInJlc2l6ZUhhbmRsZXJzIiwiY2xvbmUiLCJzaG93IiwiaGlkZSIsInJlbW92ZUF0dHIiLCJhdHRyIiwicmVtb3ZlIiwiZGV0YWNoIiwiZW1wdHkiLCIkcG9zaXRpb24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJpbmNsdWRlQm9yZGVyIiwiaW5jbHVkZU1hcmdpbiIsIiRvZmZzZXQiLCJvZmZzZXQiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiLCJib3VuZHMiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJuYW1lIiwidmFsdWUiLCJlbGVtZW50IiwiYmVmb3JlIiwiYWZ0ZXIiLCJlbGVtZW50T3JTdHJpbmciLCJzdHJpbmciLCJwcmVwZW5kIiwiYXBwZW5kIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaHRtbCIsInVuZGVmaW5lZCIsImNzcyIsInByb3BlcnR5TmFtZSIsImtleSIsImZvdW5kRE9NRWxlbWVudHMiLCJmaW5kIiwiZm91bmRFbGVtZW50cyIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiY2hpbGRET01FbGVtZW50cyIsImNoaWxkcmVuIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudERPTUVsZW1lbnRzIiwicGFyZW50IiwicGFyZW50RWxlbWVudHMiLCJmaXJzdFBhcmVudEVsZW1lbnQiLCJmaXJzdCIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnRzIiwiZXZlbnRzIiwiaGFuZGxlciIsIm5hbWVzcGFjZSIsIm9uIiwib2ZmIiwiY2xpY2tIYW5kbGVyIiwiYnV0dG9uIiwiTEVGVF9NT1VTRV9CVVRUT04iLCJhbGxvd0RlZmF1bHQiLCJldmVudCIsIk1JRERMRV9NT1VTRV9CVVRUT04iLCJkb3VibGVDbGlja0hhbmRsZXIiLCJtb3VzZVVwSGFuZGxlciIsInJldHVybk1vdXNlRXZlbnRIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJtb3VzZU91dEhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwicmVzaXplSGFuZGxlciIsImhhc1Jlc2l6ZUhhbmRsZXJzIiwiYXBwZW5kUmVzaXplT2JqZWN0IiwiYWRkUmVzaXplSGFuZGxlciIsInJlbW92ZVJlc2l6ZUhhbmRsZXIiLCJyZW1vdmVSZXNpemVPYmplY3QiLCJmaXJzdEFyZ3VtZW50IiwicmVtYWluaW5nQXJndW1lbnRzIiwiaW5zdGFuY2UiLCJpc05vdEFDbGFzcyIsIiRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50Iiwic2Vjb25kQXJndW1lbnQiLCJIVE1MRWxlbWVudCIsIlJJR0hUX01PVVNFX0JVVFRPTiIsIm1vZHVsZSIsImV4cG9ydHMiLCJBcnJheSIsImNoaWxkU2VsZWN0b3IiLCJwYXJlbnQkRWxlbWVudCIsIm1vdXNlVG9wIiwicGFnZVkiLCJtb3VzZUxlZnQiLCJwYWdlWCIsIm1vdXNlQnV0dG9uIiwid2hpY2giLCJkb21FbGVtZW50cyIsImVsZW1lbnRzIiwiZG9tRWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJpIiwiZG9tRWxlbWVudCIsInB1c2giLCJ1bnNoaWZ0IiwiQ2xhc3MiLCJzaGlmdCIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiYmluZCIsImFwcGx5Iiwic3RhcnQiLCJpbmRleE9mIiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZXNpemVIYW5kbGVyc0xlbmd0aCIsInJlc2l6ZU9iamVjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInR5cGUiLCJfX2RvbUVsZW1lbnRfXyIsIl9fcmVzaXplT2JqZWN0X18iLCJfX2luc3RhbmNlX18iLCJvbmxvYWQiLCJyZXNpemVPYmplY3RMb2FkSGFuZGxlciIsImFwcGVuZENoaWxkIiwib2JqZWN0V2luZG93IiwiY29udGVudERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzaXplTGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsInJlc2l6ZU9iamVjdFdpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJzcmNFbGVtZW50IiwiZm9yRWFjaCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxRQUFSLENBQVI7O0FBRUEsSUFBSUMsU0FBU0QsUUFBUSxVQUFSLENBQWI7QUFBQSxJQUNJRSxXQUFXRixRQUFRLFlBQVIsQ0FEZjs7SUFHTUcsTztBQUNKLG1CQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtDLFFBQUwsR0FBZ0JDLHFCQUFxQkYsUUFBckIsQ0FBaEI7O0FBRUEsU0FBS0csSUFBTCxDQUFVLFNBQVYsRUFBcUIsSUFBckI7O0FBRUEsU0FBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNEOzs7OzRCQUVPO0FBQUUsYUFBT0wsUUFBUU0sS0FBUixDQUFjLElBQWQsQ0FBUDtBQUE2Qjs7OzJCQUVoQztBQUFFLFdBQUtKLFFBQUwsQ0FBY0ssSUFBZDtBQUF1Qjs7OzJCQUN6QjtBQUFFLFdBQUtMLFFBQUwsQ0FBY00sSUFBZDtBQUF1Qjs7OzZCQUN2QjtBQUFFLFdBQUtOLFFBQUwsQ0FBY08sVUFBZCxDQUF5QixVQUF6QjtBQUF1Qzs7OzhCQUN4QztBQUFFLFdBQUtQLFFBQUwsQ0FBY1EsSUFBZCxDQUFtQixVQUFuQixFQUErQixJQUEvQjtBQUF1Qzs7OzZCQUMxQztBQUFFLFdBQUtSLFFBQUwsQ0FBY1MsTUFBZDtBQUF5Qjs7OzZCQUMzQjtBQUFFLFdBQUtULFFBQUwsQ0FBY1UsTUFBZDtBQUF5Qjs7OzRCQUM1QjtBQUFFLFdBQUtWLFFBQUwsQ0FBY1csS0FBZDtBQUF3Qjs7O2tDQUVwQjtBQUNaLFVBQUlDLFlBQVksS0FB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O0FBQ0QsR0FGRDtBQUdEOztBQUVELFNBQVNvQyxLQUFULENBQWV1RixLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxudmFyIEJvdW5kcyA9IHJlcXVpcmUoJy4vYm91bmRzJyksXG4gICAgUG9zaXRpb24gPSByZXF1aXJlKCcuL3Bvc2l0aW9uJyk7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLmRhdGEoJ2VsZW1lbnQnLCB0aGlzKTtcblxuICAgIHRoaXMucmVzaXplSGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZSh0aGlzKTsgfVxuXG4gIHNob3coKSB7IHRoaXMuJGVsZW1lbnQuc2hvdygpOyB9XG4gIGhpZGUoKSB7IHRoaXMuJGVsZW1lbnQuaGlkZSgpOyB9XG4gIGVuYWJsZSgpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyB9XG4gIGRpc2FibGUoKSB7IHRoaXMuJGVsZW1lbnQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTsgfVxuICByZW1vdmUoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlKCk7IH1cbiAgZGV0YWNoKCkgeyB0aGlzLiRlbGVtZW50LmRldGFjaCgpOyB9XG4gIGVtcHR5KCkgeyB0aGlzLiRlbGVtZW50LmVtcHR5KCk7IH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB2YXIgJHBvc2l0aW9uID0gdGhpcy4kZWxlbWVudC5wb3NpdGlvbigpLFxuICAgICAgICB0b3AgPSAkcG9zaXRpb24udG9wLFxuICAgICAgICBsZWZ0ID0gJHBvc2l0aW9uLmxlZnQsXG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBnZXRCb3VuZHMoaW5jbHVkZUJvcmRlciA9IGZhbHNlLCBpbmNsdWRlTWFyZ2luID0gZmFsc2UpIHtcbiAgICB2YXIgJG9mZnNldCA9IHRoaXMuJGVsZW1lbnQub2Zmc2V0KCksXG4gICAgICAgIHRvcCA9ICRvZmZzZXQudG9wLCAgLy8vXG4gICAgICAgIGxlZnQgPSAkb2Zmc2V0LmxlZnQsICAvLy9cbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKGluY2x1ZGVCb3JkZXIsIGluY2x1ZGVNYXJnaW4pLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodChpbmNsdWRlQm9yZGVyLCBpbmNsdWRlTWFyZ2luKSxcbiAgICAgICAgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSBmYWxzZSwgaW5jbHVkZU1hcmdpbiA9IGZhbHNlKSB7IFxuICAgIHZhciB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgPyBcbiAgICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQub3V0ZXJXaWR0aChpbmNsdWRlTWFyZ2luKSA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQud2lkdGgoKTtcbiAgICBcbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cbiAgXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gZmFsc2UsIGluY2x1ZGVNYXJnaW4gPSBmYWxzZSkge1xuICAgIHZhciBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50Lm91dGVySGVpZ2h0KGluY2x1ZGVNYXJnaW4pIDpcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuaGVpZ2h0KCk7XG4gICAgXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuJGVsZW1lbnQud2lkdGgod2lkdGgpOyB9XG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy4kZWxlbWVudC5oZWlnaHQoaGVpZ2h0KTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LmF0dHIobmFtZSk7IH1cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lLCB2YWx1ZSk7IH1cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKG5hbWUpOyB9XG4gIHByZXBlbmRCZWZvcmUoZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmJlZm9yZShlbGVtZW50LiRlbGVtZW50KTsgfVxuICBhcHBlbmRBZnRlcihlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYWZ0ZXIoZWxlbWVudC4kZWxlbWVudCk7IH1cbiAgXG4gIHByZXBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0gZWxlbWVudE9yU3RyaW5nOyAvLy9cblxuICAgICAgdGhpcy4kZWxlbWVudC5wcmVwZW5kKHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudE9yU3RyaW5nLCAgLy8vXG4gICAgICAgICAgJGVsZW1lbnQgPSBlbGVtZW50LiRlbGVtZW50O1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnByZXBlbmQoJGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBcbiAgYXBwZW5kKGVsZW1lbnRPclN0cmluZykge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHN0cmluZyA9IGVsZW1lbnRPclN0cmluZzsgLy8vXG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudE9yU3RyaW5nLCAgLy8vXG4gICAgICAgICAgJGVsZW1lbnQgPSBlbGVtZW50LiRlbGVtZW50O1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZCgkZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSk7IH1cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpOyB9XG4gIHJlbW92ZUNsYXNzZXMoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoKTsgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuaHRtbChodG1sKVxuICAgIH0gZWxzZSB7XG4gICAgICBodG1sID0gdGhpcy4kZWxlbWVudC5odG1sKCk7XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSBjc3M7XG5cbiAgICAgIGNzcyA9IHRoaXMuJGVsZW1lbnQuY3NzKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKGNzcyk7XG4gICAgfVxuICB9XG5cbiAgZGF0YShrZXksIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuZGF0YShrZXksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB0aGlzLiRlbGVtZW50LmRhdGEoa2V5KTtcblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBmb3VuZERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5maW5kKHNlbGVjdG9yKSxcbiAgICAgICAgZm91bmRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGZvdW5kRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZvdW5kRWxlbWVudHM7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIGNoaWxkRE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKHNlbGVjdG9yKSxcbiAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRFbGVtZW50KHNlbGVjdG9yKSB7XG4gICAgdmFyIHBhcmVudERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5wYXJlbnQoc2VsZWN0b3IpLFxuICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpLFxuICAgICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHBhcmVudEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIHBhcmVudERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5wYXJlbnRzKHNlbGVjdG9yKSxcbiAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudHM7XG4gIH1cblxuICBvbihldmVudHMsIGhhbmRsZXIsIG5hbWVzcGFjZSkge1xuICAgIGlmIChuYW1lc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnRzID0gZXZlbnRzICsgJy4nICsgbmFtZXNwYWNlO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQub24oZXZlbnRzLCBoYW5kbGVyKTtcbiAgfVxuICBcbiAgb2ZmKGV2ZW50cywgbmFtZXNwYWNlKSB7XG4gICAgaWYgKG5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBldmVudHMgPSBldmVudHMgKyAnLicgKyBuYW1lc3BhY2U7XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC5vZmYoZXZlbnRzKTtcbiAgfVxuXG4gIG9uQ2xpY2soY2xpY2tIYW5kbGVyLCBidXR0b24gPSBFbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OLCBhbGxvd0RlZmF1bHQgPSBmYWxzZSkge1xuICAgIHRoaXMuJGVsZW1lbnQub24oJ2NsaWNrJyxmdW5jdGlvbihldmVudCkge1xuICAgICAgc3dpdGNoIChidXR0b24pIHtcbiAgICAgICAgY2FzZSBFbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OIDpcbiAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7IC8vL1xuICAgICAgICAgICAgY2xpY2tIYW5kbGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRWxlbWVudC5NSURETEVfTU9VU0VfQlVUVE9OIDpcbiAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAxKSB7IC8vL1xuICAgICAgICAgICAgY2xpY2tIYW5kbGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWxsb3dEZWZhdWx0O1xuICAgIH0pO1xuICB9XG4gIFxuICBvZmZDbGljayhjbGlja0hhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vZmYoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIG9uRG91YmxlQ2xpY2soZG91YmxlQ2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5vbignZGJjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICBkb3VibGVDbGlja0hhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH1cblxuICBvZmZEb3VibGVDbGljayhkb3VibGVDbGlja0hhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vZmYoJ2RiY2xpY2snLCBkb3VibGVDbGlja0hhbmRsZXIpOyB9XG5cbiAgb25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2V1cCcsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuICBvbk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2Vkb3duJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIobW91c2VEb3duSGFuZGxlciksIG5hbWVzcGFjZSk7IH1cbiAgb25Nb3VzZU92ZXIobW91c2VPdmVySGFuZGxlciwgbmFtZXNwYWNlKSB7IHRoaXMub24oJ21vdXNlb3ZlcicsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlT3ZlckhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VPdXQobW91c2VPdXRIYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2VvdXQnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihtb3VzZU91dEhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZW1vdmUnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuXG4gIG9mZk1vdXNlVXAobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZXVwJywgbmFtZXNwYWNlKTsgfVxuICBvZmZNb3VzZURvd24obmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZWRvd24nLCBuYW1lc3BhY2UpOyB9XG4gIG9mZk1vdXNlT3ZlcihuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ21vdXNlb3ZlcicsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VPdXQobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZW91dCcsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VNb3ZlKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2Vtb3ZlJywgbmFtZXNwYWNlKTsgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHtcbiAgICB2YXIgcmVzaXplSGFuZGxlcnMgPSBoYXNSZXNpemVIYW5kbGVycyh0aGlzKTtcblxuICAgIGlmICghcmVzaXplSGFuZGxlcnMpIHtcbiAgICAgIGFwcGVuZFJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgICB9XG5cbiAgICBhZGRSZXNpemVIYW5kbGVyKHRoaXMsIHJlc2l6ZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHtcbiAgICByZW1vdmVSZXNpemVIYW5kbGVyKHRoaXMsIHJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgdmFyIHJlc2l6ZUhhbmRsZXJzID0gaGFzUmVzaXplSGFuZGxlcnModGhpcyk7XG5cbiAgICBpZiAoIXJlc2l6ZUhhbmRsZXJzKSB7XG4gICAgICByZW1vdmVSZXNpemVPYmplY3QodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsb25lKGZpcnN0QXJndW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCk7XG5cbiAgICBmdW5jdGlvbiBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gKCh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpIHx8IChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICB2YXIgJGVsZW1lbnQgPSAodHlwZW9mIHNlY29uZEFyZ3VtZW50ID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICQoc2Vjb25kQXJndW1lbnQpIDpcbiAgICAgICAgICBzZWNvbmRBcmd1bWVudC4kZWxlbWVudDtcblxuICAgICAgcmV0dXJuICRlbGVtZW50LmNsb25lKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGZpcnN0QXJndW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCk7XG5cbiAgICBmdW5jdGlvbiBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQoc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAkKHNlY29uZEFyZ3VtZW50KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlKGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KTtcblxuICAgIGZ1bmN0aW9uIGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudChzZWNvbmRBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICQoc2Vjb25kQXJndW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OID0gMTtcbkVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA9IDI7XG5FbGVtZW50LlJJR0hUX01PVVNFX0JVVFRPTiA9IDM7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gJGVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgdmFyICRlbGVtZW50O1xuXG4gIGlmIChmYWxzZSkge1xuXG4gIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICRlbGVtZW50ID0gJChzZWxlY3Rvcik7XG4gIH0gZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiAkKSB7XG4gICAgJGVsZW1lbnQgPSBzZWxlY3RvcjsgIC8vL1xuICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgQXJyYXkgKSB7XG4gICAgdmFyIHBhcmVudEVsZW1lbnQgPSBzZWxlY3RvclswXSwgLy8vXG4gICAgICAgIGNoaWxkU2VsZWN0b3IgPSBzZWxlY3RvclsxXSwgIC8vL1xuICAgICAgICBwYXJlbnQkRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuJGVsZW1lbnQ7ICAvLy9cblxuICAgICRlbGVtZW50ID0gcGFyZW50JEVsZW1lbnQuZmluZChjaGlsZFNlbGVjdG9yKTtcbiAgfVxuXG4gIHJldHVybiAkZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQud2hpY2g7IC8vL1xuXG4gICAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0LCBtb3VzZUJ1dHRvbik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIHZhciBlbGVtZW50cyA9IFtdLFxuICAgICAgZG9tRWxlbWVudHNMZW5ndGggPSBkb21FbGVtZW50cy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb21FbGVtZW50c0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSBkb21FbGVtZW50c1tpXSxcbiAgICAgICAgJGVsZW1lbnQgPSAkKGRvbUVsZW1lbnQpLFxuICAgICAgICBlbGVtZW50ID0gJGVsZW1lbnQuZGF0YSgnZWxlbWVudCcpO1xuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCkge1xuICBpZiAoaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChmaXJzdEFyZ3VtZW50KTtcbiAgICBmaXJzdEFyZ3VtZW50ID0gRWxlbWVudDtcbiAgfVxuXG4gIHZhciBDbGFzcyA9IGZpcnN0QXJndW1lbnQsXG4gICAgICBzZWNvbmRBcmd1bWVudCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5zaGlmdCgpLFxuICAgICAgJGVsZW1lbnQgPSAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudChzZWNvbmRBcmd1bWVudCk7XG5cbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoJGVsZW1lbnQpO1xuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTsgLy8vXG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpOyAgLy8vXG59XG5cbmZ1bmN0aW9uIGFkZFJlc2l6ZUhhbmRsZXIoaW5zdGFuY2UsIHJlc2l6ZUhhbmRsZXIpIHtcbiAgaW5zdGFuY2UucmVzaXplSGFuZGxlcnMucHVzaChyZXNpemVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplSGFuZGxlcihpbnN0YW5jZSwgcmVzaXplSGFuZGxlcikge1xuICB2YXIgc3RhcnQgPSBpbnN0YW5jZS5yZXNpemVIYW5kbGVycy5pbmRleE9mKHJlc2l6ZUhhbmRsZXIpOyAvLy9cblxuICBpZiAoc3RhcnQgPiAtMSkge1xuICAgIHZhciBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBpbnN0YW5jZS5yZXNpemVIYW5kbGVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNSZXNpemVIYW5kbGVycyhpbnN0YW5jZSkge1xuICB2YXIgcmVzaXplSGFuZGxlcnNMZW5ndGggPSBpbnN0YW5jZS5yZXNpemVIYW5kbGVycy5sZW5ndGgsXG4gICAgICByZXNpemVIYW5kbGVycyA9IChyZXNpemVIYW5kbGVyc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiByZXNpemVIYW5kbGVycztcbn1cblxuZnVuY3Rpb24gYXBwZW5kUmVzaXplT2JqZWN0KGluc3RhbmNlKSB7XG4gIHZhciByZXNpemVPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKSxcbiAgICAgIGRvbUVsZW1lbnQgPSBpbnN0YW5jZS4kZWxlbWVudFswXTsgIC8vL1xuXG4gIHJlc2l6ZU9iamVjdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IC0xOycpO1xuICByZXNpemVPYmplY3QuZGF0YSA9ICdhYm91dDpibGFuayc7XG4gIHJlc2l6ZU9iamVjdC50eXBlID0gJ3RleHQvaHRtbCc7XG5cbiAgcmVzaXplT2JqZWN0Ll9fZG9tRWxlbWVudF9fID0gZG9tRWxlbWVudDtcbiAgZG9tRWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fID0gcmVzaXplT2JqZWN0O1xuICBkb21FbGVtZW50Ll9faW5zdGFuY2VfXyA9IGluc3RhbmNlO1xuXG4gIHJlc2l6ZU9iamVjdC5vbmxvYWQgPSByZXNpemVPYmplY3RMb2FkSGFuZGxlcjtcblxuICBkb21FbGVtZW50LmFwcGVuZENoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJlc2l6ZU9iamVjdChpbnN0YW5jZSkge1xuICB2YXIgZG9tRWxlbWVudCA9IGluc3RhbmNlLiRlbGVtZW50WzBdLCAgLy8vXG4gICAgICByZXNpemVPYmplY3QgPSBkb21FbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKTtcblxuICBkb21FbGVtZW50LnJlbW92ZUNoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKCkge1xuICB2YXIgcmVzaXplT2JqZWN0V2luZG93ID0gdGhpcy5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuX19kb21FbGVtZW50X18gPSB0aGlzLl9fZG9tRWxlbWVudF9fO1xuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplTGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiByZXNpemVMaXN0ZW5lcihldmVudCkge1xuICB2YXIgcmVzaXplT2JqZWN0V2luZG93ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQsICAvLy9cbiAgICAgIGRvbUVsZW1lbnQgPSByZXNpemVPYmplY3RXaW5kb3cuX19kb21FbGVtZW50X18sXG4gICAgICBpbnN0YW5jZSA9IGRvbUVsZW1lbnQuX19pbnN0YW5jZV9fLFxuICAgICAgd2lkdGggPSBpbnN0YW5jZS5nZXRXaWR0aCgpLFxuICAgICAgaGVpZ2h0ID0gaW5zdGFuY2UuZ2V0SGVpZ2h0KCk7XG5cbiAgaW5zdGFuY2UucmVzaXplSGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihyZXNpemVIYW5kbGVyKXtcbiAgICByZXNpemVIYW5kbGVyKHdpZHRoLCBoZWlnaHQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=