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
      events = appendNamespaceToEvents(events, namespace);

      this.$element.on(events, handler);
    }
  }, {
    key: 'off',
    value: function off(events, namespace) {
      events = appendNamespaceToEvents(events, namespace);

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

function appendNamespaceToEvents(events, namespace) {
  if (namespace !== undefined) {
    events = events + '.' + namespace;
  }

  return events;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiQm91bmRzIiwiUG9zaXRpb24iLCJFbGVtZW50Iiwic2VsZWN0b3IiLCIkZWxlbWVudCIsIiRlbGVtZW50RnJvbVNlbGVjdG9yIiwiZG9tRWxlbWVudCIsIl9faW5zdGFuY2VfXyIsInJlc2l6ZUhhbmRsZXJzIiwiY2xvbmUiLCJzaG93IiwiaGlkZSIsInJlbW92ZUF0dHIiLCJhdHRyIiwicmVtb3ZlIiwiZGV0YWNoIiwiZW1wdHkiLCIkcG9zaXRpb24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJpbmNsdWRlQm9yZGVyIiwiaW5jbHVkZU1hcmdpbiIsIiRvZmZzZXQiLCJvZmZzZXQiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiLCJib3VuZHMiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJuYW1lIiwidmFsdWUiLCJlbGVtZW50IiwiYmVmb3JlIiwiYWZ0ZXIiLCJlbGVtZW50T3JTdHJpbmciLCJzdHJpbmciLCJwcmVwZW5kIiwiYXBwZW5kIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaHRtbCIsInVuZGVmaW5lZCIsImNzcyIsInByb3BlcnR5TmFtZSIsImtleSIsImRhdGEiLCJmb3VuZERPTUVsZW1lbnRzIiwiZmluZCIsImZvdW5kRWxlbWVudHMiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsImNoaWxkRE9NRWxlbWVudHMiLCJjaGlsZHJlbiIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRET01FbGVtZW50cyIsInBhcmVudCIsInBhcmVudEVsZW1lbnRzIiwiZmlyc3RQYXJlbnRFbGVtZW50IiwiZmlyc3QiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50cyIsImV2ZW50cyIsImhhbmRsZXIiLCJuYW1lc3BhY2UiLCJhcHBlbmROYW1lc3BhY2VUb0V2ZW50cyIsIm9uIiwib2ZmIiwiY2xpY2tIYW5kbGVyIiwiYnV0dG9uIiwiTEVGVF9NT1VTRV9CVVRUT04iLCJhbGxvd0RlZmF1bHQiLCJldmVudCIsIk1JRERMRV9NT1VTRV9CVVRUT04iLCJkb3VibGVDbGlja0hhbmRsZXIiLCJtb3VzZVVwSGFuZGxlciIsInJldHVybk1vdXNlRXZlbnRIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJtb3VzZU91dEhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwicmVzaXplSGFuZGxlciIsImhhc1Jlc2l6ZUhhbmRsZXJzIiwiYXBwZW5kUmVzaXplT2JqZWN0IiwiYWRkUmVzaXplSGFuZGxlciIsInJlbW92ZVJlc2l6ZUhhbmRsZXIiLCJyZW1vdmVSZXNpemVPYmplY3QiLCJmaXJzdEFyZ3VtZW50IiwicmVtYWluaW5nQXJndW1lbnRzIiwiaW5zdGFuY2UiLCJpc05vdEFDbGFzcyIsIiRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50Iiwic2Vjb25kQXJndW1lbnQiLCJIVE1MRWxlbWVudCIsIlJJR0hUX01PVVNFX0JVVFRPTiIsIm1vZHVsZSIsImV4cG9ydHMiLCJBcnJheSIsImNoaWxkU2VsZWN0b3IiLCJwYXJlbnQkRWxlbWVudCIsIm1vdXNlVG9wIiwicGFnZVkiLCJtb3VzZUxlZnQiLCJwYWdlWCIsIm1vdXNlQnV0dG9uIiwid2hpY2giLCJkb21FbGVtZW50cyIsImVsZW1lbnRzIiwiZG9tRWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJpIiwicHVzaCIsInVuc2hpZnQiLCJDbGFzcyIsInNoaWZ0IiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJiaW5kIiwiYXBwbHkiLCJzdGFydCIsImluZGV4T2YiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJlc2l6ZUhhbmRsZXJzTGVuZ3RoIiwicmVzaXplT2JqZWN0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidHlwZSIsIl9fZG9tRWxlbWVudF9fIiwiX19yZXNpemVPYmplY3RfXyIsIm9ubG9hZCIsInJlc2l6ZU9iamVjdExvYWRIYW5kbGVyIiwiYXBwZW5kQ2hpbGQiLCJvYmplY3RXaW5kb3ciLCJjb250ZW50RG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNpemVMaXN0ZW5lciIsInJlbW92ZUNoaWxkIiwicmVzaXplT2JqZWN0V2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsInNyY0VsZW1lbnQiLCJmb3JFYWNoIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxJQUFJQyxRQUFRLFFBQVIsQ0FBUjs7QUFFQSxJQUFJQyxTQUFTRCxRQUFRLFVBQVIsQ0FBYjtBQUFBLElBQ0lFLFdBQVdGLFFBQVEsWUFBUixDQURmOztJQUdNRyxPO0FBQ0osbUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0MsUUFBTCxHQUFnQkMscUJBQXFCRixRQUFyQixDQUFoQjs7QUFFQSxRQUFJRyxhQUFhUixFQUFFLEtBQUtNLFFBQVAsRUFBaUIsQ0FBakIsQ0FBakIsQ0FIb0IsQ0FHa0I7O0FBRXRDRSxlQUFXQyxZQUFYLEdBQTBCLElBQTFCOztBQUVBLFNBQUtDLGNBQUwsR0FBc0IsRUFBdEI7QUFDRDs7Ozs0QkFFTztBQUFFLGFBQU9OLFFBQVFPLEtBQVIsQ0FBYyxJQUFkLENBQVA7QUFBNkI7OzsyQkFFaEM7QUFBRSxXQUFLTCxRQUFMLENBQWNNLElBQWQ7QUFBdUI7OzsyQkFDekI7QUFBRSxXQUFLTixRQUFMLENBQWNPLElBQWQ7QUFBdUI7Ozs2QkFDdkI7QUFBRSxXQUFLUCxRQUFMLENBQWNRLFVBQWQsQ0FBeUIsVUFBekI7QUFBdUM7Ozs4QkFDeEM7QUFBRSxXQUFLUixRQUFMLENBQWNTLElBQWQsQ0FBbUIsVUFBbkIsRUFBK0IsSUFBL0I7QUFBdUM7Ozs2QkFDMUM7QUFBRSxXQUFLVCxRQUFMLENBQWNVLE1BQWQ7QUFBeUI7Ozs2QkFDM0I7QUFBRSxXQUFLVixRQUFMLENBQWNXLE1BQWQ7QUFBeUI7Ozs0QkFDNUI7QUFBRSxXQUFLWCxRQUFMLENBQWNZLEtBQWQ7QUFBd0I7OztrQ0FFcEI7QUFDWixVQUFJQyxZQUFZLEtBQUtiLFFBQUwsQ0FBY2MsUUFBZCxFQUFoQjtBQUFBLFVBQ0lDLE1BQU1GLFVBQVVFLEdBRHBCO0FBQUEsVUFFSUMsT0FBT0gsVUFBVUcsSUFGckI7QUFBQSxVQUdJRixXQUFXLElBQUlqQixRQUFKLENBQWFrQixHQUFiLEVBQWtCQyxJQUFsQixDQUhmOztBQUtBLGFBQU9GLFFBQVA7QUFDRDs7O2dDQUV1RDtBQUFBLFVBQTlDRyxhQUE4Qyx1RUFBOUIsS0FBOEI7QUFBQSxVQUF2QkMsYUFBdUIsdUVBQVAsS0FBTzs7QUFDdEQsVUFBSUMsVUFBVSxLQUFLbkIsUUFBTCxDQUFjb0IsTUFBZCxFQUFkO0FBQUEsVUFDSUwsTUFBTUksUUFBUUosR0FEbEI7QUFBQSxVQUN3QjtBQUNwQkMsYUFBT0csUUFBUUgsSUFGbkI7QUFBQSxVQUUwQjtBQUN0QkssY0FBUSxLQUFLQyxRQUFMLENBQWNMLGFBQWQsRUFBNkJDLGFBQTdCLENBSFo7QUFBQSxVQUlJSyxTQUFTLEtBQUtDLFNBQUwsQ0FBZVAsYUFBZixFQUE4QkMsYUFBOUIsQ0FKYjtBQUFBLFVBS0lPLFNBQVNWLE1BQU1RLE1BTG5CO0FBQUEsVUFNSUcsUUFBUVYsT0FBT0ssS0FObkI7QUFBQSxVQU9JTSxTQUFTLElBQUkvQixNQUFKLENBQVdtQixHQUFYLEVBQWdCQyxJQUFoQixFQUFzQlMsTUFBdEIsRUFBOEJDLEtBQTlCLENBUGI7O0FBU0EsYUFBT0MsTUFBUDtBQUNEOzs7K0JBRXNEO0FBQUEsVUFBOUNWLGFBQThDLHVFQUE5QixLQUE4QjtBQUFBLFVBQXZCQyxhQUF1Qix1RUFBUCxLQUFPOztBQUNyRCxVQUFJRyxRQUFRSixnQkFDRSxLQUFLakIsUUFBTCxDQUFjNEIsVUFBZCxDQUF5QlYsYUFBekIsQ0FERixHQUVJLEtBQUtsQixRQUFMLENBQWNxQixLQUFkLEVBRmhCOztBQUlBLGFBQU9BLEtBQVA7QUFDRDs7O2dDQUV1RDtBQUFBLFVBQTlDSixhQUE4Qyx1RUFBOUIsS0FBOEI7QUFBQSxVQUF2QkMsYUFBdUIsdUVBQVAsS0FBTzs7QUFDdEQsVUFBSUssU0FBU04sZ0JBQ0UsS0FBS2pCLFFBQUwsQ0FBYzZCLFdBQWQsQ0FBMEJYLGFBQTFCLENBREYsR0FFSSxLQUFLbEIsUUFBTCxDQUFjdUIsTUFBZCxFQUZqQjs7QUFJQSxhQUFPQSxNQUFQO0FBQ0Q7Ozs2QkFFUUYsSyxFQUFPO0FBQUUsV0FBS3JCLFFBQUwsQ0FBY3FCLEtBQWQsQ0FBb0JBLEtBQXBCO0FBQTZCOzs7OEJBQ3JDRSxNLEVBQVE7QUFBRSxXQUFLdkIsUUFBTCxDQUFjdUIsTUFBZCxDQUFxQkEsTUFBckI7QUFBK0I7OztpQ0FFdENPLEksRUFBTTtBQUFFLGFBQU8sS0FBSzlCLFFBQUwsQ0FBY1MsSUFBZCxDQUFtQnFCLElBQW5CLENBQVA7QUFBa0M7OztpQ0FDMUNBLEksRUFBTUMsSyxFQUFPO0FBQUUsV0FBSy9CLFFBQUwsQ0FBY1MsSUFBZCxDQUFtQnFCLElBQW5CLEVBQXlCQyxLQUF6QjtBQUFrQzs7O29DQUM5Q0QsSSxFQUFNO0FBQUUsV0FBSzlCLFFBQUwsQ0FBY1EsVUFBZCxDQUF5QnNCLElBQXpCO0FBQWlDOzs7a0NBQzNDRSxPLEVBQVM7QUFBRSxXQUFLaEMsUUFBTCxDQUFjaUMsTUFBZCxDQUFxQkQsUUFBUWhDLFFBQTdCO0FBQXlDOzs7Z0NBQ3REZ0MsTyxFQUFTO0FBQUUsV0FBS2hDLFFBQUwsQ0FBY2tDLEtBQWQsQ0FBb0JGLFFBQVFoQyxRQUE1QjtBQUF3Qzs7OzRCQUV2RG1DLGUsRUFBaUI7QUFDdkIsVUFBSSxPQUFPQSxlQUFQLEtBQTJCLFFBQS9CLEVBQXlDO0FBQ3ZDLFlBQUlDLFNBQVNELGVBQWIsQ0FEdUMsQ0FDVDs7QUFFOUIsYUFBS25DLFFBQUwsQ0FBY3FDLE9BQWQsQ0FBc0JELE1BQXRCO0FBQ0QsT0FKRCxNQUlPO0FBQ0wsWUFBSUosVUFBVUcsZUFBZDtBQUFBLFlBQWdDO0FBQzVCbkMsbUJBQVdnQyxRQUFRaEMsUUFEdkI7O0FBR0EsYUFBS0EsUUFBTCxDQUFjcUMsT0FBZCxDQUFzQnJDLFFBQXRCO0FBQ0Q7QUFDRjs7OzJCQUVNbUMsZSxFQUFpQjtBQUN0QixVQUFJLE9BQU9BLGVBQVAsS0FBMkIsUUFBL0IsRUFBeUM7QUFDdkMsWUFBSUMsU0FBU0QsZUFBYixDQUR1QyxDQUNUOztBQUU5QixhQUFLbkMsUUFBTCxDQUFjc0MsTUFBZCxDQUFxQkYsTUFBckI7QUFDRCxPQUpELE1BSU87QUFDTCxZQUFJSixVQUFVRyxlQUFkO0FBQUEsWUFBZ0M7QUFDNUJuQyxtQkFBV2dDLFFBQVFoQyxRQUR2Qjs7QUFHQSxhQUFLQSxRQUFMLENBQWNzQyxNQUFkLENBQXFCdEMsUUFBckI7QUFDRDtBQUNGOzs7NkJBRVF1QyxTLEVBQVc7QUFBRSxhQUFPLEtBQUt2QyxRQUFMLENBQWN3QyxRQUFkLENBQXVCRCxTQUF2QixDQUFQO0FBQTJDOzs7NkJBQ3hEQSxTLEVBQVc7QUFBRSxXQUFLdkMsUUFBTCxDQUFjeUMsUUFBZCxDQUF1QkYsU0FBdkI7QUFBb0M7OztnQ0FDOUNBLFMsRUFBVztBQUFFLFdBQUt2QyxRQUFMLENBQWMwQyxXQUFkLENBQTBCSCxTQUExQjtBQUF1Qzs7O29DQUNoRDtBQUFFLFdBQUt2QyxRQUFMLENBQWMwQyxXQUFkO0FBQThCOzs7eUJBRTNDQyxLLEVBQU07QUFDVCxVQUFJQSxVQUFTQyxTQUFiLEVBQXdCO0FBQ3RCLGFBQUs1QyxRQUFMLENBQWMyQyxJQUFkLENBQW1CQSxLQUFuQjtBQUNELE9BRkQsTUFFTztBQUNMQSxnQkFBTyxLQUFLM0MsUUFBTCxDQUFjMkMsSUFBZCxFQUFQOztBQUVBLGVBQU9BLEtBQVA7QUFDRDtBQUNGOzs7d0JBRUdFLEksRUFBSztBQUNQLFVBQUksT0FBT0EsSUFBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQzNCLFlBQUlDLGVBQWVELElBQW5COztBQUVBQSxlQUFNLEtBQUs3QyxRQUFMLENBQWM2QyxHQUFkLENBQWtCQyxZQUFsQixDQUFOOztBQUVBLGVBQU9ELElBQVA7QUFDRCxPQU5ELE1BTU87QUFDTCxhQUFLN0MsUUFBTCxDQUFjNkMsR0FBZCxDQUFrQkEsSUFBbEI7QUFDRDtBQUNGOzs7eUJBRUlFLEcsRUFBS2hCLEssRUFBTztBQUNmLFVBQUlBLFVBQVVhLFNBQWQsRUFBeUI7QUFDdkIsYUFBSzVDLFFBQUwsQ0FBY2dELElBQWQsQ0FBbUJELEdBQW5CLEVBQXdCaEIsS0FBeEI7QUFDRCxPQUZELE1BRU87QUFDTEEsZ0JBQVEsS0FBSy9CLFFBQUwsQ0FBY2dELElBQWQsQ0FBbUJELEdBQW5CLENBQVI7O0FBRUEsZUFBT2hCLEtBQVA7QUFDRDtBQUNGOzs7aUNBRVloQyxRLEVBQVU7QUFDckIsVUFBSWtELG1CQUFtQixLQUFLakQsUUFBTCxDQUFja0QsSUFBZCxDQUFtQm5ELFFBQW5CLENBQXZCO0FBQUEsVUFDSW9ELGdCQUFnQkMsd0JBQXdCSCxnQkFBeEIsQ0FEcEI7O0FBR0EsYUFBT0UsYUFBUDtBQUNEOzs7a0NBRWFwRCxRLEVBQVU7QUFDdEIsVUFBSXNELG1CQUFtQixLQUFLckQsUUFBTCxDQUFjc0QsUUFBZCxDQUF1QnZELFFBQXZCLENBQXZCO0FBQUEsVUFDSXdELGdCQUFnQkgsd0JBQXdCQyxnQkFBeEIsQ0FEcEI7O0FBR0EsYUFBT0UsYUFBUDtBQUNEOzs7a0NBRWF4RCxRLEVBQVU7QUFDdEIsVUFBSXlELG9CQUFvQixLQUFLeEQsUUFBTCxDQUFjeUQsTUFBZCxDQUFxQjFELFFBQXJCLENBQXhCO0FBQUEsVUFDSTJELGlCQUFpQk4sd0JBQXdCSSxpQkFBeEIsQ0FEckI7QUFBQSxVQUVJRyxxQkFBcUJDLE1BQU1GLGNBQU4sQ0FGekI7QUFBQSxVQUdJRyxnQkFBZ0JGLHNCQUFzQixJQUgxQzs7QUFLQSxhQUFPRSxhQUFQO0FBQ0Q7OzttQ0FFYzlELFEsRUFBVTtBQUN2QixVQUFJeUQsb0JBQW9CLEtBQUt4RCxRQUFMLENBQWM4RCxPQUFkLENBQXNCL0QsUUFBdEIsQ0FBeEI7QUFBQSxVQUNJMkQsaUJBQWlCTix3QkFBd0JJLGlCQUF4QixDQURyQjs7QUFHQSxhQUFPRSxjQUFQO0FBQ0Q7Ozt1QkFFRUssTSxFQUFRQyxPLEVBQVNDLFMsRUFBVztBQUM3QkYsZUFBU0csd0JBQXdCSCxNQUF4QixFQUFnQ0UsU0FBaEMsQ0FBVDs7QUFFQSxXQUFLakUsUUFBTCxDQUFjbUUsRUFBZCxDQUFpQkosTUFBakIsRUFBeUJDLE9BQXpCO0FBQ0Q7Ozt3QkFFR0QsTSxFQUFRRSxTLEVBQVc7QUFDckJGLGVBQVNHLHdCQUF3QkgsTUFBeEIsRUFBZ0NFLFNBQWhDLENBQVQ7O0FBRUEsV0FBS2pFLFFBQUwsQ0FBY29FLEdBQWQsQ0FBa0JMLE1BQWxCO0FBQ0Q7Ozs0QkFFT00sWSxFQUFtRjtBQUFBLFVBQXJFQyxNQUFxRSx1RUFBNUR4RSxRQUFReUUsaUJBQW9EO0FBQUEsVUFBakNDLFlBQWlDLHVFQUFsQixLQUFrQjtBQUFBLFVBQVhQLFNBQVc7O0FBQ3pGLFdBQUtFLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLFVBQVNNLEtBQVQsRUFBZ0I7QUFDL0IsZ0JBQVFILE1BQVI7QUFDRSxlQUFLeEUsUUFBUXlFLGlCQUFiO0FBQ0UsZ0JBQUlFLE1BQU1ILE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFBRTtBQUN4QkQ7QUFDRDtBQUNEOztBQUVGLGVBQUt2RSxRQUFRNEUsbUJBQWI7QUFDRSxnQkFBSUQsTUFBTUgsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUFFO0FBQ3hCRDtBQUNEO0FBQ0Q7QUFYSjs7QUFjQSxlQUFPRyxZQUFQO0FBQ0QsT0FoQkQsRUFnQkdQLFNBaEJIO0FBaUJEOzs7NkJBRVFBLFMsRUFBVztBQUFFLFdBQUtHLEdBQUwsQ0FBUyxPQUFULEVBQWtCSCxTQUFsQjtBQUErQjs7O2tDQUV2Q1Usa0IsRUFBb0JWLFMsRUFBVztBQUMzQyxXQUFLRSxFQUFMLENBQVEsVUFBUixFQUFtQixZQUFXO0FBQzVCUTs7QUFFQSxlQUFPLEtBQVA7QUFDRCxPQUpELEVBSUdWLFNBSkg7QUFLRDs7O21DQUVjQSxTLEVBQVc7QUFBRSxXQUFLRyxHQUFMLENBQVMsVUFBVCxFQUFxQkgsU0FBckI7QUFBa0M7Ozs4QkFFcERXLGMsRUFBZ0JYLFMsRUFBVztBQUFFLFdBQUtFLEVBQUwsQ0FBUSxTQUFSLEVBQW1CVSx3QkFBd0JELGNBQXhCLENBQW5CLEVBQTREWCxTQUE1RDtBQUF5RTs7O2dDQUNwR2EsZ0IsRUFBa0JiLFMsRUFBVztBQUFFLFdBQUtFLEVBQUwsQ0FBUSxXQUFSLEVBQXFCVSx3QkFBd0JDLGdCQUF4QixDQUFyQixFQUFnRWIsU0FBaEU7QUFBNkU7OztnQ0FDNUdjLGdCLEVBQWtCZCxTLEVBQVc7QUFBRSxXQUFLRSxFQUFMLENBQVEsV0FBUixFQUFxQlUsd0JBQXdCRSxnQkFBeEIsQ0FBckIsRUFBZ0VkLFNBQWhFO0FBQTZFOzs7K0JBQzdHZSxlLEVBQWlCZixTLEVBQVc7QUFBRSxXQUFLRSxFQUFMLENBQVEsVUFBUixFQUFvQlUsd0JBQXdCRyxlQUF4QixDQUFwQixFQUE4RGYsU0FBOUQ7QUFBMkU7OztnQ0FDeEdnQixnQixFQUFrQmhCLFMsRUFBVztBQUFFLFdBQUtFLEVBQUwsQ0FBUSxXQUFSLEVBQXFCVSx3QkFBd0JJLGdCQUF4QixDQUFyQixFQUFnRWhCLFNBQWhFO0FBQTZFOzs7K0JBRTdHQSxTLEVBQVc7QUFBRSxXQUFLRyxHQUFMLENBQVMsU0FBVCxFQUFvQkgsU0FBcEI7QUFBaUM7OztpQ0FDNUNBLFMsRUFBVztBQUFFLFdBQUtHLEdBQUwsQ0FBUyxXQUFULEVBQXNCSCxTQUF0QjtBQUFtQzs7O2lDQUNoREEsUyxFQUFXO0FBQUUsV0FBS0csR0FBTCxDQUFTLFdBQVQsRUFBc0JILFNBQXRCO0FBQW1DOzs7Z0NBQ2pEQSxTLEVBQVc7QUFBRSxXQUFLRyxHQUFMLENBQVMsVUFBVCxFQUFxQkgsU0FBckI7QUFBa0M7OztpQ0FDOUNBLFMsRUFBVztBQUFFLFdBQUtHLEdBQUwsQ0FBUyxXQUFULEVBQXNCSCxTQUF0QjtBQUFtQzs7OzZCQUVwRGlCLGEsRUFBZTtBQUN0QixVQUFJOUUsaUJBQWlCK0Usa0JBQWtCLElBQWxCLENBQXJCOztBQUVBLFVBQUksQ0FBQy9FLGNBQUwsRUFBcUI7QUFDbkJnRiwyQkFBbUIsSUFBbkI7QUFDRDs7QUFFREMsdUJBQWlCLElBQWpCLEVBQXVCSCxhQUF2QjtBQUNEOzs7OEJBRVNBLGEsRUFBZTtBQUN2QkksMEJBQW9CLElBQXBCLEVBQTBCSixhQUExQjs7QUFFQSxVQUFJOUUsaUJBQWlCK0Usa0JBQWtCLElBQWxCLENBQXJCOztBQUVBLFVBQUksQ0FBQy9FLGNBQUwsRUFBcUI7QUFDbkJtRiwyQkFBbUIsSUFBbkI7QUFDRDtBQUNGOzs7MEJBRVlDLGEsRUFBc0M7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQ2pELGFBQU9DLFNBQVNGLGFBQVQsRUFBd0JDLGtCQUF4QixFQUE0Q0UsV0FBNUMsRUFBeURDLDBCQUF6RCxDQUFQOztBQUVBLGVBQVNELFdBQVQsQ0FBcUJILGFBQXJCLEVBQW9DO0FBQ2xDLGVBQVMsT0FBT0EsYUFBUCxLQUF5QixRQUExQixJQUF3Q0EseUJBQXlCMUYsT0FBekU7QUFDRDs7QUFFRCxlQUFTOEYsMEJBQVQsQ0FBb0NDLGNBQXBDLEVBQW9EO0FBQ2xELFlBQUk3RixXQUFZLE9BQU82RixjQUFQLEtBQTBCLFFBQTNCLEdBQ1huRyxFQUFFbUcsY0FBRixDQURXLEdBRVhBLGVBQWU3RixRQUZuQjs7QUFJQSxlQUFPQSxTQUFTSyxLQUFULEVBQVA7QUFDRDtBQUNGOzs7NkJBRWVtRixhLEVBQXNDO0FBQUEseUNBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUNwRCxhQUFPQyxTQUFTRixhQUFULEVBQXdCQyxrQkFBeEIsRUFBNENFLFdBQTVDLEVBQXlEQywwQkFBekQsQ0FBUDs7QUFFQSxlQUFTRCxXQUFULENBQXFCSCxhQUFyQixFQUFvQztBQUNsQyxlQUFRLE9BQU9BLGFBQVAsS0FBeUIsUUFBakM7QUFDRDs7QUFFRCxlQUFTSSwwQkFBVCxDQUFvQ0MsY0FBcEMsRUFBb0Q7QUFDbEQsZUFBT25HLEVBQUVtRyxjQUFGLENBQVA7QUFDRDtBQUNGOzs7bUNBRXFCTCxhLEVBQXNDO0FBQUEseUNBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUMxRCxhQUFPQyxTQUFTRixhQUFULEVBQXdCQyxrQkFBeEIsRUFBNENFLFdBQTVDLEVBQXlEQywwQkFBekQsQ0FBUDs7QUFFQSxlQUFTRCxXQUFULENBQXFCSCxhQUFyQixFQUFvQztBQUNsQyxlQUFRQSx5QkFBeUJNLFdBQWpDO0FBQ0Q7O0FBRUQsZUFBU0YsMEJBQVQsQ0FBb0NDLGNBQXBDLEVBQW9EO0FBQ2xELGVBQU9uRyxFQUFFbUcsY0FBRixDQUFQO0FBQ0Q7QUFDRjs7Ozs7O0FBR0gvRixRQUFReUUsaUJBQVIsR0FBNEIsQ0FBNUI7QUFDQXpFLFFBQVE0RSxtQkFBUixHQUE4QixDQUE5QjtBQUNBNUUsUUFBUWlHLGtCQUFSLEdBQTZCLENBQTdCOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCbkcsT0FBakI7O0FBRUEsU0FBU0csb0JBQVQsQ0FBOEJGLFFBQTlCLEVBQXdDO0FBQ3RDLE1BQUlDLFFBQUo7O0FBRUEsTUFBSSxLQUFKLEVBQVcsQ0FFVixDQUZELE1BRU8sSUFBSSxPQUFPRCxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQ3ZDQyxlQUFXTixFQUFFSyxRQUFGLENBQVg7QUFDRCxHQUZNLE1BRUEsSUFBSUEsb0JBQW9CTCxDQUF4QixFQUEyQjtBQUNoQ00sZUFBV0QsUUFBWCxDQURnQyxDQUNWO0FBQ3ZCLEdBRk0sTUFFQSxJQUFJQSxvQkFBb0JtRyxLQUF4QixFQUFnQztBQUNyQyxRQUFJckMsZ0JBQWdCOUQsU0FBUyxDQUFULENBQXBCO0FBQUEsUUFBaUM7QUFDN0JvRyxvQkFBZ0JwRyxTQUFTLENBQVQsQ0FEcEI7QUFBQSxRQUNrQztBQUM5QnFHLHFCQUFpQnZDLGNBQWM3RCxRQUZuQyxDQURxQyxDQUdTOztBQUU5Q0EsZUFBV29HLGVBQWVsRCxJQUFmLENBQW9CaUQsYUFBcEIsQ0FBWDtBQUNEOztBQUVELFNBQU9uRyxRQUFQO0FBQ0Q7O0FBRUQsU0FBUzZFLHVCQUFULENBQWlDYixPQUFqQyxFQUEwQztBQUN4QyxTQUFPLFVBQVNTLEtBQVQsRUFBZ0I7QUFDckIsUUFBSTRCLFdBQVc1QixNQUFNNkIsS0FBckI7QUFBQSxRQUE2QjtBQUN6QkMsZ0JBQVk5QixNQUFNK0IsS0FEdEI7QUFBQSxRQUM2QjtBQUN6QkMsa0JBQWNoQyxNQUFNaUMsS0FGeEIsQ0FEcUIsQ0FHVTs7QUFFL0IxQyxZQUFRcUMsUUFBUixFQUFrQkUsU0FBbEIsRUFBNkJFLFdBQTdCO0FBQ0QsR0FORDtBQU9EOztBQUVELFNBQVNyRCx1QkFBVCxDQUFpQ3VELFdBQWpDLEVBQThDO0FBQzVDLE1BQUlDLFdBQVcsRUFBZjtBQUFBLE1BQ0lDLG9CQUFvQkYsWUFBWUcsTUFEcEM7O0FBR0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLGlCQUFwQixFQUF1Q0UsR0FBdkMsRUFBNEM7QUFDMUMsUUFBSTdHLGFBQWF5RyxZQUFZSSxDQUFaLENBQWpCO0FBQUEsUUFDSXJCLFdBQVd4RixXQUFXQyxZQUQxQjs7QUFHQSxRQUFJdUYsYUFBYTlDLFNBQWpCLEVBQTRCO0FBQzFCLFVBQUlaLFVBQVUwRCxRQUFkLENBRDBCLENBQ0Y7O0FBRXhCa0IsZUFBU0ksSUFBVCxDQUFjaEYsT0FBZDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTzRFLFFBQVA7QUFDRDs7QUFFRCxTQUFTbEIsUUFBVCxDQUFrQkYsYUFBbEIsRUFBaUNDLGtCQUFqQyxFQUFxREUsV0FBckQsRUFBa0VDLDBCQUFsRSxFQUE4RjtBQUM1RixNQUFJRCxZQUFZSCxhQUFaLENBQUosRUFBZ0M7QUFDOUJDLHVCQUFtQndCLE9BQW5CLENBQTJCekIsYUFBM0I7QUFDQUEsb0JBQWdCMUYsT0FBaEI7QUFDRDs7QUFFRCxNQUFJb0gsUUFBUTFCLGFBQVo7QUFBQSxNQUNJSyxpQkFBaUJKLG1CQUFtQjBCLEtBQW5CLEVBRHJCO0FBQUEsTUFFSW5ILFdBQVc0RiwyQkFBMkJDLGNBQTNCLENBRmY7O0FBSUFKLHFCQUFtQndCLE9BQW5CLENBQTJCakgsUUFBM0I7QUFDQXlGLHFCQUFtQndCLE9BQW5CLENBQTJCLElBQTNCLEVBWDRGLENBVzFEOztBQUVsQyxTQUFPLEtBQUtHLFNBQVNDLFNBQVQsQ0FBbUJDLElBQW5CLENBQXdCQyxLQUF4QixDQUE4QkwsS0FBOUIsRUFBcUN6QixrQkFBckMsQ0FBTCxHQUFQLENBYjRGLENBYXBCO0FBQ3pFOztBQUVELFNBQVNKLGdCQUFULENBQTBCSyxRQUExQixFQUFvQ1IsYUFBcEMsRUFBbUQ7QUFDakRRLFdBQVN0RixjQUFULENBQXdCNEcsSUFBeEIsQ0FBNkI5QixhQUE3QjtBQUNEOztBQUVELFNBQVNJLG1CQUFULENBQTZCSSxRQUE3QixFQUF1Q1IsYUFBdkMsRUFBc0Q7QUFDcEQsTUFBSXNDLFFBQVE5QixTQUFTdEYsY0FBVCxDQUF3QnFILE9BQXhCLENBQWdDdkMsYUFBaEMsQ0FBWixDQURvRCxDQUNROztBQUU1RCxNQUFJc0MsUUFBUSxDQUFDLENBQWIsRUFBZ0I7QUFDZCxRQUFJRSxjQUFjLENBQWxCOztBQUVBaEMsYUFBU3RGLGNBQVQsQ0FBd0J1SCxNQUF4QixDQUErQkgsS0FBL0IsRUFBc0NFLFdBQXRDO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTdkMsaUJBQVQsQ0FBMkJPLFFBQTNCLEVBQXFDO0FBQ25DLE1BQUlrQyx1QkFBdUJsQyxTQUFTdEYsY0FBVCxDQUF3QjBHLE1BQW5EO0FBQUEsTUFDSTFHLGlCQUFrQndILHVCQUF1QixDQUQ3Qzs7QUFHQSxTQUFPeEgsY0FBUDtBQUNEOztBQUVELFNBQVNnRixrQkFBVCxDQUE0Qk0sUUFBNUIsRUFBc0M7QUFDcEMsTUFBSW1DLGVBQWVDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBbkI7QUFBQSxNQUNJN0gsYUFBYXdGLFNBQVMxRixRQUFULENBQWtCLENBQWxCLENBRGpCLENBRG9DLENBRUk7O0FBRXhDNkgsZUFBYUcsWUFBYixDQUEwQixPQUExQixFQUFtQyxzSUFBbkM7QUFDQUgsZUFBYTdFLElBQWIsR0FBb0IsYUFBcEI7QUFDQTZFLGVBQWFJLElBQWIsR0FBb0IsV0FBcEI7O0FBRUFKLGVBQWFLLGNBQWIsR0FBOEJoSSxVQUE5QjtBQUNBQSxhQUFXaUksZ0JBQVgsR0FBOEJOLFlBQTlCOztBQUVBQSxlQUFhTyxNQUFiLEdBQXNCQyx1QkFBdEI7O0FBRUFuSSxhQUFXb0ksV0FBWCxDQUF1QlQsWUFBdkI7QUFDRDs7QUFFRCxTQUFTdEMsa0JBQVQsQ0FBNEJHLFFBQTVCLEVBQXNDO0FBQ3BDLE1BQUl4RixhQUFhd0YsU0FBUzFGLFFBQVQsQ0FBa0IsQ0FBbEIsQ0FBakI7QUFBQSxNQUF3QztBQUNwQzZILGlCQUFlM0gsV0FBV2lJLGdCQUQ5QjtBQUFBLE1BRUlJLGVBQWVWLGFBQWFXLGVBQWIsQ0FBNkJDLFdBRmhELENBRG9DLENBRzBCOztBQUU5REYsZUFBYUcsbUJBQWIsQ0FBaUMsUUFBakMsRUFBMkNDLGNBQTNDOztBQUVBekksYUFBVzBJLFdBQVgsQ0FBdUJmLFlBQXZCO0FBQ0Q7O0FBRUQsU0FBU1EsdUJBQVQsR0FBbUM7QUFDakMsTUFBSVEscUJBQXFCLEtBQUtMLGVBQUwsQ0FBcUJDLFdBQTlDLENBRGlDLENBQzJCOztBQUU1REkscUJBQW1CWCxjQUFuQixHQUFvQyxLQUFLQSxjQUF6QztBQUNBVyxxQkFBbUJDLGdCQUFuQixDQUFvQyxRQUFwQyxFQUE4Q0gsY0FBOUM7QUFDRDs7QUFFRCxTQUFTQSxjQUFULENBQXdCbEUsS0FBeEIsRUFBK0I7QUFDN0IsTUFBSW9FLHFCQUFxQnBFLE1BQU1zRSxNQUFOLElBQWdCdEUsTUFBTXVFLFVBQS9DO0FBQUEsTUFBNEQ7QUFDeEQ5SSxlQUFhMkksbUJBQW1CWCxjQURwQztBQUFBLE1BRUl4QyxXQUFXeEYsV0FBV0MsWUFGMUI7QUFBQSxNQUdJa0IsUUFBUXFFLFNBQVNwRSxRQUFULEVBSFo7QUFBQSxNQUlJQyxTQUFTbUUsU0FBU2xFLFNBQVQsRUFKYjs7QUFNQWtFLFdBQVN0RixjQUFULENBQXdCNkksT0FBeEIsQ0FBZ0MsVUFBUy9ELGFBQVQsRUFBdUI7QUFDckRBLGtCQUFjN0QsS0FBZCxFQUFxQkUsTUFBckI7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBUzJDLHVCQUFULENBQWlDSCxNQUFqQyxFQUF5Q0UsU0FBekMsRUFBb0Q7QUFDbEQsTUFBSUEsY0FBY3JCLFNBQWxCLEVBQTZCO0FBQzNCbUIsYUFBU0EsU0FBUyxHQUFULEdBQWVFLFNBQXhCO0FBQ0Q7O0FBRUQsU0FBT0YsTUFBUDtBQUNEOztBQUVELFNBQVNILEtBQVQsQ0FBZXNGLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgQm91bmRzID0gcmVxdWlyZSgnLi9ib3VuZHMnKSxcbiAgICBQb3NpdGlvbiA9IHJlcXVpcmUoJy4vcG9zaXRpb24nKTtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIHZhciBkb21FbGVtZW50ID0gJCh0aGlzLiRlbGVtZW50KVswXTsgLy8vXG5cbiAgICBkb21FbGVtZW50Ll9faW5zdGFuY2VfXyA9IHRoaXM7XG5cbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXJzID0gW107XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cblxuICBzaG93KCkgeyB0aGlzLiRlbGVtZW50LnNob3coKTsgfVxuICBoaWRlKCkgeyB0aGlzLiRlbGVtZW50LmhpZGUoKTsgfVxuICBlbmFibGUoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTsgfVxuICBkaXNhYmxlKCkgeyB0aGlzLiRlbGVtZW50LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7IH1cbiAgcmVtb3ZlKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZSgpOyB9XG4gIGRldGFjaCgpIHsgdGhpcy4kZWxlbWVudC5kZXRhY2goKTsgfVxuICBlbXB0eSgpIHsgdGhpcy4kZWxlbWVudC5lbXB0eSgpOyB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdmFyICRwb3NpdGlvbiA9IHRoaXMuJGVsZW1lbnQucG9zaXRpb24oKSxcbiAgICAgICAgdG9wID0gJHBvc2l0aW9uLnRvcCxcbiAgICAgICAgbGVmdCA9ICRwb3NpdGlvbi5sZWZ0LFxuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbih0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0Qm91bmRzKGluY2x1ZGVCb3JkZXIgPSBmYWxzZSwgaW5jbHVkZU1hcmdpbiA9IGZhbHNlKSB7XG4gICAgdmFyICRvZmZzZXQgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpLFxuICAgICAgICB0b3AgPSAkb2Zmc2V0LnRvcCwgIC8vL1xuICAgICAgICBsZWZ0ID0gJG9mZnNldC5sZWZ0LCAgLy8vXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aChpbmNsdWRlQm9yZGVyLCBpbmNsdWRlTWFyZ2luKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoaW5jbHVkZUJvcmRlciwgaW5jbHVkZU1hcmdpbiksXG4gICAgICAgIGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gZmFsc2UsIGluY2x1ZGVNYXJnaW4gPSBmYWxzZSkgeyBcbiAgICB2YXIgd2lkdGggPSBpbmNsdWRlQm9yZGVyID8gXG4gICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50Lm91dGVyV2lkdGgoaW5jbHVkZU1hcmdpbikgOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LndpZHRoKCk7XG4gICAgXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG4gIFxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IGZhbHNlLCBpbmNsdWRlTWFyZ2luID0gZmFsc2UpIHtcbiAgICB2YXIgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5vdXRlckhlaWdodChpbmNsdWRlTWFyZ2luKSA6XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LmhlaWdodCgpO1xuICAgIFxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLiRlbGVtZW50LndpZHRoKHdpZHRoKTsgfVxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuJGVsZW1lbnQuaGVpZ2h0KGhlaWdodCk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5hdHRyKG5hbWUpOyB9XG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLiRlbGVtZW50LmF0dHIobmFtZSwgdmFsdWUpOyB9XG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cihuYW1lKTsgfVxuICBwcmVwZW5kQmVmb3JlKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5iZWZvcmUoZWxlbWVudC4kZWxlbWVudCk7IH1cbiAgYXBwZW5kQWZ0ZXIoZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmFmdGVyKGVsZW1lbnQuJGVsZW1lbnQpOyB9XG4gIFxuICBwcmVwZW5kKGVsZW1lbnRPclN0cmluZykge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHN0cmluZyA9IGVsZW1lbnRPclN0cmluZzsgLy8vXG5cbiAgICAgIHRoaXMuJGVsZW1lbnQucHJlcGVuZChzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRPclN0cmluZywgIC8vL1xuICAgICAgICAgICRlbGVtZW50ID0gZWxlbWVudC4kZWxlbWVudDtcblxuICAgICAgdGhpcy4kZWxlbWVudC5wcmVwZW5kKCRlbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgXG4gIGFwcGVuZChlbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBlbGVtZW50T3JTdHJpbmc7IC8vL1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZChzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRPclN0cmluZywgIC8vL1xuICAgICAgICAgICRlbGVtZW50ID0gZWxlbWVudC4kZWxlbWVudDtcblxuICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoJGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWUpOyB9XG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLiRlbGVtZW50LmFkZENsYXNzKGNsYXNzTmFtZSk7IH1cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICByZW1vdmVDbGFzc2VzKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCk7IH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lmh0bWwoaHRtbClcbiAgICB9IGVsc2Uge1xuICAgICAgaHRtbCA9IHRoaXMuJGVsZW1lbnQuaHRtbCgpO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgcHJvcGVydHlOYW1lID0gY3NzO1xuXG4gICAgICBjc3MgPSB0aGlzLiRlbGVtZW50LmNzcyhwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmNzcyhjc3MpO1xuICAgIH1cbiAgfVxuXG4gIGRhdGEoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmRhdGEoa2V5LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gdGhpcy4kZWxlbWVudC5kYXRhKGtleSk7XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBmaW5kRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgICB2YXIgZm91bmRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQuZmluZChzZWxlY3RvciksXG4gICAgICAgIGZvdW5kRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhmb3VuZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmb3VuZEVsZW1lbnRzO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBjaGlsZERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbihzZWxlY3RvciksXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50RWxlbWVudChzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQucGFyZW50KHNlbGVjdG9yKSxcbiAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKSxcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBwYXJlbnRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBwYXJlbnRET01FbGVtZW50cyA9IHRoaXMuJGVsZW1lbnQucGFyZW50cyhzZWxlY3RvciksXG4gICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnRzO1xuICB9XG5cbiAgb24oZXZlbnRzLCBoYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICBldmVudHMgPSBhcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSk7XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKGV2ZW50cywgaGFuZGxlcik7XG4gIH1cbiAgXG4gIG9mZihldmVudHMsIG5hbWVzcGFjZSkge1xuICAgIGV2ZW50cyA9IGFwcGVuZE5hbWVzcGFjZVRvRXZlbnRzKGV2ZW50cywgbmFtZXNwYWNlKTtcblxuICAgIHRoaXMuJGVsZW1lbnQub2ZmKGV2ZW50cyk7XG4gIH1cblxuICBvbkNsaWNrKGNsaWNrSGFuZGxlciwgYnV0dG9uID0gRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiwgYWxsb3dEZWZhdWx0ID0gZmFsc2UsIG5hbWVzcGFjZSkge1xuICAgIHRoaXMub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHN3aXRjaCAoYnV0dG9uKSB7XG4gICAgICAgIGNhc2UgRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiA6XG4gICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkgeyAvLy9cbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA6XG4gICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMSkgeyAvLy9cbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFsbG93RGVmYXVsdDtcbiAgICB9LCBuYW1lc3BhY2UpO1xuICB9XG4gIFxuICBvZmZDbGljayhuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ2NsaWNrJywgbmFtZXNwYWNlKTsgfVxuXG4gIG9uRG91YmxlQ2xpY2soZG91YmxlQ2xpY2tIYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm9uKCdkYmxjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICBkb3VibGVDbGlja0hhbmRsZXIoKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sIG5hbWVzcGFjZSlcbiAgfVxuXG4gIG9mZkRvdWJsZUNsaWNrKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignZGJsY2xpY2snLCBuYW1lc3BhY2UpOyB9XG5cbiAgb25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2V1cCcsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuICBvbk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2Vkb3duJywgcmV0dXJuTW91c2VFdmVudEhhbmRsZXIobW91c2VEb3duSGFuZGxlciksIG5hbWVzcGFjZSk7IH1cbiAgb25Nb3VzZU92ZXIobW91c2VPdmVySGFuZGxlciwgbmFtZXNwYWNlKSB7IHRoaXMub24oJ21vdXNlb3ZlcicsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlT3ZlckhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VPdXQobW91c2VPdXRIYW5kbGVyLCBuYW1lc3BhY2UpIHsgdGhpcy5vbignbW91c2VvdXQnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihtb3VzZU91dEhhbmRsZXIpLCBuYW1lc3BhY2UpOyB9XG4gIG9uTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIsIG5hbWVzcGFjZSkgeyB0aGlzLm9uKCdtb3VzZW1vdmUnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSwgbmFtZXNwYWNlKTsgfVxuXG4gIG9mZk1vdXNlVXAobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZXVwJywgbmFtZXNwYWNlKTsgfVxuICBvZmZNb3VzZURvd24obmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZWRvd24nLCBuYW1lc3BhY2UpOyB9XG4gIG9mZk1vdXNlT3ZlcihuYW1lc3BhY2UpIHsgdGhpcy5vZmYoJ21vdXNlb3ZlcicsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VPdXQobmFtZXNwYWNlKSB7IHRoaXMub2ZmKCdtb3VzZW91dCcsIG5hbWVzcGFjZSk7IH1cbiAgb2ZmTW91c2VNb3ZlKG5hbWVzcGFjZSkgeyB0aGlzLm9mZignbW91c2Vtb3ZlJywgbmFtZXNwYWNlKTsgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHtcbiAgICB2YXIgcmVzaXplSGFuZGxlcnMgPSBoYXNSZXNpemVIYW5kbGVycyh0aGlzKTtcblxuICAgIGlmICghcmVzaXplSGFuZGxlcnMpIHtcbiAgICAgIGFwcGVuZFJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgICB9XG5cbiAgICBhZGRSZXNpemVIYW5kbGVyKHRoaXMsIHJlc2l6ZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHtcbiAgICByZW1vdmVSZXNpemVIYW5kbGVyKHRoaXMsIHJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgdmFyIHJlc2l6ZUhhbmRsZXJzID0gaGFzUmVzaXplSGFuZGxlcnModGhpcyk7XG5cbiAgICBpZiAoIXJlc2l6ZUhhbmRsZXJzKSB7XG4gICAgICByZW1vdmVSZXNpemVPYmplY3QodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsb25lKGZpcnN0QXJndW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCk7XG5cbiAgICBmdW5jdGlvbiBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gKCh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpIHx8IChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KHNlY29uZEFyZ3VtZW50KSB7XG4gICAgICB2YXIgJGVsZW1lbnQgPSAodHlwZW9mIHNlY29uZEFyZ3VtZW50ID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICQoc2Vjb25kQXJndW1lbnQpIDpcbiAgICAgICAgICBzZWNvbmRBcmd1bWVudC4kZWxlbWVudDtcblxuICAgICAgcmV0dXJuICRlbGVtZW50LmNsb25lKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGZpcnN0QXJndW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBpbnN0YW5jZShmaXJzdEFyZ3VtZW50LCByZW1haW5pbmdBcmd1bWVudHMsIGlzTm90QUNsYXNzLCAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudCk7XG5cbiAgICBmdW5jdGlvbiBpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSB7XG4gICAgICByZXR1cm4gKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJGVsZW1lbnRGcm9tU2Vjb25kQXJndW1lbnQoc2Vjb25kQXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAkKHNlY29uZEFyZ3VtZW50KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlKGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KTtcblxuICAgIGZ1bmN0aW9uIGlzTm90QUNsYXNzKGZpcnN0QXJndW1lbnQpIHtcbiAgICAgIHJldHVybiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkZWxlbWVudEZyb21TZWNvbmRBcmd1bWVudChzZWNvbmRBcmd1bWVudCkge1xuICAgICAgcmV0dXJuICQoc2Vjb25kQXJndW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OID0gMTtcbkVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA9IDI7XG5FbGVtZW50LlJJR0hUX01PVVNFX0JVVFRPTiA9IDM7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gJGVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgdmFyICRlbGVtZW50O1xuXG4gIGlmIChmYWxzZSkge1xuXG4gIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICRlbGVtZW50ID0gJChzZWxlY3Rvcik7XG4gIH0gZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiAkKSB7XG4gICAgJGVsZW1lbnQgPSBzZWxlY3RvcjsgIC8vL1xuICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgQXJyYXkgKSB7XG4gICAgdmFyIHBhcmVudEVsZW1lbnQgPSBzZWxlY3RvclswXSwgLy8vXG4gICAgICAgIGNoaWxkU2VsZWN0b3IgPSBzZWxlY3RvclsxXSwgIC8vL1xuICAgICAgICBwYXJlbnQkRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuJGVsZW1lbnQ7ICAvLy9cblxuICAgICRlbGVtZW50ID0gcGFyZW50JEVsZW1lbnQuZmluZChjaGlsZFNlbGVjdG9yKTtcbiAgfVxuXG4gIHJldHVybiAkZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQud2hpY2g7IC8vL1xuXG4gICAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0LCBtb3VzZUJ1dHRvbik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIHZhciBlbGVtZW50cyA9IFtdLFxuICAgICAgZG9tRWxlbWVudHNMZW5ndGggPSBkb21FbGVtZW50cy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb21FbGVtZW50c0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSBkb21FbGVtZW50c1tpXSxcbiAgICAgICAgaW5zdGFuY2UgPSBkb21FbGVtZW50Ll9faW5zdGFuY2VfXztcblxuICAgIGlmIChpbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGluc3RhbmNlOyAvLy9cbiAgICAgIFxuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGluc3RhbmNlKGZpcnN0QXJndW1lbnQsIHJlbWFpbmluZ0FyZ3VtZW50cywgaXNOb3RBQ2xhc3MsICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KSB7XG4gIGlmIChpc05vdEFDbGFzcyhmaXJzdEFyZ3VtZW50KSkge1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGZpcnN0QXJndW1lbnQpO1xuICAgIGZpcnN0QXJndW1lbnQgPSBFbGVtZW50O1xuICB9XG5cbiAgdmFyIENsYXNzID0gZmlyc3RBcmd1bWVudCxcbiAgICAgIHNlY29uZEFyZ3VtZW50ID0gcmVtYWluaW5nQXJndW1lbnRzLnNoaWZ0KCksXG4gICAgICAkZWxlbWVudCA9ICRlbGVtZW50RnJvbVNlY29uZEFyZ3VtZW50KHNlY29uZEFyZ3VtZW50KTtcblxuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdCgkZWxlbWVudCk7XG4gIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpOyAvLy9cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7ICAvLy9cbn1cblxuZnVuY3Rpb24gYWRkUmVzaXplSGFuZGxlcihpbnN0YW5jZSwgcmVzaXplSGFuZGxlcikge1xuICBpbnN0YW5jZS5yZXNpemVIYW5kbGVycy5wdXNoKHJlc2l6ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSZXNpemVIYW5kbGVyKGluc3RhbmNlLCByZXNpemVIYW5kbGVyKSB7XG4gIHZhciBzdGFydCA9IGluc3RhbmNlLnJlc2l6ZUhhbmRsZXJzLmluZGV4T2YocmVzaXplSGFuZGxlcik7IC8vL1xuXG4gIGlmIChzdGFydCA+IC0xKSB7XG4gICAgdmFyIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGluc3RhbmNlLnJlc2l6ZUhhbmRsZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc1Jlc2l6ZUhhbmRsZXJzKGluc3RhbmNlKSB7XG4gIHZhciByZXNpemVIYW5kbGVyc0xlbmd0aCA9IGluc3RhbmNlLnJlc2l6ZUhhbmRsZXJzLmxlbmd0aCxcbiAgICAgIHJlc2l6ZUhhbmRsZXJzID0gKHJlc2l6ZUhhbmRsZXJzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIHJlc2l6ZUhhbmRsZXJzO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRSZXNpemVPYmplY3QoaW5zdGFuY2UpIHtcbiAgdmFyIHJlc2l6ZU9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpLFxuICAgICAgZG9tRWxlbWVudCA9IGluc3RhbmNlLiRlbGVtZW50WzBdOyAgLy8vXG5cbiAgcmVzaXplT2JqZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG4gIHJlc2l6ZU9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcbiAgcmVzaXplT2JqZWN0LnR5cGUgPSAndGV4dC9odG1sJztcblxuICByZXNpemVPYmplY3QuX19kb21FbGVtZW50X18gPSBkb21FbGVtZW50O1xuICBkb21FbGVtZW50Ll9fcmVzaXplT2JqZWN0X18gPSByZXNpemVPYmplY3Q7XG5cbiAgcmVzaXplT2JqZWN0Lm9ubG9hZCA9IHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyO1xuXG4gIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplT2JqZWN0KGluc3RhbmNlKSB7XG4gIHZhciBkb21FbGVtZW50ID0gaW5zdGFuY2UuJGVsZW1lbnRbMF0sICAvLy9cbiAgICAgIHJlc2l6ZU9iamVjdCA9IGRvbUVsZW1lbnQuX19yZXNpemVPYmplY3RfXyxcbiAgICAgIG9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICBvYmplY3RXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplTGlzdGVuZXIpO1xuXG4gIGRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoKSB7XG4gIHZhciByZXNpemVPYmplY3RXaW5kb3cgPSB0aGlzLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIHJlc2l6ZU9iamVjdFdpbmRvdy5fX2RvbUVsZW1lbnRfXyA9IHRoaXMuX19kb21FbGVtZW50X187XG4gIHJlc2l6ZU9iamVjdFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVMaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZUxpc3RlbmVyKGV2ZW50KSB7XG4gIHZhciByZXNpemVPYmplY3RXaW5kb3cgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCwgIC8vL1xuICAgICAgZG9tRWxlbWVudCA9IHJlc2l6ZU9iamVjdFdpbmRvdy5fX2RvbUVsZW1lbnRfXyxcbiAgICAgIGluc3RhbmNlID0gZG9tRWxlbWVudC5fX2luc3RhbmNlX18sXG4gICAgICB3aWR0aCA9IGluc3RhbmNlLmdldFdpZHRoKCksXG4gICAgICBoZWlnaHQgPSBpbnN0YW5jZS5nZXRIZWlnaHQoKTtcblxuICBpbnN0YW5jZS5yZXNpemVIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKHJlc2l6ZUhhbmRsZXIpe1xuICAgIHJlc2l6ZUhhbmRsZXIod2lkdGgsIGhlaWdodCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSkge1xuICBpZiAobmFtZXNwYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSBldmVudHMgKyAnLicgKyBuYW1lc3BhY2U7XG4gIH1cblxuICByZXR1cm4gZXZlbnRzO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==