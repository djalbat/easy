"use strict";

function onScroll(scrollHandler, element) { this.on("scroll", scrollHandler, element); }

function offScroll(scrollHandler, element) { this.off("scroll", scrollHandler, element); }

function getScrollTop() { return this.domElement.scrollTop; }

function getScrollLeft() { return this.domElement.scrollLeft; }

function setScrollTop(scrollTop) { this.domElement.scrollTop = scrollTop; }

function setScrollLeft(scrollLeft) { this.domElement.scrollLeft = scrollLeft; }

export default {
  onScroll,
  offScroll,
  getScrollTop,
  getScrollLeft,
  setScrollTop,
  setScrollLeft
};
