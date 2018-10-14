'use strict';

function on(eventTypes, handler, element = this, intermediateHandler = null) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function(eventType) {
    const eventListener = this.addEventListener(eventType, handler, element, intermediateHandler);
    
    this.domElement.addEventListener(eventType, eventListener);
  }.bind(this));
}

function off(eventTypes, handler, element = this) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function(eventType) {
    const eventListener = this.removeEventListener(eventType, handler, element);

    this.domElement.removeEventListener(eventType, eventListener);
  }.bind(this));
}

module.exports = {
  on,
  off,
  addEventListener,
  removeEventListener
};

function addEventListener(eventType, handler, element, intermediateHandler) {
  if (!this.hasOwnProperty('eventListeners')) {
    this.eventListeners = [];
  }
  
  const eventListeners = this.eventListeners,
        eventListener = createEventListener(eventType, handler, element, intermediateHandler);

  eventListeners.push(eventListener);

  return eventListener;
}

function removeEventListener(eventType, handler, element) {
  const eventListeners = this.eventListeners,
        eventListener = findEventListener(eventListeners, eventType, handler, element),
        index = eventListeners.indexOf(eventListener),
        start = index,  ///
        deleteCount = 1;

  eventListeners.splice(start, deleteCount);

  if (eventListeners.length === 0) {
    delete this.eventListeners;
  }
  
  return eventListener;
}

function createEventListener(eventType, handler, element, intermediateHandler) {
  let eventListener;

  if (intermediateHandler === null) {
    eventListener = function(event) {
      handler.call(element, event)
    };
  } else {
    eventListener = function(event) {
      intermediateHandler(handler, event, element);
    }
  }

  Object.assign(eventListener, {
    eventType,
    handler,
    element
  });

  return eventListener;
}

function findEventListener(eventListeners, eventType, handler, element) {
  const eventListener = eventListeners.find(function(eventListener) {
    const found = ( (eventListener.element === element) &&
                    (eventListener.handler === handler) &&
                    (eventListener.eventType === eventType) );  ///
    
    return found;
  });
  
  return eventListener;
}
