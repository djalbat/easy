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

  shift(horizontalOffset, verticalOffset) {
    this.top += verticalOffset;
    this.left += horizontalOffset;
    this.right += horizontalOffset;
    this.bottom += verticalOffset;
  }

  isOverlappingMouse(mouseTop, mouseLeft) {
    return (  (this.top <= mouseTop)
           && (this.left <= mouseLeft)
           && (this.right > mouseLeft)
           && (this.bottom > mouseTop)  );
  }

  areOverlapping(bounds) {
    return (  (this.top < bounds.bottom)
           && (this.left < bounds.right)
           && (this.right > bounds.left)
           && (this.bottom > bounds.top)  );
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
