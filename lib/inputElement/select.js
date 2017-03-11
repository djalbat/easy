'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Select = function (_InputElement) {
  _inherits(Select, _InputElement);

  function Select(selector, changeHandler) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Select, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Select.clone(this, changeHandler);
    }
  }, {
    key: 'getSelectedOptionValue',
    value: function getSelectedOptionValue() {
      return this.domElement.value;
    } ///

  }, {
    key: 'setSelectedOptionByValue',
    value: function setSelectedOptionByValue(value) {
      this.domElement.value = value;
    } ///

  }, {
    key: 'onChange',
    value: function onChange(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = function (handler, event) {
          var selectedOptionValue = this.getSelectedOptionValue(),
              preventDefault = handler(selectedOptionValue);

          return preventDefault;
        }.bind(this);
      }

      this.on('change', handler);
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('change', handler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return InputElement.clone(Select, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Select, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Select, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var html = '<select></select>';
      var onChange = properties.onChange;
      var changeHandler = onChange; ///

      return Select.fromHTML(html, changeHandler);
    }
  }]);

  return Select;
}(InputElement);

module.exports = Select;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9pbnB1dEVsZW1lbnQvc2VsZWN0LmpzIl0sIm5hbWVzIjpbIklucHV0RWxlbWVudCIsInJlcXVpcmUiLCJTZWxlY3QiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJvbkNoYW5nZSIsImNsb25lIiwiZG9tRWxlbWVudCIsInZhbHVlIiwiaGFuZGxlciIsImludGVybWVkaWF0ZUhhbmRsZXIiLCJ1bmRlZmluZWQiLCJldmVudCIsInNlbGVjdGVkT3B0aW9uVmFsdWUiLCJnZXRTZWxlY3RlZE9wdGlvblZhbHVlIiwicHJldmVudERlZmF1bHQiLCJiaW5kIiwib24iLCJvZmYiLCJlbGVtZW50IiwiaHRtbCIsImZyb21IVE1MIiwiZnJvbURPTUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGlCQUFSLENBQXJCOztJQUVNQyxNOzs7QUFDSixrQkFBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUM7QUFBQTs7QUFBQSxnSEFDN0JELFFBRDZCOztBQUduQyxRQUFJQyxhQUFKLEVBQW1CO0FBQ2pCLFlBQUtDLFFBQUwsQ0FBY0QsYUFBZDtBQUNEO0FBTGtDO0FBTXBDOzs7OzBCQUVLQSxhLEVBQWU7QUFBRSxhQUFPRixPQUFPSSxLQUFQLENBQWEsSUFBYixFQUFtQkYsYUFBbkIsQ0FBUDtBQUEyQzs7OzZDQUV6QztBQUFFLGFBQU8sS0FBS0csVUFBTCxDQUFnQkMsS0FBdkI7QUFBK0IsSyxDQUFDOzs7OzZDQUVsQ0EsSyxFQUFPO0FBQUUsV0FBS0QsVUFBTCxDQUFnQkMsS0FBaEIsR0FBd0JBLEtBQXhCO0FBQWdDLEssQ0FBQzs7Ozs2QkFFMURDLE8sRUFBUztBQUNoQixVQUFJQSxRQUFRQyxtQkFBUixLQUFnQ0MsU0FBcEMsRUFBK0M7QUFDN0NGLGdCQUFRQyxtQkFBUixHQUE4QixVQUFTRCxPQUFULEVBQWtCRyxLQUFsQixFQUF5QjtBQUNyRCxjQUFNQyxzQkFBc0IsS0FBS0Msc0JBQUwsRUFBNUI7QUFBQSxjQUNNQyxpQkFBaUJOLFFBQVFJLG1CQUFSLENBRHZCOztBQUdBLGlCQUFPRSxjQUFQO0FBQ0QsU0FMNkIsQ0FLNUJDLElBTDRCLENBS3ZCLElBTHVCLENBQTlCO0FBTUQ7O0FBRUQsV0FBS0MsRUFBTCxDQUFRLFFBQVIsRUFBa0JSLE9BQWxCO0FBQ0Q7Ozs4QkFFU0EsTyxFQUFTO0FBQ2pCLFdBQUtTLEdBQUwsQ0FBUyxRQUFULEVBQW1CVCxPQUFuQjtBQUNEOzs7MEJBRVlVLE8sRUFBU2YsYSxFQUFlO0FBQ25DLGFBQU9KLGFBQWFNLEtBQWIsQ0FBbUJKLE1BQW5CLEVBQTJCaUIsT0FBM0IsRUFBb0NmLGFBQXBDLENBQVA7QUFDRDs7OzZCQUVlZ0IsSSxFQUFNaEIsYSxFQUFlO0FBQ25DLGFBQU9KLGFBQWFxQixRQUFiLENBQXNCbkIsTUFBdEIsRUFBOEJrQixJQUE5QixFQUFvQ2hCLGFBQXBDLENBQVA7QUFDRDs7O21DQUVxQkcsVSxFQUFZSCxhLEVBQWU7QUFDL0MsYUFBT0osYUFBYXNCLGNBQWIsQ0FBNEJwQixNQUE1QixFQUFvQ0ssVUFBcEMsRUFBZ0RILGFBQWhELENBQVA7QUFDRDs7O21DQUVxQm1CLFUsRUFBWTtBQUMxQixpQkFBTyxtQkFBUDtBQUNBLFVBQUVsQixRQUFGLEdBQWVrQixVQUFmLENBQUVsQixRQUFGO0FBQ0EsMEJBQWdCQSxRQUFoQixDQUgwQixDQUdBOztBQUVoQyxhQUFPSCxPQUFPbUIsUUFBUCxDQUFnQkQsSUFBaEIsRUFBc0JoQixhQUF0QixDQUFQO0FBQ0Q7Ozs7RUFsRGtCSixZOztBQXFEckJ3QixPQUFPQyxPQUFQLEdBQWlCdkIsTUFBakIiLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBTZWxlY3QuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBnZXRTZWxlY3RlZE9wdGlvblZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9IC8vL1xuXG4gIHNldFNlbGVjdGVkT3B0aW9uQnlWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfSAvLy9cblxuICBvbkNoYW5nZShoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBmdW5jdGlvbihoYW5kbGVyLCBldmVudCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvblZhbHVlID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvblZhbHVlKCksXG4gICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcihzZWxlY3RlZE9wdGlvblZhbHVlKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH1cbiAgICBcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgfVxuICBcbiAgb2ZmQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2hhbmdlJywgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoU2VsZWN0LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChTZWxlY3QsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KFNlbGVjdCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGh0bWwgPSAnPHNlbGVjdD48L3NlbGVjdD4nLFxuICAgICAgICAgIHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy9cblxuICAgIHJldHVybiBTZWxlY3QuZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3Q7XG4iXX0=