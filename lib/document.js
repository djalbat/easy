"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _click = require("./mixins/click");

var _key = require("./mixins/key");

var _event = require("./mixins/event");

var _mouse = require("./mixins/mouse");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Document = function Document() {
  _classCallCheck(this, Document);

  _defineProperty(this, "on", _event.on);

  _defineProperty(this, "off", _event.off);

  _defineProperty(this, "onClick", _click.onClick);

  _defineProperty(this, "offClick", _click.offClick);

  _defineProperty(this, "onKeyUp", _key.onKeyUp);

  _defineProperty(this, "offKeyUp", _key.offKeyUp);

  _defineProperty(this, "onKeyDown", _key.onKeyDown);

  _defineProperty(this, "offKeyDown", _key.offKeyDown);

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

  this.domElement = document; ///
};

var _default = typeof document === "undefined" ? undefined : new Document(); ///


exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbIkRvY3VtZW50Iiwib24iLCJvZmYiLCJvbkNsaWNrIiwib2ZmQ2xpY2siLCJvbktleVVwIiwib2ZmS2V5VXAiLCJvbktleURvd24iLCJvZmZLZXlEb3duIiwib25Nb3VzZVVwIiwib25Nb3VzZURvd24iLCJvbk1vdXNlT3ZlciIsIm9uTW91c2VPdXQiLCJvbk1vdXNlTW92ZSIsIm9mZk1vdXNlVXAiLCJvZmZNb3VzZURvd24iLCJvZmZNb3VzZU92ZXIiLCJvZmZNb3VzZU91dCIsIm9mZk1vdXNlTW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaW5kRXZlbnRMaXN0ZW5lciIsImZpbmRFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVNQSxRLEdBNEJKLG9CQUFjO0FBQUE7O0FBQUEsOEJBM0JUQyxTQTJCUzs7QUFBQSwrQkExQlJDLFVBMEJROztBQUFBLG1DQXhCSkMsY0F3Qkk7O0FBQUEsb0NBdkJIQyxlQXVCRzs7QUFBQSxtQ0FyQkpDLFlBcUJJOztBQUFBLG9DQXBCSEMsYUFvQkc7O0FBQUEscUNBbkJGQyxjQW1CRTs7QUFBQSxzQ0FsQkRDLGVBa0JDOztBQUFBLHFDQWhCRkMsZ0JBZ0JFOztBQUFBLHVDQWZBQyxrQkFlQTs7QUFBQSx1Q0FkQUMsa0JBY0E7O0FBQUEsc0NBYkRDLGlCQWFDOztBQUFBLHVDQVpBQyxrQkFZQTs7QUFBQSxzQ0FYREMsaUJBV0M7O0FBQUEsd0NBVkNDLG1CQVVEOztBQUFBLHdDQVRDQyxtQkFTRDs7QUFBQSx1Q0FSQUMsa0JBUUE7O0FBQUEsd0NBUENDLG1CQU9EOztBQUFBLDRDQUxLQyx1QkFLTDs7QUFBQSw2Q0FKTUMsd0JBSU47O0FBQUEsOENBSE9DLHlCQUdQOztBQUFBLCtDQUZRQywwQkFFUjs7QUFDWixPQUFLQyxVQUFMLEdBQWtCQyxRQUFsQixDQURZLENBQ2dCO0FBQzdCLEM7O2VBR2EsT0FBT0EsUUFBUCxLQUFvQixXQUFyQixHQUFvQ0MsU0FBcEMsR0FBZ0QsSUFBSXpCLFFBQUosRSxFQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBvbkNsaWNrLCBvZmZDbGljayB9IGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHsgb25LZXlVcCwgb2ZmS2V5VXAsIG9uS2V5RG93biwgb2ZmS2V5RG93biB9IGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCB7IG9uLCBvZmYsIGFkZEV2ZW50TGlzdGVuZXIsIGZpbmRFdmVudExpc3RlbmVyLCBmaW5kRXZlbnRMaXN0ZW5lcnMsIHJlbW92ZUV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCB7IG9uTW91c2VVcCwgb25Nb3VzZURvd24sIG9uTW91c2VPdmVyLCBvbk1vdXNlT3V0LCBvbk1vdXNlTW92ZSwgb2ZmTW91c2VVcCwgb2ZmTW91c2VEb3duLCBvZmZNb3VzZU92ZXIsIG9mZk1vdXNlT3V0LCBvZmZNb3VzZU1vdmUgfSBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBvbiA9IG9uO1xuICBvZmYgPSBvZmY7XG5cbiAgb25DbGljayA9IG9uQ2xpY2s7XG4gIG9mZkNsaWNrID0gb2ZmQ2xpY2s7XG5cbiAgb25LZXlVcCA9IG9uS2V5VXA7XG4gIG9mZktleVVwID0gb2ZmS2V5VXA7XG4gIG9uS2V5RG93biA9IG9uS2V5RG93bjtcbiAgb2ZmS2V5RG93biA9IG9mZktleURvd247XG5cbiAgb25Nb3VzZVVwID0gb25Nb3VzZVVwO1xuICBvbk1vdXNlRG93biA9IG9uTW91c2VEb3duO1xuICBvbk1vdXNlT3ZlciA9IG9uTW91c2VPdmVyO1xuICBvbk1vdXNlT3V0ID0gb25Nb3VzZU91dDtcbiAgb25Nb3VzZU1vdmUgPSBvbk1vdXNlTW92ZTtcbiAgb2ZmTW91c2VVcCA9IG9mZk1vdXNlVXA7XG4gIG9mZk1vdXNlRG93biA9IG9mZk1vdXNlRG93bjtcbiAgb2ZmTW91c2VPdmVyID0gb2ZmTW91c2VPdmVyO1xuICBvZmZNb3VzZU91dCA9IG9mZk1vdXNlT3V0O1xuICBvZmZNb3VzZU1vdmUgPSBvZmZNb3VzZU1vdmU7XG5cbiAgYWRkRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXI7XG4gIGZpbmRFdmVudExpc3RlbmVyID0gZmluZEV2ZW50TGlzdGVuZXI7XG4gIGZpbmRFdmVudExpc3RlbmVycyA9IGZpbmRFdmVudExpc3RlbmVycztcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQ7IC8vL1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpID8gdW5kZWZpbmVkIDogbmV3IERvY3VtZW50KCk7ICAvLy9cbiJdfQ==