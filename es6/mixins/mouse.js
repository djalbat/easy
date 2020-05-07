"use strict";

function onMouseUp(mouseUpHandler, element) { this.on("mouseup", mouseUpHandler, element); }

function offMouseUp(mouseUpHandler, element) { this.off("mouseup", mouseUpHandler, element); }

function onMouseOut(mouseOutHandler, element) { this.on("mouseout", mouseOutHandler, element); }

function offMouseOut(mouseOutHandler, element) { this.off("mouseout", mouseOutHandler, element); }

function onMouseDown(mouseDownHandler, element) { this.on("mousedown", mouseDownHandler, element); }

function offMouseDown(mouseDownHandler, element) { this.off("mousedown", mouseDownHandler, element); }

function onMouseOver(mouseOverHandler, element) { this.on("mouseover", mouseOverHandler, element); }

function offMouseOver(mouseOverHandler, element) { this.off("mouseover", mouseOverHandler, element); }

function onMouseMove(mouseMoveHandler, element) { this.on("mousemove", mouseMoveHandler, element); }

function offMouseMove(mouseMoveHandler, element) { this.off("mousemove", mouseMoveHandler, element); }

export default {
  onMouseUp,
  offMouseUp,
  onMouseOut,
  offMouseOut,
  onMouseDown,
  offMouseDown,
  onMouseOver,
  offMouseOver,
  onMouseMove,
  offMouseMove
};
