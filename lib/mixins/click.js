"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _eventTypes = require("../eventTypes");
function onClick(clickHandler, element) {
    this.on(_eventTypes.CLICK_EVENT_TYPE, clickHandler, element);
}
function offClick(clickHandler, element) {
    this.off(_eventTypes.CLICK_EVENT_TYPE, clickHandler, element);
}
var clickMixins = {
    onClick: onClick,
    offClick: offClick
};
var _default = clickMixins;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY2xpY2suanMiXSwibmFtZXMiOlsiQ0xJQ0tfRVZFTlRfVFlQRSIsIm9uQ2xpY2siLCJjbGlja0hhbmRsZXIiLCJlbGVtZW50Iiwib24iLCJvZmZDbGljayIsIm9mZiIsImNsaWNrTWl4aW5zIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVxQixHQUFlLENBQWYsV0FBZTtTQUV2QyxPQUFPLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FGaEIsV0FBZSxtQkFFb0IsWUFBWSxFQUFFLE9BQU87QUFBRyxDQUFDO1NBRXBGLFFBQVEsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFBQyxJQUFJLENBQUMsR0FBRyxDQUpsQixXQUFlLG1CQUlzQixZQUFZLEVBQUUsT0FBTztBQUFHLENBQUM7QUFFL0YsR0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDO0lBQ25CLE9BQU8sRUFBUCxPQUFPO0lBQ1AsUUFBUSxFQUFSLFFBQVE7QUFDVixDQUFDO2VBRWMsV0FBVyJ9