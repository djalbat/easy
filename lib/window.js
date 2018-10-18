'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var keyMixins = require('./mixins/key'),
    eventMixins = require('./mixins/event'),
    clickMixins = require('./mixins/click'),
    mouseMixins = require('./mixins/mouse');

var Window = function () {
  function Window() {
    _classCallCheck(this, Window);

    this.domElement = window; ///
  }

  _createClass(Window, [{
    key: 'getWidth',
    value: function getWidth() {
      return this.domElement.innerWidth;
    } ///

  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.domElement.innerHeight;
    } ///

  }, {
    key: 'getScrollTop',
    value: function getScrollTop() {
      return this.domElement.pageYOffset;
    } ///

  }, {
    key: 'getScrollLeft',
    value: function getScrollLeft() {
      return this.domElement.pageXOffset;
    } ///

  }, {
    key: 'onResize',
    value: function onResize(handler, object) {
      var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateResizeHandler;

      var eventTypes = 'resize';

      this.on(eventTypes, handler, object, intermediateHandler);
    }
  }, {
    key: 'offResize',
    value: function offResize(handler, object) {
      var eventTypes = 'resize';

      this.off(eventTypes, handler, object);
    }
  }]);

  return Window;
}();

Object.assign(Window.prototype, keyMixins);
Object.assign(Window.prototype, eventMixins);
Object.assign(Window.prototype, clickMixins);
Object.assign(Window.prototype, mouseMixins);

module.exports = window && new Window(); ///

function defaultIntermediateResizeHandler(handler, event, element) {
  var window = element,
      ///
  width = window.getWidth(),
      height = window.getHeight();

  handler.call(window, width, height, event);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsia2V5TWl4aW5zIiwicmVxdWlyZSIsImV2ZW50TWl4aW5zIiwiY2xpY2tNaXhpbnMiLCJtb3VzZU1peGlucyIsIldpbmRvdyIsImRvbUVsZW1lbnQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0IiwiaGFuZGxlciIsIm9iamVjdCIsImludGVybWVkaWF0ZUhhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlciIsImV2ZW50VHlwZXMiLCJvbiIsIm9mZiIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsImVsZW1lbnQiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiY2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsZ0JBQVIsQ0FEcEI7QUFBQSxJQUVNRSxjQUFjRixRQUFRLGdCQUFSLENBRnBCO0FBQUEsSUFHTUcsY0FBY0gsUUFBUSxnQkFBUixDQUhwQjs7SUFLTUksTTtBQUNKLG9CQUFjO0FBQUE7O0FBQ1osU0FBS0MsVUFBTCxHQUFrQkMsTUFBbEIsQ0FEWSxDQUNjO0FBQzNCOzs7OytCQUVVO0FBQUUsYUFBTyxLQUFLRCxVQUFMLENBQWdCRSxVQUF2QjtBQUFvQyxLLENBQUM7Ozs7Z0NBRXRDO0FBQUUsYUFBTyxLQUFLRixVQUFMLENBQWdCRyxXQUF2QjtBQUFxQyxLLENBQUM7Ozs7bUNBRXJDO0FBQUUsYUFBTyxLQUFLSCxVQUFMLENBQWdCSSxXQUF2QjtBQUFxQyxLLENBQUU7Ozs7b0NBRXhDO0FBQUUsYUFBTyxLQUFLSixVQUFMLENBQWdCSyxXQUF2QjtBQUFxQyxLLENBQUM7Ozs7NkJBRS9DQyxPLEVBQVNDLE0sRUFBZ0U7QUFBQSxVQUF4REMsbUJBQXdELHVFQUFsQ0MsZ0NBQWtDOztBQUNoRixVQUFNQyxhQUFhLFFBQW5COztBQUVBLFdBQUtDLEVBQUwsQ0FBUUQsVUFBUixFQUFvQkosT0FBcEIsRUFBNkJDLE1BQTdCLEVBQXFDQyxtQkFBckM7QUFDRDs7OzhCQUVTRixPLEVBQVNDLE0sRUFBUTtBQUN6QixVQUFNRyxhQUFhLFFBQW5COztBQUVBLFdBQUtFLEdBQUwsQ0FBU0YsVUFBVCxFQUFxQkosT0FBckIsRUFBOEJDLE1BQTlCO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxNQUFQLENBQWNmLE9BQU9nQixTQUFyQixFQUFnQ3JCLFNBQWhDO0FBQ0FtQixPQUFPQyxNQUFQLENBQWNmLE9BQU9nQixTQUFyQixFQUFnQ25CLFdBQWhDO0FBQ0FpQixPQUFPQyxNQUFQLENBQWNmLE9BQU9nQixTQUFyQixFQUFnQ2xCLFdBQWhDO0FBQ0FnQixPQUFPQyxNQUFQLENBQWNmLE9BQU9nQixTQUFyQixFQUFnQ2pCLFdBQWhDOztBQUVBa0IsT0FBT0MsT0FBUCxHQUFpQmhCLFVBQVUsSUFBSUYsTUFBSixFQUEzQixDLENBQTBDOztBQUUxQyxTQUFTVSxnQ0FBVCxDQUEwQ0gsT0FBMUMsRUFBbURZLEtBQW5ELEVBQTBEQyxPQUExRCxFQUFtRTtBQUNqRSxNQUFNbEIsU0FBU2tCLE9BQWY7QUFBQSxNQUF3QjtBQUNsQkMsVUFBUW5CLE9BQU9vQixRQUFQLEVBRGQ7QUFBQSxNQUVNQyxTQUFTckIsT0FBT3NCLFNBQVAsRUFGZjs7QUFJQWpCLFVBQVFrQixJQUFSLENBQWF2QixNQUFiLEVBQXFCbUIsS0FBckIsRUFBNEJFLE1BQTVCLEVBQW9DSixLQUFwQztBQUNEIiwiZmlsZSI6IndpbmRvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qga2V5TWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMva2V5JyksXG4gICAgICBldmVudE1peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL2V2ZW50JyksXG4gICAgICBjbGlja01peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL2NsaWNrJyksXG4gICAgICBtb3VzZU1peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL21vdXNlJyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdzsgLy8vXG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lcldpZHRoOyB9IC8vL1xuICBcbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySGVpZ2h0OyB9IC8vL1xuXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWU9mZnNldDsgfSAgLy8vXG5cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWE9mZnNldDsgfSAvLy9cblxuICBvblJlc2l6ZShoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlcikge1xuICAgIGNvbnN0IGV2ZW50VHlwZXMgPSAncmVzaXplJztcbiAgICBcbiAgICB0aGlzLm9uKGV2ZW50VHlwZXMsIGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG4gIH1cblxuICBvZmZSZXNpemUoaGFuZGxlciwgb2JqZWN0KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlcyA9ICdyZXNpemUnO1xuXG4gICAgdGhpcy5vZmYoZXZlbnRUeXBlcywgaGFuZGxlciwgb2JqZWN0KTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93ICYmIG5ldyBXaW5kb3coKTsgIC8vL1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlcihoYW5kbGVyLCBldmVudCwgZWxlbWVudCkge1xuICBjb25zdCB3aW5kb3cgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgd2lkdGggPSB3aW5kb3cuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gd2luZG93LmdldEhlaWdodCgpO1xuICBcbiAgaGFuZGxlci5jYWxsKHdpbmRvdywgd2lkdGgsIGhlaWdodCwgZXZlbnQpO1xufVxuIl19