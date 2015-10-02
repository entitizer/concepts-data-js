'use strict';

var data = require('../lib');
var assert = require('assert');

var LANGUAGES = data.getLanguages();
var NAMES = data.getNames();

function getData(name, lang, country) {
	try {
		return data.get(name, lang, country);
	} catch (e) {
		console.log('error on: ', lang, name, e.message);
		throw e;
	}
}

describe('data', function() {
	it('validation', function() {
		LANGUAGES.forEach(function(lang) {
			NAMES.forEach(function(name) {
				var result = getData(name, lang);
				assert.ok(result);
				var countries = data.getCountries(lang);
				countries.forEach(function(country) {
					result = getData(name, lang, country);
					assert.ok(result);
				});
			});
		});
	});
});
