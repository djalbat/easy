'use strict';

function onClick(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }
  
  this.on('click', handler); 
}

function offClick(handler) { this.off('click', handler); }

const clickMixin = {
  onClick: onClick,
  offClick: offClick
};

module.exports = clickMixin;

function defaultIntermediateHandler(handler, event, targetElement) {
  const mouseTop = event.pageY,  ///
        mouseLeft = event.pageX, ///
        mouseButton = event.button, ///
        preventDefault = handler(mouseTop, mouseLeft, mouseButton, targetElement);

  return preventDefault;
}
