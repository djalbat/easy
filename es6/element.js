'use strict';

const Offset = require('./miscellaneous/offset'),
      Bounds = require('./miscellaneous/bounds'),
      constants = require('./constants'),
      jsxMixins = require('./mixins/jsx'),
      keyMixins = require('./mixins/key'),
      stateMixins = require('./mixins/state'),
      mouseMixins = require('./mixins/mouse'),
      eventMixins = require('./mixins/event'),
      clickMixins = require('./mixins/click'),
      scrollMixins = require('./mixins/scroll'),
      resizeMixins = require('./mixins/resize'),
      domUtilities = require('./utilities/dom'),
      nameUtilities = require('./utilities/name'),
      arrayUtilities = require('./utilities/array'),
      objectUtilities = require('./utilities/object');

const { combine } = objectUtilities,
      { isSVGTagName } = nameUtilities,
      { first, augment } = arrayUtilities,
      { SVG_NAMESPACE_URI } = constants,
      { domNodeMatchesSelector, domElementFromSelector, elementsFromDOMElements, filterDOMNodesBySelector, descendantDOMNodesFromDOMNode } = domUtilities;

class Element {
  constructor(selector) {
    this.domElement = domElementFromSelector(selector);

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

  setWidth(width) {
    width = `${width}px`; ///

    this.style('width', width);
  }

  getHeight(includeBorder = true) {
    const height = includeBorder ?
                     this.domElement.offsetHeight :
                       this.domElement.clientHeight;

    return height;
  }

  setHeight(height) {
    height = `${height}px`; ///

    this.style('height', height);
  }

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

  hide() { this.style('display', 'none'); }

  display(display) { this.style('display', display); }

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
  
  isDisplayed() {
    const display = this.style('display'),
          displayed = (display !== 'none');
    
    return displayed;
  }

  isShowing() {
    const displayed = this.isDisplayed(),
          showing = displayed;  ///

    return showing;
  }

  isHidden() {
    const displayed = this.isDisplayed(),
          hidden = !displayed;

    return hidden;
  }

  style(name, value) {
    if (value !== undefined) {
      this.domElement.style[name] = value;
    } else {
      const style = this.domElement.style[name];

      return style;
    }
  }

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

        this.style(name, value);
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
          descendantDOMNodes = descendantDOMNodesFromDOMNode(domNode),
          descendantDOMElements = filterDOMNodesBySelector(descendantDOMNodes, selector),
          descendantElements = elementsFromDOMElements(descendantDOMElements);

    return descendantElements;
  }

  getChildElements(selector = '*') {
    const childDOMNodes = this.domElement.childNodes,
          childDOMElements = filterDOMNodesBySelector(childDOMNodes, selector),
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

  getPreviousSiblingElement(selector = '*') {
    let previousSiblingElement = null;

    const previousSiblingDOMNode = this.domElement.previousSibling;  ///

    if ((previousSiblingDOMNode !== null) && domNodeMatchesSelector(previousSiblingDOMNode, selector)) {
      previousSiblingElement = previousSiblingDOMNode.__element__ || null;
    }

    return previousSiblingElement;
  }

  getNextSiblingElement(selector = '*') {
    let nextSiblingElement = null;

    const nextSiblingDOMNode = this.domElement.nextSibling;

    if ((nextSiblingDOMNode !== null) && domNodeMatchesSelector(nextSiblingDOMNode, selector)) {
      nextSiblingElement = nextSiblingDOMNode.__element__ || null;
    }

    return nextSiblingElement;
  }

  static clone(Class, element, ...remainingArguments) {
    const deep = true,
          domElement = element.domElement.cloneNode(deep);

    return fromDOMElement(Class, domElement, ...remainingArguments);
  }

  static fromHTML(Class, html, ...remainingArguments) {
    const outerDOMElement = document.createElement('div');

    outerDOMElement.innerHTML = html;  ///

    const domElement = outerDOMElement.firstChild;

    return fromDOMElement(Class, domElement, ...remainingArguments);
  }

  static fromDOMElement(Class, domElement, ...remainingArguments) {
    return fromDOMElement(Class, domElement, ...remainingArguments);
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const tagName = Class.tagName,
          element = fromTagName(Class, tagName, ...remainingArguments),
          defaultProperties = defaultPropertiesFromClass(Class),
          ignoredProperties = ignoredPropertiesFromClass(Class);

    element.applyProperties(properties, defaultProperties, ignoredProperties);

    return element;
  }

  static fromTagName(tagName, properties, ...remainingArguments) {
    const element = fromTagName(Element, tagName, ...remainingArguments),
          defaultProperties = {}, ///
          ignoredProperties = []; ///

    element.applyProperties(properties, defaultProperties, ignoredProperties);

    return element;
  }
}

Object.assign(Element.prototype, jsxMixins);
Object.assign(Element.prototype, keyMixins);
Object.assign(Element.prototype, stateMixins);
Object.assign(Element.prototype, mouseMixins);
Object.assign(Element.prototype, eventMixins);
Object.assign(Element.prototype, clickMixins);
Object.assign(Element.prototype, scrollMixins);
Object.assign(Element.prototype, resizeMixins);

Object.assign(Element, {
  LEFT_MOUSE_BUTTON: 0,
  RIGHT_MOUSE_BUTTON: 2,
  MIDDLE_MOUSE_BUTTON: 1
});

module.exports = Element;

function fromTagName(Class, tagName, ...remainingArguments) {
  const domElement = isSVGTagName(tagName) ?
                       document.createElementNS(SVG_NAMESPACE_URI, tagName) :
                         document.createElement(tagName);

  return fromDOMElement(Class, domElement, ...remainingArguments);
}

function fromDOMElement(Class, domElement, ...remainingArguments) {
  remainingArguments.unshift(domElement);

  remainingArguments.unshift(null);

  return new (Function.prototype.bind.call(Class, ...remainingArguments));
}

function defaultPropertiesFromClass(Class, defaultProperties = {}) {
  if (Class.hasOwnProperty('defaultProperties')) {
    combine(defaultProperties, Class.defaultProperties);
  }

  const superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    defaultPropertiesFromClass(superClass, defaultProperties);
  }

  return defaultProperties;
}

function ignoredPropertiesFromClass(Class, ignoredProperties = []) {
  if (Class.hasOwnProperty('ignoredProperties')) {
    augment(ignoredProperties, Class.ignoredProperties, function(ignoredProperty) {
      return !ignoredProperties.includes(ignoredProperty);
    });
  }

  const superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    ignoredPropertiesFromClass(superClass, ignoredProperties);
  }

  return ignoredProperties;
}
