'use strict';

function onScroll(handler, intermediateHandler = defaultIntermediateHandler) {
  this.on('scroll', handler, intermediateHandler);
}

function offScroll(handler) { this.off('scroll', handler); }

function getScrollTop() { return this.domElement.scrollTop; }

function getScrollLeft() { return this.domElement.scrollLeft; }

function setScrollTop(scrollTop) { this.domElement.scrollTop = scrollTop; }

function setScrollLeft(scrollLeft) { this.domElement.scrollLeft = scrollLeft; }

const scrollMixin = {
  onScroll: onScroll,
  offScroll: offScroll,
  getScrollTop: getScrollTop,
  getScrollLeft: getScrollLeft,
  setScrollTop: setScrollTop,
  setScrollLeft: setScrollLeft
};

module.exports = scrollMixin;

function defaultIntermediateHandler(handler, event, targetElement) {
  const scrollTop = targetElement.getScrollTop(),
        scrollLeft = targetElement.getScrollLeft();
  
  handler(scrollTop, scrollLeft, event, targetElement);
}
