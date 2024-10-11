"use strict";

import Element from "../element";
import inputMixins from "../mixins/input";
import focusMixins from "../mixins/focus";

export default class Select extends Element {
  onResize(resizeHandler, element) {} ///

  offResize(resizeHandler, element) {}  ///

  getValue() { return this.domElement.value; }

  setValue(value) { this.domElement.value = value; }

  static tagName = "select";
}

Object.assign(Select.prototype, inputMixins);
Object.assign(Select.prototype, focusMixins);
