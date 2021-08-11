"use strict";

import { CLICK_EVENT_TYPE } from "../eventTypes";

function onClick(clickHandler, element) { this.on(CLICK_EVENT_TYPE, clickHandler, element); }

function offClick(clickHandler, element) { this.off(CLICK_EVENT_TYPE, clickHandler, element); }

const clickMixins = {
  onClick,
  offClick
};

export default clickMixins;
