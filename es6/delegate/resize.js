'use strict';

class resize {
  static initialise(element) {
    var prototype = Object.getPrototypeOf(element);

    element.resizeHandlers = [];

    prototype.onResize = onResize;
    prototype.offResize = offResize;
  }
}

module.exports = resize;

function onResize(resizeHandler) {
  var resizeHandlers = hasResizeHandlers(this);

  if (!resizeHandlers) {
    appendResizeObject(this);
  }

  addResizeHandler(this, resizeHandler);
}

function offResize(resizeHandler) {
  removeResizeHandler(this, resizeHandler);

  var resizeHandlers = hasResizeHandlers(this);

  if (!resizeHandlers) {
    removeResizeObject(this);
  }
}

function hasResizeHandlers(element) {
  var resizeHandlersLength = element.resizeHandlers.length,
      resizeHandlers = (resizeHandlersLength > 0);

  return resizeHandlers;
}

function addResizeHandler(element, resizeHandler) {
  element.resizeHandlers.push(resizeHandler);
}

function removeResizeHandler(element, resizeHandler) {
  var index = element.resizeHandlers.indexOf(resizeHandler); ///

  if (index > -1) {
    var deleteCount = 1;

    element.resizeHandlers.splice(index, deleteCount);
  }
}

function appendResizeObject(element) {
  var resizeObject = document.createElement('object'),
      domElement = element.$element[0],  ///
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

  domElement.__resizeObject__ = resizeObject;

  resizeObject.onload = function() {
    resizeObjectLoadHandler(resizeObject, element)
  };

  domElement.appendChild(resizeObject);
}

function removeResizeObject(element) {
  var domElement = element.$element[0],  ///
      resizeObject = domElement.__resizeObject__,
      objectWindow = resizeObject.contentDocument.defaultView;  ///

  objectWindow.removeEventListener('resize', resizeListener);

  domElement.removeChild(resizeObject);
}

function resizeObjectLoadHandler(resizeObject, element) {
  var resizeObjectWindow = resizeObject.contentDocument.defaultView;  ///

  resizeObjectWindow.addEventListener('resize', function() {
    resizeListener(element);
  });
}

function resizeListener(element) {
  var width = element.getWidth(),
      height = element.getHeight();

  element.resizeHandlers.forEach(function(resizeHandler){
    resizeHandler(width, height);
  });
}
