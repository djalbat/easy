'use strict';

function onResize(handler) {
  const handlers = this.handlersMap['resize'];

  if (handlers === undefined) {
    appendResizeObject(this);
  }

  addResizeHandler(this, handler);
}

function offResize(handler) {
  removeResizeHandler(this, handler);

  const handlers = this.handlersMap['resize'];

  if (handlers === undefined) {
    removeResizeObject(this);
  }
}

const resize = {
  onResize: onResize,
  offResize: offResize
};

module.exports = resize;

function addResizeHandler(element, handler) {
  let handlers = element.handlersMap['resize'];

  if ((handlers === undefined)) {
    handlers = [];

    element.handlersMap['resize'] = handlers;
  }

  handlers.push(handler);
}

function removeResizeHandler(element, handler) {
  const handlers = element.handlersMap['resize'];

  if ((handlers.length === 0)) {
    delete (element.handlersMap[type]);
  } else {
    const index = handlers.indexOf(handler);

    if (index > -1) {
      const deleteCount = 1;

      handlers.splice(index, deleteCount);
    }
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
    intermediateHandler(element);
  });
}

function intermediateHandler(element) {
  const width = element.getWidth(),
        height = element.getHeight(),
        handlers = element.handlersMap['resize'];

  handlers.forEach(function(handler){
    handler(width, height);
  });
}
