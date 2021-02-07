import firstError from '../functions/firstError'
import resolveInputs from '../functions/resolveInputs'

function sanitizeObject(sanitizeAny, input, format, options) {
  let { strict } = options
  if (format === Object) {
    format = {}
    if (typeof strict != 'boolean') strict = false
  }
  if (typeof input != 'object' || input === null || Array.isArray(input)) return 'Expected Object'

  const errors = {}
  const { standard, allOptional, optionalProps = [], bannedProps = [] } = options
  const classInput = options.class
  if (options.hasOwnProperty('class')) {
    const className = classInput.constructor.name
    if (!(input instanceof classInput))
      return (
        'Expected a member of the provided class' +
        (typeof className == 'string' && className.length > 1 ? ` "${className}"` : '')
      )
  }
  if (typeof strict != 'boolean' && options.hasOwnProperty('standard')) strict = false
  if (typeof strict != 'boolean') strict = true
  const inputKeys = Object.keys(input)

  if (strict === true || options.hasOwnProperty('standard')) {
    inputKeys.forEach(inputKey => {
      if (!format.hasOwnProperty(inputKey)) {
        if (options.hasOwnProperty('standard')) {
          const valid = sanitizeAny(input[inputKey], standard)
          if (valid !== null) errors[inputKey] = valid
        } else {
          errors[inputKey] = `Invalid Property "${inputKey}"`
        }
      }
    })
  }

  if (options.hasOwnProperty('bannedProps')) {
    bannedProps.forEach(bannedProp => {
      if (input.hasOwnProperty(bannedProp) && !errors[bannedProp])
        errors[bannedProp] = `Invalid Property "${bannedProp}"`
    })
  }

  Object.entries(format).forEach(([childKey, childFormat]) => {
    if (!errors[childKey]) {
      const inlineOptions = resolveInputs(childFormat)
      childFormat = inlineOptions.format
      const childOptions = inlineOptions.options
      if (Object.prototype.hasOwnProperty.call(input, childKey)) {
        const childError = sanitizeAny(input[childKey], childFormat, childOptions)
        if (childError !== null) errors[childKey] = childError
      } else if (
        allOptional !== true &&
        strict === true &&
        typeof childKey == 'string' &&
        !optionalProps.includes(childKey)
      ) {
        errors[childKey] = `Property ${childKey} Required`
      }
    }
  })

  if (Object.keys(errors).length < 1) return null
  return errors
}

export default sanitizeObject
