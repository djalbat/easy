"use strict";

import Element from "../element";

export default class Span extends Element {
  clone() { return Span.clone(this); }

  onResize() {}

  offResize() {}

  static tagName = "span";

  static clone(element) { return Element.clone(Span, element); }

  static fromHTML(html) { return Element.fromHTML(Span, html); }

  static fromDOMElement(domElement) { return Element.fromDOMElement(Span, domElement); }

  static fromProperties(properties) { return Element.fromProperties(properties); }
}
