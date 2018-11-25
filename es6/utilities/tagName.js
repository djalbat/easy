'use strict';

function isSVGTagName(tagName) {
  return svgTagNames.includes(tagName);
}

module.exports = {
  isSVGTagName
};

const svgTagNames = [
  'altGlyph', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'animation', 'audio',
  'canvas', 'circle', 'clipPath', 'color-profile', 'cursor',
  'defs', 'desc', 'discard',
  'ellipse',
  'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-uri', 'foreignObject',
  'g', 'glyph', 'glyphRef',
  'handler', 'hatch', 'hatchpath', 'hkern',
  'iframe', 'image', 'line', 'linearGradient',
  'listener',
  'marker', 'mask', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'metadata', 'missing-glyph', 'mpath',
  'path', 'pattern', 'polygon', 'polyline', 'prefetch',
  'radialGradient', 'rect',
  'script', 'set', 'solidcolor', 'stop', 'style', 'svg', 'switch', 'symbol',
  'tbreak', 'text', 'textArea', 'textPath', 'title', 'tref', 'tspan',
  'unknown', 'use',
  'video', 'view', 'vkern'
];
