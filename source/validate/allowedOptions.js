const universal = ["equalTo", "validate"]

const primitives = new Map([
  [String, ["regex", "minLength", "maxLength", "length", "allowed", "banned", "lowercase", "uppercase", "email", "whitespace"]],
  [Number, ["allowNaN", "finite", "min", "max", "even", "odd"]]
])

const object = ["strict"]
const array = ["strict", "firstAsStandard"]

module.exports = {universal, primitives, object, array}