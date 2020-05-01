"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../index");

var _submit = _interopRequireDefault(require("./button/submit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var View = function View(properties) {
  return React.createElement("div", {
    className: "view"
  }, React.createElement(_submit["default"], null), React.createElement(_index.Textarea, {
    onScroll: function onScroll(event, element) {
      var scrollTop = this.getScrollTop(),
          scrollLeft = this.getScrollLeft();
      console.log(scrollTop, scrollLeft);
    }
  }), React.createElement("div", {
    className: "grey",
    onResize: function onResize(event, element) {
      var width = element.getWidth(),
          height = element.getHeight();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInByb3BlcnRpZXMiLCJldmVudCIsImVsZW1lbnQiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwicGFnZVgiLCJwYWdlWSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLFVBQUQ7QUFBQSxTQUVYO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFLG9CQUFDLGtCQUFELE9BREYsRUFFRSxvQkFBQyxlQUFEO0FBQVUsSUFBQSxRQUFRLEVBQUUsa0JBQVNDLEtBQVQsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBRTNDLFVBQU1DLFNBQVMsR0FBRyxLQUFLQyxZQUFMLEVBQWxCO0FBQUEsVUFDTUMsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFEbkI7QUFHQUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLFNBQVosRUFBdUJFLFVBQXZCO0FBRUQ7QUFQRCxJQUZGLEVBV0U7QUFBSyxJQUFBLFNBQVMsRUFBQyxNQUFmO0FBQ0ssSUFBQSxRQUFRLEVBQUUsa0JBQUNKLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUU1QixVQUFNTyxLQUFLLEdBQUdQLE9BQU8sQ0FBQ1EsUUFBUixFQUFkO0FBQUEsVUFDTUMsTUFBTSxHQUFHVCxPQUFPLENBQUNVLFNBQVIsRUFEZjtBQUdBTCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWixFQUFtQkUsTUFBbkI7QUFFRCxLQVJOO0FBU0ssSUFBQSxXQUFXLEVBQUUscUJBQUNWLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUFBLFVBRXZCVyxLQUZ1QixHQUVOWixLQUZNLENBRXZCWSxLQUZ1QjtBQUFBLFVBRWhCQyxLQUZnQixHQUVOYixLQUZNLENBRWhCYSxLQUZnQjtBQUkvQlAsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlLLEtBQVosRUFBbUJDLEtBQW5CO0FBRUQ7QUFmTixLQWlCRSxxR0FqQkYsQ0FYRixDQUZXO0FBQUEsQ0FBYjs7ZUFzQ2VmLEkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi9idXR0b24vc3VibWl0XCI7XG5cbmNvbnN0IFZpZXcgPSAocHJvcGVydGllcykgPT5cblxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdcIj5cbiAgICA8U3VibWl0QnV0dG9uIC8+XG4gICAgPFRleHRhcmVhIG9uU2Nyb2xsPXtmdW5jdGlvbihldmVudCwgZWxlbWVudCkge1xuXG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICBjb25zb2xlLmxvZyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpXG5cbiAgICB9fVxuICAgIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmV5XCJcbiAgICAgICAgIG9uUmVzaXplPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICBjb25zdCB3aWR0aCA9IGVsZW1lbnQuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5nZXRIZWlnaHQoKTtcblxuICAgICAgICAgICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0KVxuXG4gICAgICAgICB9fVxuICAgICAgICAgb25Nb3VzZU1vdmU9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBldmVudDtcblxuICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlWCwgcGFnZVkpXG5cbiAgICAgICAgIH19XG4gICAgPlxuICAgICAgPHA+XG4gICAgICAgIEEgcGFyYWdyYXBoIGNvbnRhaW5lZCBpbiBhIGRpdiB3aXRoIHJlc2l6ZSBhbmQgbW91c2UgbW92ZSBoYW5kbGVycy5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgVmlldztcbiJdfQ==