"use strict";

import keyMixins from "./mixins/key";
import clickMixins from "./mixins/click";
import eventMixins from "./mixins/event";
import mouseMixins from "./mixins/mouse";
import selectionMixins from "./mixins/selection";

import { UNDEFINED } from "./constants";

class Document {
  constructor() {
    this.domElement = document; ///
  }

  getDOMElement() {
    return this.domElement;
  }

  createRange() { return this.domElement.createRange(); }

  createTextNode(data) { return this.domElement.createTextNode(data); }
}

export default (typeof document === UNDEFINED) ? undefined : new Document();  ///

Object.assign(Document.prototype, keyMixins);
Object.assign(Document.prototype, clickMixins);
Object.assign(Document.prototype, eventMixins);
Object.assign(Document.prototype, mouseMixins);
Object.assign(Document.prototype, selectionMixins);
