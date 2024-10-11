"use strict";

import { BLUR_EVENT_TYPE, FOCUS_EVENT_TYPE } from "../eventTypes";

function onBlur(blurHandler, element) { this.onEvent(BLUR_EVENT_TYPE, blurHandler, element); }

function offBlur(blurHandler, element) { this.offEvent(BLUR_EVENT_TYPE, blurHandler, element); }

function onFocus(focusHandler, element) { this.onEvent(FOCUS_EVENT_TYPE, focusHandler, element); }

function offFocus(focusHandler, element) { this.offEvent(FOCUS_EVENT_TYPE, focusHandler, element); }

const inputMixins = {
  onBlur,
  offBlur,
  onFocus,
  offFocus
};

export default inputMixins;
