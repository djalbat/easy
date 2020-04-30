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
      }, React.createElement("p", null, "A paragraph contained in a div with resize and mouse move handlers."))];
    }
  }]);

  return View;
}(_index.Element);

exports["default"] = View;

_defineProperty(View, "tagName", "div");

_defineProperty(View, "defaultProperties", {
  className: "view"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInByb3BlcnRpZXMiLCJldmVudCIsImVsZW1lbnQiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwicGFnZVgiLCJwYWdlWSIsIkVsZW1lbnQiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7a0NBT0xDLFUsRUFBWTtBQUFBOztBQUN4QixhQUFRLENBRU4sb0JBQUMsa0JBQUQsT0FGTSxFQUdOLG9CQUFDLGVBQUQ7QUFBVSxRQUFBLFFBQVEsRUFBRSxrQkFBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBRTVCLGNBQU1DLFNBQVMsR0FBR0QsT0FBTyxDQUFDRSxZQUFSLEVBQWxCO0FBQUEsY0FDTUMsVUFBVSxHQUFHSCxPQUFPLENBQUNJLGFBQVIsRUFEbkI7QUFHQUMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLFNBQVosRUFBdUJFLFVBQXZCO0FBRUQ7QUFQWCxRQUhNLEVBWU47QUFBSyxRQUFBLFNBQVMsRUFBQyxNQUFmO0FBQ0ssUUFBQSxRQUFRLEVBQUUsa0JBQUNKLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUU1QixjQUFNTyxLQUFLLEdBQUcsS0FBSSxDQUFDQyxRQUFMLEVBQWQ7QUFBQSxjQUNNQyxNQUFNLEdBQUcsS0FBSSxDQUFDQyxTQUFMLEVBRGY7O0FBR0FMLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaLEVBQW1CRSxNQUFuQjtBQUVELFNBUk47QUFTSyxRQUFBLFdBQVcsRUFBRSxxQkFBQ1YsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQUEsY0FFdkJXLEtBRnVCLEdBRU5aLEtBRk0sQ0FFdkJZLEtBRnVCO0FBQUEsY0FFaEJDLEtBRmdCLEdBRU5iLEtBRk0sQ0FFaEJhLEtBRmdCO0FBSS9CUCxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUssS0FBWixFQUFtQkMsS0FBbkI7QUFFRDtBQWZOLFNBaUJFLHFHQWpCRixDQVpNLENBQVI7QUFtQ0Q7Ozs7RUEzQytCQyxjOzs7O2dCQUFiaEIsSSxhQUNGLEs7O2dCQURFQSxJLHVCQUdRO0FBQ3pCaUIsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBUZXh0YXJlYSB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gXCIuL2J1dHRvbi9zdWJtaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPFN1Ym1pdEJ1dHRvbiAvPixcbiAgICAgIDxUZXh0YXJlYSBvblNjcm9sbD17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGVsZW1lbnQuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gZWxlbWVudC5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdClcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAvPixcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JleVwiXG4gICAgICAgICAgIG9uUmVzaXplPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0KVxuXG4gICAgICAgICAgIH19XG4gICAgICAgICAgIG9uTW91c2VNb3ZlPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBldmVudDtcblxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhZ2VYLCBwYWdlWSlcblxuICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBIHBhcmFncmFwaCBjb250YWluZWQgaW4gYSBkaXYgd2l0aCByZXNpemUgYW5kIG1vdXNlIG1vdmUgaGFuZGxlcnMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PixcblxuICAgIF0pO1xuICB9XG59XG4iXX0=