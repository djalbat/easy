'use strict';

const Element = require('../element');

class Div extends Element {
  constructor(selector) {
    super(selector);
  }

  clone() { return Div.clone(this); }

  static clone(element) { return Element.clone(Div, element); }

  static fromHTML(html) { return Element.fromHTML(Div, html); }

  static fromDOMElement(domElement) { return Element.fromDOMElement(Div, domElement); }

  static fromProperties(properties) { return Element.fromProperties(Div, properties); }
}

Object.assign(Div, {
  tagName: 'div'
});

module.exports = Div;
