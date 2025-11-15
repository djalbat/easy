"use strict";

import { SCROLL_EVENT_TYPE } from "../eventTypes";

export function onScroll(scrollHandler, element) { this.onEvent(SCROLL_EVENT_TYPE, scrollHandler, element); }

export function offScroll(scrollHandler, element) { this.offEvent(SCROLL_EVENT_TYPE, scrollHandler, element); }

function scrollTo(scrollTop, scrollLeft) { this.domElement.scrollTo(scrollLeft, scrollTop); } ///

function getScrollTop() { return this.domElement.scrollTop; }

function getScrollLeft() { return this.domElement.scrollLeft; }

function getScrollWidth() { return this.domElement.scrollWidth; }

function getScrollHeight() { return this.domElement.scrollHeight; }

function setScrollTop(scrollTop) { this.domElement.scrollTop = scrollTop; }

function setScrollLeft(scrollLeft) { this.domElement.scrollLeft = scrollLeft; }

const scrollMixins = {
  onScroll,
  offScroll,
  scrollTo,
  getScrollTop,
  getScrollLeft,
  getScrollWidth,
  getScrollHeight,
  setScrollTop,
  setScrollLeft
};

export default scrollMixins;
