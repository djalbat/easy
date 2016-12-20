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
      var namespace = arguments[3];

      this.on('click', function (event) {
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
      }, namespace);
    }
  }, {
    key: 'offClick',
    value: function offClick(namespace) {
      this.off('click', namespace);
    }
  }, {
    key: 'onDoubleClick',
    value: function onDoubleClick(doubleClickHandler, namespace) {
      this.on('dblclick', function () {
        doubleClickHandler();

        return false;
      }, namespace);
    }
  }, {
    key: 'offDoubleClick',
    value: function offDoubleClick(namespace) {
      this.off('dblclick', namespace);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiQm91bmRzIiwiUG9zaXRpb24iLCJFbGVtZW50Iiwic2VsZWN0b3IiLCIkZWxlbWVudCIsIiRlbGVtZW50RnJvbVNlbGVjdG9yIiwiZG9tRWxlbWVudCIsIl9faW5zdGFuY2VfXyIsInJlc2l6ZUhhbmRsZXJzIiwiY2xvbmUiLCJzaG93IiwiaGlkZSIsInJlbW92ZUF0dHIiLCJhdHRyIiwicmVtb3ZlIiwiZGV0YWNoIiwiZW1wdHkiLCIkcG9zaXRpb24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJpbmNsdWRlQm9yZGVyIiwiaW5jbHVkZU1hcmdpbiIsIiRvZmZzZXQiLCJvZmZzZXQiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiLCJib3VuZHMiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJuYW1lIiwidmFsdWUiLCJlbGVtZW50IiwiYmVmb3JlIiwiYWZ0ZXIiLCJlbGVtZW50T3JTdHJpbmciLCJzdHJpbmciLCJwcmVwZW5kIiwiYXBwZW5kIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaHRtbCIsInVuZGVmaW5lZCIsImNzcyIsInByb3BlcnR5TmFtZSIsImtleSIsImRhdGEiLCJmb3VuZERPTUVsZW1lbnRzIiwiZmluZCIsImZvdW5kRWxlbWVudHMiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsImNoaWxkRE9NRWxlbWVudHMiLCJjaGlsZHJlbiIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRET01FbGVtZW50cyIsInBhcmVudCIsInBhcmVudEVsZW1lbnRzIiwiZmlyc3RQYXJlbnRFbGVtZW50IiwiZmlyc3QiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50cyIsImV2ZW50cyIsImhhbmRsZXIiLCJuYW1lc3BhY2UiLCJvbiIsIm9mZiIsImNsaWNrSGFuZGxlciIsImJ1dHRvbiIsIkxFRlRfTU9VU0VfQlVUVE9OIiwiYWxsb3dEZWZhdWx0IiwiZXZlbnQiLCJNSURETEVfTU9VU0VfQlVUVE9OIiwiZG91YmxlQ2xpY2tIYW5kbGVyIiwibW91c2VVcEhhbmRsZXIiLCJyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwibW91c2VPdXRIYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsInJlc2l6ZUhhbmRsZXIiLCJoYXNSZXNpemVIYW5kbGVycyIsImFwcGVuZFJlc2l6ZU9iamVjdCIsImFkZFJlc2l6ZUhhbmRsZXIiLCJyZW1vdmVSZXNpemVIYW5kbGVyIiwicmVtb3ZlUmVzaXplT2JqZWN0IiwiZmlyc3RBcmd1bWVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImluc3RhbmNlIiwiaXNOb3RBQ2xhc3MiLCIkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCIsInNlY29uZEFyZ3VtZW50IiwiSFRNTEVsZW1lbnQiLCJSSUdIVF9NT1VTRV9CVVRUT04iLCJtb2R1bGUiLCJleHBvcnRzIiwiQXJyYXkiLCJjaGlsZFNlbGVjdG9yIiwicGFyZW50JEVsZW1lbnQiLCJtb3VzZVRvcCIsInBhZ2VZIiwibW91c2VMZWZ0IiwicGFnZVgiLCJtb3VzZUJ1dHRvbiIsIndoaWNoIiwiZG9tRWxlbWVudHMiLCJlbGVtZW50cyIsImRvbUVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiaSIsInB1c2giLCJ1bnNoaWZ0IiwiQ2xhc3MiLCJzaGlmdCIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiYmluZCIsImFwcGx5Iiwic3RhcnQiLCJpbmRleE9mIiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZXNpemVIYW5kbGVyc0xlbmd0aCIsInJlc2l6ZU9iamVjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInR5cGUiLCJfX2RvbUVsZW1lbnRfXyIsIl9fcmVzaXplT2JqZWN0X18iLCJvbmxvYWQiLCJyZXNpemVPYmplY3RMb2FkSGFuZGxlciIsImFwcGVuZENoaWxkIiwib2JqZWN0V2luZG93IiwiY29udGVudERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzaXplTGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsInJlc2l6ZU9iamVjdFdpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJzcmNFbGVtZW50IiwiZm9yRWFjaCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxRQUFSLENBQVI7O0FBRUEsSUFBSUMsU0FBU0QsUUFBUSxVQUFSLENBQWI7QUFBQSxJQUNJRSxXQUFXRixRQUFRLFlBQVIsQ0FEZjs7SUFHTUcsTztBQUNKLFdBRElBLE9BQ0osQ0FBWUMsUUFBWixFQUFzQjtBQUFBLDBCQURsQkQsT0FDa0I7O0FBQ3BCLFNBQUtFLFFBQUwsR0FBZ0JDLHFCQUFxQkYsUUFBckIsQ0FBaEI7O0FBRUEsUUFBSUcsYUFBYVIsRUFBRSxLQUFLTSxRQUFQLEVBQWlCLENBQWpCLENBQWpCLENBSG9CLENBR2tCOztBQUV0Q0UsZUFBV0MsWUFBWCxHQUEwQixJQUExQjs7QUFFQSxTQUFLQyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0Q7O2VBVEdOLE87OzRCQVdJO0FBQUUsYUFBT0EsUUFBUU8sS0FBUixDQUFjLElBQWQsQ0FBUDtBQUE2Qjs7OzJCQUVoQztBQUFFLFdBQUtMLFFBQUwsQ0FBY00sSUFBZDtBQUF1Qjs7OzJCQUN6QjtBQUFFLFdBQUtOLFFBQUwsQ0FBY08sSUFBZDtBQUF1Qjs7OzZCQUN2QjtBQUFFLFdBQUtQLFFBQUwsQ0FBY1EsVUFBZCxDQUF5QixVQUF6QjtBQUF1Qzs7OzhCQUN4QztBQUFFLFdBQUtSLFFBQUwsQ0FBY1MsSUFBZCxDQUFtQixVQUFuQixFQUErQixJQUEvQjtBQUF1Qzs7OzZCQUMxQztBQUFFLFdBQUtULFFBQUwsQ0FBY1UsTUFBZDtBQUF5Qjs7OzZCQUMzQjtBQUFFLFdBQUtWLFFBQUws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QVMvRCxhQUFULEVBQXVCO0FBQ3JEQSxrQkFBYzVELEtBQWQsRUFBcUJFLE1BQXJCO0FBQ0QsR0FGRDtBQUdEOztBQUVELFNBQVNxQyxLQUFULENBQWVxRixLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxudmFyIEJvdW5kcyA9IHJlcXVpcmUoJy4vYm91bmRzJyksXG4gICAgUG9zaXRpb24gPSByZXF1aXJlKCcuL3Bvc2l0aW9uJyk7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICB2YXIgZG9tRWxlbWVudCA9ICQodGhpcy4kZWxlbWVudClbMF07IC8vL1xuXG4gICAgZG9tRWxlbWVudC5fX2luc3RhbmNlX18gPSB0aGlzO1xuXG4gICAgdGhpcy5yZXNpemVIYW5kbGVycyA9IFtdO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBFbGVtZW50LmNsb25lKHRoaXMpOyB9XG5cbiAgc2hvdygpIHsgdGhpcy4kZWxlbWVudC5zaG93KCk7IH1cbiAgaGlkZSgpIHsgdGhpcy4kZWxlbWVudC5oaWRlKCk7IH1cbiAgZW5hYmxlKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7IH1cbiAgZGlzYWJsZSgpIHsgdGhpcy4kZWxlbWVudC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpOyB9XG4gIHJlbW92ZSgpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmUoKTsgfVxuICBkZXRhY2goKSB7IHRoaXMuJGVsZW1lbnQuZGV0YWNoKCk7IH1cbiAgZW1wdHkoKSB7IHRoaXMuJGVsZW1lbnQuZW1wdHkoKTsgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHZhciAkcG9zaXRpb24gPSB0aGlzLiRlbGVtZW50LnBvc2l0aW9uKCksXG4gICAgICAgIHRvcCA9ICRwb3NpdGlvbi50b3AsXG4gICAgICAgIGxlZnQgPSAkcG9zaXRpb24ubGVmdCxcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24odG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIGdldEJvdW5kcyhpbmNsdWRlQm9yZGVyID0gZmFsc2UsIGluY2x1ZGVNYXJnaW4gPSBmYWxzZSkge1xuICAgIHZhciAkb2Zmc2V0ID0gdGhpcy4kZWxlbWVudC5vZmZzZXQoKSxcbiAgICAgICAgdG9wID0gJG9mZnNldC50b3AsICAvLy9cbiAgICAgICAgbGVmdCA9ICRvZmZzZXQubGVmdCwgIC8vL1xuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciwgaW5jbHVkZU1hcmdpbiksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIsIGluY2x1ZGVNYXJnaW4pLFxuICAgICAgICBib3R0b20gPSB0b3AgKyBoZWlnaHQsXG4gICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IGZhbHNlLCBpbmNsdWRlTWFyZ2luID0gZmFsc2UpIHsgXG4gICAgdmFyIHdpZHRoID0gaW5jbHVkZUJvcmRlciA/IFxuICAgICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5vdXRlcldpZHRoKGluY2x1ZGVNYXJnaW4pIDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC53aWR0aCgpO1xuICAgIFxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuICBcbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSBmYWxzZSwgaW5jbHVkZU1hcmdpbiA9IGZhbHNlKSB7XG4gICAgdmFyIGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQub3V0ZXJIZWlnaHQoaW5jbHVkZU1hcmdpbikgOlxuICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5oZWlnaHQoKTtcbiAgICBcbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy4kZWxlbWVudC53aWR0aCh3aWR0aCk7IH1cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLiRlbGVtZW50LmhlaWdodChoZWlnaHQpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lKTsgfVxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy4kZWxlbWVudC5hdHRyKG5hbWUsIHZhbHVlKTsgfVxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIobmFtZSk7IH1cbiAgcHJlcGVuZEJlZm9yZShlbGVtZW50KSB7IHRoaXMuJGVsZW1lbnQuYmVmb3JlKGVsZW1lbnQuJGVsZW1lbnQpOyB9XG4gIGFwcGVuZEFmdGVyKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5hZnRlcihlbGVtZW50LiRlbGVtZW50KTsgfVxuICBcbiAgcHJlcGVuZChlbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBlbGVtZW50T3JTdHJpbmc7IC8vL1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnByZXBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQucHJlcGVuZCgkZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIFxuICBhcHBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0gZWxlbWVudE9yU3RyaW5nOyAvLy9cblxuICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKCRlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpOyB9XG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7IH1cbiAgcmVtb3ZlQ2xhc3NlcygpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygpOyB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC5odG1sKGh0bWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGh0bWwgPSB0aGlzLiRlbGVtZW50Lmh0bWwoKTtcblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmICh0eXBlb2YgY3NzID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHByb3BlcnR5TmFtZSA9IGNzcztcblxuICAgICAgY3NzID0gdGhpcy4kZWxlbWVudC5jc3MocHJvcGVydHlOYW1lKTtcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kZWxlbWVudC5jc3MoY3NzKTtcbiAgICB9XG4gIH1cblxuICBkYXRhKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC5kYXRhKGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuJGVsZW1lbnQuZGF0YShrZXkpO1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZmluZEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIGZvdW5kRE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LmZpbmQoc2VsZWN0b3IpLFxuICAgICAgICBmb3VuZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZm91bmRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZm91bmRFbGVtZW50cztcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgY2hpbGRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oc2VsZWN0b3IpLFxuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudEVsZW1lbnQoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50RE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LnBhcmVudChzZWxlY3RvciksXG4gICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyksXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcGFyZW50RWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50RE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LnBhcmVudHMoc2VsZWN0b3IpLFxuICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50cztcbiAgfVxuXG4gIG9uKGV2ZW50cywgaGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgaWYgKG5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBldmVudHMgPSBldmVudHMgKyAnLicgKyBuYW1lc3BhY2U7XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC5vbihldmVudHMsIGhhbmRsZXIpO1xuICB9XG4gIFxuICBvZmYoZXZlbnRzLCBuYW1lc3BhY2UpIHtcbiAgICBpZiAobmFtZXNwYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGV2ZW50cyA9IGV2ZW50cyArICcuJyArIG5hbWVzcGFjZTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9mZihldmVudHMpO1xuICB9XG5cbiAgb25DbGljayhjbGlja0hhbmRsZXIsIGJ1dHRvbiA9IEVsZW1lbnQuTEVGVF9NT1VTRV9CVVRUT04sIGFsbG93RGVmYXVsdCA9IGZhbHNlLCBuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBzd2l0Y2ggKGJ1dHRvbikge1xuICAgICAgICBjYXNlIEVsZW1lbnQuTEVGVF9NT1VTRV9CVVRUT04gOlxuICAgICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHsgLy8vXG4gICAgICAgICAgICBjbGlja0hhbmRsZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBFbGVtZW50Lk1JRERMRV9NT1VTRV9CVVRUT04gOlxuICAgICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDEpIHsgLy8vXG4gICAgICAgICAgICBjbGlja0hhbmRsZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhbGxvd0RlZmF1bHQ7XG4gICAgfSwgbmFtZXNwYWNlKTtcbiAgfVxuICBcbiAgb2ZmQ2xpY2sobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdjbGljaycsIG5hbWVzcGFjZSk7IH1cblxuICBvbkRvdWJsZUNsaWNrKGRvdWJsZUNsaWNrSGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgdGhpcy5vbignZGJsY2xpY2snLGZ1bmN0aW9uKCkge1xuICAgICAgZG91YmxlQ2xpY2tIYW5kbGVyKCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LCBuYW1lc3BhY2UpXG4gIH1cblxuICBvZmZEb3VibGVDbGljayhuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ2RibGNsaWNrJywgbmFtZXNwYWNlKTsgfVxuXG4gIG9uTW91c2VVcChtb3VzZVVwSGFuZGxlciwgbmFtZXNwYWNlKSB7IHRoaXMub24oJ21vdXNldXAnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihtb3VzZVVwSGFuZGxlciksIG5hbWVzcGFjZSk7IH1cbiAgb25Nb3VzZURvd24obW91c2VEb3duSGFuZGxlciwgbmFtZXNwYWNlKSB7IHRoaXMub24oJ21vdXNlZG93bicsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZW92ZXInLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihtb3VzZU92ZXJIYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuICBvbk1vdXNlT3V0KG1vdXNlT3V0SGFuZGxlciwgbmFtZXNwYWNlKSB7IHRoaXMub24oJ21vdXNlb3V0JywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIobW91c2VPdXRIYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuICBvbk1vdXNlTW92ZShtb3VzZU1vdmVIYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2Vtb3ZlJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIobW91c2VNb3ZlSGFuZGxlciksIG5hbWVzcGFjZSk7IH1cblxuICBvZmZNb3VzZVVwKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2V1cCcsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VEb3duKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2Vkb3duJywgbmFtZXNwYWNlKTsgfVxuICBvZmZNb3VzZU92ZXIobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZW92ZXInLCBuYW1lc3BhY2UpOyB9XG4gIG9mZk1vdXNlT3V0KG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2VvdXQnLCBuYW1lc3BhY2UpOyB9XG4gIG9mZk1vdXNlTW92ZShuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ21vdXNlbW92ZScsIG5hbWVzcGFjZSk7IH1cblxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyKSB7XG4gICAgdmFyIHJlc2l6ZUhhbmRsZXJzID0gaGFzUmVzaXplSGFuZGxlcnModGhpcyk7XG5cbiAgICBpZiAoIXJlc2l6ZUhhbmRsZXJzKSB7XG4gICAgICBhcHBlbmRSZXNpemVPYmplY3QodGhpcyk7XG4gICAgfVxuXG4gICAgYWRkUmVzaXplSGFuZGxlcih0aGlzLCByZXNpemVIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyKSB7XG4gICAgcmVtb3ZlUmVzaXplSGFuZGxlcih0aGlzLCByZXNpemVIYW5kbGVyKTtcblxuICAgIHZhciByZXNpemVIYW5kbGVycyA9IGhhc1Jlc2l6ZUhhbmRsZXJzKHRoaXMpO1xuXG4gICAgaWYgKCFyZXNpemVIYW5kbGVycykge1xuICAgICAgcmVtb3ZlUmVzaXplT2JqZWN0KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShmaXJzdEFyZ3VtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQpO1xuXG4gICAgZnVuY3Rpb24gaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICgodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB8fCAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudChzZWNvbmRBcmd1bWVudCkge1xuICAgICAgdmFyICRlbGVtZW50ID0gKHR5cGVvZiBzZWNvbmRBcmd1bWVudCA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAkKHNlY29uZEFyZ3VtZW50KSA6XG4gICAgICAgICAgc2Vjb25kQXJndW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHJldHVybiAkZWxlbWVudC5jbG9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChmaXJzdEFyZ3VtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UoZmlyc3RBcmd1bWVudCwgcmVtYWluaW5nQXJndW1lbnRzLCBpc05vdEFDbGFzcywgJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQpO1xuXG4gICAgZnVuY3Rpb24gaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gJChzZWNvbmRBcmd1bWVudCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGZpcnN0QXJndW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCk7XG5cbiAgICBmdW5jdGlvbiBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQoc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAkKHNlY29uZEFyZ3VtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiA9IDE7XG5FbGVtZW50Lk1JRERMRV9NT1VTRV9CVVRUT04gPSAyO1xuRWxlbWVudC5SSUdIVF9NT1VTRV9CVVRUT04gPSAzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uICRlbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIHZhciAkZWxlbWVudDtcblxuICBpZiAoZmFsc2UpIHtcblxuICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAkZWxlbWVudCA9ICQoc2VsZWN0b3IpO1xuICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgJCkge1xuICAgICRlbGVtZW50ID0gc2VsZWN0b3I7ICAvLy9cbiAgfSBlbHNlIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEFycmF5ICkge1xuICAgIHZhciBwYXJlbnRFbGVtZW50ID0gc2VsZWN0b3JbMF0sIC8vL1xuICAgICAgICBjaGlsZFNlbGVjdG9yID0gc2VsZWN0b3JbMV0sICAvLy9cbiAgICAgICAgcGFyZW50JEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LiRlbGVtZW50OyAgLy8vXG5cbiAgICAkZWxlbWVudCA9IHBhcmVudCRFbGVtZW50LmZpbmQoY2hpbGRTZWxlY3Rvcik7XG4gIH1cblxuICByZXR1cm4gJGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIG1vdXNlVG9wID0gZXZlbnQucGFnZVksICAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsIC8vL1xuICAgICAgICBtb3VzZUJ1dHRvbiA9IGV2ZW50LndoaWNoOyAvLy9cblxuICAgIGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICB2YXIgZWxlbWVudHMgPSBbXSxcbiAgICAgIGRvbUVsZW1lbnRzTGVuZ3RoID0gZG9tRWxlbWVudHMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9tRWxlbWVudHNMZW5ndGg7IGkrKykge1xuICAgIHZhciBkb21FbGVtZW50ID0gZG9tRWxlbWVudHNbaV0sXG4gICAgICAgIGluc3RhbmNlID0gZG9tRWxlbWVudC5fX2luc3RhbmNlX187XG5cbiAgICBpZiAoaW5zdGFuY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBpbnN0YW5jZTsgLy8vXG4gICAgICBcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCkge1xuICBpZiAoaXNOb3RBQ2xhc3MoZmlyc3RBcmd1bWVudCkpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChmaXJzdEFyZ3VtZW50KTtcbiAgICBmaXJzdEFyZ3VtZW50ID0gRWxlbWVudDtcbiAgfVxuXG4gIHZhciBDbGFzcyA9IGZpcnN0QXJndW1lbnQsXG4gICAgICBzZWNvbmRBcmd1bWVudCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5zaGlmdCgpLFxuICAgICAgJGVsZW1lbnQgPSAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudChzZWNvbmRBcmd1bWVudCk7XG5cbiAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoJGVsZW1lbnQpO1xuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTsgLy8vXG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpOyAgLy8vXG59XG5cbmZ1bmN0aW9uIGFkZFJlc2l6ZUhhbmRsZXIoaW5zdGFuY2UsIHJlc2l6ZUhhbmRsZXIpIHtcbiAgaW5zdGFuY2UucmVzaXplSGFuZGxlcnMucHVzaChyZXNpemVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplSGFuZGxlcihpbnN0YW5jZSwgcmVzaXplSGFuZGxlcikge1xuICB2YXIgc3RhcnQgPSBpbnN0YW5jZS5yZXNpemVIYW5kbGVycy5pbmRleE9mKHJlc2l6ZUhhbmRsZXIpOyAvLy9cblxuICBpZiAoc3RhcnQgPiAtMSkge1xuICAgIHZhciBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBpbnN0YW5jZS5yZXNpemVIYW5kbGVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNSZXNpemVIYW5kbGVycyhpbnN0YW5jZSkge1xuICB2YXIgcmVzaXplSGFuZGxlcnNMZW5ndGggPSBpbnN0YW5jZS5yZXNpemVIYW5kbGVycy5sZW5ndGgsXG4gICAgICByZXNpemVIYW5kbGVycyA9IChyZXNpemVIYW5kbGVyc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiByZXNpemVIYW5kbGVycztcbn1cblxuZnVuY3Rpb24gYXBwZW5kUmVzaXplT2JqZWN0KGluc3RhbmNlKSB7XG4gIHZhciByZXNpemVPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKSxcbiAgICAgIGRvbUVsZW1lbnQgPSBpbnN0YW5jZS4kZWxlbWVudFswXTsgIC8vL1xuXG4gIHJlc2l6ZU9iamVjdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IC0xOycpO1xuICByZXNpemVPYmplY3QuZGF0YSA9ICdhYm91dDpibGFuayc7XG4gIHJlc2l6ZU9iamVjdC50eXBlID0gJ3RleHQvaHRtbCc7XG5cbiAgcmVzaXplT2JqZWN0Ll9fZG9tRWxlbWVudF9fID0gZG9tRWxlbWVudDtcbiAgZG9tRWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fID0gcmVzaXplT2JqZWN0O1xuXG4gIHJlc2l6ZU9iamVjdC5vbmxvYWQgPSByZXNpemVPYmplY3RMb2FkSGFuZGxlcjtcblxuICBkb21FbGVtZW50LmFwcGVuZENoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJlc2l6ZU9iamVjdChpbnN0YW5jZSkge1xuICB2YXIgZG9tRWxlbWVudCA9IGluc3RhbmNlLiRlbGVtZW50WzBdLCAgLy8vXG4gICAgICByZXNpemVPYmplY3QgPSBkb21FbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKTtcblxuICBkb21FbGVtZW50LnJlbW92ZUNoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKCkge1xuICB2YXIgcmVzaXplT2JqZWN0V2luZG93ID0gdGhpcy5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuX19kb21FbGVtZW50X18gPSB0aGlzLl9fZG9tRWxlbWVudF9fO1xuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplTGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiByZXNpemVMaXN0ZW5lcihldmVudCkge1xuICB2YXIgcmVzaXplT2JqZWN0V2luZG93ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQsICAvLy9cbiAgICAgIGRvbUVsZW1lbnQgPSByZXNpemVPYmplY3RXaW5kb3cuX19kb21FbGVtZW50X18sXG4gICAgICBpbnN0YW5jZSA9IGRvbUVsZW1lbnQuX19pbnN0YW5jZV9fLFxuICAgICAgd2lkdGggPSBpbnN0YW5jZS5nZXRXaWR0aCgpLFxuICAgICAgaGVpZ2h0ID0gaW5zdGFuY2UuZ2V0SGVpZ2h0KCk7XG5cbiAgaW5zdGFuY2UucmVzaXplSGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihyZXNpemVIYW5kbGVyKXtcbiAgICByZXNpemVIYW5kbGVyKHdpZHRoLCBoZWlnaHQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=