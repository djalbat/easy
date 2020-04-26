"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Element = require("../element");

var Checkbox = /*#__PURE__*/function (_Element) {
  _inherits(Checkbox, _Element);

  function Checkbox(selector, changeHandler, checked) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    if (checked !== undefined) {
      _this.check(checked);
    }

    return _this;
  }

  _createClass(Checkbox, [{
    key: "clone",
    value: function clone(changeHandler) {
      return Checkbox.clone(this, changeHandler);
    }
  }, {
    key: "onChange",
    value: function onChange(changeHandler, object) {
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler;
      this.on("click", changeHandler, object, intermediateChangeHandler); ///
    }
  }, {
    key: "offChange",
    value: function offChange(changeHandler, object) {
      this.off("click", changeHandler, object); ///
    }
  }, {
    key: "check",
    value: function check() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var domElement = this.getDOMElement();
      domElement.checked = checked;
    }
  }, {
    key: "isChecked",
    value: function isChecked() {
      var domElement = this.getDOMElement(),
          checked = domElement.checked;
      return checked;
    }
  }, {
    key: "onResize",
    value: function onResize() {}
  }, {
    key: "offResize",
    value: function offResize() {}
  }], [{
    key: "clone",
    value: function clone(element, changeHandler) {
      return Element.clone(Checkbox, element, changeHandler);
    }
  }, {
    key: "fromHTML",
    value: function fromHTML(html, changeHandler) {
      return Element.fromHTML(Checkbox, html, changeHandler);
    }
  }, {
    key: "fromDOMElement",
    value: function fromDOMElement(domElement, changeHandler) {
      return Element.fromDOMElement(Checkbox, domElement, changeHandler);
    }
  }, {
    key: "fromProperties",
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          checked = properties.checked,
          changeHandler = onChange,
          checkbox = Element.fromProperties(Checkbox, properties, changeHandler, checked);
      return checkbox;
    }
  }]);

  return Checkbox;
}(Element);

Object.assign(Checkbox, {
  tagName: "input",
  ignoredProperties: ["onChange", "checked"],
  defaultProperties: {
    type: "checkbox"
  }
});
module.exports = Checkbox;

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  var checkbox = element,
      ///
  checked = checkbox.isChecked();
  changeHandler.call(element, checked, event, element);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiQ2hlY2tib3giLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJjaGVja2VkIiwidW5kZWZpbmVkIiwib25DaGFuZ2UiLCJjaGVjayIsImNsb25lIiwib2JqZWN0IiwiaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwib24iLCJvZmYiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJmcm9tRE9NRWxlbWVudCIsInByb3BlcnRpZXMiLCJjaGVja2JveCIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ0eXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwiaXNDaGVja2VkIiwiY2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUF2Qjs7SUFFTUMsUTs7O0FBQ0osb0JBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDQyxPQUFyQyxFQUE4QztBQUFBOztBQUFBOztBQUM1QyxrRkFBTUYsUUFBTjs7QUFFQSxRQUFJQyxhQUFhLEtBQUtFLFNBQXRCLEVBQWlDO0FBQy9CLFlBQUtDLFFBQUwsQ0FBY0gsYUFBZDtBQUNEOztBQUVELFFBQUlDLE9BQU8sS0FBS0MsU0FBaEIsRUFBMkI7QUFDekIsWUFBS0UsS0FBTCxDQUFXSCxPQUFYO0FBQ0Q7O0FBVDJDO0FBVTdDOzs7OzBCQUVLRCxhLEVBQWU7QUFBRSxhQUFPRixRQUFRLENBQUNPLEtBQVQsQ0FBZSxJQUFmLEVBQXFCTCxhQUFyQixDQUFQO0FBQTZDOzs7NkJBRTNEQSxhLEVBQWVNLE0sRUFBc0U7QUFBQSxVQUE5REMseUJBQThELHVFQUFsQ0MsZ0NBQWtDO0FBQzVGLFdBQUtDLEVBQUwsQ0FBUSxPQUFSLEVBQWlCVCxhQUFqQixFQUFnQ00sTUFBaEMsRUFBd0NDLHlCQUF4QyxFQUQ0RixDQUN2QjtBQUN0RTs7OzhCQUVTUCxhLEVBQWVNLE0sRUFBUTtBQUMvQixXQUFLSSxHQUFMLENBQVMsT0FBVCxFQUFrQlYsYUFBbEIsRUFBaUNNLE1BQWpDLEVBRCtCLENBQ1k7QUFDNUM7Ozs0QkFFcUI7QUFBQSxVQUFoQkwsT0FBZ0IsdUVBQU4sSUFBTTtBQUNwQixVQUFNVSxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUVBRCxNQUFBQSxVQUFVLENBQUNWLE9BQVgsR0FBcUJBLE9BQXJCO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1VLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDSVgsT0FBTyxHQUFHVSxVQUFVLENBQUNWLE9BRHpCO0FBR0EsYUFBT0EsT0FBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7O2dDQUVELENBQUU7OzswQkFFRFksTyxFQUFTYixhLEVBQWU7QUFBRSxhQUFPSixPQUFPLENBQUNTLEtBQVIsQ0FBY1AsUUFBZCxFQUF3QmUsT0FBeEIsRUFBaUNiLGFBQWpDLENBQVA7QUFBeUQ7Ozs2QkFFaEZjLEksRUFBTWQsYSxFQUFlO0FBQUUsYUFBT0osT0FBTyxDQUFDbUIsUUFBUixDQUFpQmpCLFFBQWpCLEVBQTJCZ0IsSUFBM0IsRUFBaUNkLGFBQWpDLENBQVA7QUFBeUQ7OzttQ0FFMUVXLFUsRUFBWVgsYSxFQUFlO0FBQUUsYUFBT0osT0FBTyxDQUFDb0IsY0FBUixDQUF1QmxCLFFBQXZCLEVBQWlDYSxVQUFqQyxFQUE2Q1gsYUFBN0MsQ0FBUDtBQUFxRTs7O21DQUVsR2lCLFUsRUFBWTtBQUFBLFVBQ3hCZCxRQUR3QixHQUNGYyxVQURFLENBQ3hCZCxRQUR3QjtBQUFBLFVBQ2RGLE9BRGMsR0FDRmdCLFVBREUsQ0FDZGhCLE9BRGM7QUFBQSxVQUUxQkQsYUFGMEIsR0FFVkcsUUFGVTtBQUFBLFVBRzFCZSxRQUgwQixHQUdmdEIsT0FBTyxDQUFDdUIsY0FBUixDQUF1QnJCLFFBQXZCLEVBQWlDbUIsVUFBakMsRUFBNkNqQixhQUE3QyxFQUE0REMsT0FBNUQsQ0FIZTtBQUtoQyxhQUFPaUIsUUFBUDtBQUNEOzs7O0VBcERvQnRCLE87O0FBdUR2QndCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjdkIsUUFBZCxFQUF3QjtBQUN0QndCLEVBQUFBLE9BQU8sRUFBRSxPQURhO0FBRXRCQyxFQUFBQSxpQkFBaUIsRUFBRSxDQUNqQixVQURpQixFQUVqQixTQUZpQixDQUZHO0FBTXRCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsSUFBSSxFQUFFO0FBRFc7QUFORyxDQUF4QjtBQVdBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI3QixRQUFqQjs7QUFFQSxTQUFTVSxnQ0FBVCxDQUEwQ1IsYUFBMUMsRUFBeUQ0QixLQUF6RCxFQUFnRWYsT0FBaEUsRUFBeUU7QUFDdkUsTUFBTUssUUFBUSxHQUFHTCxPQUFqQjtBQUFBLE1BQTBCO0FBQ3BCWixFQUFBQSxPQUFPLEdBQUdpQixRQUFRLENBQUNXLFNBQVQsRUFEaEI7QUFHQTdCLEVBQUFBLGFBQWEsQ0FBQzhCLElBQWQsQ0FBbUJqQixPQUFuQixFQUE0QlosT0FBNUIsRUFBcUMyQixLQUFyQyxFQUE0Q2YsT0FBNUM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZShcIi4uL2VsZW1lbnRcIik7XG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGNoZWNrZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jaGVjayhjaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBDaGVja2JveC5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbihcImNsaWNrXCIsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7ICAvLy9cbiAgfVxuICBcbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG9iamVjdCkge1xuICAgIHRoaXMub2ZmKFwiY2xpY2tcIiwgY2hhbmdlSGFuZGxlciwgb2JqZWN0KTsgIC8vL1xuICB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBkb21FbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkO1xuICB9XG5cbiAgaXNDaGVja2VkKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgY2hlY2tlZCA9IGRvbUVsZW1lbnQuY2hlY2tlZDtcblxuICAgIHJldHVybiBjaGVja2VkO1xuICB9XG5cbiAgb25SZXNpemUoKSB7fVxuXG4gIG9mZlJlc2l6ZSgpIHt9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQ2hlY2tib3gsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQ2hlY2tib3gsIGh0bWwsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQ2hlY2tib3gsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBjaGVja2VkIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vICAgIFxuICAgICAgICAgIGNoZWNrYm94ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDaGVja2JveCwgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCk7XG4gICAgXG4gICAgcmV0dXJuIGNoZWNrYm94O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2hlY2tib3gsIHtcbiAgdGFnTmFtZTogXCJpbnB1dFwiLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgIFwib25DaGFuZ2VcIixcbiAgICBcImNoZWNrZWRcIlxuICBdLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIHR5cGU6IFwiY2hlY2tib3hcIlxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGVja2JveDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoY2hhbmdlSGFuZGxlciwgZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgY2hlY2tib3ggPSBlbGVtZW50LCAvLy9cbiAgICAgICAgY2hlY2tlZCA9IGNoZWNrYm94LmlzQ2hlY2tlZCgpO1xuICBcbiAgY2hhbmdlSGFuZGxlci5jYWxsKGVsZW1lbnQsIGNoZWNrZWQsIGV2ZW50LCBlbGVtZW50KTtcbn1cbiJdfQ==