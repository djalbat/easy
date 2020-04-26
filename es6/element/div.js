"use strict";

import Element from "../element";

export default class Div extends Element {
  constructor(selector) {
    super(selector);
  }

  static tagName = "div";

  static fromDOMElement(domElement) { return Element.fromDOMElement(Div, domElement); }

  static fromProperties(properties) { return Element.fromProperties(Div, properties); }
}
