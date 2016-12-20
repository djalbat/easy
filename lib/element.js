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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiQm91bmRzIiwiUG9zaXRpb24iLCJFbGVtZW50Iiwic2VsZWN0b3IiLCIkZWxlbWVudCIsIiRlbGVtZW50RnJvbVNlbGVjdG9yIiwiZG9tRWxlbWVudCIsIl9faW5zdGFuY2VfXyIsInJlc2l6ZUhhbmRsZXJzIiwiY2xvbmUiLCJzaG93IiwiaGlkZSIsInJlbW92ZUF0dHIiLCJhdHRyIiwicmVtb3ZlIiwiZGV0YWNoIiwiZW1wdHkiLCIkcG9zaXRpb24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJpbmNsdWRlQm9yZGVyIiwiaW5jbHVkZU1hcmdpbiIsIiRvZmZzZXQiLCJvZmZzZXQiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiLCJib3VuZHMiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJuYW1lIiwidmFsdWUiLCJlbGVtZW50IiwiYmVmb3JlIiwiYWZ0ZXIiLCJlbGVtZW50T3JTdHJpbmciLCJzdHJpbmciLCJwcmVwZW5kIiwiYXBwZW5kIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaHRtbCIsInVuZGVmaW5lZCIsImNzcyIsInByb3BlcnR5TmFtZSIsImtleSIsImRhdGEiLCJmb3VuZERPTUVsZW1lbnRzIiwiZmluZCIsImZvdW5kRWxlbWVudHMiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsImNoaWxkRE9NRWxlbWVudHMiLCJjaGlsZHJlbiIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRET01FbGVtZW50cyIsInBhcmVudCIsInBhcmVudEVsZW1lbnRzIiwiZmlyc3RQYXJlbnRFbGVtZW50IiwiZmlyc3QiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50cyIsImV2ZW50cyIsImhhbmRsZXIiLCJuYW1lc3BhY2UiLCJvbiIsIm9mZiIsImNsaWNrSGFuZGxlciIsImJ1dHRvbiIsIkxFRlRfTU9VU0VfQlVUVE9OIiwiYWxsb3dEZWZhdWx0IiwiZXZlbnQiLCJNSURETEVfTU9VU0VfQlVUVE9OIiwiZG91YmxlQ2xpY2tIYW5kbGVyIiwibW91c2VVcEhhbmRsZXIiLCJyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwibW91c2VPdXRIYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsInJlc2l6ZUhhbmRsZXIiLCJoYXNSZXNpemVIYW5kbGVycyIsImFwcGVuZFJlc2l6ZU9iamVjdCIsImFkZFJlc2l6ZUhhbmRsZXIiLCJyZW1vdmVSZXNpemVIYW5kbGVyIiwicmVtb3ZlUmVzaXplT2JqZWN0IiwiZmlyc3RBcmd1bWVudCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImluc3RhbmNlIiwiaXNOb3RBQ2xhc3MiLCIkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCIsInNlY29uZEFyZ3VtZW50IiwiSFRNTEVsZW1lbnQiLCJSSUdIVF9NT1VTRV9CVVRUT04iLCJtb2R1bGUiLCJleHBvcnRzIiwiQXJyYXkiLCJjaGlsZFNlbGVjdG9yIiwicGFyZW50JEVsZW1lbnQiLCJtb3VzZVRvcCIsInBhZ2VZIiwibW91c2VMZWZ0IiwicGFnZVgiLCJtb3VzZUJ1dHRvbiIsIndoaWNoIiwiZG9tRWxlbWVudHMiLCJlbGVtZW50cyIsImRvbUVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiaSIsInB1c2giLCJ1bnNoaWZ0IiwiQ2xhc3MiLCJzaGlmdCIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiYmluZCIsImFwcGx5Iiwic3RhcnQiLCJpbmRleE9mIiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZXNpemVIYW5kbGVyc0xlbmd0aCIsInJlc2l6ZU9iamVjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInR5cGUiLCJfX2RvbUVsZW1lbnRfXyIsIl9fcmVzaXplT2JqZWN0X18iLCJvbmxvYWQiLCJyZXNpemVPYmplY3RMb2FkSGFuZGxlciIsImFwcGVuZENoaWxkIiwib2JqZWN0V2luZG93IiwiY29udGVudERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzaXplTGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsInJlc2l6ZU9iamVjdFdpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJzcmNFbGVtZW50IiwiZm9yRWFjaCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxRQUFSLENBQVI7O0FBRUEsSUFBSUMsU0FBU0QsUUFBUSxVQUFSLENBQWI7QUFBQSxJQUNJRSxXQUFXRixRQUFRLFlBQVIsQ0FEZjs7SUFHTUcsTztBQUNKLG1CQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtDLFFBQUwsR0FBZ0JDLHFCQUFxQkYsUUFBckIsQ0FBaEI7O0FBRUEsUUFBSUcsYUFBYVIsRUFBRSxLQUFLTSxRQUFQLEVBQWlCLENBQWpCLENBQWpCLENBSG9CLENBR2tCOztBQUV0Q0UsZUFBV0MsWUFBWCxHQUEwQixJQUExQjs7QUFFQSxTQUFLQyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0Q7Ozs7NEJBRU87QUFBRSxhQUFPTixRQUFRTyxLQUFSLENBQWMsSUFBZCxDQUFQO0FBQTZCOzs7MkJBRWhDO0FBQUUsV0FBS0wsUUFBTCxDQUFjTSxJQUFkO0FBQXVCOzs7MkJBQ3pCO0FBQUUsV0FBS04sUUFBTCxDQUFjTyxJQUFkO0FBQXVCOzs7NkJBQ3ZCO0FBQUUsV0FBS1AsUUFBTCxDQUFjUSxVQUFkLENBQXlCLFVBQXpCO0FBQXVDOzs7OEJBQ3hDO0FBQUUsV0FBS1IsUUFBTCxDQUFjUyxJQUFkLENBQW1CLFVBQW5CLEVBQStCLElBQS9CO0FBQXVDOzs7NkJBQzFDO0FBQUUsV0FBS1QsUUFBTCxDQUFjVSxNQUFkO0FBQXlCOzs7NkJBQzNCO0FBQUUsV0FBS1YsUUFBTCxDQUFjVyxNQUFkO0FBQXlCOzs7NEJBQzVCO0FBQUUs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QkUsTUFBckI7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBU3FDLEtBQVQsQ0FBZXFGLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgQm91bmRzID0gcmVxdWlyZSgnLi9ib3VuZHMnKSxcbiAgICBQb3NpdGlvbiA9IHJlcXVpcmUoJy4vcG9zaXRpb24nKTtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIHZhciBkb21FbGVtZW50ID0gJCh0aGlzLiRlbGVtZW50KVswXTsgLy8vXG5cbiAgICBkb21FbGVtZW50Ll9faW5zdGFuY2VfXyA9IHRoaXM7XG5cbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXJzID0gW107XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cblxuICBzaG93KCkgeyB0aGlzLiRlbGVtZW50LnNob3coKTsgfVxuICBoaWRlKCkgeyB0aGlzLiRlbGVtZW50LmhpZGUoKTsgfVxuICBlbmFibGUoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTsgfVxuICBkaXNhYmxlKCkgeyB0aGlzLiRlbGVtZW50LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7IH1cbiAgcmVtb3ZlKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZSgpOyB9XG4gIGRldGFjaCgpIHsgdGhpcy4kZWxlbWVudC5kZXRhY2goKTsgfVxuICBlbXB0eSgpIHsgdGhpcy4kZWxlbWVudC5lbXB0eSgpOyB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdmFyICRwb3NpdGlvbiA9IHRoaXMuJGVsZW1lbnQucG9zaXRpb24oKSxcbiAgICAgICAgdG9wID0gJHBvc2l0aW9uLnRvcCxcbiAgICAgICAgbGVmdCA9ICRwb3NpdGlvbi5sZWZ0LFxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbih0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0Qm91bmRzKGluY2x1ZGVCb3JkZXIgPSBmYWxzZSwgaW5jbHVkZU1hcmdpbiA9IGZhbHNlKSB7XG4gICAgdmFyICRvZmZzZXQgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpLFxuICAgICAgICB0b3AgPSAkb2Zmc2V0LnRvcCwgIC8vL1xuICAgICAgICBsZWZ0ID0gJG9mZnNldC5sZWZ0LCAgLy8vXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aChpbmNsdWRlQm9yZGVyLCBpbmNsdWRlTWFyZ2luKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoaW5jbHVkZUJvcmRlciwgaW5jbHVkZU1hcmdpbiksXG4gICAgICAgIGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gZmFsc2UsIGluY2x1ZGVNYXJnaW4gPSBmYWxzZSkgeyBcbiAgICB2YXIgd2lkdGggPSBpbmNsdWRlQm9yZGVyID8gXG4gICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50Lm91dGVyV2lkdGgoaW5jbHVkZU1hcmdpbikgOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LndpZHRoKCk7XG4gICAgXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG4gIFxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IGZhbHNlLCBpbmNsdWRlTWFyZ2luID0gZmFsc2UpIHtcbiAgICB2YXIgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5vdXRlckhlaWdodChpbmNsdWRlTWFyZ2luKSA6XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LmhlaWdodCgpO1xuICAgIFxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLiRlbGVtZW50LndpZHRoKHdpZHRoKTsgfVxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuJGVsZW1lbnQuaGVpZ2h0KGhlaWdodCk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5hdHRyKG5hbWUpOyB9XG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLiRlbGVtZW50LmF0dHIobmFtZSwgdmFsdWUpOyB9XG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cihuYW1lKTsgfVxuICBwcmVwZW5kQmVmb3JlKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5iZWZvcmUoZWxlbWVudC4kZWxlbWVudCk7IH1cbiAgYXBwZW5kQWZ0ZXIoZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmFmdGVyKGVsZW1lbnQuJGVsZW1lbnQpOyB9XG4gIFxuICBwcmVwZW5kKGVsZW1lbnRPclN0cmluZykge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHN0cmluZyA9IGVsZW1lbnRPclN0cmluZzsgLy8vXG5cbiAgICAgIHRoaXMuJGVsZW1lbnQucHJlcGVuZChzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRPclN0cmluZywgIC8vL1xuICAgICAgICAgICRlbGVtZW50ID0gZWxlbWVudC4kZWxlbWVudDtcblxuICAgICAgdGhpcy4kZWxlbWVudC5wcmVwZW5kKCRlbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgXG4gIGFwcGVuZChlbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBlbGVtZW50T3JTdHJpbmc7IC8vL1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZChzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRPclN0cmluZywgIC8vL1xuICAgICAgICAgICRlbGVtZW50ID0gZWxlbWVudC4kZWxlbWVudDtcblxuICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoJGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWUpOyB9XG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LmFkZENsYXNzKGNsYXNzTmFtZSk7IH1cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICByZW1vdmVDbGFzc2VzKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCk7IH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lmh0bWwoaHRtbClcbiAgICB9IGVsc2Uge1xuICAgICAgaHRtbCA9IHRoaXMuJGVsZW1lbnQuaHRtbCgpO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgcHJvcGVydHlOYW1lID0gY3NzO1xuXG4gICAgICBjc3MgPSB0aGlzLiRlbGVtZW50LmNzcyhwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmNzcyhjc3MpO1xuICAgIH1cbiAgfVxuXG4gIGRhdGEoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmRhdGEoa2V5LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gdGhpcy4kZWxlbWVudC5kYXRhKGtleSk7XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBmaW5kRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgZm91bmRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuZmluZChzZWxlY3RvciksXG4gICAgICAgIGZvdW5kRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhmb3VuZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmb3VuZEVsZW1lbnRzO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBjaGlsZERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbihzZWxlY3RvciksXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50RWxlbWVudChzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQucGFyZW50KHNlbGVjdG9yKSxcbiAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKSxcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBwYXJlbnRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQucGFyZW50cyhzZWxlY3RvciksXG4gICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnRzO1xuICB9XG5cbiAgb24oZXZlbnRzLCBoYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICBpZiAobmFtZXNwYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGV2ZW50cyA9IGV2ZW50cyArICcuJyArIG5hbWVzcGFjZTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKGV2ZW50cywgaGFuZGxlcik7XG4gIH1cbiAgXG4gIG9mZihldmVudHMsIG5hbWVzcGFjZSkge1xuICAgIGlmIChuYW1lc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnRzID0gZXZlbnRzICsgJy4nICsgbmFtZXNwYWNlO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQub2ZmKGV2ZW50cyk7XG4gIH1cblxuICBvbkNsaWNrKGNsaWNrSGFuZGxlciwgYnV0dG9uID0gRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiwgYWxsb3dEZWZhdWx0ID0gZmFsc2UsIG5hbWVzcGFjZSkge1xuICAgIHRoaXMub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHN3aXRjaCAoYnV0dG9uKSB7XG4gICAgICAgIGNhc2UgRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiA6XG4gICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkgeyAvLy9cbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA6XG4gICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMSkgeyAvLy9cbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFsbG93RGVmYXVsdDtcbiAgICB9LCBuYW1lc3BhY2UpO1xuICB9XG4gIFxuICBvZmZDbGljayhuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ2NsaWNrJywgbmFtZXNwYWNlKTsgfVxuXG4gIG9uRG91YmxlQ2xpY2soZG91YmxlQ2xpY2tIYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm9uKCdkYmxjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICBkb3VibGVDbGlja0hhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sIG5hbWVzcGFjZSlcbiAgfVxuXG4gIG9mZkRvdWJsZUNsaWNrKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignZGJsY2xpY2snLCBuYW1lc3BhY2UpOyB9XG5cbiAgb25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2V1cCcsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuICBvbk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2Vkb3duJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIobW91c2VEb3duSGFuZGxlciksIG5hbWVzcGFjZSk7IH1cbiAgb25Nb3VzZU92ZXIobW91c2VPdmVySGFuZGxlciwgbmFtZXNwYWNlKSB7IHRoaXMub24oJ21vdXNlb3ZlcicsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlT3ZlckhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VPdXQobW91c2VPdXRIYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2VvdXQnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihtb3VzZU91dEhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZW1vdmUnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuXG4gIG9mZk1vdXNlVXAobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZXVwJywgbmFtZXNwYWNlKTsgfVxuICBvZmZNb3VzZURvd24obmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZWRvd24nLCBuYW1lc3BhY2UpOyB9XG4gIG9mZk1vdXNlT3ZlcihuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ21vdXNlb3ZlcicsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VPdXQobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZW91dCcsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VNb3ZlKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2Vtb3ZlJywgbmFtZXNwYWNlKTsgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHtcbiAgICB2YXIgcmVzaXplSGFuZGxlcnMgPSBoYXNSZXNpemVIYW5kbGVycyh0aGlzKTtcblxuICAgIGlmICghcmVzaXplSGFuZGxlcnMpIHtcbiAgICAgIGFwcGVuZFJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgICB9XG5cbiAgICBhZGRSZXNpemVIYW5kbGVyKHRoaXMsIHJlc2l6ZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHtcbiAgICByZW1vdmVSZXNpemVIYW5kbGVyKHRoaXMsIHJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgdmFyIHJlc2l6ZUhhbmRsZXJzID0gaGFzUmVzaXplSGFuZGxlcnModGhpcyk7XG5cbiAgICBpZiAoIXJlc2l6ZUhhbmRsZXJzKSB7XG4gICAgICByZW1vdmVSZXNpemVPYmplY3QodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsb25lKGZpcnN0QXJndW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCk7XG5cbiAgICBmdW5jdGlvbiBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gKCh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpIHx8IChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICB2YXIgJGVsZW1lbnQgPSAodHlwZW9mIHNlY29uZEFyZ3VtZW50ID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICQoc2Vjb25kQXJndW1lbnQpIDpcbiAgICAgICAgICBzZWNvbmRBcmd1bWVudC4kZWxlbWVudDtcblxuICAgICAgcmV0dXJuICRlbGVtZW50LmNsb25lKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGZpcnN0QXJndW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCk7XG5cbiAgICBmdW5jdGlvbiBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQoc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAkKHNlY29uZEFyZ3VtZW50KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlKGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KTtcblxuICAgIGZ1bmN0aW9uIGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudChzZWNvbmRBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICQoc2Vjb25kQXJndW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OID0gMTtcbkVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA9IDI7XG5FbGVtZW50LlJJR0hUX01PVVNFX0JVVFRPTiA9IDM7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gJGVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgdmFyICRlbGVtZW50O1xuXG4gIGlmIChmYWxzZSkge1xuXG4gIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICRlbGVtZW50ID0gJChzZWxlY3Rvcik7XG4gIH0gZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiAkKSB7XG4gICAgJGVsZW1lbnQgPSBzZWxlY3RvcjsgIC8vL1xuICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgQXJyYXkgKSB7XG4gICAgdmFyIHBhcmVudEVsZW1lbnQgPSBzZWxlY3RvclswXSwgLy8vXG4gICAgICAgIGNoaWxkU2VsZWN0b3IgPSBzZWxlY3RvclsxXSwgIC8vL1xuICAgICAgICBwYXJlbnQkRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuJGVsZW1lbnQ7ICAvLy9cblxuICAgICRlbGVtZW50ID0gcGFyZW50JEVsZW1lbnQuZmluZChjaGlsZFNlbGVjdG9yKTtcbiAgfVxuXG4gIHJldHVybiAkZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQud2hpY2g7IC8vL1xuXG4gICAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0LCBtb3VzZUJ1dHRvbik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIHZhciBlbGVtZW50cyA9IFtdLFxuICAgICAgZG9tRWxlbWVudHNMZW5ndGggPSBkb21FbGVtZW50cy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb21FbGVtZW50c0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSBkb21FbGVtZW50c1tpXSxcbiAgICAgICAgaW5zdGFuY2UgPSBkb21FbGVtZW50Ll9faW5zdGFuY2VfXztcblxuICAgIGlmIChpbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGluc3RhbmNlOyAvLy9cbiAgICAgIFxuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGluc3RhbmNlKGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KSB7XG4gIGlmIChpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSkge1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGZpcnN0QXJndW1lbnQpO1xuICAgIGZpcnN0QXJndW1lbnQgPSBFbGVtZW50O1xuICB9XG5cbiAgdmFyIENsYXNzID0gZmlyc3RBcmd1bWVudCxcbiAgICAgIHNlY29uZEFyZ3VtZW50ID0gcmVtYWluaW5nQXJndW1lbnRzLnNoaWZ0KCksXG4gICAgICAkZWxlbWVudCA9ICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KHNlY29uZEFyZ3VtZW50KTtcblxuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdCgkZWxlbWVudCk7XG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpOyAvLy9cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7ICAvLy9cbn1cblxuZnVuY3Rpb24gYWRkUmVzaXplSGFuZGxlcihpbnN0YW5jZSwgcmVzaXplSGFuZGxlcikge1xuICBpbnN0YW5jZS5yZXNpemVIYW5kbGVycy5wdXNoKHJlc2l6ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSZXNpemVIYW5kbGVyKGluc3RhbmNlLCByZXNpemVIYW5kbGVyKSB7XG4gIHZhciBzdGFydCA9IGluc3RhbmNlLnJlc2l6ZUhhbmRsZXJzLmluZGV4T2YocmVzaXplSGFuZGxlcik7IC8vL1xuXG4gIGlmIChzdGFydCA+IC0xKSB7XG4gICAgdmFyIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGluc3RhbmNlLnJlc2l6ZUhhbmRsZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc1Jlc2l6ZUhhbmRsZXJzKGluc3RhbmNlKSB7XG4gIHZhciByZXNpemVIYW5kbGVyc0xlbmd0aCA9IGluc3RhbmNlLnJlc2l6ZUhhbmRsZXJzLmxlbmd0aCxcbiAgICAgIHJlc2l6ZUhhbmRsZXJzID0gKHJlc2l6ZUhhbmRsZXJzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIHJlc2l6ZUhhbmRsZXJzO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRSZXNpemVPYmplY3QoaW5zdGFuY2UpIHtcbiAgdmFyIHJlc2l6ZU9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpLFxuICAgICAgZG9tRWxlbWVudCA9IGluc3RhbmNlLiRlbGVtZW50WzBdOyAgLy8vXG5cbiAgcmVzaXplT2JqZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG4gIHJlc2l6ZU9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcbiAgcmVzaXplT2JqZWN0LnR5cGUgPSAndGV4dC9odG1sJztcblxuICByZXNpemVPYmplY3QuX19kb21FbGVtZW50X18gPSBkb21FbGVtZW50O1xuICBkb21FbGVtZW50Ll9fcmVzaXplT2JqZWN0X18gPSByZXNpemVPYmplY3Q7XG5cbiAgcmVzaXplT2JqZWN0Lm9ubG9hZCA9IHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyO1xuXG4gIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplT2JqZWN0KGluc3RhbmNlKSB7XG4gIHZhciBkb21FbGVtZW50ID0gaW5zdGFuY2UuJGVsZW1lbnRbMF0sICAvLy9cbiAgICAgIHJlc2l6ZU9iamVjdCA9IGRvbUVsZW1lbnQuX19yZXNpemVPYmplY3RfXyxcbiAgICAgIG9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICBvYmplY3RXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplTGlzdGVuZXIpO1xuXG4gIGRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoKSB7XG4gIHZhciByZXNpemVPYmplY3RXaW5kb3cgPSB0aGlzLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIHJlc2l6ZU9iamVjdFdpbmRvdy5fX2RvbUVsZW1lbnRfXyA9IHRoaXMuX19kb21FbGVtZW50X187XG4gIHJlc2l6ZU9iamVjdFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVMaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZUxpc3RlbmVyKGV2ZW50KSB7XG4gIHZhciByZXNpemVPYmplY3RXaW5kb3cgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCwgIC8vL1xuICAgICAgZG9tRWxlbWVudCA9IHJlc2l6ZU9iamVjdFdpbmRvdy5fX2RvbUVsZW1lbnRfXyxcbiAgICAgIGluc3RhbmNlID0gZG9tRWxlbWVudC5fX2luc3RhbmNlX18sXG4gICAgICB3aWR0aCA9IGluc3RhbmNlLmdldFdpZHRoKCksXG4gICAgICBoZWlnaHQgPSBpbnN0YW5jZS5nZXRIZWlnaHQoKTtcblxuICBpbnN0YW5jZS5yZXNpemVIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKHJlc2l6ZUhhbmRsZXIpe1xuICAgIHJlc2l6ZUhhbmRsZXIod2lkdGgsIGhlaWdodCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==