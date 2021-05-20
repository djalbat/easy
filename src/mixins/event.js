"use strict";

import { SPACE, RESIZE } from "../constants";
import { removeResizeObject } from "../mixins/resize";

function on(eventTypes, handler, element) {
  eventTypes = eventTypes.split(SPACE);

  eventTypes.forEach((eventType) => {
    if (eventType === RESIZE) {
      const resizeEventListeners = this.findEventListeners(RESIZE),
            resizeEventListenersLength = resizeEventListeners.length;

      if (resizeEventListenersLength === 0) {
        this.addResizeObject();
      }
    }

    const eventListener = this.addEventListener(eventType, handler, element);

    this.domElement.addEventListener(eventType, eventListener);
  });
}

function off(eventTypes, handler, element) {
  eventTypes = eventTypes.split(SPACE);

  eventTypes.forEach((eventType) => {
    const eventListener = this.removeEventListener(eventType, handler, element);

    this.domElement.removeEventListener(eventType, eventListener);

    if (eventType === RESIZE) {
      const resizeEventListeners = this.findEventListeners(RESIZE),
            resizeEventListenersLength = resizeEventListeners.length;

      if (resizeEventListenersLength === 0) {
        removeResizeObject(this);
      }
    }
  });
}

function addEventListener(eventType, handler, element = this) {
  if (this.eventListeners === undefined) {
    this.eventListeners = [];
  }

  const eventListener = createEventListener(eventType, handler, element);

  this.eventListeners.push(eventListener);

  return eventListener;
}

function removeEventListener(eventType, handler, element = this) {
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

function findEventListener(eventType, handler, element) {
  const eventListener = this.eventListeners.find((eventListener) => {
    const found = ( (eventListener.element === element) &&
                    (eventListener.handler === handler) &&
                    (eventListener.eventType === eventType) );

    if (found) {
      return true;
    }
  });

  return eventListener;
}

function findEventListeners(eventType) {
  const eventListeners = [];

  if (this.eventListeners !== undefined) {
    this.eventListeners.forEach((eventListener) => {
      const found = (eventListener.eventType === eventType);

      if (found) {
        eventListeners.push(eventListener);
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
    element,
    handler,
    eventType
  });

  return eventListener;
}

const eventMixins = {
  on,
  off,
  addEventListener,
  removeEventListener,
  findEventListener,
  findEventListeners
};

export default eventMixins;
