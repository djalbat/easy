'use strict';

function onMouseUp(handler, intermediateHandler = defaultIntermediateHandler) {
  this.on('mouseup', handler, intermediateHandler);
}

function onMouseDown(handler, intermediateHandler = defaultIntermediateHandler) {
  this.on('mousedown', handler, intermediateHandler);
}

function onMouseOver(handler, intermediateHandler = defaultIntermediateHandler) {
  this.on('mouseover', handler, intermediateHandler);
}

function onMouseOut(handler, intermediateHandler = defaultIntermediateHandler) {
  this.on('mouseout', handler, intermediateHandler);
}

function onMouseMove(handler, intermediateHandler = defaultIntermediateHandler) {
  this.on('mousemove', handler, intermediateHandler);
}

function offMouseUp(handler) { this.off('mouseup', handler); }

function offMouseDown(handler) { this.off('mousedown', handler); }

function offMouseOver(handler) { this.off('mouseover', handler); }

function offMouseOut(handler) { this.off('mouseout', handler); }

function offMouseMove(handler) { this.off('mousemove', handler); }

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
