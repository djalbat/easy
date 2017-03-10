'use strict';

function onMouseUp(handler, preventDefault, intermediateHandler = topLeftButtonIntermediateHandler) { this.on('mouseup', handler, preventDefault, intermediateHandler); }

function offMouseUp(handler) { this.off('mouseup', handler); }

function onMouseDown(handler, preventDefault, intermediateHandler = topLeftButtonIntermediateHandler) { this.on('mousedown', handler, preventDefault, intermediateHandler); }

function offMouseDown(handler) { this.off('mousedown', handler); }

function onMouseOver(handler, preventDefault, intermediateHandler = topLeftIntermediateHandler) { this.on('mouseover', handler, preventDefault, intermediateHandler); }

function offMouseOver(handler) { this.off('mouseover', handler); }

function onMouseOut(handler, preventDefault, intermediateHandler = topLeftIntermediateHandler) { this.on('mouseout', handler, preventDefault, intermediateHandler); }

function offMouseOut(handler) { this.off('mouseout', handler); }

function onMouseMove(handler, preventDefault, intermediateHandler = topLeftIntermediateHandler) { this.on('mousemove', handler, preventDefault, intermediateHandler); }

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
