"use strict";

import { FULLSCREENCHANGE_EVENT_TYPE } from "../eventTypes";

function onFullScreenChange(fullScreenChangeHandler, element) { this.onEvent(FULLSCREENCHANGE_EVENT_TYPE, fullScreenChangeHandler, element); }  ///

function offFullScreenChange(fullScreenChangeHandler, element) { this.offEvent(FULLSCREENCHANGE_EVENT_TYPE, fullScreenChangeHandler, element); }  ///

function requestFullScreen(errorHandler) {
  const domElement = this.getDOMElement();

  domElement.requestFullscreen()
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

const fullscreenMixins = {
  onFullScreenChange,
  offFullScreenChange,
  requestFullScreen,
  exitFullScreen,
  isFullScreen
};

export default fullscreenMixins;
