"use strict";

function onClick(clickHandler, element) { this.on("click", clickHandler, element); }

function offClick(clickHandler, element) { this.off("click", clickHandler, element); }

const clickMixins = {
  onClick,
  offClick
};

export default clickMixins;
