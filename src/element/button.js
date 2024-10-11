"use strict";

import Element from "../element";
import focusMixins from "../mixins/focus";

export default class Button extends Element {
  static tagName = "button";
}

Object.assign(Button.prototype, focusMixins);
