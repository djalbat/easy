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

  onResize(handler, object, intermediateHandler = defaultIntermediateResizeHandler) {
    const eventTypes = "resize";
    
    this.on(eventTypes, handler, object, intermediateHandler);
  }

  offResize(handler, object) {
    const eventTypes = "resize";

    this.off(eventTypes, handler, object);
  }
}

const window = (typeof window === "undefined") ? undefined : new Window();  ///

export default window;

function defaultIntermediateResizeHandler(handler, event, element) {
  const window = element, ///
        width = window.getWidth(),
        height = window.getHeight();
  
  handler.call(element, width, height, event, element);
}
