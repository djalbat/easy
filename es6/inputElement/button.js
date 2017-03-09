'use strict';

const InputElement = require('../inputElement');

class Button extends InputElement {
  constructor(selector, clickHandler, mouseButton, allowDefault) {
    super(selector);

    if (clickHandler) {
      this.onClick(clickHandler, mouseButton, allowDefault);
    }
  }

  clone(clickHandler, mouseButton, allowDefault) { return Button.clone(this, clickHandler, mouseButton, allowDefault); }

  static clone(element, clickHandler, mouseButton, allowDefault) {
    return InputElement.clone(Button, element, clickHandler, mouseButton, allowDefault);
  }

  static fromHTML(html, clickHandler, mouseButton, allowDefault) {
    return InputElement.fromHTML(Button, html, clickHandler, mouseButton, allowDefault);
  }

  static fromDOMElement(domElement, clickHandler, mouseButton, allowDefault) {
    return InputElement.fromDOMElement(Button, domElement, clickHandler, mouseButton, allowDefault);
  }

  static fromProperties(properties) {
    const html = '<button></button>',
          { onClick, button, allowDefault } = properties,
          clickHandler = onClick; ///

    return Button.fromHTML(html, clickHandler, button, allowDefault);
  }
}

module.exports = Button;
