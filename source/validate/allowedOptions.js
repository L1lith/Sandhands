const universal = ['equalTo', 'validate']

//prettier-ignore
const primitives = new Map([
  [String, ["regex", "minLength", "maxLength", "length", "allowed", "banned", "lowercase", "uppercase", "email", "whitespace"]],
  [Number, ["allowNaN", "finite", "min", "max", "even", "odd"]]
])

const object = ['strict']
const array = ['strict', 'firstAsStandard', 'minLength', 'maxLength', 'length']

export default { universal, primitives, object, array }
