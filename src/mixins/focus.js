"use strict";

import { BLUR_EVENT_TYPE, FOCUS_EVENT_TYPE } from "../eventTypes";

function onBlur(blurHandler, element) { this.onEvent(BLUR_EVENT_TYPE, blurHandler, element); }

function offBlur(blurHandler, element) { this.offEvent(BLUR_EVENT_TYPE, blurHandler, element); }

function onFocus(focusHandler, element) { this.onEvent(FOCUS_EVENT_TYPE, focusHandler, element); }

function offFocus(focusHandler, element) { this.offEvent(FOCUS_EVENT_TYPE, focusHandler, element); }

function blur() { this.domElement.blur(); }

function focus() { this.domElement.focus(); }

function hasFocus() {
  const focus = (document.activeElement === this.domElement);  ///

  return focus;
}

const focusMixins = {
  onBlur,
  offBlur,
  onFocus,
  offFocus,
  blur,
  focus,
  hasFocus
};

export default focusMixins;
