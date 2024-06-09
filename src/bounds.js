"use strict";

export default class Bounds {
  constructor(top, left, right, bottom) {
    this.top = top;
    this.left = left;
    this.right = right;
    this.bottom = bottom;
  }

  getTop() {
    return this.top;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  getBottom() {
    return this.bottom;
  }

  getWidth() {
    const width = (this.right - this.left);

    return width;
  }

  getHeight() {
    const height = (this.bottom - this.top);

    return height;
  }
  
  setTop(top) {
    this.top = top;
  }

  setLeft(left) {
    this.left = left;
  }

  setRight(right) {
    this.right = right;
  }

  setBottom(bottom) {
    this.bottom = bottom;
  }

  areOverlapping(bounds) {
    const bottom = bounds.getBottom(),
          right = bounds.getRight(),
          left = bounds.getLeft(),
          top = bounds.getTop(),
          overlapping = ((this.top < bottom)
                      && (this.left < right)
                      && (this.right > left)
                      && (this.bottom > top));

    return overlapping;
  }

  areOverlappingByTopAndLeft(top, left) {
    const overlapping = ((this.top <= top)
                      && (this.left <= left)
                      && (this.right > left)
                      && (this.bottom > top));

    return overlapping;
  }

  static fromBoundingClientRect(boundingClientRect) {
    const windowScrollTop = window.pageYOffset, ///
          windowScrollLeft = window.pageXOffset,  ///
          top = boundingClientRect.top + windowScrollTop,
          left = boundingClientRect.left + windowScrollLeft,
          right = boundingClientRect.right + windowScrollLeft,
          bottom = boundingClientRect.bottom + windowScrollTop,
          bounds = new Bounds(top, left, right, bottom);

    return bounds;
  }

  static fromTopLeftWidthAndHeight(top, left, width, height) {
    const bottom = top + height,
          right = left + width,
          bounds = new Bounds(top, left, right, bottom);

    return bounds;
  }
}
