"use strict";

function onKeyUp(keyUpHandler, element) { this.on("keyup", keyUpHandler, element); }

function offKeyUp(keyUpHandler, element) { this.off("keyup", keyUpHandler, element); }

function onKeyDown(keyDownHandler, element) { this.on("keydown", keyDownHandler, element); }

function offKeyDown(keyDownHandler, element) { this.off("keydown", keyDownHandler, element); }

const keyMixins = {
  onKeyUp,
  offKeyUp,
  onKeyDown,
  offKeyDown
};

export default keyMixins;
