"use strict";

import { CHANGE } from "../constants";

function onChange(changeHandler, element) { this.on(CHANGE, changeHandler, element); }

function offChange(changeHandler, element) { this.off(CHANGE, changeHandler, element); }

const changeMixins = {
  onChange,
  offChange
};

export default changeMixins;
