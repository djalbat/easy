"use strict";

import { CLICK } from "../constants";

function onClick(clickHandler, element) { this.on(CLICK, clickHandler, element); }

function offClick(clickHandler, element) { this.off(CLICK, clickHandler, element); }

const clickMixins = {
  onClick,
  offClick
};

export default clickMixins;
