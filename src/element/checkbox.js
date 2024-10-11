"use strict";

import Element from "../element";
import inputMixins from "../mixins/input";
import focusMixins from "../mixins/focus";

export default class Checkbox extends Element {
  isChecked() { return this.domElement.checked; }

  check(checked = true) { this.domElement.checked = checked; }

  static tagName = "input";

  static defaultProperties = {
    type: "checkbox"
  };
}

Object.assign(Checkbox.prototype, inputMixins);
Object.assign(Checkbox.prototype, focusMixins);
