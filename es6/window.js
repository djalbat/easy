'use strict';

var $ = require('jquery');

class Window {
  constructor() {
    this.$element = $(window);  ///
  }

  onResize(handler) {
    this.$element.on('resize', handler);  ///
  }

  offResize(handler) {
    this.$element.off('resize', handler); ///
  }
}

var window = new Window();

module.exports = window;
