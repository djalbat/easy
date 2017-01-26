'use strict';

var $ = require('jquery');

class Window {
  on(events, handler, namespace) {
    events = appendNamespaceToEvents(events, namespace);

    $(window).on(events, handler);
  }

  off(events, namespace) {
    events = appendNamespaceToEvents(events, namespace);

    $(window).off(events);
  }

  onResize(handler, namespace) {
    var events = 'resize';

    events = appendNamespaceToEvents(events, namespace);

    $(window).on(events, handler);
  }

  offResize(namespace) {
    var events = 'resize';

    events = appendNamespaceToEvents(events, namespace);

    $(window).off(events);
  }
}

module.exports = new Window();  ///

function appendNamespaceToEvents(events, namespace) {
  if (namespace !== undefined) {
    events = events + '.' + namespace;
  }

  return events;
}
