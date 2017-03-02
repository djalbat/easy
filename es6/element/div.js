'use strict';

var Element = require('../element');

class Div extends Element {
  constructor(selector) {
    super(selector);
  }

  clone() { return Div.clone(this); }

  static clone(selectorOrElement) {
    return Element.clone(Div, selectorOrElement);
  }

  static fromHTML(html) {
    return Element.fromHTML(Div, html);
  }

  static fromDOMElement(domElement) {
    return Element.fromDOMElement(Div, domElement);
  }

  static fromProperties(properties) {
    var html = '<div></div>';

    return Div.fromHTML(html);
  }
}

module.exports = Div;
