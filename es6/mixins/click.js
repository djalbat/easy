'use strict';

function onClick(handler, element, intermediateHandler = defaultIntermediateHandler) {
  this.on('click', handler, element, intermediateHandler);
}

function offClick(handler, element) { this.off('click', handler, element); }

module.exports = {
  onClick,
  offClick
};

function defaultIntermediateHandler(handler, event, element) {
  const { pageY, pageX, button } = event,
				mouseTop = pageY,  ///
        mouseLeft = pageX, ///
        mouseButton = button; ///
  
  handler.call(element, mouseTop, mouseLeft, mouseButton, event);
}
