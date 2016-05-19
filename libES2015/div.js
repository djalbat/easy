'use strict';

var Element = require('./element');

class Div extends Element {
  constructor(selector) {
    super(selector);
  }

  clone() { return Div.clone(this.$element); }

  static clone(selector) {
    return Element.clone(Div, selector);
  }

  static fromHTML(html) {
    return Element.fromHTML(Div, html);
  }

  static fromDOMElement(domElement) {
    return Element.fromDOMElement(Div, domElement);
  }
}

module.exports = Div;
