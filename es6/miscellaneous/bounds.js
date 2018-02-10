'use strict';

class Bounds {
  constructor(top, left, bottom, right) {
    this.top = top;
    this.left = left;
    this.bottom = bottom;
    this.right = right;
  }

  getTop() {
    return this.top;
  }

  getLeft() {
    return this.left;
  }

  getBottom() {
    return this.bottom;
  }

  getRight() {
    return this.right;
  }

  getWidth() {
    const width = this.right - this.left;

    return width;
  }

  getHeight() {
    const height = this.bottom - this.top;

    return height;
  }
  
  setTop(top) {
    this.top = top;
  }

  setLeft(left) {
    this.left = left;
  }

  setBottom(bottom) {
    this.bottom = bottom;
  }

  setRight(right) {
    this.right = right;
  }

  shift(horizontalOffset, verticalOffset) {
    this.top += verticalOffset;
    this.left += horizontalOffset;
    this.bottom += verticalOffset;
    this.right += horizontalOffset;
  }

  isOverlappingMouse(mouseTop, mouseLeft) {
    return (  (this.top < mouseTop)
           && (this.left < mouseLeft)
           && (this.bottom > mouseTop)
           && (this.right > mouseLeft)  );
  }

  areOverlapping(bounds) {
    return (  (this.top < bounds.bottom)
           && (this.left < bounds.right)
           && (this.bottom > bounds.top)
           && (this.right > bounds.left)  );
  }

  static fromBoundingClientRect(boundingClientRect) {
    const windowScrollTop = window.pageYOffset, ///
          windowScrollLeft = window.pageXOffset,  ///
          top = boundingClientRect.top + windowScrollTop,
          left = boundingClientRect.left + windowScrollLeft,
          bottom = boundingClientRect.bottom + windowScrollTop,
          right = boundingClientRect.right + windowScrollLeft,
          bounds = new Bounds(top, left, bottom, right);

    return bounds;
  }

  static fromTopLeftWidthAndHeight(top, left, width, height) {
    const bottom = top + height,
          right = left + width,
          bounds = new Bounds(top, left, bottom, right);

    return bounds;
  }
}

module.exports = Bounds;
