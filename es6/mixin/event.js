'use strict';

function on(types, handler, preventDefault = true, intermediateHandler = function(handler, event) { handler(event); }) {
  types = types.split(' '); ///

  types.forEach(function(type) {
    const addEventListener = this.addHandler(type, handler, preventDefault, intermediateHandler);

    if (addEventListener) {
      this.domElement.addEventListener(type, eventListener.bind(this));
    }
  }.bind(this));
}

function off(types, handler) {
  types = types.split(' '); ///

  types.forEach(function(type) {
    const removeEventListener = this.removeHandler(type, handler);
    
    if (removeEventListener) {
      this.domElement.removeEventListener(type, eventListener.bind(this));
    }
  }.bind(this));
}

function addHandler(type, handler, preventDefault, intermediateHandler ) {
  if (preventDefault !== undefined) {
    handler.preventDefault = preventDefault;
  }

  if (intermediateHandler !== undefined) {
    handler.intermediateHandler = intermediateHandler;
  }

  let addEventListener = false,
      handlers = this.handlersMap[type];

  if ((handlers === undefined)) {
    handlers = [];

    this.handlersMap[type] = handlers;

    addEventListener = true;
  }

  handlers.push(handler);

  return addEventListener;
}

function removeHandler(type, handler) {
  let removeEventListener = false,
      handlers = this.handlersMap[type];

  if ((handlers.length === 0)) {
    delete (this.handlersMap[type]);

    removeEventListener = true;
  } else {
    const index = handlers.indexOf(handler);

    if (index > -1) {
      const deleteCount = 1;

      handlers.splice(index, deleteCount);
    }
  }

  return removeEventListener;
}

const event = {
  on: on,
  off: off,
  addHandler: addHandler,
  removeHandler: removeHandler
};

module.exports = event;

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
