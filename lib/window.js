'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var event = require('./delegate/event'),
    mouse = require('./delegate/mouse');

var Window = function () {
  function Window() {
    _classCallCheck(this, Window);

    mouse.delegateTo(this, Window);
  }

  _createClass(Window, [{
    key: 'on',
    value: function on(events, handler, namespace) {
      events = event.appendNamespaceToEvents(events, namespace);

      $(window).on(events, handler);
    }
  }, {
    key: 'off',
    value: function off(events, namespace) {
      events = event.appendNamespaceToEvents(events, namespace);

      $(window).off(events);
    }
  }, {
    key: 'onResize',
    value: function onResize(handler, namespace) {
      var events = 'resize';

      events = event.appendNamespaceToEvents(events, namespace);

      $(window).on(events, handler);
    }
  }, {
    key: 'offResize',
    value: function offResize(namespace) {
      var events = 'resize';

      events = event.appendNamespaceToEvents(events, namespace);

      $(window).off(events);
    }
  }]);

  return Window;
}();

module.exports = new Window(); ///
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJldmVudCIsIm1vdXNlIiwiV2luZG93IiwiZGVsZWdhdGVUbyIsImV2ZW50cyIsImhhbmRsZXIiLCJuYW1lc3BhY2UiLCJhcHBlbmROYW1lc3BhY2VUb0V2ZW50cyIsIndpbmRvdyIsIm9uIiwib2ZmIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsUUFBUixDQUFSOztBQUVBLElBQUlDLFFBQVFELFFBQVEsa0JBQVIsQ0FBWjtBQUFBLElBQ0lFLFFBQVFGLFFBQVEsa0JBQVIsQ0FEWjs7SUFHTUcsTTtBQUNKLG9CQUFjO0FBQUE7O0FBQ1pELFVBQU1FLFVBQU4sQ0FBaUIsSUFBakIsRUFBdUJELE1BQXZCO0FBQ0Q7Ozs7dUJBRUVFLE0sRUFBUUMsTyxFQUFTQyxTLEVBQVc7QUFDN0JGLGVBQVNKLE1BQU1PLHVCQUFOLENBQThCSCxNQUE5QixFQUFzQ0UsU0FBdEMsQ0FBVDs7QUFFQVIsUUFBRVUsTUFBRixFQUFVQyxFQUFWLENBQWFMLE1BQWIsRUFBcUJDLE9BQXJCO0FBQ0Q7Ozt3QkFFR0QsTSxFQUFRRSxTLEVBQVc7QUFDckJGLGVBQVNKLE1BQU1PLHVCQUFOLENBQThCSCxNQUE5QixFQUFzQ0UsU0FBdEMsQ0FBVDs7QUFFQVIsUUFBRVUsTUFBRixFQUFVRSxHQUFWLENBQWNOLE1BQWQ7QUFDRDs7OzZCQUVRQyxPLEVBQVNDLFMsRUFBVztBQUMzQixVQUFJRixTQUFTLFFBQWI7O0FBRUFBLGVBQVNKLE1BQU1PLHVCQUFOLENBQThCSCxNQUE5QixFQUFzQ0UsU0FBdEMsQ0FBVDs7QUFFQVIsUUFBRVUsTUFBRixFQUFVQyxFQUFWLENBQWFMLE1BQWIsRUFBcUJDLE9BQXJCO0FBQ0Q7Ozs4QkFFU0MsUyxFQUFXO0FBQ25CLFVBQUlGLFNBQVMsUUFBYjs7QUFFQUEsZUFBU0osTUFBTU8sdUJBQU4sQ0FBOEJILE1BQTlCLEVBQXNDRSxTQUF0QyxDQUFUOztBQUVBUixRQUFFVSxNQUFGLEVBQVVFLEdBQVYsQ0FBY04sTUFBZDtBQUNEOzs7Ozs7QUFHSE8sT0FBT0MsT0FBUCxHQUFpQixJQUFJVixNQUFKLEVBQWpCLEMsQ0FBZ0MiLCJmaWxlIjoid2luZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgZXZlbnQgPSByZXF1aXJlKCcuL2RlbGVnYXRlL2V2ZW50JyksXG4gICAgbW91c2UgPSByZXF1aXJlKCcuL2RlbGVnYXRlL21vdXNlJyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIG1vdXNlLmRlbGVnYXRlVG8odGhpcywgV2luZG93KTtcbiAgfVxuXG4gIG9uKGV2ZW50cywgaGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgZXZlbnRzID0gZXZlbnQuYXBwZW5kTmFtZXNwYWNlVG9FdmVudHMoZXZlbnRzLCBuYW1lc3BhY2UpO1xuXG4gICAgJCh3aW5kb3cpLm9uKGV2ZW50cywgaGFuZGxlcik7XG4gIH1cblxuICBvZmYoZXZlbnRzLCBuYW1lc3BhY2UpIHtcbiAgICBldmVudHMgPSBldmVudC5hcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSk7XG5cbiAgICAkKHdpbmRvdykub2ZmKGV2ZW50cyk7XG4gIH1cblxuICBvblJlc2l6ZShoYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICB2YXIgZXZlbnRzID0gJ3Jlc2l6ZSc7XG5cbiAgICBldmVudHMgPSBldmVudC5hcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSk7XG5cbiAgICAkKHdpbmRvdykub24oZXZlbnRzLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9mZlJlc2l6ZShuYW1lc3BhY2UpIHtcbiAgICB2YXIgZXZlbnRzID0gJ3Jlc2l6ZSc7XG5cbiAgICBldmVudHMgPSBldmVudC5hcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSk7XG5cbiAgICAkKHdpbmRvdykub2ZmKGV2ZW50cyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgV2luZG93KCk7ICAvLy9cbiJdfQ==