"use strict";

import { SCROLL } from "../constants";

function onScroll(scrollHandler, element) { this.on(SCROLL, scrollHandler, element); }

function offScroll(scrollHandler, element) { this.off(SCROLL, scrollHandler, element); }

function getScrollTop() { return this.domElement.scrollTop; }

function getScrollLeft() { return this.domElement.scrollLeft; }

function setScrollTop(scrollTop) { this.domElement.scrollTop = scrollTop; }

function setScrollLeft(scrollLeft) { this.domElement.scrollLeft = scrollLeft; }

const scrollMixins = {
  onScroll,
  offScroll,
  getScrollTop,
  getScrollLeft,
  setScrollTop,
  setScrollLeft
};

export default scrollMixins;
