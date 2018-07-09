const allowedArrayOptions = ['strict']
const allowedObjectOptions = [ 'strict', 'optional' ]

const allowedPrimitiveOptions = new Map([
  [String, ['allowed', 'banned', 'minLength', 'maxLength', 'lowercase', 'uppercase', 'equalTo', 'email', 'whitespace', 'regex']],
  [Number, ['min', 'max', 'even', 'odd', 'allowNaN', 'finite', 'equalTo']],
  [Boolean, ['equalTo']]
])

function validFormat(format, options={}) {
  let errors = []
  let allowedOptions = []

  while (format.hasOwnProperty('_')) {
    const newOptions = format
    delete newOptions._
    options = {...newOptions, ...options}
    format = format._
  }

  if (Array.isArray(format)) {
    allowedOptions = allowedArrayOptions
  } else if (typeof format == 'object' && format !== null) {
    allowedOptions = allowedObjectOptions
  } else if (allowedPrimitiveOptions.has(format)) {
    allowedOptions = allowedPrimitiveOptions.get(format)
  }

  return errors
}

module.exports = validFormat
