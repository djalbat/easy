'use strict';

function onClick(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }
  
  this.on('click', handler); 
}

function offClick(handler) { this.off('click', handler); }

const click = {
  onClick: onClick,
  offClick: offClick
};

module.exports = click;

function defaultIntermediateHandler(handler, event) {
  const mouseTop = event.pageY,  ///
        mouseLeft = event.pageX, ///
        mouseButton = event.button, ///
        preventDefault = handler(mouseTop, mouseLeft, mouseButton);

  return preventDefault;
}
