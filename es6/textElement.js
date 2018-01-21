'use strict';

const Offset = require('./miscellaneous/offset'),
      Bounds = require('./miscellaneous/bounds');

class TextElement {
  constructor(text) {
    this.domElement = document.createTextNode(text); ///

    this.domElement.__element__ = this;
  }

  clone() { return TextElement.clone(this); }

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
    const width = this.domElement.clientWidth;

    return width;
  }

  getHeight() {
    const height = this.domElement.clientHeight;

    return height;
  }

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

  remove() {
    this.domElement.remove();
  }
}

module.exports = TextElement;
