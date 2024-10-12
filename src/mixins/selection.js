"use strict";

import { CUT_EVENT_TYPE, COPY_EVENT_TYPE, PASTE_EVENT_TYPE } from "../eventTypes";

function onCut(cutHandler, element) { this.onEvent(CUT_EVENT_TYPE, cutHandler, element); }

function offCut(cutHandler, element) { this.offEvent(CUT_EVENT_TYPE, cutHandler, element); }

function onCopy(copyHandler, element) { this.onEvent(COPY_EVENT_TYPE, copyHandler, element); }

function offCopy(copyHandler, element) { this.offEvent(COPY_EVENT_TYPE, copyHandler, element); }

function onPaste(pasteHandler, element) { this.onEvent(PASTE_EVENT_TYPE, pasteHandler, element); }

function offPaste(pasteHandler, element) { this.offEvent(PASTE_EVENT_TYPE, pasteHandler, element); }

function getSelectionStart() { return this.domElement.selectionStart; }

function getSelectionEnd() { return this.domElement.selectionEnd; }

function setSelectionStart(selectionStart) { this.domElement.selectionStart = selectionStart; }

function setSelectionEnd(selectionEnd) { this.domElement.selectionEnd = selectionEnd; }

function select() { this.domElement.select(); }

const selectionMixins = {
  onCut,
  offCut,
  onCopy,
  offCopy,
  onPaste,
  offPaste,
  getSelectionStart,
  getSelectionEnd,
  setSelectionStart,
  setSelectionEnd,
  select
};

export default selectionMixins;
