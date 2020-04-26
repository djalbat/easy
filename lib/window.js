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
    value: function onResize(resizeHandler) {
      this.on("resize", resizeHandler);
    }
  }, {
    key: "offResize",
    value: function offResize(resizeHandler) {
      this.off("resize", resizeHandler);
    }
  }]);

  return Window;
}();

var _default = typeof window === "undefined" ? undefined : new Window(); ///


exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmRvdy5qcyJdLCJuYW1lcyI6WyJXaW5kb3ciLCJvbiIsIm9mZiIsIm9uQ2xpY2siLCJvZmZDbGljayIsIm9uS2V5VXAiLCJvZmZLZXlVcCIsIm9uS2V5RG93biIsIm9mZktleURvd24iLCJvbk1vdXNlVXAiLCJvbk1vdXNlRG93biIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm9uTW91c2VNb3ZlIiwib2ZmTW91c2VVcCIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlT3ZlciIsIm9mZk1vdXNlT3V0Iiwib2ZmTW91c2VNb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb21FbGVtZW50Iiwid2luZG93IiwidGFyZ2V0Iiwic291cmNlcyIsIk9iamVjdCIsImFzc2lnbiIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBhZ2VZT2Zmc2V0IiwicGFnZVhPZmZzZXQiLCJyZXNpemVIYW5kbGVyIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLE07QUEwQkosb0JBQWM7QUFBQTs7QUFBQSxnQ0F6QlRDLFNBeUJTOztBQUFBLGlDQXhCUkMsVUF3QlE7O0FBQUEscUNBdEJKQyxjQXNCSTs7QUFBQSxzQ0FyQkhDLGVBcUJHOztBQUFBLHFDQW5CSkMsYUFtQkk7O0FBQUEsc0NBbEJIQyxjQWtCRzs7QUFBQSx1Q0FqQkZDLGVBaUJFOztBQUFBLHdDQWhCREMsZ0JBZ0JDOztBQUFBLHVDQWRGQyxnQkFjRTs7QUFBQSx5Q0FiQUMsa0JBYUE7O0FBQUEseUNBWkFDLGtCQVlBOztBQUFBLHdDQVhEQyxpQkFXQzs7QUFBQSx5Q0FWQUMsa0JBVUE7O0FBQUEsd0NBVERDLGlCQVNDOztBQUFBLDBDQVJDQyxtQkFRRDs7QUFBQSwwQ0FQQ0MsbUJBT0Q7O0FBQUEseUNBTkFDLGtCQU1BOztBQUFBLDBDQUxDQyxtQkFLRDs7QUFBQSw4Q0FIS0MsdUJBR0w7O0FBQUEsaURBRlFDLDBCQUVSOztBQUNaLFNBQUtDLFVBQUwsR0FBa0JDLE1BQWxCLENBRFksQ0FDYztBQUMzQjs7Ozs2QkFFa0I7QUFDakIsVUFBTUMsTUFBTSxHQUFHLEtBQUtGLFVBQXBCLENBRGlCLENBQ2U7O0FBRGYsd0NBQVRHLE9BQVM7QUFBVEEsUUFBQUEsT0FBUztBQUFBOztBQUdqQkMsTUFBQUEsTUFBTSxDQUFDQyxNQUFQLE9BQUFELE1BQU0sR0FBUUYsTUFBUixTQUFtQkMsT0FBbkIsRUFBTjtBQUNEOzs7K0JBRVU7QUFBRSxhQUFPLEtBQUtILFVBQUwsQ0FBZ0JNLFVBQXZCO0FBQW9DLEssQ0FBQzs7OztnQ0FFdEM7QUFBRSxhQUFPLEtBQUtOLFVBQUwsQ0FBZ0JPLFdBQXZCO0FBQXFDLEssQ0FBQzs7OzttQ0FFckM7QUFBRSxhQUFPLEtBQUtQLFVBQUwsQ0FBZ0JRLFdBQXZCO0FBQXFDLEssQ0FBRTs7OztvQ0FFeEM7QUFBRSxhQUFPLEtBQUtSLFVBQUwsQ0FBZ0JTLFdBQXZCO0FBQXFDLEssQ0FBQzs7Ozs2QkFFL0NDLGEsRUFBZTtBQUFFLFdBQUs5QixFQUFMLENBQVEsUUFBUixFQUFrQjhCLGFBQWxCO0FBQW1DOzs7OEJBRW5EQSxhLEVBQWU7QUFBRSxXQUFLN0IsR0FBTCxDQUFTLFFBQVQsRUFBbUI2QixhQUFuQjtBQUFvQzs7Ozs7O2VBR2pELE9BQU9ULE1BQVAsS0FBa0IsV0FBbkIsR0FBa0NVLFNBQWxDLEdBQThDLElBQUloQyxNQUFKLEUsRUFBZSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBvbkNsaWNrLCBvZmZDbGljayB9IGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHsgb25LZXlVcCwgb2ZmS2V5VXAsIG9uS2V5RG93biwgb2ZmS2V5RG93biB9IGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCB7IG9uLCBvZmYsIGFkZEV2ZW50TGlzdGVuZXIsIHJlbW92ZUV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCB7IG9uTW91c2VVcCwgb25Nb3VzZURvd24sIG9uTW91c2VPdmVyLCBvbk1vdXNlT3V0LCBvbk1vdXNlTW92ZSwgb2ZmTW91c2VVcCwgb2ZmTW91c2VEb3duLCBvZmZNb3VzZU92ZXIsIG9mZk1vdXNlT3V0LCBvZmZNb3VzZU1vdmUgfSBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcblxuY2xhc3MgV2luZG93IHtcbiAgb24gPSBvbjtcbiAgb2ZmID0gb2ZmO1xuXG4gIG9uQ2xpY2sgPSBvbkNsaWNrO1xuICBvZmZDbGljayA9IG9mZkNsaWNrO1xuXG4gIG9uS2V5VXAgPSBvbktleVVwO1xuICBvZmZLZXlVcCA9IG9mZktleVVwO1xuICBvbktleURvd24gPSBvbktleURvd247XG4gIG9mZktleURvd24gPSBvZmZLZXlEb3duO1xuXG4gIG9uTW91c2VVcCA9IG9uTW91c2VVcDtcbiAgb25Nb3VzZURvd24gPSBvbk1vdXNlRG93bjtcbiAgb25Nb3VzZU92ZXIgPSBvbk1vdXNlT3ZlcjtcbiAgb25Nb3VzZU91dCA9IG9uTW91c2VPdXQ7XG4gIG9uTW91c2VNb3ZlID0gb25Nb3VzZU1vdmU7XG4gIG9mZk1vdXNlVXAgPSBvZmZNb3VzZVVwO1xuICBvZmZNb3VzZURvd24gPSBvZmZNb3VzZURvd247XG4gIG9mZk1vdXNlT3ZlciA9IG9mZk1vdXNlT3ZlcjtcbiAgb2ZmTW91c2VPdXQgPSBvZmZNb3VzZU91dDtcbiAgb2ZmTW91c2VNb3ZlID0gb2ZmTW91c2VNb3ZlO1xuXG4gIGFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xuICByZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7IC8vL1xuICB9XG5cbiAgYXNzaWduKC4uLnNvdXJjZXMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlcikgeyB0aGlzLm9uKFwicmVzaXplXCIsIHJlc2l6ZUhhbmRsZXIpOyB9XG5cbiAgb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHsgdGhpcy5vZmYoXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlcik7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpID8gdW5kZWZpbmVkIDogbmV3IFdpbmRvdygpOyAgLy8vXG4iXX0=