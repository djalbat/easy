"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _click = require("./mixins/click");

var _resize = require("./mixins/resize");

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

    _defineProperty(this, "onResize", _resize.onResize);

    _defineProperty(this, "offResize", _resize.offResize);

    _defineProperty(this, "addResizeObject", addResizeObject);

    _defineProperty(this, "removeResizeObject", removeResizeObject);

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

    _defineProperty(this, "findEventListener", _event.findEventListener);

    _defineProperty(this, "findEventListeners", _event.findEventListeners);

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

  }]);

  return Window;
}();

var _default = typeof window === "undefined" ? undefined : new Window(); ///


exports["default"] = _default;

function addResizeObject() {} ///


function removeResizeObject() {} ///
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmRvdy5qcyJdLCJuYW1lcyI6WyJXaW5kb3ciLCJvbiIsIm9mZiIsIm9uQ2xpY2siLCJvZmZDbGljayIsIm9uUmVzaXplIiwib2ZmUmVzaXplIiwiYWRkUmVzaXplT2JqZWN0IiwicmVtb3ZlUmVzaXplT2JqZWN0Iiwib25LZXlVcCIsIm9mZktleVVwIiwib25LZXlEb3duIiwib2ZmS2V5RG93biIsIm9uTW91c2VVcCIsIm9uTW91c2VEb3duIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwib25Nb3VzZU1vdmUiLCJvZmZNb3VzZVVwIiwib2ZmTW91c2VEb3duIiwib2ZmTW91c2VPdmVyIiwib2ZmTW91c2VPdXQiLCJvZmZNb3VzZU1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZmluZEV2ZW50TGlzdGVuZXIiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9tRWxlbWVudCIsIndpbmRvdyIsInRhcmdldCIsInNvdXJjZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLE07QUFpQ0osb0JBQWM7QUFBQTs7QUFBQSxnQ0FoQ1RDLFNBZ0NTOztBQUFBLGlDQS9CUkMsVUErQlE7O0FBQUEscUNBN0JKQyxjQTZCSTs7QUFBQSxzQ0E1QkhDLGVBNEJHOztBQUFBLHNDQTFCSEMsZ0JBMEJHOztBQUFBLHVDQXpCRkMsaUJBeUJFOztBQUFBLDZDQXhCSUMsZUF3Qko7O0FBQUEsZ0RBdkJPQyxrQkF1QlA7O0FBQUEscUNBckJKQyxhQXFCSTs7QUFBQSxzQ0FwQkhDLGNBb0JHOztBQUFBLHVDQW5CRkMsZUFtQkU7O0FBQUEsd0NBbEJEQyxnQkFrQkM7O0FBQUEsdUNBaEJGQyxnQkFnQkU7O0FBQUEseUNBZkFDLGtCQWVBOztBQUFBLHlDQWRBQyxrQkFjQTs7QUFBQSx3Q0FiREMsaUJBYUM7O0FBQUEseUNBWkFDLGtCQVlBOztBQUFBLHdDQVhEQyxpQkFXQzs7QUFBQSwwQ0FWQ0MsbUJBVUQ7O0FBQUEsMENBVENDLG1CQVNEOztBQUFBLHlDQVJBQyxrQkFRQTs7QUFBQSwwQ0FQQ0MsbUJBT0Q7O0FBQUEsOENBTEtDLHVCQUtMOztBQUFBLCtDQUpNQyx3QkFJTjs7QUFBQSxnREFIT0MseUJBR1A7O0FBQUEsaURBRlFDLDBCQUVSOztBQUNaLFNBQUtDLFVBQUwsR0FBa0JDLE1BQWxCLENBRFksQ0FDYztBQUMzQjs7Ozs2QkFFa0I7QUFDakIsVUFBTUMsTUFBTSxHQUFHLEtBQUtGLFVBQXBCLENBRGlCLENBQ2U7O0FBRGYsd0NBQVRHLE9BQVM7QUFBVEEsUUFBQUEsT0FBUztBQUFBOztBQUdqQkMsTUFBQUEsTUFBTSxDQUFDQyxNQUFQLE9BQUFELE1BQU0sR0FBUUYsTUFBUixTQUFtQkMsT0FBbkIsRUFBTjtBQUNEOzs7K0JBRVU7QUFBRSxhQUFPLEtBQUtILFVBQUwsQ0FBZ0JNLFVBQXZCO0FBQW9DLEssQ0FBQzs7OztnQ0FFdEM7QUFBRSxhQUFPLEtBQUtOLFVBQUwsQ0FBZ0JPLFdBQXZCO0FBQXFDLEssQ0FBQzs7OzttQ0FFckM7QUFBRSxhQUFPLEtBQUtQLFVBQUwsQ0FBZ0JRLFdBQXZCO0FBQXFDLEssQ0FBRTs7OztvQ0FFeEM7QUFBRSxhQUFPLEtBQUtSLFVBQUwsQ0FBZ0JTLFdBQXZCO0FBQXFDLEssQ0FBQzs7Ozs7OztlQUcxQyxPQUFPUixNQUFQLEtBQWtCLFdBQW5CLEdBQWtDUyxTQUFsQyxHQUE4QyxJQUFJckMsTUFBSixFLEVBQWU7Ozs7O0FBRTVFLFNBQVNPLGVBQVQsR0FBMkIsQ0FBRSxDLENBQUM7OztBQUU5QixTQUFTQyxrQkFBVCxHQUE4QixDQUFFLEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBvbkNsaWNrLCBvZmZDbGljayB9IGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHsgb25SZXNpemUsIG9mZlJlc2l6ZSB9IGZyb20gXCIuL21peGlucy9yZXNpemVcIjtcbmltcG9ydCB7IG9uS2V5VXAsIG9mZktleVVwLCBvbktleURvd24sIG9mZktleURvd24gfSBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgeyBvbiwgb2ZmLCBhZGRFdmVudExpc3RlbmVyLCBmaW5kRXZlbnRMaXN0ZW5lciwgZmluZEV2ZW50TGlzdGVuZXJzLCByZW1vdmVFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgeyBvbk1vdXNlVXAsIG9uTW91c2VEb3duLCBvbk1vdXNlT3Zlciwgb25Nb3VzZU91dCwgb25Nb3VzZU1vdmUsIG9mZk1vdXNlVXAsIG9mZk1vdXNlRG93biwgb2ZmTW91c2VPdmVyLCBvZmZNb3VzZU91dCwgb2ZmTW91c2VNb3ZlIH0gZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIG9uID0gb247XG4gIG9mZiA9IG9mZjtcblxuICBvbkNsaWNrID0gb25DbGljaztcbiAgb2ZmQ2xpY2sgPSBvZmZDbGljaztcblxuICBvblJlc2l6ZSA9IG9uUmVzaXplO1xuICBvZmZSZXNpemUgPSBvZmZSZXNpemU7XG4gIGFkZFJlc2l6ZU9iamVjdCA9IGFkZFJlc2l6ZU9iamVjdDtcbiAgcmVtb3ZlUmVzaXplT2JqZWN0ID0gcmVtb3ZlUmVzaXplT2JqZWN0O1xuXG4gIG9uS2V5VXAgPSBvbktleVVwO1xuICBvZmZLZXlVcCA9IG9mZktleVVwO1xuICBvbktleURvd24gPSBvbktleURvd247XG4gIG9mZktleURvd24gPSBvZmZLZXlEb3duO1xuXG4gIG9uTW91c2VVcCA9IG9uTW91c2VVcDtcbiAgb25Nb3VzZURvd24gPSBvbk1vdXNlRG93bjtcbiAgb25Nb3VzZU92ZXIgPSBvbk1vdXNlT3ZlcjtcbiAgb25Nb3VzZU91dCA9IG9uTW91c2VPdXQ7XG4gIG9uTW91c2VNb3ZlID0gb25Nb3VzZU1vdmU7XG4gIG9mZk1vdXNlVXAgPSBvZmZNb3VzZVVwO1xuICBvZmZNb3VzZURvd24gPSBvZmZNb3VzZURvd247XG4gIG9mZk1vdXNlT3ZlciA9IG9mZk1vdXNlT3ZlcjtcbiAgb2ZmTW91c2VPdXQgPSBvZmZNb3VzZU91dDtcbiAgb2ZmTW91c2VNb3ZlID0gb2ZmTW91c2VNb3ZlO1xuXG4gIGFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xuICBmaW5kRXZlbnRMaXN0ZW5lciA9IGZpbmRFdmVudExpc3RlbmVyO1xuICBmaW5kRXZlbnRMaXN0ZW5lcnMgPSBmaW5kRXZlbnRMaXN0ZW5lcnM7XG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSByZW1vdmVFdmVudExpc3RlbmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdzsgLy8vXG4gIH1cblxuICBhc3NpZ24oLi4uc291cmNlcykge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc291cmNlcyk7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lcldpZHRoOyB9IC8vL1xuICBcbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySGVpZ2h0OyB9IC8vL1xuXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWU9mZnNldDsgfSAgLy8vXG5cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWE9mZnNldDsgfSAvLy9cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpID8gdW5kZWZpbmVkIDogbmV3IFdpbmRvdygpOyAgLy8vXG5cbmZ1bmN0aW9uIGFkZFJlc2l6ZU9iamVjdCgpIHt9IC8vL1xuXG5mdW5jdGlvbiByZW1vdmVSZXNpemVPYmplY3QoKSB7fSAvLy9cbiJdfQ==