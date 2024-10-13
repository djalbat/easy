"use strict";

import Offset from "./offset";
import Bounds from "./bounds";

import { getParentElement, getAscendantElements, getNextSiblingElement, getPreviousSiblingElement } from "./mixins/element";

export default class TextElement {
  constructor(text) {
    this.domElement = document.createTextNode(text); ///

    this.domElement.__element__ = this; ///
  }

  getDOMElement() {
    return this.domElement;
  }

  getText() {
    const nodeValue = this.domElement.nodeValue,
          text = nodeValue; ///

    return text;
  }

  setText(text) {
    const nodeValue = text; ///

    this.domElement.nodeValue = nodeValue;
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

  getWidth() {
    const clientWidth = this.domElement.clientWidth,
          width = clientWidth;  ///

    return width;
  }

  getHeight() {
    const clientHeight = this.domElement.clientHeight,
          height = clientHeight;  ///

    return height;
  }

  prependTo(parentElement) { parentElement.prepend(this); }

  appendTo(parentElement) { parentElement.append(this); }

  addTo(parentElement) { parentElement.add(this); }

  removeFrom(parentElement) { parentElement.remove(this); }

  insertBefore(siblingElement) {
    const parentDOMNode = siblingElement.domElement.parentNode, ///
          siblingDOMElement = siblingElement.domElement;  ///

    parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
  }

  insertAfter(siblingElement) {
    const parentDOMNode = siblingElement.domElement.parentNode, ///
          siblingDOMElement = siblingElement.domElement;  ///

    parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling);  ///
  }

  remove() {
    this.domElement.remove();
  }
}

Object.assign(TextElement.prototype, {
  getParentElement,
  getAscendantElements,
  getNextSiblingElement,
  getPreviousSiblingElement
});
