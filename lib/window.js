'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var Window = function () {
  function Window() {
    _classCallCheck(this, Window);
  }

  _createClass(Window, [{
    key: 'on',
    value: function on(events, handler, namespace) {
      events = appendNamespaceToEvents(events, namespace);

      $(window).on(events, handler);
    }
  }, {
    key: 'off',
    value: function off(events, namespace) {
      events = appendNamespaceToEvents(events, namespace);

      $(window).off(events);
    }
  }, {
    key: 'onResize',
    value: function onResize(handler, namespace) {
      var events = 'resize';

      events = appendNamespaceToEvents(events, namespace);

      $(window).on(events, handler);
    }
  }, {
    key: 'offResize',
    value: function offResize(namespace) {
      var events = 'resize';

      events = appendNamespaceToEvents(events, namespace);

      $(window).off(events);
    }
  }]);

  return Window;
}();

module.exports = new Window(); ///

function appendNamespaceToEvents(events, namespace) {
  if (namespace !== undefined) {
    events = events + '.' + namespace;
  }

  return events;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJXaW5kb3ciLCJldmVudHMiLCJoYW5kbGVyIiwibmFtZXNwYWNlIiwiYXBwZW5kTmFtZXNwYWNlVG9FdmVudHMiLCJ3aW5kb3ciLCJvbiIsIm9mZiIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxJQUFJQyxRQUFRLFFBQVIsQ0FBUjs7SUFFTUMsTTs7Ozs7Ozt1QkFDREMsTSxFQUFRQyxPLEVBQVNDLFMsRUFBVztBQUM3QkYsZUFBU0csd0JBQXdCSCxNQUF4QixFQUFnQ0UsU0FBaEMsQ0FBVDs7QUFFQUwsUUFBRU8sTUFBRixFQUFVQyxFQUFWLENBQWFMLE1BQWIsRUFBcUJDLE9BQXJCO0FBQ0Q7Ozt3QkFFR0QsTSxFQUFRRSxTLEVBQVc7QUFDckJGLGVBQVNHLHdCQUF3QkgsTUFBeEIsRUFBZ0NFLFNBQWhDLENBQVQ7O0FBRUFMLFFBQUVPLE1BQUYsRUFBVUUsR0FBVixDQUFjTixNQUFkO0FBQ0Q7Ozs2QkFFUUMsTyxFQUFTQyxTLEVBQVc7QUFDM0IsVUFBSUYsU0FBUyxRQUFiOztBQUVBQSxlQUFTRyx3QkFBd0JILE1BQXhCLEVBQWdDRSxTQUFoQyxDQUFUOztBQUVBTCxRQUFFTyxNQUFGLEVBQVVDLEVBQVYsQ0FBYUwsTUFBYixFQUFxQkMsT0FBckI7QUFDRDs7OzhCQUVTQyxTLEVBQVc7QUFDbkIsVUFBSUYsU0FBUyxRQUFiOztBQUVBQSxlQUFTRyx3QkFBd0JILE1BQXhCLEVBQWdDRSxTQUFoQyxDQUFUOztBQUVBTCxRQUFFTyxNQUFGLEVBQVVFLEdBQVYsQ0FBY04sTUFBZDtBQUNEOzs7Ozs7QUFHSE8sT0FBT0MsT0FBUCxHQUFpQixJQUFJVCxNQUFKLEVBQWpCLEMsQ0FBZ0M7O0FBRWhDLFNBQVNJLHVCQUFULENBQWlDSCxNQUFqQyxFQUF5Q0UsU0FBekMsRUFBb0Q7QUFDbEQsTUFBSUEsY0FBY08sU0FBbEIsRUFBNkI7QUFDM0JULGFBQVNBLFNBQVMsR0FBVCxHQUFlRSxTQUF4QjtBQUNEOztBQUVELFNBQU9GLE1BQVA7QUFDRCIsImZpbGUiOiJ3aW5kb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIG9uKGV2ZW50cywgaGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgZXZlbnRzID0gYXBwZW5kTmFtZXNwYWNlVG9FdmVudHMoZXZlbnRzLCBuYW1lc3BhY2UpO1xuXG4gICAgJCh3aW5kb3cpLm9uKGV2ZW50cywgaGFuZGxlcik7XG4gIH1cblxuICBvZmYoZXZlbnRzLCBuYW1lc3BhY2UpIHtcbiAgICBldmVudHMgPSBhcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSk7XG5cbiAgICAkKHdpbmRvdykub2ZmKGV2ZW50cyk7XG4gIH1cblxuICBvblJlc2l6ZShoYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICB2YXIgZXZlbnRzID0gJ3Jlc2l6ZSc7XG5cbiAgICBldmVudHMgPSBhcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSk7XG5cbiAgICAkKHdpbmRvdykub24oZXZlbnRzLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9mZlJlc2l6ZShuYW1lc3BhY2UpIHtcbiAgICB2YXIgZXZlbnRzID0gJ3Jlc2l6ZSc7XG5cbiAgICBldmVudHMgPSBhcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSk7XG5cbiAgICAkKHdpbmRvdykub2ZmKGV2ZW50cyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgV2luZG93KCk7ICAvLy9cblxuZnVuY3Rpb24gYXBwZW5kTmFtZXNwYWNlVG9FdmVudHMoZXZlbnRzLCBuYW1lc3BhY2UpIHtcbiAgaWYgKG5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gZXZlbnRzICsgJy4nICsgbmFtZXNwYWNlO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50cztcbn1cbiJdfQ==