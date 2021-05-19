"use strict";

import keyMixins from "./mixins/key";
import clickMixins from "./mixins/click";
import eventMixins from "./mixins/event";
import mouseMixins from "./mixins/mouse";

import { UNDEFINED } from "./constants";

class Document {
  constructor() {
    this.domElement = document; ///
  }
}

export default (typeof document === UNDEFINED) ? undefined : new Document();  ///

Object.assign(Document.prototype, keyMixins);
Object.assign(Document.prototype, clickMixins);
Object.assign(Document.prototype, eventMixins);
Object.assign(Document.prototype, mouseMixins);
