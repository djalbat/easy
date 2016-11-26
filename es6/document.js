'use strict';

var $ = require('jquery');

class Document {
  onKeyUp(handler) {
    $(document).keyup(handler); ///
  }

  onKeyDown(handler) {
    $(document).keydown(handler); ///
  }
}

module.exports = new Document();  ///
