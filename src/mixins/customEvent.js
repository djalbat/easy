"use strict";

import { SPACE } from "../constants";
import { forEach } from "../utilities/async";

function onCustomEvent(customEventTypes, customHandler, element = this) {
  customEventTypes = customEventTypes.split(SPACE); ///

  customEventTypes.forEach((customEventType) => {
    this.addCustomEventListener(customEventType, customHandler, element);
  });
}

function offCustomEvent(customEventTypes, customHandler, element = this) {
  customEventTypes = customEventTypes.split(SPACE); ///

  customEventTypes.forEach((customEventType) => {
    this.removeCustomEventListener(customEventType, customHandler, element);
  });
}

function callCustomHandlers(customEventType, ...remainingArguments) {
  const customEventListeners = this.findCustomEventListeners(customEventType);

  customEventListeners.forEach((customEventListener) => {
    const { customHandler, element: customHandlerElement } = customEventListener; ///

    customHandler.call(customHandlerElement, ...remainingArguments);
  });
}

function callCustomHandlersAsync(customEventType, ...remainingArguments) {
  const customEventListeners = this.findCustomEventListeners(customEventType),
        done = remainingArguments.pop();  ///

  forEach(customEventListeners, (customEventListener, next) => {
    const { customHandler, element: customHandlerElement } = customEventListener,
          done = next;  ///

    customHandler.call(customHandlerElement, ...remainingArguments, done);
  }, done);
}

function addCustomEventListener(customEventType, customHandler, element) {
  const customEventListener = this.createCustomEventListener(customEventType, customHandler, element);

  if (!this.customEventListeners) {
    this.customEventListeners = [];
  }

  this.customEventListeners.push(customEventListener);

  return customEventListener;
}

function removeCustomEventListener(customEventType, customHandler, element) {
  const customEventListener = this.findCustomEventListener(customEventType, customHandler, element),
        index = this.customEventListeners.indexOf(customEventListener),
        start = index,  ///
        deleteCount = 1;

  this.customEventListeners.splice(start, deleteCount);

  if (this.customEventListeners.length === 0) {
    delete this.customEventListeners;
  }

  return customEventListener;
}

function findCustomEventListener(customEventType, customHandler, element) {
  const customEventListener = this.customEventListeners.find((customEventListener) => {
    if ((customEventListener.element === element) && (customEventListener.customHandler === customHandler) && (customEventListener.customEventType === customEventType)) {
      return true;
    }
  });

  return customEventListener;
}

function findCustomEventListeners(customEventType) {
  const customEventListeners = [];

  if (this.customEventListeners) {
    this.customEventListeners.forEach((customEventListener) => {
      const found = (customEventListener.customEventType === customEventType);

      if (found) {
        customEventListeners.push(customEventListener);
      }
    });
  }

  return customEventListeners;
}

function createCustomEventListener(customEventType, customHandler, element) {
  let customEventListener;

  customEventListener = () => {}; ///

  Object.assign(customEventListener, {
    element,
    customHandler,
    customEventType
  });

  return customEventListener;
}

const customEventMixins = {
  onCustomEvent,
  offCustomEvent,
  callCustomHandlers,
  callCustomHandlersAsync,
  addCustomEventListener,
  removeCustomEventListener,
  findCustomEventListener,
  findCustomEventListeners,
  createCustomEventListener
};

export default customEventMixins;
