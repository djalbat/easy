'use strict';

function onMouseUp(handler, preventDefault, intermediateHandler = defaultIntermediateHandler) { this.on('mouseup', handler, preventDefault, intermediateHandler); }

function offMouseUp(handler) { this.off('mouseup', handler); }

function onMouseDown(handler, preventDefault, intermediateHandler = defaultIntermediateHandler) { this.on('mousedown', handler, preventDefault, intermediateHandler); }

function offMouseDown(handler) { this.off('mousedown', handler); }

function onMouseOver(handler, preventDefault, intermediateHandler = defaultIntermediateHandler) { this.on('mouseover', handler, preventDefault, intermediateHandler); }

function offMouseOver(handler) { this.off('mouseover', handler); }

function onMouseOut(handler, preventDefault, intermediateHandler = defaultIntermediateHandler) { this.on('mouseout', handler, preventDefault, intermediateHandler); }

function offMouseOut(handler) { this.off('mouseout', handler); }

function onMouseMove(handler, preventDefault, intermediateHandler = defaultIntermediateHandler) { this.on('mousemove', handler, preventDefault, intermediateHandler); }

function offMouseMove(handler) { this.off('mousemove', handler); }

const mouse = {
  onMouseUp: onMouseUp,
  offMouseUp: offMouseUp,
  onMouseDown: onMouseDown,
  offMouseDown: offMouseDown,
  onMouseOver: onMouseOver,
  offMouseOver: offMouseOver,
  onMouseOut: onMouseOut,
  offMouseOut: offMouseOut,
  onMouseMove: onMouseMove,
  offMouseMove: offMouseMove
};

module.exports = mouse;

function defaultIntermediateHandler(event, handler) {
  const mouseTop = event.pageY,  ///
        mouseLeft = event.pageX, ///
        mouseButton = event.button; ///
  
  handler(mouseTop, mouseLeft, mouseButton);
}
