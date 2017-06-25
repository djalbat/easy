'use strict';

const Element = require('../element');

class Body extends Element {
  constructor(selector = 'body') {
    super(selector);
  }

  clone() { return Body.clone(this); }

  static clone(element) { return Element.clone(Body, element); }

  static fromHTML(html) { return Element.fromHTML(Body, html); }

  static fromDOMElement(domElement) { return Element.fromDOMElement(Body, domElement); }

  static fromProperties(properties) { return Element.fromProperties(Body, properties); }
}

Object.assign(Body, {
  tagName: 'body'
});

module.exports = Body;
