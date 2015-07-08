'use strict';

/**
 * Module to nxify the path to your images
 *
 * For example: nxify("/path/to/your/image.jpg"); // --> "/path/to/your/image@2x.jpg";
 *
 * @param {String} src   the path to be nxified
 * @param {Number} [nx=2]   pixel ratio multiplier
 * @return {String}   nxified path
 */
module.exports = function (src, nx) {
  nx = (typeof nx == 'undefined') ? 2 : nx;
  return (src || '').replace(/(.+)(\.\w+)$/, '$1@' + nx + 'x$2');
};
