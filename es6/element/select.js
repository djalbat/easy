"use strict";

import Element from "../element";

export default class Select extends Element {
  constructor(selectorOrDOMElement, changeHandler) {
    super(selectorOrDOMElement);

    if (changeHandler !== null) {
      this.onChange(changeHandler);
    }
  }

  onChange(changeHandler, element) { this.on("change", changeHandler, element); }

  offChange(changeHandler, element) { this.off("change", changeHandler, element); }

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

  static fromClass(Class, properties) {
    const { onChange = null } = properties,
          changeHandler = onChange, ///
          select = Element.fromClass(Class, properties, changeHandler);
    
    return select;
  }
}
