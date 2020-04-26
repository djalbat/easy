"use strict";

export function onClick(clickHandler) { this.on("click", clickHandler); }

export function offClick(clickHandler) { this.off("click", clickHandler); }
