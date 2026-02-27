"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Select;
    }
});
const _element = /*#__PURE__*/ _interop_require_default(require("../element"));
const _input = /*#__PURE__*/ _interop_require_default(require("../mixins/input"));
const _focus = /*#__PURE__*/ _interop_require_default(require("../mixins/focus"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Select extends _element.default {
    static tagName = "select";
}
Object.assign(Select.prototype, _input.default);
Object.assign(Select.prototype, _focus.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NlbGVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBpbnB1dE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2lucHV0XCI7XG5pbXBvcnQgZm9jdXNNaXhpbnMgZnJvbSBcIi4uL21peGlucy9mb2N1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcInNlbGVjdFwiO1xufVxuXG5PYmplY3QuYXNzaWduKFNlbGVjdC5wcm90b3R5cGUsIGlucHV0TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oU2VsZWN0LnByb3RvdHlwZSwgZm9jdXNNaXhpbnMpO1xuIl0sIm5hbWVzIjpbIlNlbGVjdCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiaW5wdXRNaXhpbnMiLCJmb2N1c01peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OztnRUFKRDs4REFDSTs4REFDQTs7Ozs7O0FBRVQsTUFBTUEsZUFBZUMsZ0JBQU87SUFDekMsT0FBT0MsVUFBVSxTQUFTO0FBQzVCO0FBRUFDLE9BQU9DLE1BQU0sQ0FBQ0osT0FBT0ssU0FBUyxFQUFFQyxjQUFXO0FBQzNDSCxPQUFPQyxNQUFNLENBQUNKLE9BQU9LLFNBQVMsRUFBRUUsY0FBVyJ9