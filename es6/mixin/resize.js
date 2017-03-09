'use strict';

function constructor(element) {
  element.resizeHandlers = [];
}

function onResize(resizeHandler) {
  const resizeHandlers = hasResizeHandlers(this);

  if (!resizeHandlers) {
    appendResizeObject(this);
  }

  addResizeHandler(this, resizeHandler);
}

function offResize(resizeHandler) {
  removeResizeHandler(this, resizeHandler);

  const resizeHandlers = hasResizeHandlers(this);

  if (!resizeHandlers) {
    removeResizeObject(this);
  }
}

const resize = {
  constructor: constructor,
  onResize: onResize,
  offResize: offResize
};

module.exports = resize;

function hasResizeHandlers(element) {
  const resizeHandlersLength = element.resizeHandlers.length,
        resizeHandlers = (resizeHandlersLength > 0);

  return resizeHandlers;
}

function addResizeHandler(element, resizeHandler) {
  element.resizeHandlers.push(resizeHandler);
}

function removeResizeHandler(element, resizeHandler) {
  const index = element.resizeHandlers.indexOf(resizeHandler);

  if (index > -1) {
    const deleteCount = 1;

    element.resizeHandlers.splice(index, deleteCount);
  }
}

function appendResizeObject(element) {
  const resizeObject = document.createElement('object'),
        domElement = element.domElement,
        style = ` display: block; 
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

  domElement.appendChild(resizeObject);

  element.__resizeObject__ = resizeObject;

  resizeObject.onload = function() {
    resizeObjectLoadHandler(element)
  };
}

function removeResizeObject(element) {
  const domElement = element.domElement,
        resizeObject = element.__resizeObject__,
        objectWindow = resizeObject.contentDocument.defaultView;  ///

  objectWindow.removeEventListener('resize', resizeListener);

  domElement.removeChild(resizeObject);
}

function resizeObjectLoadHandler(element) {
  const width = element.getWidth(),
        height = element.getHeight();

  element.resizeHandlers.forEach(function(resizeHandler){
    resizeHandler(width, height);
  });
}
