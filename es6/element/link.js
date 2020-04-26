"use strict";

import Element from "../element";

export default class Link extends Element {
  constructor(selector, clickHandler) {
    super(selector);

    if (clickHandler !== undefined) {
      this.onClick(clickHandler);
    }
  }

  onClick(clickHandler, object, intermediateClickHandler = defaultIntermediateClickHandler) {
    this.on("click", clickHandler, object, intermediateClickHandler);
  }
  
  offClick(clickHandler, object) {
    this.off("click", clickHandler, object);
  }

  static tagName = "a";

  static ignoredProperties = [
    "onClick"
  ];

  static fromHTML(html, clickHandler) { return Element.fromHTML(Link, html, clickHandler); }

  static fromDOMElement(domElement, clickHandler) { return Element.fromDOMElement(Link, domElement, clickHandler); }

  static fromProperties(properties) {
    const { onClick } = properties,
          clickHandler = onClick, ///
          link = Element.fromProperties(Link, properties, clickHandler);
    
    return link;
  }
}

function defaultIntermediateClickHandler(clickHandler, event, element) {
  const link = element, ///
        hrefAttribute = link.getAttribute("href"),
        href = hrefAttribute; ///
  
  clickHandler.call(element, href, event, element);
}