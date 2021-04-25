const { assert } = require('chai')
const { resolveFormat } = require('../dist/Sandhands-commonjs.js')

function testResolve(before, after) {
  assert.deepEqual(resolveFormat(before), after)
}

describe('resolveFormat function', () => {
  it('resolve an arbitrarily deep repetition of format inlining correctly', () => {
    testResolve(
      { _: { _: { _: Object } } },
      { format: Object, options: {}, ANDFormats: [], NOTFormats: [], ORFormats: [] }
    )
  })
  it('resolve an inlined format with options correctly', () => {
    testResolve(
      { _: Number, min: 0 },
      { format: Number, options: { min: 0 }, ANDFormats: [], NOTFormats: [], ORFormats: [] }
    )
  })
  it('resolve an object with options and properties correctly', () => {
    testResolve(
      { _: { color: String }, strict: false },
      {
        format: { color: String },
        options: { strict: false },
        ANDFormats: [],
        NOTFormats: [],
        ORFormats: []
      }
    )
  })
})
