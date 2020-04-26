"use strict";

import Element from "../element";

export default class Select extends Element {
  constructor(selectorOrDOMElement, changeHandler = null) {
    super(selectorOrDOMElement);

    if (changeHandler !== null) {
      this.onChange(changeHandler);
    }
  }

  onChange(changeHandler) { this.on("change", changeHandler); }

  offChange(changeHandler) { this.off("change", changeHandler); }

  getSelectedOptionValue() {
    const value = this.domElement.value,  ///
          selectedOptionValue = value;  ///
    
    return selectedOptionValue;
  }

  setSelectedOptionByValue(selectedOptionValue) {
    const value = selectedOptionValue;  ///

    this.domElement.value = value;
  }

  static tagName = "select";

  static ignoredProperties = [
    "onChange"
  ];

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = Select;
    }

    const { onChange } = properties,
          changeHandler = onChange, ///
          select = Element.fromProperties(Class, properties, changeHandler);
    
    return select;
  }
}
