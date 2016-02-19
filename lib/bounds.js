'use strict';

var Bounds = function(top, left, bottom, right) {
  this.top = top;
  this.left = left;
  this.bottom = bottom;
  this.right = right;
};

Bounds.prototype = {
  getTop: function() {
    return this.top;
  },

  getLeft: function() {
    return this.left;
  },

  getBottom: function() {
    return this.bottom;
  },

  getRight: function() {
    return this.right;
  },

  areOverlapping: function(bounds) {
    return this.top <= bounds.bottom
        && this.left <= bounds.right
        && this.bottom >= bounds.top
        && this.right >= bounds.left;
  }
};

module.exports = Bounds;
