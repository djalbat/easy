"use strict";

export function onMouseUp(mouseUpHandler, element) { this.on("mouseup", mouseUpHandler, element); }

export function offMouseUp(mouseUpHandler, element) { this.off("mouseup", mouseUpHandler, element); }

export function onMouseOut(mouseOutHandler, element) { this.on("mouseout", mouseOutHandler, element); }

export function offMouseOut(mouseOutHandler, element) { this.off("mouseout", mouseOutHandler, element); }

export function onMouseDown(mouseDownHandler, element) { this.on("mousedown", mouseDownHandler, element); }

export function offMouseDown(mouseDownHandler, element) { this.off("mousedown", mouseDownHandler, element); }

export function onMouseOver(mouseOverHandler, element) { this.on("mouseover", mouseOverHandler, element); }

export function offMouseOver(mouseOverHandler, element) { this.off("mouseover", mouseOverHandler, element); }

export function onMouseMove(mouseMoveHandler, element) { this.on("mousemove", mouseMoveHandler, element); }

export function offMouseMove(mouseMoveHandler, element) { this.off("mousemove", mouseMoveHandler, element); }
