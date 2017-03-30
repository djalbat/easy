'use strict';

const Element = require('../element');

class Button extends Element {
  constructor(selector, clickHandler) {
    super(selector);

    if (clickHandler !== undefined) {
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
    return Element.clone(Button, element, clickHandler);
  }

  static fromHTML(html, clickHandler) {
    return Element.fromHTML(Button, html, clickHandler);
  }

  static fromDOMElement(domElement, clickHandler) {
    return Element.fromDOMElement(Button, domElement, clickHandler);
  }

  static fromProperties(properties) {
    const { onClick } = properties,
          clickHandler = onClick; ///

    return Element.fromProperties(Button, properties, clickHandler);
  }
}

Object.assign(Button, {
  tagName: 'button',
  ignoredProperties: [
    'onClick'
  ]
});

module.exports = Button;

function defaultIntermediateClickHandler(handler, event, targetElement) {
  const mouseButton = event.button,
        preventDefault = handler(mouseButton, targetElement);

  return preventDefault;
}
