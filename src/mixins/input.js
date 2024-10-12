"use strict";

import { INPUT_EVENT_TYPE, CHANGE_EVENT_TYPE } from "../eventTypes";

function onInput(inputHandler, element) { this.onEvent(INPUT_EVENT_TYPE, inputHandler, element); }

function offInput(inputHandler, element) { this.offEvent(INPUT_EVENT_TYPE, inputHandler, element); }

function onChange(changeHandler, element) { this.onEvent(CHANGE_EVENT_TYPE, changeHandler, element); }

function offChange(changeHandler, element) { this.offEvent(CHANGE_EVENT_TYPE, changeHandler, element); }

function getValue() { return this.domElement.value; }

function setValue(value) { this.domElement.value = value; }

function isReadOnly() { return this.domElement.readOnly; }

function setReadOnly(readOnly) { this.domElement.readOnly = readOnly; }

const inputMixins = {
  onInput,
  offInput,
  onChange,
  offChange,
  getValue,
  setValue,
  isReadOnly,
  setReadOnly
};

export default inputMixins;
