"use strict";

import { MOUSEUP_EVENT_TYPE,
         MOUSEOUT_EVENT_TYPE,
         MOUSEDOWN_EVENT_TYPE,
         MOUSEOVER_EVENT_TYPE,
         MOUSEMOVE_EVENT_TYPE } from "../eventTypes";

function onMouseUp(mouseUpHandler, element) { this.on(MOUSEUP_EVENT_TYPE, mouseUpHandler, element); }

function offMouseUp(mouseUpHandler, element) { this.off(MOUSEUP_EVENT_TYPE, mouseUpHandler, element); }

function onMouseOut(mouseOutHandler, element) { this.on(MOUSEOUT_EVENT_TYPE, mouseOutHandler, element); }

function offMouseOut(mouseOutHandler, element) { this.off(MOUSEOUT_EVENT_TYPE, mouseOutHandler, element); }

function onMouseDown(mouseDownHandler, element) { this.on(MOUSEDOWN_EVENT_TYPE, mouseDownHandler, element); }

function offMouseDown(mouseDownHandler, element) { this.off(MOUSEDOWN_EVENT_TYPE, mouseDownHandler, element); }

function onMouseOver(mouseOverHandler, element) { this.on(MOUSEOVER_EVENT_TYPE, mouseOverHandler, element); }

function offMouseOver(mouseOverHandler, element) { this.off(MOUSEOVER_EVENT_TYPE, mouseOverHandler, element); }

function onMouseMove(mouseMoveHandler, element) { this.on(MOUSEMOVE_EVENT_TYPE, mouseMoveHandler, element); }

function offMouseMove(mouseMoveHandler, element) { this.off(MOUSEMOVE_EVENT_TYPE, mouseMoveHandler, element); }

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
