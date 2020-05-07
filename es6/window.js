"use strict";

import keyMixins from "./mixins/key";
import eventMixins from "./mixins/event";
import mouseMixins from "./mixins/mouse";
import clickMixins from "./mixins/click";
import resizeMixins from "./mixins/resize";

const { onResize, offResize } = resizeMixins;

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
}

Object.assign(Window.prototype, keyMixins);
Object.assign(Window.prototype, eventMixins);
Object.assign(Window.prototype, mouseMixins);
Object.assign(Window.prototype, clickMixins);
Object.assign(Window.prototype, { onResize, offResize }); ///

export default (typeof window === "undefined") ? undefined : new Window();  ///
