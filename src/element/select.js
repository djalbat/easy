"use strict";

import Element from "../element";
import changeMixins from "../mixins/change";

class Select extends Element {
  onResize(resizeHandler, element) {} ///

  offResize(resizeHandler, element) {}  ///

  getValue() { return this.domElement.value; }

  setValue(value) { this.domElement.value = value; }

  static tagName = "select";
}

Object.assign(Select.prototype, changeMixins);

export default Select;
