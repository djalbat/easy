"use strict";

import keyMixins from "./mixins/key";
import eventMixins from "./mixins/event";
import mouseMixins from "./mixins/mouse";
import clickMixins from "./mixins/click";
import windowMixins from "./mixins/window";
import customEventMixins from "./mixins/customEvent";

import { UNDEFINED } from "./constants";

class Window {
  constructor() {
    this.domElement = window; ///
  }

  assign(...sources) {
    const target = this.domElement; ///

    Object.assign(target, ...sources);
  }

  addResizeObject() {} ///

  removeResizeObject() {} ///

  getWidth() { return this.domElement.innerWidth; } ///
  
  getHeight() { return this.domElement.innerHeight; } ///

  getScrollTop() { return this.domElement.pageYOffset; }  ///

  getScrollLeft() { return this.domElement.pageXOffset; } ///

  getSelection() { return this.domElement.getSelection(); }
}

Object.assign(Window.prototype, keyMixins);
Object.assign(Window.prototype, eventMixins);
Object.assign(Window.prototype, mouseMixins);
Object.assign(Window.prototype, clickMixins);
Object.assign(Window.prototype, windowMixins);
Object.assign(Window.prototype, customEventMixins);

export default (typeof window === UNDEFINED) ? undefined : new Window();  ///
