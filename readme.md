# is-coprime [![Build Status](https://travis-ci.org/gillstrom/is-coprime.svg?branch=master)](https://travis-ci.org/gillstrom/is-coprime)

> Check if two integers are [coprime](https://en.wikipedia.org/wiki/Coprime_integers).

Two integers are said to be relatively prime, mutually prime, or coprime if the only positive integer that evenly divides both of them is 1.


## Install

```
$ npm install --save is-coprime
```


## Usage

```js
const isCoprime = require('is-coprime');

isCoprime(2, 5);
//=> true

isCoprime(12, 21);
//=> false
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
