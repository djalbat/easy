'use strict';

function on(eventTypes, handler) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function(eventType) {
    const addEventListener = this.addHandler(eventType, handler);

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

function addHandler(eventType, handler) {
  let addEventListener = false,
      handlers = this.handlersMap[eventType];

  if (handlers === undefined) {
    handlers = [];

    this.handlersMap[eventType] = handlers;

    addEventListener = true;
  }

  handlers.push(handler);

  return addEventListener;
}

function removeHandler(eventType, handler = null) {
  let removeEventListener = false;

  const handlers = this.handlersMap[eventType];

  if (handler === null) {
    const start = 0;

    handlers.splice(start);
  } else {
    const index = handlers.indexOf(handler);

    if (index > -1) {
      const start = index,  ///
            deleteCount = 1;

      handlers.splice(start, deleteCount);
    }
  }

  if (handlers.length === 0) {  ///
    delete (this.handlersMap[eventType]);

    removeEventListener = true;
  }

  return removeEventListener;
}

const eventMixin = {
  on: on,
  off: off,
  addHandler: addHandler,
  removeHandler: removeHandler
};

module.exports = eventMixin;

function eventListener(event) {
  const eventType = event.type,
        targetElement = this,  ///
        handlers = this.handlersMap[eventType];

  let preventEventDefault = false;

  handlers.forEach(function(handler) {
    if (handler.intermediateHandler !== undefined) {
      const preventDefault = handler.intermediateHandler(handler, event, targetElement);
      
      if (preventDefault === true) {
        preventEventDefault = true;
      }  
    } else {
      const preventDefault = handler(event, targetElement);
      
      if (preventDefault === true) {
        preventEventDefault = true;
      }
    }
  });
  
  if (preventEventDefault) {
    event.preventDefault();
  }
}
