"use strict";

import { getParentElement, getAscendantElements, getNextSiblingElement, getPreviousSiblingElement } from "../mixins/element";

const textElementMixins = {
  getParentElement,
  getAscendantElements,
  getNextSiblingElement,
  getPreviousSiblingElement
};

export default textElementMixins;
