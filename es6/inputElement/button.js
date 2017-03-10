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

  onClick(handler) {
    const preventDefault = undefined; ///
    
    super.onClick(handler, preventDefault, function(handler, event) {
      const mouseButton = event.button; ///

      handler(mouseButton);
    }.bind(this));
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
