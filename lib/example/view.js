"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../index");

var _submit = _interopRequireDefault(require("./button/submit"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var View = function View(properties) {
  return React.createElement("div", {
    className: "view"
  }, React.createElement(_submit["default"], null), React.createElement(_index.Textarea, {
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
  }, React.createElement("p", null, "A paragraph contained in a div with resize and mouse move handlers.")));
};

var _default = View;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInByb3BlcnRpZXMiLCJldmVudCIsImVsZW1lbnQiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwicGFnZVgiLCJwYWdlWSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsVUFBRDtBQUFBLFNBRVg7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0Usb0JBQUMsa0JBQUQsT0FERixFQUVFLG9CQUFDLGVBQUQ7QUFBVSxJQUFBLFFBQVEsRUFBRSxrQkFBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBRXRDLFVBQU1DLFNBQVMsR0FBR0QsT0FBTyxDQUFDRSxZQUFSLEVBQWxCO0FBQUEsVUFDTUMsVUFBVSxHQUFHSCxPQUFPLENBQUNJLGFBQVIsRUFEbkI7QUFHQUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLFNBQVosRUFBdUJFLFVBQXZCO0FBRUQ7QUFQRCxJQUZGLEVBV0U7QUFBSyxJQUFBLFNBQVMsRUFBQyxNQUFmO0FBQ0ssSUFBQSxRQUFRLEVBQUUsa0JBQUNKLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUU1QixVQUFNTyxLQUFLLEdBQUcsS0FBSSxDQUFDQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxNQUFNLEdBQUcsS0FBSSxDQUFDQyxTQUFMLEVBRGY7O0FBR0FMLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaLEVBQW1CRSxNQUFuQjtBQUVELEtBUk47QUFTSyxJQUFBLFdBQVcsRUFBRSxxQkFBQ1YsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQUEsVUFFdkJXLEtBRnVCLEdBRU5aLEtBRk0sQ0FFdkJZLEtBRnVCO0FBQUEsVUFFaEJDLEtBRmdCLEdBRU5iLEtBRk0sQ0FFaEJhLEtBRmdCO0FBSS9CUCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUssS0FBWixFQUFtQkMsS0FBbkI7QUFFRDtBQWZOLEtBaUJFLHFHQWpCRixDQVhGLENBRlc7QUFBQSxDQUFiOztlQXNDZWYsSSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gXCIuL2J1dHRvbi9zdWJtaXRcIjtcblxuY29uc3QgVmlldyA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlld1wiPlxuICAgIDxTdWJtaXRCdXR0b24gLz5cbiAgICA8VGV4dGFyZWEgb25TY3JvbGw9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSBlbGVtZW50LmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICBjb25zb2xlLmxvZyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpXG5cbiAgICB9fVxuICAgIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmV5XCJcbiAgICAgICAgIG9uUmVzaXplPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgICAgICAgICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0KVxuXG4gICAgICAgICB9fVxuICAgICAgICAgb25Nb3VzZU1vdmU9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBldmVudDtcblxuICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlWCwgcGFnZVkpXG5cbiAgICAgICAgIH19XG4gICAgPlxuICAgICAgPHA+XG4gICAgICAgIEEgcGFyYWdyYXBoIGNvbnRhaW5lZCBpbiBhIGRpdiB3aXRoIHJlc2l6ZSBhbmQgbW91c2UgbW92ZSBoYW5kbGVycy5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgVmlldztcbiJdfQ==