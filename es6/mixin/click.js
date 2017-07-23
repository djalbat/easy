'use strict';

function onClick(handler, intermediateHandler = defaultIntermediateHandler) {
  this.on('click', handler, intermediateHandler);
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
        mouseButton = event.button; ///
  
  handler(mouseTop, mouseLeft, mouseButton, event, targetElement);
}
