"use strict";

var _key2 = _interopRequireDefault(require("./mixins/key"));

var _event = _interopRequireDefault(require("./mixins/event"));

var _click = _interopRequireDefault(require("./mixins/click"));

var _mouse = _interopRequireDefault(require("./mixins/mouse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Window = /*#__PURE__*/function () {
  function Window() {
    _classCallCheck(this, Window);

    this.domElement = window; ///
  }

  _createClass(Window, [{
    key: "assign",
    value: function assign() {
      var target = this.domElement; ///

      for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      Object.assign.apply(Object, [target].concat(sources));
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.domElement.innerWidth;
    } ///

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.domElement.innerHeight;
    } ///

  }, {
    key: "getScrollTop",
    value: function getScrollTop() {
      return this.domElement.pageYOffset;
    } ///

  }, {
    key: "getScrollLeft",
    value: function getScrollLeft() {
      return this.domElement.pageXOffset;
    } ///

  }, {
    key: "onResize",
    value: function onResize(handler, object) {
      var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateResizeHandler;
      var eventTypes = "resize";
      this.on(eventTypes, handler, object, intermediateHandler);
    }
  }, {
    key: "offResize",
    value: function offResize(handler, object) {
      var eventTypes = "resize";
      this.off(eventTypes, handler, object);
    }
  }]);

  return Window;
}();

Object.assign(Window.prototype, _key2["default"]);
Object.assign(Window.prototype, _event["default"]);
Object.assign(Window.prototype, _click["default"]);
Object.assign(Window.prototype, _mouse["default"]);
module.exports = typeof window === "undefined" ? undefined : new Window(); ///

function defaultIntermediateResizeHandler(handler, event, element) {
  var window = element,
      ///
  width = window.getWidth(),
      height = window.getHeight();
  handler.call(element, width, height, event, element);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmRvdy5qcyJdLCJuYW1lcyI6WyJXaW5kb3ciLCJkb21FbGVtZW50Iiwid2luZG93IiwidGFyZ2V0Iiwic291cmNlcyIsIk9iamVjdCIsImFzc2lnbiIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBhZ2VZT2Zmc2V0IiwicGFnZVhPZmZzZXQiLCJoYW5kbGVyIiwib2JqZWN0IiwiaW50ZXJtZWRpYXRlSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyIiwiZXZlbnRUeXBlcyIsIm9uIiwib2ZmIiwicHJvdG90eXBlIiwia2V5TWl4aW5zIiwiZXZlbnRNaXhpbnMiLCJjbGlja01peGlucyIsIm1vdXNlTWl4aW5zIiwibW9kdWxlIiwiZXhwb3J0cyIsInVuZGVmaW5lZCIsImV2ZW50IiwiZWxlbWVudCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJjYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxNO0FBQ0osb0JBQWM7QUFBQTs7QUFDWixTQUFLQyxVQUFMLEdBQWtCQyxNQUFsQixDQURZLENBQ2M7QUFDM0I7Ozs7NkJBRWtCO0FBQ2pCLFVBQU1DLE1BQU0sR0FBRyxLQUFLRixVQUFwQixDQURpQixDQUNlOztBQURmLHdDQUFURyxPQUFTO0FBQVRBLFFBQUFBLE9BQVM7QUFBQTs7QUFHakJDLE1BQUFBLE1BQU0sQ0FBQ0MsTUFBUCxPQUFBRCxNQUFNLEdBQVFGLE1BQVIsU0FBbUJDLE9BQW5CLEVBQU47QUFDRDs7OytCQUVVO0FBQUUsYUFBTyxLQUFLSCxVQUFMLENBQWdCTSxVQUF2QjtBQUFvQyxLLENBQUM7Ozs7Z0NBRXRDO0FBQUUsYUFBTyxLQUFLTixVQUFMLENBQWdCTyxXQUF2QjtBQUFxQyxLLENBQUM7Ozs7bUNBRXJDO0FBQUUsYUFBTyxLQUFLUCxVQUFMLENBQWdCUSxXQUF2QjtBQUFxQyxLLENBQUU7Ozs7b0NBRXhDO0FBQUUsYUFBTyxLQUFLUixVQUFMLENBQWdCUyxXQUF2QjtBQUFxQyxLLENBQUM7Ozs7NkJBRS9DQyxPLEVBQVNDLE0sRUFBZ0U7QUFBQSxVQUF4REMsbUJBQXdELHVFQUFsQ0MsZ0NBQWtDO0FBQ2hGLFVBQU1DLFVBQVUsR0FBRyxRQUFuQjtBQUVBLFdBQUtDLEVBQUwsQ0FBUUQsVUFBUixFQUFvQkosT0FBcEIsRUFBNkJDLE1BQTdCLEVBQXFDQyxtQkFBckM7QUFDRDs7OzhCQUVTRixPLEVBQVNDLE0sRUFBUTtBQUN6QixVQUFNRyxVQUFVLEdBQUcsUUFBbkI7QUFFQSxXQUFLRSxHQUFMLENBQVNGLFVBQVQsRUFBcUJKLE9BQXJCLEVBQThCQyxNQUE5QjtBQUNEOzs7Ozs7QUFHSFAsTUFBTSxDQUFDQyxNQUFQLENBQWNOLE1BQU0sQ0FBQ2tCLFNBQXJCLEVBQWdDQyxnQkFBaEM7QUFDQWQsTUFBTSxDQUFDQyxNQUFQLENBQWNOLE1BQU0sQ0FBQ2tCLFNBQXJCLEVBQWdDRSxpQkFBaEM7QUFDQWYsTUFBTSxDQUFDQyxNQUFQLENBQWNOLE1BQU0sQ0FBQ2tCLFNBQXJCLEVBQWdDRyxpQkFBaEM7QUFDQWhCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTixNQUFNLENBQUNrQixTQUFyQixFQUFnQ0ksaUJBQWhDO0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFrQixPQUFPdEIsTUFBUCxLQUFrQixXQUFuQixHQUFrQ3VCLFNBQWxDLEdBQThDLElBQUl6QixNQUFKLEVBQS9ELEMsQ0FBOEU7O0FBRTlFLFNBQVNjLGdDQUFULENBQTBDSCxPQUExQyxFQUFtRGUsS0FBbkQsRUFBMERDLE9BQTFELEVBQW1FO0FBQ2pFLE1BQU16QixNQUFNLEdBQUd5QixPQUFmO0FBQUEsTUFBd0I7QUFDbEJDLEVBQUFBLEtBQUssR0FBRzFCLE1BQU0sQ0FBQzJCLFFBQVAsRUFEZDtBQUFBLE1BRU1DLE1BQU0sR0FBRzVCLE1BQU0sQ0FBQzZCLFNBQVAsRUFGZjtBQUlBcEIsRUFBQUEsT0FBTyxDQUFDcUIsSUFBUixDQUFhTCxPQUFiLEVBQXNCQyxLQUF0QixFQUE2QkUsTUFBN0IsRUFBcUNKLEtBQXJDLEVBQTRDQyxPQUE1QztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuXG5jbGFzcyBXaW5kb3cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7IC8vL1xuICB9XG5cbiAgYXNzaWduKC4uLnNvdXJjZXMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG5cbiAgb25SZXNpemUoaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBldmVudFR5cGVzID0gXCJyZXNpemVcIjtcbiAgICBcbiAgICB0aGlzLm9uKGV2ZW50VHlwZXMsIGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG4gIH1cblxuICBvZmZSZXNpemUoaGFuZGxlciwgb2JqZWN0KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlcyA9IFwicmVzaXplXCI7XG5cbiAgICB0aGlzLm9mZihldmVudFR5cGVzLCBoYW5kbGVyLCBvYmplY3QpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcblxubW9kdWxlLmV4cG9ydHMgPSAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgPyB1bmRlZmluZWQgOiBuZXcgV2luZG93KCk7ICAvLy9cblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgd2luZG93ID0gZWxlbWVudCwgLy8vXG4gICAgICAgIHdpZHRoID0gd2luZG93LmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHdpbmRvdy5nZXRIZWlnaHQoKTtcbiAgXG4gIGhhbmRsZXIuY2FsbChlbGVtZW50LCB3aWR0aCwgaGVpZ2h0LCBldmVudCwgZWxlbWVudCk7XG59XG4iXX0=