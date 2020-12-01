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
    key: "childElements",
    value: function childElements() {
      return React.createElement("p", null, "A paragraph contained in a div with resize and mouse move handlers.");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiTEVGVF9NT1VTRV9CVVRUT04iLCJjb25zdGFudHMiLCJWaWV3IiwicHJvcGVydGllcyIsImV2ZW50IiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsImJ1dHRvbiIsIkRpdiIsIm9uUmVzaXplIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsIm9uTW91c2VNb3ZlIiwicGFnZVgiLCJwYWdlWSIsIkNsYXNzIiwiZGl2IiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEU7SUFFcEVBLGlCLEdBQXNCQyxnQixDQUF0QkQsaUI7O0FBRVIsSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsVUFBRDtBQUFBLFNBRVg7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0Usb0JBQUMsZUFBRDtBQUFVLElBQUEsT0FBTyxNQUFqQjtBQUNVLElBQUEsUUFBUSxFQUFFLGtCQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFFNUJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFFRDtBQUxYLElBREYsRUFRRSxvQkFBQyxlQUFEO0FBQVUsSUFBQSxRQUFRLEVBQUUsa0JBQUNILEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUU1QkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUVELEtBSlg7QUFLVSxJQUFBLFFBQVEsRUFBRSxrQkFBU0gsS0FBVCxFQUFnQkMsT0FBaEIsRUFBeUI7QUFBRztBQUVwQyxVQUFNRyxTQUFTLEdBQUcsS0FBS0MsWUFBTCxFQUFsQjtBQUFBLFVBQ01DLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBRG5CO0FBR0FMLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQUFaLEVBQXVCRSxVQUF2QjtBQUVEO0FBWlgsSUFSRixFQXNCRSxvQkFBQyxhQUFEO0FBQVEsSUFBQSxPQUFPLEVBQUUsaUJBQUNOLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUFBLFVBRW5CTyxNQUZtQixHQUVSUixLQUZRLENBRW5CUSxNQUZtQjtBQUkzQk4sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlLLE1BQU0sS0FBS1osaUJBQXZCO0FBRUQ7QUFOVCxjQXRCRixFQWdDRSxvQkFBQyxHQUFELE9BaENGLENBRlc7QUFBQSxDQUFiOztlQXVDZUUsSTs7O0lBRVRXLEc7Ozs7Ozs7Ozs7Ozs7b0NBQ1k7QUFDZCxhQUVFLHFHQUZGO0FBT0Q7OztpQ0FFWTtBQUFBOztBQUNYLFdBQUtDLFFBQUwsQ0FBYyxVQUFDVixLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFFaEMsWUFBTVUsS0FBSyxHQUFHLEtBQUksQ0FBQ0MsUUFBTCxFQUFkO0FBQUEsWUFDTUMsTUFBTSxHQUFHLEtBQUksQ0FBQ0MsU0FBTCxFQURmOztBQUdBWixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVEsS0FBWixFQUFtQkUsTUFBbkI7QUFFRCxPQVBEO0FBU0EsV0FBS0UsV0FBTCxDQUFpQixVQUFDZixLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFBQSxZQUUzQmUsS0FGMkIsR0FFVmhCLEtBRlUsQ0FFM0JnQixLQUYyQjtBQUFBLFlBRXBCQyxLQUZvQixHQUVWakIsS0FGVSxDQUVwQmlCLEtBRm9CO0FBSW5DZixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWEsS0FBWixFQUFtQkMsS0FBbkI7QUFFRCxPQU5EO0FBT0Q7Ozs4QkFJZ0JDLEssRUFBT25CLFUsRUFBWTtBQUNsQyxVQUFNb0IsR0FBRyxHQUFHQyxlQUFRQyxTQUFSLENBQWtCSCxLQUFsQixFQUF5Qm5CLFVBQXpCLENBQVo7O0FBRUFvQixNQUFBQSxHQUFHLENBQUNHLFVBQUo7QUFFQSxhQUFPSCxHQUFQO0FBQ0Q7Ozs7RUF0Q2VDLGM7O2dCQUFaWCxHLGFBOEJhLEsiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dGFyZWEsIENoZWNrYm94LCBCdXR0b24sIGNvbnN0YW50cywgRWxlbWVudCB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IHsgTEVGVF9NT1VTRV9CVVRUT04gfSA9IGNvbnN0YW50cztcblxuY29uc3QgVmlldyA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlld1wiPlxuICAgIDxDaGVja2JveCBjaGVja2VkXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VkJylcblxuICAgICAgICAgICAgICB9fVxuICAgIC8+XG4gICAgPFRleHRhcmVhIG9uQ2hhbmdlPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlXCIpXG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25TY3JvbGw9e2Z1bmN0aW9uKGV2ZW50LCBlbGVtZW50KSB7ICAvLy9cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KVxuXG4gICAgICAgICAgICAgIH19XG4gICAgLz5cbiAgICA8QnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgIGNvbnN0IHsgYnV0dG9uIH0gPSBldmVudDtcblxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhidXR0b24gPT09IExFRlRfTU9VU0VfQlVUVE9OKVxuXG4gICAgICAgICAgICB9fVxuICAgID5cbiAgICAgIFN1Ym1pdFxuICAgIDwvQnV0dG9uPlxuICAgIDxEaXYgLz5cbiAgPC9kaXY+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgVmlldztcblxuY2xhc3MgRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPHA+XG4gICAgICAgIEEgcGFyYWdyYXBoIGNvbnRhaW5lZCBpbiBhIGRpdiB3aXRoIHJlc2l6ZSBhbmQgbW91c2UgbW92ZSBoYW5kbGVycy5cbiAgICAgIDwvcD5cblxuICAgICk7XG4gIH1cbiAgICBcbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLm9uUmVzaXplKChldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKHdpZHRoLCBoZWlnaHQpXG5cbiAgICB9KTtcblxuICAgIHRoaXMub25Nb3VzZU1vdmUoKGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBldmVudDtcblxuICAgICAgY29uc29sZS5sb2cocGFnZVgsIHBhZ2VZKVxuXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGRpdiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIGRpdi5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gZGl2O1xuICB9XG59XG4iXX0=