const { assert } = require('chai')
const { resolveFormat, reconstructFormat } = require('../dist/Sandhands')

function testReconstruct(before, after) {
  assert.deepEqual(reconstructFormat(before), after)
}

describe('reconstructFormat function', () => {
  it("resolve an arbitrarily deep repetition of format inlining correctly, then reconstruct it into it's simplest form", () => {
    testReconstruct(resolveFormat({ _: { _: { _: Object } } }), Object)
  })
  it("adds options to a resolved format that's been modified", () => {
    const resolvedFormat = resolveFormat(Object)
    resolvedFormat.options.strict = true
    testReconstruct(resolvedFormat, { _: Object, strict: true })
  })
})
