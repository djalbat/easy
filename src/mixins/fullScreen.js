"use strict";

import { ESCAPE } from "../constants";
import { FULLSCREENCHANGE_EVENT_TYPE } from "../eventTypes";

function onFullScreenChange(fullScreenChangeHandler, element) { this.onEvent(FULLSCREENCHANGE_EVENT_TYPE, fullScreenChangeHandler, element); }  ///

function offFullScreenChange(fullScreenChangeHandler, element) { this.offEvent(FULLSCREENCHANGE_EVENT_TYPE, fullScreenChangeHandler, element); }  ///

function requestFullScreen(errorHandler) {
  const domElement = this.getDOMElement();

  domElement.requestFullscreen()
    .then(this.lockEscapeKey)
    .catch(errorHandler);
}

function exitFullScreen() {
  document.exitFullscreen();
}

function isFullScreen() {
  const { fullscreenElement } = document,
        fullScreen = (fullscreenElement !== null);

  return fullScreen;
}

function lockEscapeKey() {
  const { keyboard = null } = navigator;

  if (keyboard != null) {
    return keyboard.lock([ESCAPE]);
  }

  return Promise.resolve();
}

function unlockEscapeKey() {
  const { keyboard = null } = navigator;

  if (keyboard != null) {
    keyboard.unlock();
  }
}

const fullscreenMixins = {
  onFullScreenChange,
  offFullScreenChange,
  requestFullScreen,
  exitFullScreen,
  isFullScreen,
  lockEscapeKey,
  unlockEscapeKey
};

export default fullscreenMixins;
