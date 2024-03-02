"use strict";

function getState() {
  return this.state;
}

function setState(state) {
  this.state = state;
}

function updateState(state) {
  (this.state === undefined) ?
    this.state = state :
      Object.assign(this.state, state);
}

const stateMixins = {
  getState,
  setState,
  updateState
};

export default stateMixins;
