
[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/support-ukraine.svg?t=1" />](https://supportukrainenow.org)

# dragula-constrain

[![Latest Version on NPM](https://img.shields.io/npm/v/dragula-constrain.svg?style=flat-square)](https://npmjs.com/package/dragula-constrain)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

Constrain mirrors to their containers with [Dragula](https://bevacqua.github.io/dragula/), similar to jQuery UI draggable's [contain](https://jqueryui.com/draggable/).

Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## Support us

[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/dragula-constrain.jpg?t=1" width="419px" />](https://spatie.be/github-ad-click/dragula-constrain)

We invest a lot of resources into creating [best in class open source packages](https://spatie.be/open-source). You can support us by [buying one of our paid products](https://spatie.be/open-source/support-us).

We highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using. You'll find our address on [our contact page](https://spatie.be/about-us). We publish all received postcards on [our virtual postcard wall](https://spatie.be/open-source/postcards).

## Postcardware

You're free to use this package (it's [MIT-licensed](LICENSE.md)), but if it makes it to your production environment you are required to send us a postcard from your hometown, mentioning which of our package(s) you are using.

Our address is: Spatie, Kruikstraat 22, 2018 Antwerp, Belgium.

The best postcards will get published on the open source page on our website.

## Install

You can install the package via npm:

```bash
$ npm install dragula-constrain
```

## Browser support

`dragula-constrain` supports at least all modern browsers, starting from IE10.

## Usage

```es6
import dragula from 'dragula';
import constrain from 'dragula-constrain';

// Set up `myContainer` and `options`...

const dragula = dragula(myContainer, options);

constrain(dragula);
```

That's it! The mirror shouldn't spill out of the container anymore while dragging.

This package assumes that the mirror has a fixed position, and the container is non-fixed. It currently only supports constraining mirrors to Dragula's first container (custom container support might get implemented in the future).

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

``` bash
$ npm run test
```

## Contributing

Please see [CONTRIBUTING](https://github.com/spatie/.github/blob/main/CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please contact [Sebastian De Deyne](https://github.com/sebastiandedeyne) instead of using the issue tracker.

## Credits

- [Sebastian De Deyne](https://github.com/sebastiandedeyne)
- [All Contributors](../../contributors)

## About Spatie
Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
