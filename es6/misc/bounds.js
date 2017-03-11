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

  isOverlappingMouse(mouseTop, mouseLeft) {
    return (  (this.top < mouseTop) &&
              (this.left < mouseLeft) &&
              (this.bottom > mouseTop) &&
              (this.right > mouseLeft)  );
  }

  areOverlapping(bounds) {
    return (  (this.top < bounds.bottom) &&
              (this.left < bounds.right) &&
              (this.bottom > bounds.top) &&
              (this.right > bounds.left)  );
  }

  static fromBoundingClientRect(boundingClientRect) {
    const top = boundingClientRect.top,
          left = boundingClientRect.left,
          bottom = boundingClientRect.bottom,
          right = boundingClientRect.right,
          bounds = new Bounds(top, left, bottom, right);

    return bounds;
  }
}

module.exports = Bounds;
