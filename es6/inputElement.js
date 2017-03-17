'use strict';

const Element = require('./element');

class InputElement extends Element {
  constructor(selector) {
    super(selector);
  }

  hasFocus() {
    const focus = (document.activeElement === this.domElement);  ///

    return focus;
  }

  focus() { this.domElement.focus(); }

  static clone(Class, element, ...remainingArguments) {
    return Element.clone(Class, element, remainingArguments);
  }

  static fromHTML(Class, html, ...remainingArguments) {
    return Element.fromHTML(Class, html, remainingArguments);
  }

  static fromDOMElement(Class, domElement, ...remainingArguments) {
    return Element.fromDOMElement(Class, domElement, remainingArguments);
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    return Element.fromProperties(Class, properties, remainingArguments);
  }
}

module.exports = InputElement;
