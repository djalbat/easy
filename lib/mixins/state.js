"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function getState() {
    return this.state;
}
function setState(state) {
    this.state = state;
}
function updateState(state) {
    this.state === undefined ? this.state = state : Object.assign(this.state, state);
}
var stateMixins = {
    getState: getState,
    setState: setState,
    updateState: updateState
};
var _default = stateMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvc3RhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTdGF0ZShzdGF0ZSkge1xuICAodGhpcy5zdGF0ZSA9PT0gdW5kZWZpbmVkKSA/XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlIDpcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgc3RhdGUpO1xufVxuXG5jb25zdCBzdGF0ZU1peGlucyA9IHtcbiAgZ2V0U3RhdGUsXG4gIHNldFN0YXRlLFxuICB1cGRhdGVTdGF0ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGVNaXhpbnM7XG4iXSwibmFtZXMiOlsiZ2V0U3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJzdGF0ZU1peGlucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNCQTs7O2VBQUE7OztBQXBCQSxTQUFTQTtJQUNQLE9BQU8sSUFBSSxDQUFDQyxLQUFLO0FBQ25CO0FBRUEsU0FBU0MsU0FBU0QsS0FBSztJQUNyQixJQUFJLENBQUNBLEtBQUssR0FBR0E7QUFDZjtBQUVBLFNBQVNFLFlBQVlGLEtBQUs7SUFDdkIsSUFBSSxDQUFDQSxLQUFLLEtBQUtHLFlBQ2QsSUFBSSxDQUFDSCxLQUFLLEdBQUdBLFFBQ1hJLE9BQU9DLE1BQU0sQ0FBQyxJQUFJLENBQUNMLEtBQUssRUFBRUE7QUFDaEM7QUFFQSxJQUFNTSxjQUFjO0lBQ2xCUCxVQUFBQTtJQUNBRSxVQUFBQTtJQUNBQyxhQUFBQTtBQUNGO0lBRUEsV0FBZUkifQ==