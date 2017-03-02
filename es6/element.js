'use strict';

var $ = require('jquery');

var Position = require('./misc/position'),
    Bounds = require('./misc/bounds'),
    event = require('./delegate/event'),
    mouse = require('./delegate/mouse'),
    resize = require('./delegate/resize');

class Element {
  constructor(selector) {
    this.$element = $elementFromSelector(selector);

    var domElement = $(this.$element)[0]; ///

    domElement.__element__ = this; ///

    event.delegateTo(this, Element);
    mouse.delegateTo(this, Element);
    resize.delegateTo(this, Element);
  }

  clone() { return Element.clone(this); }

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

  getAttribute(name) { return this.$element.attr(name); }

  addAttribute(name, value) { this.$element.attr(name, value); }

  removeAttribute(name) { this.$element.removeAttr(name); }

  hasClass(className) { return this.$element.hasClass(className); }

  addClass(className) { this.$element.addClass(className); }

  removeClass(className) { this.$element.removeClass(className); }

  removeClasses() { this.$element.removeClass(); }

  setWidth(width) { this.$element.width(width); }

  setHeight(height) { this.$element.height(height); }

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

  show() { this.$element.show(); }

  hide() { this.$element.hide(); }

  enable() { this.$element.removeAttr('disabled'); }

  disable() { this.$element.attr('disabled', true); }

  remove() { this.$element.remove(); }

  detach() { this.$element.detach(); }

  empty() { this.$element.empty(); }

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

  onClick(clickHandler, namespace, button = Element.LEFT_MOUSE_BUTTON, allowDefault = false) {
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

  static clone(firstArgument, ...remainingArguments) {
    return element(firstArgument, remainingArguments, isNotAClass, $elementFromSecondArgument);

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
    return element(firstArgument, remainingArguments, isNotAClass, $elementFromSecondArgument);

    function isNotAClass(firstArgument) {
      return (typeof firstArgument === 'string');
    }

    function $elementFromSecondArgument(secondArgument) {
      return $(secondArgument);
    }
  }

  static fromDOMElement(firstArgument, ...remainingArguments) {
    return element(firstArgument, remainingArguments, isNotAClass, $elementFromSecondArgument);

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

function element(firstArgument, remainingArguments, isNotAClass, $elementFromSecondArgument) {
  var firstArgumentNotAClass = isNotAClass(firstArgument);

  if (firstArgumentNotAClass) {
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

function elementsFromDOMElements(domElements) {
  var elements = [],
      domElementsLength = domElements.length;

  for (var i = 0; i < domElementsLength; i++) {
    var domElement = domElements[i],
        element = domElement.__element__;

    if (element !== undefined) {
      elements.push(element);
    }
  }

  return elements;
}

function first(array) { return array[0]; }
