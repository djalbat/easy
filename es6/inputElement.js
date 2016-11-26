'use strict';

var Element = require('./element');

class InputElement extends Element {
  constructor(selector) {
    super(selector);
  }

  hasFocus() {
    var focus = (document.activeElement === this.$element[0]);  ///

    return focus;
  }

  onFocus(focusHandler) {
    this.$element.focus(focusHandler);
  }

  onBlur(blurHandler) {
    this.$element.blur(blurHandler);
  }

  focus() {
    this.$element.focus();
  }
}

module.exports = InputElement;
