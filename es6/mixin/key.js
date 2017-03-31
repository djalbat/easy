'use strict';

function onKeyUp(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }
  
  this.on('keyup', handler); 
}

function onKeyDown(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('keydown', handler); 
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
