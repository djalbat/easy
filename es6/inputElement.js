"use strict";

import Element from "./element";

export default class InputElement extends Element {
  onChange = onChange;
  offChange = offChange;

  onResize = onResize;
  offResize = offResize;

  constructor(selectorOrDOMElement, changeHandler) {
    super(selectorOrDOMElement);

    if (changeHandler !== null) {
      this.onChange(changeHandler);
    }
  }

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

function onChange(changeHandler, element) { this.on("change", changeHandler, element); }

function offChange(changeHandler, element) { this.off("change", changeHandler, element); }

function onResize(resizeHandler, element) {} ///

function offResize(resizeHandler, element) {}  ///
