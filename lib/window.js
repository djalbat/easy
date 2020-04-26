"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _click = require("./mixins/click");

var _key2 = require("./mixins/key");

var _event = require("./mixins/event");

var _mouse = require("./mixins/mouse");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Window = /*#__PURE__*/function () {
  function Window() {
    _classCallCheck(this, Window);

    _defineProperty(this, "on", _event.on);

    _defineProperty(this, "off", _event.off);

    _defineProperty(this, "onClick", _click.onClick);

    _defineProperty(this, "offClick", _click.offClick);

    _defineProperty(this, "onKeyUp", _key2.onKeyUp);

    _defineProperty(this, "offKeyUp", _key2.offKeyUp);

    _defineProperty(this, "onKeyDown", _key2.onKeyDown);

    _defineProperty(this, "offKeyDown", _key2.offKeyDown);

    _defineProperty(this, "onMouseUp", _mouse.onMouseUp);

    _defineProperty(this, "onMouseDown", _mouse.onMouseDown);

    _defineProperty(this, "onMouseOver", _mouse.onMouseOver);

    _defineProperty(this, "onMouseOut", _mouse.onMouseOut);

    _defineProperty(this, "onMouseMove", _mouse.onMouseMove);

    _defineProperty(this, "offMouseUp", _mouse.offMouseUp);

    _defineProperty(this, "offMouseDown", _mouse.offMouseDown);

    _defineProperty(this, "offMouseOver", _mouse.offMouseOver);

    _defineProperty(this, "offMouseOut", _mouse.offMouseOut);

    _defineProperty(this, "offMouseMove", _mouse.offMouseMove);

    _defineProperty(this, "addEventListener", _event.addEventListener);

    _defineProperty(this, "removeEventListener", _event.removeEventListener);

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

var window = typeof window === "undefined" ? undefined : new Window(); ///

var _default = window;
exports["default"] = _default;

function defaultIntermediateResizeHandler(handler, event, element) {
  var window = element,
      ///
  width = window.getWidth(),
      height = window.getHeight();
  handler.call(element, width, height, event, element);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmRvdy5qcyJdLCJuYW1lcyI6WyJXaW5kb3ciLCJvbiIsIm9mZiIsIm9uQ2xpY2siLCJvZmZDbGljayIsIm9uS2V5VXAiLCJvZmZLZXlVcCIsIm9uS2V5RG93biIsIm9mZktleURvd24iLCJvbk1vdXNlVXAiLCJvbk1vdXNlRG93biIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm9uTW91c2VNb3ZlIiwib2ZmTW91c2VVcCIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlT3ZlciIsIm9mZk1vdXNlT3V0Iiwib2ZmTW91c2VNb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb21FbGVtZW50Iiwid2luZG93IiwidGFyZ2V0Iiwic291cmNlcyIsIk9iamVjdCIsImFzc2lnbiIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBhZ2VZT2Zmc2V0IiwicGFnZVhPZmZzZXQiLCJoYW5kbGVyIiwib2JqZWN0IiwiaW50ZXJtZWRpYXRlSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyIiwiZXZlbnRUeXBlcyIsInVuZGVmaW5lZCIsImV2ZW50IiwiZWxlbWVudCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJjYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLE07QUEwQkosb0JBQWM7QUFBQTs7QUFBQSxnQ0F6QlRDLFNBeUJTOztBQUFBLGlDQXhCUkMsVUF3QlE7O0FBQUEscUNBdEJKQyxjQXNCSTs7QUFBQSxzQ0FyQkhDLGVBcUJHOztBQUFBLHFDQW5CSkMsYUFtQkk7O0FBQUEsc0NBbEJIQyxjQWtCRzs7QUFBQSx1Q0FqQkZDLGVBaUJFOztBQUFBLHdDQWhCREMsZ0JBZ0JDOztBQUFBLHVDQWRGQyxnQkFjRTs7QUFBQSx5Q0FiQUMsa0JBYUE7O0FBQUEseUNBWkFDLGtCQVlBOztBQUFBLHdDQVhEQyxpQkFXQzs7QUFBQSx5Q0FWQUMsa0JBVUE7O0FBQUEsd0NBVERDLGlCQVNDOztBQUFBLDBDQVJDQyxtQkFRRDs7QUFBQSwwQ0FQQ0MsbUJBT0Q7O0FBQUEseUNBTkFDLGtCQU1BOztBQUFBLDBDQUxDQyxtQkFLRDs7QUFBQSw4Q0FIS0MsdUJBR0w7O0FBQUEsaURBRlFDLDBCQUVSOztBQUNaLFNBQUtDLFVBQUwsR0FBa0JDLE1BQWxCLENBRFksQ0FDYztBQUMzQjs7Ozs2QkFFa0I7QUFDakIsVUFBTUMsTUFBTSxHQUFHLEtBQUtGLFVBQXBCLENBRGlCLENBQ2U7O0FBRGYsd0NBQVRHLE9BQVM7QUFBVEEsUUFBQUEsT0FBUztBQUFBOztBQUdqQkMsTUFBQUEsTUFBTSxDQUFDQyxNQUFQLE9BQUFELE1BQU0sR0FBUUYsTUFBUixTQUFtQkMsT0FBbkIsRUFBTjtBQUNEOzs7K0JBRVU7QUFBRSxhQUFPLEtBQUtILFVBQUwsQ0FBZ0JNLFVBQXZCO0FBQW9DLEssQ0FBQzs7OztnQ0FFdEM7QUFBRSxhQUFPLEtBQUtOLFVBQUwsQ0FBZ0JPLFdBQXZCO0FBQXFDLEssQ0FBQzs7OzttQ0FFckM7QUFBRSxhQUFPLEtBQUtQLFVBQUwsQ0FBZ0JRLFdBQXZCO0FBQXFDLEssQ0FBRTs7OztvQ0FFeEM7QUFBRSxhQUFPLEtBQUtSLFVBQUwsQ0FBZ0JTLFdBQXZCO0FBQXFDLEssQ0FBQzs7Ozs2QkFFL0NDLE8sRUFBU0MsTSxFQUFnRTtBQUFBLFVBQXhEQyxtQkFBd0QsdUVBQWxDQyxnQ0FBa0M7QUFDaEYsVUFBTUMsVUFBVSxHQUFHLFFBQW5CO0FBRUEsV0FBS2xDLEVBQUwsQ0FBUWtDLFVBQVIsRUFBb0JKLE9BQXBCLEVBQTZCQyxNQUE3QixFQUFxQ0MsbUJBQXJDO0FBQ0Q7Ozs4QkFFU0YsTyxFQUFTQyxNLEVBQVE7QUFDekIsVUFBTUcsVUFBVSxHQUFHLFFBQW5CO0FBRUEsV0FBS2pDLEdBQUwsQ0FBU2lDLFVBQVQsRUFBcUJKLE9BQXJCLEVBQThCQyxNQUE5QjtBQUNEOzs7Ozs7QUFHSCxJQUFNVixNQUFNLEdBQUksT0FBT0EsTUFBUCxLQUFrQixXQUFuQixHQUFrQ2MsU0FBbEMsR0FBOEMsSUFBSXBDLE1BQUosRUFBN0QsQyxDQUE0RTs7ZUFFN0RzQixNOzs7QUFFZixTQUFTWSxnQ0FBVCxDQUEwQ0gsT0FBMUMsRUFBbURNLEtBQW5ELEVBQTBEQyxPQUExRCxFQUFtRTtBQUNqRSxNQUFNaEIsTUFBTSxHQUFHZ0IsT0FBZjtBQUFBLE1BQXdCO0FBQ2xCQyxFQUFBQSxLQUFLLEdBQUdqQixNQUFNLENBQUNrQixRQUFQLEVBRGQ7QUFBQSxNQUVNQyxNQUFNLEdBQUduQixNQUFNLENBQUNvQixTQUFQLEVBRmY7QUFJQVgsRUFBQUEsT0FBTyxDQUFDWSxJQUFSLENBQWFMLE9BQWIsRUFBc0JDLEtBQXRCLEVBQTZCRSxNQUE3QixFQUFxQ0osS0FBckMsRUFBNENDLE9BQTVDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgb25DbGljaywgb2ZmQ2xpY2sgfSBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcbmltcG9ydCB7IG9uS2V5VXAsIG9mZktleVVwLCBvbktleURvd24sIG9mZktleURvd24gfSBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgeyBvbiwgb2ZmLCBhZGRFdmVudExpc3RlbmVyLCByZW1vdmVFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgeyBvbk1vdXNlVXAsIG9uTW91c2VEb3duLCBvbk1vdXNlT3Zlciwgb25Nb3VzZU91dCwgb25Nb3VzZU1vdmUsIG9mZk1vdXNlVXAsIG9mZk1vdXNlRG93biwgb2ZmTW91c2VPdmVyLCBvZmZNb3VzZU91dCwgb2ZmTW91c2VNb3ZlIH0gZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIG9uID0gb247XG4gIG9mZiA9IG9mZjtcblxuICBvbkNsaWNrID0gb25DbGljaztcbiAgb2ZmQ2xpY2sgPSBvZmZDbGljaztcblxuICBvbktleVVwID0gb25LZXlVcDtcbiAgb2ZmS2V5VXAgPSBvZmZLZXlVcDtcbiAgb25LZXlEb3duID0gb25LZXlEb3duO1xuICBvZmZLZXlEb3duID0gb2ZmS2V5RG93bjtcblxuICBvbk1vdXNlVXAgPSBvbk1vdXNlVXA7XG4gIG9uTW91c2VEb3duID0gb25Nb3VzZURvd247XG4gIG9uTW91c2VPdmVyID0gb25Nb3VzZU92ZXI7XG4gIG9uTW91c2VPdXQgPSBvbk1vdXNlT3V0O1xuICBvbk1vdXNlTW92ZSA9IG9uTW91c2VNb3ZlO1xuICBvZmZNb3VzZVVwID0gb2ZmTW91c2VVcDtcbiAgb2ZmTW91c2VEb3duID0gb2ZmTW91c2VEb3duO1xuICBvZmZNb3VzZU92ZXIgPSBvZmZNb3VzZU92ZXI7XG4gIG9mZk1vdXNlT3V0ID0gb2ZmTW91c2VPdXQ7XG4gIG9mZk1vdXNlTW92ZSA9IG9mZk1vdXNlTW92ZTtcblxuICBhZGRFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcjtcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gd2luZG93OyAvLy9cbiAgfVxuXG4gIGFzc2lnbiguLi5zb3VyY2VzKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9ICAvLy9cblxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VYT2Zmc2V0OyB9IC8vL1xuXG4gIG9uUmVzaXplKGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlcyA9IFwicmVzaXplXCI7XG4gICAgXG4gICAgdGhpcy5vbihldmVudFR5cGVzLCBoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmUmVzaXplKGhhbmRsZXIsIG9iamVjdCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZXMgPSBcInJlc2l6ZVwiO1xuXG4gICAgdGhpcy5vZmYoZXZlbnRUeXBlcywgaGFuZGxlciwgb2JqZWN0KTtcbiAgfVxufVxuXG5jb25zdCB3aW5kb3cgPSAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgPyB1bmRlZmluZWQgOiBuZXcgV2luZG93KCk7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgd2luZG93O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlcihoYW5kbGVyLCBldmVudCwgZWxlbWVudCkge1xuICBjb25zdCB3aW5kb3cgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgd2lkdGggPSB3aW5kb3cuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gd2luZG93LmdldEhlaWdodCgpO1xuICBcbiAgaGFuZGxlci5jYWxsKGVsZW1lbnQsIHdpZHRoLCBoZWlnaHQsIGV2ZW50LCBlbGVtZW50KTtcbn1cbiJdfQ==