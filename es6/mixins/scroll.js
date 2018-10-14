'use strict';

function onScroll(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on('scroll', handler, element, intermediateHandler);
}

function offScroll(handler, element) { this.off('scroll', handler, element); }

function getScrollTop() { return this.domElement.scrollTop; }

function getScrollLeft() { return this.domElement.scrollLeft; }

function setScrollTop(scrollTop) { this.domElement.scrollTop = scrollTop; }

function setScrollLeft(scrollLeft) { this.domElement.scrollLeft = scrollLeft; }

module.exports = {
  onScroll,
  offScroll,
  getScrollTop,
  getScrollLeft,
  setScrollTop,
  setScrollLeft
};

function defaultIntermediateHandler(handler, event, element) {
  const scrollTop = element.getScrollTop(),
        scrollLeft = element.getScrollLeft();
  
  handler.call(element, scrollTop, scrollLeft, event);
}
