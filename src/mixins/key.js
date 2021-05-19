"use strict";

import { KEYUP, KEYDOWN } from "../constants";

function onKeyUp(keyUpHandler, element) { this.on(KEYUP, keyUpHandler, element); }

function offKeyUp(keyUpHandler, element) { this.off(KEYUP, keyUpHandler, element); }

function onKeyDown(keyDownHandler, element) { this.on(KEYDOWN, keyDownHandler, element); }

function offKeyDown(keyDownHandler, element) { this.off(KEYDOWN, keyDownHandler, element); }

const keyMixins = {
  onKeyUp,
  offKeyUp,
  onKeyDown,
  offKeyDown
};

export default keyMixins;
