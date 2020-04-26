"use strict";

import Element from "../element";

export default class Body extends Element {
  constructor(selectorOrDOMElement = "body") {
    super(selectorOrDOMElement);
  }

  static tagName = "body";

  static fromProperties(properties) { return Element.fromProperties(Body, properties); }
}
