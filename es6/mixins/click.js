'use strict';

function onClick(handler, object, intermediateHandler = defaultIntermediateHandler) {
  this.on('click', handler, object, intermediateHandler);
}

function offClick(handler, object) { this.off('click', handler, object); }

module.exports = {
  onClick: onClick,
  offClick: offClick
};

function defaultIntermediateHandler(handler, event, targetElement) {
  const mouseTop = event.pageY,  ///
        mouseLeft = event.pageX, ///
        mouseButton = event.button; ///
  
  handler(mouseTop, mouseLeft, mouseButton, event, targetElement);
}
