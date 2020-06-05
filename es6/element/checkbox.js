"use strict";

import Element from "../element";
import changeMixins from "../mixins/change";

class Checkbox extends Element {
  isChecked() { return this.domElement.checked; }

  check(checked = true) { this.domElement.checked = checked; }

  static tagName = "input";

  static defaultProperties = {
    type: "checkbox"
  };
}

Object.assign(Select.prototype, changeMixins);

export default Checkbox;
