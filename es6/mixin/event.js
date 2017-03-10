'use strict';

function on(types, handler, preventDefault, intermediateHandler) {
  types = types.split(' '); ///

  types.forEach(function(type) {
    addHandler(this, type, handler, preventDefault, intermediateHandler);
  }.bind(this));
}

function off(types, handler) {
  types = types.split(' '); ///

  types.forEach(function(type) {
    removeHandler(this, type, handler);
  }.bind(this));
}

const event = {
  on: on,
  off: off
};

module.exports = event;

function addHandler(element, type, handler, preventDefault = true, intermediateHandler = defaultIntermediateHandler) {
  let handlers = element.handlersMap[type];

  if ((handlers === undefined)) {
    handlers = [];

    element.handlersMap[type] = handlers;

    element.domElement.addEventListener(type, eventListener.bind(element));
  }

  handler.preventDefault = preventDefault;
  handler.intermediateHandler = intermediateHandler;
  
  handlers.push(handler);
}

function removeHandler(element, type, handler) {
  const handlers = element.handlersMap[type];

  if ((handlers.length === 0)) {
    delete (element.handlersMap[type]);
    
    element.domElement.removeEventListener(type, eventListener.bind(element));
  } else {
    const index = handlers.indexOf(handler);

    if (index > -1) {
      const deleteCount = 1;

      handlers.splice(index, deleteCount);
    }
  }
}

function eventListener(event) {
  const type = event.type,
        handlers = this.handlersMap[type];

  handlers.forEach(function(handler) {
    handler.intermediateHandler(handler, event);

    if (handler.preventDefault) {
      event.preventDefault();
    }
  });
}

function defaultIntermediateHandler(handler, event) {
  handler(event);
}
