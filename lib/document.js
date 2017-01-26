'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var Document = function () {
  function Document() {
    _classCallCheck(this, Document);
  }

  _createClass(Document, [{
    key: 'on',
    value: function on(events, handler, namespace) {
      events = appendNamespaceToEvents(events, namespace);

      $(document).on(events, handler);
    }
  }, {
    key: 'off',
    value: function off(events, namespace) {
      events = appendNamespaceToEvents(events, namespace);

      $(document).off(events);
    }
  }]);

  return Document;
}();

module.exports = new Document(); ///

function appendNamespaceToEvents(events, namespace) {
  if (namespace !== undefined) {
    events = events + '.' + namespace;
  }

  return events;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsIkRvY3VtZW50IiwiZXZlbnRzIiwiaGFuZGxlciIsIm5hbWVzcGFjZSIsImFwcGVuZE5hbWVzcGFjZVRvRXZlbnRzIiwiZG9jdW1lbnQiLCJvbiIsIm9mZiIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxJQUFJQyxRQUFRLFFBQVIsQ0FBUjs7SUFFTUMsUTs7Ozs7Ozt1QkFDREMsTSxFQUFRQyxPLEVBQVNDLFMsRUFBVztBQUM3QkYsZUFBU0csd0JBQXdCSCxNQUF4QixFQUFnQ0UsU0FBaEMsQ0FBVDs7QUFFQUwsUUFBRU8sUUFBRixFQUFZQyxFQUFaLENBQWVMLE1BQWYsRUFBdUJDLE9BQXZCO0FBQ0Q7Ozt3QkFFR0QsTSxFQUFRRSxTLEVBQVc7QUFDckJGLGVBQVNHLHdCQUF3QkgsTUFBeEIsRUFBZ0NFLFNBQWhDLENBQVQ7O0FBRUFMLFFBQUVPLFFBQUYsRUFBWUUsR0FBWixDQUFnQk4sTUFBaEI7QUFDRDs7Ozs7O0FBR0hPLE9BQU9DLE9BQVAsR0FBaUIsSUFBSVQsUUFBSixFQUFqQixDLENBQWtDOztBQUVsQyxTQUFTSSx1QkFBVCxDQUFpQ0gsTUFBakMsRUFBeUNFLFNBQXpDLEVBQW9EO0FBQ2xELE1BQUlBLGNBQWNPLFNBQWxCLEVBQTZCO0FBQzNCVCxhQUFTQSxTQUFTLEdBQVQsR0FBZUUsU0FBeEI7QUFDRDs7QUFFRCxTQUFPRixNQUFQO0FBQ0QiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbmNsYXNzIERvY3VtZW50IHtcbiAgb24oZXZlbnRzLCBoYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICBldmVudHMgPSBhcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbihldmVudHMsIGhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmKGV2ZW50cywgbmFtZXNwYWNlKSB7XG4gICAgZXZlbnRzID0gYXBwZW5kTmFtZXNwYWNlVG9FdmVudHMoZXZlbnRzLCBuYW1lc3BhY2UpO1xuXG4gICAgJChkb2N1bWVudCkub2ZmKGV2ZW50cyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRG9jdW1lbnQoKTsgIC8vL1xuXG5mdW5jdGlvbiBhcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSkge1xuICBpZiAobmFtZXNwYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSBldmVudHMgKyAnLicgKyBuYW1lc3BhY2U7XG4gIH1cblxuICByZXR1cm4gZXZlbnRzO1xufVxuIl19