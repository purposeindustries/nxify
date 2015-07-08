'use strict';

var nxify = require('..');

describe('nxify', function () {

  it('should end with @2x', function () {
    nxify('/path/to/image.jpg').should.equal('/path/to/image@2x.jpg');
  });

  it('should end with @3x', function () {
    nxify('/path/to/image.jpg', 3).should.equal('/path/to/image@3x.jpg');
  });

  it('should return empty string', function () {
    nxify().should.equal('');
    nxify('').should.equal('');
  });

  it('should be extension independent', function () {
    nxify('image.png').should.equal('image@2x.png');
    nxify('image.gif').should.equal('image@2x.gif');
    nxify('image.jpeg').should.equal('image@2x.jpeg');
    nxify('image.webp').should.equal('image@2x.webp');
  });
});
