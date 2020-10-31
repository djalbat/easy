"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../index");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

///
var LEFT_MOUSE_BUTTON = _index.constants.LEFT_MOUSE_BUTTON;

var View = function View(properties) {
  return React.createElement("div", {
    className: "view"
  }, React.createElement(_index.Checkbox, {
    checked: true,
    onChange: function onChange(event, element) {
      console.log('Changed');
    }
  }), React.createElement(_index.Textarea, {
    onChange: function onChange(event, element) {
      console.log("change");
    },
    onScroll: function onScroll(event, element) {
      ///
      var scrollTop = this.getScrollTop(),
          scrollLeft = this.getScrollLeft();
      console.log(scrollTop, scrollLeft);
    }
  }), React.createElement(_index.Button, {
    onClick: function onClick(event, element) {
      var button = event.button;
      console.log(button === LEFT_MOUSE_BUTTON);
    }
  }, "Submit"), React.createElement(Div, null));
};

var _default = View;
exports["default"] = _default;

var Div = /*#__PURE__*/function (_Element) {
  _inherits(Div, _Element);

  var _super = _createSuper(Div);

  function Div() {
    _classCallCheck(this, Div);

    return _super.apply(this, arguments);
  }

  _createClass(Div, [{
    key: "willMount",
    value: function willMount(done) {
      this.add(React.createElement("p", null, "A paragraph contained in a div with resize and mouse move handlers."));
      done();
    }
  }, {
    key: "didUnmount",
    value: function didUnmount(done) {
      ///
      done();
    }
  }, {
    key: "initialise",
    value: function initialise() {
      var _this = this;

      this.onResize(function (event, element) {
        var width = _this.getWidth(),
            height = _this.getHeight();

        console.log(width, height);
      });
      this.onMouseMove(function (event, element) {
        var pageX = event.pageX,
            pageY = event.pageY;
        console.log(pageX, pageY);
      });
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var div = _index.Element.fromClass(Class, properties);

      div.initialise();
      return div;
    }
  }]);

  return Div;
}(_index.Element);

_defineProperty(Div, "tagName", "div");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiTEVGVF9NT1VTRV9CVVRUT04iLCJjb25zdGFudHMiLCJWaWV3IiwicHJvcGVydGllcyIsImV2ZW50IiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsImJ1dHRvbiIsIkRpdiIsImRvbmUiLCJhZGQiLCJvblJlc2l6ZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJvbk1vdXNlTW92ZSIsInBhZ2VYIiwicGFnZVkiLCJDbGFzcyIsImRpdiIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRFO0lBRXBFQSxpQixHQUFzQkMsZ0IsQ0FBdEJELGlCOztBQUVSLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLFVBQUQ7QUFBQSxTQUVYO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFLG9CQUFDLGVBQUQ7QUFBVSxJQUFBLE9BQU8sTUFBakI7QUFDVSxJQUFBLFFBQVEsRUFBRSxrQkFBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBRTVCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBRUQ7QUFMWCxJQURGLEVBUUUsb0JBQUMsZUFBRDtBQUFVLElBQUEsUUFBUSxFQUFFLGtCQUFDSCxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFFNUJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFFRCxLQUpYO0FBS1UsSUFBQSxRQUFRLEVBQUUsa0JBQVNILEtBQVQsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQUc7QUFFcEMsVUFBTUcsU0FBUyxHQUFHLEtBQUtDLFlBQUwsRUFBbEI7QUFBQSxVQUNNQyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQURuQjtBQUdBTCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FBWixFQUF1QkUsVUFBdkI7QUFFRDtBQVpYLElBUkYsRUFzQkUsb0JBQUMsYUFBRDtBQUFRLElBQUEsT0FBTyxFQUFFLGlCQUFDTixLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFBQSxVQUVuQk8sTUFGbUIsR0FFUlIsS0FGUSxDQUVuQlEsTUFGbUI7QUFJM0JOLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxNQUFNLEtBQUtaLGlCQUF2QjtBQUVEO0FBTlQsY0F0QkYsRUFnQ0Usb0JBQUMsR0FBRCxPQWhDRixDQUZXO0FBQUEsQ0FBYjs7ZUF1Q2VFLEk7OztJQUVUVyxHOzs7Ozs7Ozs7Ozs7OzhCQUNNQyxJLEVBQU07QUFDZCxXQUFLQyxHQUFMLENBRUUscUdBRkY7QUFRQUQsTUFBQUEsSUFBSTtBQUNMOzs7K0JBRVVBLEksRUFBTTtBQUNmO0FBRUFBLE1BQUFBLElBQUk7QUFDTDs7O2lDQUVZO0FBQUE7O0FBQ1gsV0FBS0UsUUFBTCxDQUFjLFVBQUNaLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUVoQyxZQUFNWSxLQUFLLEdBQUcsS0FBSSxDQUFDQyxRQUFMLEVBQWQ7QUFBQSxZQUNNQyxNQUFNLEdBQUcsS0FBSSxDQUFDQyxTQUFMLEVBRGY7O0FBR0FkLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxLQUFaLEVBQW1CRSxNQUFuQjtBQUVELE9BUEQ7QUFTQSxXQUFLRSxXQUFMLENBQWlCLFVBQUNqQixLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFBQSxZQUUzQmlCLEtBRjJCLEdBRVZsQixLQUZVLENBRTNCa0IsS0FGMkI7QUFBQSxZQUVwQkMsS0FGb0IsR0FFVm5CLEtBRlUsQ0FFcEJtQixLQUZvQjtBQUluQ2pCLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZSxLQUFaLEVBQW1CQyxLQUFuQjtBQUVELE9BTkQ7QUFPRDs7OzhCQUlnQkMsSyxFQUFPckIsVSxFQUFZO0FBQ2xDLFVBQU1zQixHQUFHLEdBQUdDLGVBQVFDLFNBQVIsQ0FBa0JILEtBQWxCLEVBQXlCckIsVUFBekIsQ0FBWjs7QUFFQXNCLE1BQUFBLEdBQUcsQ0FBQ0csVUFBSjtBQUVBLGFBQU9ILEdBQVA7QUFDRDs7OztFQTlDZUMsYzs7Z0JBQVpiLEcsYUFzQ2EsSyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0YXJlYSwgQ2hlY2tib3gsIEJ1dHRvbiwgY29uc3RhbnRzLCBFbGVtZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgeyBMRUZUX01PVVNFX0JVVFRPTiB9ID0gY29uc3RhbnRzO1xuXG5jb25zdCBWaWV3ID0gKHByb3BlcnRpZXMpID0+XG5cbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3XCI+XG4gICAgPENoZWNrYm94IGNoZWNrZWRcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NoYW5nZWQnKVxuXG4gICAgICAgICAgICAgIH19XG4gICAgLz5cbiAgICA8VGV4dGFyZWEgb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VcIilcblxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvblNjcm9sbD17ZnVuY3Rpb24oZXZlbnQsIGVsZW1lbnQpIHsgIC8vL1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpXG5cbiAgICAgICAgICAgICAgfX1cbiAgICAvPlxuICAgIDxCdXR0b24gb25DbGljaz17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgY29uc3QgeyBidXR0b24gfSA9IGV2ZW50O1xuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbiA9PT0gTEVGVF9NT1VTRV9CVVRUT04pXG5cbiAgICAgICAgICAgIH19XG4gICAgPlxuICAgICAgU3VibWl0XG4gICAgPC9CdXR0b24+XG4gICAgPERpdiAvPlxuICA8L2Rpdj5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xuXG5jbGFzcyBEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgd2lsbE1vdW50KGRvbmUpIHtcbiAgICB0aGlzLmFkZChcblxuICAgICAgPHA+XG4gICAgICAgIEEgcGFyYWdyYXBoIGNvbnRhaW5lZCBpbiBhIGRpdiB3aXRoIHJlc2l6ZSBhbmQgbW91c2UgbW92ZSBoYW5kbGVycy5cbiAgICAgIDwvcD5cblxuICAgICk7XG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBkaWRVbm1vdW50KGRvbmUpIHtcbiAgICAvLy9cblxuICAgIGRvbmUoKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5vblJlc2l6ZSgoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0KVxuXG4gICAgfSk7XG5cbiAgICB0aGlzLm9uTW91c2VNb3ZlKChldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICBjb25zdCB7IHBhZ2VYLCBwYWdlWSB9ID0gZXZlbnQ7XG5cbiAgICAgIGNvbnNvbGUubG9nKHBhZ2VYLCBwYWdlWSlcblxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBkaXYgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBkaXYuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIGRpdjtcbiAgfVxufVxuIl19