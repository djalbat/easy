'use strict';

function onScroll(handler, object, intermediateHandler = defaultIntermediateHandler) {
  this.on('scroll', handler, object, intermediateHandler);
}

function offScroll(handler, object) { this.off('scroll', handler, object); }

function getScrollTop() { return this.domElement.scrollTop; }

function getScrollLeft() { return this.domElement.scrollLeft; }

function setScrollTop(scrollTop) { this.domElement.scrollTop = scrollTop; }

function setScrollLeft(scrollLeft) { this.domElement.scrollLeft = scrollLeft; }

module.exports = {
  onScroll: onScroll,
  offScroll: offScroll,
  getScrollTop: getScrollTop,
  getScrollLeft: getScrollLeft,
  setScrollTop: setScrollTop,
  setScrollLeft: setScrollLeft
};

function defaultIntermediateHandler(handler, event, targetElement) {
  const scrollTop = targetElement.getScrollTop(),
        scrollLeft = targetElement.getScrollLeft();
  
  handler(scrollTop, scrollLeft, event, targetElement);
}
