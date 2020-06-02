"use strict";

import Element from "./element";

export default class InputElement extends Element {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler !== null) {
      this.onChange(changeHandler);
    }
  }

  onChange(changeHandler, element) { this.on("change", changeHandler, element); }

  offChange(changeHandler, element) { this.off("change", changeHandler, element); }

  onResize(resizeHandler, element) {} ///

  offResize(resizeHandler, element) {}  ///

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
    const { onChange = null } = properties,
          changeHandler = onChange; ///

    return Element.fromClass(Class, properties, changeHandler, ...remainingArguments);
  }
}
