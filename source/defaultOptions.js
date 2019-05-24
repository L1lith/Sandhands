//prettier-ignore
const defaultOptions = new Map([
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

export default defaultOptions
