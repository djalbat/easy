'use strict';

const InputElement = require('../inputElement');

class Input extends InputElement {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone(changeHandler) { return Input.clone(this, changeHandler); }

  getValue() { return this.domElement.value; }
  
  getSelectionStart() { return this.domElement.selectionStart; }
  
  getSelectionEnd() { return this.domElement.selectionEnd; }
  
  setValue(value) { this.domElement.value = value; }
  
  setSelectionStart(selectionStart) { this.domElement.selectionStart = selectionStart; }
  
  setSelectionEnd(selectionEnd) { this.domElement.selectionEnd = selectionEnd; }

  onChange(handler, preventDefault = true, intermediateChangeHandler = defaultIntermediateChangeHandler.bind(this)) {
    this.on('change', handler, preventDefault, intermediateChangeHandler);
  }

  offChange(handler) {
    this.off('change', handler);
  }

  static clone(element, changeHandler) {
    return InputElement.clone(Input, element, changeHandler);
  }

  static fromHTML(html, changeHandler) {
    return InputElement.fromHTML(Input, html, changeHandler);
  }

  static fromDOMElement(domElement, changeHandler) {
    return InputElement.fromDOMElement(Input, domElement, changeHandler);
  }

  static fromProperties(properties) {
    const html = '<input />',
          { onChange } = properties,
          changeHandler = onChange;  ///

    return Input.fromHTML(html, changeHandler);
  }
}

module.exports = Input;

function defaultIntermediateChangeHandler(handler, event) {
  const value = this.getValue();

  handler(value);
}
