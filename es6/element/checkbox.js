"use strict";

import Element from "../element";

export default class Checkbox extends Element {
  constructor(selector, changeHandler, checked) {
    super(selector);

    this.check(checked);

    if (changeHandler !== null) {
      this.onChange(changeHandler);
    }
  }

  onChange(changeHandler) { this.on("click", changeHandler); } ///

  offChange(changeHandler) { this.off("click", changeHandler); } ///

  check(checked = true) { this.domElement.checked = checked; }

  isChecked() { return this.domElement.checked; }

  static tagName = "input";

  static ignoredProperties = [
    "onChange",
    "checked"
  ];

  static defaultProperties = {
    type: "checkbox"
  };

  static fromProperties(properties) {
    const { onChange = null, checked = false } = properties,
          changeHandler = onChange, ///
          checkbox = Element.fromProperties(Checkbox, properties, changeHandler, checked);
    
    return checkbox;
  }
}
