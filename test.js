'use strict';
var assert = require('assert');
var isCoprime = require('./');

it('Should return true', function () {
	assert.strictEqual(isCoprime(2, 5), true);
	assert.strictEqual(isCoprime(12, 25), true);
	assert.strictEqual(isCoprime(13, 17), true);
	assert.strictEqual(isCoprime(1, 5), true);
});

it('Should return false', function () {
	assert.strictEqual(isCoprime(6, 12), false);
	assert.strictEqual(isCoprime(12, 21), false);
	assert.strictEqual(isCoprime(3, 6), false);
	assert.strictEqual(isCoprime(25, 50), false);
	assert.strictEqual(isCoprime(2.5, 5.5), false);
});
