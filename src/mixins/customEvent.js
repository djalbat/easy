"use strict";

import { SPACE } from "../constants";

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
    let { element } = eventListener;

    const { handler } = eventListener;

    const customHandler = handler,  ///
          customHandlerElement = element; ///

    element = this; ///

    customHandler.call(customHandlerElement, ...remainingArguments, element);
  });
}

const customEventMixins = {
  onCustomEvent,
  offCustomEvent,
  callCustomHandlers
};

export default customEventMixins;
