"use strict";

import { CHANGE_EVENT_TYPE } from "../eventTypes";

function onChange(changeHandler, element) { this.on(CHANGE_EVENT_TYPE, changeHandler, element); }

function offChange(changeHandler, element) { this.off(CHANGE_EVENT_TYPE, changeHandler, element); }

const changeMixins = {
  onChange,
  offChange
};

export default changeMixins;
