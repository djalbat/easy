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
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _index.Element.fromProperties(SubmitButton, properties);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsiU3VibWl0QnV0dG9uIiwicHJvcGVydGllcyIsIkVsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIkJ1dHRvbiIsIkxFRlRfTU9VU0VfQlVUVE9OIiwiY29uc3RhbnRzIiwiTUlERExFX01PVVNFX0JVVFRPTiIsImJvZHkiLCJCb2R5IiwiYnV0dG9uIiwiZXZlbnQiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImRpdiIsInBhZ2VZIiwicGFnZVgiLCJvbiIsIm9uUmVzaXplIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInByZXBlbmQiLCJpc0NoZWNrZWQiLCJwcmV2ZW50RGVmYXVsdCIsImdldEF0dHJpYnV0ZSIsImdldFNlbGVjdGVkT3B0aW9uVmFsdWUiLCJnZXRWYWx1ZSIsImtleUNvZGUiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsImRvY3VtZW50Iiwib25DbGljayIsInNjcmVlblgiLCJzY3JlZW5ZIiwid2luZG93Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsWTs7Ozs7Ozs7Ozs7a0NBQ1VDLFUsRUFBWTtBQUN4QixhQUFPLFFBQVA7QUFDRDs7O21DQUVxQkEsVSxFQUFZO0FBQUUsYUFBT0MsZUFBUUMsY0FBUixDQUF1QkgsWUFBdkIsRUFBcUNDLFVBQXJDLENBQVA7QUFBMEQ7Ozs7RUFMckVHLGE7O0lBUW5CQyxpQixHQUEyQ0MsZ0IsQ0FBM0NELGlCO0lBQW1CRSxtQixHQUF3QkQsZ0IsQ0FBeEJDLG1CO0lBQ3JCQyxJLEdBQU8sSUFBSUMsV0FBSixFO0lBQ1BDLE0sR0FFRSxvQkFBQyxhQUFEO0FBQVEsRUFBQSxPQUFPLEVBQUUsaUJBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUFBLFFBRW5CRixNQUZtQixHQUVSQyxLQUZRLENBRW5CRCxNQUZtQjtB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Q2pDLE1BQU1RLEtBQUssR0FBR21CLGNBQU9sQixRQUFQLEVBQWQ7QUFBQSxNQUNNQyxNQUFNLEdBQUdpQixjQUFPaEIsU0FBUCxFQURmOztBQUdBVixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU0sS0FBWixFQUFtQkUsTUFBbkI7QUFFRCxDQU5EIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4vanV4dGFwb3NlXCI7IC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50LCBCb2R5LCBCdXR0b24sIENoZWNrYm94LCBMaW5rLCBTZWxlY3QsIElucHV0LCBUZXh0YXJlYSwgd2luZG93LCBkb2N1bWVudCwgY29uc3RhbnRzIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuY2xhc3MgU3VibWl0QnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIFwiU3VibWl0XCI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTdWJtaXRCdXR0b24sIHByb3BlcnRpZXMpOyB9XG59XG5cbmNvbnN0IHsgTEVGVF9NT1VTRV9CVVRUT04sIE1JRERMRV9NT1VTRV9CVVRUT04gfSA9IGNvbnN0YW50cyxcbiAgICAgIGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgYnV0dG9uID1cblxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCB7IGJ1dHRvbiB9ID0gZXZlbnQ7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbiA9PT0gTEVGVF9NT1VTRV9CVVRUT04pXG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQSBidXR0b25cbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICxcbiAgICAgIGRpdiA9XG5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlWSwgcGFnZVggfSA9IGV2ZW50O1xuXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlWCwgcGFnZVkpXG5cbiAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlWSwgcGFnZVggfSA9IGV2ZW50O1xuXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlWCwgcGFnZVkpXG5cbiAgICAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICA7XG5cbmJ1dHRvbi5vbihcImF1eGNsaWNrXCIsIChldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gIGNvbnN0IHsgYnV0dG9uIH0gPSBldmVudDtcblxuICBjb25zb2xlLmxvZyhidXR0b24gPT09IE1JRERMRV9NT1VTRV9CVVRUT04pO1xuXG59KTtcblxuZGl2Lm9uUmVzaXplKChldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gIGNvbnN0IHdpZHRoID0gZWxlbWVudC5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSBlbGVtZW50LmdldEhlaWdodCgpO1xuXG4gIGNvbnNvbGUubG9nKHdpZHRoLCBoZWlnaHQpXG5cbn0pO1xuXG5ib2R5LnByZXBlbmQoXG5cbiAgPGFydGljbGU+XG4gICAgPGgxPlxuICAgICAgRWFzeVxuICAgIDwvaDE+XG4gICAgPGJyIC8+XG4gICAgPFN1Ym1pdEJ1dHRvbiAvPlxuICAgIDxiciAvPlxuICAgIHtidXR0b259XG4gICAgPGJyIC8+XG4gICAgPENoZWNrYm94IGNoZWNrZWRcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5pc0NoZWNrZWQoKSlcblxuICAgICAgICAgICAgICB9fVxuICAgIC8+XG4gICAgPGJyIC8+XG4gICAgPExpbmsgaHJlZj1cImh0dHA6Ly9qdXh0YXBvc2UuaW5mb1wiXG4gICAgICAgICAgb25DbGljaz17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSlcblxuICAgICAgICAgIH19XG4gICAgPlxuICAgICAgQSBsaW5rXG4gICAgPC9MaW5rPlxuICAgIDxiciAvPlxuICAgIDxTZWxlY3Qgb25DaGFuZ2U9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpKVxuXG4gICAgICAgICAgICB9fVxuICAgID5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+b25lPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPnR3bzwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj50aHJlZTwvb3B0aW9uPlxuICAgIDwvU2VsZWN0PlxuICAgIDxiciAvPlxuICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmdldFZhbHVlKCkpXG5cbiAgICAgICAgICAgfX1cbiAgICAgICAgICAgb25LZXlVcD17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgICAgICAgICAgY29uc29sZS5sb2coa2V5Q29kZSlcblxuICAgICAgICAgICB9fVxuICAgIC8+XG4gICAgPGJyIC8+XG4gICAgPFRleHRhcmVhIG9uQ2hhbmdlPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuZ2V0VmFsdWUoKSlcblxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbktleURvd249eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleUNvZGUpXG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25TY3JvbGw9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZWxlbWVudC5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gZWxlbWVudC5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpXG5cbiAgICAgICAgICAgICAgfX1cbiAgICAvPlxuICAgIHtkaXZ9XG4gIDwvYXJ0aWNsZT5cblxuKTtcblxuZG9jdW1lbnQub25DbGljaygoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICBjb25zdCB7IHNjcmVlblgsIHNjcmVlblkgfSA9IGV2ZW50O1xuXG4gIGNvbnNvbGUubG9nKHNjcmVlblgsIHNjcmVlblkpXG5cbn0pO1xuXG53aW5kb3cub25DbGljaygoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgY29uc3Qgd2lkdGggPSB3aW5kb3cuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gd2luZG93LmdldEhlaWdodCgpO1xuXG4gIGNvbnNvbGUubG9nKHdpZHRoLCBoZWlnaHQpXG5cbn0pO1xuIl19