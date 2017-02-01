'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var event = function () {
  function event() {
    _classCallCheck(this, event);
  }

  _createClass(event, null, [{
    key: 'initialise',
    value: function initialise(element) {
      element.on = on;
      element.off = off;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWxlZ2F0ZS9ldmVudC5qcyJdLCJuYW1lcyI6WyJldmVudCIsImVsZW1lbnQiLCJvbiIsIm9mZiIsImV2ZW50cyIsIm5hbWVzcGFjZSIsInVuZGVmaW5lZCIsImV2ZW50c1N0cmluZyIsImV2ZW50U3RyaW5ncyIsInNwbGl0IiwibWFwIiwiZXZlbnRTdHJpbmciLCJqb2luIiwibW9kdWxlIiwiZXhwb3J0cyIsImhhbmRsZXIiLCJhcHBlbmROYW1lc3BhY2VUb0V2ZW50cyIsIiRlbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEs7Ozs7Ozs7K0JBQ2NDLE8sRUFBUztBQUN6QkEsY0FBUUMsRUFBUixHQUFhQSxFQUFiO0FBQ0FELGNBQVFFLEdBQVIsR0FBY0EsR0FBZDtBQUNEOzs7NENBRThCQyxNLEVBQVFDLFMsRUFBVztBQUNoRCxVQUFJQSxjQUFjQyxTQUFsQixFQUE2QjtBQUMzQixZQUFJQyxlQUFlSCxNQUFuQjtBQUFBLFlBQTJCO0FBQ3ZCSSx1QkFBZUQsYUFBYUUsS0FBYixDQUFtQixHQUFuQixDQURuQjs7QUFHQUQsdUJBQWVBLGFBQWFFLEdBQWIsQ0FBaUIsVUFBU0MsV0FBVCxFQUFzQjtBQUNwREEsd0JBQWlCQSxXQUFqQixTQUFnQ04sU0FBaEMsQ0FEb0QsQ0FDTjs7QUFFOUMsaUJBQU9NLFdBQVA7QUFDRCxTQUpjLENBQWY7O0FBTUFQLGlCQUFTSSxhQUFhSSxJQUFiLENBQWtCLEdBQWxCLENBQVQsQ0FWMkIsQ0FVTztBQUNuQzs7QUFFRCxhQUFPUixNQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCZCxLQUFqQjs7QUFFQSxTQUFTRSxFQUFULENBQVlFLE1BQVosRUFBb0JXLE9BQXBCLEVBQW9EO0FBQUEsTUFBdkJWLFNBQXVCLHVFQUFYQyxTQUFXOztBQUNsREYsV0FBU0osTUFBTWdCLHVCQUFOLENBQThCWixNQUE5QixFQUFzQ0MsU0FBdEMsQ0FBVDs7QUFFQSxPQUFLWSxRQUFMLENBQWNmLEVBQWQsQ0FBaUJFLE1BQWpCLEVBQXlCVyxPQUF6QjtBQUNEOztBQUVELFNBQVNaLEdBQVQsQ0FBYUMsTUFBYixFQUE0QztBQUFBLE1BQXZCQyxTQUF1Qix1RUFBWEMsU0FBVzs7QUFDMUNGLFdBQVNKLE1BQU1nQix1QkFBTixDQUE4QlosTUFBOUIsRUFBc0NDLFNBQXRDLENBQVQ7O0FBRUEsT0FBS1ksUUFBTCxDQUFjZCxHQUFkLENBQWtCQyxNQUFsQjtBQUNEIiwiZmlsZSI6ImV2ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBldmVudCB7XG4gIHN0YXRpYyBpbml0aWFsaXNlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50Lm9uID0gb247XG4gICAgZWxlbWVudC5vZmYgPSBvZmY7XG4gIH1cblxuICBzdGF0aWMgYXBwZW5kTmFtZXNwYWNlVG9FdmVudHMoZXZlbnRzLCBuYW1lc3BhY2UpIHtcbiAgICBpZiAobmFtZXNwYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBldmVudHNTdHJpbmcgPSBldmVudHMsIC8vL1xuICAgICAgICAgIGV2ZW50U3RyaW5ncyA9IGV2ZW50c1N0cmluZy5zcGxpdCgvIC8pO1xuXG4gICAgICBldmVudFN0cmluZ3MgPSBldmVudFN0cmluZ3MubWFwKGZ1bmN0aW9uKGV2ZW50U3RyaW5nKSB7XG4gICAgICAgIGV2ZW50U3RyaW5nID0gYCR7ZXZlbnRTdHJpbmd9LiR7bmFtZXNwYWNlfWA7ICAvLy9cblxuICAgICAgICByZXR1cm4gZXZlbnRTdHJpbmc7XG4gICAgICB9KTtcblxuICAgICAgZXZlbnRzID0gZXZlbnRTdHJpbmdzLmpvaW4oJyAnKTsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBldmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBldmVudDtcblxuZnVuY3Rpb24gb24oZXZlbnRzLCBoYW5kbGVyLCBuYW1lc3BhY2UgPSB1bmRlZmluZWQpIHtcbiAgZXZlbnRzID0gZXZlbnQuYXBwZW5kTmFtZXNwYWNlVG9FdmVudHMoZXZlbnRzLCBuYW1lc3BhY2UpO1xuXG4gIHRoaXMuJGVsZW1lbnQub24oZXZlbnRzLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmKGV2ZW50cywgbmFtZXNwYWNlID0gdW5kZWZpbmVkKSB7XG4gIGV2ZW50cyA9IGV2ZW50LmFwcGVuZE5hbWVzcGFjZVRvRXZlbnRzKGV2ZW50cywgbmFtZXNwYWNlKTtcblxuICB0aGlzLiRlbGVtZW50Lm9mZihldmVudHMpO1xufVxuIl19