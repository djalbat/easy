'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('./util');

var event = function () {
  function event() {
    _classCallCheck(this, event);
  }

  _createClass(event, null, [{
    key: 'delegateTo',
    value: function delegateTo(element, Class) {
      var prototype = util.findPrototype(element, Class);

      prototype.on = on;
      prototype.off = off;
    }
  }, {
    key: 'appendNamespaceToEvents',
    value: function appendNamespaceToEvents(events, namespace) {
      if (namespace !== undefined) {
        var eventsString = events,
            ///
        eventStrings = eventsString.split(/ /);

        eventStrings = eventStrings.map(function (eventString) {
          eventString = eventString + '.' + namespace; ///

          return eventString;
        });

        events = eventStrings.join(' '); ///
      }

      return events;
    }
  }]);

  return event;
}();

module.exports = event;

function on(events, handler) {
  var namespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  events = event.appendNamespaceToEvents(events, namespace);

  this.$element.on(events, handler);
}

function off(events) {
  var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  events = event.appendNamespaceToEvents(events, namespace);

  this.$element.off(events);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWxlZ2F0ZS9ldmVudC5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsImV2ZW50IiwiZWxlbWVudCIsIkNsYXNzIiwicHJvdG90eXBlIiwiZmluZFByb3RvdHlwZSIsIm9uIiwib2ZmIiwiZXZlbnRzIiwibmFtZXNwYWNlIiwidW5kZWZpbmVkIiwiZXZlbnRzU3RyaW5nIiwiZXZlbnRTdHJpbmdzIiwic3BsaXQiLCJtYXAiLCJldmVudFN0cmluZyIsImpvaW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiaGFuZGxlciIsImFwcGVuZE5hbWVzcGFjZVRvRXZlbnRzIiwiJGVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDs7SUFFTUMsSzs7Ozs7OzsrQkFDY0MsTyxFQUFTQyxLLEVBQU87QUFDaEMsVUFBSUMsWUFBWUwsS0FBS00sYUFBTCxDQUFtQkgsT0FBbkIsRUFBNEJDLEtBQTVCLENBQWhCOztBQUVBQyxnQkFBVUUsRUFBVixHQUFlQSxFQUFmO0FBQ0FGLGdCQUFVRyxHQUFWLEdBQWdCQSxHQUFoQjtBQUNEOzs7NENBRThCQyxNLEVBQVFDLFMsRUFBVztBQUNoRCxVQUFJQSxjQUFjQyxTQUFsQixFQUE2QjtBQUMzQixZQUFJQyxlQUFlSCxNQUFuQjtBQUFBLFlBQTJCO0FBQ3ZCSSx1QkFBZUQsYUFBYUUsS0FBYixDQUFtQixHQUFuQixDQURuQjs7QUFHQUQsdUJBQWVBLGFBQWFFLEdBQWIsQ0FBaUIsVUFBU0MsV0FBVCxFQUFzQjtBQUNwREEsd0JBQWlCQSxXQUFqQixTQUFnQ04sU0FBaEMsQ0FEb0QsQ0FDTjs7QUFFOUMsaUJBQU9NLFdBQVA7QUFDRCxTQUpjLENBQWY7O0FBTUFQLGlCQUFTSSxhQUFhSSxJQUFiLENBQWtCLEdBQWxCLENBQVQsQ0FWMkIsQ0FVTztBQUNuQzs7QUFFRCxhQUFPUixNQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCakIsS0FBakI7O0FBRUEsU0FBU0ssRUFBVCxDQUFZRSxNQUFaLEVBQW9CVyxPQUFwQixFQUFvRDtBQUFBLE1BQXZCVixTQUF1Qix1RUFBWEMsU0FBVzs7QUFDbERGLFdBQVNQLE1BQU1tQix1QkFBTixDQUE4QlosTUFBOUIsRUFBc0NDLFNBQXRDLENBQVQ7O0FBRUEsT0FBS1ksUUFBTCxDQUFjZixFQUFkLENBQWlCRSxNQUFqQixFQUF5QlcsT0FBekI7QUFDRDs7QUFFRCxTQUFTWixHQUFULENBQWFDLE1BQWIsRUFBNEM7QUFBQSxNQUF2QkMsU0FBdUIsdUVBQVhDLFNBQVc7O0FBQzFDRixXQUFTUCxNQUFNbUIsdUJBQU4sQ0FBOEJaLE1BQTlCLEVBQXNDQyxTQUF0QyxDQUFUOztBQUVBLE9BQUtZLFFBQUwsQ0FBY2QsR0FBZCxDQUFrQkMsTUFBbEI7QUFDRCIsImZpbGUiOiJldmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuY2xhc3MgZXZlbnQge1xuICBzdGF0aWMgZGVsZWdhdGVUbyhlbGVtZW50LCBDbGFzcykge1xuICAgIHZhciBwcm90b3R5cGUgPSB1dGlsLmZpbmRQcm90b3R5cGUoZWxlbWVudCwgQ2xhc3MpO1xuXG4gICAgcHJvdG90eXBlLm9uID0gb247XG4gICAgcHJvdG90eXBlLm9mZiA9IG9mZjtcbiAgfVxuXG4gIHN0YXRpYyBhcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSkge1xuICAgIGlmIChuYW1lc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGV2ZW50c1N0cmluZyA9IGV2ZW50cywgLy8vXG4gICAgICAgICAgZXZlbnRTdHJpbmdzID0gZXZlbnRzU3RyaW5nLnNwbGl0KC8gLyk7XG5cbiAgICAgIGV2ZW50U3RyaW5ncyA9IGV2ZW50U3RyaW5ncy5tYXAoZnVuY3Rpb24oZXZlbnRTdHJpbmcpIHtcbiAgICAgICAgZXZlbnRTdHJpbmcgPSBgJHtldmVudFN0cmluZ30uJHtuYW1lc3BhY2V9YDsgIC8vL1xuXG4gICAgICAgIHJldHVybiBldmVudFN0cmluZztcbiAgICAgIH0pO1xuXG4gICAgICBldmVudHMgPSBldmVudFN0cmluZ3Muam9pbignICcpOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGV2ZW50cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50O1xuXG5mdW5jdGlvbiBvbihldmVudHMsIGhhbmRsZXIsIG5hbWVzcGFjZSA9IHVuZGVmaW5lZCkge1xuICBldmVudHMgPSBldmVudC5hcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSk7XG5cbiAgdGhpcy4kZWxlbWVudC5vbihldmVudHMsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmYoZXZlbnRzLCBuYW1lc3BhY2UgPSB1bmRlZmluZWQpIHtcbiAgZXZlbnRzID0gZXZlbnQuYXBwZW5kTmFtZXNwYWNlVG9FdmVudHMoZXZlbnRzLCBuYW1lc3BhY2UpO1xuXG4gIHRoaXMuJGVsZW1lbnQub2ZmKGV2ZW50cyk7XG59XG4iXX0=