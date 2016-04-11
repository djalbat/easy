'use strict';

var Element = require('./element');

class Div extends Element {
  constructor(selectorOr$Element) {
    super(selectorOr$Element);
  }

  clone() { return Div.clone(this.$element); }

  static clone(selectorOr$Element) {
    return Element.clone(Div, selectorOr$Element);
  }

  static fromHTML(html) {
    return Element.fromHTML(Div, html);
  }

  static fromDOMElement(domElement) {
    return Element.fromDOMElement(Div, domElement);
  }
}

module.exports = Div;
