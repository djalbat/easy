'use strict';

function on(eventTypes, handler) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function(eventType) {
    onEvent(this, eventType, handler);
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

function onEvent(element, eventType, handler) {
  if (element.eventObjectMap === undefined) {
    element.eventObjectMap = {};

  }

  let eventObject = element.eventObjectMap[eventType];

  if (!eventObject) {
    eventObject = createEventObject();

    eventObject.addEventListener(element, eventType);

    element.eventObjectMap[eventType] = eventObject;
  }

  eventObject.addHandler(handler);
}

function offEvent(element, eventType, handler) {
  const eventObject = element.eventObjectMap[eventType];

  const empty = eventObject.removeHandler(handler);

  if (empty) {
    eventObject.removeEventListener(element, eventType);

    delete element.eventObjectMap[eventType];
  }

  const eventTypes = Object.keys(element.eventObjectMap);

  if (eventTypes.length === 0) {
    delete element.eventObjectMap;
  }
}

function createEventObject() {
  const handlers = [];

  function eventListener(event) {
    const eventTarget = event.target,
          targetElement = eventTarget.__element__;  ///

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

    event.stopPropagation();
  }

  function addHandler(handler) {
    handlers.push(handler);
  }

  function removeHandler(handler = null) {
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

    const empty = (handlers.length === 0);

    return empty;
  }

  function addEventListener(element, eventType) {
    element.domElement.addEventListener(eventType, eventListener);
  }

  function removeEventListener(element, eventType) {
    element.domElement.removeEventListener(eventType, eventListener);
  }

  return {
    addHandler: addHandler,
    removeHandler: removeHandler,
    addEventListener: addEventListener,
    removeEventListener: removeEventListener
  };
}
