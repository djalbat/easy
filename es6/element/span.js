"use strict";

import Element from "../element";

export default class Span extends Element {
  onResize() {}

  offResize() {}

  static tagName = "span";

  static fromHTML(html) { return Element.fromHTML(Span, html); }

  static fromDOMElement(domElement) { return Element.fromDOMElement(Span, domElement); }

  static fromProperties(properties) { return Element.fromProperties(properties); }
}
