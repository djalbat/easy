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

  onFocus(handler) {
    this.on('focus', handler);
  }

  onBlur(handler) {
    this.on('blur', handler);
  }

  focus() {
    this.domElement.focus();
  }
}

module.exports = InputElement;
