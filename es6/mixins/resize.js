'use strict';

function onResize(handler, object, intermediateHandler = defaultIntermediateResizeHandler) {
  const element = this, ///
        resizeEventListeners = findResizeEventListeners(element);

  if (resizeEventListeners.length === 0) {
    addResizeObject(element);
  }

  const eventType = 'resize';

  this.addEventListener(eventType, handler, object, intermediateHandler);
}

function offResize(handler, object) {
  const eventType = 'resize';

  this.removeEventListener(eventType, handler, object);

  const element = this, ///
        resizeEventListeners = findResizeEventListeners(element);
  
  if (resizeEventListeners.length === 0) {
    removeResizeObject(element);
  }
}

module.exports = {
  onResize,
  offResize
};

function addResizeObject(element) {
  const resizeObject = document.createElement('object'),
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
        data = 'about:blank',
        type = 'text/html';

  resizeObject.setAttribute('style', style);
  resizeObject.data = data;
  resizeObject.type = type;

  element.__resizeObject__ = resizeObject;

  resizeObject.onload = function() {
    resizeObjectLoadHandler(element)
  };

  domElement.appendChild(resizeObject);
}

function removeResizeObject(element) {
  const domElement = element.getDOMElement(),
        resizeObject = element.__resizeObject__,
        objectWindow = resizeObject.contentDocument.defaultView;  ///

  objectWindow.removeEventListener('resize', resizeEventListener);

  domElement.removeChild(resizeObject);
}

function resizeObjectLoadHandler(element) {
  const resizeObject = element.__resizeObject__,
        resizeObjectWindow = resizeObject.contentDocument.defaultView;  ///

  resizeObjectWindow.addEventListener('resize', function(event) {
    const resizeEventListeners = findResizeEventListeners(element);

    resizeEventListeners.forEach(function(resizeEventListener){
      resizeEventListener(event);
    });
  });
}

function defaultIntermediateResizeHandler(handler, event, targetElement) {
  const window = targetElement, ///
        width = window.getWidth(),
        height = window.getHeight();

  handler(width, height, event, targetElement);
}

function findResizeEventListeners(element) {
  const resizeEventListeners = [];
  
  if (element.hasOwnProperty('eventListeners')) {
    const eventListeners = element.eventListeners;  ///

    eventListeners.forEach(function(eventListener) {
      if (eventListener.eventType === 'resize') {
        const resizeEventListener = eventListener;

        resizeEventListeners.push(resizeEventListener);
      }      
    });
  }  
  
  return resizeEventListeners;
}
