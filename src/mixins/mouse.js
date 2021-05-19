"use strict";

import { MOUSEUP, MOUSEOUT, MOUSEDOWN, MOUSEOVER, MOUSEMOVE } from "../constants";

function onMouseUp(mouseUpHandler, element) { this.on(MOUSEUP, mouseUpHandler, element); }

function offMouseUp(mouseUpHandler, element) { this.off(MOUSEUP, mouseUpHandler, element); }

function onMouseOut(mouseOutHandler, element) { this.on(MOUSEOUT, mouseOutHandler, element); }

function offMouseOut(mouseOutHandler, element) { this.off(MOUSEOUT, mouseOutHandler, element); }

function onMouseDown(mouseDownHandler, element) { this.on(MOUSEDOWN, mouseDownHandler, element); }

function offMouseDown(mouseDownHandler, element) { this.off(MOUSEDOWN, mouseDownHandler, element); }

function onMouseOver(mouseOverHandler, element) { this.on(MOUSEOVER, mouseOverHandler, element); }

function offMouseOver(mouseOverHandler, element) { this.off(MOUSEOVER, mouseOverHandler, element); }

function onMouseMove(mouseMoveHandler, element) { this.on(MOUSEMOVE, mouseMoveHandler, element); }

function offMouseMove(mouseMoveHandler, element) { this.off(MOUSEMOVE, mouseMoveHandler, element); }

const mouseMixins = {
  onMouseUp,
  offMouseUp,
  onMouseOut,
  offMouseOut,
  onMouseDown,
  offMouseDown,
  onMouseOver,
  offMouseOver,
  onMouseMove,
  offMouseMove
};

export default mouseMixins;
