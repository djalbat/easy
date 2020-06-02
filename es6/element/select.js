"use strict";

import Element from "../element";

export default class Select extends Element {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler !== null) {
      this.onChange(changeHandler);
    }
  }

  onChange(changeHandler, element) { this.on("change", changeHandler, element); }

  offChange(changeHandler, element) { this.off("change", changeHandler, element); }

  getValue() { return this.domElement.value; }

  setValue(value) { this.domElement.value = value; }

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
