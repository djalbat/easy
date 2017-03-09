'use strict';

const mixin = require('./mixin'),
      event = require('./mixin/event'),
      click = require('./mixin/click'),
      mouse = require('./mixin/mouse');

class Window {
  constructor() {
    this.domElement = window;

    // mixin(event, this, Window);
    // mixin(click, this, Window);
    // mixin(mouse, this, Window);
  }
  
  getWidth() { return this.domElement.innerWidth; } ///
  
  getHeight() { return this.domElement.innerHeight; } ///
  
  onResize(handler) {
    this.domElement.onResize(function() {
      const width = this.getWidth(),
            height = this.getHeight();
      
      handler(width, height);
    }.bind(this));
  }

  offResize(handler) {
    this.domElement.offResize(handler);
  }
}

module.exports = new Window();  ///
