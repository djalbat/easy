"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function getState() {
    return this.state;
}
function setState(state) {
    this.state = state;
}
function updateState(state) {
    Object.assign(this.state, state);
}
var stateMixins = {
    getState: getState,
    setState: setState,
    updateState: updateState
};
var _default = stateMixins;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvc3RhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTdGF0ZShzdGF0ZSkge1xuICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHN0YXRlKTtcbn1cblxuY29uc3Qgc3RhdGVNaXhpbnMgPSB7XG4gIGdldFN0YXRlLFxuICBzZXRTdGF0ZSxcbiAgdXBkYXRlU3RhdGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlTWl4aW5zO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O1NBRUgsUUFBUTtnQkFDSCxLQUFLOztTQUdWLFFBQVEsQ0FBQyxLQUFLO1NBQ2hCLEtBQUssR0FBRyxLQUFLOztTQUdYLFdBQVcsQ0FBQyxLQUFLO0lBQ3hCLE1BQU0sQ0FBQyxNQUFNLE1BQU0sS0FBSyxFQUFFLEtBQUs7O0lBRzNCLFdBQVc7SUFDZixRQUFRLEVBQVIsUUFBUTtJQUNSLFFBQVEsRUFBUixRQUFRO0lBQ1IsV0FBVyxFQUFYLFdBQVc7O2VBR0UsV0FBVyJ9