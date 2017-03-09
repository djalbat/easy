'use strict';

const Element = require('../element');

class Span extends Element {
  constructor(selector) {
    super(selector);
  }

  clone() { return Span.clone(this); }

  static clone(element) {
    return Element.clone(Span, element);
  }

  static fromHTML(html) {
    return Element.fromHTML(Span, html);
  }

  static fromDOMElement(domElement) {
    return Element.fromDOMElement(Span, domElement);
  }

  static fromProperties(properties) {
    const html = '<span></span>';

    return Span.fromHTML(html);
  }
}

module.exports = Span;
