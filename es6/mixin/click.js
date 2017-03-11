'use strict';

function onClick(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = function(handler, event) {
      const mouseTop = event.pageY,  ///
            mouseLeft = event.pageX, ///
            mouseButton = event.button, ///
            preventDefault = handler(mouseTop, mouseLeft, mouseButton);
      
      return preventDefault;
    }
  }
  this.on('click', handler); 
}

function offClick(handler) { this.off('click', handler); }

const click = {
  onClick: onClick,
  offClick: offClick
};

module.exports = click;

