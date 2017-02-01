'use strict';

class mouse {
  static initialise(element) {
    element.onMouseUp = onMouseUp;
    element.onMouseDown = onMouseDown;
    element.onMouseOver = onMouseOver;
    element.onMouseOut = onMouseOut;
    element.onMouseMove = onMouseMove;

    element.offMouseUp = offMousefUp;
    element.offMouseDown = offMousefDown;
    element.offMouseOver = offMousefOver;
    element.offMouseOut = offMousefOut;
    element.offMouseMove = offMousefMove;
  }
}

module.exports = mouse;

function onMouseUp(mouseUpHandler, namespace) { this.on('mouseup', returnEventHandler(mouseUpHandler), namespace); }
function onMouseDown(mouseDownHandler, namespace) { this.on('mousedown', returnEventHandler(mouseDownHandler), namespace); }
function onMouseOver(mouseOverHandler, namespace) { this.on('mouseover', returnEventHandler(mouseOverHandler), namespace); }
function onMouseOut(mouseOutHandler, namespace) { this.on('mouseout', returnEventHandler(mouseOutHandler), namespace); }
function onMouseMove(mouseMoveHandler, namespace) { this.on('mousemove', returnEventHandler(mouseMoveHandler), namespace); }

function offMousefUp(namespace) { this.off('mouseup', namespace); }
function offMousefDown(namespace) { this.off('mousedown', namespace); }
function offMousefOver(namespace) { this.off('mouseover', namespace); }
function offMousefOut(namespace) { this.off('mouseout', namespace); }
function offMousefMove(namespace) { this.off('mousemove', namespace); }

function returnEventHandler(handler) {
  return function(event) {
    var mouseTop = event.pageY,  ///
        mouseLeft = event.pageX, ///
        mouseButton = event.which; ///

    handler(mouseTop, mouseLeft, mouseButton);
  };
}
