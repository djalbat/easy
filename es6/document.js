"use strict";

import keyMixins from "./mixins/key";
import eventMixins from "./mixins/event";
import clickMixins from "./mixins/click";
import mouseMixins from "./mixins/mouse";

class Document {
  constructor() {
    this.domElement = document; ///
  }
}

Object.assign(Document.prototype, keyMixins);
Object.assign(Document.prototype, eventMixins);
Object.assign(Document.prototype, clickMixins);
Object.assign(Document.prototype, mouseMixins);

module.exports = (typeof document === "undefined") ? undefined : new Document();  ///
