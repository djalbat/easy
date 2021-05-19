"use strict";

import Element from "./element";
import changeMixins from "./mixins/change";

import { CHANGE } from "./constants";

class InputElement extends Element {
  onChange(changeHandler, element) { this.on(CHANGE, changeHandler, element); }

  offChange(changeHandler, element) { this.off(CHANGE, changeHandler, element); }

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
}

Object.assign(InputElement.prototype, changeMixins);

export default InputElement;
