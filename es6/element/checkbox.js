"use strict";

import Element from "../element";

export default class Checkbox extends Element {
  constructor(selector, changeHandler, checked) {
    super(selector);

    if (changeHandler !== undefined) {
      this.onChange(changeHandler);
    }
    
    if (checked !== undefined) {
      this.check(checked);
    }
  }

  onChange(changeHandler, object, intermediateChangeHandler = defaultIntermediateChangeHandler) {
    this.on("click", changeHandler, object, intermediateChangeHandler);  ///
  }
  
  offChange(changeHandler, object) {
    this.off("click", changeHandler, object);  ///
  }

  check(checked = true) {
    const domElement = this.getDOMElement();

    domElement.checked = checked;
  }

  isChecked() {
    const domElement = this.getDOMElement(),
        checked = domElement.checked;

    return checked;
  }

  onResize() {}

  offResize() {}

  static tagName = "input";

  static ignoredProperties = [
    "onChange",
    "checked"
  ];

  static defaultProperties = {
    type: "checkbox"
  };

  static fromDOMElement(domElement, changeHandler) { return Element.fromDOMElement(Checkbox, domElement, changeHandler); }

  static fromProperties(properties) {
    const { onChange, checked } = properties,
          changeHandler = onChange, ///    
          checkbox = Element.fromProperties(Checkbox, properties, changeHandler, checked);
    
    return checkbox;
  }
}

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  const checkbox = element, ///
        checked = checkbox.isChecked();
  
  changeHandler.call(element, checked, event, element);
}
