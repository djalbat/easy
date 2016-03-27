'use strict';

var Element = require('./element');

class InputElement extends Element {
  constructor(selectorOr$Element) {
    super(selectorOr$Element);
  }
}

InputElement.clone = Element.clone;
InputElement.fromHTML = Element.fromHTML;

module.exports = InputElement;
