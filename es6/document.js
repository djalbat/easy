'use strict';

const eventMixin = require('./mixin/event'),
      clickMixin = require('./mixin/click'),
      mouseMixin = require('./mixin/mouse'),
      keyMixin = require('./mixin/key');

class Document {
  constructor() {
    this.domElement = document;

    this.handlersMap = {};
  }
}

Object.assign(Document.prototype, eventMixin);
Object.assign(Document.prototype, clickMixin);
Object.assign(Document.prototype, mouseMixin);
Object.assign(Document.prototype, keyMixin);

module.exports = new Document();  ///
