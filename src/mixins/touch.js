"use strict";

import { TOUCHSTART_EVENT_TYPE, TOUCHMOVE_EVENT_TYPE, TOUCHEND_EVENT_TYPE } from "../eventTypes";

function onTouchStart(touchStartHandler) { this.onEvent(TOUCHSTART_EVENT_TYPE, touchStartHandler); }

function offTouchStart(touchStartHandler) { this.offEvent(TOUCHSTART_EVENT_TYPE, touchStartHandler); }

function onTouchMove(touchStartHandler) { this.onEvent(TOUCHMOVE_EVENT_TYPE, touchStartHandler); }

function offTouchMove(touchStartHandler) { this.offEvent(TOUCHMOVE_EVENT_TYPE, touchStartHandler); }

function onTouchEnd(touchStartHandler) { this.onEvent(TOUCHEND_EVENT_TYPE, touchStartHandler); }

function offTouchEnd(touchStartHandler) { this.offEvent(TOUCHEND_EVENT_TYPE, touchStartHandler); }

const clickMixins = {
  onTouchStart,
  offTouchStart,
  onTouchMove,
  offTouchMove,
  onTouchEnd,
  offTouchEnd
};

export default clickMixins;
