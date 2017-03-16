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
    if (handler.intermediateHandler === undefined) {
      handler.intermediateHandler = defaultIntermediateClickHandler;
    }
    
    super.onClick(handler);
  }

  offClick(handler) {
    super.offClick(handler);
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

  static fromProperties(Class, properties) {
    if (arguments.length === 1) {
      properties = Class;
      Class = Button;
    }

    return InputElement.fromProperties(Class, properties);
  }
}

Object.assign(Button, {
  tagName: 'button',
  customHandlerNames: [
    'onClick'
  ]
});

module.exports = Button;

function defaultIntermediateClickHandler(handler, event) {
  const mouseButton = event.button,
        preventDefault = handler(mouseButton);

  return preventDefault;
}
