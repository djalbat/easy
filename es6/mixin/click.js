'use strict';

function constructor(element) {
  element.clickHandlers = [];

  element.on('click', function (event) {
    const mouseTop = event.pageY,  ///
          mouseLeft = event.pageX, ///
          mouseButton = event.button; ///

    element.clickHandlers.forEach(function(clickHandler) {
      if (mouseButton === clickHandler.mouseButton) {
        const allowDefault = clickHandler.allowDefault;

        clickHandler(mouseTop, mouseLeft, mouseButton);

        return allowDefault;
      }
    });
  });
}

function onClick(clickHandler, mouseButton, allowDefault) {
  addClickHandler(this, clickHandler, mouseButton, allowDefault);
}

function offClick(clickHandler) {
  removeClickHandler(this, clickHandler);
}

const click = {
  constructor: constructor,
  onClick: onClick,
  offClick: offClick
};

click.LEFT_MOUSE_BUTTON = 0;
click.MIDDLE_MOUSE_BUTTON = 1;
click.RIGHT_MOUSE_BUTTON = 2;

module.exports = click;

function addClickHandler(element, clickHandler, mouseButton = click.LEFT_MOUSE_BUTTON, allowDefault = false) {
  clickHandler.mouseButton = mouseButton; ///
  clickHandler.allowDefault = allowDefault; ///

  element.clickHandlers.push(clickHandler);
}

function removeClickHandler(element, clickHandler) {
  const index = element.clickHandlers.indexOf(clickHandler);

  if (index > -1) {
    const deleteCount = 1;

    element.clickHandlers.splice(index, deleteCount);
  }
}

