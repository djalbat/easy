'use strict';

var $ = require('jquery');

class Document {
  on(events, handler, namespace) {
    events = appendNamespaceToEvents(events, namespace);

    $(document).on(events, handler);
  }

  off(events, namespace) {
    events = appendNamespaceToEvents(events, namespace);

    $(document).off(events);
  }
}

module.exports = new Document();  ///

function appendNamespaceToEvents(events, namespace) {
  if (namespace !== undefined) {
    events = events + '.' + namespace;
  }

  return events;
}
