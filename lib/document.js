'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var keyMixins = require('./mixins/key'),
    eventMixins = require('./mixins/event'),
    clickMixins = require('./mixins/click'),
    mouseMixins = require('./mixins/mouse');

var Document = function Document() {
  _classCallCheck(this, Document);

  this.domElement = document; ///
};

Object.assign(Document.prototype, keyMixins);
Object.assign(Document.prototype, eventMixins);
Object.assign(Document.prototype, clickMixins);
Object.assign(Document.prototype, mouseMixins);

module.exports = (typeof document === 'undefined' ? 'undefined' : _typeof(document)) && new Document(); ///
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJrZXlNaXhpbnMiLCJyZXF1aXJlIiwiZXZlbnRNaXhpbnMiLCJjbGlja01peGlucyIsIm1vdXNlTWl4aW5zIiwiRG9jdW1lbnQiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxnQkFBUixDQURwQjtBQUFBLElBRU1FLGNBQWNGLFFBQVEsZ0JBQVIsQ0FGcEI7QUFBQSxJQUdNRyxjQUFjSCxRQUFRLGdCQUFSLENBSHBCOztJQUtNSSxRLEdBQ0osb0JBQWM7QUFBQTs7QUFDWixPQUFLQyxVQUFMLEdBQWtCQyxRQUFsQixDQURZLENBQ2dCO0FBQzdCLEM7O0FBR0hDLE9BQU9DLE1BQVAsQ0FBY0osU0FBU0ssU0FBdkIsRUFBa0NWLFNBQWxDO0FBQ0FRLE9BQU9DLE1BQVAsQ0FBY0osU0FBU0ssU0FBdkIsRUFBa0NSLFdBQWxDO0FBQ0FNLE9BQU9DLE1BQVAsQ0FBY0osU0FBU0ssU0FBdkIsRUFBa0NQLFdBQWxDO0FBQ0FLLE9BQU9DLE1BQVAsQ0FBY0osU0FBU0ssU0FBdkIsRUFBa0NOLFdBQWxDOztBQUVBTyxPQUFPQyxPQUFQLEdBQWlCLFFBQU9MLFFBQVAseUNBQU9BLFFBQVAsTUFBbUIsSUFBSUYsUUFBSixFQUFwQyxDLENBQXFEIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBrZXlNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9rZXknKSxcbiAgICAgIGV2ZW50TWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMvZXZlbnQnKSxcbiAgICAgIGNsaWNrTWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMvY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW5zID0gcmVxdWlyZSgnLi9taXhpbnMvbW91c2UnKTtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudDsgLy8vXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIGRvY3VtZW50ICYmIG5ldyBEb2N1bWVudCgpOyAgLy8vXG4iXX0=