'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var event = require('./delegate/event'),
    mouse = require('./delegate/mouse');

var Document = function () {
  function Document() {
    _classCallCheck(this, Document);

    mouse.delegateTo(this, Document);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImV2ZW50IiwibW91c2UiLCJEb2N1bWVudCIsImRlbGVnYXRlVG8iLCJldmVudHMiLCJoYW5kbGVyIiwibmFtZXNwYWNlIiwiYXBwZW5kTmFtZXNwYWNlVG9FdmVudHMiLCJkb2N1bWVudCIsIm9uIiwib2ZmIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsUUFBUixDQUFSOztBQUVBLElBQUlDLFFBQVFELFFBQVEsa0JBQVIsQ0FBWjtBQUFBLElBQ0lFLFFBQVFGLFFBQVEsa0JBQVIsQ0FEWjs7SUFHTUcsUTtBQUNKLHNCQUFjO0FBQUE7O0FBQ1pELFVBQU1FLFVBQU4sQ0FBaUIsSUFBakIsRUFBdUJELFFBQXZCO0FBQ0Q7Ozs7dUJBRUVFLE0sRUFBUUMsTyxFQUFTQyxTLEVBQVc7QUFDN0JGLGVBQVNKLE1BQU1PLHVCQUFOLENBQThCSCxNQUE5QixFQUFzQ0UsU0FBdEMsQ0FBVDs7QUFFQVIsUUFBRVUsUUFBRixFQUFZQyxFQUFaLENBQWVMLE1BQWYsRUFBdUJDLE9BQXZCO0FBQ0Q7Ozt3QkFFR0QsTSxFQUFRRSxTLEVBQVc7QUFDckJGLGVBQVNKLE1BQU1PLHVCQUFOLENBQThCSCxNQUE5QixFQUFzQ0UsU0FBdEMsQ0FBVDs7QUFFQVIsUUFBRVUsUUFBRixFQUFZRSxHQUFaLENBQWdCTixNQUFoQjtBQUNEOzs7Ozs7QUFHSE8sT0FBT0MsT0FBUCxHQUFpQixJQUFJVixRQUFKLEVBQWpCLEMsQ0FBa0MiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbnZhciBldmVudCA9IHJlcXVpcmUoJy4vZGVsZWdhdGUvZXZlbnQnKSxcbiAgICBtb3VzZSA9IHJlcXVpcmUoJy4vZGVsZWdhdGUvbW91c2UnKTtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBtb3VzZS5kZWxlZ2F0ZVRvKHRoaXMsIERvY3VtZW50KTtcbiAgfVxuXG4gIG9uKGV2ZW50cywgaGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgZXZlbnRzID0gZXZlbnQuYXBwZW5kTmFtZXNwYWNlVG9FdmVudHMoZXZlbnRzLCBuYW1lc3BhY2UpO1xuXG4gICAgJChkb2N1bWVudCkub24oZXZlbnRzLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9mZihldmVudHMsIG5hbWVzcGFjZSkge1xuICAgIGV2ZW50cyA9IGV2ZW50LmFwcGVuZE5hbWVzcGFjZVRvRXZlbnRzKGV2ZW50cywgbmFtZXNwYWNlKTtcblxuICAgICQoZG9jdW1lbnQpLm9mZihldmVudHMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IERvY3VtZW50KCk7ICAvLy9cbiJdfQ==