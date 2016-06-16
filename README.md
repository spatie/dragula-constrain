# dragula-constrain

[![Latest Version on NPM](https://img.shields.io/npm/v/dragula-constrain.svg?style=flat-square)](https://npmjs.com/package/dragula-constrain)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

Constrain mirrors to their containers with [Dragula](https://bevacqua.github.io/dragula/), similar to jQuery UI draggable's [contain](https://jqueryui.com/draggable/).

Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## Install

You can install the package via npm:

```bash
$ npm install dragula-constrain
```

## Browser support

Since `dragula-constrain` supports all modern browsers, and IE11+. IE support can be improved by polyfilling `MutationObserver`. If `MutationObserver` isn't available in the browser, `constrain` will silently fail without breaking the rest of your code, since it's general use case is progressive enhancement.

## Usage

```es6
import dragula from 'dragula';
import constrain from 'dragula-constrain';

// Set up `myContainer` and `options`..?

const dragula = dragula(myContainer, options);

constrain(dragula);
```

That's it! The mirror shouldn't spill out of the container anymore while dragging.

This package assumes that the mirror has a fixed position, and the container is non-fixed. It currently only supports constraining mirrors to dragula's first container (custom container support might get implemented in the future).

`constrain` will create a `MutationObserver` on the mirror, and ensure the `left` and `top` properties never leave the bounds of the container. This solution is quite hacky, but necessary since Dragula doesn't provide any hooks or events to constrain the mirror's movement.

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

``` bash
$ npm run test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please contact [Sebastian De Deyne](https://github.com/sebastiandedeyne) instead of using the issue tracker.

## Credits

- [Sebastian De Deyne](https://github.com/sebastiandedeyne)
- [All Contributors](../../contributors)

## About Spatie
Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
