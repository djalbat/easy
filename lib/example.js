"use strict";

require("./juxtapose");

var _index = require("./index");

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

var SubmitButton = /*#__PURE__*/function (_Button) {
  _inherits(SubmitButton, _Button);

  function SubmitButton() {
    _classCallCheck(this, SubmitButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(SubmitButton).apply(this, arguments));
  }

  _createClass(SubmitButton, [{
    key: "childElements",
    value: function childElements(properties) {
      return "Submit";
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _index.Element.fromProperties(SubmitButton, properties);
    }
  }]);

  return SubmitButton;
}(_index.Button);

_defineProperty(SubmitButton, "className", "submit");

var LEFT_MOUSE_BUTTON = _index.constants.LEFT_MOUSE_BUTTON,
    MIDDLE_MOUSE_BUTTON = _index.constants.MIDDLE_MOUSE_BUTTON,
    body = new _index.Body(),
    button = React.createElement(_index.Button, {
  onClick: function onClick(event, element) {
    var button = event.button;
    console.log(button === LEFT_MOUSE_BUTTON);
  }
}, "A button"),
    div = React.createElement("div", {
  onClick: function onClick(event, element) {
    var pageY = event.pageY,
        pageX = event.pageX;
    console.log(pageX, pageY);
  },
  onMouseMove: function onMouseMove(event, element) {
    var pageY = event.pageY,
        pageX = event.pageX;
    console.log(pageX, pageY);
  }
});
button.on("auxclick", function (event, element) {
  var button = event.button;
  console.log(button === MIDDLE_MOUSE_BUTTON);
});
div.onResize(function (event, element) {
  var width = element.getWidth(),
      height = element.getHeight();
  console.log(width, height);
});
body.prepend(React.createElement("article", null, React.createElement("h1", null, "Easy"), React.createElement("br", null), React.createElement(SubmitButton, null), React.createElement("br", null), button, React.createElement("br", null), React.createElement(_index.Checkbox, {
  checked: true,
  onChange: function onChange(event, element) {
    console.log(element.isChecked());
  }
}), React.createElement("br", null), React.createElement(_index.Link, {
  href: "http://juxtapose.info",
  onClick: function onClick(event, element) {
    event.preventDefault();
    console.log(element.getAttribute("href"));
  }
}, "A link"), React.createElement("br", null), React.createElement(_index.Select, {
  onChange: function onChange(event, element) {
    console.log(element.getSelectedOptionValue());
  }
}, React.createElement("option", {
  value: "1"
}, "one"), React.createElement("option", {
  value: "2"
}, "two"), React.createElement("option", {
  value: "3"
}, "three")), React.createElement("br", null), React.createElement(_index.Input, {
  type: "password",
  onChange: function onChange(event, element) {
    console.log(element.getValue());
  },
  onKeyUp: function onKeyUp(event, element) {
    var keyCode = event.keyCode;
    console.log(keyCode);
  }
}), React.createElement("br", null), React.createElement(_index.Textarea, {
  onChange: function onChange(event, element) {
    console.log(element.getValue());
  },
  onKeyDown: function onKeyDown(event, element) {
    var keyCode = event.keyCode;
    console.log(keyCode);
  },
  onScroll: function onScroll(event, element) {
    var scrollTop = element.getScrollTop(),
        scrollLeft = element.getScrollLeft();
    console.log(scrollTop, scrollLeft);
  }
}), div));

_index.document.onClick(function (event, element) {
  var screenX = event.screenX,
      screenY = event.screenY;
  console.log(screenX, screenY);
});

_index.window.onClick(function (event, element) {
  var width = _index.window.getWidth(),
      height = _index.window.getHeight();

  console.log(width, height);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsiU3VibWl0QnV0dG9uIiwicHJvcGVydGllcyIsIkVsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIkJ1dHRvbiIsIkxFRlRfTU9VU0VfQlVUVE9OIiwiY29uc3RhbnRzIiwiTUlERExFX01PVVNFX0JVVFRPTiIsImJvZHkiLCJCb2R5IiwiYnV0dG9uIiwiZXZlbnQiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImRpdiIsInBhZ2VZIiwicGFnZVgiLCJvbiIsIm9uUmVzaXplIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInByZXBlbmQiLCJpc0NoZWNrZWQiLCJwcmV2ZW50RGVmYXVsdCIsImdldEF0dHJpYnV0ZSIsImdldFNlbGVjdGVkT3B0aW9uVmFsdWUiLCJnZXRWYWx1ZSIsImtleUNvZGUiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsImRvY3VtZW50Iiwib25DbGljayIsInNjcmVlblgiLCJzY3JlZW5ZIiwid2luZG93Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxZOzs7Ozs7Ozs7OztrQ0FDVUMsVSxFQUFZO0FBQ3hCLGFBQU8sUUFBUDtBQUNEOzs7bUNBSXFCQSxVLEVBQVk7QUFBRSxhQUFPQyxlQUFRQyxjQUFSLENBQXVCSCxZQUF2QixFQUFxQ0MsVUFBckMsQ0FBUDtBQUEwRDs7OztFQVByRUcsYTs7Z0JBQXJCSixZLGVBS2UsUTs7SUFLYkssaUIsR0FBMkNDLGdCLENBQTNDRCxpQjtJQUFtQkUsbUIsR0FBd0JELGdCLENBQXhCQyxtQjtJQUNyQkMsSSxHQUFPLElBQUlDLFdBQUosRTtJQUNQQyxNLEdBRUUsb0JBQUMsYUFBRDtBQUFRLEVBQUEsT0FBTyxFQUFFLGlCQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFBQSxRQUVuQkYsTUFGbUIsR0FFUkMs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RUFBUUMsT0FBUixFQUFvQjtBQUNqQyxNQUFNUSxLQUFLLEdBQUdtQixjQUFPbEIsUUFBUCxFQUFkO0FBQUEsTUFDTUMsTUFBTSxHQUFHaUIsY0FBT2hCLFNBQVAsRUFEZjs7QUFHQVYsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlNLEtBQVosRUFBbUJFLE1BQW5CO0FBRUQsQ0FORCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL2p1eHRhcG9zZVwiOyAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCwgQm9keSwgQnV0dG9uLCBDaGVja2JveCwgTGluaywgU2VsZWN0LCBJbnB1dCwgVGV4dGFyZWEsIHdpbmRvdywgZG9jdW1lbnQsIGNvbnN0YW50cyB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNsYXNzIFN1Ym1pdEJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIHJldHVybiBcIlN1Ym1pdFwiO1xuICB9XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwic3VibWl0XCI7XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU3VibWl0QnV0dG9uLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5jb25zdCB7IExFRlRfTU9VU0VfQlVUVE9OLCBNSURETEVfTU9VU0VfQlVUVE9OIH0gPSBjb25zdGFudHMsXG4gICAgICBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGJ1dHRvbiA9XG5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgeyBidXR0b24gfSA9IGV2ZW50O1xuXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhidXR0b24gPT09IExFRlRfTU9VU0VfQlVUVE9OKVxuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEEgYnV0dG9uXG4gICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAsXG4gICAgICBkaXYgPVxuXG4gICAgICAgIDxkaXYgb25DbGljaz17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZVksIHBhZ2VYIH0gPSBldmVudDtcblxuICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZVgsIHBhZ2VZKVxuXG4gICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICBvbk1vdXNlTW92ZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZVksIHBhZ2VYIH0gPSBldmVudDtcblxuICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZVgsIHBhZ2VZKVxuXG4gICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICAgO1xuXG5idXR0b24ub24oXCJhdXhjbGlja1wiLCAoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICBjb25zdCB7IGJ1dHRvbiB9ID0gZXZlbnQ7XG5cbiAgY29uc29sZS5sb2coYnV0dG9uID09PSBNSURETEVfTU9VU0VfQlVUVE9OKTtcblxufSk7XG5cbmRpdi5vblJlc2l6ZSgoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICBjb25zdCB3aWR0aCA9IGVsZW1lbnQuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5nZXRIZWlnaHQoKTtcblxuICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0KVxuXG59KTtcblxuYm9keS5wcmVwZW5kKFxuXG4gIDxhcnRpY2xlPlxuICAgIDxoMT5cbiAgICAgIEVhc3lcbiAgICA8L2gxPlxuICAgIDxiciAvPlxuICAgIDxTdWJtaXRCdXR0b24gLz5cbiAgICA8YnIgLz5cbiAgICB7YnV0dG9ufVxuICAgIDxiciAvPlxuICAgIDxDaGVja2JveCBjaGVja2VkXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuaXNDaGVja2VkKCkpXG5cbiAgICAgICAgICAgICAgfX1cbiAgICAvPlxuICAgIDxiciAvPlxuICAgIDxMaW5rIGhyZWY9XCJodHRwOi8vanV4dGFwb3NlLmluZm9cIlxuICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmdldEF0dHJpYnV0ZShcImhyZWZcIikpXG5cbiAgICAgICAgICB9fVxuICAgID5cbiAgICAgIEEgbGlua1xuICAgIDwvTGluaz5cbiAgICA8YnIgLz5cbiAgICA8U2VsZWN0IG9uQ2hhbmdlPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSlcblxuICAgICAgICAgICAgfX1cbiAgICA+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPm9uZTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj50d288L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+dGhyZWU8L29wdGlvbj5cbiAgICA8L1NlbGVjdD5cbiAgICA8YnIgLz5cbiAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5nZXRWYWx1ZSgpKVxuXG4gICAgICAgICAgIH19XG4gICAgICAgICAgIG9uS2V5VXA9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleUNvZGUpXG5cbiAgICAgICAgICAgfX1cbiAgICAvPlxuICAgIDxiciAvPlxuICAgIDxUZXh0YXJlYSBvbkNoYW5nZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmdldFZhbHVlKCkpXG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlDb2RlKVxuXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uU2Nyb2xsPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGVsZW1lbnQuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KVxuXG4gICAgICAgICAgICAgIH19XG4gICAgLz5cbiAgICB7ZGl2fVxuICA8L2FydGljbGU+XG5cbik7XG5cbmRvY3VtZW50Lm9uQ2xpY2soKGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgY29uc3QgeyBzY3JlZW5YLCBzY3JlZW5ZIH0gPSBldmVudDtcblxuICBjb25zb2xlLmxvZyhzY3JlZW5YLCBzY3JlZW5ZKVxuXG59KTtcblxud2luZG93Lm9uQ2xpY2soKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gd2luZG93LmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHdpbmRvdy5nZXRIZWlnaHQoKTtcblxuICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0KVxuXG59KTtcbiJdfQ==