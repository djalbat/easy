"use strict";

import Element from "../element";

export default class Body extends Element {
  constructor(selectorOrDOMElement = "body") {
    super(selectorOrDOMElement);
  }

  static tagName = "body";

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = Body;
    }

    return Element.fromProperties(Class, properties);
  }
}
