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
        events = events + '.' + namespace;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWxlZ2F0ZS9ldmVudC5qcyJdLCJuYW1lcyI6WyJldmVudCIsImVsZW1lbnQiLCJvbiIsIm9mZiIsImV2ZW50cyIsIm5hbWVzcGFjZSIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJoYW5kbGVyIiwiYXBwZW5kTmFtZXNwYWNlVG9FdmVudHMiLCIkZWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxLOzs7Ozs7OytCQUNjQyxPLEVBQVM7QUFDekJBLGNBQVFDLEVBQVIsR0FBYUEsRUFBYjtBQUNBRCxjQUFRRSxHQUFSLEdBQWNBLEdBQWQ7QUFDRDs7OzRDQUU4QkMsTSxFQUFRQyxTLEVBQVc7QUFDaEQsVUFBSUEsY0FBY0MsU0FBbEIsRUFBNkI7QUFDM0JGLGlCQUFTQSxTQUFTLEdBQVQsR0FBZUMsU0FBeEI7QUFDRDs7QUFFRCxhQUFPRCxNQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCUixLQUFqQjs7QUFFQSxTQUFTRSxFQUFULENBQVlFLE1BQVosRUFBb0JLLE9BQXBCLEVBQW9EO0FBQUEsTUFBdkJKLFNBQXVCLHVFQUFYQyxTQUFXOztBQUNsREYsV0FBU0osTUFBTVUsdUJBQU4sQ0FBOEJOLE1BQTlCLEVBQXNDQyxTQUF0QyxDQUFUOztBQUVBLE9BQUtNLFFBQUwsQ0FBY1QsRUFBZCxDQUFpQkUsTUFBakIsRUFBeUJLLE9BQXpCO0FBQ0Q7O0FBRUQsU0FBU04sR0FBVCxDQUFhQyxNQUFiLEVBQTRDO0FBQUEsTUFBdkJDLFNBQXVCLHVFQUFYQyxTQUFXOztBQUMxQ0YsV0FBU0osTUFBTVUsdUJBQU4sQ0FBOEJOLE1BQTlCLEVBQXNDQyxTQUF0QyxDQUFUOztBQUVBLE9BQUtNLFFBQUwsQ0FBY1IsR0FBZCxDQUFrQkMsTUFBbEI7QUFDRCIsImZpbGUiOiJldmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgZXZlbnQge1xuICBzdGF0aWMgaW5pdGlhbGlzZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5vbiA9IG9uO1xuICAgIGVsZW1lbnQub2ZmID0gb2ZmO1xuICB9XG5cbiAgc3RhdGljIGFwcGVuZE5hbWVzcGFjZVRvRXZlbnRzKGV2ZW50cywgbmFtZXNwYWNlKSB7XG4gICAgaWYgKG5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBldmVudHMgPSBldmVudHMgKyAnLicgKyBuYW1lc3BhY2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV2ZW50cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50O1xuXG5mdW5jdGlvbiBvbihldmVudHMsIGhhbmRsZXIsIG5hbWVzcGFjZSA9IHVuZGVmaW5lZCkge1xuICBldmVudHMgPSBldmVudC5hcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSk7XG5cbiAgdGhpcy4kZWxlbWVudC5vbihldmVudHMsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmYoZXZlbnRzLCBuYW1lc3BhY2UgPSB1bmRlZmluZWQpIHtcbiAgZXZlbnRzID0gZXZlbnQuYXBwZW5kTmFtZXNwYWNlVG9FdmVudHMoZXZlbnRzLCBuYW1lc3BhY2UpO1xuXG4gIHRoaXMuJGVsZW1lbnQub2ZmKGV2ZW50cyk7XG59XG4iXX0=