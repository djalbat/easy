"use strict";

export function onMouseUp(mouseUpHandler) { this.on("mouseup", mouseUpHandler); }

export function offMouseUp(mouseUpHandler) { this.off("mouseup", mouseUpHandler); }

export function onMouseOut(mouseOutHandler) { this.on("mouseout", mouseOutHandler); }

export function offMouseOut(mouseOutHandler) { this.off("mouseout", mouseOutHandler); }

export function onMouseDown(mouseDownHandler) { this.on("mousedown", mouseDownHandler); }

export function offMouseDown(mouseDownHandler) { this.off("mousedown", mouseDownHandler); }

export function onMouseOver(mouseOverHandler) { this.on("mouseover", mouseOverHandler); }

export function offMouseOver(mouseOverHandler) { this.off("mouseover", mouseOverHandler); }

export function onMouseMove(mouseMoveHandler) { this.on("mousemove", mouseMoveHandler); }

export function offMouseMove(mouseMoveHandler) { this.off("mousemove", mouseMoveHandler); }
