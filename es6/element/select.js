"use strict";

import Element from "../element";

export default class Select extends Element {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler !== undefined) {
      this.onChange(changeHandler);
    }
  }

  onChange(changeHandler, object, intermediateChangeHandler = defaultIntermediateChangeHandler) {
    this.on("change", changeHandler, object, intermediateChangeHandler);
  }

  offChange(changeHandler, object) {
    this.off("change", changeHandler, object);
  }

  getSelectedOptionValue() {
    const domElement = this.getDOMElement(),
          selectedOptionValue = domElement.value;  ///
    
    return selectedOptionValue;
  }

  setSelectedOptionByValue(selectedOptionValue) {
    const value = selectedOptionValue,  ///
          domElement = this.getDOMElement();
    
    domElement.value = value; 
  }

  static tagName = "select";

  static ignoredProperties = [
    "onChange"
  ];

  static fromHTML(html, changeHandler) { return Element.fromHTML(Select, html, changeHandler); }

  static fromDOMElement(domElement, changeHandler) { return Element.fromDOMElement(Select, domElement, changeHandler); }

  static fromProperties(properties) {
    const { onChange } = properties,
          changeHandler = onChange, ///
          select = Element.fromProperties(Select, properties, changeHandler);
    
    return select;
  }
}

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  const select = element, ///
        selectedOptionValue = select.getSelectedOptionValue();
  
  changeHandler.call(element, selectedOptionValue, event, element);
}
