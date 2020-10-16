"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("../element"));

var _change = _interopRequireDefault(require("../mixins/change"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Checkbox = /*#__PURE__*/function (_Element) {
  _inherits(Checkbox, _Element);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _super.apply(this, arguments);
  }

  _createClass(Checkbox, [{
    key: "isChecked",
    value: function isChecked() {
      return this.domElement.checked;
    }
  }, {
    key: "check",
    value: function check() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.domElement.checked = checked;
    }
  }]);

  return Checkbox;
}(_element["default"]);

_defineProperty(Checkbox, "tagName", "input");

_defineProperty(Checkbox, "defaultProperties", {
  type: "checkbox"
});

Object.assign(Checkbox.prototype, _change["default"]);
var _default = Checkbox;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94IiwiZG9tRWxlbWVudCIsImNoZWNrZWQiLCJFbGVtZW50IiwidHlwZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNoYW5nZU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFE7Ozs7Ozs7Ozs7Ozs7Z0NBQ1E7QUFBRSxhQUFPLEtBQUtDLFVBQUwsQ0FBZ0JDLE9BQXZCO0FBQWlDOzs7NEJBRXpCO0FBQUEsVUFBaEJBLE9BQWdCLHVFQUFOLElBQU07QUFBRSxXQUFLRCxVQUFMLENBQWdCQyxPQUFoQixHQUEwQkEsT0FBMUI7QUFBb0M7Ozs7RUFIdkNDLG1COztnQkFBakJILFEsYUFLYSxPOztnQkFMYkEsUSx1QkFPdUI7QUFDekJJLEVBQUFBLElBQUksRUFBRTtBQURtQixDOztBQUs3QkMsTUFBTSxDQUFDQyxNQUFQLENBQWNOLFFBQVEsQ0FBQ08sU0FBdkIsRUFBa0NDLGtCQUFsQztlQUVlUixRIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgY2hhbmdlTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvY2hhbmdlXCI7XG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgRWxlbWVudCB7XG4gIGlzQ2hlY2tlZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jaGVja2VkOyB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHsgdGhpcy5kb21FbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkOyB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHR5cGU6IFwiY2hlY2tib3hcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKENoZWNrYm94LnByb3RvdHlwZSwgY2hhbmdlTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XG4iXX0=