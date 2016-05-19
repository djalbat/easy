'use strict';

var $ = require('jquery');

var Bounds = require('./bounds');

class Element {
  constructor(selectorOrSomething) {
    this.$element = to$Element(selectorOrSomething);

    this.data('element', this);
  }

  clone() { return Element.clone(this); }

  show() { this.$element.show(); }
  hide() { this.$element.hide(); }
  enable() { this.$element.removeAttr('disabled'); }
  disable() { this.$element.attr('disabled', true); }
  remove() { this.$element.remove(); }
  detach() { this.$element.detach(); }
  empty() { this.$element.empty(); }

  getWidth() { return this.$element.width(); }
  getHeight() { return this.$element.height(); }

  getBounds() {
    var $offset = this.$element.offset(),
        top = $offset.top,  ///
        left = $offset.left,  ///
        width = this.getWidth(),
        height = this.getHeight(),
        bottom = top + height,
        right = left + width,
        bounds = new Bounds(top, left, bottom, right);

    return bounds;
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
    if (arguments.length === 1) {
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

  data() {
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

  on(events, handler) { this.$element.on(events, handler); }

  onMouseUp(handler) { this.$element.on('mouseup', returnMouseEventHandler(handler)); }
  onMouseDown(handler) { this.$element.on('mousedown', returnMouseEventHandler(handler)); }
  onMouseOver(handler) { this.$element.on('mouseover', returnMouseEventHandler(handler)); }
  onMouseOut(handler) { this.$element.on('mouseout', returnMouseEventHandler(handler)); }
  onMouseMove(handler) { this.$element.on('mousemove', returnMouseEventHandler(handler)); }

  static clone() {
    var firstArgument = first(arguments),
        remainingArguments = remaining(arguments);

    return instance(
      firstArgument,
      remainingArguments,
      function(firstArgument) {
        return ((typeof firstArgument === 'string') || (firstArgument instanceof Element));
      },
      function(secondArgument) {
        var $element = (typeof secondArgument === 'string') ?
                         $(secondArgument) :
                           secondArgument.$element;

        return $element.clone();
      }
    );
  }

  static fromHTML() {
    var firstArgument = first(arguments),
        remainingArguments = remaining(arguments);

    return instance(
      firstArgument,
      remainingArguments,
      function(firstArgument) {
        return (typeof firstArgument === 'string');
      },
      function(secondArgument) {
        return $(secondArgument);
      }
    );
  }

  static fromDOMElement() {
    var firstArgument = first(arguments),
        remainingArguments = remaining(arguments);

    return instance(
      firstArgument,
      remainingArguments,
      function(firstArgument) {
        return (firstArgument instanceof HTMLElement);
      },
      function(secondArgument) {
        return $(secondArgument);
      }
    );
  }
}

Element.LEFT_MOUSE_BUTTON = 1;
Element.MIDDLE_MOUSE_BUTTON = 2;
Element.RIGHT_MOUSE_BUTTON = 3;

module.exports = Element;

function to$Element(selectorOrSomething) {
  var $element;

  if (false) {

  } else if (typeof selectorOrSomething === 'string') {
    $element = $(selectorOrSomething);
  } else if (selectorOrSomething instanceof $) {
    $element = selectorOrSomething;  ///
  } else if (selectorOrSomething instanceof Array ) {
    var parentElement = selectorOrSomething[0], ///
        childSelector = selectorOrSomething[1],  ///
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

  return new (Function.prototype.bind.apply(Class, remainingArguments));  ///
}

function first(array) { return array[0]; }

function remaining(array) { return Array.prototype.slice.call(array, 1); }
