"use strict";

export function onKeyUp(keyUpHandler, element) { this.on("keyup", keyUpHandler, element); }

export function offKeyUp(keyUpHandler, element) { this.off("keyup", keyUpHandler, element); }

export function onKeyDown(keyDownHandler, element) { this.on("keydown", keyDownHandler, element); }

export function offKeyDown(keyDownHandler, element) { this.off("keydown", keyDownHandler, element); }
