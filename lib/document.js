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
var Document1 = function Document1() {
    _classCallCheck(this, Document1);
    this.domElement = document; ///
};
var _default = _typeof(document) === _constants.UNDEFINED ? undefined : new Document1();
exports.default = _default;
Object.assign(Document1.prototype, _key.default);
Object.assign(Document1.prototype, _click.default);
Object.assign(Document1.prototype, _event.default);
Object.assign(Document1.prototype, _mouse.default);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5cbmltcG9ydCB7IFVOREVGSU5FRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBEb2N1bWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50OyAvLy9cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAodHlwZW9mIGRvY3VtZW50ID09PSBVTkRFRklORUQpID8gdW5kZWZpbmVkIDogbmV3IERvY3VtZW50KCk7ICAvLy9cblxuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxJQUFjO0lBQ1osTUFBZ0I7SUFDaEIsTUFBZ0I7SUFDaEIsTUFBZ0I7SUFFZCxVQUFhOzs7Ozs7Ozs7Ozs7OztJQUVqQyxTQUFRLFlBQVIsU0FBUTswQkFBUixTQUFRO1NBRUwsVUFBVSxHQUFHLFFBQVEsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7O2VBSW5CLE9BQWUsQ0FBUixRQUFRLE1BUkwsVUFBYSxhQVFVLFNBQVMsT0FBTyxTQUFROztBQUV6RSxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVEsQ0FBQyxTQUFTLEVBZlYsSUFBYztBQWdCcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFRLENBQUMsU0FBUyxFQWZSLE1BQWdCO0FBZ0J4QyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVEsQ0FBQyxTQUFTLEVBZlIsTUFBZ0I7QUFnQnhDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUSxDQUFDLFNBQVMsRUFmUixNQUFnQiJ9