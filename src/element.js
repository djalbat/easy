"use strict";

import Offset from "./offset";
import Bounds from "./bounds";
import jsxMixins from "./mixins/jsx";
import keyMixins from "./mixins/key";
import stateMixins from "./mixins/state";
import eventMixins from "./mixins/event";
import mouseMixins from "./mixins/mouse";
import clickMixins from "./mixins/click";
import touchMixins from "./mixins/touch";
import scrollMixins from "./mixins/scroll";
import resizeMixins from "./mixins/resize";
import elementMixins from "./mixins/element";
import fullScreenMixins from "./mixins/fullScreen";
import customEventMixins from "./mixins/customEvent";

import { combine } from "./utilities/object";
import { isSVGTagName } from "./utilities/name";
import { first, augment } from "./utilities/array";
import { constructElement, destroyElement, mountElement, unmountElement } from "./utilities/element";
import { NONE,
         BLOCK,
         WIDTH,
         STRING,
         HEIGHT,
         DISPLAY,
         DISABLED,
         EMPTY_STRING,
         SVG_NAMESPACE_URI,
         DEFAULT_PROPERTIES,
         IGNORED_PROPERTIES } from "./constants";

export default class Element {
  constructor(selector) {
    if (selector !== null) {
      const element =this,  ///
            domElement = document.querySelector(selector);

      constructElement(element, domElement);
    }
  }

  getDOMElement() {
    return this.domElement;
  }

  getOffset() {
    const offset = Offset.fromDOMElement(this.domElement);

    return offset;
  }

  getBounds() {
    const bounds = Bounds.fromDOMElement(this.domElement);

    return bounds;
  }

  getWidth() { return this.domElement.offsetWidth; }  ///

  getHeight() { return this.domElement.offsetHeight; }  ///

  getInnerWidth() { return this.domElement.clientWidth; } ///

  getInnerHeight() { return this.domElement.clientHeight; } ///

  setWidth(width) {
    width = `${width}px`; ///

    this.style(WIDTH, width);
  }

  setHeight(height) {
    height = `${height}px`; ///

    this.style(HEIGHT, height);
  }

  hasAttribute(name) { return this.domElement.hasAttribute(name); }

  getAttribute(name) { return this.domElement.getAttribute(name); }

  setAttribute(name, value) { this.domElement.setAttribute(name, value); }

  clearAttribute(name) { this.domElement.removeAttribute(name); }

  addAttribute(name, value) { this.setAttribute(name, value); }

  removeAttribute(name) { this.clearAttribute(name); }

  hasClass(className) { return this.domElement.classList.contains(className); }

  setClass(className) { this.domElement.className = className; }

  addClass(className) { this.domElement.classList.add(className); }

  removeClass(className) { this.domElement.classList.remove(className); }

  toggleClass(className) { this.domElement.classList.toggle(className); }

  removeAllClasses() { this.domElement.className = EMPTY_STRING; }

  addTo(parentElement) { parentElement.add(this); }

  appendTo(parentElement) { parentElement.append(this); }

  prependTo(parentElement) { parentElement.prepend(this); }

  removeFrom(parentElement) { parentElement.remove(this); }

  insert(element) { this.append(element); }

  add(element) { this.append(element); }

  remove(element) {
    if (element) {
      element.remove();

      return;
    }

    this.domElement.remove();
  }

  prepend(element) {
    const domElement = element.domElement,
          referenceDOMElement = this.domElement.firstChild;  ///

    this.domElement.insertBefore(domElement, referenceDOMElement);
  }

  append(element) {
    const domElement = element.domElement,
          referenceDOMElement = null; ///

    this.domElement.insertBefore(domElement, referenceDOMElement);
  }

  insertBefore(siblingElement) {
    const parentDOMNode = siblingElement.domElement.parentNode, ///
          referenceDOMElement = siblingElement.domElement;  ///

    parentDOMNode.insertBefore(this.domElement, referenceDOMElement);
  }

  insertAfter(siblingElement) {
    const parentDOMNode = siblingElement.domElement.parentNode, ///
          referenceDOMElement = siblingElement.domElement.nextSibling;  ///

    parentDOMNode.insertBefore(this.domElement, referenceDOMElement);
  }

  mount(element) {
    this.add(element);

    mountElement(element);
  }

  unmount(element) {
    unmountElement(element);

    this.remove(element);
  }

  mountBefore(siblingElement) {
    this.insertBefore(siblingElement);

    const element = this; ///

    mountElement(element);
  }

  mountAfter(siblingElement) {
    this.insertAfter(siblingElement);

    const element = this; ///

    mountElement(element);
  }

  show(displayStyle = BLOCK) { this.display(displayStyle); }

  hide() { this.style(DISPLAY, NONE); }

  display(display) { this.style(DISPLAY, display); }

  enable() { this.clearAttribute(DISABLED); }

  disable() { this.setAttribute(DISABLED, DISABLED); }

  isEnabled() {
    const disabled = this.isDisabled(),
          enabled = !disabled;

    return enabled;
  }

  isDisabled() {
    const disabled = this.hasAttribute(DISABLED);

    return disabled;
  }
  
  isDisplayed() {
    const display = this.css(DISPLAY),
          displayed = (display !== NONE);
    
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

  style(name, value = null) {
    if (value !== null) {
      this.domElement.style[name] = value;

      return;
    }

    const style = this.domElement.style[name];

    return style;
  }

  html(html = null) {
    if (html !== null) {
      const innerHTML = html; ///

      this.domElement.innerHTML = innerHTML

      return;
    }

    const innerHTML = this.domElement.innerHTML;

    html = innerHTML; ///

    return html;
  }

  css(css = null) {
    if (css === null) {
      css = {};

      const computedStyles = getComputedStyle(this.domElement); ///

      for (let index = 0; index < computedStyles.length; index++) {
        const computedStyle = computedStyles[index],
              name = computedStyle,  ///
              value = computedStyles.getPropertyValue(name); ///

        css[name] = value;
      }
    } else if (typeof css === STRING) {
      let name = css; ///

      const computedStyles = getComputedStyle(this.domElement), ///
            value = computedStyles.getPropertyValue(name); ///

      css = value;  ///
    } else {
      const names = Object.keys(css); ///

      names.forEach((name) => {
        const value = css[name];

        this.style(name, value);
      });
    }

    return css;
  }

  destroy() {
    const element = this; ///

    destroyElement(element);
  }

  static fromClass(Class, properties, ...remainingArguments) {
    const { tagName } = Class,
          element = elementFromTagName(Class, tagName, ...remainingArguments),
          defaultProperties = defaultPropertiesFromClass(Class),
          ignoredProperties = ignoredPropertiesFromClass(Class);

    element.applyProperties(properties, defaultProperties, ignoredProperties);

    element.initialise && element.initialise(); ///

    return element;
  }

  static fromTagName(tagName, properties, ...remainingArguments) {
    const Class = Element,  ///
          element = elementFromTagName(Class, tagName, ...remainingArguments),
          defaultProperties = {}, ///
          ignoredProperties = []; ///

    element.applyProperties(properties, defaultProperties, ignoredProperties);

    element.initialise && element.initialise(); ///

    return element;
  }
}

Object.assign(Element.prototype, jsxMixins);
Object.assign(Element.prototype, keyMixins);
Object.assign(Element.prototype, mouseMixins);
Object.assign(Element.prototype, clickMixins);
Object.assign(Element.prototype, stateMixins);
Object.assign(Element.prototype, eventMixins);
Object.assign(Element.prototype, touchMixins);
Object.assign(Element.prototype, scrollMixins);
Object.assign(Element.prototype, resizeMixins);
Object.assign(Element.prototype, elementMixins);
Object.assign(Element.prototype, fullScreenMixins);
Object.assign(Element.prototype, customEventMixins);

function elementFromTagName(Class, tagName, ...remainingArguments) {
  const selector = null,
        element = new (Function.prototype.bind.call(Class, null, selector, ...remainingArguments)),
        domElement = isSVGTagName(tagName) ?
                       document.createElementNS(SVG_NAMESPACE_URI, tagName) :
                         document.createElement(tagName);

  constructElement(element, domElement);

  return element;
}

function defaultPropertiesFromClass(Class, defaultProperties = {}) {
  if (Class.hasOwnProperty(DEFAULT_PROPERTIES)) {
    defaultProperties = combine(defaultProperties, Class[DEFAULT_PROPERTIES]);
  }

  const superClass = Object.getPrototypeOf(Class);  ///

  if (superClass !== null) {
    defaultProperties = defaultPropertiesFromClass(superClass, defaultProperties);
  }

  return defaultProperties;
}

function ignoredPropertiesFromClass(Class, ignoredProperties = []) {
  if (Class.hasOwnProperty(IGNORED_PROPERTIES)) {
    ignoredProperties = augment(ignoredProperties, Class[IGNORED_PROPERTIES], (ignoredProperty) => {
      if (!ignoredProperties.includes(ignoredProperty)) {
        return true;
      }
    });
  }

  const superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    ignoredProperties = ignoredPropertiesFromClass(superClass, ignoredProperties);
  }

  return ignoredProperties;
}
