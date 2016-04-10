'use strict';

var $ = require('jquery');

class Document {
  constructor() {
    this.$element = $(document);  ///
  }

  onKeyUp(handler) {
    this.$element.onKeyUp(handler);
  }

  onKeyDown(handler) {
    this.$element.onKeyDown(handler);
  }
}

var document = new Document();

module.exports = document;
