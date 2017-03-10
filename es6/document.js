'use strict';

const mixin = require('./mixin'),
      event = require('./mixin/event'),
      click = require('./mixin/click'),
      mouse = require('./mixin/mouse');

class Document {
  constructor() {
    this.domElement = document;

    this.handlersMap = {};
    
    mixin(event, this, Document);
    mixin(click, this, Document);
    mixin(mouse, this, Document);
  }
}

module.exports = new Document();  ///
