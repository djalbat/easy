"use strict";

import { SPACE } from "../constants";
import { RESIZE_EVENT_TYPE } from "../eventTypes";
import { removeResizeObject } from "../mixins/resize";

function onEvent(eventTypes, handler, element = this) {
  eventTypes = eventTypes.split(SPACE);

  eventTypes.forEach((eventType) => {
    if (eventType === RESIZE_EVENT_TYPE) {
      const resizeEventListeners = this.findEventListeners(RESIZE_EVENT_TYPE),
            resizeEventListenersLength = resizeEventListeners.length;

      if (resizeEventListenersLength === 0) {
        this.addResizeObject();
      }
    }

    const eventListener = this.addEventListener(eventType, handler, element);

    this.domElement.addEventListener(eventType, eventListener);
  });
}

function offEvent(eventTypes, handler, element = this) {
  eventTypes = eventTypes.split(SPACE);

  eventTypes.forEach((eventType) => {
    const eventListener = this.removeEventListener(eventType, handler, element);

    this.domElement.removeEventListener(eventType, eventListener);

    if (eventType === RESIZE_EVENT_TYPE) {
      const resizeEventListeners = this.findEventListeners(RESIZE_EVENT_TYPE),
            resizeEventListenersLength = resizeEventListeners.length;

      if (resizeEventListenersLength === 0) {
        this.removeResizeObject();
      }
    }
  });
}

function addEventListener(eventType, handler, element) {
  const eventListener = this.createEventListener(eventType, handler, element);

  if (!this.eventListeners) {
    this.eventListeners = [];
  }

  this.eventListeners.push(eventListener);

  return eventListener;
}

function removeEventListener(eventType, handler, element) {
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
    if ((eventListener.element === element) && (eventListener.handler === handler) && (eventListener.eventType === eventType)) {
      return true;
    }
  });

  return eventListener;
}

function findEventListeners(eventType) {
  const eventListeners = [];

  if (this.eventListeners) {
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

  const handlerElement = element; ///

  eventListener = (event) => {
    const element = this; ///

    handler.call(handlerElement, event, element);
  };

  Object.assign(eventListener, {
    element,
    handler,
    eventType
  });

  return eventListener;
}

const eventMixins = {
  onEvent,
  offEvent,
  addEventListener,
  removeEventListener,
  findEventListener,
  findEventListeners,
  createEventListener
};

export default eventMixins;
