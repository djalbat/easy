"use strict";

import Element from "./element";

export default class InputElement extends Element {
  constructor(selectorOrDOMElement, changeHandler = null) {
    super(selectorOrDOMElement);

    if (changeHandler !== null) {
      this.onChange(changeHandler);
    }
  }

  onResize() {}

  offResize() {}

  onChange(changeHandler) { this.on("change", changeHandler); }

  offChange(changeHandler) { this.off("change", changeHandler); }

  getValue() { return this.domElement.value; }

  getSelectionStart() { return this.domElement.selectionStart; }

  getSelectionEnd() { return this.domElement.selectionEnd; }
  
  isReadOnly() { return this.domElement.readOnly; }

  setValue(value) { this.domElement.value = value; }

  setSelectionStart(selectionStart) { this.domElement.selectionStart = selectionStart; }

  setSelectionEnd(selectionEnd) { this.domElement.selectionEnd = selectionEnd; }

  setReadOnly(readOnly) { this.domElement.readOnly = readOnly; }

  select() { this.domElement.select(); }

  static ignoredProperties = [
    "onChange"
  ];

  static fromClass(Class, properties, ...remainingArguments) {
    const { onChange } = properties,
          changeHandler = onChange; ///

    return Element.fromClass(Class, properties, changeHandler, ...remainingArguments);
  }
}
