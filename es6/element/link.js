"use strict";

import Element from "../element";

export default class Link extends Element {
  constructor(selector, clickHandler) {
    super(selector);

    if (clickHandler !== null) {
      this.onClick(clickHandler);
    }
  }

  static tagName = "a";

  static ignoredProperties = [
    "onClick"
  ];

  static fromProperties(properties) {
    const { onClick = null } = properties,
          clickHandler = onClick, ///
          link = Element.fromProperties(Link, properties, clickHandler);
    
    return link;
  }
}
