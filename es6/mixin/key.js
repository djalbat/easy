'use strict';

function onKeyUp(handler, intermediateHandler = defaultIntermediateHandler) {
  this.on('keyup', handler, intermediateHandler);
}

function onKeyDown(handler, intermediateHandler = defaultIntermediateHandler) {
  this.on('keydown', handler, intermediateHandler);
}

function offKeyUp(handler) { this.off('keyup', handler); }

function offKeyDown(handler) { this.off('keydown', handler); }

const keyMixin = {
  onKeyUp: onKeyUp,
  onKeyDown: onKeyDown,
  offKeyUp: offKeyUp,
  offKeyDown: offKeyDown
};

module.exports = keyMixin;

function defaultIntermediateHandler(handler, event, targetElement) {
  const keyCode = event.keyCode,
        preventDefault = handler(keyCode, targetElement);

  return preventDefault;
}
