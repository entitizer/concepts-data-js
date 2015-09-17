'use strict';

var data = require('../lib');
var assert = require('assert');

var LANGUAGES = data.getLanguages();
var NAMES = data.getNames();

describe('data', function() {
	it('validation', function() {
		LANGUAGES.forEach(function(lang) {
			NAMES.forEach(function(name) {
				var result;
				try {
					result = data.get(lang, name);
				} catch (e) {
					console.log('error on: ', lang, name, e.message);
					throw e;
				}
				assert.ok(result);
			});
		});
	});
});
