
import * as data from './index';
import test from 'ava';

const LANGUAGES = data.getLanguages();
const NAMES = data.getNames();

function getData(name, lang) {
    try {
        return data.get(name, lang);
    } catch (e) {
        console.log('error on: ', lang, name, e.message);
        throw e;
    }
}



LANGUAGES.forEach(function (lang) {
    NAMES.forEach(function (name) {
        test(`validate ${lang}: ${name}`, t => {
            let result = getData(name, lang);
            t.is(true, !!result);
            if (result.length === 0) {
                console.log('No items for', name, lang);
            }
        });
    });
});
