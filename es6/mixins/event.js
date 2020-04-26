"use strict";

export function on(eventTypes, handler, element = this) {
  eventTypes = eventTypes.split(" "); ///

  eventTypes.forEach((eventType) => {
    const eventListener = this.addEventListener(eventType, handler, element);
    
    this.domElement.addEventListener(eventType, eventListener);
  });
}

export function off(eventTypes, handler, element = this) {
  eventTypes = eventTypes.split(" "); ///

  eventTypes.forEach((eventType) => {
    const eventListener = this.removeEventListener(eventType, handler, element);

    this.domElement.removeEventListener(eventType, eventListener);
  });
}

export function addEventListener(eventType, handler, element) {
  if (!this.hasOwnProperty("eventListeners")) {
    this.eventListeners = [];
  }

  const eventListeners = this.eventListeners,
        eventListener = createEventListener(eventType, handler, element);

  eventListeners.push(eventListener);

  return eventListener;
}

export function removeEventListener(eventType, handler, element) {
  const eventListeners = this.eventListeners,
        eventListener = eventListeners.find((eventListener) => ((eventListener.eventType === eventType) && (eventListener.element === element) && (eventListener.handler === handler))),
        index = eventListeners.indexOf(eventListener),
        start = index,  ///
        deleteCount = 1;

  eventListeners.splice(start, deleteCount);

  if (eventListeners.length === 0) {
    delete this.eventListeners;
  }

  return eventListener;
}

function createEventListener(eventType, handler, element) {
  let eventListener;

  eventListener = (event) => {
    handler.call(element, event, element)
  };

  Object.assign(eventListener, {
    eventType,
    handler,
    element
  });

  return eventListener;
}
