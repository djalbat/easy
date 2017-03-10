'use strict';

const mixin = require('./mixin'),
      event = require('./mixin/event'),
      click = require('./mixin/click'),
      mouse = require('./mixin/mouse');

class Window {
  constructor() {
    this.domElement = window;

    this.handlersMap = {};

    mixin(event, this, Window);
    mixin(click, this, Window);
    mixin(mouse, this, Window);
  }
  
  getWidth() { return this.domElement.innerWidth; } ///
  
  getHeight() { return this.domElement.innerHeight; } ///
  
  onResize(handler) {
    const type = 'resize',
          addEventListener = this.addHandler(type, handler);

    if (addEventListener) {
      this.domElement.addEventListener(type, eventListener.bind(this));
    }
  }

  offResize(handler) {
    const type = 'resize',
          removeEventListener = this.removeHandler(type, handler);

    if (removeEventListener) {
      this.domElement.removeEventListener(type, eventListener.bind(this));
    }
  }
}

module.exports = new Window();  ///

function eventListener(event) {
  const type = event.type,
        handlers = this.handlersMap[type],
        width = this.getWidth(),
        height = this.getHeight();

  handlers.forEach(function(handler) {
    handler(width, height);
  });
}
