"use strict";

export function onScroll(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on("scroll", handler, element, intermediateHandler);
}

export function offScroll(handler, element) { this.off("scroll", handler, element); }

export function getScrollTop() { return this.domElement.scrollTop; }

export function getScrollLeft() { return this.domElement.scrollLeft; }

export function setScrollTop(scrollTop) { this.domElement.scrollTop = scrollTop; }

export function setScrollLeft(scrollLeft) { this.domElement.scrollLeft = scrollLeft; }

function defaultIntermediateHandler(handler, event, element) {
  const scrollTop = element.getScrollTop(),
        scrollLeft = element.getScrollLeft();
  
  handler.call(element, scrollTop, scrollLeft, event, element);
}
