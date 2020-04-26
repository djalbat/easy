"use strict";

export function onMouseUp(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on("mouseup", handler, element, intermediateHandler);
}

export function onMouseDown(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on("mousedown", handler, element, intermediateHandler);
}

export function onMouseOver(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on("mouseover", handler, element, intermediateHandler);
}

export function onMouseOut(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on("mouseout", handler, element, intermediateHandler);
}

export function onMouseMove(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on("mousemove", handler, element, intermediateHandler);
}

export function offMouseUp(handler, element) { this.off("mouseup", handler, element); }

export function offMouseDown(handler, element) { this.off("mousedown", handler, element); }

export function offMouseOver(handler, element) { this.off("mouseover", handler, element); }

export function offMouseOut(handler, element) { this.off("mouseout", handler, element); }

export function offMouseMove(handler, element) { this.off("mousemove", handler, element); }

function defaultIntermediateHandler(handler, event, element) {
  const { pageY, pageX, button } = event,
				mouseTop = pageY,  ///
        mouseLeft = pageX, ///
        mouseButton = button; ///
  
  handler.call(element, mouseTop, mouseLeft, mouseButton, event, element);
}
