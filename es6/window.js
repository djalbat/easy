'use strict';

var $ = require('jquery');

var event = require('./delegate/event'),
    mouse = require('./delegate/mouse');

class Window {
  constructor() {
    mouse.delegateTo(this, Window);
  }

  on(events, handler, namespace) {
    events = event.appendNamespaceToEvents(events, namespace);

    $(window).on(events, handler);
  }

  off(events, namespace) {
    events = event.appendNamespaceToEvents(events, namespace);

    $(window).off(events);
  }

  onResize(handler, namespace) {
    var events = 'resize';

    events = event.appendNamespaceToEvents(events, namespace);

    $(window).on(events, handler);
  }

  offResize(namespace) {
    var events = 'resize';

    events = event.appendNamespaceToEvents(events, namespace);

    $(window).off(events);
  }
}

module.exports = new Window();  ///
