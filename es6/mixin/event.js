'use strict';

function on(eventTypes, handler, object = null, intermediateHandler = null) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function(eventType) {
    const eventListener = this.addEventListener(eventType, handler, object, intermediateHandler);
    
    this.domElement.addEventListener(eventType, eventListener);
  }.bind(this));
}

function off(eventTypes, handler, object = null) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function(eventType) {
    const eventListener = this.removeEventListener(eventType, handler, object);

    this.domElement.removeEventListener(eventType, eventListener);
  }.bind(this));
}

const eventMixin = {
  on: on,
  off: off,
  addEventListener: addEventListener,
  removeEventListener: removeEventListener
};

module.exports = eventMixin;

function addEventListener(eventType, handler, object, intermediateHandler) {
  if (!this.hasOwnProperty('eventListeners')) {
    this.eventListeners = [];
  }
  
  const targetElement = this, ///
        eventListeners = this.eventListeners,
        eventListener = createEventListener(targetElement, eventType, handler, object, intermediateHandler);

  eventListeners.push(eventListener);

  return eventListener;
}

function removeEventListener(eventType, handler, object) {
  const eventListeners = this.eventListeners,
        eventListener = findEventListener(eventListeners, eventType, handler, object),
        index = eventListeners.indexOf(eventListener),
        start = index,  ///
        deleteCount = 1;

  eventListeners.splice(start, deleteCount);

  if (eventListeners.length === 0) {
    delete this.eventListeners;
  }
  
  return eventListener;
}

function createEventListener(targetElement, eventType, handler, object, intermediateHandler) {
  let eventListener;
  
  if (intermediateHandler === null) {
    eventListener = function(event) {
      handler.call(object, event, targetElement)
    };
  } else {
    eventListener = function(event) {
      intermediateHandler(function(event) {
        handler.call(object, ...arguments);
      }, event, targetElement);
    }
  }

  Object.assign(eventListener, {
    eventType: eventType,
    handler: handler,
    object: object
  });

  return eventListener;
}

function findEventListener(eventListeners, eventType, handler, object) {
  const eventListener = eventListeners.find(function(eventListener) {
    const found = ( (eventListener.object === object) && 
                    (eventListener.handler === handler) && 
                    (eventListener.eventType === eventType) );  ///
    
    return found;
  });
  
  return eventListener;
}
