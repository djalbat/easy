"use strict";

import { RESIZE_EVENT_TYPE } from "../eventTypes";

function onResize(resizeHandler, element) { this.onEvent(RESIZE_EVENT_TYPE, resizeHandler, element); }

function offResize(resizeHandler, element) { this.offEvent(RESIZE_EVENT_TYPE, resizeHandler, element); }

const resizeMixins = {
  onResize,
  offResize
};

export default resizeMixins;
