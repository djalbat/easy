"use strict";

import Element from "../element";

export default class Link extends Element {
  constructor(selectorOrDOMElement, clickHandler = null) {
    super(selectorOrDOMElement);

    if (clickHandler !== null) {
      this.onClick(clickHandler);
    }
  }

  static tagName = "a";

  static ignoredProperties = [
    "onClick"
  ];

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = Link;
    }

    const { onClick } = properties,
          clickHandler = onClick, ///
          link = Element.fromProperties(Class, properties, clickHandler);
    
    return link;
  }
}
