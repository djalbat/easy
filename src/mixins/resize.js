"use strict";

import { RESIZE_EVENT_TYPE } from "../eventTypes";

export function onResize(resizeHandler, element) { this.onEvent(RESIZE_EVENT_TYPE, resizeHandler, element); }

export function offResize(resizeHandler, element) { this.offEvent(RESIZE_EVENT_TYPE, resizeHandler, element); }

const resizeMixins = {
  onResize,
  offResize
};

export default resizeMixins;
