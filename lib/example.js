"use strict";
require("./example/preamble");
var _index = require("./index");
var _view = _interopRequireDefault(require("./example/view"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var body = new _index.Body();
body.mount(/*#__PURE__*/ React.createElement(_view.default, null));
