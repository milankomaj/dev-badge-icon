'use strict';

const FS = require('fs');
const PATH = require('path');
const { optimize } = require('svgo');
const filepath = PATH.resolve(__dirname, 'base64/uptimerobot.svg');
const config = {
  plugins: [
    'cleanupAttrs',
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeHiddenElems',
    'removeEmptyText',
    'removeEmptyContainers',
    // 'removeViewBox',
    'cleanupEnableBackground',
    'convertStyleToAttrs',
    'convertColors',
    'convertPathData',
    'convertTransform',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'removeUnusedNS',
    'cleanupIDs',
    'cleanupNumericValues',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    // 'removeRasterImages',
    'mergePaths',
    'mergeStyles',
    'convertShapeToPath',
    'sortAttrs',
    'removeDimensions',
    { name: 'removeAttrs', params: { attrs: '(stroke|stroke-width|version|x|y|enable-background|space)' } },
  ],
};

FS.readFile(filepath, 'utf8', function (err, data) {
  if (err) {
    throw err;
  }

  const result = optimize(data, { path: filepath, ...config });

  console.log(result);

  // {
  //     // optimized SVG data string
  //     data: '<svg width="10" height="20">test</svg>'
  //     // additional info such as width/height
  //     info: {
  //         width: '10',
  //         height: '20'
  //     }
  // }
});
