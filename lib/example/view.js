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
      ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInByb3BlcnRpZXMiLCJldmVudCIsImVsZW1lbnQiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwicGFnZVgiLCJwYWdlWSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLFVBQUQ7QUFBQSxTQUVYO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFLG9CQUFDLGtCQUFELE9BREYsRUFFRSxvQkFBQyxlQUFEO0FBQVUsSUFBQSxRQUFRLEVBQUUsa0JBQVNDLEtBQVQsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQUc7QUFFOUMsVUFBTUMsU0FBUyxHQUFHLEtBQUtDLFlBQUwsRUFBbEI7QUFBQSxVQUNNQyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQURuQjtBQUdBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsU0FBWixFQUF1QkUsVUFBdkI7QUFFRDtBQVBELElBRkYsRUFXRTtBQUFLLElBQUEsU0FBUyxFQUFDLE1BQWY7QUFDSyxJQUFBLFFBQVEsRUFBRSxrQkFBQ0osS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBRTVCLFVBQU1PLEtBQUssR0FBR1AsT0FBTyxDQUFDUSxRQUFSLEVBQWQ7QUFBQSxVQUNNQyxNQUFNLEdBQUdULE9BQU8sQ0FBQ1UsU0FBUixFQURmO0FBR0FMLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaLEVBQW1CRSxNQUFuQjtBQUVELEtBUk47QUFTSyxJQUFBLFdBQVcsRUFBRSxxQkFBQ1YsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQUEsVUFFdkJXLEtBRnVCLEdBRU5aLEtBRk0sQ0FFdkJZLEtBRnVCO0FBQUEsVUFFaEJDLEtBRmdCLEdBRU5iLEtBRk0sQ0FFaEJhLEtBRmdCO0FBSS9CUCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUssS0FBWixFQUFtQkMsS0FBbkI7QUFFRDtBQWZOLEtBaUJFLHFHQWpCRixDQVhGLENBRlc7QUFBQSxDQUFiOztlQXNDZWYsSSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gXCIuL2J1dHRvbi9zdWJtaXRcIjtcblxuY29uc3QgVmlldyA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlld1wiPlxuICAgIDxTdWJtaXRCdXR0b24gLz5cbiAgICA8VGV4dGFyZWEgb25TY3JvbGw9e2Z1bmN0aW9uKGV2ZW50LCBlbGVtZW50KSB7ICAvLy9cblxuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICAgICAgY29uc29sZS5sb2coc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KVxuXG4gICAgfX1cbiAgICAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JleVwiXG4gICAgICAgICBvblJlc2l6ZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgY29uc3Qgd2lkdGggPSBlbGVtZW50LmdldFdpZHRoKCksXG4gICAgICAgICAgICAgICAgIGhlaWdodCA9IGVsZW1lbnQuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgICAgY29uc29sZS5sb2cod2lkdGgsIGhlaWdodClcblxuICAgICAgICAgfX1cbiAgICAgICAgIG9uTW91c2VNb3ZlPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICBjb25zdCB7IHBhZ2VYLCBwYWdlWSB9ID0gZXZlbnQ7XG5cbiAgICAgICAgICAgY29uc29sZS5sb2cocGFnZVgsIHBhZ2VZKVxuXG4gICAgICAgICB9fVxuICAgID5cbiAgICAgIDxwPlxuICAgICAgICBBIHBhcmFncmFwaCBjb250YWluZWQgaW4gYSBkaXYgd2l0aCByZXNpemUgYW5kIG1vdXNlIG1vdmUgaGFuZGxlcnMuXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXc7XG4iXX0=