'use strict';

const Element = require('../element');

class Body extends Element {
  constructor(selector = 'body') {
    super(selector);
  }

  clone() { return Body.clone(this); }

  static clone(element) {
    return Element.clone(Body, element);
  }

  static fromHTML(html) {
    return Element.fromHTML(Body, html);
  }

  static fromDOMElement(domElement) {
    return Element.fromDOMElement(Body, domElement);
  }

  static fromProperties(properties) {
    const html = '<body></body>',
          body = Body.fromHTML(html);
    
    body.applyProperties(properties);
    
    return body;
  }
}

module.exports = Body;
