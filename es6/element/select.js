"use strict";

import Element from "../element";

export default class Select extends Element {
  constructor(selector, changeHandler) {
    super(selector);

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

  static fromProperties(properties) {
    const { onChange = null } = properties,
          changeHandler = onChange, ///
          select = Element.fromProperties(Select, properties, changeHandler);
    
    return select;
  }
}
