"use strict";

import Element from "../element";

export default class Link extends Element {
  constructor(selectorOrDOMElement, clickHandler) {
    super(selectorOrDOMElement);

    if (clickHandler !== null) {
      this.onClick(clickHandler);
    }
  }

  getHRef() { return this.getAttribute("href"); }

  setHRef(href) { return this.setAttribute("href", href); }

  static tagName = "a";

  static ignoredProperties = [
    "onClick"
  ];

  static fromClass(Class, properties) {
    const { onClick = null } = properties,
          clickHandler = onClick, ///
          link = Element.fromClass(Class, properties, clickHandler);
    
    return link;
  }
}
