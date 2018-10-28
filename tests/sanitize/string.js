const testValid = require('../functions/testValid')

const expected = [
  // INPUT, FORMAT, EXPECTED VALID, DESCRIPTION, TESTOPTIONS
  ['words', String, true, 'by default for a string longer than 1'],
  ['', String, false, 'by default for empty strings'],
  [[-1, 0, 1, 12], String, false, 'numbers as strings'],
  [true, String, false, 'booleans as strings'],
  [undefined, String, false, 'undefined as a string'],
  [null, String, false, 'null as a string'],
  [{}, String, false, 'objects as strings'],
  [[], String, false, 'arrays as strings', {spreadArray: false}],
  ['words', {_: String, lowercase: true}, true, 'lowercase strings with the lowercase flag'],
  ['SANDWICH', {_: String, lowercase: true}, false, 'uppercase strings for the uppercase flag'],
  ['SALMON', {_: String, uppercase: true}, true, 'uppercase strings with the uppercase flag'],
  ['tuna', {_: String, uppercase: true}, false, 'lowercase strings for the uppercase flag'],
  ['tricky', {_: String, whitespace: false}, true, 'strings without whitespace for whitespace false'],
  ['tr cky', {_: String, whitespace: false}, false, 'strings with whitespace for whitespace false'],
  ['fish face', {_: String, whitespace: true}, true, 'strings with whitespace for whitespace true'],
  ['goku@gmail.com', {_: String, email: true}, true, 'email strings flagged as emails'],
  ['basdfwawfe', {_: String, email: true}, false, 'random strings as emails'],
  ['', {_: String, email: true, minLength: 0}, false, 'empty strings as emails'],
  ['banana boat', {_: String, allowed: "abnot "}, true, 'a string contained in the allow flag'],
  ['horse radish', {_: String, allowed: "abnot "}, false, 'a string not contained in the allow flag'],
  ['biggie smalls', {_: String, banned: 'xyz'}, true, 'string that don\'t contain characters flagged as banned'],
  ['Extremely Snazzy Xylophone', {_: String, banned: 'xyz'}, false, 'rejects strings that contain characters flagged as banned'],
  ['Once upon a time...', {_: String, regex: /upon/}, true, 'a basic regex search with a matching string'],
  ['...In a land far far away', {_: String, regex: /upon/}, false, 'a basic regex search with a non-matching string'],
  ['v a p o r w a v e', {_: String, minLength: 5}, true, 'a long enough string string for the minLength flag'],
  ['meep', {_: String, minLength: 5}, false, 'a too short string string for the minLength flag'],
  ['Soup', {_: String, maxLength: 10}, true, 'a short enough string for the maxLength flag'],
  ['Soup & Salad', {_: String, maxLength: 10}, false, 'a too long string for the maxLength flag'],
  ['Rainbow', {_: String, length: 7}, true, 'a correct length string for the length flag'],
  ['Rainbows', {_: String, length: 7}, false, 'a incorrect length string for the length flag'],
]

describe('String Matching', ()=>{
  testValid(expected)
})
