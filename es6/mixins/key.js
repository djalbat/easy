'use strict';

function onKeyUp(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on('keyup', handler, element, intermediateHandler);
}

function onKeyDown(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on('keydown', handler, element, intermediateHandler);
}

function offKeyUp(handler, element) { this.off('keyup', handler, element); }

function offKeyDown(handler, element) { this.off('keydown', handler, element); }

module.exports = {
  onKeyUp,
  onKeyDown,
  offKeyUp,
  offKeyDown
};

function defaultIntermediateHandler(handler, event, element) {
  const { keyCode } = event;
  
  handler.call(element, keyCode, event);
}
