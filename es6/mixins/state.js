"use strict";

function getState() {
  return this.state;
}

function setState(state) {
  this.state = state;
}

function updateState(state) {
  Object.assign(this.state, state);
}

export default {
  getState,
  setState,
  updateState
};
