"use strict";

import Element from "../element";
import inputMixins from "../mixins/input";
import focusMixins from "../mixins/focus";

export default class Select extends Element {
  static tagName = "select";
}

Object.assign(Select.prototype, inputMixins);
Object.assign(Select.prototype, focusMixins);
