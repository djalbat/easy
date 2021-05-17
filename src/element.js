"use strict";

import Offset from "./miscellaneous/offset";
import Bounds from "./miscellaneous/bounds";
import jsxMixins from "./mixins/jsx";
import keyMixins from "./mixins/key";
import clickMixins from "./mixins/click";
import stateMixins from "./mixins/state";
import eventMixins from "./mixins/event";
import mouseMixins from "./mixins/mouse";
import resizeMixins from "./mixins/resize";
import scrollMixins from "./mixins/scroll";
import elementMixins from "./mixins/element";

import { augment } from "./utilities/array";
import { combine } from "./utilities/object";
import { isSVGTagName } from "./utilities/name";
import { SVG_NAMESPACE_URI } from "./constants";

class Element {
  constructor(selector) {
    if (selector) {
      this.domElement = document.querySelector(selector);

      this.domElement.__element__ = this; ///
    }
  }

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

    this.style("width", width);
  }

  getHeight(includeBorder = true) {
    const height = includeBorder ?
                     this.domElement.offsetHeight :
                       this.domElement.clientHeight;

    return height;
  }

  setHeight(height) {
    height = `${height}px`; ///

    this.style("height", height);
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

  clearClasses() { this.domElement.className = ""; }

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

  mount(element) {
    const descendantElements = element.getDescendantElements(),
          elements = [
            element,
            ...descendantElements
          ];

    elements.reverse(); ///

    this.add(element);

    elements.forEach((element) => (element.didMount && element.didMount()));  ///
  }

  unmount(element) {
    const descendantElements = element.getDescendantElements(),
          elements = [
            element,
            ...descendantElements
          ];

    elements.forEach((element) => (element.willUnmount && element.willUnmount()));  ///

    this.remove(element);
  }

  show(displayStyle = "block") { this.display(displayStyle); }

  hide() { this.style("display", "none"); }

  display(display) { this.style("display", display); }

  enable() { this.clearAttribute("disabled"); }

  disable() { this.setAttribute("disabled", "disabled"); }

  isEnabled() {
    const disabled = this.isDisabled(),
          enabled = !disabled;

    return enabled;
  }

  isDisabled() {
    const disabled = this.hasAttribute("disabled");

    return disabled;
  }
  
  isDisplayed() {
    const display = this.css("display"),
          displayed = (display !== "none");
    
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
    } else if (typeof css === "string") {
      let name = css; ///

      const computedStyle = getComputedStyle(this.domElement),
            value = computedStyle.getPropertyValue(name); ///

      css = value;  ///

      return css;
    } else {
      const names = Object.keys(css); ///

      names.forEach((name) => {
        const value = css[name];

        this.style(name, value);
      });
    }
  }
  
  blur() { this.domElement.blur(); }

  focus() { this.domElement.focus(); }

  hasFocus() {
    const focus = (document.activeElement === this.domElement);  ///

    return focus;
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

  static fromClass(Class, properties, ...remainingArguments) {
    const { tagName } = Class,
          element = elementFromTagName(Class, tagName, ...remainingArguments),
          defaultProperties = defaultPropertiesFromClass(Class),
          ignoredProperties = ignoredPropertiesFromClass(Class);

    element.applyProperties(properties, defaultProperties, ignoredProperties);

    element.initialise && element.initialise(); ///

    return element;
  }
}

Object.assign(Element.prototype, jsxMixins);
Object.assign(Element.prototype, keyMixins);
Object.assign(Element.prototype, clickMixins);
Object.assign(Element.prototype, stateMixins);
Object.assign(Element.prototype, eventMixins);
Object.assign(Element.prototype, mouseMixins);
Object.assign(Element.prototype, resizeMixins);
Object.assign(Element.prototype, scrollMixins);
Object.assign(Element.prototype, elementMixins);

export default Element;

function elementFromTagName(Class, tagName, ...remainingArguments) {
  const selector = null,
        element = new (Function.prototype.bind.call(Class, null, selector, ...remainingArguments));

  element.domElement = isSVGTagName(tagName) ?
                         document.createElementNS(SVG_NAMESPACE_URI, tagName) :
                           document.createElement(tagName);

  element.domElement.__element__ = element; ///

  return element;
}

function defaultPropertiesFromClass(Class, defaultProperties = {}) {
  if (Class.hasOwnProperty("defaultProperties")) {
    combine(defaultProperties, Class.defaultProperties);
  }

  const superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    defaultPropertiesFromClass(superClass, defaultProperties);
  }

  return defaultProperties;
}

function ignoredPropertiesFromClass(Class, ignoredProperties = []) {
  if (Class.hasOwnProperty("ignoredProperties")) {
    augment(ignoredProperties, Class.ignoredProperties, (ignoredProperty) => !ignoredProperties.includes(ignoredProperty));
  }

  const superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    ignoredPropertiesFromClass(superClass, ignoredProperties);
  }

  return ignoredProperties;
}
