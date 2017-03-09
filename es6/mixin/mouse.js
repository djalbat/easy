'use strict';

function onMouseUp(handler) { this.on('mouseup', adjustMouseEvent(handler)); }
function onMouseDown(handler) { this.on('mousedown', adjustMouseEvent(handler)); }
function onMouseOver(handler) { this.on('mouseover', adjustMouseEvent(handler)); }
function onMouseOut(handler) { this.on('mouseout', adjustMouseEvent(handler)); }
function onMouseMove(handler) { this.on('mousemove', adjustMouseEvent(handler)); }

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

function adjustMouseEvent(handler) {
  return function(event) {
    const mouseTop = event.pageY,  ///
          mouseLeft = event.pageX, ///
          mouseButton = event.which; ///

    handler(mouseTop, mouseLeft, mouseButton);
  };
}
