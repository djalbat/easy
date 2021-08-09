"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _key = _interopRequireDefault(require("./mixins/key"));
var _click = _interopRequireDefault(require("./mixins/click"));
var _event = _interopRequireDefault(require("./mixins/event"));
var _mouse = _interopRequireDefault(require("./mixins/mouse"));
var _constants = require("./constants");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var Document1 = function Document1() {
    _classCallCheck(this, Document1);
    this.domElement = document; ///
};
var _default = _typeof(document) === _constants.UNDEFINED ? undefined : new Document1();
exports.default = _default;
Object.assign(Document1.prototype, _key.default);
Object.assign(Document1.prototype, _click.default);
Object.assign(Document1.prototype, _event.default);
Object.assign(Document1.prototype, _mouse.default);
