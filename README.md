# concepts-data

Data used by [concepts-parser](https://github.com/entitizer/concepts-parser-js).

## Data types/names

- **connect_words** - words that (may) connect concepts: *for*, *of*, etc.;
- **invalid_concepts** (*accentless*) - known invalid words/concepts: *Brown*, *all*, etc.;
- **invalid_prefixes** (*accentless*) - words that (can) connect concepts: *In London*, **In** is an invalid prefix;
- **known_concepts** - irregular known concepts: *Dancing with the stars*;
- **partial_concepts** (*accentless*) - words/concepts that are invalid alone: *Barack*, *Vladimir*, etc.;
- **split_words** - words that (can) split concepts: *and*, *-*, etc.;
- **valid_prefixes** - valid concept prefixes;
- **valid_suffixes** - valid concept suffixes: Mumbai City **district**, *island*;

## Usage

```
const data = require('concept-data');

// get split words for English:
const rules = data.getSplitWords('en');
```

## Changelog

#### v0.4.0 - April 19, 2018

- removed data `rename_concepts`
- data values can be `string`[] or `RegExp`[]
- `ava` tests
- node v4

#### v0.3.2 - March 26, 2018

- added stopwords to `invalid_concepts`

#### v0.3.0 - March 9, 2017

- TypeScript code

#### v0.2.1 - August 20, 2016

- fix empty data file issue

#### v0.2.0 - August 9, 2016

- engine >= node4
- es6 syntax

#### v0.1.2 - December 15, 2015

- build 1 regExp from a list of data items. better performance
- fix small errors

#### v0.1.0 - November 28, 2015

- renamed: **concept-data** to **concepts-data**;
- fix concept split bug.

#### v0.0.3 - October 4, 2015

- keep data files in txt format;
- added **rename_concepts** - set a correct/known name for a concept;
- get data by *lang* and **country** codes.
