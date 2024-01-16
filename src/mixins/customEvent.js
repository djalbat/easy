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

const customEventMixins = {
  onCustomEvent,
  offCustomEvent
};

export default customEventMixins;
