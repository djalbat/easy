"use strict";

export function onClick(clickHandler, element) { this.on("click", clickHandler, element); }

export function offClick(clickHandler, element) { this.off("click", clickHandler, element); }
