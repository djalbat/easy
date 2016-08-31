'use strict';

var $ = require('jquery');

class Document {
  constructor() {
    this.$element = $(document);  ///
  }

  onKeyUp(handler) {
    this.$element.keyup(handler);
  }

  onKeyDown(handler) {
    this.$element.keydown(handler);
  }
}

module.exports = new Document();  ///
