"use strict";

export function onResize(resizeHandler, element) {
  const resizeEventListeners = this.findEventListeners("resize");

  if (resizeEventListeners.length === 0) {
    addResizeObject(this);
  }

  this.addEventListener("resize", resizeHandler, element);
}

export function offResize(resizeHandler, element) {
  this.removeEventListener("resize", resizeHandler, element);

  const resizeEventListeners = this.findEventListeners("resize");
  
  if (resizeEventListeners.length === 0) {
    removeResizeObject(this);
  }
}

function addResizeObject(element) {
  const resizeObject = document.createElement("object"),
        domElement = element.getDOMElement(),
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

  element.__resizeObject__ = resizeObject;

  resizeObject.onload = () => resizeObjectLoadHandler(element);

  domElement.appendChild(resizeObject);
}

function removeResizeObject(element) {
  const domElement = element.getDOMElement(),
        resizeObject = element.__resizeObject__,
        objectWindow = resizeObject.contentDocument.defaultView;  ///

  objectWindow.removeEventListener("resize", resizeEventListener);

  domElement.removeChild(resizeObject);
}

function resizeObjectLoadHandler(element) {
  const resizeObject = element.__resizeObject__,
        resizeObjectWindow = resizeObject.contentDocument.defaultView;  ///

  resizeObjectWindow.addEventListener("resize", (event) => {
    const resizeEventListeners = findEventListeners(element);

    resizeEventListeners.forEach((resizeEventListener) => resizeEventListener(event));
  });
}
