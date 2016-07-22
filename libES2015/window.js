'use strict';

var $ = require('jquery');

class Window {
  constructor() {
    this.$element = $(window);  ///
  }

  onResize(handler) {
    this.$element.resize(handler);
  }
}

module.exports = new Window();  ///
