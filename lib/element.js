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

    var domElement = $(this.$element)[0]; ///

    domElement.__instance__ = this;

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
      var includeBorder = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
      var includeMargin = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

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
      var includeBorder = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
      var includeMargin = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      var width = includeBorder ? this.$element.outerWidth(includeMargin) : this.$element.width();

      return width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var includeBorder = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
      var includeMargin = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

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
      var button = arguments.length <= 1 || arguments[1] === undefined ? Element.LEFT_MOUSE_BUTTON : arguments[1];
      var allowDefault = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

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
      this.$element.on('dblclick', function () {
        doubleClickHandler();

        return false;
      });
    }
  }, {
    key: 'offDoubleClick',
    value: function offDoubleClick(doubleClickHandler) {
      this.$element.off('dblclick', doubleClickHandler);
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
        instance = domElement.__instance__;

    if (instance !== undefined) {
      var element = instance; ///

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiQm91bmRzIiwiUG9zaXRpb24iLCJFbGVtZW50Iiwic2VsZWN0b3IiLCIkZWxlbWVudCIsIiRlbGVtZW50RnJvbVNlbGVjdG9yIiwiZG9tRWxlbWVudCIsIl9faW5zdGFuY2VfXyIsInJlc2l6ZUhhbmRsZXJzIiwiY2xvbmUiLCJzaG93IiwiaGlkZSIsInJlbW92ZUF0dHIiLCJhdHRyIiwicmVtb3ZlIiwiZGV0YWNoIiwiZW1wdHkiLCIkcG9zaXRpb24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJpbmNsdWRlQm9yZGVyIiwiaW5jbHVkZU1hcmdpbiIsIiRvZmZzZXQiLCJvZmZzZXQiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiLCJib3VuZHMiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJuYW1lIiwidmFsdWUiLCJlbGVtZW50IiwiYmVmb3JlIiwiYWZ0ZXIiLCJlbGVtZW50T3JTdHJpbmciLCJzdHJpbmciLCJwcmVwZW5kIiwiYXBwZW5kIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaHRtbCIsInVuZGVmaW5lZCIsImNzcyIsInByb3BlcnR5TmFtZSIsImtleSIsImRhdGEiLCJmb3VuZERPTUVsZW1lbnRzIiwiZmluZCIsImZvdW5kRWxlbWVudHMiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsImNoaWxkRE9NRWxlbWVudHMiLCJjaGlsZHJlbiIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRET01FbGVtZW50cyIsInBhcmVudCIsInBhcmVudEVsZW1lbnRzIiwiZmlyc3RQYXJlbnRFbGVtZW50IiwiZmlyc3QiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50cyIsImV2ZW50cyIsImhhbmRsZXIiLCJuYW1lc3BhY2UiLCJvbiIsIm9mZiIsImNsaWNrSGFuZGxlciIsImJ1dHRvbiIsIkxFRlRfTU9VU0VfQlVUVE9OIiwiYWxsb3dEZWZhdWx0IiwiZXZlbnQiLCJNSURETEVfTU9VU0VfQlVUVE9OIiwiZG91YmxlQ2xpY2tIYW5kbGVyIiwibW91c2VVcEhhbmRsZXIiLCJyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwibW91c2VPdXRIYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsInJlc2l6ZUhhbmRsZXIiLCJoYXNSZXNpemVIYW5kbGVycyIsImFwcGVuZFJlc2l6ZU9iamVjdCIsImFkZFJlc2l6ZUhhbmRsZXIiLCJyZW1vdmVSZXNpemVIYW5kbGVyIiwicmVtb3ZlUmVzaXplT2JqZWN0IiwiZmlyc3RBcmd1bWVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImluc3RhbmNlIiwiaXNOb3RBQ2xhc3MiLCIkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCIsInNlY29uZEFyZ3VtZW50IiwiSFRNTEVsZW1lbnQiLCJSSUdIVF9NT1VTRV9CVVRUT04iLCJtb2R1bGUiLCJleHBvcnRzIiwiQXJyYXkiLCJjaGlsZFNlbGVjdG9yIiwicGFyZW50JEVsZW1lbnQiLCJtb3VzZVRvcCIsInBhZ2VZIiwibW91c2VMZWZ0IiwicGFnZVgiLCJtb3VzZUJ1dHRvbiIsIndoaWNoIiwiZG9tRWxlbWVudHMiLCJlbGVtZW50cyIsImRvbUVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiaSIsInB1c2giLCJ1bnNoaWZ0IiwiQ2xhc3MiLCJzaGlmdCIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiYmluZCIsImFwcGx5Iiwic3RhcnQiLCJpbmRleE9mIiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZXNpemVIYW5kbGVyc0xlbmd0aCIsInJlc2l6ZU9iamVjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInR5cGUiLCJfX2RvbUVsZW1lbnRfXyIsIl9fcmVzaXplT2JqZWN0X18iLCJvbmxvYWQiLCJyZXNpemVPYmplY3RMb2FkSGFuZGxlciIsImFwcGVuZENoaWxkIiwib2JqZWN0V2luZG93IiwiY29udGVudERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzaXplTGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsInJlc2l6ZU9iamVjdFdpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJzcmNFbGVtZW50IiwiZm9yRWFjaCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxRQUFSLENBQVI7O0FBRUEsSUFBSUMsU0FBU0QsUUFBUSxVQUFSLENBQWI7QUFBQSxJQUNJRSxXQUFXRixRQUFRLFlBQVIsQ0FEZjs7SUFHTUcsTztBQUNKLFdBRElBLE9BQ0osQ0FBWUMsUUFBWixFQUFzQjtBQUFBLDBCQURsQkQsT0FDa0I7O0FBQ3BCLFNBQUtFLFFBQUwsR0FBZ0JDLHFCQUFxQkYsUUFBckIsQ0FBaEI7O0FBRUEsUUFBSUcsYUFBYVIsRUFBRSxLQUFLTSxRQUFQLEVBQWlCLENBQWpCLENBQWpCLENBSG9CLENBR2tCOztBQUV0Q0UsZUFBV0MsWUFBWCxHQUEwQixJQUExQjs7QUFFQSxTQUFLQyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0Q7O2VBVEdOLE87OzRCQVdJO0FBQUUsYUFBT0EsUUFBUU8sS0FBUixDQUFjLElBQWQsQ0FBUDtBQUE2Qjs7OzJCQUVoQztBQUFFLFdBQUtMLFFBQUwsQ0FBY00sSUFBZDtBQUF1Qjs7OzJCQUN6QjtBQUFFLFdBQUtOLFFBQUwsQ0FBY08sSUFBZDtBQUF1Qjs7OzZCQUN2QjtBQUFFLFdBQUtQLFFBQUwsQ0FBY1EsVUFBZCxDQUF5QixVQUF6QjtBQUF1Qzs7OzhCQUN4QztBQUFFLFdBQUtSLFFBQUwsQ0FBY1MsSUFBZCxDQUFtQixVQUFuQixFQUErQixJQUEvQjtBQUF1Qzs7OzZCQUMxQztBQUFFLFdBQUtULFFBQUwsQ0FBY1UsTUFBZDtBQUF5Qjs7OzZCQUMzQjtBQUFFLFdBQUtWLFFBQUws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QUF4QixDQUFnQyxVQUFTL0QsYUFBVCxFQUF1QjtBQUNyREEsa0JBQWM1RCxLQUFkLEVBQXFCRSxNQUFyQjtBQUNELEdBRkQ7QUFHRDs7QUFFRCxTQUFTcUMsS0FBVCxDQUFlcUYsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbnZhciBCb3VuZHMgPSByZXF1aXJlKCcuL2JvdW5kcycpLFxuICAgIFBvc2l0aW9uID0gcmVxdWlyZSgnLi9wb3NpdGlvbicpO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgdmFyIGRvbUVsZW1lbnQgPSAkKHRoaXMuJGVsZW1lbnQpWzBdOyAvLy9cblxuICAgIGRvbUVsZW1lbnQuX19pbnN0YW5jZV9fID0gdGhpcztcblxuICAgIHRoaXMucmVzaXplSGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gRWxlbWVudC5jbG9uZSh0aGlzKTsgfVxuXG4gIHNob3coKSB7IHRoaXMuJGVsZW1lbnQuc2hvdygpOyB9XG4gIGhpZGUoKSB7IHRoaXMuJGVsZW1lbnQuaGlkZSgpOyB9XG4gIGVuYWJsZSgpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyB9XG4gIGRpc2FibGUoKSB7IHRoaXMuJGVsZW1lbnQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTsgfVxuICByZW1vdmUoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlKCk7IH1cbiAgZGV0YWNoKCkgeyB0aGlzLiRlbGVtZW50LmRldGFjaCgpOyB9XG4gIGVtcHR5KCkgeyB0aGlzLiRlbGVtZW50LmVtcHR5KCk7IH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB2YXIgJHBvc2l0aW9uID0gdGhpcy4kZWxlbWVudC5wb3NpdGlvbigpLFxuICAgICAgICB0b3AgPSAkcG9zaXRpb24udG9wLFxuICAgICAgICBsZWZ0ID0gJHBvc2l0aW9uLmxlZnQsXG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBnZXRCb3VuZHMoaW5jbHVkZUJvcmRlciA9IGZhbHNlLCBpbmNsdWRlTWFyZ2luID0gZmFsc2UpIHtcbiAgICB2YXIgJG9mZnNldCA9IHRoaXMuJGVsZW1lbnQub2Zmc2V0KCksXG4gICAgICAgIHRvcCA9ICRvZmZzZXQudG9wLCAgLy8vXG4gICAgICAgIGxlZnQgPSAkb2Zmc2V0LmxlZnQsICAvLy9cbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKGluY2x1ZGVCb3JkZXIsIGluY2x1ZGVNYXJnaW4pLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodChpbmNsdWRlQm9yZGVyLCBpbmNsdWRlTWFyZ2luKSxcbiAgICAgICAgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSBmYWxzZSwgaW5jbHVkZU1hcmdpbiA9IGZhbHNlKSB7IFxuICAgIHZhciB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgPyBcbiAgICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQub3V0ZXJXaWR0aChpbmNsdWRlTWFyZ2luKSA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQud2lkdGgoKTtcbiAgICBcbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cbiAgXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gZmFsc2UsIGluY2x1ZGVNYXJnaW4gPSBmYWxzZSkge1xuICAgIHZhciBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50Lm91dGVySGVpZ2h0KGluY2x1ZGVNYXJnaW4pIDpcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuaGVpZ2h0KCk7XG4gICAgXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuJGVsZW1lbnQud2lkdGgod2lkdGgpOyB9XG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy4kZWxlbWVudC5oZWlnaHQoaGVpZ2h0KTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LmF0dHIobmFtZSk7IH1cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lLCB2YWx1ZSk7IH1cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyKG5hbWUpOyB9XG4gIHByZXBlbmRCZWZvcmUoZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmJlZm9yZShlbGVtZW50LiRlbGVtZW50KTsgfVxuICBhcHBlbmRBZnRlcihlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYWZ0ZXIoZWxlbWVudC4kZWxlbWVudCk7IH1cbiAgXG4gIHByZXBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0gZWxlbWVudE9yU3RyaW5nOyAvLy9cblxuICAgICAgdGhpcy4kZWxlbWVudC5wcmVwZW5kKHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudE9yU3RyaW5nLCAgLy8vXG4gICAgICAgICAgJGVsZW1lbnQgPSBlbGVtZW50LiRlbGVtZW50O1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnByZXBlbmQoJGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBcbiAgYXBwZW5kKGVsZW1lbnRPclN0cmluZykge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHN0cmluZyA9IGVsZW1lbnRPclN0cmluZzsgLy8vXG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudE9yU3RyaW5nLCAgLy8vXG4gICAgICAgICAgJGVsZW1lbnQgPSBlbGVtZW50LiRlbGVtZW50O1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZCgkZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSk7IH1cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpOyB9XG4gIHJlbW92ZUNsYXNzZXMoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoKTsgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuaHRtbChodG1sKVxuICAgIH0gZWxzZSB7XG4gICAgICBodG1sID0gdGhpcy4kZWxlbWVudC5odG1sKCk7XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSBjc3M7XG5cbiAgICAgIGNzcyA9IHRoaXMuJGVsZW1lbnQuY3NzKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKGNzcyk7XG4gICAgfVxuICB9XG5cbiAgZGF0YShrZXksIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuZGF0YShrZXksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB0aGlzLiRlbGVtZW50LmRhdGEoa2V5KTtcblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBmb3VuZERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5maW5kKHNlbGVjdG9yKSxcbiAgICAgICAgZm91bmRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGZvdW5kRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZvdW5kRWxlbWVudHM7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIGNoaWxkRE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKHNlbGVjdG9yKSxcbiAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRFbGVtZW50KHNlbGVjdG9yKSB7XG4gICAgdmFyIHBhcmVudERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5wYXJlbnQoc2VsZWN0b3IpLFxuICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpLFxuICAgICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHBhcmVudEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIHBhcmVudERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5wYXJlbnRzKHNlbGVjdG9yKSxcbiAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudHM7XG4gIH1cblxuICBvbihldmVudHMsIGhhbmRsZXIsIG5hbWVzcGFjZSkge1xuICAgIGlmIChuYW1lc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnRzID0gZXZlbnRzICsgJy4nICsgbmFtZXNwYWNlO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQub24oZXZlbnRzLCBoYW5kbGVyKTtcbiAgfVxuICBcbiAgb2ZmKGV2ZW50cywgbmFtZXNwYWNlKSB7XG4gICAgaWYgKG5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBldmVudHMgPSBldmVudHMgKyAnLicgKyBuYW1lc3BhY2U7XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC5vZmYoZXZlbnRzKTtcbiAgfVxuXG4gIG9uQ2xpY2soY2xpY2tIYW5kbGVyLCBidXR0b24gPSBFbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OLCBhbGxvd0RlZmF1bHQgPSBmYWxzZSkge1xuICAgIHRoaXMuJGVsZW1lbnQub24oJ2NsaWNrJyxmdW5jdGlvbihldmVudCkge1xuICAgICAgc3dpdGNoIChidXR0b24pIHtcbiAgICAgICAgY2FzZSBFbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OIDpcbiAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7IC8vL1xuICAgICAgICAgICAgY2xpY2tIYW5kbGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRWxlbWVudC5NSURETEVfTU9VU0VfQlVUVE9OIDpcbiAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAxKSB7IC8vL1xuICAgICAgICAgICAgY2xpY2tIYW5kbGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWxsb3dEZWZhdWx0O1xuICAgIH0pO1xuICB9XG4gIFxuICBvZmZDbGljayhjbGlja0hhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vZmYoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIG9uRG91YmxlQ2xpY2soZG91YmxlQ2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy4kZWxlbWVudC5vbignZGJsY2xpY2snLGZ1bmN0aW9uKCkge1xuICAgICAgZG91YmxlQ2xpY2tIYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9XG5cbiAgb2ZmRG91YmxlQ2xpY2soZG91YmxlQ2xpY2tIYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub2ZmKCdkYmxjbGljaycsIGRvdWJsZUNsaWNrSGFuZGxlcik7IH1cblxuICBvbk1vdXNlVXAobW91c2VVcEhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZXVwJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIobW91c2VVcEhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZWRvd24nLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihtb3VzZURvd25IYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuICBvbk1vdXNlT3Zlcihtb3VzZU92ZXJIYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2VvdmVyJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIobW91c2VPdmVySGFuZGxlciksIG5hbWVzcGFjZSk7IH1cbiAgb25Nb3VzZU91dChtb3VzZU91dEhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZW91dCcsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlT3V0SGFuZGxlciksIG5hbWVzcGFjZSk7IH1cbiAgb25Nb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlciwgbmFtZXNwYWNlKSB7IHRoaXMub24oJ21vdXNlbW92ZScsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG5cbiAgb2ZmTW91c2VVcChuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ21vdXNldXAnLCBuYW1lc3BhY2UpOyB9XG4gIG9mZk1vdXNlRG93bihuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ21vdXNlZG93bicsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VPdmVyKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2VvdmVyJywgbmFtZXNwYWNlKTsgfVxuICBvZmZNb3VzZU91dChuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ21vdXNlb3V0JywgbmFtZXNwYWNlKTsgfVxuICBvZmZNb3VzZU1vdmUobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZW1vdmUnLCBuYW1lc3BhY2UpOyB9XG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlcikge1xuICAgIHZhciByZXNpemVIYW5kbGVycyA9IGhhc1Jlc2l6ZUhhbmRsZXJzKHRoaXMpO1xuXG4gICAgaWYgKCFyZXNpemVIYW5kbGVycykge1xuICAgICAgYXBwZW5kUmVzaXplT2JqZWN0KHRoaXMpO1xuICAgIH1cblxuICAgIGFkZFJlc2l6ZUhhbmRsZXIodGhpcywgcmVzaXplSGFuZGxlcik7XG4gIH1cblxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlcikge1xuICAgIHJlbW92ZVJlc2l6ZUhhbmRsZXIodGhpcywgcmVzaXplSGFuZGxlcik7XG5cbiAgICB2YXIgcmVzaXplSGFuZGxlcnMgPSBoYXNSZXNpemVIYW5kbGVycyh0aGlzKTtcblxuICAgIGlmICghcmVzaXplSGFuZGxlcnMpIHtcbiAgICAgIHJlbW92ZVJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZmlyc3RBcmd1bWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlKGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KTtcblxuICAgIGZ1bmN0aW9uIGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAoKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykgfHwgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQoc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgIHZhciAkZWxlbWVudCA9ICh0eXBlb2Ygc2Vjb25kQXJndW1lbnQgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgJChzZWNvbmRBcmd1bWVudCkgOlxuICAgICAgICAgIHNlY29uZEFyZ3VtZW50LiRlbGVtZW50O1xuXG4gICAgICByZXR1cm4gJGVsZW1lbnQuY2xvbmUoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoZmlyc3RBcmd1bWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlKGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KTtcblxuICAgIGZ1bmN0aW9uIGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudChzZWNvbmRBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICQoc2Vjb25kQXJndW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChmaXJzdEFyZ3VtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQpO1xuXG4gICAgZnVuY3Rpb24gaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkge1xuICAgICAgcmV0dXJuIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gJChzZWNvbmRBcmd1bWVudCk7XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQuTEVGVF9NT1VTRV9CVVRUT04gPSAxO1xuRWxlbWVudC5NSURETEVfTU9VU0VfQlVUVE9OID0gMjtcbkVsZW1lbnQuUklHSFRfTU9VU0VfQlVUVE9OID0gMztcblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiAkZWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICB2YXIgJGVsZW1lbnQ7XG5cbiAgaWYgKGZhbHNlKSB7XG5cbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgJGVsZW1lbnQgPSAkKHNlbGVjdG9yKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mICQpIHtcbiAgICAkZWxlbWVudCA9IHNlbGVjdG9yOyAgLy8vXG4gIH0gZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBBcnJheSApIHtcbiAgICB2YXIgcGFyZW50RWxlbWVudCA9IHNlbGVjdG9yWzBdLCAvLy9cbiAgICAgICAgY2hpbGRTZWxlY3RvciA9IHNlbGVjdG9yWzFdLCAgLy8vXG4gICAgICAgIHBhcmVudCRFbGVtZW50ID0gcGFyZW50RWxlbWVudC4kZWxlbWVudDsgIC8vL1xuXG4gICAgJGVsZW1lbnQgPSBwYXJlbnQkRWxlbWVudC5maW5kKGNoaWxkU2VsZWN0b3IpO1xuICB9XG5cbiAgcmV0dXJuICRlbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBtb3VzZVRvcCA9IGV2ZW50LnBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBldmVudC53aGljaDsgLy8vXG5cbiAgICBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQsIG1vdXNlQnV0dG9uKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMpIHtcbiAgdmFyIGVsZW1lbnRzID0gW10sXG4gICAgICBkb21FbGVtZW50c0xlbmd0aCA9IGRvbUVsZW1lbnRzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvbUVsZW1lbnRzTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRzW2ldLFxuICAgICAgICBpbnN0YW5jZSA9IGRvbUVsZW1lbnQuX19pbnN0YW5jZV9fO1xuXG4gICAgaWYgKGluc3RhbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gaW5zdGFuY2U7IC8vL1xuICAgICAgXG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQpIHtcbiAgaWYgKGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpKSB7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZmlyc3RBcmd1bWVudCk7XG4gICAgZmlyc3RBcmd1bWVudCA9IEVsZW1lbnQ7XG4gIH1cblxuICB2YXIgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LFxuICAgICAgc2Vjb25kQXJndW1lbnQgPSByZW1haW5pbmdBcmd1bWVudHMuc2hpZnQoKSxcbiAgICAgICRlbGVtZW50ID0gJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQoc2Vjb25kQXJndW1lbnQpO1xuXG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KCRlbGVtZW50KTtcbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7IC8vL1xuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTsgIC8vL1xufVxuXG5mdW5jdGlvbiBhZGRSZXNpemVIYW5kbGVyKGluc3RhbmNlLCByZXNpemVIYW5kbGVyKSB7XG4gIGluc3RhbmNlLnJlc2l6ZUhhbmRsZXJzLnB1c2gocmVzaXplSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJlc2l6ZUhhbmRsZXIoaW5zdGFuY2UsIHJlc2l6ZUhhbmRsZXIpIHtcbiAgdmFyIHN0YXJ0ID0gaW5zdGFuY2UucmVzaXplSGFuZGxlcnMuaW5kZXhPZihyZXNpemVIYW5kbGVyKTsgLy8vXG5cbiAgaWYgKHN0YXJ0ID4gLTEpIHtcbiAgICB2YXIgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgaW5zdGFuY2UucmVzaXplSGFuZGxlcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFzUmVzaXplSGFuZGxlcnMoaW5zdGFuY2UpIHtcbiAgdmFyIHJlc2l6ZUhhbmRsZXJzTGVuZ3RoID0gaW5zdGFuY2UucmVzaXplSGFuZGxlcnMubGVuZ3RoLFxuICAgICAgcmVzaXplSGFuZGxlcnMgPSAocmVzaXplSGFuZGxlcnNMZW5ndGggPiAwKTtcblxuICByZXR1cm4gcmVzaXplSGFuZGxlcnM7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFJlc2l6ZU9iamVjdChpbnN0YW5jZSkge1xuICB2YXIgcmVzaXplT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0JyksXG4gICAgICBkb21FbGVtZW50ID0gaW5zdGFuY2UuJGVsZW1lbnRbMF07ICAvLy9cblxuICByZXNpemVPYmplY3Quc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47IHBvaW50ZXItZXZlbnRzOiBub25lOyB6LWluZGV4OiAtMTsnKTtcbiAgcmVzaXplT2JqZWN0LmRhdGEgPSAnYWJvdXQ6YmxhbmsnO1xuICByZXNpemVPYmplY3QudHlwZSA9ICd0ZXh0L2h0bWwnO1xuXG4gIHJlc2l6ZU9iamVjdC5fX2RvbUVsZW1lbnRfXyA9IGRvbUVsZW1lbnQ7XG4gIGRvbUVsZW1lbnQuX19yZXNpemVPYmplY3RfXyA9IHJlc2l6ZU9iamVjdDtcblxuICByZXNpemVPYmplY3Qub25sb2FkID0gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXI7XG5cbiAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSZXNpemVPYmplY3QoaW5zdGFuY2UpIHtcbiAgdmFyIGRvbUVsZW1lbnQgPSBpbnN0YW5jZS4kZWxlbWVudFswXSwgIC8vL1xuICAgICAgcmVzaXplT2JqZWN0ID0gZG9tRWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgb2JqZWN0V2luZG93ID0gcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIG9iamVjdFdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVMaXN0ZW5lcik7XG5cbiAgZG9tRWxlbWVudC5yZW1vdmVDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZXNpemVPYmplY3RMb2FkSGFuZGxlcigpIHtcbiAgdmFyIHJlc2l6ZU9iamVjdFdpbmRvdyA9IHRoaXMuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgcmVzaXplT2JqZWN0V2luZG93Ll9fZG9tRWxlbWVudF9fID0gdGhpcy5fX2RvbUVsZW1lbnRfXztcbiAgcmVzaXplT2JqZWN0V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gcmVzaXplTGlzdGVuZXIoZXZlbnQpIHtcbiAgdmFyIHJlc2l6ZU9iamVjdFdpbmRvdyA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50LCAgLy8vXG4gICAgICBkb21FbGVtZW50ID0gcmVzaXplT2JqZWN0V2luZG93Ll9fZG9tRWxlbWVudF9fLFxuICAgICAgaW5zdGFuY2UgPSBkb21FbGVtZW50Ll9faW5zdGFuY2VfXyxcbiAgICAgIHdpZHRoID0gaW5zdGFuY2UuZ2V0V2lkdGgoKSxcbiAgICAgIGhlaWdodCA9IGluc3RhbmNlLmdldEhlaWdodCgpO1xuXG4gIGluc3RhbmNlLnJlc2l6ZUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24ocmVzaXplSGFuZGxlcil7XG4gICAgcmVzaXplSGFuZGxlcih3aWR0aCwgaGVpZ2h0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19