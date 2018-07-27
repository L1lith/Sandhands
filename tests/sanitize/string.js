const valid = require('../../source/exports/valid')
const chai = require('chai')
const {assert} = chai

const expectedMatches = [
  ['words', String, true, 'matches by default for a string longer than 1'],
  ['', String, false, 'doesn\'t match by default for empty strings'],
  [[-1, 0, 1, 12], String, false, 'doesn\'t match numbers as strings'],
  [true, String, false, 'doesn\'t match booleans as strings'],
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
  ['Once upon a time...', {_: String, regex: /upon/}, true, 'matches a basic regex search with a matching string'],
  ['...In a land far far away', {_: String, regex: /upon/}, false, 'doesn\'t match a basic regex search with a non-matching string']
]

describe('String Matching', ()=>{
  expectedMatches.forEach(([input, format, expectedResult, description])=>{
    it(description, ()=> {
      if (Array.isArray(input) && input.length !== 0) {
        input.forEach(testInput => {
          assert.equal(valid(testInput, format), expectedResult)
        })
      } else {
        assert.equal(valid(input, format), expectedResult)
      }
    })
  })
})
