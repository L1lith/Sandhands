module.exports = new Map([
  [String, {
    minLength: 1
  }],
  [Number, {
    allowNaN: false,
    finite: true
  }],
  [Boolean, {

  }],
  [null, {

  }],
  [undefined, {

  }],
  [Array, {

  }],
  [Object, {
    strict: true
  }]
])
