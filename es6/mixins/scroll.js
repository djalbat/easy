"use strict";

export function onScroll(scrollHandler) { this.on("scroll", scrollHandler); }

export function offScroll(scrollHandler) { this.off("scroll", scrollHandler); }

export function getScrollTop() { return this.domElement.scrollTop; }

export function getScrollLeft() { return this.domElement.scrollLeft; }

export function setScrollTop(scrollTop) { this.domElement.scrollTop = scrollTop; }

export function setScrollLeft(scrollLeft) { this.domElement.scrollLeft = scrollLeft; }
