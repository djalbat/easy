"use strict";

import Element from "../element";

export default class Body extends Element {
  constructor(selector = "body") {
    super(selector);
  }

  static tagName = "body";

  static fromDOMElement(domElement) { return Element.fromDOMElement(Body, domElement); }

  static fromProperties(properties) { return Element.fromProperties(Body, properties); }
}
