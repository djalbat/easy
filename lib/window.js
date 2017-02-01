'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var event = require('./delegate/event'),
    mouse = require('./delegate/mouse');

var Window = function () {
  function Window() {
    _classCallCheck(this, Window);

    mouse.initialise(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJldmVudCIsIm1vdXNlIiwiV2luZG93IiwiaW5pdGlhbGlzZSIsImV2ZW50cyIsImhhbmRsZXIiLCJuYW1lc3BhY2UiLCJhcHBlbmROYW1lc3BhY2VUb0V2ZW50cyIsIndpbmRvdyIsIm9uIiwib2ZmIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsUUFBUixDQUFSOztBQUVBLElBQUlDLFFBQVFELFFBQVEsa0JBQVIsQ0FBWjtBQUFBLElBQ0lFLFFBQVFGLFFBQVEsa0JBQVIsQ0FEWjs7SUFHTUcsTTtBQUNKLG9CQUFjO0FBQUE7O0FBQ1pELFVBQU1FLFVBQU4sQ0FBaUIsSUFBakI7QUFDRDs7Ozt1QkFFRUMsTSxFQUFRQyxPLEVBQVNDLFMsRUFBVztBQUM3QkYsZUFBU0osTUFBTU8sdUJBQU4sQ0FBOEJILE1BQTlCLEVBQXNDRSxTQUF0QyxDQUFUOztBQUVBUixRQUFFVSxNQUFGLEVBQVVDLEVBQVYsQ0FBYUwsTUFBYixFQUFxQkMsT0FBckI7QUFDRDs7O3dCQUVHRCxNLEVBQVFFLFMsRUFBVztBQUNyQkYsZUFBU0osTUFBTU8sdUJBQU4sQ0FBOEJILE1BQTlCLEVBQXNDRSxTQUF0QyxDQUFUOztBQUVBUixRQUFFVSxNQUFGLEVBQVVFLEdBQVYsQ0FBY04sTUFBZDtBQUNEOzs7NkJBRVFDLE8sRUFBU0MsUyxFQUFXO0FBQzNCLFVBQUlGLFNBQVMsUUFBYjs7QUFFQUEsZUFBU0osTUFBTU8sdUJBQU4sQ0FBOEJILE1BQTlCLEVBQXNDRSxTQUF0QyxDQUFUOztBQUVBUixRQUFFVSxNQUFGLEVBQVVDLEVBQVYsQ0FBYUwsTUFBYixFQUFxQkMsT0FBckI7QUFDRDs7OzhCQUVTQyxTLEVBQVc7QUFDbkIsVUFBSUYsU0FBUyxRQUFiOztBQUVBQSxlQUFTSixNQUFNTyx1QkFBTixDQUE4QkgsTUFBOUIsRUFBc0NFLFNBQXRDLENBQVQ7O0FBRUFSLFFBQUVVLE1BQUYsRUFBVUUsR0FBVixDQUFjTixNQUFkO0FBQ0Q7Ozs7OztBQUdITyxPQUFPQyxPQUFQLEdBQWlCLElBQUlWLE1BQUosRUFBakIsQyxDQUFnQyIsImZpbGUiOiJ3aW5kb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbnZhciBldmVudCA9IHJlcXVpcmUoJy4vZGVsZWdhdGUvZXZlbnQnKSxcbiAgICBtb3VzZSA9IHJlcXVpcmUoJy4vZGVsZWdhdGUvbW91c2UnKTtcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbW91c2UuaW5pdGlhbGlzZSh0aGlzKTtcbiAgfVxuXG4gIG9uKGV2ZW50cywgaGFuZGxlciwgbmFtZXNwYWNlKSB7XG4gICAgZXZlbnRzID0gZXZlbnQuYXBwZW5kTmFtZXNwYWNlVG9FdmVudHMoZXZlbnRzLCBuYW1lc3BhY2UpO1xuXG4gICAgJCh3aW5kb3cpLm9uKGV2ZW50cywgaGFuZGxlcik7XG4gIH1cblxuICBvZmYoZXZlbnRzLCBuYW1lc3BhY2UpIHtcbiAgICBldmVudHMgPSBldmVudC5hcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSk7XG5cbiAgICAkKHdpbmRvdykub2ZmKGV2ZW50cyk7XG4gIH1cblxuICBvblJlc2l6ZShoYW5kbGVyLCBuYW1lc3BhY2UpIHtcbiAgICB2YXIgZXZlbnRzID0gJ3Jlc2l6ZSc7XG5cbiAgICBldmVudHMgPSBldmVudC5hcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSk7XG5cbiAgICAkKHdpbmRvdykub24oZXZlbnRzLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9mZlJlc2l6ZShuYW1lc3BhY2UpIHtcbiAgICB2YXIgZXZlbnRzID0gJ3Jlc2l6ZSc7XG5cbiAgICBldmVudHMgPSBldmVudC5hcHBlbmROYW1lc3BhY2VUb0V2ZW50cyhldmVudHMsIG5hbWVzcGFjZSk7XG5cbiAgICAkKHdpbmRvdykub2ZmKGV2ZW50cyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgV2luZG93KCk7ICAvLy9cbiJdfQ==