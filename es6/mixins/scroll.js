"use strict";

export function onScroll(scrollHandler, element) { this.on("scroll", scrollHandler, element); }

export function offScroll(scrollHandler, element) { this.off("scroll", scrollHandler, element); }

export function getScrollTop() { return this.domElement.scrollTop; }

export function getScrollLeft() { return this.domElement.scrollLeft; }

export function setScrollTop(scrollTop) { this.domElement.scrollTop = scrollTop; }

export function setScrollLeft(scrollLeft) { this.domElement.scrollLeft = scrollLeft; }
