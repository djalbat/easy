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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvc3RhdGUuanMiXSwibmFtZXMiOlsiZ2V0U3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzdGF0ZU1peGlucyJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7U0FFSCxRQUFRLEdBQUcsQ0FBQztJQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7QUFDbkIsQ0FBQztTQUVRLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7QUFDcEIsQ0FBQztTQUVRLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSztBQUNqQyxDQUFDO0FBRUQsR0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDO0lBQ25CLFFBQVEsRUFBUixRQUFRO0lBQ1IsUUFBUSxFQUFSLFFBQVE7SUFDUixXQUFXLEVBQVgsV0FBVztBQUNiLENBQUM7ZUFFYyxXQUFXIn0=