"use strict";

import { CLICK_EVENT_TYPE, DBLCLICK_EVENT_TYPE, AUXCLICK_EVENT_TYPE } from "../eventTypes";

function onClick(clickHandler, element) { this.onEvent(CLICK_EVENT_TYPE, clickHandler, element); }

function offClick(clickHandler, element) { this.offEvent(CLICK_EVENT_TYPE, clickHandler, element); }

function onAuxClick(auxClickHandler, element) { this.onEvent(AUXCLICK_EVENT_TYPE, auxClickHandler, element); }

function offAuxClick(auxClickHandler, element) { this.offEvent(AUXCLICK_EVENT_TYPE, auxClickHandler, element); }

function onDoubleClick(doubleClickHandler, element) { this.onEvent(DBLCLICK_EVENT_TYPE, doubleClickHandler, element); } ///

function offDoubleClick(doubleClickHandler, element) { this.offEvent(DBLCLICK_EVENT_TYPE, doubleClickHandler, element); } ///

const clickMixins = {
  onClick,
  offClick,
  onAuxClick,
  offAuxClick,
  onDoubleClick,
  offDoubleClick
};

export default clickMixins;
