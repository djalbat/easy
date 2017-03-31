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
      handler.intermediateHandler = defaultIntermediateChangeHandler;
    }
    
    this.on('change', handler);
  }
  
  offChange(handler) {
    this.off('change', handler);
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

function defaultIntermediateChangeHandler(handler, event, targetElement) {
  const select = targetElement, ///
        selectedOptionValue = select.getSelectedOptionValue(),
        preventDefault = handler(selectedOptionValue, targetElement);

  return preventDefault;
}
