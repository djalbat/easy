'use strict';

const Element = require('./element');

class InputElement extends Element {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler !== undefined) {
      this.onChange(changeHandler);
    }
  }

  onResize() {}

  offResize() {}

  onChange(changeHandler, intermediateChangeHandler = defaultIntermediateChangeHandler) {
    this.on('change', changeHandler, intermediateChangeHandler);
  }

  offChange(changeHandler) {
    this.off('change', changeHandler);
  }

  getValue() { return this.domElement.value; }

  getSelectionStart() { return this.domElement.selectionStart; }

  getSelectionEnd() { return this.domElement.selectionEnd; }
  
  isReadOnly() { return this.domElement.readOnly; }

  setValue(value) { this.domElement.value = value; }

  setSelectionStart(selectionStart) { this.domElement.selectionStart = selectionStart; }

  setSelectionEnd(selectionEnd) { this.domElement.selectionEnd = selectionEnd; }

  setReadOnly(readOnly) { this.domElement.readOnly = readOnly; }

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

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  const inputElement = element, ///
        value = inputElement.getValue();
  
  changeHandler.call(inputElement, value, event);
}
