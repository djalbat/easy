'use strict';

class Offset {
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

module.exports = Offset;
