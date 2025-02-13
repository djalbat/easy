"use strict";

import Offset from "./offset";
import Bounds from "./bounds";

import { constructElement, destroyElement } from "./utilities/element";
import { getParentElement, getAscendantElements, getNextSiblingElement, getPreviousSiblingElement } from "./mixins/element";

export default class TextElement {
  constructor(text) {
    const element = this, ///
          domElement = document.createTextNode(text); ///

    constructElement(element, domElement);
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

  getText() {
    const nodeValue = this.domElement.nodeValue,
          text = nodeValue; ///

    return text;
  }

  setText(text) {
    const nodeValue = text; ///

    this.domElement.nodeValue = nodeValue;
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

  destroy() {
    const element = this; ///

    destroyElement(element);
  }
}

Object.assign(TextElement.prototype, {
  getParentElement,
  getAscendantElements,
  getNextSiblingElement,
  getPreviousSiblingElement
});
