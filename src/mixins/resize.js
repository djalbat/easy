"use strict";

import { RESIZE_EVENT_TYPE } from "../eventTypes";
import { OBJECT, TEXT_HTML, ABOUT_BLANK } from "../constants";

export function onResize(resizeHandler, element) { this.onEvent(RESIZE_EVENT_TYPE, resizeHandler, element); }

export function offResize(resizeHandler, element) { this.offEvent(RESIZE_EVENT_TYPE, resizeHandler, element); }

function addResizeObject() {
  const resizeObject = document.createElement(OBJECT),
        type = TEXT_HTML,  ///
        data = ABOUT_BLANK, ///
        style = `display: block; 
                 position: absolute; 
                 top: 0; 
                 left: 0; 
                 height: 100%; 
                 width: 100%; 
                 overflow: hidden; 
                 pointer-events: none; 
                 z-index: -1;`;

  Object.assign(resizeObject, {
    type,
    data
  });

  resizeObject.setAttribute("style", style);

  this.__resizeObject__ = resizeObject; ///

  resizeObject.onload = () => {
    resizeObjectLoadHandler(this);
  };

  this.domElement.appendChild(resizeObject);
}

function removeResizeObject() {
  const resizeObject = this.__resizeObject__, ///
        objectWindow = resizeObject.contentDocument.defaultView;  ///

  objectWindow.removeEventListener(RESIZE_EVENT_TYPE, resizeEventListener);

  this.domElement.removeChild(resizeObject);

  delete this.__resizeObject__;
}

const resizeMixins = {
  onResize,
  offResize,
  addResizeObject,
  removeResizeObject
};

export default resizeMixins;

function resizeObjectLoadHandler(element) {
  const resizeObject = element.__resizeObject__,
        resizeObjectWindow = resizeObject.contentDocument.defaultView;  ///

  resizeObjectWindow.addEventListener(RESIZE_EVENT_TYPE, (event) => {
    const resizeEventListeners = element.findEventListeners(RESIZE_EVENT_TYPE);

    resizeEventListeners.forEach((resizeEventListener) => {
      resizeEventListener(event);
    });
  });
}
