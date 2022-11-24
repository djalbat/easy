"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" ///
, {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _key = /*#__PURE__*/ _interopRequireDefault(require("./mixins/key"));
var _click = /*#__PURE__*/ _interopRequireDefault(require("./mixins/click"));
var _event = /*#__PURE__*/ _interopRequireDefault(require("./mixins/event"));
var _mouse = /*#__PURE__*/ _interopRequireDefault(require("./mixins/mouse"));
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var Document = function Document() {
    _classCallCheck(this, Document);
    this.domElement = document; ///
};
var _default = (typeof document === "undefined" ? "undefined" : _typeof(document)) === _constants.UNDEFINED ? undefined : new Document();
Object.assign(Document.prototype, _key.default);
Object.assign(Document.prototype, _click.default);
Object.assign(Document.prototype, _event.default);
Object.assign(Document.prototype, _mouse.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5cbmltcG9ydCB7IFVOREVGSU5FRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBEb2N1bWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50OyAvLy9cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAodHlwZW9mIGRvY3VtZW50ID09PSBVTkRFRklORUQpID8gdW5kZWZpbmVkIDogbmV3IERvY3VtZW50KCk7ICAvLy9cblxuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG4iXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJVTkRFRklORUQiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJrZXlNaXhpbnMiLCJjbGlja01peGlucyIsImV2ZW50TWl4aW5zIiwibW91c2VNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBLFVBQThFLEdBQUc7Ozs7ZUFBakY7Ozt3REFic0I7MERBQ0U7MERBQ0E7MERBQ0E7eUJBRUU7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLFdBQU4sU0FBTUE7MEJBQUFBO0lBRUYsSUFBSSxDQUFDQyxVQUFVLEdBQUdDLFVBQVUsR0FBRzs7SUFJbkMsV0FBZSxBQUFDLENBQUEsT0FBT0EseUNBQVAsUUFBT0EsU0FBUSxBQUFELE1BQU1DLG9CQUFTLEdBQUlDLFlBQVksSUFBSUosVUFBVTtBQUUzRUssT0FBT0MsTUFBTSxDQUFDTixTQUFTTyxTQUFTLEVBQUVDLFlBQVM7QUFDM0NILE9BQU9DLE1BQU0sQ0FBQ04sU0FBU08sU0FBUyxFQUFFRSxjQUFXO0FBQzdDSixPQUFPQyxNQUFNLENBQUNOLFNBQVNPLFNBQVMsRUFBRUcsY0FBVztBQUM3Q0wsT0FBT0MsTUFBTSxDQUFDTixTQUFTTyxTQUFTLEVBQUVJLGNBQVcifQ==