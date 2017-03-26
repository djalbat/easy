'use strict';

const InputElement = require('../inputElement');

class Select extends InputElement {
  constructor(selector, changeHandler, selectedOptionValue) {
    super(selector);

    if (changeHandler !== undefined) {
      this.onChange(changeHandler);
    }
    
    if (selectedOptionValue !== undefined) {
      this.setSelectedOptionByValue(selectedOptionValue);
    }
  }

  clone(changeHandler) { return Select.clone(this, changeHandler); }

  getSelectedOptionValue() { 
    const selectedOptionValue = this.domElement.value;  ///
    
    return selectedOptionValue;
  }

  setSelectedOptionByValue(selectedOptionValue) {
    const value = selectedOptionValue;  ///
    
    this.domElement.value = value; 
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
    const { onChange, selectedOptionValue } = properties,
          changeHandler = onChange; ///    

    return InputElement.fromProperties(Select, properties, changeHandler, selectedOptionValue);
  }
}

Object.assign(Select, {
  tagName: 'select',
  ignoredProperties: [
    'onChange'
  ]
});

module.exports = Select;

function defaultIntermediateChangeHandler(handler, event, targetElement) {
  const selectedOptionValue = this.getSelectedOptionValue(),
        preventDefault = handler(selectedOptionValue, targetElement);

  return preventDefault;
}
