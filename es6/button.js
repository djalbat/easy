'use strict';

var InputElement = require('./inputElement');

class Button extends InputElement {
  constructor(selector, clickHandler, button, allowDefault) {
    super(selector);

    if (clickHandler) {
      this.onClick(clickHandler, button, allowDefault);
    }
  }

  clone(clickHandler, button, allowDefault) { return Button.clone(this, clickHandler, button, allowDefault); }

  static clone(selectorOrElement, clickHandler, button, allowDefault) {
    return InputElement.clone(Button, selectorOrElement, clickHandler, button, allowDefault);
  }

  static fromHTML(html, clickHandler, button, allowDefault) {
    return InputElement.fromHTML(Button, html, clickHandler, button, allowDefault);
  }

  static fromDOMElement(domElement, clickHandler, button, allowDefault) {
    return InputElement.fromDOMElement(Button, domElement, clickHandler, button, allowDefault);
  }
}

module.exports = Button;
