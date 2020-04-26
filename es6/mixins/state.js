"use strict";

export function getState() {
  return this.state;
}

export function setState(state) {
  this.state = state;
}

export function updateState(update) {
  Object.assign(this.state, update);
}
