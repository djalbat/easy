'use strict';

function onKeyUp(handler, object, intermediateHandler = defaultIntermediateHandler) {
  this.on('keyup', handler, object, intermediateHandler);
}

function onKeyDown(handler, object, intermediateHandler = defaultIntermediateHandler) {
  this.on('keydown', handler, object, intermediateHandler);
}

function offKeyUp(handler, object) { this.off('keyup', handler, object); }

function offKeyDown(handler, object) { this.off('keydown', handler, object); }

module.exports = {
  onKeyUp,
  onKeyDown,
  offKeyUp,
  offKeyDown
};

function defaultIntermediateHandler(handler, event, targetElement) {
  const keyCode = event.keyCode;
  
  handler(keyCode, event, targetElement);
}
