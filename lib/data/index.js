/*eslint camelcase:1*/

'use strict';

var fs = require('fs');
var path = require('path');

var LANGUAGES = ['ro', 'ru', 'bg', 'hu', 'cs', 'pl', 'it', 'en'];
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

var DATA = {};

var builders = {
	invalid_concepts: function(item) {
		return new RegExp('^' + item + '$', 'i');
	},
	invalid_prefixes: function(item) {
		return new RegExp('^' + item + ' ', 'i');
	},
	known_concepts: function(item) {
		return {
			reg: new RegExp('(\\b|\\s)' + item + '(\\b|\\s)', 'ig'),
			name: item
		};
	},
	partial_concepts: function(item) {
		return new RegExp('^' + item + '$', 'i');
	},
	valid_prefixes: function(item) {
		return new RegExp('(\\b|\\s)' + item + ' $', 'i');
	},
	valid_suffixes: function(item) {
		return new RegExp('^ ' + item + '(\\b|\\s)', 'i');
	}
};

function load(lang, name) {
	if (LANGUAGES.indexOf(lang) < 0) {
		throw new Error('Invalid language: ' + lang);
	}
	if (NAMES.indexOf(name) < 0) {
		throw new Error('Invalid name: ' + name);
	}
	var file = path.join(__dirname, lang, name + '.json');
	var content = fs.readFileSync(file, 'utf8');
	return JSON.parse(content);
}

function build(lang, name) {
	var data = load(lang, name);

	var builder = builders[name];
	if (builder) {
		data = data.map(builder);
	}

	return data;
}

exports.getConnectWords = function(lang) {
	return exports.get(lang, 'connect_words');
};

exports.getSplitWords = function(lang) {
	return exports.get(lang, 'split_words');
};

exports.getInvalidConcepts = function(lang) {
	return exports.get(lang, 'invalid_concepts');
};

exports.getInvalidPrefixes = function(lang) {
	return exports.get(lang, 'invalid_prefixes');
};

exports.getKnownConcepts = function(lang) {
	return exports.get(lang, 'known_concepts');
};

exports.getPartialConcepts = function(lang) {
	return exports.get(lang, 'partial_concepts');
};

exports.getValidPrefixes = function(lang) {
	return exports.get(lang, 'valid_prefixes');
};

exports.getValidSuffixes = function(lang) {
	return exports.get(lang, 'valid_suffixes');
};

exports.get = function(lang, name) {
	var key = lang + '_' + name;
	if (!DATA[key]) {
		DATA[key] = build(lang, name);
	}
	return DATA[key];
};

exports.getLanguages = function() {
	return LANGUAGES;
};

exports.getNames = function() {
	return NAMES;
};
