'use strict';

function onScroll(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }
  
  this.on('scroll', handler); 
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

function defaultIntermediateHandler(handler, event) {
  const scrollTop = this.getScrollTop(),
        scrollLeft = this.getScrollLeft(),
        preventDefault = handler(scrollTop, scrollLeft);

  return preventDefault;
}
