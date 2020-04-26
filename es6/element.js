"use strict";

import Offset from "./miscellaneous/offset";
import Bounds from "./miscellaneous/bounds";

import { combine } from "./utilities/object";
import { isSVGTagName } from "./utilities/name";
import { first, augment } from "./utilities/array";
import { SVG_NAMESPACE_URI } from "./constants";
import { domNodeMatchesSelector, elementsFromDOMElements, filterDOMNodesBySelector, descendantDOMNodesFromDOMNode } from "./utilities/dom";

import { onClick, offClick } from "./mixins/click";
import { onResize, offResize } from "./mixins/resize";
import { getState, setState, updateState } from "./mixins/state";
import { onKeyUp, offKeyUp, onKeyDown, offKeyDown } from "./mixins/key";
import { on, off, addEventListener, removeEventListener } from "./mixins/event";
import { getContext, getProperties, assignContext, applyProperties } from "./mixins/jsx";
import { onScroll, offScroll, getScrollTop, getScrollLeft, setScrollTop, setScrollLeft } from "./mixins/scroll";
import { onMouseUp, onMouseDown, onMouseOver, onMouseOut, onMouseMove, offMouseUp, offMouseDown, offMouseOver, offMouseOut, offMouseMove } from "./mixins/mouse";

export default class Element {
  on = on;
  off = off;

  onClick = onClick;
  offClick = offClick;

  onResize = onResize;
  offResize = offResize;

  getState = getState;
  setState = setState;
  updateState = updateState;

  onKeyUp = onKeyUp;
  offKeyUp = offKeyUp;
  onKeyDown = onKeyDown;
  offKeyDown = offKeyDown;

  onMouseUp = onMouseUp;
  onMouseDown = onMouseDown;
  onMouseOver = onMouseOver;
  onMouseOut = onMouseOut;
  onMouseMove = onMouseMove;
  offMouseUp = offMouseUp;
  offMouseDown = offMouseDown;
  offMouseOver = offMouseOver;
  offMouseOut = offMouseOut;
  offMouseMove = offMouseMove;

  onScroll = onScroll;
  offScroll = offScroll;
  getScrollTop = getScrollTop;
  getScrollLeft = getScrollLeft;
  setScrollTop = setScrollTop;
  setScrollLeft = setScrollLeft;

  getContext = getContext;
  getProperties = getProperties;
  assignContext = assignContext;
  applyProperties = applyProperties;

  addEventListener = addEventListener;
  removeEventListener = removeEventListener;

  constructor(selectorOrDOMElement) {
    if (typeof selectorOrDOMElement === "string") {
      const selector = selectorOrDOMElement;

      this.domElement = document.querySelector(selector);
    } else {
      const domElement = selectorOrDOMElement;  ///

      this.domElement = domElement;
    }

    this.domElement.__element__ = this; ///
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
    const display = this.style("display"),
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

  getDescendantElements(selector = "*") {
    const domNode = this.domElement,  ///
          descendantDOMNodes = descendantDOMNodesFromDOMNode(domNode),
          descendantDOMElements = filterDOMNodesBySelector(descendantDOMNodes, selector),
          descendantElements = elementsFromDOMElements(descendantDOMElements);

    return descendantElements;
  }

  getChildElements(selector = "*") {
    const childDOMNodes = this.domElement.childNodes,
          childDOMElements = filterDOMNodesBySelector(childDOMNodes, selector),
          childElements = elementsFromDOMElements(childDOMElements);

    return childElements;
  }

  getParentElement(selector = "*") {
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

  getAscendantElements(selector = "*") {
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

  getPreviousSiblingElement(selector = "*") {
    let previousSiblingElement = null;

    const previousSiblingDOMNode = this.domElement.previousSibling;  ///

    if ((previousSiblingDOMNode !== null) && domNodeMatchesSelector(previousSiblingDOMNode, selector)) {
      previousSiblingElement = previousSiblingDOMNode.__element__ || null;
    }

    return previousSiblingElement;
  }

  getNextSiblingElement(selector = "*") {
    let nextSiblingElement = null;

    const nextSiblingDOMNode = this.domElement.nextSibling;

    if ((nextSiblingDOMNode !== null) && domNodeMatchesSelector(nextSiblingDOMNode, selector)) {
      nextSiblingElement = nextSiblingDOMNode.__element__ || null;
    }

    return nextSiblingElement;
  }

  static fromTagName(tagName, properties, ...remainingArguments) {
    const element = fromTagName(Element, tagName, ...remainingArguments),
          defaultProperties = {}, ///
          ignoredProperties = []; ///

    element.applyProperties(properties, defaultProperties, ignoredProperties);

    return element;
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const tagName = Class.tagName,
          element = fromTagName(Class, tagName, ...remainingArguments),
          defaultProperties = defaultPropertiesFromClass(Class),
          ignoredProperties = ignoredPropertiesFromClass(Class);

    element.applyProperties(properties, defaultProperties, ignoredProperties);

    return element;
  }
}

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
  if (Class.hasOwnProperty("className")) {
    const className = (defaultProperties.className === undefined) ?
                        Class.className :
                          `${defaultProperties.className} ${Class.className}`;

    Object.assign(defaultProperties, {
      className
    });
  }

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
