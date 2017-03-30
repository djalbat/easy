'use strict';

const Element = require('./element');

class InputElement extends Element {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler !== undefined) {
      this.onChange(changeHandler);
    }
  }

  onChange(handler) {
    if (handler.intermediateHandler === undefined) {
      handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
    }

    this.on('change', handler);
  }

  offChange(handler) {
    this.off('change', handler);
  }

  getValue() { return this.domElement.value; }

  getSelectionStart() { return this.domElement.selectionStart; }

  getSelectionEnd() { return this.domElement.selectionEnd; }

  setValue(value) { this.domElement.value = value; }

  setSelectionStart(selectionStart) { this.domElement.selectionStart = selectionStart; }

  setSelectionEnd(selectionEnd) { this.domElement.selectionEnd = selectionEnd; }

  select() { this.domElement.select(); }

  static clone(Class, element, ...remainingArguments) {
    return Element.clone(Class, element, ...remainingArguments);
  }
  
  static fromHTML(Class, html, ...remainingArguments) {
    return Element.fromHTML(Class, html, ...remainingArguments);
  }

  static fromDOMElement(Class, domElement, ...remainingArguments) {
    return Element.fromDOMElement(Class, domElement, ...remainingArguments);
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const { onChange } = properties,
          changeHandler = onChange; ///

    return Element.fromProperties(Class, properties, changeHandler, ...remainingArguments);
  }
}

Object.assign(InputElement, {
  ignoredProperties: [
    'onChange'
  ]
});

module.exports = InputElement;

function defaultIntermediateChangeHandler(handler, event, targetElement) {
  const value = this.getValue(),
      preventDefault = handler(value, targetElement);

  return preventDefault;
}
