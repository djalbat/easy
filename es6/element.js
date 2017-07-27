'use strict';

const objectUtil = require('./util/object'),
      arrayUtil = require('./util/array'),
      domUtil = require('./util/dom'),
      Offset = require('./misc/offset'),
      Bounds = require('./misc/bounds'),
      jsxMixin = require('./mixin/jsx'),
      eventMixin = require('./mixin/event'),
      clickMixin = require('./mixin/click'),
      scrollMixin = require('./mixin/scroll'),
      resizeMixin = require('./mixin/resize'),
      mouseMixin = require('./mixin/mouse'),
      keyMixin = require('./mixin/key');

class Element {
  constructor(selector) {
    this.domElement = domUtil.domElementFromSelector(selector);

    this.domElement.__element__ = this; ///
  }

  clone() { return Element.clone(this); }
  
  getDOMElement() {
    return this.domElement;
  }

  getOffset() {
    const top = this.domElement.offsetTop,  ///
          left = this.domElement.offsetLeft,  ///
          offset = new Offset(top, left);

    return offset;
  }

  getBounds() {
    const boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);

    return bounds;
  }

  getWidth(includeBorder = true) {
    const width = includeBorder ?
                    this.domElement.offsetWidth :
                      this.domElement.clientWidth;

    return width;
  }

  setWidth(width) { this.domElement.style.width = width; }

  getHeight(includeBorder = true) {
    const height = includeBorder ?
                     this.domElement.offsetHeight :
                       this.domElement.clientHeight;

    return height;
  }

  setHeight(height) { this.domElement.style.height = height; }

  hasAttribute(name) { return this.domElement.hasAttribute(name); }

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

  prependTo(parentElement) { parentElement.prepend(this); }

  appendTo(parentElement) { parentElement.append(this); }

  addTo(parentElement) { parentElement.add(this); }

  removeFrom(parentElement) { parentElement.remove(this); }

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

  prepend(element) {
    const domElement = element.domElement,
          firstChildDOMElement = this.domElement.firstChild;

    this.domElement.insertBefore(domElement, firstChildDOMElement);
  }

  append(element) {
    const domElement = element.domElement;

    this.domElement.insertBefore(domElement, null); ///
  }

  add(element) { this.append(element); }

  remove(element) {
    if (element) {
      const domElement = element.domElement;

      this.domElement.removeChild(domElement);
    } else {
      this.domElement.remove();
    }
  }

  show(displayStyle = 'block') { this.display(displayStyle); }

  hide() { this.domElement.style.display = 'none'; }

  display(displayStyle) { this.domElement.style.display = displayStyle; }

  enable() { this.clearAttribute('disabled'); }

  disable() { this.setAttribute('disabled', 'disabled'); }

  isEnabled() {
    const disabled = this.isDisabled(),
          enabled = !disabled;

    return enabled;
  }

  isDisabled() {
    const disabled = this.hasAttribute('disabled');

    return disabled;
  }
  
  isDisplayed() { return (this.domElement.style.display !== 'none'); }    

  html(html) {
    if (html === undefined) {
      const innerHTML = this.domElement.innerHTML;

      html = innerHTML; ///

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

  blur() { this.domElement.blur(); }

  focus() { this.domElement.focus(); }

  hasFocus() {
    const focus = (document.activeElement === this.domElement);  ///

    return focus;
  }

  getDescendantElements(selector = '*') {
    const domNode = this.domElement,  ///
          descendantDOMNodes = domUtil.descendantDOMNodesFromDOMNode(domNode),
          descendantDOMElements = domUtil.filterDOMNodesBySelector(descendantDOMNodes, selector),
          descendantElements = domUtil.elementsFromDOMElements(descendantDOMElements);

    return descendantElements;
  }

  getChildElements(selector = '*') {
    const childDOMNodes = this.domElement.childNodes,
          childDOMElements = domUtil.filterDOMNodesBySelector(childDOMNodes, selector),
          childElements = domUtil.elementsFromDOMElements(childDOMElements);

    return childElements;
  }

  getParentElement(selector = '*') {
    let parentElement = null;

    const parentDOMElement = this.domElement.parentElement;

    if (parentDOMElement !== null) {
      if (parentDOMElement.matches(selector)) {
        const parentDOMElements = [parentDOMElement],
              parentElements = domUtil.elementsFromDOMElements(parentDOMElements),
              firstParentElement = arrayUtil.first(parentElements);

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

    const ascendantElements = domUtil.elementsFromDOMElements(ascendantDOMElements);

    return ascendantElements;
  }

  getPreviousSiblingElement(selector = '*') {
    let previousSiblingElement = null;

    const previousSiblingDOMNode = this.domElement.previousSibling;  ///

    if ((previousSiblingDOMNode !== null) && domUtil.domNodeMatchesSelector(previousSiblingDOMNode, selector)) {
      previousSiblingElement = previousSiblingDOMNode.__element__ || null;
    }

    return previousSiblingElement;
  }

  getNextSiblingElement(selector = '*') {
    let nextSiblingElement = null;

    const nextSiblingDOMNode = this.domElement.nextSibling;

    if ((nextSiblingDOMNode !== null) && domUtil.domNodeMatchesSelector(nextSiblingDOMNode, selector)) {
      nextSiblingElement = nextSiblingDOMNode.__element__ || null;
    }

    return nextSiblingElement;
  }

  static clone(Class, element, ...remainingArguments) {
    const deep = true,
          domElement = element.domElement.cloneNode(deep);

    remainingArguments.unshift(domElement);
    remainingArguments.unshift(null);

    return new (Function.prototype.bind.apply(Class, remainingArguments));
  }

  static fromHTML(Class, html, ...remainingArguments) {
    const outerDOMElement = document.createElement('div');

    outerDOMElement.innerHTML = html;  ///

    const domElement = outerDOMElement.firstChild;

    remainingArguments.unshift(domElement);
    remainingArguments.unshift(null);

    return new (Function.prototype.bind.apply(Class, remainingArguments));
  }

  static fromDOMElement(Class, domElement, ...remainingArguments) {
    remainingArguments.unshift(domElement);
    remainingArguments.unshift(null);

    return new (Function.prototype.bind.apply(Class, remainingArguments));
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const tagName = Class.tagName,
          html = `<${tagName} />`,
          element = Element.fromHTML(Class, html, ...remainingArguments),
          defaultProperties = defaultPropertiesFromClass(Class),
          ignoredProperties = ignoredPropertiesFromClass(Class);

    element.applyProperties(properties, defaultProperties, ignoredProperties);

    return element;
  }

  static fromString(string, properties, ...remainingArguments) {
    const tagName = string,  ///
          html = `<${tagName} />`,
          element = Element.fromHTML(Element, html, ...remainingArguments),
          defaultProperties = {}, ///
          ignoredProperties = []; ///

    element.applyProperties(properties, defaultProperties, ignoredProperties);

    return element;
  }
}

Object.assign(Element.prototype, jsxMixin);
Object.assign(Element.prototype, eventMixin);
Object.assign(Element.prototype, clickMixin);
Object.assign(Element.prototype, scrollMixin);
Object.assign(Element.prototype, resizeMixin);
Object.assign(Element.prototype, mouseMixin);
Object.assign(Element.prototype, keyMixin);

Object.assign(Element, {
  LEFT_MOUSE_BUTTON: 0,
  RIGHT_MOUSE_BUTTON: 2,
  MIDDLE_MOUSE_BUTTON: 1
});

module.exports = Element;

function defaultPropertiesFromClass(Class, defaultProperties = {}) {
  objectUtil.combine(defaultProperties, Class.defaultProperties);

  const superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    defaultPropertiesFromClass(superClass, defaultProperties);
  }

  return defaultProperties;
}

function ignoredPropertiesFromClass(Class, ignoredProperties = []) {
  arrayUtil.combine(ignoredProperties, Class.ignoredProperties);

  const superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    ignoredPropertiesFromClass(superClass, ignoredProperties);
  }

  return ignoredProperties;
}
