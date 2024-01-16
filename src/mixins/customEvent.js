"use strict";

import { SPACE } from "../constants";
import { forEach } from "../utilities/async";

function onCustomEvent(customEventTypes, handler, element = this) {
  customEventTypes = customEventTypes.split(SPACE);

  customEventTypes.forEach((customEventType) => {
    const eventType = customEventType;  ///

    this.addEventListener(eventType, handler, element);
  });
}

function offCustomEvent(customEventTypes, handler, element = this) {
  customEventTypes = customEventTypes.split(SPACE);

  customEventTypes.forEach((customEventType) => {
    const eventType = customEventType;  ///

    this.removeEventListener(eventType, handler, element);
  });
}

function callCustomHandlers(customEventType, ...remainingArguments) {
  const eventListeners = this.findEventListeners(customEventType);

  eventListeners.forEach((eventListener) => {
    const { handler: customHandler, element: customHandlerElement } = eventListener,
          element = this; ///

    customHandler.call(customHandlerElement, ...remainingArguments, element);
  });
}

function callCustomHandlersAsync(customEventType, ...remainingArguments) {
  const eventListeners = this.findEventListeners(customEventType),
        done = remainingArguments.pop();  ///

  forEach(eventListeners, (eventListener, next) => {
    const { handler: customHandler, element: customHandlerElement } = eventListener,
          element = this, ///
          done = next;  ///

    customHandler.call(customHandlerElement, ...remainingArguments, element, done);
  }, done);
}

const customEventMixins = {
  onCustomEvent,
  offCustomEvent,
  callCustomHandlers,
  callCustomHandlersAsync
};

export default customEventMixins;
