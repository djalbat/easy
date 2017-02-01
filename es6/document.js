'use strict';

var $ = require('jquery');

var event = require('./delegate/event'),
    mouse = require('./delegate/mouse');

class Document {
  constructor() {
    mouse.initialise(this);
  }

  on(events, handler, namespace) {
    events = event.appendNamespaceToEvents(events, namespace);

    $(document).on(events, handler);
  }

  off(events, namespace) {
    events = event.appendNamespaceToEvents(events, namespace);

    $(document).off(events);
  }
}

module.exports = new Document();  ///
