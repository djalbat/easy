"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../index");

var _submit = _interopRequireDefault(require("./button/submit"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var View = React.createElement("div", {
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
var _default = View;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsImV2ZW50IiwiZWxlbWVudCIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0IiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJwYWdlWCIsInBhZ2VZIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBRVI7QUFBSyxFQUFBLFNBQVMsRUFBQztBQUFmLEdBQ0Usb0JBQUMsa0JBQUQsT0FERixFQUVFLG9CQUFDLGVBQUQ7QUFBVSxFQUFBLFFBQVEsRUFBRSxrQkFBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBRXRDLFFBQU1DLFNBQVMsR0FBR0QsT0FBTyxDQUFDRSxZQUFSLEVBQWxCO0FBQUEsUUFDTUMsVUFBVSxHQUFHSCxPQUFPLENBQUNJLGFBQVIsRUFEbkI7QUFHQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLFNBQVosRUFBdUJFLFVBQXZCO0FBRUQ7QUFQRCxFQUZGLEVBV0U7QUFBSyxFQUFBLFNBQVMsRUFBQyxNQUFmO0FBQ0ssRUFBQSxRQUFRLEVBQUUsa0JBQUNKLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUU1QixRQUFNTyxLQUFLLEdBQUcsS0FBSSxDQUFDQyxRQUFMLEVBQWQ7QUFBQSxRQUNNQyxNQUFNLEdBQUcsS0FBSSxDQUFDQyxTQUFMLEVBRGY7O0FBR0FMLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaLEVBQW1CRSxNQUFuQjtBQUVELEdBUk47QUFTSyxFQUFBLFdBQVcsRUFBRSxxQkFBQ1YsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQUEsUUFFdkJXLEtBRnVCLEdBRU5aLEtBRk0sQ0FFdkJZLEtBRnVCO0FBQUEsUUFFaEJDLEtBRmdCLEdBRU5iLEtBRk0sQ0FFaEJhLEtBRmdCO0FBSS9CUCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUssS0FBWixFQUFtQkMsS0FBbkI7QUFFRDtBQWZOLEdBaUJFLHFHQWpCRixDQVhGLENBRkY7ZUFzQ2VkLEkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi9idXR0b24vc3VibWl0XCI7XG5cbmNvbnN0IFZpZXcgPVxuXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlld1wiPlxuICAgIDxTdWJtaXRCdXR0b24gLz5cbiAgICA8VGV4dGFyZWEgb25TY3JvbGw9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSBlbGVtZW50LmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICBjb25zb2xlLmxvZyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpXG5cbiAgICB9fVxuICAgIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmV5XCJcbiAgICAgICAgIG9uUmVzaXplPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgICAgICAgICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0KVxuXG4gICAgICAgICB9fVxuICAgICAgICAgb25Nb3VzZU1vdmU9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBldmVudDtcblxuICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlWCwgcGFnZVkpXG5cbiAgICAgICAgIH19XG4gICAgPlxuICAgICAgPHA+XG4gICAgICAgIEEgcGFyYWdyYXBoIGNvbnRhaW5lZCBpbiBhIGRpdiB3aXRoIHJlc2l6ZSBhbmQgbW91c2UgbW92ZSBoYW5kbGVycy5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgVmlldztcbiJdfQ==