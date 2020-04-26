"use strict";

export function on(eventTypes, handler) {
  eventTypes = eventTypes.split(" "); ///

  eventTypes.forEach((eventType) => {
    const eventListener = this.addEventListener(eventType, handler);
    
    this.domElement.addEventListener(eventType, eventListener);
  });
}

export function off(eventTypes, handler) {
  eventTypes = eventTypes.split(" "); ///

  eventTypes.forEach((eventType) => {
    const eventListener = this.removeEventListener(eventType, handler);

    this.domElement.removeEventListener(eventType, eventListener);
  });
}

export function addEventListener(eventType, handler) {
  if (!this.hasOwnProperty("eventListeners")) {
    this.eventListeners = [];
  }

  const eventListeners = this.eventListeners,
        eventListener = createEventListener(eventType, handler, this);

  eventListeners.push(eventListener);

  return eventListener;
}

export function removeEventListener(eventType, handler) {
  const eventListeners = this.eventListeners,
        eventListener = eventListeners.find((eventListener) => ((eventListener.eventType === eventType) && (eventListener.handler === handler) && (eventListener.element === this))),
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
