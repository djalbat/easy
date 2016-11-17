'use strict';

var $ = require('jquery');

class Window {
  constructor() {
    this.$element = $(window);  ///
  }

  onResize(handler) {
    this.$element.on('resize', handler);
  }

  offResize(handler) {
    this.$element.off('resize', handler);
  }
}

module.exports = new Window();  ///
