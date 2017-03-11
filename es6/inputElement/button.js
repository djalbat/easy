'use strict';

const InputElement = require('../inputElement');

class Button extends InputElement {
  constructor(selector, clickHandler) {
    super(selector);

    if (clickHandler) {
      this.onClick(clickHandler);
    }
  }

  clone(clickHandler) { return Button.clone(this, clickHandler); }

  onClick(handler, preventDefault, intermediateChangeHandler = defaultIntermediateChangeHandler.bind(this)) {
    super.onClick(handler, preventDefault, intermediateChangeHandler);
  }

  static clone(element, clickHandler) {
    return InputElement.clone(Button, element, clickHandler);
  }

  static fromHTML(html, clickHandler) {
    return InputElement.fromHTML(Button, html, clickHandler);
  }

  static fromDOMElement(domElement, clickHandler) {
    return InputElement.fromDOMElement(Button, domElement, clickHandler);
  }

  static fromProperties(properties) {
    const html = '<button></button>',
          { onClick } = properties,
          clickHandler = onClick; ///

    return Button.fromHTML(html, clickHandler);
  }
}

module.exports = Button;

function defaultIntermediateChangeHandler(handler, event) {
  const mouseButton = event.button; ///

  handler(mouseButton);
}