"use strict";

import { SCROLL_EVENT_TYPE } from "../eventTypes";

function onScroll(scrollHandler, element) { this.onEvent(SCROLL_EVENT_TYPE, scrollHandler, element); }

function offScroll(scrollHandler, element) { this.offEvent(SCROLL_EVENT_TYPE, scrollHandler, element); }

function getScrollTop() { return this.domElement.scrollTop; }

function getScrollLeft() { return this.domElement.scrollLeft; }

function scrollTo(scrollTop, scrollLeft) { this.domElement.scrollTo(scrollTop, scrollLeft); }

function setScrollTop(scrollTop) { this.domElement.scrollTop = scrollTop; }

function setScrollLeft(scrollLeft) { this.domElement.scrollLeft = scrollLeft; }

const scrollMixins = {
  onScroll,
  offScroll,
  getScrollTop,
  getScrollLeft,
  scrollTo,
  setScrollTop,
  setScrollLeft
};

export default scrollMixins;
