"use strict";

function onChange(changeHandler, element) { this.on("change", changeHandler, element); }

function offChange(changeHandler, element) { this.off("change", changeHandler, element); }

const changeMixins = {
  onChange,
  offChange
};

export default changeMixins;
