"use strict";

export default class Offset {
  constructor(top, left) {
    this.top = top;
    this.left = left;
  }

  getTop() {
    return this.top;
  }

  getLeft() {
    return this.left;
  }

  static fromDOMElement(domElement) {
    const { offsetTop, offsetLeft } = domElement,
          top = offsetTop,  ///
          left = offsetLeft,  ///
          offset = new Offset(top, left);

    return offset;
  }
}
