'use strict';

function onMouseUp(handler, preventDefault, intermediateHandler = topLeftButtonIntermediateHandler) { this.on('mouseup', handler, preventDefault, intermediateHandler); }

function onMouseDown(handler, preventDefault, intermediateHandler = topLeftButtonIntermediateHandler) { this.on('mousedown', handler, preventDefault, intermediateHandler); }

function onMouseOver(handler, preventDefault, intermediateHandler = topLeftIntermediateHandler) { this.on('mouseover', handler, preventDefault, intermediateHandler); }

function onMouseOut(handler, preventDefault, intermediateHandler = topLeftIntermediateHandler) { this.on('mouseout', handler, preventDefault, intermediateHandler); }

function onMouseMove(handler, preventDefault, intermediateHandler = topLeftIntermediateHandler) { this.on('mousemove', handler, preventDefault, intermediateHandler); }

function offMouseUp(handler) { this.off('mouseup', handler); }

function offMouseDown(handler) { this.off('mousedown', handler); }

function offMouseOver(handler) { this.off('mouseover', handler); }

function offMouseOut(handler) { this.off('mouseout', handler); }

function offMouseMove(handler) { this.off('mousemove', handler); }

const mouse = {
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

module.exports = mouse;

function topLeftIntermediateHandler(handler, event) {
  const mouseTop = event.pageY,  ///
        mouseLeft = event.pageX;  ///
  
  handler(mouseTop, mouseLeft);
}

function topLeftButtonIntermediateHandler(handler, event) {
  const mouseTop = event.pageY,  ///
        mouseLeft = event.pageX, ///
        mouseButton = event.button; ///

  handler(mouseTop, mouseLeft, mouseButton);
}
