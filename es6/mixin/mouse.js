'use strict';

function onMouseUp(handler, object, intermediateHandler = defaultIntermediateHandler) {
  this.on('mouseup', handler, object, intermediateHandler);
}

function onMouseDown(handler, object, intermediateHandler = defaultIntermediateHandler) {
  this.on('mousedown', handler, object, intermediateHandler);
}

function onMouseOver(handler, object, intermediateHandler = defaultIntermediateHandler) {
  this.on('mouseover', handler, object, intermediateHandler);
}

function onMouseOut(handler, object, intermediateHandler = defaultIntermediateHandler) {
  this.on('mouseout', handler, object, intermediateHandler);
}

function onMouseMove(handler, object, intermediateHandler = defaultIntermediateHandler) {
  this.on('mousemove', handler, object, intermediateHandler);
}

function offMouseUp(handler, object) { this.off('mouseup', handler, object); }

function offMouseDown(handler, object) { this.off('mousedown', handler, object); }

function offMouseOver(handler, object) { this.off('mouseover', handler, object); }

function offMouseOut(handler, object) { this.off('mouseout', handler, object); }

function offMouseMove(handler, object) { this.off('mousemove', handler, object); }

const mouseMixin = {
  onMouseUp: onMouseUp,
  onMouseDown: onMouseDown,
  onMouseOver: onMouseOver,
  onMouseOut: onMouseOut,
  onMouseMove: onMouseMove,
  offMouseUp: offMouseUp,
  offMouseDown: offMouseDown,
  offMouseOver: offMouseOver,
  offMouseOut: offMouseOut,
  offMouseMove: offMouseMove
};

module.exports = mouseMixin;

function defaultIntermediateHandler(handler, event, targetElement) {
  const mouseTop = event.pageY,  ///
        mouseLeft = event.pageX, ///
        mouseButton = event.button; ///
  
  handler(mouseTop, mouseLeft, mouseButton, event, targetElement);
}
