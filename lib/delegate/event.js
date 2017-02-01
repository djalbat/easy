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
      var prototype = Object.getPrototypeOf(element);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWxlZ2F0ZS9ldmVudC5qcyJdLCJuYW1lcyI6WyJldmVudCIsImVsZW1lbnQiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsIm9uIiwib2ZmIiwiZXZlbnRzIiwibmFtZXNwYWNlIiwidW5kZWZpbmVkIiwiZXZlbnRzU3RyaW5nIiwiZXZlbnRTdHJpbmdzIiwic3BsaXQiLCJtYXAiLCJldmVudFN0cmluZyIsImpvaW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiaGFuZGxlciIsImFwcGVuZE5hbWVzcGFjZVRvRXZlbnRzIiwiJGVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSzs7Ozs7OzsrQkFDY0MsTyxFQUFTO0FBQ3pCLFVBQUlDLFlBQVlDLE9BQU9DLGNBQVAsQ0FBc0JILE9BQXRCLENBQWhCOztBQUVBQyxnQkFBVUcsRUFBVixHQUFlQSxFQUFmO0FBQ0FILGdCQUFVSSxHQUFWLEdBQWdCQSxHQUFoQjtBQUNEOzs7NENBRThCQyxNLEVBQVFDLFMsRUFBVztBQUNoRCxVQUFJQSxjQUFjQyxTQUFsQixFQUE2QjtBQUMzQixZQUFJQyxlQUFlSCxNQUFuQjtBQUFBLFlBQTJCO0FBQ3ZCSSx1QkFBZUQsYUFBYUUsS0FBYixDQUFtQixHQUFuQixDQURuQjs7QUFHQUQsdUJBQWVBLGFBQWFFLEdBQWIsQ0FBaUIsVUFBU0MsV0FBVCxFQUFzQjtBQUNwREEsd0JBQWlCQSxXQUFqQixTQUFnQ04sU0FBaEMsQ0FEb0QsQ0FDTjs7QUFFOUMsaUJBQU9NLFdBQVA7QUFDRCxTQUpjLENBQWY7O0FBTUFQLGlCQUFTSSxhQUFhSSxJQUFiLENBQWtCLEdBQWxCLENBQVQsQ0FWMkIsQ0FVTztBQUNuQzs7QUFFRCxhQUFPUixNQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCakIsS0FBakI7O0FBRUEsU0FBU0ssRUFBVCxDQUFZRSxNQUFaLEVBQW9CVyxPQUFwQixFQUFvRDtBQUFBLE1BQXZCVixTQUF1Qix1RUFBWEMsU0FBVzs7QUFDbERGLFdBQVNQLE1BQU1tQix1QkFBTixDQUE4QlosTUFBOUIsRUFBc0NDLFNBQXRDLENBQVQ7O0FBRUEsT0FBS1ksUUFBTCxDQUFjZixFQUFkLENBQWlCRSxNQUFqQixFQUF5QlcsT0FBekI7QUFDRDs7QUFFRCxTQUFTWixHQUFULENBQWFDLE1BQWIsRUFBNEM7QUFBQSxNQUF2QkMsU0FBdUIsdUVBQVhDLFNBQVc7O0FBQzFDRixXQUFTUCxNQUFNbUIsdUJBQU4sQ0FBOEJaLE1BQTlCLEVBQXNDQyxTQUF0QyxDQUFUOztBQUVBLE9BQUtZLFFBQUwsQ0FBY2QsR0FBZCxDQUFrQkMsTUFBbEI7QUFDRCIsImZpbGUiOiJldmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgZXZlbnQge1xuICBzdGF0aWMgaW5pdGlhbGlzZShlbGVtZW50KSB7XG4gICAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihlbGVtZW50KTtcblxuICAgIHByb3RvdHlwZS5vbiA9IG9uO1xuICAgIHByb3RvdHlwZS5vZmYgPSBvZmY7XG4gIH1cblxuICBzdGF0aWMgYXBwZW5kTmFtZXNwYWNlVG9FdmVudHMoZXZlbnRzLCBuYW1lc3BhY2UpIHtcbiAgICBpZiAobmFtZXNwYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBldmVudHNTdHJpbmcgPSBldmVudHMsIC8vL1xuICAgICAgICAgIGV2ZW50U3RyaW5ncyA9IGV2ZW50c1N0cmluZy5zcGxpdCgvIC8pO1xuXG4gICAgICBldmVudFN0cmluZ3MgPSBldmVudFN0cmluZ3MubWFwKGZ1bmN0aW9uKGV2ZW50U3RyaW5nKSB7XG4gICAgICAgIGV2ZW50U3RyaW5nID0gYCR7ZXZlbnRTdHJpbmd9LiR7bmFtZXNwYWNlfWA7ICAvLy9cblxuICAgICAgICByZXR1cm4gZXZlbnRTdHJpbmc7XG4gICAgICB9KTtcblxuICAgICAgZXZlbnRzID0gZXZlbnRTdHJpbmdzLmpvaW4oJyAnKTsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBldmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBldmVudDtcblxuZnVuY3Rpb24gb24oZXZlbnRzLCBoYW5kbGVyLCBuYW1lc3BhY2UgPSB1bmRlZmluZWQpIHtcbiAgZXZlbnRzID0gZXZlbnQuYXBwZW5kTmFtZXNwYWNlVG9FdmVudHMoZXZlbnRzLCBuYW1lc3BhY2UpO1xuXG4gIHRoaXMuJGVsZW1lbnQub24oZXZlbnRzLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmKGV2ZW50cywgbmFtZXNwYWNlID0gdW5kZWZpbmVkKSB7XG4gIGV2ZW50cyA9IGV2ZW50LmFwcGVuZE5hbWVzcGFjZVRvRXZlbnRzKGV2ZW50cywgbmFtZXNwYWNlKTtcblxuICB0aGlzLiRlbGVtZW50Lm9mZihldmVudHMpO1xufVxuIl19