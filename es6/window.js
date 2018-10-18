'use strict';

const keyMixins = require('./mixins/key'),
      eventMixins = require('./mixins/event'),
      clickMixins = require('./mixins/click'),
      mouseMixins = require('./mixins/mouse');

class Window {
  constructor() {
    this.domElement = window; ///
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

Object.assign(Window.prototype, keyMixins);
Object.assign(Window.prototype, eventMixins);
Object.assign(Window.prototype, clickMixins);
Object.assign(Window.prototype, mouseMixins);

module.exports = (typeof window === 'undefined') ? undefined : new Window();  ///

function defaultIntermediateResizeHandler(handler, event, element) {
  const window = element, ///
        width = window.getWidth(),
        height = window.getHeight();
  
  handler.call(window, width, height, event);
}
