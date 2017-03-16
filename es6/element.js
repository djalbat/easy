'use strict';

const Offset = require('./misc/offset'),
      Bounds = require('./misc/bounds'),
      jsxMixin = require('./mixin/jsx'),
      eventMixin = require('./mixin/event'),
      clickMixin = require('./mixin/click'),
      mouseMixin = require('./mixin/mouse'),
      resizeMixin = require('./mixin/resize');

class Element {
  constructor(selector) {
    this.domElement = domElementFromSelector(selector);

    this.domElement.__element__ = this;
    
    this.handlersMap = {};
  }

  clone() { return Element.clone(this); }

  getOffset() {
    const top = this.domElement.offsetTop,  ///
          left = this.domElement.offsetLeft,  ///
          offset = new Offset(top, left);

    return offset;
  }

  getBounds(includeBorder = false) {
    const boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);

    return bounds;
  }

  getWidth(includeBorder = false) {
    const width  = includeBorder ?
                     this.domElement.offsetWidth :
                       this.domElement.clientWidth;

    return width;
  }

  setWidth(width) { this.domElement.style.width = `${width}px`; }

  getHeight(includeBorder = false) {
    const height  = includeBorder ?
                      this.domElement.offsetHeight :
                        this.domElement.clientHeight;

    return height;
  }

  setHeight(height) { this.domElement.style.height = `${height}px`; }

  getAttribute(name) { return this.domElement.getAttribute(name); }

  setAttribute(name, value) { this.domElement.setAttribute(name, value); }

  clearAttribute(name) { this.domElement.removeAttribute(name); }

  addAttribute(name, value) { this.setAttribute(name, value); }

  removeAttribute(name) { this.clearAttribute(name); }

  setClass(className) { this.domElement.className = className; }

  addClass(className) { this.domElement.classList.add(className); }

  removeClass(className) { this.domElement.classList.remove(className); }

  toggleClass(className) { this.domElement.classList.toggle(className); }

  hasClass(className) { return this.domElement.classList.contains(className); }

  clearClasses() { this.domElement.className = ''; }

  prepend(elementOrString) {
    const domElement = domElementFromElementOrString(elementOrString),
          firstChildDOMElement = this.domElement.firstChild;

    this.domElement.insertBefore(domElement, firstChildDOMElement);
  }
  
  append(elementOrString) {
    const domElement = domElementFromElementOrString(elementOrString);

    this.domElement.insertBefore(domElement, null); ///
  }

  appendTo(parentElement) {
    const parentDOMElement = parentElement.domElement,
          firstSiblingDOMElement = parentDOMElement.firstChild; ///

    parentDOMElement.insertBefore(this.domElement, firstSiblingDOMElement);
  }

  prependTo(parentElement) {
    const parentDOMElement = parentElement.domElement;

    parentDOMElement.insertBefore(this.domElement, null); ///
  }

  removeFrom(parentElement) {
    const parentDOMElement = parentElement.domElement;

    parentDOMElement.removeChild(this.domElement);
  }

  remove(element) {
    if (element) {
      const domElement = element.domElement;

      this.domElement.removeChild(domElement);
    } else {
      this.domElement.remove();
    }
  }

  insertBefore(siblingElement) {
    const parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

    parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
  }

  insertAfter(siblingElement) {
    const parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

    parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling);  ///
  }

  show(displayStyle = 'block') { this.domElement.style.display = displayStyle; }

  hide() { this.domElement.style.display = 'none'; }

  enable() { this.clearAttribute('disabled'); }

  disable() { this.setAttribute('disabled', 'disabled'); }

  html(html) {
    if (html === undefined) {
      html = this.domElement.innerHTML; ///

      return html;
    } else {
      const innerHTML = html; ///

      this.domElement.innerHTML = innerHTML
    }
  }

  css(css) {
    if (css === undefined) {
      const computedStyle = getComputedStyle(this.domElement),
            css = {};

      for (let index = 0; index < computedStyle.length; index++) {
        const name = computedStyle[0],  ///
              value = computedStyle.getPropertyValue(name); ///

        css[name] = value;
      }

      return css;
    } else if (typeof css === 'string') {
      let name = css; ///

      const computedStyle = getComputedStyle(this.domElement),
            value = computedStyle.getPropertyValue(name); ///

      css = value;  ///

      return css;
    } else {
      const names = Object.keys(css); ///

      names.forEach(function(name) {
        const value = css[name];

        this.domElement.style[name] = value;
      }.bind(this));
    }
  }

  getDescendantElements(selector = '*') {
    const descendantDOMElements = this.domElement.querySelectorAll(selector),
          descendantElements = elementsFromDOMElements(descendantDOMElements);

    return descendantElements;
  }

  getChildElements(selector = '*') {
    const descendantDOMElements = this.domElement.querySelectorAll(selector),
          allChildDOMElements = this.domElement.children,
          childDOMElements = filter(allChildDOMElements, function(childDOMElement) {
            return some(descendantDOMElements, function(descendantDOMElement) {
              return (descendantDOMElement === childDOMElement);
            });
          }),
          childElements = elementsFromDOMElements(childDOMElements);

    return childElements;
  }

  getParentElement(selector = '*') {
    let parentElement = null;

    const parentDOMElement = this.domElement.parentElement;

    if (parentDOMElement !== null) {
      if (parentDOMElement.matches(selector)) {
        const parentDOMElements = [parentDOMElement],
              parentElements = elementsFromDOMElements(parentDOMElements),
              firstParentElement = first(parentElements);

        parentElement = firstParentElement || null;
      }
    }

    return parentElement;
  }

  getAscendantElements(selector = '*') {
    const ascendantDOMElements = [],
          parentDOMElement = this.domElement.parentElement;

    let ascendantDOMElement = parentDOMElement;  ///
    while (ascendantDOMElement !== null) {
      if (ascendantDOMElement.matches(selector)) {
        ascendantDOMElements.push(ascendantDOMElement);
      }

      ascendantDOMElement = ascendantDOMElement.parentElement;
    }

    const ascendantElements = elementsFromDOMElements(ascendantDOMElements);

    return ascendantElements;
  }

  static clone(Class, element, ...remainingArguments) {
    if (Class instanceof Element) {
      element = Class;
      remainingArguments.shift();
      Class = Element;
    }

    const deep = true,
          domElement = element.domElement.cloneNode(deep);

    remainingArguments.unshift(domElement);
    remainingArguments.unshift(null);

    return new (Function.prototype.bind.apply(Class, remainingArguments));
  }

  static fromHTML(Class, html, ...remainingArguments) {
    if (typeof Class === 'string') {
      html = Class;
      remainingArguments.shift();
      Class = Element;
    }

    const outerDOMElement = document.createElement('div');

    outerDOMElement.innerHTML = html;  ///

    const domElement = outerDOMElement.firstChild;

    remainingArguments.unshift(domElement);
    remainingArguments.unshift(null);

    return new (Function.prototype.bind.apply(Class, remainingArguments));
  }

  static fromDOMElement(Class, domElement, ...remainingArguments) {
    if (typeof Class === 'object') {
      domElement = Class;
      remainingArguments.shift();
      Class = Element;
    }

    remainingArguments.unshift(domElement);
    remainingArguments.unshift(null);

    return new (Function.prototype.bind.apply(Class, remainingArguments));
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const tagName = Class.tagName,
          customHandlerNames = Class.customHandlerNames,
          additionalProperties = Class.additionalPropertes,
          html = `<${tagName}></${tagName}>`,
          element = Element.fromHTML(Class, html, ...remainingArguments);

    element.applyProperties(properties, customHandlerNames, additionalProperties);

    return element;
  }
}

Object.assign(Element.prototype, jsxMixin);
Object.assign(Element.prototype, eventMixin);
Object.assign(Element.prototype, clickMixin);
Object.assign(Element.prototype, mouseMixin);
Object.assign(Element.prototype, resizeMixin);

Element.LEFT_MOUSE_BUTTON = 0;
Element.MIDDLE_MOUSE_BUTTON = 1;
Element.RIGHT_MOUSE_BUTTON = 2;

module.exports = Element;

function domElementFromSelector(selector) {
  const domElement = (typeof selector === 'string') ?
                       document.querySelectorAll(selector)[0] :  ///
                         selector;  ///

  return domElement;
}

function domElementFromElementOrString(elementOrString) {
  let domElement;

  if (typeof elementOrString === 'string') {
    const string = elementOrString; ///

    domElement = document.createTextNode(string); ///
  } else {
    const element = elementOrString;  ///

    domElement = element.domElement;
  }

  return domElement;
}

function elementsFromDOMElements(domElements) {
  const domElementsWithElements = filter(domElements, function(domElement) {
          return (domElement.__element__ !== undefined);
        }),
        elements = domElementsWithElements.map(function(domElement) {
          return domElement.__element__;
        });

  return elements;
}

function some(array, test) {
  let result = false;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    result = test(element);

    if (result) {
      result = true;

      break;
    }
  }

  return result;
}

function filter(array, test) {
  const filteredArray = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index],
          result = test(element);

    if (result) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
}

function first(array) { return array[0]; }
