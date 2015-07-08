# nxify

Nxify allows you to modify your image urls based on the pixel ratio of the user's device.

## Installation

```bash
$ npm install nxify
```

## Usage  

```js

var nxify = require('nxify');

var url = '/path/to/your/image.jpg';

if (window.devicePixelRatio > 1) {
  url = nxify(url);
}

console.log(url); // output: 'path/to/your/image@2x.jpg'

```

You can set your custom pixel ratio multiplier as the second parameter:

```js

var nxify = require('nxify');

var url = nxify('/path/to/your/image.png', 3);

console.log(url); // output: 'path/to/your/image@3x.png'

```

## Arguments

It waits for two arguments

- path (String)   path to the image you'd like to modify
- [pixelRatio=2]  the pixel ratio multiplier (default: 2)

## Tests

```bash
$ npm test
```

## License

  MIT
