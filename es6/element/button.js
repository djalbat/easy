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

  onClick(clickHandler, intermediateClickHandler = defaultIntermediateClickHandler) {
    super.onClick(clickHandler, intermediateClickHandler);
  }

  offClick(clickHandler) {
    super.offClick(clickHandler);
  }

  static clone(element, clickHandler) { return Element.clone(Button, element, clickHandler); }

  static fromHTML(html, clickHandler) { return Element.fromHTML(Button, html, clickHandler); }

  static fromDOMElement(domElement, clickHandler) { return Element.fromDOMElement(Button, domElement, clickHandler); }

  static fromProperties(properties) {
    const { onClick } = properties,
          clickHandler = onClick, ///
          button = Element.fromProperties(Button, properties, clickHandler);
    
    return button;
  }
}

Object.assign(Button, {
  tagName: 'button',
  ignoredProperties: [
    'onClick'
  ]
});

module.exports = Button;

function defaultIntermediateClickHandler(clickHandler, event, targetElement) {
  const mouseButton = event.button,
        preventDefault = clickHandler(mouseButton, targetElement);

  return preventDefault;
}
