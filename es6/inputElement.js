'use strict';

const Element = require('./element');

class InputElement extends Element {
  constructor(selector) {
    super(selector);
  }

  hasFocus() {
    const focus = (document.activeElement === this.domElement);  ///

    return focus;
  }

  focus() {
    this.domElement.focus();
  }
}

module.exports = InputElement;
