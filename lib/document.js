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
var _key = /*#__PURE__*/ _interop_require_default(require("./mixins/key"));
var _click = /*#__PURE__*/ _interop_require_default(require("./mixins/click"));
var _event = /*#__PURE__*/ _interop_require_default(require("./mixins/event"));
var _mouse = /*#__PURE__*/ _interop_require_default(require("./mixins/mouse"));
var _selection = /*#__PURE__*/ _interop_require_default(require("./mixins/selection"));
var _customEvent = /*#__PURE__*/ _interop_require_default(require("./mixins/customEvent"));
var _constants = require("./constants");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var Document = /*#__PURE__*/ function() {
    function Document() {
        _class_call_check(this, Document);
        this.domElement = document; ///
    }
    _create_class(Document, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return this.domElement;
            }
        },
        {
            key: "createRange",
            value: function createRange() {
                return this.domElement.createRange();
            }
        },
        {
            key: "createTextNode",
            value: function createTextNode(data) {
                return this.domElement.createTextNode(data);
            }
        }
    ]);
    return Document;
}();
var _default = (typeof document === "undefined" ? "undefined" : _type_of(document)) === _constants.UNDEFINED ? undefined : new Document();
Object.assign(Document.prototype, _key.default);
Object.assign(Document.prototype, _click.default);
Object.assign(Document.prototype, _event.default);
Object.assign(Document.prototype, _mouse.default);
Object.assign(Document.prototype, _selection.default);
Object.assign(Document.prototype, _customEvent.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgc2VsZWN0aW9uTWl4aW5zIGZyb20gXCIuL21peGlucy9zZWxlY3Rpb25cIjtcbmltcG9ydCBjdXN0b21FdmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvY3VzdG9tRXZlbnRcIjtcblxuaW1wb3J0IHsgVU5ERUZJTkVEIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIERvY3VtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQ7IC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgY3JlYXRlUmFuZ2UoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY3JlYXRlUmFuZ2UoKTsgfVxuXG4gIGNyZWF0ZVRleHROb2RlKGRhdGEpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAodHlwZW9mIGRvY3VtZW50ID09PSBVTkRFRklORUQpID8gdW5kZWZpbmVkIDogbmV3IERvY3VtZW50KCk7ICAvLy9cblxuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgc2VsZWN0aW9uTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBjdXN0b21FdmVudE1peGlucyk7XG4iXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRET01FbGVtZW50IiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVUZXh0Tm9kZSIsImRhdGEiLCJVTkRFRklORUQiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJrZXlNaXhpbnMiLCJjbGlja01peGlucyIsImV2ZW50TWl4aW5zIiwibW91c2VNaXhpbnMiLCJzZWxlY3Rpb25NaXhpbnMiLCJjdXN0b21FdmVudE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUJBLFVBQThFLEdBQUc7Ozs7ZUFBakY7OzswREF2QnNCOzREQUNFOzREQUNBOzREQUNBO2dFQUNJO2tFQUNFO3lCQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLHlCQUFELEFBQUw7YUFBTUE7Z0NBQUFBO1FBRUYsSUFBSSxDQUFDQyxVQUFVLEdBQUdDLFVBQVUsR0FBRzs7a0JBRjdCRjs7WUFLSkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFnQixPQUFPLElBQUksQ0FBQ0gsVUFBVSxDQUFDRyxXQUFXO1lBQUk7OztZQUV0REMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLElBQUk7Z0JBQUksT0FBTyxJQUFJLENBQUNMLFVBQVUsQ0FBQ0ksY0FBYyxDQUFDQztZQUFPOzs7V0FYaEVOOztJQWNOLFdBQWUsQUFBQyxDQUFBLE9BQU9FLHlDQUFQLFNBQU9BLFNBQU8sTUFBTUssb0JBQVMsR0FBSUMsWUFBWSxJQUFJUjtBQUVqRVMsT0FBT0MsTUFBTSxDQUFDVixTQUFTVyxTQUFTLEVBQUVDLFlBQVM7QUFDM0NILE9BQU9DLE1BQU0sQ0FBQ1YsU0FBU1csU0FBUyxFQUFFRSxjQUFXO0FBQzdDSixPQUFPQyxNQUFNLENBQUNWLFNBQVNXLFNBQVMsRUFBRUcsY0FBVztBQUM3Q0wsT0FBT0MsTUFBTSxDQUFDVixTQUFTVyxTQUFTLEVBQUVJLGNBQVc7QUFDN0NOLE9BQU9DLE1BQU0sQ0FBQ1YsU0FBU1csU0FBUyxFQUFFSyxrQkFBZTtBQUNqRFAsT0FBT0MsTUFBTSxDQUFDVixTQUFTVyxTQUFTLEVBQUVNLG9CQUFpQiJ9