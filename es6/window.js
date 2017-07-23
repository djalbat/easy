'use strict';

const eventMixin = require('./mixin/event'),
      clickMixin = require('./mixin/click'),
      mouseMixin = require('./mixin/mouse'),
      keyMixin = require('./mixin/key');

class Window {
  constructor() {
    this.domElement = window; ///
  }

  assign(...sources) {
    const target = this.domElement; ///

    Object.assign(target, ...sources);
  }
  
  getWidth() { return this.domElement.innerWidth; } ///
  
  getHeight() { return this.domElement.innerHeight; } ///

  getScrollTop() { return this.domElement.pageYOffset; }  ///

  getScrollLeft() { return this.domElement.pageXOffset; } ///

  onResize(handler) {
    if (handler.intermediateHandler === undefined) {
      handler.intermediateHandler = defaultIntermediateResizeHandler;
    }

    const eventType = 'resize';
    
    this.on(eventType, handler);
  }

  offResize(handler) {
    const eventType = 'resize';

    this.off(eventType, handler);
  }
}

Object.assign(Window.prototype, eventMixin);
Object.assign(Window.prototype, clickMixin);
Object.assign(Window.prototype, mouseMixin);
Object.assign(Window.prototype, keyMixin);

module.exports = new Window();  ///

function defaultIntermediateResizeHandler(handler, event, targetElement) {
  const window = targetElement, ///
        width = window.getWidth(),
        height = targetElement.getHeight();
  
  handler(width, height, event, targetElement);
}
