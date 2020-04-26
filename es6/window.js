"use strict";

import { onClick, offClick } from "./mixins/click";
import { onKeyUp, offKeyUp, onKeyDown, offKeyDown } from "./mixins/key";
import { on, off, addEventListener, removeEventListener } from "./mixins/event";
import { onMouseUp, onMouseDown, onMouseOver, onMouseOut, onMouseMove, offMouseUp, offMouseDown, offMouseOver, offMouseOut, offMouseMove } from "./mixins/mouse";

class Window {
  on = on;
  off = off;

  onClick = onClick;
  offClick = offClick;

  onKeyUp = onKeyUp;
  offKeyUp = offKeyUp;
  onKeyDown = onKeyDown;
  offKeyDown = offKeyDown;

  onMouseUp = onMouseUp;
  onMouseDown = onMouseDown;
  onMouseOver = onMouseOver;
  onMouseOut = onMouseOut;
  onMouseMove = onMouseMove;
  offMouseUp = offMouseUp;
  offMouseDown = offMouseDown;
  offMouseOver = offMouseOver;
  offMouseOut = offMouseOut;
  offMouseMove = offMouseMove;

  addEventListener = addEventListener;
  removeEventListener = removeEventListener;

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

  onResize(resizeHandler) { this.on("resize", resizeHandler); }

  offResize(resizeHandler) { this.off("resize", resizeHandler); }
}

export default (typeof window === "undefined") ? undefined : new Window();  ///
