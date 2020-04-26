"use strict";

export function onKeyUp(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on("keyup", handler, element, intermediateHandler);
}

export function onKeyDown(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on("keydown", handler, element, intermediateHandler);
}

export function offKeyUp(handler, element) { this.off("keyup", handler, element); }

export function offKeyDown(handler, element) { this.off("keydown", handler, element); }

function defaultIntermediateHandler(handler, event, element) {
  const { keyCode } = event;
  
  handler.call(element, keyCode, event, element);
}
