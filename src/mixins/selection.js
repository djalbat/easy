"use strict";

import { SELECTIONCHANGE_EVENT_TYPE } from "../eventTypes";

function onSelectionChange(selectionChangeHandler, element) { this.on(SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element); }

function offSelectionChange(selectionChangeHandler, element) { this.off(SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element); }

function createEventListener(eventType, handler, element) {
  let eventListener;

  const handlerElement = element; ///

  eventListener = (event) => {
    if (eventType === SELECTIONCHANGE_EVENT_TYPE) {
      const { domElement } = handlerElement,
            { currentTarget } = event,
            { activeElement } = currentTarget;

      if (domElement !== activeElement) {
        return;
      }
    }

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

const selectionMixins = {
  onSelectionChange,
  offSelectionChange,
  createEventListener
};

export default selectionMixins;
