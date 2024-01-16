"use strict";

import { MOUSEUP_EVENT_TYPE,
         MOUSEOUT_EVENT_TYPE,
         MOUSEDOWN_EVENT_TYPE,
         MOUSEOVER_EVENT_TYPE,
         MOUSEMOVE_EVENT_TYPE } from "../eventTypes";

function onMouseUp(mouseUpHandler, element) { this.onEvent(MOUSEUP_EVENT_TYPE, mouseUpHandler, element); }

function offMouseUp(mouseUpHandler, element) { this.offEvent(MOUSEUP_EVENT_TYPE, mouseUpHandler, element); }

function onMouseOut(mouseOutHandler, element) { this.onEvent(MOUSEOUT_EVENT_TYPE, mouseOutHandler, element); }

function offMouseOut(mouseOutHandler, element) { this.offEvent(MOUSEOUT_EVENT_TYPE, mouseOutHandler, element); }

function onMouseDown(mouseDownHandler, element) { this.onEvent(MOUSEDOWN_EVENT_TYPE, mouseDownHandler, element); }

function offMouseDown(mouseDownHandler, element) { this.offEvent(MOUSEDOWN_EVENT_TYPE, mouseDownHandler, element); }

function onMouseOver(mouseOverHandler, element) { this.onEvent(MOUSEOVER_EVENT_TYPE, mouseOverHandler, element); }

function offMouseOver(mouseOverHandler, element) { this.offEvent(MOUSEOVER_EVENT_TYPE, mouseOverHandler, element); }

function onMouseMove(mouseMoveHandler, element) { this.onEvent(MOUSEMOVE_EVENT_TYPE, mouseMoveHandler, element); }

function offMouseMove(mouseMoveHandler, element) { this.offEvent(MOUSEMOVE_EVENT_TYPE, mouseMoveHandler, element); }

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
