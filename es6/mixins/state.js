"use strict";

export function getState() {
  return this.state;
}

export function setState(state) {
  this.state = state;
}

export function updateState(state) {
  Object.assign(this.state, state);
}
