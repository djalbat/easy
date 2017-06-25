'use strict';

const InputElement = require('../inputElement');

class Input extends InputElement {
  clone(changeHandler) { return Input.clone(this, changeHandler); }

  static clone(element, changeHandler) { return InputElement.clone(Input, element, changeHandler); }

  static fromHTML(html, changeHandler) { return InputElement.fromHTML(Input, html, changeHandler); }

  static fromDOMElement(domElement, changeHandler) { return InputElement.fromDOMElement(Input, domElement, changeHandler); }

  static fromProperties(properties) { return InputElement.fromProperties(Input, properties); }
}

Object.assign(Input, {
  tagName: 'input'
});

module.exports = Input;
