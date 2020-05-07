"use strict";

import Element from "../element";

export default class Checkbox extends Element {
  constructor(selectorOrDOMElement, changeHandler, checked) {
    super(selectorOrDOMElement);

    this.check(checked);

    if (changeHandler !== null) {
      this.onChange(changeHandler);
    }
  }

  onChange(changeHandler, element) { this.on("click", changeHandler, element); } ///

  offChange(changeHandler, element) { this.off("click", changeHandler, element); } ///

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

  static fromClass(Class, properties) {
    const { onChange = null, checked = null } = properties,
          changeHandler = onChange, ///
          checkbox = Element.fromClass(Class, properties, changeHandler, checked);

    return checkbox;
  }
}
