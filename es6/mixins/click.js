'use strict';

function onClick(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on('click', handler, element, intermediateHandler);
}

function offClick(handler, element) { this.off('click', handler, element); }

module.exports = {
  onClick,
  offClick
};

function defaultIntermediateHandler(handler, event, targetElement) {
  const mouseTop = event.pageY,  ///
        mouseLeft = event.pageX, ///
        mouseButton = event.button; ///
  
  handler(mouseTop, mouseLeft, mouseButton, event, targetElement);
}
