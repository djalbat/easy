"use strict";

import Element from "../element";

export default class Button extends Element {
  constructor(selectorOrDOMElement, clickHandler = null) {
    super(selectorOrDOMElement);

    if (clickHandler !== null) {
      this.onClick(clickHandler);
    }
  }

  static tagName = "button";

  static ignoredProperties = [
    "onClick"
  ];

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = Button;
    }

    const { onClick } = properties,
          clickHandler = onClick, ///
          button = Element.fromProperties(Class, properties, clickHandler);
    
    return button;
  }
}
