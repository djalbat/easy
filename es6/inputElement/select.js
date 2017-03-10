'use strict';

const InputElement = require('../inputElement');

class Select extends InputElement {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone(changeHandler) { return Select.clone(this, changeHandler); }

  getSelectedOptionValue() { return this.domElement.value; } ///

  setSelectedOptionByValue(value) { this.domElement.value = value; } ///

  onChange(handler) {
    const preventDefault = undefined; ///

    this.on('change', handler, preventDefault, intermediateChangeHandler.bind(this));
  }
  
  offChange(handler) {
    this.off('change', handler);
  }

  static clone(element, changeHandler) {
    return InputElement.clone(Select, element, changeHandler);
  }

  static fromHTML(html, changeHandler) {
    return InputElement.fromHTML(Select, html, changeHandler);
  }

  static fromDOMElement(domElement, changeHandler) {
    return InputElement.fromDOMElement(Select, domElement, changeHandler);
  }

  static fromProperties(properties) {
    const html = '<select></select>',
          { onChange } = properties,
          changeHandler = onChange; ///

    return Select.fromHTML(html, changeHandler);
  }
}

module.exports = Select;

function intermediateChangeHandler(handler, event) {
  const selectedOptionValue = this.getSelectedOptionValue();

  handler(selectedOptionValue);
}