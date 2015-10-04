'use strict';

var fs = require('fs');
var data = require('../lib');
var LANGUAGES = data.getLanguages();
var NAMES = data.getNames();
var path = require('path');

function writeFile(file, content) {
	fs.writeFileSync(file, content);
	// console.log('writing to file', file);
}

function readFile(file) {
	var content;
	try {
		content = fs.readFileSync(file, 'utf8');
	} catch (e) {
		console.log('No file', file);
		return null;
	}
	return JSON.parse(content).join('\n');
}

function deleteFile(file) {
	try {
		fs.unlinkSync(file);
	} catch (e) {}
}

function start() {

	LANGUAGES.forEach(function(lang) {
		NAMES.forEach(function(name) {
			var file = path.join(__dirname, '../lib/data', lang, name + '.json');
			var data = readFile(file);
			if (data) {
				writeFile(file.replace(/\.json$/, '.txt'), data);
			}
			deleteFile(file);
		});
	});

}

start();
