'use strict';

const Element = require('../element');

class Div extends Element {
  constructor(selector) {
    super(selector);
  }

  clone() { return Div.clone(this); }

  static clone(element) {
    return Element.clone(Div, element);
  }

  static fromHTML(html) {
    return Element.fromHTML(Div, html);
  }

  static fromDOMElement(domElement) {
    return Element.fromDOMElement(Div, domElement);
  }

  static fromProperties(properties) {
    const html = '<div></div>';

    return Div.fromHTML(html);
  }
}

module.exports = Div;
