'use strict';

function onMouseUp(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on('mouseup', handler, element, intermediateHandler);
}

function onMouseDown(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on('mousedown', handler, element, intermediateHandler);
}

function onMouseOver(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on('mouseover', handler, element, intermediateHandler);
}

function onMouseOut(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on('mouseout', handler, element, intermediateHandler);
}

function onMouseMove(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on('mousemove', handler, element, intermediateHandler);
}

function offMouseUp(handler, element) { this.off('mouseup', handler, element); }

function offMouseDown(handler, element) { this.off('mousedown', handler, element); }

function offMouseOver(handler, element) { this.off('mouseover', handler, element); }

function offMouseOut(handler, element) { this.off('mouseout', handler, element); }

function offMouseMove(handler, element) { this.off('mousemove', handler, element); }

module.exports = {
  onMouseUp,
  onMouseDown,
  onMouseOver,
  onMouseOut,
  onMouseMove,
  offMouseUp,
  offMouseDown,
  offMouseOver,
  offMouseOut,
  offMouseMove
};

function defaultIntermediateHandler(handler, event, element) {
  const { pageY, pageX, button } = event,
				mouseTop = pageY,  ///
        mouseLeft = pageX, ///
        mouseButton = button; ///
  
  handler.call(element, mouseTop, mouseLeft, mouseButton, event);
}
