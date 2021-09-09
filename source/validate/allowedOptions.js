const universal = Object.freeze([
  'equalTo',
  'validate',
  'nullable',
  'deepEqualTo',
  'equalToOne',
  'deepEqualToOne'
])

//prettier-ignore
let primitives = new Map([
  [String, Object.freeze(["trimmed", "regex", "minLength", "maxLength", "length", "allowed", "banned", "lowercase", "uppercase", "email", "whitespace"])],
  [Number, Object.freeze(["allowNaN", "finite", "min", "max", "even", "odd", "integer"])]
])
Object.defineProperties(primitives, {
  set: {
    get: () => {
      throw new Error('cannot Modify')
    },
    configurable: false
  },
  delete: {
    get: () => {
      throw new Error('cannot Modify')
    },
    configurable: false
  }
})
Object.freeze(primitives)

const object = Object.freeze([
  'strict',
  'standard',
  'allOptional',
  'optionalProps',
  'bannedProps',
  'class'
])
const array = Object.freeze([
  'strict',
  'firstAsStandard',
  'minLength',
  'maxLength',
  'length',
  'standard'
])

const functionOptions = Object.freeze([])

export default Object.freeze({ universal, primitives, object, array, function: functionOptions })
