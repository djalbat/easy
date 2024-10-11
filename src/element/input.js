"use strict";

import Element from "../element";
import inputMixins from "../mixins/input";
import focusMixins from "../mixins/focus";
import selectionMixins from "../mixins/selection";

export default class Input extends Element {
  onResize(resizeHandler, element) {} ///

  offResize(resizeHandler, element) {}  ///

  static tagName = "input";
}

Object.assign(Input.prototype, inputMixins);
Object.assign(Input.prototype, focusMixins);
Object.assign(Input.prototype, selectionMixins);
