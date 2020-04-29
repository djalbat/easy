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

  static fromClass(Class, properties) {
    const { onClick } = properties,
          clickHandler = onClick, ///
          link = Element.fromClass(Class, properties, clickHandler);
    
    return link;
  }
}
