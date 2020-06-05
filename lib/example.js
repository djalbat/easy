"use strict";

var _index = require("./index");

var _view = _interopRequireDefault(require("./example/view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
_index.window.assign({
  React: _index.React
});

var body = new _index.Body();
body.mount( /*#__PURE__*/_index.React.createElement(_view["default"], null)); // window.onResize((event, element) => {
//
//   const width = window.getWidth(),
//         height = window.getHeight();
//
//   console.log(width, height)
//
// });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsid2luZG93IiwiYXNzaWduIiwiUmVhY3QiLCJib2R5IiwiQm9keSIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7OztBQUZnRDtBQUloREEsY0FBT0MsTUFBUCxDQUFjO0FBQ1pDLEVBQUFBLEtBQUssRUFBTEE7QUFEWSxDQUFkOztBQUlBLElBQU1DLElBQUksR0FBRyxJQUFJQyxXQUFKLEVBQWI7QUFFQUQsSUFBSSxDQUFDRSxLQUFMLGVBRUUsMkJBQUMsZ0JBQUQsT0FGRixFLENBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgQm9keSwgd2luZG93IH0gZnJvbSBcIi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXdcIlxuXG53aW5kb3cuYXNzaWduKHtcbiAgUmVhY3Rcbn0pO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuYm9keS5tb3VudChcblxuICA8VmlldyAvPlxuXG4pO1xuXG4vLyB3aW5kb3cub25SZXNpemUoKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4vL1xuLy8gICBjb25zdCB3aWR0aCA9IHdpbmRvdy5nZXRXaWR0aCgpLFxuLy8gICAgICAgICBoZWlnaHQgPSB3aW5kb3cuZ2V0SGVpZ2h0KCk7XG4vL1xuLy8gICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0KVxuLy9cbi8vIH0pO1xuIl19