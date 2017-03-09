'use strict';

function on(types, handler) {
  types = types.split(' '); ///

  types.forEach(function(type) {
    this.domElement.addEventListener(type, handler);
  }.bind(this));
}

function off(types, handler) {
  types = types.split(' '); ///

  types.forEach(function(type) {
    this.domElement.removeEventListener(type, handler);
  }.bind(this));
}

const event = {
  on: on,
  off: off
};

module.exports = event;