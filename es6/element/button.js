"use strict";

import Element from "../element";

export default class Button extends Element {
  constructor(selector, clickHandler) {
    super(selector);

    if (clickHandler !== undefined) {
      this.onClick(clickHandler);
    }
  }

  onClick(clickHandler, object, intermediateClickHandler = defaultIntermediateClickHandler) {
    super.onClick(clickHandler, object, intermediateClickHandler);
  }

  offClick(clickHandler, object) {
    super.offClick(clickHandler, object);
  }

  static tagName = "button";

  static ignoredProperties = [
    "onClick"
  ];

  static fromDOMElement(domElement, clickHandler) { return Element.fromDOMElement(Button, domElement, clickHandler); }

  static fromProperties(properties) {
    const { onClick } = properties,
          clickHandler = onClick, ///
          button = Element.fromProperties(Button, properties, clickHandler);
    
    return button;
  }
}

function defaultIntermediateClickHandler(clickHandler, event, element) {
  const { button } = event,
				mouseButton = button;	///
  
  clickHandler.call(element, mouseButton, event, element);
}
