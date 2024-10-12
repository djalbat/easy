"use strict";

import keyMixins from "./mixins/key";
import eventMixins from "./mixins/event";
import mouseMixins from "./mixins/mouse";
import clickMixins from "./mixins/click";
import focusMixins from "./mixins/focus";
import scrollMixins from "./mixins/scroll";
import customEventMixins from "./mixins/customEvent";

import { UNDEFINED } from "./constants";
import { RESIZE_EVENT_TYPE } from "./eventTypes";

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

  getWidth() { return this.domElement.innerWidth; } ///
  
  getHeight() { return this.domElement.innerHeight; } ///

  getScrollTop() { return this.domElement.pageYOffset; }  ///

  getScrollLeft() { return this.domElement.pageXOffset; } ///

  getSelection() { return this.domElement.getSelection(); }

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
Object.assign(Window.prototype, scrollMixins);
Object.assign(Window.prototype, customEventMixins);

export default (typeof window === UNDEFINED) ? undefined : new Window();  ///
