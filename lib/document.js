"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _key = _interopRequireDefault(require("./mixins/key"));

var _click = _interopRequireDefault(require("./mixins/click"));

var _event = _interopRequireDefault(require("./mixins/event"));

var _mouse = _interopRequireDefault(require("./mixins/mouse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Document = function Document() {
  _classCallCheck(this, Document);

  this.domElement = document; ///
};

var _default = typeof document === "undefined" ? undefined : new Document(); ///


exports["default"] = _default;
Object.assign(Document.prototype, _key["default"]);
Object.assign(Document.prototype, _click["default"]);
Object.assign(Document.prototype, _event["default"]);
Object.assign(Document.prototype, _mouse["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwidW5kZWZpbmVkIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwia2V5TWl4aW5zIiwiY2xpY2tNaXhpbnMiLCJldmVudE1peGlucyIsIm1vdXNlTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFFTUEsUSxHQUNKLG9CQUFjO0FBQUE7O0FBQ1osT0FBS0MsVUFBTCxHQUFrQkMsUUFBbEIsQ0FEWSxDQUNnQjtBQUM3QixDOztlQUdhLE9BQU9BLFFBQVAsS0FBb0IsV0FBckIsR0FBb0NDLFNBQXBDLEdBQWdELElBQUlILFFBQUosRSxFQUFpQjs7OztBQUVoRkksTUFBTSxDQUFDQyxNQUFQLENBQWNMLFFBQVEsQ0FBQ00sU0FBdkIsRUFBa0NDLGVBQWxDO0FBQ0FILE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxRQUFRLENBQUNNLFNBQXZCLEVBQWtDRSxpQkFBbEM7QUFDQUosTUFBTSxDQUFDQyxNQUFQLENBQWNMLFFBQVEsQ0FBQ00sU0FBdkIsRUFBa0NHLGlCQUFsQztBQUNBTCxNQUFNLENBQUNDLE1BQVAsQ0FBY0wsUUFBUSxDQUFDTSxTQUF2QixFQUFrQ0ksaUJBQWxDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuXG5jbGFzcyBEb2N1bWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50OyAvLy9cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSA/IHVuZGVmaW5lZCA6IG5ldyBEb2N1bWVudCgpOyAgLy8vXG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuIl19