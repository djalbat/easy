"use strict";

import Element from "../element";

export default class Checkbox extends Element {
  isChecked() { return this.domElement.checked; }

  check(checked = true) { this.domElement.checked = checked; }

  static tagName = "input";

  static defaultProperties = {
    type: "checkbox"
  };
}
