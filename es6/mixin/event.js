'use strict';

function on(eventTypes, handler, intermediateHandler) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function(eventType) {
    onEvent(this, eventType, handler, intermediateHandler);
  }.bind(this));
}

function off(eventTypes, handler) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function(eventType) {
    offEvent(this, eventType, handler);
  }.bind(this));
}

const eventMixin = {
  on: on,
  off: off
};

module.exports = eventMixin;

function onEvent(element, eventType, handler, intermediateHandler) {
  if (!element.hasOwnProperty('eventObjectMap')) {
    const eventObjectMap = {};

    element.eventObjectMap = eventObjectMap;
  }

  const eventObjectMap = element.eventObjectMap;

  if (!eventObjectMap.hasOwnProperty(eventType)) {
    const eventObject = createEventObject();

    eventObjectMap[eventType] = eventObject;
  }

  const eventObject = eventObjectMap[eventType];

  eventObject.addHandler(element, eventType, handler, intermediateHandler);
}

function offEvent(element, eventType, handler) {
  const eventObject = element.eventObjectMap[eventType],
        noneRemaining = eventObject.removeHandler(element, eventType, handler);

  if (noneRemaining) {
    delete element.eventObjectMap[eventType];
  }

  const eventTypes = Object.keys(element.eventObjectMap);

  if (eventTypes.length === 0) {
    delete element.eventObjectMap;
  }
}

function createEventObject() {
  const eventListeners = [];

  function addHandler(element, eventType, handler, intermediateHandler) {
    const targetElement = element,  ///
          eventListener = createEventListener(handler, intermediateHandler, targetElement);

    element.domElement.addEventListener(eventType, eventListener);

    eventListeners.push(eventListener);
  }

  function removeHandler(element, eventType, handler = null) {
    if (handler === null) {
      eventListeners.forEach(function(eventListener) {
        element.domElement.removeEventListener(eventType, eventListener);
      });

      const start = 0;

      eventListeners.splice(start);
    } else {
      const index = indexOfEventListener(eventListeners, handler),
            eventListener = eventListeners[index];

      element.domElement.removeEventListener(eventType, eventListener);

      const start = index,  ///
            deleteCount = 1;

      eventListeners.splice(start, deleteCount);
    }

    const noneRemaining = (eventListeners.length === 0);  ///

    return noneRemaining;
  }

  return {
    addHandler: addHandler,
    removeHandler: removeHandler
  };
}

function createEventListener(handler, intermediateHandler, targetElement) {
  if (typeof intermediateHandler === 'object') {
    const object = intermediateHandler;  ///

    intermediateHandler = createBindingIntermediateHandler(object); ///
  }

  const eventListener = function(event) {
    (intermediateHandler !== undefined) ?
      intermediateHandler(handler, event, targetElement) :
        handler(event, event, targetElement);
  };

  Object.assign(eventListener, {
    handler: handler
  });

  return eventListener;
}

function createBindingIntermediateHandler(object) {
  const bindingIntermediateHandler = function(handler, event, targetElement) {
    handler.call(object, event, targetElement);
  };

  return bindingIntermediateHandler;
}

function indexOfEventListener(eventListeners, handler) {
  let foundIndex = undefined; ///

  eventListeners.forEach(function(eventListener, index) {
    if (eventListener.handler === handler) {  ///
      foundIndex = index;
    }
  });

  const index = foundIndex; ///

  return index;
}
