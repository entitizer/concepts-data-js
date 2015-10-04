# concept-data

Data used by [concept-extractor](https://github.com/Mitica/concept-extractor-js).

## Data types/names

- **connect_words** - words that (can) connect concepts: *for*, *of*, etc.;
- **invalid_concepts** (*accentless*) - known invalid words/concepts: *Brown*, *all*, etc.;
- **invalid_prefixes** (*accentless*) - words that (can) connect concepts: *In London*, **In** is an invalid prefix;
- **known_concepts** - irregular known concepts: *Dancing with the stars*;
- **partial_concepts** (*accentless*) - words/concepts that are invalid alone: *Barack*, *Vladimir*, etc.;
- **split_words** - words that (can) split concepts: *and*, *-*, etc.;
- **valid_prefixes** - valid concept prefixes;
- **valid_suffixes** - valid concept suffixes: Mumbai City **district**, *island*;
- **rename_concepts** - rename local/incorect/abstract concepts: Moldova -> Republic of Moldova, etc.;
