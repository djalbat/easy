"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _key = _interopRequireDefault(require("./mixins/key"));
var _click = _interopRequireDefault(require("./mixins/click"));
var _event = _interopRequireDefault(require("./mixins/event"));
var _mouse = _interopRequireDefault(require("./mixins/mouse"));
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
var Document1 = function Document1() {
    _classCallCheck(this, Document1);
    this.domElement = document; ///
};
var _default = typeof document === "undefined" ? undefined : new Document1();
exports.default = _default;
Object.assign(Document1.prototype, _key.default);
Object.assign(Document1.prototype, _click.default);
Object.assign(Document1.prototype, _event.default);
Object.assign(Document1.prototype, _mouse.default);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5cbmNsYXNzIERvY3VtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQ7IC8vL1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpID8gdW5kZWZpbmVkIDogbmV3IERvY3VtZW50KCk7ICAvLy9cblxuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFVSxJQUFjO0lBQ1osTUFBZ0I7SUFDaEIsTUFBZ0I7SUFDaEIsTUFBZ0I7Ozs7Ozs7Ozs7O0lBRWxDLFNBQVEsWUFBUixTQUFROzBCQUFSLFNBQVE7U0FFTCxVQUFVLEdBQUcsUUFBUSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7c0JBSVosUUFBUSxNQUFLLFNBQVcsSUFBSSxTQUFTLE9BQU8sU0FBUTs7QUFFM0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFRLENBQUMsU0FBUyxFQWJWLElBQWM7QUFjcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFRLENBQUMsU0FBUyxFQWJSLE1BQWdCO0FBY3hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUSxDQUFDLFNBQVMsRUFiUixNQUFnQjtBQWN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVEsQ0FBQyxTQUFTLEVBYlIsTUFBZ0IifQ==