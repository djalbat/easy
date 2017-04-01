'use strict';

const Element = require('../element');

class Select extends Element {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler !== undefined) {
      this.onChange(changeHandler);
    }
  }

  clone(changeHandler) { return Select.clone(this, changeHandler); }

  onChange(changeHandler, intermediateChangeHandler = defaultIntermediateChangeHandler) {
    this.on('change', changeHandler, intermediateChangeHandler);
  }

  offChange(changeHandler) {
    this.off('change', changeHandler);
  }

  getSelectedOptionValue() {
    const selectedOptionValue = this.domElement.value;  ///
    
    return selectedOptionValue;
  }

  setSelectedOptionByValue(selectedOptionValue) {
    const value = selectedOptionValue;  ///
    
    this.domElement.value = value; 
  }

  static clone(element, changeHandler) {
    return Element.clone(Select, element, changeHandler);
  }

  static fromHTML(html, changeHandler) {
    return Element.fromHTML(Select, html, changeHandler);
  }

  static fromDOMElement(domElement, changeHandler) {
    return Element.fromDOMElement(Select, domElement, changeHandler);
  }

  static fromProperties(properties) {
    const { onChange } = properties,
          changeHandler = onChange; ///    

    return Element.fromProperties(Select, properties, changeHandler);
  }
}

Object.assign(Select, {
  tagName: 'select',
  ignoredProperties: [
    'onChange'
  ]
});

module.exports = Select;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  const select = targetElement, ///
        selectedOptionValue = select.getSelectedOptionValue(),
        preventDefault = changeHandler(selectedOptionValue, targetElement);

  return preventDefault;
}
