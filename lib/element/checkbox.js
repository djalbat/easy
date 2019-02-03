'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Checkbox = function (_Element) {
  _inherits(Checkbox, _Element);

  function Checkbox(selector, changeHandler, checked) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    if (checked !== undefined) {
      _this.check(checked);
    }
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Checkbox.clone(this, changeHandler);
    }
  }, {
    key: 'onChange',
    value: function onChange(changeHandler, object) {
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler;

      this.on('click', changeHandler, object, intermediateChangeHandler); ///
    }
  }, {
    key: 'offChange',
    value: function offChange(changeHandler, object) {
      this.off('click', changeHandler, object); ///
    }
  }, {
    key: 'check',
    value: function check() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var domElement = this.getDOMElement();

      domElement.checked = checked;
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      var domElement = this.getDOMElement(),
          checked = domElement.checked;

      return checked;
    }
  }, {
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'offResize',
    value: function offResize() {}
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return Element.clone(Checkbox, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return Element.fromHTML(Checkbox, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return Element.fromDOMElement(Checkbox, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
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
  tagName: 'input',
  ignoredProperties: ['onChange', 'checked'],
  defaultProperties: {
    type: 'checkbox'
  }
});

module.exports = Checkbox;

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  var checkbox = element,
      ///
  checked = checkbox.isChecked();

  changeHandler.call(element, checked, event, element);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiQ2hlY2tib3giLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJjaGVja2VkIiwidW5kZWZpbmVkIiwib25DaGFuZ2UiLCJjaGVjayIsImNsb25lIiwib2JqZWN0IiwiaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsImRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyIiwib24iLCJvZmYiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImVsZW1lbnQiLCJodG1sIiwiZnJvbUhUTUwiLCJmcm9tRE9NRWxlbWVudCIsInByb3BlcnRpZXMiLCJjaGVja2JveCIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ0eXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwiaXNDaGVja2VkIiwiY2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQ0MsT0FBckMsRUFBOEM7QUFBQTs7QUFBQSxvSEFDdENGLFFBRHNDOztBQUc1QyxRQUFJQyxrQkFBa0JFLFNBQXRCLEVBQWlDO0FBQy9CLFlBQUtDLFFBQUwsQ0FBY0gsYUFBZDtBQUNEOztBQUVELFFBQUlDLFlBQVlDLFNBQWhCLEVBQTJCO0FBQ3pCLFlBQUtFLEtBQUwsQ0FBV0gsT0FBWDtBQUNEO0FBVDJDO0FBVTdDOzs7OzBCQUVLRCxhLEVBQWU7QUFBRSxhQUFPRixTQUFTTyxLQUFULENBQWUsSUFBZixFQUFxQkwsYUFBckIsQ0FBUDtBQUE2Qzs7OzZCQUUzREEsYSxFQUFlTSxNLEVBQXNFO0FBQUEsVUFBOURDLHlCQUE4RCx1RUFBbENDLGdDQUFrQzs7QUFDNUYsV0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUJULGFBQWpCLEVBQWdDTSxNQUFoQyxFQUF3Q0MseUJBQXhDLEVBRDRGLENBQ3ZCO0FBQ3RFOzs7OEJBRVNQLGEsRUFBZU0sTSxFQUFRO0FBQy9CLFdBQUtJLEdBQUwsQ0FBUyxPQUFULEVBQWtCVixhQUFsQixFQUFpQ00sTUFBakMsRUFEK0IsQ0FDWTtBQUM1Qzs7OzRCQUVxQjtBQUFBLFVBQWhCTCxPQUFnQix1RUFBTixJQUFNOztBQUNwQixVQUFNVSxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7O0FBRUFELGlCQUFXVixPQUFYLEdBQXFCQSxPQUFyQjtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNVSxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNJWCxVQUFVVSxXQUFXVixPQUR6Qjs7QUFHQSxhQUFPQSxPQUFQO0FBQ0Q7OzsrQkFFVSxDQUFFOzs7Z0NBRUQsQ0FBRTs7OzBCQUVEWSxPLEVBQVNiLGEsRUFBZTtBQUFFLGFBQU9KLFFBQVFTLEtBQVIsQ0FBY1AsUUFBZCxFQUF3QmUsT0FBeEIsRUFBaUNiLGFBQWpDLENBQVA7QUFBeUQ7Ozs2QkFFaEZjLEksRUFBTWQsYSxFQUFlO0FBQUUsYUFBT0osUUFBUW1CLFFBQVIsQ0FBaUJqQixRQUFqQixFQUEyQmdCLElBQTNCLEVBQWlDZCxhQUFqQyxDQUFQO0FBQXlEOzs7bUNBRTFFVyxVLEVBQVlYLGEsRUFBZTtBQUFFLGFBQU9KLFFBQVFvQixjQUFSLENBQXVCbEIsUUFBdkIsRUFBaUNhLFVBQWpDLEVBQTZDWCxhQUE3QyxDQUFQO0FBQXFFOzs7bUNBRWxHaUIsVSxFQUFZO0FBQUEsVUFDeEJkLFFBRHdCLEdBQ0ZjLFVBREUsQ0FDeEJkLFFBRHdCO0FBQUEsVUFDZEYsT0FEYyxHQUNGZ0IsVUFERSxDQUNkaEIsT0FEYztBQUFBLFVBRTFCRCxhQUYwQixHQUVWRyxRQUZVO0FBQUEsVUFHMUJlLFFBSDBCLEdBR2Z0QixRQUFRdUIsY0FBUixDQUF1QnJCLFFBQXZCLEVBQWlDbUIsVUFBakMsRUFBNkNqQixhQUE3QyxFQUE0REMsT0FBNUQsQ0FIZTs7O0FBS2hDLGFBQU9pQixRQUFQO0FBQ0Q7Ozs7RUFwRG9CdEIsTzs7QUF1RHZCd0IsT0FBT0MsTUFBUCxDQUFjdkIsUUFBZCxFQUF3QjtBQUN0QndCLFdBQVMsT0FEYTtBQUV0QkMscUJBQW1CLENBQ2pCLFVBRGlCLEVBRWpCLFNBRmlCLENBRkc7QUFNdEJDLHFCQUFtQjtBQUNqQkMsVUFBTTtBQURXO0FBTkcsQ0FBeEI7O0FBV0FDLE9BQU9DLE9BQVAsR0FBaUI3QixRQUFqQjs7QUFFQSxTQUFTVSxnQ0FBVCxDQUEwQ1IsYUFBMUMsRUFBeUQ0QixLQUF6RCxFQUFnRWYsT0FBaEUsRUFBeUU7QUFDdkUsTUFBTUssV0FBV0wsT0FBakI7QUFBQSxNQUEwQjtBQUNwQlosWUFBVWlCLFNBQVNXLFNBQVQsRUFEaEI7O0FBR0E3QixnQkFBYzhCLElBQWQsQ0FBbUJqQixPQUFuQixFQUE0QlosT0FBNUIsRUFBcUMyQixLQUFyQyxFQUE0Q2YsT0FBNUM7QUFDRCIsImZpbGUiOiJjaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2hlY2tlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNoZWNrKGNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIENoZWNrYm94LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjbGljaycsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7ICAvLy9cbiAgfVxuICBcbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG9iamVjdCkge1xuICAgIHRoaXMub2ZmKCdjbGljaycsIGNoYW5nZUhhbmRsZXIsIG9iamVjdCk7ICAvLy9cbiAgfVxuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgZG9tRWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDtcbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgIGNoZWNrZWQgPSBkb21FbGVtZW50LmNoZWNrZWQ7XG5cbiAgICByZXR1cm4gY2hlY2tlZDtcbiAgfVxuXG4gIG9uUmVzaXplKCkge31cblxuICBvZmZSZXNpemUoKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmNsb25lKENoZWNrYm94LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21IVE1MKENoZWNrYm94LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KENoZWNrYm94LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgY2hlY2tlZCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vLyAgICBcbiAgICAgICAgICBjaGVja2JveCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2hlY2tib3gsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpO1xuICAgIFxuICAgIHJldHVybiBjaGVja2JveDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENoZWNrYm94LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJyxcbiAgICAnY2hlY2tlZCdcbiAgXSxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiAnY2hlY2tib3gnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoZWNrYm94O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IGVsZW1lbnQsIC8vL1xuICAgICAgICBjaGVja2VkID0gY2hlY2tib3guaXNDaGVja2VkKCk7XG4gIFxuICBjaGFuZ2VIYW5kbGVyLmNhbGwoZWxlbWVudCwgY2hlY2tlZCwgZXZlbnQsIGVsZW1lbnQpO1xufVxuIl19