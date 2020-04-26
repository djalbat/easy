"use strict";

export function onKeyUp(keyUpHandler) { this.on("keyup", keyUpHandler); }

export function offKeyUp(keyUpHandler) { this.off("keyup", keyUpHandler); }

export function onKeyDown(keyDownHandler) { this.on("keydown", keyDownHandler); }

export function offKeyDown(keyDownHandler) { this.off("keydown", keyDownHandler); }
