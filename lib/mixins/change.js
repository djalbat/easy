"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
function onChange(changeHandler, element) {
    this.on(_constants.CHANGE, changeHandler, element);
}
function offChange(changeHandler, element) {
    this.off(_constants.CHANGE, changeHandler, element);
}
var changeMixins = {
    onChange: onChange,
    offChange: offChange
};
var _default = changeMixins;
exports.default = _default;
