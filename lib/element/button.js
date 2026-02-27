"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Button;
    }
});
const _element = /*#__PURE__*/ _interop_require_default(require("../element"));
const _focus = /*#__PURE__*/ _interop_require_default(require("../mixins/focus"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Button extends _element.default {
    static tagName = "button";
}
Object.assign(Button.prototype, _focus.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2J1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZvY3VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwiYnV0dG9uXCI7XG59XG5cbk9iamVjdC5hc3NpZ24oQnV0dG9uLnByb3RvdHlwZSwgZm9jdXNNaXhpbnMpO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZm9jdXNNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBcUJBOzs7Z0VBSEQ7OERBQ0k7Ozs7OztBQUVULE1BQU1BLGVBQWVDLGdCQUFPO0lBQ3pDLE9BQU9DLFVBQVUsU0FBUztBQUM1QjtBQUVBQyxPQUFPQyxNQUFNLENBQUNKLE9BQU9LLFNBQVMsRUFBRUMsY0FBVyJ9