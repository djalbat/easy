'use strict';

var $ = require('jquery');

var Bounds = require('./bounds'),
    Position = require('./position');

class Element {
  constructor(selector) {
    this.$element = $elementFromSelector(selector);

    var domElement = $(this.$element)[0]; ///

    domElement.__instance__ = this;

    this.resizeHandlers = [];
  }

  clone() { return Element.clone(this); }

  show() { this.$element.show(); }
  hide() { this.$element.hide(); }
  enable() { this.$element.removeAttr('disabled'); }
  disable() { this.$element.attr('disabled', true); }
  remove() { this.$element.remove(); }
  detach() { this.$element.detach(); }
  empty() { this.$element.empty(); }

  getPosition() {
    var $position = this.$element.position(),
        top = $position.top,
        left = $position.left,
        position = new Position(top, left);

    return position;
  }

  getBounds(includeBorder = false, includeMargin = false) {
    var $offset = this.$element.offset(),
        top = $offset.top,  ///
        left = $offset.left,  ///
        width = this.getWidth(includeBorder, includeMargin),
        height = this.getHeight(includeBorder, includeMargin),
        bottom = top + height,
        right = left + width,
        bounds = new Bounds(top, left, bottom, right);

    return bounds;
  }

  getWidth(includeBorder = false, includeMargin = false) { 
    var width = includeBorder ? 
                  this.$element.outerWidth(includeMargin) :
                    this.$element.width();
    
    return width;
  }
  
  getHeight(includeBorder = false, includeMargin = false) {
    var height = includeBorder ?
                   this.$element.outerHeight(includeMargin) :
                     this.$element.height();
    
    return height;
  }

  setWidth(width) { this.$element.width(width); }
  setHeight(height) { this.$element.height(height); }

  getAttribute(name) { return this.$element.attr(name); }
  addAttribute(name, value) { this.$element.attr(name, value); }
  removeAttribute(name) { this.$element.removeAttr(name); }
  prependBefore(element) { this.$element.before(element.$element); }
  appendAfter(element) { this.$element.after(element.$element); }
  
  prepend(elementOrString) {
    if (typeof elementOrString === 'string') {
      var string = elementOrString; ///

      this.$element.prepend(string);
    } else {
      var element = elementOrString,  ///
          $element = element.$element;

      this.$element.prepend($element);
    }
  }
  
  append(elementOrString) {
    if (typeof elementOrString === 'string') {
      var string = elementOrString; ///

      this.$element.append(string);
    } else {
      var element = elementOrString,  ///
          $element = element.$element;

      this.$element.append($element);
    }
  }

  hasClass(className) { return this.$element.hasClass(className); }
  addClass(className) { this.$element.addClass(className); }
  removeClass(className) { this.$element.removeClass(className); }
  removeClasses() { this.$element.removeClass(); }

  html(html) {
    if (html !== undefined) {
      this.$element.html(html)
    } else {
      html = this.$element.html();

      return html;
    }
  }

  css(css) {
    if (typeof css === 'string') {
      var propertyName = css;

      css = this.$element.css(propertyName);

      return css;
    } else {
      this.$element.css(css);
    }
  }

  data(key, value) {
    if (value !== undefined) {
      this.$element.data(key, value);
    } else {
      value = this.$element.data(key);

      return value;
    }
  }

  findElements(selector) {
    var foundDOMElements = this.$element.find(selector),
        foundElements = elementsFromDOMElements(foundDOMElements);

    return foundElements;
  }

  childElements(selector) {
    var childDOMElements = this.$element.children(selector),
        childElements = elementsFromDOMElements(childDOMElements);

    return childElements;
  }

  parentElement(selector) {
    var parentDOMElements = this.$element.parent(selector),
        parentElements = elementsFromDOMElements(parentDOMElements),
        firstParentElement = first(parentElements),
        parentElement = firstParentElement || null;

    return parentElement;
  }

  parentElements(selector) {
    var parentDOMElements = this.$element.parents(selector),
        parentElements = elementsFromDOMElements(parentDOMElements);

    return parentElements;
  }

  on(events, handler, namespace) {
    if (namespace !== undefined) {
      events = events + '.' + namespace;
    }

    this.$element.on(events, handler);
  }
  
  off(events, namespace) {
    if (namespace !== undefined) {
      events = events + '.' + namespace;
    }

    this.$element.off(events);
  }

  onClick(clickHandler, button = Element.LEFT_MOUSE_BUTTON, allowDefault = false, namespace) {
    this.on('click', function(event) {
      switch (button) {
        case Element.LEFT_MOUSE_BUTTON :
          if (event.button === 0) { ///
            clickHandler();
          }
          break;

        case Element.MIDDLE_MOUSE_BUTTON :
          if (event.button === 1) { ///
            clickHandler();
          }
          break;
      }

      return allowDefault;
    }, namespace);
  }
  
  offClick(namespace) { this.off('click', namespace); }

  onDoubleClick(doubleClickHandler, namespace) {
    this.on('dblclick',function() {
      doubleClickHandler();

      return false;
    }, namespace)
  }

  offDoubleClick(namespace) { this.off('dblclick', namespace); }

  onMouseUp(mouseUpHandler, namespace) { this.on('mouseup', returnMouseEventHandler(mouseUpHandler), namespace); }
  onMouseDown(mouseDownHandler, namespace) { this.on('mousedown', returnMouseEventHandler(mouseDownHandler), namespace); }
  onMouseOver(mouseOverHandler, namespace) { this.on('mouseover', returnMouseEventHandler(mouseOverHandler), namespace); }
  onMouseOut(mouseOutHandler, namespace) { this.on('mouseout', returnMouseEventHandler(mouseOutHandler), namespace); }
  onMouseMove(mouseMoveHandler, namespace) { this.on('mousemove', returnMouseEventHandler(mouseMoveHandler), namespace); }

  offMouseUp(namespace) { this.off('mouseup', namespace); }
  offMouseDown(namespace) { this.off('mousedown', namespace); }
  offMouseOver(namespace) { this.off('mouseover', namespace); }
  offMouseOut(namespace) { this.off('mouseout', namespace); }
  offMouseMove(namespace) { this.off('mousemove', namespace); }

  onResize(resizeHandler) {
    var resizeHandlers = hasResizeHandlers(this);

    if (!resizeHandlers) {
      appendResizeObject(this);
    }

    addResizeHandler(this, resizeHandler);
  }

  offResize(resizeHandler) {
    removeResizeHandler(this, resizeHandler);

    var resizeHandlers = hasResizeHandlers(this);

    if (!resizeHandlers) {
      removeResizeObject(this);
    }
  }

  static clone(firstArgument, ...remainingArguments) {
    return instance(firstArgument, remainingArguments, isNotAClass, $elementFromSecondArgument);

    function isNotAClass(firstArgument) {
      return ((typeof firstArgument === 'string') || (firstArgument instanceof Element));
    }

    function $elementFromSecondArgument(secondArgument) {
      var $element = (typeof secondArgument === 'string') ?
          $(secondArgument) :
          secondArgument.$element;

      return $element.clone();
    }
  }

  static fromHTML(firstArgument, ...remainingArguments) {
    return instance(firstArgument, remainingArguments, isNotAClass, $elementFromSecondArgument);

    function isNotAClass(firstArgument) {
      return (typeof firstArgument === 'string');
    }

    function $elementFromSecondArgument(secondArgument) {
      return $(secondArgument);
    }
  }

  static fromDOMElement(firstArgument, ...remainingArguments) {
    return instance(firstArgument, remainingArguments, isNotAClass, $elementFromSecondArgument);

    function isNotAClass(firstArgument) {
      return (firstArgument instanceof HTMLElement);
    }

    function $elementFromSecondArgument(secondArgument) {
      return $(secondArgument);
    }
  }
}

Element.LEFT_MOUSE_BUTTON = 1;
Element.MIDDLE_MOUSE_BUTTON = 2;
Element.RIGHT_MOUSE_BUTTON = 3;

module.exports = Element;

function $elementFromSelector(selector) {
  var $element;

  if (false) {

  } else if (typeof selector === 'string') {
    $element = $(selector);
  } else if (selector instanceof $) {
    $element = selector;  ///
  } else if (selector instanceof Array ) {
    var parentElement = selector[0], ///
        childSelector = selector[1],  ///
        parent$Element = parentElement.$element;  ///

    $element = parent$Element.find(childSelector);
  }

  return $element;
}

function returnMouseEventHandler(handler) {
  return function(event) {
    var mouseTop = event.pageY,  ///
        mouseLeft = event.pageX, ///
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

  return new (Function.prototype.bind.apply(Class, remainingArguments));  ///
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
      resizeHandlers = (resizeHandlersLength > 0);

  return resizeHandlers;
}

function appendResizeObject(instance) {
  var resizeObject = document.createElement('object'),
      domElement = instance.$element[0];  ///

  resizeObject.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
  resizeObject.data = 'about:blank';
  resizeObject.type = 'text/html';

  resizeObject.__domElement__ = domElement;
  domElement.__resizeObject__ = resizeObject;

  resizeObject.onload = resizeObjectLoadHandler;

  domElement.appendChild(resizeObject);
}

function removeResizeObject(instance) {
  var domElement = instance.$element[0],  ///
      resizeObject = domElement.__resizeObject__,
      objectWindow = resizeObject.contentDocument.defaultView;  ///

  objectWindow.removeEventListener('resize', resizeListener);

  domElement.removeChild(resizeObject);
}

function resizeObjectLoadHandler() {
  var resizeObjectWindow = this.contentDocument.defaultView;  ///

  resizeObjectWindow.__domElement__ = this.__domElement__;
  resizeObjectWindow.addEventListener('resize', resizeListener);
}

function resizeListener(event) {
  var resizeObjectWindow = event.target || event.srcElement,  ///
      domElement = resizeObjectWindow.__domElement__,
      instance = domElement.__instance__,
      width = instance.getWidth(),
      height = instance.getHeight();

  instance.resizeHandlers.forEach(function(resizeHandler){
    resizeHandler(width, height);
  });
}

function first(array) { return array[0]; }
