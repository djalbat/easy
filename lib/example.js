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
  }]);

  return SubmitButton;
}(_index.Button);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsiU3VibWl0QnV0dG9uIiwicHJvcGVydGllcyIsIkJ1dHRvbiIsIkxFRlRfTU9VU0VfQlVUVE9OIiwiY29uc3RhbnRzIiwiTUlERExFX01PVVNFX0JVVFRPTiIsImJvZHkiLCJCb2R5IiwiYnV0dG9uIiwiZXZlbnQiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImRpdiIsInBhZ2VZIiwicGFnZVgiLCJvbiIsIm9uUmVzaXplIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInByZXBlbmQiLCJpc0NoZWNrZWQiLCJwcmV2ZW50RGVmYXVsdCIsImdldEF0dHJpYnV0ZSIsImdldFNlbGVjdGVkT3B0aW9uVmFsdWUiLCJnZXRWYWx1ZSIsImtleUNvZGUiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsImRvY3VtZW50Iiwib25DbGljayIsInNjcmVlblgiLCJzY3JlZW5ZIiwid2luZG93Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsWTs7Ozs7Ozs7Ozs7a0NBQ1VDLFUsRUFBWTtBQUN4QixhQUFPLFFBQVA7QUFDRDs7OztFQUh3QkMsYTs7SUFNbkJDLGlCLEdBQTJDQyxnQixDQUEzQ0QsaUI7SUFBbUJFLG1CLEdBQXdCRCxnQixDQUF4QkMsbUI7SUFDckJDLEksR0FBTyxJQUFJQyxXQUFKLEU7SUFDUEMsTSxHQUVFLG9CQUFDLGFBQUQ7QUFBUSxFQUFBLE9BQU8sRUFBRSxpQkFBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQUEsUUFFbkJGLE1BRm1CLEdBRVJDLEtBRlEsQ0FFbkJELE1BRm1CO0FBSTNCRyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBTSxLQUFLTCxpQkFBdkI7QUFFRDtBQU5ULGM7SUFZRlUsRyxHQUVFO0FBQUssRUFBQSxPQUFPLEVBQUUsaUJBQUNK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R0FBUixDQUFZTSxLQUFaLEVBQW1CRSxNQUFuQjtBQUVELENBTkQiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9qdXh0YXBvc2VcIjsgLy8vXG5cbmltcG9ydCB7IEJvZHksIEJ1dHRvbiwgQ2hlY2tib3gsIExpbmssIFNlbGVjdCwgSW5wdXQsIFRleHRhcmVhLCB3aW5kb3csIGRvY3VtZW50LCBjb25zdGFudHMgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jbGFzcyBTdWJtaXRCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gXCJTdWJtaXRcIjtcbiAgfVxufVxuXG5jb25zdCB7IExFRlRfTU9VU0VfQlVUVE9OLCBNSURETEVfTU9VU0VfQlVUVE9OIH0gPSBjb25zdGFudHMsXG4gICAgICBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGJ1dHRvbiA9XG5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgeyBidXR0b24gfSA9IGV2ZW50O1xuXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhidXR0b24gPT09IExFRlRfTU9VU0VfQlVUVE9OKVxuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEEgYnV0dG9uXG4gICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAsXG4gICAgICBkaXYgPVxuXG4gICAgICAgIDxkaXYgb25DbGljaz17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZVksIHBhZ2VYIH0gPSBldmVudDtcblxuICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZVgsIHBhZ2VZKVxuXG4gICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICBvbk1vdXNlTW92ZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZVksIHBhZ2VYIH0gPSBldmVudDtcblxuICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZVgsIHBhZ2VZKVxuXG4gICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICAgO1xuXG5idXR0b24ub24oXCJhdXhjbGlja1wiLCAoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICBjb25zdCB7IGJ1dHRvbiB9ID0gZXZlbnQ7XG5cbiAgY29uc29sZS5sb2coYnV0dG9uID09PSBNSURETEVfTU9VU0VfQlVUVE9OKTtcblxufSk7XG5cbmRpdi5vblJlc2l6ZSgoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICBjb25zdCB3aWR0aCA9IGVsZW1lbnQuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5nZXRIZWlnaHQoKTtcblxuICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0KVxuXG59KTtcblxuYm9keS5wcmVwZW5kKFxuXG4gIDxhcnRpY2xlPlxuICAgIDxoMT5cbiAgICAgIEVhc3lcbiAgICA8L2gxPlxuICAgIDxiciAvPlxuICAgIDxTdWJtaXRCdXR0b24gLz5cbiAgICA8YnIgLz5cbiAgICB7YnV0dG9ufVxuICAgIDxiciAvPlxuICAgIDxDaGVja2JveCBjaGVja2VkXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuaXNDaGVja2VkKCkpXG5cbiAgICAgICAgICAgICAgfX1cbiAgICAvPlxuICAgIDxiciAvPlxuICAgIDxMaW5rIGhyZWY9XCJodHRwOi8vanV4dGFwb3NlLmluZm9cIlxuICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmdldEF0dHJpYnV0ZShcImhyZWZcIikpXG5cbiAgICAgICAgICB9fVxuICAgID5cbiAgICAgIEEgbGlua1xuICAgIDwvTGluaz5cbiAgICA8YnIgLz5cbiAgICA8U2VsZWN0IG9uQ2hhbmdlPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSlcblxuICAgICAgICAgICAgfX1cbiAgICA+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPm9uZTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj50d288L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+dGhyZWU8L29wdGlvbj5cbiAgICA8L1NlbGVjdD5cbiAgICA8YnIgLz5cbiAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5nZXRWYWx1ZSgpKVxuXG4gICAgICAgICAgIH19XG4gICAgICAgICAgIG9uS2V5VXA9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleUNvZGUpXG5cbiAgICAgICAgICAgfX1cbiAgICAvPlxuICAgIDxiciAvPlxuICAgIDxUZXh0YXJlYSBvbkNoYW5nZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmdldFZhbHVlKCkpXG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlDb2RlKVxuXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uU2Nyb2xsPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGVsZW1lbnQuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KVxuXG4gICAgICAgICAgICAgIH19XG4gICAgLz5cbiAgICB7ZGl2fVxuICA8L2FydGljbGU+XG5cbik7XG5cbmRvY3VtZW50Lm9uQ2xpY2soKGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgY29uc3QgeyBzY3JlZW5YLCBzY3JlZW5ZIH0gPSBldmVudDtcblxuICBjb25zb2xlLmxvZyhzY3JlZW5YLCBzY3JlZW5ZKVxuXG59KTtcblxud2luZG93Lm9uQ2xpY2soKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gd2luZG93LmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHdpbmRvdy5nZXRIZWlnaHQoKTtcblxuICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0KVxuXG59KTtcbiJdfQ==