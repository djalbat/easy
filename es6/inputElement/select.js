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

  static fromProperties(Class, properties) {
    if (arguments.length === 1) {
      properties = Class;
      Class = Select;
    }

    const { onChange } = properties,
          changeHandler = onChange;

    return InputElement.fromProperties(Class, properties, changeHandler);
  }
}

Select.tagName = 'select';

module.exports = Select;

function defaultIntermediateChangeHandler(handler, event) {
  const selectedOptionValue = this.getSelectedOptionValue(),
        preventDefault = handler(selectedOptionValue);

  return preventDefault;
}
