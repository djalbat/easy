'use strict';

function onClick(handler, preventDefault, intermediateHandler = topLeftButtonIntermediateHandler) { this.on('click', handler, preventDefault, intermediateHandler); }

function offClick(handler) { this.off('click', handler); }

const click = {
  onClick: onClick,
  offClick: offClick
};

module.exports = click;

function topLeftButtonIntermediateHandler(handler, event) {
  const mouseTop = event.pageY,  ///
        mouseLeft = event.pageX, ///
        mouseButton = event.button; ///

  handler(mouseTop, mouseLeft, mouseButton);
}
