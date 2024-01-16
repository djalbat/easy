"use strict";

import { CLICK_EVENT_TYPE, DBLCLICK_EVENT_TYPE } from "../eventTypes";

function onClick(clickHandler, element) { this.onEvent(CLICK_EVENT_TYPE, clickHandler, element); }

function offClick(clickHandler, element) { this.offEvent(CLICK_EVENT_TYPE, clickHandler, element); }

function onDoubleClick(clickHandler, element) { this.onEvent(DBLCLICK_EVENT_TYPE, clickHandler, element); }

function offDoubleClick(clickHandler, element) { this.offEvent(DBLCLICK_EVENT_TYPE, clickHandler, element); }

const clickMixins = {
  onClick,
  offClick,
  onDoubleClick,
  offDoubleClick
};

export default clickMixins;
