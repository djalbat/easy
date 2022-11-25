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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
var Document = /*#__PURE__*/ function() {
    function Document() {
        _classCallCheck(this, Document);
        this.domElement = document; ///
    }
    _createClass(Document, [
        {
            key: "getRange",
            value: function getRange() {
                return this.domElement.getRange();
            }
        }
    ]);
    return Document;
}();
var _default = (typeof document === "undefined" ? "undefined" : _typeof(document)) === _constants.UNDEFINED ? undefined : new Document();
Object.assign(Document.prototype, _key.default);
Object.assign(Document.prototype, _click.default);
Object.assign(Document.prototype, _event.default);
Object.assign(Document.prototype, _mouse.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5cbmltcG9ydCB7IFVOREVGSU5FRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBEb2N1bWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50OyAvLy9cbiAgfVxuXG4gIGdldFJhbmdlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldFJhbmdlKCk7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHR5cGVvZiBkb2N1bWVudCA9PT0gVU5ERUZJTkVEKSA/IHVuZGVmaW5lZCA6IG5ldyBEb2N1bWVudCgpOyAgLy8vXG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0UmFuZ2UiLCJVTkRFRklORUQiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJrZXlNaXhpbnMiLCJjbGlja01peGlucyIsImV2ZW50TWl4aW5zIiwibW91c2VNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQSxVQUE4RSxHQUFHOzs7O2VBQWpGOzs7d0RBZnNCOzBEQUNFOzBEQUNBOzBEQUNBO3lCQUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLHlCQVFILEFBUkg7YUFBTUE7OEJBQUFBO1FBRUYsSUFBSSxDQUFDQyxVQUFVLEdBQUdDLFVBQVUsR0FBRzs7aUJBRjdCRjs7WUFLSkcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQUUsT0FBTyxJQUFJLENBQUNGLFVBQVUsQ0FBQ0UsUUFBUTtZQUFJOzs7V0FMNUNIOztJQVFOLFdBQWUsQUFBQyxDQUFBLE9BQU9FLHlDQUFQLFFBQU9BLFNBQVEsQUFBRCxNQUFNRSxvQkFBUyxHQUFJQyxZQUFZLElBQUlMLFVBQVU7QUFFM0VNLE9BQU9DLE1BQU0sQ0FBQ1AsU0FBU1EsU0FBUyxFQUFFQyxZQUFTO0FBQzNDSCxPQUFPQyxNQUFNLENBQUNQLFNBQVNRLFNBQVMsRUFBRUUsY0FBVztBQUM3Q0osT0FBT0MsTUFBTSxDQUFDUCxTQUFTUSxTQUFTLEVBQUVHLGNBQVc7QUFDN0NMLE9BQU9DLE1BQU0sQ0FBQ1AsU0FBU1EsU0FBUyxFQUFFSSxjQUFXIn0=