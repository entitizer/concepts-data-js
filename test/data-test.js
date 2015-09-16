'use strict';

var data = require('../lib');
var assert = require('assert');

var LANGUAGES = ['bg', 'hu', 'cs', 'ru', 'pl', 'it', 'en'];
var NAMES = [
	'connect_words',
	'split_words',
	'invalid_concepts',
	'invalid_prefixes',
	'known_concepts',
	'partial_concepts',
	'valid_prefixes',
	'valid_suffixes'
];

describe('data', function() {
	it('language', function() {
		LANGUAGES.forEach(function(lang) {
			NAMES.forEach(function(name) {
				// console.log('LANG', lang, 'NAME', name);
				var result = data.get(lang, name);
				assert.ok(result);
				// console.log(result);
				// if (result) {
				// 	console.log('OK!');
				// } else {
				// 	console.log('FAIL!');
				// }
			});
		});
	});
});
