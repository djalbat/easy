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

module.exports = new Window();  ///
