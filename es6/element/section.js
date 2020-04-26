"use strict";

import Element from "../element";

export default class Section extends Element {
  constructor(selector) {
    super(selector);
  }

  static tagName = "div";

  static fromHTML(html) { return Element.fromHTML(Section, html); }

  static fromDOMElement(domElement) { return Element.fromDOMElement(Section, domElement); }

  static fromProperties(properties) { return Element.fromProperties(Section, properties); }
}
