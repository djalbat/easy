'use strict';

var Element = require('../element');

class Span extends Element {
  constructor(selector) {
    super(selector);
  }

  clone() { return Span.clone(this); }

  static clone(selectorOrElement) {
    return Element.clone(Span, selectorOrElement);
  }

  static fromHTML(html) {
    return Element.fromHTML(Span, html);
  }

  static fromDOMElement(domElement) {
    return Element.fromDOMElement(Span, domElement);
  }
}

module.exports = Span;
