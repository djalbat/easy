'use strict';

var InputElement = require('./inputElement');

class Button extends InputElement {
  constructor(selector, clickHandler, button, allowDefault) {
    super(selector);

    if (clickHandler) {
      this.onClick(clickHandler, button, allowDefault);
    }
  }

  clone(clickHandler) { return Button.clone(this, clickHandler); }

  static clone(selectorOrElement, clickHandler) {
    return InputElement.clone(Button, selectorOrElement, clickHandler);
  }

  static fromHTML(html, clickHandler) {
    return InputElement.fromHTML(Button, html, clickHandler);
  }

  static fromDOMElement(domElement, clickHandler) {
    return InputElement.fromDOMElement(Button, domElement, clickHandler);
  }
}

module.exports = Button;
