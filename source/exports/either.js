// import validateAny from '../validate/any'
// import sanitizeAny from '../sanitize/any'
//
// const formatError = formats.map(format => validateAny(format)).find(value => value !== null)
// if (formatError !== null) throw formatError
// return input => {
//   const errors = []
//   for (let i = 0; i < formats.length; i++) {
//     const error = sanitizeAny(input)
//     if (error === null) {
//       return null
//     }
//   }
// }
import Either from '../Either'

function either(formats) {
  return new Either(formats)
}

export default either
