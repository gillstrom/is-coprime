'use strict';
var test = require('ava');
var fn = require('./');

test('Should return true', function (t) {
	t.true(fn(2, 5));
	t.true(fn(12, 25));
	t.true(fn(13, 17));
	t.true(fn(1, 5));
	t.end();
});

test('Should return false', function (t) {
	t.false(fn(6, 12));
	t.false(fn(12, 21));
	t.false(fn(3, 6));
	t.false(fn(25, 50));
	t.false(fn(2.5, 5.5));
	t.end();
});
