
const stopwords = require('stopwords-json');
const atonic = require('atonic');
const getLanguages = require('../index').getLanguages;
const fs = require('fs');
const join = require('path').join;

for (let lang of getLanguages()) {
    const file = join(__dirname, '..', '..', 'data', lang, 'invalid_concepts.txt');
    let invalidConcepts = fs.readFileSync(file, 'utf8').split(/\n+/g);
    invalidConcepts = invalidConcepts.concat(stopwords[lang]);
    invalidConcepts = invalidConcepts.filter(item => !!item && item.trim().length);
    invalidConcepts = invalidConcepts.map(item => atonic.lowerCase(item.toLowerCase().trim()));
    // uniq
    invalidConcepts = invalidConcepts.filter((value, index, self) => self.indexOf(value) === index);
    invalidConcepts = invalidConcepts.sort();
    fs.writeFileSync(file, invalidConcepts.join('\n'), 'utf8');
}
