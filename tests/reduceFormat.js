const { assert } = require('chai')
const { reduceFormat } = require('../dist/Sandhands')

function testReduce(before, after) {
  assert.deepEqual(reduceFormat(before), after)
}

describe('reduceFormat function', () => {
  it('reduces an arbitrarily deep repetition of format inlining correctly', () => {
    testReduce({ _: { _: { _: Object } } }, Object)
  })
  it('reduces an inlined format with options correctly', () => {
    testReduce({ _: Number, min: 0 }, { _: Number, min: 0 })
  })
  it('reduces an object with options and properties correctly', () => {
    testReduce({ _: { color: String }, strict: false }, { _: { color: String }, strict: false })
  })
})
