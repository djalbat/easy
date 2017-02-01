'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var event = require('./delegate/event'),
    mouse = require('./delegate/mouse');

var Document = function () {
  function Document() {
    _classCallCheck(this, Document);

    mouse.initialise(this);
  }

  _createClass(Document, [{
    key: 'on',
    value: function on(events, handler, namespace) {
      events = event.appendNamespaceToEvents(events, namespace);

      $(document).on(events, handler);
    }
  }, {
    key: 'off',
    value: function off(events, namespace) {
      events = event.appendNamespaceToEvents(events, namespace);

      $(document).off(events);
    }
  }]);

  return Document;
}();

module.exports = new Document(); ///
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImV2ZW50IiwibW91c2UiLCJEb2N1bWVudCIsImluaXRpYWxpc2UiLCJldmVudHMiLCJoYW5kbGVyIiwibmFtZXNwYWNlIiwiYXBwZW5kTmFtZXNwYWNlVG9FdmVudHMiLCJkb2N1bWVudCIsIm9uIiwib2ZmIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsUUFBUixDQUFSOztBQUVBLElBQUlDLFFBQVFELFFBQVEsa0JBQVIsQ0FBWjtBQUFBLElBQ0lFLFFBQVFGLFFBQVEsa0JBQVIsQ0FEWjs7SUFHTUcsUTtBQUNKLHNCQUFjO0FBQUE7O0FBQ1pELFVBQU1FLFVBQU4sQ0FBaUIsSUFBakI7QUFDRDs7Ozt1QkFFRUMsTSxFQUFRQyxPLEVBQVNDLFMsRUFBVztBQUM3QkYsZUFBU0osTUFBTU8sdUJBQU4sQ0FBOEJILE1BQTlCLEVBQXNDRSxTQUF0QyxDQUFUOztBQUVBUixRQUFFVSxRQUFGLEVBQVlDLEVBQVosQ0FBZUwsTUFBZixFQUF1QkMsT0FBdkI7QUFDRDs7O3dCQUVHRCxNLEVBQVFFLFMsRUFBVztBQUNyQkYsZUFBU0osTUFBTU8sdUJBQU4sQ0FBOEJILE1BQTlCLEVBQXNDRSxTQUF0QyxDQUFUOztBQUVBUixRQUFFVSxRQUFGLEVBQVlFLEdBQVosQ0FBZ0JOLE1BQWhCO0FBQ0Q7Ozs7OztBQUdITyxPQUFPQyxPQUFQLEdBQWlCLElBQUlWLFFBQUosRUFBakIsQyxDQUFrQyIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxudmFyIGV2ZW50ID0gcmVxdWlyZSgnLi9kZWxlZ2F0ZS9ldmVudCcpLFxuICAgIG1vdXNlID0gcmVxdWlyZSgnLi9kZWxlZ2F0ZS9tb3VzZScpO1xuXG5jbGFzcyBEb2N1bWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIG1vdXNlLmluaXRpYWxpc2UodGhpcyk7XG4gIH1cblxuICBvbihldmVudHMsIGhhbmRsZXIsIG5hbWVzcGFjZSkge1xuICAgIGV2ZW50cyA9IGV2ZW50LmFwcGVuZE5hbWVzcGFjZVRvRXZlbnRzKGV2ZW50cywgbmFtZXNwYWNlKTtcblxuICAgICQoZG9jdW1lbnQpLm9uKGV2ZW50cywgaGFuZGxlcik7XG4gIH1cblxuICBvZmYoZXZlbnRzLCBuYW1lc3BhY2UpIHtcbiAgICBldmVudHMgPSBldmVudC5hcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSk7XG5cbiAgICAkKGRvY3VtZW50KS5vZmYoZXZlbnRzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBEb2N1bWVudCgpOyAgLy8vXG4iXX0=