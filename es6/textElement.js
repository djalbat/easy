'use strict';

const Offset = require('./misc/offset'),
      Bounds = require('./misc/bounds');

class TextElement {
  constructor(text) {
    this.domElement = document.createTextNode(text); ///

    this.domElement.__element__ = this;
  }

  clone() { return TextElement.clone(this); }

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
    const width = this.domElement.clientWidth;

    return width;
  }

  getHeight() {
    const height = this.domElement.clientHeight;

    return height;
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

  remove() {
    this.domElement.remove();
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

  html(html) {
    if (html === undefined) {
      html = this.domElement.innerHTML; ///

      return html;
    } else {
      const innerHTML = html; ///

      this.domElement.innerHTML = innerHTML
    }
  }
}

module.exports = Element;
