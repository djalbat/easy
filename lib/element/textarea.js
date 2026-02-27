"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Textarea;
    }
});
const _element = /*#__PURE__*/ _interop_require_default(require("../element"));
const _input = /*#__PURE__*/ _interop_require_default(require("../mixins/input"));
const _focus = /*#__PURE__*/ _interop_require_default(require("../mixins/focus"));
const _selection = /*#__PURE__*/ _interop_require_default(require("../mixins/selection"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Textarea extends _element.default {
    static tagName = "textarea";
}
Object.assign(Textarea.prototype, _input.default);
Object.assign(Textarea.prototype, _focus.default);
Object.assign(Textarea.prototype, _selection.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RleHRhcmVhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGlucHV0TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvaW5wdXRcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZvY3VzXCI7XG5pbXBvcnQgc2VsZWN0aW9uTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc2VsZWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgRWxlbWVudCB7XG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ0ZXh0YXJlYVwiO1xufVxuXG5PYmplY3QuYXNzaWduKFRleHRhcmVhLnByb3RvdHlwZSwgaW5wdXRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihUZXh0YXJlYS5wcm90b3R5cGUsIGZvY3VzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oVGV4dGFyZWEucHJvdG90eXBlLCBzZWxlY3Rpb25NaXhpbnMpO1xuIl0sIm5hbWVzIjpbIlRleHRhcmVhIiwiRWxlbWVudCIsInRhZ05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJpbnB1dE1peGlucyIsImZvY3VzTWl4aW5zIiwic2VsZWN0aW9uTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O2dFQUxEOzhEQUNJOzhEQUNBO2tFQUNJOzs7Ozs7QUFFYixNQUFNQSxpQkFBaUJDLGdCQUFPO0lBQzNDLE9BQU9DLFVBQVUsV0FBVztBQUM5QjtBQUVBQyxPQUFPQyxNQUFNLENBQUNKLFNBQVNLLFNBQVMsRUFBRUMsY0FBVztBQUM3Q0gsT0FBT0MsTUFBTSxDQUFDSixTQUFTSyxTQUFTLEVBQUVFLGNBQVc7QUFDN0NKLE9BQU9DLE1BQU0sQ0FBQ0osU0FBU0ssU0FBUyxFQUFFRyxrQkFBZSJ9