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

  onResize(handler, object, intermediateHandler = defaultIntermediateResizeHandler) {
    const eventTypes = 'resize';
    
    this.on(eventTypes, handler, object, intermediateHandler);
  }

  offResize(handler, object) {
    const eventTypes = 'resize';

    this.off(eventTypes, handler, object);
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
        height = window.getHeight();
  
  handler(width, height, event, targetElement);
}
