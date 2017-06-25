'use strict';

const InputElement = require('../inputElement');

class Textarea extends InputElement {
  clone(changeHandler) { return Textarea.clone(this, changeHandler); }

  static clone(element, changeHandler) { return InputElement.clone(Textarea, element, changeHandler); }

  static fromHTML(html, changeHandler) { return InputElement.fromHTML(Textarea, html, changeHandler); }

  static fromDOMElement(domElement, changeHandler) { return InputElement.fromDOMElement(Textarea, domElement, changeHandler); }

  static fromProperties(properties) { return InputElement.fromProperties(Textarea, properties); }
}

Object.assign(Textarea, {
  tagName: 'textarea'
});

module.exports = Textarea;
