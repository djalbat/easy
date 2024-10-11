"use strict";

import Element from "../element";
import inputMixins from "../mixins/input";
import focusMixins from "../mixins/focus";
import selectionMixins from "../mixins/selection";

export default class Textarea extends Element {
  onResize(resizeHandler, element) {} ///

  offResize(resizeHandler, element) {}  ///

  static tagName = "textarea";
}

Object.assign(Textarea.prototype, inputMixins);
Object.assign(Textarea.prototype, focusMixins);
Object.assign(Textarea.prototype, selectionMixins);
