"use strict";

function onClick(clickHandler, element) { this.on("click", clickHandler, element); }

function offClick(clickHandler, element) { this.off("click", clickHandler, element); }

export default {
  onClick,
  offClick
};
