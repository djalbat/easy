'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mixin = require('./mixin'),
    event = require('./mixin/event'),
    click = require('./mixin/click'),
    mouse = require('./mixin/mouse');

var Document = function Document() {
  _classCallCheck(this, Document);

  this.domElement = document;

  // mixin(event, this, Document);
  // mixin(click, this, Document);
  // mixin(mouse, this, Document);
};

module.exports = new Document(); ///
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJtaXhpbiIsInJlcXVpcmUiLCJldmVudCIsImNsaWNrIiwibW91c2UiLCJEb2N1bWVudCIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNQyxRQUFRRCxRQUFRLGVBQVIsQ0FEZDtBQUFBLElBRU1FLFFBQVFGLFFBQVEsZUFBUixDQUZkO0FBQUEsSUFHTUcsUUFBUUgsUUFBUSxlQUFSLENBSGQ7O0lBS01JLFEsR0FDSixvQkFBYztBQUFBOztBQUNaLE9BQUtDLFVBQUwsR0FBa0JDLFFBQWxCOztBQUVBO0FBQ0E7QUFDQTtBQUNELEM7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUIsSUFBSUosUUFBSixFQUFqQixDLENBQWtDIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4nKSxcbiAgICAgIGV2ZW50ID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2sgPSByZXF1aXJlKCcuL21peGluL2NsaWNrJyksXG4gICAgICBtb3VzZSA9IHJlcXVpcmUoJy4vbWl4aW4vbW91c2UnKTtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudDtcbiAgICBcbiAgICAvLyBtaXhpbihldmVudCwgdGhpcywgRG9jdW1lbnQpO1xuICAgIC8vIG1peGluKGNsaWNrLCB0aGlzLCBEb2N1bWVudCk7XG4gICAgLy8gbWl4aW4obW91c2UsIHRoaXMsIERvY3VtZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBEb2N1bWVudCgpOyAgLy8vXG4iXX0=