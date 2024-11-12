"use strict";

import keyMixins from "./mixins/key";
import eventMixins from "./mixins/event";
import mouseMixins from "./mixins/mouse";
import clickMixins from "./mixins/click";
import selectionMixins from "./mixins/selection";

import { UNDEFINED } from "./constants";
import { SELECTIONCHANGE_EVENT_TYPE } from "./eventTypes";

class Document {
  constructor() {
    this.domElement = document; ///
  }

  getDOMElement() {
    return this.domElement;
  }

  getSelection() { return this.domElement.getSelection(); }

  createRange() { return this.domElement.createRange(); }

  createTextNode(data) { return this.domElement.createTextNode(data); }

  onSelectionChange(selectionChangeHandler, element) { this.onEvent(SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element); } ///

  offSelectionChange(selectionChangeHandler, element) { this.offEvent(SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element); } ///

  createEventListener(eventType, handler, element) {
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
}

Object.assign(Document.prototype, keyMixins);
Object.assign(Document.prototype, eventMixins);
Object.assign(Document.prototype, mouseMixins);
Object.assign(Document.prototype, clickMixins);
Object.assign(Document.prototype, selectionMixins);

export default (typeof document === UNDEFINED) ? undefined : new Document();  ///
