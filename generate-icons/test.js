'use strict';

const FS = require('fs');
const PATH = require('path');
const { optimize } = require('svgo');
const filepath = PATH.resolve(__dirname, 'icons/REPLACE');
const config = {
  plugins: [
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
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'removeUnusedNS',
    'removeOffCanvasPaths',
    'removeDimensions',
    // 'removeViewBox',
    'cleanupAttrs',
    'cleanupEnableBackground',
    'convertStyleToAttrs',
    'convertColors',
    'convertPathData',
    'convertTransform',
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
    'reusePaths',
    { name: 'removeAttrs', params: { attrs: '(stroke|stroke-width|version|x|y|enable-background|space|fill)' } },
    { name: 'addAttributesToSVGElement', params: { attribute: 'fill="#fff"' } },
  ],
};

FS.readFile(filepath, 'utf8', function (err, data) {
  if (err) {
    throw err;
  }

  const result = optimize(data, { path: filepath, ...config });

  console.log(result);


});
