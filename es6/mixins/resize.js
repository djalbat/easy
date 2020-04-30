"use strict";

export function onResize(resizeHandler, element) { this.on("resize", resizeHandler, element); }

export function offResize(resizeHandler, element) { this.off("resize", resizeHandler, element); }

export function addResizeObject() {
  const resizeObject = document.createElement("object"),
        style = `display: block; 
                 position: absolute; 
                 top: 0; 
                 left: 0; 
                 height: 100%; 
                 width: 100%; 
                 overflow: hidden; 
                 pointer-events: none; 
                 z-index: -1;`,
        data = "about:blank",
        type = "text/html";

  resizeObject.setAttribute("style", style);
  resizeObject.data = data;
  resizeObject.type = type;

  this.__resizeObject__ = resizeObject;

  resizeObject.onload = () => resizeObjectLoadHandler(this);

  this.domElement.appendChild(resizeObject);
}

export function removeResizeObject() {
  const resizeObject = this.__resizeObject__,
        objectWindow = resizeObject.contentDocument.defaultView;  ///

  objectWindow.removeEventListener("resize", resizeEventListener);

  this.domElement.removeChild(resizeObject);
}

function resizeObjectLoadHandler(element) {
  const resizeObject = element.__resizeObject__,
        resizeObjectWindow = resizeObject.contentDocument.defaultView;  ///

  resizeObjectWindow.addEventListener("resize", (event) => {
    const resizeEventListeners = element.findEventListeners("resize");

    resizeEventListeners.forEach((resizeEventListener) => resizeEventListener.call(element, event, element));
  });
}
