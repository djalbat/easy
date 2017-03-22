'use strict';

function onResize(handler) {
  const eventType = 'resize',
        addEventListener = this.addHandler(eventType, handler);

  if (addEventListener) {
    appendResizeObject(this);
  }
}

function offResize(handler) {
  const eventType = 'resize',
        removeEventListener = this.removeHandler(eventType, handler);

  if (removeEventListener) {
    removeResizeObject(this);
  }
}

const resizeMixin = {
  onResize: onResize,
  offResize: offResize
};

module.exports = resizeMixin;

function appendResizeObject(element) {
  const resizeObject = document.createElement('object'),
        domElement = element.domElement,
        style = `display: block; 
                 position: absolute; 
                 top: 0; 
                 left: 0; 
                 height: 100%; 
                 width: 100%; 
                 overflow: hidden; 
                 pointer-events: none; 
                 z-index: -1;`;

  resizeObject.setAttribute('style', style);
  resizeObject.data = 'about:blank';
  resizeObject.type = 'text/html';

  element.__resizeObject__ = resizeObject;

  resizeObject.onload = function() {
    resizeObjectLoadHandler(element)
  };

  domElement.appendChild(resizeObject);
}

function removeResizeObject(element) {
  const domElement = element.domElement,
        resizeObject = element.__resizeObject__,
        objectWindow = resizeObject.contentDocument.defaultView;  ///

  objectWindow.removeEventListener('resize', resizeListener);

  domElement.removeChild(resizeObject);
}

function resizeObjectLoadHandler(element) {
  const resizeObject = element.__resizeObject__,
        resizeObjectWindow = resizeObject.contentDocument.defaultView;  ///

  resizeObjectWindow.addEventListener('resize', function() {
    eventListener(element);
  });
}

function eventListener(element) {
  const width = element.getWidth(),
        height = element.getHeight(),
        handlers = element.handlersMap['resize'];

  handlers.forEach(function(handler){
    handler(width, height);
  });
}
