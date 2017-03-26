'use strict';

const InputElement = require('../inputElement');

class Input extends InputElement {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler !== undefined) {
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

  onChange(handler) {
    if (handler.intermediateHandler === undefined) {
      handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
    }

    this.on('change', handler);
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
    const { onChange } = properties,
          changeHandler = onChange; ///    

    return InputElement.fromProperties(Input, properties, changeHandler);
  }
}

Object.assign(Input, {
  tagName: 'input',
  ignoredProperties: [
    'onChange'
  ]
});

module.exports = Input;

function defaultIntermediateChangeHandler(handler, event, targetElement) {
  const value = this.getValue(),
        preventDefault = handler(value, targetElement);

  return preventDefault;
}
