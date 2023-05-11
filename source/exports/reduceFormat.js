import resolveFormat from './resolveFormat'
import reconstructFormat from './reconstructFormat'

function reduceFormat(...args) {
  return reconstructFormat(resolveFormat(...args))
}

export default reduceFormat
