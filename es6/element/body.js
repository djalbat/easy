'use strict';

var Element = require('../element');

class Body extends Element {
  constructor(selector = 'body') {
    super(selector);
  }

  clone() { return Body.clone(this); }

  static clone(selectorOrElement) {
    return Element.clone(Body, selectorOrElement);
  }

  static fromHTML(html) {
    return Element.fromHTML(Body, html);
  }

  static fromDOMElement(domElement) {
    return Element.fromDOMElement(Body, domElement);
  }

  static fromProperties(properties) {
    var html = '<body></body>';

    return Body.fromHTML(html);
  }
}

module.exports = Body;
