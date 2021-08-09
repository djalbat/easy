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
