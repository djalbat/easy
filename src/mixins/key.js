"use strict";

import { KEYUP_EVENT_TYPE, KEYDOWN_EVENT_TYPE } from "../eventTypes";

function onKeyUp(keyUpHandler, element) { this.onEvent(KEYUP_EVENT_TYPE, keyUpHandler, element); }

function offKeyUp(keyUpHandler, element) { this.offEvent(KEYUP_EVENT_TYPE, keyUpHandler, element); }

function onKeyDown(keyDownHandler, element) { this.onEvent(KEYDOWN_EVENT_TYPE, keyDownHandler, element); }

function offKeyDown(keyDownHandler, element) { this.ofEventf(KEYDOWN_EVENT_TYPE, keyDownHandler, element); }

const keyMixins = {
  onKeyUp,
  offKeyUp,
  onKeyDown,
  offKeyDown
};

export default keyMixins;
