"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var keyMixins = require("./mixins/key"),
    eventMixins = require("./mixins/event"),
    clickMixins = require("./mixins/click"),
    mouseMixins = require("./mixins/mouse");

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

Object.assign(Window.prototype, keyMixins);
Object.assign(Window.prototype, eventMixins);
Object.assign(Window.prototype, clickMixins);
Object.assign(Window.prototype, mouseMixins);
module.exports = typeof window === "undefined" ? undefined : new Window(); ///

function defaultIntermediateResizeHandler(handler, event, element) {
  var window = element,
      ///
  width = window.getWidth(),
      height = window.getHeight();
  handler.call(element, width, height, event, element);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmRvdy5qcyJdLCJuYW1lcyI6WyJrZXlNaXhpbnMiLCJyZXF1aXJlIiwiZXZlbnRNaXhpbnMiLCJjbGlja01peGlucyIsIm1vdXNlTWl4aW5zIiwiV2luZG93IiwiZG9tRWxlbWVudCIsIndpbmRvdyIsInRhcmdldCIsInNvdXJjZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0IiwiaGFuZGxlciIsIm9iamVjdCIsImludGVybWVkaWF0ZUhhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlciIsImV2ZW50VHlwZXMiLCJvbiIsIm9mZiIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmRlZmluZWQiLCJldmVudCIsImVsZW1lbnQiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiY2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF6QjtBQUFBLElBQ01DLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGdCQUFELENBRDNCO0FBQUEsSUFFTUUsV0FBVyxHQUFHRixPQUFPLENBQUMsZ0JBQUQsQ0FGM0I7QUFBQSxJQUdNRyxXQUFXLEdBQUdILE9BQU8sQ0FBQyxnQkFBRCxDQUgzQjs7SUFLTUksTTtBQUNKLG9CQUFjO0FBQUE7O0FBQ1osU0FBS0MsVUFBTCxHQUFrQkMsTUFBbEIsQ0FEWSxDQUNjO0FBQzNCOzs7OzZCQUVrQjtBQUNqQixVQUFNQyxNQUFNLEdBQUcsS0FBS0YsVUFBcEIsQ0FEaUIsQ0FDZTs7QUFEZix3Q0FBVEcsT0FBUztBQUFUQSxRQUFBQSxPQUFTO0FBQUE7O0FBR2pCQyxNQUFBQSxNQUFNLENBQUNDLE1BQVAsT0FBQUQsTUFBTSxHQUFRRixNQUFSLFNBQW1CQyxPQUFuQixFQUFOO0FBQ0Q7OzsrQkFFVTtBQUFFLGFBQU8sS0FBS0gsVUFBTCxDQUFnQk0sVUFBdkI7QUFBb0MsSyxDQUFDOzs7O2dDQUV0QztBQUFFLGFBQU8sS0FBS04sVUFBTCxDQUFnQk8sV0FBdkI7QUFBcUMsSyxDQUFDOzs7O21DQUVyQztBQUFFLGFBQU8sS0FBS1AsVUFBTCxDQUFnQlEsV0FBdkI7QUFBcUMsSyxDQUFFOzs7O29DQUV4QztBQUFFLGFBQU8sS0FBS1IsVUFBTCxDQUFnQlMsV0FBdkI7QUFBcUMsSyxDQUFDOzs7OzZCQUUvQ0MsTyxFQUFTQyxNLEVBQWdFO0FBQUEsVUFBeERDLG1CQUF3RCx1RUFBbENDLGdDQUFrQztBQUNoRixVQUFNQyxVQUFVLEdBQUcsUUFBbkI7QUFFQSxXQUFLQyxFQUFMLENBQVFELFVBQVIsRUFBb0JKLE9BQXBCLEVBQTZCQyxNQUE3QixFQUFxQ0MsbUJBQXJDO0FBQ0Q7Ozs4QkFFU0YsTyxFQUFTQyxNLEVBQVE7QUFDekIsVUFBTUcsVUFBVSxHQUFHLFFBQW5CO0FBRUEsV0FBS0UsR0FBTCxDQUFTRixVQUFULEVBQXFCSixPQUFyQixFQUE4QkMsTUFBOUI7QUFDRDs7Ozs7O0FBR0hQLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTixNQUFNLENBQUNrQixTQUFyQixFQUFnQ3ZCLFNBQWhDO0FBQ0FVLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTixNQUFNLENBQUNrQixTQUFyQixFQUFnQ3JCLFdBQWhDO0FBQ0FRLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTixNQUFNLENBQUNrQixTQUFyQixFQUFnQ3BCLFdBQWhDO0FBQ0FPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTixNQUFNLENBQUNrQixTQUFyQixFQUFnQ25CLFdBQWhDO0FBRUFvQixNQUFNLENBQUNDLE9BQVAsR0FBa0IsT0FBT2xCLE1BQVAsS0FBa0IsV0FBbkIsR0FBa0NtQixTQUFsQyxHQUE4QyxJQUFJckIsTUFBSixFQUEvRCxDLENBQThFOztBQUU5RSxTQUFTYyxnQ0FBVCxDQUEwQ0gsT0FBMUMsRUFBbURXLEtBQW5ELEVBQTBEQyxPQUExRCxFQUFtRTtBQUNqRSxNQUFNckIsTUFBTSxHQUFHcUIsT0FBZjtBQUFBLE1BQXdCO0FBQ2xCQyxFQUFBQSxLQUFLLEdBQUd0QixNQUFNLENBQUN1QixRQUFQLEVBRGQ7QUFBQSxNQUVNQyxNQUFNLEdBQUd4QixNQUFNLENBQUN5QixTQUFQLEVBRmY7QUFJQWhCLEVBQUFBLE9BQU8sQ0FBQ2lCLElBQVIsQ0FBYUwsT0FBYixFQUFzQkMsS0FBdEIsRUFBNkJFLE1BQTdCLEVBQXFDSixLQUFyQyxFQUE0Q0MsT0FBNUM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBrZXlNaXhpbnMgPSByZXF1aXJlKFwiLi9taXhpbnMva2V5XCIpLFxuICAgICAgZXZlbnRNaXhpbnMgPSByZXF1aXJlKFwiLi9taXhpbnMvZXZlbnRcIiksXG4gICAgICBjbGlja01peGlucyA9IHJlcXVpcmUoXCIuL21peGlucy9jbGlja1wiKSxcbiAgICAgIG1vdXNlTWl4aW5zID0gcmVxdWlyZShcIi4vbWl4aW5zL21vdXNlXCIpO1xuXG5jbGFzcyBXaW5kb3cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7IC8vL1xuICB9XG5cbiAgYXNzaWduKC4uLnNvdXJjZXMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG5cbiAgb25SZXNpemUoaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBldmVudFR5cGVzID0gXCJyZXNpemVcIjtcbiAgICBcbiAgICB0aGlzLm9uKGV2ZW50VHlwZXMsIGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG4gIH1cblxuICBvZmZSZXNpemUoaGFuZGxlciwgb2JqZWN0KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlcyA9IFwicmVzaXplXCI7XG5cbiAgICB0aGlzLm9mZihldmVudFR5cGVzLCBoYW5kbGVyLCBvYmplY3QpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcblxubW9kdWxlLmV4cG9ydHMgPSAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgPyB1bmRlZmluZWQgOiBuZXcgV2luZG93KCk7ICAvLy9cblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgd2luZG93ID0gZWxlbWVudCwgLy8vXG4gICAgICAgIHdpZHRoID0gd2luZG93LmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHdpbmRvdy5nZXRIZWlnaHQoKTtcbiAgXG4gIGhhbmRsZXIuY2FsbChlbGVtZW50LCB3aWR0aCwgaGVpZ2h0LCBldmVudCwgZWxlbWVudCk7XG59XG4iXX0=