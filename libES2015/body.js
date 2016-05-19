'use strict';

var Element = require('./element');

class Body extends Element {
  constructor(selector) {
    if (selector === undefined) {
      selector = 'body';
    }

    super(selector);
  }

  clone() { return Body.clone(this.$element); }

  onClick(handler) {
    this.$element.click(function() {
      handler();

      return false;
    })
  }

  onDoubleClick(handler) {
    this.$element.dblclick(function() {
      handler();

      return false;
    })
  }

  static clone(selector) {
    return Element.clone(Body, selector);
  }

  static fromHTML(html) {
    return Element.fromHTML(Body, html);
  }

  static fromDOMElement(domElement) {
    return Element.fromDOMElement(Body, domElement);
  }
}

module.exports = Body;
