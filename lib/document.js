"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _key = _interopRequireDefault(require("./mixins/key"));
var _click = _interopRequireDefault(require("./mixins/click"));
var _event = _interopRequireDefault(require("./mixins/event"));
var _mouse = _interopRequireDefault(require("./mixins/mouse"));
var _constants = require("./constants");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var Document = function Document() {
    _classCallCheck(this, Document);
    this.domElement = document; ///
};
var _default = (typeof document === "undefined" ? "undefined" : _typeof(document)) === _constants.UNDEFINED ? undefined : new Document();
exports.default = _default;
Object.assign(Document.prototype, _key.default);
Object.assign(Document.prototype, _click.default);
Object.assign(Document.prototype, _event.default);
Object.assign(Document.prototype, _mouse.default);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJrZXlNaXhpbnMiLCJjbGlja01peGlucyIsImV2ZW50TWl4aW5zIiwibW91c2VNaXhpbnMiLCJVTkRFRklORUQiLCJEb2N1bWVudCIsImNvbnN0cnVjdG9yIiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwidW5kZWZpbmVkIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWMsQ0FBZCxJQUFjO0FBQ1osR0FBZ0IsQ0FBaEIsTUFBZ0I7QUFDaEIsR0FBZ0IsQ0FBaEIsTUFBZ0I7QUFDaEIsR0FBZ0IsQ0FBaEIsTUFBZ0I7QUFFZCxHQUFhLENBQWIsVUFBYTs7Ozs7Ozs7Ozs7Ozs7SUFFakMsUUFBUSxZQUFSLFFBQVE7MEJBQVIsUUFBUTtJQUVWLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7dUJBSVosUUFBUSxpQ0FBZixPQUFlLENBQVIsUUFBUSxPQVJMLFVBQWEsYUFRVSxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVE7O0FBRXpFLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFmVixJQUFjO0FBZ0JwQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBZlIsTUFBZ0I7QUFnQnhDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFmUixNQUFnQjtBQWdCeEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQWZSLE1BQWdCIn0=