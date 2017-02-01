'use strict';

class event {
  static initialise(element) {
    element.on = on;
    element.off = off;
  }

  static appendNamespaceToEvents(events, namespace) {
    if (namespace !== undefined) {
      events = events + '.' + namespace;
    }

    return events;
  }
}

module.exports = event;

function on(events, handler, namespace = undefined) {
  events = event.appendNamespaceToEvents(events, namespace);

  this.$element.on(events, handler);
}

function off(events, namespace = undefined) {
  events = event.appendNamespaceToEvents(events, namespace);

  this.$element.off(events);
}
