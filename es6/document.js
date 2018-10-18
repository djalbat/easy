'use strict';

const keyMixins = require('./mixins/key'),
      eventMixins = require('./mixins/event'),
      clickMixins = require('./mixins/click'),
      mouseMixins = require('./mixins/mouse');

class Document {
  constructor() {
    this.domElement = document; ///
  }
}

Object.assign(Document.prototype, keyMixins);
Object.assign(Document.prototype, eventMixins);
Object.assign(Document.prototype, clickMixins);
Object.assign(Document.prototype, mouseMixins);

module.exports = (typeof document === 'undefined') ? undefined : new Document();  ///
