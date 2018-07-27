const testValid = require('../functions/testValid')

const expectedMatches = [
  ['words', String, true, 'matches by default for a string longer than 1'],
  ['', String, false, 'doesn\'t match by default for empty strings'],
  [[-1, 0, 1, 12], String, false, 'doesn\'t match numbers as strings'],
  [true, String, false, 'doesn\'t match booleans as strings'],
  [undefined, String, false, 'doesn\'t match undefined as a string'],
  [null, String, false, 'doesn\'t match null as a string'],
  [{}, String, false, 'doesn\'t match objects as strings'],
  [[], String, false, 'doesn\'t match arrays as strings', {spreadArray: false}],
  ['words', {_: String, lowercase: true}, true, 'matches lowercase strings with the lowercase flag'],
  ['SANDWICH', {_: String, lowercase: true}, false, 'doesn\'t match uppercase strings for the uppercase flag'],
  ['SALMON', {_: String, uppercase: true}, true, 'matches uppercase strings with the uppercase flag'],
  ['tuna', {_: String, uppercase: true}, false, 'doesn\'t match lowercase strings for the uppercase flag'],
  ['tricky', {_: String, whitespace: false}, true, 'matches strings without whitespace for whitespace false'],
  ['fish face', {_: String, whitespace: false}, false, 'doesn\'t match strings with whitespace for whitespace true'],
  ['goku@gmail.com', {_: String, email: true}, true, 'matches email strings flagged as emails'],
  ['basdfwawfe', {_: String, email: true}, false, 'doesn\'t match random strings as emails'],
  ['', {_: String, email: true, minLength: 0}, false, 'doesn\'t match empty strings as emails'],
  ['banana boat', {_: String, allowed: "abnot "}, true, 'matches a string contained in the allow flag'],
  ['horse radish', {_: String, allowed: "abnot "}, false, 'doesn\'t match a string not contained in the allow flag'],
  ['biggie smalls', {_: String, banned: 'xyz'}, true, 'matches string that don\'t contain characters flagged as banned'],
  ['Extremely Snazzy Xylophone', {_: String, banned: 'xyz'}, false, 'rejects strings that contain characters flagged as banned'],
  ['Once upon a time...', {_: String, regex: /upon/}, true, 'matches a basic regex search with a matching string'],
  ['...In a land far far away', {_: String, regex: /upon/}, false, 'doesn\'t match a basic regex search with a non-matching string'],
  ['v a p o r w a v e', {_: String, minLength: 5}, true, 'matches a long enough string string for the minLength flag'],
  ['meep', {_: String, minLength: 5}, false, 'doesn\'t match a too short string string for the minLength flag'],
  ['Soup', {_: String, maxLength: 10}, true, 'matches a short enough string for the maxLength flag'],
  ['Soup & Salad', {_: String, maxLength: 10}, false, 'doesn\'t match a too long string for the maxLength flag'],
  ['Rainbow', {_: String, length: 7}, true, 'matches a correct length string for the length flag'],
  ['Rainbows', {_: String, length: 7}, false, 'doesn\'t match a incorrect length string for the length flag'],
]

describe('String Matching', ()=>{
  testValid(expectedMatches)
})
