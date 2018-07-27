const valid = require('../../source/exports/valid')
const chai = require('chai')
const {assert} = chai

const expectedMatches = [
  ['words', String, true, 'matches by default for a string longer than 1'],
  ['', String, false, 'doesn\'t match by default for empty strings'],
  ['words', {_: String, lowercase: true}, true, 'matches lowercase strings with the lowercase flag'],
  ['SANDWICH', {_: String, lowercase: true}, false, 'doesn\'t match uppercase strings for the uppercase flag'],
  ['SALMON', {_: String, uppercase: true}, true, 'matches uppercase strings with the uppercase flag'],
  ['tuna', {_: String, uppercase: true}, false, 'doesn\'t match lowercase strings for the uppercase flag'],
  ['tricky', {_: String, whitespace: false}, true, 'matches strings without whitespace for whitespace false'],
  ['fish face', {_: String, whitespace: false}, false, 'doesn\'t match strings with whitespace for whitespace true'],
  ['goku@gmail.com', {_: String, email: true}, true, 'matches email strings flagged as emails'],
  ['basdfwawfe', {_: String, email: true}, false, 'doesn\'t match random strings as emails'],
  ['', {_: String, email: true, minLength: 0}, false, 'doesn\'t match empty strings as meails']
]

describe('String Matching', ()=>{
  expectedMatches.forEach(([input, format, expectedResult, description])=>{
    it(description, ()=> assert.equal(valid(input, format), expectedResult))
  })
})
