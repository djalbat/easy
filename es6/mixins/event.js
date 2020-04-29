"use strict";

export function on(eventTypes, handler, element) {
  eventTypes = eventTypes.split(" "); ///

  eventTypes.forEach((eventType) => {
    const eventListener = this.addEventListener(eventType, handler, element);
    
    this.domElement.addEventListener(eventType, eventListener);
  });
}

export function off(eventTypes, handler, element) {
  eventTypes = eventTypes.split(" "); ///

  eventTypes.forEach((eventType) => {
    const eventListener = this.removeEventListener(eventType, handler, element);

    this.domElement.removeEventListener(eventType, eventListener);
  });
}

export function addEventListener(eventType, handler, element = this) {
  if (!this.hasOwnProperty("eventListeners")) {
    this.eventListeners = [];
  }

  const eventListener = createEventListener(eventType, handler, element);

  this.eventListeners.push(eventListener);

  return eventListener;
}

export function removeEventListener(eventType, handler, element = this) {
  const eventListener = this.findEventListener(eventType, handler, element),
        index = this.eventListeners.indexOf(eventListener),
        start = index,  ///
        deleteCount = 1;

  this.eventListeners.splice(start, deleteCount);

  if (this.eventListeners.length === 0) {
    delete this.eventListeners;
  }

  return eventListener;
}

export function findEventListener(eventTYpe, handler, element) {
  const eventListener = this.eventListeners.find((eventListener) => ((eventListener.eventType === eventType) && (eventListener.handler === handler) && (eventListener.element === element)));

  return eventListener;
}

export function findEventListeners(eventType) {
  const eventListeners = [];

  if (this.hasOwnProperty("eventListeners")) {
    this.eventListeners.forEach((eventListener) => {
      if (eventListener.eventType === eventType) {
        const eventListener = eventListener;

        this.eventListeners.push(eventListener);
      }
    });
  }

  return eventListeners;
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
