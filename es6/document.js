"use strict";

import { onClick, offClick } from "./mixins/click";
import { onKeyUp, offKeyUp, onKeyDown, offKeyDown } from "./mixins/key";
import { on, off, addEventListener, findEventListener, findEventListeners, removeEventListener } from "./mixins/event";
import { onMouseUp, onMouseDown, onMouseOver, onMouseOut, onMouseMove, offMouseUp, offMouseDown, offMouseOver, offMouseOut, offMouseMove } from "./mixins/mouse";

class Document {
  on = on;
  off = off;

  onClick = onClick;
  offClick = offClick;

  onResize = onResize;
  offResize = offResize;

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
  findEventListener = findEventListener;
  findEventListeners = findEventListeners;
  removeEventListener = removeEventListener;

  constructor() {
    this.domElement = document; ///
  }
}

export default (typeof document === "undefined") ? undefined : new Document();  ///

function onResize(resizeHandler, element) {} ///

function offResize(resizeHandler, element) {}  ///
