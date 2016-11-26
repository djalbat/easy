'use strict';

var $ = require('jquery');

class Window {
  onResize(handler) {
    $(window).on('resize', handler);  ///
  }

  offResize(handler) {
    $(window).off('resize', handler); ///
  }
}

var window = new Window();

module.exports = window;
