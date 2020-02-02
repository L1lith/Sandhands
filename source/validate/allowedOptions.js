const universal = Object.freeze(['equalTo', 'validate'])

//prettier-ignore
let primitives = new Map([
  [String, Object.freeze(["regex", "minLength", "maxLength", "length", "allowed", "banned", "lowercase", "uppercase", "email", "whitespace"])],
  [Number, Object.freeze(["allowNaN", "finite", "min", "max", "even", "odd", "integer"])]
])
Object.defineProperties(primitives, {
  set: {
    get: () => {throw new Error("cannot Modify")},
    configurable: false
  },
  delete: {
    get: () => {throw new Error("cannot Modify")},
    configurable: false
  }
})
Object.freeze(primitives)

const object = Object.freeze(['strict'])
const array = Object.freeze(['strict', 'firstAsStandard', 'minLength', 'maxLength', 'length'])

export default Object.freeze({ universal, primitives, object, array })
