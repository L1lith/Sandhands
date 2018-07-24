const primitives = new Map([
  [String, {
    minLength: 1
  }],
  [Number, {
    allowNaN: false,
    finite: true
  }]
])
const array = {
  
}
const object = {

}

module.exports = {primitives, array, object}
