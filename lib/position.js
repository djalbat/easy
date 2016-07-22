'use strict';

class Position {
  constructor(top, left) {
    this.top = top;
    this.left = left;
  }

  getTop() {
    return this.top;
  }

  getLeft() {
    return this.left;
  }
}

module.exports = Position;
