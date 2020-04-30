"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../index");

var _submit = _interopRequireDefault(require("./button/submit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
  }

  _createClass(View, [{
    key: "childElements",
    value: function childElements(properties) {
      var _this = this;

      return [React.createElement(_submit["default"], null), React.createElement(_index.Textarea, {
        onScroll: function onScroll(event, element) {
          var scrollTop = element.getScrollTop(),
              scrollLeft = element.getScrollLeft();
          console.log(scrollTop, scrollLeft);
        }
      }), React.createElement("div", {
        className: "grey",
        onResize: function onResize(event, element) {
          var width = _this.getWidth(),
              height = _this.getHeight();

          console.log(width, height);
        },
        onMouseMove: function onMouseMove(event, element) {
          var pageX = event.pageX,
              pageY = event.pageY;
          console.log(pageX, pageY);
        }
      })];
    }
  }]);

  return View;
}(_index.Element);

exports["default"] = View;

_defineProperty(View, "tagName", "div");

_defineProperty(View, "defaultProperties", {
  className: "view"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInByb3BlcnRpZXMiLCJldmVudCIsImVsZW1lbnQiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwicGFnZVgiLCJwYWdlWSIsIkVsZW1lbnQiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7a0NBT0xDLFUsRUFBWTtBQUFBOztBQUN4QixhQUFRLENBRU4sb0JBQUMsa0JBQUQsT0FGTSxFQUdOLG9CQUFDLGVBQUQ7QUFBVSxRQUFBLFFBQVEsRUFBRSxrQkFBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBRTVCLGNBQU1DLFNBQVMsR0FBR0QsT0FBTyxDQUFDRSxZQUFSLEVBQWxCO0FBQUEsY0FDTUMsVUFBVSxHQUFHSCxPQUFPLENBQUNJLGFBQVIsRUFEbkI7QUFHQUMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLFNBQVosRUFBdUJFLFVBQXZCO0FBRUQ7QUFQWCxRQUhNLEVBWU47QUFBSyxRQUFBLFNBQVMsRUFBQyxNQUFmO0FBQ0ssUUFBQSxRQUFRLEVBQUUsa0JBQUNKLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUU1QixjQUFNTyxLQUFLLEdBQUcsS0FBSSxDQUFDQyxRQUFMLEVBQWQ7QUFBQSxjQUNNQyxNQUFNLEdBQUcsS0FBSSxDQUFDQyxTQUFMLEVBRGY7O0FBR0FMLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaLEVBQW1CRSxNQUFuQjtBQUVELFNBUk47QUFTSyxRQUFBLFdBQVcsRUFBRSxxQkFBQ1YsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQUEsY0FFdkJXLEtBRnVCLEdBRU5aLEtBRk0sQ0FFdkJZLEtBRnVCO0FBQUEsY0FFaEJDLEtBRmdCLEdBRU5iLEtBRk0sQ0FFaEJhLEtBRmdCO0FBSS9CUCxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUssS0FBWixFQUFtQkMsS0FBbkI7QUFFRDtBQWZOLFFBWk0sQ0FBUjtBQStCRDs7OztFQXZDK0JDLGM7Ozs7Z0JBQWJoQixJLGFBQ0YsSzs7Z0JBREVBLEksdUJBR1E7QUFDekJpQixFQUFBQSxTQUFTLEVBQUU7QUFEYyxDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIFRleHRhcmVhIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSBcIi4vYnV0dG9uL3N1Ym1pdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8U3VibWl0QnV0dG9uIC8+LFxuICAgICAgPFRleHRhcmVhIG9uU2Nyb2xsPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZWxlbWVudC5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQgPSBlbGVtZW50LmdldFNjcm9sbExlZnQoKTtcblxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KVxuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgIC8+LFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmV5XCJcbiAgICAgICAgICAgb25SZXNpemU9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpZHRoLCBoZWlnaHQpXG5cbiAgICAgICAgICAgfX1cbiAgICAgICAgICAgb25Nb3VzZU1vdmU9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgY29uc3QgeyBwYWdlWCwgcGFnZVkgfSA9IGV2ZW50O1xuXG4gICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZVgsIHBhZ2VZKVxuXG4gICAgICAgICAgIH19XG4gICAgICAvPixcblxuICAgIF0pO1xuICB9XG59XG4iXX0=