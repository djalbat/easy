'use strict';

function on(eventTypes, handler, preventDefault = false, intermediateHandler = function(handler, event) { handler(event); }) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function(eventType) {
    const addEventListener = this.addHandler(eventType, handler, preventDefault, intermediateHandler);

    if (addEventListener) {
      this.domElement.addEventListener(eventType, eventListener.bind(this));
    }
  }.bind(this));
}

function off(eventTypes, handler) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function(eventType) {
    const removeEventListener = this.removeHandler(eventType, handler);
    
    if (removeEventListener) {
      this.domElement.removeEventListener(eventType, eventListener.bind(this));
    }
  }.bind(this));
}

function addHandler(eventType, handler, preventDefault, intermediateHandler ) {
  if (preventDefault !== undefined) {
    handler.preventDefault = preventDefault;
  }

  if (intermediateHandler !== undefined) {
    handler.intermediateHandler = intermediateHandler;
  }

  let addEventListener = false,
      handlers = this.handlersMap[eventType];

  if ((handlers === undefined)) {
    handlers = [];

    this.handlersMap[eventType] = handlers;

    addEventListener = true;
  }

  handlers.push(handler);

  return addEventListener;
}

function removeHandler(eventType, handler) {
  let removeEventListener = false,
      handlers = this.handlersMap[eventType];

  if ((handlers.length === 0)) {
    delete (this.handlersMap[eventType]);

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
  const eventType = event.type,
        handlers = this.handlersMap[eventType];

  handlers.forEach(function(handler) {
    handler.intermediateHandler(handler, event);

    if (handler.preventDefault) {
      event.preventDefault();
    }
  });
}
