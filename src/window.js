"use strict";

import keyMixins from "./mixins/key";
import eventMixins from "./mixins/event";
import mouseMixins from "./mixins/mouse";
import clickMixins from "./mixins/click";
import focusMixins from "./mixins/focus";

import { UNDEFINED } from "./constants";
import { RESIZE_EVENT_TYPE } from "./eventTypes";
import { onScroll, offScroll } from "./mixins/scroll";

class Window {
  constructor() {
    this.domElement = window; ///
  }

  getDOMElement() {
    return this.domElement;
  }

  assign(...sources) {
    const target = this.domElement; ///

    Object.assign(target, ...sources);
  }

  reload() {
    window.location.reload(); ///
  }

  getWidth() { return this.domElement.innerWidth; } ///
  
  getHeight() { return this.domElement.innerHeight; } ///

  getScrollTop() { return this.domElement.pageYOffset; }  ///

  getScrollLeft() { return this.domElement.pageXOffset; } ///

  getSelection() { return this.domElement.getSelection(); }

  getScreenWidth() { return this.domElement.screen.width; }

  getScreenHeight() { return this.domElement.screen.height; }

  scrollTo(scrollTop, scrollLeft) { this.domElement.scrollTo(scrollLeft, scrollTop); }

  onResize(resizeHandler, element) {
    const eventType = RESIZE_EVENT_TYPE,
          eventListener = this.addEventListener(eventType, resizeHandler, element);

    this.domElement.addEventListener(eventType, eventListener);
  }

  offResize(resizeHandler, element) {
    const eventType = RESIZE_EVENT_TYPE,
          eventListener = this.removeEventListener(eventType, resizeHandler, element);

    this.domElement.removeEventListener(eventType, eventListener);
  }
}

Object.assign(Window.prototype, keyMixins);
Object.assign(Window.prototype, eventMixins);
Object.assign(Window.prototype, mouseMixins);
Object.assign(Window.prototype, clickMixins);
Object.assign(Window.prototype, focusMixins);
Object.assign(Window.prototype, {
  onScroll,
  offScroll
});

export default (typeof window === UNDEFINED) ? undefined : new Window();  ///
